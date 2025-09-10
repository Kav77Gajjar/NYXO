import React, { useState } from 'react';
import SimpleTemplate from './SimpleTemplate';
import SimpleTemplateEditor from './SimpleTemplateEditor';
import EmailPopup from './EmailPopup';
import Notification from './Notification';
import { sendResumeByEmail } from '../utils/emailService';
import './ResumeTemplates.css';

function SimpleResumeTemplate({ onNavigateBack }) {
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
      await sendResumeByEmail(email, templateData, 'simple');
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
    
    const templateHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${currentData.personalInfo.fullName}</title>
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
                  ${currentData.personalInfo.fullName}
                </h1>
                <p style="
                  margin-top: 4px;
                  color: #9ca3af;
                  letter-spacing: 0.05em;
                  margin: 4px 0 0 0;
                ">
                  ${currentData.personalInfo.phone} • ${currentData.personalInfo.email} • ${currentData.personalInfo.address}
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
                  ${currentData.summary}
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
                    ${currentData.skills.slice(0, Math.ceil(currentData.skills.length / 2)).map(skill => `<li>${skill}</li>`).join('')}
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
                    ${currentData.skills.slice(Math.ceil(currentData.skills.length / 2)).map(skill => `<li>${skill}</li>`).join('')}
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
                ${currentData.experience.map((job, index) => `
                  <article style="
                    margin-bottom: ${index === currentData.experience.length - 1 ? '0' : '12px'};
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
                  ${currentData.education.map(edu => `
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

  if (currentView === 'editor') {
    return (
      <SimpleTemplateEditor
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
          <h1>Simple Resume Template</h1>
          <p>Straightforward and effective for all positions</p>
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
          <SimpleTemplate data={templateData} />
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

export default SimpleResumeTemplate;
