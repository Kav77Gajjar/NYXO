import { useState, useEffect } from 'react'
import UniversalJobCard from './UniversalJobCard'
import apiService from '../services/api'
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
  
  // Search state
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [searchError, setSearchError] = useState(null)
  const [searchFilters, setSearchFilters] = useState({
    keywords: '',
    location: '',
    job_type: '',
    experience_level: '',
    salary_min: '',
    salary_max: ''
  })

  // Search functionality
  const handleSearch = async () => {
    if (!searchFilters.keywords.trim()) {
      setSearchError('Please enter job keywords to search')
      return
    }

    setIsSearching(true)
    setSearchError(null)
    
    try {
      const searchParams = {
        keywords: searchFilters.keywords,
        location: searchFilters.location,
        job_type: searchFilters.job_type || undefined,
        experience_level: searchFilters.experience_level || undefined,
        salary_min: searchFilters.salary_min || undefined,
        salary_max: searchFilters.salary_max || undefined,
        page: 1,
        limit: 20
      }

      // Remove undefined values
      Object.keys(searchParams).forEach(key => 
        searchParams[key] === undefined && delete searchParams[key]
      )

      const response = await apiService.searchJobs(searchParams)
      
      if (response.success) {
        setSearchResults(response.jobs || [])
      } else {
        setSearchError(response.error || 'Failed to search jobs')
        setSearchResults([])
      }
    } catch (error) {
      console.error('Job search failed:', error)
      setSearchError('Failed to search jobs. Please try again.')
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const updateSearchFilter = (field, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [field]: value
    }))
  }

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

  // Function to calculate relative time
  const getRelativeTime = (dateString) => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffInHours = Math.floor((now - postDate) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    
    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  };

  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      company: 'DevCompany',
      position: 'Senior Frontend Developer',
      location: 'New York, NY',
      type: 'Full-time',
      postedDate: '2025-09-03',
      match: '95%',
      description: 'Looking for an experienced React developer to join our growing team. Work with modern technologies and build scalable web applications.',
      source: 'LinkedIn',
      isLiked: true,
      tags: ['Full-time', 'Remote', 'Start Immediate', '3+ Years Experience', 'React', 'TypeScript']
    },
    {
      id: 2,
      company: 'WebSolutions',
      position: 'React Native Developer',
      location: 'Los Angeles, CA',
      type: 'Contract',
      postedDate: '2025-09-04',
      match: '88%',
      description: 'Build cross-platform mobile applications using React Native. Experience with iOS and Android development preferred.',
      source: 'Indeed',
      isLiked: true,
      tags: ['Contract', 'Part-time', 'Remote', 'Immediate Start', 'Mobile', 'React Native']
    },
    {
      id: 3,
      company: 'TechStartup',
      position: 'JavaScript Developer',
      location: 'Remote',
      type: 'Full-time',
      postedDate: '2025-09-02',
      match: '92%',
      description: 'Join our innovative startup building cutting-edge web applications. Strong JavaScript and Node.js skills required.',
      source: 'Glassdoor',
      isLiked: true,
      tags: ['Full-time', 'Remote', 'Trainership', 'Fresher Friendly', 'Node.js', 'Startup']
    },
    {
      id: 4,
      company: 'InnovateCorp',
      position: 'Frontend Intern',
      location: 'San Francisco, CA',
      type: 'Internship',
      postedDate: '2025-09-04',
      match: '85%',
      description: 'Perfect opportunity for students and fresh graduates to gain hands-on experience in frontend development.',
      source: 'AngelList',
      isLiked: true,
      tags: ['Internship', 'Fresher', 'Part-time', 'Learning Opportunity', 'HTML/CSS', 'JavaScript']
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
  <h2 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', textAlign: 'center', fontSize: '1.65em', width: '100%'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
            <path d="M12 20.5C12 20.5 4 13.5 4 8.5C4 5.5 6.5 4 8.5 4C10 4 12 5.5 12 7C12 5.5 14 4 15.5 4C17.5 4 20 5.5 20 8.5C20 13.5 12 20.5 12 20.5Z" stroke="#FF7F50" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Liked Jobs
        </h2>
        {/* <button className="add-job-btn">+ Add New Job</button> */}
      </div>

      <div className="saved-jobs-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem'
      }}>
        {savedJobs.filter(job => job.isLiked).map(job => (
          <UniversalJobCard
            key={job.id}
            job={job}
            onToggleLike={handleToggleLike}
            showMatchScore={true}
            showHeart={true}
            showSource={true}
            variant="saved"
          />
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
              value={searchFilters.keywords}
              onChange={(e) => updateSearchFilter('keywords', e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <input 
              type="text" 
              placeholder="Location"
              className="location-input"
              value={searchFilters.location}
              onChange={(e) => updateSearchFilter('location', e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <div className="search-btns-group">
            <button 
              className="search-btn compound-main"
              onClick={handleSearch}
              disabled={isSearching}
            >
              <div className="btn-icon-container">
                {isSearching ? (
                  <div className="spinner" style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid #f3f3f3',
                    borderTop: '2px solid #3498db',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                ) : (
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
                )}
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
                  const selectedText = 'Full-time';
                  updateSearchFilter('job_type', 'full-time');
                  document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = selectedText;
                  document.querySelector('#dropdown-job-type').style.display = 'none';
                  document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const selectedText = 'Full-time';
                    updateSearchFilter('job_type', 'full-time');
                    document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = selectedText;
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
                  const selectedText = 'Part-time';
                  updateSearchFilter('job_type', 'part-time');
                  document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = selectedText;
                  document.querySelector('#dropdown-job-type').style.display = 'none';
                  document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const selectedText = 'Part-time';
                    updateSearchFilter('job_type', 'part-time');
                    document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = selectedText;
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
                  const selectedText = 'Contract';
                  updateSearchFilter('job_type', 'contract');
                  document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = selectedText;
                  document.querySelector('#dropdown-job-type').style.display = 'none';
                  document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const selectedText = 'Contract';
                    updateSearchFilter('job_type', 'contract');
                    document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = selectedText;
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
                  const selectedText = 'Remote';
                  updateSearchFilter('job_type', 'remote');
                  document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = selectedText;
                  document.querySelector('#dropdown-job-type').style.display = 'none';
                  document.querySelector('#dropdown-job-type').previousElementSibling.setAttribute('aria-expanded', 'false');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const selectedText = 'Remote';
                    updateSearchFilter('job_type', 'remote');
                    document.querySelector('#dropdown-job-type').previousElementSibling.firstChild.textContent = selectedText;
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
        {searchError && (
          <div className="error-message" style={{
            color: '#ff4444',
            background: 'rgba(255, 68, 68, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            {searchError}
          </div>
        )}

        {isSearching ? (
          <div className="loading-container" style={{
            textAlign: 'center',
            padding: '2rem'
          }}>
            <div className="spinner" style={{
              width: '40px',
              height: '40px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #3498db',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto'
            }}></div>
            <p style={{ marginTop: '1rem' }}>Searching for jobs...</p>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="search-results-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem'
          }}>
            {searchResults.map((job, index) => (
              <UniversalJobCard
                key={job.external_id || job.id || index}
                job={{
                  id: job.external_id || job.id || index,
                  company: job.company || 'Unknown Company',
                  position: job.title || 'Position Title',
                  location: job.location || 'Location not specified',
                  type: job.job_type || 'Full-time',
                  postedDate: job.posted_date || new Date().toISOString(),
                  description: job.description || 'No description available',
                  source: job.source || 'External',
                  isLiked: false,
                  tags: job.tags || [],
                  sourceUrl: job.source_url || '#'
                }}
                onToggleLike={() => {}}
                showMatchScore={false}
                showHeart={true}
                showSource={true}
                variant="search"
              />
            ))}
          </div>
        ) : searchFilters.keywords ? (
          <div className="no-results" style={{
            textAlign: 'center',
            padding: '2rem',
            color: '#666'
          }}>
            <p>No jobs found for your search criteria.</p>
            <p>Try adjusting your keywords or filters.</p>
          </div>
        ) : (
          <p>Use the search form above to find new job opportunities that match your profile.</p>
        )}
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
