import React from 'react';
import { User, MapPin, Activity, Code, Target, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const smoothEase = 'easeInOut' as const;

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} style={{ color: '#10b981' }} />,
      title: 'ASP.NET & MERN Full-Stack',
      desc: 'Production expertise in ASP.NET Core, C#, SQL Server, IIS, and full-stack MERN (MongoDB, Express, React, Node.js).',
    },
    {
      icon: <ShieldCheck size={24} style={{ color: '#38bdf8' }} />,
      title: 'NEC Registered Engineer',
      desc: 'Officially certified Computer Engineer under Nepal Engineering Council (Pokhara University 3.34 CGPA).',
    },
    {
      icon: <Activity size={24} style={{ color: '#f59e0b' }} />,
      title: 'Sports & Discipline',
      desc: 'Active physical multi-sport athlete & esports competitor fostering endurance, teamwork, and high-pressure focus.',
    },
    {
      icon: <Target size={24} style={{ color: '#a855f7' }} />,
      title: 'AI/ML & National Impact',
      desc: 'Driven to apply Data Science & Machine Learning to solve real national infrastructure and urban challenges in Nepal.',
    },
  ];

  return (
    <section id="about" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: smoothEase }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.1 }}
            style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            WHO I AM
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}
          >
            About <span className="gradient-text">Kiran Poudel</span>
          </motion.h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #10b981, #0284c7)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </motion.div>

        {/* About Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }} className="about-grid">
          {/* Main Description Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: smoothEase }}
            className="glass-panel"
            style={{ padding: '2.5rem' }}
          >
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '0.5rem', color: '#34d399' }}>
                <User size={22} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>Professional Profile & Leadership</h3>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              {PORTFOLIO_DATA.personal.bio}
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }} style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              During my engineering studies at Everest Engineering College, I served as **Class Representative** and **Key Event Management Lead**, coordinating hackathons, technical expos, and student development events.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.5 }} style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                <MapPin size={18} style={{ color: '#0284c7' }} /> Location: <strong style={{ color: '#ffffff' }}>{PORTFOLIO_DATA.personal.location}</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                <Activity size={18} style={{ color: '#10b981' }} /> Status: <strong style={{ color: '#10b981' }}>{PORTFOLIO_DATA.personal.status}</strong>
              </div>
            </motion.div>
          </motion.div>

          {/* 4 Feature Cards */}
          <div className="about-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: smoothEase }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="glass-panel"
                style={{ padding: '1.5rem' }}
              >
                <div style={{ marginBottom: '0.85rem' }}>{item.icon}</div>
                <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                  {item.title}
                </motion.h4>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </section>
  );
};
