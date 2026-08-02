import React from 'react';
import { ArrowUp, ArrowRight, Heart, Sparkles } from 'lucide-react';
import kamolLogo from '../assets/kamol_logo_full.png';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
  InstagramIcon,
  FacebookIcon,
  PhoneIcon
} from './SocialIcons';

export default function Footer({ t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Phone', platform: 'phone', href: 'tel:+998909806050', title: 'Call +998 90 980 60 50', icon: <PhoneIcon size={18} /> },
    { name: 'Telegram', platform: 'telegram', href: 'https://t.me/Nodirov1c_K', title: 'Telegram: @Nodirov1c_K', icon: <TelegramIcon size={18} /> },
    { name: 'Instagram', platform: 'instagram', href: 'https://instagram.com/_.nodirov1c_', title: 'Instagram: _.nodirov1c_', icon: <InstagramIcon size={18} /> },
    { name: 'Facebook', platform: 'facebook', href: 'https://facebook.com', title: 'Facebook: Kamol Bahodirov', icon: <FacebookIcon size={18} /> },
    { name: 'LinkedIn', platform: 'linkedin', href: 'https://www.linkedin.com/in/kamol-bahodirov-b3747638a/', title: 'LinkedIn: Kamol Bahodirov', icon: <LinkedinIcon size={18} /> },
    { name: 'X / Twitter', platform: 'twitter', href: 'https://x.com/KamolBahodirov', title: 'X: @KamolBahodirov', icon: <TwitterIcon size={18} /> },
    { name: 'GitHub', platform: 'github', href: 'https://github.com/Kamol-F2540', title: 'GitHub: Kamol-F2540', icon: <GithubIcon size={18} /> }
  ];

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="portfolia-footer">
      <div className="footer-ambient-glow" aria-hidden="true" />

      <div className="container footer-content-box">
        <div className="footer-cta-banner">
          <div className="footer-cta-inner">
            <div className="footer-cta-copy">
              <span className="footer-cta-badge">
                <Sparkles size={14} /> {t.footer.badge}
              </span>
              <h3 className="footer-cta-title">{t.footer.tagline}</h3>
              <p className="footer-cta-sub">{t.footer.subtitle}</p>
            </div>
            <a href="#contact" className="btn-primary footer-cta-btn">
              {t.footer.cta} <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="footer-panel">
          <div className="footer-panel-grid">
            <div className="footer-col footer-col-brand">
              <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <img src={kamolLogo} alt="Kamol Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <p className="footer-brand-desc">{t.footer.brandDesc}</p>
              <div className="footer-status-pill">
                <span className="status-dot-pulse" />
                {t.footer.status}
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">{t.footer.quickLinks}</h4>
              <nav className="footer-nav-links" aria-label="Footer navigation">
                {navLinks.map((link, idx) => (
                  <a key={idx} href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">{t.footer.connect}</h4>
              <div className="footer-social-grid">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-icon-btn"
                    data-platform={item.platform}
                    title={item.title}
                    aria-label={item.name}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p className="copyright-text">{t.footer.copyright}</p>
            <p className="footer-built-with">
              {t.footer.builtWith} <Heart size={12} className="footer-heart" aria-hidden="true" /> React 19
            </p>
            <button
              className="btn-secondary back-to-top-btn footer-back-top"
              onClick={scrollToTop}
              title={t.footer.backToTop}
            >
              <ArrowUp size={16} /> <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
