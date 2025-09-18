#!/usr/bin/env python
"""
Test API endpoints for the Job Application Tracking System
"""
import os
import django
import requests
import json
from datetime import datetime, timedelta

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'job_aggregator.settings')
django.setup()

from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

def get_auth_token():
    """Get authentication token for API requests"""
    try:
        user = User.objects.get(email='admin@nyxo.com')
        refresh = RefreshToken.for_user(user)
        return str(refresh.access_token)
    except User.DoesNotExist:
        print("❌ User not found")
        return None

def test_api_endpoints():
    """Test the application tracking API endpoints"""
    print("🧪 Testing Application Tracking API Endpoints")
    print("=" * 60)
    
    # Get authentication token
    token = get_auth_token()
    if not token:
        return
    
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    
    base_url = 'http://127.0.0.1:8000/api/applications'
    
    # Test 1: Get application summary
    print("📊 Testing Application Summary API...")
    try:
        response = requests.get(f'{base_url}/applications/summary/', headers=headers)
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Summary retrieved successfully:")
            print(f"   Total Applications: {data['total_applications']}")
            print(f"   Active Applications: {data['active_applications']}")
            print(f"   Pending Interviews: {data['pending_interviews']}")
            print(f"   This Week: {data['applications_this_week']}")
            print(f"   Status Breakdown: {data['status_breakdown']}")
        else:
            print(f"❌ Failed to get summary: {response.status_code}")
    except requests.exceptions.ConnectionError:
        print("❌ Connection failed - make sure Django server is running")
        return
    
    # Test 2: Get all applications
    print(f"\n📋 Testing Applications List API...")
    try:
        response = requests.get(f'{base_url}/applications/', headers=headers)
        if response.status_code == 200:
            data = response.json()
            applications = data.get('results', data) if 'results' in data else data
            print(f"✅ Found {len(applications)} applications:")
            for app in applications:
                print(f"   - {app['position_title']} at {app['company_name']} ({app['status_display']})")
        else:
            print(f"❌ Failed to get applications: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 3: Filter applications by status
    print(f"\n🔍 Testing Application Filtering...")
    try:
        response = requests.get(f'{base_url}/applications/?status=applied', headers=headers)
        if response.status_code == 200:
            data = response.json()
            applications = data.get('results', data) if 'results' in data else data
            print(f"✅ Found {len(applications)} applications with status 'applied'")
        else:
            print(f"❌ Failed to filter applications: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 4: Create new application
    print(f"\n➕ Testing Application Creation...")
    new_app_data = {
        'company_name': 'InnovateTech',
        'position_title': 'DevOps Engineer',
        'location': 'Seattle, WA',
        'salary_range': '$130,000 - $160,000',
        'status': 'draft',
        'priority': 'high',
        'job_url': 'https://innovatetech.com/jobs/devops',
        'notes': 'Found this position through a networking event',
        'tags': ['devops', 'aws', 'kubernetes'],
        'requirements_match': {
            'skills_match': 80,
            'experience_match': 85
        }
    }
    
    try:
        response = requests.post(f'{base_url}/applications/', 
                               headers=headers, 
                               data=json.dumps(new_app_data))
        if response.status_code == 201:
            app = response.json()
            print(f"✅ Created application: {app['position_title']} at {app['company_name']}")
            app_id = app['id']
        else:
            print(f"❌ Failed to create application: {response.status_code}")
            print(f"   Response: {response.text}")
            return
    except Exception as e:
        print(f"❌ Error: {e}")
        return
    
    # Test 5: Update application status
    print(f"\n✏️ Testing Application Update...")
    update_data = {
        'status': 'applied',
        'applied_date': datetime.now().isoformat(),
        'notes': 'Application submitted through company portal'
    }
    
    try:
        response = requests.patch(f'{base_url}/applications/{app_id}/', 
                                headers=headers, 
                                data=json.dumps(update_data))
        if response.status_code == 200:
            app = response.json()
            print(f"✅ Updated application status to: {app['status_display']}")
        else:
            print(f"❌ Failed to update application: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 6: Get application events
    print(f"\n📅 Testing Application Events API...")
    try:
        response = requests.get(f'{base_url}/events/', headers=headers)
        if response.status_code == 200:
            data = response.json()
            events = data.get('results', data) if 'results' in data else data
            print(f"✅ Found {len(events)} events:")
            for event in events[:3]:  # Show first 3 events
                print(f"   - {event['title']} ({event['event_type_display']})")
        else:
            print(f"❌ Failed to get events: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 7: Get upcoming reminders
    print(f"\n⏰ Testing Reminders API...")
    try:
        response = requests.get(f'{base_url}/reminders/upcoming/', headers=headers)
        if response.status_code == 200:
            reminders = response.json()
            print(f"✅ Found {len(reminders)} upcoming reminders:")
            for reminder in reminders:
                print(f"   - {reminder['title']} (due: {reminder['reminder_date'][:10]})")
        else:
            print(f"❌ Failed to get reminders: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 8: Get analytics
    print(f"\n📈 Testing Analytics API...")
    try:
        response = requests.get(f'{base_url}/applications/stats/', headers=headers)
        if response.status_code == 200:
            analytics = response.json()
            print(f"✅ Analytics retrieved successfully:")
            print(f"   Total Applications: {analytics['total_applications']}")
            print(f"   Response Rate: {analytics['response_rate']}%")
            print(f"   Interview Rate: {analytics['interview_rate']}%")
            print(f"   Offer Rate: {analytics['offer_rate']}%")
        else:
            print(f"❌ Failed to get analytics: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    print(f"\n✅ API endpoint testing completed!")

if __name__ == '__main__':
    test_api_endpoints()
