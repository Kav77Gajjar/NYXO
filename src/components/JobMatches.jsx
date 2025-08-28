import { useState } from 'react'
import './JobMatches.css'

function JobMatches({ userEmail }) {
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('match')

  // Mock job matches data based on user profile
  const jobMatches = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechFlow Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $150,000',
      matchScore: 95,
      postedDate: '2 days ago',
      skills: ['React', 'JavaScript', 'TypeScript', 'Node.js'],
      description: 'We are looking for a skilled Frontend Developer to join our dynamic team...',
      remote: true
    },
    {
      id: 2,
      title: 'React Developer',
      company: 'Innovation Labs',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100,000 - $130,000',
      matchScore: 92,
      postedDate: '1 day ago',
      skills: ['React', 'Redux', 'JavaScript', 'CSS'],
      description: 'Join our team to build cutting-edge web applications...',
      remote: true
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      matchScore: 88,
      postedDate: '3 days ago',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      description: 'Exciting opportunity to work on diverse projects...',
      remote: false
    },
    {
      id: 4,
      title: 'Frontend Engineer',
      company: 'DesignCorp',
      location: 'Austin, TX',
      type: 'Contract',
      salary: '$80 - $100/hour',
      matchScore: 85,
      postedDate: '5 days ago',
      skills: ['React', 'Vue.js', 'HTML', 'CSS'],
      description: 'Contract position for an experienced frontend engineer...',
      remote: true
    },
    {
      id: 5,
      title: 'JavaScript Developer',
      company: 'WebSolutions',
      location: 'Seattle, WA',
      type: 'Part-time',
      salary: '$60,000 - $80,000',
      matchScore: 82,
      postedDate: '1 week ago',
      skills: ['JavaScript', 'HTML', 'CSS', 'jQuery'],
      description: 'Part-time opportunity for a JavaScript developer...',
      remote: false
    }
  ]

  const filteredJobs = jobMatches.filter(job => {
    if (filter === 'all') return true
    if (filter === 'remote') return job.remote
    if (filter === 'onsite') return !job.remote
    if (filter === 'fulltime') return job.type === 'Full-time'
    if (filter === 'contract') return job.type === 'Contract'
    return true
  })

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'match') return b.matchScore - a.matchScore
    if (sortBy === 'date') return new Date(b.postedDate) - new Date(a.postedDate)
    if (sortBy === 'salary') return b.salary.localeCompare(a.salary)
    return 0
  })

  const getMatchColor = (score) => {
    if (score >= 90) return '#10b981'
    if (score >= 80) return '#f59e0b'
    return '#6b7280'
  }

  return (
    <div className="job-matches">
      <div className="job-matches-header">
        <div className="header-content">
          <h1>Your Job Matches</h1>
          <p>Jobs tailored to your skills and preferences</p>
        </div>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-number">{jobMatches.length}</span>
            <span className="stat-label">Total Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">{jobMatches.filter(j => j.matchScore >= 90).length}</span>
            <span className="stat-label">Top Matches</span>
          </div>
        </div>
      </div>

      <div className="job-matches-controls">
        <div className="filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Jobs
          </button>
          <button 
            className={`filter-btn ${filter === 'remote' ? 'active' : ''}`}
            onClick={() => setFilter('remote')}
          >
            Remote
          </button>
          <button 
            className={`filter-btn ${filter === 'onsite' ? 'active' : ''}`}
            onClick={() => setFilter('onsite')}
          >
            On-site
          </button>
          <button 
            className={`filter-btn ${filter === 'fulltime' ? 'active' : ''}`}
            onClick={() => setFilter('fulltime')}
          >
            Full-time
          </button>
          <button 
            className={`filter-btn ${filter === 'contract' ? 'active' : ''}`}
            onClick={() => setFilter('contract')}
          >
            Contract
          </button>
        </div>

        <div className="sort-controls">
          <label>Sort by:</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="match">Match Score</option>
            <option value="date">Date Posted</option>
            <option value="salary">Salary</option>
          </select>
        </div>
      </div>

      <div className="job-matches-list">
        {sortedJobs.map(job => (
          <div key={job.id} className="job-match-card">
            <div className="job-header">
              <div className="job-basic-info">
                <h3 className="job-title">{job.title}</h3>
                <div className="job-company">{job.company}</div>
                <div className="job-meta">
                  <span className="job-location">{job.location}</span>
                  <span className="job-type">{job.type}</span>
                  {job.remote && <span className="remote-badge">Remote</span>}
                </div>
              </div>
              <div className="job-match-info">
                <div 
                  className="match-score"
                  style={{ color: getMatchColor(job.matchScore) }}
                >
                  {job.matchScore}% Match
                </div>
                <div className="job-posted">{job.postedDate}</div>
              </div>
            </div>

            <div className="job-details">
              <div className="job-salary">{job.salary}</div>
              <p className="job-description">{job.description}</p>
              
              <div className="job-skills">
                {job.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="job-actions">
              <button className="apply-btn primary">Apply Now</button>
              <button className="save-btn">Save Job</button>
              <button className="details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {sortedJobs.length === 0 && (
        <div className="no-matches">
          <div className="no-matches-icon">🔍</div>
          <h3>No matches found</h3>
          <p>Try adjusting your filters to see more job opportunities.</p>
          <button className="reset-filters-btn" onClick={() => setFilter('all')}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default JobMatches
