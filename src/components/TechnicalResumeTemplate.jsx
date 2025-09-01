import React, { useState } from 'react';
import TechnicalTemplate from './TechnicalTemplate';
import TechnicalTemplateEditor from './TechnicalTemplateEditor';
import './ResumeTemplates.css';

function TechnicalResumeTemplate({ onNavigateBack, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [templateData, setTemplateData] = useState(null);

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    } else {
      setIsEditing(true);
    }
  };

  const handleSave = (data) => {
    setTemplateData(data);
    setIsEditing(false);
  };

  const handleBack = () => {
    setIsEditing(false);
  };

  const handleDownload = () => {
    // Use the template data or get default data
    const currentData = templateData || {
      personalInfo: {
        fullName: 'Dwight Mackenzie',
        position: 'Research Engineer',
        address: '400 Whipoorville Road, New York , NY 10014, United States',
        phone: '(917) 348-3212',
        email: 'Mack_nz85_sd@gmail.com'
      },
      skills: [
        'Knowledge of Engineering Principles',
        'Strategic and Tactical Planning',
        'Leadership Skills',
        'Complex Problem Solving',
        'Interpersonal Communication Skills'
      ],
      languages: [
        'German',
        'English',
        'Dutch'
      ],
      profile: 'Experienced Research Engineer with an extensive background in engineering principles, project leadership, and the effective application of research in technological companies. Bringing forth extensive experience in performing research on product development processes and offering solutions and alterations to improve safety and effectiveness. Adept in working with engineers and project managers at multiple levels to utilize research data effectively and achieve optimal results.',
      experience: [
        {
          position: 'Research Engineer',
          company: 'AGR, New York',
          period: 'May 2016 — January 2019',
          responsibilities: [
            'Worked with Project Managers to discuss equipment function, processes, and productivity, while offering solutions to current issues.',
            'Researched technological improvements currently dominating the field, and tested their outcome for specific products.',
            'Wrote daily reports and organized data presentations for accountability and quality assurance.',
            'Tested the efficacy and safety of products and analyzed the results in relation to procedures.'
          ]
        },
        {
          position: 'Research Engineer',
          company: 'United Technologies Research Center, New York',
          period: 'June 2012 — April 2016',
          responsibilities: [
            'Led the research and development of technologies.',
            'Worked in collaboration with other researchers to promote world-class applications and services.',
            'Delivered production-level code to support applications.',
            'Implemented innovative software solutions.'
          ]
        }
      ],
      education: [
        {
          degree: 'Master of Science in Biochemical Engineering',
          institution: 'NYU, New York',
          period: 'September 2007 — May 2012'
        },
        {
          degree: 'Bachelor of Biochemical Engineering',
          institution: 'NYU, New York',
          period: 'September 2003 — May 2007'
        }
      ]
    };

    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    const templateHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Technical Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', sans-serif; background: white; }
            @media print { body { -webkit-print-color-adjust: exact; } }
          </style>
        </head>
        <body>
          <div id="resume-content"></div>
        </body>
      </html>
    `;
    
    printWindow.document.write(templateHtml);
    printWindow.document.close();
    
    // Wait for fonts to load, then print
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 1000);
  };

  if (isEditing) {
    return (
      <TechnicalTemplateEditor
        onNavigateBack={handleBack}
        onSave={handleSave}
        initialData={templateData}
      />
    );
  }

  return (
    <div className="creative-resume-template">
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
          <h1>Technical Resume Template</h1>
          <p>Professional layout for technical and engineering positions</p>
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
          <TechnicalTemplate data={templateData} />
        </div>
      </div>
    </div>
  );
}

export default TechnicalResumeTemplate;
