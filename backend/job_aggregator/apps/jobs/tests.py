"""
Unit tests for the jobs app
"""
from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from unittest.mock import patch, Mock
from apps.jobs.models import Job, SavedJob, JobSource
from apps.jobs.services import JobMatchingService
from apps.profiles.models import Skill
from decimal import Decimal

User = get_user_model()


class JobModelTest(TestCase):
    """Test the Job model"""
    
    def setUp(self):
        self.job_data = {
            'title': 'Software Engineer',
            'company': 'Tech Company',
            'location': 'San Francisco, CA',
            'job_type': 'full_time',
            'experience_level': 'mid',
            'salary_min': 80000,
            'salary_max': 120000,
            'description': 'Great job opportunity',
            'requirements': 'Python, Django, React',
            'source': 'manual',
            'external_id': 'test123',
            'url': 'https://example.com/job/123'
        }
    
    def test_create_job(self):
        """Test creating a job"""
        job = Job.objects.create(**self.job_data)
        self.assertEqual(job.title, self.job_data['title'])
        self.assertEqual(job.company, self.job_data['company'])
        self.assertEqual(job.location, self.job_data['location'])
        self.assertTrue(job.is_active)
    
    def test_job_str_representation(self):
        """Test job string representation"""
        job = Job.objects.create(**self.job_data)
        expected = f"{job.title} at {job.company}"
        self.assertEqual(str(job), expected)
    
    def test_job_salary_range_property(self):
        """Test salary range property"""
        job = Job.objects.create(**self.job_data)
        expected = f"${job.salary_min:,} - ${job.salary_max:,}"
        self.assertEqual(job.salary_range, expected)


class JobAPITest(APITestCase):
    """Test job API endpoints"""
    
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            email='test@example.com',
            username='testuser',
            first_name='Test',
            last_name='User',
            password='testpass123'
        )
        
        # Create some test jobs
        self.job1 = Job.objects.create(
            title='Python Developer',
            company='Tech Corp',
            location='San Francisco, CA',
            job_type='full_time',
            experience_level='mid',
            salary_min=90000,
            salary_max=130000,
            description='Python development role',
            requirements='Python, Django, PostgreSQL',
            source='manual'
        )
        
        self.job2 = Job.objects.create(
            title='Frontend Developer',
            company='Web Solutions',
            location='New York, NY',
            job_type='full_time',
            experience_level='junior',
            salary_min=70000,
            salary_max=100000,
            description='Frontend development role',
            requirements='React, JavaScript, CSS',
            source='manual'
        )
        
        # Authenticate user
        refresh = RefreshToken.for_user(self.user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')
    
    def test_get_jobs_list(self):
        """Test getting jobs list"""
        response = self.client.get('/api/v1/jobs/')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 2)
    
    def test_get_job_detail(self):
        """Test getting job detail"""
        response = self.client.get(f'/api/v1/jobs/{self.job1.id}/')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.job1.title)
        self.assertEqual(response.data['company'], self.job1.company)
    
    def test_job_search(self):
        """Test job search functionality"""
        search_params = {
            'title': 'Python',
            'location': 'San Francisco'
        }
        
        response = self.client.get('/api/v1/jobs/search/', search_params)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)
        self.assertEqual(response.data['results'][0]['title'], 'Python Developer')
    
    def test_save_job(self):
        """Test saving a job"""
        response = self.client.post(f'/api/v1/jobs/{self.job1.id}/save/')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(
            SavedJob.objects.filter(user=self.user, job=self.job1).exists()
        )
    
    def test_unsave_job(self):
        """Test unsaving a job"""
        # First save the job
        SavedJob.objects.create(user=self.user, job=self.job1)
        
        response = self.client.delete(f'/api/v1/jobs/{self.job1.id}/save/')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(
            SavedJob.objects.filter(user=self.user, job=self.job1).exists()
        )


class JobMatchingServiceTest(TestCase):
    """Test job matching algorithm"""
    
    def setUp(self):
        self.user = User.objects.create_user(
            email='test@example.com',
            username='testuser',
            first_name='Test',
            last_name='User',
            password='testpass123',
            location='San Francisco, CA'
        )
        
        # Add skills to user
        self.skill1 = Skill.objects.create(
            user=self.user,
            name='Python',
            level='advanced'
        )
        self.skill2 = Skill.objects.create(
            user=self.user,
            name='Django',
            level='intermediate'
        )
        
        # Create test jobs
        self.matching_job = Job.objects.create(
            title='Python Developer',
            company='Tech Corp',
            location='San Francisco, CA',
            job_type='full_time',
            experience_level='mid',
            salary_min=90000,
            salary_max=130000,
            description='Python development role',
            requirements='Python, Django, PostgreSQL',
            source='manual'
        )
        
        self.non_matching_job = Job.objects.create(
            title='Java Developer',
            company='Enterprise Corp',
            location='Boston, MA',
            job_type='full_time',
            experience_level='senior',
            salary_min=120000,
            salary_max=160000,
            description='Java development role',
            requirements='Java, Spring, Oracle',
            source='manual'
        )
        
        self.matching_service = JobMatchingService()
    
    def test_calculate_job_match_score(self):
        """Test job match score calculation"""
        matching_score = self.matching_service.calculate_match_score(
            self.user, self.matching_job
        )
        non_matching_score = self.matching_service.calculate_match_score(
            self.user, self.non_matching_job
        )
        
        # Matching job should have higher score
        self.assertGreater(matching_score, non_matching_score)
        self.assertGreater(matching_score, 0.5)  # Should be a good match
    
    def test_get_job_matches(self):
        """Test getting job matches for user"""
        matches = self.matching_service.get_matches_for_user(self.user, limit=10)
        
        self.assertIsInstance(matches, list)
        self.assertGreater(len(matches), 0)
        
        # Check that matches are sorted by score (highest first)
        if len(matches) > 1:
            self.assertGreaterEqual(matches[0]['score'], matches[1]['score'])


class ExternalJobAPITest(TestCase):
    """Test external job API integration"""
    
    @patch('apps.jobs.services.requests.get')
    def test_jooble_api_integration(self, mock_get):
        """Test Jooble API integration"""
        # Mock API response
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            'jobs': [
                {
                    'title': 'Software Engineer',
                    'company': 'Remote Company',
                    'location': 'Remote',
                    'snippet': 'Great job opportunity',
                    'salary': '$80,000 - $120,000',
                    'link': 'https://example.com/job/1'
                }
            ],
            'totalCount': 1
        }
        mock_get.return_value = mock_response
        
        # Import here to avoid circular import
        from apps.jobs.services import JoobleAPIService
        
        service = JoobleAPIService()
        jobs = service.search_jobs('Python Developer', 'San Francisco')
        
        self.assertEqual(len(jobs), 1)
        self.assertEqual(jobs[0]['title'], 'Software Engineer')
        self.assertEqual(jobs[0]['company'], 'Remote Company')


class JobPerformanceTest(TestCase):
    """Test job-related performance optimizations"""
    
    def setUp(self):
        self.user = User.objects.create_user(
            email='test@example.com',
            username='testuser',
            password='testpass123'
        )
        
        # Create multiple jobs for performance testing
        self.jobs = []
        for i in range(100):
            job = Job.objects.create(
                title=f'Job {i}',
                company=f'Company {i}',
                location='San Francisco, CA',
                job_type='full_time',
                experience_level='mid',
                salary_min=80000,
                salary_max=120000,
                description=f'Job description {i}',
                requirements='Python, Django',
                source='manual'
            )
            self.jobs.append(job)
    
    def test_job_queryset_performance(self):
        """Test that job queries are optimized"""
        import time
        
        # Test query performance
        start_time = time.time()
        jobs = list(Job.objects.filter(is_active=True)[:20])
        end_time = time.time()
        
        # Should complete quickly (less than 1 second for 100 jobs)
        self.assertLess(end_time - start_time, 1.0)
        self.assertEqual(len(jobs), 20)
    
    def test_bulk_job_operations(self):
        """Test bulk operations for better performance"""
        # Test bulk update
        Job.objects.filter(id__in=[job.id for job in self.jobs[:10]]).update(
            is_active=False
        )
        
        inactive_count = Job.objects.filter(is_active=False).count()
        self.assertEqual(inactive_count, 10)
