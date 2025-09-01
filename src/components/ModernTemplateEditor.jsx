import React, { useState } from 'react';
import ModernTemplate from './ModernTemplate';
import './ResumeTemplates.css';

function ModernTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    personalInfo: {
      fullName: 'Alfredo Curtis',
      position: 'UX / UI Designer',
      photo: null,
      location: 'Istanbul, Türkiye',
      experience: '6 years of experience creating captivating web and mobile interfaces.',
      description: 'Graphic design graduate from Istanbul University, blending strong visual aesthetics with user-centric design principles. Passionate about transforming complex ideas into intuitive, engaging digital experiences. Constantly evolving skill set to stay ahead in the fast-paced tech world.'
    },
    contact: {
      website: 'burakhanarsicicek.com',
      email: 'burakhanarsicicek@outlook.com',
      phone: '+90 505 514 9960',
      linkedin: 'Linkedin'
    },
    skills: [
      'Product design',
      'Prototyping',
      'Flowchart',
      'Wireframing',
      'Interface design'
    ],
    tools: [
      'Figma',
      'Framer',
      'Adobe XD',
      'Sketch',
      'Photoshop'
    ],
    languages: [
      'Turkish (Native)',
      'English (C1)'
    ],
    experience: [
      {
        position: 'Product Designer',
        company: 'Air BnB',
        year: '2024'
      },
      {
        position: 'Framer Partner',
        company: 'Framer',
        year: '2024'
      },
      {
        position: 'Project Manager',
        company: 'Apple',
        year: '2023'
      },
      {
        position: 'UX / UI Designer',
        company: 'Fiverr LTD',
        year: '2020'
      },
      {
        position: 'Graphic Designer',
        company: 'Meta Inc.',
        year: '2018'
      },
      {
        position: 'Accounting Intern',
        company: 'Domino\'s',
        year: '2017'
      }
    ],
    education: [
      {
        degree: 'Computer Programming',
        institution: 'Istanbul University',
        period: 'August 2024'
      }
    ],
    portfolio: {
      text: 'Check out my portfolio',
      qrCode: null
    }
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
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setTemplateData(prev => ({
            ...prev,
            personalInfo: {
              ...prev.personalInfo,
              photo: e.target.result
            }
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
      personalInfo: {
        ...prev.personalInfo,
        photo: null
      }
    }));
  };

  const handleQRCodeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setTemplateData(prev => ({
            ...prev,
            portfolio: {
              ...prev.portfolio,
              qrCode: e.target.result
            }
          }));
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select a valid image file (PNG, JPG, JPEG, GIF)');
      }
    }
  };

  const removeQRCode = () => {
    setTemplateData(prev => ({
      ...prev,
      portfolio: {
        ...prev.portfolio,
        qrCode: null
      }
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

  const handleToolChange = (index, value) => {
    setTemplateData(prev => ({
      ...prev,
      tools: prev.tools.map((tool, i) => i === index ? value : tool)
    }));
  };

  const addTool = () => {
    setTemplateData(prev => ({
      ...prev,
      tools: [...prev.tools, 'New tool']
    }));
  };

  const removeTool = (index) => {
    setTemplateData(prev => ({
      ...prev,
      tools: prev.tools.filter((_, i) => i !== index)
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
      education: [...prev.education, { degree: '', institution: '', period: '' }]
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

  const addExperience = () => {
    setTemplateData(prev => ({
      ...prev,
      experience: [...prev.experience, { 
        position: '', 
        company: '', 
        year: '' 
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
    const printWindow = window.open('', '_blank');
    
    const templateHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${templateData.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Inter', sans-serif;
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
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 16px;
          ">
            <main style="
              background-color: white;
              max-width: 800px;
              width: 100%;
              padding: 32px;
              position: relative;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
            ">
              <!-- Header Section -->
              <section style="
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                gap: 24px;
                margin-bottom: 24px;
              ">
                <!-- Profile Photo -->
                <div style="
                  width: 100px;
                  height: 100px;
                  border-radius: 12px;
                  background-color: #f3f4f6;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 24px;
                  font-weight: bold;
                  color: #374151;
                  flex-shrink: 0;
                  ${templateData.personalInfo.photo ? `background-image: url(${templateData.personalInfo.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ''}
                ">
                  ${!templateData.personalInfo.photo ? templateData.personalInfo.fullName.split(' ').map(n => n[0]).join('') : ''}
                </div>

                <!-- Personal Info -->
                <div style="
                  flex: 1;
                  font-size: 13px;
                  line-height: 1.4;
                  color: #1a1a1a;
                ">
                  <h1 style="
                    font-weight: 600;
                    font-size: 14px;
                    margin: 0 0 2px 0;
                  ">
                    ${templateData.personalInfo.fullName}
                  </h1>
                  
                  <p style="
                    color: #666666;
                    margin: 0 0 8px 0;
                    font-size: 12px;
                  ">
                    ${templateData.personalInfo.position}
                  </p>
                  
                  <p style="margin: 0 0 8px 0;">
                    Based in ${templateData.personalInfo.location}. ${templateData.personalInfo.experience}
                  </p>
                  
                  <p style="margin: 0;">
                    ${templateData.personalInfo.description}
                  </p>
                </div>
              </section>

              <!-- Skills, Tools, Languages & Contact Grid -->
              <section style="
                margin-top: 24px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 32px;
                font-size: 11px;
                color: #1a1a1a;
              ">
                <!-- Skills -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Skills
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${templateData.skills.map(skill => `<li>${skill}</li>`).join('')}
                  </ul>
                </div>

                <!-- Tools -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Tools
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${templateData.tools.map(tool => `<li>${tool}</li>`).join('')}
                  </ul>
                </div>

                <!-- Languages -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Languages
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${templateData.languages.map(language => `<li>${language}</li>`).join('')}
                  </ul>
                </div>

                <!-- Contact -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Contact
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    <li>
                      <a href="https://${templateData.contact.website}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${templateData.contact.website}
                      </a>
                    </li>
                    <li>
                      <a href="mailto:${templateData.contact.email}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${templateData.contact.email}
                      </a>
                    </li>
                    <li>
                      <a href="tel:${templateData.contact.phone}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${templateData.contact.phone}
                      </a>
                    </li>
                    <li>
                      <a href="#" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${templateData.contact.linkedin}
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <!-- Work Experience Section -->
              <section style="
                margin-top: 24px;
                font-size: 12px;
                color: #1a1a1a;
              ">
                <h2 style="
                  font-weight: 600;
                  margin: 0 0 12px 0;
                  font-size: 13px;
                ">
                  Work Experience
                </h2>
                
                <div style="
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 32px;
                ">
                  ${templateData.experience.map(job => `
                    <div>
                      <p style="
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin: 0 0 2px 0;
                      ">
                        <span style="
                          width: 8px;
                          height: 8px;
                          border-radius: 50%;
                          background-color: black;
                          display: inline-block;
                        "></span>
                        <span style="font-weight: 600;">
                          ${job.position}
                        </span>
                      </p>
                      <p style="
                        font-size: 11px;
                        margin: 0 0 2px 0;
                      ">
                        ${job.company}
                      </p>
                      <p style="
                        font-size: 10px;
                        color: #666666;
                        margin: 0;
                      ">
                        ${job.year}
                      </p>
                      <hr style="
                        border: none;
                        border-top: 1px solid #d9d9d9;
                        margin: 12px 0 0 0;
                      " />
                    </div>
                  `).join('')}
                </div>
              </section>

              <!-- Education Section -->
              <section style="
                margin-top: 24px;
                font-size: 12px;
                color: #1a1a1a;
              ">
                <h2 style="
                  font-weight: 600;
                  margin: 0 0 8px 0;
                  font-size: 13px;
                ">
                  Education
                </h2>
                
                ${templateData.education.map(edu => `
                  <div>
                    <p style="
                      display: flex;
                      align-items: center;
                      gap: 8px;
                      margin: 0 0 2px 0;
                    ">
                      <span style="
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: black;
                        display: inline-block;
                      "></span>
                      <span style="font-weight: 600;">
                        ${edu.degree}
                      </span>
                    </p>
                    <p style="
                      font-size: 11px;
                      margin: 0 0 2px 0;
                    ">
                      ${edu.institution}
                    </p>
                    <p style="
                      font-size: 10px;
                      color: #666666;
                      margin: 0;
                    ">
                      ${edu.period}
                    </p>
                  </div>
                `).join('')}
              </section>

              <!-- Portfolio Section -->
              <section style="
                margin-top: 32px;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 12px;
                color: #1a1a1a;
                font-family: 'Indie Flower', cursive;
                position: absolute;
                bottom: 32px;
                right: 32px;
              ">
                <p style="
                  margin: 0 0 4px 0;
                  line-height: 1.1;
                  text-align: center;
                ">
                  ${templateData.portfolio.text.split(' ').slice(0, 2).join(' ')}<br/>
                  ${templateData.portfolio.text.split(' ').slice(2).join(' ')}
                </p>
                
                <div style="
                  width: 80px;
                  height: 80px;
                  background-color: #f3f4f6;
                  border: 2px solid #e5e7eb;
                  border-radius: 4px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 10px;
                  color: #6b7280;
                  text-align: center;
                  ${templateData.portfolio.qrCode ? `background-image: url(${templateData.portfolio.qrCode}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ''}
                ">
                  ${!templateData.portfolio.qrCode ? 'QR Code' : ''}
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
          <label>Job Title</label>
          <input
            type="text"
            value={templateData.personalInfo.position}
            onChange={(e) => handlePersonalInfoChange('position', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={templateData.personalInfo.location}
            onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group full-width">
          <label>Profile Photo</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {templateData.personalInfo.photo && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img 
                  src={templateData.personalInfo.photo} 
                  alt="Profile preview" 
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '8px', 
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
          </div>
        </div>
        <div className="form-group full-width">
          <label>Experience Summary</label>
          <input
            type="text"
            value={templateData.personalInfo.experience}
            onChange={(e) => handlePersonalInfoChange('experience', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group full-width">
          <label>Description</label>
          <textarea
            value={templateData.personalInfo.description}
            onChange={(e) => handlePersonalInfoChange('description', e.target.value)}
            className="form-textarea"
            rows="4"
          />
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="editor-section">
      <h3>Contact Information</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Website</label>
          <input
            type="text"
            value={templateData.contact.website}
            onChange={(e) => handleContactChange('website', e.target.value)}
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
          <label>LinkedIn</label>
          <input
            type="text"
            value={templateData.contact.linkedin}
            onChange={(e) => handleContactChange('linkedin', e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group full-width">
          <label>Portfolio QR Code</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {templateData.portfolio.qrCode && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img 
                  src={templateData.portfolio.qrCode} 
                  alt="QR Code preview" 
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '4px', 
                    objectFit: 'cover',
                    border: '2px solid #ddd'
                  }} 
                />
                <button
                  type="button"
                  onClick={removeQRCode}
                  className="remove-btn"
                  style={{ padding: '5px 10px', fontSize: '12px' }}
                >
                  Remove QR Code
                </button>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleQRCodeUpload}
              className="form-input"
              style={{ padding: '8px' }}
            />
          </div>
        </div>
        <div className="form-group full-width">
          <label>Portfolio Text</label>
          <input
            type="text"
            value={templateData.portfolio.text}
            onChange={(e) => setTemplateData(prev => ({
              ...prev,
              portfolio: {
                ...prev.portfolio,
                text: e.target.value
              }
            }))}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="editor-section">
      <h3>Skills & Tools</h3>
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
          <h4>Tools</h4>
          {templateData.tools.map((tool, index) => (
            <div key={index} className="qualification-item">
              <input
                type="text"
                value={tool}
                onChange={(e) => handleToolChange(index, e.target.value)}
                className="form-input"
              />
              <button
                onClick={() => removeTool(index)}
                className="remove-btn"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={addTool}
            className="add-btn"
          >
            + Add Tool
          </button>
        </div>
      </div>
      
      <div style={{ marginTop: '20px' }}>
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
              <label>Year</label>
              <input
                type="text"
                value={exp.year}
                onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
                className="form-input"
              />
            </div>
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
      case 'contact':
        return renderContactSection();
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
          <h1>Edit Modern Template</h1>
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
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact')}
            >
              📞 Contact & Portfolio
            </button>
            <button
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              🎯 Skills & Tools
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
            <div style={{ transform: 'scale(0.4)', transformOrigin: 'top left', width: '250%', height: '250%' }}>
              <ModernTemplate data={templateData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModernTemplateEditor;
