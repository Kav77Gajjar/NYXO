import { useState, useEffect } from 'react'
import './Dashboard.css'
import Toolkit from './Toolkit'
import JobController from './JobController'
import Profile from './Profile'
import JobMatches from './JobMatches'
import JobApplications from './JobApplications'
import ResumeTemplates from './ResumeTemplates'
import ProfessionalResumeTemplate from './ProfessionalResumeTemplate'
import CoverLetterGenerator from './CoverLetterGenerator'
import CoverLetterTemplates from './CoverLetterTemplates'
import { useTranslation } from '../contexts/TranslationContext'

function Dashboard({ onLogout, userEmail, onNavigate }) {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [profileActiveSection, setProfileActiveSection] = useState('personal')
  const [jobControllerActiveTab, setJobControllerActiveTab] = useState('search')
  const [toolkitActiveCategory, setToolkitActiveCategory] = useState('all')
  const { t } = useTranslation()
  
  // Listen for custom navigation events from child components
  useEffect(() => {
    const handleCustomNavigation = (event) => {
      if (event.detail && event.detail.page) {
        setCurrentPage(event.detail.page);
      }
    };
    
    window.addEventListener('navigate', handleCustomNavigation);
    
    return () => {
      window.removeEventListener('navigate', handleCustomNavigation);
    };
  }, []);

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
          {/* brand logo removed */}
          
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
        {/* Job Search Bar */}
        <div className="search-bar-section">
          <h2 className="search-section-label">Find Your Perfect Job</h2>
          <p className="search-section-description">Search thousands of job opportunities from top companies</p>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search for jobs, companies, or keywords..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  // Navigate to job controller with search
                  setCurrentPage('jobcontroller')
                  setJobControllerActiveTab('search')
                }
              }}
            />
            <button 
              className="search-button"
              onClick={() => {
                // Navigate to job controller with search
                setCurrentPage('jobcontroller')
                setJobControllerActiveTab('search')
              }}
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ marginRight: '6px' }}
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              Search
            </button>
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

        {/*
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
        */}

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="main-actions-border-container">
            <div className="actions-grid no-hover">
              <div 
                className="action-card primary"
                onClick={() => setCurrentPage('profile')}
              >
                <div className="action-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                  </svg>
                </div>
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
                <div className="action-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l7 4-7 4-7-4 7-4z" fill="#b3c6e0"/>
                    <path d="M12 10v4" stroke="#64748b"/>
                    <circle cx="17" cy="17" r="3" stroke="#64748b" fill="#fff"/>
                    <path d="M17 15.5v1M17 20v-1.5M18.5 17h-1M15.5 17h1" stroke="#64748b"/>
                  </svg>
                </div>
                <div className="action-content">
                  <h3>Career Tools</h3>
                  <p>Resume builder
                    {/* ,interview prep, and  */}
                    {/* skill assessments */}
                    </p>
                </div>
                <div className="action-arrow">→</div>
              </div>
              <div 
                className="action-card secondary"
                onClick={() => setCurrentPage('jobcontroller')}
              >
                <div className="action-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </div>
                <div className="action-content">
                  <h3>Find Work</h3>
                  <p>Find new opportunities
                     {/* and track your applications */}
                     </p>
                </div>
                <div className="action-arrow">→</div>
              </div>
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
          onNavigateBack={() => setCurrentPage('dashboard')}
        />
      case 'jobcontroller':
        return <JobController 
          activeTab={jobControllerActiveTab}
          setActiveTab={setJobControllerActiveTab}
          onNavigateBack={() => setCurrentPage('dashboard')}
        />
      case 'jobmatches':
        return <JobMatches onNavigateBack={() => setCurrentPage('dashboard')} />
      case 'applications':
        return <JobApplications onNavigateBack={() => setCurrentPage('dashboard')} />
      case 'profile':
        return <Profile 
          userEmail={userEmail} 
          activeSection={profileActiveSection}
          setActiveSection={setProfileActiveSection}
          onNavigateBack={() => setCurrentPage('dashboard')}
        />
      case 'resume-templates':
        return <ResumeTemplates />
      case 'professional-resume-template':
        return <ProfessionalResumeTemplate />
      case 'cover-letter':
        return <CoverLetterGenerator onNavigateBack={() => setCurrentPage('toolkit')} />
      case 'cover-letter-templates':
        return <CoverLetterTemplates onNavigateBack={() => setCurrentPage('toolkit')} />
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
