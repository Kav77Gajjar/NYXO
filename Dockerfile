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

# Copy built frontend files from the builder stage to Django's staticfiles directory
COPY --from=frontend-builder /app/frontend/dist ./backend/job_aggregator/staticfiles/

# Create directories for media and static files
RUN mkdir -p /app/backend/media /app/backend/staticfiles

# Copy startup script
COPY scripts/start.sh ./
RUN chmod +x start.sh

# Collect static files
WORKDIR /app/backend/job_aggregator
RUN python manage.py collectstatic --noinput --settings=settings.production

# Create non-root user
RUN adduser --disabled-password --gecos '' appuser
RUN chown -R appuser:appuser /app
USER appuser

# Expose port
EXPOSE 8000

# Start the application
WORKDIR /app
CMD ["./start.sh"]