import React, { useState } from 'react';
import TechnicalTemplate from './TechnicalTemplate';
import './ResumeTemplates.css';

function TechnicalTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    personalInfo: {
      fullName: 'Dwight Mackenzie',
      position: 'Research Engineer',
      address: '400 Whipoorville Road, New York , NY 10014, United States',
      phone: '(917) 348-3212',
      email: 'Mack_nz85_sd@gmail.com'
    },
    skills: [
      'Knowledge of Engineering Principles',
      'Strategic and Tactical Planning',
      'Leadership Skills',
      'Complex Problem Solving',
      'Interpersonal Communication Skills'
    ],
    languages: [
      'German',
      'English',
      'Dutch'
    ],
    profile: 'Experienced Research Engineer with an extensive background in engineering principles, project leadership, and the effective application of research in technological companies. Bringing forth extensive experience in performing research on product development processes and offering solutions and alterations to improve safety and effectiveness. Adept in working with engineers and project managers at multiple levels to utilize research data effectively and achieve optimal results.',
    experience: [
      {
        position: 'Research Engineer',
        company: 'AGR, New York',
        period: 'May 2016 — January 2019',
        responsibilities: [
          'Worked with Project Managers to discuss equipment function, processes, and productivity, while offering solutions to current issues.',
          'Researched technological improvements currently dominating the field, and tested their outcome for specific products.',
          'Wrote daily reports and organized data presentations for accountability and quality assurance.',
          'Tested the efficacy and safety of products and analyzed the results in relation to procedures.'
        ]
      },
      {
        position: 'Research Engineer',
        company: 'United Technologies Research Center, New York',
        period: 'June 2012 — April 2016',
        responsibilities: [
          'Led the research and development of technologies.',
          'Worked in collaboration with other researchers to promote world-class applications and services.',
          'Delivered production-level code to support applications.',
          'Implemented innovative software solutions.'
        ]
      }
    ],
    education: [
      {
        degree: 'Master of Science in Biochemical Engineering',
        institution: 'NYU, New York',
        period: 'September 2007 — May 2012'
      },
      {
        degree: 'Bachelor of Biochemical Engineering',
        institution: 'NYU, New York',
        period: 'September 2003 — May 2007'
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

  const handleSkillChange = (index, value) => {
    const newSkills = [...templateData.skills];
    newSkills[index] = value;
    setTemplateData(prev => ({ ...prev, skills: newSkills }));
  };

  const addSkill = () => {
    setTemplateData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const removeSkill = (index) => {
    const newSkills = templateData.skills.filter((_, i) => i !== index);
    setTemplateData(prev => ({ ...prev, skills: newSkills }));
  };

  const handleLanguageChange = (index, value) => {
    const newLanguages = [...templateData.languages];
    newLanguages[index] = value;
    setTemplateData(prev => ({ ...prev, languages: newLanguages }));
  };

  const addLanguage = () => {
    setTemplateData(prev => ({
      ...prev,
      languages: [...prev.languages, '']
    }));
  };

  const removeLanguage = (index) => {
    const newLanguages = templateData.languages.filter((_, i) => i !== index);
    setTemplateData(prev => ({ ...prev, languages: newLanguages }));
  };

  const handleExperienceChange = (expIndex, field, value) => {
    const newExperience = [...templateData.experience];
    newExperience[expIndex] = { ...newExperience[expIndex], [field]: value };
    setTemplateData(prev => ({ ...prev, experience: newExperience }));
  };

  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    const newExperience = [...templateData.experience];
    newExperience[expIndex].responsibilities[respIndex] = value;
    setTemplateData(prev => ({ ...prev, experience: newExperience }));
  };

  const addResponsibility = (expIndex) => {
    const newExperience = [...templateData.experience];
    newExperience[expIndex].responsibilities.push('');
    setTemplateData(prev => ({ ...prev, experience: newExperience }));
  };

  const removeResponsibility = (expIndex, respIndex) => {
    const newExperience = [...templateData.experience];
    newExperience[expIndex].responsibilities = newExperience[expIndex].responsibilities.filter((_, i) => i !== respIndex);
    setTemplateData(prev => ({ ...prev, experience: newExperience }));
  };

  const addExperience = () => {
    setTemplateData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        position: '',
        company: '',
        period: '',
        responsibilities: ['']
      }]
    }));
  };

  const removeExperience = (index) => {
    const newExperience = templateData.experience.filter((_, i) => i !== index);
    setTemplateData(prev => ({ ...prev, experience: newExperience }));
  };

  const handleEducationChange = (eduIndex, field, value) => {
    const newEducation = [...templateData.education];
    newEducation[eduIndex] = { ...newEducation[eduIndex], [field]: value };
    setTemplateData(prev => ({ ...prev, education: newEducation }));
  };

  const addEducation = () => {
    setTemplateData(prev => ({
      ...prev,
      education: [...prev.education, {
        degree: '',
        institution: '',
        period: ''
      }]
    }));
  };

  const removeEducation = (index) => {
    const newEducation = templateData.education.filter((_, i) => i !== index);
    setTemplateData(prev => ({ ...prev, education: newEducation }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(templateData);
    }
  };

  const handleDownload = () => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    const templateHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Technical Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', sans-serif; background: white; }
            @media print { body { -webkit-print-color-adjust: exact; } }
          </style>
        </head>
        <body>
          <div id="resume-content"></div>
        </body>
      </html>
    `;
    
    printWindow.document.write(templateHtml);
    printWindow.document.close();
    
    // Wait for fonts to load, then print
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 1000);
  };

  // Section render functions
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
          <label>Phone</label>
          <input
            type="text"
            value={templateData.personalInfo.phone}
            onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
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
        <div className="form-group full-width">
          <label>Address</label>
          <input
            type="text"
            value={templateData.personalInfo.address}
            onChange={(e) => handlePersonalInfoChange('address', e.target.value)}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );

  const renderProfileSection = () => (
    <div className="editor-section">
      <h3>Profile</h3>
      <div className="form-group">
        <label>Professional Summary</label>
        <textarea
          value={templateData.profile}
          onChange={(e) => setTemplateData(prev => ({ ...prev, profile: e.target.value }))}
          className="form-textarea"
          rows="6"
          placeholder="Write your professional summary..."
        />
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="editor-section">
      <h3>Skills & Languages</h3>
      
      {/* Skills */}
      <div className="subsection">
        <h4>Skills</h4>
        {templateData.skills.map((skill, index) => (
          <div key={index} className="array-item">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              className="form-input"
              placeholder="Enter a skill"
            />
            {templateData.skills.length > 1 && (
              <button 
                type="button" 
                onClick={() => removeSkill(index)}
                className="remove-btn"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addSkill} className="add-btn">
          + Add Skill
        </button>
      </div>

      {/* Languages */}
      <div className="subsection">
        <h4>Languages</h4>
        {templateData.languages.map((language, index) => (
          <div key={index} className="array-item">
            <input
              type="text"
              value={language}
              onChange={(e) => handleLanguageChange(index, e.target.value)}
              className="form-input"
              placeholder="Enter a language"
            />
            {templateData.languages.length > 1 && (
              <button 
                type="button" 
                onClick={() => removeLanguage(index)}
                className="remove-btn"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addLanguage} className="add-btn">
          + Add Language
        </button>
      </div>
    </div>
  );

  const renderExperienceSection = () => (
    <div className="editor-section">
      <h3>Experience</h3>
      {templateData.experience.map((exp, expIndex) => (
        <div key={expIndex} className="experience-item">
          <div className="experience-header">
            <h4>Experience {expIndex + 1}</h4>
            {templateData.experience.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(expIndex)}
                className="remove-btn"
              >
                ✕ Remove
              </button>
            )}
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleExperienceChange(expIndex, 'position', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleExperienceChange(expIndex, 'company', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group full-width">
              <label>Period</label>
              <input
                type="text"
                value={exp.period}
                onChange={(e) => handleExperienceChange(expIndex, 'period', e.target.value)}
                className="form-input"
                placeholder="e.g., May 2016 — January 2019"
              />
            </div>
          </div>

          <div className="responsibilities-section">
            <label>Responsibilities</label>
            {exp.responsibilities.map((resp, respIndex) => (
              <div key={respIndex} className="array-item">
                <textarea
                  value={resp}
                  onChange={(e) => handleResponsibilityChange(expIndex, respIndex, e.target.value)}
                  className="form-textarea"
                  rows="2"
                  placeholder="Describe your responsibility..."
                />
                {exp.responsibilities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeResponsibility(expIndex, respIndex)}
                    className="remove-btn"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addResponsibility(expIndex)}
              className="add-btn small"
            >
              + Add Responsibility
            </button>
          </div>
        </div>
      ))}
      <button type="button" onClick={addExperience} className="add-btn">
        + Add Experience
      </button>
    </div>
  );

  const renderEducationSection = () => (
    <div className="editor-section">
      <h3>Education</h3>
      {templateData.education.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-header">
            <h4>Education {index + 1}</h4>
            {templateData.education.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="remove-btn"
              >
                ✕ Remove
              </button>
            )}
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group full-width">
              <label>Period</label>
              <input
                type="text"
                value={edu.period}
                onChange={(e) => handleEducationChange(index, 'period', e.target.value)}
                className="form-input"
                placeholder="e.g., September 2007 — May 2012"
              />
            </div>
          </div>
        </div>
      ))}
      <button type="button" onClick={addEducation} className="add-btn">
        + Add Education
      </button>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <>
            {renderPersonalSection()}
            {renderProfileSection()}
          </>
        );
      case 'skills':
        return renderSkillsSection();
      case 'experience':
        return renderExperienceSection();
      case 'education':
        return renderEducationSection();
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
          <h1>Edit Technical Template</h1>
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
              👤 Personal & Profile
            </button>
            <button
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              🎯 Skills & Languages
            </button>
            <button
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveSection('experience')}
            >
              💼 Experience
            </button>
            <button
              className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => setActiveSection('education')}
            >
              🎓 Education
            </button>
          </nav>
        </div>

        {/* Main Editor */}
        <div className="editor-main">
          {renderActiveSection()}
        </div>

        {/* Live Preview */}
        <div className="editor-preview">
          <div className="preview-header">
            <h3>Live Preview</h3>
          </div>
          <div className="preview-content">
            <div style={{ 
              backgroundImage: 'url("/Technical.jpg")',
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
                <div className="preview-scale">
                  <TechnicalTemplate data={templateData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalTemplateEditor;
