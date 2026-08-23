import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            CAREER JOURNEY
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #38bdf8, #8b5cf6)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {PORTFOLIO_DATA.experience.map((item) => (
            <div key={item.id} className="glass-panel" style={{ padding: '2rem', position: 'relative' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>{item.role}</h3>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#c084fc', marginTop: '0.2rem' }}>
                    {item.company}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontSize: '0.88rem', fontWeight: 600 }}>
                    <Calendar size={15} /> {item.period}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                    <MapPin size={14} /> {item.location}
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {item.description.map((desc, dIdx) => (
                  <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }} />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-badge" style={{ fontSize: '0.78rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
