import { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-badge-row">
            <span className="modal-badge">{project.badge}</span>
            <span className="modal-year">{project.year}</span>
          </div>
          <h2 id="modal-project-title" className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>

        {/* Modal Art Banner */}
        <div className={`modal-art ${project.artClass}`}>
          {project.hasStar && <span className="star">*</span>}
          <span>
            {project.tagline.split(' ')[0]}
            <br />
            <strong>{project.tagline.split(' ').slice(1).join(' ')}</strong>
          </span>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3 className="modal-section-title">Overview</h3>
            <p className="modal-text">{project.longDescription || project.description}</p>
          </div>

          {/* Metrics Grid */}
          {project.metrics && (
            <div className="modal-metrics-grid">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="modal-metric-card">
                  <div className="modal-metric-value">{m.value}</div>
                  <div className="modal-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Deliverables */}
          <div className="modal-section">
            <h3 className="modal-section-title">Key Deliverables</h3>
            <ul className="modal-deliverables-list">
              {project.deliverables.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle size={16} className="deliverable-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="modal-section">
            <h3 className="modal-section-title">Technology &amp; Tools</h3>
            <div className="modal-chips-wrap">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-chip">{tech}</span>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          {project.testimonial && (
            <div className="modal-testimonial">
              <blockquote className="modal-quote">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div className="modal-quote-author">
                <strong>{project.testimonial.author}</strong>
                <span>{project.testimonial.role}</span>
              </div>
            </div>
          )}

          <div className="modal-footer-action">
            <a
              href="mailto:blessingschakale12@gmail.com?subject=Inquiry regarding project"
              className="primary-button"
            >
              Discuss a similar project <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
