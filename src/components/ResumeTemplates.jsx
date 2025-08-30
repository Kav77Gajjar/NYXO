import { useState } from 'react'
import './ResumeTemplates.css'

function ResumeTemplates({ onNavigateBack }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  // Sample resume templates data with SVG preview patterns
  const templates = [
    {
      id: 'template1',
      name: 'Professional',
      description: 'Clean and minimalist design for corporate roles',
      color: '#4A6FDC',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="40" fill="#4A6FDC" />
          <rect y="45" width="60" height="60" fill="#4A6FDC20" />
          <rect x="70" y="50" width="120" height="10" fill="#4A6FDC40" />
          <rect x="70" y="70" width="80" height="6" fill="#4A6FDC30" />
          <rect x="70" y="85" width="100" height="6" fill="#4A6FDC30" />
          <rect x="10" y="120" width="180" height="1" fill="#4A6FDC40" />
          <rect x="10" y="135" width="80" height="8" fill="#4A6FDC40" />
          <rect x="10" y="150" width="180" height="6" fill="#4A6FDC20" />
          <rect x="10" y="165" width="180" height="6" fill="#4A6FDC20" />
          <rect x="10" y="180" width="180" height="6" fill="#4A6FDC20" />
          <rect x="10" y="205" width="80" height="8" fill="#4A6FDC40" />
          <rect x="10" y="220" width="180" height="6" fill="#4A6FDC20" />
          <rect x="10" y="235" width="180" height="6" fill="#4A6FDC20" />
          <rect x="10" y="250" width="180" height="6" fill="#4A6FDC20" />
        </svg>
      )
    },
    {
      id: 'template2',
      name: 'Creative',
      description: 'Bold layout for design and creative positions',
      color: '#FF7B54',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="280" fill="#FF7B5420" />
          <rect x="10" y="20" width="50" height="50" rx="25" fill="#FF7B54" />
          <rect x="85" y="20" width="105" height="15" fill="#FF7B5440" />
          <rect x="85" y="45" width="75" height="10" fill="#FF7B5430" />
          <rect x="85" y="65" width="95" height="8" fill="#FF7B5420" />
          <rect x="10" y="90" width="50" height="12" fill="#FF7B5480" />
          <rect x="85" y="100" width="105" height="1" fill="#FF7B5440" />
          <rect x="85" y="110" width="105" height="6" fill="#FF7B5420" />
          <rect x="85" y="125" width="105" height="6" fill="#FF7B5420" />
          <rect x="85" y="140" width="105" height="6" fill="#FF7B5420" />
          <rect x="10" y="160" width="50" height="12" fill="#FF7B5480" />
          <rect x="85" y="170" width="105" height="1" fill="#FF7B5440" />
          <rect x="85" y="180" width="105" height="6" fill="#FF7B5420" />
          <rect x="85" y="195" width="105" height="6" fill="#FF7B5420" />
          <rect x="85" y="210" width="105" height="6" fill="#FF7B5420" />
        </svg>
      )
    },
    {
      id: 'template3',
      name: 'Academic',
      description: 'Structured format for research and education roles',
      color: '#6E44FF',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="50" fill="#6E44FF" />
          <rect x="70" y="15" width="120" height="20" fill="white" fillOpacity="0.3" />
          <rect x="10" y="60" width="180" height="1" fill="#6E44FF80" />
          <rect x="10" y="70" width="100" height="12" fill="#6E44FF50" />
          <rect x="10" y="90" width="180" height="6" fill="#6E44FF20" />
          <rect x="10" y="105" width="180" height="6" fill="#6E44FF20" />
          <rect x="10" y="120" width="180" height="6" fill="#6E44FF20" />
          <rect x="10" y="140" width="180" height="1" fill="#6E44FF80" />
          <rect x="10" y="150" width="100" height="12" fill="#6E44FF50" />
          <rect x="10" y="170" width="180" height="6" fill="#6E44FF20" />
          <rect x="10" y="185" width="180" height="6" fill="#6E44FF20" />
          <rect x="10" y="200" width="180" height="6" fill="#6E44FF20" />
          <rect x="10" y="220" width="180" height="1" fill="#6E44FF80" />
          <rect x="10" y="230" width="100" height="12" fill="#6E44FF50" />
          <rect x="10" y="250" width="180" height="6" fill="#6E44FF20" />
        </svg>
      )
    },
    {
      id: 'template4',
      name: 'Technical',
      description: 'Optimized for IT and engineering positions',
      color: '#2AB3A6',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="60" fill="#2AB3A6" />
          <circle cx="40" cy="30" r="20" fill="white" fillOpacity="0.2" />
          <rect x="70" y="20" width="120" height="10" fill="white" fillOpacity="0.3" />
          <rect x="70" y="40" width="80" height="6" fill="white" fillOpacity="0.2" />
          <rect x="10" y="70" width="180" height="40" fill="#2AB3A610" />
          <rect x="20" y="80" width="80" height="8" fill="#2AB3A650" />
          <rect x="20" y="95" width="160" height="5" fill="#2AB3A630" />
          <rect x="10" y="120" width="180" height="40" fill="#2AB3A610" />
          <rect x="20" y="130" width="80" height="8" fill="#2AB3A650" />
          <rect x="20" y="145" width="160" height="5" fill="#2AB3A630" />
          <rect x="10" y="170" width="180" height="40" fill="#2AB3A610" />
          <rect x="20" y="180" width="80" height="8" fill="#2AB3A650" />
          <rect x="20" y="195" width="160" height="5" fill="#2AB3A630" />
          <rect x="10" y="220" width="180" height="40" fill="#2AB3A610" />
          <rect x="20" y="230" width="80" height="8" fill="#2AB3A650" />
          <rect x="20" y="245" width="160" height="5" fill="#2AB3A630" />
        </svg>
      )
    },
    {
      id: 'template5',
      name: 'Executive',
      description: 'Sophisticated design for leadership positions',
      color: '#345995',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="280" fill="#f8f8f8" />
          <rect width="60" height="280" fill="#345995" />
          <rect x="70" y="30" width="120" height="15" fill="#34599550" />
          <rect x="70" y="55" width="80" height="8" fill="#34599540" />
          <circle cx="30" cy="30" r="20" fill="white" fillOpacity="0.2" />
          <rect x="15" y="70" width="30" height="8" fill="white" fillOpacity="0.3" />
          <rect x="70" y="85" width="120" height="1" fill="#34599530" />
          <rect x="70" y="95" width="120" height="8" fill="#34599550" />
          <rect x="70" y="110" width="120" height="6" fill="#34599520" />
          <rect x="70" y="125" width="120" height="6" fill="#34599520" />
          <rect x="15" y="140" width="30" height="8" fill="white" fillOpacity="0.3" />
          <rect x="70" y="155" width="120" height="8" fill="#34599550" />
          <rect x="70" y="170" width="120" height="6" fill="#34599520" />
          <rect x="70" y="185" width="120" height="6" fill="#34599520" />
          <rect x="15" y="210" width="30" height="8" fill="white" fillOpacity="0.3" />
          <rect x="70" y="220" width="120" height="8" fill="#34599550" />
          <rect x="70" y="235" width="120" height="6" fill="#34599520" />
          <rect x="70" y="250" width="120" height="6" fill="#34599520" />
        </svg>
      )
    },
    {
      id: 'template6',
      name: 'Modern',
      description: 'Contemporary layout with clean typography',
      color: '#FB4D3D',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="280" fill="#ffffff" />
          <rect width="200" height="10" fill="#FB4D3D" />
          <rect x="10" y="30" width="50" height="50" rx="4" fill="#FB4D3D20" />
          <rect x="70" y="30" width="120" height="15" fill="#FB4D3D60" />
          <rect x="70" y="55" width="80" height="8" fill="#FB4D3D40" />
          <rect x="10" y="100" width="50" height="10" fill="#FB4D3D" />
          <rect x="10" y="120" width="180" height="6" fill="#FB4D3D20" />
          <rect x="10" y="135" width="180" height="6" fill="#FB4D3D20" />
          <rect x="10" y="150" width="120" height="6" fill="#FB4D3D20" />
          <rect x="10" y="175" width="50" height="10" fill="#FB4D3D" />
          <rect x="10" y="195" width="180" height="6" fill="#FB4D3D20" />
          <rect x="10" y="210" width="180" height="6" fill="#FB4D3D20" />
          <rect x="10" y="225" width="120" height="6" fill="#FB4D3D20" />
          <rect x="10" y="250" width="50" height="10" fill="#FB4D3D" />
        </svg>
      )
    },
    {
      id: 'template7',
      name: 'Simple',
      description: 'Straightforward and effective for all positions',
      color: '#03CEA4',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="280" fill="#ffffff" />
          <rect x="10" y="20" width="180" height="20" fill="#03CEA430" />
          <rect x="10" y="50" width="120" height="10" fill="#03CEA460" />
          <rect x="10" y="70" width="60" height="6" fill="#03CEA440" />
          <rect x="10" y="85" width="180" height="1" fill="#03CEA450" />
          <rect x="10" y="95" width="80" height="8" fill="#03CEA480" />
          <rect x="10" y="110" width="180" height="6" fill="#03CEA420" />
          <rect x="10" y="125" width="180" height="6" fill="#03CEA420" />
          <rect x="10" y="140" width="180" height="6" fill="#03CEA420" />
          <rect x="10" y="165" width="80" height="8" fill="#03CEA480" />
          <rect x="10" y="180" width="180" height="6" fill="#03CEA420" />
          <rect x="10" y="195" width="180" height="6" fill="#03CEA420" />
          <rect x="10" y="210" width="180" height="6" fill="#03CEA420" />
          <rect x="10" y="235" width="80" height="8" fill="#03CEA480" />
          <rect x="10" y="250" width="180" height="6" fill="#03CEA420" />
        </svg>
      )
    },
    {
      id: 'template8',
      name: 'Entry-Level',
      description: 'Perfect for graduates and first-time job seekers',
      color: '#EF476F',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="280" fill="#ffffff" />
          <rect x="10" y="20" width="180" height="40" fill="#EF476F10" />
          <rect x="20" y="30" width="120" height="10" fill="#EF476F50" />
          <rect x="20" y="45" width="80" height="6" fill="#EF476F30" />
          <rect x="10" y="70" width="180" height="1" fill="#EF476F30" />
          <rect x="10" y="80" width="60" height="10" fill="#EF476F" />
          <rect x="10" y="100" width="180" height="6" fill="#EF476F20" />
          <rect x="10" y="115" width="180" height="6" fill="#EF476F20" />
          <rect x="10" y="130" width="180" height="6" fill="#EF476F20" />
          <rect x="10" y="145" width="180" height="6" fill="#EF476F20" />
          <rect x="10" y="170" width="60" height="10" fill="#EF476F" />
          <rect x="10" y="190" width="180" height="6" fill="#EF476F20" />
          <rect x="10" y="205" width="180" height="6" fill="#EF476F20" />
          <rect x="10" y="220" width="180" height="6" fill="#EF476F20" />
          <rect x="10" y="235" width="180" height="6" fill="#EF476F20" />
        </svg>
      )
    },
    {
      id: 'template9',
      name: 'Chronological',
      description: 'Timeline-based layout focusing on work history',
      color: '#118AB2',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="280" fill="#ffffff" />
          <rect x="10" y="20" width="180" height="30" fill="#118AB220" />
          <rect x="20" y="30" width="100" height="10" fill="#118AB260" />
          <line x1="30" y1="70" x2="30" y2="250" stroke="#118AB2" strokeWidth="2" />
          <circle cx="30" cy="90" r="6" fill="#118AB2" />
          <rect x="45" y="80" width="60" height="8" fill="#118AB280" />
          <rect x="45" y="95" width="40" height="6" fill="#118AB240" />
          <rect x="45" y="110" width="135" height="6" fill="#118AB220" />
          <rect x="45" y="125" width="135" height="6" fill="#118AB220" />
          <circle cx="30" cy="150" r="6" fill="#118AB2" />
          <rect x="45" y="140" width="60" height="8" fill="#118AB280" />
          <rect x="45" y="155" width="40" height="6" fill="#118AB240" />
          <rect x="45" y="170" width="135" height="6" fill="#118AB220" />
          <rect x="45" y="185" width="135" height="6" fill="#118AB220" />
          <circle cx="30" cy="210" r="6" fill="#118AB2" />
          <rect x="45" y="200" width="60" height="8" fill="#118AB280" />
          <rect x="45" y="215" width="40" height="6" fill="#118AB240" />
          <rect x="45" y="230" width="135" height="6" fill="#118AB220" />
          <rect x="45" y="245" width="135" height="6" fill="#118AB220" />
        </svg>
      )
    },
    {
      id: 'template10',
      name: 'Skills-Based',
      description: 'Emphasizes competencies over work history',
      color: '#FFD166',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="280" fill="#ffffff" />
          <rect x="10" y="20" width="180" height="40" fill="#FFD16610" />
          <rect x="20" y="30" width="120" height="10" fill="#FFD16680" />
          <rect x="20" y="45" width="80" height="6" fill="#FFD16660" />
          <rect x="10" y="80" width="80" height="8" fill="#FFD166" />
          <rect x="10" y="95" width="180" height="6" fill="#FFD16640" rx="3" />
          <rect x="10" y="95" width="150" height="6" fill="#FFD166" rx="3" />
          <rect x="10" y="110" width="180" height="6" fill="#FFD16640" rx="3" />
          <rect x="10" y="110" width="120" height="6" fill="#FFD166" rx="3" />
          <rect x="10" y="125" width="180" height="6" fill="#FFD16640" rx="3" />
          <rect x="10" y="125" width="160" height="6" fill="#FFD166" rx="3" />
          <rect x="10" y="140" width="180" height="6" fill="#FFD16640" rx="3" />
          <rect x="10" y="140" width="90" height="6" fill="#FFD166" rx="3" />
          <rect x="10" y="170" width="80" height="8" fill="#FFD166" />
          <rect x="10" y="185" width="180" height="6" fill="#FFD16620" />
          <rect x="10" y="200" width="180" height="6" fill="#FFD16620" />
          <rect x="10" y="230" width="80" height="8" fill="#FFD166" />
          <rect x="10" y="245" width="180" height="6" fill="#FFD16620" />
          <rect x="10" y="260" width="180" height="6" fill="#FFD16620" />
        </svg>
      )
    },
    {
      id: 'template11',
      name: 'Combination',
      description: 'Balances skills and experience effectively',
      color: '#073B4C',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="280" fill="#ffffff" />
          <rect width="200" height="60" fill="#073B4C" />
          <circle cx="40" cy="30" r="20" fill="white" fillOpacity="0.2" />
          <rect x="70" y="20" width="120" height="10" fill="white" fillOpacity="0.3" />
          <rect x="70" y="35" width="80" height="6" fill="white" fillOpacity="0.2" />
          <rect x="10" y="70" width="85" height="100" fill="#073B4C10" />
          <rect x="20" y="80" width="65" height="8" fill="#073B4C50" />
          <rect x="20" y="95" width="65" height="6" fill="#073B4C30" />
          <rect x="20" y="110" width="65" height="6" fill="#073B4C30" />
          <rect x="20" y="125" width="65" height="6" fill="#073B4C30" />
          <rect x="20" y="140" width="65" height="6" fill="#073B4C30" />
          <rect x="105" y="80" width="85" height="8" fill="#073B4C50" />
          <rect x="105" y="95" width="85" height="6" fill="#073B4C30" />
          <rect x="105" y="110" width="85" height="6" fill="#073B4C30" />
          <rect x="105" y="125" width="85" height="6" fill="#073B4C30" />
          <rect x="10" y="180" width="180" height="1" fill="#073B4C30" />
          <rect x="10" y="190" width="80" height="8" fill="#073B4C50" />
          <rect x="10" y="205" width="180" height="6" fill="#073B4C30" />
          <rect x="10" y="220" width="180" height="6" fill="#073B4C30" />
          <rect x="10" y="235" width="180" height="6" fill="#073B4C30" />
          <rect x="10" y="250" width="180" height="6" fill="#073B4C30" />
        </svg>
      )
    },
    {
      id: 'template12',
      name: 'ATS-Optimized',
      description: 'Designed to pass applicant tracking systems',
      color: '#06D6A0',
      previewContent: (
        <svg width="100%" height="100%" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="280" fill="#ffffff" />
          <rect x="10" y="20" width="180" height="15" fill="#06D6A080" />
          <rect x="10" y="45" width="120" height="10" fill="#06D6A060" />
          <rect x="10" y="65" width="180" height="2" fill="#06D6A0" />
          <rect x="10" y="80" width="80" height="8" fill="#06D6A0" />
          <rect x="10" y="95" width="180" height="6" fill="#06D6A020" />
          <rect x="10" y="110" width="180" height="6" fill="#06D6A020" />
          <rect x="10" y="125" width="180" height="6" fill="#06D6A020" />
          <rect x="10" y="140" width="180" height="6" fill="#06D6A020" />
          <rect x="10" y="165" width="80" height="8" fill="#06D6A0" />
          <rect x="10" y="180" width="180" height="6" fill="#06D6A020" />
          <rect x="10" y="195" width="180" height="6" fill="#06D6A020" />
          <rect x="10" y="210" width="180" height="6" fill="#06D6A020" />
          <rect x="10" y="225" width="180" height="6" fill="#06D6A020" />
          <rect x="10" y="250" width="180" height="15" fill="#06D6A040" />
        </svg>
      )
    }
  ]

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template)
    // In a real app, this would navigate to the template editor
    // with the selected template
    console.log(`Selected template: ${template.name}`)
  }

  return (
    <div className="resume-templates">
      {/* Top bar with Back button */}
      <div className="top-bar">
        <button
          className="back-btn"
          onClick={onNavigateBack || (() => window.history.back())}
          aria-label="Go back"
          title="Go back"
        >
          ← Back to Tools
        </button>
        <h1>Resume Templates</h1>
      </div>

      <div className="templates-header">
        <h1>Choose a Resume Template</h1>
        <p>Select from our collection of professional, ATS-friendly templates to get started</p>
      </div>

      <div className="templates-grid">
        {templates.map(template => (
          <div 
            key={template.id}
            className="template-card"
            onClick={() => handleSelectTemplate(template)}
            style={{ borderTopColor: template.color }}
          >
            <div 
              className="template-preview"
            >
              {template.previewContent}
            </div>
            <div className="template-info">
              <h3>{template.name}</h3>
              <p>{template.description}</p>
              <button 
                className="use-template-btn" 
                style={{ backgroundColor: template.color }}
              >
                Use This Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResumeTemplates
