import React from 'react';

const ProfessionalTemplate = ({ data }) => {
  // Get user profile data or use default
  const getUserProfileData = () => {
    try {
      const savedProfile = localStorage.getItem('userProfileData');
      if (savedProfile) {
        const profileData = JSON.parse(savedProfile);
        return {
          fullName: profileData.personalInfo?.fullName?.toUpperCase() || 'JOHN DOE',
          jobTitle: profileData.experience?.[0]?.title || 'Senior Software Engineer',
          email: profileData.personalInfo?.email || 'john.doe@email.com',
          phone: profileData.personalInfo?.phone || '(555) 123-4567',
          location: profileData.personalInfo?.location || 'San Francisco, CA',
          linkedin: profileData.personalInfo?.linkedin || 'linkedin.com/in/johndoe',
          summary: profileData.personalInfo?.aboutMe || 'Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.',
          experiences: profileData.experience?.map(exp => ({
            title: exp.title || '',
            company: exp.company || '',
            location: profileData.personalInfo?.location || '',
            startDate: exp.duration?.split(' - ')[0] || '',
            endDate: exp.duration?.split(' - ')[1] || '',
            responsibilities: [exp.description || '']
          })) || [{
            title: 'Senior Software Engineer',
            company: 'Tech Corp',
            location: 'San Francisco, CA',
            startDate: '2020',
            endDate: 'Present',
            responsibilities: [
              'Led development of microservices architecture serving 1M+ users',
              'Mentored junior developers and conducted code reviews',
              'Implemented CI/CD pipelines reducing deployment time by 50%'
            ]
          }],
          education: profileData.education?.map(edu => ({
            degree: edu.degree || '',
            school: edu.school || '',
            startDate: edu.year?.split(' - ')[0] || '',
            endDate: edu.year?.split(' - ')[1] || ''
          })) || [{
            degree: 'Bachelor of Science in Computer Science',
            school: 'University of Technology',
            startDate: '2012',
            endDate: '2016'
          }],
          technicalSkills: profileData.skills?.slice(0, Math.ceil((profileData.skills?.length || 0) / 2)) || ['JavaScript', 'React', 'Node.js', 'Python', 'Docker'],
          businessSkills: profileData.skills?.slice(Math.ceil((profileData.skills?.length || 0) / 2)) || ['Project Management', 'Team Leadership', 'Agile/Scrum'],
          certifications: [{
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            year: '2022'
          }],
          languages: [{
            language: 'English',
            proficiency: 'Native'
          }]
        };
      }
    } catch (error) {
      console.error('Error loading profile data:', error);
    }
    
    return {
      fullName: 'JOHN DOE',
      jobTitle: 'Senior Software Engineer',
      email: 'john.doe@email.com',
      phone: '(555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/johndoe',
      summary: 'Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.',
      experiences: [{
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        location: 'San Francisco, CA',
        startDate: '2020',
        endDate: 'Present',
        responsibilities: [
          'Led development of microservices architecture serving 1M+ users',
          'Mentored junior developers and conducted code reviews',
          'Implemented CI/CD pipelines reducing deployment time by 50%'
        ]
      }],
      education: [{
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        startDate: '2012',
        endDate: '2016'
      }],
      technicalSkills: ['JavaScript', 'React', 'Node.js', 'Python', 'Docker'],
      businessSkills: ['Project Management', 'Team Leadership', 'Agile/Scrum'],
      certifications: [{
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        year: '2022'
      }],
      languages: [{
        language: 'English',
        proficiency: 'Native'
      }]
    };
  };

  const templateData = data || getUserProfileData();

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      maxWidth: '1024px',
      margin: '0 auto',
      background: 'white',
      color: '#333',
      lineHeight: '1.6'
    }}>
      {/* Header - Dark blue background like in the image */}
      <div style={{
        background: '#4A5568 !important',
        color: 'white !important',
        padding: '2.5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem !important',
          fontWeight: '700 !important',
          margin: '0 0 0.5rem 0 !important',
          letterSpacing: '0.05em !important',
          color: 'white !important'
        }}>
          {templateData.fullName}
        </h1>
        <h2 style={{
          fontSize: '1.5rem !important',
          color: '#e5e7eb !important',
          margin: '0 0 1.5rem 0 !important',
          fontWeight: '400 !important'
        }}>
          {templateData.jobTitle}
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2.5rem',
          flexWrap: 'wrap',
          fontSize: '1rem !important',
          color: 'white !important'
        }}>
          <span style={{ color: 'white !important' }}>📧 {templateData.email}</span>
          <span style={{ color: 'white !important' }}>📞 {templateData.phone}</span>
          <span style={{ color: 'white !important' }}>📍 {templateData.location}</span>
          <span style={{ color: 'white !important' }}>🔗 {templateData.linkedin}</span>
        </div>
      </div>
      
      {/* Content - Two column layout like in the image */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        padding: '2.5rem'
      }}>
        {/* Left Column */}
        <div>
          {/* Professional Summary */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              fontSize: '1.4rem !important',
              fontWeight: '600 !important',
              color: '#4A5568 !important',
              marginBottom: '1rem !important',
              borderBottom: '3px solid #3182CE !important',
              paddingBottom: '0.5rem !important'
            }}>
              Professional Summary
            </h3>
            <p style={{ 
              lineHeight: '1.7 !important', 
              margin: '0 !important', 
              color: '#4A5568 !important',
              fontSize: '0.95rem !important'
            }}>
              {templateData.summary}
            </p>
          </section>
          
          {/* Work Experience */}
          <section>
            <h3 style={{
              fontSize: '1.4rem !important',
              fontWeight: '600 !important',
              color: '#4A5568 !important',
              marginBottom: '1.5rem !important',
              borderBottom: '3px solid #3182CE !important',
              paddingBottom: '0.5rem !important'
            }}>
              Work Experience
            </h3>
            {templateData.experiences.map((exp, index) => (
              <div key={index} style={{ marginBottom: '2rem' }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{
                    fontWeight: '600 !important',
                    color: '#4A5568 !important',
                    fontSize: '1.1rem !important',
                    marginBottom: '0.25rem !important'
                  }}>
                    {exp.title}
                  </div>
                  <div style={{
                    color: '#718096 !important',
                    fontWeight: '500 !important',
                    marginBottom: '0.25rem !important'
                  }}>
                    {exp.company} • {exp.location}
                  </div>
                  <div style={{
                    color: '#A0AEC0 !important',
                    fontSize: '0.9rem !important'
                  }}>
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <ul style={{
                  listStyleType: 'disc !important',
                  paddingLeft: '1.5rem !important',
                  color: '#4A5568 !important',
                  margin: '0 !important'
                }}>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} style={{ 
                      marginBottom: '0.4rem !important',
                      fontSize: '0.95rem !important',
                      color: '#4A5568 !important'
                    }}>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
        
        {/* Right Column */}
        <div>
          {/* Skills */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              fontSize: '1.4rem !important',
              fontWeight: '600 !important',
              color: '#4A5568 !important',
              marginBottom: '1.5rem !important',
              borderBottom: '3px solid #3182CE !important',
              paddingBottom: '0.5rem !important'
            }}>
              Skills
            </h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{
                fontWeight: '600 !important',
                marginBottom: '0.75rem !important',
                color: '#4A5568 !important',
                fontSize: '1.1rem !important'
              }}>
                Technical Skills
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {templateData.technicalSkills.map((skill, index) => (
                  <span key={index} style={{
                    background: '#EDF2F7 !important',
                    padding: '0.4rem 0.8rem !important',
                    borderRadius: '6px !important',
                    fontSize: '0.9rem !important',
                    color: '#4A5568 !important',
                    fontWeight: '500 !important'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{
                fontWeight: '600 !important',
                marginBottom: '0.75rem !important',
                color: '#4A5568 !important',
                fontSize: '1.1rem !important'
              }}>
                Business Skills
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {templateData.businessSkills.map((skill, index) => (
                  <span key={index} style={{
                    background: '#EDF2F7 !important',
                    padding: '0.4rem 0.8rem !important',
                    borderRadius: '6px !important',
                    fontSize: '0.9rem !important',
                    color: '#4A5568 !important',
                    fontWeight: '500 !important'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
          
          {/* Education */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              fontSize: '1.4rem !important',
              fontWeight: '600 !important',
              color: '#4A5568 !important',
              marginBottom: '1.5rem !important',
              borderBottom: '3px solid #3182CE !important',
              paddingBottom: '0.5rem !important'
            }}>
              Education
            </h3>
            {templateData.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: '1.25rem' }}>
                <div style={{
                  fontWeight: '600 !important',
                  color: '#4A5568 !important',
                  fontSize: '1.05rem !important',
                  marginBottom: '0.25rem !important'
                }}>
                  {edu.degree}
                </div>
                <div style={{
                  color: '#718096 !important',
                  fontWeight: '500 !important',
                  marginBottom: '0.25rem !important'
                }}>
                  {edu.school}
                </div>
                <div style={{
                  color: '#A0AEC0 !important',
                  fontSize: '0.9rem !important'
                }}>
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
            ))}
          </section>
          
          {/* Certifications */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              fontSize: '1.4rem !important',
              fontWeight: '600 !important',
              color: '#4A5568 !important',
              marginBottom: '1.5rem !important',
              borderBottom: '3px solid #3182CE !important',
              paddingBottom: '0.5rem !important'
            }}>
              Certifications
            </h3>
            {templateData.certifications.map((cert, index) => (
              <div key={index} style={{ marginBottom: '1.25rem' }}>
                <div style={{
                  fontWeight: '600 !important',
                  color: '#4A5568 !important',
                  fontSize: '1.05rem !important',
                  marginBottom: '0.25rem !important'
                }}>
                  {cert.name}
                </div>
                <div style={{
                  color: '#718096 !important',
                  fontWeight: '500 !important',
                  marginBottom: '0.25rem !important'
                }}>
                  {cert.issuer}
                </div>
                <div style={{
                  color: '#A0AEC0 !important',
                  fontSize: '0.9rem !important'
                }}>
                  {cert.year}
                </div>
              </div>
            ))}
          </section>
          
          {/* Languages */}
          <section>
            <h3 style={{
              fontSize: '1.4rem !important',
              fontWeight: '600 !important',
              color: '#4A5568 !important',
              marginBottom: '1.5rem !important',
              borderBottom: '3px solid #3182CE !important',
              paddingBottom: '0.5rem !important'
            }}>
              Languages
            </h3>
            {templateData.languages.map((lang, index) => (
              <div key={index} style={{ marginBottom: '0.75rem' }}>
                <div style={{
                  fontWeight: '600 !important',
                  color: '#4A5568 !important',
                  fontSize: '1.05rem !important',
                  marginBottom: '0.25rem !important'
                }}>
                  {lang.language}
                </div>
                <div style={{
                  color: '#718096 !important',
                  fontSize: '0.9rem !important'
                }}>
                  {lang.proficiency}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
