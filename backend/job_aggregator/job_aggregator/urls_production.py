from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.views.static import serve
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
import os

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),
    
    # API Documentation
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    
    # API Routes
    path('api/v1/auth/', include('apps.users.urls')),
    path('api/v1/profiles/', include('apps.profiles.urls')),
    path('api/v1/jobs/', include('apps.jobs.urls')),
    path('api/v1/applications/', include('apps.applications.urls')),
    path('api/v1/external/', include('apps.external_apis.urls')),
    path('api/v1/analytics/', include('apps.analytics.urls')),
]

# Serve static and media files
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    
    # Add debug toolbar URLs in development
    if 'debug_toolbar' in settings.INSTALLED_APPS:
        import debug_toolbar
        urlpatterns = [
            path('__debug__/', include(debug_toolbar.urls)),
        ] + urlpatterns
else:
    # In production, serve static files through Django for single-container deployment
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Serve frontend React app (catch-all route for client-side routing)
# This should be the last URL pattern to catch all frontend routes
if not settings.DEBUG or os.environ.get('SERVE_FRONTEND', 'True').lower() == 'true':
    urlpatterns += [
        # Serve index.html for all frontend routes
        path('', TemplateView.as_view(template_name='index.html'), name='home'),
        # Catch all other routes and serve index.html (for client-side routing)
        path('<path:path>', TemplateView.as_view(template_name='index.html'), name='frontend'),
    ]