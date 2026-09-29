import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, TrendingUp } from 'lucide-react';
import type { Deal, Brand } from '../data/mockData';
import { DealCard } from './DealCard';

interface MobilePreLoginHomeProps {
  brands: Brand[];
  deals: Deal[];
  savedDeals: string[];
  onToggleSave: (id: string) => void;
  onSelectDeal: (deal: Deal) => void;
  onSelectBrand: (brand: Brand) => void;
  onExploreDeals: () => void;
  onJoinBuzDealz: () => void;
  onSelectCategory: (cat: string) => void;
}

export const MobilePreLoginHome: React.FC<MobilePreLoginHomeProps> = ({
  brands,
  deals,
  savedDeals,
  onToggleSave,
  onSelectDeal,
  onSelectBrand,
  onExploreDeals,
  onJoinBuzDealz,
  onSelectCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Deals' },
    { id: 'Fashion', label: 'Fashion' },
    { id: 'Beauty', label: 'Beauty' },
    { id: 'Footwear', label: 'Footwear' },
    { id: 'Accessories', label: 'Accessories' },
  ];

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    onSelectCategory(catId);
  };

  // Top trending deals for clean carousel (show first 5 high quality deals)
  const trendingDeals = deals.slice(0, 5);

  const benefits = [
    {
      title: 'Curated Deals',
      desc: 'Handpicked offers verified daily for 100% genuine code validity.',
    },
    {
      title: 'Premium Brands',
      desc: 'Direct partnerships with leading fashion, beauty & lifestyle labels.',
    },
    {
      title: 'Member Benefits',
      desc: 'Unlock exclusive pricing up to 40% lower than open market rates.',
    },
    {
      title: 'Smart Discovery',
      desc: 'Find the right deal fast by intent, category and budget bracket.',
    },
  ];

  return (
    <div className="mobile-prelogin-container" style={{ paddingBottom: '32px' }}>
      {/* 1. HERO SECTION */}
      <section
        style={{
          padding: '24px 16px 20px',
          background: 'linear-gradient(180deg, var(--primary-light) 0%, var(--surface) 100%)',
          borderBottom: '1px solid var(--border)',
          textAlign: 'center',
        }}
      >
        {/* Value Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#ffffff',
            padding: '5px 12px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid rgba(214, 51, 108, 0.2)',
            boxShadow: '0 2px 8px rgba(214, 51, 108, 0.08)',
            marginBottom: '14px',
          }}
        >
          <Sparkles size={13} color="var(--primary)" />
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)' }}>
            India’s Exclusive Deal Club
          </span>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: 'var(--font-hero)',
            fontWeight: 800,
            lineHeight: 1.2,
            color: 'var(--foreground-heading)',
            letterSpacing: '-0.03em',
            marginBottom: '10px',
          }}
        >
          Discover better deals from brands you already love.
        </h1>

        {/* Supporting Text */}
        <p
          style={{
            fontSize: 'var(--font-body)',
            color: 'var(--muted-foreground)',
            lineHeight: 1.45,
            maxWidth: '360px',
            margin: '0 auto 20px',
          }}
        >
          Curated offers, exclusive prices and smarter deal discovery.
        </p>

        {/* Dual CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={onExploreDeals}
            className="btn-primary tap-feedback"
            style={{
              flex: '1 1 140px',
              maxWidth: '175px',
              minHeight: '44px',
              padding: '11px 18px',
              fontSize: '0.92rem',
            }}
          >
            <span>Explore Deals</span>
            <ArrowRight size={15} />
          </button>

          <button
            onClick={onJoinBuzDealz}
            className="btn-secondary tap-feedback"
            style={{
              flex: '1 1 140px',
              maxWidth: '175px',
              minHeight: '44px',
              padding: '11px 18px',
              fontSize: '0.92rem',
            }}
          >
            <span>Join BuzDealz</span>
          </button>
        </div>

        {/* Micro Trust Banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '16px',
            fontSize: '0.76rem',
            color: 'var(--muted-foreground)',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <ShieldCheck size={14} color="var(--sage)" /> 100% Official Codes
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Star size={14} color="var(--gold-text)" /> 4.9★ Member Rated
          </span>
        </div>
      </section>

      {/* 2. POPULAR BRANDS (Horizontally Scrollable) */}
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
          <div>
            <h2
              style={{
                fontSize: 'var(--font-section-heading)',
                fontWeight: 700,
                color: 'var(--foreground-heading)',
                lineHeight: 1.25,
              }}
            >
              Popular Brands
            </h2>
            <p style={{ fontSize: 'var(--font-supporting)', color: 'var(--muted-foreground)' }}>
              Official brand deals with exclusive member savings
            </p>
          </div>
          <button
            onClick={onExploreDeals}
            style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--primary)',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center',
            }}
            className="tap-feedback"
          >
            View all
          </button>
        </div>

        {/* Scrollable Brands Track */}
        <div
          className="scroll-snap-x"
          style={{
            paddingLeft: '16px',
            paddingRight: '16px',
            gap: '10px',
          }}
        >
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onSelectBrand(brand)}
              className="scroll-snap-item tap-feedback"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 14px',
                minWidth: '108px',
                minHeight: '108px',
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '8px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
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
                  maxWidth: '90px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {brand.name}
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  color: 'var(--sage-text)',
                  marginTop: '2px',
                }}
              >
                {brand.dealCount}+ deals
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. TRENDING DEALS (Horizontal Deal Carousel) */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
              }}
            >
              <TrendingUp size={16} />
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
                Trending Deals
              </h2>
              <p style={{ fontSize: 'var(--font-supporting)', color: 'var(--muted-foreground)' }}>
                Top claimed offers by club members right now
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          className="scroll-snap-x"
          style={{
            paddingLeft: '16px',
            paddingRight: '16px',
            gap: '14px',
          }}
        >
          {trendingDeals.map((deal) => (
            <div
              key={deal.id}
              className="scroll-snap-item"
              style={{
                width: '260px',
                maxWidth: '78vw',
              }}
            >
              <DealCard
                deal={deal}
                isSaved={savedDeals.includes(deal.id)}
                onToggleSave={onToggleSave}
                onSelectDeal={onSelectDeal}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. CATEGORIES (Lightweight Category Chips) */}
      <section style={{ padding: '16px 16px 20px' }}>
        <h2
          style={{
            fontSize: 'var(--font-section-heading)',
            fontWeight: 700,
            color: 'var(--foreground-heading)',
            marginBottom: '12px',
          }}
        >
          Shop by Category
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="tap-feedback"
                style={{
                  minHeight: '44px',
                  padding: '9px 18px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'var(--primary)' : 'var(--card)',
                  color: isActive ? '#ffffff' : 'var(--foreground)',
                  border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                  boxShadow: isActive ? '0 4px 12px rgba(214, 51, 108, 0.25)' : 'var(--shadow-sm)',
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

      {/* 5. WHY BUZDEALZ (3–4 Concise Benefits) */}
      <section
        style={{
          margin: '12px 16px 24px',
          padding: '20px 18px',
          backgroundColor: 'var(--card)',
          borderRadius: '20px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <h2
            style={{
              fontSize: 'var(--font-section-heading)',
              fontWeight: 800,
              color: 'var(--foreground-heading)',
              marginBottom: '4px',
            }}
          >
            Why BuzDealz
          </h2>
          <p style={{ fontSize: 'var(--font-supporting)', color: 'var(--muted-foreground)' }}>
            The smarter way to shop premium brands in India
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
          {benefits.map((b) => (
            <div
              key={b.title}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}
            >
              <div
                style={{
                  marginTop: '2px',
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
                <CheckCircle2 size={15} color="var(--sage)" />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    color: 'var(--foreground-heading)',
                    marginBottom: '2px',
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--muted-foreground)',
                    lineHeight: 1.4,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL CTA (Simple Conversion Section) */}
      <section
        style={{
          margin: '0 16px 16px',
          padding: '24px 20px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #6b2846 0%, #3e1226 100%)',
          color: '#ffffff',
          textAlign: 'center',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <h2
          style={{
            fontSize: '1.35rem',
            fontWeight: 800,
            marginBottom: '8px',
            lineHeight: 1.25,
          }}
        >
          Your next great deal is waiting.
        </h2>
        <p
          style={{
            fontSize: '0.88rem',
            opacity: 0.9,
            marginBottom: '18px',
            lineHeight: 1.4,
          }}
        >
          Join 25,000+ members saving an average of ₹14,200 every year.
        </p>

        <button
          onClick={onJoinBuzDealz}
          className="btn-white tap-feedback"
          style={{
            width: '100%',
            maxWidth: '280px',
            minHeight: '44px',
            padding: '12px 24px',
            fontSize: '0.95rem',
            fontWeight: 800,
            margin: '0 auto',
          }}
        >
          <span>Explore BuzDealz</span>
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
};
