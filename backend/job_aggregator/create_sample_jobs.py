from apps.jobs.models import Job
from datetime import datetime, timezone

# Create sample jobs
jobs_data = [
    {
        'external_id': 'sample_001',
        'source': 'jooble',
        'source_url': 'https://jooble.org/desc/sample1',
        'title': 'Full Stack Developer',
        'company': 'TechCorp Inc.',
        'location': 'New York, NY',
        'job_type': 'full-time',
        'experience_level': 'mid',
        'description': 'Join our team as a Full Stack Developer. Work with React, Node.js, and PostgreSQL to build amazing applications.',
        'requirements': 'React, Node.js, PostgreSQL, 3+ years experience',
        'salary_min': 80000,
        'salary_max': 120000,
        'posted_date': datetime.now(timezone.utc),
        'skills_required': ['React', 'Node.js', 'PostgreSQL', 'JavaScript'],
        'tags': ['remote-friendly', 'health-benefits']
    },
    {
        'external_id': 'sample_002', 
        'source': 'jooble',
        'source_url': 'https://jooble.org/desc/sample2',
        'title': 'Python Developer',
        'company': 'DataFlow Solutions',
        'location': 'San Francisco, CA',
        'job_type': 'full-time',
        'experience_level': 'senior',
        'description': 'Senior Python Developer to work on data processing pipelines and machine learning applications.',
        'requirements': 'Python, Django, PostgreSQL, 5+ years experience',
        'salary_min': 100000,
        'salary_max': 150000,
        'posted_date': datetime.now(timezone.utc),
        'skills_required': ['Python', 'Django', 'PostgreSQL', 'Machine Learning'],
        'tags': ['health-benefits', 'stock-options']
    },
    {
        'external_id': 'sample_003',
        'source': 'jooble', 
        'source_url': 'https://jooble.org/desc/sample3',
        'title': 'Frontend Developer',
        'company': 'Creative Studios',
        'location': 'Austin, TX',
        'job_type': 'contract',
        'experience_level': 'entry',
        'description': 'Frontend Developer position working with React and modern JavaScript frameworks.',
        'requirements': 'React, JavaScript, CSS, HTML, 1+ years experience',
        'salary_min': 60000,
        'salary_max': 80000,
        'posted_date': datetime.now(timezone.utc),
        'skills_required': ['React', 'JavaScript', 'CSS', 'HTML'],
        'tags': ['remote-work', 'flexible-hours']
    }
]

for job_data in jobs_data:
    job, created = Job.objects.get_or_create(
        external_id=job_data['external_id'],
        defaults=job_data
    )
    if created:
        print(f'Created job: {job.title} at {job.company}')
    else:
        print(f'Job already exists: {job.title} at {job.company}')

print(f'Total jobs in database: {Job.objects.count()}')
