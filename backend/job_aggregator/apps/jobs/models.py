from django.db import models
from django.conf import settings


class Job(models.Model):
    """Model to store job listings from external sources"""
    
    JOB_TYPES = [
        ('full-time', 'Full-time'),
        ('part-time', 'Part-time'),
        ('contract', 'Contract'),
        ('temporary', 'Temporary'),
        ('internship', 'Internship'),
        ('freelance', 'Freelance'),
    ]
    
    EXPERIENCE_LEVELS = [
        ('entry', 'Entry Level'),
        ('mid', 'Mid Level'),
        ('senior', 'Senior Level'),
        ('lead', 'Lead'),
        ('executive', 'Executive'),
    ]
    
    # External source information
    external_id = models.CharField(max_length=100, unique=True)
    source = models.CharField(max_length=50)  # 'jooble', 'indeed', etc.
    source_url = models.URLField()
    
    # Job details
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    job_type = models.CharField(max_length=20, choices=JOB_TYPES, default='full-time')
    experience_level = models.CharField(max_length=20, choices=EXPERIENCE_LEVELS, blank=True, null=True)
    
    # Job description and requirements
    description = models.TextField()
    requirements = models.TextField(blank=True, null=True)
    benefits = models.TextField(blank=True, null=True)
    
    # Salary information
    salary_min = models.PositiveIntegerField(blank=True, null=True)
    salary_max = models.PositiveIntegerField(blank=True, null=True)
    salary_currency = models.CharField(max_length=10, default='USD')
    salary_period = models.CharField(
        max_length=20,
        choices=[
            ('hour', 'Per Hour'),
            ('day', 'Per Day'),
            ('month', 'Per Month'),
            ('year', 'Per Year'),
        ],
        default='year'
    )
    
    # Additional information
    remote_allowed = models.BooleanField(default=False)
    skills_required = models.JSONField(default=list, blank=True)
    tags = models.JSONField(default=list, blank=True)
    
    # External source metadata
    posted_date = models.DateTimeField()
    expires_date = models.DateTimeField(blank=True, null=True)
    
    # Internal metadata
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'jobs'
        ordering = ['-posted_date']
        indexes = [
            models.Index(fields=['source', 'external_id']),
            models.Index(fields=['location']),
            models.Index(fields=['job_type']),
            models.Index(fields=['posted_date']),
            models.Index(fields=['is_active']),
        ]
    
    def __str__(self):
        return f"{self.title} at {self.company}"
    
    @property
    def salary_range(self):
        """Get formatted salary range"""
        if self.salary_min and self.salary_max:
            return f"${self.salary_min:,} - ${self.salary_max:,}"
        elif self.salary_min:
            return f"${self.salary_min:,}+"
        elif self.salary_max:
            return f"Up to ${self.salary_max:,}"
        return "Salary not specified"


class SavedJob(models.Model):
    """Model for jobs saved/bookmarked by users"""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='saved_jobs')
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='saved_by_users')
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'saved_jobs'
        unique_together = ['user', 'job']
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.user.full_name} saved {self.job.title}"


class JobMatch(models.Model):
    """Model to store calculated job matches for users"""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='job_matches')
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='user_matches')
    
    # Match scoring
    match_score = models.FloatField()  # 0-100 percentage
    skill_match_score = models.FloatField(default=0)
    location_match_score = models.FloatField(default=0)
    experience_match_score = models.FloatField(default=0)
    salary_match_score = models.FloatField(default=0)
    
    # Match details
    matching_skills = models.JSONField(default=list, blank=True)
    missing_skills = models.JSONField(default=list, blank=True)
    match_reasons = models.JSONField(default=list, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'job_matches'
        unique_together = ['user', 'job']
        ordering = ['-match_score', '-created_at']
        indexes = [
            models.Index(fields=['user', 'match_score']),
            models.Index(fields=['job', 'match_score']),
        ]
    
    def __str__(self):
        return f"{self.user.full_name} - {self.job.title} ({self.match_score}%)"


class SearchHistory(models.Model):
    """Model to track user job searches"""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='search_history')
    
    # Search parameters
    keywords = models.CharField(max_length=200)
    location = models.CharField(max_length=200, blank=True, null=True)
    job_type = models.CharField(max_length=20, blank=True, null=True)
    remote_only = models.BooleanField(default=False)
    salary_min = models.PositiveIntegerField(blank=True, null=True)
    
    # Search metadata
    results_count = models.PositiveIntegerField(default=0)
    search_source = models.CharField(max_length=50, default='jooble')
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'search_history'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['user', 'created_at']),
            models.Index(fields=['keywords']),
        ]
    
    def __str__(self):
        return f"{self.user.full_name} searched '{self.keywords}'"
