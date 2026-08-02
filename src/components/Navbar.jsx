import React, { useState } from 'react';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ theme, setTheme, mode, setMode, lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const themes = [
    { id: 'violet', label: 'Violet', color: '#8b5cf6' },
    { id: 'emerald', label: 'Emerald', color: '#10b981' },
    { id: 'cyan', label: 'Cyan', color: '#06b6d4' },
    { id: 'rose', label: 'Rose', color: '#f43f5e' },
  ];

  const languages = [
    { code: 'ENG', label: 'ENG' },
    { code: 'RUS', label: 'РУС' },
    { code: 'UZB', label: "O'ZB" },
  ];

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="portfolia-nav">
      <div className="container">
        <div className="nav-glass-bar">
          {/* Brand Logo & Compact Status Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <a href="#" className="nav-brand">
              Portfolia<span className="brand-dot">.</span>
            </a>
            <div className="status-badge" title={t.nav.status}>
              <span className="status-dot-pulse" />
              <span className="status-text">Available</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="nav-links-wrap">
            <a href="#about" className="nav-link">{t.nav.about}</a>
            <a href="#projects" className="nav-link">{t.nav.projects}</a>
            <a href="#skills" className="nav-link">{t.nav.skills}</a>
            <a href="#experience" className="nav-link">{t.nav.experience}</a>
            <a href="#contact" className="nav-link">{t.nav.contact}</a>
          </div>

          {/* Desktop Actions */}
          <div className="nav-actions-desktop">
            {/* Language Switcher */}
            <div className="lang-switcher-pill">
              {languages.map((l) => (
                <button
                  key={l.code}
                  className={`lang-btn ${lang === l.code ? 'active' : ''}`}
                  onClick={() => setLang(l.code)}
                  title={`Switch language to ${l.code}`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Theme Palette Switcher */}
            <div className="theme-selector-pill" title="Customize Accent Theme">
              {themes.map((tItem) => (
                <button
                  key={tItem.id}
                  className="theme-color-btn"
                  style={{ background: tItem.color, outline: theme === tItem.id ? '2px solid var(--text-primary)' : 'none' }}
                  onClick={() => setTheme(tItem.id)}
                  title={`${tItem.label} Theme`}
                />
              ))}
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleMode}
              className="btn-secondary nav-mode-btn"
              title="Toggle Light/Dark Mode"
            >
              {mode === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Hire Me Button */}
            <a href="#contact" className="btn-primary nav-hire-btn">
              {t.nav.hireMe} <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            <div className="mobile-nav-links">
              <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
              <a href="#projects" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.projects}</a>
              <a href="#skills" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.skills}</a>
              <a href="#experience" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.experience}</a>
              <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
            </div>

            <div className="mobile-controls">
              {/* Language Switcher */}
              <div className="mobile-control-row">
                <span className="mobile-control-label">Language</span>
                <div className="lang-switcher-pill">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      className={`lang-btn ${lang === l.code ? 'active' : ''}`}
                      onClick={() => setLang(l.code)}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Palette */}
              <div className="mobile-control-row">
                <span className="mobile-control-label">Theme Accent</span>
                <div className="theme-selector-pill">
                  {themes.map((tItem) => (
                    <button
                      key={tItem.id}
                      className="theme-color-btn"
                      style={{ background: tItem.color, outline: theme === tItem.id ? '2px solid var(--text-primary)' : 'none' }}
                      onClick={() => setTheme(tItem.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Mode + Hire Row */}
              <div className="mobile-control-row" style={{ gap: '0.75rem', marginTop: '0.25rem' }}>
                <button onClick={toggleMode} className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                  {mode === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                  <span>{mode === 'dark' ? 'Light' : 'Dark'}</span>
                </button>
                <a href="#contact" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.hireMe} <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
