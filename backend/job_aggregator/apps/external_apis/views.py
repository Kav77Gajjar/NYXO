from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
import json
import logging

from .jooble_service import jooble_service
from .serializers import (
    JobSearchSerializer, 
    JobSearchResponseSerializer, 
    SearchHistorySerializer,
    JobSyncSerializer,
    JobImportSerializer
)
from ..jobs.models import Job, SearchHistory
from ..jobs.serializers import JobSerializer

logger = logging.getLogger(__name__)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def search_jobs(request):
    """
    Search for jobs using external APIs
    """
    serializer = JobSearchSerializer(data=request.data)
    
    if not serializer.is_valid():
        return Response(
            {'error': 'Invalid search parameters', 'details': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    search_data = serializer.validated_data
    
    try:
        # Search using Jooble API
        jooble_results = jooble_service.search_jobs(
            keywords=search_data['keywords'],
            location=search_data.get('location', ''),
            page=search_data.get('page', 1),
            limit=search_data.get('limit', 20),
            salary=search_data.get('salary_min'),
            radius=search_data.get('radius')
        )
        
        # Filter results based on additional criteria
        if jooble_results['success']:
            filtered_jobs = _filter_search_results(jooble_results['jobs'], search_data)
            jooble_results['jobs'] = filtered_jobs
            jooble_results['total_count'] = len(filtered_jobs)
        
        # Save search history
        _save_search_history(request.user, search_data, jooble_results.get('total_count', 0))
        
        # Import jobs to local database if successful
        if jooble_results['success'] and jooble_results['jobs']:
            _import_jobs_to_database(jooble_results['jobs'])
        
        return Response(jooble_results, status=status.HTTP_200_OK)
        
    except Exception as e:
        logger.error(f"Job search failed: {str(e)}")
        return Response(
            {'error': 'Job search failed', 'message': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_history(request):
    """
    Get user's search history
    """
    try:
        history = SearchHistory.objects.filter(user=request.user).order_by('-created_at')[:20]
        serializer = SearchHistorySerializer(history, many=True)
        
        return Response({
            'success': True,
            'history': serializer.data
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        logger.error(f"Failed to retrieve search history: {str(e)}")
        return Response(
            {'error': 'Failed to retrieve search history'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def sync_jobs(request):
    """
    Synchronize jobs from external sources to local database
    """
    if not request.user.is_staff:
        return Response(
            {'error': 'Permission denied. Admin access required.'},
            status=status.HTTP_403_FORBIDDEN
        )
    
    serializer = JobSyncSerializer(data=request.data)
    
    if not serializer.is_valid():
        return Response(
            {'error': 'Invalid sync parameters', 'details': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    sync_data = serializer.validated_data
    
    try:
        synced_jobs = 0
        updated_jobs = 0
        
        # Sync from Jooble
        if sync_data['source'] == 'jooble':
            result = _sync_from_jooble(sync_data)
            synced_jobs = result['synced']
            updated_jobs = result['updated']
        
        return Response({
            'success': True,
            'source': sync_data['source'],
            'synced_jobs': synced_jobs,
            'updated_jobs': updated_jobs,
            'total_processed': synced_jobs + updated_jobs
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        logger.error(f"Job sync failed: {str(e)}")
        return Response(
            {'error': 'Job synchronization failed', 'message': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def import_jobs(request):
    """
    Import external jobs to local database
    """
    serializer = JobImportSerializer(data=request.data)
    
    if not serializer.is_valid():
        return Response(
            {'error': 'Invalid import data', 'details': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    import_data = serializer.validated_data
    
    try:
        result = _import_jobs_to_database(
            import_data['external_jobs'],
            overwrite_existing=import_data.get('overwrite_existing', False)
        )
        
        return Response({
            'success': True,
            'imported_jobs': result['imported'],
            'updated_jobs': result['updated'],
            'skipped_jobs': result['skipped'],
            'total_processed': len(import_data['external_jobs'])
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        logger.error(f"Job import failed: {str(e)}")
        return Response(
            {'error': 'Job import failed', 'message': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['GET'])
def api_status(request):
    """
    Check the status of external APIs
    """
    try:
        # Test Jooble API
        jooble_status = _test_jooble_api()
        
        return Response({
            'success': True,
            'apis': {
                'jooble': jooble_status
            },
            'timestamp': timezone.now().isoformat()
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        logger.error(f"API status check failed: {str(e)}")
        return Response(
            {'error': 'API status check failed'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


# Helper functions

def _filter_search_results(jobs, search_criteria):
    """Filter job results based on additional search criteria"""
    filtered_jobs = jobs
    
    # Filter by job type
    if search_criteria.get('job_type'):
        filtered_jobs = [
            job for job in filtered_jobs 
            if job.get('job_type') == search_criteria['job_type']
        ]
    
    # Filter by remote only
    if search_criteria.get('remote_only'):
        filtered_jobs = [
            job for job in filtered_jobs 
            if job.get('remote_allowed', False)
        ]
    
    # Filter by salary range
    salary_min = search_criteria.get('salary_min')
    salary_max = search_criteria.get('salary_max')
    
    if salary_min or salary_max:
        filtered_jobs = _filter_by_salary(filtered_jobs, salary_min, salary_max)
    
    return filtered_jobs


def _filter_by_salary(jobs, min_salary=None, max_salary=None):
    """Filter jobs by salary range"""
    filtered_jobs = []
    
    for job in jobs:
        salary_info = job.get('salary', {})
        if not salary_info or not isinstance(salary_info, dict):
            continue
        
        job_min = salary_info.get('min')
        job_max = salary_info.get('max')
        
        if job_min is None and job_max is None:
            continue
        
        job_salary = job_max or job_min or 0
        
        # Convert hourly to annual if needed
        if salary_info.get('period') == 'hour':
            job_salary = job_salary * 40 * 52  # Assume 40 hours/week, 52 weeks/year
        elif salary_info.get('period') == 'month':
            job_salary = job_salary * 12
        
        # Check salary range
        if min_salary and job_salary < min_salary:
            continue
        if max_salary and job_salary > max_salary:
            continue
        
        filtered_jobs.append(job)
    
    return filtered_jobs


def _save_search_history(user, search_data, results_count):
    """Save search to user's history"""
    try:
        # Prepare filters
        filters = {}
        for key in ['job_type', 'remote_only', 'salary_min', 'salary_max', 'date_posted', 'radius']:
            if search_data.get(key) is not None:
                filters[key] = search_data[key]
        
        SearchHistory.objects.create(
            user=user,
            keywords=search_data['keywords'],
            location=search_data.get('location', ''),
            filters=filters,
            results_count=results_count
        )
    except Exception as e:
        logger.warning(f"Failed to save search history: {str(e)}")


def _import_jobs_to_database(external_jobs, overwrite_existing=False):
    """Import external jobs to local database"""
    imported = 0
    updated = 0
    skipped = 0
    
    for job_data in external_jobs:
        try:
            external_id = job_data.get('external_id')
            source = job_data.get('source')
            
            # Check if job already exists
            existing_job = Job.objects.filter(
                external_id=external_id,
                source=source
            ).first()
            
            if existing_job:
                if overwrite_existing:
                    # Update existing job
                    for key, value in job_data.items():
                        if hasattr(existing_job, key):
                            setattr(existing_job, key, value)
                    existing_job.save()
                    updated += 1
                else:
                    skipped += 1
                continue
            
            # Create new job
            Job.objects.create(**job_data)
            imported += 1
            
        except Exception as e:
            logger.warning(f"Failed to import job {job_data.get('external_id')}: {str(e)}")
            skipped += 1
            continue
    
    return {
        'imported': imported,
        'updated': updated,
        'skipped': skipped
    }


def _sync_from_jooble(sync_data):
    """Sync jobs from Jooble API"""
    synced = 0
    updated = 0
    
    # Search for jobs with popular keywords if not specified
    keywords = sync_data.get('keywords', 'software developer')
    location = sync_data.get('location', '')
    batch_size = sync_data.get('batch_size', 50)
    
    # Fetch jobs from Jooble
    jooble_results = jooble_service.search_jobs(
        keywords=keywords,
        location=location,
        limit=batch_size
    )
    
    if jooble_results['success']:
        result = _import_jobs_to_database(
            jooble_results['jobs'],
            overwrite_existing=sync_data.get('force_update', False)
        )
        synced = result['imported']
        updated = result['updated']
    
    return {
        'synced': synced,
        'updated': updated
    }


def _test_jooble_api():
    """Test Jooble API connectivity"""
    try:
        test_result = jooble_service.search_jobs(
            keywords='test',
            location='',
            limit=1
        )
        
        return {
            'status': 'healthy' if test_result['success'] else 'error',
            'message': test_result.get('error', 'API is working'),
            'response_time': 'normal'
        }
    except Exception as e:
        return {
            'status': 'error',
            'message': str(e),
            'response_time': 'timeout'
        }


# Import timezone for API status
from django.utils import timezone
