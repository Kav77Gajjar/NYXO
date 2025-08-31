import { useState, useEffect } from 'react'
import './ProfessionalResumeTemplate.css'

function ProfessionalResumeTemplate() {
  // Function to get user profile data from localStorage or return default data
  const getUserProfileData = () => {
    try {
      const savedProfile = localStorage.getItem('userProfileData')
      if (savedProfile) {
        const profileData = JSON.parse(savedProfile)
        
        // Transform profile data to resume format
        return {
          // Personal Information
          fullName: profileData.personalInfo?.fullName?.toUpperCase() || 'YOUR NAME',
          jobTitle: profileData.experience?.[0]?.title || 'Your Job Title',
          email: profileData.personalInfo?.email || 'your.email@example.com',
          phone: profileData.personalInfo?.phone || '(123) 456-7890',
          location: profileData.personalInfo?.location || 'Your Location',
          linkedin: profileData.personalInfo?.linkedin || 'linkedin.com/in/yourprofile',
          
          // Professional Summary - use aboutMe or create from experience
          summary: profileData.personalInfo?.aboutMe || 
                  `Professional with experience in ${profileData.experience?.[0]?.title || 'your field'}. ${profileData.experience?.[0]?.description || 'Add your professional summary in the Profile section.'}`,
          
          // Work Experience - transform from profile format, ensure at least one entry
          experiences: profileData.experience?.length > 0 ? profileData.experience.map(exp => ({
            title: exp.title || '',
            company: exp.company || '',
            location: profileData.personalInfo?.location || '', // Use profile location as default
            startDate: exp.duration?.split(' - ')[0] || '',
            endDate: exp.duration?.split(' - ')[1] || '',
            responsibilities: [exp.description || '']
          })) : [{
            title: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            responsibilities: ['']
          }],
          
          // Skills - split into technical and business skills, ensure at least one entry each
          technicalSkills: profileData.skills?.length > 0 ? 
            profileData.skills.slice(0, Math.ceil(profileData.skills.length / 2)) : [''],
          businessSkills: profileData.skills?.length > 0 ? 
            profileData.skills.slice(Math.ceil(profileData.skills.length / 2)) : [''],
          
          // Education - transform from profile format, ensure at least one entry
          education: profileData.education?.length > 0 ? profileData.education.map(edu => ({
            degree: edu.degree || '',
            school: edu.school || '',
            startDate: edu.year?.split(' - ')[0] || '',
            endDate: edu.year?.split(' - ')[1] || ''
          })) : [{
            degree: '',
            school: '',
            startDate: '',
            endDate: ''
          }],
          
          // Certifications - transform from achievements if available, ensure at least one entry
          certifications: profileData.achievements?.filter(achievement => 
            achievement.category === 'Education' && 
            (achievement.title.toLowerCase().includes('certification') || 
             achievement.title.toLowerCase().includes('certificate'))
          ).map(cert => ({
            name: cert.title || '',
            issuer: 'Professional Body',
            year: new Date(cert.date).getFullYear().toString() || ''
          })) || [{
            name: '',
            issuer: '',
            year: ''
          }],
          
          // Languages - default placeholder, ensure at least one entry
          languages: [{
            language: 'English',
            proficiency: 'Native'
          }]
        }
      }
    } catch (error) {
      console.error('Error loading profile data:', error)
    }
    
    // Return default data if no profile data is found
    return {
      // Personal Information
      fullName: 'YOUR NAME',
      jobTitle: 'Your Job Title',
      email: 'your.email@example.com',
      phone: '(123) 456-7890',
      location: 'Your Location',
      linkedin: 'linkedin.com/in/yourprofile',
      
      // Professional Summary
      summary: 'Add your professional summary here. Go to Profile section to update your information and it will automatically appear in your resume.',
      
      // Work Experience - ensure at least one empty entry
      experiences: [{
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        responsibilities: ['']
      }],
      
      // Skills - ensure at least one empty entry each
      technicalSkills: [''],
      businessSkills: [''],
      
      // Education - ensure at least one empty entry
      education: [{
        degree: '',
        school: '',
        startDate: '',
        endDate: ''
      }],
      
      // Certifications - ensure at least one empty entry
      certifications: [{
        name: '',
        issuer: '',
        year: ''
      }],
      
      // Languages - ensure at least one entry
      languages: [
        {
          language: 'English',
          proficiency: 'Native'
        }
      ]
    }
  }

  const [formData, setFormData] = useState(getUserProfileData())

  const [isEditing, setIsEditing] = useState(false)

  // Reload profile data when component mounts or when returning from profile
  useEffect(() => {
    const loadProfileData = () => {
      const profileData = getUserProfileData()
      setFormData(profileData)
    }

    // Load data on mount
    loadProfileData()

    // Listen for profile updates
    const handleProfileUpdate = () => {
      loadProfileData()
    }

    window.addEventListener('profileUpdated', handleProfileUpdate)
    
    return () => {
      window.removeEventListener('profileUpdated', handleProfileUpdate)
    }
  }, [])

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

  const removeExperience = (index) => {
    if (formData.experiences.length > 1) {
      setFormData(prev => ({
        ...prev,
        experiences: prev.experiences.filter((_, i) => i !== index)
      }))
    }
  }

  const removeEducation = (index) => {
    if (formData.education.length > 1) {
      setFormData(prev => ({
        ...prev,
        education: prev.education.filter((_, i) => i !== index)
      }))
    }
  }

  const removeCertification = (index) => {
    if (formData.certifications.length > 1) {
      setFormData(prev => ({
        ...prev,
        certifications: prev.certifications.filter((_, i) => i !== index)
      }))
    }
  }

  const removeLanguage = (index) => {
    if (formData.languages.length > 1) {
      setFormData(prev => ({
        ...prev,
        languages: prev.languages.filter((_, i) => i !== index)
      }))
    }
  }

  const removeTechnicalSkill = (index) => {
    if (formData.technicalSkills.length > 1) {
      setFormData(prev => ({
        ...prev,
        technicalSkills: prev.technicalSkills.filter((_, i) => i !== index)
      }))
    }
  }

  const removeBusinessSkill = (index) => {
    if (formData.businessSkills.length > 1) {
      setFormData(prev => ({
        ...prev,
        businessSkills: prev.businessSkills.filter((_, i) => i !== index)
      }))
    }
  }

  // Helper function to check if an item should be visible in preview
  const isItemVisible = (item, type) => {
    switch (type) {
      case 'experience':
        return item.title.trim() || item.company.trim() || item.responsibilities.some(r => r.trim())
      case 'education':
        return item.degree.trim() || item.school.trim()
      case 'certification':
        return item.name.trim() || item.issuer.trim()
      case 'language':
        return item.language.trim() || item.proficiency.trim()
      case 'skill':
        return item.trim()
      default:
        return true
    }
  }

  const downloadPDF = () => {
    window.print()
  }

  const handleBackToTemplates = () => {
    // Dispatch custom navigation event to go back to resume templates
    const event = new CustomEvent('navigate', {
      detail: { page: 'resume-templates' }
    });
    window.dispatchEvent(event);
  }

  return (
    <div className="professional-resume-template">
      {/* Control Panel */}
      <div className="control-panel">
        <div className="control-buttons">
          <button
            className="back-btn"
            onClick={handleBackToTemplates}
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
              className="profile-btn"
              onClick={() => {
                const event = new CustomEvent('navigate', {
                  detail: { page: 'profile' }
                });
                window.dispatchEvent(event);
              }}
              title="Update your profile information"
            >
              👤 Update Profile
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
                  {formData.experiences.map((exp, index) => {
                    // Hide empty experiences in preview mode
                    if (!isEditing && !isItemVisible(exp, 'experience')) {
                      return null;
                    }
                    
                    return (
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
                            <div className="edit-controls">
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
                              {formData.experiences.length > 1 && (
                                <button
                                  type="button"
                                  className="remove-btn"
                                  onClick={() => removeExperience(index)}
                                  title="Remove this experience"
                                >
                                  ✕
                                </button>
                              )}
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
                              <div className="responsibility-edit">
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
                                {exp.responsibilities.length > 1 && (
                                  <button
                                    type="button"
                                    className="remove-btn small"
                                    onClick={() => {
                                      const newResponsibilities = exp.responsibilities.filter((_, i) => i !== respIndex)
                                      handleArrayFieldChange('experiences', index, 'responsibilities', newResponsibilities)
                                    }}
                                    title="Remove this responsibility"
                                  >
                                    ✕
                                  </button>
                                )}
                              </div>
                            ) : (
                              resp
                            )}
                          </li>
                        ))}
                        {isEditing && (
                          <li>
                            <button
                              type="button"
                              className="add-responsibility-btn"
                              onClick={() => {
                                const newResponsibilities = [...exp.responsibilities, '']
                                handleArrayFieldChange('experiences', index, 'responsibilities', newResponsibilities)
                              }}
                            >
                              + Add Responsibility
                            </button>
                          </li>
                        )}
                      </ul>
                    </div>
                    );
                  })}
                  
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
                  {formData.technicalSkills.map((skill, index) => {
                    // Hide empty skills in preview mode
                    if (!isEditing && !isItemVisible(skill, 'skill')) {
                      return null;
                    }
                    
                    return (
                      <div key={index} className="skill-item">
                      {isEditing ? (
                        <div className="skill-edit">
                          <input
                            type="text"
                            value={skill}
                            onChange={(e) => handleSkillChange('technicalSkills', index, e.target.value)}
                            className="edit-input skill-input"
                            placeholder="Technical Skill"
                          />
                          {formData.technicalSkills.length > 1 && (
                            <button
                              type="button"
                              className="remove-btn small"
                              onClick={() => removeTechnicalSkill(index)}
                              title="Remove this skill"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      ) : (
                        <h4 className="skill-name">{skill}</h4>
                      )}
                    </div>
                    );
                  })}
                  {isEditing && (
                    <button
                      type="button"
                      className="add-skill-btn"
                      onClick={() => setFormData(prev => ({
                        ...prev,
                        technicalSkills: [...prev.technicalSkills, '']
                      }))}
                    >
                      + Add Technical Skill
                    </button>
                  )}
                </div>
              </div>

              {/* Business Skills */}
              <div className="resume-section">
                <h2 className="section-title">BUSINESS SKILLS</h2>
                <div className="section-divider"></div>
                <div className="skills-list">
                  {formData.businessSkills.filter((skill, index) => isEditing || isItemVisible(skill, 'skill')).map((skill, index) => (
                    <div key={index} className="skill-item">
                      {isEditing ? (
                        <div className="skill-edit">
                          <input
                            type="text"
                            value={skill}
                            onChange={(e) => handleSkillChange('businessSkills', index, e.target.value)}
                            className="edit-input skill-input"
                            placeholder="Business Skill"
                          />
                          {formData.businessSkills.length > 1 && (
                            <button
                              type="button"
                              className="remove-btn small"
                              onClick={() => removeBusinessSkill(index)}
                              title="Remove this skill"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      ) : (
                        <h4 className="skill-name">{skill}</h4>
                      )}
                    </div>
                  ))}
                  {isEditing && (
                    <button
                      type="button"
                      className="add-skill-btn"
                      onClick={() => setFormData(prev => ({
                        ...prev,
                        businessSkills: [...prev.businessSkills, '']
                      }))}
                    >
                      + Add Business Skill
                    </button>
                  )}
                </div>
              </div>

              {/* Education */}
              <div className="resume-section">
                <h2 className="section-title">EDUCATION</h2>
                <div className="section-divider"></div>
                <div className="education-list">
                  {formData.education.filter((edu, index) => isEditing || isItemVisible(edu, 'education')).map((edu, index) => (
                    <div key={index} className="education-item">
                      {isEditing ? (
                        <>
                          <div className="education-header-edit">
                            <input
                              type="text"
                              value={edu.degree}
                              onChange={(e) => handleArrayFieldChange('education', index, 'degree', e.target.value)}
                              className="edit-input"
                              placeholder="Degree"
                            />
                            {formData.education.length > 1 && (
                              <button
                                type="button"
                                className="remove-btn"
                                onClick={() => removeEducation(index)}
                                title="Remove this education"
                              >
                                ✕
                              </button>
                            )}
                          </div>
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
                  {formData.certifications.filter((cert, index) => isEditing || isItemVisible(cert, 'certification')).map((cert, index) => (
                    <div key={index} className="certification-item">
                      {isEditing ? (
                        <>
                          <div className="certification-header-edit">
                            <input
                              type="text"
                              value={cert.name}
                              onChange={(e) => handleArrayFieldChange('certifications', index, 'name', e.target.value)}
                              className="edit-input"
                              placeholder="Certification Name"
                            />
                            {formData.certifications.length > 1 && (
                              <button
                                type="button"
                                className="remove-btn"
                                onClick={() => removeCertification(index)}
                                title="Remove this certification"
                              >
                                ✕
                              </button>
                            )}
                          </div>
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
                  {formData.languages.filter((lang, index) => isEditing || isItemVisible(lang, 'language')).map((lang, index) => (
                    <div key={index} className="language-item">
                      {isEditing ? (
                        <>
                          <div className="language-header-edit">
                            <input
                              type="text"
                              value={lang.language}
                              onChange={(e) => handleArrayFieldChange('languages', index, 'language', e.target.value)}
                              className="edit-input"
                              placeholder="Language"
                            />
                            {formData.languages.length > 1 && (
                              <button
                                type="button"
                                className="remove-btn"
                                onClick={() => removeLanguage(index)}
                                title="Remove this language"
                              >
                                ✕
                              </button>
                            )}
                          </div>
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
