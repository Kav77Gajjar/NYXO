import './CoverLetterTemplates.css'

export default function CoverLetterTemplates({ onNavigateBack }) {
  const templates = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Template ${i + 1}`
  }))

  return (
    <div className="cover-templates">
      {/* Top bar with Back button */}
      <div className="top-bar">
        <button
          className="back-btn"
          onClick={onNavigateBack || (() => window.history.back())}
          aria-label="Go back"
          title="Go back"
        >
          ← Back to Tools
        </button>
        <h1>Cover Letter Templates</h1>
      </div>
      
      <div className="cover-templates-inner">
        <h2>Cover Letter Templates</h2>
        <div className="templates-grid">
          {templates.map(t => (
            <div className="template-card" key={t.id}>
              <div className="template-preview">{t.name}</div>
              <div className="template-actions">
                <button className="use-btn">Use this template</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
