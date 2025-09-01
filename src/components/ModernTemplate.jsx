import React from 'react';

const ModernTemplate = ({ data }) => {
  const defaultData = {
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

  const templateData = data || defaultData;

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#f3f4f6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '16px'
    }}>
      <main style={{
        backgroundColor: 'white',
        maxWidth: '800px',
        width: '100%',
        padding: '32px',
        position: 'relative',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px'
      }}>
        {/* Header Section */}
        <section style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {/* Profile Photo */}
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '12px',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#374151',
            flexShrink: 0,
            backgroundImage: templateData.personalInfo.photo ? `url(${templateData.personalInfo.photo})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            {!templateData.personalInfo.photo && 
              templateData.personalInfo.fullName.split(' ').map(n => n[0]).join('')
            }
          </div>

          {/* Personal Info */}
          <div style={{
            flex: 1,
            fontSize: '13px',
            lineHeight: '1.4',
            color: '#1a1a1a'
          }}>
            <h1 style={{
              fontWeight: '600',
              fontSize: '14px',
              margin: '0 0 2px 0'
            }}>
              {templateData.personalInfo.fullName}
            </h1>
            
            <p style={{
              color: '#666666',
              marginBottom: '8px',
              fontSize: '12px',
              margin: '0 0 8px 0'
            }}>
              {templateData.personalInfo.position}
            </p>
            
            <p style={{ margin: '0 0 8px 0' }}>
              Based in {templateData.personalInfo.location}. {templateData.personalInfo.experience}
            </p>
            
            <p style={{ margin: '0' }}>
              {templateData.personalInfo.description}
            </p>
          </div>
        </section>

        {/* Skills, Tools, Languages & Contact Grid */}
        <section style={{
          marginTop: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px 32px',
          fontSize: '11px',
          color: '#1a1a1a'
        }}>
          {/* Skills */}
          <div>
            <h2 style={{
              fontWeight: '600',
              marginBottom: '4px',
              fontSize: '12px',
              margin: '0 0 4px 0'
            }}>
              Skills
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}>
              {templateData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h2 style={{
              fontWeight: '600',
              marginBottom: '4px',
              fontSize: '12px',
              margin: '0 0 4px 0'
            }}>
              Tools
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}>
              {templateData.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 style={{
              fontWeight: '600',
              marginBottom: '4px',
              fontSize: '12px',
              margin: '0 0 4px 0'
            }}>
              Languages
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}>
              {templateData.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 style={{
              fontWeight: '600',
              marginBottom: '4px',
              fontSize: '12px',
              margin: '0 0 4px 0'
            }}>
              Contact
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}>
              <li>
                <a href={`https://${templateData.contact.website}`} style={{
                  color: '#1a1a1a',
                  textDecoration: 'underline'
                }}>
                  {templateData.contact.website}
                </a>
              </li>
              <li>
                <a href={`mailto:${templateData.contact.email}`} style={{
                  color: '#1a1a1a',
                  textDecoration: 'underline'
                }}>
                  {templateData.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${templateData.contact.phone}`} style={{
                  color: '#1a1a1a',
                  textDecoration: 'underline'
                }}>
                  {templateData.contact.phone}
                </a>
              </li>
              <li>
                <a href="#" style={{
                  color: '#1a1a1a',
                  textDecoration: 'underline'
                }}>
                  {templateData.contact.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Work Experience Section */}
        <section style={{
          marginTop: '24px',
          fontSize: '12px',
          color: '#1a1a1a'
        }}>
          <h2 style={{
            fontWeight: '600',
            marginBottom: '12px',
            fontSize: '13px',
            margin: '0 0 12px 0'
          }}>
            Work Experience
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px 32px'
          }}>
            {templateData.experience.map((job, index) => (
              <div key={index}>
                <p style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '2px',
                  margin: '0 0 2px 0'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'black',
                    display: 'inline-block'
                  }}></span>
                  <span style={{ fontWeight: '600' }}>
                    {job.position}
                  </span>
                </p>
                <p style={{
                  fontSize: '11px',
                  marginBottom: '2px',
                  margin: '0 0 2px 0'
                }}>
                  {job.company}
                </p>
                <p style={{
                  fontSize: '10px',
                  color: '#666666',
                  margin: '0'
                }}>
                  {job.year}
                </p>
                <hr style={{
                  border: 'none',
                  borderTop: '1px solid #d9d9d9',
                  marginTop: '12px',
                  margin: '12px 0 0 0'
                }} />
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section style={{
          marginTop: '24px',
          fontSize: '12px',
          color: '#1a1a1a'
        }}>
          <h2 style={{
            fontWeight: '600',
            marginBottom: '8px',
            fontSize: '13px',
            margin: '0 0 8px 0'
          }}>
            Education
          </h2>
          
          {templateData.education.map((edu, index) => (
            <div key={index}>
              <p style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '2px',
                margin: '0 0 2px 0'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'black',
                  display: 'inline-block'
                }}></span>
                <span style={{ fontWeight: '600' }}>
                  {edu.degree}
                </span>
              </p>
              <p style={{
                fontSize: '11px',
                marginBottom: '2px',
                margin: '0 0 2px 0'
              }}>
                {edu.institution}
              </p>
              <p style={{
                fontSize: '10px',
                color: '#666666',
                margin: '0'
              }}>
                {edu.period}
              </p>
            </div>
          ))}
        </section>

        {/* Portfolio Section */}
        <section style={{
          marginTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '12px',
          color: '#1a1a1a',
          fontFamily: "'Indie Flower', cursive",
          position: 'absolute',
          bottom: '32px',
          right: '32px'
        }}>
          <p style={{
            marginBottom: '4px',
            lineHeight: '1.1',
            textAlign: 'center',
            margin: '0 0 4px 0'
          }}>
            {templateData.portfolio.text.split(' ').slice(0, 2).join(' ')}
            <br />
            {templateData.portfolio.text.split(' ').slice(2).join(' ')}
          </p>
          
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#f3f4f6',
            border: '2px solid #e5e7eb',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            color: '#6b7280',
            textAlign: 'center',
            backgroundImage: templateData.portfolio.qrCode ? `url(${templateData.portfolio.qrCode})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            {!templateData.portfolio.qrCode && 'QR Code'}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ModernTemplate;
