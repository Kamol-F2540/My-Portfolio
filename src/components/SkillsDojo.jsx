import React, { useState } from 'react';
import { Swords, Code, Server, Zap, Wrench, Shield, Sparkles } from 'lucide-react';
import { playSound } from '../utils/audio';

const DOJO_CATEGORIES = [
  {
    id: 'taijutsu',
    title: 'TAIJUTSU (FRONTEND)',
    subtitle: 'Hand-to-Hand Code Combat',
    icon: <Code size={22} />,
    color: 'var(--accent-primary)',
    skills: [
      { name: 'React 19 / JSX', level: 'MASTER 98%', desc: 'Hooks, Concurrent Mode, Compiler & Server Components' },
      { name: 'JavaScript / TypeScript', level: 'EXPERT 95%', desc: 'ESNext, Async/Await, Generics, Event Loop mastery' },
      { name: 'HTML5 & CSS3 Artistry', level: 'SENSEI 99%', desc: 'CSS Grid, Flexbox, Animations, Halftone Screentone Styling' },
      { name: 'Vite & Webpack', level: 'ADVANCED 92%', desc: 'HMR, Module Bundling, Asset Pipelines & Tree Shaking' },
      { name: 'WebGL & Canvas API', level: 'ADVANCED 88%', desc: '2D/3D Shader rendering, interactive particles & game loops' },
    ]
  },
  {
    id: 'ninjutsu',
    title: 'NINJUTSU (BACKEND)',
    subtitle: 'Secret Server Elemental Arts',
    icon: <Server size={22} />,
    color: 'var(--accent-secondary)',
    skills: [
      { name: 'Node.js & Express', level: 'EXPERT 92%', desc: 'RESTful Architecture, Middleware, Event Emitter & Streams' },
      { name: 'PostgreSQL / SQL', level: 'ADVANCED 90%', desc: 'Relational Schema design, Indexing, Transactions & Views' },
      { name: 'MongoDB / NoSQL', level: 'ADVANCED 88%', desc: 'Document store aggregation pipelines & indexing' },
      { name: 'GraphQL & REST APIs', level: 'EXPERT 94%', desc: 'Schema stitching, Resolvers, Query optimization & Caching' },
      { name: 'Authentication & Security', level: 'ADVANCED 90%', desc: 'JWT, OAuth2, Rate limiting, CORS, & OWASP standards' },
    ]
  },
  {
    id: 'kekkei-genkai',
    title: 'KEKKEI GENKAI (SPECIAL)',
    subtitle: 'Innate Bloodline Techniques',
    icon: <Zap size={22} />,
    color: 'var(--accent-cyan)',
    skills: [
      { name: 'AI & LLM Integration', level: 'MASTER 96%', desc: 'OpenAI API, Streaming tokens, RAG pipelines, Prompt crafting' },
      { name: 'Web Audio API Synth', level: 'ADVANCED 90%', desc: 'Synthesizing real-time anime SFX & audio visualization' },
      { name: 'UI Micro-Animations', level: 'SENSEI 98%', desc: 'Framer Motion, CSS keyframes, 60 FPS smooth transitions' },
      { name: 'Web Vitals Optimization', level: 'EXPERT 95%', desc: 'Lighthouse 100/100 scores, Memory leak prevention' },
    ]
  },
  {
    id: 'ninja-tools',
    title: 'NINJA GEAR (TOOLS)',
    subtitle: 'Armory & Tactical Ecosystem',
    icon: <Wrench size={22} />,
    color: '#a0a0b8',
    skills: [
      { name: 'Git & GitHub Workflows', level: 'EXPERT 96%', desc: 'Branching strategies, Rebase, Actions CI/CD pipelines' },
      { name: 'Docker & Containers', level: 'ADVANCED 85%', desc: 'Multi-stage builds, Container orchestration & environments' },
      { name: 'Linux Command Line', level: 'ADVANCED 90%', desc: 'Bash scripting, Process management, Server administration' },
      { name: 'Figma & UI Design', level: 'EXPERT 92%', desc: 'Design systems, Prototyping, Manga layout wireframing' },
    ]
  }
];

export default function SkillsDojo({ sfxEnabled }) {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillHover = (skill) => {
    if (skill && activeSkill?.name !== skill.name) {
      playSound('click', sfxEnabled);
      setActiveSkill(skill);
    }
  };

  return (
    <section id="dojo" className="dojo-section">
      <div className="container">
        {/* Chapter 3 Header */}
        <div className="section-header">
          <div className="chapter-tag">CHAPTER 3: SKILL ARC &amp; DOJO</div>
          <h2 className="section-title manga-title">
            THE <span className="manga-title-accent">DOJO MASTERY</span> TREE
          </h2>
          <p className="section-subtitle">
            Hover over any technique to inspect its power output and secret lore details!
          </p>
        </div>

        {/* Dojo Grid */}
        <div className="dojo-grid">
          {DOJO_CATEGORIES.map((cat, idx) => (
            <div 
              key={cat.id} 
              className={`manga-panel dojo-category-card ${idx % 2 === 0 ? 'manga-panel-tilted-left' : 'manga-panel-tilted-right'}`}
            >
              <div className="dojo-cat-header">
                <div className="dojo-cat-icon">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="dojo-cat-title manga-title">{cat.title}</h3>
                  <span style={{ fontFamily: 'var(--font-marker)', fontSize: '0.85rem', color: 'var(--accent-secondary)' }}>
                    {cat.subtitle}
                  </span>
                </div>
              </div>

              <div className="skill-list">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="skill-item"
                    onMouseEnter={() => handleSkillHover(skill)}
                  >
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span className="skill-level-tag">{skill.level}</span>
                    </div>

                    <div className="stat-bar-bg" style={{ height: '8px' }}>
                      <div 
                        className="stat-bar-fill" 
                        style={{ 
                          width: skill.level.split(' ')[1],
                          background: `linear-gradient(90deg, ${cat.color}, var(--accent-secondary))`
                        }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Lore Inspector Banner */}
        <div className="manga-panel" style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--bg-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="onomatopoeia-badge" style={{ fontSize: '1.2rem' }}>
              ゴゴゴ GOGOGO!
            </div>
            <div>
              <h4 className="manga-title" style={{ color: 'var(--accent-secondary)', fontSize: '1.25rem' }}>
                TECHNIQUE LORE INSPECTOR: {activeSkill ? activeSkill.name : 'Hover over a skill above'}
              </h4>
              <p style={{ fontFamily: 'var(--font-head)', color: 'var(--text-main)', marginTop: '0.25rem' }}>
                {activeSkill ? activeSkill.desc : 'Select any Taijutsu, Ninjutsu, or Kekkei Genkai skill card to reveal its tactical implementation notes.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
