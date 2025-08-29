import { useState } from 'react'
import './Toolkit.css'

function Toolkit({ activeCategory = 'all', setActiveCategory }) {
  // Remove local state if props are provided  
  const [localActiveCategory, setLocalActiveCategory] = useState('all')
  const currentActiveCategory = activeCategory || localActiveCategory
  const currentSetActiveCategory = setActiveCategory || setLocalActiveCategory
  const tools = [
    {
      id: 'resume-builder',
      name: 'Resume Builder',
      description: 'Create ATS-friendly resumes with professional templates',
      icon: '📄',
      category: 'Documents'
    },
    {
      id: 'cover-letter',
      name: 'Cover Letter Generator',
      description: 'Generate personalized cover letters for specific jobs',
      icon: '✉️',
      category: 'Documents'
    },
    {
      id: 'interview-prep',
      name: 'Interview Preparation',
      description: 'Practice with AI-powered mock interviews and questions',
      icon: '🎤',
      category: 'Preparation'
    },
    {
      id: 'skill-hub',
      name: 'Skill Hub',
      description: 'Assess, track, and improve your technical skills',
      icon: '🎯',
      category: 'Skills'
    },
    {
      id: 'salary-calculator',
      name: 'Salary Calculator',
      description: 'Research market rates and negotiate better offers',
      icon: '💰',
      category: 'Research'
    }
  ]

  const handleToolClick = (toolId) => {
    // Navigate to specific tool page
    console.log(`Navigating to ${toolId}`)
    // In a real app, you would use React Router here
    // For now, we'll just log the navigation
    alert(`Navigating to ${toolId} page`)
  }

  // Filter tools based on active category
  const filteredTools = currentActiveCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category.toLowerCase() === currentActiveCategory.toLowerCase())

  return (
    <div className="toolkit">
      {/* Left Sidebar Navigation */}
      <div className="toolkit-sidebar">
        <div className="sidebar-header">
          <h2>🛠️ Toolkit</h2>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`sidebar-nav-item ${currentActiveCategory === 'all' ? 'active' : ''}`}
            onClick={() => currentSetActiveCategory('all')}
          >
            <span className="nav-icon">🔧</span>
            All Tools
          </button>
          <button 
            className={`sidebar-nav-item ${currentActiveCategory === 'documents' ? 'active' : ''}`}
            onClick={() => currentSetActiveCategory('documents')}
          >
            <span className="nav-icon">📄</span>
            Documents
          </button>
          <button 
            className={`sidebar-nav-item ${currentActiveCategory === 'preparation' ? 'active' : ''}`}
            onClick={() => currentSetActiveCategory('preparation')}
          >
            <span className="nav-icon">🎤</span>
            Preparation
          </button>
          <button 
            className={`sidebar-nav-item ${currentActiveCategory === 'skills' ? 'active' : ''}`}
            onClick={() => currentSetActiveCategory('skills')}
          >
            <span className="nav-icon">🎯</span>
            Skills
          </button>
          <button 
            className={`sidebar-nav-item ${currentActiveCategory === 'research' ? 'active' : ''}`}
            onClick={() => currentSetActiveCategory('research')}
          >
            <span className="nav-icon">💰</span>
            Research
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="toolkit-content">
        <div className="toolkit-cards-container">
          <div className="tools-grid">
            {filteredTools.map(tool => (
              <button
                key={tool.id}
                className="tool-card"
                onClick={() => handleToolClick(tool.id)}
              >
                <div className="tool-card-icon">{tool.icon}</div>
                <div className="tool-card-content">
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <span className="tool-category">{tool.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolkit
