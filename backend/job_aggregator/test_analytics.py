#!/usr/bin/env python
"""
Test script for Analytics & Insights Features
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
from apps.analytics.models import (
    JobMarketAnalytics, UserCareerInsight, ApplicationSuccessMetrics,
    CareerProgressTracker, PersonalizedRecommendation
)
from apps.analytics.services import AnalyticsService

User = get_user_model()

def test_analytics_and_insights():
    """Test the analytics and insights features"""
    print("🧪 Testing Analytics & Insights Features")
    print("=" * 60)
    
    # Get test user
    try:
        user = User.objects.get(email='admin@nyxo.com')
        print(f"✅ Found user: {user.email}")
    except User.DoesNotExist:
        print("❌ User not found. Please run previous tests first")
        return
    
    # Test 1: Generate Job Market Analytics
    print(f"\n📊 Testing Job Market Analytics Generation...")
    
    # Generate analytics for different markets
    markets_to_analyze = [
        {'location': 'San Francisco', 'industry': 'Technology', 'job_title': 'Software Engineer'},
        {'location': 'New York', 'industry': 'Finance', 'job_title': 'Data Scientist'},
        {'location': 'Seattle', 'industry': 'Technology', 'job_title': 'DevOps Engineer'},
    ]
    
    generated_analytics = []
    for market in markets_to_analyze:
        analytics = AnalyticsService.generate_job_market_analytics(
            location=market['location'],
            industry=market['industry'],
            job_title=market['job_title']
        )
        if analytics:
            generated_analytics.append(analytics)
            print(f"✅ Generated analytics: {market['location']} - {market['job_title']}")
            print(f"   Total Jobs: {analytics.total_jobs_posted}")
            print(f"   Competition Level: {analytics.competition_level}")
            print(f"   Average Salary: ${analytics.average_salary:,}" if analytics.average_salary else "   Average Salary: Not available")
    
    # Test 2: Generate User Career Insights
    print(f"\n🔍 Testing Career Insights Generation...")
    insights = AnalyticsService.generate_user_career_insights(user)
    print(f"✅ Generated {len(insights)} career insights:")
    
    for insight in insights:
        print(f"   - {insight['title']} ({insight['insight_type']}) - Priority: {insight['priority']}")
    
    # Check database for created insights
    db_insights = UserCareerInsight.objects.filter(user=user)
    print(f"✅ Stored {db_insights.count()} insights in database")
    
    # Test 3: Generate Personalized Recommendations
    print(f"\n💡 Testing Personalized Recommendations...")
    recommendations = AnalyticsService.generate_personalized_recommendations(user)
    print(f"✅ Generated {len(recommendations)} recommendations:")
    
    for rec in recommendations:
        print(f"   - {rec['title']} ({rec['recommendation_type']}) - Impact: {rec['estimated_impact']}")
    
    # Check database for created recommendations
    db_recommendations = PersonalizedRecommendation.objects.filter(user=user)
    print(f"✅ Stored {db_recommendations.count()} recommendations in database")
    
    # Test 4: Calculate Application Success Metrics
    print(f"\n📈 Testing Application Success Metrics...")
    
    # Generate metrics for different periods
    periods = ['weekly', 'monthly', 'quarterly']
    for period in periods:
        metrics = AnalyticsService.calculate_application_success_metrics(user, period)
        if metrics:
            print(f"✅ {period.title()} metrics calculated:")
            print(f"   Applications: {metrics.applications_submitted}")
            print(f"   Response Rate: {metrics.response_rate}%")
            print(f"   Interview Rate: {metrics.interview_rate}%")
            print(f"   Offer Rate: {metrics.offer_rate}%")
    
    # Test 5: Create Sample Career Progress Tracker
    print(f"\n📊 Testing Career Progress Tracking...")
    
    # Create sample progress snapshots
    progress_data = [
        {
            'snapshot_date': timezone.now().date() - timedelta(days=30),
            'profile_completion_score': 50,
            'skills_count': 5,
            'experience_years': 4,
            'active_applications': 3,
            'monthly_applications': 8,
            'interview_success_rate': 15.0,
            'active_goals_count': 2,
            'achieved_goals_count': 1,
            'portfolio_projects_count': 1
        },
        {
            'snapshot_date': timezone.now().date(),
            'profile_completion_score': 63,
            'skills_count': 7,
            'experience_years': 5,
            'active_applications': 4,
            'monthly_applications': 12,
            'interview_success_rate': 25.0,
            'active_goals_count': 2,
            'achieved_goals_count': 1,
            'portfolio_projects_count': 2
        }
    ]
    
    for data in progress_data:
        progress, created = CareerProgressTracker.objects.get_or_create(
            user=user,
            snapshot_date=data['snapshot_date'],
            defaults=data
        )
        print(f"✅ {'Created' if created else 'Updated'} progress snapshot for {data['snapshot_date']}")
    
    # Test 6: Test Insight Actions
    print(f"\n⚡ Testing Insight Actions...")
    
    # Test acknowledging insights
    if db_insights.exists():
        first_insight = db_insights.first()
        first_insight.acknowledge()
        print(f"✅ Acknowledged insight: {first_insight.title}")
    
    # Test dismissing recommendations
    if db_recommendations.exists():
        first_rec = db_recommendations.first()
        first_rec.mark_viewed()
        print(f"✅ Marked recommendation as viewed: {first_rec.title}")
    
    # Test 7: Analytics Summary
    print(f"\n📋 Analytics Summary:")
    print(f"   Market Analytics Records: {JobMarketAnalytics.objects.count()}")
    print(f"   User Career Insights: {UserCareerInsight.objects.filter(user=user).count()}")
    print(f"   Success Metrics Records: {ApplicationSuccessMetrics.objects.filter(user=user).count()}")
    print(f"   Career Progress Snapshots: {CareerProgressTracker.objects.filter(user=user).count()}")
    print(f"   Personalized Recommendations: {PersonalizedRecommendation.objects.filter(user=user).count()}")
    
    # Test 8: Insight Categories Breakdown
    print(f"\n🏷️ Insights by Category:")
    insight_types = db_insights.values_list('insight_type', flat=True).distinct()
    for insight_type in insight_types:
        count = db_insights.filter(insight_type=insight_type).count()
        print(f"   {insight_type.replace('_', ' ').title()}: {count}")
    
    # Test 9: Recommendation Types Breakdown
    print(f"\n💭 Recommendations by Type:")
    rec_types = db_recommendations.values_list('recommendation_type', flat=True).distinct()
    for rec_type in rec_types:
        count = db_recommendations.filter(recommendation_type=rec_type).count()
        print(f"   {rec_type.replace('_', ' ').title()}: {count}")
    
    # Test 10: Market Analytics Summary
    print(f"\n🌍 Market Analytics Summary:")
    total_market_records = JobMarketAnalytics.objects.count()
    if total_market_records > 0:
        latest_analytics = JobMarketAnalytics.objects.order_by('-data_date').first()
        print(f"   Total Market Records: {total_market_records}")
        print(f"   Latest Analysis: {latest_analytics.location} - {latest_analytics.data_date}")
        print(f"   Top Skills in Market: {len(latest_analytics.top_skills_demanded) if latest_analytics.top_skills_demanded else 0}")
    
    print(f"\n✅ Analytics & Insights test completed!")
    print(f"   Successfully generated market analytics for {len(generated_analytics)} markets")
    print(f"   Created {len(insights)} career insights")
    print(f"   Generated {len(recommendations)} personalized recommendations")
    print(f"   Calculated success metrics for multiple time periods")
    print(f"   System is ready to provide data-driven career guidance!")

if __name__ == '__main__':
    test_analytics_and_insights()
