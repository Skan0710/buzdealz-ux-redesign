import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { BRANDS } from '../data/mockData';
import type { Brand } from '../data/mockData';

interface BrandsShowcaseProps {
  onSelectBrand: (brand: Brand) => void;
  onViewAllBrands: () => void;
}

export const BrandsShowcase: React.FC<BrandsShowcaseProps> = ({
  onSelectBrand,
  onViewAllBrands,
}) => {
  return (
    <section style={{ padding: '48px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h3
            style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.18em',
              color: 'var(--muted-foreground)',
              textTransform: 'uppercase',
            }}
          >
            TRUSTED BY 300+ PREMIUM BRANDS
          </h3>
        </div>

        {/* 10-Brand Grid matching BuzDealz Live Site Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '14px',
          }}
        >
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand)}
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
                minHeight: '100px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(214, 51, 108, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: 'var(--foreground-heading)',
                  fontFamily: brand.name === 'Libas' ? 'var(--font-serif)' : 'var(--font-sans)',
                  textTransform: ['JACK & JONES', 'PALMONAS', 'GIVA'].includes(brand.name.toUpperCase())
                    ? 'uppercase'
                    : 'none',
                }}
              >
                {brand.name}
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  marginTop: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Tag size={10} />
                {brand.maxDiscount}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button
            onClick={onViewAllBrands}
            style={{
              fontSize: '0.92rem',
              fontWeight: 700,
              color: 'var(--primary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: 'var(--radius-pill)',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span>View all brands</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};
