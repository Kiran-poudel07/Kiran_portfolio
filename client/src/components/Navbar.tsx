import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Mail, Send } from 'lucide-react';
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
      if (window.scrollY > 30) {
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
          ? 'rgba(7, 12, 24, 0.95)'
          : 'rgba(7, 12, 24, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: isScrolled ? '0.75rem 0' : '1rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '0.65rem',
              background: 'linear-gradient(135deg, #10b981 0%, #0284c7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
              flexShrink: 0,
            }}
          >
            KP
          </div>
          <div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff', letterSpacing: '-0.02em', display: 'block', lineHeight: 1.2 }}>
              Er. Kiran <span className="gradient-text">Poudel</span>
            </span>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '1px' }}>Registered Computer Engineer</div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.3rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: activeSection === link.href.substring(1) ? '#34d399' : '#94a3b8',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Header Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <button onClick={onOpenResume} className="btn-glass desktop-only-btn" style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}>
            <FileText size={15} /> Resume
          </button>
          
          <a href="#contact" className="btn-glow-primary desktop-only-btn" style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}>
            Hire Me
          </a>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            margin: '0.75rem 1rem 0',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            background: 'rgba(7, 12, 24, 0.98)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '0.85rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#f8fafc',
                padding: '0.4rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{link.label}</span>
            </a>
          ))}

          {/* Action CTAs inside mobile drawer */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-glass"
              style={{ width: '100%', justifyContent: 'center', padding: '0.65rem', fontSize: '0.9rem' }}
            >
              <FileText size={16} /> View Resume PDF
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-glow-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.65rem', fontSize: '0.9rem' }}
            >
              <Send size={16} /> Contact / Hire Me
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
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
          .desktop-only-btn { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .desktop-only-btn { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
