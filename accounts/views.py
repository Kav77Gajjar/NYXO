from rest_framework import status, generics, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .models import User
from .serializers import (
    UserRegistrationSerializer,
    UserLoginSerializer,
    UserSerializer,
    UserProfileSerializer
)


class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    @swagger_auto_schema(
        operation_description="Get registration endpoint information",
        operation_summary="Registration endpoint info",
        tags=['Authentication'],
        responses={
            200: openapi.Response(
                description="Registration endpoint information",
                examples={
                    "application/json": {
                        "message": "User registration endpoint - use POST method to register",
                        "required_fields": ["username", "email", "full_name", "password", "password_confirm"],
                        "optional_fields": ["role"]
                    }
                }
            )
        }
    )
    def get(self, request):
        """Show registration endpoint information when accessed via GET"""
        return Response({
            'message': 'User registration endpoint - use POST method to register',
            'required_fields': ['username', 'email', 'full_name', 'password', 'password_confirm'],
            'optional_fields': ['role'],
            'password_requirements': [
                'At least 8 characters long',
                'At least one uppercase letter',
                'At least one lowercase letter',
                'At least one number',
                'At least one special character'
            ],
            'example': {
                'username': 'johndoe',
                'email': 'john@example.com',
                'full_name': 'John Doe',
                'password': 'SecurePass123!',
                'password_confirm': 'SecurePass123!',
                'role': 'user'
            }
        }, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        operation_description="Register a new user with role-based access control",
        operation_summary="User Registration",
        tags=['Authentication'],
        request_body=UserRegistrationSerializer,
        responses={
            201: openapi.Response(
                description="User registered successfully",
                examples={
                    "application/json": {
                        "message": "User registered successfully",
                        "user": {
                            "id": 1,
                            "username": "johndoe",
                            "email": "john@example.com",
                            "full_name": "John Doe",
                            "role": "user"
                        },
                        "tokens": {
                            "refresh": "refresh_token_here",
                            "access": "access_token_here"
                        },
                        "redirect_url": "/dashboard"
                    }
                }
            ),
            400: openapi.Response(
                description="Validation errors",
                examples={
                    "application/json": {
                        "errors": {
                            "username": ["Username already exists."],
                            "password": ["Password must contain at least one uppercase letter."]
                        }
                    }
                }
            )
        }
    )
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)

            return Response({
                'message': 'User registered successfully',
                'user': UserSerializer(user).data,
                'tokens': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                },
                'redirect_url': '/dashboard'
            }, status=status.HTTP_201_CREATED)

        return Response({
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    @swagger_auto_schema(
        operation_description="Get login endpoint information",
        operation_summary="Login endpoint info",
        tags=['Authentication'],
        responses={
            200: openapi.Response(
                description="Login endpoint information",
                examples={
                    "application/json": {
                        "message": "Login endpoint - use POST method to authenticate",
                        "required_fields": ["username", "password"]
                    }
                }
            )
        }
    )
    def get(self, request):
        """Show login endpoint information when accessed via GET"""
        return Response({
            'message': 'Login endpoint - use POST method to authenticate',
            'required_fields': ['username', 'password'],
            'example': {
                'username': 'your_username',
                'password': 'your_password'
            }
        }, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        operation_description="Authenticate user and return JWT tokens",
        operation_summary="User Login",
        tags=['Authentication'],
        request_body=UserLoginSerializer,
        responses={
            200: openapi.Response(
                description="Login successful",
                examples={
                    "application/json": {
                        "message": "Login successful",
                        "user": {
                            "id": 1,
                            "username": "johndoe",
                            "email": "john@example.com",
                            "full_name": "John Doe",
                            "role": "user"
                        },
                        "tokens": {
                            "refresh": "refresh_token_here",
                            "access": "access_token_here"
                        },
                        "redirect_url": "/dashboard"
                    }
                }
            ),
            400: openapi.Response(
                description="Invalid credentials",
                examples={
                    "application/json": {
                        "errors": {
                            "non_field_errors": ["Invalid credentials."]
                        }
                    }
                }
            )
        }
    )
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            refresh = RefreshToken.for_user(user)

            return Response({
                'message': 'Login successful',
                'user': UserSerializer(user).data,
                'tokens': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                },
                'redirect_url': '/dashboard'
            }, status=status.HTTP_200_OK)

        return Response({
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({
                'message': 'Logout successful'
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({
                'error': 'Invalid token'
            }, status=status.HTTP_400_BAD_REQUEST)


class DashboardView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Get user dashboard with personalized information",
        operation_summary="User Dashboard",
        tags=['User Dashboard'],
        manual_parameters=[
            openapi.Parameter(
                'Authorization',
                openapi.IN_HEADER,
                description="Bearer token for authentication",
                type=openapi.TYPE_STRING,
                required=True
            )
        ],
        responses={
            200: openapi.Response(
                description="Dashboard data retrieved successfully",
                examples={
                    "application/json": {
                        "message": "Welcome to your dashboard, John Doe!",
                        "user": {
                            "id": 1,
                            "username": "johndoe",
                            "email": "john@example.com",
                            "full_name": "John Doe",
                            "role": "user"
                        },
                        "dashboard_data": {
                            "user_role": "user",
                            "is_admin": False,
                            "account_status": "Active",
                            "member_since": "August 26, 2025",
                            "last_login": "August 26, 2025 at 03:30 PM"
                        }
                    }
                }
            ),
            401: openapi.Response(
                description="Authentication required",
                examples={
                    "application/json": {
                        "detail": "Authentication credentials were not provided."
                    }
                }
            )
        }
    )
    def get(self, request):
        user = request.user
        return Response({
            'message': f'Welcome to your dashboard, {user.full_name}!',
            'user': UserSerializer(user).data,
            'dashboard_data': {
                'user_role': user.role,
                'is_admin': user.is_admin,
                'account_status': 'Active' if user.is_active else 'Inactive',
                'member_since': user.date_joined.strftime('%B %d, %Y'),
                'last_login': user.last_login.strftime('%B %d, %Y at %I:%M %p') if user.last_login else 'Never'
            }
        }, status=status.HTTP_200_OK)


class UserProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = UserProfileSerializer(request.user)
        return Response({
            'user': serializer.data
        }, status=status.HTTP_200_OK)

    def put(self, request):
        serializer = UserProfileSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Profile updated successfully',
                'user': serializer.data
            }, status=status.HTTP_200_OK)

        return Response({
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


class TokenRefreshView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        try:
            refresh_token = request.data.get('refresh_token')
            if not refresh_token:
                return Response({
                    'error': 'Refresh token is required'
                }, status=status.HTTP_400_BAD_REQUEST)

            token = RefreshToken(refresh_token)
            return Response({
                'access': str(token.access_token)
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({
                'error': 'Invalid refresh token'
            }, status=status.HTTP_400_BAD_REQUEST)


# Admin-only views
class AdminUserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if not self.request.user.is_admin:
            return User.objects.none()
        return User.objects.all()


class AdminUserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if not self.request.user.is_admin:
            return User.objects.none()
        return User.objects.all()


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def api_overview(request):
    """API overview showing all available endpoints"""
    return Response({
        'message': 'Nyxo Authentication API',
        'version': '1.0',
        'endpoints': {
            'authentication': {
                'register': {
                    'url': '/api/auth/register/',
                    'methods': ['GET', 'POST'],
                    'description': 'User registration'
                },
                'login': {
                    'url': '/api/auth/login/',
                    'methods': ['GET', 'POST'],
                    'description': 'User login'
                },
                'logout': {
                    'url': '/api/auth/logout/',
                    'methods': ['POST'],
                    'description': 'User logout (requires auth)'
                },
                'refresh_token': {
                    'url': '/api/auth/refresh-token/',
                    'methods': ['POST'],
                    'description': 'Refresh JWT token'
                }
            },
            'user': {
                'dashboard': {
                    'url': '/api/auth/dashboard/',
                    'methods': ['GET'],
                    'description': 'User dashboard (requires auth)'
                },
                'profile': {
                    'url': '/api/auth/profile/',
                    'methods': ['GET', 'PUT'],
                    'description': 'User profile management (requires auth)'
                },
                'check_auth': {
                    'url': '/api/auth/check-auth/',
                    'methods': ['GET'],
                    'description': 'Check authentication status'
                }
            },
            'admin': {
                'users_list': {
                    'url': '/api/auth/admin/users/',
                    'methods': ['GET'],
                    'description': 'List all users (admin only)'
                },
                'user_detail': {
                    'url': '/api/auth/admin/users/<id>/',
                    'methods': ['GET', 'PUT', 'DELETE'],
                    'description': 'Manage specific user (admin only)'
                }
            }
        }
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def check_auth_status(request):
    """Check if user is authenticated and return user info"""
    return Response({
        'authenticated': True,
        'user': UserSerializer(request.user).data
    }, status=status.HTTP_200_OK)
