import React from 'react';
import { Crown, ArrowRight, Clock } from 'lucide-react';
import { DEALS } from '../data/mockData';
import type { Deal } from '../data/mockData';

interface FeaturedDealHighlightProps {
  onSelectDeal: (deal: Deal) => void;
  onUnlockMember: () => void;
}

export const FeaturedDealHighlight: React.FC<FeaturedDealHighlightProps> = ({
  onSelectDeal,
  onUnlockMember,
}) => {
  const heroDeal = DEALS.find((d) => d.id === 'campus-north-plus') || DEALS[0];

  return (
    <section style={{ padding: '40px 0 60px', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* Left: Example Member Deal Card (Faithful recreation from BuzDealz) */}
          <div
            onClick={() => onSelectDeal(heroDeal)}
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
          >
            {/* Product Image Header with Subtle Tag */}
            <div
              style={{
                position: 'relative',
                height: '240px',
                backgroundColor: '#1f2937',
                overflow: 'hidden',
              }}
            >
              <img
                src={heroDeal.image}
                alt={heroDeal.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  backgroundColor: 'rgba(107, 40, 70, 0.92)',
                  color: '#ffffff',
                  border: '1px solid rgba(242, 197, 114, 0.6)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(4px)',
                }}
              >
                BuzDealz Exclusive
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  fontSize: '0.72rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Clock size={11} color="#f2c572" />
                <span>{heroDeal.verifiedAgo}</span>
              </div>
            </div>

            {/* Deal Details */}
            <div style={{ padding: '22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'var(--muted-foreground)',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                EXAMPLE MEMBER DEAL
              </div>

              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--foreground-heading)',
                  marginBottom: '14px',
                }}
              >
                {heroDeal.title}
              </h3>

              {/* Pricing line */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '12px',
                  marginBottom: '18px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--muted-foreground)',
                    textDecoration: 'line-through',
                  }}
                >
                  MRP ₹{heroDeal.brandPrice.toLocaleString('en-IN')}
                </span>
                <span
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: 'var(--primary)',
                  }}
                >
                  Member ₹{heroDeal.buzdealzPrice.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Bottom Red/Berry Banner matching BuzDealz UI */}
              <div
                style={{
                  marginTop: 'auto',
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  textAlign: 'center',
                  padding: '12px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.98rem',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <span>YOU SAVE ₹{heroDeal.savings.toLocaleString('en-IN')} ({heroDeal.discountPercent}% OFF)</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Right: "Ready to Start Saving?" CTA Banner */}
          <div
            style={{
              backgroundColor: 'var(--primary)',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 48px)',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 'var(--shadow-primary)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background sparkle effects */}
            <div
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                pointerEvents: 'none',
              }}
            />

            <h2
              style={{
                fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)',
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: '14px',
                color: '#ffffff',
              }}
            >
              Ready to Start Saving?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '400px',
                marginBottom: '28px',
                lineHeight: 1.5,
              }}
            >
              Join 10,000+ smart shoppers and unlock exclusive prices today.
            </p>

            <button
              onClick={onUnlockMember}
              className="btn-white"
              style={{
                padding: '14px 32px',
                fontSize: '1.05rem',
              }}
            >
              <span>Unlock Member Pricing</span>
              <Crown size={18} color="#d6336c" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
