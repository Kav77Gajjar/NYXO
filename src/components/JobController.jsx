import { useState, useEffect } from 'react'
import './JobController.css'
import './dropdown-fix.css' // Import the dropdown fix styles
import './emergency-fix.css' // Import emergency fixes
import './responsive-fix.css' // Import responsive fixes
import './mobile-first-fix.css' // Import mobile-first responsive design
import './desktop-dropdown-fix.css' // Import desktop-specific dropdown fixes
import './input-overlap-fix.css' // Fix input overlap with buttons
import './button-alignment-fix.css' // Fix button alignment and sizing
import './desktop-critical-fix.css' // Critical desktop fix - MUST BE LAST

function JobController({ activeTab = 'search', setActiveTab, onNavigateBack }) {
  const [localActiveTab, setLocalActiveTab] = useState('search')
  const currentActiveTab = activeTab || localActiveTab
  const currentSetActiveTab = setActiveTab || setLocalActiveTab

  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside any dropdown
      if (!event.target.closest('.custom-dropdown')) {
        document.querySelectorAll('[id^="dropdown-"]').forEach(dropdown => {
          dropdown.style.display = 'none';
          // Remove aria-expanded from triggers
          const trigger = dropdown.previousElementSibling;
          if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
          }
        });
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        document.querySelectorAll('[id^="dropdown-"]').forEach(dropdown => {
          dropdown.style.display = 'none';
          const trigger = dropdown.previousElementSibling;
          if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
            trigger.focus(); // Return focus to trigger
          }
        });
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const toggleDropdown = (dropdownId) => {
    // Close all other dropdowns first
    document.querySelectorAll('[id^="dropdown-"]').forEach(dropdown => {
      if (dropdown.id !== `dropdown-${dropdownId}`) {
        dropdown.style.display = 'none';
        // Remove aria-expanded from other dropdown triggers
        const otherTrigger = dropdown.previousElementSibling;
        if (otherTrigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
        }
      }
    });

    const dropdown = document.getElementById(`dropdown-${dropdownId}`);
    const trigger = dropdown ? dropdown.previousElementSibling : null;
    
    if (dropdown && trigger) {
      const isCurrentlyOpen = dropdown.style.display === 'block';
      
      if (isCurrentlyOpen) {
        // Close the dropdown
        dropdown.style.display = 'none';
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        // Open the dropdown with enhanced visibility
        dropdown.style.display = 'block';
        dropdown.style.opacity = '1';
        dropdown.style.visibility = 'visible';
        dropdown.style.zIndex = '9999';
        dropdown.style.position = 'absolute';
        dropdown.style.top = '100%';
        dropdown.style.left = '0';
        dropdown.style.right = '0';
        
        // Set aria-expanded
        trigger.setAttribute('aria-expanded', 'true');
        
        // Ensure all parent containers allow overflow
        const containers = [
          dropdown.closest('.filter-options-container'),
          dropdown.closest('.search-controls'),
          dropdown.closest('.job-search-section'),
          dropdown.closest('.tab-content'),
          dropdown.closest('.job-controller')
        ];
        
        containers.forEach(container => {
          if (container) {
            container.style.overflow = 'visible';
            container.style.zIndex = 'auto';
          }
        });
        
        // Make sure all dropdown items are visible
        const items = dropdown.querySelectorAll('.dropdown-item');
        items.forEach(item => {
          item.style.display = 'block';
          item.style.visibility = 'visible';
        });
        
        // Focus management for accessibility
        setTimeout(() => {
          const firstItem = dropdown.querySelector('.dropdown-item');
          if (firstItem) {
            firstItem.focus();
          }
        }, 100);
      }
    }
  };

  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      company: 'DevCompany',
      position: 'Senior Frontend Developer',
      location: 'New York, NY',
      type: 'Full-time',
      postedDate: '2025-08-25',
      match: '95%',
      description: 'Looking for an experienced React developer to join our growing team. Work with modern technologies and build scalable web applications.',
      source: 'LinkedIn',
      isLiked: true
    },
    {
      id: 2,
      company: 'WebSolutions',
      position: 'React Native Developer',
      location: 'Los Angeles, CA',
      type: 'Contract',
      postedDate: '2025-08-24',
      match: '88%',
      description: 'Build cross-platform mobile applications using React Native. Experience with iOS and Android development preferred.',
      source: 'Indeed',
      isLiked: true
    },
    {
      id: 3,
      company: 'TechStartup',
      position: 'JavaScript Developer',
      location: 'Remote',
      type: 'Full-time',
      postedDate: '2025-08-23',
      match: '92%',
      description: 'Join our innovative startup building cutting-edge web applications. Strong JavaScript and Node.js skills required.',
      source: 'Glassdoor',
      isLiked: true
    }
  ])

  const handleToggleLike = (jobId) => {
    setSavedJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === jobId ? { ...job, isLiked: !job.isLiked } : job
      ).filter(job => job.isLiked)
    )
  }

  const renderSavedJobs = () => (
    <div className="saved-jobs-section">
      <div className="section-header" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <h2>💾 Saved Jobs</h2>
        <button className="add-job-btn">+ Add New Job</button>
      </div>

      <div className="saved-jobs-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {savedJobs.filter(job => job.isLiked).map(job => (
          <div key={job.id} className="saved-job-card" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '1.5rem',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}>
            <div className="job-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <div className="job-title-section" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flex: 1
              }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{job.position}</h3>
                <button 
                  className={`heart-btn ${job.isLiked ? 'liked' : ''}`}
                  onClick={() => handleToggleLike(job.id)}
                  aria-label={job.isLiked ? 'Remove from saved' : 'Save job'}
                >
                  <span className="heart-icon">
                    {job.isLiked ? '❤️' : '🤍'}
                  </span>
                </button>
              </div>
              <span className="match-score">{job.match} Match</span>
            </div>
            <div className="job-details" style={{ flex: 1, marginBottom: '1.5rem' }}>
              <p className="company">{job.company}</p>
              <p className="location">📍 {job.location}</p>
              <p className="posted-date">📅 Posted: {job.postedDate}</p>
              <p className="job-description" style={{
                fontSize: '0.95rem',
                lineHeight: '1.5',
                color: '#334155',
                marginTop: '1rem',
                padding: '1rem',
                background: '#f1f5f9',
                borderRadius: '8px',
                borderLeft: '4px solid #667eea'
              }}>{job.description}</p>
            </div>
            <div className="job-actions" style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '1rem'
            }}>
              <button className="action-btn apply-btn">Apply Now</button>
              <button className="action-btn view-btn">View Job</button>
            </div>
            <div className="job-source">
              <span className="source-text">via {job.source}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderJobSearch = () => (
    <div className="job-search-section">
      <div className="section-header">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ verticalAlign: 'middle' }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          Search Work
        </h2>
      </div>

      <div className="search-controls">
        <div className="search-form">
          <div className="search-inputs-container">
            <input 
              type="text" 
              placeholder="Job title, keywords, or company"
              className="search-input"
            />
            <input 
              type="text" 
              placeholder="Location"
              className="location-input"
            />
          </div>
          <div className="search-btns-group">
            <button className="search-btn compound-main">
              <div className="btn-icon-container">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
            </button>
            <button className="liked-btn compound-side" onClick={() => currentSetActiveTab('saved')}>
              <div className="btn-icon-container">
                <span className="heart-icon">❤</span>
              </div>
            </button>
          </div>
        </div>

        {/* Clean Dropdown System */}
        <div className="filter-options-container">
          {/* Job Type Dropdown */}
          <div className="custom-dropdown">
            <div 
              className="dropdown-selected" 
              onClick={() => toggleDropdown('job-type')}
              onKeyDown={(e) => e.key === 'Enter' && toggleDropdown('job-type')}
              tabIndex="0"
              role="button"
              aria-expanded="false"
              aria-haspopup="listbox"
              aria-label="Select job type"
            >
              Job Type
              <div className="dropdown-arrow"></div>
            </div>
            <div 
              id="dropdown-job-type"
              className="dropdown-menu"
              role="listbox"
              aria-label="Job type options"
            >
              <div 
                className="dropdown-item" 
                role="option"
                tabIndex="0"
                onClick={() => {
                  document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = 'Full-time';
                  document.querySelector('#dropdown-job-type').style.display = 'none';
                  document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = 'Full-time';
                    document.querySelector('#dropdown-job-type').style.display = 'none';
                    document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                  }
                }}
              >
                Full-time
              </div>
              <div 
                className="dropdown-item" 
                role="option"
                tabIndex="0"
                onClick={() => {
                  document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = 'Part-time';
                  document.querySelector('#dropdown-job-type').style.display = 'none';
                  document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = 'Part-time';
                    document.querySelector('#dropdown-job-type').style.display = 'none';
                    document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                  }
                }}
              >
                Part-time
              </div>
              <div 
                className="dropdown-item" 
                role="option"
                tabIndex="0"
                onClick={() => {
                  document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = 'Contract';
                  document.querySelector('#dropdown-job-type').style.display = 'none';
                  document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = 'Contract';
                    document.querySelector('#dropdown-job-type').style.display = 'none';
                    document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                  }
                }}
              >
                Contract
              </div>
              <div 
                className="dropdown-item" 
                role="option"
                tabIndex="0"
                onClick={() => {
                  document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = 'Remote';
                  document.querySelector('#dropdown-job-type').style.display = 'none';
                  document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = 'Remote';
                    document.querySelector('#dropdown-job-type').style.display = 'none';
                    document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                  }
                }}
              >
                Remote
              </div>
            </div>
          </div>

          {/* Experience Level Dropdown */}
          <div className="custom-dropdown">
            <div 
              className="dropdown-selected" 
              onClick={() => toggleDropdown('experience')}
              onKeyDown={(e) => e.key === 'Enter' && toggleDropdown('experience')}
              tabIndex="0"
              role="button"
              aria-expanded="false"
              aria-haspopup="listbox"
              aria-label="Select experience level"
            >
              Experience Level
              <div className="dropdown-arrow"></div>
            </div>
            <div 
              id="dropdown-experience"
              className="dropdown-menu"
            >
              <div className="dropdown-item" onClick={() => {
                document.querySelector('#dropdown-experience').previousElementSibling.firstChild.textContent = 'Entry Level';
                document.querySelector('#dropdown-experience').style.display = 'none';
              }}>
                Entry Level
              </div>
              <div className="dropdown-item" onClick={() => {
                document.querySelector('#dropdown-experience').previousElementSibling.firstChild.textContent = 'Mid Level';
                document.querySelector('#dropdown-experience').style.display = 'none';
              }}>
                Mid Level
              </div>
              <div className="dropdown-item" onClick={() => {
                document.querySelector('#dropdown-experience').previousElementSibling.firstChild.textContent = 'Senior Level';
                document.querySelector('#dropdown-experience').style.display = 'none';
              }}>
                Senior Level
              </div>
              <div className="dropdown-item" onClick={() => {
                document.querySelector('#dropdown-experience').previousElementSibling.firstChild.textContent = 'Executive';
                document.querySelector('#dropdown-experience').style.display = 'none';
              }}>
                Executive
              </div>
            </div>
          </div>

          {/* Salary Range Dropdown */}
          <div className="custom-dropdown">
            <div 
              className="dropdown-selected" 
              onClick={() => toggleDropdown('salary')}
              onKeyDown={(e) => e.key === 'Enter' && toggleDropdown('salary')}
              tabIndex="0"
              role="button"
              aria-expanded="false"
              aria-haspopup="listbox"
              aria-label="Select salary range"
            >
              Salary Range
              <div className="dropdown-arrow"></div>
            </div>
            <div 
              id="dropdown-salary"
              className="dropdown-menu"
            >
              <div className="dropdown-item" onClick={() => {
                document.querySelector('#dropdown-salary').previousElementSibling.firstChild.textContent = '$40,000 - $60,000';
                document.querySelector('#dropdown-salary').style.display = 'none';
              }}>
                $40,000 - $60,000
              </div>
              <div className="dropdown-item" onClick={() => {
                document.querySelector('#dropdown-salary').previousElementSibling.firstChild.textContent = '$60,000 - $80,000';
                document.querySelector('#dropdown-salary').style.display = 'none';
              }}>
                $60,000 - $80,000
              </div>
              <div className="dropdown-item" onClick={() => {
                document.querySelector('#dropdown-salary').previousElementSibling.firstChild.textContent = '$80,000 - $100,000';
                document.querySelector('#dropdown-salary').style.display = 'none';
              }}>
                $80,000 - $100,000
              </div>
              <div className="dropdown-item" onClick={() => {
                document.querySelector('#dropdown-salary').previousElementSibling.firstChild.textContent = '$100,000+';
                document.querySelector('#dropdown-salary').style.display = 'none';
              }}>
                $100,000+
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="search-results">
        <p>Use the search form above to find new job opportunities that match your profile.</p>
      </div>
    </div>
  )

  const renderAnalytics = () => (
    <div className="analytics-section">
      <div className="section-header" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <h2>📊 Job Search Analytics</h2>
      </div>

      <div className="analytics-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '1.5rem'
      }}>
        <div className="metric-card" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'center',
          transition: 'all 0.3s ease'
        }}>
          <h3>Jobs Searched</h3>
          <div className="metric-value">128</div>
          <p>Total job search queries made</p>
        </div>
        <div className="metric-card" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'center',
          transition: 'all 0.3s ease'
        }}>
          <h3>Jobs Applied</h3>
          <div className="metric-value">46</div>
          <p>Applications submitted from your account</p>
        </div>
        <div className="metric-card" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'center',
          transition: 'all 0.3s ease'
        }}>
          <h3>Most Applied Platform</h3>
          <div className="metric-value">LinkedIn</div>
          <p>Platform with the highest number of applications</p>
        </div>
        <div className="metric-card" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'center',
          transition: 'all 0.3s ease'
        }}>
          <h3>Active Time</h3>
          <div className="metric-value">3h 12m</div>
          <p>Time spent actively searching / applying</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="job-controller" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div className="jobcontroller-content">
        {currentActiveTab !== 'search' && (
          <div className="top-bar">
            <button
              className="back-btn"
              onClick={() => currentSetActiveTab('search')}
              aria-label="Go back"
              title="Go back"
            >
              ← Back
            </button>
          </div>
        )}


        <div className="tab-content" style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
          minHeight: '500px'
        }}>
          {currentActiveTab === 'search' && renderJobSearch()}
          {currentActiveTab === 'saved' && renderSavedJobs()}
          {currentActiveTab === 'analytics' && renderAnalytics()}
        </div>
      </div>
    </div>
  )
}

export default JobController
