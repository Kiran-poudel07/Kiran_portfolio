import React from 'react';
import { Target, Compass, Rocket, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const smoothEase = 'easeInOut' as const;

export const Goals: React.FC = () => {
  return (
    <section id="goals" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: smoothEase }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.0 }} style={{ fontSize: '0.85rem', fontWeight: 700, color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            MY VISION & MISSION
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.15 }} style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Career Goals & <span className="gradient-text">Future Impact</span>
          </motion.h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #a855f7, #38bdf8)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </motion.div>

        {/* Goals Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem', width: '100%' }}>
          {/* Short Term */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: smoothEase }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="glass-panel"
            style={{ padding: '2.25rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ padding: '0.6rem', background: 'rgba(56, 189, 248, 0.15)', borderRadius: '0.6rem', color: '#38bdf8' }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>Short-Term Focus</h3>
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.2 }} style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.7 }}>
              {PORTFOLIO_DATA.goals.shortTerm}
            </motion.p>
          </motion.div>

          {/* Long Term */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: smoothEase }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="glass-panel"
            style={{ padding: '2.25rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ padding: '0.6rem', background: 'rgba(168, 85, 247, 0.15)', borderRadius: '0.6rem', color: '#c084fc' }}>
                <Rocket size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>Long-Term Vision</h3>
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.3 }} style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.7 }}>
              {PORTFOLIO_DATA.goals.longTerm}
            </motion.p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: smoothEase }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="glass-panel"
            style={{ padding: '2.25rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ padding: '0.6rem', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '0.6rem', color: '#34d399' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>Core Engineering Values</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {PORTFOLIO_DATA.goals.coreValues.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e2e8f0', fontSize: '0.95rem' }}
                >
                  <CheckCircle2 size={18} style={{ color: '#38bdf8', flexShrink: 0 }} />
                  <span>{val}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
