import React from 'react';
import { PORTFOLIO_OWNER } from '../../config/constant';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', padding: '2.5rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Built with <Heart size={14} color="#ef4444" style={{ display: 'inline', margin: '0 2px' }} /> using MERN Stack (MongoDB, Express, React, Node.js) & TypeScript
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} {PORTFOLIO_OWNER.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
