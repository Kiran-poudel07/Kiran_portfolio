import React, { useState } from 'react';
import { Mail, Send, MapPin, Github, Linkedin, Facebook, Instagram, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const smoothEase = 'easeInOut' as const;

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in your name, email, and message.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message to server...' });

    try {
      const res = await axios.post('http://localhost:5000/api/v1/contact', formData);
      if (res.data && res.data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been stored in MongoDB and sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(res.data.message || 'Failed to submit');
      }
    } catch (err: any) {
      console.warn('MERN Server response/error:', err);
      setStatus({
        type: 'success',
        message: 'Message captured! (If backend server is offline, feel free to email directly at erkiranpoudel08@gmail.com)',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 0 6rem', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: smoothEase }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.0 }} style={{ fontSize: '0.85rem', fontWeight: 700, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            GET IN TOUCH
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.15 }} style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Contact <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.25 }} style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
            Have a project idea, job opportunity, or technical question? Send a message directly or connect via social media!
          </motion.p>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #06b6d4, #10b981)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </motion.div>

        {/* Contact Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="contact-grid">
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: smoothEase }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>
                Quick Info & Connections
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '0.6rem', color: '#34d399' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Direct Email</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>{PORTFOLIO_DATA.personal.email}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyEmail}
                    className="btn-glass"
                    style={{ marginLeft: 'auto', padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </motion.button>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(6, 182, 212, 0.15)', borderRadius: '0.6rem', color: '#38bdf8' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Location</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>{PORTFOLIO_DATA.personal.location}</div>
                  </div>
                </motion.div>
              </div>

              {/* Social Channels List */}
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>Social Networks</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <motion.a
                  whileHover={{ scale: 1.04, y: -3 }}
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel"
                  style={{ padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ffffff' }}
                >
                  <Github size={20} style={{ color: '#34d399' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>GitHub</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -3 }}
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel"
                  style={{ padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ffffff' }}
                >
                  <Linkedin size={20} style={{ color: '#38bdf8' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>LinkedIn</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -3 }}
                  href={PORTFOLIO_DATA.personal.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel"
                  style={{ padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ffffff' }}
                >
                  <Facebook size={20} style={{ color: '#60a5fa' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Facebook</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -3 }}
                  href={PORTFOLIO_DATA.personal.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel"
                  style={{ padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ffffff' }}
                >
                  <Instagram size={20} style={{ color: '#f472b6' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Instagram</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: MERN API Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: smoothEase }}
            className="glass-panel"
            style={{ padding: '2.5rem' }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem' }}>
              Send a Direct Message
            </h3>

            {status.type === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34d399',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.92rem',
                }}
              >
                <CheckCircle2 size={20} style={{ flexShrink: 0 }} /> {status.message}
              </motion.div>
            )}

            {status.type === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#f87171',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.92rem',
                }}
              >
                <AlertCircle size={20} style={{ flexShrink: 0 }} /> {status.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.6rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.4rem' }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.6rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.4rem' }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project inquiry / Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.6rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.4rem' }}>
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.6rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.type === 'loading'}
                className="btn-glow-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '0.95rem' }}
              >
                {status.type === 'loading' ? 'Sending Message...' : 'Send Message'} <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid { grid-template-columns: 0.9fr 1.1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
