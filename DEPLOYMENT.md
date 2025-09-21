# NYXO - Deployment Guide

## 🚀 One-Click Deployment to Render

This project is configured for easy deployment to Render using Docker.

### Quick Deploy

1. **Push to GitHub**: Make sure your code is in a GitHub repository
2. **Connect to Render**: 
   - Go to [render.com](https://render.com)
   - Create account and connect your GitHub
   - Click "New" → "Web Service"
   - Select your repository
3. **Auto-detect**: Render will automatically detect the `render.yaml` configuration
4. **Deploy**: Click "Deploy" and wait for build to complete

### Environment Variables (Pre-configured)

These are automatically set via `render.yaml`:

| Variable | Value | Description |
|----------|--------|-------------|
| `DEBUG` | `False` | Production mode |
| `SECRET_KEY` | Auto-generated | Django secret key |
| `ALLOWED_HOSTS` | `*.onrender.com` | Allowed hostnames |
| `CORS_ALLOWED_ORIGINS` | `https://*.onrender.com` | CORS settings |
| `JOOBLE_API_KEY` | Your API key | Job search API |

### Manual Environment Setup (if needed)

If you need to customize environment variables:

```bash
# Required
SECRET_KEY=your-secret-key-here
DEBUG=False
ALLOWED_HOSTS=yourdomain.com,*.onrender.com
DJANGO_SETTINGS_MODULE=job_aggregator.settings.production

# Optional
DATABASE_URL=postgres://user:pass@host:port/dbname
JOOBLE_API_KEY=your-jooble-api-key
CORS_ALLOWED_ORIGINS=https://yourdomain.com
```

## 🐳 Local Docker Development

### Build and Run

```bash
# Build the Docker image
docker build -t nyxo-app .

# Run the container
docker run -p 8000:8000 \
  -e SECRET_KEY=dev-secret-key \
  -e DEBUG=False \
  -e ALLOWED_HOSTS=localhost,127.0.0.1 \
  -e JOOBLE_API_KEY=your-api-key \
  nyxo-app
```

### Using Docker Compose

```bash
# Start all services
docker-compose up --build

# Run in background
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🏗️ Architecture

The Docker container includes:

- **Frontend**: React + Vite (built as static files)
- **Backend**: Django + DRF API
- **Web Server**: Gunicorn with Gevent workers
- **Static Files**: Served by Django + WhiteNoise
- **Database**: SQLite (default) or PostgreSQL via `DATABASE_URL`

## 📱 Access Your App

After deployment:

- **Frontend**: `https://your-app-name.onrender.com/`
- **API**: `https://your-app-name.onrender.com/api/v1/`
- **Admin**: `https://your-app-name.onrender.com/admin/`
- **API Docs**: `https://your-app-name.onrender.com/api/docs/`

## 👤 Default Users

The app creates these users automatically:

| User | Email | Password | Role |
|------|--------|----------|------|
| Admin | `admin@nyxo.com` | `admin123` | Superuser |
| Demo | `demo@nyxo.com` | `demo123` | Regular user |

## 🔧 Customization

### Database

By default uses SQLite. For PostgreSQL:

1. Add `DATABASE_URL` environment variable
2. Format: `postgres://user:password@host:port/database`

### Domain

Update environment variables:
- `ALLOWED_HOSTS`: Your domain(s)
- `CORS_ALLOWED_ORIGINS`: Frontend URL(s)

### API Keys

Update `JOOBLE_API_KEY` with your actual API key for job search functionality.

## 📊 Monitoring

The container includes:
- Health check endpoint: `/api/v1/auth/`
- Structured logging to stdout
- Performance monitoring via Gunicorn metrics

## 🛠️ Troubleshooting

### Build Issues
```bash
# Check build logs
docker build -t nyxo-app . --progress=plain

# Test locally first
docker-compose up --build
```

### Runtime Issues
```bash
# Check container logs
docker logs <container-id>

# Access container shell
docker exec -it <container-id> /bin/bash
```

### Common Problems

1. **502 Bad Gateway**: Check environment variables, especially `ALLOWED_HOSTS`
2. **CORS Issues**: Verify `CORS_ALLOWED_ORIGINS` matches your domain
3. **Database**: If using external DB, ensure `DATABASE_URL` is correct
4. **API Keys**: Verify `JOOBLE_API_KEY` is valid for job search

## 📞 Support

For deployment issues:
1. Check Render deployment logs
2. Verify environment variables
3. Test Docker build locally
4. Check application logs in Render dashboard