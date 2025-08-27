import './Toolkit.css'

function Toolkit() {
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

  return (
    <div className="toolkit">
      <div className="toolkit-header">
        <h1>🔧 Career Toolkit</h1>
        <p>Professional tools to accelerate your job search and career growth</p>
      </div>

      <div className="toolkit-cards-container">
        <div className="tools-grid">
          {tools.map(tool => (
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
  )
}

export default Toolkit
