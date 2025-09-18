from django.contrib import admin
from .models import JobApplication, ApplicationEvent, ApplicationDocument, ApplicationReminder, ApplicationAnalytics


@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = [
        'position_title', 'company_name', 'user', 'status', 'priority',
        'applied_date', 'created_at', 'is_archived'
    ]
    list_filter = ['status', 'priority', 'is_archived', 'created_at', 'applied_date']
    search_fields = ['position_title', 'company_name', 'user__email', 'notes']
    readonly_fields = ['id', 'created_at', 'updated_at', 'days_since_applied']
    
    fieldsets = (
        ('Basic Information', {
            'fields': (
                'user', 'job', 'company_name', 'position_title', 'job_url',
                'location', 'salary_range'
            )
        }),
        ('Application Status', {
            'fields': (
                'status', 'priority', 'applied_date', 'follow_up_date',
                'expected_response_date', 'is_archived'
            )
        }),
        ('Application Materials', {
            'fields': (
                'resume_version', 'cover_letter_text', 'portfolio_url'
            ),
            'classes': ('collapse',)
        }),
        ('Contact Information', {
            'fields': (
                'contact_name', 'contact_email', 'contact_phone', 'referral_source'
            ),
            'classes': ('collapse',)
        }),
        ('Additional Information', {
            'fields': (
                'notes', 'requirements_match', 'tags'
            ),
            'classes': ('collapse',)
        }),
        ('Metadata', {
            'fields': (
                'id', 'created_at', 'updated_at', 'days_since_applied'
            ),
            'classes': ('collapse',)
        }),
    )
    
    def get_queryset(self, request):
        return super().get_queryset(request).select_related('user', 'job')


@admin.register(ApplicationEvent)
class ApplicationEventAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'application', 'event_type', 'event_date', 'duration_minutes'
    ]
    list_filter = ['event_type', 'event_date']
    search_fields = ['title', 'description', 'application__position_title', 'application__company_name']
    readonly_fields = ['id', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Event Information', {
            'fields': (
                'application', 'event_type', 'title', 'description', 'event_date'
            )
        }),
        ('Event Details', {
            'fields': (
                'duration_minutes', 'location', 'attendees'
            )
        }),
        ('Outcome', {
            'fields': (
                'outcome', 'next_steps'
            )
        }),
        ('Metadata', {
            'fields': (
                'id', 'created_at', 'updated_at'
            ),
            'classes': ('collapse',)
        }),
    )


@admin.register(ApplicationDocument)
class ApplicationDocumentAdmin(admin.ModelAdmin):
    list_display = ['title', 'application', 'document_type', 'version', 'created_at']
    list_filter = ['document_type', 'created_at']
    search_fields = ['title', 'description', 'application__position_title']
    readonly_fields = ['id', 'created_at', 'updated_at']


@admin.register(ApplicationReminder)
class ApplicationReminderAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'application', 'reminder_type', 'reminder_date', 
        'is_completed', 'is_overdue'
    ]
    list_filter = ['reminder_type', 'is_completed', 'reminder_date']
    search_fields = ['title', 'description', 'application__position_title']
    readonly_fields = ['id', 'created_at', 'updated_at', 'is_overdue']
    
    def is_overdue(self, obj):
        return obj.is_overdue
    is_overdue.boolean = True
    is_overdue.short_description = 'Overdue'


@admin.register(ApplicationAnalytics)
class ApplicationAnalyticsAdmin(admin.ModelAdmin):
    list_display = [
        'user', 'total_applications', 'active_applications', 'response_rate',
        'interview_rate', 'offer_rate', 'last_calculated'
    ]
    readonly_fields = [
        'id', 'user', 'total_applications', 'active_applications', 
        'interviews_scheduled', 'offers_received', 'offers_accepted',
        'applications_rejected', 'response_rate', 'interview_rate',
        'offer_rate', 'average_response_time_days', 'average_process_time_days',
        'top_companies', 'top_positions', 'application_sources',
        'last_calculated', 'created_at'
    ]
    
    def has_add_permission(self, request):
        return False
    
    def has_delete_permission(self, request, obj=None):
        return False
