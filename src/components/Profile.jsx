import { useState } from 'react'
import './Profile.css'

function Profile({ userEmail }) {
  const [activeSection, setActiveSection] = useState('personal')
  const [profileData, setProfileData] = useState({
    personalInfo: {
      fullName: 'John Doe',
      email: userEmail || 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
      website: 'johndoe.dev'
    },
    experience: [
      {
        id: 1,
        title: 'Frontend Developer',
        company: 'TechCorp Inc.',
        duration: 'Jan 2023 - Present',
        description: 'Developed responsive web applications using React and TypeScript'
      },
      {
        id: 2,
        title: 'Junior Developer',
        company: 'StartupXYZ',
        duration: 'Jun 2021 - Dec 2022',
        description: 'Built user interfaces and collaborated with backend team'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California, Berkeley',
        year: '2021',
        gpa: '3.7/4.0'
      }
    ],
    skills: [
      'React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Node.js', 
      'Python', 'Git', 'MongoDB', 'PostgreSQL', 'AWS'
    ],
    preferences: {
      jobTypes: ['Full-time', 'Remote'],
      salaryRange: '$70,000 - $90,000',
      locations: ['San Francisco, CA', 'Remote', 'New York, NY'],
      industries: ['Technology', 'Software', 'Startups']
    }
  })

  const [skillInput, setSkillInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [isEditing, setIsEditing] = useState({
    personal: false,
    experience: false,
    education: false,
    skills: false,
    preferences: false
  })

  // Technical skills suggestions
  const technicalSkills = [
    'React', 'Vue.js', 'Angular', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'PHP',
    'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot', 'Ruby on Rails', 'Laravel', 'ASP.NET',
    'HTML', 'CSS', 'SASS', 'SCSS', 'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Chakra UI',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'SQLite', 'Oracle', 'SQL Server',
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub', 'GitLab',
    'Linux', 'Ubuntu', 'Windows Server', 'Apache', 'Nginx', 'REST APIs', 'GraphQL', 'WebSockets',
    'React Native', 'Flutter', 'Ionic', 'Xamarin', 'Swift', 'Kotlin', 'Objective-C',
    'Machine Learning', 'AI', 'Data Science', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn',
    'Cybersecurity', 'Penetration Testing', 'Network Security', 'Cryptography', 'Blockchain', 'Web3',
    'DevOps', 'CI/CD', 'Terraform', 'Ansible', 'Monitoring', 'Logging', 'Microservices', 'Serverless'
  ]

  // Soft skills suggestions
  const softSkills = [
    'Communication', 'Leadership', 'Teamwork', 'Problem Solving', 'Critical Thinking', 'Creativity',
    'Adaptability', 'Time Management', 'Organization', 'Attention to Detail', 'Work Ethic', 'Reliability',
    'Emotional Intelligence', 'Conflict Resolution', 'Negotiation', 'Public Speaking', 'Presentation Skills',
    'Customer Service', 'Mentoring', 'Coaching', 'Project Management', 'Agile Methodology', 'Scrum',
    'Collaboration', 'Cross-functional Teams', 'Remote Work', 'Cultural Awareness', 'Diversity & Inclusion',
    'Continuous Learning', 'Self-motivation', 'Resilience', 'Stress Management', 'Decision Making',
    'Strategic Planning', 'Risk Management', 'Quality Assurance', 'Process Improvement', 'Innovation',
    'Analytical Thinking', 'Research Skills', 'Data Analysis', 'Reporting', 'Documentation',
    'Client Relations', 'Stakeholder Management', 'Budget Management', 'Resource Allocation'
  ]

  const allSkills = [...technicalSkills, ...softSkills]

  const handleSkillInputChange = (e) => {
    const value = e.target.value
    setSkillInput(value)
    
    if (value.length > 0) {
      const filtered = allSkills.filter(skill => 
        skill.toLowerCase().includes(value.toLowerCase()) &&
        !profileData.skills.includes(skill)
      )
      setFilteredSuggestions(filtered.slice(0, 8)) // Limit to 8 suggestions
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const addSkill = (skillName) => {
    const skillToAdd = skillName || skillInput.trim()
    if (skillToAdd && !profileData.skills.includes(skillToAdd)) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, skillToAdd]
      }))
      setSkillInput('')
      setShowSuggestions(false)
    }
  }

  const removeSkill = (skillToRemove) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }))
  }

  const selectSuggestion = (skill) => {
    addSkill(skill)
  }

  const toggleEdit = (section) => {
    setIsEditing(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const renderPersonalInfo = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>👤 Personal Information</h3>
        <button 
          className="edit-btn"
          onClick={() => toggleEdit('personal')}
        >
          {isEditing.personal ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="personal-info-grid">
        <div className="info-field">
          <label>Full Name</label>
          {isEditing.personal ? (
            <input 
              type="text" 
              value={profileData.personalInfo.fullName}
              className="edit-input"
            />
          ) : (
            <p>{profileData.personalInfo.fullName}</p>
          )}
        </div>

        <div className="info-field">
          <label>Email</label>
          {isEditing.personal ? (
            <input 
              type="email" 
              value={profileData.personalInfo.email}
              className="edit-input"
            />
          ) : (
            <p>{profileData.personalInfo.email}</p>
          )}
        </div>

        <div className="info-field">
          <label>Phone</label>
          {isEditing.personal ? (
            <input 
              type="tel" 
              value={profileData.personalInfo.phone}
              className="edit-input"
            />
          ) : (
            <p>{profileData.personalInfo.phone}</p>
          )}
        </div>

        <div className="info-field">
          <label>Location</label>
          {isEditing.personal ? (
            <input 
              type="text" 
              value={profileData.personalInfo.location}
              className="edit-input"
            />
          ) : (
            <p>{profileData.personalInfo.location}</p>
          )}
        </div>

        <div className="info-field">
          <label>LinkedIn</label>
          {isEditing.personal ? (
            <input 
              type="url" 
              value={profileData.personalInfo.linkedin}
              className="edit-input"
            />
          ) : (
            <p>{profileData.personalInfo.linkedin}</p>
          )}
        </div>

        <div className="info-field">
          <label>GitHub</label>
          {isEditing.personal ? (
            <input 
              type="url" 
              value={profileData.personalInfo.github}
              className="edit-input"
            />
          ) : (
            <p>{profileData.personalInfo.github}</p>
          )}
        </div>
      </div>
    </div>
  )

  const renderExperience = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>💼 Work Experience</h3>
        <div className="section-actions">
          <button className="add-btn">+ Add Experience</button>
          <button 
            className="edit-btn"
            onClick={() => toggleEdit('experience')}
          >
            {isEditing.experience ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>

      <div className="experience-list">
        {profileData.experience.map(exp => (
          <div key={exp.id} className="experience-item">
            <div className="experience-header">
              {isEditing.experience ? (
                <input 
                  type="text" 
                  value={exp.title}
                  className="edit-input title-input"
                />
              ) : (
                <h4>{exp.title}</h4>
              )}
              {isEditing.experience && (
                <button className="remove-btn">Remove</button>
              )}
            </div>
            
            <div className="experience-details">
              {isEditing.experience ? (
                <>
                  <input 
                    type="text" 
                    value={exp.company}
                    className="edit-input company-input"
                    placeholder="Company"
                  />
                  <input 
                    type="text" 
                    value={exp.duration}
                    className="edit-input duration-input"
                    placeholder="Duration"
                  />
                  <textarea 
                    value={exp.description}
                    className="edit-textarea"
                    placeholder="Description"
                  />
                </>
              ) : (
                <>
                  <p className="company">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                  <p className="description">{exp.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderEducation = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>🎓 Education</h3>
        <div className="section-actions">
          <button className="add-btn">+ Add Education</button>
          <button 
            className="edit-btn"
            onClick={() => toggleEdit('education')}
          >
            {isEditing.education ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>

      <div className="education-list">
        {profileData.education.map(edu => (
          <div key={edu.id} className="education-item">
            <div className="education-header">
              {isEditing.education ? (
                <input 
                  type="text" 
                  value={edu.degree}
                  className="edit-input degree-input"
                />
              ) : (
                <h4>{edu.degree}</h4>
              )}
              {isEditing.education && (
                <button className="remove-btn">Remove</button>
              )}
            </div>
            
            <div className="education-details">
              {isEditing.education ? (
                <>
                  <input 
                    type="text" 
                    value={edu.school}
                    className="edit-input school-input"
                    placeholder="School"
                  />
                  <input 
                    type="text" 
                    value={edu.year}
                    className="edit-input year-input"
                    placeholder="Year"
                  />
                  <input 
                    type="text" 
                    value={edu.gpa}
                    className="edit-input gpa-input"
                    placeholder="GPA"
                  />
                </>
              ) : (
                <>
                  <p className="school">{edu.school}</p>
                  <p className="year">{edu.year}</p>
                  <p className="gpa">GPA: {edu.gpa}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSkills = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>🛠️ Skills</h3>
        <button 
          className="edit-btn"
          onClick={() => toggleEdit('skills')}
        >
          {isEditing.skills ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="skills-container">
        {isEditing.skills ? (
          <div className="skills-edit">
            <div className="skill-input-container">
              <div className="skill-input-wrapper">
                <input
                  type="text"
                  value={skillInput}
                  onChange={handleSkillInputChange}
                  placeholder="Type a skill name..."
                  className="skill-input"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addSkill()
                    }
                  }}
                />
                <button 
                  className="add-skill-btn"
                  onClick={() => addSkill()}
                  disabled={!skillInput.trim()}
                >
                  Add Skill
                </button>
              </div>
              
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="suggestions-dropdown">
                  <div className="suggestions-header">
                    <span>Suggested Skills</span>
                  </div>
                  {filteredSuggestions.map((skill, index) => (
                    <div 
                      key={index}
                      className="suggestion-item"
                      onClick={() => selectSuggestion(skill)}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="added-skills">
              <h4>Added Skills ({profileData.skills.length})</h4>
              <div className="skills-grid">
                {profileData.skills.map((skill, index) => (
                  <span key={index} className="skill-tag editable">
                    {skill}
                    <button 
                      className="remove-skill-btn"
                      onClick={() => removeSkill(skill)}
                      title="Remove skill"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {profileData.skills.length === 0 && (
                  <p className="no-skills">No skills added yet. Start typing to add skills!</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="skills-display">
            <div className="skills-grid">
              {profileData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
              {profileData.skills.length === 0 && (
                <p className="no-skills">No skills added yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderPreferences = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>⚙️ Job Preferences</h3>
        <button 
          className="edit-btn"
          onClick={() => toggleEdit('preferences')}
        >
          {isEditing.preferences ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="preferences-grid">
        <div className="preference-field">
          <label>Preferred Job Types</label>
          {isEditing.preferences ? (
            <select multiple className="edit-select">
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Remote</option>
            </select>
          ) : (
            <div className="preference-tags">
              {profileData.preferences.jobTypes.map((type, index) => (
                <span key={index} className="preference-tag">{type}</span>
              ))}
            </div>
          )}
        </div>

        <div className="preference-field">
          <label>Salary Range</label>
          {isEditing.preferences ? (
            <input 
              type="text" 
              value={profileData.preferences.salaryRange}
              className="edit-input"
            />
          ) : (
            <p>{profileData.preferences.salaryRange}</p>
          )}
        </div>

        <div className="preference-field">
          <label>Preferred Locations</label>
          {isEditing.preferences ? (
            <textarea 
              className="edit-textarea"
              value={profileData.preferences.locations.join(', ')}
            />
          ) : (
            <div className="preference-tags">
              {profileData.preferences.locations.map((location, index) => (
                <span key={index} className="preference-tag">{location}</span>
              ))}
            </div>
          )}
        </div>

        <div className="preference-field">
          <label>Preferred Industries</label>
          {isEditing.preferences ? (
            <textarea 
              className="edit-textarea"
              value={profileData.preferences.industries.join(', ')}
            />
          ) : (
            <div className="preference-tags">
              {profileData.preferences.industries.map((industry, index) => (
                <span key={index} className="preference-tag">{industry}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>👤 My Profile</h1>
        <p>Manage your professional information and job preferences</p>
      </div>

      <div className="profile-navigation">
        <button 
          className={`profile-nav-btn ${activeSection === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveSection('personal')}
        >
          Personal Info
        </button>
        <button 
          className={`profile-nav-btn ${activeSection === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveSection('experience')}
        >
          Experience
        </button>
        <button 
          className={`profile-nav-btn ${activeSection === 'education' ? 'active' : ''}`}
          onClick={() => setActiveSection('education')}
        >
          Education
        </button>
        <button 
          className={`profile-nav-btn ${activeSection === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveSection('skills')}
        >
          Skills
        </button>
        <button 
          className={`profile-nav-btn ${activeSection === 'preferences' ? 'active' : ''}`}
          onClick={() => setActiveSection('preferences')}
        >
          Preferences
        </button>
      </div>

      <div className="profile-content">
        {activeSection === 'personal' && renderPersonalInfo()}
        {activeSection === 'experience' && renderExperience()}
        {activeSection === 'education' && renderEducation()}
        {activeSection === 'skills' && renderSkills()}
        {activeSection === 'preferences' && renderPreferences()}
      </div>
    </div>
  )
}

export default Profile
