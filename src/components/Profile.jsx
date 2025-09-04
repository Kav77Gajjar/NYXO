import { useState, useEffect } from 'react'
import './Profile.css'

function Profile({ userEmail, activeSection = 'personal', setActiveSection, onNavigateBack }) {
  // Remove local state if props are provided
  const [localActiveSection, setLocalActiveSection] = useState('personal')
  const currentActiveSection = activeSection || localActiveSection
  const currentSetActiveSection = setActiveSection || setLocalActiveSection

  // Function to get initial profile data
  const getInitialProfileData = () => {
    try {
      const savedProfile = localStorage.getItem('userProfileData')
      if (savedProfile) {
        return JSON.parse(savedProfile)
      }
    } catch (error) {
      console.error('Error loading saved profile data:', error)
    }
    
    // Return default profile data
    return {
      personalInfo: {
        fullName: 'John Doe',
        email: userEmail || 'john.doe@email.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        linkedin: 'linkedin.com/in/johndoe',
        github: 'github.com/johndoe',
        website: 'johndoe.dev',
        aboutMe: '' // optional large field for resume/profile
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
      achievements: [
        {
          id: 1,
          title: 'Employee of the Month',
          description: 'Recognized for outstanding performance and leadership in Q3 2023',
          date: '2023-09',
          category: 'Work',
          image: null
        },
        {
          id: 2,
          title: 'Full Stack Web Development Certificate',
          description: 'Completed comprehensive web development bootcamp with 95% score',
          date: '2022-12',
          category: 'Education',
          image: null
        }
      ]
    }
  }
  
  const [profileData, setProfileData] = useState(getInitialProfileData())

  const [skillInput, setSkillInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [isEditing, setIsEditing] = useState({
    personal: false,
    experience: false,
    education: false,
  skills: false,
  otherSkills: false,
    achievements: false
  })

  // Additional 'Other Skills' list (renders below main Skills)
  const [otherSkills, setOtherSkills] = useState([
    'Figma', 'Photoshop', 'Illustrator'
  ])

  const [otherSkillInput, setOtherSkillInput] = useState('')

  const addOtherSkill = (skill) => {
    const s = (skill || '').trim()
    if (!s) return
    setOtherSkills(prev => (prev.includes(s) ? prev : [...prev, s]))
  }

  const removeOtherSkill = (skillToRemove) => {
    setOtherSkills(prev => prev.filter(s => s !== skillToRemove))
  }

  const [fieldErrors, setFieldErrors] = useState({})

  // Achievement states
  const [showAddAchievementDialog, setShowAddAchievementDialog] = useState(false)
  const [newAchievement, setNewAchievement] = useState({
    title: '',
    description: '',
    date: '',
    category: 'Work',
    image: null
  })
  const [achievementErrors, setAchievementErrors] = useState({})

  const [showAddExperienceDialog, setShowAddExperienceDialog] = useState(false)
  const [newExperience, setNewExperience] = useState({
    title: '',
    company: '',
    duration: '',
    description: ''
  })
  const [experienceErrors, setExperienceErrors] = useState({})

  const [showAddEducationDialog, setShowAddEducationDialog] = useState(false)
  const [newEducation, setNewEducation] = useState({
    degree: '',
    school: '',
    startYear: '',
    endYear: '',
    gpa: ''
  })
  const [educationErrors, setEducationErrors] = useState({})

  const [showDeleteEducationDialog, setShowDeleteEducationDialog] = useState(false)
  const [educationToDelete, setEducationToDelete] = useState(null)

  const [showDeleteExperienceDialog, setShowDeleteExperienceDialog] = useState(false)
  const [experienceToDelete, setExperienceToDelete] = useState(null)

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
      const updatedProfileData = {
        ...profileData,
        skills: [...profileData.skills, skillToAdd]
      }
      setProfileData(updatedProfileData)
      
      // Save to localStorage
      try {
        localStorage.setItem('userProfileData', JSON.stringify(updatedProfileData))
        window.dispatchEvent(new CustomEvent('profileUpdated'))
      } catch (error) {
        console.error('Error saving skills:', error)
      }
      
      setSkillInput('')
      setShowSuggestions(false)
    }
  }

  const removeSkill = (skillToRemove) => {
    const updatedProfileData = {
      ...profileData,
      skills: profileData.skills.filter(skill => skill !== skillToRemove)
    }
    setProfileData(updatedProfileData)
    
    // Save to localStorage
    try {
      localStorage.setItem('userProfileData', JSON.stringify(updatedProfileData))
      window.dispatchEvent(new CustomEvent('profileUpdated'))
    } catch (error) {
      console.error('Error saving skills:', error)
    }
  }

  const selectSuggestion = (skill) => {
    addSkill(skill)
  }

  // Achievement functions
  const addAchievement = () => {
    const errors = validateAchievement()
    
    if (Object.keys(errors).length > 0) {
      setAchievementErrors(errors)
      return
    }

    const achievementToAdd = {
      id: Date.now(),
      title: newAchievement.title.trim(),
      description: newAchievement.description.trim(),
      date: newAchievement.date,
      category: newAchievement.category,
      image: newAchievement.image
    }

    setProfileData(prev => ({
      ...prev,
      achievements: [...prev.achievements, achievementToAdd]
    }))

    // Reset form
    setNewAchievement({
      title: '',
      description: '',
      date: '',
      category: 'Work',
      image: null
    })
    setAchievementErrors({})
    setShowAddAchievementDialog(false)
  }

  const removeAchievement = (achievementId) => {
    setProfileData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(achievement => achievement.id !== achievementId)
    }))
  }

  const validateAchievement = () => {
    const errors = {}
    
    if (!newAchievement.title.trim()) {
      errors.title = 'Title is required'
    }
    
    if (!newAchievement.description.trim()) {
      errors.description = 'Description is required'
    }
    
    if (!newAchievement.date) {
      errors.date = 'Date is required'
    }

    return errors
  }

  const handleAchievementInputChange = (field, value) => {
    setNewAchievement(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (achievementErrors[field]) {
      setAchievementErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setNewAchievement(prev => ({
          ...prev,
          image: e.target.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCancelAchievement = () => {
    setNewAchievement({
      title: '',
      description: '',
      date: '',
      category: 'Work',
      image: null
    })
    setAchievementErrors({})
    setShowAddAchievementDialog(false)
  }

  const toggleEdit = (section) => {
    setIsEditing(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handlePersonalInfoChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }))

    // Real-time validation
    validateField(field, value)
  }

  const validateField = (field, value) => {
    let error = ''

    // Required field validation
    const requiredFields = ['fullName', 'email', 'phone', 'location', 'linkedin']
    if (requiredFields.includes(field)) {
      if (!value || value.trim() === '') {
        error = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} is required`
      }
    }

    // Specific field validations
    if (value && value.trim() !== '') {
      switch (field) {
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(value)) {
            error = 'Please enter a valid email address'
          }
          break
        case 'phone':
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
          const cleanPhone = value.replace(/[\s\-\(\)]/g, '')
          if (!phoneRegex.test(cleanPhone)) {
            error = 'Please enter a valid phone number'
          }
          break
        case 'linkedin':
        case 'github':
        case 'website':
          try {
            new URL(value.startsWith('http') ? value : 'https://' + value)
          } catch {
            error = 'Please enter a valid URL'
          }
          break
      }
    }

    // Update field errors
    setFieldErrors(prev => ({
      ...prev,
      [field]: error
    }))
  }

  const handleSavePersonalInfo = () => {
    // Validation with specific field checks
    const requiredFields = {
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      linkedin: 'LinkedIn'
    }

    // Check for empty required fields
    const emptyFields = []
    const invalidFields = []

    Object.keys(requiredFields).forEach(field => {
      const value = profileData.personalInfo[field]
      if (!value || value.trim() === '') {
        emptyFields.push(requiredFields[field])
      }
    })

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (profileData.personalInfo.email && !emailRegex.test(profileData.personalInfo.email)) {
      invalidFields.push('Email format is invalid')
    }

    // Phone validation (basic check for numbers and common formats)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    const cleanPhone = profileData.personalInfo.phone.replace(/[\s\-\(\)]/g, '')
    if (profileData.personalInfo.phone && !phoneRegex.test(cleanPhone)) {
      invalidFields.push('Phone number format is invalid')
    }

    // URL validation for LinkedIn (if not empty)
    if (profileData.personalInfo.linkedin && profileData.personalInfo.linkedin.trim() !== '') {
      try {
        new URL(profileData.personalInfo.linkedin.startsWith('http') ? 
          profileData.personalInfo.linkedin : 
          'https://' + profileData.personalInfo.linkedin)
      } catch {
        invalidFields.push('LinkedIn URL format is invalid')
      }
    }

    // URL validation for optional fields (GitHub and Website)
    const optionalUrlFields = ['github', 'website']
    optionalUrlFields.forEach(field => {
      const value = profileData.personalInfo[field]
      if (value && value.trim() !== '') {
        try {
          new URL(value.startsWith('http') ? value : 'https://' + value)
        } catch {
          invalidFields.push(`${field.charAt(0).toUpperCase() + field.slice(1)} URL format is invalid`)
        }
      }
    })

    // Show error messages
    if (emptyFields.length > 0) {
      alert(`Please fill in the following required fields:\n• ${emptyFields.join('\n• ')}`)
      return
    }

    if (invalidFields.length > 0) {
      alert(`Please correct the following issues:\n• ${invalidFields.join('\n• ')}`)
      return
    }

    // Save the data to localStorage
    try {
      localStorage.setItem('userProfileData', JSON.stringify(profileData))
      // Dispatch event to notify other components
      window.dispatchEvent(new CustomEvent('profileUpdated'))
      console.log('Profile data saved to localStorage:', profileData)
    } catch (error) {
      console.error('Error saving profile data:', error)
    }
    
    // Exit edit mode
    setIsEditing(prev => ({
      ...prev,
      personal: false
    }))

    // Show success message
    alert('Personal information saved successfully!')
  }

  const handleAddExperience = () => {
    setShowAddExperienceDialog(true)
  }

  const handleAddEducation = () => {
    setShowAddEducationDialog(true)
  }

  const handleExperienceInputChange = (field, value) => {
    setNewExperience(prev => ({
      ...prev,
      [field]: value
    }))

    // Clear error when user starts typing
    if (experienceErrors[field]) {
      setExperienceErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const handleEducationInputChange = (field, value) => {
    setNewEducation(prev => ({
      ...prev,
      [field]: value
    }))

    // Clear error when user starts typing
    if (educationErrors[field]) {
      setEducationErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const validateExperience = () => {
    const errors = {}
    const requiredFields = {
      title: 'Job Role/Title',
      company: 'Company/Firm Name',
      duration: 'Duration',
      description: 'Work Description'
    }

    Object.keys(requiredFields).forEach(field => {
      if (!newExperience[field] || newExperience[field].trim() === '') {
        errors[field] = `${requiredFields[field]} is required`
      }
    })

    return errors
  }

  const validateEducation = () => {
    const errors = {}
    const requiredFields = {
      degree: 'Course Name',
      school: 'University Name',
      startYear: 'Start Year',
      endYear: 'End Year',
      gpa: 'CGPA'
    }

    Object.keys(requiredFields).forEach(field => {
      if (!newEducation[field] || newEducation[field].trim() === '') {
        errors[field] = `${requiredFields[field]} is required`
      }
    })

    // Additional validation for years
    if (newEducation.startYear && newEducation.endYear) {
      const startYear = parseInt(newEducation.startYear)
      const endYear = parseInt(newEducation.endYear)
      
      if (startYear >= endYear) {
        errors.endYear = 'End year must be after start year'
      }
    }

    // CGPA validation
    if (newEducation.gpa) {
      const gpaValue = parseFloat(newEducation.gpa)
      if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 10) {
        errors.gpa = 'CGPA must be a number between 0 and 10'
      }
    }

    return errors
  }

  const handleSaveExperience = () => {
    const errors = validateExperience()
    
    if (Object.keys(errors).length > 0) {
      setExperienceErrors(errors)
      return
    }

    // Add new experience to the list
    const experienceToAdd = {
      id: Date.now(), // Simple ID generation
      title: newExperience.title.trim(),
      company: newExperience.company.trim(),
      duration: newExperience.duration.trim(),
      description: newExperience.description.trim()
    }

    const updatedProfileData = {
      ...profileData,
      experience: [...profileData.experience, experienceToAdd]
    }
    
    setProfileData(updatedProfileData)
    
    // Save to localStorage
    try {
      localStorage.setItem('userProfileData', JSON.stringify(updatedProfileData))
      window.dispatchEvent(new CustomEvent('profileUpdated'))
    } catch (error) {
      console.error('Error saving experience:', error)
    }

    // Reset and close dialog
    setNewExperience({
      title: '',
      company: '',
      duration: '',
      description: ''
    })
    setExperienceErrors({})
    setShowAddExperienceDialog(false)
    
    alert('Experience added successfully!')
  }

  const handleSaveEducation = () => {
    const errors = validateEducation()
    
    if (Object.keys(errors).length > 0) {
      setEducationErrors(errors)
      return
    }

    // Add new education to the list
    const educationToAdd = {
      id: Date.now(), // Simple ID generation
      degree: newEducation.degree.trim(),
      school: newEducation.school.trim(),
      year: `${newEducation.startYear} - ${newEducation.endYear}`,
      gpa: newEducation.gpa.trim()
    }

    const updatedProfileData = {
      ...profileData,
      education: [...profileData.education, educationToAdd]
    }
    
    setProfileData(updatedProfileData)
    
    // Save to localStorage
    try {
      localStorage.setItem('userProfileData', JSON.stringify(updatedProfileData))
      window.dispatchEvent(new CustomEvent('profileUpdated'))
    } catch (error) {
      console.error('Error saving education:', error)
    }

    // Reset and close dialog
    setNewEducation({
      degree: '',
      school: '',
      startYear: '',
      endYear: '',
      gpa: ''
    })
    setEducationErrors({})
    setShowAddEducationDialog(false)
    
    alert('Education added successfully!')
  }

  const handleCancelExperience = () => {
    setNewExperience({
      title: '',
      company: '',
      duration: '',
      description: ''
    })
    setExperienceErrors({})
    setShowAddExperienceDialog(false)
  }

  const handleCancelEducation = () => {
    setNewEducation({
      degree: '',
      school: '',
      startYear: '',
      endYear: '',
      gpa: ''
    })
    setEducationErrors({})
    setShowAddEducationDialog(false)
  }

  const handleRemoveExperience = (experienceId) => {
    console.log('=== REMOVE EXPERIENCE DEBUG ===')
    console.log('Experience ID to remove:', experienceId)
    
    // Find the experience to delete
    const experienceItem = profileData.experience.find(exp => exp.id === experienceId)
    console.log('Experience item found:', experienceItem)
    
    if (experienceItem) {
      setExperienceToDelete(experienceItem)
      setShowDeleteExperienceDialog(true)
    } else {
      alert('Experience not found!')
    }
  }

  const confirmDeleteExperience = () => {
    if (experienceToDelete) {
      console.log('Confirming deletion of experience:', experienceToDelete)
      
      setProfileData(prev => {
        const updatedExperience = prev.experience.filter(exp => exp.id !== experienceToDelete.id)
        console.log('Updated experience after filter:', updatedExperience)
        return {
          ...prev,
          experience: updatedExperience
        }
      })
      
      // Close dialog and reset state
      setShowDeleteExperienceDialog(false)
      setExperienceToDelete(null)
      alert('Experience removed successfully!')
    }
  }

  const cancelDeleteExperience = () => {
    setShowDeleteExperienceDialog(false)
    setExperienceToDelete(null)
    console.log('Experience deletion cancelled')
  }

  const handleRemoveEducation = (educationId) => {
    console.log('=== REMOVE EDUCATION DEBUG ===')
    console.log('Education ID to remove:', educationId)
    
    // Find the education to delete
    const educationItem = profileData.education.find(edu => edu.id === educationId)
    console.log('Education item found:', educationItem)
    
    if (educationItem) {
      setEducationToDelete(educationItem)
      setShowDeleteEducationDialog(true)
    } else {
      alert('Education not found!')
    }
  }

  const confirmDeleteEducation = () => {
    if (educationToDelete) {
      console.log('Confirming deletion of education:', educationToDelete)
      
      setProfileData(prev => {
        const updatedEducation = prev.education.filter(edu => edu.id !== educationToDelete.id)
        console.log('Updated education after filter:', updatedEducation)
        return {
          ...prev,
          education: updatedEducation
        }
      })
      
      // Close dialog and reset state
      setShowDeleteEducationDialog(false)
      setEducationToDelete(null)
      alert('Education removed successfully!')
    }
  }

  const cancelDeleteEducation = () => {
    setShowDeleteEducationDialog(false)
    setEducationToDelete(null)
    console.log('Education deletion cancelled')
  }

  const handleEducationChange = (educationId, field, value) => {
    setProfileData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === educationId 
          ? { ...edu, [field]: value }
          : edu
      )
    }))
  }

  const handleExperienceChange = (experienceId, field, value) => {
    setProfileData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === experienceId 
          ? { ...exp, [field]: value }
          : exp
      )
    }))
  }

  const renderPersonalInfo = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>👤 Personal Information</h3>
        <button 
          className="edit-btn"
          onClick={() => isEditing.personal ? handleSavePersonalInfo() : toggleEdit('personal')}
        >
          {isEditing.personal ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="personal-info-grid">
        <div className="info-field">
          <label>Full Name *</label>
          {isEditing.personal ? (
            <>
              <input 
                type="text" 
                value={profileData.personalInfo.fullName}
                onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                className={`edit-input ${fieldErrors.fullName ? 'error' : ''}`}
                required
              />
              {fieldErrors.fullName && <span className="error-message">{fieldErrors.fullName}</span>}
            </>
          ) : (
            <p>{profileData.personalInfo.fullName}</p>
          )}
        </div>

        <div className="info-field">
          <label>Email *</label>
          {isEditing.personal ? (
            <>
              <input 
                type="email" 
                value={profileData.personalInfo.email}
                onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                className={`edit-input ${fieldErrors.email ? 'error' : ''}`}
                required
              />
              {fieldErrors.email && <span className="error-message">{fieldErrors.email}</span>}
            </>
          ) : (
            <p>{profileData.personalInfo.email}</p>
          )}
        </div>

        <div className="info-field">
          <label>Phone *</label>
          {isEditing.personal ? (
            <>
              <input 
                type="tel" 
                value={profileData.personalInfo.phone}
                onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                className={`edit-input ${fieldErrors.phone ? 'error' : ''}`}
                required
              />
              {fieldErrors.phone && <span className="error-message">{fieldErrors.phone}</span>}
            </>
          ) : (
            <p>{profileData.personalInfo.phone}</p>
          )}
        </div>

        <div className="info-field">
          <label>Location *</label>
          {isEditing.personal ? (
            <>
              <input 
                type="text" 
                value={profileData.personalInfo.location}
                onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                className={`edit-input ${fieldErrors.location ? 'error' : ''}`}
                required
              />
              {fieldErrors.location && <span className="error-message">{fieldErrors.location}</span>}
            </>
          ) : (
            <p>{profileData.personalInfo.location}</p>
          )}
        </div>

        <div className="info-field">
          <label>LinkedIn *</label>
          {isEditing.personal ? (
            <>
              <input 
                type="url" 
                value={profileData.personalInfo.linkedin}
                onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                className={`edit-input ${fieldErrors.linkedin ? 'error' : ''}`}
                required
              />
              {fieldErrors.linkedin && <span className="error-message">{fieldErrors.linkedin}</span>}
            </>
          ) : (
            <p>{profileData.personalInfo.linkedin}</p>
          )}
        </div>

        <div className="info-field">
          <label>GitHub <span className="optional-label">(Optional)</span></label>
          {isEditing.personal ? (
            <>
              <input 
                type="url" 
                value={profileData.personalInfo.github}
                onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
                className={`edit-input ${fieldErrors.github ? 'error' : ''}`}
                placeholder="github.com/yourprofile"
              />
              {fieldErrors.github && <span className="error-message">{fieldErrors.github}</span>}
            </>
          ) : (
            <p>{profileData.personalInfo.github}</p>
          )}
        </div>

        <div className="info-field">
          <label>Website <span className="optional-label">(Optional)</span></label>
          {isEditing.personal ? (
            <>
              <input 
                type="url" 
                value={profileData.personalInfo.website}
                onChange={(e) => handlePersonalInfoChange('website', e.target.value)}
                className={`edit-input ${fieldErrors.website ? 'error' : ''}`}
                placeholder="yourwebsite.com"
              />
              {fieldErrors.website && <span className="error-message">{fieldErrors.website}</span>}
            </>
          ) : (
            <p>{profileData.personalInfo.website}</p>
          )}
        </div>
      </div>

      {/* About Me - optional large field for resume/profile (moved to end) */}
      <div className="about-me-field">
        <label>About Me <span className="optional-label">(Optional)</span></label>
        {isEditing.personal ? (
          <textarea
            className="edit-textarea about-me-input"
            value={profileData.personalInfo.aboutMe}
            onChange={(e) => handlePersonalInfoChange('aboutMe', e.target.value)}
            placeholder="Write a short summary about yourself for your resume..."
            rows={8}
          />
        ) : (
          <p className="about-me-text">
            {profileData.personalInfo.aboutMe ? (
              profileData.personalInfo.aboutMe.split('\n').map((line, idx) => (
                <span key={idx}>{line}<br/></span>
              ))
            ) : (
              <em>Add an About Me summary for your resume (optional)</em>
            )}
          </p>
        )}
      </div>
    </div>
  )

  const renderExperience = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>💼 Work Experience</h3>
        <div className="section-actions">
          <button className="add-btn" onClick={handleAddExperience}>+ Add Experience</button>
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
                  onChange={(e) => handleExperienceChange(exp.id, 'title', e.target.value)}
                  className="edit-input title-input"
                />
              ) : (
                <h4>{exp.title}</h4>
              )}
              {isEditing.experience && (
                <button 
                  className="remove-btn-experience"
                  onClick={() => handleRemoveExperience(exp.id)}
                >
                  Remove
                </button>
              )}
            </div>
            
            <div className="experience-details">
              {isEditing.experience ? (
                <>
                  <input 
                    type="text" 
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                    className="edit-input company-input"
                    placeholder="Company"
                  />
                  <input 
                    type="text" 
                    value={exp.duration}
                    onChange={(e) => handleExperienceChange(exp.id, 'duration', e.target.value)}
                    className="edit-input duration-input"
                    placeholder="Duration"
                  />
                  <textarea 
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
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
          <button className="add-btn" onClick={handleAddEducation}>+ Add Education</button>
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
                  onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                  className="edit-input degree-input"
                />
              ) : (
                <h4>{edu.degree}</h4>
              )}
              {isEditing.education && (
                <button 
                  className="remove-btn-education"
                  onClick={() => handleRemoveEducation(edu.id)}
                >
                  Remove
                </button>
              )}
            </div>
            
            <div className="education-details">
              {isEditing.education ? (
                <>
                  <input 
                    type="text" 
                    value={edu.school}
                    onChange={(e) => handleEducationChange(edu.id, 'school', e.target.value)}
                    className="edit-input school-input"
                    placeholder="School"
                  />
                  <input 
                    type="text" 
                    value={edu.year}
                    onChange={(e) => handleEducationChange(edu.id, 'year', e.target.value)}
                    className="edit-input year-input"
                    placeholder="Year"
                  />
                  <input 
                    type="text" 
                    value={edu.gpa}
                    onChange={(e) => handleEducationChange(edu.id, 'gpa', e.target.value)}
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
              {profileData.skills.length > 0 && (
                <p className="edit-skills-instruction">
                  💡 Click on any skill to remove it
                </p>
              )}
              <div className="skills-grid">
                {profileData.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="skill-tag editable"
                    onClick={() => removeSkill(skill)}
                    title="Click to remove this skill"
                  >
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

  const renderOtherSkills = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>✨ Other Skills</h3>
        <button 
          className="edit-btn"
          onClick={() => toggleEdit('otherSkills')}
        >
          {isEditing.otherSkills ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="skills-container">
        {isEditing.otherSkills ? (
          <div className="skills-edit">
            <div className="skill-input-container">
              <div className="skill-input-wrapper">
                <input
                  type="text"
                  value={otherSkillInput}
                  onChange={(e) => setOtherSkillInput(e.target.value)}
                  placeholder="Type an other skill..."
                  className="skill-input"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      if (otherSkillInput.trim()) {
                        addOtherSkill(otherSkillInput.trim())
                        setOtherSkillInput('')
                      }
                    }
                  }}
                />
                <button 
                  className="add-skill-btn"
                  onClick={() => {
                    if (otherSkillInput.trim()) {
                      addOtherSkill(otherSkillInput.trim())
                      setOtherSkillInput('')
                    }
                  }}
                  disabled={!otherSkillInput.trim()}
                >
                  Add Skill
                </button>
              </div>
            </div>

            <div className="added-skills">
              <h4>Other Skills ({otherSkills.length})</h4>
              <div className="skills-grid">
                {otherSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="skill-tag editable"
                    onClick={() => removeOtherSkill(skill)}
                    title="Click to remove this skill"
                  >
                    {skill}
                    <button 
                      className="remove-skill-btn"
                      onClick={() => removeOtherSkill(skill)}
                      title="Remove skill"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {otherSkills.length === 0 && (
                  <p className="no-skills">No other skills added yet.</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="skills-display">
            <div className="skills-grid">
              {otherSkills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
              {otherSkills.length === 0 && (
                <p className="no-skills">No other skills added yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderAchievements = () => (
    <div className="profile-section">
      <div className="section-header">
        <h3>🏆 Achievements</h3>
        <button 
          className="edit-btn"
          onClick={() => toggleEdit('achievements')}
        >
          {isEditing.achievements ? 'Save' : 'Edit'}
        </button>
      </div>

      {isEditing.achievements && (
        <div className="add-section">
          <button 
            className="add-btn"
            onClick={() => setShowAddAchievementDialog(true)}
          >
            ➕ Add Achievement
          </button>
        </div>
      )}

      <div className="achievements-grid">
        {profileData.achievements.length > 0 ? (
          profileData.achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              {achievement.image && (
                <div className="achievement-image">
                  <img src={achievement.image} alt={achievement.title} />
                </div>
              )}
              <div className="achievement-content">
                <div className="achievement-header">
                  <h4>{achievement.title}</h4>
                  <span className="achievement-category">{achievement.category}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                <p className="achievement-date">{new Date(achievement.date).toLocaleDateString()}</p>
                {isEditing.achievements && (
                  <div className="achievement-actions">
                    <button 
                      className="remove-btn"
                      onClick={() => removeAchievement(achievement.id)}
                      title="Remove achievement"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-achievements">
            <p>No achievements added yet.</p>
            {isEditing.achievements && (
              <p>Click "Add Achievement" to showcase your accomplishments!</p>
            )}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="profile">
      {/* Left Sidebar Navigation */}
      <div className="profile-sidebar">
        <div className="sidebar-header">
          <h2>👤 Profile</h2>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`sidebar-nav-item ${currentActiveSection === 'personal' ? 'active' : ''}`}
            onClick={() => currentSetActiveSection('personal')}
          >
            <span className="nav-icon">📝</span>
            Personal Info
          </button>
          <button 
            className={`sidebar-nav-item ${currentActiveSection === 'experience' ? 'active' : ''}`}
            onClick={() => currentSetActiveSection('experience')}
          >
            <span className="nav-icon">💼</span>
            Experience
          </button>
          <button 
            className={`sidebar-nav-item ${currentActiveSection === 'education' ? 'active' : ''}`}
            onClick={() => currentSetActiveSection('education')}
          >
            <span className="nav-icon">🎓</span>
            Education
          </button>
          <button 
            className={`sidebar-nav-item ${currentActiveSection === 'skills' ? 'active' : ''}`}
            onClick={() => currentSetActiveSection('skills')}
          >
            <span className="nav-icon">⚡</span>
            Skills
          </button>
          <button 
            className={`sidebar-nav-item ${currentActiveSection === 'achievements' ? 'active' : ''}`}
            onClick={() => currentSetActiveSection('achievements')}
          >
            <span className="nav-icon">🏆</span>
            Achievements
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="profile-content">
        {/* Horizontal Navigation for Medium Screens */}
        <div className="profile-horizontal-nav">
          <button
            className={currentActiveSection === 'personal' ? 'active' : ''}
            onClick={() => currentSetActiveSection('personal')}
          >
            <span className="nav-icon">📝</span>
            Personal Info
          </button>
          <button
            className={currentActiveSection === 'experience' ? 'active' : ''}
            onClick={() => currentSetActiveSection('experience')}
          >
            <span className="nav-icon">💼</span>
            Experience
          </button>
          <button
            className={currentActiveSection === 'education' ? 'active' : ''}
            onClick={() => currentSetActiveSection('education')}
          >
            <span className="nav-icon">🎓</span>
            Education
          </button>
          <button
            className={currentActiveSection === 'skills' ? 'active' : ''}
            onClick={() => currentSetActiveSection('skills')}
          >
            <span className="nav-icon">⚡</span>
            Skills
          </button>
          <button
            className={currentActiveSection === 'achievements' ? 'active' : ''}
            onClick={() => currentSetActiveSection('achievements')}
          >
            <span className="nav-icon">🏆</span>
            Achievements
          </button>
        </div>
        
        {currentActiveSection === 'personal' && renderPersonalInfo()}
        {currentActiveSection === 'experience' && renderExperience()}
        {currentActiveSection === 'education' && renderEducation()}
          {currentActiveSection === 'skills' && (
            <>
              {renderSkills()}
              {renderOtherSkills()}
            </>
          )}
        {currentActiveSection === 'achievements' && renderAchievements()}
      </div>

      {/* Add Experience Dialog */}
      {showAddExperienceDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h3>➕ Add Work Experience</h3>
              <button className="dialog-close" onClick={handleCancelExperience}>×</button>
            </div>
            
            <div className="dialog-content">
              <div className="dialog-field">
                <label>Job Role/Title *</label>
                <input
                  type="text"
                  value={newExperience.title}
                  onChange={(e) => handleExperienceInputChange('title', e.target.value)}
                  className={`dialog-input ${experienceErrors.title ? 'error' : ''}`}
                  placeholder="e.g. Frontend Developer, Software Engineer"
                />
                {experienceErrors.title && <span className="error-message">{experienceErrors.title}</span>}
              </div>

              <div className="dialog-field">
                <label>Company/Firm Name *</label>
                <input
                  type="text"
                  value={newExperience.company}
                  onChange={(e) => handleExperienceInputChange('company', e.target.value)}
                  className={`dialog-input ${experienceErrors.company ? 'error' : ''}`}
                  placeholder="e.g. TechCorp Inc., Google, Microsoft"
                />
                {experienceErrors.company && <span className="error-message">{experienceErrors.company}</span>}
              </div>

              <div className="dialog-field">
                <label>Duration *</label>
                <input
                  type="text"
                  value={newExperience.duration}
                  onChange={(e) => handleExperienceInputChange('duration', e.target.value)}
                  className={`dialog-input ${experienceErrors.duration ? 'error' : ''}`}
                  placeholder="e.g. Jan 2023 - Present, Jun 2021 - Dec 2022"
                />
                {experienceErrors.duration && <span className="error-message">{experienceErrors.duration}</span>}
              </div>

              <div className="dialog-field">
                <label>Work Description *</label>
                <textarea
                  value={newExperience.description}
                  onChange={(e) => handleExperienceInputChange('description', e.target.value)}
                  className={`dialog-textarea ${experienceErrors.description ? 'error' : ''}`}
                  placeholder="Briefly describe your role, responsibilities, and achievements..."
                  rows="4"
                />
                {experienceErrors.description && <span className="error-message">{experienceErrors.description}</span>}
              </div>
            </div>

            <div className="dialog-actions">
              <button className="dialog-btn cancel" onClick={handleCancelExperience}>
                Cancel
              </button>
              <button className="dialog-btn save" onClick={handleSaveExperience}>
                Add Experience
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Education Dialog */}
      {showAddEducationDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h3>🎓 Add Education</h3>
              <button className="dialog-close" onClick={handleCancelEducation}>×</button>
            </div>
            
            <div className="dialog-content">
              <div className="dialog-field">
                <label>Course Name *</label>
                <input
                  type="text"
                  value={newEducation.degree}
                  onChange={(e) => handleEducationInputChange('degree', e.target.value)}
                  className={`dialog-input ${educationErrors.degree ? 'error' : ''}`}
                  placeholder="e.g. Bachelor of Science in Computer Science, MBA"
                />
                {educationErrors.degree && <span className="error-message">{educationErrors.degree}</span>}
              </div>

              <div className="dialog-field">
                <label>University Name *</label>
                <input
                  type="text"
                  value={newEducation.school}
                  onChange={(e) => handleEducationInputChange('school', e.target.value)}
                  className={`dialog-input ${educationErrors.school ? 'error' : ''}`}
                  placeholder="e.g. Stanford University, MIT, IIT Delhi"
                />
                {educationErrors.school && <span className="error-message">{educationErrors.school}</span>}
              </div>

              <div className="dialog-row">
                <div className="dialog-field">
                  <label>Start From *</label>
                  <input
                    type="number"
                    value={newEducation.startYear}
                    onChange={(e) => handleEducationInputChange('startYear', e.target.value)}
                    className={`dialog-input ${educationErrors.startYear ? 'error' : ''}`}
                    placeholder="2019"
                    min="1950"
                    max={new Date().getFullYear() + 10}
                  />
                  {educationErrors.startYear && <span className="error-message">{educationErrors.startYear}</span>}
                </div>

                <div className="dialog-field">
                  <label>Ended On *</label>
                  <input
                    type="number"
                    value={newEducation.endYear}
                    onChange={(e) => handleEducationInputChange('endYear', e.target.value)}
                    className={`dialog-input ${educationErrors.endYear ? 'error' : ''}`}
                    placeholder="2023"
                    min="1950"
                    max={new Date().getFullYear() + 10}
                  />
                  {educationErrors.endYear && <span className="error-message">{educationErrors.endYear}</span>}
                </div>
              </div>

              <div className="dialog-field">
                <label>CGPA *</label>
                <input
                  type="number"
                  step="0.01"
                  value={newEducation.gpa}
                  onChange={(e) => handleEducationInputChange('gpa', e.target.value)}
                  className={`dialog-input ${educationErrors.gpa ? 'error' : ''}`}
                  placeholder="e.g. 8.5, 3.7"
                  min="0"
                  max="10"
                />
                {educationErrors.gpa && <span className="error-message">{educationErrors.gpa}</span>}
              </div>
            </div>

            <div className="dialog-actions">
              <button className="dialog-btn cancel" onClick={handleCancelEducation}>
                Cancel
              </button>
              <button className="dialog-btn save" onClick={handleSaveEducation}>
                Add Education
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Experience Confirmation Dialog */}
      {showDeleteExperienceDialog && experienceToDelete && (
        <div className="dialog-overlay">
          <div className="dialog delete-confirmation-dialog">
            <div className="dialog-header">
              <h3>⚠️ Confirm Experience Deletion</h3>
              <button className="dialog-close" onClick={cancelDeleteExperience}>×</button>
            </div>
            
            <div className="dialog-content">
              <div className="delete-warning">
                <p className="warning-text">
                  Are you sure you want to permanently delete this work experience entry?
                </p>
                
                <div className="experience-preview">
                  <div className="experience-info">
                    <h4 className="experience-title">{experienceToDelete.title}</h4>
                    <p className="experience-company">{experienceToDelete.company}</p>
                    <p className="experience-duration">{experienceToDelete.duration}</p>
                    <p className="experience-description">{experienceToDelete.description}</p>
                  </div>
                </div>
                
                <p className="warning-note">
                  <strong>This action cannot be undone.</strong> All information related to this work experience will be permanently removed from your profile.
                </p>
              </div>
            </div>

            <div className="dialog-actions">
              <button className="dialog-btn cancel" onClick={cancelDeleteExperience}>
                Cancel
              </button>
              <button className="dialog-btn delete" onClick={confirmDeleteExperience}>
                Delete Experience
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Education Confirmation Dialog */}
      {showDeleteEducationDialog && educationToDelete && (
        <div className="dialog-overlay">
          <div className="dialog delete-confirmation-dialog">
            <div className="dialog-header">
              <h3>⚠️ Confirm Education Deletion</h3>
              <button className="dialog-close" onClick={cancelDeleteEducation}>×</button>
            </div>
            
            <div className="dialog-content">
              <div className="delete-warning">
                <p className="warning-text">
                  Are you sure you want to permanently delete this education entry?
                </p>
                
                <div className="education-preview">
                  <div className="education-info">
                    <h4 className="education-degree">{educationToDelete.degree}</h4>
                    <p className="education-school">{educationToDelete.school}</p>
                    <p className="education-year">{educationToDelete.year}</p>
                    <p className="education-gpa">GPA: {educationToDelete.gpa}</p>
                  </div>
                </div>
                
                <p className="warning-note">
                  <strong>This action cannot be undone.</strong> All information related to this education will be permanently removed from your profile.
                </p>
              </div>
            </div>

            <div className="dialog-actions">
              <button className="dialog-btn cancel" onClick={cancelDeleteEducation}>
                Cancel
              </button>
              <button className="dialog-btn delete" onClick={confirmDeleteEducation}>
                Delete Education
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Achievement Dialog */}
      {showAddAchievementDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h3>🏆 Add Achievement</h3>
              <button className="dialog-close" onClick={handleCancelAchievement}>×</button>
            </div>
            
            <div className="dialog-content">
              <div className="dialog-field">
                <label>Achievement Title *</label>
                <input
                  type="text"
                  value={newAchievement.title}
                  onChange={(e) => handleAchievementInputChange('title', e.target.value)}
                  className={`dialog-input ${achievementErrors.title ? 'error' : ''}`}
                  placeholder="e.g., Employee of the Month, Certification, Award..."
                />
                {achievementErrors.title && <span className="error-message">{achievementErrors.title}</span>}
              </div>

              <div className="dialog-field">
                <label>Description *</label>
                <textarea
                  value={newAchievement.description}
                  onChange={(e) => handleAchievementInputChange('description', e.target.value)}
                  className={`dialog-textarea ${achievementErrors.description ? 'error' : ''}`}
                  placeholder="Describe your achievement and its significance..."
                  rows="4"
                />
                {achievementErrors.description && <span className="error-message">{achievementErrors.description}</span>}
              </div>

              <div className="dialog-row">
                <div className="dialog-field">
                  <label>Date *</label>
                  <input
                    type="date"
                    value={newAchievement.date}
                    onChange={(e) => handleAchievementInputChange('date', e.target.value)}
                    className={`dialog-input ${achievementErrors.date ? 'error' : ''}`}
                  />
                  {achievementErrors.date && <span className="error-message">{achievementErrors.date}</span>}
                </div>

                <div className="dialog-field">
                  <label>Category</label>
                  <select
                    value={newAchievement.category}
                    onChange={(e) => handleAchievementInputChange('category', e.target.value)}
                    className="dialog-select"
                  >
                    <option value="Work">Work</option>
                    <option value="Education">Education</option>
                    <option value="Personal">Personal</option>
                    <option value="Sports">Sports</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="dialog-field">
                <label>Achievement Image/Certificate (Optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="dialog-file-input"
                />
                {newAchievement.image && (
                  <div className="image-preview">
                    <img src={newAchievement.image} alt="Achievement preview" />
                  </div>
                )}
              </div>
            </div>
            
            <div className="dialog-actions">
              <button className="dialog-btn cancel" onClick={handleCancelAchievement}>
                Cancel
              </button>
              <button className="dialog-btn primary" onClick={addAchievement}>
                Add Achievement
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
