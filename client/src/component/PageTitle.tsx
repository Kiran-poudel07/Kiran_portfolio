import React from 'react';
import { DividerHalf } from './DividerHalf';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em' }}>{title}</h1>
      {subtitle && <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.5rem' }}>{subtitle}</p>}
      <DividerHalf />
    </div>
  );
};
