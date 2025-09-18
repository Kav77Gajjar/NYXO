"""
Analytics Service for generating insights, recommendations, and market analytics
"""
from django.db.models import Q, Count, Avg, Max, Min
from django.utils import timezone
from datetime import datetime, timedelta
from collections import defaultdict
import json
import logging

from apps.jobs.models import Job
from apps.applications.models import JobApplication
from apps.profiles.models import UserProfile, Skill, WorkExperience
from .models import (
    JobMarketAnalytics, UserCareerInsight, ApplicationSuccessMetrics,
    CareerProgressTracker, PersonalizedRecommendation
)

logger = logging.getLogger(__name__)


class AnalyticsService:
    """Service for generating analytics and insights"""
    
    @staticmethod
    def generate_job_market_analytics(location=None, industry=None, job_title=None):
        """Generate job market analytics for a specific location/industry/title"""
        try:
            # Base queryset for jobs
            jobs_queryset = Job.objects.all()
            
            if location:
                jobs_queryset = jobs_queryset.filter(location__icontains=location)
            if industry:
                jobs_queryset = jobs_queryset.filter(company__icontains=industry)  # Simplified
            if job_title:
                jobs_queryset = jobs_queryset.filter(title__icontains=job_title)
            
            # Calculate basic metrics
            total_jobs = jobs_queryset.count()
            week_ago = timezone.now() - timedelta(days=7)
            month_ago = timezone.now() - timedelta(days=30)
            
            new_jobs_week = jobs_queryset.filter(created_at__gte=week_ago).count()
            new_jobs_month = jobs_queryset.filter(created_at__gte=month_ago).count()
            
            # Salary analytics
            salary_stats = jobs_queryset.aggregate(
                avg_salary=Avg('salary_max'),
                min_salary=Min('salary_min'),
                max_salary=Max('salary_max')
            )
            
            # Calculate competition level based on applications per job
            applications_per_job = 0
            if total_jobs > 0:
                total_applications = JobApplication.objects.filter(
                    job__in=jobs_queryset
                ).count()
                applications_per_job = total_applications / total_jobs
            
            competition_level = 'low'
            if applications_per_job > 20:
                competition_level = 'very_high'
            elif applications_per_job > 10:
                competition_level = 'high'
            elif applications_per_job > 5:
                competition_level = 'medium'
            
            # Get top skills from job descriptions (simplified)
            top_skills = AnalyticsService._extract_top_skills_from_jobs(jobs_queryset)
            
            # Create or update analytics record
            analytics_data = {
                'location': location or 'All Locations',
                'industry': industry,
                'job_title': job_title,
                'total_jobs_posted': total_jobs,
                'new_jobs_this_week': new_jobs_week,
                'new_jobs_this_month': new_jobs_month,
                'average_salary': salary_stats['avg_salary'],
                'salary_range_min': salary_stats['min_salary'],
                'salary_range_max': salary_stats['max_salary'],
                'top_skills_demanded': top_skills,
                'average_applications_per_job': round(applications_per_job, 1),
                'competition_level': competition_level,
                'data_date': timezone.now().date(),
            }
            
            analytics, created = JobMarketAnalytics.objects.update_or_create(
                location=analytics_data['location'],
                industry=industry,
                job_title=job_title,
                data_date=timezone.now().date(),
                defaults=analytics_data
            )
            
            logger.info(f"Generated market analytics for {location or 'All'}/{industry or 'All'}")
            return analytics
            
        except Exception as e:
            logger.error(f"Failed to generate market analytics: {str(e)}")
            return None
    
    @staticmethod
    def _extract_top_skills_from_jobs(jobs_queryset):
        """Extract top skills mentioned in job descriptions"""
        # Common tech skills to look for
        skill_keywords = [
            'python', 'javascript', 'react', 'django', 'node.js', 'aws', 'docker',
            'kubernetes', 'postgresql', 'mongodb', 'redis', 'git', 'ci/cd',
            'machine learning', 'data science', 'sql', 'html', 'css', 'vue.js',
            'angular', 'java', 'c++', 'golang', 'rust', 'typescript', 'graphql'
        ]
        
        skill_counts = defaultdict(int)
        
        for job in jobs_queryset:
            description = (job.description or '').lower()
            requirements = (job.requirements or '').lower()
            combined_text = description + ' ' + requirements
            
            for skill in skill_keywords:
                if skill.lower() in combined_text:
                    skill_counts[skill] += 1
        
        # Sort by count and return top 10
        top_skills = sorted(skill_counts.items(), key=lambda x: x[1], reverse=True)[:10]
        return [{'skill': skill, 'demand': count} for skill, count in top_skills]
    
    @staticmethod
    def generate_user_career_insights(user):
        """Generate personalized career insights for a user"""
        try:
            insights = []
            
            # Get user profile and related data
            try:
                profile = user.extended_profile
            except:
                return insights
            
            # Skill gap analysis
            skill_insights = AnalyticsService._analyze_skill_gaps(user)
            insights.extend(skill_insights)
            
            # Profile optimization insights
            profile_insights = AnalyticsService._analyze_profile_optimization(user, profile)
            insights.extend(profile_insights)
            
            # Application performance insights
            app_insights = AnalyticsService._analyze_application_performance(user)
            insights.extend(app_insights)
            
            # Salary benchmarking
            salary_insights = AnalyticsService._analyze_salary_benchmark(user, profile)
            insights.extend(salary_insights)
            
            # Save insights to database
            for insight_data in insights:
                insight, created = UserCareerInsight.objects.update_or_create(
                    user=user,
                    insight_type=insight_data['insight_type'],
                    title=insight_data['title'],
                    defaults=insight_data
                )
                if created:
                    logger.info(f"Created new insight: {insight.title} for {user.email}")
            
            return insights
            
        except Exception as e:
            logger.error(f"Failed to generate career insights for {user.email}: {str(e)}")
            return []
    
    @staticmethod
    def _analyze_skill_gaps(user):
        """Analyze skill gaps based on job market demand"""
        insights = []
        
        try:
            user_skills = set(user.skills.values_list('name', flat=True))
            
            # Get market demand for user's industry
            profile = user.extended_profile
            if profile.industry:
                market_analytics = JobMarketAnalytics.objects.filter(
                    industry__icontains=profile.industry
                ).first()
                
                if market_analytics and market_analytics.top_skills_demanded:
                    demanded_skills = {skill['skill'] for skill in market_analytics.top_skills_demanded}
                    missing_skills = demanded_skills - user_skills
                    
                    if missing_skills:
                        insights.append({
                            'insight_type': 'skill_gap',
                            'title': 'Skills Gap Identified',
                            'description': f'Based on {profile.industry} market analysis, you might benefit from learning these in-demand skills.',
                            'priority': 'high' if len(missing_skills) > 3 else 'medium',
                            'insight_data': {
                                'missing_skills': list(missing_skills),
                                'industry': profile.industry,
                                'market_demand': market_analytics.top_skills_demanded
                            },
                            'recommendations': [
                                f'Consider learning {skill}' for skill in list(missing_skills)[:3]
                            ],
                            'relevance_score': 0.8,
                            'confidence_score': 0.7
                        })
        except Exception as e:
            logger.error(f"Error analyzing skill gaps: {str(e)}")
        
        return insights
    
    @staticmethod
    def _analyze_profile_optimization(user, profile):
        """Analyze profile completeness and optimization opportunities"""
        insights = []
        
        try:
            completion_score = profile.profile_completion_score
            
            if completion_score < 70:
                missing_sections = []
                
                if not profile.headline:
                    missing_sections.append('professional headline')
                if not profile.bio:
                    missing_sections.append('professional summary')
                if not user.work_experiences.exists():
                    missing_sections.append('work experience')
                if not user.skills.exists():
                    missing_sections.append('skills')
                if not profile.portfolio_website and not profile.github_url:
                    missing_sections.append('portfolio links')
                
                if missing_sections:
                    insights.append({
                        'insight_type': 'profile_optimization',
                        'title': 'Profile Needs Optimization',
                        'description': f'Your profile is {completion_score}% complete. Adding missing sections can improve your visibility to recruiters.',
                        'priority': 'high' if completion_score < 50 else 'medium',
                        'insight_data': {
                            'completion_score': completion_score,
                            'missing_sections': missing_sections
                        },
                        'recommendations': [
                            f'Add your {section}' for section in missing_sections[:3]
                        ],
                        'relevance_score': 0.9,
                        'confidence_score': 0.9
                    })
        except Exception as e:
            logger.error(f"Error analyzing profile optimization: {str(e)}")
        
        return insights
    
    @staticmethod
    def _analyze_application_performance(user):
        """Analyze user's job application performance"""
        insights = []
        
        try:
            applications = user.job_applications.all()
            total_apps = applications.count()
            
            if total_apps >= 5:  # Need minimum applications for meaningful analysis
                responses = applications.exclude(status='applied').count()
                interviews = applications.filter(
                    status__in=['phone_screen', 'technical_interview', 'final_interview']
                ).count()
                
                response_rate = (responses / total_apps * 100) if total_apps > 0 else 0
                interview_rate = (interviews / total_apps * 100) if total_apps > 0 else 0
                
                # Industry benchmarks (simplified)
                benchmark_response_rate = 20  # 20% typical response rate
                benchmark_interview_rate = 10  # 10% typical interview rate
                
                if response_rate < benchmark_response_rate:
                    insights.append({
                        'insight_type': 'application_feedback',
                        'title': 'Low Application Response Rate',
                        'description': f'Your response rate ({response_rate:.1f}%) is below industry average ({benchmark_response_rate}%).',
                        'priority': 'high',
                        'insight_data': {
                            'user_response_rate': response_rate,
                            'benchmark_rate': benchmark_response_rate,
                            'total_applications': total_apps
                        },
                        'recommendations': [
                            'Review and improve your resume',
                            'Tailor applications to job requirements',
                            'Optimize your LinkedIn profile'
                        ],
                        'relevance_score': 0.8,
                        'confidence_score': 0.7
                    })
        except Exception as e:
            logger.error(f"Error analyzing application performance: {str(e)}")
        
        return insights
    
    @staticmethod
    def _analyze_salary_benchmark(user, profile):
        """Analyze user's salary expectations against market data"""
        insights = []
        
        try:
            if profile.preferred_salary_min and profile.current_job_title:
                # Get market salary data for similar positions
                market_analytics = JobMarketAnalytics.objects.filter(
                    job_title__icontains=profile.current_job_title
                ).first()
                
                if market_analytics and market_analytics.average_salary:
                    market_avg = market_analytics.average_salary
                    user_expectation = profile.preferred_salary_min
                    
                    difference_percent = ((user_expectation - market_avg) / market_avg) * 100
                    
                    if difference_percent > 20:
                        insights.append({
                            'insight_type': 'salary_benchmark',
                            'title': 'Salary Expectations Above Market',
                            'description': f'Your salary expectation is {difference_percent:.1f}% above market average for {profile.current_job_title}.',
                            'priority': 'medium',
                            'insight_data': {
                                'user_expectation': user_expectation,
                                'market_average': market_avg,
                                'difference_percent': difference_percent,
                                'position': profile.current_job_title
                            },
                            'recommendations': [
                                'Consider adjusting salary expectations',
                                'Focus on positions that offer higher compensation',
                                'Highlight unique skills that justify higher salary'
                            ],
                            'relevance_score': 0.7,
                            'confidence_score': 0.6
                        })
                    elif difference_percent < -10:
                        insights.append({
                            'insight_type': 'salary_benchmark',
                            'title': 'Potential for Higher Salary',
                            'description': f'You might be undervaluing yourself. Market average is {abs(difference_percent):.1f}% higher than your expectation.',
                            'priority': 'medium',
                            'insight_data': {
                                'user_expectation': user_expectation,
                                'market_average': market_avg,
                                'difference_percent': difference_percent,
                                'position': profile.current_job_title
                            },
                            'recommendations': [
                                'Consider increasing salary expectations',
                                'Research salary ranges for your experience level',
                                'Prepare to negotiate salary offers'
                            ],
                            'relevance_score': 0.8,
                            'confidence_score': 0.6
                        })
        except Exception as e:
            logger.error(f"Error analyzing salary benchmark: {str(e)}")
        
        return insights
    
    @staticmethod
    def generate_personalized_recommendations(user):
        """Generate personalized recommendations for a user"""
        try:
            recommendations = []
            
            # Job recommendations based on skills and preferences
            job_recs = AnalyticsService._generate_job_recommendations(user)
            recommendations.extend(job_recs)
            
            # Skill development recommendations
            skill_recs = AnalyticsService._generate_skill_recommendations(user)
            recommendations.extend(skill_recs)
            
            # Profile improvement recommendations
            profile_recs = AnalyticsService._generate_profile_recommendations(user)
            recommendations.extend(profile_recs)
            
            # Save recommendations to database
            for rec_data in recommendations:
                rec, created = PersonalizedRecommendation.objects.update_or_create(
                    user=user,
                    recommendation_type=rec_data['recommendation_type'],
                    title=rec_data['title'],
                    defaults=rec_data
                )
                if created:
                    logger.info(f"Created recommendation: {rec.title} for {user.email}")
            
            return recommendations
            
        except Exception as e:
            logger.error(f"Failed to generate recommendations for {user.email}: {str(e)}")
            return []
    
    @staticmethod
    def _generate_job_recommendations(user):
        """Generate job recommendations based on user profile"""
        recommendations = []
        
        try:
            profile = user.extended_profile
            user_skills = user.skills.values_list('name', flat=True)
            
            if profile.desired_job_titles and user_skills:
                for job_title in profile.desired_job_titles[:2]:  # Limit to top 2
                    matching_jobs = Job.objects.filter(
                        title__icontains=job_title
                    )[:3]  # Get top 3 matching jobs
                    
                    if matching_jobs:
                        recommendations.append({
                            'recommendation_type': 'job',
                            'title': f'Jobs matching "{job_title}"',
                            'description': f'Found {matching_jobs.count()} positions that match your desired role of {job_title}.',
                            'reasoning': f'Based on your career preferences and skills in {", ".join(user_skills[:3])}.',
                            'recommendation_data': {
                                'job_title': job_title,
                                'matching_jobs': [
                                    {
                                        'id': str(job.id),
                                        'title': job.title,
                                        'company': job.company,
                                        'location': job.location
                                    } for job in matching_jobs
                                ]
                            },
                            'action_items': [
                                'Review the recommended positions',
                                'Apply to jobs that match your criteria',
                                'Customize your application for each role'
                            ],
                            'estimated_impact': 'high',
                            'relevance_score': 0.8,
                            'confidence_score': 0.7,
                            'urgency_score': 0.6
                        })
        except Exception as e:
            logger.error(f"Error generating job recommendations: {str(e)}")
        
        return recommendations
    
    @staticmethod
    def _generate_skill_recommendations(user):
        """Generate skill development recommendations"""
        recommendations = []
        
        try:
            profile = user.extended_profile
            
            if profile.industry:
                # Get top skills for user's industry
                market_analytics = JobMarketAnalytics.objects.filter(
                    industry__icontains=profile.industry
                ).first()
                
                if market_analytics and market_analytics.top_skills_demanded:
                    user_skills = set(user.skills.values_list('name', flat=True))
                    demanded_skills = {skill['skill'] for skill in market_analytics.top_skills_demanded[:5]}
                    missing_skills = demanded_skills - user_skills
                    
                    if missing_skills:
                        top_missing = list(missing_skills)[:3]
                        recommendations.append({
                            'recommendation_type': 'skill',
                            'title': 'Develop In-Demand Skills',
                            'description': f'These skills are highly demanded in {profile.industry} but missing from your profile.',
                            'reasoning': f'Market analysis shows these skills are in the top 5 most demanded for {profile.industry} roles.',
                            'recommendation_data': {
                                'recommended_skills': top_missing,
                                'industry': profile.industry,
                                'market_demand': [
                                    skill for skill in market_analytics.top_skills_demanded 
                                    if skill['skill'] in top_missing
                                ]
                            },
                            'action_items': [
                                f'Learn {skill} through online courses' for skill in top_missing
                            ],
                            'estimated_impact': 'high',
                            'relevance_score': 0.9,
                            'confidence_score': 0.8,
                            'urgency_score': 0.7
                        })
        except Exception as e:
            logger.error(f"Error generating skill recommendations: {str(e)}")
        
        return recommendations
    
    @staticmethod
    def _generate_profile_recommendations(user):
        """Generate profile improvement recommendations"""
        recommendations = []
        
        try:
            profile = user.extended_profile
            
            # Check for missing portfolio/GitHub links
            if not profile.portfolio_website and not profile.github_url:
                recommendations.append({
                    'recommendation_type': 'profile_update',
                    'title': 'Add Portfolio or GitHub Profile',
                    'description': 'Adding a portfolio or GitHub profile can significantly improve your visibility to recruiters.',
                    'reasoning': 'Profiles with portfolio links receive 40% more views from recruiters.',
                    'recommendation_data': {
                        'missing_links': ['portfolio_website', 'github_url'],
                        'impact_stats': {
                            'increased_visibility': '40%',
                            'recruiter_interest': '60%'
                        }
                    },
                    'action_items': [
                        'Create a professional portfolio website',
                        'Add your GitHub profile URL',
                        'Showcase your best projects'
                    ],
                    'estimated_impact': 'medium',
                    'relevance_score': 0.8,
                    'confidence_score': 0.9,
                    'urgency_score': 0.5
                })
        except Exception as e:
            logger.error(f"Error generating profile recommendations: {str(e)}")
        
        return recommendations
    
    @staticmethod
    def calculate_application_success_metrics(user, period_type='monthly'):
        """Calculate application success metrics for a user"""
        try:
            # Determine date range based on period type
            today = timezone.now().date()
            
            if period_type == 'weekly':
                period_start = today - timedelta(days=7)
            elif period_type == 'monthly':
                period_start = today - timedelta(days=30)
            elif period_type == 'quarterly':
                period_start = today - timedelta(days=90)
            else:  # yearly
                period_start = today - timedelta(days=365)
            
            period_end = today
            
            # Get applications in period
            applications = user.job_applications.filter(
                created_at__date__gte=period_start,
                created_at__date__lte=period_end
            )
            
            # Calculate metrics
            total_apps = applications.count()
            responses = applications.exclude(status='applied').count()
            interviews = applications.filter(
                status__in=['phone_screen', 'technical_interview', 'final_interview']
            ).count()
            offers = applications.filter(status='offer_received').count()
            accepted = applications.filter(status='offer_accepted').count()
            
            # Calculate rates
            response_rate = (responses / total_apps * 100) if total_apps > 0 else 0
            interview_rate = (interviews / total_apps * 100) if total_apps > 0 else 0
            offer_rate = (offers / total_apps * 100) if total_apps > 0 else 0
            acceptance_rate = (accepted / offers * 100) if offers > 0 else 0
            
            # Create or update metrics
            metrics_data = {
                'period_start': period_start,
                'period_end': period_end,
                'period_type': period_type,
                'applications_submitted': total_apps,
                'responses_received': responses,
                'interviews_scheduled': interviews,
                'offers_received': offers,
                'offers_accepted': accepted,
                'response_rate': response_rate,
                'interview_rate': interview_rate,
                'offer_rate': offer_rate,
                'acceptance_rate': acceptance_rate,
            }
            
            metrics, created = ApplicationSuccessMetrics.objects.update_or_create(
                user=user,
                period_start=period_start,
                period_end=period_end,
                period_type=period_type,
                defaults=metrics_data
            )
            
            logger.info(f"Calculated {period_type} success metrics for {user.email}")
            return metrics
            
        except Exception as e:
            logger.error(f"Failed to calculate success metrics for {user.email}: {str(e)}")
            return None
