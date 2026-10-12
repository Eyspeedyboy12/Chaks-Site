import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Zap, ShieldCheck } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from '../components/ProjectModal';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Take the top featured projects for home display
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot"></span> Available for select projects
          </p>
          <h1 id="hero-title">
            Digital ideas,<br />
            <em>made human.</em>
          </h1>
          <p className="hero-intro">
            I am Chaks, a creative developer crafting thoughtful digital experiences
            where sharp design meets useful technology.
          </p>
          <div className="hero-cta-group">
            <Link className="primary-button" to="/work">
              Explore my work <ArrowDown size={14} aria-hidden="true" />
            </Link>
            <Link className="secondary-button" to="/about">
              My story <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit-core">
            <span>CH</span>
          </div>
          <span className="orbit-label label-top">
            Design<br />with intent
          </span>
          <span className="orbit-label label-bottom">
            Curiosity<br />in motion
          </span>
        </div>
      </section>

      {/* Ticker / Marquee Section */}
      <section className="ticker" aria-label="Services marquee">
        <div className="ticker-track">
          <span>Strategy</span><i></i>
          <span>Art direction</span><i></i>
          <span>Frontend Architecture</span><i></i>
          <span>Micro-Interactions</span><i></i>
          <span>Performance First</span><i></i>
          <span>Good energy</span><i></i>
          <span>React 19 &amp; Vite</span><i></i>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading-wrap">
          <div className="section-heading">
            <p className="eyebrow">Selected explorations</p>
            <h2 id="work-title">
              A little bit of<br />
              <em>what I do.</em>
            </h2>
          </div>
          <Link to="/work" className="view-all-link">
            <span>View all 6 projects</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.id === 'after-hours' ? 'project-night' : 'project-saffron'}`}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
            >
              <div className="card-top">
                <span>{project.badge}</span>
                <span className="card-action-icon"><ArrowUpRight size={15} /></span>
              </div>
              <div className={`project-art ${project.artClass}`}>
                {project.hasStar && <span className="star">*</span>}
                <span>
                  {project.tagline.split(' ')[0]}
                  <br />
                  <strong>{project.tagline.split(' ').slice(1).join(' ')}</strong>
                </span>
              </div>
              <div className="card-info">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <div className="card-quick-metrics">
                  {project.metrics?.slice(0, 2).map((m, i) => (
                    <span key={i} className="metric-chip">
                      <strong>{m.value}</strong> {m.label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Impact / Capabilities Grid */}
      <section className="capabilities-strip" aria-label="Capabilities and value">
        <div className="capabilities-inner">
          <div className="capabilities-header">
            <p className="eyebrow">The standard</p>
            <h2>Built with deliberate care.</h2>
          </div>
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon"><Zap size={22} /></div>
              <h3>Sub-Second Speed</h3>
              <p>Zero bloat, optimized bundles, and responsive images so every page loads in the blink of an eye.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon"><Layers size={22} /></div>
              <h3>Modular Architecture</h3>
              <p>Component systems designed to scale cleanly from prototype to production without breaking.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon"><Sparkles size={22} /></div>
              <h3>Sensory Micro-Interactions</h3>
              <p>Delightful hover states, kinetic physics, and bespoke transitions that users genuinely remember.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon"><ShieldCheck size={22} /></div>
              <h3>Accessible by Default</h3>
              <p>Semantic markup, screen-reader compatibility, keyboard navigation, and contrast compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Strip Banner */}
      <section className="about-strip" id="about">
        <p className="eyebrow">The short version</p>
        <p className="about-copy">
          I believe the best work feels <em>obvious</em> in hindsight, but never ordinary.
        </p>
        <div className="about-strip-actions">
          <Link to="/about" className="text-link">
            Read full story <ArrowUpRight size={14} />
          </Link>
          <a className="text-link" href="mailto:blessingschakale12@gmail.com">
            Start a conversation <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

