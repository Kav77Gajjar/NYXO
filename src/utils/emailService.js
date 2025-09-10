// Email service utility for sending resume PDFs

// Simulate sending email with PDF (replace with actual API call)
export const sendResumeByEmail = async (email, resumeData, templateType = 'modern') => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  try {
    // In a real implementation, this would:
    // 1. Generate PDF from resume data
    // 2. Send email via backend API (e.g., SendGrid, Nodemailer, etc.)
    // 3. Return success/failure status
    
    console.log('Sending resume to:', email);
    console.log('Resume data:', resumeData);
    console.log('Template type:', templateType);
    
    // Simulate successful email sending
    const response = {
      success: true,
      message: 'Resume sent successfully to your email!',
      emailId: `email_${Date.now()}`,
      timestamp: new Date().toISOString()
    };
    
    // Uncomment below to simulate failure for testing
    // throw new Error('Failed to send email');
    
    return response;
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send resume. Please try again later.');
  }
};

// Generate PDF content from resume data
export const generatePDFContent = (resumeData, templateType) => {
  // This is the same HTML generation logic that was in the download function
  // Extracted for reusability
  
  const currentData = resumeData || getDefaultResumeData(templateType);
  
  return `
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
};

// Default resume data for different templates
export const getDefaultResumeData = (templateType = 'modern') => {
  const defaultData = {
    personalInfo: {
      fullName: 'Alfredo Curtis',
      position: 'UX / UI Designer',
      photo: null,
      location: 'Istanbul, Türkiye',
      experience: '6 years of experience creating captivating web and mobile interfaces.',
      description: 'Graphic design graduate from Istanbul University, blending strong visual aesthetics with user-centric design principles. Passionate about transforming complex ideas into intuitive, engaging digital experiences.'
    },
    contact: {
      website: 'example.com',
      email: 'example@example.com',
      phone: '+90 505 514 9960',
      linkedin: 'LinkedIn'
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

  return defaultData;
};
