import React from 'react';
import { PORTFOLIO_OWNER, SKILLS_LIST } from '../../config/constant';
import { ArrowRight, Code, Database, Server, Terminal, Laptop } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      {/* Hero Section */}
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3rem 0', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 500px' }}>
          <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>👋 Welcome to my Portfolio</span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Hi, I'm <span style={{ color: 'var(--accent)' }}>{PORTFOLIO_OWNER.name}</span>
          </h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            {PORTFOLIO_OWNER.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px' }}>
            {PORTFOLIO_OWNER.bio}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => onNavigate('projects')}>
              View My Projects <ArrowRight size={18} />
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Hero Code Snippet Card */}
        <div style={{
          flex: '1 1 400px',
          backgroundColor: 'var(--bg-card)',
          borderRadius: '1rem',
          padding: '1.5rem',
          border: '1px solid var(--border)',
          fontFamily: "'Fira Code', monospace",
          fontSize: '0.9rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#f59e0b' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#10b981' }} />
          </div>
          <pre style={{ color: '#38bdf8' }}>
            <code>
{`const developer = {
  name: "${PORTFOLIO_OWNER.name}",
  stack: ["MongoDB", "Express", "React", "TypeScript", "Node"],
  location: "${PORTFOLIO_OWNER.location}",
  status: "Available for Projects & Hiring",
  code: () => {
    return "Building clean, scalable web apps";
  }
};`}
            </code>
          </pre>
        </div>
      </section>

      {/* Specializations Grid */}
      <section>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>
          What I Specialize In
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
            <Laptop size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Frontend Development</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Building responsive, high-performance user interfaces using React, TypeScript, and modern styling tools.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
            <Server size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Backend APIs</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Designing modular Node.js & Express RESTful APIs with clean architecture, validation, and JWT security.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
            <Database size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Database Architecture</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Modeling data with MongoDB Atlas & Mongoose for reliability, indexing, and high query performance.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Skills Badge Section */}
      <section style={{ backgroundColor: 'var(--bg-card)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Tech Stack & Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {SKILLS_LIST.map((skill, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border)',
              padding: '0.6rem 1.2rem',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Terminal size={16} color="var(--accent)" />
              <span style={{ fontWeight: 500 }}>{skill.name}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: '0.25rem' }}>({skill.category})</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
