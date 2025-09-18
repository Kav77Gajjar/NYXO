#!/usr/bin/env python
"""
Test script for the Job Application Tracking System
"""
import os
import django
import json
from datetime import datetime, timedelta

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'job_aggregator.settings')
django.setup()

from django.contrib.auth import get_user_model
from django.utils import timezone
from apps.applications.models import JobApplication, ApplicationEvent, ApplicationReminder
from apps.jobs.models import Job

User = get_user_model()

def test_application_tracking():
    """Test the application tracking system"""
    print("🧪 Testing Job Application Tracking System")
    print("=" * 60)
    
    # Get test user
    try:
        user = User.objects.get(email='admin@nyxo.com')
        print(f"✅ Found user: {user.email}")
    except User.DoesNotExist:
        print("❌ User not found. Please run test_matching.py first")
        return
    
    # Create sample job applications
    applications_data = [
        {
            'company_name': 'TechCorp Inc.',
            'position_title': 'Senior React Developer',
            'location': 'San Francisco, CA',
            'salary_range': '$120,000 - $150,000',
            'status': 'applied',
            'priority': 'high',
            'job_url': 'https://techcorp.com/jobs/react-dev',
            'applied_date': timezone.now() - timedelta(days=5),
            'contact_name': 'Sarah Johnson',
            'contact_email': 'sarah.johnson@techcorp.com',
            'notes': 'Applied through company website. They mentioned React 18 and TypeScript experience is preferred.',
            'requirements_match': {
                'skills_match': 85,
                'experience_match': 90,
                'education_match': 100
            },
            'tags': ['frontend', 'react', 'priority']
        },
        {
            'company_name': 'DataFlow Solutions',
            'position_title': 'Python Backend Engineer',
            'location': 'New York, NY',
            'salary_range': '$110,000 - $140,000',
            'status': 'under_review',
            'priority': 'medium',
            'job_url': 'https://dataflow.com/careers/python-dev',
            'applied_date': timezone.now() - timedelta(days=10),
            'follow_up_date': timezone.now() + timedelta(days=2),
            'contact_name': 'Mike Chen',
            'contact_email': 'mike.chen@dataflow.com',
            'notes': 'Recruiter reached out on LinkedIn. They use Django and PostgreSQL.',
            'requirements_match': {
                'skills_match': 95,
                'experience_match': 85,
                'education_match': 100
            },
            'tags': ['backend', 'python', 'django']
        },
        {
            'company_name': 'StartupXYZ',
            'position_title': 'Full Stack Developer',
            'location': 'Remote',
            'salary_range': '$90,000 - $120,000',
            'status': 'phone_screen',
            'priority': 'medium',
            'job_url': 'https://startupxyz.com/jobs/fullstack',
            'applied_date': timezone.now() - timedelta(days=15),
            'contact_name': 'Alex Rodriguez',
            'contact_email': 'alex@startupxyz.com',
            'notes': 'Phone screen scheduled for next week. They are a fast-growing fintech startup.',
            'requirements_match': {
                'skills_match': 75,
                'experience_match': 80,
                'education_match': 100
            },
            'tags': ['fullstack', 'startup', 'remote']
        }
    ]
    
    created_applications = []
    for app_data in applications_data:
        app = JobApplication.objects.create(user=user, **app_data)
        created_applications.append(app)
        print(f"✅ Created application: {app.position_title} at {app.company_name}")
    
    print(f"\n📊 Application Statistics:")
    print(f"   Total applications: {JobApplication.objects.filter(user=user).count()}")
    
    # Create sample events for applications
    print(f"\n📅 Creating Application Events...")
    events_data = [
        {
            'application': created_applications[0],
            'event_type': 'application_submitted',
            'title': 'Application Submitted',
            'description': 'Submitted application through company website',
            'event_date': timezone.now() - timedelta(days=5),
        },
        {
            'application': created_applications[1],
            'event_type': 'acknowledgment_received',
            'title': 'Application Acknowledged',
            'description': 'Received confirmation email from HR department',
            'event_date': timezone.now() - timedelta(days=8),
        },
        {
            'application': created_applications[2],
            'event_type': 'phone_screen_scheduled',
            'title': 'Phone Screen Scheduled',
            'description': 'HR scheduled 30-minute phone screen',
            'event_date': timezone.now() - timedelta(days=3),
            'duration_minutes': 30,
            'attendees': ['Alex Rodriguez', 'HR Team']
        }
    ]
    
    for event_data in events_data:
        event = ApplicationEvent.objects.create(**event_data)
        print(f"✅ Created event: {event.title}")
    
    # Create sample reminders
    print(f"\n⏰ Creating Reminders...")
    reminders_data = [
        {
            'application': created_applications[1],
            'reminder_type': 'follow_up',
            'title': 'Follow up on application',
            'description': 'Send follow-up email to check application status',
            'reminder_date': timezone.now() + timedelta(days=2),
        },
        {
            'application': created_applications[2],
            'reminder_type': 'interview_prep',
            'title': 'Prepare for phone screen',
            'description': 'Research company and prepare questions for phone screen',
            'reminder_date': timezone.now() + timedelta(days=1),
        }
    ]
    
    for reminder_data in reminders_data:
        reminder = ApplicationReminder.objects.create(**reminder_data)
        print(f"✅ Created reminder: {reminder.title}")
    
    # Test application analytics
    print(f"\n📈 Testing Analytics...")
    from apps.applications.models import ApplicationAnalytics
    
    analytics, created = ApplicationAnalytics.objects.get_or_create(user=user)
    analytics.calculate_metrics()
    
    print(f"   Total Applications: {analytics.total_applications}")
    print(f"   Active Applications: {analytics.active_applications}")
    print(f"   Response Rate: {analytics.response_rate}%")
    print(f"   Interview Rate: {analytics.interview_rate}%")
    print(f"   Offer Rate: {analytics.offer_rate}%")
    
    # Test application status updates
    print(f"\n🔄 Testing Status Updates...")
    app = created_applications[0]
    print(f"   Current status: {app.get_status_display()}")
    
    # Update status to 'under_review'
    app.status = 'under_review'
    app.save()
    print(f"   Updated status: {app.get_status_display()}")
    
    # Test utility methods
    print(f"\n🛠️ Testing Utility Methods...")
    for app in created_applications:
        print(f"   {app.position_title}:")
        print(f"     - Days since applied: {app.days_since_applied}")
        print(f"     - Status color: {app.status_color}")
        print(f"     - Overdue for followup: {app.is_overdue_for_followup}")
    
    print(f"\n✅ Application tracking system test completed!")
    print(f"   Created {len(created_applications)} applications")
    print(f"   Created {len(events_data)} events")
    print(f"   Created {len(reminders_data)} reminders")
    print(f"   Analytics calculated successfully")

if __name__ == '__main__':
    test_application_tracking()
