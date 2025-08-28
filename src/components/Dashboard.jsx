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

  const renderDashboardHome = () => {
    // Extract username from email
    const username = userEmail ? userEmail.split('@')[0] : 'User'
    
    return (
      <div className="dashboard-home">
        {/* Personal Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <h1>Hello, {username}! 👋</h1>
            <p>Welcome back to your career journey. Here's what's happening with your job search.</p>
          </div>
          <div className="welcome-date">
            <span>Today, {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>

        {/* Activity Overview */}
        <div className="activity-overview">
          <h2>Your Activity</h2>
          <div className="activity-grid">
            <div className="activity-card">
              <div className="activity-header">
                <div className="activity-icon job-searched">🔍</div>
                <div className="activity-title">Jobs Searched</div>
              </div>
              <div className="activity-number">127</div>
              <div className="activity-trend positive">+12 this week</div>
            </div>
            
            <div className="activity-card">
              <div className="activity-header">
                <div className="activity-icon job-applied">📝</div>
                <div className="activity-title">Applications Sent</div>
              </div>
              <div className="activity-number">18</div>
              <div className="activity-trend positive">+3 this week</div>
            </div>
            
            <div className="activity-card">
              <div className="activity-header">
                <div className="activity-icon job-matched">✨</div>
                <div className="activity-title">Job Matches</div>
              </div>
              <div className="activity-number">34</div>
              <div className="activity-trend positive">+7 new matches</div>
            </div>
            
            <div className="activity-card">
              <div className="activity-header">
                <div className="activity-icon interviews">🎯</div>
                <div className="activity-title">Interviews</div>
              </div>
              <div className="activity-number">5</div>
              <div className="activity-trend neutral">2 upcoming</div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="recent-activities">
          <div className="section-header">
            <h2>Recent Activities</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="activities-list">
            <div className="activity-item">
              <div className="activity-badge applied">Applied</div>
              <div className="activity-details">
                <div className="activity-main">Applied to Senior Frontend Developer at TechFlow</div>
                <div className="activity-meta">2 hours ago • Remote Position</div>
              </div>
              <div className="activity-action">
                <button className="track-btn">Track</button>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-badge matched">Matched</div>
              <div className="activity-details">
                <div className="activity-main">New match: React Developer at Innovation Labs</div>
                <div className="activity-meta">5 hours ago • 95% Match Score</div>
              </div>
              <div className="activity-action">
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-badge interview">Interview</div>
              <div className="activity-details">
                <div className="activity-main">Interview scheduled with DesignCorp</div>
                <div className="activity-meta">Tomorrow 2:00 PM • Video Call</div>
              </div>
              <div className="activity-action">
                <button className="prepare-btn">Prepare</button>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-badge searched">Searched</div>
              <div className="activity-details">
                <div className="activity-main">Searched "Frontend Developer" in San Francisco</div>
                <div className="activity-meta">1 day ago • 23 results found</div>
              </div>
              <div className="activity-action">
                <button className="view-btn">View Results</button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <div 
              className="action-card primary"
              onClick={() => setCurrentPage('profile')}
            >
              <div className="action-icon">👤</div>
              <div className="action-content">
                <h3>Update Profile</h3>
                <p>Keep your profile fresh and attract better opportunities</p>
              </div>
              <div className="action-arrow">→</div>
            </div>
            
            <div 
              className="action-card secondary"
              onClick={() => setCurrentPage('toolkit')}
            >
              <div className="action-icon">🛠️</div>
              <div className="action-content">
                <h3>Career Tools</h3>
                <p>Resume builder, interview prep, and skill assessments</p>
              </div>
              <div className="action-arrow">→</div>
            </div>
            
            <div 
              className="action-card secondary"
              onClick={() => setCurrentPage('jobcontroller')}
            >
              <div className="action-icon">💼</div>
              <div className="action-content">
                <h3>Job Search</h3>
                <p>Find new opportunities and track your applications</p>
              </div>
              <div className="action-arrow">→</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
