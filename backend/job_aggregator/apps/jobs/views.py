from rest_framework import viewsets, permissions, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q
from .models import Job, JobMatch
from .serializers import JobSerializer
from .matching_service import job_matching_service
import logging

logger = logging.getLogger(__name__)

class JobViewSet(viewsets.ModelViewSet):
    """
    ViewSet for managing jobs
    """
    serializer_class = JobSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['location', 'job_type', 'salary_min', 'salary_max', 'experience_level']
    search_fields = ['title', 'description', 'company', 'requirements']
    ordering_fields = ['created_at', 'salary_min', 'title']
    ordering = ['-created_at']
    
    def get_queryset(self):
        """Return all jobs"""
        return Job.objects.all()
    
    @action(detail=False, methods=['post'])
    def calculate_matches(self, request):
        """Calculate job matches for the current user"""
        try:
            # Get jobs to match against
            jobs = self.get_queryset().filter(is_active=True)[:50]  # Limit for performance
            
            # Update job matches
            updated_count = job_matching_service.update_job_matches(request.user, jobs)
            
            return Response({
                'success': True,
                'message': f'Updated {updated_count} job matches',
                'updated_count': updated_count
            })
            
        except Exception as e:
            logger.error(f"Error calculating matches for user {request.user.id}: {str(e)}")
            return Response({
                'success': False,
                'error': 'Failed to calculate job matches'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    @action(detail=True, methods=['get'])
    def match_details(self, request, pk=None):
        """Get detailed match information for a specific job"""
        try:
            job = self.get_object()
            match_details = job_matching_service.calculate_job_match(request.user, job)
            
            return Response({
                'success': True,
                'job_id': job.id,
                'job_title': job.title,
                'company': job.company,
                'match_details': match_details
            })
            
        except Exception as e:
            logger.error(f"Error getting match details: {str(e)}")
            return Response({
                'success': False,
                'error': 'Failed to get match details'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class JobSearchView(APIView):
    """
    Advanced job search with filtering and sorting
    """
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        """
        Search jobs with various filters
        """
        queryset = Job.objects.all()
        
        # Basic text search
        search = request.query_params.get('search', '')
        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) |
                Q(description__icontains=search) |
                Q(company__icontains=search) |
                Q(requirements__icontains=search)
            )
        
        # Location filter
        location = request.query_params.get('location', '')
        if location:
            queryset = queryset.filter(location__icontains=location)
        
        # Job type filter
        job_type = request.query_params.get('job_type', '')
        if job_type:
            queryset = queryset.filter(job_type__icontains=job_type)
        
        # Salary range filter
        salary_min = request.query_params.get('salary_min')
        salary_max = request.query_params.get('salary_max')
        if salary_min:
            queryset = queryset.filter(salary_min__gte=salary_min)
        if salary_max:
            queryset = queryset.filter(salary_max__lte=salary_max)
        
        # Experience level filter
        experience_level = request.query_params.get('experience_level', '')
        if experience_level:
            queryset = queryset.filter(experience_level__icontains=experience_level)
        
        # Ordering
        ordering = request.query_params.get('ordering', '-created_at')
        if ordering:
            queryset = queryset.order_by(ordering)
        
        # Pagination
        page_size = int(request.query_params.get('page_size', 20))
        page = int(request.query_params.get('page', 1))
        start = (page - 1) * page_size
        end = start + page_size
        
        total = queryset.count()
        jobs = queryset[start:end]
        
        serializer = JobSerializer(jobs, many=True)
        
        return Response({
            'results': serializer.data,
            'count': total,
            'page': page,
            'page_size': page_size,
            'total_pages': (total + page_size - 1) // page_size
        })

class JobRecommendationView(APIView):
    """
    Job recommendations based on user profile
    """
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        """
        Get job recommendations for the authenticated user
        """
        try:
            from apps.profiles.models import UserProfile
            
            # Get personalized recommendations using the matching service
            recommendations = job_matching_service.get_job_recommendations(
                request.user, 
                limit=20
            )
            
            # Format response
            formatted_recommendations = []
            for job, match_details in recommendations:
                job_data = JobSerializer(job).data
                job_data['match_score'] = match_details['overall_score']
                job_data['match_reasons'] = match_details['match_reasons']
                job_data['recommendation_level'] = match_details['recommendation_level']
                formatted_recommendations.append(job_data)
            
            return Response({
                'success': True,
                'recommendations': formatted_recommendations,
                'count': len(formatted_recommendations),
                'message': 'Recommendations based on your profile and preferences'
            })
            
        except UserProfile.DoesNotExist:
            return Response({
                'detail': 'Profile not found. Please create a profile first.'
            }, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            logger.error(f"Error generating recommendations: {str(e)}")
            return Response({
                'detail': 'Error generating recommendations'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
