import React, { useState } from 'react';
import CreativeTemplate from './CreativeTemplate';
import CreativeTemplateEditor from './CreativeTemplateEditor';
import './ResumeTemplates.css';

function CreativeResumeTemplate({ onNavigateBack }) {
  const [isEditing, setIsEditing] = useState(false);
  const [templateData, setTemplateData] = useState(null);

  const handleDownload = () => {
    // Use the template data or get default data
    const currentData = templateData || {
      name: 'OLIVIA WILSON',
      title: 'Marketing Manager',
      photo: null,
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

    // Create a new window with the complete template
    const printWindow = window.open('', '_blank');
    
    // Generate the complete HTML with the current template data
    const templateHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Creative Resume - ${currentData.name}</title>
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
                  ${currentData.photo ? `background-image: url(${currentData.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ''}
                ">
                  ${!currentData.photo ? currentData.name.split(' ').map(n => n[0]).join('') : ''}
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
                    ${currentData.contact.email}
                  </p>
                  <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                    <span style="margin-right: 8px;">📞</span>
                    ${currentData.contact.phone}
                  </p>
                  <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                    <span style="margin-right: 8px;">📍</span>
                    ${currentData.contact.address}
                  </p>
                  <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                    <span style="margin-right: 8px;">🌐</span>
                    ${currentData.contact.website}
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
                ${currentData.education.map(edu => `
                  <div style="margin-bottom: 20px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">${edu.degree}</h3>
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
                ${currentData.skills.map(skill => `
                  <div style="margin-bottom: 8px;">
                    <span style="font-size: 14px;">• ${skill}</span>
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
                ${currentData.languages.map(lang => `
                  <div style="margin-bottom: 8px;">
                    <span style="font-size: 14px;">• ${lang}</span>
                  </div>
                `).join('')}
              </section>
            </aside>

            <!-- Main Content -->
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
                ">${currentData.name}</h1>
                <p style="
                  font-size: 20px;
                  color: #6B7280;
                  margin: 8px 0 0 0;
                  font-weight: 500;
                ">${currentData.title}</p>
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
                ">${currentData.about}</p>
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
                ${currentData.experience.map(exp => `
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
                  ${currentData.references.map(ref => `
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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveTemplate = (newData) => {
    setTemplateData(newData);
    setIsEditing(false);
  };

  const handleBackFromEditor = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <CreativeTemplateEditor 
        onNavigateBack={handleBackFromEditor}
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
          <h1>Creative Resume Template</h1>
          <p>Bold layout for design and creative positions</p>
        </div>
        
        <div className="template-actions">
          <button className="edit-btn" onClick={handleEdit}>
            ✏️ Edit Template
          </button>
          <button className="download-btn" onClick={handleDownload}>
            📄 Download PDF
          </button>
        </div>
      </div>

      {/* Template preview */}
      <div className="template-preview-container">
        <div className="template-preview-wrapper">
          <CreativeTemplate data={templateData} />
        </div>
      </div>

      {/* Template features */}
      <div className="template-features">
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🎨</div>
            <h3>Creative Design</h3>
            <p>Eye-catching layout with bold colors and modern typography</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🖼️</div>
            <h3>Visual Impact</h3>
            <p>Perfect for designers, marketers, and creative professionals</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎯</div>
            <h3>Brand Focused</h3>
            <p>Showcases personality and creativity while maintaining professionalism</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h3>Modern Layout</h3>
            <p>Two-column design that looks great both digitally and in print</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeResumeTemplate;
