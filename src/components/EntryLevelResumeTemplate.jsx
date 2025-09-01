import React, { useState } from 'react';
import EntryLevelTemplate from './EntryLevelTemplate';
import EntryLevelTemplateEditor from './EntryLevelTemplateEditor';
import './ResumeTemplates.css';

function EntryLevelResumeTemplate({ onNavigateBack, onEdit }) {
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

    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    const templateHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Entry-Level Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Montserrat', sans-serif; background: white; }
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
      <EntryLevelTemplateEditor
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
          <h1>Entry-Level Resume Template</h1>
          <p>Perfect for graduates and first-time job seekers</p>
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
          <EntryLevelTemplate data={templateData} />
        </div>
      </div>
    </div>
  );
}

export default EntryLevelResumeTemplate;
