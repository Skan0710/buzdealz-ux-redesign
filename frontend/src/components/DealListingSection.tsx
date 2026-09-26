import React, { useState, useMemo } from 'react';
import { PackageOpen } from 'lucide-react';
import { FilterBar } from './FilterBar';
import { DealCard } from './DealCard';
import { DEALS } from '../data/mockData';
import type { Deal } from '../data/mockData';

interface DealListingSectionProps {
  onSelectDeal: (deal: Deal) => void;
  savedDeals: string[];
  onToggleSave: (dealId: string) => void;
  initialBrand?: string;
  initialCategory?: string;
}

export const DealListingSection: React.FC<DealListingSectionProps> = ({
  onSelectDeal,
  savedDeals,
  onToggleSave,
  initialBrand = 'All',
  initialCategory = 'All',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [minDiscount, setMinDiscount] = useState(0);
  const [sortBy, setSortBy] = useState('featured');

  // Filter & sort logic
  const filteredDeals = useMemo(() => {
    return DEALS.filter((deal) => {
      // Category filter
      if (selectedCategory !== 'All' && deal.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'All' && deal.brand !== selectedBrand) {
        return false;
      }
      // Min discount
      if (minDiscount > 0 && deal.discountPercent < minDiscount) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = deal.title.toLowerCase().includes(q);
        const matchesBrand = deal.brand.toLowerCase().includes(q);
        const matchesCategory = deal.category.toLowerCase().includes(q);
        const matchesIntent = deal.intent.toLowerCase().includes(q);
        if (!matchesTitle && !matchesBrand && !matchesCategory && !matchesIntent) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'savings-high') return b.savings - a.savings;
      if (sortBy === 'discount-high') return b.discountPercent - a.discountPercent;
      if (sortBy === 'price-low') return a.buzdealzPrice - b.buzdealzPrice;
      if (sortBy === 'price-high') return b.buzdealzPrice - a.buzdealzPrice;
      return 0; // featured default
    });
  }, [searchQuery, selectedCategory, selectedBrand, minDiscount, sortBy]);

  return (
    <section id="deals" style={{ padding: '64px 0 80px', backgroundColor: 'var(--background)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
            LIVE MEMBER CATALOG
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--foreground-heading)',
              marginBottom: '10px',
            }}
          >
            Explore Verified Brand Deals
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--muted-foreground)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Real-time verified discounts, stacked partner codes, and direct brand redemption handoffs.
          </p>
        </div>

        {/* Filter Toolbar */}
        <FilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          minDiscount={minDiscount}
          setMinDiscount={setMinDiscount}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalResults={filteredDeals.length}
        />

        {/* Deals Grid */}
        {filteredDeals.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {filteredDeals.map((deal) => (
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
          /* Empty Search State */
          <div
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '60px 20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--muted-foreground)',
                marginBottom: '16px',
              }}
            >
              <PackageOpen size={32} />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--foreground-heading)', marginBottom: '8px' }}>
              No deals match your search
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--muted-foreground)', marginBottom: '20px' }}>
              Try searching for something else like "Campus", "Rare Rabbit", or "Serum".
            </p>

            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedBrand('All');
                setMinDiscount(0);
              }}
              className="btn-secondary"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
