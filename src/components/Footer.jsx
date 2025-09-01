import React from 'react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
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
              <li><a href="#dashboard">Dashboard</a></li>
              <li><a href="#toolkit">Toolkit</a></li>
              <li><a href="#job-controller">Job Controller</a></li>
              <li><a href="#profile">Profile</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#resume-builder">Resume Builder</a></li>
              <li><a href="#cover-letter">Cover Letter Generator</a></li>
              <li><a href="#interview-prep">Interview Prep</a></li>
              <li><a href="#career-advice">Career Advice</a></li>
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
