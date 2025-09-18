from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
from django.db.models import JSONField
import uuid

User = get_user_model()


class JobMarketAnalytics(models.Model):
    """Model for storing job market analytics data"""
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    # Market metrics
    location = models.CharField(max_length=255)
    industry = models.CharField(max_length=100, blank=True, null=True)
    job_title = models.CharField(max_length=200, blank=True, null=True)
    
    # Job posting statistics
    total_jobs_posted = models.PositiveIntegerField(default=0)
    new_jobs_this_week = models.PositiveIntegerField(default=0)
    new_jobs_this_month = models.PositiveIntegerField(default=0)
    
    # Salary analytics
    average_salary = models.PositiveIntegerField(blank=True, null=True)
    median_salary = models.PositiveIntegerField(blank=True, null=True)
    salary_range_min = models.PositiveIntegerField(blank=True, null=True)
    salary_range_max = models.PositiveIntegerField(blank=True, null=True)
    
    # Skill demand
    top_skills_demanded = JSONField(default=list, blank=True)  # [{"skill": "Python", "demand": 85}, ...]
    emerging_skills = JSONField(default=list, blank=True)  # Skills with growing demand
    
    # Competition metrics
    average_applications_per_job = models.DecimalField(max_digits=5, decimal_places=1, default=0.0)
    competition_level = models.CharField(
        max_length=20,
        choices=[
            ('low', 'Low Competition'),
            ('medium', 'Medium Competition'),
            ('high', 'High Competition'),
            ('very_high', 'Very High Competition'),
        ],
        default='medium'
    )
    
    # Time metrics
    average_hiring_time_days = models.PositiveIntegerField(blank=True, null=True)
    peak_hiring_months = JSONField(default=list, blank=True)  # Months with highest hiring activity
    
    # Growth trends
    job_growth_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    trending_companies = JSONField(default=list, blank=True)  # Companies hiring the most
    
    # Metadata
    data_date = models.DateField()
    last_updated = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'job_market_analytics'
        unique_together = ['location', 'industry', 'job_title', 'data_date']
        ordering = ['-data_date']
        indexes = [
            models.Index(fields=['location', 'industry']),
            models.Index(fields=['job_title']),
            models.Index(fields=['data_date']),
        ]
    
    def __str__(self):
        return f"Market Analytics - {self.location} ({self.data_date})"


class UserCareerInsight(models.Model):
    """Model for personalized career insights for users"""
    
    INSIGHT_TYPES = [
        ('skill_gap', 'Skill Gap Analysis'),
        ('salary_benchmark', 'Salary Benchmarking'),
        ('career_path', 'Career Path Recommendation'),
        ('market_opportunity', 'Market Opportunity'),
        ('application_feedback', 'Application Performance'),
        ('profile_optimization', 'Profile Optimization'),
        ('learning_recommendation', 'Learning Recommendation'),
    ]
    
    PRIORITY_LEVELS = [
        ('low', 'Low Priority'),
        ('medium', 'Medium Priority'),
        ('high', 'High Priority'),
        ('urgent', 'Urgent'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='career_insights')
    
    # Insight details
    insight_type = models.CharField(max_length=30, choices=INSIGHT_TYPES)
    title = models.CharField(max_length=255)
    description = models.TextField()
    priority = models.CharField(max_length=10, choices=PRIORITY_LEVELS, default='medium')
    
    # Insight data
    insight_data = JSONField(default=dict, blank=True)  # Structured data for the insight
    recommendations = JSONField(default=list, blank=True)  # List of actionable recommendations
    metrics = JSONField(default=dict, blank=True)  # Supporting metrics and data
    
    # Action tracking
    is_acknowledged = models.BooleanField(default=False)
    acknowledged_at = models.DateTimeField(blank=True, null=True)
    is_dismissed = models.BooleanField(default=False)
    dismissed_at = models.DateTimeField(blank=True, null=True)
    
    # Relevance scoring
    relevance_score = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)  # 0.0 to 1.0
    confidence_score = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)  # 0.0 to 1.0
    
    # Metadata
    valid_until = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'user_career_insights'
        ordering = ['-priority', '-relevance_score', '-created_at']
        indexes = [
            models.Index(fields=['user', 'insight_type']),
            models.Index(fields=['user', 'is_acknowledged', 'is_dismissed']),
            models.Index(fields=['priority', 'relevance_score']),
        ]
    
    def __str__(self):
        return f"{self.title} for {self.user.full_name}"
    
    def acknowledge(self):
        """Mark insight as acknowledged"""
        self.is_acknowledged = True
        self.acknowledged_at = timezone.now()
        self.save()
    
    def dismiss(self):
        """Mark insight as dismissed"""
        self.is_dismissed = True
        self.dismissed_at = timezone.now()
        self.save()
    
    @property
    def is_expired(self):
        """Check if insight has expired"""
        return self.valid_until and timezone.now() > self.valid_until


class ApplicationSuccessMetrics(models.Model):
    """Model for tracking application success metrics"""
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='success_metrics')
    
    # Time period for metrics
    period_start = models.DateField()
    period_end = models.DateField()
    period_type = models.CharField(
        max_length=20,
        choices=[
            ('weekly', 'Weekly'),
            ('monthly', 'Monthly'),
            ('quarterly', 'Quarterly'),
            ('yearly', 'Yearly'),
        ],
        default='monthly'
    )
    
    # Application metrics
    applications_submitted = models.PositiveIntegerField(default=0)
    responses_received = models.PositiveIntegerField(default=0)
    interviews_scheduled = models.PositiveIntegerField(default=0)
    offers_received = models.PositiveIntegerField(default=0)
    offers_accepted = models.PositiveIntegerField(default=0)
    
    # Success rates
    response_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    interview_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    offer_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    acceptance_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    
    # Time metrics
    average_response_time_days = models.DecimalField(max_digits=5, decimal_places=1, default=0.0)
    average_interview_to_offer_days = models.DecimalField(max_digits=5, decimal_places=1, default=0.0)
    
    # Performance benchmarks
    industry_avg_response_rate = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    industry_avg_interview_rate = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    
    # Detailed breakdowns
    performance_by_industry = JSONField(default=dict, blank=True)
    performance_by_company_size = JSONField(default=dict, blank=True)
    performance_by_application_source = JSONField(default=dict, blank=True)
    
    # Metadata
    calculated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'application_success_metrics'
        unique_together = ['user', 'period_start', 'period_end', 'period_type']
        ordering = ['-period_end']
        indexes = [
            models.Index(fields=['user', 'period_type']),
            models.Index(fields=['period_start', 'period_end']),
        ]
    
    def __str__(self):
        return f"Success Metrics for {self.user.full_name} ({self.period_start} to {self.period_end})"


class CareerProgressTracker(models.Model):
    """Model for tracking user's career progression over time"""
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='career_progress')
    
    # Progress metrics
    snapshot_date = models.DateField()
    
    # Profile metrics
    profile_completion_score = models.PositiveIntegerField(default=0)
    skills_count = models.PositiveIntegerField(default=0)
    experience_years = models.PositiveIntegerField(default=0)
    education_level = models.CharField(max_length=50, blank=True, null=True)
    
    # Job search metrics
    active_applications = models.PositiveIntegerField(default=0)
    monthly_applications = models.PositiveIntegerField(default=0)
    interview_success_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    
    # Market position
    salary_expectation = models.PositiveIntegerField(blank=True, null=True)
    market_salary_percentile = models.PositiveIntegerField(blank=True, null=True)  # 0-100
    skill_market_demand = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)  # 0.0-1.0
    
    # Career goals progress
    active_goals_count = models.PositiveIntegerField(default=0)
    achieved_goals_count = models.PositiveIntegerField(default=0)
    goals_completion_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    
    # Network and visibility
    profile_views = models.PositiveIntegerField(default=0)
    recruiter_contacts = models.PositiveIntegerField(default=0)
    skill_endorsements = models.PositiveIntegerField(default=0)
    
    # Learning and development
    new_skills_added = models.PositiveIntegerField(default=0)
    certifications_earned = models.PositiveIntegerField(default=0)
    portfolio_projects_count = models.PositiveIntegerField(default=0)
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'career_progress_tracker'
        unique_together = ['user', 'snapshot_date']
        ordering = ['-snapshot_date']
        indexes = [
            models.Index(fields=['user', 'snapshot_date']),
        ]
    
    def __str__(self):
        return f"Career Progress for {self.user.full_name} ({self.snapshot_date})"


class PersonalizedRecommendation(models.Model):
    """Model for personalized job and career recommendations"""
    
    RECOMMENDATION_TYPES = [
        ('job', 'Job Recommendation'),
        ('skill', 'Skill Development'),
        ('course', 'Course/Training'),
        ('networking', 'Networking Opportunity'),
        ('career_move', 'Career Move'),
        ('salary_negotiation', 'Salary Negotiation'),
        ('profile_update', 'Profile Update'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recommendations')
    
    # Recommendation details
    recommendation_type = models.CharField(max_length=30, choices=RECOMMENDATION_TYPES)
    title = models.CharField(max_length=255)
    description = models.TextField()
    reasoning = models.TextField()  # Why this recommendation was made
    
    # Recommendation data
    recommendation_data = JSONField(default=dict, blank=True)  # Structured data
    action_items = JSONField(default=list, blank=True)  # Specific action items
    estimated_impact = models.CharField(
        max_length=20,
        choices=[
            ('low', 'Low Impact'),
            ('medium', 'Medium Impact'),
            ('high', 'High Impact'),
            ('very_high', 'Very High Impact'),
        ],
        default='medium'
    )
    
    # Scoring and relevance
    relevance_score = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    confidence_score = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    urgency_score = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    
    # User interaction
    is_viewed = models.BooleanField(default=False)
    viewed_at = models.DateTimeField(blank=True, null=True)
    is_acted_upon = models.BooleanField(default=False)
    acted_upon_at = models.DateTimeField(blank=True, null=True)
    user_feedback = models.CharField(
        max_length=20,
        choices=[
            ('helpful', 'Helpful'),
            ('somewhat_helpful', 'Somewhat Helpful'),
            ('not_helpful', 'Not Helpful'),
            ('irrelevant', 'Irrelevant'),
        ],
        blank=True, null=True
    )
    
    # Metadata
    expires_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'personalized_recommendations'
        ordering = ['-urgency_score', '-relevance_score', '-created_at']
        indexes = [
            models.Index(fields=['user', 'recommendation_type']),
            models.Index(fields=['user', 'is_viewed', 'is_acted_upon']),
            models.Index(fields=['relevance_score', 'urgency_score']),
        ]
    
    def __str__(self):
        return f"{self.title} for {self.user.full_name}"
    
    def mark_viewed(self):
        """Mark recommendation as viewed"""
        self.is_viewed = True
        self.viewed_at = timezone.now()
        self.save()
    
    def mark_acted_upon(self):
        """Mark recommendation as acted upon"""
        self.is_acted_upon = True
        self.acted_upon_at = timezone.now()
        self.save()
    
    @property
    def is_expired(self):
        """Check if recommendation has expired"""
        return self.expires_at and timezone.now() > self.expires_at
