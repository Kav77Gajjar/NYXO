from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'profiles'

# Create router for ViewSets
router = DefaultRouter()
router.register('profiles', views.ProfileViewSet, basename='profile')
router.register('work-experience', views.WorkExperienceViewSet, basename='workexperience')
router.register('education', views.EducationViewSet, basename='education')
router.register('skills', views.SkillViewSet, basename='skill')
router.register('achievements', views.AchievementViewSet, basename='achievement')
router.register('endorsements', views.SkillEndorsementViewSet, basename='skillendorsement')
router.register('portfolio', views.PortfolioProjectViewSet, basename='portfolioproject')
router.register('career-goals', views.CareerGoalViewSet, basename='careergoal')
router.register('references', views.ProfessionalReferenceViewSet, basename='professionalreference')
router.register('preferences', views.UserPreferencesViewSet, basename='userpreferences')

urlpatterns = [
    # Include router URLs
    path('', include(router.urls)),
]
