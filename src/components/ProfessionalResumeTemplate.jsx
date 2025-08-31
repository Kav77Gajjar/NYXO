import { useState } from 'react'
import './ProfessionalResumeTemplate.css'

function ProfessionalResumeTemplate() {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: 'JOHN DOE',
    jobTitle: 'Senior Product Manager',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
    
    // Professional Summary
    summary: 'Results-driven Product Manager with 8+ years of experience leading cross-functional teams to deliver innovative digital products. Proven track record in market analysis, product strategy, and agile development. Passionate about creating user-centric solutions that drive business growth and enhance customer experiences.',
    
    // Work Experience
    experiences: [
      {
        title: 'Senior Product Manager',
        company: 'TechSolutions Inc.',
        location: 'San Francisco, CA',
        startDate: '2019',
        endDate: 'Present',
        responsibilities: [
          'Led product strategy and roadmap for SaaS platform, resulting in 40% increase in user engagement',
          'Managed cross-functional team of 12 engineers, designers, and marketers using Agile methodologies',
          'Conducted market research and competitive analysis to identify $2M revenue opportunity',
          'Implemented data-driven decision making, improving conversion rates by 25%'
        ]
      },
      {
        title: 'Product Manager',
        company: 'Digital Innovations Co.',
        location: 'New York, NY',
        startDate: '2016',
        endDate: '2019',
        responsibilities: [
          'Launched mobile app that acquired 500K users in first 6 months',
          'Collaborated with UX team to redesign onboarding flow, reducing drop-off rate by 35%',
          'Established product metrics framework to track KPIs and inform roadmap priorities'
        ]
      }
    ],
    
    // Skills
    technicalSkills: [
      'Product Strategy & Roadmapping',
      'Market Research & Analysis',
      'Agile & Scrum Methodologies',
      'Data Analysis & Metrics',
      'User Experience Design'
    ],
    
    businessSkills: [
      'Strategic Planning',
      'Cross-functional Leadership',
      'Stakeholder Management',
      'Financial Analysis',
      'Go-to-Market Strategy'
    ],
    
    // Education
    education: [
      {
        degree: 'MBA, Business Administration',
        school: 'Stanford University',
        startDate: '2014',
        endDate: '2016'
      },
      {
        degree: 'BS, Computer Science',
        school: 'University of California, Berkeley',
        startDate: '2010',
        endDate: '2014'
      }
    ],
    
    // Certifications
    certifications: [
      {
        name: 'Certified Scrum Product Owner',
        issuer: 'Scrum Alliance',
        year: '2018'
      },
      {
        name: 'Google Analytics Certification',
        issuer: 'Google',
        year: '2017'
      }
    ],
    
    // Languages
    languages: [
      {
        language: 'English',
        proficiency: 'Native'
      },
      {
        language: 'Spanish',
        proficiency: 'Professional Proficiency'
      },
      {
        language: 'French',
        proficiency: 'Intermediate'
      }
    ]
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleArrayFieldChange = (arrayField, index, field, value) => {
    setFormData(prev => ({
      ...prev,
      [arrayField]: prev[arrayField].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const handleSkillChange = (skillType, index, value) => {
    setFormData(prev => ({
      ...prev,
      [skillType]: prev[skillType].map((skill, i) => 
        i === index ? value : skill
      )
    }))
  }

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [...prev.experiences, {
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        responsibilities: ['']
      }]
    }))
  }

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, {
        degree: '',
        school: '',
        startDate: '',
        endDate: ''
      }]
    }))
  }

  const addCertification = () => {
    setFormData(prev => ({
      ...prev,
      certifications: [...prev.certifications, {
        name: '',
        issuer: '',
        year: ''
      }]
    }))
  }

  const addLanguage = () => {
    setFormData(prev => ({
      ...prev,
      languages: [...prev.languages, {
        language: '',
        proficiency: ''
      }]
    }))
  }

  const downloadPDF = () => {
    window.print()
  }

  return (
    <div className="professional-resume-template">
      {/* Control Panel */}
      <div className="control-panel">
        <div className="control-buttons">
          <button
            className="back-btn"
            onClick={() => window.history.back()}
            title="Go back to templates"
          >
            ← Back to Templates
          </button>
          
          <div className="control-actions">
            <button
              className={`edit-btn ${isEditing ? 'active' : ''}`}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? '👁️ Preview' : '✏️ Edit'}
            </button>
            
            <button
              className="download-btn"
              onClick={downloadPDF}
            >
              📄 Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="resume-container">
        <div className="resume-content">
          {/* Header Section */}
          <div className="resume-header">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="edit-input name-input"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  className="edit-input title-input"
                  placeholder="Job Title"
                />
              </>
            ) : (
              <>
                <h1 className="resume-name">{formData.fullName}</h1>
                <p className="resume-title">{formData.jobTitle}</p>
              </>
            )}
            
            <div className="resume-divider"></div>
            
            <div className="resume-contact">
              {isEditing ? (
                <>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="edit-input contact-input"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="edit-input contact-input"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="edit-input contact-input"
                    placeholder="Location"
                  />
                  <input
                    type="text"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange('linkedin', e.target.value)}
                    className="edit-input contact-input"
                    placeholder="LinkedIn"
                  />
                </>
              ) : (
                <>
                  <div className="contact-item">
                    <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span>{formData.email}</span>
                  </div>
                  <div className="contact-item">
                    <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span>{formData.phone}</span>
                  </div>
                  <div className="contact-item">
                    <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{formData.location}</span>
                  </div>
                  <div className="contact-item">
                    <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                    <span>{formData.linkedin}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="resume-grid">
            {/* Left Column */}
            <div className="resume-left-column">
              {/* Professional Summary */}
              <div className="resume-section">
                <h2 className="section-title">PROFESSIONAL SUMMARY</h2>
                <div className="section-divider"></div>
                {isEditing ? (
                  <textarea
                    value={formData.summary}
                    onChange={(e) => handleInputChange('summary', e.target.value)}
                    className="edit-textarea"
                    rows="6"
                    placeholder="Professional Summary"
                  />
                ) : (
                  <p className="summary-text">{formData.summary}</p>
                )}
              </div>

              {/* Work Experience */}
              <div className="resume-section">
                <h2 className="section-title">WORK EXPERIENCE</h2>
                <div className="section-divider"></div>
                
                <div className="experience-list">
                  {formData.experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                      {isEditing ? (
                        <>
                          <div className="experience-header-edit">
                            <input
                              type="text"
                              value={exp.title}
                              onChange={(e) => handleArrayFieldChange('experiences', index, 'title', e.target.value)}
                              className="edit-input"
                              placeholder="Job Title"
                            />
                            <div className="date-inputs">
                              <input
                                type="text"
                                value={exp.startDate}
                                onChange={(e) => handleArrayFieldChange('experiences', index, 'startDate', e.target.value)}
                                className="edit-input date-input"
                                placeholder="Start"
                              />
                              <span>-</span>
                              <input
                                type="text"
                                value={exp.endDate}
                                onChange={(e) => handleArrayFieldChange('experiences', index, 'endDate', e.target.value)}
                                className="edit-input date-input"
                                placeholder="End"
                              />
                            </div>
                          </div>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => handleArrayFieldChange('experiences', index, 'company', e.target.value)}
                            className="edit-input"
                            placeholder="Company Name"
                          />
                          <input
                            type="text"
                            value={exp.location}
                            onChange={(e) => handleArrayFieldChange('experiences', index, 'location', e.target.value)}
                            className="edit-input"
                            placeholder="Location"
                          />
                        </>
                      ) : (
                        <>
                          <div className="experience-header">
                            <h3 className="experience-title">{exp.title}</h3>
                            <span className="experience-date">{exp.startDate} - {exp.endDate}</span>
                          </div>
                          <p className="experience-company">{exp.company}, {exp.location}</p>
                        </>
                      )}
                      
                      <ul className="experience-responsibilities">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>
                            {isEditing ? (
                              <textarea
                                value={resp}
                                onChange={(e) => {
                                  const newResponsibilities = [...exp.responsibilities]
                                  newResponsibilities[respIndex] = e.target.value
                                  handleArrayFieldChange('experiences', index, 'responsibilities', newResponsibilities)
                                }}
                                className="edit-textarea small"
                                rows="2"
                                placeholder="Responsibility"
                              />
                            ) : (
                              resp
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  
                  {isEditing && (
                    <button className="add-btn" onClick={addExperience}>
                      + Add Experience
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="resume-right-column">
              {/* Technical Skills */}
              <div className="resume-section">
                <h2 className="section-title">TECHNICAL SKILLS</h2>
                <div className="section-divider"></div>
                <div className="skills-list">
                  {formData.technicalSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      {isEditing ? (
                        <input
                          type="text"
                          value={skill}
                          onChange={(e) => handleSkillChange('technicalSkills', index, e.target.value)}
                          className="edit-input skill-input"
                          placeholder="Technical Skill"
                        />
                      ) : (
                        <h4 className="skill-name">{skill}</h4>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Skills */}
              <div className="resume-section">
                <h2 className="section-title">BUSINESS SKILLS</h2>
                <div className="section-divider"></div>
                <div className="skills-list">
                  {formData.businessSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      {isEditing ? (
                        <input
                          type="text"
                          value={skill}
                          onChange={(e) => handleSkillChange('businessSkills', index, e.target.value)}
                          className="edit-input skill-input"
                          placeholder="Business Skill"
                        />
                      ) : (
                        <h4 className="skill-name">{skill}</h4>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="resume-section">
                <h2 className="section-title">EDUCATION</h2>
                <div className="section-divider"></div>
                <div className="education-list">
                  {formData.education.map((edu, index) => (
                    <div key={index} className="education-item">
                      {isEditing ? (
                        <>
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => handleArrayFieldChange('education', index, 'degree', e.target.value)}
                            className="edit-input"
                            placeholder="Degree"
                          />
                          <input
                            type="text"
                            value={edu.school}
                            onChange={(e) => handleArrayFieldChange('education', index, 'school', e.target.value)}
                            className="edit-input"
                            placeholder="School"
                          />
                          <div className="date-inputs">
                            <input
                              type="text"
                              value={edu.startDate}
                              onChange={(e) => handleArrayFieldChange('education', index, 'startDate', e.target.value)}
                              className="edit-input date-input"
                              placeholder="Start"
                            />
                            <span>-</span>
                            <input
                              type="text"
                              value={edu.endDate}
                              onChange={(e) => handleArrayFieldChange('education', index, 'endDate', e.target.value)}
                              className="edit-input date-input"
                              placeholder="End"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <h3 className="education-degree">{edu.degree}</h3>
                          <p className="education-school">{edu.school}</p>
                          <p className="education-date">{edu.startDate} - {edu.endDate}</p>
                        </>
                      )}
                    </div>
                  ))}
                  
                  {isEditing && (
                    <button className="add-btn small" onClick={addEducation}>
                      + Add Education
                    </button>
                  )}
                </div>
              </div>

              {/* Certifications */}
              <div className="resume-section">
                <h2 className="section-title">CERTIFICATIONS</h2>
                <div className="section-divider"></div>
                <div className="certifications-list">
                  {formData.certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                      {isEditing ? (
                        <>
                          <input
                            type="text"
                            value={cert.name}
                            onChange={(e) => handleArrayFieldChange('certifications', index, 'name', e.target.value)}
                            className="edit-input"
                            placeholder="Certification Name"
                          />
                          <input
                            type="text"
                            value={cert.issuer}
                            onChange={(e) => handleArrayFieldChange('certifications', index, 'issuer', e.target.value)}
                            className="edit-input"
                            placeholder="Issuer"
                          />
                          <input
                            type="text"
                            value={cert.year}
                            onChange={(e) => handleArrayFieldChange('certifications', index, 'year', e.target.value)}
                            className="edit-input"
                            placeholder="Year"
                          />
                        </>
                      ) : (
                        <>
                          <h3 className="certification-name">{cert.name}</h3>
                          <p className="certification-issuer">{cert.issuer}, {cert.year}</p>
                        </>
                      )}
                    </div>
                  ))}
                  
                  {isEditing && (
                    <button className="add-btn small" onClick={addCertification}>
                      + Add Certification
                    </button>
                  )}
                </div>
              </div>

              {/* Languages */}
              <div className="resume-section">
                <h2 className="section-title">LANGUAGES</h2>
                <div className="section-divider"></div>
                <div className="languages-list">
                  {formData.languages.map((lang, index) => (
                    <div key={index} className="language-item">
                      {isEditing ? (
                        <>
                          <input
                            type="text"
                            value={lang.language}
                            onChange={(e) => handleArrayFieldChange('languages', index, 'language', e.target.value)}
                            className="edit-input"
                            placeholder="Language"
                          />
                          <input
                            type="text"
                            value={lang.proficiency}
                            onChange={(e) => handleArrayFieldChange('languages', index, 'proficiency', e.target.value)}
                            className="edit-input"
                            placeholder="Proficiency Level"
                          />
                        </>
                      ) : (
                        <>
                          <h4 className="language-name">{lang.language}</h4>
                          <p className="language-proficiency">{lang.proficiency}</p>
                        </>
                      )}
                    </div>
                  ))}
                  
                  {isEditing && (
                    <button className="add-btn small" onClick={addLanguage}>
                      + Add Language
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalResumeTemplate
