from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import URLValidator
from django.utils import timezone
import uuid

User = get_user_model()


class JobApplication(models.Model):
    """Model for tracking user job applications"""
    
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('applied', 'Applied'),
        ('under_review', 'Under Review'),
        ('phone_screen', 'Phone Screen'),
        ('technical_interview', 'Technical Interview'),
        ('final_interview', 'Final Interview'),
        ('offer_received', 'Offer Received'),
        ('offer_accepted', 'Offer Accepted'),
        ('offer_declined', 'Offer Declined'),
        ('rejected', 'Rejected'),
        ('withdrawn', 'Withdrawn'),
    ]
    
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('urgent', 'Urgent'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='job_applications')
    job = models.ForeignKey('jobs.Job', on_delete=models.CASCADE, related_name='applications', null=True, blank=True)
    
    # Basic application information
    company_name = models.CharField(max_length=255)
    position_title = models.CharField(max_length=255)
    job_url = models.URLField(blank=True, validators=[URLValidator()])
    location = models.CharField(max_length=255, blank=True)
    salary_range = models.CharField(max_length=100, blank=True)
    
    # Application status and tracking
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='medium')
    applied_date = models.DateTimeField(null=True, blank=True)
    follow_up_date = models.DateTimeField(null=True, blank=True)
    expected_response_date = models.DateTimeField(null=True, blank=True)
    
    # Application materials
    resume_version = models.CharField(max_length=100, blank=True, help_text="Version of resume used")
    cover_letter_text = models.TextField(blank=True)
    portfolio_url = models.URLField(blank=True, validators=[URLValidator()])
    
    # Contact information
    contact_name = models.CharField(max_length=255, blank=True)
    contact_email = models.EmailField(blank=True)
    contact_phone = models.CharField(max_length=20, blank=True)
    referral_source = models.CharField(max_length=255, blank=True)
    
    # Notes and additional information
    notes = models.TextField(blank=True)
    requirements_match = models.JSONField(default=dict, blank=True, help_text="How well the application matches job requirements")
    tags = models.JSONField(default=list, blank=True, help_text="Custom tags for organization")
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_archived = models.BooleanField(default=False)
    
    class Meta:
        db_table = 'job_applications'
        ordering = ['-updated_at']
        indexes = [
            models.Index(fields=['user', 'status']),
            models.Index(fields=['user', 'applied_date']),
            models.Index(fields=['company_name']),
            models.Index(fields=['status', 'priority']),
        ]
    
    def __str__(self):
        return f"{self.position_title} at {self.company_name} - {self.get_status_display()}"
    
    def save(self, *args, **kwargs):
        # Set applied_date when status changes to 'applied'
        if self.status == 'applied' and not self.applied_date:
            self.applied_date = timezone.now()
        
        super().save(*args, **kwargs)
    
    @property
    def days_since_applied(self):
        """Calculate days since application was submitted"""
        if self.applied_date:
            return (timezone.now() - self.applied_date).days
        return None
    
    @property
    def is_overdue_for_followup(self):
        """Check if application is overdue for follow-up"""
        if self.follow_up_date and timezone.now() > self.follow_up_date:
            return True
        return False
    
    @property
    def status_color(self):
        """Return color code for status display"""
        status_colors = {
            'draft': '#gray',
            'applied': '#blue',
            'under_review': '#yellow',
            'phone_screen': '#orange',
            'technical_interview': '#purple',
            'final_interview': '#indigo',
            'offer_received': '#green',
            'offer_accepted': '#emerald',
            'offer_declined': '#red',
            'rejected': '#red',
            'withdrawn': '#gray',
        }
        return status_colors.get(self.status, '#gray')


class ApplicationEvent(models.Model):
    """Model for tracking events/milestones in job application process"""
    
    EVENT_TYPES = [
        ('application_submitted', 'Application Submitted'),
        ('acknowledgment_received', 'Acknowledgment Received'),
        ('phone_screen_scheduled', 'Phone Screen Scheduled'),
        ('phone_screen_completed', 'Phone Screen Completed'),
        ('technical_interview_scheduled', 'Technical Interview Scheduled'),
        ('technical_interview_completed', 'Technical Interview Completed'),
        ('final_interview_scheduled', 'Final Interview Scheduled'),
        ('final_interview_completed', 'Final Interview Completed'),
        ('offer_received', 'Offer Received'),
        ('offer_negotiated', 'Offer Negotiated'),
        ('offer_accepted', 'Offer Accepted'),
        ('offer_declined', 'Offer Declined'),
        ('rejection_received', 'Rejection Received'),
        ('follow_up_sent', 'Follow-up Sent'),
        ('reference_requested', 'Reference Requested'),
        ('background_check', 'Background Check'),
        ('other', 'Other'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    application = models.ForeignKey(JobApplication, on_delete=models.CASCADE, related_name='events')
    event_type = models.CharField(max_length=30, choices=EVENT_TYPES)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    event_date = models.DateTimeField()
    duration_minutes = models.PositiveIntegerField(null=True, blank=True, help_text="Duration for interviews/calls")
    location = models.CharField(max_length=255, blank=True, help_text="Location or platform for interviews")
    attendees = models.JSONField(default=list, blank=True, help_text="List of attendees/interviewers")
    outcome = models.TextField(blank=True, help_text="Outcome or results of the event")
    next_steps = models.TextField(blank=True, help_text="Next steps or action items")
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'application_events'
        ordering = ['-event_date']
        indexes = [
            models.Index(fields=['application', 'event_date']),
            models.Index(fields=['event_type']),
        ]
    
    def __str__(self):
        return f"{self.title} - {self.event_date.strftime('%Y-%m-%d')}"


class ApplicationDocument(models.Model):
    """Model for storing documents related to job applications"""
    
    DOCUMENT_TYPES = [
        ('resume', 'Resume'),
        ('cover_letter', 'Cover Letter'),
        ('portfolio', 'Portfolio'),
        ('transcript', 'Transcript'),
        ('certificate', 'Certificate'),
        ('reference_letter', 'Reference Letter'),
        ('writing_sample', 'Writing Sample'),
        ('other', 'Other'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    application = models.ForeignKey(JobApplication, on_delete=models.CASCADE, related_name='documents')
    document_type = models.CharField(max_length=20, choices=DOCUMENT_TYPES)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    file_url = models.URLField(blank=True, help_text="URL to the document file")
    content = models.TextField(blank=True, help_text="Text content of the document")
    version = models.CharField(max_length=50, blank=True)
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'application_documents'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['application', 'document_type']),
        ]
    
    def __str__(self):
        return f"{self.title} ({self.get_document_type_display()})"


class ApplicationReminder(models.Model):
    """Model for setting reminders related to job applications"""
    
    REMINDER_TYPES = [
        ('follow_up', 'Follow-up'),
        ('interview_prep', 'Interview Preparation'),
        ('thank_you_note', 'Thank You Note'),
        ('deadline', 'Application Deadline'),
        ('custom', 'Custom Reminder'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    application = models.ForeignKey(JobApplication, on_delete=models.CASCADE, related_name='reminders')
    reminder_type = models.CharField(max_length=20, choices=REMINDER_TYPES)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    reminder_date = models.DateTimeField()
    is_completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, blank=True)
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'application_reminders'
        ordering = ['reminder_date']
        indexes = [
            models.Index(fields=['application', 'reminder_date']),
            models.Index(fields=['reminder_date', 'is_completed']),
        ]
    
    def __str__(self):
        return f"{self.title} - {self.reminder_date.strftime('%Y-%m-%d')}"
    
    def mark_completed(self):
        """Mark reminder as completed"""
        self.is_completed = True
        self.completed_at = timezone.now()
        self.save()
    
    @property
    def is_overdue(self):
        """Check if reminder is overdue"""
        return not self.is_completed and timezone.now() > self.reminder_date


class ApplicationAnalytics(models.Model):
    """Model for storing analytics data about job applications"""
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='application_analytics')
    
    # Application statistics
    total_applications = models.PositiveIntegerField(default=0)
    active_applications = models.PositiveIntegerField(default=0)
    interviews_scheduled = models.PositiveIntegerField(default=0)
    offers_received = models.PositiveIntegerField(default=0)
    offers_accepted = models.PositiveIntegerField(default=0)
    applications_rejected = models.PositiveIntegerField(default=0)
    
    # Response rates
    response_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    interview_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    offer_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    
    # Time analytics
    average_response_time_days = models.DecimalField(max_digits=5, decimal_places=1, default=0.0)
    average_process_time_days = models.DecimalField(max_digits=5, decimal_places=1, default=0.0)
    
    # Popular metrics
    top_companies = models.JSONField(default=list, blank=True)
    top_positions = models.JSONField(default=list, blank=True)
    application_sources = models.JSONField(default=dict, blank=True)
    
    # Metadata
    last_calculated = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'application_analytics'
    
    def __str__(self):
        return f"Analytics for {self.user.email}"
    
    def calculate_metrics(self):
        """Calculate and update analytics metrics"""
        applications = JobApplication.objects.filter(user=self.user)
        
        # Basic counts
        self.total_applications = applications.count()
        self.active_applications = applications.exclude(
            status__in=['offer_accepted', 'offer_declined', 'rejected', 'withdrawn']
        ).count()
        
        # Interview and offer statistics
        self.interviews_scheduled = applications.filter(
            status__in=['phone_screen', 'technical_interview', 'final_interview']
        ).count()
        
        self.offers_received = applications.filter(status='offer_received').count()
        self.offers_accepted = applications.filter(status='offer_accepted').count()
        self.applications_rejected = applications.filter(status='rejected').count()
        
        # Calculate rates
        if self.total_applications > 0:
            responded_apps = applications.exclude(status__in=['draft', 'applied']).count()
            self.response_rate = (responded_apps / self.total_applications) * 100
            self.interview_rate = (self.interviews_scheduled / self.total_applications) * 100
            self.offer_rate = (self.offers_received / self.total_applications) * 100
        
        self.save()
