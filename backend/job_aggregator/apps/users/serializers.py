from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password
from .models import User


class UserRegistrationSerializer(serializers.ModelSerializer):
    """Serializer for user registration"""
    password = serializers.CharField(write_only=True, validators=[validate_password])
    password_confirm = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = (
            'username', 'email', 'first_name', 'last_name', 
            'password', 'password_confirm', 'phone', 'location'
        )
    
    def validate(self, attrs):
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError("Passwords do not match.")
        return attrs
    
    def create(self, validated_data):
        validated_data.pop('password_confirm')
        password = validated_data.pop('password')
        user = User.objects.create_user(**validated_data)
        user.set_password(password)
        user.save()
        return user


class UserLoginSerializer(serializers.Serializer):
    """Serializer for user login"""
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        
        if email and password:
            user = authenticate(username=email, password=password)
            if not user:
                raise serializers.ValidationError('Invalid email or password.')
            if not user.is_active:
                raise serializers.ValidationError('User account is disabled.')
        else:
            raise serializers.ValidationError('Must include "email" and "password".')
        
        attrs['user'] = user
        return attrs


class UserProfileSerializer(serializers.ModelSerializer):
    """Serializer for user profile information"""
    full_name = serializers.ReadOnlyField()
    profile_completion_percentage = serializers.ReadOnlyField(source='get_profile_completion_percentage')
    
    class Meta:
        model = User
        fields = (
            'id', 'username', 'email', 'first_name', 'last_name', 'full_name',
            'phone', 'location', 'linkedin_url', 'github_url', 'website_url',
            'profile_completed', 'profile_completion_percentage',
            'created_at', 'updated_at'
        )
        read_only_fields = ('id', 'username', 'email', 'created_at', 'updated_at')


class UserUpdateSerializer(serializers.ModelSerializer):
    """Serializer for updating user profile"""
    
    class Meta:
        model = User
        fields = (
            'first_name', 'last_name', 'phone', 'location', 
            'linkedin_url', 'github_url', 'website_url'
        )
    
    def update(self, instance, validated_data):
        # Update profile completion status
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        
        # Check if profile is now complete
        completion_percentage = instance.get_profile_completion_percentage()
        instance.profile_completed = completion_percentage >= 80
        
        instance.save()
        return instance
