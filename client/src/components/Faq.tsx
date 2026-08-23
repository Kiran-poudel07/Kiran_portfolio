import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, FaqItem } from '../data/portfolioData';

const smoothEase = 'easeInOut' as const;

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: smoothEase }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.0 }} style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            RECRUITER QUICK ANSWERS
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.15 }} style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.4rem' }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #f59e0b, #10b981)', margin: '0.8rem auto 0', borderRadius: '2px' }}></div>
        </motion.div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {PORTFOLIO_DATA.faqs.map((faq: FaqItem, idx: number) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: smoothEase }}
                className="glass-panel"
                style={{ overflow: 'hidden' }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={20} style={{ color: '#10b981', flexShrink: 0 }} />
                    <span>{faq.question}</span>
                  </div>
                  {isOpen ? <ChevronUp size={20} style={{ color: '#34d399' }} /> : <ChevronDown size={20} style={{ color: '#94a3b8' }} />}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: smoothEase }}
                      style={{ padding: '0 1.5rem 1.25rem 3.25rem', color: '#cbd5e1', fontSize: '0.96rem', lineHeight: 1.7 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
