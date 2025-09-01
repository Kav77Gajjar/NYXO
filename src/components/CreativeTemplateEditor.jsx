import React, { useState } from 'react';
import CreativeTemplate from './CreativeTemplate';
import './ResumeTemplates.css';

function CreativeTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    name: 'OLIVIA WILSON',
    title: 'Marketing Manager',
    photo: null, // Photo URL or base64 string
    contact: {
      email: 'hello@reallygreatsite.com',
      phone: '+123-456-7890',
      address: '123 Anywhere St., Any City',
      website: 'reallygreatsite.com'
    },
    about: 'An experienced Marketing Manager with exceptional skills in creating marketing plans, launching products, promoting them, and increasing brand awareness. I\'m creative, detail-oriented, a team player, with extensive world media audience engagement, and brand management.',
    education: [
      {
        degree: 'Master of Business',
        school: 'Wardiere University',
        period: '2016 - 2018'
      },
      {
        degree: 'BA Sales and Commerce',
        school: 'Wardiere University',
        period: '2012 - 2016'
      }
    ],
    skills: [
      'BCR Calculations',
      'Social media marketing',
      'Product development lifecycle',
      'Marketing strategy',
      'Product promotion',
      'Value propositions'
    ],
    languages: ['English', 'French'],
    experience: [
      {
        position: 'Marketing Manager',
        company: 'Borcelle Company',
        period: 'Aug 2018 - present',
        responsibilities: [
          'Handled various office tasks.',
          'Constantly updated the company\'s content and mailing lists.',
          'Monitored ongoing marketing campaigns.',
          'Increased sales coverage.'
        ]
      },
      {
        position: 'Marketing Assistant',
        company: 'Timmerman Industries',
        period: 'Jul 2016 - Aug 2018',
        responsibilities: [
          'Handled the company\'s online presence — regularly updated the company\'s website and various social media accounts.',
          'Monitored ongoing marketing campaigns.'
        ]
      },
      {
        position: 'Marketing Assistant',
        company: 'Utenim & Co',
        period: 'Aug 2014 - Jul 2016',
        responsibilities: [
          'Handled the company\'s online presence — regularly updated the company\'s website and various social media accounts.'
        ]
      }
    ],
    references: [
      {
        name: 'Estelle Darcy',
        title: 'Wardiere Inc. | CEO',
        phone: '+123-456-7890',
        email: 'hello@reallygreatsite.com'
      },
      {
        name: 'Harper Russo',
        title: 'Timmerman | CEO',
        phone: '+123-456-7890',
        email: 'hello@reallygreatsite.com'
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

  const handleContactChange = (field, value) => {
    setTemplateData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
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

  const handleLanguageChange = (index, value) => {
    setTemplateData(prev => ({
      ...prev,
      languages: prev.languages.map((lang, i) => i === index ? value : lang)
    }));
  };

  const addLanguage = () => {
    setTemplateData(prev => ({
      ...prev,
      languages: [...prev.languages, 'New language']
    }));
  };

  const removeLanguage = (index) => {
    setTemplateData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
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
      education: [...prev.education, { degree: '', school: '', period: '' }]
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

  const removeResponsibility = (expIndex, respIndex) => {
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === expIndex 
          ? { 
              ...exp, 
              responsibilities: exp.responsibilities.filter((_, j) => j !== respIndex)
            } 
          : exp
      )
    }));
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
    setTemplateData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const handleReferenceChange = (index, field, value) => {
    setTemplateData(prev => ({
      ...prev,
      references: prev.references.map((ref, i) => 
        i === index ? { ...ref, [field]: value } : ref
      )
    }));
  };

  const addReference = () => {
    setTemplateData(prev => ({
      ...prev,
      references: [...prev.references, { 
        name: '', 
        title: '', 
        phone: '', 
        email: '' 
      }]
    }));
  };

  const removeReference = (index) => {
    setTemplateData(prev => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index)
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
    
    // Generate the complete HTML with the current template data - EXACTLY matching the CreativeTemplate component
    const templateHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Creative Resume - ${templateData.name}</title>
          <meta charset="UTF-8">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Poppins', sans-serif;
              background: #f3f4f6;
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
            font-family: 'Poppins', sans-serif;
            background-color: #f3f4f6;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <main class="main-container" style="
              max-width: 1024px;
              width: 100%;
              background-color: white;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              border-radius: 8px;
              overflow: hidden;
              display: flex;
              flex-direction: row;
            ">
              <!-- Left Column (Dark Background) -->
              <aside style="
                width: 33.333333%;
                background-color: #2c3e50;
                color: white;
                padding: 32px;
              ">
                <!-- Profile Picture -->
                <div style="
                  display: flex;
                  justify-content: center;
                  margin-bottom: 32px;
                ">
                  <div style="
                    width: 144px;
                    height: 144px;
                    border-radius: 50%;
                    border: 4px solid #9CA3AF;
                    background-color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    font-weight: bold;
                    color: #2c3e50;
                    ${templateData.photo ? `background-image: url(${templateData.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ''}
                  ">
                    ${!templateData.photo ? templateData.name.split(' ').map(n => n[0]).join('') : ''}
                  </div>
                </div>

                <!-- Contact Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Contact</h2>
                  <div style="display: flex; flex-direction: column; gap: 12px;">
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">📧</span>
                      ${templateData.contact.email}
                    </p>
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">📞</span>
                      ${templateData.contact.phone}
                    </p>
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">📍</span>
                      ${templateData.contact.address}
                    </p>
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">🌐</span>
                      ${templateData.contact.website}
                    </p>
                  </div>
                </section>

                <!-- Education Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Education</h2>
                  ${templateData.education.map(edu => `
                    <div style="margin-bottom: 20px;">
                      <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 4px; color: white;">${edu.degree}</h3>
                      <p style="font-size: 14px; color: #D1D5DB; margin-bottom: 2px;">${edu.school}</p>
                      <p style="font-size: 12px; color: #9CA3AF; margin: 0;">${edu.period}</p>
                    </div>
                  `).join('')}
                </section>

                <!-- Skills Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Skills</h2>
                  ${templateData.skills.map(skill => `
                    <div style="margin-bottom: 8px;">
                      <span style="font-size: 14px; color: white;">• ${skill}</span>
                    </div>
                  `).join('')}
                </section>

                <!-- Languages Section -->
                <section>
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Languages</h2>
                  ${templateData.languages.map(lang => `
                    <div style="margin-bottom: 8px;">
                      <span style="font-size: 14px; color: white;">• ${lang}</span>
                    </div>
                  `).join('')}
                </section>
              </aside>

              <!-- Right Column (Main Content) -->
              <div style="
                flex: 1;
                padding: 32px;
                color: #374151;
              ">
                <!-- Header -->
                <header style="
                  margin-bottom: 32px;
                  text-align: left;
                ">
                  <h1 style="
                    font-size: 48px;
                    font-weight: bold;
                    color: #1F2937;
                    margin: 0;
                    font-family: 'League Spartan', sans-serif;
                    line-height: 1.1;
                  ">${templateData.name}</h1>
                  <p style="
                    font-size: 20px;
                    color: #6B7280;
                    margin: 8px 0 0 0;
                    font-weight: 500;
                  ">${templateData.title}</p>
                </header>

                <!-- About Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    color: #1F2937;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">About Me</h2>
                  <p style="
                    font-size: 14px;
                    line-height: 1.6;
                    color: #4B5563;
                    margin: 0;
                  ">${templateData.about}</p>
                </section>

                <!-- Experience Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    color: #1F2937;
                    margin-bottom: 24px;
                    font-family: 'League Spartan', sans-serif;
                  ">Work Experience</h2>
                  ${templateData.experience.map(exp => `
                    <div style="margin-bottom: 32px;">
                      <div style="margin-bottom: 12px;">
                        <h3 style="
                          font-size: 18px;
                          font-weight: 600;
                          color: #1F2937;
                          margin: 0;
                        ">${exp.position}</h3>
                        <p style="
                          font-size: 16px;
                          color: #6B7280;
                          font-weight: 500;
                          margin: 4px 0;
                        ">${exp.company}</p>
                        <p style="
                          font-size: 14px;
                          color: #9CA3AF;
                          margin: 0;
                        ">${exp.period}</p>
                      </div>
                      <ul style="
                        margin: 0;
                        padding-left: 20px;
                        color: #4B5563;
                      ">
                        ${exp.responsibilities.map(resp => `
                          <li style="
                            font-size: 14px;
                            line-height: 1.5;
                            margin-bottom: 4px;
                          ">${resp}</li>
                        `).join('')}
                      </ul>
                    </div>
                  `).join('')}
                </section>

                <!-- References Section -->
                <section>
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    color: #1F2937;
                    margin-bottom: 24px;
                    font-family: 'League Spartan', sans-serif;
                  ">References</h2>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                    ${templateData.references.map(ref => `
                      <div>
                        <h3 style="
                          font-size: 16px;
                          font-weight: 600;
                          color: #1F2937;
                          margin: 0 0 4px 0;
                        ">${ref.name}</h3>
                        <p style="
                          font-size: 14px;
                          color: #6B7280;
                          margin: 0 0 8px 0;
                        ">${ref.title}</p>
                        <p style="
                          font-size: 12px;
                          color: #9CA3AF;
                          margin: 2px 0;
                        ">${ref.phone}</p>
                        <p style="
                          font-size: 12px;
                          color: #9CA3AF;
                          margin: 2px 0;
                        ">${ref.email}</p>
                      </div>
                    `).join('')}
                  </div>
                </section>
              </div>
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
            value={templateData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            value={templateData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={templateData.contact.email}
            onChange={(e) => handleContactChange('email', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={templateData.contact.phone}
            onChange={(e) => handleContactChange('phone', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={templateData.contact.address}
            onChange={(e) => handleContactChange('address', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input
            type="text"
            value={templateData.contact.website}
            onChange={(e) => handleContactChange('website', e.target.value)}
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
                    border: '2px solid #ddd'
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
          <label>About Me</label>
          <textarea
            value={templateData.about}
            onChange={(e) => handleInputChange('about', e.target.value)}
            className="form-textarea"
            rows="4"
          />
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="editor-section">
      <h3>Skills & Languages</h3>
      <div className="qualifications-grid">
        <div className="qualification-column">
          <h4>Skills</h4>
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
        <div className="qualification-column">
          <h4>Languages</h4>
          {templateData.languages.map((language, index) => (
            <div key={index} className="qualification-item">
              <input
                type="text"
                value={language}
                onChange={(e) => handleLanguageChange(index, e.target.value)}
                className="form-input"
              />
              <button
                onClick={() => removeLanguage(index)}
                className="remove-btn"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={addLanguage}
            className="add-btn"
          >
            + Add Language
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
              <div key={respIndex} className="qualification-item">
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
              className="add-btn small"
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

  const renderReferencesSection = () => (
    <div className="editor-section">
      <h3>References</h3>
      {templateData.references.map((ref, index) => (
        <div key={index} className="education-item">
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={ref.name}
                onChange={(e) => handleReferenceChange(index, 'name', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={ref.title}
                onChange={(e) => handleReferenceChange(index, 'title', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                value={ref.phone}
                onChange={(e) => handleReferenceChange(index, 'phone', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={ref.email}
                onChange={(e) => handleReferenceChange(index, 'email', e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          <button
            onClick={() => removeReference(index)}
            className="remove-btn"
            style={{ marginTop: '10px' }}
          >
            Remove Reference
          </button>
        </div>
      ))}
      <button
        onClick={addReference}
        className="add-btn"
      >
        + Add Reference
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
      case 'references':
        return renderReferencesSection();
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
          <h1>Edit Creative Template</h1>
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
              🎯 Skills & Languages
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
            <button
              className={`nav-item ${activeSection === 'references' ? 'active' : ''}`}
              onClick={() => setActiveSection('references')}
            >
              👥 References
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
            <div style={{ transform: 'scale(0.4)', transformOrigin: 'top left', width: '250%', height: '250%' }}>
              <CreativeTemplate data={templateData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeTemplateEditor;
