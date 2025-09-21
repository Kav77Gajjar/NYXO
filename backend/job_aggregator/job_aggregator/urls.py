"""
URL configuration for job_aggregator project.
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from .views import serve_react_app

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),
    
    # API Documentation (moved to more specific paths to avoid conflicts)
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    
    # API Routes
    path('api/v1/auth/', include('apps.users.urls')),
    path('api/v1/profiles/', include('apps.profiles.urls')),
    path('api/v1/jobs/', include('apps.jobs.urls')),
    path('api/v1/applications/', include('apps.applications.urls')),
    path('api/v1/external/', include('apps.external_apis.urls')),
    path('api/v1/analytics/', include('apps.analytics.urls')),
    
    # Root path explicitly serves React app
    path('', serve_react_app, {'path': ''}, name='frontend-root'),
    
    # Serve React frontend for all other non-API routes (catch-all)
    re_path(r'^(?!api/|admin/|static/|media/)(?P<path>.*)$', serve_react_app, name='frontend'),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    
    # Add debug toolbar URLs in development
    if 'debug_toolbar' in settings.INSTALLED_APPS:
        import debug_toolbar
        urlpatterns = [
            path('__debug__/', include(debug_toolbar.urls)),
        ] + urlpatterns
