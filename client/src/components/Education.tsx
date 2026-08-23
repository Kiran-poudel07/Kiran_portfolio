import React, { useState } from 'react';
import { GraduationCap, Award, CheckCircle, ShieldCheck, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ImageViewerModal } from './ImageViewerModal';

export const Education: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="education" style={{ padding: '4.5rem 0', position: 'relative', width: '100%' }}>
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            ACADEMIC & PROFESSIONAL CREDENTIALS
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #10b981, #0284c7)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </motion.div>

        {/* Highlight Showcase Grid: Graduation Photo + NEC Computer Engineer Certificate */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem', marginBottom: '2.5rem', width: '100%' }}>
          {/* NEC Certificate Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel"
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}
          >
            <div>
              <div className="status-pill" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399', marginBottom: '1rem' }}>
                <ShieldCheck size={16} /> Official Professional License
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                Registered Computer Engineer
              </h3>

              <div style={{ fontSize: '0.92rem', color: '#38bdf8', fontWeight: 700, marginBottom: '1rem' }}>
                Nepal Engineering Council (NEC)
              </div>

              {/* Image with View Button Overlay */}
              <div
                style={{
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  marginBottom: '1rem',
                  background: '#000',
                  position: 'relative',
                  cursor: 'pointer',
                  width: '100%',
                }}
                onClick={() => setSelectedImage({ src: PORTFOLIO_DATA.personal.necCertificateImage, title: 'Nepal Engineering Council Certificate' })}
              >
                <img
                  src={PORTFOLIO_DATA.personal.necCertificateImage}
                  alt="Nepal Engineering Council Computer Engineer Certificate"
                  style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                />
                <button
                  className="btn-glow-primary"
                  style={{
                    position: 'absolute',
                    bottom: '0.65rem',
                    right: '0.65rem',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.75rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
                  }}
                >
                  <Maximize2 size={13} /> View Full Document
                </button>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Officially certified and registered Computer Engineer under the Nepal Engineering Council (NEC), authorized for professional computer engineering practice in Nepal.
              </p>
            </div>
          </motion.div>

          {/* Graduation Convocation Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel"
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}
          >
            <div>
              <div className="status-pill" style={{ background: 'rgba(2, 132, 199, 0.15)', borderColor: 'rgba(2, 132, 199, 0.3)', color: '#38bdf8', marginBottom: '1rem' }}>
                <Award size={16} /> Pokhara University Convocation
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                B.E. Computer Engineering
              </h3>

              <div style={{ fontSize: '0.92rem', color: '#34d399', fontWeight: 700, marginBottom: '1rem' }}>
                Everest Engineering College • CGPA: 3.34 / 4.00
              </div>

              {/* Image with View Button Overlay */}
              <div
                style={{
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(2, 132, 199, 0.3)',
                  marginBottom: '1rem',
                  position: 'relative',
                  cursor: 'pointer',
                  width: '100%',
                }}
                onClick={() => setSelectedImage({ src: PORTFOLIO_DATA.personal.graduationImage, title: 'Pokhara University Convocation Photo' })}
              >
                <img
                  src={PORTFOLIO_DATA.personal.graduationImage}
                  alt="Kiran Poudel Graduation Pokhara University"
                  style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                />
                <button
                  className="btn-glow-primary"
                  style={{
                    position: 'absolute',
                    bottom: '0.65rem',
                    right: '0.65rem',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.75rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
                  }}
                >
                  <Maximize2 size={13} /> View Full Photo
                </button>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Served as Class Representative and Key Management Event Lead for college technical Expos, hackathons, and cultural events.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Education History List */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
          {PORTFOLIO_DATA.education.map((edu, eIdx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: eIdx * 0.08 }}
              className="glass-panel"
              style={{ padding: '1.5rem', minWidth: 0 }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0.6rem',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399',
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={22} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.4rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>{edu.degree}</h4>
                    <span style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 600, background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                      {edu.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 600, marginTop: '0.15rem' }}>
                    {edu.institution} • {edu.location}
                  </div>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                {edu.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingTop: '0.65rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {edu.highlights.map((high, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#e2e8f0', fontSize: '0.84rem' }}>
                    <CheckCircle size={14} style={{ color: '#10b981', flexShrink: 0 }} /> {high}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Viewer Modal */}
      <ImageViewerModal
        imageSrc={selectedImage?.src || null}
        title={selectedImage?.title || ''}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};
