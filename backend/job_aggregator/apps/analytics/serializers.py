from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import (
    JobMarketAnalytics, UserCareerInsight, ApplicationSuccessMetrics,
    CareerProgressTracker, PersonalizedRecommendation
)

User = get_user_model()


class JobMarketAnalyticsSerializer(serializers.ModelSerializer):
    """Serializer for job market analytics"""
    
    class Meta:
        model = JobMarketAnalytics
        fields = [
            'id', 'location', 'industry', 'job_title', 'total_jobs_posted',
            'new_jobs_this_week', 'new_jobs_this_month', 'average_salary',
            'median_salary', 'salary_range_min', 'salary_range_max',
            'top_skills_demanded', 'emerging_skills', 'average_applications_per_job',
            'competition_level', 'average_hiring_time_days', 'peak_hiring_months',
            'job_growth_percentage', 'trending_companies', 'data_date',
            'last_updated', 'created_at'
        ]
        read_only_fields = ['id', 'last_updated', 'created_at']


class UserCareerInsightSerializer(serializers.ModelSerializer):
    """Serializer for user career insights"""
    
    insight_type_display = serializers.CharField(source='get_insight_type_display', read_only=True)
    priority_display = serializers.CharField(source='get_priority_display', read_only=True)
    is_expired = serializers.ReadOnlyField()
    
    class Meta:
        model = UserCareerInsight
        fields = [
            'id', 'insight_type', 'insight_type_display', 'title', 'description',
            'priority', 'priority_display', 'insight_data', 'recommendations',
            'metrics', 'is_acknowledged', 'acknowledged_at', 'is_dismissed',
            'dismissed_at', 'relevance_score', 'confidence_score', 'valid_until',
            'is_expired', 'created_at', 'updated_at'
        ]
        read_only_fields = [
            'id', 'acknowledged_at', 'dismissed_at', 'created_at', 'updated_at'
        ]


class ApplicationSuccessMetricsSerializer(serializers.ModelSerializer):
    """Serializer for application success metrics"""
    
    period_type_display = serializers.CharField(source='get_period_type_display', read_only=True)
    
    class Meta:
        model = ApplicationSuccessMetrics
        fields = [
            'id', 'period_start', 'period_end', 'period_type', 'period_type_display',
            'applications_submitted', 'responses_received', 'interviews_scheduled',
            'offers_received', 'offers_accepted', 'response_rate', 'interview_rate',
            'offer_rate', 'acceptance_rate', 'average_response_time_days',
            'average_interview_to_offer_days', 'industry_avg_response_rate',
            'industry_avg_interview_rate', 'performance_by_industry',
            'performance_by_company_size', 'performance_by_application_source',
            'calculated_at', 'created_at'
        ]
        read_only_fields = ['id', 'calculated_at', 'created_at']


class CareerProgressTrackerSerializer(serializers.ModelSerializer):
    """Serializer for career progress tracking"""
    
    class Meta:
        model = CareerProgressTracker
        fields = [
            'id', 'snapshot_date', 'profile_completion_score', 'skills_count',
            'experience_years', 'education_level', 'active_applications',
            'monthly_applications', 'interview_success_rate', 'salary_expectation',
            'market_salary_percentile', 'skill_market_demand', 'active_goals_count',
            'achieved_goals_count', 'goals_completion_rate', 'profile_views',
            'recruiter_contacts', 'skill_endorsements', 'new_skills_added',
            'certifications_earned', 'portfolio_projects_count', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']


class PersonalizedRecommendationSerializer(serializers.ModelSerializer):
    """Serializer for personalized recommendations"""
    
    recommendation_type_display = serializers.CharField(source='get_recommendation_type_display', read_only=True)
    estimated_impact_display = serializers.CharField(source='get_estimated_impact_display', read_only=True)
    user_feedback_display = serializers.CharField(source='get_user_feedback_display', read_only=True)
    is_expired = serializers.ReadOnlyField()
    
    class Meta:
        model = PersonalizedRecommendation
        fields = [
            'id', 'recommendation_type', 'recommendation_type_display', 'title',
            'description', 'reasoning', 'recommendation_data', 'action_items',
            'estimated_impact', 'estimated_impact_display', 'relevance_score',
            'confidence_score', 'urgency_score', 'is_viewed', 'viewed_at',
            'is_acted_upon', 'acted_upon_at', 'user_feedback', 'user_feedback_display',
            'expires_at', 'is_expired', 'created_at', 'updated_at'
        ]
        read_only_fields = [
            'id', 'viewed_at', 'acted_upon_at', 'created_at', 'updated_at'
        ]


class MarketInsightsSummarySerializer(serializers.Serializer):
    """Serializer for market insights summary"""
    
    total_jobs_available = serializers.IntegerField()
    growth_rate = serializers.DecimalField(max_digits=5, decimal_places=2)
    average_salary = serializers.IntegerField()
    salary_growth = serializers.DecimalField(max_digits=5, decimal_places=2)
    top_skills = serializers.ListField(child=serializers.DictField())
    hot_locations = serializers.ListField(child=serializers.DictField())
    trending_companies = serializers.ListField(child=serializers.CharField())
    competition_level = serializers.CharField()
    hiring_timeline = serializers.IntegerField()


class UserAnalyticsDashboardSerializer(serializers.Serializer):
    """Serializer for user analytics dashboard"""
    
    # Profile metrics
    profile_completion = serializers.IntegerField()
    profile_views = serializers.IntegerField()
    profile_updates = serializers.IntegerField()
    
    # Application metrics
    total_applications = serializers.IntegerField()
    applications_this_month = serializers.IntegerField()
    response_rate = serializers.DecimalField(max_digits=5, decimal_places=2)
    interview_rate = serializers.DecimalField(max_digits=5, decimal_places=2)
    success_trend = serializers.ListField(child=serializers.DictField())
    
    # Career progress
    skills_added = serializers.IntegerField()
    goals_achieved = serializers.IntegerField()
    career_level_progress = serializers.CharField()
    
    # Market position
    salary_percentile = serializers.IntegerField()
    skill_demand_score = serializers.DecimalField(max_digits=3, decimal_places=2)
    market_competitiveness = serializers.CharField()
    
    # Recommendations
    active_insights = serializers.IntegerField()
    high_priority_recommendations = serializers.IntegerField()
    
    # Recent activity
    recent_insights = UserCareerInsightSerializer(many=True, read_only=True)
    top_recommendations = PersonalizedRecommendationSerializer(many=True, read_only=True)


class SkillAnalyticsSerializer(serializers.Serializer):
    """Serializer for skill analytics and market demand"""
    
    skill_name = serializers.CharField()
    user_level = serializers.CharField()
    years_experience = serializers.IntegerField()
    market_demand = serializers.DecimalField(max_digits=3, decimal_places=2)
    average_salary = serializers.IntegerField()
    job_opportunities = serializers.IntegerField()
    growth_trend = serializers.CharField()
    related_skills = serializers.ListField(child=serializers.CharField())
    learning_resources = serializers.ListField(child=serializers.DictField())
    endorsement_count = serializers.IntegerField()


class CareerPathAnalysisSerializer(serializers.Serializer):
    """Serializer for career path analysis"""
    
    current_position = serializers.CharField()
    experience_level = serializers.CharField()
    
    # Possible next steps
    next_positions = serializers.ListField(child=serializers.DictField())
    skill_gaps = serializers.ListField(child=serializers.DictField())
    time_to_advance = serializers.CharField()
    salary_potential = serializers.DictField()
    
    # Career tracks
    technical_track = serializers.DictField()
    management_track = serializers.DictField()
    specialist_track = serializers.DictField()
    
    # Market insights
    demand_forecast = serializers.CharField()
    industry_trends = serializers.ListField(child=serializers.CharField())
    recommended_actions = serializers.ListField(child=serializers.DictField())


class BenchmarkComparisonSerializer(serializers.Serializer):
    """Serializer for benchmarking user against market averages"""
    
    category = serializers.CharField()
    user_value = serializers.DecimalField(max_digits=10, decimal_places=2)
    market_average = serializers.DecimalField(max_digits=10, decimal_places=2)
    percentile = serializers.IntegerField()
    comparison = serializers.CharField()  # 'above', 'below', 'average'
    recommendations = serializers.ListField(child=serializers.CharField())


class IndustryAnalyticsSerializer(serializers.Serializer):
    """Serializer for industry-specific analytics"""
    
    industry_name = serializers.CharField()
    total_jobs = serializers.IntegerField()
    growth_rate = serializers.DecimalField(max_digits=5, decimal_places=2)
    average_salary = serializers.IntegerField()
    top_companies = serializers.ListField(child=serializers.DictField())
    in_demand_skills = serializers.ListField(child=serializers.DictField())
    geographic_distribution = serializers.ListField(child=serializers.DictField())
    experience_level_demand = serializers.DictField()
    salary_by_experience = serializers.DictField()
    remote_work_percentage = serializers.DecimalField(max_digits=5, decimal_places=2)
