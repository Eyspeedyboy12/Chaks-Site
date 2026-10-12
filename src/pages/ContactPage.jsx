import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Copy, Check, Send, MapPin, Clock, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const prefilledScope = searchParams.get('scope') || '';
  const prefilledEstimate = searchParams.get('estimate');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: prefilledScope ? 'Full Multi-Page Website' : 'Brand Identity & Web Experience',
    budget: '$3k – $5k',
    message: prefilledEstimate ? `Hi Chaks, I was testing your project estimator (approx. $${prefilledEstimate}) and would love to discuss...` : ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const budgetOptions = ['$1.5k – $3k', '$3k – $5k', '$5k – $10k', '$10k+'];
  const projectTypes = [
    'Brand Identity & Web Experience',
    'Full Multi-Page Website',
    'Interactive Web App / Dashboard',
    'Motion & Creative Tech Prototype',
    'Performance & Speed Audit'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('blessingschakale12@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please share a brief note about what you are looking to build (at least 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate realistic async network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="page-container">
      {/* Page Header */}
      <section className="page-header">
        <p className="eyebrow"><span className="status-dot"></span> Inquiries &middot; Let&apos;s Connect</p>
        <h1 className="page-title">
          Start a<br />
          <em>Conversation.</em>
        </h1>
        <p className="page-description">
          Have an exciting project, an ambitious redesign, or an exploratory question?
          Fill out the brief form below or email directly.
        </p>
      </section>

      <section className="contact-main-grid">
        {/* Contact Info Sidebar */}
        <div className="contact-sidebar">
          <div className="contact-info-card">
            <span className="eyebrow">Direct Contact</span>
            <div className="email-copy-box">
              <span className="email-address-text">blessingschakale12@gmail.com</span>
              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                title="Copy email to clipboard"
              >
                {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="sidebar-details-list">
              <div className="detail-item">
                <MapPin size={18} className="detail-icon" />
                <div>
                  <strong>Location</strong>
                  <p>Lilongwe, Malawi &middot; Remote Worldwide</p>
                </div>
              </div>

              <div className="detail-item">
                <Clock size={18} className="detail-icon" />
                <div>
                  <strong>Timezone &amp; Hours</strong>
                  <p>Central Africa Time (UTC+2) &middot; Mon &ndash; Fri</p>
                </div>
              </div>

              <div className="detail-item">
                <Sparkles size={18} className="detail-icon" />
                <div>
                  <strong>Current Status</strong>
                  <p className="status-highlight">
                    <span className="status-dot"></span> Available for select projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="response-time-card">
            <h4>Expected Response Time</h4>
            <p>I read and reply to every thoughtful inquiry within 24 business hours.</p>
          </div>
        </div>

        {/* Contact Form or Confirmation */}
        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="submission-success-card">
              <div className="success-icon-wrap">
                <Sparkles size={36} />
              </div>
              <h2>Message received!</h2>
              <p>
                Thank you for reaching out, <strong>{formData.name}</strong>. I have received your notes regarding <strong>{formData.projectType}</strong>.
              </p>
              <p className="success-sub">
                I will review your requirements and follow up at <strong>{formData.email}</strong> shortly.
              </p>
              <button
                type="button"
                className="secondary-button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    projectType: projectTypes[0],
                    budget: budgetOptions[1],
                    message: ''
                  });
                }}
              >
                Send another note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    placeholder="e.g. Maya Lin"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="maya@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectType" className="form-label">
                  Project Type
                </label>
                <select
                  id="projectType"
                  className="form-select"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Budget (USD)</label>
                <div className="budget-chips-group">
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`budget-chip ${formData.budget === b ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, budget: b })}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Project Details / Message <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  placeholder="Tell me a bit about your company, what you are looking to build, and any specific deadlines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="primary-button form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
