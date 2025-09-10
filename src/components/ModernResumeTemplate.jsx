import React, { useState } from 'react';
import ModernTemplate from './ModernTemplate';
import ModernTemplateEditor from './ModernTemplateEditor';
import EmailPopup from './EmailPopup';
import Notification from './Notification';
import { sendResumeByEmail } from '../utils/emailService';
import './ResumeTemplates.css';

function ModernResumeTemplate({ onNavigateBack }) {
  const [currentView, setCurrentView] = useState('preview');
  const [templateData, setTemplateData] = useState(null);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [notification, setNotification] = useState({ 
    isVisible: false, 
    type: 'success', 
    message: '' 
  });

  const handleEditTemplate = () => {
    setCurrentView('editor');
  };

  const handleBackToPreview = () => {
    setCurrentView('preview');
  };

  const handleSaveTemplate = (data) => {
    setTemplateData(data);
    // You can add additional save logic here (e.g., save to localStorage, API call, etc.)
  };

  const handleEmailSubmit = async (email) => {
    setIsEmailLoading(true);
    try {
      await sendResumeByEmail(email, templateData, 'modern');
      setShowEmailPopup(false);
      setNotification({
        isVisible: true,
        type: 'success',
        message: `Resume sent successfully to ${email}! Check your inbox.`
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({
        isVisible: true,
        type: 'error',
        message: 'Failed to send resume. Please try again later.'
      });
    } finally {
      setIsEmailLoading(false);
    }
  };

  const hideNotification = () => {
    setNotification({ ...notification, isVisible: false });
  };

  const handleDownloadPDF = () => {
    setShowEmailPopup(true);
  };

  const handleDirectDownload = () => {
    const printWindow = window.open('', '_blank');
    
    const currentData = templateData || {
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
    
    const templateHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${currentData.personalInfo.fullName}</title>
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
                  ${currentData.personalInfo.photo ? `background-image: url(${currentData.personalInfo.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ''}
                ">
                  ${!currentData.personalInfo.photo ? currentData.personalInfo.fullName.split(' ').map(n => n[0]).join('') : ''}
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
                    ${currentData.personalInfo.fullName}
                  </h1>
                  
                  <p style="
                    color: #666666;
                    margin: 0 0 8px 0;
                    font-size: 12px;
                  ">
                    ${currentData.personalInfo.position}
                  </p>
                  
                  <p style="margin: 0 0 8px 0;">
                    Based in ${currentData.personalInfo.location}. ${currentData.personalInfo.experience}
                  </p>
                  
                  <p style="margin: 0;">
                    ${currentData.personalInfo.description}
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
                    ${currentData.skills.map(skill => `<li>${skill}</li>`).join('')}
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
                    ${currentData.tools.map(tool => `<li>${tool}</li>`).join('')}
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
                    ${currentData.languages.map(language => `<li>${language}</li>`).join('')}
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
                      <a href="https://${currentData.contact.website}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${currentData.contact.website}
                      </a>
                    </li>
                    <li>
                      <a href="mailto:${currentData.contact.email}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${currentData.contact.email}
                      </a>
                    </li>
                    <li>
                      <a href="tel:${currentData.contact.phone}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${currentData.contact.phone}
                      </a>
                    </li>
                    <li>
                      <a href="#" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${currentData.contact.linkedin}
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
                  ${currentData.experience.map(job => `
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
                
                ${currentData.education.map(edu => `
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
                  ${currentData.portfolio.text.split(' ').slice(0, 2).join(' ')}<br/>
                  ${currentData.portfolio.text.split(' ').slice(2).join(' ')}
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
                  ${currentData.portfolio.qrCode ? `background-image: url(${currentData.portfolio.qrCode}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ''}
                ">
                  ${!currentData.portfolio.qrCode ? 'QR Code' : ''}
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

  if (currentView === 'editor') {
    return (
      <ModernTemplateEditor
        onNavigateBack={handleBackToPreview}
        onSave={handleSaveTemplate}
        initialData={templateData}
      />
    );
  }

  return (
    <div className="template-container">
      {/* Header */}
      <div className="template-header">
        <button
          className="back-btn"
          onClick={onNavigateBack}
          aria-label="Go back"
        >
          ← Back to Templates
        </button>
        
        <div className="template-title">
          <h1>Modern Resume Template</h1>
          <p>Contemporary layout with clean typography</p>
        </div>
        
        <div className="template-actions">
          <button className="edit-btn" onClick={handleEditTemplate}>
            ✏️ Edit Template
          </button>
          <button className="download-btn" onClick={handleDownloadPDF}>
            � Get PDF via Email
          </button>
          <button className="download-btn" onClick={handleDirectDownload} style={{ background: '#28a745' }}>
            �📄 Download Now
          </button>
        </div>
      </div>

      {/* Template Preview */}
      <div className="template-preview-container">
        <div className="template-preview-wrapper">
          <ModernTemplate data={templateData} />
        </div>
      </div>

      {/* Email Popup */}
      <EmailPopup 
        isOpen={showEmailPopup}
        onClose={() => setShowEmailPopup(false)}
        onSubmit={handleEmailSubmit}
        isLoading={isEmailLoading}
      />

      {/* Notification */}
      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
    </div>
  );
}

export default ModernResumeTemplate;
