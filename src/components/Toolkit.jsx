import { useState } from 'react'
import './Toolkit.css'

function Toolkit({ activeCategory = 'all', setActiveCategory, onNavigateBack }) {
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
    /*
    {
      id: 'skill-hub',
      name: 'Skill Hub',
      description: 'Assess, track, and improve your technical skills',
      icon: '🎯',
      category: 'Skills'
    },
    */
    /*
    {
      id: 'salary-calculator',
      name: 'Salary Calculator',
      description: 'Research market rates and negotiate better offers',
      icon: '💰',
      category: 'Research'
    }
    */
  ]

  const handleToolClick = (toolId) => {
    console.log(`Navigating to ${toolId}`)
    
    // Temporary navigation solution based on current app structure
    if (toolId === 'resume-builder') {
      // Since the app uses state-based navigation instead of React Router,
      // we'll use a custom event to notify parent components
      const event = new CustomEvent('navigate', { 
        detail: { 
          page: 'resume-templates'
        } 
      })
      window.dispatchEvent(event)
    } else {
      if (toolId === 'cover-letter') {
        const event = new CustomEvent('navigate', {
          detail: { page: 'cover-letter' }
        })
        window.dispatchEvent(event)
        return
      }
      // For other tools, we'll use the default behavior for now
      alert(`Navigating to ${toolId} page`)
    }
  }

  // Filter tools based on active category
  const filteredTools = currentActiveCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category.toLowerCase() === currentActiveCategory.toLowerCase())

  return (
    <div className="toolkit">
      {/* Main Content Area (sidebar removed) */}
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
