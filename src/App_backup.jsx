import { useState } from 'react'
import './App.css'
import AuthPage from './components/AuthPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [profileMethod, setProfileMethod] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})

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
          <button 
            className="nav-btn sign-in-btn"
            onClick={() => setCurrentPage('auth')}
          >
            Sign In
          </button>
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

  const renderManualForm = () => (
    <section className="form-section">
      <div className="form-header">
        <h2>Create Your Profile</h2>
        <p>Fill out the form below to help us find the best job matches for you</p>
      </div>
      
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input type="text" id="fullName" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" />
        </div>
        
        <div className="form-group">
          <label htmlFor="jobTitle">Desired Job Title *</label>
          <input type="text" id="jobTitle" placeholder="e.g., Software Developer, Marketing Manager" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="skills">Key Skills *</label>
          <textarea id="skills" placeholder="List your key skills separated by commas" required></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="experience">Years of Experience</label>
          <select id="experience">
            <option value="">Select experience level</option>
            <option value="0-1">0-1 years (Entry Level)</option>
            <option value="2-5">2-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="10+">10+ years (Senior Level)</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Preferred Location</label>
          <input type="text" id="location" placeholder="City, State or Remote" />
        </div>
        
        <div className="form-group">
          <label htmlFor="salary">Expected Salary Range</label>
          <input type="text" id="salary" placeholder="e.g., $50,000 - $70,000" />
        </div>
        
        <button type="submit" className="submit-btn">Find My Jobs</button>
      </form>
    </section>
  )

  const renderResumeUpload = () => (
    <section className="upload-section">
      <div className="form-header">
        <h2>Upload Your Resume</h2>
        <p>Upload your resume and we'll automatically extract your information to find matching jobs</p>
      </div>
      
      <div className="upload-area">
        <div className="upload-box">
          <div className="upload-icon">📄</div>
          <h3>Drag & Drop Your Resume</h3>
          <p>or click to browse files</p>
          <input type="file" accept=".pdf,.doc,.docx" className="file-input" />
          <div className="file-info">
            <small>Supported formats: PDF, DOC, DOCX (Max 5MB)</small>
          </div>
        </div>
        
        <div className="upload-benefits">
          <h4>What we'll extract from your resume:</h4>
          <ul>
            <li>Contact information</li>
            <li>Work experience and job titles</li>
            <li>Skills and technologies</li>
            <li>Education background</li>
            <li>Preferred job preferences</li>
          </ul>
        </div>
        
        <button className="process-btn" disabled>
          🔍 Process Resume & Find Jobs
        </button>
      </div>
    </section>
  )

  const renderManualForm = () => (
    <section className="form-section">
      <div className="form-header">
        <button className="back-btn" onClick={() => setCurrentPage('home')}>← Back</button>
        <h2>Create Your Profile</h2>
        <p>Fill out the form below to help us find the best job matches for you</p>
      </div>
      
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input type="text" id="fullName" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" />
        </div>
        
        <div className="form-group">
          <label htmlFor="jobTitle">Desired Job Title *</label>
          <input type="text" id="jobTitle" placeholder="e.g., Software Developer, Marketing Manager" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="skills">Key Skills *</label>
          <textarea id="skills" placeholder="List your key skills separated by commas" required></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="experience">Years of Experience</label>
          <select id="experience">
            <option value="">Select experience level</option>
            <option value="0-1">0-1 years (Entry Level)</option>
            <option value="2-5">2-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="10+">10+ years (Senior Level)</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Preferred Location</label>
          <input type="text" id="location" placeholder="City, State or Remote" />
        </div>
        
        <div className="form-group">
          <label htmlFor="salary">Expected Salary Range</label>
          <input type="text" id="salary" placeholder="e.g., $50,000 - $70,000" />
        </div>
        
        <button type="submit" className="submit-btn">Find My Jobs</button>
      </form>
    </section>
  )

  const renderResumeUpload = () => (
    <section className="upload-section">
      <div className="form-header">
        <button className="back-btn" onClick={() => setCurrentPage('home')}>← Back</button>
        <h2>Upload Your Resume</h2>
        <p>Upload your resume and we'll automatically extract your information to find matching jobs</p>
      </div>
      
      <div className="upload-area">
        <div className="upload-box">
          <div className="upload-icon">📄</div>
          <h3>Drag & Drop Your Resume</h3>
          <p>or click to browse files</p>
          <input type="file" accept=".pdf,.doc,.docx" className="file-input" />
          <div className="file-info">
            <small>Supported formats: PDF, DOC, DOCX (Max 5MB)</small>
          </div>
        </div>
        
        <div className="upload-benefits">
          <h4>What we'll extract from your resume:</h4>
          <ul>
            <li>Contact information</li>
            <li>Work experience and job titles</li>
            <li>Skills and technologies</li>
            <li>Education background</li>
            <li>Preferred job preferences</li>
          </ul>
        </div>
        
        <button className="process-btn" disabled>
          🔍 Process Resume & Find Jobs
        </button>
      </div>
    </section>
  )

  return (
    <div className="App">
      {currentPage === 'auth' ? (
        <AuthPage onBackToHome={() => setCurrentPage('home')} />
      ) : currentPage === 'manual-form' ? (
        <>
          <header className="app-header">
            <button className="back-btn" onClick={() => setCurrentPage('home')}>← Back</button>
            <h1>Job-Bridge</h1>
            <p>Your Personal Job Discovery Platform</p>
          </header>
          <main className="main-content">
            {renderManualForm()}
          </main>
        </>
      ) : currentPage === 'resume-upload' ? (
        <>
          <header className="app-header">
            <button className="back-btn" onClick={() => setCurrentPage('home')}>← Back</button>
            <h1>Job-Bridge</h1>
            <p>Your Personal Job Discovery Platform</p>
          </header>
          <main className="main-content">
            {renderResumeUpload()}
          </main>
        </>
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
