from rest_framework import serializers
from django.utils import timezone
from .models import JobApplication, ApplicationEvent, ApplicationDocument, ApplicationReminder, ApplicationAnalytics


class JobApplicationSerializer(serializers.ModelSerializer):
    """Serializer for JobApplication model"""
    
    days_since_applied = serializers.ReadOnlyField()
    is_overdue_for_followup = serializers.ReadOnlyField()
    status_color = serializers.ReadOnlyField()
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    priority_display = serializers.CharField(source='get_priority_display', read_only=True)
    
    class Meta:
        model = JobApplication
        fields = [
            'id', 'user', 'job', 'company_name', 'position_title', 'job_url', 'location',
            'salary_range', 'status', 'status_display', 'priority', 'priority_display',
            'applied_date', 'follow_up_date', 'expected_response_date', 'resume_version',
            'cover_letter_text', 'portfolio_url', 'contact_name', 'contact_email',
            'contact_phone', 'referral_source', 'notes', 'requirements_match', 'tags',
            'created_at', 'updated_at', 'is_archived', 'days_since_applied',
            'is_overdue_for_followup', 'status_color'
        ]
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']
    
    def validate(self, data):
        """Custom validation for job applications"""
        # Validate follow-up date
        follow_up_date = data.get('follow_up_date')
        applied_date = data.get('applied_date')
        
        if follow_up_date and applied_date and follow_up_date < applied_date:
            raise serializers.ValidationError("Follow-up date cannot be before applied date")
        
        # Validate expected response date
        expected_response_date = data.get('expected_response_date')
        if expected_response_date and applied_date and expected_response_date < applied_date:
            raise serializers.ValidationError("Expected response date cannot be before applied date")
        
        return data


class JobApplicationCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating job applications"""
    
    class Meta:
        model = JobApplication
        fields = [
            'job', 'company_name', 'position_title', 'job_url', 'location',
            'salary_range', 'status', 'priority', 'applied_date', 'follow_up_date',
            'expected_response_date', 'resume_version', 'cover_letter_text',
            'portfolio_url', 'contact_name', 'contact_email', 'contact_phone',
            'referral_source', 'notes', 'requirements_match', 'tags'
        ]
    
    def create(self, validated_data):
        """Create job application with current user"""
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)


class JobApplicationUpdateSerializer(serializers.ModelSerializer):
    """Serializer for updating job applications"""
    
    class Meta:
        model = JobApplication
        fields = [
            'company_name', 'position_title', 'job_url', 'location', 'salary_range',
            'status', 'priority', 'applied_date', 'follow_up_date', 'expected_response_date',
            'resume_version', 'cover_letter_text', 'portfolio_url', 'contact_name',
            'contact_email', 'contact_phone', 'referral_source', 'notes',
            'requirements_match', 'tags', 'is_archived'
        ]


class ApplicationEventSerializer(serializers.ModelSerializer):
    """Serializer for ApplicationEvent model"""
    
    event_type_display = serializers.CharField(source='get_event_type_display', read_only=True)
    
    class Meta:
        model = ApplicationEvent
        fields = [
            'id', 'application', 'event_type', 'event_type_display', 'title',
            'description', 'event_date', 'duration_minutes', 'location',
            'attendees', 'outcome', 'next_steps', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def validate_event_date(self, value):
        """Validate event date"""
        if value > timezone.now() + timezone.timedelta(days=365):
            raise serializers.ValidationError("Event date cannot be more than 1 year in the future")
        return value


class ApplicationDocumentSerializer(serializers.ModelSerializer):
    """Serializer for ApplicationDocument model"""
    
    document_type_display = serializers.CharField(source='get_document_type_display', read_only=True)
    
    class Meta:
        model = ApplicationDocument
        fields = [
            'id', 'application', 'document_type', 'document_type_display',
            'title', 'description', 'file_url', 'content', 'version',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class ApplicationReminderSerializer(serializers.ModelSerializer):
    """Serializer for ApplicationReminder model"""
    
    reminder_type_display = serializers.CharField(source='get_reminder_type_display', read_only=True)
    is_overdue = serializers.ReadOnlyField()
    
    class Meta:
        model = ApplicationReminder
        fields = [
            'id', 'application', 'reminder_type', 'reminder_type_display',
            'title', 'description', 'reminder_date', 'is_completed',
            'completed_at', 'is_overdue', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'completed_at', 'created_at', 'updated_at']
    
    def validate_reminder_date(self, value):
        """Validate reminder date"""
        if value < timezone.now():
            raise serializers.ValidationError("Reminder date cannot be in the past")
        return value


class ApplicationAnalyticsSerializer(serializers.ModelSerializer):
    """Serializer for ApplicationAnalytics model"""
    
    class Meta:
        model = ApplicationAnalytics
        fields = [
            'id', 'user', 'total_applications', 'active_applications',
            'interviews_scheduled', 'offers_received', 'offers_accepted',
            'applications_rejected', 'response_rate', 'interview_rate',
            'offer_rate', 'average_response_time_days', 'average_process_time_days',
            'top_companies', 'top_positions', 'application_sources',
            'last_calculated', 'created_at'
        ]
        read_only_fields = ['id', 'user', 'last_calculated', 'created_at']


class ApplicationSummarySerializer(serializers.Serializer):
    """Serializer for application summary data"""
    
    total_applications = serializers.IntegerField()
    active_applications = serializers.IntegerField()
    pending_interviews = serializers.IntegerField()
    pending_followups = serializers.IntegerField()
    applications_this_week = serializers.IntegerField()
    applications_this_month = serializers.IntegerField()
    status_breakdown = serializers.DictField()
    priority_breakdown = serializers.DictField()
    recent_activity = ApplicationEventSerializer(many=True, read_only=True)


class ApplicationStatsSerializer(serializers.Serializer):
    """Serializer for application statistics"""
    
    applications_by_month = serializers.DictField()
    applications_by_status = serializers.DictField()
    applications_by_company = serializers.DictField()
    interview_success_rate = serializers.DecimalField(max_digits=5, decimal_places=2)
    average_response_time = serializers.DecimalField(max_digits=5, decimal_places=1)
    top_performing_sources = serializers.ListField()


class BulkApplicationActionSerializer(serializers.Serializer):
    """Serializer for bulk actions on applications"""
    
    ACTION_CHOICES = [
        ('archive', 'Archive'),
        ('unarchive', 'Unarchive'),
        ('delete', 'Delete'),
        ('update_status', 'Update Status'),
        ('add_tag', 'Add Tag'),
        ('remove_tag', 'Remove Tag'),
    ]
    
    application_ids = serializers.ListField(
        child=serializers.UUIDField(),
        min_length=1,
        max_length=100
    )
    action = serializers.ChoiceField(choices=ACTION_CHOICES)
    parameters = serializers.DictField(required=False, default=dict)
    
    def validate_application_ids(self, value):
        """Validate that all application IDs exist and belong to the user"""
        user = self.context['request'].user
        existing_apps = JobApplication.objects.filter(
            id__in=value,
            user=user
        ).values_list('id', flat=True)
        
        if len(existing_apps) != len(value):
            missing_ids = set(value) - set(existing_apps)
            raise serializers.ValidationError(f"Invalid application IDs: {missing_ids}")
        
        return value
    
    def validate(self, data):
        """Validate action parameters"""
        action = data['action']
        parameters = data.get('parameters', {})
        
        if action == 'update_status':
            if 'status' not in parameters:
                raise serializers.ValidationError("Status parameter required for update_status action")
            
            valid_statuses = [choice[0] for choice in JobApplication.STATUS_CHOICES]
            if parameters['status'] not in valid_statuses:
                raise serializers.ValidationError(f"Invalid status: {parameters['status']}")
        
        elif action in ['add_tag', 'remove_tag']:
            if 'tag' not in parameters:
                raise serializers.ValidationError(f"Tag parameter required for {action} action")
        
        return data
