import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(8, 12, 20, 0.95)',
        padding: '3rem 0 2rem',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '0.6rem',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
              }}
            >
              KP
            </div>
            <div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.1rem' }}>
                Kiran <span className="gradient-text">Poudel</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Full Stack MERN Developer</div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#94a3b8', transition: 'color 0.2s' }}
            >
              <Github size={20} />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#94a3b8', transition: 'color 0.2s' }}
            >
              <Linkedin size={20} />
            </a>
            <a href={PORTFOLIO_DATA.personal.socials.gmail} style={{ color: '#94a3b8', transition: 'color 0.2s' }}>
              <Mail size={20} />
            </a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="btn-glass"
            style={{ padding: '0.5rem 1rem', fontSize: '0.82rem', borderRadius: '0.5rem' }}
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>

        <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#64748b', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1.5rem' }}>
          © {new Date().getFullYear()} Kiran Poudel. Built with React, TypeScript, Node.js & MERN Stack.
        </div>
      </div>
    </footer>
  );
};
