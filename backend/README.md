# NYXO Job Aggregator Backend

A comprehensive Django REST API backend for the NYXO job aggregation platform that connects job seekers with opportunities from multiple external job platforms.

## 🚀 Features

### Core Functionality
- **User Authentication & Authorization** - JWT-based authentication with custom user model
- **User Profiles** - Comprehensive profile management with work experience, education, skills
- **Job Management** - Job listings from external sources with advanced search and filtering
- **Job Applications** - Complete application tracking system with events, documents, and reminders
- **External API Integration** - Jooble API integration for job data aggregation
- **Analytics** - Application tracking and performance analytics

### API Architecture
- **RESTful API Design** - Following REST principles with proper HTTP methods and status codes
- **Comprehensive Documentation** - Auto-generated API documentation with Swagger/OpenAPI
- **Filtering & Search** - Advanced filtering, searching, and pagination capabilities
- **Data Validation** - Robust input validation and error handling
- **CORS Support** - Cross-origin resource sharing for frontend integration

## 🛠 Technology Stack

- **Framework**: Django 4.2.7 + Django REST Framework 3.14.0
- **Database**: PostgreSQL (hosted on Supabase)
- **Authentication**: JWT (Simple JWT)
- **Documentation**: DRF Spectacular (Swagger/OpenAPI)
- **External APIs**: Jooble API for job aggregation
- **Deployment**: Gunicorn + Whitenoise (production ready)

## 📁 Project Structure

```
backend/
├── job_aggregator/
│   ├── apps/
│   │   ├── users/              # User authentication and management
│   │   ├── profiles/           # User profile management
│   │   ├── jobs/              # Job listings and search
│   │   ├── applications/       # Job application tracking
│   │   └── external_apis/      # External API integrations
│   ├── settings/
│   │   ├── base.py            # Base settings
│   │   ├── development.py     # Development settings
│   │   └── production.py      # Production settings
│   ├── urls.py                # Main URL configuration
│   └── manage.py              # Django management script
├── requirements.txt           # Python dependencies
├── .env.example              # Environment variables template
└── README.md                 # This file
```

## ⚙️ Installation & Setup

### Prerequisites
- Python 3.9+
- PostgreSQL database (or Supabase account)
- Jooble API key (for job data aggregation)

### 1. Clone and Setup Environment

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Environment Configuration

```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your configuration
# - Set SECRET_KEY
# - Configure database settings (Supabase connection)
# - Add JOOBLE_API_KEY
# - Set CORS_ALLOWED_ORIGINS for your frontend
```

### 3. Database Setup

```bash
# Navigate to Django project directory
cd job_aggregator

# Create database migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser
```

### 4. Run Development Server

```bash
# Start development server
python manage.py runserver

# Server will be available at http://localhost:8000
```

## 📚 API Documentation

Once the server is running, you can access:

- **API Documentation**: http://localhost:8000/api/docs/
- **API Schema**: http://localhost:8000/api/schema/
- **Admin Panel**: http://localhost:8000/admin/

## 🔗 API Endpoints

### Authentication
- `POST /api/v1/auth/register/` - User registration
- `POST /api/v1/auth/login/` - User login
- `POST /api/v1/auth/refresh/` - Token refresh
- `POST /api/v1/auth/logout/` - User logout

### User Profiles
- `GET /api/v1/profiles/` - Get user profile
- `PUT /api/v1/profiles/` - Update user profile
- `POST /api/v1/profiles/experience/` - Add work experience
- `POST /api/v1/profiles/education/` - Add education
- `POST /api/v1/profiles/skills/` - Manage skills

### Jobs
- `GET /api/v1/jobs/` - List jobs with filtering
- `GET /api/v1/jobs/{id}/` - Get job details
- `POST /api/v1/jobs/save/` - Save job
- `GET /api/v1/jobs/saved/` - Get saved jobs
- `POST /api/v1/jobs/match/` - Get job matches

### External APIs
- `POST /api/v1/external/search/` - Search jobs from external sources
- `GET /api/v1/external/search/history/` - Get search history
- `POST /api/v1/external/sync/` - Sync jobs from external APIs
- `GET /api/v1/external/status/` - Check external API status

### Applications
- `GET /api/v1/applications/applications/` - List job applications
- `POST /api/v1/applications/applications/` - Create application
- `GET /api/v1/applications/applications/summary/` - Get application summary
- `GET /api/v1/applications/applications/stats/` - Get application statistics
- `POST /api/v1/applications/applications/bulk_action/` - Bulk actions

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `SECRET_KEY` | Django secret key | Required |
| `DEBUG` | Debug mode | `True` |
| `ALLOWED_HOSTS` | Allowed hosts | `localhost,127.0.0.1` |
| `DB_NAME` | Database name | Required |
| `DB_USER` | Database user | Required |
| `DB_PASSWORD` | Database password | Required |
| `DB_HOST` | Database host | Required |
| `DB_PORT` | Database port | `5432` |
| `JOOBLE_API_KEY` | Jooble API key | Required |
| `CORS_ALLOWED_ORIGINS` | CORS allowed origins | Frontend URL |

### External API Configuration

#### Jooble API
1. Sign up at [Jooble API](https://jooble.org/api/about)
2. Get your API key
3. Add to `.env` file as `JOOBLE_API_KEY`

## 🚀 Deployment

### Production Setup

1. **Update settings**: Use `settings.production` for production
2. **Database**: Set up PostgreSQL on Supabase or your preferred host
3. **Environment**: Set `DEBUG=False` and configure all production variables
4. **Static files**: Configure static file serving
5. **Security**: Set proper `ALLOWED_HOSTS` and security headers

### Deployment Commands

```bash
# Collect static files
python manage.py collectstatic --noinput

# Run migrations
python manage.py migrate

# Start production server
gunicorn job_aggregator.wsgi:application
```

## 🧪 Testing

```bash
# Run tests
python manage.py test

# Run with coverage
coverage run --source='.' manage.py test
coverage report
```

## 📊 Database Models

### Key Models
- **User**: Custom user model with profile fields
- **UserProfile**: Detailed user profiles with preferences
- **Job**: Job listings from external sources
- **JobApplication**: Application tracking
- **ApplicationEvent**: Application timeline events
- **SearchHistory**: User search history

## 🔄 Data Flow

1. **Job Aggregation**: Fetch jobs from Jooble API
2. **Data Processing**: Clean and standardize job data
3. **Storage**: Store jobs in PostgreSQL database
4. **Matching**: Match jobs with user profiles
5. **Applications**: Track user applications and progress

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📝 License

This project is part of the NYXO hackathon project.

## 🆘 Support

For questions or support, please refer to the project documentation or create an issue in the repository.

---

**NYXO Backend API** - Connecting job seekers with opportunities through intelligent aggregation and matching.
