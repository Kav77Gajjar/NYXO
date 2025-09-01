import React from 'react';

function SimpleTemplate({ data }) {
  const defaultData = {
    personalInfo: {
      fullName: 'SANDRA WARD',
      phone: '(555)555-5555',
      email: 'example@example.com',
      address: 'ABC Street, City, State 12345'
    },
    summary: 'Highly skilled and creative Photographer with 4 years of experience in capturing stunning photographs for various clients and projects. Proficient in using Adobe Photoshop and Lightroom for editing and retouching images. Strong ability to understand client vision and deliver exceptional results. Experienced in graphic design and digital marketing, with a Bachelor\'s degree in Graphic Design and a Master\'s degree in Photography.',
    skills: [
      'Photographer',
      'Adobe Photoshop',
      'Lighting',
      'Photo Editing',
      'Graphic Design',
      'Digital Marketing',
      'Social Media Management',
      'Event Coordination'
    ],
    experience: [
      {
        position: 'Photographer',
        company: 'ABC Studios',
        location: 'New York, New York',
        period: 'Jan 2018 - Dec 2020',
        responsibilities: [
          'Captured high-quality photographs for various clients and projects',
          'Managed and organized photoshoots, including location scouting and model selection',
          'Edited and retouched images using Adobe Photoshop and Lightroom',
          'Collaborated with clients to understand their vision and deliver exceptional results'
        ]
      },
      {
        position: 'Graphic Designer',
        company: 'XYZ Agency',
        location: 'Los Angeles, California',
        period: 'Jan 2016 - Dec 2017',
        responsibilities: [
          'Designed and created visually appealing graphics for various marketing materials',
          'Collaborated with clients to understand their design needs and requirements',
          'Managed multiple projects simultaneously and met tight deadlines',
          'Worked closely with the marketing team to develop effective visual communication strategies'
        ]
      },
      {
        position: 'Marketing Assistant',
        company: '123 Company',
        location: 'Chicago, Illinois',
        period: 'Jan 2014 - Dec 2015',
        responsibilities: [
          'Assisted in the development and implementation of marketing campaigns',
          'Conducted market research and analyzed consumer behavior',
          'Assisted social media accounts and created engaging content',
          'Assisted organizing and coordinating promotional events'
        ]
      }
    ],
    education: [
      {
        degree: 'Master of Fine Arts in Photography',
        institution: 'University of ABC',
        location: 'New York, New York',
        date: 'Jun 2015'
      },
      {
        degree: 'Bachelor of Arts in Graphic Design',
        institution: 'XYZ College',
        location: 'Los Angeles, California',
        date: 'Jun 2013'
      }
    ]
  };

  const templateData = data || defaultData;

  return (
    <div style={{
      fontFamily: "'Open Sans', sans-serif",
      backgroundColor: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <main style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        maxWidth: '768px',
        width: '100%',
        padding: '40px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: 10,
        marginTop: '48px',
        fontSize: '12px',
        lineHeight: '1.3',
        color: '#4b4b4b'
      }}>
        {/* Header */}
        <header style={{
          textAlign: 'center',
          marginBottom: '24px'
        }}>
          <h1 style={{
            fontWeight: '800',
            color: '#374151',
            fontSize: '18px',
            letterSpacing: '0.05em',
            margin: '0'
          }}>
            {templateData.personalInfo.fullName}
          </h1>
          <p style={{
            marginTop: '4px',
            color: '#9ca3af',
            letterSpacing: '0.05em',
            margin: '4px 0 0 0'
          }}>
            {templateData.personalInfo.phone} • {templateData.personalInfo.email} • {templateData.personalInfo.address}
          </p>
        </header>

        {/* Professional Summary */}
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{
            fontWeight: 'bold',
            color: '#374151',
            fontSize: '12px',
            marginBottom: '4px',
            margin: '0 0 4px 0'
          }}>
            PROFESSIONAL SUMMARY
          </h2>
          <p style={{
            color: '#4b5563',
            lineHeight: '1.3',
            margin: '0'
          }}>
            {templateData.summary}
          </p>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{
            fontWeight: 'bold',
            color: '#374151',
            fontSize: '12px',
            marginBottom: '4px',
            margin: '0 0 4px 0'
          }}>
            SKILLS
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0 24px',
            color: '#4b5563',
            fontSize: '12px',
            lineHeight: '1.3'
          }}>
            <ul style={{
              listStyle: 'disc',
              listStylePosition: 'inside',
              margin: '0',
              padding: '0',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}>
              {templateData.skills.slice(0, Math.ceil(templateData.skills.length / 2)).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <ul style={{
              listStyle: 'disc',
              listStylePosition: 'inside',
              margin: '0',
              padding: '0',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}>
              {templateData.skills.slice(Math.ceil(templateData.skills.length / 2)).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Work History */}
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{
            fontWeight: 'bold',
            color: '#374151',
            fontSize: '12px',
            marginBottom: '4px',
            margin: '0 0 4px 0'
          }}>
            WORK HISTORY
          </h2>
          {templateData.experience.map((job, index) => (
            <article key={index} style={{
              marginBottom: index === templateData.experience.length - 1 ? '0' : '12px'
            }}>
              <p style={{
                color: '#4b5563',
                fontSize: '12px',
                fontWeight: '600',
                margin: '0'
              }}>
                {job.period}<br/>
                {job.location}
              </p>
              <p style={{
                fontWeight: '600',
                color: '#374151',
                fontSize: '12px',
                marginTop: '4px',
                margin: '4px 0 0 0'
              }}>
                {job.position} / {job.company}
              </p>
              <ul style={{
                listStyle: 'disc',
                listStylePosition: 'inside',
                color: '#4b5563',
                fontSize: '12px',
                lineHeight: '1.3',
                marginTop: '4px',
                margin: '4px 0 0 0',
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
              }}>
                {job.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* Education */}
        <section>
          <h2 style={{
            fontWeight: 'bold',
            color: '#374151',
            fontSize: '12px',
            marginBottom: '4px',
            margin: '0 0 4px 0'
          }}>
            EDUCATION
          </h2>
          <div style={{
            color: '#4b5563',
            fontSize: '12px',
            lineHeight: '1.3',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {templateData.education.map((edu, index) => (
              <div key={index}>
                <p style={{
                  fontWeight: '600',
                  margin: '0'
                }}>
                  {edu.date}<br/>
                  {edu.location}
                </p>
                <p style={{
                  fontWeight: '600',
                  color: '#374151',
                  marginTop: '2px',
                  margin: '2px 0 0 0'
                }}>
                  {edu.degree}
                </p>
                <p style={{ margin: '0' }}>
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default SimpleTemplate;
