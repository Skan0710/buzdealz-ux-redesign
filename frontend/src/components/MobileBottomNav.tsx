import React from 'react';
import { Home, Compass, Layers, Heart, User } from 'lucide-react';

export type MobileTab = 'home' | 'discover' | 'categories' | 'saved' | 'profile';

interface MobileBottomNavProps {
  activeTab: MobileTab;
  onTabChange: (tab: MobileTab) => void;
  savedCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onTabChange,
  savedCount,
}) => {
  const tabs = [
    { id: 'home' as MobileTab, label: 'Home', icon: Home },
    { id: 'discover' as MobileTab, label: 'Discover', icon: Compass },
    { id: 'categories' as MobileTab, label: 'Categories', icon: Layers },
    { id: 'saved' as MobileTab, label: 'Saved', icon: Heart, badge: savedCount },
    { id: 'profile' as MobileTab, label: 'Profile', icon: User },
  ];

  return (
    <nav
      aria-label="Mobile navigation"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: 'var(--surface)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 'env(safe-area-inset-bottom, 8px)',
        paddingTop: '6px',
        height: '66px',
      }}
      className="mobile-bottom-nav"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            aria-label={tab.label}
            aria-current={isActive ? 'page' : undefined}
            className="tap-feedback"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              height: '100%',
              minHeight: '48px',
              minWidth: '48px',
              padding: '4px 2px',
              color: isActive ? 'var(--primary)' : 'var(--muted-foreground)',
              position: 'relative',
              transition: 'color 0.15s ease',
              border: 'none',
              background: 'none',
            }}
          >
            {/* Active Pill Indicator */}
            {isActive && (
              <div
                style={{
                  position: 'absolute',
                  top: '-6px',
                  width: '28px',
                  height: '3px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--primary)',
                }}
              />
            )}

            <div style={{ position: 'relative' }}>
              <Icon
                size={21}
                strokeWidth={isActive ? 2.5 : 1.8}
                fill={isActive && tab.id === 'saved' ? 'var(--primary)' : 'none'}
              />

              {/* Badge for Saved items */}
              {tab.badge !== undefined && tab.badge > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-8px',
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 800,
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 4px rgba(214, 51, 108, 0.4)',
                  }}
                >
                  {tab.badge}
                </span>
              )}
            </div>

            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: isActive ? 700 : 500,
                marginTop: '3px',
                letterSpacing: '-0.01em',
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}

      <style>{`
        @media (min-width: 768px) {
          .mobile-bottom-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};
