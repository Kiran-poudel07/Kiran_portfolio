import React from 'react';
import { Trophy, Shield, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const smoothEase = 'easeInOut' as const;

export const Sports: React.FC = () => {
  return (
    <section id="sports" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: smoothEase }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.0 }} style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            ATHLETIC DISCIPLINE & MINDSET
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.15 }} style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Sports <span className="gradient-text">Background</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.25 }} style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
            How athletic training, endurance, team coordination, and competitive drive shape my software engineering work ethics.
          </motion.p>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #f59e0b, #10b981)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </motion.div>

        {/* Sports Cards Grid */}
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          {PORTFOLIO_DATA.sportsBackground.map((sport, sIdx) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: sIdx * 0.2, ease: smoothEase }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                borderLeft: '4px solid #f59e0b',
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
                      background: 'rgba(245, 158, 11, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f59e0b',
                    }}
                  >
                    <Trophy size={26} />
                  </div>
                  <div>
                    <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>
                      {sport.title}
                    </motion.h3>
                    <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600 }}>{sport.category}</div>
                  </div>
                </div>

                <span className="tech-badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.3)', padding: '0.4rem 1rem' }}>
                  <Flame size={14} /> {sport.period}
                </span>
              </div>

              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} style={{ fontSize: '1.05rem', color: '#e2e8f0', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {sport.description}
              </motion.p>

              {/* Achievements & Values */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '0.85rem', marginBottom: '1.75rem', width: '100%' }}>
                {sport.achievements.map((ach, aIdx) => (
                  <motion.div
                    key={aIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: aIdx * 0.1 }}
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
                  </motion.div>
                ))}
              </div>

              {/* Takeaway / Mindset Transfer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
                style={{
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0.75rem',
                  color: '#34d399',
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem', color: '#10b981' }}>
                  💡 The Engineering Connection:
                </div>
                <div style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#f1f5f9', lineHeight: 1.6 }}>
                  "{sport.takeaways}"
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
