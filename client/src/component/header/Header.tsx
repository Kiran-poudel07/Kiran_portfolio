import React from 'react';
import { PORTFOLIO_OWNER } from '../../config/constant';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Logo / Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
          <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent)', padding: '0.5rem', borderRadius: '0.5rem' }}>
            <Code2 size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>{PORTFOLIO_OWNER.name}</h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }}>{PORTFOLIO_OWNER.title}</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {['home', 'projects', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === tab ? 'var(--accent)' : 'var(--text-secondary)',
                fontWeight: activeTab === tab ? 600 : 400,
                fontSize: '1rem',
                cursor: 'pointer',
                padding: '0.5rem 0.25rem',
                borderBottom: activeTab === tab ? '2px solid var(--accent)' : '2px solid transparent',
                textTransform: 'capitalize',
                transition: 'all 0.2s ease',
              }}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href={PORTFOLIO_OWNER.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <Github size={20} />
          </a>
          <a href={PORTFOLIO_OWNER.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <Linkedin size={20} />
          </a>
          <button className="btn-primary" onClick={() => setActiveTab('contact')} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            <Mail size={16} /> Hire Me
          </button>
        </div>
      </div>
    </header>
  );
};
