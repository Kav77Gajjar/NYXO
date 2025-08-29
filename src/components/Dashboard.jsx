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
    <>
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
            
            {/* Mobile Toolkit Sub-navigation */}
            {currentPage === 'toolkit' && (
              <div className="mobile-subnav">
                <div className="mobile-subnav-header">Toolkit Categories</div>
                <button 
                  className={`mobile-subnav-btn ${toolkitActiveCategory === 'all' ? 'active' : ''}`}
                  onClick={() => {
                    setToolkitActiveCategory('all')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  🔧 All Tools
                </button>
                <button 
                  className={`mobile-subnav-btn ${toolkitActiveCategory === 'documents' ? 'active' : ''}`}
                  onClick={() => {
                    setToolkitActiveCategory('documents')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  📄 Documents
                </button>
                <button 
                  className={`mobile-subnav-btn ${toolkitActiveCategory === 'preparation' ? 'active' : ''}`}
                  onClick={() => {
                    setToolkitActiveCategory('preparation')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  🎤 Preparation
                </button>
                <button 
                  className={`mobile-subnav-btn ${toolkitActiveCategory === 'skills' ? 'active' : ''}`}
                  onClick={() => {
                    setToolkitActiveCategory('skills')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  🎯 Skills
                </button>
                <button 
                  className={`mobile-subnav-btn ${toolkitActiveCategory === 'research' ? 'active' : ''}`}
                  onClick={() => {
                    setToolkitActiveCategory('research')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  💰 Research
                </button>
              </div>
            )}
            
            <button 
              className={`dashboard-nav-link ${currentPage === 'jobcontroller' ? 'active' : ''}`}
              onClick={() => handlePageChange('jobcontroller')}
            >
              {t('jobController')}
            </button>
            
            {/* Mobile Job Controller Sub-navigation */}
            {currentPage === 'jobcontroller' && (
              <div className="mobile-subnav">
                <div className="mobile-subnav-header">Job Controller</div>
                <button 
                  className={`mobile-subnav-btn ${jobControllerActiveTab === 'search' ? 'active' : ''}`}
                  onClick={() => {
                    setJobControllerActiveTab('search')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  🔍 Job Search
                </button>
                <button 
                  className={`mobile-subnav-btn ${jobControllerActiveTab === 'saved' ? 'active' : ''}`}
                  onClick={() => {
                    setJobControllerActiveTab('saved')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  💾 Saved Jobs
                </button>
                <button 
                  className={`mobile-subnav-btn ${jobControllerActiveTab === 'analytics' ? 'active' : ''}`}
                  onClick={() => {
                    setJobControllerActiveTab('analytics')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  📊 Analytics
                </button>
              </div>
            )}
            
            <button 
              className={`dashboard-nav-link ${currentPage === 'profile' ? 'active' : ''}`}
              onClick={() => handlePageChange('profile')}
            >
              {t('profile')}
            </button>
            
            {/* Mobile Profile Sub-navigation */}
            {currentPage === 'profile' && (
              <div className="mobile-subnav">
                <div className="mobile-subnav-header">Profile Sections</div>
                <button 
                  className={`mobile-subnav-btn ${profileActiveSection === 'personal' ? 'active' : ''}`}
                  onClick={() => {
                    setProfileActiveSection('personal')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  👤 Personal Info
                </button>
                <button 
                  className={`mobile-subnav-btn ${profileActiveSection === 'experience' ? 'active' : ''}`}
                  onClick={() => {
                    setProfileActiveSection('experience')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  💼 Experience
                </button>
                <button 
                  className={`mobile-subnav-btn ${profileActiveSection === 'education' ? 'active' : ''}`}
                  onClick={() => {
                    setProfileActiveSection('education')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  🎓 Education
                </button>
                <button 
                  className={`mobile-subnav-btn ${profileActiveSection === 'skills' ? 'active' : ''}`}
                  onClick={() => {
                    setProfileActiveSection('skills')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  🎯 Skills
                </button>
                <button 
                  className={`mobile-subnav-btn ${profileActiveSection === 'preferences' ? 'active' : ''}`}
                  onClick={() => {
                    setProfileActiveSection('preferences')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  ⚙️ Preferences
                </button>
              </div>
            )}
          </div>
          
          <div className={`dashboard-nav-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        
        {/* Left Vertical Sidebar Sub-navigation - Inside content area */}
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
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
            <h1>{t('hello')}, {getUsername()}! 👋</h1>
            <p>{t('ready')}</p>
          </div>
          <div className="welcome-date">
            <span>{t('today')}, {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
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

        {/* Recent Activities & Notifications */}
        <div className="notifications-card">
          <div className="notification-header">
            <div className="notification-title">
              <div className="notification-icon">🔔</div>
              <h2>Recent Activities & Notifications</h2>
              <div className="notification-count">4</div>
            </div>
            <button className="mark-all-read-btn">Mark All Read</button>
          </div>
          <div className="notifications-list">
            <div className="notification-item unread">
              <div className="notification-indicator"></div>
              <div className="notification-badge applied">Applied</div>
              <div className="notification-details">
                <div className="notification-main">Applied to Senior Frontend Developer at TechFlow</div>
                <div className="notification-meta">2 hours ago • Remote Position</div>
              </div>
              <div className="notification-action">
                <button className="track-btn">Track</button>
              </div>
            </div>
            
            <div className="notification-item unread">
              <div className="notification-indicator"></div>
              <div className="notification-badge matched">Matched</div>
              <div className="notification-details">
                <div className="notification-main">New match: React Developer at Innovation Labs</div>
                <div className="notification-meta">5 hours ago • 95% Match Score</div>
              </div>
              <div className="notification-action">
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
            
            <div className="notification-item">
              <div className="notification-indicator"></div>
              <div className="notification-badge interview">Interview</div>
              <div className="notification-details">
                <div className="notification-main">Interview scheduled with DesignCorp</div>
                <div className="notification-meta">Tomorrow 2:00 PM • Video Call</div>
              </div>
              <div className="notification-action">
                <button className="prepare-btn">Prepare</button>
              </div>
            </div>
            
            <div className="notification-item">
              <div className="notification-indicator"></div>
              <div className="notification-badge searched">Searched</div>
              <div className="notification-details">
                <div className="notification-main">Searched "Frontend Developer" in San Francisco</div>
                <div className="notification-meta">1 day ago • 23 results found</div>
              </div>
              <div className="notification-action">
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
