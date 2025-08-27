import { useState } from 'react'
import './Dashboard.css'
import Toolkit from './Toolkit'
import JobController from './JobController'
import Profile from './Profile'

function Dashboard({ onLogout, userEmail }) {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
  }

  const renderDashboardNavigation = () => (
    <nav className="dashboard-navbar">
      <div className="dashboard-nav-container">
        <div className="dashboard-nav-logo">
          <h2>Job-Bridge</h2>
        </div>
        
        <div className={`dashboard-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <button 
            className={`dashboard-nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}
            onClick={() => handlePageChange('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`dashboard-nav-link ${currentPage === 'toolkit' ? 'active' : ''}`}
            onClick={() => handlePageChange('toolkit')}
          >
            Toolkit
          </button>
          <button 
            className={`dashboard-nav-link ${currentPage === 'jobcontroller' ? 'active' : ''}`}
            onClick={() => handlePageChange('jobcontroller')}
          >
            Job Controller
          </button>
          <button 
            className={`dashboard-nav-link ${currentPage === 'profile' ? 'active' : ''}`}
            onClick={() => handlePageChange('profile')}
          >
            Profile
          </button>
          <button 
            className="dashboard-logout-btn"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
        
        <div className="dashboard-nav-toggle" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )

  const renderDashboardHome = () => (
    <div className="dashboard-home">
      <div className="dashboard-welcome">
        <h1>Welcome to Your Dashboard</h1>
        <p>Hello {userEmail}! Here's your job search overview.</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-number">12</div>
          <div className="stat-label">Active Applications</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">47</div>
          <div className="stat-label">Matched Jobs</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">3</div>
          <div className="stat-label">Upcoming Interviews</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">23%</div>
          <div className="stat-label">Response Rate</div>
        </div>
      </div>

      <div className="dashboard-quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <div 
            className="action-card"
            onClick={() => setCurrentPage('toolkit')}
          >
            <div className="action-icon">🔧</div>
            <h3>Career Toolkit</h3>
            <p>Access resume builder, interview prep, and career tools</p>
          </div>
          <div 
            className="action-card"
            onClick={() => setCurrentPage('jobcontroller')}
          >
            <div className="action-icon">💼</div>
            <h3>Job Management</h3>
            <p>Track applications, search jobs, and analyze progress</p>
          </div>
          <div 
            className="action-card"
            onClick={() => setCurrentPage('profile')}
          >
            <div className="action-icon">👤</div>
            <h3>Profile Settings</h3>
            <p>Update your profile, skills, and preferences</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-content">
              <div className="activity-text">Application Submitted - Frontend Developer at TechCorp</div>
              <div className="activity-time">2 hours ago</div>
            </div>
            <div className="activity-status status-applied">Applied</div>
          </div>
          <div className="activity-item">
            <div className="activity-content">
              <div className="activity-text">New Job Match - React Developer at StartupXYZ</div>
              <div className="activity-time">5 hours ago</div>
            </div>
            <div className="activity-status status-saved">Matched</div>
          </div>
          <div className="activity-item">
            <div className="activity-content">
              <div className="activity-text">Interview Scheduled - UX Designer at DesignCo</div>
              <div className="activity-time">1 day ago</div>
            </div>
            <div className="activity-status status-interview">Interview</div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'toolkit':
        return <Toolkit />
      case 'jobcontroller':
        return <JobController />
      case 'profile':
        return <Profile userEmail={userEmail} />
      default:
        return renderDashboardHome()
    }
  }

  return (
    <div className="dashboard">
      {renderDashboardNavigation()}
      <main className="dashboard-main">
        {renderCurrentPage()}
      </main>
    </div>
  )
}

export default Dashboard
