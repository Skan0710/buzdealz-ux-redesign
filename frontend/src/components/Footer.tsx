import React from 'react';

interface FooterProps {
  onOpenLegal: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '36px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* Left: Copyright & Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '8px',
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            B
          </div>
          <span style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)' }}>
            © 2026 BuzDealz. All rights reserved.
          </span>
        </div>

        {/* Right: Legal Links matching live site */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '24px',
            fontSize: '0.88rem',
            color: 'var(--muted-foreground)',
          }}
        >
          {['Terms of Service', 'Privacy Policy', 'Refunds', 'Disclaimer'].map((link) => (
            <button
              key={link}
              onClick={() => onOpenLegal(link)}
              style={{
                color: 'var(--muted-foreground)',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};
