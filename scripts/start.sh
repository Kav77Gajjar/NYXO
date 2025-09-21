#!/bin/bash

# NYXO Application Startup Script for Production

set -e  # Exit on any error

echo "🚀 Starting NYXO Application..."

# Navigate to backend directory
cd /app/backend/job_aggregator

# Wait for database to be ready (if using external DB)
echo "⏳ Waiting for database..."
python -c "
import time
import sys
from django.db import connection
from django.core.management.color import no_style
style = no_style()

for i in range(30):
    try:
        connection.ensure_connection()
        print('✅ Database connection successful!')
        break
    except Exception as e:
        print(f'⏳ Database not ready yet (attempt {i+1}/30): {e}')
        time.sleep(2)
else:
    print('❌ Could not connect to database after 30 attempts')
    sys.exit(1)
"

# Run database migrations
echo "🔧 Running database migrations..."
python manage.py migrate --noinput

# Create superuser if it doesn't exist
echo "👤 Creating superuser if needed..."
python manage.py shell -c "
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(email='admin@nyxo.com').exists():
    User.objects.create_superuser(
        username='admin',
        email='admin@nyxo.com', 
        password='admin123',
        first_name='Admin',
        last_name='User'
    )
    print('✅ Superuser created: admin@nyxo.com / admin123')
else:
    print('✅ Superuser already exists')
"

# Create demo user if it doesn't exist
echo "👤 Creating demo user if needed..."
python manage.py shell -c "
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(email='demo@nyxo.com').exists():
    User.objects.create_user(
        username='demo_user',
        email='demo@nyxo.com',
        password='demo123',
        first_name='Alex',
        last_name='Johnson'
    )
    print('✅ Demo user created: demo@nyxo.com / demo123')
else:
    print('✅ Demo user already exists')
"

# Collect static files
echo "📁 Collecting static files..."
python manage.py collectstatic --noinput

# Create sample jobs if database is empty
echo "📝 Creating sample data if needed..."
python manage.py shell -c "
from apps.jobs.models import Job
if Job.objects.count() == 0:
    print('Creating sample jobs...')
    exec(open('/app/backend/job_aggregator/create_sample_jobs.py').read())
    print('✅ Sample jobs created')
else:
    print('✅ Jobs already exist in database')
"

echo "🎉 Application setup complete!"

# Start the application server
echo "🚀 Starting Gunicorn server..."
exec gunicorn job_aggregator.wsgi:application \
    --bind 0.0.0.0:8000 \
    --workers 3 \
    --worker-class gevent \
    --worker-connections 1000 \
    --max-requests 1000 \
    --max-requests-jitter 50 \
    --timeout 30 \
    --keep-alive 2 \
    --log-level info \
    --access-logfile - \
    --error-logfile - \
    --log-file -