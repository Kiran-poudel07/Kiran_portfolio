import React from 'react';
import { Award, ShieldCheck, Code, Cpu, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, CertificationItem } from '../data/portfolioData';

const smoothEase = 'easeInOut' as const;

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: smoothEase }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.0 }} style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            VERIFIED CREDENTIALS
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.15 }} style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Certifications & <span className="gradient-text">Licenses</span>
          </motion.h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #10b981, #0284c7)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </motion.div>

        {/* Certifications Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
          {PORTFOLIO_DATA.certifications.map((cert: CertificationItem, idx: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: idx * 0.12, ease: smoothEase }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-panel"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '0.75rem',
                      background: cert.iconType === 'nec' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(2, 132, 199, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: cert.iconType === 'nec' ? '#34d399' : '#38bdf8',
                    }}
                  >
                    {cert.iconType === 'nec' ? <ShieldCheck size={24} /> : cert.iconType === 'mern' ? <Code size={24} /> : <Award size={24} />}
                  </div>

                  <span className="tech-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.65rem' }}>
                    {cert.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.3rem' }}>
                  {cert.title}
                </h3>

                <div style={{ fontSize: '0.88rem', color: '#34d399', fontWeight: 600, marginBottom: '0.85rem' }}>
                  {cert.issuer}
                </div>

                <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
