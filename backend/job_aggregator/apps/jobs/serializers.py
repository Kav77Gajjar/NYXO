from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    """
    Serializer for job listings
    """
    days_ago = serializers.SerializerMethodField()
    salary_display = serializers.SerializerMethodField()
    
    class Meta:
        model = Job
        fields = [
            'id',
            'title',
            'company',
            'description',
            'requirements',
            'location',
            'job_type',
            'salary_min',
            'salary_max',
            'salary_display',
            'experience_level',
            'source_url',
            'source',
            'external_id',
            'days_ago',
            'created_at',
            'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'days_ago', 'salary_display']
    
    def get_days_ago(self, obj):
        """Calculate days since job was posted"""
        from django.utils import timezone
        delta = timezone.now() - obj.created_at
        return delta.days
    
    def get_salary_display(self, obj):
        """Format salary range for display"""
        if obj.salary_min and obj.salary_max:
            return f"${obj.salary_min:,} - ${obj.salary_max:,}"
        elif obj.salary_min:
            return f"${obj.salary_min:,}+"
        elif obj.salary_max:
            return f"Up to ${obj.salary_max:,}"
        else:
            return "Salary not specified"
    
    def validate(self, data):
        """Validate job data"""
        if data.get('salary_min') and data.get('salary_max'):
            if data['salary_min'] > data['salary_max']:
                raise serializers.ValidationError("Minimum salary cannot be greater than maximum salary")
        
        return data

class JobSearchSerializer(serializers.Serializer):
    """
    Serializer for job search parameters
    """
    search = serializers.CharField(required=False, max_length=255)
    location = serializers.CharField(required=False, max_length=100)
    job_type = serializers.CharField(required=False, max_length=50)
    salary_min = serializers.IntegerField(required=False, min_value=0)
    salary_max = serializers.IntegerField(required=False, min_value=0)
    experience_level = serializers.CharField(required=False, max_length=50)
    ordering = serializers.CharField(required=False, max_length=50)
    page = serializers.IntegerField(required=False, min_value=1, default=1)
    page_size = serializers.IntegerField(required=False, min_value=1, max_value=100, default=20)
