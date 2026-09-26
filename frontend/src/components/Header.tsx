import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Sun, Menu, X, Heart, ShieldCheck, ArrowRight, User } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedDealsCount: number;
  onOpenLoginModal: () => void;
  onOpenIntentDiscovery?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  savedDealsCount,
  onOpenLoginModal,
  onOpenIntentDiscovery
}) => {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('buzdealz-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('buzdealz-theme', 'light');
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'deals', label: 'Browse Deals' },
    { id: 'how-it-works', label: 'How it works' },
    { id: 'calculator', label: 'Savings Calculator' },
    { id: 'membership', label: 'Membership' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        backgroundColor: isScrolled
          ? 'var(--surface)'
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        transition: 'all 0.2s ease',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Left: BuzDealz Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #d6336c 0%, #8b1e47 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 4px 12px rgba(214, 51, 108, 0.3)',
            }}
          >
            <span
              style={{
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '22px',
                fontFamily: 'var(--font-sans)',
                lineHeight: 1,
                marginLeft: '-1px',
              }}
            >
              B
            </span>
            <Sparkles
              size={14}
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                color: '#f2c572',
                fill: '#f2c572',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--foreground-heading)',
                fontFamily: 'var(--font-sans)',
                display: 'flex',
                alignItems: 'center',
                gap: '1px',
              }}
            >
              Buz<span style={{ color: 'var(--primary)' }}>Dealz</span>
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                fontSize: '0.92rem',
                fontWeight: activeTab === link.id ? 700 : 500,
                color: activeTab === link.id ? 'var(--primary)' : 'var(--foreground)',
                position: 'relative',
                padding: '6px 2px',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== link.id) e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                if (activeTab !== link.id) e.currentTarget.style.color = 'var(--foreground)';
              }}
            >
              {link.label}
              {activeTab === link.id && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    borderRadius: '2px',
                    backgroundColor: 'var(--primary)',
                  }}
                />
              )}
            </button>
          ))}

          {onOpenIntentDiscovery && (
            <button
              onClick={onOpenIntentDiscovery}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(214, 51, 108, 0.08)',
                color: 'var(--primary)',
                border: '1px solid rgba(214, 51, 108, 0.25)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.84rem',
                fontWeight: 600,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(214, 51, 108, 0.08)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
            >
              <Sparkles size={13} />
              AI Deal Finder
            </button>
          )}
        </nav>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--muted-foreground)',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--surface)',
              transition: 'all 0.15s ease',
            }}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Wishlist badge */}
          <button
            onClick={() => handleNavClick('deals')}
            title="Saved Deals"
            style={{
              position: 'relative',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--muted-foreground)',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--surface)',
            }}
          >
            <Heart size={17} />
            {savedDealsCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  backgroundColor: 'var(--primary)',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 700,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {savedDealsCount}
              </span>
            )}
          </button>

          {/* Login button */}
          <button
            onClick={onOpenLoginModal}
            className="btn-primary"
            style={{
              padding: '9px 20px',
              fontSize: '0.9rem',
            }}
          >
            <User size={15} />
            <span>Login</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
            }}
            className="mobile-hamburger"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
          className="mobile-drawer"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: activeTab === link.id ? 700 : 500,
                color: activeTab === link.id ? 'var(--primary)' : 'var(--foreground)',
                backgroundColor: activeTab === link.id ? 'var(--primary-light)' : 'transparent',
                textAlign: 'left',
              }}
            >
              <span>{link.label}</span>
              <ArrowRight size={16} style={{ opacity: 0.6 }} />
            </button>
          ))}

          {onOpenIntentDiscovery && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIntentDiscovery();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 14px',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#fff',
                background: 'linear-gradient(135deg, #d6336c 0%, #a61e4d 100%)',
                marginTop: '8px',
              }}
            >
              <Sparkles size={18} />
              <span>AI Deal Finder</span>
            </button>
          )}

          <div
            style={{
              paddingTop: '16px',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: 'var(--muted-foreground)',
              fontSize: '0.85rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="var(--sage)" />
              <span>300+ Verified Brand Deals</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
