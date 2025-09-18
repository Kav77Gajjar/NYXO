from django.urls import path
from . import views

app_name = 'external_apis'

urlpatterns = [
    # Job search endpoints
    path('search/', views.search_jobs, name='search_jobs'),
    path('search/history/', views.search_history, name='search_history'),
    
    # Job synchronization endpoints
    path('sync/', views.sync_jobs, name='sync_jobs'),
    path('import/', views.import_jobs, name='import_jobs'),
    
    # API status endpoint
    path('status/', views.api_status, name='api_status'),
]
