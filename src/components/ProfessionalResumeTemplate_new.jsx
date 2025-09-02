import React, { useState } from 'react';
import ProfessionalTemplate from './ProfessionalTemplate';
import ProfessionalTemplateEditor from './ProfessionalTemplateEditor';
import './ResumeTemplates.css';

function ProfessionalResumeTemplate({ onNavigateBack }) {
  const [currentView, setCurrentView] = useState('preview');
  const [templateData, setTemplateData] = useState(null);

  const handleEditTemplate = () => {
    setCurrentView('editor');
  };

  const handleBackToPreview = () => {
    setCurrentView('preview');
  };

  const handleSaveTemplate = (data) => {
    setTemplateData(data);
  };

  const handleDownloadPDF = () => {
    // Get user profile data or use default
    const getUserProfileData = () => {
      try {
        const savedProfile = localStorage.getItem('userProfileData');
        if (savedProfile) {
          const profileData = JSON.parse(savedProfile);
          return {
            fullName: profileData.personalInfo?.fullName?.toUpperCase() || 'YOUR NAME',
            jobTitle: profileData.experience?.[0]?.title || 'Your Job Title',
            email: profileData.personalInfo?.email || 'your.email@example.com',
            phone: profileData.personalInfo?.phone || '(123) 456-7890',
            location: profileData.personalInfo?.location || 'Your Location',
            linkedin: profileData.personalInfo?.linkedin || 'linkedin.com/in/yourprofile',
            summary: profileData.personalInfo?.aboutMe || 'Professional with extensive experience in the field.',
            experiences: profileData.experience?.map(exp => ({
              title: exp.title || '',
              company: exp.company || '',
              location: profileData.personalInfo?.location || '',
              startDate: exp.duration?.split(' - ')[0] || '',
              endDate: exp.duration?.split(' - ')[1] || '',
              responsibilities: [exp.description || '']
            })) || [],
            education: profileData.education?.map(edu => ({
              degree: edu.degree || '',
              school: edu.school || '',
              startDate: edu.year?.split(' - ')[0] || '',
              endDate: edu.year?.split(' - ')[1] || ''
            })) || [],
            technicalSkills: profileData.skills?.slice(0, Math.ceil((profileData.skills?.length || 0) / 2)) || [],
            businessSkills: profileData.skills?.slice(Math.ceil((profileData.skills?.length || 0) / 2)) || [],
            certifications: [{
              name: 'Professional Certification',
              issuer: 'Professional Body',
              year: '2023'
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

    const currentData = templateData || getUserProfileData();
    
    const printWindow = window.open('', '_blank');
    
    const templateHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Professional Resume - ${currentData.fullName}</title>
          <meta charset="UTF-8">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 20px; 
              font-family: 'Inter', sans-serif;
              background: #f8f9fa;
              color: #333;
            }
            .resume-container {
              max-width: 1024px;
              margin: 0 auto;
              background: white;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
              overflow: hidden;
            }
            .resume-header {
              background: #2c3e50;
              color: white;
              padding: 2rem;
              text-align: center;
            }
            .resume-name {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 0.5rem;
            }
            .resume-title {
              font-size: 1.25rem;
              color: #ecf0f1;
              margin-bottom: 1rem;
            }
            .resume-contact {
              display: flex;
              justify-content: center;
              gap: 2rem;
              flex-wrap: wrap;
              font-size: 0.9rem;
            }
            .resume-content {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 2rem;
              padding: 2rem;
            }
            .section-title {
              font-size: 1.25rem;
              font-weight: 600;
              color: #2c3e50;
              margin-bottom: 1rem;
              border-bottom: 2px solid #3498db;
              padding-bottom: 0.5rem;
            }
            .experience-item, .education-item {
              margin-bottom: 1.5rem;
            }
            .experience-header {
              margin-bottom: 0.5rem;
            }
            .experience-title {
              font-weight: 600;
              color: #2c3e50;
            }
            .experience-company {
              color: #7f8c8d;
              font-weight: 500;
            }
            .experience-date {
              color: #95a5a6;
              font-size: 0.9rem;
            }
            .responsibilities {
              list-style-type: disc;
              padding-left: 1.5rem;
              color: #555;
            }
            .responsibilities li {
              margin-bottom: 0.25rem;
            }
            .skills-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1.5rem;
            }
            .skill-category {
              margin-bottom: 1rem;
            }
            .skill-category h4 {
              font-weight: 600;
              margin-bottom: 0.5rem;
              color: #2c3e50;
            }
            .skill-list {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
            }
            .skill-item {
              background: #ecf0f1;
              padding: 0.25rem 0.75rem;
              border-radius: 4px;
              font-size: 0.85rem;
              color: #2c3e50;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
              }
              .resume-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
              }
              @page {
                margin: 0.5in;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          <div class="resume-container">
            <div class="resume-header">
              <h1 class="resume-name">${currentData.fullName}</h1>
              <h2 class="resume-title">${currentData.jobTitle}</h2>
              <div class="resume-contact">
                <span>📧 ${currentData.email}</span>
                <span>📞 ${currentData.phone}</span>
                <span>📍 ${currentData.location}</span>
                <span>🔗 ${currentData.linkedin}</span>
              </div>
            </div>
            
            <div class="resume-content">
              <div class="left-column">
                <section class="summary-section">
                  <h3 class="section-title">Professional Summary</h3>
                  <p>${currentData.summary}</p>
                </section>
                
                <section class="experience-section">
                  <h3 class="section-title">Work Experience</h3>
                  ${currentData.experiences.map(exp => `
                    <div class="experience-item">
                      <div class="experience-header">
                        <div class="experience-title">${exp.title}</div>
                        <div class="experience-company">${exp.company} • ${exp.location}</div>
                        <div class="experience-date">${exp.startDate} - ${exp.endDate}</div>
                      </div>
                      <ul class="responsibilities">
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                      </ul>
                    </div>
                  `).join('')}
                </section>
              </div>
              
              <div class="right-column">
                <section class="skills-section">
                  <h3 class="section-title">Skills</h3>
                  <div class="skills-grid">
                    <div class="skill-category">
                      <h4>Technical Skills</h4>
                      <div class="skill-list">
                        ${currentData.technicalSkills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
                      </div>
                    </div>
                    <div class="skill-category">
                      <h4>Business Skills</h4>
                      <div class="skill-list">
                        ${currentData.businessSkills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
                      </div>
                    </div>
                  </div>
                </section>
                
                <section class="education-section">
                  <h3 class="section-title">Education</h3>
                  ${currentData.education.map(edu => `
                    <div class="education-item">
                      <div class="experience-title">${edu.degree}</div>
                      <div class="experience-company">${edu.school}</div>
                      <div class="experience-date">${edu.startDate} - ${edu.endDate}</div>
                    </div>
                  `).join('')}
                </section>
                
                <section class="certifications-section">
                  <h3 class="section-title">Certifications</h3>
                  ${currentData.certifications.map(cert => `
                    <div class="education-item">
                      <div class="experience-title">${cert.name}</div>
                      <div class="experience-company">${cert.issuer}</div>
                      <div class="experience-date">${cert.year}</div>
                    </div>
                  `).join('')}
                </section>
                
                <section class="languages-section">
                  <h3 class="section-title">Languages</h3>
                  ${currentData.languages.map(lang => `
                    <div class="education-item">
                      <div class="experience-title">${lang.language}</div>
                      <div class="experience-company">${lang.proficiency}</div>
                    </div>
                  `).join('')}
                </section>
              </div>
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

  if (currentView === 'editor') {
    return (
      <ProfessionalTemplateEditor 
        onNavigateBack={handleBackToPreview}
        onSave={handleSaveTemplate}
        initialData={templateData}
      />
    );
  }

  return (
    <div className="resume-template-page">
      {/* Top bar with navigation and actions */}
      <div className="template-header">
        <button
          className="back-btn"
          onClick={onNavigateBack || (() => window.history.back())}
          aria-label="Go back"
          title="Go back to templates"
        >
          ← Back to Templates
        </button>
        
        <div className="template-title">
          <h1>Professional Resume Template</h1>
          <p>Clean and modern layout for all professional positions</p>
        </div>
        
        <div className="template-actions">
          <button className="edit-btn" onClick={handleEditTemplate}>
            ✏️ Edit Template
          </button>
          <button className="download-btn" onClick={handleDownloadPDF}>
            📄 Download PDF
          </button>
        </div>
      </div>

      {/* Template preview */}
      <div className="template-preview-container">
        <div className="template-preview-wrapper">
          <ProfessionalTemplate data={templateData} />
        </div>
      </div>

      {/* Template features */}
      <div className="template-features">
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">💼</div>
            <h3>Professional Design</h3>
            <p>Clean and sophisticated layout that makes a great first impression</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3>Skills Showcase</h3>
            <p>Organized sections to highlight your technical and business skills</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎯</div>
            <h3>ATS Friendly</h3>
            <p>Optimized format that works well with applicant tracking systems</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h3>Print Ready</h3>
            <p>Perfectly formatted for both digital viewing and professional printing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalResumeTemplate;
