from rest_framework import serializers
from ..jobs.models import Job, SearchHistory


class JobSearchSerializer(serializers.Serializer):
    """Serializer for job search requests"""
    keywords = serializers.CharField(max_length=255, help_text="Search keywords")
    location = serializers.CharField(max_length=100, required=False, allow_blank=True, help_text="Job location")
    page = serializers.IntegerField(min_value=1, default=1, help_text="Page number")
    limit = serializers.IntegerField(min_value=1, max_value=100, default=20, help_text="Results per page")
    salary_min = serializers.IntegerField(required=False, help_text="Minimum salary")
    salary_max = serializers.IntegerField(required=False, help_text="Maximum salary")
    job_type = serializers.ChoiceField(
        choices=[
            ('full-time', 'Full Time'),
            ('part-time', 'Part Time'),
            ('contract', 'Contract'),
            ('internship', 'Internship'),
            ('freelance', 'Freelance'),
        ],
        required=False,
        help_text="Job type filter"
    )
    remote_only = serializers.BooleanField(default=False, help_text="Show only remote jobs")
    date_posted = serializers.ChoiceField(
        choices=[
            ('1', 'Last 24 hours'),
            ('3', 'Last 3 days'),
            ('7', 'Last week'),
            ('14', 'Last 2 weeks'),
            ('30', 'Last month'),
        ],
        required=False,
        help_text="Filter by posting date"
    )
    radius = serializers.IntegerField(min_value=0, max_value=100, required=False, help_text="Search radius in miles")
    
    def validate(self, data):
        """Custom validation for search parameters"""
        salary_min = data.get('salary_min')
        salary_max = data.get('salary_max')
        
        if salary_min and salary_max and salary_min > salary_max:
            raise serializers.ValidationError("Minimum salary cannot be greater than maximum salary")
        
        return data


class ExternalJobSerializer(serializers.Serializer):
    """Serializer for external job data"""
    external_id = serializers.CharField(max_length=255)
    source = serializers.CharField(max_length=50)
    source_url = serializers.URLField()
    title = serializers.CharField(max_length=255)
    company = serializers.CharField(max_length=255)
    location = serializers.CharField(max_length=255)
    description = serializers.CharField()
    salary = serializers.JSONField(required=False)
    job_type = serializers.CharField(max_length=50)
    posted_date = serializers.DateTimeField()
    remote_allowed = serializers.BooleanField(default=False)
    tags = serializers.ListField(child=serializers.CharField(max_length=50), required=False)


class JobSearchResponseSerializer(serializers.Serializer):
    """Serializer for job search responses"""
    success = serializers.BooleanField()
    jobs = ExternalJobSerializer(many=True)
    total_count = serializers.IntegerField()
    page = serializers.IntegerField()
    limit = serializers.IntegerField()
    has_next = serializers.BooleanField()
    source = serializers.CharField(max_length=50)
    error = serializers.CharField(required=False)


class SearchHistorySerializer(serializers.ModelSerializer):
    """Serializer for search history"""
    class Meta:
        model = SearchHistory
        fields = ['id', 'user', 'keywords', 'location', 'filters', 'results_count', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']


class JobSyncSerializer(serializers.Serializer):
    """Serializer for job synchronization requests"""
    source = serializers.ChoiceField(choices=[('jooble', 'Jooble')], default='jooble')
    batch_size = serializers.IntegerField(min_value=1, max_value=100, default=50)
    keywords = serializers.CharField(max_length=255, required=False)
    location = serializers.CharField(max_length=100, required=False)
    force_update = serializers.BooleanField(default=False, help_text="Force update existing jobs")


class JobImportSerializer(serializers.Serializer):
    """Serializer for importing external jobs to local database"""
    external_jobs = ExternalJobSerializer(many=True)
    overwrite_existing = serializers.BooleanField(default=False)
    
    def validate_external_jobs(self, value):
        """Validate external jobs data"""
        if not value:
            raise serializers.ValidationError("At least one job must be provided")
        
        if len(value) > 100:
            raise serializers.ValidationError("Cannot import more than 100 jobs at once")
        
        return value
