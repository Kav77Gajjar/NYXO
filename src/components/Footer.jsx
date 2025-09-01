import React from 'react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  const handleNavigation = (page) => {
    // Emit a custom event that can be caught by Dashboard component
    const navigationEvent = new CustomEvent('navigate', {
      detail: { page: page }
    });
    window.dispatchEvent(navigationEvent);
    
    // Also call onNavigate if it exists (for top-level navigation)
    if (onNavigate && (page === 'sitemap')) {
      onNavigate(page);
    }
  };

  const handleLinkClick = (e, page) => {
    e.preventDefault();
    handleNavigation(page);
  };

  const handleToolkitNavigation = (e, toolCategory) => {
    e.preventDefault();
    // First navigate to toolkit
    const navigationEvent = new CustomEvent('navigate', {
      detail: { page: 'toolkit', category: toolCategory }
    });
    window.dispatchEvent(navigationEvent);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">NYXO</h3>
            <p className="footer-description">
              Your career companion for finding the perfect job opportunities and building your professional future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="#dashboard" 
                  onClick={(e) => handleLinkClick(e, 'dashboard')}
                  className="footer-link-active"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="#toolkit" 
                  onClick={(e) => handleLinkClick(e, 'toolkit')}
                  className="footer-link-active"
                >
                  Toolkit
                </a>
              </li>
              <li>
                <a 
                  href="#job-controller" 
                  onClick={(e) => handleLinkClick(e, 'jobcontroller')}
                  className="footer-link-active"
                >
                  Job Controller
                </a>
              </li>
              <li>
                <a 
                  href="#profile" 
                  onClick={(e) => handleLinkClick(e, 'profile')}
                  className="footer-link-active"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="#resume-builder" 
                  onClick={(e) => handleLinkClick(e, 'resume-templates')}
                  className="footer-link-active"
                >
                  Resume Builder
                </a>
              </li>
              <li>
                <a 
                  href="#cover-letter" 
                  onClick={(e) => handleLinkClick(e, 'cover-letter')}
                  className="footer-link-active"
                >
                  Cover Letter Generator
                </a>
              </li>
              <li>
                <a 
                  href="#interview-prep" 
                  className="footer-link-disabled"
                  title="Coming Soon"
                  onClick={(e) => e.preventDefault()}
                >
                  Interview Prep
                </a>
              </li>
              <li>
                <a 
                  href="#career-advice" 
                  className="footer-link-disabled"
                  title="Coming Soon"
                  onClick={(e) => e.preventDefault()}
                >
                  Career Advice
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 NYXO. All rights reserved.</p>
          <div className="footer-actions">
            <button 
              className="sitemap-button"
              onClick={() => onNavigate && onNavigate('sitemap')}
            >
              🗺️ Site Map
            </button>
            <div className="footer-social">
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
