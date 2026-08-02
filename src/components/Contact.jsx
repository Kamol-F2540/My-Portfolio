import React, { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon, 
  TelegramIcon, 
  InstagramIcon, 
  FacebookIcon, 
  PhoneIcon 
} from './SocialIcons';

export default function Contact({ t }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Frontend Web App',
    budget: '$5k - $15k',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.warn('Confetti error:', err);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-badge">{t.contact.tag}</div>
          <h2 className="section-title title-gradient" style={{ fontSize: '2.8rem', marginTop: '0.5rem' }}>
            {t.contact.title}
          </h2>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="contact-grid-wrapper">
          {/* Left Side: Direct Contact Details & Handles */}
          <div className="glass-card contact-info-card">
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
              Direct Channels
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Reach out directly to Kamol Bahodirov via phone, Telegram, or professional profiles:
            </p>

            <div className="contact-channel-list">
              <a href="tel:+998909806050" className="contact-channel-item">
                <div className="channel-icon-bg" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <div className="channel-label">Phone Call</div>
                  <div className="channel-value">+998 90 980 60 50</div>
                </div>
              </a>

              <a href="https://t.me/Nodirov1c_K" target="_blank" rel="noreferrer" className="contact-channel-item">
                <div className="channel-icon-bg" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>
                  <TelegramIcon size={20} />
                </div>
                <div>
                  <div className="channel-label">Telegram</div>
                  <div className="channel-value">@Nodirov1c_K</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/kamol-bahodirov-b3747638a/" target="_blank" rel="noreferrer" className="contact-channel-item">
                <div className="channel-icon-bg" style={{ background: 'rgba(10, 102, 194, 0.15)', color: '#0a66c2' }}>
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <div className="channel-label">LinkedIn</div>
                  <div className="channel-value">Kamol Bahodirov</div>
                </div>
              </a>

              <a href="https://github.com/Kamol-F2540" target="_blank" rel="noreferrer" className="contact-channel-item">
                <div className="channel-icon-bg" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e' }}>
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div className="channel-label">GitHub</div>
                  <div className="channel-value">Kamol-F2540</div>
                </div>
              </a>
            </div>

            {/* Secondary Social Networks */}
            <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                Social Profiles:
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="https://instagram.com/_.nodirov1c_" target="_blank" rel="noreferrer" className="social-pill-btn" title="Instagram: _.nodirov1c_">
                  <InstagramIcon size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-pill-btn" title="Facebook: Kamol Bahodirov">
                  <FacebookIcon size={18} />
                </a>
                <a href="https://x.com/KamolBahodirov" target="_blank" rel="noreferrer" className="social-pill-btn" title="X / Twitter: @KamolBahodirov">
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Message Form */}
          <div className="glass-card contact-card-wrap">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✨</div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                  {t.contact.successTitle}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '1rem 0 2rem 0', lineHeight: '1.6' }}>
                  {t.contact.successDesc}
                </p>
                
                <button 
                  className="btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', service: 'Frontend Web App', budget: '$5k - $15k', message: '' });
                  }}
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">{t.contact.nameLabel}</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="portfolia-input"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t.contact.emailLabel}</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      className="portfolia-input"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">{t.contact.serviceLabel}</label>
                    <select 
                      name="service"
                      className="portfolia-select"
                      value={formState.service}
                      onChange={handleChange}
                    >
                      {(t.contact.servicesList || []).map((srv, idx) => (
                        <option key={idx} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t.contact.budgetLabel}</label>
                    <select 
                      name="budget"
                      className="portfolia-select"
                      value={formState.budget}
                      onChange={handleChange}
                    >
                      <option value="<$5k">&lt; $500</option>
                      <option value="$5k - $15k">$1,000 — $3,000</option>
                      <option value="$15k - $30k">$5,000 — $10,000</option>
                      <option value="$30k+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{t.contact.messageLabel}</label>
                  <textarea 
                    name="message"
                    required
                    placeholder="Share a brief overview of your goals, scope, and timeline..."
                    className="portfolia-textarea"
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <button 
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '0.85rem' }}
                >
                  {t.contact.submitBtn} <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
