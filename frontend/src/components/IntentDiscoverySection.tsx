import React, { useState } from 'react';
import {
  Compass,
  Briefcase,
  HeartHandshake,
  Palmtree,
  Footprints,
  Sparkles,
  Gift,
  PartyPopper,
  Shirt,
  TrendingDown,
} from 'lucide-react';
import { DEALS } from '../data/mockData';
import type { Deal } from '../data/mockData';
import { DealCard } from './DealCard';

interface IntentDiscoverySectionProps {
  onSelectDeal: (deal: Deal) => void;
  savedDeals: string[];
  onToggleSave: (dealId: string) => void;
}

export const IntentDiscoverySection: React.FC<IntentDiscoverySectionProps> = ({
  onSelectDeal,
  savedDeals,
  onToggleSave,
}) => {
  const occasions = [
    { id: 'Workwear', label: 'Workwear', icon: Briefcase },
    { id: 'Wedding', label: 'Wedding', icon: HeartHandshake },
    { id: 'Vacation', label: 'Vacation', icon: Palmtree },
    { id: 'Sneakers', label: 'Sneakers', icon: Footprints },
    { id: 'Skincare', label: 'Skincare', icon: Sparkles },
    { id: 'Gifts', label: 'Gifts', icon: Gift },
    { id: 'Party Night', label: 'Party Night', icon: PartyPopper },
    { id: 'Casual', label: 'Casual', icon: Shirt },
  ];

  const budgets = ['Under ₹2K', '₹2K–₹5K', '₹5K–₹10K', '₹10K+'];

  const [selectedOccasion, setSelectedOccasion] = useState<string>('Sneakers');
  const [selectedBudget, setSelectedBudget] = useState<string>('₹5K–₹10K');
  const [hasSearched, setHasSearched] = useState(false);
  const [matchedDeals, setMatchedDeals] = useState<Deal[]>([]);

  const handleFindDeals = () => {
    const matched = DEALS.filter((d) => {
      const matchOccasion = d.intent === selectedOccasion;
      const matchBudget = d.budgetBracket === selectedBudget;
      return matchOccasion || matchBudget;
    });

    setMatchedDeals(matched.length > 0 ? matched : DEALS.slice(0, 3));
    setHasSearched(true);
  };

  const totalMatchedSavings = matchedDeals.reduce((sum, d) => sum + d.savings, 0);

  return (
    <section
      id="intent-discovery"
      style={{
        padding: '64px 0 80px',
        backgroundColor: 'var(--background)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '38px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#fff0f5',
              border: '1px solid rgba(214, 51, 108, 0.3)',
              color: 'var(--primary)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            <Compass size={14} />
            <span>INTENT-ORIENTED DISCOVERY</span>
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
            Find Deals by Occasion & Budget
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--muted-foreground)', maxWidth: '540px', margin: '0 auto' }}>
            Don't have a brand in mind? Tell us what you're shopping for and discover handpicked member discounts.
          </p>
        </div>

        {/* Intent Card Form */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            backgroundColor: 'var(--card)',
            border: '1.5px solid var(--border)',
            borderRadius: '26px',
            padding: 'clamp(24px, 4vw, 36px)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {/* Step 1: What are you shopping for? */}
          <div style={{ marginBottom: '28px' }}>
            <div
              style={{
                fontSize: '1rem',
                fontWeight: 800,
                color: 'var(--foreground-heading)',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  color: '#fff',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                }}
              >
                1
              </span>
              <span>What are you shopping for?</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '10px',
              }}
            >
              {occasions.map((occ) => {
                const Icon = occ.icon;
                const isSelected = selectedOccasion === occ.id;
                return (
                  <button
                    key={occ.id}
                    onClick={() => setSelectedOccasion(occ.id)}
                    style={{
                      padding: '14px 12px',
                      borderRadius: '16px',
                      border: '1.5px solid',
                      borderColor: isSelected ? 'var(--primary)' : 'var(--border)',
                      backgroundColor: isSelected ? '#fff0f5' : 'var(--surface)',
                      color: isSelected ? 'var(--primary)' : 'var(--foreground)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: '0.9rem',
                      transition: 'all 0.15s ease',
                      boxShadow: isSelected ? '0 4px 14px rgba(214, 51, 108, 0.15)' : 'none',
                    }}
                  >
                    <Icon size={20} color={isSelected ? 'var(--primary)' : 'var(--muted-foreground)'} />
                    <span>{occ.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: What's your budget? */}
          <div style={{ marginBottom: '32px' }}>
            <div
              style={{
                fontSize: '1rem',
                fontWeight: 800,
                color: 'var(--foreground-heading)',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  color: '#fff',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                }}
              >
                2
              </span>
              <span>What's your budget?</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
              {budgets.map((b) => {
                const isSelected = selectedBudget === b;
                return (
                  <button
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '14px',
                      border: '1.5px solid',
                      borderColor: isSelected ? 'var(--primary)' : 'var(--border)',
                      backgroundColor: isSelected ? '#fff0f5' : 'var(--surface)',
                      color: isSelected ? 'var(--primary)' : 'var(--foreground)',
                      fontSize: '0.95rem',
                      fontWeight: isSelected ? 800 : 600,
                      textAlign: 'center',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTA: Find My Deals */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleFindDeals}
              className="btn-primary"
              style={{
                padding: '15px 38px',
                fontSize: '1.05rem',
                borderRadius: 'var(--radius-pill)',
                boxShadow: '0 8px 24px rgba(214, 51, 108, 0.35)',
              }}
            >
              <span>Find My Deals</span>
              <Sparkles size={18} />
            </button>
          </div>
        </div>

        {/* Dynamic Matched Deals Output */}
        {hasSearched && (
          <div style={{ marginTop: '48px' }} className="animate-fade-in">
            {/* Matched Summary Banner */}
            <div
              style={{
                backgroundColor: 'var(--cream)',
                border: '1px solid rgba(214, 51, 108, 0.3)',
                borderRadius: '18px',
                padding: '18px 24px',
                marginBottom: '28px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--foreground-heading)' }}>
                  Found {matchedDeals.length} deals for "{selectedOccasion}" in budget "{selectedBudget}"
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted-foreground)', marginTop: '2px' }}>
                  Handpicked brand offers verified in real-time
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--sage-bg)',
                  border: '1px solid rgba(35, 178, 127, 0.35)',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  color: 'var(--sage-text)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <TrendingDown size={16} />
                <span>Total Potential Savings: ₹{totalMatchedSavings.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Matched Deals Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {matchedDeals.map((deal) => (
                <DealCard
                  key={deal.id}
                  deal={deal}
                  isSaved={savedDeals.includes(deal.id)}
                  onToggleSave={onToggleSave}
                  onSelectDeal={onSelectDeal}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
