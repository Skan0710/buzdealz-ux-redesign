import React from 'react';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="why-buzdealz" style={{ padding: '64px 0', backgroundColor: 'var(--background)' }}>
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
            THE DIFFERENCE
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
            Why members choose BuzDealz
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--muted-foreground)' }}>
            Same brands. Completely different prices — once you have a membership.
          </p>
        </div>

        {/* Comparison Grid with VS badge */}
        <div
          style={{
            position: 'relative',
            maxWidth: '960px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Left: Without BuzDealz */}
          <div
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '32px 28px',
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--foreground-heading)' }}>
                Without BuzDealz
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', marginTop: '4px' }}>
                Paying extra, every time
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Search coupons for hours',
                'Fake / expired codes',
                'Limited or no access to exclusive offers',
                'No guarantee of savings',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#fee2e2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <X size={14} color="#e11d48" strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '0.94rem', color: 'var(--muted-foreground)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Center VS pill badge */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--surface)',
              border: '2px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 800,
              color: 'var(--muted-foreground)',
              zIndex: 3,
              boxShadow: 'var(--shadow-sm)',
            }}
            className="vs-badge"
          >
            vs
          </div>

          {/* Right: With BuzDealz */}
          <div
            style={{
              backgroundColor: 'var(--card)',
              border: '1.5px solid var(--primary)',
              borderRadius: '24px',
              padding: '32px 28px',
              position: 'relative',
              boxShadow: '0 8px 30px rgba(214, 51, 108, 0.08)',
            }}
          >
            {/* Top Right Tag */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                right: '24px',
                backgroundColor: 'var(--primary)',
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                textTransform: 'uppercase',
              }}
            >
              MEMBERS
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--foreground-heading)' }}>
                With BuzDealz
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600, marginTop: '4px' }}>
                Exclusive member pricing
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Verified & handpicked deals',
                'Live deals, always',
                'Premium brands. One membership. Infinite savings.',
                'Save more, every time',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--sage-bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={14} color="var(--sage)" strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--foreground)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .vs-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
