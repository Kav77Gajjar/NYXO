import { useState } from 'react'
import './AuthPage.css'

function AuthPage({ onBackToHome, onLogin }) {
  const [isSignUp, setIsSignUp] = useState(true) // Default to sign-up form
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
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
      newErrors.name = 'Full name is required'
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    return newErrors
  }

  const validateLogin = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
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
      alert('Account created successfully! Welcome to Job-Bridge!')
    } else {
      console.log('Login data:', { email: formData.email, password: formData.password })
      alert('Login successful! Welcome back!')
    }
    
    onLogin(formData.email)
    
    // Reset form
    setFormData({
      name: '',
      username: '',
      email: '',
      password: ''
    })
    setErrors({})
  }

  const switchToLogin = () => {
    setIsSignUp(false)
    setFormData({
      name: '',
      username: '',
      email: '',
      password: ''
    })
    setErrors({})
  }

  const switchToSignUp = () => {
    setIsSignUp(true)
    setFormData({
      name: '',
      username: '',
      email: '',
      password: ''
    })
    setErrors({})
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
          <p>{isSignUp ? 'Join Job-Bridge and start your career journey' : 'Sign in to continue your job search'}</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Sign Up Fields */}
          {isSignUp && (
            <>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
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
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Choose a username"
                  className={errors.username ? 'error' : ''}
                />
                {errors.username && <span className="error-message">{errors.username}</span>}
              </div>
            </>
          )}

          {/* Email Field (both forms) */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password Field (both forms) */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder={isSignUp ? "Create a password" : "Enter your password"}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <button type="submit" className="submit-btn">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>

          <div className="form-footer">
            {isSignUp ? (
              <p>
                Already have an account?{' '}
                <button 
                  type="button" 
                  className="link-btn"
                  onClick={switchToLogin}
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
                  onClick={switchToSignUp}
                >
                  Create one here
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthPage
