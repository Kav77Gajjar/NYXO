@echo off
echo Starting NYXO Local Development...
echo.

echo [1/3] Setting up Python virtual environment...
cd backend\job_aggregator
if not exist venv (
    python -m venv venv
)
call venv\Scripts\activate.bat
pip install -r requirements.txt

echo.
echo [2/3] Running Django migrations...
python manage.py migrate

echo.
echo [3/3] Starting Django backend server...
echo Backend will be available at: http://localhost:8000
echo API Documentation: http://localhost:8000/api/docs/
echo.
start cmd /k "python manage.py runserver 8000"

echo.
echo Starting React frontend (Vite)...
cd ..\..
echo Frontend will be available at: http://localhost:5173
echo.
start cmd /k "npm run dev"

echo.
echo ✅ NYXO Development servers started!
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:8000
echo Swagger:  http://localhost:8000/api/docs/
pause