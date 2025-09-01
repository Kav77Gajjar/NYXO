import React, { useState } from 'react';
import AcademicTemplate from './AcademicTemplate';
import AcademicTemplateEditor from './AcademicTemplateEditor';
import './ResumeTemplates.css';

function AcademicResumeTemplate({ onNavigateBack, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [templateData, setTemplateData] = useState(null);

  const handleDownload = () => {
    // Use the template data or get default data
    const currentData = templateData || {
      name: 'ELLIOT WU',
      photo: null,
      location: 'PHILADELPHIA, PA 19001',
      phone: '(555) 555-5555',
      email: 'EXAMPLE@EXAMPLE.COM',
      summary: 'Results-driven marketing researcher with over 10 years of experience specializing in consumer behavior, brand strategy and digital marketing analytics. Proven expertise in leading cross-functional research projects, delivering actionable insights and driving 15% year-over-year revenue growth for Fortune 500 clients. Skilled in advanced statistical methods, market segmentation and developing predictive models that optimize marketing strategies. Published author with a strong track record of impactful research and peer-reviewed articles.',
      qualifications: {
        left: [
          'Quantitative and qualitative research',
          'Consumer behavior analysis',
          'Digital marketing analytics',
          'Data visualization (Tableau, Power BI)'
        ],
        right: [
          'Advanced statistical analysis (R, Python)',
          'Predictive modeling and machine learning',
          'Survey design and administration',
          'Strategic communication and reporting'
        ]
      },
      education: [
        {
          degree: 'Master of Science - Digital Marketing',
          school: 'Temple University',
          location: 'Philadelphia, PA',
          period: '2018 - 2020',
          details: [
            'GPA: 3.8',
            'Thesis: "Consumer Response Patterns in Digital Advertising Ecosystems"',
            'Graduate Research Assistant for Consumer Behavior Lab'
          ]
        },
        {
          degree: 'Bachelor of Science - Psychology',
          school: 'Pennsylvania State University',
          location: 'University Park, PA',
          period: '2014 - 2018',
          details: [
            'Magna Cum Laude, GPA: 3.7',
            'Minor in Statistics',
            'President, Psychology Student Association'
          ]
        }
      ],
      experience: [
        {
          position: 'Senior Marketing Research Analyst',
          company: 'TechFlow Solutions',
          location: 'Philadelphia, PA',
          period: '2022 - Present',
          responsibilities: [
            'Lead comprehensive market research initiatives for B2B technology products, resulting in 25% improvement in product-market fit scores',
            'Design and execute advanced statistical analyses using R and Python to identify consumer behavior patterns and market trends',
            'Collaborate with cross-functional teams to translate research insights into actionable marketing strategies, contributing to 15% revenue growth',
            'Manage research budget of $500K annually and oversee team of 3 junior analysts'
          ]
        },
        {
          position: 'Marketing Research Specialist',
          company: 'DataVision Analytics',
          location: 'Philadelphia, PA',
          period: '2020 - 2022',
          responsibilities: [
            'Conducted quantitative and qualitative research studies for Fortune 500 clients across retail, healthcare, and financial services sectors',
            'Developed predictive models to forecast consumer purchasing behavior with 85% accuracy rate',
            'Created comprehensive research reports and presented findings to C-level executives',
            'Implemented new survey methodologies that improved response rates by 40%'
          ]
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
          <title>Academic Resume - ${currentData.name}</title>
          <meta charset="UTF-8">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;800&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Roboto', sans-serif; 
              background: white;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
              }
              .template-container {
                box-shadow: none !important;
                margin: 0 !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0.75in;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          <div class="template-container" style="
            font-family: 'Roboto', sans-serif;
            background-color: white;
            color: black;
            padding: 24px;
            max-width: 768px;
            margin: 0 auto;
            font-size: 12px;
            line-height: 1.4;
            width: 210mm;
            min-height: 297mm;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          ">
            <!-- Header Border -->
            <div style="
              border-top: 8px solid #3B82F6;
              width: 100%;
              margin-bottom: 16px;
            "></div>
            
            <!-- Name -->
            <h1 style="
              color: #3B82F6;
              font-size: 24px;
              font-weight: normal;
              text-align: center;
              margin-bottom: 4px;
            ">${currentData.name}</h1>
            
            <!-- Photo -->
            ${currentData.photo ? `
              <div style="
                display: flex;
                justify-content: center;
                margin-bottom: 12px;
              ">
                <img 
                  src="${currentData.photo}" 
                  alt="Profile" 
                  style="
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid #3B82F6;
                  "
                />
              </div>
            ` : ''}
            
            <!-- Contact Info -->
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin: 0;
            ">${currentData.location}</p>
            
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin-bottom: 12px;
            ">${currentData.phone} | ${currentData.email}</p>
            
            <!-- Divider -->
            <hr style="
              border: none;
              border-top: 1px dotted #9CA3AF;
              margin-bottom: 12px;
            " />
            
            <!-- Summary Section -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 4px;
            ">SUMMARY STATEMENT</p>
            <p style="
              font-size: 12px;
              margin-bottom: 16px;
            ">${currentData.summary}</p>
            
            <!-- Core Qualifications -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">CORE QUALIFICATIONS</p>
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              margin-bottom: 16px;
            ">
              <div>
                ${currentData.qualifications.left.map(qual => `
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${qual}
                  </p>
                `).join('')}
              </div>
              <div>
                ${currentData.qualifications.right.map(qual => `
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${qual}
                  </p>
                `).join('')}
              </div>
            </div>
            
            <!-- Education -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">EDUCATION</p>
            ${currentData.education.map(edu => `
              <div style="margin-bottom: 12px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${edu.degree}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${edu.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${edu.school}, ${edu.location}</p>
                ${edu.details ? edu.details.map(detail => `
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${detail}
                  </p>
                `).join('') : ''}
              </div>
            `).join('')}
            
            <!-- Professional Experience -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
              margin-top: 16px;
            ">PROFESSIONAL EXPERIENCE</p>
            ${currentData.experience.map(exp => `
              <div style="margin-bottom: 16px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${exp.position}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${exp.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${exp.company}, ${exp.location}</p>
                ${exp.responsibilities.map(resp => `
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${resp}
                  </p>
                `).join('')}
              </div>
            `).join('')}
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
    if (onEdit) {
      onEdit();
    } else {
      setIsEditing(true);
    }
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
      <AcademicTemplateEditor 
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
          <h1>Academic Resume Template</h1>
          <p>Structured format for research and education roles</p>
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
            <AcademicTemplate data={templateData} />
          </div>
        </div>      {/* Template features */}
      <div className="template-features">
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🎓</div>
            <h3>Education Focused</h3>
            <p>Highlights academic achievements, research, and publications</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3>Research Friendly</h3>
            <p>Perfect format for showcasing research projects and methodologies</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🤖</div>
            <h3>ATS Compatible</h3>
            <p>Optimized structure that passes through applicant tracking systems</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h3>Print Ready</h3>
            <p>Professional formatting that looks great on paper and screen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicResumeTemplate;
