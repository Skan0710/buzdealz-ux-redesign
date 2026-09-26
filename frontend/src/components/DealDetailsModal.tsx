import React, { useState } from 'react';
import {
  X,
  Heart,
  CheckCircle2,
  Clock,
  Copy,
  Check,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import type { Deal } from '../data/mockData';

interface DealDetailsModalProps {
  deal: Deal | null;
  isOpen: boolean;
  onClose: () => void;
  onRedeem: (deal: Deal) => void;
  isSaved?: boolean;
  onToggleSave?: (dealId: string) => void;
}

export const DealDetailsModal: React.FC<DealDetailsModalProps> = ({
  deal,
  isOpen,
  onClose,
  onRedeem,
  isSaved = false,
  onToggleSave,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !deal) return null;

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(deal.couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--card)',
          borderRadius: '28px',
          width: '100%',
          maxWidth: '780px',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.3)',
          border: '1px solid var(--border)',
        }}
        className="animate-fade-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close deal dialog"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--foreground)',
            zIndex: 10,
          }}
        >
          <X size={20} />
        </button>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {/* Left: Product Image & Badges */}
          <div
            style={{
              position: 'relative',
              minHeight: '340px',
              backgroundColor: '#1f2937',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src={deal.image}
              alt={deal.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Exclusive Tag */}
            <div
              style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                backgroundColor: 'rgba(107, 40, 70, 0.95)',
                color: '#ffffff',
                border: '1px solid rgba(242, 197, 114, 0.7)',
                padding: '4px 12px',
                borderRadius: '8px',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(6px)',
              }}
            >
              BuzDealz Exclusive
            </div>

            {/* Freshness Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                backgroundColor: 'rgba(14, 11, 18, 0.85)',
                backdropFilter: 'blur(8px)',
                borderRadius: '14px',
                padding: '10px 14px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="var(--sage)" />
                <span>Verified {deal.verifiedAgo}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f2c572' }}>
                <Clock size={13} />
                <span>{deal.expiresIn}</span>
              </div>
            </div>
          </div>

          {/* Right: Deal Details, Savings & Handoff Trigger */}
          <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
            {/* Brand Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {deal.brand}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>
                {deal.category} • {deal.intent}
              </span>
            </div>

            <h3
              style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--foreground-heading)',
                lineHeight: 1.25,
                marginBottom: '16px',
              }}
            >
              {deal.title}
            </h3>

            {/* Savings-First Pricing Hero Box */}
            <div
              style={{
                backgroundColor: 'var(--cream)',
                border: '1px solid rgba(248, 187, 208, 0.7)',
                borderRadius: '16px',
                padding: '18px 20px',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '6px' }}>
                <span
                  style={{
                    fontSize: '1.85rem',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ₹{deal.buzdealzPrice.toLocaleString('en-IN')}
                </span>
                <span
                  style={{
                    fontSize: '1rem',
                    color: 'var(--muted-foreground)',
                    textDecoration: 'line-through',
                  }}
                >
                  ₹{deal.brandPrice.toLocaleString('en-IN')}
                </span>
                <span
                  style={{
                    marginLeft: 'auto',
                    backgroundColor: 'var(--sage-bg)',
                    color: 'var(--sage-text)',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    padding: '3px 10px',
                    borderRadius: '8px',
                  }}
                >
                  {deal.discountPercent}% OFF
                </span>
              </div>

              {/* YOU SAVE Banner */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#8b1e47',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                }}
              >
                <Sparkles size={14} color="var(--primary)" />
                <span>YOU SAVE ₹{deal.savings.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Exclusive Promo Code Box */}
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--muted-foreground)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '6px',
                }}
              >
                Exclusive Member Voucher Code
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1.5px dashed var(--primary)',
                  backgroundColor: '#fff0f5',
                }}
              >
                <code
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: 'var(--primary)',
                  }}
                >
                  {deal.couponCode}
                </code>

                <button
                  onClick={handleCopyCode}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
            </div>

            {/* Description & Features */}
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--muted-foreground)',
                lineHeight: 1.5,
                marginBottom: '16px',
              }}
            >
              {deal.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {deal.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="var(--sage)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.84rem', color: 'var(--foreground)' }}>{feat}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
              <button
                onClick={() => {
                  onClose();
                  onRedeem(deal);
                }}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '1rem',
                  borderRadius: '14px',
                }}
              >
                <span>Redeem Deal at {deal.brand}</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onToggleSave?.(deal.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  color: isSaved ? 'var(--primary)' : 'var(--muted-foreground)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                <Heart size={16} fill={isSaved ? 'var(--primary)' : 'none'} />
                <span>{isSaved ? 'Saved to Wishlist' : 'Save for Later'}</span>
              </button>
            </div>

            {/* Guarantee subtext */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginTop: '16px',
                fontSize: '0.74rem',
                color: 'var(--muted-foreground)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={12} color="var(--sage)" /> Official Brand Warranty
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Truck size={12} color="var(--primary)" /> Direct Brand Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
