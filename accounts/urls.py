from django.urls import path
from . import views

urlpatterns = [
    # API Overview
    path('', views.api_overview, name='api_overview'),

    # Authentication endpoints
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('refresh-token/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('check-auth/', views.check_auth_status, name='check_auth'),

    # User dashboard and profile
    path('dashboard/', views.DashboardView.as_view(), name='dashboard'),
    path('profile/', views.UserProfileView.as_view(), name='user_profile'),

    # Admin endpoints
    path('admin/users/', views.AdminUserListView.as_view(), name='admin_user_list'),
    path('admin/users/<int:pk>/', views.AdminUserDetailView.as_view(), name='admin_user_detail'),
]
