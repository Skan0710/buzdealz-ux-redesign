import React from 'react';
import { Crown } from 'lucide-react';

interface CtaBannerProps {
  onUnlockMember: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onUnlockMember }) => {
  const floatingTags = [
    { text: 'Fashion', top: '15%', left: '8%' },
    { text: 'Style', top: '22%', left: '22%' },
    { text: 'Savings', top: '65%', left: '6%' },
    { text: 'Deals', top: '78%', left: '16%' },
    { text: 'Beauty', top: '20%', right: '12%' },
    { text: 'Verified', top: '60%', right: '8%' },
    { text: 'Brands', top: '76%', right: '16%' },
    { text: 'Access', top: '85%', right: '28%' },
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--primary)',
        color: '#ffffff',
        padding: '90px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating badges around the banner matching BuzDealz UI */}
      {floatingTags.map((tag, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            top: tag.top,
            left: tag.left,
            right: tag.right,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#ffffff',
            padding: '6px 16px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.82rem',
            fontWeight: 600,
            pointerEvents: 'none',
            opacity: 0.85,
          }}
          className="floating-banner-tag"
        >
          {tag.text}
        </div>
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '28px',
            color: '#ffffff',
          }}
        >
          Unlock Exclusive Prices.
          <br />
          Save More. Forever.
        </h2>

        <div style={{ marginBottom: '22px' }}>
          <button
            onClick={onUnlockMember}
            className="btn-white"
            style={{
              padding: '16px 36px',
              fontSize: '1.05rem',
            }}
          >
            <span>Unlock Member Pricing</span>
            <Crown size={18} color="#d6336c" />
          </button>
        </div>

        <p
          style={{
            fontSize: '0.92rem',
            color: 'rgba(255, 255, 255, 0.88)',
            maxWidth: '460px',
            margin: '0 auto',
          }}
        >
          One-time payment. Lifetime access. No renewals. No hidden charges.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .floating-banner-tag {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
