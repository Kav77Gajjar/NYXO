# NYXO - Job Aggregator Platform

A modern job search and career management platform built with React + Vite frontend and Django REST API backend.

## 🌟 Features

- **🔍 Job Search**: Search jobs from multiple sources using Jooble API
- **👤 User Profiles**: Complete profile management with skills and experience
- **💼 Job Applications**: Track and manage job applications
- **📊 Analytics**: Career insights and job search analytics
- **❤️ Saved Jobs**: Like and save jobs for later
- **🔐 Authentication**: Secure JWT-based authentication
- **📱 Responsive**: Mobile-first responsive design

## 🏗️ Architecture

- **Frontend**: React 18 + Vite + Modern CSS
- **Backend**: Django 5.2 + Django REST Framework
- **Database**: SQLite (development) / PostgreSQL (production)
- **External APIs**: Jooble API for job search
- **Deployment**: Docker + Render/Railway/Heroku

## 🚀 Quick Start

### Prerequisites

- Docker Desktop installed
- Git installed
- (Optional) Node.js 18+ and Python 3.11+ for local development

### 1. Clone Repository

```bash
git clone https://github.com/gajjarkav/NYXO.git
cd NYXO
```

### 2. Environment Setup

Create a `.env` file in the `backend/job_aggregator/` directory:

```bash
# Copy the example environment file
cp backend/job_aggregator/.env.example backend/job_aggregator/.env
```

Edit the `.env` file with your settings:

```env
# Django settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1,0.0.0.0

# External API Keys
JOOBLE_API_KEY=your-jooble-api-key-here

# CORS settings
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

## 🐳 Docker Development & Testing

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t nyxo-app .

# Run the container
docker run -p 8000:8000 \
  -e SECRET_KEY=dev-secret-key-for-testing \
  -e DEBUG=False \
  -e ALLOWED_HOSTS=localhost,127.0.0.1,0.0.0.0 \
  -e JOOBLE_API_KEY=your-api-key \
  nyxo-app
```

### Using Docker Compose (Recommended for Testing)

```bash
# Start all services
docker-compose up --build

# Run in detached mode (background)
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Clean up (remove containers and volumes)
docker-compose down -v
```

### Access the Application

Once running, access:

- **Frontend**: http://localhost:8000/
- **API**: http://localhost:8000/api/v1/
- **Admin Panel**: http://localhost:8000/admin/
- **API Documentation**: http://localhost:8000/api/docs/

### Default User Accounts

| Role | Email | Password | Description |
|------|--------|----------|-------------|
| Admin | `admin@nyxo.com` | `admin123` | Full admin access |
| Demo User | `demo@nyxo.com` | `demo123` | Regular user for testing |

### Testing the Application

1. **Login**: Use demo credentials or create new account
2. **Search Jobs**: Try searching for "software developer" or "python"
3. **Profile**: Complete your profile in the dashboard
4. **Save Jobs**: Like jobs to save them to your collection
5. **Applications**: Track your job applications

## 🛠️ Local Development (Without Docker)

### Backend Setup

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Navigate to Django project
cd job_aggregator

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Access:
- **Frontend**: http://localhost:5173/
- **Backend**: http://localhost:8000/

## 🚀 Production Deployment

### Deploy to Render (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Render**:
   - Go to [render.com](https://render.com)
   - Sign up/login and connect your GitHub account
   - Click "New" → "Web Service"
   - Select your NYXO repository

3. **Auto-Deploy**:
   - Render automatically detects the `render.yaml` configuration
   - Click "Deploy" button
   - Wait for build to complete (~5-10 minutes)

4. **Set Environment Variables** (if needed):
   ```env
   SECRET_KEY=your-production-secret-key
   DEBUG=False
   ALLOWED_HOSTS=your-app-name.onrender.com
   JOOBLE_API_KEY=your-jooble-api-key
   CORS_ALLOWED_ORIGINS=https://your-app-name.onrender.com
   ```

5. **Access Your App**:
   - URL: `https://your-app-name.onrender.com`
   - Admin: `https://your-app-name.onrender.com/admin/`

### Deploy to Railway

1. **Install Railway CLI**:
   ```bash
   npm install -g @railway/cli
   railway login
   ```

2. **Deploy**:
   ```bash
   railway up
   ```

3. **Set Environment Variables**:
   ```bash
   railway variables set SECRET_KEY=your-secret-key
   railway variables set JOOBLE_API_KEY=your-api-key
   ```

### Deploy to Heroku

1. **Install Heroku CLI** and login

2. **Create Heroku App**:
   ```bash
   heroku create your-app-name
   heroku stack:set container
   ```

3. **Set Environment Variables**:
   ```bash
   heroku config:set SECRET_KEY=your-secret-key
   heroku config:set JOOBLE_API_KEY=your-api-key
   heroku config:set ALLOWED_HOSTS=your-app-name.herokuapp.com
   ```

4. **Deploy**:
   ```bash
   git push heroku main
   ```

### Deploy to DigitalOcean/AWS/GCP

1. **Build and tag image**:
   ```bash
   docker build -t nyxo-app .
   docker tag nyxo-app your-registry/nyxo-app:latest
   ```

2. **Push to registry**:
   ```bash
   docker push your-registry/nyxo-app:latest
   ```

3. **Deploy using your platform's container service**

## 📊 Environment Variables Reference

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SECRET_KEY` | Django secret key | `your-secret-key-here` |
| `DEBUG` | Debug mode | `False` |
| `ALLOWED_HOSTS` | Allowed hostnames | `yourdomain.com,*.render.com` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL URL | SQLite used if not set |
| `JOOBLE_API_KEY` | Job search API key | Empty (search won't work) |
| `CORS_ALLOWED_ORIGINS` | Frontend URLs | `https://yourdomain.com` |
| `EMAIL_BACKEND` | Email backend | Console backend |

## 🧪 Testing

### Run Tests in Docker

```bash
# Run backend tests
docker-compose exec web python manage.py test

# Run with coverage
docker-compose exec web coverage run --source='.' manage.py test
docker-compose exec web coverage report
```

### Manual Testing Checklist

- [ ] User registration and login
- [ ] Profile creation and editing
- [ ] Job search functionality
- [ ] Saving/liking jobs
- [ ] Job application tracking
- [ ] Admin panel access
- [ ] API endpoints response
- [ ] Mobile responsiveness

## 🐛 Troubleshooting

### Common Issues

**1. Docker Build Fails**
```bash
# Clean Docker cache
docker system prune -a
docker build --no-cache -t nyxo-app .
```

**2. Port Already in Use**
```bash
# Find and kill process using port
# Windows:
netstat -ano | findstr :8000
taskkill /PID <process-id> /F

# macOS/Linux:
lsof -ti:8000 | xargs kill -9
```

**3. Job Search Not Working**
- Verify `JOOBLE_API_KEY` is set correctly
- Check API key validity at [Jooble API](https://jooble.org/api/about)
- Check network connectivity

**4. Static Files Not Loading**
```bash
# Collect static files manually
docker-compose exec web python manage.py collectstatic --noinput
```

**5. Database Issues**
```bash
# Reset database
docker-compose down -v
docker-compose up --build
```

### Debug Mode

Enable debug mode for development:

```bash
# In docker-compose.yml, set:
DEBUG=True

# Or run with debug environment:
docker run -p 8000:8000 -e DEBUG=True -e SECRET_KEY=debug-key nyxo-app
```

### View Logs

```bash
# Docker Compose logs
docker-compose logs -f web

# Individual container logs
docker logs <container-id>

# Follow logs in real-time
docker logs -f <container-id>
```

## 📝 API Documentation

### Authentication Endpoints

- `POST /api/v1/auth/register/` - User registration
- `POST /api/v1/auth/login/` - User login
- `POST /api/v1/auth/logout/` - User logout
- `GET /api/v1/auth/profile/` - Get user profile

### Job Endpoints

- `POST /api/v1/external/search/` - Search jobs
- `GET /api/v1/jobs/` - List saved jobs
- `GET /api/v1/jobs/recommendations/` - Get job recommendations

### Full API Documentation

Visit `/api/docs/` when the application is running for complete API documentation.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make changes and test thoroughly
4. Commit changes: `git commit -m "Add feature"`
5. Push to branch: `git push origin feature-name`
6. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Live Demo**: [Your deployed app URL]
- **API Documentation**: [Your app URL]/api/docs/
- **GitHub Repository**: https://github.com/gajjarkav/NYXO
- **Issue Tracker**: https://github.com/gajjarkav/NYXO/issues

## 📞 Support

For support and questions:

- **Email**: your-email@example.com
- **GitHub Issues**: [Create an issue](https://github.com/gajjarkav/NYXO/issues)
- **Documentation**: See DEPLOYMENT.md for detailed deployment guide

---

**Happy Job Hunting! 🚀**
