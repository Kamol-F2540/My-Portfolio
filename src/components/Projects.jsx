import React, { useState } from 'react';
import { Search, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects({ t }) {
  const [activeCategoryKey, setActiveCategoryKey] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = t.projects.items || [];

  const categories = [
    { key: 'all', label: t.projects.all },
    { key: 'fullstack', label: t.projects.fullstack },
    { key: 'ai', label: t.projects.ai },
    { key: 'mobile', label: t.projects.mobile },
    { key: 'design', label: t.projects.design },
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategoryKey === 'all' || project.categoryKey === activeCategoryKey;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(techItem => techItem.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-badge">{t.projects.tag}</div>
          <h2 className="section-title title-gradient" style={{ fontSize: '2.8rem', marginTop: '0.5rem' }}>
            {t.projects.title}
          </h2>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter & Search Bar Row */}
        <div className="filter-search-row">
          <div className="project-categories">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`cat-btn ${activeCategoryKey === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategoryKey(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="search-input-wrap">
            <Search size={16} className="search-icon" />
            <input 
              type="text"
              placeholder={t.projects.searchPlaceholder}
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-card-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`project-img-container ${project.isLogo ? 'project-logo-container' : ''}`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={project.isLogo ? 'project-logo-img' : 'project-cover-img'}
                />
                <span className="project-metrics-badge">{project.metrics}</span>
              </div>

              <div className="project-info-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{project.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.role}</span>
                </div>

                <h3 className="project-item-title">{project.title}</h3>
                <p className="project-item-desc">{project.description}</p>

                <div className="tech-pills-row" style={{ marginTop: '0.5rem' }}>
                  {project.tech.slice(0, 4).map((techItem, idx) => (
                    <span key={idx} className="tech-pill" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>{techItem}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-pill" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>+{project.tech.length - 4}</span>
                  )}
                </div>

                <button 
                  className="btn-secondary"
                  style={{ marginTop: '1rem', width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  <Eye size={16} /> {t.projects.viewDetails}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Reader */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          t={t}
        />
      )}
    </section>
  );
}
