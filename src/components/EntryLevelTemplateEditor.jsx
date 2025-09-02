import React, { useState } from 'react';
import EntryLevelTemplate from './EntryLevelTemplate';
import './ResumeTemplates.css';

function EntryLevelTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    personalInfo: {
      fullName: 'Thomas Beasley',
      jobTitle: 'Entry-level Resume',
      phone: '(206) 555-1234',
      email: 'your-name@email.com',
      address: '3665 McLaughlin Street, Seattle, WA 98039',
      photo: null
    },
    summary: 'Passionate Technology Assistant skilled at troubleshooting and repairing digital devices. Excellent people skills from managing the tech support desk at Seattle Community Center. Looking to secure an entry-level position in retail where I can utilize my strong customer service skills and technical knowledge to enhance the customer experience and contribute positively to the team at [Company Name].',
    education: [
      {
        degree: 'Bachelor\'s Degree in Business Administration I',
        institution: 'Spokane University',
        location: 'Spokane, WA',
        date: 'May 20XX',
        gpa: '3.7/4.0',
        coursework: 'Implementation of Contemporary Business Practices',
        dissertation: 'Federal & State Business Law & Regulations, Introduction to HR Theory & Practices, Company Diversity and Inclusion, Introduction to Employer Contract Law'
      }
    ],
    experience: [
      {
        position: 'Volunteer Technology Assistant I',
        company: 'Seattle Community Center',
        location: 'Seattle, WA',
        period: 'Feb 20XX – Present',
        responsibilities: [
          'Set up and repair technology devices for community members',
          'Manage service queues, ensuring community members receive timely updates on service status',
          'Engage with diverse clients to understand technology issues',
          'Document detailed notes and estimate completion times'
        ]
      }
    ],
    skills: [
      'Customer service',
      'Team collaboration',
      'Troubleshooting',
      'Multitasking',
      'Organizing and scheduling',
      'Time management',
      'Verbal communication'
    ],
    hobbies: [
      {
        title: 'Coding',
        description: 'Recently completed a Python bootcamp'
      },
      {
        title: 'Digital art',
        description: 'Create unique illustrations using Adobe Fresco'
      },
      {
        title: 'Soccer',
        description: 'Play for a local team'
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

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        handlePersonalInfoChange('photo', event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoRemove = () => {
    handlePersonalInfoChange('photo', null);
  };

  const handleSummaryChange = (value) => {
    setTemplateData(prev => ({
      ...prev,
      summary: value
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
      education: [...prev.education, { 
        degree: '', 
        institution: '', 
        location: '', 
        date: '', 
        gpa: '', 
        coursework: '', 
        dissertation: '' 
      }]
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

  const handleHobbyChange = (index, field, value) => {
    setTemplateData(prev => ({
      ...prev,
      hobbies: prev.hobbies.map((hobby, i) => 
        i === index ? { ...hobby, [field]: value } : hobby
      )
    }));
  };

  const addHobby = () => {
    setTemplateData(prev => ({
      ...prev,
      hobbies: [...prev.hobbies, { title: '', description: '' }]
    }));
  };

  const removeHobby = (index) => {
    setTemplateData(prev => ({
      ...prev,
      hobbies: prev.hobbies.filter((_, i) => i !== index)
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
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Montserrat', sans-serif;
              background: #f5f5f5;
              color: #1f2937;
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
            font-family: 'Montserrat', sans-serif;
            background-color: #f5f5f5;
            color: #1f2937;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 32px 16px;
          ">
            <div style="
              max-width: 896px;
              width: 100%;
              margin: 32px auto;
              background-color: white;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
              overflow: hidden;
            ">
              <!-- Header -->
              <header style="
                background-color: #dbe7f0;
                text-align: center;
                padding: 32px 16px;
              ">
                <h1 style="
                  font-size: 24px;
                  font-weight: 600;
                  line-height: 1.2;
                  margin: 0;
                ">
                  ${templateData.personalInfo.fullName}
                </h1>
                <p style="
                  text-transform: uppercase;
                  font-size: 12px;
                  letter-spacing: 0.1em;
                  color: #4b5563;
                  margin: 4px 0 0 0;
                ">
                  ${templateData.personalInfo.jobTitle}
                </p>
                <div style="
                  color: #4b5563;
                  margin-top: 12px;
                  font-size: 14px;
                  max-width: 512px;
                  margin: 12px auto 0 auto;
                  display: flex;
                  flex-direction: column;
                  gap: 8px;
                  align-items: center;
                ">
                  <div style="
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                  ">
                    <span>${templateData.personalInfo.phone}</span>
                    <span>•</span>
                    <span>${templateData.personalInfo.address}</span>
                    <span>•</span>
                    <a href="mailto:${templateData.personalInfo.email}" style="
                      color: #4b5563;
                      text-decoration: none;
                    ">
                      ${templateData.personalInfo.email}
                    </a>
                  </div>
                </div>
              </header>

              <!-- Main Content -->
              <main style="padding: 24px;">
                <!-- Summary -->
                <section style="
                  background-color: #6ea6b9;
                  color: white;
                  border-radius: 6px;
                  padding: 16px;
                  margin-bottom: 24px;
                ">
                  <h2 style="
                    text-align: center;
                    font-weight: 600;
                    margin-bottom: 8px;
                    font-size: 16px;
                    margin: 0 0 8px 0;
                  ">
                    Summary
                  </h2>
                  <p style="
                    font-size: 14px;
                    line-height: 1.5;
                    margin: 0;
                  ">
                    ${templateData.summary}
                  </p>
                </section>

                <!-- Education -->
                <section style="margin-bottom: 24px;">
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Education
                  </h3>
                  ${templateData.education.map(edu => `
                    <div>
                      <p style="
                        font-size: 16px;
                        margin: 0 0 8px 0;
                      ">
                        <strong>${edu.degree}</strong> ${edu.institution}
                      </p>
                      <p style="
                        font-size: 14px;
                        color: #374151;
                        margin: 0 0 8px 0;
                      ">
                        ${edu.date} I ${edu.location}
                      </p>
                      <p style="
                        font-size: 14px;
                        margin: 0 0 4px 0;
                      ">
                        <strong>GPA:</strong> ${edu.gpa}
                      </p>
                      <p style="
                        font-size: 14px;
                        margin: 0 0 4px 0;
                      ">
                        <strong>Relevant Coursework:</strong> ${edu.coursework}
                      </p>
                      <p style="
                        font-size: 14px;
                        margin: 0;
                      ">
                        <strong>Dissertation Title:</strong> ${edu.dissertation}
                      </p>
                    </div>
                  `).join('')}
                </section>

                <!-- Experience -->
                <section style="margin-bottom: 24px;">
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Relevant Experience
                  </h3>
                  ${templateData.experience.map(exp => `
                    <div>
                      <p style="
                        font-size: 16px;
                        margin: 0 0 8px 0;
                      ">
                        <strong>${exp.position}</strong> ${exp.company}
                      </p>
                      <p style="
                        font-size: 14px;
                        color: #374151;
                        margin: 0 0 8px 0;
                      ">
                        ${exp.period} I ${exp.location}
                      </p>
                      <ul style="
                        list-style: disc;
                        list-style-position: inside;
                        font-size: 14px;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        color: #1f2937;
                      ">
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                      </ul>
                    </div>
                  `).join('')}
                </section>

                <!-- Skills -->
                <section style="margin-bottom: 24px;">
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Key Skills
                  </h3>
                  <div style="
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0 48px;
                    font-size: 14px;
                    color: #1f2937;
                  ">
                    <ul style="
                      list-style: disc;
                      list-style-position: inside;
                      margin: 0;
                      padding: 0;
                      display: flex;
                      flex-direction: column;
                      gap: 4px;
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
                      gap: 4px;
                    ">
                      ${templateData.skills.slice(Math.ceil(templateData.skills.length / 2)).map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                  </div>
                </section>

                <!-- Hobbies & Interests -->
                <section>
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Hobbies & Interests
                  </h3>
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    font-size: 14px;
                    color: #1f2937;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                  ">
                    ${templateData.hobbies.map(hobby => `
                      <li>
                        <strong>${hobby.title}:</strong> ${hobby.description}
                      </li>
                    `).join('')}
                  </ul>
                </section>
              </main>
            </div>
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
            value={templateData.personalInfo.jobTitle}
            onChange={(e) => handlePersonalInfoChange('jobTitle', e.target.value)}
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
        <div className="form-group full-width">
          <label>Profile Photo</label>
          <div className="photo-upload-container">
            {templateData.personalInfo.photo ? (
              <div className="photo-preview">
                <img 
                  src={templateData.personalInfo.photo} 
                  alt="Profile" 
                  className="photo-preview-img"
                />
                <button 
                  type="button" 
                  onClick={handlePhotoRemove}
                  className="photo-remove-btn"
                  title="Remove photo"
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="photo-upload">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="photo-input"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="photo-upload-label">
                  <div className="photo-upload-placeholder">
                    <span className="photo-upload-icon">📷</span>
                    <span>Click to upload photo</span>
                  </div>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSummarySection = () => (
    <div className="editor-section">
      <h3>Summary</h3>
      <div className="form-grid">
        <div className="form-group full-width">
          <label>Professional Summary</label>
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

  const renderEducationSection = () => (
    <div className="editor-section">
      <h3>Education</h3>
      {templateData.education.map((edu, index) => (
        <div key={index} className="education-item" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
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
            <div className="form-group">
              <label>GPA</label>
              <input
                type="text"
                value={edu.gpa}
                onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group full-width">
              <label>Relevant Coursework</label>
              <input
                type="text"
                value={edu.coursework}
                onChange={(e) => handleEducationChange(index, 'coursework', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group full-width">
              <label>Dissertation Title</label>
              <textarea
                value={edu.dissertation}
                onChange={(e) => handleEducationChange(index, 'dissertation', e.target.value)}
                className="form-textarea"
                rows="3"
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
      <h3>Experience</h3>
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

  const renderHobbiesSection = () => (
    <div className="editor-section">
      <h3>Hobbies & Interests</h3>
      {templateData.hobbies.map((hobby, index) => (
        <div key={index} className="qualification-item" style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}>
          <div className="form-grid">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={hobby.title}
                onChange={(e) => handleHobbyChange(index, 'title', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                value={hobby.description}
                onChange={(e) => handleHobbyChange(index, 'description', e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          <button
            onClick={() => removeHobby(index)}
            className="remove-btn"
            style={{ marginTop: '10px' }}
          >
            Remove Hobby
          </button>
        </div>
      ))}
      <button
        onClick={addHobby}
        className="add-btn"
      >
        + Add Hobby
      </button>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return renderPersonalSection();
      case 'summary':
        return renderSummarySection();
      case 'education':
        return renderEducationSection();
      case 'experience':
        return renderExperienceSection();
      case 'skills':
        return renderSkillsSection();
      case 'hobbies':
        return renderHobbiesSection();
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
          <h1>Edit Entry-Level Template</h1>
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
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              🎯 Skills
            </button>
            <button
              className={`nav-item ${activeSection === 'hobbies' ? 'active' : ''}`}
              onClick={() => setActiveSection('hobbies')}
            >
              🎮 Hobbies
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
              backgroundImage: 'url("/entry-level.jpg")',
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
                <div style={{ transform: 'scale(0.35)', transformOrigin: 'top left', width: '285%', height: '285%' }}>
                  <EntryLevelTemplate data={templateData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntryLevelTemplateEditor;
