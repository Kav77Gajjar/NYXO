from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q, Count, Avg
from django.utils import timezone
from datetime import datetime, timedelta
import logging

from .models import (
    JobMarketAnalytics, UserCareerInsight, ApplicationSuccessMetrics,
    CareerProgressTracker, PersonalizedRecommendation
)
from .serializers import (
    JobMarketAnalyticsSerializer, UserCareerInsightSerializer,
    ApplicationSuccessMetricsSerializer, CareerProgressTrackerSerializer,
    PersonalizedRecommendationSerializer, UserAnalyticsDashboardSerializer,
    MarketInsightsSummarySerializer, SkillAnalyticsSerializer,
    CareerPathAnalysisSerializer, BenchmarkComparisonSerializer,
    IndustryAnalyticsSerializer
)
from .services import AnalyticsService

logger = logging.getLogger(__name__)


class JobMarketAnalyticsViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet for job market analytics (read-only)"""
    
    serializer_class = JobMarketAnalyticsSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return market analytics with optional filtering"""
        queryset = JobMarketAnalytics.objects.all()
        
        # Filter by location
        location = self.request.query_params.get('location')
        if location:
            queryset = queryset.filter(location__icontains=location)
        
        # Filter by industry
        industry = self.request.query_params.get('industry')
        if industry:
            queryset = queryset.filter(industry__icontains=industry)
        
        # Filter by job title
        job_title = self.request.query_params.get('job_title')
        if job_title:
            queryset = queryset.filter(job_title__icontains=job_title)
        
        return queryset.order_by('-data_date')
    
    @action(detail=False, methods=['get'])
    def summary(self, request):
        """Get market insights summary"""
        try:
            # Get recent market data
            recent_analytics = JobMarketAnalytics.objects.filter(
                data_date__gte=timezone.now().date() - timedelta(days=30)
            )
            
            if not recent_analytics.exists():
                return Response(
                    {'message': 'No recent market data available'}, 
                    status=status.HTTP_404_NOT_FOUND
                )
            
            # Calculate summary metrics
            total_jobs = sum(analytics.total_jobs_posted for analytics in recent_analytics)
            avg_salary = recent_analytics.aggregate(avg=Avg('average_salary'))['avg']
            
            # Get top skills across all markets
            all_skills = []
            for analytics in recent_analytics:
                if analytics.top_skills_demanded:
                    all_skills.extend(analytics.top_skills_demanded)
            
            # Aggregate skill data
            skill_counts = {}
            for skill_data in all_skills:
                skill_name = skill_data.get('skill', '')
                demand = skill_data.get('demand', 0)
                if skill_name in skill_counts:
                    skill_counts[skill_name] += demand
                else:
                    skill_counts[skill_name] = demand
            
            top_skills = sorted(skill_counts.items(), key=lambda x: x[1], reverse=True)[:10]
            
            summary_data = {
                'total_jobs_available': total_jobs,
                'growth_rate': 5.2,  # Placeholder
                'average_salary': int(avg_salary) if avg_salary else 0,
                'salary_growth': 3.1,  # Placeholder
                'top_skills': [{'skill': skill, 'demand': demand} for skill, demand in top_skills],
                'hot_locations': [
                    {'location': 'San Francisco', 'jobs': 1500},
                    {'location': 'New York', 'jobs': 1200},
                    {'location': 'Seattle', 'jobs': 800}
                ],
                'trending_companies': ['Google', 'Microsoft', 'Apple', 'Amazon'],
                'competition_level': 'medium',
                'hiring_timeline': 21
            }
            
            serializer = MarketInsightsSummarySerializer(summary_data)
            return Response(serializer.data)
            
        except Exception as e:
            logger.error(f"Failed to get market summary: {str(e)}")
            return Response(
                {'error': 'Failed to retrieve market summary'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['post'])
    def generate(self, request):
        """Generate new market analytics"""
        try:
            location = request.data.get('location')
            industry = request.data.get('industry')
            job_title = request.data.get('job_title')
            
            analytics = AnalyticsService.generate_job_market_analytics(
                location=location,
                industry=industry,
                job_title=job_title
            )
            
            if analytics:
                serializer = self.get_serializer(analytics)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(
                    {'error': 'Failed to generate analytics'},
                    status=status.HTTP_400_BAD_REQUEST
                )
                
        except Exception as e:
            logger.error(f"Failed to generate analytics: {str(e)}")
            return Response(
                {'error': 'Failed to generate analytics'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class UserCareerInsightViewSet(viewsets.ModelViewSet):
    """ViewSet for user career insights"""
    
    serializer_class = UserCareerInsightSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return insights for the authenticated user"""
        return UserCareerInsight.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Create insight for the authenticated user"""
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def active(self, request):
        """Get active (not dismissed) insights"""
        insights = self.get_queryset().filter(
            is_dismissed=False,
            is_acknowledged=False
        )
        serializer = self.get_serializer(insights, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def high_priority(self, request):
        """Get high priority insights"""
        insights = self.get_queryset().filter(
            priority='high',
            is_dismissed=False
        )
        serializer = self.get_serializer(insights, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def acknowledge(self, request, pk=None):
        """Mark insight as acknowledged"""
        insight = self.get_object()
        insight.acknowledge()
        serializer = self.get_serializer(insight)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def dismiss(self, request, pk=None):
        """Mark insight as dismissed"""
        insight = self.get_object()
        insight.dismiss()
        serializer = self.get_serializer(insight)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'])
    def generate(self, request):
        """Generate new insights for the user"""
        try:
            insights = AnalyticsService.generate_user_career_insights(request.user)
            return Response({
                'message': f'Generated {len(insights)} new insights',
                'insights_count': len(insights)
            }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            logger.error(f"Failed to generate insights: {str(e)}")
            return Response(
                {'error': 'Failed to generate insights'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class ApplicationSuccessMetricsViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet for application success metrics"""
    
    serializer_class = ApplicationSuccessMetricsSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return metrics for the authenticated user"""
        return ApplicationSuccessMetrics.objects.filter(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def current_month(self, request):
        """Get current month metrics"""
        try:
            metrics = AnalyticsService.calculate_application_success_metrics(
                request.user, 'monthly'
            )
            if metrics:
                serializer = self.get_serializer(metrics)
                return Response(serializer.data)
            else:
                return Response(
                    {'message': 'No data available for current month'}, 
                    status=status.HTTP_404_NOT_FOUND
                )
        except Exception as e:
            logger.error(f"Failed to get current month metrics: {str(e)}")
            return Response(
                {'error': 'Failed to retrieve metrics'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['get'])
    def trends(self, request):
        """Get success metrics trends over time"""
        try:
            metrics = self.get_queryset().order_by('period_start')[:12]  # Last 12 periods
            serializer = self.get_serializer(metrics, many=True)
            return Response(serializer.data)
        except Exception as e:
            logger.error(f"Failed to get trends: {str(e)}")
            return Response(
                {'error': 'Failed to retrieve trends'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class PersonalizedRecommendationViewSet(viewsets.ModelViewSet):
    """ViewSet for personalized recommendations"""
    
    serializer_class = PersonalizedRecommendationSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return recommendations for the authenticated user"""
        return PersonalizedRecommendation.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Create recommendation for the authenticated user"""
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def active(self, request):
        """Get active (not expired) recommendations"""
        recommendations = self.get_queryset().filter(
            Q(expires_at__isnull=True) | Q(expires_at__gt=timezone.now()),
            is_acted_upon=False
        )
        serializer = self.get_serializer(recommendations, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def high_priority(self, request):
        """Get high priority recommendations"""
        recommendations = self.get_queryset().filter(
            urgency_score__gte=0.7,
            is_acted_upon=False
        ).order_by('-urgency_score', '-relevance_score')
        serializer = self.get_serializer(recommendations, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def mark_viewed(self, request, pk=None):
        """Mark recommendation as viewed"""
        recommendation = self.get_object()
        recommendation.mark_viewed()
        serializer = self.get_serializer(recommendation)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def mark_acted_upon(self, request, pk=None):
        """Mark recommendation as acted upon"""
        recommendation = self.get_object()
        recommendation.mark_acted_upon()
        serializer = self.get_serializer(recommendation)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def feedback(self, request, pk=None):
        """Provide feedback on recommendation"""
        recommendation = self.get_object()
        feedback = request.data.get('feedback')
        
        if feedback in ['helpful', 'somewhat_helpful', 'not_helpful', 'irrelevant']:
            recommendation.user_feedback = feedback
            recommendation.save()
            serializer = self.get_serializer(recommendation)
            return Response(serializer.data)
        else:
            return Response(
                {'error': 'Invalid feedback value'},
                status=status.HTTP_400_BAD_REQUEST
            )
    
    @action(detail=False, methods=['post'])
    def generate(self, request):
        """Generate new recommendations for the user"""
        try:
            recommendations = AnalyticsService.generate_personalized_recommendations(request.user)
            return Response({
                'message': f'Generated {len(recommendations)} new recommendations',
                'recommendations_count': len(recommendations)
            }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            logger.error(f"Failed to generate recommendations: {str(e)}")
            return Response(
                {'error': 'Failed to generate recommendations'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class AnalyticsDashboardViewSet(viewsets.ViewSet):
    """ViewSet for analytics dashboard data"""
    
    permission_classes = [permissions.IsAuthenticated]
    
    @action(detail=False, methods=['get'])
    def overview(self, request):
        """Get comprehensive analytics dashboard overview"""
        try:
            user = request.user
            
            # Get user profile
            try:
                profile = user.extended_profile
            except:
                return Response(
                    {'error': 'User profile not found'}, 
                    status=status.HTTP_404_NOT_FOUND
                )
            
            # Calculate dashboard metrics
            applications = user.job_applications.all()
            total_apps = applications.count()
            this_month = timezone.now() - timedelta(days=30)
            apps_this_month = applications.filter(created_at__gte=this_month).count()
            
            # Success rates
            responses = applications.exclude(status='applied').count()
            interviews = applications.filter(
                status__in=['phone_screen', 'technical_interview', 'final_interview']
            ).count()
            
            response_rate = (responses / total_apps * 100) if total_apps > 0 else 0
            interview_rate = (interviews / total_apps * 100) if total_apps > 0 else 0
            
            # Get recent insights and recommendations
            recent_insights = UserCareerInsight.objects.filter(
                user=user,
                is_dismissed=False
            ).order_by('-created_at')[:5]
            
            top_recommendations = PersonalizedRecommendation.objects.filter(
                user=user,
                is_acted_upon=False
            ).order_by('-urgency_score', '-relevance_score')[:3]
            
            dashboard_data = {
                'profile_completion': profile.profile_completion_score,
                'profile_views': 0,  # Placeholder
                'profile_updates': 1,  # Placeholder
                'total_applications': total_apps,
                'applications_this_month': apps_this_month,
                'response_rate': round(response_rate, 1),
                'interview_rate': round(interview_rate, 1),
                'success_trend': [
                    {'month': 'Aug', 'applications': 8, 'responses': 2},
                    {'month': 'Sep', 'applications': apps_this_month, 'responses': responses}
                ],
                'skills_added': user.skills.count(),
                'goals_achieved': user.career_goals.filter(is_achieved=True).count(),
                'career_level_progress': profile.career_level or 'Not specified',
                'salary_percentile': 75,  # Placeholder
                'skill_demand_score': 0.8,  # Placeholder
                'market_competitiveness': 'Strong',
                'active_insights': recent_insights.count(),
                'high_priority_recommendations': top_recommendations.filter(urgency_score__gte=0.7).count(),
                'recent_insights': UserCareerInsightSerializer(recent_insights, many=True).data,
                'top_recommendations': PersonalizedRecommendationSerializer(top_recommendations, many=True).data
            }
            
            serializer = UserAnalyticsDashboardSerializer(dashboard_data)
            return Response(serializer.data)
            
        except Exception as e:
            logger.error(f"Failed to get dashboard overview: {str(e)}")
            return Response(
                {'error': 'Failed to retrieve dashboard data'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['get'])
    def skill_analysis(self, request):
        """Get skill analysis and market demand"""
        try:
            user = request.user
            skills = user.skills.all()
            
            skill_analytics = []
            for skill in skills:
                # Get market analytics for skills (simplified)
                analytics_data = {
                    'skill_name': skill.name,
                    'user_level': skill.level,
                    'years_experience': skill.years_experience or 0,
                    'market_demand': 0.8,  # Placeholder
                    'average_salary': 90000,  # Placeholder
                    'job_opportunities': 150,  # Placeholder
                    'growth_trend': 'Rising',
                    'related_skills': ['React', 'Node.js', 'AWS'],  # Placeholder
                    'learning_resources': [
                        {'title': 'Advanced Course', 'url': 'https://example.com', 'type': 'course'}
                    ],
                    'endorsement_count': skill.endorsements.count()
                }
                skill_analytics.append(analytics_data)
            
            return Response(skill_analytics)
            
        except Exception as e:
            logger.error(f"Failed to get skill analysis: {str(e)}")
            return Response(
                {'error': 'Failed to retrieve skill analysis'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['get'])
    def career_path(self, request):
        """Get career path analysis"""
        try:
            user = request.user
            profile = user.extended_profile
            
            career_analysis = {
                'current_position': profile.current_job_title or 'Not specified',
                'experience_level': profile.career_level or 'mid',
                'next_positions': [
                    {'title': 'Senior Developer', 'probability': 0.8, 'time_estimate': '1-2 years'},
                    {'title': 'Tech Lead', 'probability': 0.6, 'time_estimate': '2-3 years'},
                    {'title': 'Engineering Manager', 'probability': 0.4, 'time_estimate': '3-5 years'}
                ],
                'skill_gaps': [
                    {'skill': 'Leadership', 'importance': 'high', 'learning_time': '6 months'},
                    {'skill': 'System Design', 'importance': 'medium', 'learning_time': '3 months'}
                ],
                'time_to_advance': '1-2 years',
                'salary_potential': {
                    'current_range': '80k-120k',
                    'next_level_range': '120k-160k',
                    'potential_increase': '40k'
                },
                'technical_track': {
                    'next_role': 'Senior Developer',
                    'skills_needed': ['Advanced algorithms', 'System architecture'],
                    'timeline': '1-2 years'
                },
                'management_track': {
                    'next_role': 'Team Lead',
                    'skills_needed': ['Leadership', 'Project management'],
                    'timeline': '2-3 years'
                },
                'specialist_track': {
                    'next_role': 'Frontend Architect',
                    'skills_needed': ['Advanced React', 'Performance optimization'],
                    'timeline': '1-2 years'
                },
                'demand_forecast': 'High demand expected',
                'industry_trends': ['Remote work increasing', 'AI/ML integration', 'Cloud-first development'],
                'recommended_actions': [
                    {'action': 'Complete leadership training', 'priority': 'high', 'timeline': '3 months'},
                    {'action': 'Build portfolio projects', 'priority': 'medium', 'timeline': '6 months'}
                ]
            }
            
            serializer = CareerPathAnalysisSerializer(career_analysis)
            return Response(serializer.data)
            
        except Exception as e:
            logger.error(f"Failed to get career path analysis: {str(e)}")
            return Response(
                {'error': 'Failed to retrieve career path analysis'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
