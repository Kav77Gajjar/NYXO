import React from 'react';

const EntryLevelTemplate = ({ data }) => {
  // Default data if none provided
  const defaultData = {
    personalInfo: {
      fullName: 'Thomas Beasley',
      jobTitle: 'Entry-level Resume',
      phone: '(206) 555-1234',
      email: 'your-name@email.com',
      address: '3665 McLaughlin Street, Seattle, WA 98039'
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

  const templateData = data || defaultData;

  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      backgroundColor: '#f3f4f6',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <main style={{
        maxWidth: '1024px',
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row'
      }}>
        {/* Left Column (Light Blue Background) */}
        <aside style={{
          width: '33.333333%',
          backgroundColor: '#dbe7f0',
          color: '#1f2937',
          padding: '32px'
        }}>
          {/* Profile Picture Placeholder */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '32px'
          }}>
            <div style={{
              width: '144px',
              height: '144px',
              borderRadius: '50%',
              border: '4px solid #6ea6b9',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              {templateData.personalInfo.fullName.split(' ').map(n => n[0]).join('')}
            </div>
          </div>

          {/* Contact Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              borderBottom: '2px solid #6ea6b9',
              paddingBottom: '8px',
              marginBottom: '16px',
              color: '#1f2937'
            }}>
              Contact
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <p style={{ margin: '0', fontSize: '14px', fontWeight: '600' }}>Email</p>
                <p style={{ margin: '0', fontSize: '12px', color: '#4b5563' }}>{templateData.personalInfo.email}</p>
              </div>
              <div>
                <p style={{ margin: '0', fontSize: '14px', fontWeight: '600' }}>Phone</p>
                <p style={{ margin: '0', fontSize: '12px', color: '#4b5563' }}>{templateData.personalInfo.phone}</p>
              </div>
              <div>
                <p style={{ margin: '0', fontSize: '14px', fontWeight: '600' }}>Address</p>
                <p style={{ margin: '0', fontSize: '12px', color: '#4b5563' }}>{templateData.personalInfo.address}</p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              borderBottom: '2px solid #6ea6b9',
              paddingBottom: '8px',
              marginBottom: '16px',
              color: '#1f2937'
            }}>
              Education
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {templateData.education.map((edu, index) => (
                <div key={index}>
                  <p style={{
                    fontWeight: '600',
                    margin: '0',
                    fontSize: '14px'
                  }}>
                    {edu.degree}
                  </p>
                  <p style={{
                    fontStyle: 'italic',
                    fontSize: '12px',
                    margin: '0',
                    color: '#4b5563'
                  }}>
                    {edu.institution}
                  </p>
                  <p style={{
                    fontSize: '10px',
                    color: '#6b7280',
                    margin: '0'
                  }}>
                    {edu.date}
                  </p>
                  <p style={{
                    fontSize: '10px',
                    color: '#6b7280',
                    margin: '4px 0 0 0'
                  }}>
                    GPA: {edu.gpa}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              borderBottom: '2px solid #6ea6b9',
              paddingBottom: '8px',
              marginBottom: '16px',
              color: '#1f2937'
            }}>
              Skills
            </h2>
            <ul style={{
              listStyle: 'disc',
              paddingLeft: '16px',
              margin: '0',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {templateData.skills.map((skill, index) => (
                <li key={index} style={{ fontSize: '14px' }}>{skill}</li>
              ))}
            </ul>
          </section>

          {/* Hobbies Section */}
          <section>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              borderBottom: '2px solid #6ea6b9',
              paddingBottom: '8px',
              marginBottom: '16px',
              color: '#1f2937'
            }}>
              Hobbies
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {templateData.hobbies.map((hobby, index) => (
                <div key={index}>
                  <p style={{ margin: '0', fontSize: '14px', fontWeight: '600' }}>{hobby.title}</p>
                  <p style={{ margin: '0', fontSize: '12px', color: '#4b5563' }}>{hobby.description}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>

        {/* Right Column (White Background) */}
        <div style={{
          width: '66.666667%',
          padding: '32px',
          color: '#374151'
        }}>
          {/* Name and Title */}
          <header style={{
            marginBottom: '40px',
            textAlign: 'left'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: '0'
            }}>
              {templateData.personalInfo.fullName}
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#6b7280',
              margin: '8px 0 0 0',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              {templateData.personalInfo.jobTitle}
            </p>
          </header>

          {/* Summary Section */}
          <section style={{ marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: '0 0 16px 0',
              borderBottom: '2px solid #6ea6b9',
              paddingBottom: '8px'
            }}>
              Summary
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#374151',
              margin: '0'
            }}>
              {templateData.summary}
            </p>
          </section>

          {/* Experience Section */}
          <section style={{ marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: '0 0 24px 0',
              borderBottom: '2px solid #6ea6b9',
              paddingBottom: '8px'
            }}>
              Experience
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {templateData.experience.map((exp, index) => (
                <div key={index}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '8px'
                  }}>
                    <div>
                      <h4 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#1f2937',
                        margin: '0'
                      }}>
                        {exp.position}
                      </h4>
                      <p style={{
                        fontSize: '16px',
                        color: '#6ea6b9',
                        margin: '4px 0 0 0',
                        fontWeight: '500'
                      }}>
                        {exp.company}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        margin: '0'
                      }}>
                        {exp.period}
                      </p>
                      <p style={{
                        fontSize: '12px',
                        color: '#9ca3af',
                        margin: '0'
                      }}>
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul style={{
                    listStyle: 'disc',
                    paddingLeft: '20px',
                    margin: '8px 0 0 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} style={{
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: '#374151'
                      }}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Coursework Section */}
          <section>
            <h3 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: '0 0 16px 0',
              borderBottom: '2px solid #6ea6b9',
              paddingBottom: '8px'
            }}>
              Relevant Coursework
            </h3>
            {templateData.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: '16px' }}>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: '0 0 8px 0'
                }}>
                  {edu.coursework}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  {edu.dissertation}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default EntryLevelTemplate;
