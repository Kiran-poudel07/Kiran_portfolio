import React from 'react';
import { Quote, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, TestimonialItem } from '../data/portfolioData';

const smoothEase = 'easeInOut' as const;

export const Testimonials: React.FC = () => {
  return (
    <section id="endorsements" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: smoothEase }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.0 }} style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            LEADERSHIP & PEER PROOF
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.15 }} style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Leadership <span className="gradient-text">Endorsements</span>
          </motion.h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #38bdf8, #10b981)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </motion.div>

        {/* Endorsements Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {PORTFOLIO_DATA.testimonials.map((item: TestimonialItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: idx * 0.15, ease: smoothEase }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-panel"
              style={{ padding: '2.25rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <Quote size={32} style={{ color: '#10b981', opacity: 0.4, marginBottom: '1rem' }} />
                <p style={{ color: '#e2e8f0', fontSize: '1.02rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{item.quote}"
                </p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '0.5rem', color: '#34d399' }}>
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>{item.name}</h4>
                    <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 600 }}>{item.role} • {item.organization}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
