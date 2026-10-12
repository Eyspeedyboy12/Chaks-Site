import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Calculator, Clock, HelpCircle } from 'lucide-react';
import { services, processSteps, projectScopes, faqs } from '../data/services';

export default function ServicesPage() {
  // State for interactive scope estimator
  const [selectedScope, setSelectedScope] = useState(projectScopes[1].id);
  const [addons, setAddons] = useState({
    cms: true,
    motion: true,
    seo: false,
    retainer: false
  });

  // State for FAQs accordion
  const [openFaq, setOpenFaq] = useState(0);

  const addonPrices = {
    cms: { label: 'Headless CMS Integration', price: 600, extraWeeks: 1 },
    motion: { label: 'Advanced Motion & Canvas Physics', price: 800, extraWeeks: 1 },
    seo: { label: 'Comprehensive SEO & Schema Audit', price: 400, extraWeeks: 0 },
    retainer: { label: '30-Day Post-Launch Retainer', price: 900, extraWeeks: 0 }
  };

  const currentScope = projectScopes.find((s) => s.id === selectedScope) || projectScopes[0];

  const totalEstimate =
    currentScope.baseCost +
    (addons.cms ? addonPrices.cms.price : 0) +
    (addons.motion ? addonPrices.motion.price : 0) +
    (addons.seo ? addonPrices.seo.price : 0) +
    (addons.retainer ? addonPrices.retainer.price : 0);

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="page-container">
      {/* Page Header */}
      <section className="page-header">
        <p className="eyebrow"><span className="status-dot"></span> Capabilities &middot; Engagement Models</p>
        <h1 className="page-title">
          Services &amp;<br />
          <em>Solutions.</em>
        </h1>
        <p className="page-description">
          End-to-end digital craft tailored for companies that value design distinction,
          engineering resilience, and measurable results.
        </p>
      </section>

      {/* Services Grid */}
      <section className="services-offerings-section" aria-label="Services offered">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card" id={service.id}>
              <div className="service-card-top">
                <span className="service-num">{service.number}</span>
                <span className="service-highlight-badge">{service.highlight}</span>
              </div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-description">{service.description}</p>

              <div className="service-deliverables">
                <h4 className="deliverables-heading">Deliverables Include:</h4>
                <ul className="deliverables-list">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <Check size={14} className="service-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process & Workflow */}
      <section className="process-section">
        <div className="section-heading">
          <p className="eyebrow">The Methodology</p>
          <h2>How We Work Together</h2>
          <p className="section-subtext">A collaborative, transparent four-stage process designed to eliminate surprises.</p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.step} className="process-card">
              <div className="process-top-row">
                <span className="process-step-num">{step.step}</span>
                <span className="process-duration">{step.duration}</span>
              </div>
              <h3 className="process-name">{step.name}</h3>
              <p className="process-details">{step.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Project Scope Estimator */}
      <section className="estimator-section">
        <div className="estimator-card">
          <div className="estimator-header">
            <div className="estimator-title-group">
              <span className="eyebrow"><Calculator size={14} className="inline-icon" /> Interactive Estimator</span>
              <h2>Configure Your Project Scope</h2>
              <p>Explore ballpark investment figures and approximate timelines in real time.</p>
            </div>
            <div className="estimator-total-box">
              <span className="est-total-label">Estimated Investment</span>
              <span className="est-total-price">${totalEstimate.toLocaleString()}</span>
              <span className="est-total-time">
                <Clock size={13} className="inline-icon" /> Typical Timeline: {currentScope.timeWeeks}
              </span>
            </div>
          </div>

          <div className="estimator-body">
            {/* Scope Selection */}
            <div className="estimator-step">
              <h3 className="step-label">1. Select Core Scope</h3>
              <div className="scope-options-grid">
                {projectScopes.map((scope) => (
                  <button
                    key={scope.id}
                    type="button"
                    className={`scope-select-btn ${selectedScope === scope.id ? 'is-selected' : ''}`}
                    onClick={() => setSelectedScope(scope.id)}
                  >
                    <div className="scope-btn-top">
                      <span className="scope-name">{scope.label}</span>
                      <span className="scope-price">from ${scope.baseCost}</span>
                    </div>
                    <span className="scope-time">{scope.timeWeeks} turnaround</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="estimator-step">
              <h3 className="step-label">2. Select Add-on Capabilities</h3>
              <div className="addons-grid">
                {Object.entries(addonPrices).map(([key, data]) => (
                  <label key={key} className={`addon-toggle-box ${addons[key] ? 'is-checked' : ''}`}>
                    <input
                      type="checkbox"
                      checked={addons[key]}
                      onChange={() => toggleAddon(key)}
                      className="addon-checkbox"
                    />
                    <div className="addon-info">
                      <span className="addon-title">{data.label}</span>
                      <span className="addon-price">+${data.price}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="estimator-footer">
              <p className="estimator-disclaimer">
                * Estimates are guideline figures. Exact pricing is confirmed after our initial discovery call and requirements review.
              </p>
              <Link
                to={`/contact?scope=${currentScope.id}&estimate=${totalEstimate}`}
                className="primary-button"
              >
                Inquire with this scope <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow"><HelpCircle size={14} className="inline-icon" /> Clarifications</p>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openFaq === idx ? 'faq-open' : ''}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                aria-expanded={openFaq === idx}
              >
                <span>{faq.question}</span>
                <span className="faq-icon-wrap">
                  {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              {openFaq === idx && (
                <div className="faq-answer-panel">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

