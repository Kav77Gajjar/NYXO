"""
Unit tests for the users app
"""
from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
import json

User = get_user_model()


class UserModelTest(TestCase):
    """Test the User model"""
    
    def setUp(self):
        self.user_data = {
            'email': 'test@example.com',
            'username': 'testuser',
            'first_name': 'Test',
            'last_name': 'User',
            'password': 'testpass123'
        }
    
    def test_create_user(self):
        """Test creating a user"""
        user = User.objects.create_user(**self.user_data)
        self.assertEqual(user.email, self.user_data['email'])
        self.assertEqual(user.username, self.user_data['username'])
        self.assertTrue(user.check_password(self.user_data['password']))
        self.assertFalse(user.profile_completed)
    
    def test_user_str_representation(self):
        """Test user string representation"""
        user = User.objects.create_user(**self.user_data)
        expected = f"{user.first_name} {user.last_name} ({user.email})"
        self.assertEqual(str(user), expected)
    
    def test_full_name_property(self):
        """Test full_name property"""
        user = User.objects.create_user(**self.user_data)
        expected = f"{user.first_name} {user.last_name}"
        self.assertEqual(user.full_name, expected)
    
    def test_profile_completion_percentage(self):
        """Test profile completion calculation"""
        user = User.objects.create_user(**self.user_data)
        # Should have email, first_name, last_name (3/6 fields)
        self.assertEqual(user.get_profile_completion_percentage(), 50.0)
        
        # Add more fields
        user.phone = '+1234567890'
        user.location = 'Test City'
        user.linkedin_url = 'https://linkedin.com/in/testuser'
        user.save()
        
        # Should now have 6/6 fields
        self.assertEqual(user.get_profile_completion_percentage(), 100.0)


class AuthenticationAPITest(APITestCase):
    """Test authentication API endpoints"""
    
    def setUp(self):
        self.client = APIClient()
        self.register_url = '/api/v1/auth/register/'
        self.login_url = '/api/v1/auth/login/'
        self.profile_url = '/api/v1/auth/profile/'
        
        self.user_data = {
            'email': 'test@example.com',
            'username': 'testuser',
            'first_name': 'Test',
            'last_name': 'User',
            'password': 'testpass123'
        }
    
    def test_user_registration(self):
        """Test user registration"""
        response = self.client.post(
            self.register_url,
            self.user_data,
            format='json'
        )
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('user', response.data)
        self.assertIn('tokens', response.data)
        self.assertEqual(response.data['user']['email'], self.user_data['email'])
    
    def test_user_login(self):
        """Test user login"""
        # Create user first
        user = User.objects.create_user(**self.user_data)
        
        login_data = {
            'email': self.user_data['email'],
            'password': self.user_data['password']
        }
        
        response = self.client.post(
            self.login_url,
            login_data,
            format='json'
        )
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('user', response.data)
        self.assertIn('tokens', response.data)
        self.assertEqual(response.data['user']['email'], user.email)
    
    def test_invalid_login(self):
        """Test login with invalid credentials"""
        login_data = {
            'email': 'nonexistent@example.com',
            'password': 'wrongpassword'
        }
        
        response = self.client.post(
            self.login_url,
            login_data,
            format='json'
        )
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('error', response.data)
    
    def test_get_user_profile(self):
        """Test getting user profile"""
        user = User.objects.create_user(**self.user_data)
        refresh = RefreshToken.for_user(user)
        
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')
        response = self.client.get(self.profile_url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['email'], user.email)
        self.assertEqual(response.data['full_name'], user.full_name)
    
    def test_update_user_profile(self):
        """Test updating user profile"""
        user = User.objects.create_user(**self.user_data)
        refresh = RefreshToken.for_user(user)
        
        update_data = {
            'first_name': 'Updated',
            'last_name': 'Name',
            'phone': '+1234567890',
            'location': 'New City'
        }
        
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')
        response = self.client.put(
            self.profile_url,
            update_data,
            format='json'
        )
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['first_name'], update_data['first_name'])
        self.assertEqual(response.data['phone'], update_data['phone'])
        
        # Verify in database
        user.refresh_from_db()
        self.assertEqual(user.first_name, update_data['first_name'])
        self.assertEqual(user.phone, update_data['phone'])
    
    def test_unauthenticated_profile_access(self):
        """Test accessing profile without authentication"""
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class UserProfileCompletionTest(TestCase):
    """Test user profile completion functionality"""
    
    def test_profile_completion_tracking(self):
        """Test profile completion percentage calculation"""
        user = User.objects.create_user(
            email='test@example.com',
            username='testuser',
            first_name='Test',
            last_name='User',
            password='testpass123'
        )
        
        # Initially should have basic fields
        initial_percentage = user.get_profile_completion_percentage()
        self.assertGreater(initial_percentage, 0)
        
        # Add more fields
        user.phone = '+1234567890'
        user.location = 'Test City'
        user.save()
        
        # Should increase
        updated_percentage = user.get_profile_completion_percentage()
        self.assertGreater(updated_percentage, initial_percentage)
