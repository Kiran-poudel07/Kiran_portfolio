import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface ImageViewerModalProps {
  imageSrc: string | null;
  title: string;
  onClose: () => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({ imageSrc, title, onClose }) => {
  if (!imageSrc) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(4, 8, 18, 0.92)',
        backdropFilter: 'blur(16px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '90vw',
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
        {/* Header */}
        <div
          style={{
            padding: '1rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(15, 23, 42, 0.9)',
          }}
        >
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>{title}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={imageSrc}
              target="_blank"
              rel="noreferrer"
              className="btn-glass"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem' }}
            >
              <ExternalLink size={15} /> Open Original
            </a>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                width: '34px',
                height: '34px',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Full Image Container */}
        <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto', flex: 1, background: '#000' }}>
          <img
            src={imageSrc}
            alt={title}
            style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '0.5rem' }}
          />
        </div>
      </div>
    </div>
  );
};
