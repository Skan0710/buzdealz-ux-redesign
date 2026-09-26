import React from 'react';
import { Star, Sparkles, ShoppingBag } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: 1,
      icon: Star,
      title: 'Join BuzDealz',
      desc: 'Become a member in less than a minute and unlock exclusive prices.',
    },
    {
      num: 2,
      icon: Sparkles,
      title: 'Browse Exclusive Deals',
      desc: 'Explore 300+ premium brands and member-only offers across categories.',
    },
    {
      num: 3,
      icon: ShoppingBag,
      title: 'Shop on Brand Websites',
      desc: 'Click, shop on the brand site and save more every time.',
    },
  ];

  return (
    <section id="how-it-works" style={{ padding: '60px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px', position: 'relative' }}>
          {/* Top pin indicator from live site */}
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#fff0f5',
              border: '1px solid rgba(214, 51, 108, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
              }}
            />
          </div>

          <div
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.16em',
              color: 'var(--foreground-heading)',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            HOW BUZDEALZ WORKS
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--foreground-heading)',
            }}
          >
            3 Simple Steps to Start <span style={{ color: 'var(--primary)' }}>Saving</span>
          </h2>
        </div>

        {/* 3 Step Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                style={{
                  backgroundColor: 'var(--cream)',
                  border: '1px solid rgba(248, 187, 208, 0.5)',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Number Badge with Icon Bubble */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '22px' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(214, 51, 108, 0.14)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)',
                      position: 'relative',
                    }}
                  >
                    <Icon size={24} />
                    <span
                      style={{
                        position: 'absolute',
                        top: '-4px',
                        left: '-4px',
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary)',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.28rem',
                    fontWeight: 800,
                    color: 'var(--foreground-heading)',
                    marginBottom: '10px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
