import { useState } from 'react'
import './App.css'
import AuthPage from './components/AuthPage'
import Dashboard from './components/Dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('auth')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentPage('auth')
  }

  // If user is authenticated and not on dashboard, redirect to dashboard
  if (isAuthenticated && currentPage !== 'dashboard') {
    setCurrentPage('dashboard')
  }

  return (
    <div className="App">
      {currentPage === 'auth' ? (
        <AuthPage 
          onBackToHome={() => setCurrentPage('auth')} 
          onLogin={handleLogin}
        />
      ) : currentPage === 'dashboard' ? (
        <Dashboard onLogout={handleLogout} />
      ) : null}
    </div>
  )
}

export default App
