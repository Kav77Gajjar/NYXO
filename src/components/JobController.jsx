import { useState } from 'react'
import './JobController.css'

function JobController() {
  const [activeTab, setActiveTab] = useState('applications')
  const [filterStatus, setFilterStatus] = useState('all')

  const mockApplications = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      position: 'Frontend Developer',
      status: 'interview',
      appliedDate: '2025-08-20',
      salary: '$75,000 - $90,000',
      location: 'San Francisco, CA',
      type: 'Full-time'
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'React Developer',
      status: 'pending',
      appliedDate: '2025-08-18',
      salary: '$70,000 - $85,000',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      id: 3,
      company: 'BigTech Corp',
      position: 'Software Engineer',
      status: 'rejected',
      appliedDate: '2025-08-15',
      salary: '$95,000 - $120,000',
      location: 'Seattle, WA',
      type: 'Full-time'
    },
    {
      id: 4,
      company: 'InnovateLab',
      position: 'Full Stack Developer',
      status: 'accepted',
      appliedDate: '2025-08-10',
      salary: '$80,000 - $100,000',
      location: 'Austin, TX',
      type: 'Full-time'
    }
  ]

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#ffa726'
      case 'interview': return '#42a5f5'
      case 'accepted': return '#66bb6a'
      case 'rejected': return '#ef5350'
      default: return '#9e9e9e'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Under Review'
      case 'interview': return 'Interview Scheduled'
      case 'accepted': return 'Offer Received'
      case 'rejected': return 'Not Selected'
      default: return status
    }
  }

  const filteredApplications = filterStatus === 'all' 
    ? mockApplications 
    : mockApplications.filter(app => app.status === filterStatus)

  const renderApplications = () => (
    <div className="applications-section">
      <div className="section-header">
        <h2>📋 My Applications</h2>
        <div className="filter-controls">
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="status-filter"
          >
            <option value="all">All Status</option>
            <option value="pending">Under Review</option>
            <option value="interview">Interview</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="applications-grid">
        {filteredApplications.map(application => (
          <div key={application.id} className="application-card">
            <div className="application-header">
              <h3>{application.position}</h3>
              <span 
                className="status-badge" 
                style={{ backgroundColor: getStatusColor(application.status) }}
              >
                {getStatusText(application.status)}
              </span>
            </div>
            <div className="application-details">
              <p className="company">{application.company}</p>
              <p className="location">📍 {application.location}</p>
              <p className="salary">💰 {application.salary}</p>
              <p className="applied-date">📅 Applied: {application.appliedDate}</p>
            </div>
            <div className="application-actions">
              <button className="action-btn view-btn">View Details</button>
              <button className="action-btn follow-btn">Follow Up</button>
              <button className="action-btn withdraw-btn">Withdraw</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

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
          <h3>Application Success Rate</h3>
          <div className="metric-value">23%</div>
          <p>4 out of 17 applications received responses</p>
        </div>
        <div className="metric-card">
          <h3>Average Response Time</h3>
          <div className="metric-value">5 days</div>
          <p>Companies typically respond within a week</p>
        </div>
        <div className="metric-card">
          <h3>Interview Conversion</h3>
          <div className="metric-value">75%</div>
          <p>3 out of 4 interviews led to next round</p>
        </div>
        <div className="metric-card">
          <h3>Most Active Platforms</h3>
          <div className="metric-value">LinkedIn</div>
          <p>60% of your applications come from LinkedIn</p>
        </div>
      </div>

      <div className="recommendation-card">
        <h3>💡 Recommendations</h3>
        <ul>
          <li>Consider expanding your search to include remote positions</li>
          <li>Your profile shows strong React skills - target React-focused roles</li>
          <li>Follow up on pending applications after 1 week</li>
          <li>Consider networking events in the San Francisco tech scene</li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className="job-controller">
      <div className="job-controller-header">
        <h1>🎮 Job Controller</h1>
        <p>Manage your job applications and search progress</p>
      </div>

      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
          onClick={() => setActiveTab('applications')}
        >
          📋 Applications
        </button>
        <button 
          className={`tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          💾 Saved Jobs
        </button>
        <button 
          className={`tab-btn ${activeTab === 'search' ? 'active' : ''}`}
          onClick={() => setActiveTab('search')}
        >
          🔍 Job Search
        </button>
        <button 
          className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          📊 Analytics
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'applications' && renderApplications()}
        {activeTab === 'saved' && renderSavedJobs()}
        {activeTab === 'search' && renderJobSearch()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>
    </div>
  )
}

export default JobController
