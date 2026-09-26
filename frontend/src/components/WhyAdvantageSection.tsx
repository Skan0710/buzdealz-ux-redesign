import React from 'react';
import { Sparkles, ShieldCheck, Lock, Star } from 'lucide-react';

export const WhyAdvantageSection: React.FC = () => {
  const advantages = [
    {
      icon: Sparkles,
      title: 'AI-Powered Deal Discovery',
      desc: 'Ask in plain language — mood, occasion, brand, or budget.',
    },
    {
      icon: ShieldCheck,
      title: 'Authentic & Risk-Free',
      desc: 'Always checkout on official brand websites.',
    },
    {
      icon: Lock,
      title: 'Exclusive Member Access',
      desc: 'Pricing and codes reserved for BuzDealz members.',
    },
    {
      icon: Star,
      title: 'Lifetime Unlimited Access',
      desc: 'One payment. No renewals. No hidden charges.',
    },
  ];

  return (
    <section style={{ padding: '64px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--foreground-heading)',
              textTransform: 'uppercase',
            }}
          >
            WHY BUZDEALZ IS YOUR <span style={{ color: 'var(--primary)' }}>UNFAIR ADVANTAGE</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            maxWidth: '980px',
            margin: '0 auto',
          }}
        >
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--cream)',
                  border: '1px solid rgba(248, 187, 208, 0.4)',
                  borderRadius: '20px',
                  padding: '28px 24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    flexShrink: 0,
                    border: '1px solid rgba(214, 51, 108, 0.15)',
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: 'var(--foreground-heading)',
                      marginBottom: '4px',
                    }}
                  >
                    {adv.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.45 }}>
                    {adv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
