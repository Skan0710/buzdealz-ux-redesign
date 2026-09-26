import React, { useState } from 'react';
import { Calculator, Crown, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

interface SavingsCalculatorProps {
  onUnlockMember: () => void;
}

type CategoryKey = 'all' | 'fashion' | 'footwear' | 'beauty' | 'accessories';

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onUnlockMember }) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(20000);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');

  // Realistic discount rates derived from partner brands
  const categoryRates: Record<CategoryKey, { label: string; rate: number }> = {
    all: { label: 'All Categories (Mixed Cart)', rate: 0.19 },
    fashion: { label: 'Fashion & Apparel', rate: 0.22 },
    footwear: { label: 'Footwear & Sneakers', rate: 0.25 },
    beauty: { label: 'Beauty & Skincare', rate: 0.18 },
    accessories: { label: 'Jewelry & Accessories', rate: 0.21 },
  };

  const currentRate = categoryRates[selectedCategory].rate;
  const estimatedMonthlySavings = Math.round(monthlySpend * currentRate);
  const potentialAnnualSavings = estimatedMonthlySavings * 12;
  const annualMembershipCost = 999;
  const netAnnualBenefit = potentialAnnualSavings - annualMembershipCost;
  const roiMultiplier = Math.round(potentialAnnualSavings / annualMembershipCost);

  return (
    <section id="calculator" style={{ padding: '64px 0 80px', backgroundColor: 'var(--cream)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#fff0f5',
              border: '1px solid rgba(214, 51, 108, 0.3)',
              color: 'var(--primary)',
              padding: '6px 16px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            <Calculator size={14} />
            <span>MEMBERSHIP VALUE CALCULATOR</span>
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
            Is BuzDealz Membership Worth It?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--muted-foreground)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Calculate your estimated savings based on your monthly shopping habits across 300+ brand partners.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div
          style={{
            maxWidth: '1020px',
            margin: '0 auto',
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '28px',
            padding: 'clamp(24px, 4vw, 40px)',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center',
          }}
        >
          {/* Left: Input Controls */}
          <div>
            {/* Category selection chips */}
            <div style={{ marginBottom: '24px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  marginBottom: '10px',
                }}
              >
                Primary Shopping Category:
              </label>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {(Object.keys(categoryRates) as CategoryKey[]).map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.82rem',
                        fontWeight: isActive ? 700 : 500,
                        backgroundColor: isActive ? 'var(--primary)' : 'var(--muted)',
                        color: isActive ? '#ffffff' : 'var(--foreground)',
                        border: '1px solid',
                        borderColor: isActive ? 'var(--primary)' : 'transparent',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {categoryRates[cat].label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Monthly spend slider */}
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                }}
              >
                <label
                  htmlFor="monthly-spend-slider"
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--foreground)',
                  }}
                >
                  Monthly Shopping Spend:
                </label>
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  ₹{monthlySpend.toLocaleString('en-IN')}
                </span>
              </div>

              <input
                id="monthly-spend-slider"
                type="range"
                min="3000"
                max="60000"
                step="1000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--primary)',
                  cursor: 'pointer',
                  height: '6px',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: 'var(--muted-foreground)',
                  marginTop: '8px',
                }}
              >
                <span>₹3,000</span>
                <span>₹20,000 (Avg shopper)</span>
                <span>₹60,000+</span>
              </div>
            </div>

            {/* Shopping habits quick select buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { label: '₹10K / mo', value: 10000 },
                { label: '₹20K / mo', value: 20000 },
                { label: '₹35K / mo', value: 35000 },
                { label: '₹50K / mo', value: 50000 },
              ].map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setMonthlySpend(preset.value)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    backgroundColor: monthlySpend === preset.value ? 'var(--primary-light)' : 'var(--muted)',
                    color: monthlySpend === preset.value ? 'var(--primary)' : 'var(--muted-foreground)',
                    border: '1px solid',
                    borderColor: monthlySpend === preset.value ? 'var(--primary)' : 'var(--border)',
                  }}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Trust disclaimer */}
            <div
              style={{
                marginTop: '22px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                fontSize: '0.78rem',
                color: 'var(--muted-foreground)',
                lineHeight: 1.45,
              }}
            >
              <AlertCircle size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>
                *Calculated numbers are realistic estimates based on member average savings of ~19% across partner brand
                stores. Actual savings depend on specific offers and order values.
              </span>
            </div>
          </div>

          {/* Right: Results Card with High-Impact Contrast */}
          <div
            style={{
              backgroundColor: '#15101a',
              borderRadius: '24px',
              padding: '32px 28px',
              color: '#ffffff',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.22)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top ROI Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(35, 178, 127, 0.18)',
                color: 'var(--sage)',
                border: '1px solid rgba(35, 178, 127, 0.4)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.78rem',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              <TrendingUp size={13} />
              <span>{roiMultiplier}x Annual Return on Membership</span>
            </div>

            {/* Calculations Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.92rem', color: '#9ca3af' }}>Monthly shopping:</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                  ₹{monthlySpend.toLocaleString('en-IN')}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.92rem', color: '#9ca3af' }}>Estimated monthly savings:</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sage)' }}>
                  ₹{estimatedMonthlySavings.toLocaleString('en-IN')}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.92rem', color: '#9ca3af' }}>Membership:</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f2c572' }}>
                  ₹{annualMembershipCost}/year
                </span>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.12)', margin: '4px 0' }} />

              <div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Potential annual savings:
                </div>
                <div
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    lineHeight: 1.1,
                    marginTop: '4px',
                  }}
                >
                  ₹{potentialAnnualSavings.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#d1d5db', marginTop: '4px' }}>
                  Net benefit: <strong style={{ color: '#fff' }}>₹{netAnnualBenefit.toLocaleString('en-IN')}</strong> in your pocket
                </div>
              </div>
            </div>

            {/* Break-even Reassurance */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.84rem',
                color: '#f3f4f6',
                marginBottom: '20px',
              }}
            >
              <CheckCircle2 size={16} color="var(--sage)" style={{ flexShrink: 0 }} />
              <span>
                <strong>Pays for itself</strong> on your very 1st purchase of ₹5,200+
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={onUnlockMember}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '1rem',
                borderRadius: '14px',
              }}
            >
              <span>Unlock Membership — ₹999/yr</span>
              <Crown size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
