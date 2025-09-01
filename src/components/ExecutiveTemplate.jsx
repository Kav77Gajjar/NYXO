import React from 'react';

const ExecutiveTemplate = ({ data }) => {
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

  const templateData = data || defaultData;

  return (
    <div style={{
      fontFamily: '"Open Sans", sans-serif',
      backgroundColor: '#f0f4f8',
      color: '#374151',
      maxWidth: '1536px',
      margin: '0 auto',
      padding: '24px 48px',
      display: 'flex',
      flexDirection: 'row',
      gap: '80px'
    }}>
      {/* Left Panel */}
      <section style={{
        backgroundColor: '#e8eef4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '24px',
        padding: '48px',
        width: '360px',
        flexShrink: 0
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '8px',
          textAlign: 'center',
          lineHeight: '1.2'
        }}>
          {templateData.personalInfo.fullName}
        </h1>
        
        <h2 style={{
          textAlign: 'center',
          color: '#374151',
          fontWeight: '600',
          fontStyle: 'italic',
          fontSize: '14px',
          marginBottom: '32px',
          lineHeight: '1.4'
        }}>
          {templateData.personalInfo.position}
          <br />
          <span style={{ fontStyle: 'normal' }}>
            {templateData.personalInfo.department}
          </span>
        </h2>

        <div style={{
          width: '100%',
          borderTop: '1px solid #d1d5db',
          marginBottom: '32px'
        }}></div>

        {/* Profile Section */}
        <section style={{ width: '100%', marginBottom: '32px' }}>
          <h3 style={{
            textTransform: 'uppercase',
            fontSize: '12px',
            fontWeight: '600',
            color: '#6b7280',
            letterSpacing: '0.05em',
            marginBottom: '12px'
          }}>
            PROFILE
          </h3>
          <p style={{
            fontSize: '12px',
            color: '#374151',
            lineHeight: '1.6'
          }}>
            {templateData.profile}
          </p>
        </section>

        {/* Skills Section */}
        <section style={{ width: '100%', marginBottom: '40px' }}>
          <h3 style={{
            textTransform: 'uppercase',
            fontSize: '12px',
            fontWeight: '600',
            color: '#6b7280',
            letterSpacing: '0.05em',
            marginBottom: '12px'
          }}>
            SKILLS
          </h3>
          <ul style={{
            fontSize: '12px',
            color: '#374151',
            listStyleType: 'disc',
            listStylePosition: 'inside',
            margin: '0',
            padding: '0'
          }}>
            {templateData.skills.map((skill, index) => (
              <li key={index} style={{ marginBottom: '4px' }}>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Information */}
        <section style={{
          width: '100%',
          color: '#6b7280',
          fontSize: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '14px', textAlign: 'center' }}>📍</span>
            <span>{templateData.personalInfo.address}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '14px', textAlign: 'center' }}>✉️</span>
            <a href={`mailto:${templateData.personalInfo.email}`} style={{
              color: '#6b7280',
              textDecoration: 'none'
            }}>
              {templateData.personalInfo.email}
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '14px', textAlign: 'center' }}>📞</span>
            <a href={`tel:${templateData.personalInfo.phone}`} style={{
              color: '#6b7280',
              textDecoration: 'none'
            }}>
              {templateData.personalInfo.phone}
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '14px', textAlign: 'center' }}>🔗</span>
            <a href={`https://${templateData.personalInfo.linkedin}`} style={{
              color: '#6b7280',
              textDecoration: 'none'
            }}>
              {templateData.personalInfo.linkedin}
            </a>
          </div>
        </section>
      </section>

      {/* Right Panel */}
      <section style={{
        flex: 1,
        fontSize: '13px',
        lineHeight: '1.6',
        color: '#374151'
      }}>
        {/* Work Experience */}
        <h3 style={{
          textTransform: 'uppercase',
          fontSize: '12px',
          fontWeight: '600',
          color: '#6b7280',
          letterSpacing: '0.05em',
          marginBottom: '8px'
        }}>
          WORK EXPERIENCE
        </h3>
        <hr style={{
          border: 'none',
          borderTop: '1px solid #d1d5db',
          marginBottom: '24px'
        }} />

        {templateData.experience.map((job, index) => (
          <article key={index} style={{ marginBottom: '24px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '4px'
            }}>
              <div>
                {job.company && (
                  <p style={{
                    fontWeight: '600',
                    color: '#111827',
                    fontSize: '13px',
                    lineHeight: '1.2',
                    margin: '0'
                  }}>
                    {job.company}
                  </p>
                )}
                <p style={{
                  fontStyle: 'italic',
                  fontSize: '12px',
                  color: '#374151',
                  lineHeight: '1.2',
                  margin: '0'
                }}>
                  {job.position}
                </p>
              </div>
              <p style={{
                fontSize: '11px',
                color: '#6b7280',
                fontWeight: '600',
                lineHeight: '1.2',
                margin: '0'
              }}>
                {job.period}
              </p>
            </div>
            <ul style={{
              listStyleType: 'disc',
              listStylePosition: 'inside',
              fontSize: '12px',
              color: '#374151',
              margin: '0',
              padding: '0'
            }}>
              {job.achievements.map((achievement, idx) => (
                <li key={idx} style={{ marginBottom: '4px' }}>
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}

        {/* Education */}
        <h3 style={{
          textTransform: 'uppercase',
          fontSize: '12px',
          fontWeight: '600',
          color: '#6b7280',
          letterSpacing: '0.05em',
          marginBottom: '8px',
          marginTop: '40px'
        }}>
          ACADEMIC
        </h3>

        {templateData.education.map((edu, index) => (
          <article key={index} style={{
            fontSize: '12px',
            color: '#374151',
            marginBottom: '12px'
          }}>
            <p style={{
              fontWeight: '600',
              color: '#111827',
              fontSize: '13px',
              lineHeight: '1.2',
              margin: '0',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              {edu.institution}
              <span style={{
                fontSize: '11px',
                color: '#6b7280',
                fontWeight: '400'
              }}>
                {edu.period}
              </span>
            </p>
            {edu.degree && (
              <p style={{
                fontStyle: 'italic',
                margin: '0',
                lineHeight: '1.2'
              }}>
                {edu.degree}
              </p>
            )}
          </article>
        ))}
      </section>
    </div>
  );
};

export default ExecutiveTemplate;
