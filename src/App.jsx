import { useState } from 'react'
import './App.css'
import AuthPage from './components/AuthPage'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import { TranslationProvider } from './contexts/TranslationContext'

function App() {
  const [currentPage, setCurrentPage] = useState('auth')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState('')

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

  // If user is authenticated and not on dashboard, redirect to dashboard
  if (isAuthenticated && currentPage !== 'dashboard') {
    setCurrentPage('dashboard')
  }

  return (
    <TranslationProvider>
      <div className="App">
        <Settings />
        {currentPage === 'auth' ? (
          <AuthPage 
            onBackToHome={() => setCurrentPage('auth')} 
            onLogin={handleLogin}
          />
        ) : currentPage === 'dashboard' ? (
          <Dashboard onLogout={handleLogout} userEmail={userEmail} />
        ) : null}
      </div>
    </TranslationProvider>
  )
}

export default App
