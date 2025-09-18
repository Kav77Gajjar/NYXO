#!/usr/bin/env python
"""
Test script for the job matching algorithm
"""
import os
import sys
import django

# Add the project directory to the Python path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'job_aggregator.settings')
django.setup()

from apps.users.models import User
from apps.profiles.models import UserProfile, Skill
from apps.jobs.matching_service import job_matching_service
from apps.jobs.models import Job

def test_matching_algorithm():
    """Test the job matching algorithm"""
    print("🧪 Testing Job Matching Algorithm")
    print("=" * 50)
    
    try:
        # Get the admin user
        user = User.objects.get(email='admin@nyxo.com')
        print(f"✅ Found user: {user.email}")
        
        # Create/update profile
        profile, created = UserProfile.objects.get_or_create(
            user=user,
            defaults={
                'years_of_experience': 5,
                'preferred_locations': ['New York', 'San Francisco'],
                'preferred_salary_min': 90000,
                'preferred_salary_max': 140000,
                'industry': 'Technology'
            }
        )
        
        if created:
            print("✅ Created new profile")
        else:
            print("✅ Updated existing profile")
        
        # Add skills
        skills_data = [
            ('Python', 'advanced', 'technical'),
            ('Django', 'advanced', 'technical'), 
            ('JavaScript', 'intermediate', 'technical'),
            ('React', 'intermediate', 'technical'),
            ('PostgreSQL', 'intermediate', 'technical')
        ]
        
        for skill_name, level, category in skills_data:
            skill, created = Skill.objects.get_or_create(
                user=user,
                name=skill_name,
                defaults={
                    'level': level,
                    'category': category
                }
            )
        
        print(f"✅ Added/verified {len(skills_data)} skills")
        
        # Test matching against all jobs
        jobs = Job.objects.all()
        print(f"🔍 Testing against {jobs.count()} jobs")
        print("-" * 50)
        
        for job in jobs:
            match_result = job_matching_service.calculate_job_match(user, job)
            print(f"📋 {job.title} at {job.company}")
            print(f"   Overall Score: {match_result['overall_score']:.1f}%")
            print(f"   Skills: {match_result['skill_score']:.1f}% | Experience: {match_result['experience_score']:.1f}%")
            print(f"   Location: {match_result['location_score']:.1f}% | Salary: {match_result['salary_score']:.1f}%")
            print(f"   Matching Skills: {', '.join(match_result['matching_skills'])}")
            print(f"   Recommendation: {match_result['recommendation_level']}")
            print()
        
        # Get top recommendations
        print("🎯 Top Recommendations")
        print("-" * 50)
        
        recommendations = job_matching_service.get_job_recommendations(user, limit=3)
        
        if recommendations:
            for i, (job, match_details) in enumerate(recommendations, 1):
                print(f"{i}. {job.title} at {job.company}")
                print(f"   Score: {match_details['overall_score']:.1f}%")
                print(f"   Reasons: {', '.join(match_details['match_reasons'][:2])}")
                print()
        else:
            print("❌ No recommendations found")
        
        print("✅ Job matching algorithm test completed!")
        
    except User.DoesNotExist:
        print("❌ Admin user not found. Please create a superuser first.")
    except Exception as e:
        print(f"❌ Error during testing: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    test_matching_algorithm()
