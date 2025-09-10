import React from 'react'
import './ErrorPage.css'

function ErrorPage({ onNavigateBack, featureName = "This Feature" }) {
  const availableFeatures = [
    {
      name: "Job Controller",
      description: "Search jobs, manage and track your saved job applications",
      icon: "💼",
      status: "Available",
      action: "Go to Job Controller"
    },
    {
      name: "Resume Builder",
      description: "Create professional resumes with multiple templates (Professional, Creative, Technical, etc.)",
      icon: "📄",
      status: "Available", 
      action: "Go to Resume Builder"
    }
  ]

  const upcomingFeatures = [
    {
      name: "Interview Preparation",
      description: "AI-powered mock interviews and practice questions",
      icon: "🎤",
      status: "Coming Soon"
    },
    {
      name: "Skill Assessment",
      description: "Evaluate and track your technical skills",
      icon: "🎯",
      status: "Coming Soon"
    },
    {
      name: "Salary Calculator",
      description: "Research market rates and salary insights",
      icon: "💰",
      status: "Coming Soon"
    },
    {
      name: "Profile Management",
      description: "Advanced profile customization and settings",
      icon: "⚙️",
      status: "Coming Soon"
    }
  ]

  const handleFeatureClick = (featureName) => {
    let targetPage = '';
    
    switch(featureName) {
      case 'Job Controller':
        targetPage = 'jobcontroller';
        break;
      case 'Resume Builder':
        targetPage = 'resume-templates';
        break;
      case 'Profile Management':
        targetPage = 'profile';
        break;
      default:
        targetPage = 'dashboard';
    }
    
    const event = new CustomEvent('navigate', {
      detail: { page: targetPage }
    })
    window.dispatchEvent(event)
  }

  return (
    <div className="error-page">
      <div className="error-container">
        {/* Header Section */}
        <div className="error-header">
          <div className="error-icon">🚧</div>
          <h1>Feature Under Development</h1>
          <p className="error-subtitle">
            {featureName} is not yet available in our MVP prototype
          </p>
        </div>

        {/* MVP Status Banner */}
        <div className="mvp-banner">
          <div className="mvp-content">
            <h2>🚀 NYXO Platform - MVP Phase</h2>
            <p>
              We're currently in the <strong>Minimum Viable Product (MVP)</strong> phase, 
              focusing on core functionality to deliver the best user experience. 
              More features are coming soon!
            </p>
          </div>
        </div>

        {/* Available Features */}
        <div className="features-section">
          <h3>✅ Available Features</h3>
          <div className="features-grid">
            {availableFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card available"
                onClick={() => handleFeatureClick(feature.name)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h4>{feature.name}</h4>
                  <p>{feature.description}</p>
                  <span className="feature-status available">{feature.status}</span>
                  <button className="feature-action">{feature.action}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Features */}
        <div className="features-section">
          <h3>🔮 Coming Soon</h3>
          <div className="features-grid">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="feature-card upcoming">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h4>{feature.name}</h4>
                  <p>{feature.description}</p>
                  <span className="feature-status upcoming">{feature.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="error-actions">
          <button className="back-btn primary" onClick={onNavigateBack}>
            ← Back to Dashboard
          </button>
          <button 
            className="feature-btn secondary"
            onClick={() => handleFeatureClick('Job Controller')}
          >
            Explore Job Controller
          </button>
        </div>

        {/* Footer Message */}
        <div className="error-footer">
          <p>
            Thank you for testing our platform! Your feedback helps us build better features. 
            <br />
            <strong>Expected Timeline:</strong> Full feature set coming in Q4 2025
          </p>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
