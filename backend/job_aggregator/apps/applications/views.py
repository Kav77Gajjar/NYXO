from django.shortcuts import render
from rest_framework import status, viewsets, permissions
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.db.models import Q, Count
from django.utils import timezone
from datetime import timedelta, datetime
import logging

from .models import JobApplication, ApplicationEvent, ApplicationDocument, ApplicationReminder, ApplicationAnalytics
from .serializers import (
    JobApplicationSerializer,
    JobApplicationCreateSerializer,
    JobApplicationUpdateSerializer,
    ApplicationEventSerializer,
    ApplicationDocumentSerializer,
    ApplicationReminderSerializer,
    ApplicationAnalyticsSerializer,
    ApplicationSummarySerializer,
    ApplicationStatsSerializer,
    BulkApplicationActionSerializer
)

logger = logging.getLogger(__name__)


class JobApplicationViewSet(viewsets.ModelViewSet):
    """ViewSet for managing job applications"""
    
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Filter applications by current user"""
        return JobApplication.objects.filter(user=self.request.user)
    
    def get_serializer_class(self):
        """Return appropriate serializer based on action"""
        if self.action == 'create':
            return JobApplicationCreateSerializer
        elif self.action in ['update', 'partial_update']:
            return JobApplicationUpdateSerializer
        return JobApplicationSerializer
    
    def perform_create(self, serializer):
        """Set user when creating application"""
        serializer.save(user=self.request.user)
    
    def list(self, request, *args, **kwargs):
        """List applications with filtering and pagination"""
        queryset = self.get_queryset()
        
        # Apply filters
        status_filter = request.query_params.get('status')
        if status_filter:
            queryset = queryset.filter(status=status_filter)
        
        priority_filter = request.query_params.get('priority')
        if priority_filter:
            queryset = queryset.filter(priority=priority_filter)
        
        company_filter = request.query_params.get('company')
        if company_filter:
            queryset = queryset.filter(company_name__icontains=company_filter)
        
        search_query = request.query_params.get('search')
        if search_query:
            queryset = queryset.filter(
                Q(position_title__icontains=search_query) |
                Q(company_name__icontains=search_query) |
                Q(notes__icontains=search_query)
            )
        
        archived_filter = request.query_params.get('archived')
        if archived_filter is not None:
            queryset = queryset.filter(is_archived=archived_filter.lower() == 'true')
        
        # Order by
        order_by = request.query_params.get('order_by', '-updated_at')
        queryset = queryset.order_by(order_by)
        
        # Paginate
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def summary(self, request):
        """Get application summary statistics"""
        try:
            user_applications = self.get_queryset()
            
            # Calculate summary stats
            total_applications = user_applications.count()
            active_applications = user_applications.exclude(
                status__in=['offer_accepted', 'offer_declined', 'rejected', 'withdrawn']
            ).count()
            
            pending_interviews = user_applications.filter(
                status__in=['phone_screen', 'technical_interview', 'final_interview']
            ).count()
            
            pending_followups = user_applications.filter(
                follow_up_date__lte=timezone.now(),
                status__in=['applied', 'under_review']
            ).count()
            
            # This week and month stats
            week_ago = timezone.now() - timedelta(days=7)
            month_ago = timezone.now() - timedelta(days=30)
            
            applications_this_week = user_applications.filter(created_at__gte=week_ago).count()
            applications_this_month = user_applications.filter(created_at__gte=month_ago).count()
            
            # Status breakdown
            status_breakdown = dict(
                user_applications.values('status').annotate(
                    count=Count('status')
                ).values_list('status', 'count')
            )
            
            # Priority breakdown
            priority_breakdown = dict(
                user_applications.values('priority').annotate(
                    count=Count('priority')
                ).values_list('priority', 'count')
            )
            
            # Recent activity (last 5 events)
            recent_events = ApplicationEvent.objects.filter(
                application__user=request.user
            ).order_by('-event_date')[:5]
            
            summary_data = {
                'total_applications': total_applications,
                'active_applications': active_applications,
                'pending_interviews': pending_interviews,
                'pending_followups': pending_followups,
                'applications_this_week': applications_this_week,
                'applications_this_month': applications_this_month,
                'status_breakdown': status_breakdown,
                'priority_breakdown': priority_breakdown,
                'recent_activity': ApplicationEventSerializer(recent_events, many=True).data
            }
            
            serializer = ApplicationSummarySerializer(summary_data)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"Failed to get application summary: {str(e)}")
            return Response(
                {'error': 'Failed to retrieve application summary'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['get'])
    def stats(self, request):
        """Get detailed application statistics"""
        try:
            # Get or create analytics record
            analytics, created = ApplicationAnalytics.objects.get_or_create(
                user=request.user
            )
            
            # Recalculate metrics
            analytics.calculate_metrics()
            
            serializer = ApplicationAnalyticsSerializer(analytics)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"Failed to get application stats: {str(e)}")
            return Response(
                {'error': 'Failed to retrieve application statistics'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['post'])
    def bulk_action(self, request):
        """Perform bulk actions on applications"""
        serializer = BulkApplicationActionSerializer(
            data=request.data,
            context={'request': request}
        )
        
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            data = serializer.validated_data
            application_ids = data['application_ids']
            action = data['action']
            parameters = data.get('parameters', {})
            
            applications = JobApplication.objects.filter(
                id__in=application_ids,
                user=request.user
            )
            
            updated_count = 0
            
            if action == 'archive':
                updated_count = applications.update(is_archived=True)
            elif action == 'unarchive':
                updated_count = applications.update(is_archived=False)
            elif action == 'delete':
                updated_count = applications.count()
                applications.delete()
            elif action == 'update_status':
                updated_count = applications.update(status=parameters['status'])
            elif action == 'add_tag':
                for app in applications:
                    if parameters['tag'] not in app.tags:
                        app.tags.append(parameters['tag'])
                        app.save()
                        updated_count += 1
            elif action == 'remove_tag':
                for app in applications:
                    if parameters['tag'] in app.tags:
                        app.tags.remove(parameters['tag'])
                        app.save()
                        updated_count += 1
            
            return Response({
                'success': True,
                'action': action,
                'updated_count': updated_count,
                'total_selected': len(application_ids)
            }, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"Bulk action failed: {str(e)}")
            return Response(
                {'error': 'Bulk action failed', 'message': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class ApplicationEventViewSet(viewsets.ModelViewSet):
    """ViewSet for managing application events"""
    
    serializer_class = ApplicationEventSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Filter events by applications owned by current user"""
        return ApplicationEvent.objects.filter(application__user=self.request.user)
    
    def list(self, request, *args, **kwargs):
        """List events with optional application filter"""
        queryset = self.get_queryset()
        
        # Filter by application
        application_id = request.query_params.get('application')
        if application_id:
            queryset = queryset.filter(application__id=application_id)
        
        # Filter by event type
        event_type = request.query_params.get('event_type')
        if event_type:
            queryset = queryset.filter(event_type=event_type)
        
        # Date range filter
        date_from = request.query_params.get('date_from')
        date_to = request.query_params.get('date_to')
        
        if date_from:
            queryset = queryset.filter(event_date__gte=date_from)
        if date_to:
            queryset = queryset.filter(event_date__lte=date_to)
        
        queryset = queryset.order_by('-event_date')
        
        # Paginate
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ApplicationDocumentViewSet(viewsets.ModelViewSet):
    """ViewSet for managing application documents"""
    
    serializer_class = ApplicationDocumentSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Filter documents by applications owned by current user"""
        return ApplicationDocument.objects.filter(application__user=self.request.user)


class ApplicationReminderViewSet(viewsets.ModelViewSet):
    """ViewSet for managing application reminders"""
    
    serializer_class = ApplicationReminderSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Filter reminders by applications owned by current user"""
        return ApplicationReminder.objects.filter(application__user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        """Get upcoming reminders"""
        try:
            upcoming_reminders = self.get_queryset().filter(
                is_completed=False,
                reminder_date__gte=timezone.now(),
                reminder_date__lte=timezone.now() + timedelta(days=7)
            ).order_by('reminder_date')
            
            serializer = self.get_serializer(upcoming_reminders, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"Failed to get upcoming reminders: {str(e)}")
            return Response(
                {'error': 'Failed to retrieve upcoming reminders'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['get'])
    def overdue(self, request):
        """Get overdue reminders"""
        try:
            overdue_reminders = self.get_queryset().filter(
                is_completed=False,
                reminder_date__lt=timezone.now()
            ).order_by('reminder_date')
            
            serializer = self.get_serializer(overdue_reminders, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"Failed to get overdue reminders: {str(e)}")
            return Response(
                {'error': 'Failed to retrieve overdue reminders'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=True, methods=['post'])
    def mark_completed(self, request, pk=None):
        """Mark a reminder as completed"""
        try:
            reminder = self.get_object()
            reminder.mark_completed()
            
            serializer = self.get_serializer(reminder)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"Failed to mark reminder as completed: {str(e)}")
            return Response(
                {'error': 'Failed to mark reminder as completed'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
