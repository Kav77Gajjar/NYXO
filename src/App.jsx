import { useState } from 'react'
import './App.css'
// import AuthPage from './components/AuthPage' // Commented out - authentication disabled
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Sitemap from './components/Sitemap'
import { TranslationProvider } from './contexts/TranslationContext'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard') // Skip auth, go directly to dashboard
  // const [isAuthenticated, setIsAuthenticated] = useState(false) // Commented out authentication
  // const [userEmail, setUserEmail] = useState('') // Commented out user email
  const [isAuthenticated, setIsAuthenticated] = useState(true) // Set as authenticated by default
  const [userEmail, setUserEmail] = useState('demo@example.com') // Default demo email

  // Commented out authentication handlers - no longer needed
  /*
  const handleLogin = (email) => {
    setIsAuthenticated(true)
    setUserEmail(email)
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserEmail('')
    setCurrentPage('auth')
  }
  */
  
  // Simplified logout handler - just navigate back to dashboard
  const handleLogout = () => {
    setCurrentPage('dashboard')
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  // Commented out authentication check - no longer needed
  /*
  // Default to dashboard for authenticated users on initial load
  if (isAuthenticated && currentPage === 'auth') {
    setCurrentPage('dashboard')
  }
  */

  return (
    <TranslationProvider>
      <div className="App">
        {/* Authentication page commented out - direct access to dashboard */}
        {/*
        {currentPage === 'auth' ? (
          <AuthPage 
            onBackToHome={() => setCurrentPage('auth')} 
            onLogin={handleLogin}
          />
        ) : currentPage === 'dashboard' ? (
        */}
        {currentPage === 'dashboard' ? (
          <Dashboard onLogout={handleLogout} userEmail={userEmail} onNavigate={handleNavigate} />
        ) : currentPage === 'sitemap' ? (
          <Sitemap onNavigate={handleNavigate} />
        ) : (
          // Default fallback to dashboard if no page matches
          <Dashboard onLogout={handleLogout} userEmail={userEmail} onNavigate={handleNavigate} />
        )}
        {/* Show footer on all pages since auth is disabled */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </TranslationProvider>
  )
}

export default App
