import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react';

// Crisp custom vector icons for brand platforms
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Pre-footer Call to Action banner */}
      <div className="footer-cta-strip">
        <div className="footer-cta-inner">
          <div className="footer-cta-copy">
            <span className="eyebrow eyebrow-light">Have an idea in mind?</span>
            <h2 className="footer-cta-title">
              Let&apos;s build something <br />
              <em>truly memorable.</em>
            </h2>
          </div>
          <div className="footer-cta-action">
            <Link to="/contact" className="footer-cta-button">
              <span>Start a Project</span>
              <ArrowUpRight size={18} />
            </Link>
            <p className="footer-cta-note">Taking bookings for Q2 &amp; Q3 2026</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="footer-main">
        <div className="footer-col footer-col-brand">
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark">BC</span>
            <span>Chaks<span className="brand-dot">.</span></span>
          </Link>
          <p className="footer-bio">
            Creative developer crafting thoughtful digital experiences where sharp design meets useful technology.
          </p>
          <div className="footer-status-pill">
            <span className="status-dot"></span>
            <span>Available for select projects</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Selected Work</Link></li>
            <li><Link to="/about">About &amp; Journey</Link></li>
            <li><Link to="/services">Services &amp; Pricing</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links">
            <li><Link to="/services#frontend">Frontend Engineering</Link></li>
            <li><Link to="/services#creative">Creative Direction</Link></li>
            <li><Link to="/services#motion">Motion &amp; Interaction</Link></li>
            <li><Link to="/services#performance">Speed &amp; SEO Audits</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-col-connect">
          <h4 className="footer-col-title">Connect</h4>
          <div className="footer-social-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              aria-label="Twitter / X"
            >
              <TwitterIcon size={18} />
              <span>Twitter</span>
            </a>
            <a
              href="mailto:blessingschakale12@gmail.com"
              className="social-icon-link"
              aria-label="Direct Email"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-copy">
          <span>&copy; {new Date().getFullYear()} Blessings &ldquo;Chaks&rdquo; Chakale</span>
          <span className="footer-dot-sep">&middot;</span>
          <span>Lilongwe (UTC+2) &amp; Worldwide</span>
          <span className="footer-dot-sep">&middot;</span>
          <span>Crafted with React 19 &amp; Vite</span>
        </div>
        <button
          type="button"
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}

