from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q, Count, Avg
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
import logging

from .models import (
    UserProfile, WorkExperience, Education, Skill, Achievement,
    SkillEndorsement, PortfolioProject, CareerGoal, ProfessionalReference,
    UserPreferences
)
from .serializers import (
    ProfileSerializer, ProfileSummarySerializer, WorkExperienceSerializer,
    EducationSerializer, SkillSerializer, AchievementSerializer,
    SkillEndorsementSerializer, PortfolioProjectSerializer, CareerGoalSerializer,
    ProfessionalReferenceSerializer, UserPreferencesSerializer
)

User = get_user_model()
logger = logging.getLogger(__name__)


class ProfileViewSet(viewsets.ModelViewSet):
    """Enhanced ViewSet for managing user profiles"""
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return profiles for the authenticated user only"""
        return UserProfile.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Create profile for the authenticated user"""
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def me(self, request):
        """Get the current user's profile"""
        try:
            profile = UserProfile.objects.get(user=request.user)
            serializer = self.get_serializer(profile)
            return Response(serializer.data)
        except UserProfile.DoesNotExist:
            # Create a profile if it doesn't exist
            profile = UserProfile.objects.create(user=request.user)
            serializer = self.get_serializer(profile)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    @action(detail=False, methods=['post'])
    def calculate_completion(self, request):
        """Recalculate profile completion score"""
        try:
            profile = UserProfile.objects.get(user=request.user)
            score = profile.calculate_profile_completion()
            return Response({
                'profile_completion_score': score,
                'message': f'Profile completion: {score}%'
            })
        except UserProfile.DoesNotExist:
            return Response({'detail': 'Profile not found'}, status=404)
    
    @action(detail=False, methods=['get'])
    def summary(self, request):
        """Get a summary view of the profile"""
        try:
            profile = UserProfile.objects.get(user=request.user)
            serializer = ProfileSummarySerializer(profile)
            return Response(serializer.data)
        except UserProfile.DoesNotExist:
            return Response({'detail': 'Profile not found'}, status=404)


class WorkExperienceViewSet(viewsets.ModelViewSet):
    """ViewSet for managing work experience"""
    serializer_class = WorkExperienceSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return work experiences for the authenticated user"""
        return WorkExperience.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Create work experience for the authenticated user"""
        serializer.save(user=self.request.user)


class EducationViewSet(viewsets.ModelViewSet):
    """ViewSet for managing education"""
    serializer_class = EducationSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return education records for the authenticated user"""
        return Education.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Create education record for the authenticated user"""
        serializer.save(user=self.request.user)


class SkillViewSet(viewsets.ModelViewSet):
    """ViewSet for managing skills"""
    serializer_class = SkillSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return skills for the authenticated user"""
        return Skill.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Create skill for the authenticated user"""
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """Get skills grouped by category"""
        skills = self.get_queryset()
        skills_by_category = {}
        
        for skill in skills:
            if skill.category not in skills_by_category:
                skills_by_category[skill.category] = []
            skill_data = self.get_serializer(skill).data
            skills_by_category[skill.category].append(skill_data)
        
        return Response(skills_by_category)
    
    @action(detail=True, methods=['post'])
    def endorse(self, request, pk=None):
        """Endorse a skill (for other users)"""
        skill = self.get_object()
        
        # Can't endorse your own skills
        if skill.user == request.user:
            return Response(
                {'error': 'Cannot endorse your own skills'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Check if already endorsed
        if SkillEndorsement.objects.filter(
            skill=skill,
            endorsed_by=request.user
        ).exists():
            return Response(
                {'error': 'You have already endorsed this skill'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create endorsement
        endorsement_data = request.data.copy()
        endorsement_data['skill'] = skill.id
        
        serializer = SkillEndorsementSerializer(
            data=endorsement_data,
            context={
                'request': request,
                'endorsed_user': skill.user
            }
        )
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AchievementViewSet(viewsets.ModelViewSet):
    """ViewSet for managing achievements"""
    serializer_class = AchievementSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return achievements for the authenticated user"""
        return Achievement.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Create achievement for the authenticated user"""
        serializer.save(user=self.request.user)


class SkillEndorsementViewSet(viewsets.ModelViewSet):
    """ViewSet for managing skill endorsements"""
    serializer_class = SkillEndorsementSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return endorsements given by the authenticated user"""
        return SkillEndorsement.objects.filter(endorsed_by=self.request.user)
    
    @action(detail=False, methods=['get'])
    def received(self, request):
        """Get endorsements received by the authenticated user"""
        endorsements = SkillEndorsement.objects.filter(endorsed_user=request.user)
        serializer = self.get_serializer(endorsements, many=True)
        return Response(serializer.data)


class PortfolioProjectViewSet(viewsets.ModelViewSet):
    """ViewSet for managing portfolio projects"""
    serializer_class = PortfolioProjectSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return portfolio projects for the authenticated user"""
        return PortfolioProject.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Create portfolio project for the authenticated user"""
        serializer.save(user=self.request.user)
    
    def retrieve(self, request, *args, **kwargs):
        """Increment view count when retrieving a project"""
        instance = self.get_object()
        instance.increment_view_count()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured projects"""
        featured_projects = self.get_queryset().filter(is_featured=True)
        serializer = self.get_serializer(featured_projects, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def public(self, request):
        """Get public projects (for portfolio sharing)"""
        public_projects = self.get_queryset().filter(is_public=True)
        serializer = self.get_serializer(public_projects, many=True)
        return Response(serializer.data)


class CareerGoalViewSet(viewsets.ModelViewSet):
    """ViewSet for managing career goals"""
    serializer_class = CareerGoalSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return career goals for the authenticated user"""
        return CareerGoal.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Create career goal for the authenticated user"""
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def active(self, request):
        """Get active (not achieved) career goals"""
        active_goals = self.get_queryset().filter(is_achieved=False)
        serializer = self.get_serializer(active_goals, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def mark_achieved(self, request, pk=None):
        """Mark a career goal as achieved"""
        goal = self.get_object()
        goal.is_achieved = True
        goal.achieved_date = request.data.get('achieved_date')
        goal.progress_notes = request.data.get('progress_notes', goal.progress_notes)
        goal.save()
        
        serializer = self.get_serializer(goal)
        return Response(serializer.data)


class ProfessionalReferenceViewSet(viewsets.ModelViewSet):
    """ViewSet for managing professional references"""
    serializer_class = ProfessionalReferenceSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return references for the authenticated user"""
        return ProfessionalReference.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Create reference for the authenticated user"""
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def contactable(self, request):
        """Get references that can be contacted"""
        contactable_refs = self.get_queryset().filter(permission_to_contact=True)
        serializer = self.get_serializer(contactable_refs, many=True)
        return Response(serializer.data)


class UserPreferencesViewSet(viewsets.ModelViewSet):
    """ViewSet for managing user preferences"""
    serializer_class = UserPreferencesSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return preferences for the authenticated user"""
        return UserPreferences.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Create preferences for the authenticated user"""
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def me(self, request):
        """Get current user's preferences"""
        try:
            preferences = UserPreferences.objects.get(user=request.user)
            serializer = self.get_serializer(preferences)
            return Response(serializer.data)
        except UserPreferences.DoesNotExist:
            # Create default preferences
            preferences = UserPreferences.objects.create(user=request.user)
            serializer = self.get_serializer(preferences)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
