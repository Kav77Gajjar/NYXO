import React from 'react';

const AcademicTemplate = ({ data }) => {
  // Default data if none provided
  const defaultData = {
    name: 'ELLIOT WU',
    photo: null, // Photo URL or base64 string
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
        details: [
          'GPA: 3.8',
          'Honors: Magna cum laude',
          'Thesis: Measuring the Effectiveness of Influencer Marketing Across Different Social Media Platforms'
        ]
      },
      {
        degree: 'Certificate - Business Analytics',
        school: 'Temple University',
        location: 'Philadelphia, PA',
        details: []
      },
      {
        degree: 'Bachelor of Science - Marketing',
        school: 'Temple University',
        location: 'Philadelphia, PA',
        details: [
          'GPA: 3.8',
          'Honors: Magna cum laude',
          'Minor: Advertising',
          'Student Marketing Club, President'
        ]
      }
    ],
    experience: [
      {
        company: 'CMI Media Group',
        position: 'Senior Marketing Research Analyst',
        location: 'Philadelphia, PA',
        period: 'January 2018 to Current',
        responsibilities: [
          'Direct consumer segmentation studies for global clients, increasing customer retention by 20%.',
          'Design and implement predictive models that enhanced campaign ROI by 25%.',
          'Manage a team of five analysts, delivering 98% of research projects under budget and ahead of schedule.'
        ]
      },
      {
        company: 'Insight Global',
        position: 'Marketing Research Consultant',
        location: 'Philadelphia, PA',
        period: 'May 2015 to December 2017',
        responsibilities: [
          'Conducted in-depth qualitative and quantitative research for 12 startups, leading to an average 18% increase in market share.',
          'Developed competitive benchmarking reports that informed strategic decisions for five key industries.'
        ]
      }
    ]
  };

  const templateData = data || defaultData;
  return (
    <div className="academic-template" style={{
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: 'white',
      color: 'black',
      padding: '24px',
      maxWidth: '768px',
      margin: '0 auto',
      fontSize: '12px',
      lineHeight: '1.4'
    }}>
      <div style={{
        borderTop: '8px solid #3B82F6',
        width: '100%',
        marginBottom: '16px'
      }}></div>
      
      <h1 style={{
        color: '#3B82F6',
        fontSize: '24px',
        fontWeight: 'normal',
        textAlign: 'center',
        marginBottom: '4px'
      }}>
        {templateData.name}
      </h1>
      
      {templateData.photo && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '12px'
        }}>
          <img 
            src={templateData.photo} 
            alt="Profile" 
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #3B82F6'
            }}
          />
        </div>
      )}
      
      <p style={{
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: '800',
        lineHeight: 'none',
        margin: '0'
      }}>
        {templateData.location}
      </p>
      
      <p style={{
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: '800',
        lineHeight: 'none',
        marginBottom: '12px'
      }}>
        {templateData.phone} | {templateData.email}
      </p>
      
      <hr style={{
        border: 'none',
        borderTop: '1px dotted #9CA3AF',
        marginBottom: '12px'
      }} />
      
      <p style={{
        fontSize: '12px',
        fontWeight: '800',
        marginBottom: '4px'
      }}>
        SUMMARY STATEMENT
      </p>
      
      <p style={{
        fontSize: '12px',
        marginBottom: '16px'
      }}>
        {templateData.summary}
      </p>
      
      <hr style={{
        border: 'none',
        borderTop: '1px dotted #9CA3AF',
        marginBottom: '12px'
      }} />
      
      <p style={{
        fontSize: '12px',
        fontWeight: '800',
        marginBottom: '8px'
      }}>
        CORE QUALIFICATIONS
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px 24px',
        fontSize: '12px',
        marginBottom: '16px'
      }}>
        <ul style={{
          listStyle: 'disc',
          paddingLeft: '16px',
          margin: '0'
        }}>
          {templateData.qualifications.left.map((qualification, index) => (
            <li key={index} style={{ marginBottom: '2px' }}>{qualification}</li>
          ))}
        </ul>
        <ul style={{
          listStyle: 'disc',
          paddingLeft: '16px',
          margin: '0'
        }}>
          {templateData.qualifications.right.map((qualification, index) => (
            <li key={index} style={{ marginBottom: '2px' }}>{qualification}</li>
          ))}
        </ul>
      </div>
      
      <p style={{
        fontSize: '12px',
        fontWeight: '800',
        marginBottom: '4px'
      }}>
        EDUCATION
      </p>
      
      {templateData.education.map((edu, index) => (
        <div key={index} style={{ marginBottom: '8px' }}>
          {edu.degree && (
            <p style={{
              fontSize: '12px',
              fontWeight: '800',
              marginBottom: '2px'
            }}>
              {edu.degree}
            </p>
          )}
          
          {(edu.school || edu.location) && (
            <p style={{
              fontSize: '12px',
              marginBottom: '2px'
            }}>
              {edu.school} {edu.school && edu.location && <span style={{ fontWeight: 'normal' }}> // {edu.location}</span>}
            </p>
          )}
          
          {edu.details && edu.details.length > 0 && (
            <ul style={{
              listStyle: 'disc',
              paddingLeft: '16px',
              fontSize: '12px',
              marginBottom: '8px'
            }}>
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex} style={{ marginBottom: '2px' }}>
                  {detail.includes('Honors:') ? <em>{detail.replace('Honors: ', '')}</em> : detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      
      <p style={{
        fontSize: '12px',
        fontWeight: '800',
        marginBottom: '4px'
      }}>
        WORK EXPERIENCE
      </p>
      
      {templateData.experience.map((exp, index) => (
        <div key={index} style={{ marginBottom: index < templateData.experience.length - 1 ? '12px' : '0' }}>
          <p style={{
            fontSize: '12px',
            fontWeight: '800',
            marginBottom: '2px'
          }}>
            {exp.company}
          </p>
          
          <p style={{
            fontSize: '12px',
            marginBottom: '2px'
          }}>
            {exp.position} <span style={{ fontWeight: 'normal' }}>// {exp.location} // {exp.period}</span>
          </p>
          
          <ul style={{
            listStyle: 'disc',
            paddingLeft: '16px',
            fontSize: '12px',
            marginBottom: index < templateData.experience.length - 1 ? '12px' : '0'
          }}>
            {exp.responsibilities.map((responsibility, respIndex) => (
              <li key={respIndex} style={{ marginBottom: '2px' }}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AcademicTemplate;
