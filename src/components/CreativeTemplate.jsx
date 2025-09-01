import React from 'react';

const CreativeTemplate = ({ data }) => {
  // Default data if none provided
  const defaultData = {
    name: 'OLIVIA WILSON',
    title: 'Marketing Manager',
    photo: null, // Photo URL or base64 string
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
      },
      {
        position: 'Marketing Assistant',
        company: 'Utenim & Co',
        period: 'Aug 2014 - Jul 2016',
        responsibilities: [
          'Handled the company\'s online presence — regularly updated the company\'s website and various social media accounts.'
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

  const templateData = data || defaultData;

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
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
        {/* Left Column (Dark Background) */}
        <aside style={{
          width: '33.333333%',
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '32px'
        }}>
          {/* Profile Picture */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '32px'
          }}>
            <div style={{
              width: '144px',
              height: '144px',
              borderRadius: '50%',
              border: '4px solid #9CA3AF',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#2c3e50',
              backgroundImage: templateData.photo ? `url(${templateData.photo})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
              {!templateData.photo && templateData.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>

          {/* Contact Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              borderBottom: '2px solid #6B7280',
              paddingBottom: '8px',
              marginBottom: '16px',
              fontFamily: "'League Spartan', sans-serif"
            }}>
              Contact
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{
                display: 'flex',
                alignItems: 'center',
                margin: '0',
                fontSize: '14px'
              }}>
                <span style={{ marginRight: '12px' }}>✉️</span>
                <span>{templateData.contact.email}</span>
              </p>
              <p style={{
                display: 'flex',
                alignItems: 'center',
                margin: '0',
                fontSize: '14px'
              }}>
                <span style={{ marginRight: '12px' }}>📞</span>
                <span>{templateData.contact.phone}</span>
              </p>
              <p style={{
                display: 'flex',
                alignItems: 'center',
                margin: '0',
                fontSize: '14px'
              }}>
                <span style={{ marginRight: '12px' }}>📍</span>
                <span>{templateData.contact.address}</span>
              </p>
              <p style={{
                display: 'flex',
                alignItems: 'center',
                margin: '0',
                fontSize: '14px'
              }}>
                <span style={{ marginRight: '12px' }}>🌐</span>
                <span>{templateData.contact.website}</span>
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              borderBottom: '2px solid #6B7280',
              paddingBottom: '8px',
              marginBottom: '16px',
              fontFamily: "'League Spartan', sans-serif"
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
                    color: '#E5E7EB'
                  }}>
                    {edu.school}
                  </p>
                  <p style={{
                    fontSize: '10px',
                    color: '#D1D5DB',
                    margin: '0'
                  }}>
                    {edu.period}
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
              borderBottom: '2px solid #6B7280',
              paddingBottom: '8px',
              marginBottom: '16px',
              fontFamily: "'League Spartan', sans-serif"
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

          {/* Language Section */}
          <section>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              borderBottom: '2px solid #6B7280',
              paddingBottom: '8px',
              marginBottom: '16px',
              fontFamily: "'League Spartan', sans-serif"
            }}>
              Language
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {templateData.languages.map((language, index) => (
                <p key={index} style={{ margin: '0', fontSize: '14px' }}>{language}</p>
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
              color: '#1F2937',
              margin: '0',
              fontFamily: "'League Spartan', sans-serif"
            }}>
              {templateData.name}
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#6B7280',
              marginTop: '4px',
              margin: '4px 0 0 0'
            }}>
              {templateData.title}
            </p>
          </header>

          {/* About Me Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1F2937',
              borderBottom: '2px solid #E5E7EB',
              paddingBottom: '8px',
              marginBottom: '16px',
              fontFamily: "'League Spartan', sans-serif"
            }}>
              About Me
            </h2>
            <p style={{
              lineHeight: '1.625',
              margin: '0',
              fontSize: '14px'
            }}>
              {templateData.about}
            </p>
          </section>

          {/* Work Experience Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1F2937',
              borderBottom: '2px solid #E5E7EB',
              paddingBottom: '8px',
              marginBottom: '16px',
              fontFamily: "'League Spartan', sans-serif"
            }}>
              Work Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {templateData.experience.map((job, index) => (
                <div key={index}>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    margin: '0'
                  }}>
                    {job.position}
                  </p>
                  <p style={{
                    fontSize: '16px',
                    color: '#4B5563',
                    margin: '0'
                  }}>
                    {job.company}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    fontStyle: 'italic',
                    margin: '0'
                  }}>
                    {job.period}
                  </p>
                  <ul style={{
                    listStyle: 'disc',
                    paddingLeft: '16px',
                    marginTop: '8px',
                    margin: '8px 0 0 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}>
                    {job.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} style={{ fontSize: '14px' }}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* References Section */}
          <section>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1F2937',
              borderBottom: '2px solid #E5E7EB',
              paddingBottom: '8px',
              marginBottom: '16px',
              fontFamily: "'League Spartan', sans-serif"
            }}>
              References
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px'
            }}>
              {templateData.references.map((ref, index) => (
                <div key={index}>
                  <p style={{
                    fontWeight: 'bold',
                    margin: '0',
                    fontSize: '14px'
                  }}>
                    {ref.name}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    margin: '0'
                  }}>
                    {ref.title}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    marginTop: '4px',
                    margin: '4px 0 0 0'
                  }}>
                    Phone: {ref.phone}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    margin: '0'
                  }}>
                    Email: {ref.email}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CreativeTemplate;
