import { ArrowUpRight, Check } from 'lucide-react';
import { bioData, skillsData, timelineData, principles } from '../data/about';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="page-container">
      {/* Page Header */}
      <section className="page-header about-page-header">
        <p className="eyebrow">
          <span className="status-dot"></span> The Philosophy &amp; Background
        </p>
        <h1 className="page-title">
          Curiosity,<br />
          <em>in motion.</em>
        </h1>
        <p className="page-description">
          A creative developer exploring the friction and harmony between human aesthetic
          sensibility and rigorous digital engineering.
        </p>
      </section>

      {/* Main Story & Profile Grid */}
      <section className="about-bio-section">
        <div className="bio-split-layout">
          <div className="bio-left-card">
            <div className="bio-avatar-block">
              <div className="bio-avatar-core">
                <span>BC</span>
              </div>
              <div className="bio-status-badge">
                <span className="status-dot"></span>
                <span>Lilongwe, Malawi &middot; Remote</span>
              </div>
            </div>

            <div className="bio-quick-facts">
              <div className="quick-fact-item">
                <span className="fact-label">Role</span>
                <span className="fact-value">{bioData.role}</span>
              </div>
              <div className="quick-fact-item">
                <span className="fact-label">Experience</span>
                <span className="fact-value">4+ Years Engineering</span>
              </div>
              <div className="quick-fact-item">
                <span className="fact-label">Focus</span>
                <span className="fact-value">React, Motion UI, Design Systems</span>
              </div>
              <div className="quick-fact-item">
                <span className="fact-label">Availability</span>
                <span className="fact-value highlight-avail">{bioData.availability}</span>
              </div>
            </div>

            <div className="bio-actions">
              <Link to="/contact" className="primary-button full-width-btn">
                Work with me <ArrowUpRight size={16} />
              </Link>
              <a
                href="mailto:blessingschakale12@gmail.com"
                className="secondary-button full-width-btn"
              >
                Send direct email
              </a>
            </div>
          </div>

          <div className="bio-narrative-card">
            <h2 className="bio-story-heading">
              Building for people, not just for viewports.
            </h2>
            <div className="bio-paragraphs">
              {bioData.fullStory.map((paragraph, idx) => (
                <p key={idx} className="bio-story-p">{paragraph}</p>
              ))}
            </div>

            <div className="bio-quote-highlight">
              <blockquote>
                &ldquo;Great code functions like invisible architecture: when it works flawlessly, you don&apos;t marvel at the bricks, you marvel at how the space makes you feel.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="about-principles-section">
        <div className="section-heading">
          <p className="eyebrow">Guiding Values</p>
          <h2>How I approach every project.</h2>
        </div>

        <div className="principles-grid">
          {principles.map((principle) => (
            <div key={principle.number} className="principle-card">
              <span className="principle-number">{principle.number}</span>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-text">{principle.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Technologies Matrix */}
      <section className="about-skills-section">
        <div className="section-heading">
          <p className="eyebrow">Technical Competence</p>
          <h2>Tools &amp; Capabilities</h2>
        </div>

        <div className="skills-matrix-grid">
          {skillsData.map((group, idx) => (
            <div key={idx} className="skill-group-card">
              <h3 className="skill-group-title">{group.category}</h3>
              <ul className="skill-pills-list">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-pill-item">
                    <Check size={14} className="skill-check" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section className="about-timeline-section">
        <div className="section-heading">
          <p className="eyebrow">Experience &middot; Milestones</p>
          <h2>The Journey So Far</h2>
        </div>

        <div className="timeline-container">
          {timelineData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot"></span>
                <span className="timeline-line"></span>
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
