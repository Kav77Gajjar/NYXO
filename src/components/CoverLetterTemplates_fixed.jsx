import { useState, useEffect } from 'react'
import './CoverLetterTemplates.css'

export default function CoverLetterTemplates({ onNavigateBack }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [showPreview, setShowPreview] = useState(false)
  const [editableFields, setEditableFields] = useState({})
  
  // Get user data from both profile and cover letter form
  const getUserData = () => {
    try {
      // Get profile data
      const profileData = JSON.parse(localStorage.getItem('userProfileData')) || {}
      
      // Get cover letter form data
      const coverLetterData = JSON.parse(localStorage.getItem('coverLetterData')) || {}
      
      // Combine data with profile taking priority
      return {
        // Personal information from profile
        fullName: profileData.personalInfo?.fullName || '[Your Full Name]',
        email: profileData.personalInfo?.email || '[Your Email]',
        phone: profileData.personalInfo?.phone || '[Your Phone Number]',
        location: profileData.personalInfo?.location || '[Your Address, City, State ZIP]',
        linkedin: profileData.personalInfo?.linkedin || '[LinkedIn URL]',
        website: profileData.personalInfo?.website || '[Website URL]',
        
        // Education from profile (use latest/first education entry)
        degree: profileData.education?.[0]?.degree || coverLetterData.degree || 'BTech',
        school: profileData.education?.[0]?.school || '[University Name]',
        field: coverLetterData.field || 'Computer Science',
        
        // Experience from cover letter form and profile
        experience: coverLetterData.experience || '1-3',
        isStudent: coverLetterData.isStudent || false,
        
        // Work experience from profile
        workExperience: profileData.experience || [],
        
        // Skills from profile
        skills: profileData.skills || [],
        
        // Additional info
        achievements: profileData.achievements || [],
        
        // From cover letter form
        companyName: coverLetterData.companyName || '[Company Name]',
        positionTitle: coverLetterData.position || '[Position Title]',
        hiringManagerName: coverLetterData.hiringManager || 'Hiring Manager',
        companyAddress: '[Company Address]',
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        address: profileData.personalInfo?.location || '[Your Address, City, State ZIP]'
      }
    } catch (error) {
      console.error('Error getting user data:', error)
      return {
        fullName: '[Your Full Name]',
        email: '[Your Email]',
        phone: '[Your Phone Number]',
        address: '[Your Address, City, State ZIP]',
        degree: 'BTech',
        field: 'Computer Science',
        experience: '1-3',
        school: '[University Name]',
        companyName: '[Company Name]',
        positionTitle: '[Position Title]',
        hiringManagerName: 'Hiring Manager',
        companyAddress: '[Company Address]',
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }
    }
  }

  const generateCoverLetter = (templateId, customData = null) => {
    const userData = customData || getUserData();
    
    // Base structure that all templates share
    const baseStructure = {
      fullName: userData.fullName,
      address: userData.address,
      email: userData.email,
      phone: userData.phone,
      date: userData.date,
      hiringManagerName: userData.hiringManagerName,
      companyName: userData.companyName,
      companyAddress: userData.companyAddress,
      positionTitle: userData.positionTitle,
      companySpecificReason: 'your company\'s reputation for excellence',
      relevantSkills: 'problem-solving, teamwork, and communication',
      specificProjects: 'various challenging projects'
    }

    switch(templateId) {
      case 1: // Professional Standard
        return {
          ...baseStructure,
          title: 'Professional Standard Cover Letter',
          salutation: `Dear ${baseStructure.hiringManagerName},`,
          opening: `I am writing to express my strong interest in the ${baseStructure.positionTitle} position at ${baseStructure.companyName}. With my ${userData.degree} in ${userData.field} and ${getExperienceText(userData.experience)}, I am confident that I would be a valuable addition to your team.`,
          body1: `My academic background in ${userData.field} has provided me with a solid foundation in technical skills and problem-solving methodologies. ${getEducationContent(userData)} ${getExperienceSpecificContent(userData)}`,
          body2: `I am particularly drawn to ${baseStructure.companyName} because of ${baseStructure.companySpecificReason}. I am eager to contribute my skills in ${baseStructure.relevantSkills} to help your organization achieve its goals and continue its tradition of excellence.`,
          closing: `Thank you for considering my application. I would welcome the opportunity to discuss how my background and enthusiasm can contribute to your team. I look forward to hearing from you.`,
          signoff: 'Sincerely,\\n[Your Name]'
        }

      case 2: // Tech/Engineering Focus
        return {
          ...baseStructure,
          title: 'Technical Professional Cover Letter',
          salutation: `Dear ${baseStructure.hiringManagerName},`,
          opening: `I am excited to apply for the ${baseStructure.positionTitle} role at ${baseStructure.companyName}. As a ${userData.degree} graduate in ${userData.field} with ${getExperienceText(userData.experience)}, I am eager to contribute to your technical team.`,
          body1: `My technical education has equipped me with expertise in ${getMethodologies(userData)}. ${getProjectExperience(userData)} I have hands-on experience with ${baseStructure.relevantSkills} and am passionate about staying current with emerging technologies.`,
          body2: `${baseStructure.companyName}'s commitment to ${baseStructure.companySpecificReason} aligns perfectly with my career goals. I am particularly interested in contributing to ${baseStructure.specificProjects} and would bring fresh perspectives to your development team.`,
          closing: `I would appreciate the opportunity to discuss how my technical skills and passion for innovation can benefit ${baseStructure.companyName}. Thank you for your time and consideration.`,
          signoff: 'Best regards,\\n[Your Name]'
        }

      case 3: // Entry Level
        return {
          ...baseStructure,
          title: 'Entry Level Cover Letter',
          salutation: `Dear ${baseStructure.hiringManagerName},`,
          opening: `I am writing to apply for the ${baseStructure.positionTitle} position at ${baseStructure.companyName}. As a recent ${userData.degree} graduate in ${userData.field}, I am excited to begin my career with an organization known for ${baseStructure.companySpecificReason}.`,
          body1: `During my studies at ${userData.school}, I developed strong foundational skills in ${userData.field}. My coursework included comprehensive training in ${baseStructure.relevantSkills}, and I completed ${baseStructure.specificProjects} that demonstrate my ability to apply theoretical knowledge practically.`,
          body2: `I am particularly attracted to ${baseStructure.companyName} because of your reputation for fostering professional growth and innovation. I am eager to contribute my fresh perspective, strong work ethic, and enthusiasm for learning to your team.`,
          closing: `I would be thrilled to discuss how my educational background and passion for ${userData.field} can contribute to ${baseStructure.companyName}'s continued success. Thank you for considering my application.`,
          signoff: 'Respectfully,\\n[Your Name]'
        }

      case 4: // Career Change
        return {
          ...baseStructure,
          title: 'Career Change Cover Letter',
          salutation: `Dear ${baseStructure.hiringManagerName},`,
          opening: `I am writing to express my strong interest in transitioning to the ${baseStructure.positionTitle} role at ${baseStructure.companyName}. While my background in ${userData.field} may seem unconventional, I believe my unique perspective and transferable skills make me an ideal candidate for this position.`,
          body1: `My ${userData.degree} in ${userData.field} has equipped me with valuable skills that translate directly to this role: analytical thinking, problem-solving, attention to detail, and the ability to learn complex systems quickly. ${getTransferableSkills(userData)} These experiences have prepared me to bring a fresh perspective to your team.`,
          body2: `What drives my career transition is my passion for growth and new challenges. I have been actively preparing for this shift by ${baseStructure.specificProjects}, demonstrating my commitment to this new direction. ${baseStructure.companyName}'s reputation for ${baseStructure.companySpecificReason} aligns perfectly with my career goals and values.`,
          closing: `I am excited about the opportunity to bring my unique background and fresh enthusiasm to ${baseStructure.companyName}. I would appreciate the chance to discuss how my transferable skills and passion for growth can benefit your organization.`,
          signoff: 'Enthusiastically yours,\\n[Your Name]'
        }

      case 5: // Executive Level
        return {
          ...baseStructure,
          title: 'Executive Level Cover Letter',
          salutation: `Dear ${baseStructure.hiringManagerName},`,
          opening: `I am pleased to submit my application for the ${baseStructure.positionTitle} at ${baseStructure.companyName}. With ${getExperienceText(userData.experience)} of progressive leadership experience in ${userData.field}, I am confident in my ability to drive strategic initiatives and deliver exceptional results for your organization.`,
          body1: `Throughout my career, I have consistently demonstrated the ability to lead high-performing teams and deliver measurable results. My expertise spans strategic planning, team leadership, and operational excellence. Key accomplishments include:\\n• ${baseStructure.specificProjects}\\n• Successfully managed cross-functional teams\\n• Implemented innovative solutions that improved efficiency\\n\\nMy leadership philosophy centers on empowering teams while maintaining accountability for results.`,
          body2: `I am particularly drawn to ${baseStructure.companyName} because of ${baseStructure.companySpecificReason}. Your commitment to innovation and excellence aligns with my experience in ${userData.field}. I am excited about the opportunity to leverage my expertise to contribute to your organization's continued growth and market leadership.`,
          closing: `I would welcome the opportunity to discuss how my proven track record of leadership and strategic execution can benefit ${baseStructure.companyName}. Thank you for your consideration, and I look forward to our conversation.`,
          signoff: 'Respectfully,\\n[Your Name]'
        }

      case 6: // Creative Professional
        return {
          ...baseStructure,
          title: 'Creative Professional Cover Letter',
          salutation: `Hello ${baseStructure.hiringManagerName},`,
          opening: `I'm excited to apply for the ${baseStructure.positionTitle} role at ${baseStructure.companyName}! As a ${userData.degree} graduate in ${userData.field} with a passion for innovative solutions, I'm thrilled about the opportunity to bring my creative problem-solving skills to your dynamic team.`,
          body1: `My background in ${userData.field} has taught me to approach challenges from multiple angles and think outside conventional boundaries. Whether working on ${baseStructure.specificProjects} or collaborating with diverse teams, I consistently deliver solutions that are both functional and engaging. ${getCreativeExperience(userData)}`,
          body2: `What really excites me about ${baseStructure.companyName} is ${baseStructure.companySpecificReason}. I'm eager to contribute my fresh perspective and enthusiasm for ${userData.field} to help push creative boundaries while meeting business objectives.`,
          closing: `I'd love the chance to discuss how my blend of technical skills and creative thinking can add value to your team. Thank you for considering my application – I'm looking forward to the possibility of creating something amazing together!`,
          signoff: 'Creatively yours,\\n[Your Name]'
        }

      case 7: // Research Academic
        return {
          ...baseStructure,
          title: 'Research Academic Cover Letter',
          salutation: `Dear Dr. [Last Name]/Dear Hiring Committee,`,
          opening: `I am writing to apply for the ${baseStructure.positionTitle} position at ${baseStructure.companyName}. With my ${userData.degree} in ${userData.field} and ${getExperienceText(userData.experience)} in research and analysis, I am eager to contribute to your organization's research objectives and academic excellence.`,
          body1: `My academic background in ${userData.field} has provided me with a strong foundation in research methodologies, data analysis, and critical thinking. ${getResearchExperience(userData)} I have experience with ${baseStructure.relevantSkills}, statistical analysis, and presenting findings to both academic and non-academic audiences.`,
          body2: `I am particularly interested in ${baseStructure.companyName} because of ${baseStructure.companySpecificReason}. I am excited about the opportunity to contribute to ongoing projects while developing my expertise in ${userData.field}.`,
          closing: `I would welcome the opportunity to discuss how my research background and analytical skills can contribute to your team's important work. Thank you for your consideration of my application.`,
          signoff: 'Academically yours,\\n[Your Name]'
        }

      case 8: // Consulting Format
        return {
          ...baseStructure,
          title: 'Business Consulting Cover Letter',
          salutation: `Dear ${baseStructure.hiringManagerName},`,
          opening: `I am excited to apply for the ${baseStructure.positionTitle} role at ${baseStructure.companyName}. With my ${userData.degree} in ${userData.field} and ${getExperienceText(userData.experience)} in analytical problem-solving, I am well-positioned to drive measurable results for your clients.`,
          body1: `My experience has equipped me with strong analytical and quantitative skills essential for consulting success:\\n\\n• Problem-solving: Systematic approach to complex challenges\\n• Data analysis: ${baseStructure.relevantSkills}\\n• Client communication: Ability to translate technical concepts\\n• Project management: ${baseStructure.specificProjects}\\n\\n${getConsultingExperience(userData)}`,
          body2: `What attracts me to ${baseStructure.companyName} is ${baseStructure.companySpecificReason}. My background in ${userData.field}, combined with my passion for solving complex business challenges, positions me to make immediate contributions to your consulting team.`,
          closing: `I would appreciate the opportunity to discuss how my analytical skills and drive for results can benefit ${baseStructure.companyName} and your clients. Thank you for your consideration.`,
          signoff: 'Best regards,\\n[Your Name]'
        }

      default:
        return generateCoverLetter(1) // fallback to first template
    }
  }

  // Function to generate visual preview of template
  const generateTemplatePreview = (templateId) => {
    const sampleData = {
      fullName: "John Smith",
      address: "123 Main Street, City, ST 12345",
      email: "john.smith@email.com",
      phone: "(555) 123-4567",
      date: "September 8, 2025",
      hiringManagerName: "Ms. Johnson",
      companyName: "ABC Company",
      companyAddress: "456 Business Ave, City, ST 54321",
      positionTitle: "Software Developer",
      companySpecificReason: "innovation and commitment to excellence",
      relevantSkills: "JavaScript, React, Node.js",
      specificProjects: "developing responsive web applications"
    };

    const previewTemplate = generateCoverLetter(templateId, sampleData);
    
    return (
      <div className="letter-preview-mini">
        <div className="mini-header">
          <div className="mini-name">{sampleData.fullName}</div>
          <div className="mini-contact">{sampleData.email} | {sampleData.phone}</div>
        </div>
        <div className="mini-date">{sampleData.date}</div>
        <div className="mini-employer">
          <div className="mini-company">{sampleData.companyName}</div>
        </div>
        <div className="mini-body">
          <div className="mini-salutation">{previewTemplate.salutation}</div>
          <div className="mini-paragraph">{previewTemplate.opening.substring(0, 120)}...</div>
          <div className="mini-paragraph">{previewTemplate.body1.substring(0, 100)}...</div>
          <div className="mini-paragraph">{previewTemplate.body2.substring(0, 100)}...</div>
          <div className="mini-closing">{previewTemplate.closing.substring(0, 80)}...</div>
          <div className="mini-signoff">
            {previewTemplate.signoff.replace('[Your Name]', sampleData.fullName)}
          </div>
        </div>
      </div>
    );
  };

  // Helper functions for content generation
  const getExperienceText = (experience) => {
    switch (experience) {
      case 'no-exp': return 'as an entry-level professional'
      case 'lt1': return 'less than one year of experience'
      case '1-3': return '1-3 years of experience'
      case '3-5': return '3-5 years of experience'
      case '5-10': return '5-10 years of experience'
      case '10+': return 'over 10 years of experience'
      default: return 'relevant experience'
    }
  }

  const getEducationContent = (userData) => {
    if (userData.school && userData.school !== '[University Name]') {
      return `My coursework at ${userData.school} included comprehensive study in various aspects of ${userData.field}.`
    }
    return "My academic coursework provided me with comprehensive knowledge in various aspects of my field."
  }

  const getExperienceSpecificContent = (userData) => {
    if (userData.experience === 'no-exp' || userData.experience === 'lt1') {
      return "Through academic projects and hands-on learning, I have gained practical experience in applying theoretical knowledge to real-world scenarios."
    } else {
      return "My professional experience has allowed me to apply these skills in practical settings, consistently delivering high-quality results and exceeding expectations."
    }
  }

  const getMethodologies = (userData) => {
    return "Agile, DevOps, Git version control"
  }

  const getProjectExperience = (userData) => {
    if (userData.experience === 'no-exp' || userData.experience === 'lt1') {
      return "During my studies, I completed several projects demonstrating my ability to apply technical concepts practically."
    } else {
      return "In my professional experience, I have successfully delivered multiple projects, resulting in improved efficiency and user satisfaction."
    }
  }

  const getTransferableSkills = (userData) => {
    return `Additionally, my experience has honed my abilities in project management, communication, and strategic thinking.`
  }

  const getCreativeExperience = (userData) => {
    if (userData.experience === 'no-exp' || userData.experience === 'lt1') {
      return "My academic projects have included creative challenges where I learned to balance creativity with technical requirements."
    } else {
      return "In my professional work, I've successfully managed creative projects that required both technical precision and innovative thinking."
    }
  }

  const getResearchExperience = (userData) => {
    if (userData.experience === 'no-exp' || userData.experience === 'lt1') {
      return "My coursework included extensive research projects where I developed skills in literature review, hypothesis formation, and data interpretation."
    } else {
      return "My professional experience includes conducting research studies, analyzing complex datasets, and presenting findings."
    }
  }

  const getConsultingExperience = (userData) => {
    if (userData.experience === 'no-exp' || userData.experience === 'lt1') {
      return "Through case study analysis and group projects, I developed strong skills in breaking down complex problems and presenting actionable recommendations."
    } else {
      return "My experience includes leading cross-functional projects that resulted in improved operational efficiency and client satisfaction."
    }
  }

  const templates = [
    {
      id: 1,
      name: "Professional Standard",
      description: "Traditional, ATS-friendly format perfect for corporate roles",
      category: "General Professional",
      bestFor: "Corporate positions, traditional industries"
    },
    {
      id: 2,
      name: "Tech Professional",
      description: "Technical focus with emphasis on skills and methodologies",
      category: "Technology",
      bestFor: "Software development, engineering roles"
    },
    {
      id: 3,
      name: "Entry Level",
      description: "Designed for recent graduates and first-time job seekers",
      category: "Entry Level",
      bestFor: "New graduates, internships, first jobs"
    },
    {
      id: 4,
      name: "Career Change",
      description: "Highlights transferable skills for industry transitions",
      category: "Career Transition",
      bestFor: "Changing industries or career paths"
    },
    {
      id: 5,
      name: "Executive Level",
      description: "Leadership-focused format for senior positions",
      category: "Executive",
      bestFor: "Management, director, C-level positions"
    },
    {
      id: 6,
      name: "Creative Professional",
      description: "Modern, engaging tone for creative industries",
      category: "Creative",
      bestFor: "Design, marketing, creative agencies"
    },
    {
      id: 7,
      name: "Research Academic",
      description: "Academic tone suitable for research positions",
      category: "Academic",
      bestFor: "Research roles, academic institutions"
    },
    {
      id: 8,
      name: "Business Consulting",
      description: "Results-driven format for consulting roles",
      category: "Consulting",
      bestFor: "Consulting firms, business analysis"
    }
  ]

  const updateField = (field, value) => {
    setEditableFields(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleDownload = () => {
    if (!selectedTemplate) return
    
    const processedSignoff = selectedTemplate.signoff.replace('[Your Name]', editableFields.fullName || selectedTemplate.fullName || '[Your Name]')
    
    const content = `${editableFields.fullName || selectedTemplate.fullName}
${editableFields.address || selectedTemplate.address}
${editableFields.email || selectedTemplate.email} | ${editableFields.phone || selectedTemplate.phone}

${editableFields.date || selectedTemplate.date}

${editableFields.hiringManagerName || selectedTemplate.hiringManagerName}
${editableFields.companyName || selectedTemplate.companyName}
${editableFields.companyAddress || selectedTemplate.companyAddress}

${selectedTemplate.salutation}

${selectedTemplate.opening}

${selectedTemplate.body1}

${selectedTemplate.body2}

${selectedTemplate.closing}

${processedSignoff}`

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `cover-letter-${selectedTemplate.title.replace(/\\s+/g, '-').toLowerCase()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleCopy = () => {
    if (!selectedTemplate) return
    
    const processedSignoff = selectedTemplate.signoff.replace('[Your Name]', editableFields.fullName || selectedTemplate.fullName || '[Your Name]')
    
    const content = `${editableFields.fullName || selectedTemplate.fullName}
${editableFields.address || selectedTemplate.address}
${editableFields.email || selectedTemplate.email} | ${editableFields.phone || selectedTemplate.phone}

${editableFields.date || selectedTemplate.date}

${editableFields.hiringManagerName || selectedTemplate.hiringManagerName}
${editableFields.companyName || selectedTemplate.companyName}
${editableFields.companyAddress || selectedTemplate.companyAddress}

${selectedTemplate.salutation}

${selectedTemplate.opening}

${selectedTemplate.body1}

${selectedTemplate.body2}

${selectedTemplate.closing}

${processedSignoff}`
    
    navigator.clipboard.writeText(content).then(() => {
      alert('Complete cover letter copied to clipboard!')
    })
  }

  const handleUseTemplate = (templateId) => {
    const coverLetter = generateCoverLetter(templateId)
    setSelectedTemplate(coverLetter)
    setEditableFields({
      // Initialize editable fields with current values
      fullName: coverLetter.fullName,
      address: coverLetter.address,
      email: coverLetter.email,
      phone: coverLetter.phone,
      date: coverLetter.date,
      hiringManagerName: coverLetter.hiringManagerName,
      companyName: coverLetter.companyName,
      companyAddress: coverLetter.companyAddress,
      positionTitle: coverLetter.positionTitle,
      companySpecificReason: coverLetter.companySpecificReason,
      relevantSkills: coverLetter.relevantSkills,
      specificProjects: coverLetter.specificProjects
    })
    setShowPreview(true)
  }

  if (showPreview && selectedTemplate) {
    return (
      <div className="cover-templates">
        <div className="top-bar">
          <button
            className="back-btn"
            onClick={() => setShowPreview(false)}
            aria-label="Back to templates"
          >
            ← Back to Templates
          </button>
          <h1>{selectedTemplate.title}</h1>
        </div>
        
        <div className="cover-preview">
          <div className="preview-content">
            {/* Editable Fields Panel */}
            <div className="edit-panel">
              <h3>📝 Edit Details</h3>
              
              <div className="edit-section">
                <h4>Personal Information</h4>
                <div className="edit-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={editableFields.fullName || ''}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="edit-field">
                  <label>Address</label>
                  <input
                    type="text"
                    value={editableFields.address || ''}
                    onChange={(e) => updateField('address', e.target.value)}
                    placeholder="Your Address, City, State ZIP"
                  />
                </div>
                <div className="edit-field">
                  <label>Email</label>
                  <input
                    type="email"
                    value={editableFields.email || ''}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="edit-field">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={editableFields.phone || ''}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="edit-section">
                <h4>Letter Details</h4>
                <div className="edit-field">
                  <label>Date</label>
                  <input
                    type="date"
                    value={editableFields.date || ''}
                    onChange={(e) => updateField('date', e.target.value)}
                  />
                </div>
                <div className="edit-field">
                  <label>Hiring Manager Name</label>
                  <input
                    type="text"
                    value={editableFields.hiringManagerName || ''}
                    onChange={(e) => updateField('hiringManagerName', e.target.value)}
                    placeholder="Mr./Ms. [Last Name] or Hiring Manager"
                  />
                </div>
                <div className="edit-field">
                  <label>Company Name</label>
                  <input
                    type="text"
                    value={editableFields.companyName || ''}
                    onChange={(e) => updateField('companyName', e.target.value)}
                    placeholder="Company Name"
                  />
                </div>
                <div className="edit-field">
                  <label>Company Address</label>
                  <input
                    type="text"
                    value={editableFields.companyAddress || ''}
                    onChange={(e) => updateField('companyAddress', e.target.value)}
                    placeholder="Company Address"
                  />
                </div>
                <div className="edit-field">
                  <label>Position Title</label>
                  <input
                    type="text"
                    value={editableFields.positionTitle || ''}
                    onChange={(e) => updateField('positionTitle', e.target.value)}
                    placeholder="Job Position Title"
                  />
                </div>
                <div className="edit-field">
                  <label>Company Specific Reason</label>
                  <textarea
                    value={editableFields.companySpecificReason || ''}
                    onChange={(e) => updateField('companySpecificReason', e.target.value)}
                    placeholder="Why you want to work for this company"
                    rows={2}
                  />
                </div>
                <div className="edit-field">
                  <label>Relevant Skills</label>
                  <textarea
                    value={editableFields.relevantSkills || ''}
                    onChange={(e) => updateField('relevantSkills', e.target.value)}
                    placeholder="Your key skills relevant to the position"
                    rows={2}
                  />
                </div>
                <div className="edit-field">
                  <label>Specific Projects/Experience</label>
                  <textarea
                    value={editableFields.specificProjects || ''}
                    onChange={(e) => updateField('specificProjects', e.target.value)}
                    placeholder="Specific projects or experiences to highlight"
                    rows={3}
                  />
                </div>
              </div>

              <div className="edit-actions">
                <button onClick={handleDownload} className="download-btn">📥 Download</button>
                <button onClick={handleCopy} className="copy-btn">📋 Copy Content</button>
              </div>
            </div>
            
            {/* Letter Preview */}
            <div className="letter-preview">
              <div className="letter-content">
                <div className="letter-header">
                  <p><strong>{editableFields.fullName || selectedTemplate.fullName}</strong></p>
                  <p>{editableFields.address || selectedTemplate.address}</p>
                  <p>{editableFields.email || selectedTemplate.email} | {editableFields.phone || selectedTemplate.phone}</p>
                </div>
                
                <div className="letter-date">
                  <p>{editableFields.date || selectedTemplate.date}</p>
                </div>
                
                <div className="letter-employer">
                  <p>{editableFields.hiringManagerName || selectedTemplate.hiringManagerName}</p>
                  <p><strong>{editableFields.companyName || selectedTemplate.companyName}</strong></p>
                  <p>{editableFields.companyAddress || selectedTemplate.companyAddress}</p>
                </div>
                
                <div className="letter-body">
                  <p>{selectedTemplate.salutation}</p>
                  <p>{selectedTemplate.opening}</p>
                  <p style={{whiteSpace: 'pre-line'}}>{selectedTemplate.body1}</p>
                  <p>{selectedTemplate.body2}</p>
                  <p>{selectedTemplate.closing}</p>
                  <p style={{whiteSpace: 'pre-line'}}>
                    {selectedTemplate.signoff.replace('[Your Name]', editableFields.fullName || selectedTemplate.fullName || '[Your Name]')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cover-templates">
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
        <h1>Professional Cover Letter Templates</h1>
      </div>
      
      <div className="cover-templates-inner">
        <h2>Choose Your Professional Template</h2>
        <p className="templates-intro">
          Select from 8 professionally crafted cover letter templates, each designed for specific career situations and accepted by top companies.
          <br />
          <strong>Your profile information will be automatically filled in, and you can edit all details directly in the template.</strong>
        </p>
        
        <div className="templates-grid">
          {templates.map(template => (
            <div className="template-card" key={template.id}>
              <div className="template-preview">
                {/* Show actual letter preview instead of description */}
                {generateTemplatePreview(template.id)}
              </div>
              <div className="template-info">
                <h3>{template.name}</h3>
                <p className="template-description">{template.description}</p>
                <span className="template-category">{template.category}</span>
                <p className="template-best-for"><strong>Best for:</strong> {template.bestFor}</p>
              </div>
              <div className="template-actions">
                <button 
                  className="use-btn"
                  onClick={() => handleUseTemplate(template.id)}
                >
                  Use This Template
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="templates-note">
          <p><strong>✨ Smart Features:</strong></p>
          <ul>
            <li>📋 Automatically pulls your information from your profile</li>
            <li>✏️ Edit any field directly in the template preview</li>
            <li>🔄 Content updates in real-time as you edit</li>
            <li>📥 Download as text file or copy to clipboard</li>
            <li>🎯 ATS-friendly and industry-approved formats</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
