import { useState, useMemo } from 'react';
import { Search, ArrowUpRight, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from '../components/ProjectModal';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Branding', 'Web Experience', 'Product Design', 'Creative Tech'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="page-container">
      {/* Page Header */}
      <section className="page-header">
        <p className="eyebrow"><span className="status-dot"></span> Archive &middot; 2024 &ndash; 2026</p>
        <h1 className="page-title">
          Selected<br />
          <em>Work.</em>
        </h1>
        <p className="page-description">
          A curated collection of web experiences, brand identities, digital products,
          and interactive experiments crafted with precision.
        </p>
      </section>

      {/* Filter and Search Controls */}
      <div className="work-controls-bar">
        <div className="category-filter-group" role="tablist" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {cat === 'All' && <span className="chip-count">({projects.length})</span>}
            </button>
          ))}
        </div>

        <div className="search-box-wrapper">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search by title, tool, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <section className="work-gallery" aria-label="Projects list">
        {filteredProjects.length === 0 ? (
          <div className="empty-results-box">
            <Sparkles size={32} className="empty-icon" />
            <h3>No projects found</h3>
            <p>No projects match your current filter criteria &ldquo;{searchQuery}&rdquo;.</p>
            <button
              type="button"
              className="secondary-button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="project-grid work-grid-extended">
            {filteredProjects.map((project, idx) => {
              const isDarkCard = idx % 2 === 1;
              return (
                <article
                  key={project.id}
                  className={`project-card ${isDarkCard ? 'project-night' : 'project-saffron'}`}
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
                    <div className="card-title-row">
                      <h3>{project.title}</h3>
                      <span className="project-year-tag">{project.year}</span>
                    </div>
                    <p>{project.subtitle}</p>

                    <div className="card-tech-pills">
                      {project.techStack.slice(0, 3).map((t, i) => (
                        <span key={i} className="mini-tech-pill">{t}</span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="mini-tech-pill">+{project.techStack.length - 3}</span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
