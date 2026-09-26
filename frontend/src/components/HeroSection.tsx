import React from 'react';
import { Crown, Check } from 'lucide-react';

interface HeroSectionProps {
  onUnlockMember: () => void;
  onExploreDeals: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onUnlockMember,
  onExploreDeals,
}) => {
  return (
    <section
      style={{
        paddingTop: '48px',
        paddingBottom: '56px',
        backgroundColor: 'var(--background)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative ambient background accents matching BuzDealz subtle pink glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(248, 187, 208, 0.25) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(214, 51, 108, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Heading and CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="badge-members-only">
                <Crown size={14} color="#d6336c" />
                MEMBERS ONLY
              </span>
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: '#fff0f5',
                  border: '1px solid rgba(214, 51, 108, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                  }}
                />
              </div>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.035em',
                color: 'var(--foreground-heading)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Premium Brands.
              <br />
              Exclusive Prices.
              <br />
              <span style={{ color: 'var(--primary)' }}>Extra Savings.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.12rem',
                lineHeight: 1.6,
                color: 'var(--muted-foreground)',
                maxWidth: '480px',
              }}
            >
              Join India's premium deals club and unlock exclusive member pricing from 300+ top fashion & beauty brands.
            </p>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                paddingTop: '8px',
              }}
            >
              <button onClick={onUnlockMember} className="btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                <span>Unlock Member Pricing</span>
                <Crown size={18} />
              </button>
              <button onClick={onExploreDeals} className="btn-secondary" style={{ padding: '13px 26px', fontSize: '1rem' }}>
                <span>Explore Brands</span>
              </button>
            </div>

            {/* Social Trust Subtext */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingTop: '6px',
                fontSize: '0.85rem',
                color: 'var(--muted-foreground)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: '2px solid var(--background)',
                      marginLeft: i > 1 ? '-8px' : '0',
                      backgroundColor: ['#d6336c', '#6b2846', '#23b27f', '#f2c572'][i - 1],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '10px',
                      fontWeight: 700,
                    }}
                  >
                    ★
                  </div>
                ))}
              </div>
              <span>Trusted by 10,000+ members across India</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Members Club Preview Card */}
          <div
            style={{
              backgroundColor: 'var(--cream)',
              border: '1px solid rgba(248, 187, 208, 0.6)',
              borderRadius: '28px',
              padding: 'clamp(24px, 4vw, 36px)',
              boxShadow: '0 20px 48px -12px rgba(214, 51, 108, 0.12)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Pill */}
            <div style={{ marginBottom: '14px' }}>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                }}
              >
                MEMBERS CLUB
              </span>
            </div>

            {/* Card Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 2.8vw, 1.85rem)',
                fontWeight: 800,
                lineHeight: 1.25,
                color: 'var(--foreground-heading)',
                marginBottom: '22px',
                letterSpacing: '-0.02em',
              }}
            >
              Unlock exclusive prices from 300+ premium brands and save more every time you shop.
            </h2>

            {/* Bullet points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {[
                '300+ premium fashion & beauty brands',
                'Verified member-only deals',
                'AI-powered deal discovery',
                'Shop directly on official brand sites',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={12} color="#ffffff" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.94rem', fontWeight: 500, color: 'var(--foreground)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Dark Member Benefit Inset */}
            <div
              style={{
                backgroundColor: '#15101a',
                borderRadius: '18px',
                padding: '18px 22px',
                color: '#ffffff',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
              }}
            >
              <div
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: '#9ca3af',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                WHAT MEMBERS GET
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 1.85rem)',
                      fontWeight: 800,
                      color: 'var(--primary)',
                      lineHeight: 1.1,
                    }}
                  >
                    ₹15,000+
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#d1d5db', marginTop: '2px' }}>
                    Avg. yearly savings
                  </div>
                </div>

                <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.12)', paddingLeft: '16px' }}>
                  <div
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 1.85rem)',
                      fontWeight: 800,
                      color: '#ffffff',
                      lineHeight: 1.1,
                    }}
                  >
                    ₹2,500+
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#d1d5db', marginTop: '2px' }}>
                    Per shopping trip
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
