import { useState } from 'react'
import './Dashboard.css'
import Toolkit from './Toolkit'
import JobController from './JobController'
import Profile from './Profile'
import JobMatches from './JobMatches'
import JobApplications from './JobApplications'
import { useTranslation } from '../contexts/TranslationContext'

function Dashboard({ onLogout, userEmail }) {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [profileActiveSection, setProfileActiveSection] = useState('personal')
  const [jobControllerActiveTab, setJobControllerActiveTab] = useState('search')
  const [toolkitActiveCategory, setToolkitActiveCategory] = useState('all')
  const { t } = useTranslation()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
  }

  const renderDashboardNavigation = () => (
    <nav className={`dashboard-navbar ${(currentPage === 'profile' || currentPage === 'jobcontroller' || currentPage === 'toolkit') ? 'with-subnav' : ''}`}>
      <div className="dashboard-nav-container">
        <div className="dashboard-nav-logo">
          <h2>Job-Bridge</h2>
        </div>
        
        <div className={`dashboard-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <button 
            className={`dashboard-nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}
            onClick={() => handlePageChange('dashboard')}
          >
            {t('dashboard')}
          </button>
          
          <button 
            className={`dashboard-nav-link ${currentPage === 'toolkit' ? 'active' : ''}`}
            onClick={() => handlePageChange('toolkit')}
          >
            {t('toolkit')}
          </button>
          <button 
            className={`dashboard-nav-link ${currentPage === 'jobcontroller' ? 'active' : ''}`}
            onClick={() => handlePageChange('jobcontroller')}
          >
            {t('jobController')}
          </button>
          <button 
            className={`dashboard-nav-link ${currentPage === 'profile' ? 'active' : ''}`}
            onClick={() => handlePageChange('profile')}
          >
            {t('profile')}
          </button>
        </div>
        
        <div className="dashboard-nav-toggle" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      
      {currentPage === 'profile' && (
        <div className="profile-subnav">
          <div className="profile-subnav-container">
            <button 
              className={`profile-nav-btn ${profileActiveSection === 'personal' ? 'active' : ''}`}
              onClick={() => setProfileActiveSection('personal')}
            >
              Personal Info
            </button>
            <button 
              className={`profile-nav-btn ${profileActiveSection === 'experience' ? 'active' : ''}`}
              onClick={() => setProfileActiveSection('experience')}
            >
              Experience
            </button>
            <button 
              className={`profile-nav-btn ${profileActiveSection === 'education' ? 'active' : ''}`}
              onClick={() => setProfileActiveSection('education')}
            >
              Education
            </button>
            <button 
              className={`profile-nav-btn ${profileActiveSection === 'skills' ? 'active' : ''}`}
              onClick={() => setProfileActiveSection('skills')}
            >
              Skills
            </button>
            <button 
              className={`profile-nav-btn ${profileActiveSection === 'preferences' ? 'active' : ''}`}
              onClick={() => setProfileActiveSection('preferences')}
            >
              Preferences
            </button>
          </div>
        </div>
      )}
      
      {currentPage === 'jobcontroller' && (
        <div className="profile-subnav">
          <div className="profile-subnav-container">
            <button 
              className={`profile-nav-btn ${jobControllerActiveTab === 'search' ? 'active' : ''}`}
              onClick={() => setJobControllerActiveTab('search')}
            >
              🔍 Job Search
            </button>
            <button 
              className={`profile-nav-btn ${jobControllerActiveTab === 'saved' ? 'active' : ''}`}
              onClick={() => setJobControllerActiveTab('saved')}
            >
              💾 Saved Jobs
            </button>
            <button 
              className={`profile-nav-btn ${jobControllerActiveTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setJobControllerActiveTab('analytics')}
            >
              📊 Analytics
            </button>
          </div>
        </div>
      )}
      
      {currentPage === 'toolkit' && (
        <div className="profile-subnav">
          <div className="profile-subnav-container">
            <button 
              className={`profile-nav-btn ${toolkitActiveCategory === 'all' ? 'active' : ''}`}
              onClick={() => setToolkitActiveCategory('all')}
            >
              🔧 All Tools
            </button>
            <button 
              className={`profile-nav-btn ${toolkitActiveCategory === 'documents' ? 'active' : ''}`}
              onClick={() => setToolkitActiveCategory('documents')}
            >
              📄 Documents
            </button>
            <button 
              className={`profile-nav-btn ${toolkitActiveCategory === 'preparation' ? 'active' : ''}`}
              onClick={() => setToolkitActiveCategory('preparation')}
            >
              🎤 Preparation
            </button>
            <button 
              className={`profile-nav-btn ${toolkitActiveCategory === 'skills' ? 'active' : ''}`}
              onClick={() => setToolkitActiveCategory('skills')}
            >
              🎯 Skills
            </button>
            <button 
              className={`profile-nav-btn ${toolkitActiveCategory === 'research' ? 'active' : ''}`}
              onClick={() => setToolkitActiveCategory('research')}
            >
              💰 Research
            </button>
          </div>
        </div>
      )}
    </nav>
  )

  const renderDashboardHome = () => {
    // Extract username from email - get the part before @ and capitalize first letter
    const getUsername = () => {
      if (!userEmail) return 'Professional'
      const username = userEmail.split('@')[0]
      return username.charAt(0).toUpperCase() + username.slice(1)
    }
    
    return (
      <div className="dashboard-home">
        {/* Personal Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <h1>Hello, {getUsername()}! 👋</h1>
            <p>Ready to accelerate your career? Here's your personalized job search dashboard.</p>
          </div>
          <div className="welcome-actions">
            <button className="action-button">Create Resume</button>
            <button className="action-button">Find Jobs</button>
          </div>
        </div>

        {/* Activity Overview */}
        <div className="activity-overview">
          <h2>{t('yourActivity')}</h2>
          <div className="activity-grid">
            <div className="activity-card">
              <div className="activity-header">
                <div className="activity-icon job-searched">🔍</div>
                <div className="activity-title">{t('jobsSearched')}</div>
              </div>
              <div className="activity-number">127</div>
              <div className="activity-trend positive">+12 {t('thisWeek')}</div>
            </div>
            
            <div 
              className="activity-card clickable"
              onClick={() => setCurrentPage('applications')}
            >
              <div className="activity-header">
                <div className="activity-icon job-applied">📝</div>
                <div className="activity-title">{t('applicationsSent')}</div>
                <div className="activity-arrow">→</div>
              </div>
              <div className="activity-number">18</div>
              <div className="activity-trend positive">+3 {t('thisWeek')}</div>
            </div>
            
            <div 
              className="activity-card clickable"
              onClick={() => setCurrentPage('jobmatches')}
            >
              <div className="activity-header">
                <div className="activity-icon job-matched">✨</div>
                <div className="activity-title">{t('jobMatches')}</div>
                <div className="activity-arrow">→</div>
              </div>
              <div className="activity-number">34</div>
              <div className="activity-trend positive">+7 {t('newMatches')}</div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="activities-card">
          <div className="activities-header">
            <div className="activities-title">
              <div className="activities-icon">�</div>
              <h2>Recent Activities</h2>
            </div>
          </div>
          <div className="activities-list">
            <div className="activity-item">
              <div className="activity-badge applied">Applied</div>
              <div className="activity-details">
                <div className="activity-main">Applied to Senior Frontend Developer at TechFlow</div>
                <div className="activity-meta">2 hours ago • Remote Position</div>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-badge searched">Searched</div>
              <div className="activity-details">
                <div className="activity-main">Searched "React Developer" jobs</div>
                <div className="activity-meta">4 hours ago • 47 results found</div>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-badge applied">Applied</div>
              <div className="activity-details">
                <div className="activity-main">Applied to Full Stack Developer at StartupCorp</div>
                <div className="activity-meta">Yesterday • Full-time Position</div>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-badge searched">Searched</div>
              <div className="activity-details">
                <div className="activity-main">Searched "Frontend Developer" in San Francisco</div>
                <div className="activity-meta">2 days ago • 23 results found</div>
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
        return <Toolkit 
          activeCategory={toolkitActiveCategory}
          setActiveCategory={setToolkitActiveCategory}
        />
      case 'jobcontroller':
        return <JobController 
          activeTab={jobControllerActiveTab}
          setActiveTab={setJobControllerActiveTab}
        />
      case 'jobmatches':
        return <JobMatches />
      case 'applications':
        return <JobApplications />
      case 'profile':
        return <Profile 
          userEmail={userEmail} 
          activeSection={profileActiveSection}
          setActiveSection={setProfileActiveSection}
        />
      default:
        return renderDashboardHome()
    }
  }

  return (
    <div className="dashboard">
      {renderDashboardNavigation()}
      <main className={`dashboard-main ${(currentPage === 'profile' || currentPage === 'jobcontroller' || currentPage === 'toolkit') ? 'with-subnav' : ''}`}>
        {renderCurrentPage()}
      </main>
    </div>
  )
}

export default Dashboard
