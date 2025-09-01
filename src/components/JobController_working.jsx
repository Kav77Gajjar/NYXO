import { useState, useEffect } from 'react'
import './JobController.css'

function JobController({ activeTab = 'search', setActiveTab, onNavigateBack }) {
  const [localActiveTab, setLocalActiveTab] = useState('search')
  const currentActiveTab = activeTab || localActiveTab
  const currentSetActiveTab = setActiveTab || setLocalActiveTab

  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.custom-dropdown')) {
        setOpenDropdown(null);
        document.querySelectorAll('.dropdown-options').forEach(dropdown => {
          dropdown.style.display = 'none';
        });
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownId) => {
    const dropdown = document.getElementById(`dropdown-${dropdownId}`);
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
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
      <div className="section-header">
        <h2>💾 Saved Jobs</h2>
        <button className="add-job-btn">+ Add New Job</button>
      </div>

      <div className="saved-jobs-grid">
        {savedJobs.filter(job => job.isLiked).map(job => (
          <div key={job.id} className="saved-job-card">
            <div className="job-header">
              <div className="job-title-section">
                <h3>{job.position}</h3>
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
            <div className="job-details">
              <p className="company">{job.company}</p>
              <p className="location">📍 {job.location}</p>
              <p className="posted-date">📅 Posted: {job.postedDate}</p>
              <p className="job-description">{job.description}</p>
            </div>
            <div className="job-actions">
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
        <div className="search-form" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', width: '100%' }}>
          <div style={{ display: 'flex', flex: '4 1 0%', border: '2px solid #667eea', borderRadius: 12, overflow: 'hidden', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
            <input 
              type="text" 
              placeholder="Job title, keywords, or company"
              className="search-input"
              style={{ flex: 1, border: 'none', borderRadius: 0, boxShadow: 'none', padding: '1rem', fontSize: '1rem' }}
            />
            <input 
              type="text" 
              placeholder="Location"
              className="location-input"
              style={{ flex: 1, border: 'none', borderRadius: 0, boxShadow: 'none', borderLeft: '1px solid #e2e8f0', padding: '1rem', fontSize: '1rem' }}
            />
          </div>
          <div className="search-btns-group" style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flex: '1 1 0%', 
            border: '2px solid #667eea', 
            borderRadius: 12, 
            overflow: 'hidden', 
            background: 'white', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
            minWidth: '160px',
            maxWidth: '220px'
          }}>
            <button className="search-btn compound-main" style={{ 
              flex: 1, 
              border: 'none', 
              borderRadius: 0, 
              boxShadow: 'none', 
              fontSize: '1rem', 
              fontWeight: 600, 
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', 
              color: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '0',
              height: '48px',
              minHeight: '48px'
            }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '6px'
              }}>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ display: 'block' }}
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
            </button>
            <button className="liked-btn compound-side" style={{ 
              flex: 1, 
              border: 'none', 
              borderRadius: 0, 
              boxShadow: 'none', 
              fontSize: '1rem', 
              borderLeft: '1px solid #e2e8f0', 
              background: 'white', 
              color: '#1e293b',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '0',
              height: '48px',
              minHeight: '48px'
            }} onClick={() => currentSetActiveTab('saved')}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '6px'
              }}>
                <span className="heart-icon" style={{ 
                  fontSize: '18px',
                  lineHeight: '1',
                  display: 'block'
                }}>❤</span>
              </div>
            </button>
          </div>
        </div>

        {/* TEST DROPDOWN - VERY SIMPLE */}
        <div style={{ marginBottom: '2rem' }}>
          <button 
            onClick={() => toggleDropdown('test')}
            style={{
              padding: '1rem 2rem',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Click Me - Job Type
          </button>
          
          <div 
            id="dropdown-test"
            style={{
              position: 'fixed',
              top: '200px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              background: 'red',
              border: '5px solid blue',
              borderRadius: '10px',
              display: 'none',
              zIndex: 99999,
              padding: '20px'
            }}
          >
            <div style={{
              background: 'yellow',
              color: 'black',
              padding: '15px',
              margin: '10px 0',
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'center',
              cursor: 'pointer'
            }} onClick={() => {
              alert('Full-time selected!');
              document.getElementById('dropdown-test').style.display = 'none';
            }}>
              FULL-TIME JOB
            </div>
            <div style={{
              background: 'green',
              color: 'white',
              padding: '15px',
              margin: '10px 0',
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'center',
              cursor: 'pointer'
            }} onClick={() => {
              alert('Part-time selected!');
              document.getElementById('dropdown-test').style.display = 'none';
            }}>
              PART-TIME JOB
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
      <div className="section-header">
        <h2>📊 Job Search Analytics</h2>
      </div>

      <div className="analytics-grid">
        <div className="metric-card">
          <h3>Jobs Searched</h3>
          <div className="metric-value">128</div>
          <p>Total job search queries made</p>
        </div>
        <div className="metric-card">
          <h3>Jobs Applied</h3>
          <div className="metric-value">46</div>
          <p>Applications submitted from your account</p>
        </div>
        <div className="metric-card">
          <h3>Most Applied Platform</h3>
          <div className="metric-value">LinkedIn</div>
          <p>Platform with the highest number of applications</p>
        </div>
        <div className="metric-card">
          <h3>Active Time</h3>
          <div className="metric-value">3h 12m</div>
          <p>Time spent actively searching / applying</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="job-controller">
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
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${currentActiveTab === 'search' ? 'active' : ''}`}
            onClick={() => currentSetActiveTab('search')}
          >
            🔍 Job Search
          </button>
          <button 
            className={`tab-btn ${currentActiveTab === 'saved' ? 'active' : ''}`}
            onClick={() => currentSetActiveTab('saved')}
          >
            💾 Saved Jobs
          </button>
          <button 
            className={`tab-btn ${currentActiveTab === 'analytics' ? 'active' : ''}`}
            onClick={() => currentSetActiveTab('analytics')}
          >
            📊 Analytics
          </button>
        </div>

        <div className="tab-content">
          {currentActiveTab === 'search' && renderJobSearch()}
          {currentActiveTab === 'saved' && renderSavedJobs()}
          {currentActiveTab === 'analytics' && renderAnalytics()}
        </div>
      </div>
    </div>
  )
}

export default JobController
