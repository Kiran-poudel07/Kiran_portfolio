import React, { useState } from 'react';
import { ExternalLink, Github, Folder, BookOpen, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mern' | 'live' | 'university' | 'research'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'university', label: 'Government & Research Projects' },
    { id: 'live', label: 'ASP.NET Enterprise Apps' },
    { id: 'mern', label: 'Full Stack MERN' },
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="projects" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            ENGINEERING & RESEARCH SHOWCASE
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Featured <span className="gradient-text">Projects & Empirical Research</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem', maxWidth: '700px', margin: '0.5rem auto 0' }}>
            Real-world enterprise ASP.NET systems, MERN applications, and data-driven empirical research supported by field surveys across Government Offices & 10+ Engineering Colleges in Nepal.
          </p>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #10b981, #0284c7)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </motion.div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
          {filterTabs.map((tab) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={activeFilter === tab.id ? 'btn-glow-primary' : 'btn-glass'}
              style={{
                padding: '0.55rem 1.25rem',
                fontSize: '0.88rem',
                borderRadius: '0.6rem',
              }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          <AnimatePresence>
            {filteredProjects.map((project: Project, idx: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14, delay: idx * 0.08 }}
                className="glass-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                  position: 'relative',
                }}
              >
                {/* Card Header */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '0.75rem',
                        background: 'rgba(16, 185, 129, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#34d399',
                      }}
                    >
                      <Folder size={22} />
                    </div>

                    <div style={{ display: 'flex', gap: '0.6rem' }}>
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.15 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: '#94a3b8',
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '0.5rem',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'color 0.2s',
                          }}
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.15 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: '#38bdf8',
                            background: 'rgba(2, 132, 199, 0.15)',
                            padding: '0.5rem',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'color 0.2s',
                          }}
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>
                    {project.title}
                  </h3>

                  <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>

                  {/* Field Survey Highlight Banner */}
                  {project.surveyHighlight && (
                    <div
                      style={{
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        padding: '0.6rem 0.85rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.82rem',
                        color: '#34d399',
                        fontWeight: 600,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {project.surveyHighlight}
                    </div>
                  )}
                </div>

                {/* Case Study Trigger & Tech Tags */}
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedProject(project)}
                    className="btn-glass"
                    style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem', padding: '0.55rem', fontSize: '0.82rem', borderColor: 'rgba(16, 185, 129, 0.35)' }}
                  >
                    <BookOpen size={15} /> View Technical Case Study
                  </motion.button>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-badge" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
