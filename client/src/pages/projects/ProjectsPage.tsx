import React, { useEffect, useState } from 'react';
import { PageTitle } from '../../component/PageTitle';
import { axiosInstance } from '../../config/axios.config';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

interface Project {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string;
  category?: string;
}

export const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response: any = await axiosInstance.get('/projects');
        if (response && response.data) {
          setProjects(response.data);
        }
      } catch (err) {
        console.error('Error fetching projects from backend API:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <PageTitle title="My Projects" subtitle="A showcase of full-stack MERN applications I have designed and developed." />

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
          Loading projects from Express API...
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project) => (
            <div
              key={project._id}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '0.75rem',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
            >
              {/* Image Preview */}
              {project.imageUrl && (
                <div style={{ width: '100%', height: '200px', overflow: 'hidden', backgroundColor: '#000' }}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                  />
                </div>
              )}

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="badge">{project.category || 'MERN'}</span>
                  <FolderGit2 size={20} color="var(--text-secondary)" />
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0.5rem 0 0.25rem 0', color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                {project.subtitle && (
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.75rem' }}>
                    {project.subtitle}
                  </h4>
                )}

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem', flex: 1 }}>
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '0.25rem',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500 }}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
