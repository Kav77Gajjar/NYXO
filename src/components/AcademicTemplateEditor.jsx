import React, { useState } from 'react';
import AcademicTemplate from './AcademicTemplate';
import './ResumeTemplates.css';

function AcademicTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    name: 'ELLIOT WU',
    photo: null, // Photo URL or base64 string
    location: 'PHILADELPHIA, PA 19001',
    phone: '(555) 555-5555',
    email: 'EXAMPLE@EXAMPLE.COM',
    summary: 'Results-driven marketing researcher with over 10 years of experience specializing in consumer behavior, brand strategy and digital marketing analytics. Proven expertise in leading cross-functional research projects, delivering actionable insights and driving 15% year-over-year revenue growth for Fortune 500 clients. Skilled in advanced statistical methods, market segmentation and developing predictive models that optimize marketing strategies. Published author with a strong track record of impactful research and peer-reviewed articles.',
    qualifications: {
      left: [
        'Quantitative and qualitative research',
        'Consumer behavior analysis',
        'Digital marketing analytics',
        'Data visualization (Tableau, Power BI)'
      ],
      right: [
        'Advanced statistical analysis (R, Python)',
        'Predictive modeling and machine learning',
        'Survey design and administration',
        'Strategic communication and reporting'
      ]
    },
    education: [
      {
        degree: 'Master of Science - Digital Marketing',
        school: 'Temple University',
        location: 'Philadelphia, PA',
        details: [
          'GPA: 3.8',
          'Honors: Magna cum laude',
          'Thesis: Measuring the Effectiveness of Influencer Marketing Across Different Social Media Platforms'
        ]
      },
      {
        degree: 'Certificate - Business Analytics',
        school: 'Temple University',
        location: 'Philadelphia, PA',
        details: []
      },
      {
        degree: 'Bachelor of Science - Marketing',
        school: 'Temple University',
        location: 'Philadelphia, PA',
        details: [
          'GPA: 3.8',
          'Honors: Magna cum laude',
          'Minor: Advertising',
          'Student Marketing Club, President'
        ]
      }
    ],
    experience: [
      {
        company: 'CMI Media Group',
        position: 'Senior Marketing Research Analyst',
        location: 'Philadelphia, PA',
        period: 'January 2018 to Current',
        responsibilities: [
          'Direct consumer segmentation studies for global clients, increasing customer retention by 20%.',
          'Design and implement predictive models that enhanced campaign ROI by 25%.',
          'Manage a team of five analysts, delivering 98% of research projects under budget and ahead of schedule.'
        ]
      },
      {
        company: 'Insight Global',
        position: 'Marketing Research Consultant',
        location: 'Philadelphia, PA',
        period: 'May 2015 to December 2017',
        responsibilities: [
          'Conducted in-depth qualitative and quantitative research for 12 startups, leading to an average 18% increase in market share.',
          'Developed competitive benchmarking reports that informed strategic decisions for five key industries.'
        ]
      }
    ]
  };

  const [templateData, setTemplateData] = useState(initialData || defaultData);

  const [activeSection, setActiveSection] = useState('personal');

  const handleInputChange = (field, value) => {
    setTemplateData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if file is an image
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setTemplateData(prev => ({
            ...prev,
            photo: e.target.result
          }));
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select a valid image file (PNG, JPG, JPEG, GIF)');
      }
    }
  };

  const removePhoto = () => {
    setTemplateData(prev => ({
      ...prev,
      photo: null
    }));
  };

  const handleQualificationChange = (side, index, value) => {
    setTemplateData(prev => ({
      ...prev,
      qualifications: {
        ...prev.qualifications,
        [side]: prev.qualifications[side].map((item, i) => i === index ? value : item)
      }
    }));
  };

  const addQualification = (side) => {
    setTemplateData(prev => ({
      ...prev,
      qualifications: {
        ...prev.qualifications,
        [side]: [...prev.qualifications[side], 'New qualification']
      }
    }));
  };

  const removeQualification = (side, index) => {
    setTemplateData(prev => ({
      ...prev,
      qualifications: {
        ...prev.qualifications,
        [side]: prev.qualifications[side].filter((_, i) => i !== index)
      }
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

  const handleEducationDetailChange = (eduIndex, detailIndex, value) => {
    setTemplateData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === eduIndex 
          ? { 
              ...edu, 
              details: edu.details.map((detail, j) => j === detailIndex ? value : detail)
            } 
          : edu
      )
    }));
  };

  const addEducationDetail = (eduIndex) => {
    setTemplateData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === eduIndex 
          ? { ...edu, details: [...edu.details, 'New detail'] }
          : edu
      )
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
        i === expIndex 
          ? { 
              ...exp, 
              responsibilities: exp.responsibilities.map((resp, j) => j === respIndex ? value : resp)
            } 
          : exp
      )
    }));
  };

  const addResponsibility = (expIndex) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === expIndex 
          ? { ...exp, responsibilities: [...exp.responsibilities, 'New responsibility'] }
          : exp
      )
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
    
    // Generate the complete HTML with the current template data
    const templateHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Academic Resume - ${templateData.name}</title>
          <meta charset="UTF-8">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;800&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Roboto', sans-serif; 
              background: white;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
              }
              .template-container {
                box-shadow: none !important;
                margin: 0 !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0.75in;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          <div class="template-container" style="
            font-family: 'Roboto', sans-serif;
            background-color: white;
            color: black;
            padding: 24px;
            max-width: 768px;
            margin: 0 auto;
            font-size: 12px;
            line-height: 1.4;
            width: 210mm;
            min-height: 297mm;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          ">
            <!-- Header Border -->
            <div style="
              border-top: 8px solid #3B82F6;
              width: 100%;
              margin-bottom: 16px;
            "></div>
            
            <!-- Name -->
            <h1 style="
              color: #3B82F6;
              font-size: 24px;
              font-weight: normal;
              text-align: center;
              margin-bottom: 4px;
            ">${templateData.name}</h1>
            
            <!-- Photo -->
            ${templateData.photo ? `
              <div style="
                display: flex;
                justify-content: center;
                margin-bottom: 12px;
              ">
                <img 
                  src="${templateData.photo}" 
                  alt="Profile" 
                  style="
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid #3B82F6;
                  "
                />
              </div>
            ` : ''}
            
            <!-- Contact Info -->
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin: 0;
            ">${templateData.location}</p>
            
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin-bottom: 12px;
            ">${templateData.phone} | ${templateData.email}</p>
            
            <!-- Divider -->
            <hr style="
              border: none;
              border-top: 1px dotted #9CA3AF;
              margin-bottom: 12px;
            " />
            
            <!-- Summary Section -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 4px;
            ">SUMMARY STATEMENT</p>
            <p style="
              font-size: 12px;
              margin-bottom: 16px;
            ">${templateData.summary}</p>
            
            <!-- Core Qualifications -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">CORE QUALIFICATIONS</p>
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              margin-bottom: 16px;
            ">
              <div>
                ${templateData.qualifications.left.map(qual => `
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${qual}
                  </p>
                `).join('')}
              </div>
              <div>
                ${templateData.qualifications.right.map(qual => `
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${qual}
                  </p>
                `).join('')}
              </div>
            </div>
            
            <!-- Education -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">EDUCATION</p>
            ${templateData.education.map(edu => `
              <div style="margin-bottom: 12px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${edu.degree}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${edu.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${edu.school}, ${edu.location}</p>
                ${edu.details ? edu.details.map(detail => `
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${detail}
                  </p>
                `).join('') : ''}
              </div>
            `).join('')}
            
            <!-- Professional Experience -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
              margin-top: 16px;
            ">PROFESSIONAL EXPERIENCE</p>
            ${templateData.experience.map(exp => `
              <div style="margin-bottom: 16px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${exp.position}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${exp.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${exp.company}, ${exp.location}</p>
                ${exp.responsibilities.map(resp => `
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${resp}
                  </p>
                `).join('')}
              </div>
            `).join('')}
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
            value={templateData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={templateData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={templateData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={templateData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group full-width">
          <label>Profile Photo</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {templateData.photo && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img 
                  src={templateData.photo} 
                  alt="Profile preview" 
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    border: '2px solid #3B82F6'
                  }} 
                />
                <button
                  type="button"
                  onClick={removePhoto}
                  className="remove-btn"
                  style={{ padding: '5px 10px', fontSize: '12px' }}
                >
                  Remove Photo
                </button>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="form-input"
              style={{ padding: '8px' }}
            />
            <small style={{ color: '#666', fontSize: '12px' }}>
              Upload a profile photo (PNG, JPG, JPEG, GIF)
            </small>
          </div>
        </div>
        <div className="form-group full-width">
          <label>Summary Statement</label>
          <textarea
            value={templateData.summary}
            onChange={(e) => handleInputChange('summary', e.target.value)}
            className="form-textarea"
            rows="4"
          />
        </div>
      </div>
    </div>
  );

  const renderQualificationsSection = () => (
    <div className="editor-section">
      <h3>Core Qualifications</h3>
      <div className="qualifications-grid">
        <div className="qualification-column">
          <h4>Left Column</h4>
          {templateData.qualifications.left.map((qual, index) => (
            <div key={index} className="qualification-item">
              <input
                type="text"
                value={qual}
                onChange={(e) => handleQualificationChange('left', index, e.target.value)}
                className="form-input"
              />
              <button
                onClick={() => removeQualification('left', index)}
                className="remove-btn"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={() => addQualification('left')}
            className="add-btn"
          >
            + Add Qualification
          </button>
        </div>
        <div className="qualification-column">
          <h4>Right Column</h4>
          {templateData.qualifications.right.map((qual, index) => (
            <div key={index} className="qualification-item">
              <input
                type="text"
                value={qual}
                onChange={(e) => handleQualificationChange('right', index, e.target.value)}
                className="form-input"
              />
              <button
                onClick={() => removeQualification('right', index)}
                className="remove-btn"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={() => addQualification('right')}
            className="add-btn"
          >
            + Add Qualification
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
              <label>Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>School</label>
              <input
                type="text"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
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
          </div>
          <div className="details-section">
            <label>Details</label>
            {edu.details.map((detail, detailIndex) => (
              <div key={detailIndex} className="detail-item">
                <input
                  type="text"
                  value={detail}
                  onChange={(e) => handleEducationDetailChange(index, detailIndex, e.target.value)}
                  className="form-input"
                />
              </div>
            ))}
            <button
              onClick={() => addEducationDetail(index)}
              className="add-btn small"
            >
              + Add Detail
            </button>
          </div>
        </div>
      ))}
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
          <div className="responsibilities-section">
            <label>Responsibilities</label>
            {exp.responsibilities.map((resp, respIndex) => (
              <div key={respIndex} className="responsibility-item">
                <textarea
                  value={resp}
                  onChange={(e) => handleResponsibilityChange(index, respIndex, e.target.value)}
                  className="form-textarea"
                  rows="2"
                />
              </div>
            ))}
            <button
              onClick={() => addResponsibility(index)}
              className="add-btn small"
            >
              + Add Responsibility
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return renderPersonalSection();
      case 'qualifications':
        return renderQualificationsSection();
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
          <h1>Edit Academic Template</h1>
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
              className={`nav-item ${activeSection === 'qualifications' ? 'active' : ''}`}
              onClick={() => setActiveSection('qualifications')}
            >
              🎯 Qualifications
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
            <div style={{ transform: 'scale(0.6)', transformOrigin: 'top left', width: '166.67%', height: '166.67%' }}>
              <AcademicTemplate data={templateData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicTemplateEditor;
