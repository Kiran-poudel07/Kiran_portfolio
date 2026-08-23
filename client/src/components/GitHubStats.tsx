import React from 'react';
import { Github, GitCommit, GitBranch, Star, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const GitHubStats: React.FC = () => {
  const languageStats = [
    { name: 'C# / ASP.NET', percentage: 40, color: '#10b981' },
    { name: 'TypeScript / React', percentage: 30, color: '#38bdf8' },
    { name: 'Python (ML / Data)', percentage: 18, color: '#f59e0b' },
    { name: 'JavaScript & SQL', percentage: 12, color: '#a855f7' },
  ];

  return (
    <div className="glass-panel" style={{ padding: '2rem', marginTop: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ padding: '0.6rem', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '0.6rem', color: '#ffffff' }}>
            <Github size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>GitHub Repository Activity & Language Mix</h3>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Live codebase distribution from @Kiran-poudel07</p>
          </div>
        </div>

        <a
          href={PORTFOLIO_DATA.personal.socials.github}
          target="_blank"
          rel="noreferrer"
          className="btn-glass"
          style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
        >
          <Github size={16} /> View GitHub Repositories
        </a>
      </div>

      {/* Language Composition Bar */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
          <span>Codebase Composition</span>
          <span>C# • TypeScript • Python • SQL</span>
        </div>

        <div style={{ height: '10px', width: '100%', borderRadius: '6px', overflow: 'hidden', display: 'flex', background: 'rgba(255,255,255,0.08)' }}>
          {languageStats.map((lang, idx) => (
            <div
              key={idx}
              style={{
                width: `${lang.percentage}%`,
                backgroundColor: lang.color,
                height: '100%',
              }}
              title={`${lang.name}: ${lang.percentage}%`}
            ></div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '0.85rem' }}>
          {languageStats.map((lang, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: lang.color }}></span>
              <span>{lang.name} ({lang.percentage}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
