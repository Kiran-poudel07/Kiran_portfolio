import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Credentials', href: '#certifications' },
    { label: 'Endorsements', href: '#endorsements' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setActiveSection(href.substring(1));
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(7, 12, 24, 0.9)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        padding: isScrolled ? '0.85rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '0.75rem',
              background: 'linear-gradient(135deg, #10b981 0%, #0284c7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
            }}
          >
            KP
          </div>
          <div>
            <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
              Er. Kiran <span className="gradient-text">Poudel</span>
            </span>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '-2px' }}>Registered Computer Engineer</div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.4rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontSize: '0.86rem',
                fontWeight: 600,
                color: activeSection === link.href.substring(1) ? '#34d399' : '#94a3b8',
                transition: 'color 0.2s',
                position: 'relative',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button onClick={onOpenResume} className="btn-glass" style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}>
            <FileText size={16} /> Resume
          </button>
          
          <a href="#contact" className="btn-glow-primary" style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}>
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            margin: '0.75rem 1.5rem',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            background: 'rgba(7, 12, 24, 0.95)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#f8fafc',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
            <a href={PORTFOLIO_DATA.personal.socials.github} target="_blank" rel="noreferrer" style={{ color: '#94a3b8' }}>
              <Github size={20} />
            </a>
            <a href={PORTFOLIO_DATA.personal.socials.linkedin} target="_blank" rel="noreferrer" style={{ color: '#94a3b8' }}>
              <Linkedin size={20} />
            </a>
            <a href={PORTFOLIO_DATA.personal.socials.gmail} style={{ color: '#94a3b8' }}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 991px) {
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
