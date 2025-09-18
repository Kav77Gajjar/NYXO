#!/usr/bin/env python
"""
Test script for Enhanced User Profile Features
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
from apps.profiles.models import (
    UserProfile, WorkExperience, Education, Skill, Achievement,
    SkillEndorsement, PortfolioProject, CareerGoal, ProfessionalReference,
    UserPreferences
)

User = get_user_model()

def test_enhanced_profile_features():
    """Test the enhanced profile features"""
    print("🧪 Testing Enhanced User Profile Features")
    print("=" * 60)
    
    # Get test user
    try:
        user = User.objects.get(email='admin@nyxo.com')
        print(f"✅ Found user: {user.email}")
    except User.DoesNotExist:
        print("❌ User not found. Please run previous tests first")
        return
    
    # Create or get user profile
    profile, created = UserProfile.objects.get_or_create(
        user=user,
        defaults={
            'current_job_title': 'Senior Full Stack Developer',
            'industry': 'Technology',
            'years_of_experience': 5,
            'headline': 'Passionate developer building scalable web applications',
            'bio': 'Experienced developer with expertise in React, Django, and cloud technologies. Love solving complex problems and building user-friendly applications.',
            'desired_job_titles': ['Senior Developer', 'Tech Lead', 'Principal Engineer'],
            'preferred_locations': ['San Francisco', 'New York', 'Remote'],
            'preferred_salary_min': 120000,
            'preferred_salary_max': 180000,
            'remote_work_preference': 'hybrid',
            'career_level': 'senior',
            'company_size_preference': 'medium',
            'work_environment_preference': ['collaborative', 'fast-paced', 'innovative'],
            'benefits_priority': ['health', 'pto', 'equity', 'learning'],
            'portfolio_website': 'https://johndoe.dev',
            'github_url': 'https://github.com/johndoe',
            'linkedin_url': 'https://linkedin.com/in/johndoe',
            'is_open_to_opportunities': True,
            'is_profile_public': True
        }
    )
    print(f"✅ {'Created' if created else 'Updated'} user profile")
    
    # Add work experience
    print(f"\n💼 Adding Work Experience...")
    work_experiences = [
        {
            'title': 'Senior Full Stack Developer',
            'company': 'TechCorp Inc.',
            'location': 'San Francisco, CA',
            'start_date': '2022-01-01',
            'is_current': True,
            'description': 'Leading development of microservices architecture using Django and React. Mentoring junior developers and implementing best practices.'
        },
        {
            'title': 'Full Stack Developer',
            'company': 'StartupXYZ',
            'location': 'Remote',
            'start_date': '2020-03-01',
            'end_date': '2021-12-31',
            'is_current': False,
            'description': 'Built scalable web applications using MERN stack. Implemented CI/CD pipelines and improved application performance by 40%.'
        }
    ]
    
    for exp_data in work_experiences:
        exp, created = WorkExperience.objects.get_or_create(
            user=user,
            title=exp_data['title'],
            company=exp_data['company'],
            defaults=exp_data
        )
        print(f"✅ {'Added' if created else 'Updated'} experience: {exp.title} at {exp.company}")
    
    # Add education
    print(f"\n🎓 Adding Education...")
    education_data = [
        {
            'degree': 'Bachelor of Science in Computer Science',
            'school': 'University of California, Berkeley',
            'field_of_study': 'Computer Science',
            'start_year': 2016,
            'end_year': 2020,
            'gpa': 3.8,
            'description': 'Focused on software engineering, algorithms, and data structures. Dean\'s list for 3 semesters.'
        }
    ]
    
    for edu_data in education_data:
        edu, created = Education.objects.get_or_create(
            user=user,
            degree=edu_data['degree'],
            school=edu_data['school'],
            defaults=edu_data
        )
        print(f"✅ {'Added' if created else 'Updated'} education: {edu.degree} from {edu.school}")
    
    # Add skills
    print(f"\n🛠️ Adding Skills...")
    skills_data = [
        {'name': 'React', 'level': 'expert', 'category': 'technical', 'years_experience': 5},
        {'name': 'Django', 'level': 'expert', 'category': 'technical', 'years_experience': 4},
        {'name': 'PostgreSQL', 'level': 'advanced', 'category': 'technical', 'years_experience': 4},
        {'name': 'JavaScript', 'level': 'expert', 'category': 'technical', 'years_experience': 6},
        {'name': 'Python', 'level': 'expert', 'category': 'technical', 'years_experience': 5},
        {'name': 'Leadership', 'level': 'advanced', 'category': 'soft', 'years_experience': 2},
        {'name': 'Project Management', 'level': 'intermediate', 'category': 'soft', 'years_experience': 3},
    ]
    
    for skill_data in skills_data:
        skill, created = Skill.objects.get_or_create(
            user=user,
            name=skill_data['name'],
            defaults=skill_data
        )
        print(f"✅ {'Added' if created else 'Updated'} skill: {skill.name} ({skill.level})")
    
    # Add achievements
    print(f"\n🏆 Adding Achievements...")
    achievements_data = [
        {
            'title': 'AWS Certified Solutions Architect',
            'description': 'Professional certification demonstrating expertise in AWS cloud architecture',
            'category': 'certification',
            'date_achieved': '2023-06-15',
            'organization': 'Amazon Web Services',
            'url': 'https://aws.amazon.com/certification/'
        },
        {
            'title': 'Employee of the Year 2022',
            'description': 'Recognized for outstanding performance and leadership in delivering critical projects',
            'category': 'award',
            'date_achieved': '2022-12-15',
            'organization': 'TechCorp Inc.'
        }
    ]
    
    for ach_data in achievements_data:
        ach, created = Achievement.objects.get_or_create(
            user=user,
            title=ach_data['title'],
            defaults=ach_data
        )
        print(f"✅ {'Added' if created else 'Updated'} achievement: {ach.title}")
    
    # Add portfolio projects
    print(f"\n💻 Adding Portfolio Projects...")
    projects_data = [
        {
            'title': 'E-commerce Platform',
            'description': 'Full-stack e-commerce platform with React frontend and Django REST API backend',
            'project_type': 'web',
            'status': 'completed',
            'live_url': 'https://ecommerce-demo.com',
            'github_url': 'https://github.com/johndoe/ecommerce-platform',
            'technologies_used': ['React', 'Django', 'PostgreSQL', 'Redis', 'AWS'],
            'features': ['User authentication', 'Product catalog', 'Shopping cart', 'Payment processing', 'Admin dashboard'],
            'challenges': 'Implementing real-time inventory updates and optimizing database queries for large product catalogs',
            'learnings': 'Gained deep understanding of microservices architecture and real-time data synchronization',
            'start_date': '2023-01-01',
            'end_date': '2023-04-30',
            'is_featured': True,
            'is_public': True
        },
        {
            'title': 'Task Management App',
            'description': 'React Native mobile app for task and project management with team collaboration features',
            'project_type': 'mobile',
            'status': 'completed',
            'github_url': 'https://github.com/johndoe/task-manager',
            'technologies_used': ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
            'features': ['Task creation and assignment', 'Team collaboration', 'Real-time notifications', 'Progress tracking'],
            'start_date': '2022-08-01',
            'end_date': '2022-11-30',
            'is_featured': True,
            'is_public': True
        }
    ]
    
    for proj_data in projects_data:
        proj, created = PortfolioProject.objects.get_or_create(
            user=user,
            title=proj_data['title'],
            defaults=proj_data
        )
        print(f"✅ {'Added' if created else 'Updated'} project: {proj.title}")
    
    # Add career goals
    print(f"\n🎯 Adding Career Goals...")
    goals_data = [
        {
            'title': 'Become Technical Lead',
            'description': 'Lead a team of 5+ developers and drive technical architecture decisions',
            'goal_type': 'short_term',
            'category': 'position',
            'target_date': '2024-12-31',
            'is_achieved': False,
            'progress_notes': 'Currently mentoring 2 junior developers and taking on more architectural responsibilities'
        },
        {
            'title': 'Master Machine Learning',
            'description': 'Gain proficiency in ML algorithms and frameworks to transition into AI development',
            'goal_type': 'medium_term',
            'category': 'skill',
            'target_date': '2025-12-31',
            'is_achieved': False,
            'progress_notes': 'Enrolled in online ML course and working on personal AI projects'
        }
    ]
    
    for goal_data in goals_data:
        goal, created = CareerGoal.objects.get_or_create(
            user=user,
            title=goal_data['title'],
            defaults=goal_data
        )
        print(f"✅ {'Added' if created else 'Updated'} goal: {goal.title}")
    
    # Add professional references
    print(f"\n👥 Adding Professional References...")
    references_data = [
        {
            'name': 'Sarah Johnson',
            'title': 'Engineering Manager',
            'company': 'TechCorp Inc.',
            'email': 'sarah.johnson@techcorp.com',
            'phone': '+1-555-0123',
            'relationship': 'manager',
            'relationship_duration': '2 years',
            'notes': 'Direct manager at TechCorp. Can speak to technical skills and leadership abilities.',
            'permission_to_contact': True,
            'preferred_contact_method': 'email'
        },
        {
            'name': 'Dr. Michael Chen',
            'title': 'Professor of Computer Science',
            'company': 'UC Berkeley',
            'email': 'mchen@berkeley.edu',
            'relationship': 'professor',
            'relationship_duration': '4 years',
            'notes': 'Thesis advisor and computer science professor. Can speak to academic performance and problem-solving skills.',
            'permission_to_contact': True,
            'preferred_contact_method': 'email'
        }
    ]
    
    for ref_data in references_data:
        ref, created = ProfessionalReference.objects.get_or_create(
            user=user,
            name=ref_data['name'],
            email=ref_data['email'],
            defaults=ref_data
        )
        print(f"✅ {'Added' if created else 'Updated'} reference: {ref.name}")
    
    # Create user preferences
    print(f"\n⚙️ Setting User Preferences...")
    preferences, created = UserPreferences.objects.get_or_create(
        user=user,
        defaults={
            'job_search_radius_miles': 50,
            'auto_apply_enabled': False,
            'email_job_matches': True,
            'email_application_updates': True,
            'email_weekly_summary': True,
            'email_marketing': False,
            'sms_enabled': False,
            'profile_visibility': 'recruiters',
            'allow_recruiter_contact': True,
            'show_salary_expectations': True,
            'theme_preference': 'auto'
        }
    )
    print(f"✅ {'Created' if created else 'Updated'} user preferences")
    
    # Calculate profile completion
    print(f"\n📊 Calculating Profile Completion...")
    completion_score = profile.calculate_profile_completion()
    print(f"✅ Profile completion score: {completion_score}%")
    
    # Display summary statistics
    print(f"\n📈 Profile Summary:")
    print(f"   Work Experiences: {user.work_experiences.count()}")
    print(f"   Education Records: {user.education.count()}")
    print(f"   Skills: {user.skills.count()}")
    print(f"   Achievements: {user.achievements.count()}")
    print(f"   Portfolio Projects: {user.portfolio_projects.count()}")
    print(f"   Career Goals: {user.career_goals.count()}")
    print(f"   Professional References: {user.references.count()}")
    print(f"   Profile Completion: {completion_score}%")
    
    # Test skills by category
    print(f"\n🔍 Skills by Category:")
    skills_by_category = profile.get_skills_by_category()
    for category, skills in skills_by_category.items():
        print(f"   {category.title()}: {', '.join([skill.name for skill in skills])}")
    
    print(f"\n✅ Enhanced profile features test completed!")
    print(f"   Created comprehensive profile for {user.full_name}")
    print(f"   All profile sections populated with sample data")
    print(f"   Profile completion calculated at {completion_score}%")

if __name__ == '__main__':
    test_enhanced_profile_features()
