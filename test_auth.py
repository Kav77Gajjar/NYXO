#!/usr/bin/env python
"""
Test script for Nyxo Authentication API
Run this script to test all authentication endpoints
"""
import requests
import json

BASE_URL = "http://127.0.0.1:8000/api/auth"

def test_api_overview():
    """Test API overview endpoint"""
    print("Testing API Overview...")
    response = requests.get(f"{BASE_URL}/")
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    print("-" * 50)
    return response.status_code == 200

def test_registration():
    """Test user registration"""
    print("Testing User Registration...")
    data = {
        "username": "testuser123",
        "email": "test@example.com",
        "full_name": "Test User",
        "password": "SecurePass123!",
        "password_confirm": "SecurePass123!",
        "role": "user"
    }

    response = requests.post(f"{BASE_URL}/register/", json=data)
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    print("-" * 50)

    if response.status_code == 201:
        return response.json().get('tokens', {})
    return None

def test_login():
    """Test user login"""
    print("Testing User Login...")
    data = {
        "username": "testuser123",
        "password": "SecurePass123!"
    }

    response = requests.post(f"{BASE_URL}/login/", json=data)
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    print("-" * 50)

    if response.status_code == 200:
        return response.json().get('tokens', {})
    return None

def test_dashboard(access_token):
    """Test dashboard access with authentication"""
    print("Testing Dashboard Access...")
    headers = {'Authorization': f'Bearer {access_token}'}

    response = requests.get(f"{BASE_URL}/dashboard/", headers=headers)
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    print("-" * 50)
    return response.status_code == 200

def test_profile(access_token):
    """Test profile access with authentication"""
    print("Testing Profile Access...")
    headers = {'Authorization': f'Bearer {access_token}'}

    response = requests.get(f"{BASE_URL}/profile/", headers=headers)
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    print("-" * 50)
    return response.status_code == 200

def test_endpoints_without_auth():
    """Test GET requests to login and register endpoints"""
    print("Testing Login GET (should show endpoint info)...")
    response = requests.get(f"{BASE_URL}/login/")
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    print("-" * 50)

    print("Testing Register GET (should show endpoint info)...")
    response = requests.get(f"{BASE_URL}/register/")
    print(f"Status: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    print("-" * 50)

def main():
    """Run all tests"""
    print("=" * 60)
    print("NYXO AUTHENTICATION API TESTS")
    print("=" * 60)

    # Test API overview
    test_api_overview()

    # Test endpoints without auth
    test_endpoints_without_auth()

    # Test registration
    tokens = test_registration()
    if not tokens:
        print("Registration failed, trying login...")
        tokens = test_login()

    if tokens:
        access_token = tokens.get('access')
        if access_token:
            # Test authenticated endpoints
            test_dashboard(access_token)
            test_profile(access_token)
        else:
            print("No access token received!")
    else:
        print("Authentication failed!")

    print("=" * 60)
    print("Tests completed!")

if __name__ == "__main__":
    main()
