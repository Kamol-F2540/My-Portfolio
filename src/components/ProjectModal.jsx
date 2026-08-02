import React from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose, t }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="glass-badge">{project.category}</span>
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', fontWeight: 800 }}>{project.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} title="Close Modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Main Hero Image */}
          {project.isLogo ? (
            <div className="modal-logo-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="modal-logo-img"
              />
            </div>
          ) : (
            <img 
              src={project.image} 
              alt={project.title} 
              className="modal-hero-img"
              style={{ borderRadius: 'var(--radius-sm)' }}
            />
          )}

          {/* Quick Metrics */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>METRIC IMPACT: </span>
              <span style={{ fontFamily: 'var(--font-title)', fontWeight: 700, color: 'var(--accent-primary)', marginLeft: '0.4rem' }}>{project.metrics}</span>
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>ROLE: </span>
              <span style={{ fontFamily: 'var(--font-title)', fontWeight: 700, color: 'var(--accent-secondary)', marginLeft: '0.4rem' }}>{project.role}</span>
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>YEAR: </span>
              <span style={{ fontFamily: 'var(--font-title)', fontWeight: 700, color: 'var(--text-primary)', marginLeft: '0.4rem' }}>2026</span>
            </div>
          </div>

          {/* Detailed Overview */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
              {t.projects.modalOverview}
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Features List */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              {t.projects.modalDeliverables}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.features && project.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <CheckCircle size={16} color="var(--accent-primary)" /> {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {t.projects.modalTech}
            </h4>
            <div className="project-tech-tags">
              {project.tech.map((techItem, idx) => (
                <span key={idx} className="tech-pill">
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <a 
              href={project.demoUrl || "#"} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary"
            >
              {t.projects.liveDemo} <ExternalLink size={18} />
            </a>

            <a 
              href={project.repoUrl || "#"} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary"
            >
              {t.projects.sourceCode} <GithubIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
