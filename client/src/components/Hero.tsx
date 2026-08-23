import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Download, Github, Linkedin, Mail, ShieldCheck, Copy, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

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
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
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
    <section id="home" style={{ paddingTop: '7.5rem', paddingBottom: '3.5rem', position: 'relative', width: '100%' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center', width: '100%' }}
          className="hero-grid"
        >
          {/* Left Column: Text & CTAs */}
          <div style={{ minWidth: 0, width: '100%' }}>
            <motion.div variants={itemVariants} className="status-pill" style={{ marginBottom: '1.25rem' }}>
              <span className="status-dot"></span>
              {PORTFOLIO_DATA.personal.status}
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.85rem', letterSpacing: '-0.03em', wordBreak: 'break-word' }}>
              Hi, I'm <span className="gradient-text">Kiran Poudel</span>
            </motion.h1>

            {/* Dynamic Typewriter Role Switching */}
            <motion.div variants={itemVariants} style={{ height: '2.4rem', overflow: 'hidden', marginBottom: '1.25rem' }}>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: smoothEase }}
                  style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.45rem)', color: '#38bdf8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.45rem' }}
                >
                  <Sparkles size={18} style={{ color: '#10b981', flexShrink: 0 }} /> {roles[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            <motion.p variants={itemVariants} style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.08rem)', color: '#94a3b8', maxWidth: '580px', marginBottom: '1.75rem', lineHeight: 1.7 }}>
              Registered Computer Engineer (Nepal Engineering Council) & Software Engineer at Uranus Tech Pvt. Ltd. Specialized in ASP.NET Core, C#, SQL Server, MERN Stack, and applying Data Science & AI/ML to solve real-world national problems in Nepal.
            </motion.p>

            {/* Action CTAs */}
            <motion.div variants={itemVariants} className="hero-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              <motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} href="#projects" className="btn-glow-primary">
                Explore Projects & Research <ArrowRight size={17} />
              </motion.a>

              <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={onOpenResume} className="btn-glass" style={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}>
                <Download size={17} /> Resume PDF
              </motion.button>

              <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={copyEmailToClipboard} className="btn-glass">
                {copiedEmail ? <Check size={17} style={{ color: '#34d399' }} /> : <Copy size={17} />}
                {copiedEmail ? 'Email Copied!' : 'Copy Email'}
              </motion.button>
            </motion.div>

            {/* Social & Contact Buttons */}
            <motion.div variants={itemVariants} className="hero-contact-strip" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                DIRECT CONTACT:
              </span>
              <div className="direct-links" style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#38bdf8',
                    background: 'rgba(2, 132, 199, 0.15)',
                    padding: '0.5rem 0.8rem',
                    borderRadius: '0.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}
                >
                  <Linkedin size={15} /> LinkedIn Profile
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#94a3b8',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.5rem 0.8rem',
                    borderRadius: '0.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}
                >
                  <Github size={15} /> GitHub Repos
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Headshot Photo Card & Code Window */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', minWidth: 0, width: '100%' }}>
            {/* Profile Photo Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              className="glass-panel"
              style={{
                padding: '1.15rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.1rem',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                background: 'rgba(15, 23, 42, 0.85)',
              }}
            >
              <img
                src={PORTFOLIO_DATA.personal.headshotImage}
                alt="Kiran Poudel Headshot"
                style={{
                  width: '85px',
                  height: '105px',
                  borderRadius: '0.75rem',
                  objectFit: 'cover',
                  border: '2px solid #10b981',
                  boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)',
                  flexShrink: 0,
                }}
              />
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>Kiran Poudel</h3>
                <div style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '2px' }}>
                  <ShieldCheck size={15} style={{ flexShrink: 0 }} /> Registered Computer Engineer (NEC)
                </div>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                  ASP.NET Developer @ Uranus Tech • Pokhara University Alumni (3.34 CGPA)
                </p>
              </div>
            </motion.div>

            {/* Code Card IDE */}
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              className="code-card glass-panel"
              style={{ padding: '0', overflow: 'hidden', minWidth: 0 }}
            >
              {/* IDE Top Bar */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.9)',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Code2 size={13} style={{ color: '#10b981' }} /> KiranPoudel.ts
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>TypeScript</div>
              </div>

              {/* IDE Code Snippet */}
              <pre style={{ padding: '1rem 1.15rem', color: '#e2e8f0', overflowX: 'auto', lineHeight: 1.5, fontSize: '0.8rem', maxWidth: '100%' }}>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: smoothEase, delay: 0.15 }}
          className="metrics-grid"
          style={{
            marginTop: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '1rem',
            width: '100%',
          }}
        >
          {PORTFOLIO_DATA.personal.keyMetrics.map((metric, mIdx) => (
            <motion.div
              key={mIdx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * mIdx, ease: smoothEase }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="glass-panel"
              style={{
                padding: '1.15rem 1.25rem',
                borderLeft: mIdx === 0 ? '4px solid #34d399' : mIdx === 1 ? '4px solid #38bdf8' : '4px solid #f59e0b',
                minWidth: 0,
              }}
            >
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#34d399', marginTop: '0.1rem' }}>
                {metric.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.15rem' }}>{metric.subText}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
      `}</style>
    </section>
  );
};
