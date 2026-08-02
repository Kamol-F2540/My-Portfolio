import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials({ t }) {
  const testimonials = t.testimonials.items || [];

  return (
    <section className="testimonials-section" style={{ padding: '4rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-badge">{t.testimonials.tag}</div>
          <h2 className="section-title title-gradient" style={{ fontSize: '2.8rem', marginTop: '0.5rem' }}>
            {t.testimonials.title}
          </h2>
          <p className="section-subtitle">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((tItem, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.2rem', color: '#fb923c' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#fb923c" />
                ))}
              </div>

              <p style={{ color: 'var(--text-primary)', lineHeight: '1.7', fontSize: '0.95rem', flex: 1, fontStyle: 'italic' }}>
                "{tItem.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <img 
                  src={tItem.avatar} 
                  alt={tItem.name} 
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-color)' }}
                />
                <div>
                  <h4 style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1rem' }}>{tItem.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{tItem.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
