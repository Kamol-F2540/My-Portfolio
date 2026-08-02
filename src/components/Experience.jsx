import React from 'react';
import { Briefcase, MapPin, CheckCircle } from 'lucide-react';

export default function Experience({ t }) {
  const experiences = t.experience.items || [];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-badge">{t.experience.tag}</div>
          <h2 className="section-title title-gradient" style={{ fontSize: '2.8rem', marginTop: '0.5rem' }}>
            {t.experience.title}
          </h2>
          <p className="section-subtitle">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-item">
              <div className="exp-dot">
                <Briefcase size={18} />
              </div>

              <div className="glass-card exp-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="exp-period">{exp.period}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>

                <h3 className="exp-role">{exp.role}</h3>
                <div className="exp-company">@ {exp.company}</div>

                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  {exp.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.achievements && exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={15} color="var(--accent-primary)" /> {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
