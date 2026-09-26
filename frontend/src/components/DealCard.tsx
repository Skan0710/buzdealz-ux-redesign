import React from 'react';
import { Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Deal } from '../data/mockData';

interface DealCardProps {
  deal: Deal;
  isSaved?: boolean;
  onToggleSave?: (dealId: string) => void;
  onSelectDeal: (deal: Deal) => void;
}

export const DealCard: React.FC<DealCardProps> = ({
  deal,
  isSaved = false,
  onToggleSave,
  onSelectDeal,
}) => {
  return (
    <div
      onClick={() => onSelectDeal(deal)}
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'pointer',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.borderColor = 'rgba(214, 51, 108, 0.35)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
    >
      {/* Card Media Header */}
      <div
        style={{
          position: 'relative',
          height: '220px',
          backgroundColor: '#f3f4f6',
          overflow: 'hidden',
        }}
      >
        <img
          src={deal.image}
          alt={deal.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 2,
          }}
        >
          <span
            style={{
              backgroundColor: 'rgba(107, 40, 70, 0.94)',
              color: '#ffffff',
              border: '1px solid rgba(242, 197, 114, 0.65)',
              padding: '3px 8px',
              borderRadius: '6px',
              fontSize: '0.68rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
            }}
          >
            BuzDealz Exclusive
          </span>

          <span
            style={{
              backgroundColor: 'rgba(35, 178, 127, 0.92)',
              color: '#ffffff',
              padding: '2px 8px',
              borderRadius: '6px',
              fontSize: '0.68rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '3px',
              width: 'fit-content',
            }}
          >
            <CheckCircle2 size={10} />
            Verified Deal
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave?.(deal.id);
          }}
          aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isSaved ? 'var(--primary)' : '#64748b',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
            zIndex: 2,
            transition: 'transform 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Heart size={16} fill={isSaved ? 'var(--primary)' : 'none'} />
        </button>

        {/* Brand Tag Pill on Bottom Left of Image */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(4px)',
            borderRadius: 'var(--radius-pill)',
            padding: '3px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: 'var(--foreground-heading)',
              letterSpacing: '0.02em',
            }}
          >
            {deal.brand}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h4
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--foreground-heading)',
            lineHeight: 1.35,
            marginBottom: '10px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '2.7em',
          }}
          title={deal.title}
        >
          {deal.title}
        </h4>

        {/* Pricing Layout */}
        <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  color: 'var(--primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                ₹{deal.buzdealzPrice.toLocaleString('en-IN')}
              </span>
              <span
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--muted-foreground)',
                  textDecoration: 'line-through',
                }}
              >
                ₹{deal.brandPrice.toLocaleString('en-IN')}
              </span>
            </div>

            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: 'var(--sage-text)',
                backgroundColor: 'var(--sage-bg)',
                padding: '2px 8px',
                borderRadius: '6px',
              }}
            >
              {deal.discountPercent}% OFF
            </span>
          </div>

          {/* Action button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectDeal(deal);
            }}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '9px 14px',
              fontSize: '0.86rem',
              borderRadius: '10px',
              marginTop: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span>View Deal Offer</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
