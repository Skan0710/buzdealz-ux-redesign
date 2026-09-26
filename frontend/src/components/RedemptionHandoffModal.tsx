import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import type { Deal } from '../data/mockData';

interface RedemptionHandoffModalProps {
  deal: Deal | null;
  isOpen: boolean;
  onClose: () => void;
  onBackToDeal?: () => void;
}

export const RedemptionHandoffModal: React.FC<RedemptionHandoffModalProps> = ({
  deal,
  isOpen,
  onClose,
  onBackToDeal,
}) => {
  const [copied, setCopied] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (isOpen && deal) {
      // Trigger joyful celebration confetti
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d6336c', '#f2c572', '#23b27f', '#6b2846'],
        });
      } catch {
        // confetti fallback if canvas not available
      }
      // Auto-copy code
      if (deal.couponCode) {
        navigator.clipboard.writeText(deal.couponCode).catch(() => {});
        setCopied(true);
        const timer = setTimeout(() => setCopied(false), 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, deal]);

  if (!isOpen || !deal) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(deal.couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContinueToBrand = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.open(deal.officialUrl, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
      onClose();
    }, 800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--card)',
          borderRadius: '28px',
          width: '100%',
          maxWidth: '540px',
          padding: 'clamp(24px, 4vw, 36px)',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
          border: '1.5px solid rgba(214, 51, 108, 0.3)',
          maxHeight: '92vh',
          overflowY: 'auto',
        }}
        className="animate-fade-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--muted-foreground)',
            backgroundColor: 'var(--muted)',
          }}
        >
          <X size={18} />
        </button>

        {/* Celebration Header */}
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#fff0f5',
              border: '1px solid rgba(214, 51, 108, 0.3)',
              color: 'var(--primary)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '12px',
              letterSpacing: '0.04em',
            }}
          >
            <Sparkles size={14} />
            <span>OFFICIAL BRAND HANDOFF</span>
          </div>

          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.95rem)',
              fontWeight: 900,
              color: 'var(--foreground-heading)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            You're saving ₹{deal.savings.toLocaleString('en-IN')} 🎉
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', marginTop: '4px' }}>
            Exclusive member savings unlocked for {deal.brand}
          </p>
        </div>

        {/* Deal Snapshot Card */}
        <div
          style={{
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '18px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '20px',
          }}
        >
          <img
            src={deal.image}
            alt={deal.title}
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '12px',
              objectFit: 'cover',
              border: '1px solid var(--border)',
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <h4
              style={{
                fontSize: '0.94rem',
                fontWeight: 700,
                color: 'var(--foreground-heading)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginBottom: '4px',
              }}
            >
              {deal.title}
            </h4>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', textDecoration: 'line-through' }}>
                ₹{deal.brandPrice.toLocaleString('en-IN')}
              </span>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary)' }}>
                ₹{deal.buzdealzPrice.toLocaleString('en-IN')}
              </span>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  color: 'var(--sage-text)',
                  backgroundColor: 'var(--sage-bg)',
                  padding: '1px 6px',
                  borderRadius: '4px',
                }}
              >
                {deal.discountPercent}% OFF
              </span>
            </div>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            marginBottom: '22px',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--sage-bg)',
              border: '1px solid rgba(35, 178, 127, 0.25)',
              borderRadius: '12px',
              padding: '10px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--sage-text)',
            }}
          >
            <CheckCircle2 size={16} />
            <span>Verified BuzDealz deal</span>
          </div>

          <div
            style={{
              backgroundColor: '#eff6ff',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              borderRadius: '12px',
              padding: '10px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#1d4ed8',
            }}
          >
            <ShieldCheck size={16} />
            <span>Official brand website</span>
          </div>
        </div>

        {/* Promo Code Box */}
        <div
          style={{
            backgroundColor: '#fff0f5',
            border: '1.5px dashed var(--primary)',
            borderRadius: '14px',
            padding: '14px 18px',
            marginBottom: '22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '0.72rem', color: '#8b1e47', fontWeight: 700, textTransform: 'uppercase' }}>
              Your Member Coupon Code
            </div>
            <code style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.08em' }}>
              {deal.couponCode}
            </code>
          </div>

          <button
            onClick={handleCopyCode}
            style={{
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'Code Copied!' : 'Copy Code'}</span>
          </button>
        </div>

        {/* How It Works Steps */}
        <div style={{ marginBottom: '26px' }}>
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: 'var(--muted-foreground)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            How it works:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              {
                step: '1',
                text: `Continue to ${deal.officialDomain}`,
                desc: 'You will be securely redirected to the official brand store.',
              },
              {
                step: '2',
                text: `Apply member code ${deal.couponCode}`,
                desc: 'Code is already copied to your clipboard — simply paste at checkout.',
              },
              {
                step: '3',
                text: 'Complete your purchase',
                desc: 'Enjoy official brand warranty, authentic product, and direct doorstep delivery.',
              },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--surface)',
                }}
              >
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  {s.step}
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--foreground-heading)' }}>
                    {s.text}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted-foreground)' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={handleContinueToBrand}
            disabled={isRedirecting}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '1rem',
              borderRadius: '14px',
              opacity: isRedirecting ? 0.8 : 1,
            }}
          >
            <span>{isRedirecting ? 'Connecting to Official Store...' : `Continue to ${deal.brand} →`}</span>
            {!isRedirecting && <ExternalLink size={16} />}
          </button>

          <button
            onClick={() => {
              onClose();
              onBackToDeal?.();
            }}
            style={{
              padding: '10px',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--muted-foreground)',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <ArrowLeft size={14} />
            <span>Back to Deal</span>
          </button>
        </div>

        {/* Reassurance Footer */}
        <p
          style={{
            fontSize: '0.74rem',
            color: 'var(--muted-foreground)',
            textAlign: 'center',
            marginTop: '16px',
            lineHeight: 1.4,
          }}
        >
          🔒 You are leaving BuzDealz. All transactions are securely processed on {deal.officialDomain}.
        </p>
      </div>
    </div>
  );
};
