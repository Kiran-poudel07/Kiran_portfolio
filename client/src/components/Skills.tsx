import React from 'react';
import { Cpu, Code2, Server, Database, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GitHubStats } from './GitHubStats';

export const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            TECHNICAL EXPERTISE
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Tech Knowledge & <span className="gradient-text">Skills</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
            Comprehensive mastery across ASP.NET Core enterprise APIs, full-stack MERN web apps, SQL Server / MongoDB databases, and Python AI/ML workflows.
          </p>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #10b981, #0284c7)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </div>

        {/* Languages Known Quick Strip */}
        <div className="glass-panel" style={{ padding: '1.5rem 2rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Code2 size={20} style={{ color: '#10b981' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>Programming Languages & Core Tech</h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {PORTFOLIO_DATA.languagesAndTech.programmingLanguages.map((lang, i) => (
              <span key={i} className="tech-badge" style={{ fontSize: '0.9rem', padding: '0.45rem 1rem' }}>
                ⚡ {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.6rem', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '0.6rem', color: '#34d399' }}>
                  {idx === 0 ? <Server size={22} /> : idx === 1 ? <Code2 size={22} /> : <Database size={22} />}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>{cat.title}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: skill.highlight ? '#ffffff' : '#cbd5e1' }}>
                        {skill.name} {skill.highlight && <span style={{ color: '#34d399', fontSize: '0.75rem' }}>★ Core</span>}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div style={{ height: '7px', width: '100%', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: skill.highlight
                            ? 'linear-gradient(90deg, #10b981, #0284c7)'
                            : 'linear-gradient(90deg, #0284c7, #34d399)',
                          borderRadius: '4px',
                          transition: 'width 1s ease-in-out',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repository Live Stats Card */}
        <GitHubStats />
      </div>
    </section>
  );
};
