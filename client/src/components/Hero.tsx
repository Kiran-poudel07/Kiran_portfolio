import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Download, Github, Linkedin, Mail, ShieldCheck, Copy, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

// Slow, smooth ease curve
const smoothEase = 'easeInOut' as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: smoothEase,
    },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    'ASP.NET Core & C# Engineer',
    'Full Stack MERN Developer',
    'NEC Registered Computer Engineer',
    'AI / ML & Data Science Researcher',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" style={{ paddingTop: '8rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
          className="hero-grid"
        >
          {/* Left Column: Text & CTAs */}
          <div>
            <motion.div variants={itemVariants} className="status-pill" style={{ marginBottom: '1.25rem' }}>
              <span className="status-dot"></span>
              {PORTFOLIO_DATA.personal.status}
            </motion.div>

            <motion.h1 variants={itemVariants} style={{ fontSize: '3.3rem', fontWeight: 800, lineHeight: 1.12, marginBottom: '0.85rem', letterSpacing: '-0.03em' }}>
              Hi, I'm <span className="gradient-text">Kiran Poudel</span>
            </motion.h1>

            {/* Dynamic Typewriter Role Switching */}
            <motion.div variants={itemVariants} style={{ height: '2.4rem', overflow: 'hidden', marginBottom: '1.25rem' }}>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: smoothEase }}
                  style={{ fontSize: '1.45rem', color: '#38bdf8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Sparkles size={20} style={{ color: '#10b981' }} /> {roles[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            <motion.p variants={itemVariants} style={{ fontSize: '1.08rem', color: '#94a3b8', maxWidth: '580px', marginBottom: '2rem', lineHeight: 1.75 }}>
              Registered Computer Engineer (Nepal Engineering Council) & Software Engineer at Uranus Tech Pvt. Ltd. Specialized in ASP.NET Core, C#, SQL Server, MERN Stack, and applying Data Science & AI/ML to solve real-world national problems in Nepal.
            </motion.p>

            {/* Action CTAs */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.25rem' }}>
              <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="#projects" className="btn-glow-primary">
                Explore Projects & Research <ArrowRight size={18} />
              </motion.a>

              <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} onClick={onOpenResume} className="btn-glass" style={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}>
                <Download size={18} /> Resume PDF
              </motion.button>

              <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} onClick={copyEmailToClipboard} className="btn-glass">
                {copiedEmail ? <Check size={18} style={{ color: '#34d399' }} /> : <Copy size={18} />}
                {copiedEmail ? 'Email Copied!' : 'Copy Email'}
              </motion.button>
            </motion.div>

            {/* Social & Contact Buttons */}
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                DIRECT CONTACT:
              </span>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#38bdf8',
                    background: 'rgba(2, 132, 199, 0.15)',
                    padding: '0.55rem 0.85rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  <Linkedin size={16} /> LinkedIn Profile
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#94a3b8',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.55rem 0.85rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  <Github size={16} /> GitHub Repos
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Headshot Photo Card & Code Window */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Profile Photo Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-panel"
              style={{
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                background: 'rgba(15, 23, 42, 0.85)',
              }}
            >
              <img
                src={PORTFOLIO_DATA.personal.headshotImage}
                alt="Kiran Poudel Headshot"
                style={{
                  width: '95px',
                  height: '115px',
                  borderRadius: '0.75rem',
                  objectFit: 'cover',
                  border: '2px solid #10b981',
                  boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)',
                }}
              />
              <div>
                <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.0 }} style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                  Kiran Poudel
                </motion.h3>
                <div style={{ fontSize: '0.85rem', color: '#34d399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <ShieldCheck size={16} /> Registered Computer Engineer (NEC)
                </div>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.3rem' }}>
                  ASP.NET Developer @ Uranus Tech • Pokhara University Alumni (3.34 CGPA)
                </p>
              </div>
            </motion.div>

            {/* Code Card IDE */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="code-card glass-panel"
              style={{ padding: '0', overflow: 'hidden' }}
            >
              {/* IDE Top Bar */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.9)',
                  padding: '0.65rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }}></div>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981' }}></div>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Code2 size={14} style={{ color: '#10b981' }} /> KiranPoudel.ts
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>TypeScript</div>
              </div>

              {/* IDE Code Snippet */}
              <pre style={{ padding: '1.1rem 1.35rem', color: '#e2e8f0', overflowX: 'auto', lineHeight: 1.5, fontSize: '0.82rem' }}>
                <code>
                  <span style={{ color: '#34d399' }}>const</span> <span style={{ color: '#38bdf8' }}>engineer</span> = &#123;{'\n'}
                  {'  '}<span style={{ color: '#f59e0b' }}>name</span>: <span style={{ color: '#34d399' }}>"Kiran Poudel"</span>,{'\n'}
                  {'  '}<span style={{ color: '#f59e0b' }}>license</span>: <span style={{ color: '#34d399' }}>"Registered Computer Engineer (NEC)"</span>,{'\n'}
                  {'  '}<span style={{ color: '#f59e0b' }}>leadership</span>: <span style={{ color: '#34d399' }}>"Class Representative (Everest Eng. College)"</span>,{'\n'}
                  {'  '}<span style={{ color: '#f59e0b' }}>primaryStack</span>: [<span style={{ color: '#34d399' }}>"ASP.NET Core"</span>, <span style={{ color: '#34d399' }}>"C#"</span>, <span style={{ color: '#34d399' }}>"SQL Server"</span>, <span style={{ color: '#34d399' }}>"MERN"</span>],{'\n'}
                  {'  '}<span style={{ color: '#f59e0b' }}>featuredProjects</span>: [<span style={{ color: '#34d399' }}>"SkillLink Nepal"</span>, <span style={{ color: '#34d399' }}>"Demand Waste Routing"</span>, <span style={{ color: '#34d399' }}>"FOMO AI Survey"</span>],{'\n'}
                  {'  '}<span style={{ color: '#38bdf8' }}>solveImpact</span>: () =&gt; &#123;{'\n'}
                  {'    '}<span style={{ color: '#34d399' }}>return</span> <span style={{ color: '#34d399' }}>"Engineering scalable enterprise & AI systems"</span>;{'\n'}
                  {'  '}&#125;{'\n'}
                  &#125;;
                </code>
              </pre>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Recruiter Impact Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: smoothEase, delay: 0.2 }}
          style={{
            marginTop: '3.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {PORTFOLIO_DATA.personal.keyMetrics.map((metric, mIdx) => (
            <motion.div
              key={mIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * mIdx, ease: smoothEase }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                borderLeft: mIdx === 0 ? '4px solid #34d399' : mIdx === 1 ? '4px solid #38bdf8' : '4px solid #f59e0b',
              }}
            >
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.0 }} style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff' }}>
                {metric.value}
              </motion.div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34d399', marginTop: '0.1rem' }}>
                {metric.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>{metric.subText}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </section>
  );
};
