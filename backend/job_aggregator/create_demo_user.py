#!/usr/bin/env python
"""
Create a demo user for testing the NYXO frontend-backend integration
"""
import os
import sys
import django

# Add the project directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'job_aggregator.settings')
django.setup()

from django.contrib.auth import get_user_model
from django.utils import timezone
from apps.profiles.models import UserProfile
from apps.applications.models import JobApplication
from apps.jobs.models import Job
from datetime import datetime, timedelta
import random

User = get_user_model()  # Get the custom user model

def create_demo_user():
    """Create a demo user with sample data"""
    print("Creating demo user...")
    
    # Create or get demo user
    user, created = User.objects.get_or_create(
        email='demo@nyxo.com',
        defaults={
            'username': 'demo_user',
            'first_name': 'Alex',
            'last_name': 'Johnson',
            'is_active': True,
        }
    )
    
    if created:
        user.set_password('demo123')
        user.save()
        print(f"✅ Created new user: {user.email}")
    else:
        print(f"✅ User already exists: {user.email}")
    
    # Create or update user profile
    profile, created = UserProfile.objects.get_or_create(
        user=user,
        defaults={
            'bio': 'Experienced software developer with 5+ years in full-stack development.',
            'current_job_title': 'Software Engineer',
            'industry': 'Technology',
            'years_of_experience': 5,
            'desired_job_titles': ['Software Engineer', 'Full Stack Developer', 'Backend Developer'],
            'preferred_locations': ['San Francisco', 'Remote'],
            'preferred_salary_min': 90000,
            'preferred_salary_max': 130000,
            'remote_work_preference': 'flexible',
            'career_level': 'mid',
            'company_size_preference': 'any',
            'headline': 'Full-Stack Developer passionate about clean code and scalable solutions',
        }
    )
    
    if created:
        print(f"✅ Created user profile for {user.first_name}")
    else:
        print(f"✅ User profile already exists for {user.first_name}")
    
    # Create sample skills
    from apps.profiles.models import Skill
    skills_data = [
        {'name': 'Python', 'category': 'technical', 'level': 'expert', 'years_experience': 5},
        {'name': 'JavaScript', 'category': 'technical', 'level': 'expert', 'years_experience': 5},
        {'name': 'React', 'category': 'technical', 'level': 'expert', 'years_experience': 4},
        {'name': 'Django', 'category': 'technical', 'level': 'expert', 'years_experience': 4},
        {'name': 'PostgreSQL', 'category': 'technical', 'level': 'advanced', 'years_experience': 3},
        {'name': 'AWS', 'category': 'technical', 'level': 'intermediate', 'years_experience': 2},
    ]
    
    for skill_data in skills_data:
        skill, created = Skill.objects.get_or_create(
            user=user,
            name=skill_data['name'],
            defaults=skill_data
        )
        if created:
            print(f"  ✅ Added skill: {skill.name}")
    
    # Create sample portfolio items
    from apps.profiles.models import PortfolioProject
    portfolio_data = [
        {
            'title': 'E-commerce Platform',
            'description': 'Full-stack e-commerce platform built with React and Django',
            'github_url': 'https://github.com/alexjohnson/ecommerce-platform',
            'project_type': 'web',
            'status': 'completed',
            'technologies_used': ['React', 'Django', 'PostgreSQL', 'Stripe API'],
            'features': ['User authentication', 'Shopping cart', 'Payment processing', 'Admin dashboard'],
        },
        {
            'title': 'Task Management API',
            'description': 'RESTful API for task management with authentication and real-time updates',
            'github_url': 'https://github.com/alexjohnson/task-api',
            'project_type': 'backend',
            'status': 'completed',
            'technologies_used': ['Django REST Framework', 'WebSockets', 'Redis'],
            'features': ['JWT Authentication', 'Real-time notifications', 'Task assignment', 'Progress tracking'],
        }
    ]
    
    for item_data in portfolio_data:
        item, created = PortfolioProject.objects.get_or_create(
            user=user,
            title=item_data['title'],
            defaults=item_data
        )
        if created:
            print(f"  ✅ Added portfolio item: {item.title}")
    
    # Create sample job applications if they don't exist
    if not JobApplication.objects.filter(user=user).exists():
        print("Creating sample job applications...")
        
        # Create some sample jobs first if they don't exist
        jobs_data = [
            {
                'title': 'Senior Software Engineer',
                'company': 'TechCorp Inc.',
                'location': 'San Francisco, CA',
                'job_type': 'full-time',
                'salary_min': 120000,
                'salary_max': 150000,
                'description': 'We are looking for a senior software engineer...',
                'requirements': 'Requirements: 5+ years experience, Python, React, AWS',
                'external_id': 'demo_job_1',
                'source': 'demo',
                'source_url': 'https://demo.com/job/1',
                'posted_date': timezone.now(),
                'remote_allowed': False,
                'skills_required': ['Python', 'React', 'AWS'],
            },
            {
                'title': 'Full Stack Developer',
                'company': 'StartupXYZ',
                'location': 'Remote',
                'job_type': 'full-time',
                'salary_min': 100000,
                'salary_max': 130000,
                'description': 'Join our fast-growing startup...',
                'requirements': 'Requirements: 3+ years experience, JavaScript, Node.js, React',
                'external_id': 'demo_job_2',
                'source': 'demo',
                'source_url': 'https://demo.com/job/2',
                'posted_date': timezone.now() - timedelta(days=2),
                'remote_allowed': True,
                'skills_required': ['JavaScript', 'Node.js', 'React'],
            },
            {
                'title': 'Backend Engineer',
                'company': 'DataFlow Systems',
                'location': 'New York, NY',
                'job_type': 'full-time',
                'salary_min': 110000,
                'salary_max': 140000,
                'description': 'Build scalable backend systems...',
                'requirements': 'Requirements: Python, Django, PostgreSQL, Redis',
                'external_id': 'demo_job_3',
                'source': 'demo',
                'source_url': 'https://demo.com/job/3',
                'posted_date': timezone.now() - timedelta(days=5),
                'remote_allowed': False,
                'skills_required': ['Python', 'Django', 'PostgreSQL', 'Redis'],
            }
        ]
        
        jobs = []
        for job_data in jobs_data:
            job, created = Job.objects.get_or_create(
                external_id=job_data['external_id'],
                defaults=job_data
            )
            jobs.append(job)
            if created:
                print(f"  ✅ Created job: {job.title} at {job.company}")
        
        # Create job applications
        statuses = ['applied', 'under_review', 'offer_received', 'rejected']
        for i, job in enumerate(jobs):
            application = JobApplication.objects.create(
                user=user,
                job=job,
                company_name=job.company,
                position_title=job.title,
                job_url=job.source_url,
                location=job.location,
                salary_range=f"${job.salary_min:,} - ${job.salary_max:,}" if job.salary_min and job.salary_max else "",
                status=statuses[i % len(statuses)],
                applied_date=timezone.now() - timedelta(days=random.randint(1, 30)),
                notes=f"Applied through NYXO platform. Great opportunity at {job.company}.",
                cover_letter_text=f"Dear Hiring Manager at {job.company},\n\nI am excited to apply for the {job.title} position...",
            )
            print(f"  ✅ Created application: {job.title} - Status: {application.status}")
    
    print(f"\n🎉 Demo user setup complete!")
    print(f"📧 Email: {user.email}")
    print(f"🔑 Password: demo123")
    print(f"👤 Name: {user.first_name} {user.last_name}")
    print(f"📊 Applications: {JobApplication.objects.filter(user=user).count()}")
    print(f"💼 Jobs in database: {Job.objects.count()}")
    
    return user

if __name__ == '__main__':
    create_demo_user()
