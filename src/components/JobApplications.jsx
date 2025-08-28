import { useState } from 'react'
import './JobApplications.css'

function JobApplications({ userEmail }) {
  const [filterStatus, setFilterStatus] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  // Mock data for job applications
  const jobApplications = [
    {
      id: 1,
      company: "TechFlow Solutions",
      position: "Senior Frontend Developer",
      appliedDate: "2025-08-27",
      status: "under_review",
      location: "Remote",
      jobType: "Full-time",
      salary: "$95,000 - $120,000",
      applicationMethod: "Company Website",
      notes: "Applied through their careers page. HR confirmed receipt.",
      companyLogo: "🏢",
      responseTime: "2-3 business days expected"
    },
    {
      id: 2,
      company: "Innovation Labs",
      position: "React Developer",
      appliedDate: "2025-08-25",
      status: "interview_scheduled",
      location: "San Francisco, CA",
      jobType: "Remote",
      salary: "$85,000 - $110,000",
      applicationMethod: "LinkedIn",
      notes: "Recruiter reached out. Technical interview scheduled for tomorrow.",
      companyLogo: "🚀",
      responseTime: "Responded in 1 day"
    },
    {
      id: 3,
      company: "DataTech Corp",
      position: "Full Stack Engineer",
      appliedDate: "2025-08-24",
      status: "rejected",
      location: "New York, NY",
      jobType: "Hybrid",
      salary: "$100,000 - $130,000",
      applicationMethod: "Job Board",
      notes: "Position filled internally. Encouraged to apply for future openings.",
      companyLogo: "📊",
      responseTime: "Responded in 3 days"
    },
    {
      id: 4,
      company: "StartupHub",
      position: "Frontend Developer",
      appliedDate: "2025-08-23",
      status: "under_review",
      location: "Austin, TX",
      jobType: "On-site",
      salary: "$70,000 - $90,000",
      applicationMethod: "AngelList",
      notes: "Early-stage startup. Direct application to CTO.",
      companyLogo: "💡",
      responseTime: "1-2 weeks expected"
    },
    {
      id: 5,
      company: "DesignCorp",
      position: "UI/UX Developer",
      appliedDate: "2025-08-22",
      status: "offer_received",
      location: "Seattle, WA",
      jobType: "Remote",
      salary: "$88,000 - $105,000",
      applicationMethod: "Referral",
      notes: "Referred by former colleague. Offer received pending decision.",
      companyLogo: "🎨",
      responseTime: "Responded in 2 days"
    },
    {
      id: 6,
      company: "CloudTech Systems",
      position: "Software Engineer",
      appliedDate: "2025-08-20",
      status: "under_review",
      location: "Denver, CO",
      jobType: "Hybrid",
      salary: "$80,000 - $100,000",
      applicationMethod: "Company Website",
      notes: "Applied for cloud infrastructure role. Waiting for response.",
      companyLogo: "☁️",
      responseTime: "5-7 business days expected"
    },
    {
      id: 7,
      company: "FinTech Solutions",
      position: "Frontend Developer",
      appliedDate: "2025-08-18",
      status: "rejected",
      location: "Boston, MA",
      jobType: "On-site",
      salary: "$90,000 - $115,000",
      applicationMethod: "Recruiter",
      notes: "Not a good culture fit according to feedback.",
      companyLogo: "💰",
      responseTime: "Responded in 1 week"
    },
    {
      id: 8,
      company: "EcommerceGiant",
      position: "Senior React Developer",
      appliedDate: "2025-08-16",
      status: "interview_scheduled",
      location: "Los Angeles, CA",
      jobType: "Part-time",
      salary: "$105,000 - $135,000",
      applicationMethod: "LinkedIn",
      notes: "Second round interview next week. Technical round completed.",
      companyLogo: "🛒",
      responseTime: "Responded in 2 days"
    },
    {
      id: 9,
      company: "AI Innovations",
      position: "Frontend Engineer",
      appliedDate: "2025-08-15",
      status: "under_review",
      location: "Chicago, IL",
      jobType: "Remote",
      salary: "$95,000 - $125,000",
      applicationMethod: "Job Board",
      notes: "AI/ML focused company. Very interested in the role.",
      companyLogo: "🤖",
      responseTime: "2-3 weeks expected"
    },
    {
      id: 10,
      company: "MediaStream Co",
      position: "Web Developer",
      appliedDate: "2025-08-14",
      status: "withdrawn",
      location: "Miami, FL",
      jobType: "Contract",
      salary: "$65,000 - $85,000",
      applicationMethod: "Company Website",
      notes: "Withdrew application due to salary mismatch.",
      companyLogo: "📺",
      responseTime: "Self-withdrawn"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'under_review': return '#f59e0b'
      case 'interview_scheduled': return '#3b82f6'
      case 'offer_received': return '#10b981'
      case 'rejected': return '#ef4444'
      case 'withdrawn': return '#6b7280'
      default: return '#6b7280'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'under_review': return 'Under Review'
      case 'interview_scheduled': return 'Interview Scheduled'
      case 'offer_received': return 'Offer Received'
      case 'rejected': return 'Rejected'
      case 'withdrawn': return 'Withdrawn'
      default: return 'Unknown'
    }
  }

  const getWebsiteLogo = (applicationMethod) => {
    switch (applicationMethod.toLowerCase()) {
      case 'linkedin': return '💼'
      case 'indeed': return '🔍'
      case 'glassdoor': return '🏢'
      case 'company website': return '🌐'
      case 'job board': return '📋'
      case 'referral': return '👥'
      case 'recruiter': return '🤝'
      case 'angel.co': return '👼'
      case 'stackoverflow': return '💻'
      case 'github jobs': return '🐙'
      default: return '🌐'
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getDaysAgo = (dateString) => {
    const today = new Date()
    const applicationDate = new Date(dateString)
    const diffTime = Math.abs(today - applicationDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`
  }

  // Filter applications based on status
  const filteredApplications = jobApplications.filter(app => {
    if (filterStatus === 'all') return true
    return app.status === filterStatus
  })

  // Sort applications
  const sortedApplications = [...filteredApplications].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.appliedDate) - new Date(a.appliedDate)
      case 'company':
        return a.company.localeCompare(b.company)
      case 'status':
        return a.status.localeCompare(b.status)
      case 'position':
        return a.position.localeCompare(b.position)
      default:
        return 0
    }
  })

  const getStatusCounts = () => {
    const counts = {
      all: jobApplications.length,
      under_review: 0,
      interview_scheduled: 0,
      offer_received: 0,
      rejected: 0,
      withdrawn: 0
    }
    
    jobApplications.forEach(app => {
      counts[app.status]++
    })
    
    return counts
  }

  const getTimeBasedCounts = () => {
    const now = new Date()
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    
    const thisWeek = jobApplications.filter(app => {
      const appDate = new Date(app.appliedDate)
      return appDate >= oneWeekAgo
    }).length
    
    const thisMonth = jobApplications.filter(app => {
      const appDate = new Date(app.appliedDate)
      return appDate >= oneMonthAgo
    }).length
    
    return { thisWeek, thisMonth }
  }

  const statusCounts = getStatusCounts()
  const timeCounts = getTimeBasedCounts()

  return (
    <div className="job-applications">
      <div className="applications-header">
        <div className="header-content">
          <h1>My Job Applications</h1>
          <p>Track all your job applications and their current status</p>
        </div>
        <div className="applications-stats">
          <div className="stat-card primary">
            <div className="stat-number">{jobApplications.length}</div>
            <div className="stat-label">Total Applications Sent</div>
            <div className="stat-description">All time applications</div>
          </div>
          <div className="stat-card secondary">
            <div className="stat-number">{timeCounts.thisMonth}</div>
            <div className="stat-label">Applications This Month</div>
            <div className="stat-description">Last 30 days activity</div>
          </div>
        </div>
      </div>

      <div className="applications-controls">
        <div className="filter-section">
          <label htmlFor="status-filter">Filter by Status:</label>
          <select 
            id="status-filter"
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Applications ({statusCounts.all})</option>
            <option value="under_review">Under Review ({statusCounts.under_review})</option>
            <option value="interview_scheduled">Interview Scheduled ({statusCounts.interview_scheduled})</option>
            <option value="offer_received">Offer Received ({statusCounts.offer_received})</option>
            <option value="rejected">Rejected ({statusCounts.rejected})</option>
            <option value="withdrawn">Withdrawn ({statusCounts.withdrawn})</option>
          </select>
        </div>

        <div className="sort-section">
          <label htmlFor="sort-by">Sort by:</label>
          <select 
            id="sort-by"
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="date">Application Date</option>
            <option value="company">Company Name</option>
            <option value="position">Position</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>

      <div className="applications-list">
        {sortedApplications.length === 0 ? (
          <div className="no-applications">
            <div className="no-applications-icon">📝</div>
            <h3>No applications found</h3>
            <p>No applications match your current filter criteria.</p>
          </div>
        ) : (
          sortedApplications.map(application => (
            <div key={application.id} className="application-card">
              <div className="card-main-content">
                <div className="card-header">
                  <div className="company-info">
                    <span className="company-logo">{application.companyLogo}</span>
                    <h3 className="company-name">{application.company}</h3>
                  </div>
                  <div className="job-type-badge">
                    <span className="job-type">{application.jobType}</span>
                  </div>
                </div>
                
                <div className="card-details">
                  <div className="applied-date">
                    <span className="label">Applied:</span>
                    <span className="date">{formatDate(application.appliedDate)} ({getDaysAgo(application.appliedDate)})</span>
                  </div>
                  <div className="position-title">
                    <h4>{application.position}</h4>
                  </div>
                  <div className="location-salary">
                    <span className="location">{application.location}</span>
                    <span className="salary">{application.salary}</span>
                  </div>
                </div>
              </div>
              
              <div className="card-footer">
                <div className="website-info">
                  <span className="website-logo">{getWebsiteLogo(application.applicationMethod)}</span>
                  <span className="application-source">via {application.company}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default JobApplications
