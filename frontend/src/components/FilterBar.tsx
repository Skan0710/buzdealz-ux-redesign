import React from 'react';
import { Search, X, ArrowUpDown, Percent } from 'lucide-react';
import { BRANDS } from '../data/mockData';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  minDiscount: number;
  setMinDiscount: (disc: number) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  totalResults: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  minDiscount,
  setMinDiscount,
  sortBy,
  setSortBy,
  totalResults,
}) => {
  const categories = ['All', 'Men', 'Women', 'Beauty', 'Footwear', 'Accessories'];
  const discountOptions = [
    { label: 'Any discount', value: 0 },
    { label: '30%+ Off', value: 30 },
    { label: '40%+ Off', value: 40 },
    { label: '50%+ Off', value: 50 },
  ];

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'All' ||
    selectedBrand !== 'All' ||
    minDiscount > 0;

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setMinDiscount(0);
    setSortBy('featured');
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        padding: '20px',
        boxShadow: 'var(--shadow-sm)',
        marginBottom: '28px',
      }}
    >
      {/* Top Search & Sort Row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '14px',
          marginBottom: '18px',
        }}
      >
        {/* Search Input matching BuzDealz search bar */}
        <div
          style={{
            position: 'relative',
            flex: '1 1 280px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '14px',
              color: 'var(--muted-foreground)',
              pointerEvents: 'none',
            }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search brands, deals, sneakers, shirts, skincare..."
            style={{
              width: '100%',
              padding: '11px 40px 11px 42px',
              borderRadius: 'var(--radius-pill)',
              border: '1.5px solid var(--border)',
              backgroundColor: 'var(--surface)',
              color: 'var(--foreground)',
              fontSize: '0.92rem',
              outline: 'none',
              transition: 'border-color 0.15s ease',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '12px',
                color: 'var(--muted-foreground)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ArrowUpDown
              size={15}
              style={{
                position: 'absolute',
                left: '12px',
                color: 'var(--muted-foreground)',
                pointerEvents: 'none',
              }}
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '10px 14px 10px 34px',
                borderRadius: 'var(--radius-pill)',
                border: '1.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
                color: 'var(--foreground)',
                fontSize: '0.88rem',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="featured">Featured Deals</option>
              <option value="savings-high">Highest Savings (₹)</option>
              <option value="discount-high">Biggest Discount (%)</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Chips Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '8px',
          marginBottom: '12px',
          scrollbarWidth: 'none',
        }}
      >
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--muted-foreground)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginRight: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          Category:
        </span>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.84rem',
                fontWeight: isActive ? 700 : 500,
                backgroundColor: isActive ? 'var(--primary)' : 'var(--muted)',
                color: isActive ? '#ffffff' : 'var(--foreground)',
                border: '1px solid',
                borderColor: isActive ? 'var(--primary)' : 'transparent',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Brands Filter Pill Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '8px',
          marginBottom: '12px',
          scrollbarWidth: 'none',
        }}
      >
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--muted-foreground)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginRight: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          Brand:
        </span>
        <button
          onClick={() => setSelectedBrand('All')}
          style={{
            padding: '5px 12px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.8rem',
            fontWeight: selectedBrand === 'All' ? 700 : 500,
            backgroundColor: selectedBrand === 'All' ? 'var(--foreground-heading)' : 'var(--surface)',
            color: selectedBrand === 'All' ? '#ffffff' : 'var(--foreground)',
            border: '1px solid var(--border)',
            whiteSpace: 'nowrap',
          }}
        >
          All Brands
        </button>
        {BRANDS.map((b) => {
          const isActive = selectedBrand === b.name;
          return (
            <button
              key={b.id}
              onClick={() => setSelectedBrand(b.name)}
              style={{
                padding: '5px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.8rem',
                fontWeight: isActive ? 700 : 500,
                backgroundColor: isActive ? 'var(--foreground-heading)' : 'var(--surface)',
                color: isActive ? '#ffffff' : 'var(--foreground)',
                border: '1px solid var(--border)',
                whiteSpace: 'nowrap',
              }}
            >
              {b.name}
            </button>
          );
        })}
      </div>

      {/* Discount Threshold Chips */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '4px',
          scrollbarWidth: 'none',
        }}
      >
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--muted-foreground)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginRight: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            whiteSpace: 'nowrap',
          }}
        >
          <Percent size={12} /> Discount:
        </span>
        {discountOptions.map((opt) => {
          const isActive = minDiscount === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => setMinDiscount(opt.value)}
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.78rem',
                fontWeight: isActive ? 700 : 500,
                backgroundColor: isActive ? 'var(--sage)' : 'var(--muted)',
                color: isActive ? '#ffffff' : 'var(--foreground)',
                border: '1px solid',
                borderColor: isActive ? 'var(--sage)' : 'transparent',
                whiteSpace: 'nowrap',
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Bottom Summary & Active Filters */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          marginTop: '16px',
          paddingTop: '14px',
          borderTop: '1px solid var(--border-light)',
          fontSize: '0.85rem',
        }}
      >
        <div style={{ color: 'var(--muted-foreground)' }}>
          Showing <strong style={{ color: 'var(--foreground)' }}>{totalResults}</strong> verified deals
        </div>

        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            style={{
              color: 'var(--primary)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <X size={14} />
            <span>Reset all filters</span>
          </button>
        )}
      </div>
    </div>
  );
};
