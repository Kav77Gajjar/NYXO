import requests
import logging
from django.conf import settings
from datetime import datetime, timedelta
from typing import List, Dict, Optional


logger = logging.getLogger(__name__)


class JoobleAPIService:
    """Service class for interacting with Jooble API"""
    
    def __init__(self):
        self.api_key = settings.JOOBLE_API_KEY
        self.base_url = settings.JOOBLE_API_BASE_URL
        self.headers = {
            'Content-Type': 'application/json',
        }
    
    def search_jobs(self, keywords: str, location: str = '', page: int = 1, 
                   limit: int = 20, **kwargs) -> Dict:
        """
        Search for jobs using Jooble API
        
        Args:
            keywords: Job search keywords
            location: Job location
            page: Page number for pagination
            limit: Number of results per page
            **kwargs: Additional search parameters
        
        Returns:
            Dict containing job search results
        """
        url = f"{self.base_url}{self.api_key}"
        
        # Prepare search payload
        payload = {
            "keywords": keywords,
            "location": location,
            "page": str(page),
            "limit": str(limit)
        }
        
        # Add optional parameters
        if kwargs.get('salary'):
            payload['salary'] = str(kwargs['salary'])
        if kwargs.get('datecreatedfrom'):
            payload['datecreatedfrom'] = kwargs['datecreatedfrom']
        if kwargs.get('radius'):
            payload['radius'] = str(kwargs['radius'])
        
        try:
            response = requests.post(url, json=payload, headers=self.headers, timeout=30)
            response.raise_for_status()
            
            data = response.json()
            
            # Process and standardize the response
            processed_jobs = self._process_jooble_jobs(data.get('jobs', []))
            
            return {
                'success': True,
                'jobs': processed_jobs,
                'total_count': data.get('totalCount', 0),
                'page': page,
                'limit': limit,
                'has_next': len(processed_jobs) == limit,
                'source': 'jooble'
            }
            
        except requests.exceptions.RequestException as e:
            logger.error(f"Jooble API request failed: {str(e)}")
            return {
                'success': False,
                'error': 'Failed to fetch jobs from Jooble API',
                'jobs': [],
                'total_count': 0
            }
        except Exception as e:
            logger.error(f"Unexpected error in Jooble API: {str(e)}")
            return {
                'success': False,
                'error': 'An unexpected error occurred',
                'jobs': [],
                'total_count': 0
            }
    
    def get_job_details(self, job_id: str) -> Optional[Dict]:
        """
        Get detailed information for a specific job
        Note: Jooble API doesn't have a specific endpoint for job details,
        so this returns None. Job details are included in search results.
        """
        logger.info(f"Job details endpoint not available for Jooble. Job ID: {job_id}")
        return None
    
    def _process_jooble_jobs(self, jobs: List[Dict]) -> List[Dict]:
        """
        Process and standardize job data from Jooble API
        
        Args:
            jobs: Raw job data from Jooble API
            
        Returns:
            List of processed job dictionaries
        """
        processed_jobs = []
        
        for job in jobs:
            try:
                # Extract and clean job data
                processed_job = {
                    'external_id': self._generate_external_id(job),
                    'source': 'jooble',
                    'source_url': job.get('link', ''),
                    'title': self._clean_text(job.get('title', '')),
                    'company': self._clean_text(job.get('company', '')),
                    'location': self._clean_text(job.get('location', '')),
                    'description': self._clean_text(job.get('snippet', '')),
                    'salary': self._extract_salary(job.get('salary', '')),
                    'job_type': self._determine_job_type(job.get('type', '')),
                    'posted_date': self._parse_date(job.get('updated', '')),
                    'remote_allowed': self._check_remote(job),
                    'tags': self._extract_tags(job),
                }
                
                processed_jobs.append(processed_job)
                
            except Exception as e:
                logger.warning(f"Failed to process job: {str(e)}")
                continue
        
        return processed_jobs
    
    def _generate_external_id(self, job: Dict) -> str:
        """Generate a unique external ID for the job"""
        # Use job link or create hash from title + company + location
        link = job.get('link', '')
        if link:
            # Extract ID from URL if possible
            return f"jooble_{hash(link)}"
        else:
            # Create hash from job details
            unique_string = f"{job.get('title', '')}_{job.get('company', '')}_{job.get('location', '')}"
            return f"jooble_{hash(unique_string)}"
    
    def _clean_text(self, text: str) -> str:
        """Clean and sanitize text content"""
        if not text:
            return ''
        
        # Remove HTML tags and extra whitespace
        import re
        text = re.sub(r'<[^>]+>', '', text)
        text = re.sub(r'\s+', ' ', text)
        return text.strip()
    
    def _extract_salary(self, salary_text: str) -> Dict:
        """Extract salary information from text"""
        if not salary_text:
            return {}
        
        # Basic salary parsing - can be enhanced
        import re
        
        # Look for salary patterns
        salary_match = re.search(r'\$?(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)', salary_text)
        
        if salary_match:
            amount = float(salary_match.group(1).replace(',', ''))
            
            # Determine period
            period = 'year'
            if '/hour' in salary_text.lower() or 'hourly' in salary_text.lower():
                period = 'hour'
            elif '/month' in salary_text.lower() or 'monthly' in salary_text.lower():
                period = 'month'
            
            return {
                'min': amount,
                'max': amount,
                'currency': 'USD',
                'period': period,
                'text': salary_text
            }
        
        return {'text': salary_text}
    
    def _determine_job_type(self, type_text: str) -> str:
        """Determine job type from text"""
        if not type_text:
            return 'full-time'
        
        type_lower = type_text.lower()
        
        if 'part' in type_lower or 'part-time' in type_lower:
            return 'part-time'
        elif 'contract' in type_lower:
            return 'contract'
        elif 'intern' in type_lower:
            return 'internship'
        elif 'freelance' in type_lower:
            return 'freelance'
        else:
            return 'full-time'
    
    def _parse_date(self, date_text: str) -> str:
        """Parse date from various formats"""
        if not date_text:
            return datetime.now().isoformat()
        
        try:
            # Handle common date formats
            if 'ago' in date_text.lower():
                # Parse relative dates like "2 days ago"
                import re
                match = re.search(r'(\d+)\s*(day|hour|week|month)s?\s*ago', date_text.lower())
                if match:
                    amount = int(match.group(1))
                    unit = match.group(2)
                    
                    if unit == 'day':
                        date = datetime.now() - timedelta(days=amount)
                    elif unit == 'hour':
                        date = datetime.now() - timedelta(hours=amount)
                    elif unit == 'week':
                        date = datetime.now() - timedelta(weeks=amount)
                    elif unit == 'month':
                        date = datetime.now() - timedelta(days=amount * 30)
                    else:
                        date = datetime.now()
                    
                    return date.isoformat()
            
            # Try to parse as ISO date
            from dateutil import parser
            parsed_date = parser.parse(date_text)
            return parsed_date.isoformat()
            
        except Exception:
            # Fallback to current date
            return datetime.now().isoformat()
    
    def _check_remote(self, job: Dict) -> bool:
        """Check if job allows remote work"""
        text_to_check = f"{job.get('title', '')} {job.get('snippet', '')} {job.get('location', '')}".lower()
        
        remote_keywords = ['remote', 'work from home', 'telecommute', 'wfh', 'home office']
        
        return any(keyword in text_to_check for keyword in remote_keywords)
    
    def _extract_tags(self, job: Dict) -> List[str]:
        """Extract relevant tags from job data"""
        tags = []
        
        # Add location-based tags
        location = job.get('location', '').lower()
        if 'remote' in location:
            tags.append('remote')
        
        # Add company size indicator if available
        company = job.get('company', '')
        if company:
            tags.append('company-' + company.lower().replace(' ', '-'))
        
        # Add job type tag
        job_type = self._determine_job_type(job.get('type', ''))
        tags.append(job_type)
        
        return tags[:5]  # Limit to 5 tags


# Singleton instance
jooble_service = JoobleAPIService()
