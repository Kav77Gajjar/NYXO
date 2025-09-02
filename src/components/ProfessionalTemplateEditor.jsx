import React, { useState } from 'react';
import ProfessionalTemplate from './ProfessionalTemplate';
import './ResumeTemplates.css';

const ProfessionalTemplateEditor = ({ onNavigateBack, onSave, initialData }) => {
  // Get user profile data or use default
  const getUserProfileData = () => {
    try {
      const savedProfile = localStorage.getItem('userProfileData');
      if (savedProfile) {
        const profileData = JSON.parse(savedProfile);
        return {
          fullName: profileData.personalInfo?.fullName?.toUpperCase() || 'JOHN DOE',
          jobTitle: profileData.experience?.[0]?.title || 'Senior Software Engineer',
          email: profileData.personalInfo?.email || 'john.doe@email.com',
          phone: profileData.personalInfo?.phone || '(555) 123-4567',
          location: profileData.personalInfo?.location || 'San Francisco, CA',
          linkedin: profileData.personalInfo?.linkedin || 'linkedin.com/in/johndoe',
          summary: profileData.personalInfo?.aboutMe || 'Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.',
          experiences: profileData.experience?.map(exp => ({
            title: exp.title || '',
            company: exp.company || '',
            location: profileData.personalInfo?.location || '',
            startDate: exp.duration?.split(' - ')[0] || '',
            endDate: exp.duration?.split(' - ')[1] || '',
            responsibilities: [exp.description || '']
          })) || [{
            title: 'Senior Software Engineer',
            company: 'Tech Corp',
            location: 'San Francisco, CA',
            startDate: '2020',
            endDate: 'Present',
            responsibilities: [
              'Led development of microservices architecture serving 1M+ users',
              'Mentored junior developers and conducted code reviews',
              'Implemented CI/CD pipelines reducing deployment time by 50%'
            ]
          }],
          education: profileData.education?.map(edu => ({
            degree: edu.degree || '',
            school: edu.school || '',
            startDate: edu.year?.split(' - ')[0] || '',
            endDate: edu.year?.split(' - ')[1] || ''
          })) || [{
            degree: 'Bachelor of Science in Computer Science',
            school: 'University of Technology',
            startDate: '2012',
            endDate: '2016'
          }],
          technicalSkills: profileData.skills?.slice(0, Math.ceil((profileData.skills?.length || 0) / 2)) || ['JavaScript', 'React', 'Node.js', 'Python', 'Docker'],
          businessSkills: profileData.skills?.slice(Math.ceil((profileData.skills?.length || 0) / 2)) || ['Project Management', 'Team Leadership', 'Agile/Scrum'],
          certifications: [{
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            year: '2022'
          }],
          languages: [{
            language: 'English',
            proficiency: 'Native'
          }]
        };
      }
    } catch (error) {
      console.error('Error loading profile data:', error);
    }
    
    return {
      fullName: 'JOHN DOE',
      jobTitle: 'Senior Software Engineer',
      email: 'john.doe@email.com',
      phone: '(555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/johndoe',
      summary: 'Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.',
      experiences: [{
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        location: 'San Francisco, CA',
        startDate: '2020',
        endDate: 'Present',
        responsibilities: [
          'Led development of microservices architecture serving 1M+ users',
          'Mentored junior developers and conducted code reviews',
          'Implemented CI/CD pipelines reducing deployment time by 50%'
        ]
      }],
      education: [{
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        startDate: '2012',
        endDate: '2016'
      }],
      technicalSkills: ['JavaScript', 'React', 'Node.js', 'Python', 'Docker'],
      businessSkills: ['Project Management', 'Team Leadership', 'Agile/Scrum'],
      certifications: [{
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        year: '2022'
      }],
      languages: [{
        language: 'English',
        proficiency: 'Native'
      }]
    };
  };

  const [templateData, setTemplateData] = useState(initialData || getUserProfileData());
  const [activeSection, setActiveSection] = useState('personal');

  // Personal Info handlers
  const handlePersonalInfoChange = (field, value) => {
    setTemplateData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSummaryChange = (value) => {
    setTemplateData(prev => ({
      ...prev,
      summary: value
    }));
  };

  // Experience handlers
  const handleExperienceChange = (index, field, value) => {
    setTemplateData(prev => ({
      ...prev,
      experiences: prev.experiences.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    setTemplateData(prev => ({
      ...prev,
      experiences: prev.experiences.map((exp, i) => 
        i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.map((resp, j) => 
            j === respIndex ? value : resp
          )
        } : exp
      )
    }));
  };

  const addExperience = () => {
    setTemplateData(prev => ({
      ...prev,
      experiences: [...prev.experiences, {
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        responsibilities: ['']
      }]
    }));
  };

  const removeExperience = (index) => {
    if (templateData.experiences.length > 1) {
      setTemplateData(prev => ({
        ...prev,
        experiences: prev.experiences.filter((_, i) => i !== index)
      }));
    }
  };

  const addResponsibility = (expIndex) => {
    setTemplateData(prev => ({
      ...prev,
      experiences: prev.experiences.map((exp, i) => 
        i === expIndex ? {
          ...exp,
          responsibilities: [...exp.responsibilities, '']
        } : exp
      )
    }));
  };

  const removeResponsibility = (expIndex, respIndex) => {
    setTemplateData(prev => ({
      ...prev,
      experiences: prev.experiences.map((exp, i) => 
        i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.filter((_, j) => j !== respIndex)
        } : exp
      )
    }));
  };

  // Skills handlers
  const handleSkillChange = (skillType, index, value) => {
    setTemplateData(prev => ({
      ...prev,
      [skillType]: prev[skillType].map((skill, i) => 
        i === index ? value : skill
      )
    }));
  };

  const addSkill = (skillType) => {
    setTemplateData(prev => ({
      ...prev,
      [skillType]: [...prev[skillType], '']
    }));
  };

  const removeSkill = (skillType, index) => {
    if (templateData[skillType].length > 1) {
      setTemplateData(prev => ({
        ...prev,
        [skillType]: prev[skillType].filter((_, i) => i !== index)
      }));
    }
  };

  // Education handlers
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
        school: '',
        startDate: '',
        endDate: ''
      }]
    }));
  };

  const removeEducation = (index) => {
    if (templateData.education.length > 1) {
      setTemplateData(prev => ({
        ...prev,
        education: prev.education.filter((_, i) => i !== index)
      }));
    }
  };

  // Certification handlers
  const handleCertificationChange = (index, field, value) => {
    setTemplateData(prev => ({
      ...prev,
      certifications: prev.certifications.map((cert, i) => 
        i === index ? { ...cert, [field]: value } : cert
      )
    }));
  };

  const addCertification = () => {
    setTemplateData(prev => ({
      ...prev,
      certifications: [...prev.certifications, {
        name: '',
        issuer: '',
        year: ''
      }]
    }));
  };

  const removeCertification = (index) => {
    if (templateData.certifications.length > 1) {
      setTemplateData(prev => ({
        ...prev,
        certifications: prev.certifications.filter((_, i) => i !== index)
      }));
    }
  };

  // Language handlers
  const handleLanguageChange = (index, field, value) => {
    setTemplateData(prev => ({
      ...prev,
      languages: prev.languages.map((lang, i) => 
        i === index ? { ...lang, [field]: value } : lang
      )
    }));
  };

  const addLanguage = () => {
    setTemplateData(prev => ({
      ...prev,
      languages: [...prev.languages, {
        language: '',
        proficiency: ''
      }]
    }));
  };

  const removeLanguage = (index) => {
    if (templateData.languages.length > 1) {
      setTemplateData(prev => ({
        ...prev,
        languages: prev.languages.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSave = () => {
    onSave(templateData);
  };

  // Section renderers
  const renderPersonalSection = () => (
    <div className="editor-section">
      <h3>Personal Information</h3>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          value={templateData.fullName}
          onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
          className="form-input"
          placeholder="Your Full Name"
        />
      </div>
      <div className="form-group">
        <label>Job Title</label>
        <input
          type="text"
          value={templateData.jobTitle}
          onChange={(e) => handlePersonalInfoChange('jobTitle', e.target.value)}
          className="form-input"
          placeholder="Your Job Title"
        />
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={templateData.email}
            onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
            className="form-input"
            placeholder="your.email@example.com"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={templateData.phone}
            onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
            className="form-input"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={templateData.location}
            onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
            className="form-input"
            placeholder="City, State"
          />
        </div>
        <div className="form-group">
          <label>LinkedIn</label>
          <input
            type="text"
            value={templateData.linkedin}
            onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
            className="form-input"
            placeholder="linkedin.com/in/yourprofile"
          />
        </div>
      </div>
      <div className="form-group">
        <label>Professional Summary</label>
        <textarea
          value={templateData.summary}
          onChange={(e) => handleSummaryChange(e.target.value)}
          className="form-textarea"
          rows="4"
          placeholder="Brief professional summary highlighting your experience and key skills..."
        />
      </div>
    </div>
  );

  const renderExperienceSection = () => (
    <div className="editor-section">
      <h3>Work Experience</h3>
      {templateData.experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="form-grid">
            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                value={exp.title}
                onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                className="form-input"
                placeholder="Senior Software Engineer"
              />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                className="form-input"
                placeholder="Company Name"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                className="form-input"
                placeholder="San Francisco, CA"
              />
            </div>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                className="form-input"
                placeholder="2020"
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                className="form-input"
                placeholder="Present"
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
                  placeholder="Describe your key responsibilities and achievements..."
                />
                <button
                  onClick={() => removeResponsibility(index, respIndex)}
                  className="remove-btn"
                  disabled={exp.responsibilities.length === 1}
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={() => addResponsibility(index)}
              className="add-btn"
            >
              + Add Responsibility
            </button>
          </div>
          <button
            onClick={() => removeExperience(index)}
            className="remove-btn"
            style={{ marginTop: '10px' }}
            disabled={templateData.experiences.length === 1}
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
      <div className="skills-subsection">
        <h4>Technical Skills</h4>
        {templateData.technicalSkills.map((skill, index) => (
          <div key={index} className="qualification-item">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange('technicalSkills', index, e.target.value)}
              className="form-input"
              placeholder="JavaScript, React, Node.js..."
            />
            <button
              onClick={() => removeSkill('technicalSkills', index)}
              className="remove-btn"
              disabled={templateData.technicalSkills.length === 1}
            >
              ✕
            </button>
          </div>
        ))}
        <button
          onClick={() => addSkill('technicalSkills')}
          className="add-btn"
        >
          + Add Technical Skill
        </button>
      </div>
      
      <div className="skills-subsection">
        <h4>Business Skills</h4>
        {templateData.businessSkills.map((skill, index) => (
          <div key={index} className="qualification-item">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange('businessSkills', index, e.target.value)}
              className="form-input"
              placeholder="Project Management, Team Leadership..."
            />
            <button
              onClick={() => removeSkill('businessSkills', index)}
              className="remove-btn"
              disabled={templateData.businessSkills.length === 1}
            >
              ✕
            </button>
          </div>
        ))}
        <button
          onClick={() => addSkill('businessSkills')}
          className="add-btn"
        >
          + Add Business Skill
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
                placeholder="Bachelor of Science in Computer Science"
              />
            </div>
            <div className="form-group">
              <label>School</label>
              <input
                type="text"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                className="form-input"
                placeholder="University of Technology"
              />
            </div>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                value={edu.startDate}
                onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                className="form-input"
                placeholder="2012"
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                value={edu.endDate}
                onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                className="form-input"
                placeholder="2016"
              />
            </div>
          </div>
          <button
            onClick={() => removeEducation(index)}
            className="remove-btn"
            style={{ marginTop: '10px' }}
            disabled={templateData.education.length === 1}
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

  const renderCertificationsSection = () => (
    <div className="editor-section">
      <h3>Certifications</h3>
      {templateData.certifications.map((cert, index) => (
        <div key={index} className="certification-item">
          <div className="form-grid">
            <div className="form-group">
              <label>Certification Name</label>
              <input
                type="text"
                value={cert.name}
                onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
                className="form-input"
                placeholder="AWS Certified Solutions Architect"
              />
            </div>
            <div className="form-group">
              <label>Issuer</label>
              <input
                type="text"
                value={cert.issuer}
                onChange={(e) => handleCertificationChange(index, 'issuer', e.target.value)}
                className="form-input"
                placeholder="Amazon Web Services"
              />
            </div>
            <div className="form-group">
              <label>Year</label>
              <input
                type="text"
                value={cert.year}
                onChange={(e) => handleCertificationChange(index, 'year', e.target.value)}
                className="form-input"
                placeholder="2022"
              />
            </div>
          </div>
          <button
            onClick={() => removeCertification(index)}
            className="remove-btn"
            style={{ marginTop: '10px' }}
            disabled={templateData.certifications.length === 1}
          >
            Remove Certification
          </button>
        </div>
      ))}
      <button
        onClick={addCertification}
        className="add-btn"
      >
        + Add Certification
      </button>
    </div>
  );

  const renderLanguagesSection = () => (
    <div className="editor-section">
      <h3>Languages</h3>
      {templateData.languages.map((lang, index) => (
        <div key={index} className="language-item">
          <div className="form-grid">
            <div className="form-group">
              <label>Language</label>
              <input
                type="text"
                value={lang.language}
                onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
                className="form-input"
                placeholder="English"
              />
            </div>
            <div className="form-group">
              <label>Proficiency</label>
              <input
                type="text"
                value={lang.proficiency}
                onChange={(e) => handleLanguageChange(index, 'proficiency', e.target.value)}
                className="form-input"
                placeholder="Native, Fluent, Conversational"
              />
            </div>
          </div>
          <button
            onClick={() => removeLanguage(index)}
            className="remove-btn"
            style={{ marginTop: '10px' }}
            disabled={templateData.languages.length === 1}
          >
            Remove Language
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
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return renderPersonalSection();
      case 'experience':
        return renderExperienceSection();
      case 'skills':
        return renderSkillsSection();
      case 'education':
        return renderEducationSection();
      case 'certifications':
        return renderCertificationsSection();
      case 'languages':
        return renderLanguagesSection();
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
        >
          ← Back to Templates
        </button>
        <h1>Professional Resume Editor</h1>
        <button
          className="save-btn"
          onClick={handleSave}
        >
          💾 Save Template
        </button>
      </div>

      {/* Three-panel layout */}
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
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveSection('experience')}
            >
              💼 Experience
            </button>
            <button
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              🛠️ Skills
            </button>
            <button
              className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => setActiveSection('education')}
            >
              🎓 Education
            </button>
            <button
              className={`nav-item ${activeSection === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveSection('certifications')}
            >
              📜 Certifications
            </button>
            <button
              className={`nav-item ${activeSection === 'languages' ? 'active' : ''}`}
              onClick={() => setActiveSection('languages')}
            >
              🌐 Languages
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
              backgroundImage: 'url("/professional.jpg")',
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
                  <ProfessionalTemplate data={templateData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplateEditor;
