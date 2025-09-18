"""
Job Matching Algorithm Service

This service calculates match scores between users and jobs based on:
1. Skills matching
2. Location preferences  
3. Experience level
4. Salary expectations
5. Job type preferences
"""

import logging
from typing import Dict, List, Tuple, Optional
from django.db.models import Q
from difflib import SequenceMatcher
import re

from apps.jobs.models import Job, JobMatch
from apps.profiles.models import UserProfile, Skill
from apps.users.models import User

logger = logging.getLogger(__name__)


class JobMatchingService:
    """Service for calculating job match scores and recommendations"""
    
    # Weights for different matching criteria (must sum to 1.0)
    WEIGHTS = {
        'skills': 0.40,      # 40% - Most important
        'experience': 0.25,  # 25% - Very important
        'location': 0.20,    # 20% - Important
        'salary': 0.15,      # 15% - Moderately important
    }
    
    # Experience level mappings
    EXPERIENCE_LEVELS = {
        'entry': 0,
        'mid': 1,
        'senior': 2,
        'lead': 3,
        'executive': 4
    }
    
    def __init__(self):
        self.similarity_threshold = 0.6  # Minimum similarity for skill matching
    
    def calculate_job_match(self, user: User, job: Job) -> Dict:
        """
        Calculate comprehensive match score between user and job
        
        Args:
            user: User instance
            job: Job instance
            
        Returns:
            Dict containing match scores and details
        """
        try:
            # Get user profile
            profile = self._get_user_profile(user)
            if not profile:
                return self._default_match_result()
            
            # Calculate individual scores
            skill_score, skill_details = self._calculate_skill_match(profile, job)
            experience_score = self._calculate_experience_match(profile, job)
            location_score = self._calculate_location_match(profile, job)
            salary_score = self._calculate_salary_match(profile, job)
            
            # Calculate weighted overall score
            overall_score = (
                skill_score * self.WEIGHTS['skills'] +
                experience_score * self.WEIGHTS['experience'] +
                location_score * self.WEIGHTS['location'] +
                salary_score * self.WEIGHTS['salary']
            )
            
            # Generate match reasons
            match_reasons = self._generate_match_reasons(
                skill_score, experience_score, location_score, salary_score, skill_details
            )
            
            return {
                'overall_score': round(overall_score, 2),
                'skill_score': round(skill_score, 2),
                'experience_score': round(experience_score, 2),
                'location_score': round(location_score, 2),
                'salary_score': round(salary_score, 2),
                'matching_skills': skill_details['matching'],
                'missing_skills': skill_details['missing'],
                'match_reasons': match_reasons,
                'recommendation_level': self._get_recommendation_level(overall_score)
            }
            
        except Exception as e:
            logger.error(f"Error calculating job match for user {user.id}, job {job.id}: {str(e)}")
            return self._default_match_result()
    
    def get_job_recommendations(self, user: User, limit: int = 20) -> List[Tuple[Job, Dict]]:
        """
        Get job recommendations for a user
        
        Args:
            user: User instance
            limit: Maximum number of recommendations
            
        Returns:
            List of tuples (Job, match_details)
        """
        try:
            # Get user preferences to filter jobs
            profile = self._get_user_profile(user)
            
            # Build job queryset with basic filtering
            jobs_queryset = Job.objects.filter(is_active=True)
            
            if profile:
                # Filter by location preferences
                if profile.preferred_locations:
                    location_q = Q()
                    for location in profile.preferred_locations:
                        location_q |= Q(location__icontains=location.strip())
                    jobs_queryset = jobs_queryset.filter(location_q)
                
                # Filter by salary range
                if profile.preferred_salary_min:
                    jobs_queryset = jobs_queryset.filter(
                        Q(salary_max__gte=profile.preferred_salary_min) |
                        Q(salary_max__isnull=True)
                    )
                
                if profile.preferred_salary_max:
                    jobs_queryset = jobs_queryset.filter(
                        Q(salary_min__lte=profile.preferred_salary_max) |
                        Q(salary_min__isnull=True)
                    )
            
            # Calculate matches for filtered jobs
            job_matches = []
            
            for job in jobs_queryset[:100]:  # Limit to 100 jobs for performance
                match_details = self.calculate_job_match(user, job)
                
                # Only include jobs with decent match scores
                if match_details['overall_score'] >= 30:  # 30% minimum match
                    job_matches.append((job, match_details))
            
            # Sort by match score and return top recommendations
            job_matches.sort(key=lambda x: x[1]['overall_score'], reverse=True)
            
            return job_matches[:limit]
            
        except Exception as e:
            logger.error(f"Error getting recommendations for user {user.id}: {str(e)}")
            return []
    
    def update_job_matches(self, user: User, jobs: Optional[List[Job]] = None) -> int:
        """
        Update JobMatch records for user
        
        Args:
            user: User instance
            jobs: Optional list of jobs to match against
            
        Returns:
            Number of matches updated
        """
        try:
            if jobs is None:
                jobs = Job.objects.filter(is_active=True)
            
            updated_count = 0
            
            for job in jobs:
                match_details = self.calculate_job_match(user, job)
                
                # Update or create JobMatch record
                job_match, created = JobMatch.objects.update_or_create(
                    user=user,
                    job=job,
                    defaults={
                        'match_score': match_details['overall_score'],
                        'skill_match_score': match_details['skill_score'],
                        'location_match_score': match_details['location_score'],
                        'experience_match_score': match_details['experience_score'],
                        'salary_match_score': match_details['salary_score'],
                        'matching_skills': match_details['matching_skills'],
                        'missing_skills': match_details['missing_skills'],
                        'match_reasons': match_details['match_reasons']
                    }
                )
                
                updated_count += 1
            
            return updated_count
            
        except Exception as e:
            logger.error(f"Error updating job matches for user {user.id}: {str(e)}")
            return 0
    
    def _get_user_profile(self, user: User) -> Optional[UserProfile]:
        """Get user profile safely"""
        try:
            return UserProfile.objects.get(user=user)
        except UserProfile.DoesNotExist:
            return None
    
    def _calculate_skill_match(self, profile: UserProfile, job: Job) -> Tuple[float, Dict]:
        """Calculate skills matching score"""
        try:
            # Get user skills
            user_skills = list(profile.user.skills.all())
            user_skill_names = [skill.name.lower() for skill in user_skills]
            
            # Extract job requirements skills
            job_skills = self._extract_job_skills(job)
            
            if not job_skills:
                return 50.0, {'matching': [], 'missing': []}  # Neutral score if no skills specified
            
            # Find matching skills
            matching_skills = []
            missing_skills = []
            
            for job_skill in job_skills:
                best_match = self._find_best_skill_match(job_skill, user_skill_names)
                
                if best_match:
                    matching_skills.append(best_match)
                else:
                    missing_skills.append(job_skill)
            
            # Calculate score based on percentage of matched skills
            if job_skills:
                match_percentage = len(matching_skills) / len(job_skills)
                score = match_percentage * 100
            else:
                score = 50.0
            
            return score, {
                'matching': matching_skills,
                'missing': missing_skills
            }
            
        except Exception as e:
            logger.warning(f"Error calculating skill match: {str(e)}")
            return 0.0, {'matching': [], 'missing': []}
    
    def _extract_job_skills(self, job: Job) -> List[str]:
        """Extract skills from job requirements and description"""
        text = f"{job.requirements or ''} {job.description}".lower()
        
        # Common tech skills to look for
        common_skills = [
            'python', 'javascript', 'java', 'react', 'node.js', 'django',
            'postgresql', 'mysql', 'mongodb', 'aws', 'docker', 'kubernetes',
            'html', 'css', 'typescript', 'vue.js', 'angular', 'flask',
            'git', 'linux', 'sql', 'nosql', 'redis', 'elasticsearch',
            'machine learning', 'data science', 'ai', 'tensorflow',
            'pandas', 'numpy', 'scikit-learn', 'spark', 'hadoop'
        ]
        
        found_skills = []
        
        for skill in common_skills:
            if skill in text:
                found_skills.append(skill)
        
        # Also extract from skills_required if available
        if hasattr(job, 'skills_required') and job.skills_required:
            found_skills.extend([skill.lower() for skill in job.skills_required])
        
        return list(set(found_skills))  # Remove duplicates
    
    def _find_best_skill_match(self, job_skill: str, user_skills: List[str]) -> Optional[str]:
        """Find the best matching user skill for a job skill"""
        best_match = None
        best_ratio = 0
        
        for user_skill in user_skills:
            ratio = SequenceMatcher(None, job_skill.lower(), user_skill.lower()).ratio()
            
            if ratio >= self.similarity_threshold and ratio > best_ratio:
                best_ratio = ratio
                best_match = user_skill
        
        return best_match
    
    def _calculate_experience_match(self, profile: UserProfile, job: Job) -> float:
        """Calculate experience level matching"""
        try:
            user_experience = profile.years_of_experience or 0
            job_experience_level = job.experience_level or 'mid'
            
            # Map job experience level to years
            experience_ranges = {
                'entry': (0, 2),
                'mid': (2, 5),
                'senior': (5, 10),
                'lead': (8, 15),
                'executive': (10, 20)
            }
            
            min_years, max_years = experience_ranges.get(job_experience_level, (2, 5))
            
            if min_years <= user_experience <= max_years:
                return 100.0  # Perfect match
            elif user_experience < min_years:
                # User is underqualified
                gap = min_years - user_experience
                return max(0, 100 - (gap * 20))  # Decrease by 20% per year gap
            else:
                # User is overqualified (less penalty)
                gap = user_experience - max_years
                return max(50, 100 - (gap * 10))  # Decrease by 10% per year gap
            
        except Exception as e:
            logger.warning(f"Error calculating experience match: {str(e)}")
            return 50.0  # Neutral score
    
    def _calculate_location_match(self, profile: UserProfile, job: Job) -> float:
        """Calculate location matching"""
        try:
            if not profile.preferred_locations:
                return 70.0  # Neutral score if no preference
            
            job_location = job.location.lower()
            
            # Check for remote work keywords
            if any(keyword in job_location for keyword in ['remote', 'anywhere', 'work from home']):
                return 100.0  # Perfect for remote-friendly positions
            
            # Check if job location matches any preferred locations
            for preferred_location in profile.preferred_locations:
                if preferred_location.lower() in job_location or job_location in preferred_location.lower():
                    return 100.0
            
            # Check for same state/country
            for preferred_location in profile.preferred_locations:
                if self._same_region(preferred_location, job.location):
                    return 75.0
            
            return 20.0  # Low score for distant locations
            
        except Exception as e:
            logger.warning(f"Error calculating location match: {str(e)}")
            return 50.0
    
    def _calculate_salary_match(self, profile: UserProfile, job: Job) -> float:
        """Calculate salary matching"""
        try:
            user_min = profile.preferred_salary_min
            user_max = profile.preferred_salary_max
            job_min = job.salary_min
            job_max = job.salary_max
            
            # If no salary info available, return neutral score
            if not any([user_min, user_max, job_min, job_max]):
                return 70.0
            
            # If job has no salary info but user has expectations
            if not job_min and not job_max:
                return 50.0
            
            # If user has no expectations
            if not user_min and not user_max:
                return 80.0
            
            # Calculate overlap
            job_range = (job_min or 0, job_max or float('inf'))
            user_range = (user_min or 0, user_max or float('inf'))
            
            overlap_start = max(job_range[0], user_range[0])
            overlap_end = min(job_range[1], user_range[1])
            
            if overlap_start <= overlap_end:
                return 100.0  # There's overlap
            
            # Calculate how far apart they are
            if job_range[1] < user_range[0]:
                # Job salary is below user expectation
                gap = user_range[0] - job_range[1]
                gap_percentage = gap / user_range[0] * 100
                return max(0, 100 - gap_percentage)
            else:
                # Job salary is above user expectation (good for user)
                return 90.0
            
        except Exception as e:
            logger.warning(f"Error calculating salary match: {str(e)}")
            return 50.0
    
    def _same_region(self, location1: str, location2: str) -> bool:
        """Check if two locations are in the same region"""
        # Simple implementation - check for same state
        location1_parts = location1.split(',')
        location2_parts = location2.split(',')
        
        if len(location1_parts) >= 2 and len(location2_parts) >= 2:
            return location1_parts[-1].strip().lower() == location2_parts[-1].strip().lower()
        
        return False
    
    def _generate_match_reasons(self, skill_score: float, experience_score: float, 
                              location_score: float, salary_score: float, 
                              skill_details: Dict) -> List[str]:
        """Generate human-readable match reasons"""
        reasons = []
        
        if skill_score >= 80:
            reasons.append(f"Strong skill match ({len(skill_details['matching'])} matching skills)")
        elif skill_score >= 60:
            reasons.append("Good skill alignment")
        elif skill_score < 40:
            reasons.append(f"Skill gap identified ({len(skill_details['missing'])} missing skills)")
        
        if experience_score >= 90:
            reasons.append("Perfect experience level match")
        elif experience_score >= 70:
            reasons.append("Good experience fit")
        elif experience_score < 50:
            reasons.append("Experience level mismatch")
        
        if location_score >= 90:
            reasons.append("Excellent location match")
        elif location_score < 30:
            reasons.append("Location may require relocation")
        
        if salary_score >= 90:
            reasons.append("Salary expectations aligned")
        elif salary_score < 40:
            reasons.append("Salary below expectations")
        
        return reasons
    
    def _get_recommendation_level(self, score: float) -> str:
        """Get recommendation level based on score"""
        if score >= 85:
            return "Highly Recommended"
        elif score >= 70:
            return "Recommended"
        elif score >= 50:
            return "Consider"
        else:
            return "Not Recommended"
    
    def _default_match_result(self) -> Dict:
        """Return default match result for errors"""
        return {
            'overall_score': 0.0,
            'skill_score': 0.0,
            'experience_score': 0.0,
            'location_score': 0.0,
            'salary_score': 0.0,
            'matching_skills': [],
            'missing_skills': [],
            'match_reasons': ['Unable to calculate match'],
            'recommendation_level': 'Not Recommended'
        }


# Singleton instance
job_matching_service = JobMatchingService()
