#!/usr/bin/env python
import requests
import json

def test_job_search():
    # First login to get a token
    login_url = 'http://127.0.0.1:8000/api/v1/auth/login/'
    login_data = {
        'email': 'demo@nyxo.com',
        'password': 'demo123'
    }
    
    print("🔐 Logging in...")
    login_response = requests.post(login_url, json=login_data)
    print(f"Login Status: {login_response.status_code}")
    
    if login_response.status_code == 200:
        token_data = login_response.json()
        access_token = token_data['tokens']['access']
        print("✅ Login successful!")
        
        # Now test job search
        search_url = 'http://127.0.0.1:8000/api/v1/external/search/'
        headers = {
            'Authorization': f'Bearer {access_token}',
            'Content-Type': 'application/json'
        }
        search_data = {
            'keywords': 'india',
            'location': '',
            'limit': 5
        }
        
        print("\n🔍 Testing job search...")
        print(f"URL: {search_url}")
        print(f"Data: {json.dumps(search_data, indent=2)}")
        
        search_response = requests.post(search_url, headers=headers, json=search_data)
        print(f"Search Status: {search_response.status_code}")
        
        if search_response.status_code == 200:
            result = search_response.json()
            print("✅ Job search successful!")
            print(f"Found {len(result.get('jobs', []))} jobs")
            if result.get('jobs'):
                print("\nFirst job:")
                first_job = result['jobs'][0]
                print(f"- Title: {first_job.get('title', 'N/A')}")
                print(f"- Company: {first_job.get('company', 'N/A')}")
                print(f"- Location: {first_job.get('location', 'N/A')}")
        else:
            print(f"❌ Job search failed: {search_response.status_code}")
            print("Response:", search_response.text[:500])
    else:
        print(f"❌ Login failed: {login_response.status_code}")
        print("Response:", login_response.text)

if __name__ == '__main__':
    test_job_search()