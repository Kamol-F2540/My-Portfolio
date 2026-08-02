import React from 'react';
import { ArrowRight, Download, Sparkles, Server, Code2 } from 'lucide-react';
import heroUiImg from '../assets/portfolia_hero_ui.jpg';

export default function Hero({ t }) {
  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Main Headline Content */}
          <div className="hero-text-content">
            <div className="glass-badge" style={{ alignSelf: 'flex-start' }}>
              <Sparkles size={16} /> {t.hero.badge}
            </div>

            <h1 className="hero-headline title-gradient" style={{ fontSize: '3.6rem' }}>
              {t.hero.name}
            </h1>

            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1.75rem', color: 'var(--accent-secondary)', marginTop: '-0.5rem', fontWeight: 700, lineHeight: '1.3' }}>
              {t.hero.headline}
            </h2>

            <p className="hero-description">
              {t.hero.description}
            </p>

            <div className="tech-pills-row">
              {(t.hero.pills || []).map((pill, idx) => (
                <span 
                  key={idx} 
                  className="tech-pill" 
                  style={idx < 2 ? { borderColor: idx === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)', color: idx === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)', fontWeight: 700 } : {}}
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                {t.hero.ctaProjects} <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn-secondary">
                {t.hero.ctaContact}
              </a>

              <button 
                className="btn-secondary"
                onClick={() => alert("Kamol Bahodirov's Resume Downloaded!")}
              >
                <Download size={16} /> {t.hero.ctaResume}
              </button>
            </div>
          </div>

          {/* Right Visual & Live Stats Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Main Visual Card */}
            <div className="glass-card" style={{ padding: '0.75rem', overflow: 'hidden' }}>
              <img 
                src={heroUiImg} 
                alt="Kamol Bahodirov Fullstack Portfolio UI" 
                style={{ width: '100%', borderRadius: 'var(--radius-sm)', display: 'block' }}
              />
            </div>

            {/* Stats Counter Grid */}
            <div className="stats-grid">
              <div className="glass-card stat-card">
                <span className="stat-number">3+</span>
                <span className="stat-label">{t.hero.stats.exp}</span>
              </div>

              <div className="glass-card stat-card">
                <span className="stat-number">25+</span>
                <span className="stat-label">{t.hero.stats.projects}</span>
              </div>

              <div className="glass-card stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">{t.hero.stats.satisfaction}</span>
              </div>

              <div className="glass-card stat-card">
                <span className="stat-number">500+</span>
                <span className="stat-label">{t.hero.stats.lines}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
