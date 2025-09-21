@echo off
echo 🚀 Starting NYXO Development Environment with Docker...
echo.

echo 📦 Building and starting containers...
docker-compose -f docker-compose.dev.yml up --build

echo.
echo 🎉 Development environment started!
echo.
echo 📱 Frontend (React): http://localhost:5173
echo 🔧 Backend (Django): http://localhost:8000
echo 📖 API Documentation: http://localhost:8000/api/docs/
echo.
echo Press Ctrl+C to stop all services
pause