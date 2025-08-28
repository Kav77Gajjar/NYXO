import { useState, useEffect } from 'react'
import './Settings.css'

function Settings() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('english')
  const [fontSize, setFontSize] = useState('medium')
  const [isEnabled, setIsEnabled] = useState(true)
  const [position, setPosition] = useState('bottom-left') // bottom-left, bottom-right, top-left, top-right

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    const savedLanguage = localStorage.getItem('language') || 'english'
    const savedFontSize = localStorage.getItem('fontSize') || 'medium'
    const savedIsEnabled = localStorage.getItem('settingsEnabled') !== 'false' // default true
    const savedPosition = localStorage.getItem('settingsPosition') || 'bottom-left'
    
    setTheme(savedTheme)
    setLanguage(savedLanguage)
    setFontSize(savedFontSize)
    setIsEnabled(savedIsEnabled)
    setPosition(savedPosition)
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', savedTheme)
    // Apply font size to document
    document.documentElement.setAttribute('data-font-size', savedFontSize)

    // Listen for settings toggle from Profile
    const handleSettingsToggle = (event) => {
      setIsEnabled(event.detail)
    }

    window.addEventListener('settingsToggle', handleSettingsToggle)
    return () => window.removeEventListener('settingsToggle', handleSettingsToggle)
  }, [])

  const toggleSettings = () => {
    setIsOpen(!isOpen)
  }

  const handleFontSizeChange = (newFontSize) => {
    setFontSize(newFontSize)
    localStorage.setItem('fontSize', newFontSize)
    document.documentElement.setAttribute('data-font-size', newFontSize)
  }

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition)
    localStorage.setItem('settingsPosition', newPosition)
  }

  const handleToggleSettings = (enabled) => {
    setIsEnabled(enabled)
    localStorage.setItem('settingsEnabled', enabled.toString())
    if (!enabled) {
      setIsOpen(false) // Close menu if disabling
    }
  }

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    // Trigger page refresh or language change event
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLanguage }))
  }

  const translations = {
    english: {
      settings: 'Settings',
      theme: 'Theme',
      language: 'Language',
      fontSize: 'Font Size',
      position: 'Button Position',
      enableSettings: 'Enable Settings Button',
      light: 'Light',
      dark: 'Dark',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      topLeft: 'Top Left',
      topRight: 'Top Right',
      bottomLeft: 'Bottom Left',
      bottomRight: 'Bottom Right',
      english: 'English',
      hindi: 'हिंदी',
      gujarati: 'ગુજરાતી'
    },
    hindi: {
      settings: 'सेटिंग्स',
      theme: 'थीम',
      language: 'भाषा',
      fontSize: 'फ़ॉन्ट साइज़',
      position: 'बटन स्थिति',
      enableSettings: 'सेटिंग्स बटन सक्षम करें',
      light: 'उजला',
      dark: 'अंधेरा',
      small: 'छोटा',
      medium: 'मध्यम',
      large: 'बड़ा',
      topLeft: 'ऊपर बाएं',
      topRight: 'ऊपर दाएं',
      bottomLeft: 'नीचे बाएं',
      bottomRight: 'नीचे दाएं',
      english: 'English',
      hindi: 'हिंदी',
      gujarati: 'ગુજરાતી'
    },
    gujarati: {
      settings: 'સેટિંગ્સ',
      theme: 'થીમ',
      language: 'ભાષા',
      fontSize: 'ફોન્ટ સાઇઝ',
      position: 'બટન સ્થિતિ',
      enableSettings: 'સેટિંગ્સ બટન સક્ષમ કરો',
      light: 'પ્રકાશ',
      dark: 'અંધકાર',
      small: 'નાનું',
      medium: 'મધ્યમ',
      large: 'મોટું',
      topLeft: 'ઉપર ડાબે',
      topRight: 'ઉપર જમણે',
      bottomLeft: 'નીચે ડાબે',
      bottomRight: 'નીચે જમણે',
      english: 'English',
      hindi: 'हिंदी',
      gujarati: 'ગુજરાતી'
    }
  }

  const t = translations[language] || translations.english

  // Don't render if disabled
  if (!isEnabled) {
    return null
  }

  return (
    <>
      {/* Settings Button */}
      <button 
        className={`settings-trigger ${position}`}
        onClick={toggleSettings}
        aria-label="Settings"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>

      {/* Settings Menu Overlay */}
      {isOpen && (
        <div className="settings-overlay" onClick={toggleSettings}>
          <div className="settings-menu" onClick={(e) => e.stopPropagation()}>
            <div className="settings-header">
              <h3>{t.settings}</h3>
              <button 
                className="settings-close"
                onClick={toggleSettings}
                aria-label="Close settings"
              >
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="settings-content">
              {/* Theme Selection */}
              <div className="setting-group">
                <label className="setting-label">{t.theme}</label>
                <div className="theme-toggle">
                  <button 
                    className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                    onClick={() => handleThemeChange('light')}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                    {t.light}
                  </button>
                  <button 
                    className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                    onClick={() => handleThemeChange('dark')}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    {t.dark}
                  </button>
                </div>
              </div>

              {/* Font Size Selection */}
              <div className="setting-group">
                <label className="setting-label">{t.fontSize}</label>
                <div className="font-size-selector">
                  <button 
                    className={`font-size-btn ${fontSize === 'small' ? 'active' : ''}`}
                    onClick={() => handleFontSizeChange('small')}
                  >
                    <span className="font-preview-small">Aa</span>
                    {t.small}
                  </button>
                  <button 
                    className={`font-size-btn ${fontSize === 'medium' ? 'active' : ''}`}
                    onClick={() => handleFontSizeChange('medium')}
                  >
                    <span className="font-preview-medium">Aa</span>
                    {t.medium}
                  </button>
                  <button 
                    className={`font-size-btn ${fontSize === 'large' ? 'active' : ''}`}
                    onClick={() => handleFontSizeChange('large')}
                  >
                    <span className="font-preview-large">Aa</span>
                    {t.large}
                  </button>
                </div>
              </div>

              {/* Position Selection */}
              <div className="setting-group">
                <label className="setting-label">{t.position}</label>
                <div className="position-selector">
                  <button 
                    className={`position-btn ${position === 'top-left' ? 'active' : ''}`}
                    onClick={() => handlePositionChange('top-left')}
                  >
                    <div className="position-preview">
                      <div className="position-dot top-left"></div>
                    </div>
                    {t.topLeft}
                  </button>
                  <button 
                    className={`position-btn ${position === 'top-right' ? 'active' : ''}`}
                    onClick={() => handlePositionChange('top-right')}
                  >
                    <div className="position-preview">
                      <div className="position-dot top-right"></div>
                    </div>
                    {t.topRight}
                  </button>
                  <button 
                    className={`position-btn ${position === 'bottom-left' ? 'active' : ''}`}
                    onClick={() => handlePositionChange('bottom-left')}
                  >
                    <div className="position-preview">
                      <div className="position-dot bottom-left"></div>
                    </div>
                    {t.bottomLeft}
                  </button>
                  <button 
                    className={`position-btn ${position === 'bottom-right' ? 'active' : ''}`}
                    onClick={() => handlePositionChange('bottom-right')}
                  >
                    <div className="position-preview">
                      <div className="position-dot bottom-right"></div>
                    </div>
                    {t.bottomRight}
                  </button>
                </div>
              </div>

              {/* Enable/Disable Settings */}
              <div className="setting-group">
                <label className="setting-label">{t.enableSettings}</label>
                <div className="toggle-container">
                  <button 
                    className={`toggle-btn ${isEnabled ? 'active' : ''}`}
                    onClick={() => handleToggleSettings(!isEnabled)}
                  >
                    <div className="toggle-switch">
                      <div className="toggle-slider"></div>
                    </div>
                    <span>{isEnabled ? 'Enabled' : 'Disabled'}</span>
                  </button>
                  <p className="toggle-note">
                    {isEnabled ? 'Settings button is visible' : 'You can re-enable this in your Profile'}
                  </p>
                </div>
              </div>

              {/* Language Selection */}
              <div className="setting-group">
                <label className="setting-label">{t.language}</label>
                <div className="language-selector">
                  <button 
                    className={`language-btn ${language === 'english' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('english')}
                  >
                    🇺🇸 {t.english}
                  </button>
                  <button 
                    className={`language-btn ${language === 'hindi' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('hindi')}
                  >
                    🇮🇳 {t.hindi}
                  </button>
                  <button 
                    className={`language-btn ${language === 'gujarati' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('gujarati')}
                  >
                    🇮🇳 {t.gujarati}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Export function to enable settings from Profile
export const enableSettings = () => {
  localStorage.setItem('settingsEnabled', 'true')
  // Trigger a page refresh or state update
  window.dispatchEvent(new CustomEvent('settingsToggle', { detail: true }))
}

export default Settings
