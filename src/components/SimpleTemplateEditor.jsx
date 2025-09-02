import React, { useState } from 'react';
import SimpleTemplate from './SimpleTemplate';
import './ResumeTemplates.css';

function SimpleTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    personalInfo: {
      fullName: 'SANDRA WARD',
      phone: '(555)555-5555',
      email: 'example@example.com',
      address: 'ABC Street, City, State 12345'
    },
    summary: 'Highly skilled and creative Photographer with 4 years of experience in capturing stunning photographs for various clients and projects. Proficient in using Adobe Photoshop and Lightroom for editing and retouching images. Strong ability to understand client vision and deliver exceptional results. Experienced in graphic design and digital marketing, with a Bachelor\'s degree in Graphic Design and a Master\'s degree in Photography.',
    skills: [
      'Photographer',
      'Adobe Photoshop',
      'Lighting',
      'Photo Editing',
      'Graphic Design',
      'Digital Marketing',
      'Social Media Management',
      'Event Coordination'
    ],
    experience: [
      {
        position: 'Photographer',
        company: 'ABC Studios',
        location: 'New York, New York',
        period: 'Jan 2018 - Dec 2020',
        responsibilities: [
          'Captured high-quality photographs for various clients and projects',
          'Managed and organized photoshoots, including location scouting and model selection',
          'Edited and retouched images using Adobe Photoshop and Lightroom',
          'Collaborated with clients to understand their vision and deliver exceptional results'
        ]
      },
      {
        position: 'Graphic Designer',
        company: 'XYZ Agency',
        location: 'Los Angeles, California',
        period: 'Jan 2016 - Dec 2017',
        responsibilities: [
          'Designed and created visually appealing graphics for various marketing materials',
          'Collaborated with clients to understand their design needs and requirements',
          'Managed multiple projects simultaneously and met tight deadlines',
          'Worked closely with the marketing team to develop effective visual communication strategies'
        ]
      },
      {
        position: 'Marketing Assistant',
        company: '123 Company',
        location: 'Chicago, Illinois',
        period: 'Jan 2014 - Dec 2015',
        responsibilities: [
          'Assisted in the development and implementation of marketing campaigns',
          'Conducted market research and analyzed consumer behavior',
          'Assisted social media accounts and created engaging content',
          'Assisted organizing and coordinating promotional events'
        ]
      }
    ],
    education: [
      {
        degree: 'Master of Fine Arts in Photography',
        institution: 'University of ABC',
        location: 'New York, New York',
        date: 'Jun 2015'
      },
      {
        degree: 'Bachelor of Arts in Graphic Design',
        institution: 'XYZ College',
        location: 'Los Angeles, California',
        date: 'Jun 2013'
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

  const handleSummaryChange = (value) => {
    setTemplateData(prev => ({
      ...prev,
      summary: value
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

  const handleExperienceChange = (index, field, value) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.map((resp, j) => 
            j === respIndex ? value : resp
          )
        } : exp
      )
    }));
  };

  const addResponsibility = (expIndex) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === expIndex ? {
          ...exp,
          responsibilities: [...exp.responsibilities, 'New responsibility']
        } : exp
      )
    }));
  };

  const removeResponsibility = (expIndex, respIndex) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.filter((_, j) => j !== respIndex)
        } : exp
      )
    }));
  };

  const addExperience = () => {
    setTemplateData(prev => ({
      ...prev,
      experience: [...prev.experience, { 
        position: '', 
        company: '', 
        location: '',
        period: '',
        responsibilities: ['New responsibility']
      }]
    }));
  };

  const removeExperience = (index) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
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
      education: [...prev.education, { degree: '', institution: '', location: '', date: '' }]
    }));
  };

  const removeEducation = (index) => {
    setTemplateData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(templateData);
    }
    alert('Template saved successfully! Changes will be reflected in the preview.');
  };

  const handleDownload = () => {
    const printWindow = window.open('', '_blank');
    
    const templateHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${templateData.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
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
              background: white;
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
          <div style="
            font-family: 'Open Sans', sans-serif;
            background-color: white;
            min-height: 100vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 24px;
          ">
            <main style="
              background-color: white;
              border-radius: 12px;
              max-width: 768px;
              width: 100%;
              padding: 40px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              position: relative;
              z-index: 10;
              margin-top: 48px;
              font-size: 12px;
              line-height: 1.3;
              color: #4b4b4b;
            ">
              <!-- Header -->
              <header style="
                text-align: center;
                margin-bottom: 24px;
              ">
                <h1 style="
                  font-weight: 800;
                  color: #374151;
                  font-size: 18px;
                  letter-spacing: 0.05em;
                  margin: 0;
                ">
                  ${templateData.personalInfo.fullName}
                </h1>
                <p style="
                  margin-top: 4px;
                  color: #9ca3af;
                  letter-spacing: 0.05em;
                  margin: 4px 0 0 0;
                ">
                  ${templateData.personalInfo.phone} • ${templateData.personalInfo.email} • ${templateData.personalInfo.address}
                </p>
              </header>

              <!-- Professional Summary -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  PROFESSIONAL SUMMARY
                </h2>
                <p style="
                  color: #4b5563;
                  line-height: 1.3;
                  margin: 0;
                ">
                  ${templateData.summary}
                </p>
              </section>

              <!-- Skills -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  SKILLS
                </h2>
                <div style="
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 0 24px;
                  color: #4b5563;
                  font-size: 12px;
                  line-height: 1.3;
                ">
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${templateData.skills.slice(0, Math.ceil(templateData.skills.length / 2)).map(skill => `<li>${skill}</li>`).join('')}
                  </ul>
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${templateData.skills.slice(Math.ceil(templateData.skills.length / 2)).map(skill => `<li>${skill}</li>`).join('')}
                  </ul>
                </div>
              </section>

              <!-- Work History -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  WORK HISTORY
                </h2>
                ${templateData.experience.map((job, index) => `
                  <article style="
                    margin-bottom: ${index === templateData.experience.length - 1 ? '0' : '12px'};
                  ">
                    <p style="
                      color: #4b5563;
                      font-size: 12px;
                      font-weight: 600;
                      margin: 0;
                    ">
                      ${job.period}<br/>
                      ${job.location}
                    </p>
                    <p style="
                      font-weight: 600;
                      color: #374151;
                      font-size: 12px;
                      margin-top: 4px;
                      margin: 4px 0 0 0;
                    ">
                      ${job.position} / ${job.company}
                    </p>
                    <ul style="
                      list-style: disc;
                      list-style-position: inside;
                      color: #4b5563;
                      font-size: 12px;
                      line-height: 1.3;
                      margin-top: 4px;
                      margin: 4px 0 0 0;
                      padding: 0;
                      display: flex;
                      flex-direction: column;
                      gap: 2px;
                    ">
                      ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                  </article>
                `).join('')}
              </section>

              <!-- Education -->
              <section>
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  EDUCATION
                </h2>
                <div style="
                  color: #4b5563;
                  font-size: 12px;
                  line-height: 1.3;
                  display: flex;
                  flex-direction: column;
                  gap: 12px;
                ">
                  ${templateData.education.map(edu => `
                    <div>
                      <p style="
                        font-weight: 600;
                        margin: 0;
                      ">
                        ${edu.date}<br/>
                        ${edu.location}
                      </p>
                      <p style="
                        font-weight: 600;
                        color: #374151;
                        margin-top: 2px;
                        margin: 2px 0 0 0;
                      ">
                        ${edu.degree}
                      </p>
                      <p style="margin: 0;">
                        ${edu.institution}
                      </p>
                    </div>
                  `).join('')}
                </div>
              </section>
            </main>
          </div>
        </body>
      </html>
    `;
    
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    
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

  const renderSummarySection = () => (
    <div className="editor-section">
      <h3>Professional Summary</h3>
      <div className="form-grid">
        <div className="form-group full-width">
          <label>Summary</label>
          <textarea
            value={templateData.summary}
            onChange={(e) => handleSummaryChange(e.target.value)}
            className="form-textarea"
            rows="6"
          />
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="editor-section">
      <h3>Skills</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
  );

  const renderExperienceSection = () => (
    <div className="editor-section">
      <h3>Work Experience</h3>
      {templateData.experience.map((exp, index) => (
        <div key={index} className="experience-item" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <div className="form-grid">
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
              <label>Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
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
          
          <div style={{ marginTop: '15px' }}>
            <h4>Responsibilities</h4>
            {exp.responsibilities.map((resp, respIndex) => (
              <div key={respIndex} className="qualification-item" style={{ marginBottom: '5px' }}>
                <textarea
                  value={resp}
                  onChange={(e) => handleResponsibilityChange(index, respIndex, e.target.value)}
                  className="form-textarea"
                  rows="2"
                />
                <button
                  onClick={() => removeResponsibility(index, respIndex)}
                  className="remove-btn"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={() => addResponsibility(index)}
              className="add-btn"
              style={{ fontSize: '12px', padding: '5px 10px' }}
            >
              + Add Responsibility
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

  const renderEducationSection = () => (
    <div className="editor-section">
      <h3>Education</h3>
      {templateData.education.map((edu, index) => (
        <div key={index} className="education-item">
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
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={edu.location}
                onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="text"
                value={edu.date}
                onChange={(e) => handleEducationChange(index, 'date', e.target.value)}
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

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return renderPersonalSection();
      case 'summary':
        return renderSummarySection();
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
          <h1>Edit Simple Template</h1>
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
              className={`nav-item ${activeSection === 'summary' ? 'active' : ''}`}
              onClick={() => setActiveSection('summary')}
            >
              📝 Summary
            </button>
            <button
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              🎯 Skills
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
          <div className="editor-form">
            {renderActiveSection()}
          </div>
        </div>

        {/* Preview */}
        <div className="editor-preview">
          <h3>Live Preview</h3>
          <div className="preview-container">
            <div style={{ 
              backgroundImage: 'url("/simple.jpg")',
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
                  <SimpleTemplate data={templateData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleTemplateEditor;
