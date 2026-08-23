import React from 'react';
import { GraduationCap, Award, CheckCircle, ShieldCheck, FileCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            ACADEMIC & PROFESSIONAL CREDENTIALS
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #10b981, #0284c7)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </div>

        {/* Highlight Showcase Grid: Graduation Photo + NEC Computer Engineer Certificate */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* NEC Certificate Card */}
          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="status-pill" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399', marginBottom: '1rem' }}>
                <ShieldCheck size={16} /> Official Professional Engineering License
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                Registered Computer Engineer
              </h3>

              <div style={{ fontSize: '0.95rem', color: '#38bdf8', fontWeight: 700, marginBottom: '1rem' }}>
                Nepal Engineering Council (NEC)
              </div>

              <div style={{ borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid rgba(16, 185, 129, 0.3)', marginBottom: '1rem', background: '#000' }}>
                <img
                  src={PORTFOLIO_DATA.personal.necCertificateImage}
                  alt="Nepal Engineering Council Computer Engineer Certificate"
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Officially certified and registered Computer Engineer under the Nepal Engineering Council (NEC), authorized for professional computer engineering practice in Nepal.
              </p>
            </div>
          </div>

          {/* Graduation Convocation Photo Card */}
          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="status-pill" style={{ background: 'rgba(2, 132, 199, 0.15)', borderColor: 'rgba(2, 132, 199, 0.3)', color: '#38bdf8', marginBottom: '1rem' }}>
                <Award size={16} /> Pokhara University Degree Convocation
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                B.E. Computer Engineering
              </h3>

              <div style={{ fontSize: '0.95rem', color: '#34d399', fontWeight: 700, marginBottom: '1rem' }}>
                Everest Engineering College • CGPA: 3.34 / 4.00
              </div>

              <div style={{ borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid rgba(2, 132, 199, 0.3)', marginBottom: '1rem' }}>
                <img
                  src={PORTFOLIO_DATA.personal.graduationImage}
                  alt="Kiran Poudel Graduation Pokhara University"
                  style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                />
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Served as **Class Representative (Class Admin)** and **Key Management Event Lead** for college technical Expos, hackathons, and cultural events.
              </p>
            </div>
          </div>
        </div>

        {/* Education History List */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {PORTFOLIO_DATA.education.map((edu) => (
            <div key={edu.id} className="glass-panel" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '0.85rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '0.6rem',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399',
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={24} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>{edu.degree}</h4>
                    <span style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: 600, background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.65rem', borderRadius: '9999px' }}>
                      {edu.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#38bdf8', fontWeight: 600, marginTop: '0.2rem' }}>
                    {edu.institution} • {edu.location}
                  </div>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.85rem' }}>
                {edu.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {edu.highlights.map((high, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', fontSize: '0.86rem' }}>
                    <CheckCircle size={14} style={{ color: '#10b981' }} /> {high}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
