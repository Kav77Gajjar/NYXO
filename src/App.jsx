import { useState } from 'react'
import './theme.css'
import './App.css'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Sitemap from './components/Sitemap'
import AuthPage from './components/AuthPage'
import { TranslationProvider } from './contexts/TranslationContext'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext'

function AppContent() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const { user, isAuthenticated, loading, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
    setCurrentPage('dashboard')
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="App">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  // Show authentication page if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="App">
        <AuthPage />
        <Footer onNavigate={handleNavigate} />
      </div>
    )
  }

  // Show main app content if authenticated
  return (
    <div className="App">
      {currentPage === 'dashboard' ? (
        <Dashboard 
          onLogout={handleLogout} 
          userEmail={user?.email || 'user@example.com'} 
          onNavigate={handleNavigate} 
        />
      ) : currentPage === 'sitemap' ? (
        <Sitemap onNavigate={handleNavigate} />
      ) : (
        <Dashboard 
          onLogout={handleLogout} 
          userEmail={user?.email || 'user@example.com'} 
          onNavigate={handleNavigate} 
        />
      )}
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

function App() {
  return (
    <TranslationProvider>
      <AuthProvider>
        <DataProvider>
          <AppContent />
        </DataProvider>
      </AuthProvider>
    </TranslationProvider>
  )
}

export default App
