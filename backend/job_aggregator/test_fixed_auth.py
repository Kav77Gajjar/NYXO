#!/usr/bin/env python
"""
Quick test to verify the fixed auth endpoint
"""
import requests

BASE_URL = 'http://127.0.0.1:8000/api/v1'

def test_fixed_auth():
    print("🔑 Testing Fixed Authentication Flow...")
    
    # Step 1: Login
    login_data = {
        'email': 'demo@nyxo.com',
        'password': 'demo123'
    }
    
    response = requests.post(f'{BASE_URL}/auth/login/', json=login_data)
    
    if response.status_code == 200:
        data = response.json()
        access_token = data.get('tokens', {}).get('access')
        print(f"✅ Login successful!")
        print(f"   Access token: {access_token[:50] if access_token else 'N/A'}...")
        
        if access_token:
            # Step 2: Test user profile endpoint
            headers = {'Authorization': f'Bearer {access_token}'}
            
            profile_response = requests.get(f'{BASE_URL}/auth/profile/', headers=headers)
            
            if profile_response.status_code == 200:
                user_data = profile_response.json()
                print(f"✅ User profile retrieved successfully!")
                print(f"   User: {user_data.get('first_name')} {user_data.get('last_name')}")
                print(f"   Email: {user_data.get('email')}")
                print(f"🎉 Frontend should now redirect after login!")
            else:
                print(f"❌ User profile failed: {profile_response.status_code}")
                print(f"   Error: {profile_response.text}")
        else:
            print("❌ No access token received")
    else:
        print(f"❌ Login failed: {response.status_code}")
        print(f"   Error: {response.text}")

if __name__ == '__main__':
    test_fixed_auth()
