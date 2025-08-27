import { useState } from 'react'
import './AuthPage.css'

function AuthPage({ onBackToHome, onLogin }) {
  const [isSignUp, setIsSignUp] = useState(true) // Default to sign-up form
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateSignUp = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    return newErrors
  }

  const validateLogin = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = isSignUp ? validateSignUp() : validateLogin()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Handle successful form submission
    if (isSignUp) {
      console.log('Sign up data:', formData)
      alert('Sign up successful! Welcome to Job-Bridge!')
      // Call onLogin to redirect to dashboard
      onLogin()
    } else {
      console.log('Login data:', { email: formData.email, password: formData.password })
      alert('Login successful! Welcome back!')
      // Call onLogin to redirect to dashboard
      onLogin()
    }
    
    // Reset form
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    setErrors({})
  }

  const switchForm = (toSignUp) => {
    setIsSignUp(toSignUp)
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    setErrors({})
  }

  const handleForgotPassword = () => {
    if (!formData.email.trim()) {
      alert('Please enter your email address first')
      return
    }
    alert(`Password reset link has been sent to ${formData.email}`)
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <button className="back-btn" onClick={onBackToHome}>
            ← Back to Home
          </button>
          <h1>Welcome to Job-Bridge</h1>
          <p>Join thousands of job seekers finding their dream careers</p>
        </div>

        <div className="auth-form-container">
          {/* Form Toggle Buttons */}
          <div className="form-toggle">
            <button 
              className={`toggle-btn ${isSignUp ? 'active' : ''}`}
              onClick={() => switchForm(true)}
            >
              Sign Up
            </button>
            <button 
              className={`toggle-btn ${!isSignUp ? 'active' : ''}`}
              onClick={() => switchForm(false)}
            >
              Login
            </button>
          </div>

          {/* Form */}
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h2>{isSignUp ? 'Create Your Account' : 'Welcome Back'}</h2>
              <p>
                {isSignUp 
                  ? 'Fill in your details to get started with job hunting' 
                  : 'Sign in to continue your job search journey'
                }
              </p>
            </div>

            {/* Sign Up Fields */}
            {isSignUp && (
              <>
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="username">
                    Username <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Choose a unique username"
                    className={errors.username ? 'error' : ''}
                  />
                  {errors.username && <span className="error-message">{errors.username}</span>}
                </div>
              </>
            )}

            {/* Email Field (both forms) */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            {/* Password Field (both forms) */}
            <div className="form-group">
              <label htmlFor="password">
                Password <span className="required">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            {/* Confirm Password (Sign Up only) */}
            {isSignUp && (
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirm Password <span className="required">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className={errors.confirmPassword ? 'error' : ''}
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
            )}

            {/* Forgot Password Link (Login only) */}
            {!isSignUp && (
              <div className="forgot-password">
                <button 
                  type="button" 
                  className="forgot-link"
                  onClick={handleForgotPassword}
                >
                  Forgot your password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>

            {/* Additional Links */}
            <div className="form-footer">
              {isSignUp ? (
                <p>
                  Already have an account?{' '}
                  <button 
                    type="button" 
                    className="link-btn"
                    onClick={() => switchForm(false)}
                  >
                    Sign in here
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account?{' '}
                  <button 
                    type="button" 
                    className="link-btn"
                    onClick={() => switchForm(true)}
                  >
                    Sign up here
                  </button>
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Features Preview */}
        <div className="auth-features">
          <h3>What you'll get with Job-Bridge:</h3>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🔍</span>
              <span>Smart Job Discovery</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📝</span>
              <span>Profile-Based Matching</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Real-Time Updates</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span>Personalized Recommendations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
