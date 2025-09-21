# NYXO - Job Aggregator Platform

## 🚀 Quick Start

### Production Deployment (Render)
Your app is deployed at: **https://nyxo-1.onrender.com**
- Frontend (React): `/`
- API: `/api/v1/`
- Documentation: `/api/docs/`
- Admin: `/admin/`

### Local Development

#### Option 1: Quick Start (Windows)
```bash
# Double-click this file or run:
start-local-dev.bat
```

#### Option 2: Manual Setup

**Backend (Django):**
```bash
cd backend/job_aggregator
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

**Frontend (React + Vite):**
```bash
npm install
npm run dev
```

**Development URLs:**
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/api/docs/

#### Option 3: Docker (Production-like)
```bash
docker build -t nyxo-app .
docker run -p 8000:8000 nyxo-app
# Visit: http://localhost:8000
```

## 🏗️ Project Structure

```
NYXO/
├── src/                    # React frontend source
├── backend/                # Django backend
├── Dockerfile             # Production container
├── docker-compose.yml     # Local Docker setup
├── render.yaml            # Render deployment config
└── start-local-dev.bat    # Windows dev script
```

## 🔧 Environment Variables

Create `.env` files for local development:

**Backend (.env):**
```
DEBUG=True
SECRET_KEY=your-secret-key
JOOBLE_API_KEY=your-jooble-api-key
DATABASE_URL=sqlite:///db.sqlite3
```

**Frontend (.env):**
```
VITE_API_BASE_URL=http://localhost:8000
```

## 📚 API Documentation

Visit `/api/docs/` for interactive Swagger documentation:
- **Local**: http://localhost:8000/api/docs/
- **Production**: https://nyxo-1.onrender.com/api/docs/

## 🔑 Features

- **Authentication**: JWT-based user registration/login
- **Job Search**: Integration with Jooble API
- **Resume Builder**: Multiple templates (Academic, Creative, Executive, etc.)
- **Job Applications**: Track and manage applications
- **Analytics**: Dashboard with job search insights
- **Responsive Design**: Mobile-first approach

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, CSS3
- **Backend**: Django 5.2, Django REST Framework
- **Database**: SQLite (dev), PostgreSQL (prod)
- **Deployment**: Docker, Render.com
- **APIs**: Jooble Job Search API

## 📱 Development Tips

1. **Hot Reload**: Frontend changes update instantly in dev mode
2. **API Testing**: Use Swagger UI at `/api/docs/`
3. **Database**: Django admin at `/admin/`
4. **Logs**: Check browser console and terminal output
5. **CORS**: Configured for local development

## 🚀 Deployment

The app auto-deploys to Render when you push to the main branch:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

## 🔍 Troubleshooting

**Frontend not loading?**
- Check if React build files exist in `dist/`
- Verify Django is serving static files correctly

**API errors?**
- Check backend logs
- Verify environment variables
- Test endpoints in Swagger UI

**Database issues?**
- Run migrations: `python manage.py migrate`
- Check database connectivity

## 📧 Support

For issues or questions, check the logs in:
- Render dashboard (production)
- Terminal output (local development)