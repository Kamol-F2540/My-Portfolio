import React from 'react';
import { Code2, Server, GitBranch, Sparkles } from 'lucide-react';

export default function Skills({ t }) {
  const categoriesData = [
    {
      id: 'frontend',
      title: t.skills.categories.frontend,
      icon: <Code2 size={20} />,
      skills: [
        { name: 'JavaScript (ESNext)', level: '92%' },
        { name: 'React 19 / JSX', level: '90%' },
        { name: 'TailwindCSS & HTML5/CSS3', level: '95%' },
        { name: 'TypeScript (Learning)', level: '60%' },
      ]
    },
    {
      id: 'backend',
      title: t.skills.categories.backend,
      icon: <Server size={20} />,
      skills: [
        { name: 'Node.js & Express (Learning)', level: '55%' },
        { name: 'REST APIs (Learning)', level: '60%' },
        { name: 'SQL & NoSQL Databases (Learning)', level: '50%' },
        { name: 'Server Routing Basics', level: '55%' },
      ]
    },
    {
      id: 'tools',
      title: t.skills.categories.tools,
      icon: <GitBranch size={20} />,
      skills: [
        { name: 'Git & Version Control', level: '85%' },
        { name: 'GitHub & Repository Basics', level: '80%' },
        { name: 'Vite & Bundling', level: '85%' },
        { name: 'Deployment (Vercel / Render)', level: '80%' },
      ]
    },
    {
      id: 'vibecoding',
      title: 'Vibe Coding & AI Workflows',
      icon: <Sparkles size={20} />,
      skills: [
        { name: 'AI Prompt Engineering', level: '98%' },
        { name: 'Rapid Frontend Prototyping', level: '95%' },
        { name: 'Vibe Coding Development', level: '95%' },
        { name: 'Real-time Debugging & UI Polish', level: '92%' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-badge">{t.skills.tag}</div>
          <h2 className="section-title title-gradient" style={{ fontSize: '2.8rem', marginTop: '0.5rem' }}>
            {t.skills.title}
          </h2>
          <p className="section-subtitle">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="skills-categories-grid">
          {categoriesData.map((cat) => (
            <div key={cat.id} className="glass-card skill-category-card">
              <div className="skill-cat-header">
                <div className="skill-cat-icon">
                  {cat.icon}
                </div>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>

              <div className="skill-items-list">
                {cat.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 600, gap: '0.5rem' }}>
                      <span>{skill.name}</span>
                      <span style={{ color: 'var(--accent-primary)' }}>{skill.level}</span>
                    </div>

                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: skill.level }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
