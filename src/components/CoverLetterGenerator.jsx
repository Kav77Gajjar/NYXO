import { useState, useEffect } from 'react'
import './CoverLetterGenerator.css'

export default function CoverLetterGenerator() {
  const [degree, setDegree] = useState('')
  const [field, setField] = useState('')
  const [experience, setExperience] = useState('no-exp')
  const [isStudent, setIsStudent] = useState(null)

  // small validation state
  const [submitted, setSubmitted] = useState(false)

  const handleExperienceClick = (val) => {
    setExperience(val)
    // reset student question when experience changes
    if (val !== 'no-exp') setIsStudent(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // For now just log — integration with backend or next step can be added later
    console.log({ degree, field, experience, isStudent })
  // Navigate to templates page after submit
  const event = new CustomEvent('navigate', { detail: { page: 'cover-letter-templates' } })
  window.dispatchEvent(event)
  }

  // If user indicates No for student while having no experience, go to templates
  useEffect(() => {
    if (experience === 'no-exp' && isStudent === false) {
      const event = new CustomEvent('navigate', { detail: { page: 'cover-letter-templates' } })
      window.dispatchEvent(event)
    }
  }, [experience, isStudent])

  return (
    <div className="cover-gen">
      <div className="cover-gen-card">
        <h2>Cover Letter Details</h2>
        <form onSubmit={handleSubmit} className="cover-gen-form">
          <label className="field">
            <span>Degree (e.g., BTech, BCA)</span>
            <input
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              placeholder="Enter your degree"
              required
            />
          </label>

          <label className="field">
            <span>Field of Study</span>
            <input
              value={field}
              onChange={(e) => setField(e.target.value)}
              placeholder="e.g., Computer Science, Commerce"
              required
            />
          </label>

          <div className="field">
            <span>Experience</span>
            <div className="exp-buttons">
              <button type="button" className={experience==='no-exp'? 'active':''} onClick={() => handleExperienceClick('no-exp')}>No exp / Intern</button>
              <button type="button" className={experience==='lt1'? 'active':''} onClick={() => handleExperienceClick('lt1')}>Less than 1 year</button>
              <button type="button" className={experience==='1-3'? 'active':''} onClick={() => handleExperienceClick('1-3')}>1-3 years</button>
              <button type="button" className={experience==='3-5'? 'active':''} onClick={() => handleExperienceClick('3-5')}>3-5 years</button>
              <button type="button" className={experience==='5-10'? 'active':''} onClick={() => handleExperienceClick('5-10')}>5-10 years</button>
              <button type="button" className={experience==='10+'? 'active':''} onClick={() => handleExperienceClick('10+')}>10+</button>
            </div>
          </div>

          {experience === 'no-exp' && (
            <div className="field">
              <span>Are you a student?</span>
              <div className="exp-buttons">
                <button type="button" className={isStudent===true? 'active':''} onClick={() => setIsStudent(true)}>Yes</button>
                <button type="button" className={isStudent===false? 'active':''} onClick={() => setIsStudent(false)}>No</button>
              </div>
            </div>
          )}

          <div className="form-actions">
            <button type="submit" className="primary">Continue</button>
          </div>

          {submitted && (
            <div className="submitted-note">Saved locally — next step not implemented.</div>
          )}
        </form>
      </div>
    </div>
  )
}
