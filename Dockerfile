# Multi-stage Docker build for NYXO - React Frontend + Django Backend
FROM node:20-alpine AS frontend-builder

# Set working directory for frontend build
WORKDIR /app/frontend

# Copy package files
COPY package*.json ./

# Install dependencies (use npm install instead of ci to handle lock file issues)
RUN npm install --production=false

# Copy frontend source code
COPY src/ ./src/
COPY public/ ./public/
COPY index.html ./
COPY vite.config.js ./

# Build the frontend
RUN npm run build

# Main application stage
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DJANGO_SETTINGS_MODULE=settings.production

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
        gcc \
        python3-dev \
        musl-dev \
        libpq-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy and install Python dependencies
COPY backend/requirements.txt ./
COPY requirements-production.txt ./
RUN pip install --no-cache-dir -r requirements-production.txt

# Copy backend application
COPY backend/ ./backend/

# Copy built frontend files to the correct Django staticfiles location
# Django collectstatic will copy files to STATIC_ROOT, which is BASE_DIR.parent/staticfiles = /app/backend/staticfiles
# But our Django view looks in BASE_DIR.parent/staticfiles = /app/backend/staticfiles 
# And the production collectstatic copies everything to /app/staticfiles
# So we need to put React files where collectstatic will find them and copy them to the final location
COPY --from=frontend-builder /app/frontend/dist ./backend/staticfiles/

# Create directories for media and static files
RUN mkdir -p /app/backend/media /app/backend/staticfiles

# Copy startup script
COPY scripts/start.sh ./
RUN chmod +x start.sh

# Collect static files (this will copy everything to STATIC_ROOT)
WORKDIR /app/backend/job_aggregator
RUN python manage.py collectstatic --noinput --settings=settings.production

# After collectstatic, copy React files to the location Django view expects
WORKDIR /app
RUN cp -r /app/backend/staticfiles/* /app/staticfiles/ || true

# Create non-root user
RUN adduser --disabled-password --gecos '' appuser
RUN chown -R appuser:appuser /app
USER appuser

# Expose port
EXPOSE 8000

# Start the application
WORKDIR /app
CMD ["./start.sh"]