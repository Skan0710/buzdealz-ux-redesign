import React, { useState, useMemo } from 'react';
import {
  Search,
  Sparkles,
  Heart,
  Tag,
  Flame,
  Bell,
  X,
} from 'lucide-react';
import type { Deal, Brand } from '../data/mockData';
import { DealCard } from './DealCard';

interface MobilePostLoginHomeProps {
  userName: string;
  deals: Deal[];
  brands: Brand[];
  savedDeals: string[];
  onToggleSave: (id: string) => void;
  onSelectDeal: (deal: Deal) => void;
  onSelectBrand: (brand: Brand) => void;
  onOpenIntentDiscovery?: () => void;
}

export const MobilePostLoginHome: React.FC<MobilePostLoginHomeProps> = ({
  userName,
  deals,
  brands,
  savedDeals,
  onToggleSave,
  onSelectDeal,
  onSelectBrand,
  onOpenIntentDiscovery,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Time-aware greeting
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  }, []);

  const categories = [
    { id: 'All', label: 'All Deals' },
    { id: 'Fashion', label: 'Fashion' },
    { id: 'Beauty', label: 'Beauty' },
    { id: 'Footwear', label: 'Footwear' },
    { id: 'Accessories', label: 'Accessories' },
  ];

  // Filter deals based on search and category
  const filteredDeals = useMemo(() => {
    let result = deals;

    if (selectedCategory !== 'All') {
      if (selectedCategory === 'Fashion') {
        result = result.filter((d) => d.category === 'Men' || d.category === 'Women');
      } else {
        result = result.filter((d) => d.category === selectedCategory);
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.brand.toLowerCase().includes(q) ||
          d.intent.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [deals, selectedCategory, searchQuery]);

  // Primary: "Deals For You" (First 4-6 personalized recommendations)
  const dealsForYou = useMemo(() => {
    return filteredDeals.slice(0, 4);
  }, [filteredDeals]);

  // Secondary: "Trending Now" carousel (deals with ending soon or high redemption)
  const trendingDeals = useMemo(() => {
    return deals.filter((d) => d.isEndingSoon || d.totalRedemptions > 400).slice(0, 5);
  }, [deals]);

  // Saved deals objects
  const savedDealsList = useMemo(() => {
    return deals.filter((d) => savedDeals.includes(d.id));
  }, [deals, savedDeals]);

  // Helper for single contextual badge
  const getContextualBadge = (deal: Deal) => {
    if (deal.isEndingSoon) {
      return { text: 'Ending Soon', color: '#be123c', bg: '#ffe4e6' };
    }
    if (deal.totalRedemptions > 450) {
      return { text: 'Popular', color: '#d97706', bg: '#fef3c7' };
    }
    if (deal.discountPercent >= 40) {
      return { text: 'Member Exclusive', color: 'var(--primary)', bg: 'var(--primary-light)' };
    }
    return { text: 'Verified', color: 'var(--sage-text)', bg: 'var(--sage-bg)' };
  };

  return (
    <div className="mobile-postlogin-container pb-mobile-nav" style={{ paddingBottom: '80px' }}>
      {/* 1. PERSONALIZED HEADER */}
      <section
        style={{
          padding: '20px 16px 16px',
          background: 'linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  backgroundColor: 'var(--primary-light)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid rgba(214, 51, 108, 0.2)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                ★ Club Member
              </span>
            </div>
            <h1
              style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--foreground-heading)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {greeting}, {userName}
            </h1>
            <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', marginTop: '2px' }}>
              Deals picked for you today
            </p>
          </div>

          {/* Member notification / perk indicator */}
          <div
            style={{
              position: 'relative',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--foreground)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Bell size={20} />
            <span
              style={{
                position: 'absolute',
                top: '9px',
                right: '10px',
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--primary)',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>

        {/* 2. PROMINENT SEARCH BAR */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--card)',
              border: '1.5px solid var(--border)',
              borderRadius: '16px',
              padding: '4px 12px 4px 14px',
              boxShadow: 'var(--shadow-sm)',
              minHeight: '48px',
            }}
          >
            <Search size={18} color="var(--muted-foreground)" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search brands, products or deals"
              aria-label="Search deals"
              style={{
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                fontSize: '0.92rem',
                color: 'var(--foreground)',
                width: '100%',
                fontWeight: 500,
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="tap-feedback"
                style={{
                  padding: '4px',
                  color: 'var(--muted-foreground)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <X size={16} />
              </button>
            )}

            {/* AI Deal Finder Quick Trigger */}
            {onOpenIntentDiscovery && (
              <button
                onClick={onOpenIntentDiscovery}
                aria-label="AI Deal Finder"
                className="tap-feedback"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  padding: '6px 10px',
                  borderRadius: '10px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  border: '1px solid rgba(214, 51, 108, 0.25)',
                }}
              >
                <Sparkles size={13} />
                <span>AI Finder</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. CATEGORY NAVIGATION CHIPS */}
      <section style={{ padding: '14px 0 8px' }}>
        <div
          className="scroll-snap-x"
          style={{
            paddingLeft: '16px',
            paddingRight: '16px',
            gap: '8px',
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className="scroll-snap-item tap-feedback"
                style={{
                  minHeight: '44px',
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'var(--primary)' : 'var(--card)',
                  color: isActive ? '#ffffff' : 'var(--foreground)',
                  border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                  boxShadow: isActive ? '0 4px 12px rgba(214, 51, 108, 0.28)' : 'var(--shadow-sm)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. DEALS FOR YOU (Primary Content Section) */}
      <section style={{ padding: '16px 16px 8px' }}>
        <div style={{ marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h2
              style={{
                fontSize: 'var(--font-section-heading)',
                fontWeight: 800,
                color: 'var(--foreground-heading)',
                lineHeight: 1.2,
              }}
            >
              Deals For You
            </h2>
            <span
              style={{
                backgroundColor: 'var(--sage-bg)',
                color: 'var(--sage-text)',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: 'var(--radius-pill)',
              }}
            >
              Member Verified
            </span>
          </div>
          <p style={{ fontSize: 'var(--font-supporting)', color: 'var(--muted-foreground)', marginTop: '2px' }}>
            Based on your interests and recent shopping trends
          </p>
        </div>

        {dealsForYou.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {dealsForYou.map((deal) => (
              <DealCard
                key={deal.id}
                deal={deal}
                isSaved={savedDeals.includes(deal.id)}
                onToggleSave={onToggleSave}
                onSelectDeal={onSelectDeal}
              />
            ))}
          </div>
        ) : (
          /* Sensible Empty State */
          <div
            style={{
              padding: '32px 20px',
              backgroundColor: 'var(--card)',
              borderRadius: '18px',
              border: '1px dashed var(--border)',
              textAlign: 'center',
            }}
          >
            <Tag size={28} color="var(--muted-foreground)" style={{ margin: '0 auto 10px' }} />
            <p style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--foreground)' }}>
              No deals found for "{searchQuery}"
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', marginTop: '4px' }}>
              Try searching for a different brand, category or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="btn-secondary tap-feedback"
              style={{ marginTop: '14px', minHeight: '44px', padding: '8px 18px', fontSize: '0.85rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 5. TRENDING NOW (Horizontal Carousel with Single Contextual Badges) */}
      <section style={{ padding: '24px 0 16px' }}>
        <div
          style={{
            padding: '0 16px',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ef4444',
              }}
            >
              <Flame size={16} />
            </div>
            <div>
              <h2
                style={{
                  fontSize: 'var(--font-section-heading)',
                  fontWeight: 700,
                  color: 'var(--foreground-heading)',
                  lineHeight: 1.25,
                }}
              >
                Trending Now
              </h2>
              <p style={{ fontSize: 'var(--font-supporting)', color: 'var(--muted-foreground)' }}>
                High-demand offers ending soon
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="scroll-snap-x"
          style={{
            paddingLeft: '16px',
            paddingRight: '16px',
            gap: '14px',
          }}
        >
          {trendingDeals.map((deal) => {
            const badge = getContextualBadge(deal);
            const isSaved = savedDeals.includes(deal.id);
            return (
              <div
                key={deal.id}
                onClick={() => onSelectDeal(deal)}
                className="scroll-snap-item tap-feedback"
                style={{
                  width: '240px',
                  backgroundColor: 'var(--card)',
                  borderRadius: '18px',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image & Single Contextual Badge */}
                <div style={{ position: 'relative', height: '140px', overflow: 'hidden' }}>
                  <img
                    src={deal.image}
                    alt={deal.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />

                  {/* Single Clean Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      backgroundColor: badge.bg,
                      color: badge.color,
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    {badge.text}
                  </span>

                  {/* Save toggle (44x44px touch target) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(deal.id);
                    }}
                    aria-label={isSaved ? 'Remove from saved' : 'Save deal'}
                    className="tap-feedback"
                    style={{
                      position: 'absolute',
                      top: '6px',
                      right: '6px',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isSaved ? 'var(--primary)' : '#64748b',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                    }}
                  >
                    <Heart size={16} fill={isSaved ? 'var(--primary)' : 'none'} />
                  </button>
                </div>

                {/* Content */}
                <div style={{ padding: '12px 14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--muted-foreground)' }}>
                    {deal.brand}
                  </span>
                  <h4
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--foreground-heading)',
                      lineHeight: 1.3,
                      marginTop: '2px',
                      marginBottom: '8px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: '2.4em',
                    }}
                  >
                    {deal.title}
                  </h4>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: 'auto' }}>
                    <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--foreground-heading)' }}>
                      ₹{deal.buzdealzPrice.toLocaleString('en-IN')}
                    </span>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--muted-foreground)',
                        textDecoration: 'line-through',
                      }}
                    >
                      ₹{deal.brandPrice.toLocaleString('en-IN')}
                    </span>
                    <span
                      style={{
                        marginLeft: 'auto',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        color: 'var(--sage-text)',
                      }}
                    >
                      {deal.discountPercent}% OFF
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. EXPLORE BRANDS */}
      <section style={{ padding: '16px 0 20px' }}>
        <div
          style={{
            padding: '0 16px',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 'var(--font-section-heading)',
                fontWeight: 700,
                color: 'var(--foreground-heading)',
              }}
            >
              Explore Brands
            </h2>
            <p style={{ fontSize: 'var(--font-supporting)', color: 'var(--muted-foreground)' }}>
              Official brand partner discounts
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('All');
            }}
            className="tap-feedback"
            style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--primary)',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            View All
          </button>
        </div>

        <div
          className="scroll-snap-x"
          style={{
            paddingLeft: '16px',
            paddingRight: '16px',
            gap: '10px',
          }}
        >
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => onSelectBrand(b)}
              className="scroll-snap-item tap-feedback"
              style={{
                padding: '12px 14px',
                minWidth: '110px',
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '8px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src={b.logo}
                  alt={b.name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--foreground-heading)',
                  whiteSpace: 'nowrap',
                  maxWidth: '85px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {b.name}
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginTop: '2px',
                }}
              >
                {b.maxDiscount}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 7. RECENTLY VIEWED / SAVED (Only displayed if user actually has saved data) */}
      {savedDealsList.length > 0 && (
        <section style={{ padding: '16px 16px 24px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                }}
              >
                <Heart size={14} fill="var(--primary)" />
              </div>
              <h2
                style={{
                  fontSize: 'var(--font-section-heading)',
                  fontWeight: 700,
                  color: 'var(--foreground-heading)',
                }}
              >
                Saved Deals
              </h2>
              <span
                style={{
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                {savedDealsList.length}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {savedDealsList.map((deal) => (
              <div
                key={deal.id}
                onClick={() => onSelectDeal(deal)}
                className="tap-feedback"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  backgroundColor: 'var(--card)',
                  borderRadius: '14px',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={deal.image}
                  alt={deal.title}
                  loading="lazy"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--muted-foreground)' }}>
                    {deal.brand}
                  </span>
                  <h4
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: 'var(--foreground-heading)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {deal.title}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '2px' }}>
                    <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--primary)' }}>
                      ₹{deal.buzdealzPrice.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--muted-foreground)', textDecoration: 'line-through' }}>
                      ₹{deal.brandPrice.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--sage-text)', marginLeft: 'auto' }}>
                      Save ₹{deal.savings.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSave(deal.id);
                  }}
                  aria-label="Remove saved deal"
                  className="tap-feedback"
                  style={{
                    padding: '8px',
                    color: 'var(--primary)',
                    minHeight: '44px',
                    minWidth: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Heart size={16} fill="var(--primary)" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
