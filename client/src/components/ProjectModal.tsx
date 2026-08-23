import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Building2, GraduationCap } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 9, 20, 0.88)',
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          position: 'relative',
          background: '#0b1120',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(15, 23, 42, 0.9)',
          }}
        >
          <div>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              TECHNICAL CASE STUDY & ARCHITECTURE
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              width: '36px',
              height: '36px',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: '1.75rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
          {/* Survey Highlight if available */}
          {project.surveyHighlight && (
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '1rem 1.25rem',
                borderRadius: '0.75rem',
                color: '#34d399',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              {project.surveyHighlight}
            </div>
          )}

          {/* Description */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>Project Overview</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7 }}>
              {project.longDescription}
            </p>
          </div>

          {/* Impact Metrics */}
          {project.impactMetrics && project.impactMetrics.length > 0 && (
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>Key Engineering Deliverables & Impact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.impactMetrics.map((metric, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#e2e8f0', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#34d399', marginTop: '3px', flexShrink: 0 }} />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Details */}
          {project.architectureDetails && project.architectureDetails.length > 0 && (
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#38bdf8', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={18} /> System Architecture Breakdown
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.architectureDetails.map((arch, aIdx) => (
                  <div key={aIdx} style={{ fontSize: '0.88rem', color: '#cbd5e1', fontFamily: 'var(--font-code)' }}>
                    • {arch}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Tags */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Technologies Used</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="tech-badge" style={{ fontSize: '0.82rem', padding: '0.3rem 0.75rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(15, 23, 42, 0.9)',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '1rem',
          }}
        >
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              <Github size={16} /> View Code on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-glow-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              <ExternalLink size={16} /> Open Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
