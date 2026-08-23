import React from 'react';
import { ArrowRight, Code2, Download, Github, Linkedin, Mail, ShieldCheck, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" style={{ paddingTop: '7.5rem', paddingBottom: '3.5rem', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }} className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="status-pill" style={{ marginBottom: '1.25rem' }}>
              <span className="status-dot"></span>
              {PORTFOLIO_DATA.personal.status}
            </div>

            <h1 style={{ fontSize: '3.1rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.85rem', letterSpacing: '-0.03em' }}>
              Hi, I'm <span className="gradient-text">Kiran Poudel</span>
            </h1>

            <h2 style={{ fontSize: '1.4rem', color: '#38bdf8', fontWeight: 700, marginBottom: '1.25rem' }}>
              {PORTFOLIO_DATA.personal.title}
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#94a3b8', maxWidth: '580px', marginBottom: '1.75rem', lineHeight: 1.7 }}>
              Registered Computer Engineer (Nepal Engineering Council) & Software Engineer at Uranus Tech Pvt. Ltd. Specialized in ASP.NET Core, C#, SQL Server, MERN Stack, and applying Data Science & AI/ML to solve real-world national problems in Nepal.
            </p>

            {/* Action CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2rem' }}>
              <a href="#projects" className="btn-glow-primary">
                Explore Projects & Research <ArrowRight size={18} />
              </a>

              <button onClick={onOpenResume} className="btn-glass" style={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}>
                <Download size={18} /> Resume PDF
              </button>

              <button onClick={copyEmailToClipboard} className="btn-glass">
                {copiedEmail ? <Check size={18} style={{ color: '#34d399' }} /> : <Copy size={18} />}
                {copiedEmail ? 'Email Copied!' : 'Copy Email'}
              </button>
            </div>

            {/* Social & Contact Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                DIRECT CONTACT:
              </span>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <a
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
                </a>
                <a
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
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Headshot Photo Card & Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Profile Photo Card */}
            <div
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
                  width: '90px',
                  height: '110px',
                  borderRadius: '0.75rem',
                  objectFit: 'cover',
                  border: '2px solid #10b981',
                  boxShadow: '0 6px 18px rgba(16, 185, 129, 0.3)',
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>Kiran Poudel</h3>
                <div style={{ fontSize: '0.85rem', color: '#34d399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <ShieldCheck size={16} /> Registered Computer Engineer (NEC)
                </div>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.3rem' }}>
                  ASP.NET Developer @ Uranus Tech • Pokhara University Alumni (3.34 CGPA)
                </p>
              </div>
            </div>

            {/* Code Card IDE */}
            <div className="code-card glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
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
            </div>
          </motion.div>
        </div>

        {/* Recruiter Impact Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            marginTop: '3.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {PORTFOLIO_DATA.personal.keyMetrics.map((metric, mIdx) => (
            <div
              key={mIdx}
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                borderLeft: mIdx === 0 ? '3px solid #34d399' : mIdx === 1 ? '3px solid #38bdf8' : '3px solid #f59e0b',
              }}
            >
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>{metric.value}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34d399', marginTop: '0.1rem' }}>
                {metric.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>{metric.subText}</div>
            </div>
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
