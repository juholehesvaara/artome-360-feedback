import { useState, useCallback } from 'react'
import translations from './translations'
import logoBlack from './artome_logo_black.png'

// ── Configuration ──────────────────────────────────────────────
// Replace with your Power Automate HTTP trigger URL
const POWER_AUTOMATE_URL = 'YOUR_POWER_AUTOMATE_WEBHOOK_URL'

const VALUE_KEYS = ['outsmarting', 'innovation', 'discipline', 'showUp']
const RELATIONSHIP_KEYS = ['manager', 'peer', 'direct_report', 'self']

// ── Behavioral Scale Component ─────────────────────────────────
function BehavioralScale({ question, value, onChange, lang }) {
  const labels = {
    en: ['1', '2', '3', '4', '5'],
    fi: ['1', '2', '3', '4', '5'],
  }
  const [hoveredLevel, setHoveredLevel] = useState(null)
  const displayLevel = hoveredLevel ?? value

  return (
    <div className="question-block">
      <p className="question-text">{question.text}</p>
      <div className="scale-row">
        {question.anchors.map((_, i) => {
          const level = i + 1
          const isSelected = value === level
          const isHovered = hoveredLevel === level
          return (
            <button
              key={level}
              type="button"
              className={`scale-btn ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
              onClick={() => onChange(level)}
              onMouseEnter={() => setHoveredLevel(level)}
              onMouseLeave={() => setHoveredLevel(null)}
              aria-label={`Level ${level}`}
            >
              {labels[lang][i]}
            </button>
          )
        })}
      </div>
      {displayLevel && (
        <p className="anchor-description">
          {question.anchors[displayLevel - 1]}
        </p>
      )}
    </div>
  )
}

// ── Feedback Section Component ─────────────────────────────────
function FeedbackSection({ valueKey, valueData, ratings, comments, onRate, onComment, lang, t }) {
  return (
    <section className="value-section">
      <div className="value-header">
        <h2 className="value-name">{valueData.name}</h2>
        <div className="laserline" />
        <p className="value-description">{valueData.description}</p>
      </div>
      {valueData.questions.map((q) => (
        <BehavioralScale
          key={q.id}
          question={q}
          value={ratings[q.id] || null}
          onChange={(level) => onRate(q.id, level)}
          lang={lang}
        />
      ))}
      <div className="comment-block">
        <label className="comment-label">{t.openComment}</label>
        <textarea
          className="comment-input"
          placeholder={t.openCommentPlaceholder}
          value={comments[valueKey] || ''}
          onChange={(e) => onComment(valueKey, e.target.value)}
          rows={3}
        />
      </div>
    </section>
  )
}

// ── Success Screen ─────────────────────────────────────────────
function SuccessScreen({ t, onReset }) {
  return (
    <div className="success-screen">
      <div className="success-icon">&#10003;</div>
      <h2>{t.successTitle}</h2>
      <p>{t.successMessage}</p>
      <button className="btn-primary" onClick={onReset}>{t.submitAnother}</button>
    </div>
  )
}

// ── Main App ───────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState('en')
  const [reviewerName, setReviewerName] = useState('')
  const [reviewerEmail, setReviewerEmail] = useState('')
  const [revieweeName, setRevieweeName] = useState('')
  const [relationship, setRelationship] = useState('')
  const [ratings, setRatings] = useState({})
  const [comments, setComments] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [validationError, setValidationError] = useState(false)

  const t = translations[lang]

  const handleRate = useCallback((questionId, level) => {
    setRatings((prev) => ({ ...prev, [questionId]: level }))
    setValidationError(false)
  }, [])

  const handleComment = useCallback((valueKey, text) => {
    setComments((prev) => ({ ...prev, [valueKey]: text }))
  }, [])

  const toggleLang = () => setLang((l) => (l === 'en' ? 'fi' : 'en'))

  const validate = () => {
    if (!reviewerName.trim() || !reviewerEmail.trim() || !revieweeName.trim() || !relationship) {
      return false
    }
    // At least one rating per value
    for (const vk of VALUE_KEYS) {
      const valueQuestions = t.values[vk].questions
      const hasAtLeastOne = valueQuestions.some((q) => ratings[q.id])
      if (!hasAtLeastOne) return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) {
      setValidationError(true)
      return
    }
    setValidationError(false)
    setStatus('submitting')

    const payload = {
      submittedAt: new Date().toISOString(),
      language: lang,
      reviewer: {
        name: reviewerName.trim(),
        email: reviewerEmail.trim(),
      },
      reviewee: revieweeName.trim(),
      relationship,
      ratings: { ...ratings },
      comments: { ...comments },
    }

    try {
      const res = await fetch(POWER_AUTOMATE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setReviewerName('')
    setReviewerEmail('')
    setRevieweeName('')
    setRelationship('')
    setRatings({})
    setComments({})
    setStatus('idle')
    setValidationError(false)
    window.scrollTo(0, 0)
  }

  if (status === 'success') {
    return (
      <div className="app">
        <header className="app-header">
          <div className="header-inner">
            <img src={logoBlack} alt="Artome" className="logo" />
            <button className="lang-toggle" onClick={toggleLang} type="button">{t.langToggle}</button>
          </div>
        </header>
        <main className="main-content">
          <SuccessScreen t={t} onReset={resetForm} />
        </main>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="accent-bar" />

      <header className="app-header">
        <div className="header-inner">
          <img src={logoBlack} alt="Artome" className="logo" />
          <button className="lang-toggle" onClick={toggleLang} type="button">{t.langToggle}</button>
        </div>
      </header>

      <main className="main-content">
        <div className="title-block">
          <h1 className="form-title">{t.title}</h1>
          <div className="laserline laserline-title" />
          <p className="form-subtitle">{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Reviewer Info */}
          <section className="reviewer-section">
            <h2 className="section-heading">{t.reviewerSection}</h2>
            <div className="laserline" />
            <p className="confidential-note">{t.confidentialNote}</p>
            <div className="form-grid">
              <div className="field">
                <label>{t.reviewerName} *</label>
                <input
                  type="text"
                  value={reviewerName}
                  onChange={(e) => { setReviewerName(e.target.value); setValidationError(false) }}
                  required
                />
              </div>
              <div className="field">
                <label>{t.reviewerEmail} *</label>
                <input
                  type="email"
                  value={reviewerEmail}
                  onChange={(e) => { setReviewerEmail(e.target.value); setValidationError(false) }}
                  required
                />
              </div>
              <div className="field">
                <label>{t.revieweeName} *</label>
                <input
                  type="text"
                  value={revieweeName}
                  onChange={(e) => { setRevieweeName(e.target.value); setValidationError(false) }}
                  required
                />
              </div>
              <div className="field">
                <label>{t.relationship} *</label>
                <select
                  value={relationship}
                  onChange={(e) => { setRelationship(e.target.value); setValidationError(false) }}
                  required
                >
                  <option value="">{t.selectRelationship}</option>
                  {RELATIONSHIP_KEYS.map((rk) => (
                    <option key={rk} value={rk}>{t.relationships[rk]}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Feedback Sections */}
          {VALUE_KEYS.map((vk) => (
            <FeedbackSection
              key={vk}
              valueKey={vk}
              valueData={t.values[vk]}
              ratings={ratings}
              comments={comments}
              onRate={handleRate}
              onComment={handleComment}
              lang={lang}
              t={t}
            />
          ))}

          {/* Validation & Submit */}
          {validationError && <p className="error-msg">{t.required}</p>}
          {status === 'error' && <p className="error-msg">{t.errorMessage}</p>}

          <div className="submit-row">
            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? t.submitting : t.submit}
            </button>
          </div>
        </form>
      </main>

      <footer className="app-footer">
        <span className="confidential-mark">Confidential</span>
      </footer>
    </div>
  )
}
