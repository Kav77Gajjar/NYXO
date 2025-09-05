import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Sitemap from './components/Sitemap'
import { TranslationProvider } from './contexts/TranslationContext'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [userEmail, setUserEmail] = useState('demo@example.com')

  const handleLogout = () => {
    setCurrentPage('dashboard')
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  return (
    <TranslationProvider>
      <div className="App">
        {currentPage === 'dashboard' ? (
          <Dashboard onLogout={handleLogout} userEmail={userEmail} onNavigate={handleNavigate} />
        ) : currentPage === 'sitemap' ? (
          <Sitemap onNavigate={handleNavigate} />
        ) : (
          <Dashboard onLogout={handleLogout} userEmail={userEmail} onNavigate={handleNavigate} />
        )}
        <Footer onNavigate={handleNavigate} />
      </div>
    </TranslationProvider>
  )
}

export default App
