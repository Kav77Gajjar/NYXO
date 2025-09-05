import { useState } from 'react'
import UniversalJobCard from './UniversalJobCard'
import './JobApplications.css'

function JobApplications({ userEmail, onNavigateBack }) {
  const [sortBy, setSortBy] = useState('company-az')

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

  // Sort applications
  const sortedApplications = [...jobApplications].sort((a, b) => {
    switch (sortBy) {
      case 'company-az':
        return a.company.localeCompare(b.company)
      case 'company-za':
        return b.company.localeCompare(a.company)
      case 'date':
        return new Date(b.appliedDate) - new Date(a.appliedDate)
      case 'date-old':
        return new Date(a.appliedDate) - new Date(b.appliedDate)
      default:
        return a.company.localeCompare(b.company)
    }
  })

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
        <div className="sort-section">
          <label htmlFor="sort-by">Sort by:</label>
          <select 
            id="sort-by"
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="company-az">Company Name (A-Z)</option>
            <option value="company-za">Company Name (Z-A)</option>
            <option value="date">Application Date (Newest First)</option>
            <option value="date-old">Application Date (Oldest First)</option>
          </select>
        </div>
      </div>

      <div className="applications-list" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '1.5rem'
      }}>
        {sortedApplications.length === 0 ? (
          <div className="no-applications">
            <div className="no-applications-icon">📝</div>
            <h3>No applications found</h3>
            <p>No applications match your current filter criteria.</p>
          </div>
        ) : (
          sortedApplications.map(application => {
            // Transform application data to match universal card format
            const jobData = {
              id: application.id,
              title: application.position,
              company: application.company,
              location: application.location,
              appliedDate: application.appliedDate,
              salary: application.salary,
              description: `Applied via ${application.applicationMethod}`,
              source: application.applicationMethod,
              applicationMethod: application.applicationMethod,
              tags: [application.jobType, application.salary ? 'Salary Listed' : 'Salary TBD'].filter(Boolean)
            };

            return (
              <UniversalJobCard
                key={application.id}
                job={jobData}
                showMatchScore={false}
                showHeart={false}
                showSource={true}
                variant="application"
                onApply={(job) => {
                  // Handle view application action
                  console.log('View application for:', job.title);
                }}
              />
            );
          })
        )}
      </div>
    </div>
  )
}

export default JobApplications
