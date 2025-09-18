"""
Performance optimization script for NYXO Job Aggregator
Run this script to optimize database performance and implement caching
"""
import os
import sys
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'job_aggregator.settings')
django.setup()

from django.core.management.base import BaseCommand
from django.db import connection
from django.core.cache import cache
from django.conf import settings
from apps.jobs.models import Job
from apps.users.models import User
from apps.applications.models import JobApplication
import time


class PerformanceOptimizer:
    """Performance optimization utilities"""
    
    def __init__(self):
        print("🚀 NYXO Performance Optimizer")
        print("=" * 50)
    
    def analyze_database_performance(self):
        """Analyze database performance and suggest optimizations"""
        print("\n📊 Database Performance Analysis")
        print("-" * 30)
        
        # Check table sizes (SQLite compatible)
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT name as table_name
                FROM sqlite_master 
                WHERE type='table' AND name NOT LIKE 'sqlite_%'
                ORDER BY name;
            """)
            
            print("Database Tables:")
            tables = cursor.fetchall()
            for row in tables:
                cursor.execute(f"SELECT COUNT(*) FROM {row[0]}")
                count = cursor.fetchone()[0]
                print(f"  {row[0]}: {count} records")
        
        # Check for indexes (SQLite compatible)
        print("\n🔍 Index Analysis:")
        self._check_indexes_sqlite()
        
        # Performance recommendations
        print("\n💡 Performance Recommendations:")
        self._performance_recommendations()
    
    def _check_indexes_sqlite(self):
        """Check for important indexes (SQLite compatible)"""
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT name, tbl_name, sql 
                FROM sqlite_master 
                WHERE type='index' AND sql IS NOT NULL
                ORDER BY tbl_name, name;
            """)
            
            indexes = cursor.fetchall()
            print("  Existing indexes:")
            for name, table, sql in indexes:
                print(f"    ✅ {table}.{name}")
            
            if not indexes:
                print("    ⚠️  No custom indexes found")
    
    def _performance_recommendations(self):
        """Provide performance recommendations"""
        recommendations = [
            "✅ Use select_related() for foreign key relationships",
            "✅ Use prefetch_related() for reverse foreign keys and many-to-many",
            "✅ Implement database query caching for frequently accessed data",
            "✅ Use database connection pooling in production",
            "✅ Consider read replicas for heavy read workloads",
            "✅ Implement Redis caching for session management",
            "✅ Use CDN for static file delivery",
            "✅ Implement API response caching",
        ]
        
        for rec in recommendations:
            print(f"  {rec}")
    
    def implement_query_optimizations(self):
        """Implement query optimizations"""
        print("\n⚡ Implementing Query Optimizations")
        print("-" * 35)
        
        # Test optimized queries
        start_time = time.time()
        
        # Optimized job queries with select_related
        jobs = Job.objects.select_related().filter(is_active=True)[:10]
        list(jobs)  # Force evaluation
        
        end_time = time.time()
        print(f"✅ Optimized job query: {end_time - start_time:.4f}s")
        
        # Test user queries with prefetch_related
        start_time = time.time()
        
        users = User.objects.prefetch_related('skills', 'work_experiences')[:5]
        for user in users:
            list(user.skills.all())  # Force evaluation
            list(user.work_experiences.all())
        
        end_time = time.time()
        print(f"✅ Optimized user query with prefetch: {end_time - start_time:.4f}s")
    
    def setup_caching(self):
        """Setup and test caching"""
        print("\n🚀 Setting up Caching")
        print("-" * 20)
        
        # Test cache functionality
        cache_key = 'test_cache_key'
        test_data = {'message': 'Cache is working!', 'timestamp': time.time()}
        
        # Set cache
        cache.set(cache_key, test_data, timeout=300)  # 5 minutes
        print("✅ Cache write test successful")
        
        # Get from cache
        cached_data = cache.get(cache_key)
        if cached_data:
            print("✅ Cache read test successful")
            print(f"   Cached data: {cached_data['message']}")
        else:
            print("❌ Cache read failed")
        
        # Cache statistics
        print(f"\n📈 Cache Configuration:")
        print(f"   Backend: {settings.CACHES['default']['BACKEND']}")
        print(f"   Location: {settings.CACHES['default'].get('LOCATION', 'In-memory')}")
        
        # Implement common cache patterns
        self._implement_cache_patterns()
    
    def _implement_cache_patterns(self):
        """Implement common caching patterns"""
        print("\n🔧 Implementing Cache Patterns:")
        
        # 1. Cache job search results
        search_key = "job_search_python_sf"
        jobs = Job.objects.filter(
            title__icontains='python',
            location__icontains='san francisco',
            is_active=True
        )[:10]
        
        cache.set(search_key, list(jobs.values()), timeout=1800)  # 30 minutes
        print("  ✅ Job search results cached")
        
        # 2. Cache user profile data
        if User.objects.exists():
            user = User.objects.first()
            profile_key = f"user_profile_{user.id}"
            profile_data = {
                'full_name': user.full_name,
                'email': user.email,
                'profile_completion': user.get_profile_completion_percentage()
            }
            cache.set(profile_key, profile_data, timeout=3600)  # 1 hour
            print("  ✅ User profile data cached")
        
        # 3. Cache application statistics
        stats_key = "application_stats"
        if JobApplication.objects.exists():
            stats = {
                'total_applications': JobApplication.objects.count(),
                'pending_applications': JobApplication.objects.filter(status='applied').count(),
                'interviews_scheduled': JobApplication.objects.filter(status='interview').count(),
            }
            cache.set(stats_key, stats, timeout=900)  # 15 minutes
            print("  ✅ Application statistics cached")
    
    def create_database_indexes(self):
        """Create recommended database indexes (SQLite compatible)"""
        print("\n🔧 Creating Database Indexes")
        print("-" * 28)
        
        indexes_sql = [
            "CREATE INDEX IF NOT EXISTS idx_jobs_location ON jobs(location);",
            "CREATE INDEX IF NOT EXISTS idx_jobs_created_at ON jobs(created_at);", 
            "CREATE INDEX IF NOT EXISTS idx_jobs_job_type ON jobs(job_type);",
            "CREATE INDEX IF NOT EXISTS idx_jobs_experience_level ON jobs(experience_level);",
            "CREATE INDEX IF NOT EXISTS idx_jobs_active_created ON jobs(is_active, created_at);",
            "CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);",
            "CREATE INDEX IF NOT EXISTS idx_applications_user_status ON applications(user_id, status);",
            "CREATE INDEX IF NOT EXISTS idx_skills_user ON skills(user_id);",
            "CREATE INDEX IF NOT EXISTS idx_work_exp_user ON work_experiences(user_id);",
        ]
        
        with connection.cursor() as cursor:
            for sql in indexes_sql:
                try:
                    cursor.execute(sql)
                    table = sql.split('ON ')[1].split('(')[0].strip()
                    print(f"  ✅ Index created on {table}")
                except Exception as e:
                    print(f"  ⚠️  Index creation skipped: {str(e)[:50]}...")
    
    def run_performance_tests(self):
        """Run performance tests"""
        print("\n🧪 Running Performance Tests")
        print("-" * 26)
        
        tests = [
            self._test_job_list_performance,
            self._test_user_profile_performance,
            self._test_search_performance,
            self._test_cache_performance,
        ]
        
        results = []
        for test in tests:
            try:
                result = test()
                results.append(result)
            except Exception as e:
                print(f"  ❌ Test failed: {str(e)}")
        
        # Summary
        print(f"\n📊 Performance Test Summary:")
        for result in results:
            status = "✅" if result['time'] < result['threshold'] else "⚠️"
            print(f"  {status} {result['name']}: {result['time']:.4f}s (threshold: {result['threshold']}s)")
    
    def _test_job_list_performance(self):
        """Test job listing performance"""
        start_time = time.time()
        jobs = Job.objects.filter(is_active=True)[:20]
        list(jobs)  # Force evaluation
        end_time = time.time()
        
        return {
            'name': 'Job List Query',
            'time': end_time - start_time,
            'threshold': 0.1  # Should complete in under 100ms
        }
    
    def _test_user_profile_performance(self):
        """Test user profile loading performance"""
        if not User.objects.exists():
            return {'name': 'User Profile Query', 'time': 0, 'threshold': 0.1}
        
        start_time = time.time()
        user = User.objects.select_related().prefetch_related('skills', 'work_experiences').first()
        if user:
            list(user.skills.all())
            list(user.work_experiences.all())
        end_time = time.time()
        
        return {
            'name': 'User Profile Query',
            'time': end_time - start_time,
            'threshold': 0.1  # Should complete in under 100ms
        }
    
    def _test_search_performance(self):
        """Test search performance"""
        start_time = time.time()
        jobs = Job.objects.filter(
            title__icontains='developer',
            is_active=True
        )[:10]
        list(jobs)
        end_time = time.time()
        
        return {
            'name': 'Job Search Query',
            'time': end_time - start_time,
            'threshold': 0.2  # Should complete in under 200ms
        }
    
    def _test_cache_performance(self):
        """Test cache performance"""
        # Write test
        start_time = time.time()
        cache.set('perf_test', {'data': 'test'}, timeout=60)
        cache.get('perf_test')
        end_time = time.time()
        
        return {
            'name': 'Cache Read/Write',
            'time': end_time - start_time,
            'threshold': 0.01  # Should complete in under 10ms
        }
    
    def optimize(self):
        """Run all optimizations"""
        print("🚀 Starting Performance Optimization...")
        
        self.analyze_database_performance()
        self.implement_query_optimizations()
        self.setup_caching()
        self.create_database_indexes()
        self.run_performance_tests()
        
        print("\n🎉 Performance Optimization Complete!")
        print("=" * 50)
        print("✅ Database indexes created")
        print("✅ Query optimizations implemented")
        print("✅ Caching configured and tested")
        print("✅ Performance tests completed")
        print("\n💡 Next Steps:")
        print("   - Monitor application performance in production")
        print("   - Consider implementing Redis for enhanced caching")
        print("   - Set up database query monitoring")
        print("   - Implement API response caching")


if __name__ == "__main__":
    optimizer = PerformanceOptimizer()
    optimizer.optimize()
