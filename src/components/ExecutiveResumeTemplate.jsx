import React from 'react';
import ExecutiveTemplate from './ExecutiveTemplate';

const ExecutiveResumeTemplate = ({ onNavigateBack, onEdit }) => {
  const defaultData = {
    personalInfo: {
      fullName: 'MARGARET M. NERNEY',
      position: 'Director',
      department: 'Product Marketing',
      address: '584 Castro St San Francisco, CA 94114',
      phone: '(888) 123-4567',
      email: 'm.nerney@gmail.com',
      linkedin: 'linkedin.com/in/margaret.nerney'
    },
    profile: 'Responsible for developing the product marketing strategy for highly complex products and services in the capacity of an expert individual contributor. Responsible for the success of a product line through development and execution of comprehensive marketing plan. Key Roles and Responsibilities: Develop business plans and positioning of cutting edge products in the marketplace.',
    skills: [
      'Team Building and Leadership',
      'P&L Management', 
      'Product Development',
      'Customer Focused',
      'Contract Negotiation'
    ],
    experience: [
      {
        company: 'AT&T',
        position: 'DIRECTOR PRODUCT MARKETING',
        period: 'Jul. 2018 – Present',
        achievements: [
          'Accolades: Recognized as the top performer out of 400+ individuals in 2018',
          'Manage a $320M annual development budget focused on delivering new features to increase sales conversion, service monetization and improve customer service for AT&T NOW.',
          'Delivered ~$50M improvements to P&L.',
          'Supervise 4 direct reports and 2 SaFe agile teams (~20 people)'
        ]
      },
      {
        company: '',
        position: 'MARKETING MANAGER',
        period: 'Nov. 2016 – Jul. 2018',
        achievements: [
          'Accolades: Top 10% in performance in 2016 & 2017',
          'O.G. AT&T launch team that delivered 1.5M customers in less than 18 months',
          'Successfully launching a secondary OTT service AT&T NOW in 2018 with more than 600K subscribers and on pace to double by EOY 2019',
          'Managed partnerships with respective SVOD and AVOD partners (i.e. Fullscreen, Pandora, Amazon Music and VRV) resulting in 1M+ customers 2016-2018'
        ]
      },
      {
        company: 'VERIZON',
        position: 'LEAD MANAGER MARKETING COMMS',
        period: 'Mar. 2015 – Oct. 2016',
        achievements: [
          'Accolades: Top 10% in performance in 2016 & 2017',
          'Chief of staff and communication lead for the Chief Marketing Officer (Business)',
          'Researched, developed and drafted quarterly "state of the business" presentation (P&L, OI initiatives, strategic recommendations) for senior leadership and (Vteam)',
          'Dramatically improved employee satisfaction over a six month period among 2K+'
        ]
      }
    ],
    education: [
      {
        institution: 'Verizon',
        degree: 'Data Driven Marketing Analytics Degree',
        period: 'Feb. - Nov. 2016'
      },
      {
        institution: 'AT&T Marketing Leadership Development',
        degree: '',
        period: 'Dec. 2017'
      },
      {
        institution: 'Boston College',
        degree: 'Bachelor of Arts',
        period: 'May 2011'
      }
    ]
  };

  const downloadPDF = () => {
    const printWindow = window.open('', '_blank');
    
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${defaultData.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            @media print {
              body {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              
              .outer-container {
                padding: 0 !important;
                background-color: #f0f4f8 !important;
              }
              
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                max-width: 100% !important;
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
          <div class="outer-container" style="
            font-family: 'Open Sans', sans-serif;
            background-color: #f0f4f8;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <main class="main-container" style="
              max-width: 1536px;
              width: 100%;
              background-color: #f0f4f8;
              color: #374151;
              margin: 0 auto;
              padding: 24px 48px;
              display: flex;
              flex-direction: row;
              gap: 80px;
            ">
              <!-- Left Panel -->
              <section style="
                background-color: #e8eef4;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 24px;
                padding: 48px;
                width: 360px;
                flex-shrink: 0;
              ">
                <h1 style="
                  font-size: 24px;
                  font-weight: 600;
                  color: #111827;
                  margin-bottom: 8px;
                  text-align: center;
                  line-height: 1.2;
                ">
                  ${defaultData.personalInfo.fullName}
                </h1>
                
                <h2 style="
                  text-align: center;
                  color: #374151;
                  font-weight: 600;
                  font-style: italic;
                  font-size: 14px;
                  margin-bottom: 32px;
                  line-height: 1.4;
                ">
                  ${defaultData.personalInfo.position}
                  <br />
                  <span style="font-style: normal;">
                    ${defaultData.personalInfo.department}
                  </span>
                </h2>

                <div style="
                  width: 100%;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 32px;
                "></div>

                <!-- Profile Section -->
                <section style="width: 100%; margin-bottom: 32px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    PROFILE
                  </h3>
                  <p style="
                    font-size: 12px;
                    color: #374151;
                    line-height: 1.6;
                  ">
                    ${defaultData.profile}
                  </p>
                </section>

                <!-- Skills Section -->
                <section style="width: 100%; margin-bottom: 40px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    SKILLS
                  </h3>
                  <ul style="
                    font-size: 12px;
                    color: #374151;
                    list-style-type: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                  ">
                    ${defaultData.skills.map(skill => `
                      <li style="margin-bottom: 4px;">
                        ${skill}
                      </li>
                    `).join('')}
                  </ul>
                </section>

                <!-- Contact Information -->
                <section style="
                  width: 100%;
                  color: #6b7280;
                  font-size: 12px;
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                ">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📍</span>
                    <span>${defaultData.personalInfo.address}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">✉️</span>
                    <a href="mailto:${defaultData.personalInfo.email}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${defaultData.personalInfo.email}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📞</span>
                    <a href="tel:${defaultData.personalInfo.phone}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${defaultData.personalInfo.phone}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">🔗</span>
                    <a href="https://${defaultData.personalInfo.linkedin}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${defaultData.personalInfo.linkedin}
                    </a>
                  </div>
                </section>
              </section>

              <!-- Right Panel -->
              <section style="
                flex: 1;
                font-size: 13px;
                line-height: 1.6;
                color: #374151;
              ">
                <!-- Work Experience -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                ">
                  WORK EXPERIENCE
                </h3>
                <hr style="
                  border: none;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 24px;
                " />

                ${defaultData.experience.map(job => `
                  <article style="margin-bottom: 24px;">
                    <div style="
                      display: flex;
                      justify-content: space-between;
                      align-items: flex-start;
                      margin-bottom: 4px;
                    ">
                      <div>
                        ${job.company ? `
                          <p style="
                            font-weight: 600;
                            color: #111827;
                            font-size: 13px;
                            line-height: 1.2;
                            margin: 0;
                          ">
                            ${job.company}
                          </p>
                        ` : ''}
                        <p style="
                          font-style: italic;
                          font-size: 12px;
                          color: #374151;
                          line-height: 1.2;
                          margin: 0;
                        ">
                          ${job.position}
                        </p>
                      </div>
                      <p style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 600;
                        line-height: 1.2;
                        margin: 0;
                      ">
                        ${job.period}
                      </p>
                    </div>
                    <ul style="
                      list-style-type: disc;
                      list-style-position: inside;
                      font-size: 12px;
                      color: #374151;
                      margin: 0;
                      padding: 0;
                    ">
                      ${job.achievements.map(achievement => `
                        <li style="margin-bottom: 4px;">
                          ${achievement}
                        </li>
                      `).join('')}
                    </ul>
                  </article>
                `).join('')}

                <!-- Education -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                  margin-top: 40px;
                ">
                  ACADEMIC
                </h3>

                ${defaultData.education.map(edu => `
                  <article style="
                    font-size: 12px;
                    color: #374151;
                    margin-bottom: 12px;
                  ">
                    <p style="
                      font-weight: 600;
                      color: #111827;
                      font-size: 13px;
                      line-height: 1.2;
                      margin: 0;
                      display: flex;
                      justify-content: space-between;
                    ">
                      ${edu.institution}
                      <span style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 400;
                      ">
                        ${edu.period}
                      </span>
                    </p>
                    ${edu.degree ? `
                      <p style="
                        font-style: italic;
                        margin: 0;
                        line-height: 1.2;
                      ">
                        ${edu.degree}
                      </p>
                    ` : ''}
                  </article>
                `).join('')}
              </section>
            </main>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();

    // Wait for fonts to load, then trigger print
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header with action buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '30px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <button 
            onClick={onNavigateBack}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            ← Back to Templates
          </button>
          
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: '#333',
            margin: '0'
          }}>
            Executive Resume Template
          </h1>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={onEdit}
              style={{
                padding: '10px 20px',
                backgroundColor: '#345995',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              ✏️ Edit Resume
            </button>
            
            <button 
              onClick={downloadPDF}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              📄 Download PDF
            </button>
          </div>
        </div>

        {/* Resume Preview */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <ExecutiveTemplate data={defaultData} />
        </div>
      </div>
    </div>
  );
};

export default ExecutiveResumeTemplate;
