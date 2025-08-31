import { useState } from 'react'
import './JobController.css'

function JobController({ activeTab = 'search', setActiveTab, onNavigateBack }) {
  // Remove local state if props are provided
  const [localActiveTab, setLocalActiveTab] = useState('search')
  const currentActiveTab = activeTab || localActiveTab
  const currentSetActiveTab = setActiveTab || setLocalActiveTab

  // State to track saved/liked jobs
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
      ).filter(job => job.isLiked) // Remove jobs that are no longer liked
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
              <p className="posted-date">� Posted: {job.postedDate}</p>
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
        <h2>🔍 Job Search</h2>
      </div>

      <div className="search-controls">
        <div className="search-form">
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
          {/* Compound action button: Search + Liked (divider) */}
          <div className="compound-btn" role="group" aria-label="Search and liked actions">
            <button
              className="search-btn compound-main"
              onClick={() => {/* trigger search - placeholder */}}
            >
              Search Jobs
            </button>
            <button
              className="liked-btn compound-side"
              aria-label="Liked Jobs"
              title="Liked Jobs"
              onClick={() => currentSetActiveTab('saved')}
            >
              <span className="heart-icon" aria-hidden="true">❤</span>
            </button>
          </div>
        </div>

        <div className="filter-options">
          <select className="filter-select">
            <option>Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Remote</option>
          </select>
          <select className="filter-select">
            <option>Experience Level</option>
            <option>Entry Level</option>
            <option>Mid Level</option>
            <option>Senior Level</option>
            <option>Executive</option>
          </select>
          <select className="filter-select">
            <option>Salary Range</option>
            <option>$40,000 - $60,000</option>
            <option>$60,000 - $80,000</option>
            <option>$80,000 - $100,000</option>
            <option>$100,000+</option>
          </select>
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

  {/* Recommendations removed per UX update */}
    </div>
  )

  return (
    <div className="job-controller">

      {/* Main Content Area (left sub-nav removed) */}
      <div className="jobcontroller-content">
        {/* Top bar with Back button, only show if not on 'search' tab */}
        {currentActiveTab !== 'search' && (
          <div className="top-bar">
            <button
              className="back-btn"
              onClick={() => {
                // If user is on other tabs ('saved' or 'analytics'), go back to 'search' tab
                currentSetActiveTab('search')
              }}
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
