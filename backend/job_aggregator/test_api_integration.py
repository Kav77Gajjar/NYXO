#!/usr/bin/env python
"""
Test script to verify the API endpoints are working correctly
"""
import requests
import json

# Base URL for the API
BASE_URL = 'http://127.0.0.1:8000/api/v1'

def test_authentication():
    """Test user authentication"""
    print("🔑 Testing Authentication...")
    
    # Test login with demo user
    login_data = {
        'email': 'demo@nyxo.com',
        'password': 'demo123'
    }
    
    response = requests.post(f'{BASE_URL}/auth/login/', json=login_data)
    
    if response.status_code == 200:
        data = response.json()
        print(f"✅ Login successful!")
        access_token = data.get('tokens', {}).get('access')
        print(f"   Access token: {access_token[:50] if access_token else 'N/A'}...")
        return access_token
    else:
        print(f"❌ Login failed: {response.status_code}")
        print(f"   Error: {response.text}")
        return None

def test_user_profile(access_token):
    """Test user profile endpoint"""
    print("\n👤 Testing User Profile...")
    
    headers = {'Authorization': f'Bearer {access_token}'}
    
    # Get current user
    response = requests.get(f'{BASE_URL}/auth/user/', headers=headers)
    
    if response.status_code == 200:
        user = response.json()
        print(f"✅ User data retrieved successfully!")
        print(f"   Name: {user.get('first_name')} {user.get('last_name')}")
        print(f"   Email: {user.get('email')}")
    else:
        print(f"❌ User profile failed: {response.status_code}")
        return
    
    # Get user profile
    response = requests.get(f'{BASE_URL}/profiles/profile/', headers=headers)
    
    if response.status_code == 200:
        profile = response.json()
        print(f"✅ Profile data retrieved successfully!")
        print(f"   Job Title: {profile.get('current_job_title', 'N/A')}")
        print(f"   Industry: {profile.get('industry', 'N/A')}")
        print(f"   Experience: {profile.get('years_of_experience', 'N/A')} years")
    else:
        print(f"❌ Profile retrieval failed: {response.status_code}")

def test_jobs_endpoint(access_token):
    """Test jobs endpoint"""
    print("\n💼 Testing Jobs Endpoint...")
    
    headers = {'Authorization': f'Bearer {access_token}'}
    
    response = requests.get(f'{BASE_URL}/jobs/jobs/', headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        jobs = data.get('results', data) if isinstance(data, dict) and 'results' in data else data
        print(f"✅ Jobs retrieved successfully!")
        print(f"   Total jobs: {len(jobs) if isinstance(jobs, list) else 'Unknown'}")
        
        if isinstance(jobs, list) and jobs:
            job = jobs[0]
            print(f"   Sample job: {job.get('title')} at {job.get('company')}")
            print(f"   Location: {job.get('location')}")
            print(f"   Salary: ${job.get('salary_min', 0):,} - ${job.get('salary_max', 0):,}")
    else:
        print(f"❌ Jobs retrieval failed: {response.status_code}")
        print(f"   Error: {response.text}")

def test_applications_endpoint(access_token):
    """Test applications endpoint"""
    print("\n📝 Testing Applications Endpoint...")
    
    headers = {'Authorization': f'Bearer {access_token}'}
    
    response = requests.get(f'{BASE_URL}/applications/applications/', headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        applications = data.get('results', data) if isinstance(data, dict) and 'results' in data else data
        print(f"✅ Applications retrieved successfully!")
        print(f"   Total applications: {len(applications) if isinstance(applications, list) else 'Unknown'}")
        
        if isinstance(applications, list) and applications:
            app = applications[0]
            print(f"   Sample: {app.get('position_title')} at {app.get('company_name')}")
            print(f"   Status: {app.get('status')}")
            print(f"   Applied: {app.get('applied_date', 'N/A')[:10] if app.get('applied_date') else 'N/A'}")
    else:
        print(f"❌ Applications retrieval failed: {response.status_code}")
        print(f"   Error: {response.text}")

def test_analytics_endpoint(access_token):
    """Test analytics endpoint"""
    print("\n📊 Testing Analytics Endpoint...")
    
    headers = {'Authorization': f'Bearer {access_token}'}
    
    response = requests.get(f'{BASE_URL}/analytics/dashboard/', headers=headers)
    
    if response.status_code == 200:
        analytics = response.json()
        print(f"✅ Analytics retrieved successfully!")
        print(f"   Response keys: {list(analytics.keys()) if isinstance(analytics, dict) else 'Not a dict'}")
        
        if isinstance(analytics, dict):
            for key, value in analytics.items():
                if isinstance(value, (int, float, str)):
                    print(f"   {key}: {value}")
    else:
        print(f"❌ Analytics retrieval failed: {response.status_code}")
        print(f"   Error: {response.text}")

def main():
    """Run all API tests"""
    print("🚀 NYXO API Integration Test")
    print("=" * 40)
    
    # Test authentication first
    access_token = test_authentication()
    
    if not access_token:
        print("\n❌ Authentication failed - cannot proceed with other tests")
        return
    
    # Test all endpoints with the access token
    test_user_profile(access_token)
    test_jobs_endpoint(access_token)
    test_applications_endpoint(access_token)
    test_analytics_endpoint(access_token)
    
    print(f"\n✅ API Integration Test Complete!")
    print(f"🌐 Frontend should be able to connect at: http://localhost:5174/")
    print(f"🔧 Backend is running at: http://127.0.0.1:8000/")

if __name__ == '__main__':
    main()
