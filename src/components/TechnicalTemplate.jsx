import React from 'react';

const TechnicalTemplate = ({ data }) => {
  const defaultData = {
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

  const templateData = data || defaultData;

  return (
    <div style={{
      fontFamily: '"Inter", sans-serif',
      backgroundColor: 'white',
      color: '#111827',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '16px 24px'
    }}>
      {/* Header Section */}
      <header style={{
        backgroundColor: '#f3f4f6',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '800px'
        }}>
          
          <div style={{ marginBottom: '16px' }}>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '800',
              lineHeight: '1.2',
              color: '#111827',
              margin: '0 0 8px 0'
            }}>
              {templateData.personalInfo.fullName}
            </h1>
            <p style={{
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '1.3',
              color: '#374151',
              margin: '0'
            }}>
              {templateData.personalInfo.position}
            </p>
          </div>
          
          <address style={{
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: '400',
            color: '#374151',
            maxWidth: '512px',
            lineHeight: '1.5'
          }}>
            {templateData.personalInfo.address}
            <br />
            {templateData.personalInfo.phone}
            <br />
            <a href={`mailto:${templateData.personalInfo.email}`} style={{
              textDecoration: 'underline',
              color: '#374151'
            }}>
              {templateData.personalInfo.email}
            </a>
          </address>
        </div>
      </header>

      {/* Main Content */}
      <section style={{
        marginTop: '32px',
        display: 'flex',
        flexDirection: 'row',
        gap: '48px'
      }}>
        {/* Left Sidebar */}
        <aside style={{ width: '33.333333%' }}>
          {/* Skills Section */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{
              fontWeight: '700',
              fontSize: '14px',
              marginBottom: '8px',
              color: '#111827'
            }}>
              Skills
            </p>
            {templateData.skills.map((skill, index) => (
              <div key={index} style={{ marginBottom: '12px' }}>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.4',
                  marginBottom: '4px',
                  color: '#111827'
                }}>
                  {skill}
                </p>
                <hr style={{
                  border: 'none',
                  borderTop: '2px solid #111827',
                  width: '80px',
                  margin: '0'
                }} />
              </div>
            ))}
          </div>

          {/* Languages Section */}
          <div>
            <p style={{
              fontWeight: '700',
              fontSize: '14px',
              marginBottom: '8px',
              color: '#111827'
            }}>
              Languages
            </p>
            {templateData.languages.map((language, index) => (
              <div key={index} style={{ marginBottom: '12px' }}>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.4',
                  marginBottom: '4px',
                  color: '#111827'
                }}>
                  {language}
                </p>
                <hr style={{
                  border: 'none',
                  borderTop: '2px solid #111827',
                  width: '80px',
                  margin: '0'
                }} />
              </div>
            ))}
          </div>
        </aside>

        {/* Right Content */}
        <article style={{ width: '66.666667%' }}>
          {/* Profile Section */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '8px',
              color: '#111827'
            }}>
              Profile
            </h2>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: '#111827'
            }}>
              {templateData.profile}
            </p>
          </section>

          {/* Employment History Section */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '8px',
              color: '#111827'
            }}>
              Employment History
            </h2>
            {templateData.experience.map((job, index) => (
              <div key={index} style={{ marginBottom: '24px' }}>
                <p style={{
                  fontWeight: '600',
                  fontSize: '14px',
                  marginBottom: '4px',
                  color: '#111827'
                }}>
                  {job.position}, {job.company}
                </p>
                <p style={{
                  fontSize: '12px',
                  marginBottom: '8px',
                  color: '#111827'
                }}>
                  {job.period}
                </p>
                <ul style={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: '#111827',
                  margin: '0',
                  padding: '0'
                }}>
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section>
            <h2 style={{
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '8px',
              color: '#111827'
            }}>
              Education
            </h2>
            {templateData.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: '16px' }}>
                <p style={{
                  fontWeight: '600',
                  fontSize: '14px',
                  marginBottom: '4px',
                  color: '#111827'
                }}>
                  {edu.degree}, {edu.institution}
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#111827'
                }}>
                  {edu.period}
                </p>
              </div>
            ))}
          </section>
        </article>
      </section>
    </div>
  );
};

export default TechnicalTemplate;
