import React from 'react';
import { Star, Sparkles, Lock, Zap, Heart, CheckCircle2 } from 'lucide-react';

export const MemberPerksGrid: React.FC = () => {
  const perks = [
    {
      icon: Star,
      title: '300+ premium brands & live deals',
      desc: 'Fashion, beauty, footwear & more',
    },
    {
      icon: Sparkles,
      title: 'New brands & categories',
      desc: 'Added regularly for members',
    },
    {
      icon: Lock,
      title: 'Exclusive member pricing',
      desc: 'Verified deals — no fake coupons',
    },
    {
      icon: Zap,
      title: 'Early flash sale access',
      desc: 'See drops before everyone else',
    },
    {
      icon: Heart,
      title: 'AI-powered deal search',
      desc: 'Find savings in plain language',
    },
    {
      icon: CheckCircle2,
      title: 'Shop on brand websites',
      desc: 'Checkout direct — always authentic',
    },
  ];

  return (
    <section style={{ padding: '64px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.16em',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            EVERYTHING INCLUDED
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--foreground-heading)',
              marginBottom: '12px',
            }}
          >
            Unlimited access to <span style={{ color: 'var(--primary)' }}>member perks</span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--muted-foreground)',
              maxWidth: '540px',
              margin: '0 auto',
            }}
          >
            One membership unlocks verified deals across premium brands — today and as we keep adding more.
          </p>
        </div>

        {/* 6 Perk Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--cream)',
                  border: '1px solid rgba(248, 187, 208, 0.45)',
                  borderRadius: '20px',
                  padding: '24px 22px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  transition: 'transform 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(214, 51, 108, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(214, 51, 108, 0.08)',
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--foreground-heading)',
                      marginBottom: '4px',
                    }}
                  >
                    {perk.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.45 }}>
                    {perk.desc}
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
