#!/usr/bin/env python3
"""
Test script to verify authentication flow
"""
import requests
import json

BASE_URL = 'http://127.0.0.1:8000/api/v1'

def test_login():
    """Test login endpoint"""
    login_data = {
        'email': 'demo@nyxo.com',
        'password': 'demo123'
    }
    
    print("Testing login...")
    response = requests.post(f'{BASE_URL}/auth/login/', json=login_data)
    print(f"Login Status: {response.status_code}")
    
    if response.status_code == 200:
        data = response.json()
        print("Login successful!")
        print(f"Response: {json.dumps(data, indent=2)}")
        
        # Test the profile endpoint with the token
        if 'tokens' in data and 'access' in data['tokens']:
            access_token = data['tokens']['access']
            test_profile(access_token)
        
        return data
    else:
        print(f"Login failed: {response.text}")
        return None

def test_profile(access_token):
    """Test profile endpoint with token"""
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    
    print("\nTesting profile endpoint...")
    response = requests.get(f'{BASE_URL}/auth/profile/', headers=headers)
    print(f"Profile Status: {response.status_code}")
    
    if response.status_code == 200:
        data = response.json()
        print("Profile fetch successful!")
        print(f"User data: {json.dumps(data, indent=2)}")
    else:
        print(f"Profile fetch failed: {response.text}")

if __name__ == '__main__':
    test_login()
