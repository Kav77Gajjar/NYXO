import React from 'react';
import './Sitemap.css';

const Sitemap = ({ onNavigate }) => {
  const handleNavigation = (page) => {
    onNavigate(page);
  };

  return (
    <div className="sitemap">
      <div className="sitemap-container">
        <header className="sitemap-header">
          <h1>Site Map</h1>
          <p>Navigate through all pages and sections of NYXO</p>
          <button 
            className="back-button"
            onClick={() => handleNavigation('dashboard')}
          >
            ← Back to Dashboard
          </button>
        </header>

        <div className="sitemap-content">
          <div className="sitemap-section">
            <h2>🏠 Main Pages</h2>
            <div className="sitemap-links">
              <div className="sitemap-item">
                <button 
                  className="sitemap-link main"
                  onClick={() => handleNavigation('dashboard')}
                >
                  Dashboard
                </button>
                <div className="sub-links">
                  <button className="sitemap-link sub">Your Activity</button>
                  <button className="sitemap-link sub">Job Search</button>
                  <button className="sitemap-link sub">Quick Actions</button>
                </div>
              </div>

              <div className="sitemap-item">
                <button 
                  className="sitemap-link main"
                  onClick={() => handleNavigation('toolkit')}
                >
                  Toolkit
                </button>
                <div className="sub-links">
                  <button className="sitemap-link sub">Resume Builder</button>
                  <button className="sitemap-link sub">Resume Templates</button>
                </div>
              </div>

              <div className="sitemap-item">
                <button 
                  className="sitemap-link main"
                  onClick={() => handleNavigation('job-controller')}
                >
                  Job Controller
                </button>
                <div className="sub-links">
                  <button className="sitemap-link sub">Job Applications</button>
                  <button className="sitemap-link sub">Job Matches</button>
                  <button className="sitemap-link sub">Application Tracker</button>
                  <button className="sitemap-link sub">Interview Schedule</button>
                </div>
              </div>

              <div className="sitemap-item">
                <button 
                  className="sitemap-link main"
                  onClick={() => handleNavigation('profile')}
                >
                  Profile
                </button>
                <div className="sub-links">
                  <button className="sitemap-link sub">Personal Information</button>
                  <button className="sitemap-link sub">Account Settings</button>
                  <button className="sitemap-link sub">Privacy Settings</button>
                  <button className="sitemap-link sub">Notification Preferences</button>
                </div>
              </div>
            </div>
          </div>

          <div className="sitemap-section">
            <h2>🔧 Tools & Resources</h2>
            <div className="sitemap-links">
              <div className="sitemap-item">
                <button className="sitemap-link main">Resume Builder</button>
                <div className="sub-links">
                  <button className="sitemap-link sub">Professional Template</button>
                  <button className="sitemap-link sub">Creative Template</button>
                  <button className="sitemap-link sub">Modern Template</button>
                  <button className="sitemap-link sub">Classic Template</button>
                </div>
              </div>

              <div className="sitemap-item">
                <button className="sitemap-link main">Career Resources</button>
                <div className="sub-links">
                  <button className="sitemap-link sub">Interview Preparation</button>
                  <button className="sitemap-link sub">Skill Assessments</button>
                  <button className="sitemap-link sub">Career Advice</button>
                  <button className="sitemap-link sub">Industry Insights</button>
                </div>
              </div>
            </div>
          </div>

          <div className="sitemap-section">
            <h2>📋 Account & Settings</h2>
            <div className="sitemap-links">
              <div className="sitemap-item">
                <button className="sitemap-link main">Account Management</button>
                <div className="sub-links">
                  <button className="sitemap-link sub">Login / Register</button>
                  <button className="sitemap-link sub">Password Reset</button>
                  <button className="sitemap-link sub">Delete Account</button>
                </div>
              </div>

              <div className="sitemap-item">
                <button className="sitemap-link main">Help & Support</button>
                <div className="sub-links">
                  <button className="sitemap-link sub">FAQ</button>
                  <button className="sitemap-link sub">Contact Support</button>
                  <button className="sitemap-link sub">User Guide</button>
                  <button className="sitemap-link sub">Tutorials</button>
                </div>
              </div>

              <div className="sitemap-item">
                <button className="sitemap-link main">Legal</button>
                <div className="sub-links">
                  <button className="sitemap-link sub">Privacy Policy</button>
                  <button className="sitemap-link sub">Terms of Service</button>
                  <button className="sitemap-link sub">Cookie Policy</button>
                  <button className="sitemap-link sub">GDPR Compliance</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
