from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import (
    UserProfile, WorkExperience, Education, Skill, Achievement,
    SkillEndorsement, PortfolioProject, CareerGoal, ProfessionalReference,
    UserPreferences
)

User = get_user_model()


class WorkExperienceSerializer(serializers.ModelSerializer):
    """Serializer for work experience"""
    duration = serializers.ReadOnlyField()
    
    class Meta:
        model = WorkExperience
        fields = [
            'id', 'title', 'company', 'location', 'start_date', 'end_date',
            'is_current', 'description', 'duration', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def validate(self, data):
        """Validate work experience dates"""
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        is_current = data.get('is_current', False)
        
        if not is_current and not end_date:
            raise serializers.ValidationError("End date is required for past positions")
        
        if end_date and start_date and end_date < start_date:
            raise serializers.ValidationError("End date cannot be before start date")
        
        return data


class EducationSerializer(serializers.ModelSerializer):
    """Serializer for education"""
    year_range = serializers.ReadOnlyField()
    
    class Meta:
        model = Education
        fields = [
            'id', 'degree', 'school', 'field_of_study', 'start_year', 'end_year',
            'gpa', 'description', 'year_range', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def validate(self, data):
        """Validate education years"""
        start_year = data.get('start_year')
        end_year = data.get('end_year')
        
        if start_year and start_year < 1950:
            raise serializers.ValidationError("Start year cannot be before 1950")
        
        if end_year and start_year and end_year < start_year:
            raise serializers.ValidationError("End year cannot be before start year")
        
        return data


class SkillSerializer(serializers.ModelSerializer):
    """Serializer for skills"""
    endorsement_count = serializers.SerializerMethodField()
    average_rating = serializers.SerializerMethodField()
    
    class Meta:
        model = Skill
        fields = [
            'id', 'name', 'level', 'category', 'years_experience',
            'endorsement_count', 'average_rating', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def get_endorsement_count(self, obj):
        """Get number of endorsements for this skill"""
        return obj.endorsements.count()
    
    def get_average_rating(self, obj):
        """Get average rating from endorsements"""
        endorsements = obj.endorsements.all()
        if endorsements:
            return sum(e.rating for e in endorsements) / len(endorsements)
        return 0


class AchievementSerializer(serializers.ModelSerializer):
    """Serializer for achievements"""
    
    class Meta:
        model = Achievement
        fields = [
            'id', 'title', 'description', 'category', 'date_achieved',
            'organization', 'url', 'image', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class SkillEndorsementSerializer(serializers.ModelSerializer):
    """Serializer for skill endorsements"""
    endorsed_by_name = serializers.CharField(source='endorsed_by.full_name', read_only=True)
    skill_name = serializers.CharField(source='skill.name', read_only=True)
    
    class Meta:
        model = SkillEndorsement
        fields = [
            'id', 'skill', 'skill_name', 'endorsed_by', 'endorsed_by_name',
            'comment', 'rating', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'endorsed_user', 'created_at', 'updated_at']
    
    def create(self, validated_data):
        """Create endorsement with endorsed_user from context"""
        validated_data['endorsed_user'] = self.context['endorsed_user']
        validated_data['endorsed_by'] = self.context['request'].user
        return super().create(validated_data)


class PortfolioProjectSerializer(serializers.ModelSerializer):
    """Serializer for portfolio projects"""
    
    class Meta:
        model = PortfolioProject
        fields = [
            'id', 'title', 'description', 'project_type', 'status',
            'live_url', 'github_url', 'demo_url', 'technologies_used',
            'features', 'challenges', 'learnings', 'start_date', 'end_date',
            'thumbnail_image', 'images', 'is_featured', 'is_public',
            'view_count', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'view_count', 'created_at', 'updated_at']


class CareerGoalSerializer(serializers.ModelSerializer):
    """Serializer for career goals"""
    
    class Meta:
        model = CareerGoal
        fields = [
            'id', 'title', 'description', 'goal_type', 'category',
            'target_date', 'is_achieved', 'achieved_date', 'progress_notes',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def validate(self, data):
        """Validate career goal data"""
        is_achieved = data.get('is_achieved', False)
        achieved_date = data.get('achieved_date')
        
        if is_achieved and not achieved_date:
            raise serializers.ValidationError("Achieved date is required when goal is marked as achieved")
        
        return data


class ProfessionalReferenceSerializer(serializers.ModelSerializer):
    """Serializer for professional references"""
    
    class Meta:
        model = ProfessionalReference
        fields = [
            'id', 'name', 'title', 'company', 'email', 'phone',
            'relationship', 'relationship_duration', 'notes',
            'permission_to_contact', 'preferred_contact_method',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class UserPreferencesSerializer(serializers.ModelSerializer):
    """Serializer for user preferences"""
    
    class Meta:
        model = UserPreferences
        fields = [
            'job_search_radius_miles', 'auto_apply_enabled', 'auto_apply_criteria',
            'email_job_matches', 'email_application_updates', 'email_weekly_summary',
            'email_marketing', 'sms_enabled', 'sms_urgent_only', 'profile_visibility',
            'allow_recruiter_contact', 'show_salary_expectations', 'theme_preference',
            'dashboard_layout', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']


class ProfileSerializer(serializers.ModelSerializer):
    """Enhanced serializer for user profiles"""
    user_email = serializers.CharField(source='user.email', read_only=True)
    user_first_name = serializers.CharField(source='user.first_name', read_only=True)
    user_last_name = serializers.CharField(source='user.last_name', read_only=True)
    
    # Related data
    work_experiences = WorkExperienceSerializer(source='user.work_experiences', many=True, read_only=True)
    education = EducationSerializer(source='user.education', many=True, read_only=True)
    skills = SkillSerializer(source='user.skills', many=True, read_only=True)
    achievements = AchievementSerializer(source='user.achievements', many=True, read_only=True)
    portfolio_projects = PortfolioProjectSerializer(source='user.portfolio_projects', many=True, read_only=True)
    career_goals = CareerGoalSerializer(source='user.career_goals', many=True, read_only=True)
    references = ProfessionalReferenceSerializer(source='user.references', many=True, read_only=True)
    
    class Meta:
        model = UserProfile
        fields = [
            'id', 'user_email', 'user_first_name', 'user_last_name',
            # Professional info
            'current_job_title', 'industry', 'years_of_experience',
            # Job preferences
            'desired_job_titles', 'preferred_locations', 'preferred_salary_min',
            'preferred_salary_max', 'remote_work_preference',
            # Career preferences
            'career_level', 'company_size_preference', 'work_environment_preference',
            'benefits_priority',
            # About section
            'bio', 'headline',
            # Portfolio and links
            'resume_file', 'resume_data', 'portfolio_website', 'github_url',
            'linkedin_url', 'personal_website',
            # Visibility
            'is_open_to_opportunities', 'is_profile_public', 'availability_date',
            # Profile completion
            'profile_completion_score', 'last_updated_section',
            # Related data
            'work_experiences', 'education', 'skills', 'achievements',
            'portfolio_projects', 'career_goals', 'references',
            'created_at', 'updated_at'
        ]
        read_only_fields = [
            'id', 'created_at', 'updated_at', 'user_email', 'user_first_name',
            'user_last_name', 'profile_completion_score', 'work_experiences',
            'education', 'skills', 'achievements', 'portfolio_projects',
            'career_goals', 'references'
        ]
    
    def validate_years_of_experience(self, value):
        """Validate experience years"""
        if value is not None and (value < 0 or value > 50):
            raise serializers.ValidationError("Experience years must be between 0 and 50")
        return value
    
    def validate_preferred_salary_min(self, value):
        """Validate minimum salary"""
        if value is not None and value < 0:
            raise serializers.ValidationError("Minimum salary must be positive")
        return value
    
    def validate_preferred_salary_max(self, value):
        """Validate maximum salary"""
        if value is not None and value < 0:
            raise serializers.ValidationError("Maximum salary must be positive")
        return value
    
    def validate(self, data):
        """Cross-field validation"""
        min_salary = data.get('preferred_salary_min')
        max_salary = data.get('preferred_salary_max')
        
        if min_salary is not None and max_salary is not None and min_salary > max_salary:
            raise serializers.ValidationError("Minimum salary cannot be greater than maximum salary")
        
        return data
    
    def update(self, instance, validated_data):
        """Update profile and calculate completion score"""
        instance = super().update(instance, validated_data)
        instance.calculate_profile_completion()
        return instance


class ProfileSummarySerializer(serializers.ModelSerializer):
    """Lightweight serializer for profile summaries"""
    user_name = serializers.CharField(source='user.full_name', read_only=True)
    skills_count = serializers.SerializerMethodField()
    experience_count = serializers.SerializerMethodField()
    
    class Meta:
        model = UserProfile
        fields = [
            'id', 'user_name', 'current_job_title', 'headline', 'industry',
            'years_of_experience', 'is_open_to_opportunities', 'profile_completion_score',
            'skills_count', 'experience_count', 'updated_at'
        ]
    
    def get_skills_count(self, obj):
        """Get count of user skills"""
        return obj.user.skills.count()
    
    def get_experience_count(self, obj):
        """Get count of work experiences"""
        return obj.user.work_experiences.count()
