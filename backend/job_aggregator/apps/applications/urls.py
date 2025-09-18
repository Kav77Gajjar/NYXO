from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'applications'

# Create router for ViewSets
router = DefaultRouter()
router.register('applications', views.JobApplicationViewSet, basename='jobapplication')
router.register('events', views.ApplicationEventViewSet, basename='applicationevent')
router.register('documents', views.ApplicationDocumentViewSet, basename='applicationdocument')
router.register('reminders', views.ApplicationReminderViewSet, basename='applicationreminder')

urlpatterns = [
    # Include router URLs
    path('', include(router.urls)),
]
