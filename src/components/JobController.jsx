import { useState } from 'react'
import './JobController.css'

function JobController({ activeTab = 'search', setActiveTab }) {
  // Remove local state if props are provided
  const [localActiveTab, setLocalActiveTab] = useState('search')
  const currentActiveTab = activeTab || localActiveTab
  const currentSetActiveTab = setActiveTab || setLocalActiveTab

  const mockSavedJobs = [
    {
      id: 1,
      company: 'DevCompany',
      position: 'Senior Frontend Developer',
      salary: '$90,000 - $110,000',
      location: 'New York, NY',
      type: 'Full-time',
      postedDate: '2025-08-25',
      match: '95%'
    },
    {
      id: 2,
      company: 'WebSolutions',
      position: 'React Native Developer',
      salary: '$75,000 - $95,000',
      location: 'Los Angeles, CA',
      type: 'Contract',
      postedDate: '2025-08-24',
      match: '88%'
    },
    {
      id: 3,
      company: 'TechStartup',
      position: 'JavaScript Developer',
      salary: '$65,000 - $80,000',
      location: 'Remote',
      type: 'Full-time',
      postedDate: '2025-08-23',
      match: '92%'
    }
  ]

  const renderSavedJobs = () => (
    <div className="saved-jobs-section">
      <div className="section-header">
        <h2>💾 Saved Jobs</h2>
        <button className="add-job-btn">+ Add New Job</button>
      </div>

      <div className="saved-jobs-grid">
        {mockSavedJobs.map(job => (
          <div key={job.id} className="saved-job-card">
            <div className="job-header">
              <h3>{job.position}</h3>
              <span className="match-score">{job.match} Match</span>
            </div>
            <div className="job-details">
              <p className="company">{job.company}</p>
              <p className="location">📍 {job.location}</p>
              <p className="salary">💰 {job.salary}</p>
              <p className="posted-date">📅 Posted: {job.postedDate}</p>
            </div>
            <div className="job-actions">
              <button className="action-btn apply-btn">Apply Now</button>
              <button className="action-btn view-btn">View Job</button>
              <button className="action-btn remove-btn">Remove</button>
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
          <button className="search-btn">Search Jobs</button>
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
      {/* Left Sidebar Navigation */}
      <div className="jobcontroller-sidebar">
        <div className="sidebar-header">
          <h2>🎯 Job Control</h2>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`sidebar-nav-item ${currentActiveTab === 'search' ? 'active' : ''}`}
            onClick={() => currentSetActiveTab('search')}
          >
            <span className="nav-icon">🔍</span>
            Job Search
          </button>
          <button 
            className={`sidebar-nav-item ${currentActiveTab === 'saved' ? 'active' : ''}`}
            onClick={() => currentSetActiveTab('saved')}
          >
            <span className="nav-icon">💾</span>
            Saved Jobs
          </button>
          <button 
            className={`sidebar-nav-item ${currentActiveTab === 'analytics' ? 'active' : ''}`}
            onClick={() => currentSetActiveTab('analytics')}
          >
            <span className="nav-icon">📊</span>
            Analytics
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="jobcontroller-content">
        <div className="tab-navigation" style={{ display: 'none' }}>
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
