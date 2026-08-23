import React from 'react';
import { Trophy, Activity, Shield, Users, Flame } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Sports: React.FC = () => {
  return (
    <section id="sports" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            ATHLETIC DISCIPLINE & MINDSET
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Sports <span className="gradient-text">Background</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
            How athletic training, endurance, team coordination, and competitive drive shape my software engineering work ethics.
          </p>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #ec4899, #8b5cf6)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </div>

        {/* Sports Cards Grid */}
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          {PORTFOLIO_DATA.sportsBackground.map((sport) => (
            <div
              key={sport.id}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                borderLeft: '4px solid #ec4899',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '0.75rem',
                      background: 'rgba(236, 72, 153, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f472b6',
                    }}
                  >
                    <Trophy size={26} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>{sport.title}</h3>
                    <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600 }}>{sport.category}</div>
                  </div>
                </div>

                <span className="tech-badge" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#f472b6', borderColor: 'rgba(236, 72, 153, 0.3)', padding: '0.4rem 1rem' }}>
                  <Flame size={14} /> {sport.period}
                </span>
              </div>

              <p style={{ fontSize: '1.05rem', color: '#e2e8f0', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {sport.description}
              </p>

              {/* Achievements & Values */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
                {sport.achievements.map((ach, aIdx) => (
                  <div
                    key={aIdx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <Shield size={18} style={{ color: '#38bdf8', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500 }}>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Takeaway / Mindset Transfer */}
              <div
                style={{
                  background: 'rgba(139, 92, 246, 0.12)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0.75rem',
                  color: '#c084fc',
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem', color: '#a855f7' }}>
                  💡 The Engineering Connection:
                </div>
                <div style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#f1f5f9', lineHeight: 1.6 }}>
                  "{sport.takeaways}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
