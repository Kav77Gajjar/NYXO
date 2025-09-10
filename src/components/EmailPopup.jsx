import React, { useState } from 'react';
import './EmailPopup.css';

function EmailPopup({ isOpen, onClose, onSubmit, isLoading }) {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(email);
    }
  };

  const handleClose = () => {
    setEmail('');
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>📧 Get Your Resume as PDF</h2>
          <button 
            className="close-btn"
            onClick={handleClose}
            disabled={isLoading}
          >
            ×
          </button>
        </div>
        
        <div className="popup-content">
          <p>Enter your email address and we'll send your professional resume as a PDF directly to your inbox.</p>
          
          <form onSubmit={handleSubmit} className="email-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={errors.email ? 'error' : ''}
                disabled={isLoading}
                autoFocus
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            
            <div className="form-actions">
              <button 
                type="button" 
                className="cancel-btn"
                onClick={handleClose}
                disabled={isLoading}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="send-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  '📤 Send PDF to Email'
                )}
              </button>
            </div>
          </form>
          
          <div className="popup-footer">
            <small>
              🔒 Your email is secure and will only be used to send the resume. 
              We don't store or share your information.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailPopup;
