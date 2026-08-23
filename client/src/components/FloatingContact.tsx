import React, { useState } from 'react';
import { MessageSquare, Mail, Linkedin, Copy, Check, X, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999 }}>
      {/* Quick Menu Popover */}
      {isOpen && (
        <div
          className="glass-panel"
          style={{
            marginBottom: '1rem',
            padding: '1.25rem',
            width: '280px',
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff' }}>Quick Recruiter Connect</span>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          <button
            onClick={handleCopyEmail}
            className="btn-glass"
            style={{ padding: '0.6rem 0.85rem', fontSize: '0.82rem', width: '100%', justifyContent: 'flex-start' }}
          >
            {copied ? <Check size={16} style={{ color: '#34d399' }} /> : <Copy size={16} />}
            {copied ? 'Email Copied!' : 'Copy Gmail Address'}
          </button>

          <a
            href={PORTFOLIO_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-glow-primary"
            style={{ padding: '0.6rem 0.85rem', fontSize: '0.82rem', width: '100%', justifyContent: 'flex-start' }}
          >
            <Linkedin size={16} /> Open LinkedIn Profile
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-glass"
            style={{ padding: '0.6rem 0.85rem', fontSize: '0.82rem', width: '100%', justifyContent: 'flex-start' }}
          >
            <Mail size={16} /> Send Direct Message
          </a>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-glow-primary"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(16, 185, 129, 0.5)',
        }}
        title="Quick Connect with Kiran Poudel"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};
