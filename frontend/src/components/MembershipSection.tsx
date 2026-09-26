import React from 'react';
import { Crown, Check, ShieldCheck, Zap, Lock } from 'lucide-react';

interface MembershipSectionProps {
  onSelectPlan: (plan: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="membership" style={{ padding: '64px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--foreground-heading)',
              marginBottom: '10px',
            }}
          >
            Choose your membership
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted-foreground)' }}>
            Plans from the BuzDealz catalog — pick monthly flexibility or best-value access.
          </p>
        </div>

        {/* 2 Plans Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            maxWidth: '920px',
            margin: '0 auto',
          }}
        >
          {/* Plan 1: 1 Year (Best Value) */}
          <div
            style={{
              backgroundColor: '#17121e',
              border: '1px solid rgba(214, 51, 108, 0.4)',
              borderRadius: '24px',
              padding: '36px 30px',
              color: '#ffffff',
              position: 'relative',
              boxShadow: '0 20px 48px -8px rgba(214, 51, 108, 0.25)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* BEST VALUE Tag */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'var(--primary)',
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                padding: '4px 14px',
                borderRadius: 'var(--radius-pill)',
                textTransform: 'uppercase',
              }}
            >
              BEST VALUE
            </div>

            <div style={{ marginBottom: '18px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                BuzDealz Premium • 1 year
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '12px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>
                  ₹999
                </span>
                <span style={{ fontSize: '0.95rem', color: '#9ca3af', textDecoration: 'line-through' }}>
                  ₹2,499
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--sage)', fontWeight: 700 }}>
                  Save 60%
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#9ca3af', marginTop: '6px' }}>
                One payment. 1 year full access to all 300+ brand deals.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '20px 0 28px' }}>
              {[
                'Access to 300+ premium brands',
                'Exclusive member-only prices',
                'New deals added every week',
                'Instant deal redemption & direct brand links',
                'Average member savings: ₹45,600/year',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={11} color="#ffffff" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.92rem', color: '#f3f4f6' }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onSelectPlan('annual')}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '1rem',
                marginTop: 'auto',
              }}
            >
              <span>Start Saving Now</span>
              <Crown size={18} />
            </button>

            {/* Micro trust indicators */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                marginTop: '18px',
                fontSize: '0.76rem',
                color: '#9ca3af',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Lock size={12} />
                <span>Secure Payments</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Zap size={12} />
                <span>Instant Activation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={12} />
                <span>Verified Deals</span>
              </div>
            </div>
          </div>

          {/* Plan 2: 1 Month (Flexible) */}
          <div
            style={{
              backgroundColor: '#17121e',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '36px 30px',
              color: '#ffffff',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* FLEXIBLE Tag */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#374151',
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                padding: '4px 14px',
                borderRadius: 'var(--radius-pill)',
                textTransform: 'uppercase',
              }}
            >
              FLEXIBLE
            </div>

            <div style={{ marginBottom: '18px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                BuzDealz Premium • 1 month
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '12px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>
                  ₹299
                </span>
                <span style={{ fontSize: '0.92rem', color: '#9ca3af' }}>/month</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#9ca3af', marginTop: '6px' }}>
                1 month plan. Unlock exclusive member pricing anytime.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '20px 0 28px' }}>
              {[
                'Access to 300+ premium brands',
                'Exclusive member-only prices',
                'New deals added every week',
                'Instant deal redemption',
                'Cancel anytime with 1 click',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={11} color="#ffffff" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.92rem', color: '#f3f4f6' }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onSelectPlan('monthly')}
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '1rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontWeight: 700,
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              <span>Start Monthly</span>
              <Crown size={18} />
            </button>

            {/* Micro trust indicators */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                marginTop: '18px',
                fontSize: '0.76rem',
                color: '#9ca3af',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Lock size={12} />
                <span>Secure Payments</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Zap size={12} />
                <span>Instant Activation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={12} />
                <span>Verified Deals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
