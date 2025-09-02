import React, { useState } from 'react';
import ExecutiveTemplate from './ExecutiveTemplate';
import './ResumeTemplates.css';

function ExecutiveTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    personalInfo: {
      fullName: 'MARGARET M. NERNEY',
      position: 'Director',
      department: 'Product Marketing',
      address: '584 Castro St San Francisco, CA 94114',
      phone: '(888) 123-4567',
      email: 'm.nerney@gmail.com',
      linkedin: 'linkedin.com/in/margaret.nerney'
    },
    profile: 'Responsible for developing the product marketing strategy for highly complex products and services in the capacity of an expert individual contributor. Responsible for the success of a product line through development and execution of comprehensive marketing plan. Key Roles and Responsibilities: Develop business plans and positioning of cutting edge products in the marketplace.',
    skills: [
      'Team Building and Leadership',
      'P&L Management', 
      'Product Development',
      'Customer Focused',
      'Contract Negotiation'
    ],
    experience: [
      {
        company: 'AT&T',
        position: 'DIRECTOR PRODUCT MARKETING',
        period: 'Jul. 2018 – Present',
        achievements: [
          'Accolades: Recognized as the top performer out of 400+ individuals in 2018',
          'Manage a $320M annual development budget focused on delivering new features to increase sales conversion, service monetization and improve customer service for AT&T NOW.',
          'Delivered ~$50M improvements to P&L.',
          'Supervise 4 direct reports and 2 SaFe agile teams (~20 people)'
        ]
      },
      {
        company: '',
        position: 'MARKETING MANAGER',
        period: 'Nov. 2016 – Jul. 2018',
        achievements: [
          'Accolades: Top 10% in performance in 2016 & 2017',
          'O.G. AT&T launch team that delivered 1.5M customers in less than 18 months',
          'Successfully launching a secondary OTT service AT&T NOW in 2018 with more than 600K subscribers and on pace to double by EOY 2019',
          'Managed partnerships with respective SVOD and AVOD partners (i.e. Fullscreen, Pandora, Amazon Music and VRV) resulting in 1M+ customers 2016-2018'
        ]
      },
      {
        company: 'VERIZON',
        position: 'LEAD MANAGER MARKETING COMMS',
        period: 'Mar. 2015 – Oct. 2016',
        achievements: [
          'Accolades: Top 10% in performance in 2016 & 2017',
          'Chief of staff and communication lead for the Chief Marketing Officer (Business)',
          'Researched, developed and drafted quarterly "state of the business" presentation (P&L, OI initiatives, strategic recommendations) for senior leadership and (Vteam)',
          'Dramatically improved employee satisfaction over a six month period among 2K+'
        ]
      }
    ],
    education: [
      {
        institution: 'Verizon',
        degree: 'Data Driven Marketing Analytics Degree',
        period: 'Feb. - Nov. 2016'
      },
      {
        institution: 'AT&T Marketing Leadership Development',
        degree: '',
        period: 'Dec. 2017'
      },
      {
        institution: 'Boston College',
        degree: 'Bachelor of Arts',
        period: 'May 2011'
      }
    ]
  };

  const [templateData, setTemplateData] = useState(initialData || defaultData);
  const [activeSection, setActiveSection] = useState('personal');

  const handlePersonalInfoChange = (field, value) => {
    setTemplateData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handleInputChange = (field, value) => {
    setTemplateData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSkillChange = (index, value) => {
    setTemplateData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };

  const addSkill = () => {
    setTemplateData(prev => ({
      ...prev,
      skills: [...prev.skills, 'New skill']
    }));
  };

  const removeSkill = (index) => {
    setTemplateData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const handleEducationChange = (index, field, value) => {
    setTemplateData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const addEducation = () => {
    setTemplateData(prev => ({
      ...prev,
      education: [...prev.education, { institution: '', degree: '', period: '' }]
    }));
  };

  const removeEducation = (index) => {
    setTemplateData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const handleAchievementChange = (expIndex, achIndex, value) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === expIndex 
          ? { 
              ...exp, 
              achievements: exp.achievements.map((ach, j) => j === achIndex ? value : ach)
            } 
          : exp
      )
    }));
  };

  const addAchievement = (expIndex) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === expIndex 
          ? { ...exp, achievements: [...exp.achievements, 'New achievement'] }
          : exp
      )
    }));
  };

  const removeAchievement = (expIndex, achIndex) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === expIndex 
          ? { 
              ...exp, 
              achievements: exp.achievements.filter((_, j) => j !== achIndex)
            } 
          : exp
      )
    }));
  };

  const addExperience = () => {
    setTemplateData(prev => ({
      ...prev,
      experience: [...prev.experience, { 
        company: '', 
        position: '', 
        period: '', 
        achievements: [''] 
      }]
    }));
  };

  const removeExperience = (index) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(templateData);
    }
    alert('Template saved successfully! Changes will be reflected in the preview.');
  };

  const handleDownload = () => {
    // Create a new window with the complete template
    const printWindow = window.open('', '_blank');
    
    // Generate the complete HTML with the current template data - EXACTLY matching the ExecutiveTemplate component
    const templateHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${templateData.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Open Sans', sans-serif;
              background: #f0f4f8;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="outer-container" style="
            font-family: 'Open Sans', sans-serif;
            background-color: #f0f4f8;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <main class="main-container" style="
              max-width: 1536px;
              width: 100%;
              background-color: #f0f4f8;
              color: #374151;
              margin: 0 auto;
              padding: 24px 48px;
              display: flex;
              flex-direction: row;
              gap: 80px;
            ">
              <!-- Left Panel -->
              <section style="
                background-color: #e8eef4;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 24px;
                padding: 48px;
                width: 360px;
                flex-shrink: 0;
              ">
                <h1 style="
                  font-size: 24px;
                  font-weight: 600;
                  color: #111827;
                  margin-bottom: 8px;
                  text-align: center;
                  line-height: 1.2;
                ">
                  ${templateData.personalInfo.fullName}
                </h1>
                
                <h2 style="
                  text-align: center;
                  color: #374151;
                  font-weight: 600;
                  font-style: italic;
                  font-size: 14px;
                  margin-bottom: 32px;
                  line-height: 1.4;
                ">
                  ${templateData.personalInfo.position}
                  <br />
                  <span style="font-style: normal;">
                    ${templateData.personalInfo.department}
                  </span>
                </h2>

                <div style="
                  width: 100%;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 32px;
                "></div>

                <!-- Profile Section -->
                <section style="width: 100%; margin-bottom: 32px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    PROFILE
                  </h3>
                  <p style="
                    font-size: 12px;
                    color: #374151;
                    line-height: 1.6;
                  ">
                    ${templateData.profile}
                  </p>
                </section>

                <!-- Skills Section -->
                <section style="width: 100%; margin-bottom: 40px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    SKILLS
                  </h3>
                  <ul style="
                    font-size: 12px;
                    color: #374151;
                    list-style-type: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                  ">
                    ${templateData.skills.map(skill => `
                      <li style="margin-bottom: 4px;">
                        ${skill}
                      </li>
                    `).join('')}
                  </ul>
                </section>

                <!-- Contact Information -->
                <section style="
                  width: 100%;
                  color: #6b7280;
                  font-size: 12px;
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                ">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📍</span>
                    <span>${templateData.personalInfo.address}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">✉️</span>
                    <a href="mailto:${templateData.personalInfo.email}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${templateData.personalInfo.email}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📞</span>
                    <a href="tel:${templateData.personalInfo.phone}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${templateData.personalInfo.phone}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">🔗</span>
                    <a href="https://${templateData.personalInfo.linkedin}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${templateData.personalInfo.linkedin}
                    </a>
                  </div>
                </section>
              </section>

              <!-- Right Panel -->
              <section style="
                flex: 1;
                font-size: 13px;
                line-height: 1.6;
                color: #374151;
              ">
                <!-- Work Experience -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                ">
                  WORK EXPERIENCE
                </h3>
                <hr style="
                  border: none;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 24px;
                " />

                ${templateData.experience.map(job => `
                  <article style="margin-bottom: 24px;">
                    <div style="
                      display: flex;
                      justify-content: space-between;
                      align-items: flex-start;
                      margin-bottom: 4px;
                    ">
                      <div>
                        ${job.company ? `
                          <p style="
                            font-weight: 600;
                            color: #111827;
                            font-size: 13px;
                            line-height: 1.2;
                            margin: 0;
                          ">
                            ${job.company}
                          </p>
                        ` : ''}
                        <p style="
                          font-style: italic;
                          font-size: 12px;
                          color: #374151;
                          line-height: 1.2;
                          margin: 0;
                        ">
                          ${job.position}
                        </p>
                      </div>
                      <p style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 600;
                        line-height: 1.2;
                        margin: 0;
                      ">
                        ${job.period}
                      </p>
                    </div>
                    <ul style="
                      list-style-type: disc;
                      list-style-position: inside;
                      font-size: 12px;
                      color: #374151;
                      margin: 0;
                      padding: 0;
                    ">
                      ${job.achievements.map(achievement => `
                        <li style="margin-bottom: 4px;">
                          ${achievement}
                        </li>
                      `).join('')}
                    </ul>
                  </article>
                `).join('')}

                <!-- Education -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                  margin-top: 40px;
                ">
                  ACADEMIC
                </h3>

                ${templateData.education.map(edu => `
                  <article style="
                    font-size: 12px;
                    color: #374151;
                    margin-bottom: 12px;
                  ">
                    <p style="
                      font-weight: 600;
                      color: #111827;
                      font-size: 13px;
                      line-height: 1.2;
                      margin: 0;
                      display: flex;
                      justify-content: space-between;
                    ">
                      ${edu.institution}
                      <span style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 400;
                      ">
                        ${edu.period}
                      </span>
                    </p>
                    ${edu.degree ? `
                      <p style="
                        font-style: italic;
                        margin: 0;
                        line-height: 1.2;
                      ">
                        ${edu.degree}
                      </p>
                    ` : ''}
                  </article>
                `).join('')}
              </section>
            </main>
          </div>
        </body>
      </html>
    `;
    
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    
    // Wait for fonts to load, then trigger print
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1000);
  };

  const renderPersonalSection = () => (
    <div className="editor-section">
      <h3>Personal Information</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={templateData.personalInfo.fullName}
            onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            value={templateData.personalInfo.position}
            onChange={(e) => handlePersonalInfoChange('position', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            value={templateData.personalInfo.department}
            onChange={(e) => handlePersonalInfoChange('department', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={templateData.personalInfo.email}
            onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={templateData.personalInfo.phone}
            onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>LinkedIn</label>
          <input
            type="text"
            value={templateData.personalInfo.linkedin}
            onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group full-width">
          <label>Address</label>
          <textarea
            value={templateData.personalInfo.address}
            onChange={(e) => handlePersonalInfoChange('address', e.target.value)}
            className="form-textarea"
            rows="3"
          />
        </div>
        <div className="form-group full-width">
          <label>Profile</label>
          <textarea
            value={templateData.profile}
            onChange={(e) => handleInputChange('profile', e.target.value)}
            className="form-textarea"
            rows="4"
          />
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="editor-section">
      <h3>Skills</h3>
      <div className="qualifications-grid">
        <div className="qualification-column">
          <h4>Professional Skills</h4>
          {templateData.skills.map((skill, index) => (
            <div key={index} className="qualification-item">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="form-input"
              />
              <button
                onClick={() => removeSkill(index)}
                className="remove-btn"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={addSkill}
            className="add-btn"
          >
            + Add Skill
          </button>
        </div>
      </div>
    </div>
  );

  const renderEducationSection = () => (
    <div className="editor-section">
      <h3>Education</h3>
      {templateData.education.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="form-grid">
            <div className="form-group">
              <label>Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Degree/Program</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Period</label>
              <input
                type="text"
                value={edu.period}
                onChange={(e) => handleEducationChange(index, 'period', e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          <button
            onClick={() => removeEducation(index)}
            className="remove-btn"
            style={{ marginTop: '10px' }}
          >
            Remove Education
          </button>
        </div>
      ))}
      <button
        onClick={addEducation}
        className="add-btn"
      >
        + Add Education
      </button>
    </div>
  );

  const renderExperienceSection = () => (
    <div className="editor-section">
      <h3>Work Experience</h3>
      {templateData.experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="form-grid">
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Period</label>
              <input
                type="text"
                value={exp.period}
                onChange={(e) => handleExperienceChange(index, 'period', e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          <div className="responsibilities-section">
            <label>Key Achievements</label>
            {exp.achievements.map((ach, achIndex) => (
              <div key={achIndex} className="qualification-item">
                <textarea
                  value={ach}
                  onChange={(e) => handleAchievementChange(index, achIndex, e.target.value)}
                  className="form-textarea"
                  rows="2"
                />
                <button
                  onClick={() => removeAchievement(index, achIndex)}
                  className="remove-btn"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={() => addAchievement(index)}
              className="add-btn small"
            >
              + Add Achievement
            </button>
          </div>
          <button
            onClick={() => removeExperience(index)}
            className="remove-btn"
            style={{ marginTop: '10px' }}
          >
            Remove Experience
          </button>
        </div>
      ))}
      <button
        onClick={addExperience}
        className="add-btn"
      >
        + Add Experience
      </button>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return renderPersonalSection();
      case 'skills':
        return renderSkillsSection();
      case 'education':
        return renderEducationSection();
      case 'experience':
        return renderExperienceSection();
      default:
        return renderPersonalSection();
    }
  };

  return (
    <div className="template-editor">
      {/* Header */}
      <div className="editor-header">
        <button
          className="back-btn"
          onClick={onNavigateBack}
          aria-label="Go back"
        >
          ← Back to Template
        </button>
        
        <div className="editor-title">
          <h1>Edit Executive Template</h1>
          <p>Customize your resume content</p>
        </div>
        
        <div className="editor-actions">
          <button className="save-btn" onClick={handleSave}>
            💾 Save Changes
          </button>
          <button className="download-btn" onClick={handleDownload}>
            📄 Download PDF
          </button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="editor-content">
        {/* Sidebar Navigation */}
        <div className="editor-sidebar">
          <nav className="editor-nav">
            <button
              className={`nav-item ${activeSection === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveSection('personal')}
            >
              👤 Personal Info
            </button>
            <button
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              🎯 Skills
            </button>
            <button
              className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => setActiveSection('education')}
            >
              🎓 Education
            </button>
            <button
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveSection('experience')}
            >
              💼 Experience
            </button>
          </nav>
        </div>

        {/* Main Editor */}
        <div className="editor-main">
          <div className="editor-form">
            {renderActiveSection()}
          </div>
        </div>

        {/* Preview */}
        <div className="editor-preview">
          <h3>Live Preview</h3>
          <div className="preview-container">
            <div style={{ 
              backgroundImage: 'url("/Executive.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              minHeight: '400px',
              borderRadius: '8px',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '8px'
              }}>
                <div style={{ transform: 'scale(0.4)', transformOrigin: 'top left', width: '250%', height: '250%' }}>
                  <ExecutiveTemplate data={templateData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExecutiveTemplateEditor;
