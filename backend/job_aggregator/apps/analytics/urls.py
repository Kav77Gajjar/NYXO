from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'analytics'

# Create router for ViewSets
router = DefaultRouter()
router.register('market-analytics', views.JobMarketAnalyticsViewSet, basename='jobmarketanalytics')
router.register('career-insights', views.UserCareerInsightViewSet, basename='usercareerinsight')
router.register('success-metrics', views.ApplicationSuccessMetricsViewSet, basename='applicationsuccessmetrics')
router.register('recommendations', views.PersonalizedRecommendationViewSet, basename='personalizedrecommendation')
router.register('dashboard', views.AnalyticsDashboardViewSet, basename='analyticsdashboard')

urlpatterns = [
    # Include router URLs
    path('', include(router.urls)),
]
