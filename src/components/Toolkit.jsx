import { useState } from 'react'
import './Toolkit.css'

function Toolkit({ activeCategory = 'all', setActiveCategory, onNavigateBack }) {
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
    }
  ]

  const handleToolClick = (toolId) => {
    console.log(`Navigating to ${toolId}`)
    
    if (toolId === 'resume-builder') {
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
      if (toolId === 'interview-prep') {
        const event = new CustomEvent('navigate', {
          detail: { page: 'error-page', featureName: 'Interview Preparation' }
        })
        window.dispatchEvent(event)
        return
      }
      alert(`Navigating to ${toolId} page`)
    }
  }

  const filteredTools = currentActiveCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category.toLowerCase() === currentActiveCategory.toLowerCase())

  return (
    <div className="toolkit">
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
