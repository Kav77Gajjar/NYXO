import { useState } from 'react'
import './App.css'
import AuthPage from './components/AuthPage'
import Dashboard from './components/Dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})

  const handleLogin = () => {
    setIsAuthenticated(true)
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentPage('home')
  }

  // If user is authenticated and not on dashboard, redirect to dashboard
  if (isAuthenticated && currentPage !== 'dashboard') {
    setCurrentPage('dashboard')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  const handleContactFormChange = (e) => {
    const { name, value } = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateContactForm = () => {
    const errors = {}
    
    if (!contactForm.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!contactForm.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      errors.email = 'Email is invalid'
    }
    
    if (!contactForm.message.trim()) {
      errors.message = 'Message is required'
    }
    
    return errors
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    
    const errors = validateContactForm()
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    // Handle successful form submission
    alert('Thank you for your message! We will get back to you soon.')
    
    // Reset form
    setContactForm({
      name: '',
      email: '',
      mobile: '',
      message: ''
    })
    setFormErrors({})
  }

  const renderNavigation = () => (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Job-Bridge</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About Us
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
          {isAuthenticated ? (
            <button 
              className="nav-btn sign-in-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button 
              className="nav-btn sign-in-btn"
              onClick={() => setCurrentPage('auth')}
            >
              Sign In
            </button>
          )}
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Job-Bridge</h1>
          <p>Your Personal Job Discovery Platform</p>
          <p className="hero-subtitle">Find job opportunities across multiple platforms tailored to your profile</p>
          
          <div className="hero-actions">
            <button 
              className="hero-btn primary"
              onClick={() => setCurrentPage('auth')}
            >
              Get Started
            </button>
            <button 
              className="hero-btn secondary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Job-Bridge?</h2>
          <div className="value-proposition">
            <div className="feature-card">
              <h3>🔍 Smart Job Discovery</h3>
              <p>We scan multiple job platforms to find opportunities that match your skills and preferences</p>
            </div>
            <div className="feature-card">
              <h3>📝 Profile-Based Matching</h3>
              <p>Get personalized job recommendations based on your profile or resume</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Real-Time Updates</h3>
              <p>Stay updated with the latest job postings from various platforms in one place</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>About Job-Bridge</h2>
            <p>
              Job-Bridge is a revolutionary platform designed to simplify your job search process. 
              We understand that finding the right job opportunity can be overwhelming when you have 
              to search across multiple platforms.
            </p>
            <p>
              Our mission is to bridge the gap between job seekers and opportunities by aggregating 
              listings from various job platforms and providing personalized recommendations based on 
              your profile, skills, and preferences.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>10,000+</h3>
                <p>Job Opportunities</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Partner Platforms</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Have questions or need assistance? We'd love to hear from you!</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h4>📧 Email</h4>
                <p>support@job-bridge.com</p>
              </div>
              <div className="contact-item">
                <h4>📞 Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h4>📍 Address</h4>
                <p>123 Innovation Street<br />Tech City, TC 12345</p>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactFormChange}
                  placeholder="Enter your full name"
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactFormChange}
                  placeholder="Enter your email address"
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="contact-mobile"
                  name="mobile"
                  value={contactForm.mobile}
                  onChange={handleContactFormChange}
                  placeholder="Enter your mobile number (optional)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactFormChange}
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  className={formErrors.message ? 'error' : ''}
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )

  return (
    <div className="App">
      {currentPage === 'auth' ? (
        <AuthPage 
          onBackToHome={() => setCurrentPage('home')} 
          onLogin={handleLogin}
        />
      ) : currentPage === 'dashboard' ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <>
          {renderNavigation()}
          <main className="main-content">
            {renderHomePage()}
          </main>
          <footer className="app-footer">
            <div className="container">
              <p>&copy; 2025 Job-Bridge. Aggregating opportunities from across the web.</p>
              <div className="footer-links">
                <button onClick={() => scrollToSection('about')}>About</button>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
                <button onClick={() => setCurrentPage('auth')}>Sign In</button>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

export default App
