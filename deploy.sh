#!/bin/bash
# Production deployment script for Nyxo Django Application

echo "🚀 Starting Nyxo Production Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if .env.production exists
if [ ! -f ".env.production" ]; then
    print_error ".env.production file not found!"
    print_warning "Please copy .env.production template and configure with your production values"
    exit 1
fi

# Copy production environment file
print_status "Setting up production environment..."
cp .env.production .env

# Install production dependencies
print_status "Installing production dependencies..."
pip install -r requirements.txt

# Generate new secret key if needed
print_status "Checking SECRET_KEY configuration..."
if grep -q "your-production-secret-key" .env; then
    print_warning "Generating new SECRET_KEY..."
    NEW_SECRET_KEY=$(python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())")
    sed -i "s/your-production-secret-key.*/$NEW_SECRET_KEY/" .env
    print_status "New SECRET_KEY generated and set"
fi

# Run security checks
print_status "Running Django security checks..."
python manage.py check --deploy

# Collect static files
print_status "Collecting static files..."
python manage.py collectstatic --noinput

# Run database migrations
print_status "Running database migrations..."
python manage.py migrate

# Create cache table (if using database cache)
print_status "Setting up cache..."
python manage.py createcachetable || true

# Run tests
print_status "Running tests..."
python manage.py test

print_status "✅ Production deployment completed!"
print_warning "🔐 Remember to:"
print_warning "  1. Set up your production database"
print_warning "  2. Configure your web server (Nginx/Apache)"
print_warning "  3. Set up SSL certificates"
print_warning "  4. Configure monitoring and logging"
print_warning "  5. Set up backup procedures"

echo ""
print_status "🌐 Your application is ready for production deployment!"
