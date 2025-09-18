from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('', views.JobViewSet, basename='job')

urlpatterns = [
    path('', include(router.urls)),
    path('search/', views.JobSearchView.as_view(), name='job-search'),
    path('recommendations/', views.JobRecommendationView.as_view(), name='job-recommendations'),
    path('match/<int:job_id>/', views.JobRecommendationView.as_view(), name='job-match-details'),
]
