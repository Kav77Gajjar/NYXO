from django.db import models
from django.conf import settings
import uuid


class WorkExperience(models.Model):
    """Model for user work experience"""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='work_experiences')
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField(blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'work_experiences'
        ordering = ['-start_date']
        
    def __str__(self):
        return f"{self.title} at {self.company}"
    
    @property
    def duration(self):
        """Get formatted duration string"""
        if self.is_current:
            return f"{self.start_date.strftime('%Y-%m')} - Present"
        elif self.end_date:
            return f"{self.start_date.strftime('%Y-%m')} - {self.end_date.strftime('%Y-%m')}"
        else:
            return f"{self.start_date.strftime('%Y-%m')} - Present"


class Education(models.Model):
    """Model for user education"""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='education')
    degree = models.CharField(max_length=200)
    school = models.CharField(max_length=200)
    field_of_study = models.CharField(max_length=200, blank=True, null=True)
    start_year = models.PositiveIntegerField()
    end_year = models.PositiveIntegerField(blank=True, null=True)
    gpa = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'education'
        ordering = ['-start_year']
        
    def __str__(self):
        return f"{self.degree} from {self.school}"
    
    @property
    def year_range(self):
        """Get formatted year range"""
        if self.end_year:
            return f"{self.start_year} - {self.end_year}"
        else:
            return f"{self.start_year} - Present"


class Skill(models.Model):
    """Model for user skills"""
    SKILL_LEVELS = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
        ('expert', 'Expert'),
    ]
    
    SKILL_CATEGORIES = [
        ('technical', 'Technical'),
        ('language', 'Language'),
        ('soft', 'Soft Skills'),
        ('other', 'Other'),
    ]
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='skills')
    name = models.CharField(max_length=100)
    level = models.CharField(max_length=20, choices=SKILL_LEVELS, default='intermediate')
    category = models.CharField(max_length=20, choices=SKILL_CATEGORIES, default='technical')
    years_experience = models.PositiveIntegerField(blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'skills'
        unique_together = ['user', 'name']
        ordering = ['category', 'name']
        
    def __str__(self):
        return f"{self.name} ({self.level})"


class Achievement(models.Model):
    """Model for user achievements and certifications"""
    ACHIEVEMENT_CATEGORIES = [
        ('work', 'Work'),
        ('education', 'Education'),
        ('certification', 'Certification'),
        ('project', 'Project'),
        ('award', 'Award'),
        ('other', 'Other'),
    ]
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='achievements')
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=20, choices=ACHIEVEMENT_CATEGORIES, default='work')
    date_achieved = models.DateField()
    organization = models.CharField(max_length=200, blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='achievements/', blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'achievements'
        ordering = ['-date_achieved']
        
    def __str__(self):
        return self.title


class UserProfile(models.Model):
    """Extended user profile model"""
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='extended_profile')
    
    # Professional information
    current_job_title = models.CharField(max_length=200, blank=True, null=True)
    industry = models.CharField(max_length=100, blank=True, null=True)
    years_of_experience = models.PositiveIntegerField(blank=True, null=True)
    
    # Job preferences
    desired_job_titles = models.JSONField(default=list, blank=True)
    preferred_locations = models.JSONField(default=list, blank=True)
    preferred_salary_min = models.PositiveIntegerField(blank=True, null=True)
    preferred_salary_max = models.PositiveIntegerField(blank=True, null=True)
    remote_work_preference = models.CharField(
        max_length=20,
        choices=[
            ('remote', 'Remote Only'),
            ('hybrid', 'Hybrid'),
            ('onsite', 'On-site Only'),
            ('flexible', 'Flexible'),
        ],
        default='flexible'
    )
    
    # Career preferences
    career_level = models.CharField(
        max_length=20,
        choices=[
            ('entry', 'Entry Level'),
            ('mid', 'Mid Level'),
            ('senior', 'Senior Level'),
            ('lead', 'Team Lead'),
            ('manager', 'Manager'),
            ('director', 'Director'),
            ('executive', 'Executive'),
        ],
        blank=True, null=True
    )
    company_size_preference = models.CharField(
        max_length=20,
        choices=[
            ('startup', 'Startup (1-50)'),
            ('small', 'Small (51-200)'),
            ('medium', 'Medium (201-1000)'),
            ('large', 'Large (1000+)'),
            ('any', 'Any Size'),
        ],
        default='any'
    )
    work_environment_preference = models.JSONField(default=list, blank=True)  # ['collaborative', 'fast-paced', 'flexible', etc.]
    benefits_priority = models.JSONField(default=list, blank=True)  # ['health', 'retirement', 'pto', 'equity', etc.]
    
    # About section
    bio = models.TextField(blank=True, null=True)
    headline = models.CharField(max_length=200, blank=True, null=True)  # Professional tagline
    
    # Resume and portfolio
    resume_file = models.FileField(upload_to='resumes/', blank=True, null=True)
    resume_data = models.JSONField(default=dict, blank=True)  # Store structured resume data
    portfolio_website = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    personal_website = models.URLField(blank=True, null=True)
    
    # Professional visibility
    is_open_to_opportunities = models.BooleanField(default=True)
    is_profile_public = models.BooleanField(default=False)
    availability_date = models.DateField(blank=True, null=True)
    
    # Profile completeness tracking
    profile_completion_score = models.PositiveIntegerField(default=0)  # 0-100
    last_updated_section = models.CharField(max_length=50, blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'user_profiles'
        
    def __str__(self):
        return f"Profile of {self.user.full_name}"
    
    def get_skills_by_category(self):
        """Get skills grouped by category"""
        skills = {}
        for skill in self.user.skills.all():
            if skill.category not in skills:
                skills[skill.category] = []
            skills[skill.category].append(skill)
        return skills
    
    def calculate_profile_completion(self):
        """Calculate profile completion percentage"""
        score = 0
        total_sections = 15
        
        # Basic info (20 points)
        if self.user.first_name: score += 1
        if self.user.last_name: score += 1
        if self.user.email: score += 1
        
        # Professional info (30 points)
        if self.current_job_title: score += 2
        if self.industry: score += 1
        if self.years_of_experience: score += 1
        if self.headline: score += 1
        if self.bio: score += 2
        
        # Experience and education (20 points)
        if self.user.work_experiences.exists(): score += 2
        if self.user.education.exists(): score += 1
        
        # Skills and achievements (15 points)
        if self.user.skills.exists(): score += 1
        if self.user.achievements.exists(): score += 0.5
        
        # Portfolio and links (10 points)
        if self.portfolio_website or self.github_url: score += 1
        
        # Career preferences (5 points)
        if self.desired_job_titles: score += 0.5
        
        self.profile_completion_score = min(int((score / total_sections) * 100), 100)
        self.save(update_fields=['profile_completion_score'])
        return self.profile_completion_score


class SkillEndorsement(models.Model):
    """Model for skill endorsements from other users"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE, related_name='endorsements')
    endorsed_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='given_endorsements')
    endorsed_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='received_endorsements')
    comment = models.TextField(blank=True, null=True)
    rating = models.PositiveIntegerField(choices=[(i, i) for i in range(1, 6)], default=5)  # 1-5 stars
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'skill_endorsements'
        unique_together = ['skill', 'endorsed_by', 'endorsed_user']
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.endorsed_by.full_name} endorsed {self.endorsed_user.full_name} for {self.skill.name}"


class PortfolioProject(models.Model):
    """Model for portfolio projects"""
    PROJECT_TYPES = [
        ('web', 'Web Application'),
        ('mobile', 'Mobile App'),
        ('desktop', 'Desktop Application'),
        ('api', 'API/Backend'),
        ('data', 'Data Science'),
        ('ml', 'Machine Learning'),
        ('design', 'Design'),
        ('other', 'Other'),
    ]
    
    PROJECT_STATUS = [
        ('completed', 'Completed'),
        ('in_progress', 'In Progress'),
        ('planned', 'Planned'),
        ('archived', 'Archived'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='portfolio_projects')
    title = models.CharField(max_length=200)
    description = models.TextField()
    project_type = models.CharField(max_length=20, choices=PROJECT_TYPES, default='web')
    status = models.CharField(max_length=20, choices=PROJECT_STATUS, default='completed')
    
    # Project links
    live_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    demo_url = models.URLField(blank=True, null=True)
    
    # Project details
    technologies_used = models.JSONField(default=list, blank=True)  # List of technologies
    features = models.JSONField(default=list, blank=True)  # Key features
    challenges = models.TextField(blank=True, null=True)  # Challenges overcome
    learnings = models.TextField(blank=True, null=True)  # What was learned
    
    # Project timeline
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    
    # Media
    thumbnail_image = models.ImageField(upload_to='portfolio/thumbnails/', blank=True, null=True)
    images = models.JSONField(default=list, blank=True)  # URLs to project images
    
    # Metadata
    is_featured = models.BooleanField(default=False)
    is_public = models.BooleanField(default=True)
    view_count = models.PositiveIntegerField(default=0)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'portfolio_projects'
        ordering = ['-is_featured', '-created_at']
    
    def __str__(self):
        return f"{self.title} by {self.user.full_name}"
    
    def increment_view_count(self):
        """Increment the view count for this project"""
        self.view_count += 1
        self.save(update_fields=['view_count'])


class CareerGoal(models.Model):
    """Model for user career goals and aspirations"""
    GOAL_TYPES = [
        ('short_term', 'Short Term (1 year)'),
        ('medium_term', 'Medium Term (2-3 years)'),
        ('long_term', 'Long Term (5+ years)'),
    ]
    
    GOAL_CATEGORIES = [
        ('position', 'Position/Role'),
        ('skill', 'Skill Development'),
        ('salary', 'Salary'),
        ('company', 'Company'),
        ('education', 'Education'),
        ('network', 'Professional Network'),
        ('other', 'Other'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='career_goals')
    title = models.CharField(max_length=200)
    description = models.TextField()
    goal_type = models.CharField(max_length=20, choices=GOAL_TYPES)
    category = models.CharField(max_length=20, choices=GOAL_CATEGORIES)
    target_date = models.DateField(blank=True, null=True)
    is_achieved = models.BooleanField(default=False)
    achieved_date = models.DateField(blank=True, null=True)
    progress_notes = models.TextField(blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'career_goals'
        ordering = ['target_date', '-created_at']
    
    def __str__(self):
        return f"{self.title} ({self.get_goal_type_display()})"


class ProfessionalReference(models.Model):
    """Model for professional references"""
    REFERENCE_TYPES = [
        ('manager', 'Manager/Supervisor'),
        ('colleague', 'Colleague'),
        ('client', 'Client'),
        ('mentor', 'Mentor'),
        ('professor', 'Professor'),
        ('other', 'Other'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='references')
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    relationship = models.CharField(max_length=20, choices=REFERENCE_TYPES)
    relationship_duration = models.CharField(max_length=100, blank=True, null=True)  # e.g., "2 years"
    notes = models.TextField(blank=True, null=True)
    
    # Permission and contact preferences
    permission_to_contact = models.BooleanField(default=False)
    preferred_contact_method = models.CharField(
        max_length=20,
        choices=[
            ('email', 'Email'),
            ('phone', 'Phone'),
            ('either', 'Either'),
        ],
        default='email'
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'professional_references'
        ordering = ['name']
    
    def __str__(self):
        return f"{self.name} - {self.title} at {self.company}"


class UserPreferences(models.Model):
    """Model for user application and notification preferences"""
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='preferences')
    
    # Job search preferences
    job_search_radius_miles = models.PositiveIntegerField(default=25)
    auto_apply_enabled = models.BooleanField(default=False)
    auto_apply_criteria = models.JSONField(default=dict, blank=True)  # Criteria for auto-applying
    
    # Notification preferences
    email_job_matches = models.BooleanField(default=True)
    email_application_updates = models.BooleanField(default=True)
    email_weekly_summary = models.BooleanField(default=True)
    email_marketing = models.BooleanField(default=False)
    
    sms_enabled = models.BooleanField(default=False)
    sms_urgent_only = models.BooleanField(default=True)
    
    # Privacy preferences
    profile_visibility = models.CharField(
        max_length=20,
        choices=[
            ('public', 'Public'),
            ('recruiters', 'Recruiters Only'),
            ('connections', 'Connections Only'),
            ('private', 'Private'),
        ],
        default='recruiters'
    )
    allow_recruiter_contact = models.BooleanField(default=True)
    show_salary_expectations = models.BooleanField(default=False)
    
    # Feature preferences
    theme_preference = models.CharField(
        max_length=10,
        choices=[
            ('light', 'Light'),
            ('dark', 'Dark'),
            ('auto', 'Auto'),
        ],
        default='auto'
    )
    dashboard_layout = models.JSONField(default=dict, blank=True)  # Customizable dashboard layout
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'user_preferences'
    
    def __str__(self):
        return f"Preferences for {self.user.full_name}"
