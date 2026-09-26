import React from 'react';
import { Sparkles, Zap, Star, Users } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Sparkles,
      value: '300+',
      label: 'Premium Brands',
    },
    {
      icon: Zap,
      value: '₹15,000+',
      label: 'Avg. Savings Every Year',
    },
    {
      icon: Star,
      value: '₹2,500+',
      label: 'Avg. Savings Per Shopping',
    },
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Members',
    },
  ];

  return (
    <section style={{ padding: '24px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            padding: '28px 20px',
            boxShadow: 'var(--shadow-sm)',
            position: 'relative',
          }}
        >
          {/* Central signature decorative pink target circle as seen in BuzDealz UI */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#fff0f5',
              border: '1px solid rgba(214, 51, 108, 0.35)',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
            }}
            className="stats-center-dot"
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
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '20px',
            }}
          >
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '8px 12px',
                    borderRight:
                      idx < stats.length - 1 ? '1px solid var(--border-light)' : 'none',
                  }}
                  className="stats-column"
                >
                  <div
                    style={{
                      color: 'var(--primary)',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComponent size={20} />
                  </div>
                  <div
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)',
                      fontWeight: 800,
                      color: 'var(--foreground-heading)',
                      lineHeight: 1.15,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--muted-foreground)',
                      marginTop: '4px',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stats-center-dot {
            display: flex !important;
          }
        }
        @media (max-width: 767px) {
          .stats-column {
            border-right: none !important;
            border-bottom: 1px solid var(--border-light);
            padding-bottom: 16px;
          }
          .stats-column:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
};
