import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is BuzDealz?',
      a: "BuzDealz is a members-only deals and offers platform that brings you the latest discounts, offers, and promotions from India's leading premium D2C fashion, footwear, beauty, and lifestyle brands.",
    },
    {
      q: 'How does BuzDealz work?',
      a: 'Browse through our curated collection of verified deals, select your preferred brand or product offer, reveal the exclusive member promo code or activated partner link, and complete your purchase directly on the official brand website.',
    },
    {
      q: 'Are the deals genuine?',
      a: 'Yes, 100%. Every single deal on BuzDealz is verified in real-time with brand partners and our team. We do not aggregate unverified random web coupons; every deal is authentic, tested, and actively valid.',
    },
    {
      q: 'Do I make purchases on BuzDealz?',
      a: 'No. BuzDealz is a deals and member savings club. You browse and unlock exclusive deals here, but you will always complete your transaction directly on the brand’s official website, enjoying their official shipping, customer support, and warranty.',
    },
    {
      q: 'Why should I subscribe to BuzDealz?',
      a: 'A single member deal often saves you between ₹1,200 to ₹3,500+ on popular brands like Jack & Jones, Campus, Levi’s, and Rare Rabbit. For an annual membership of just ₹999, the club pays for itself on your very first purchase.',
    },
    {
      q: 'Are subscriptions refundable or cancellable?',
      a: 'We offer an unconditional 7-day money-back guarantee. If you do not save more than your membership fee within your first 7 days, simply write to support for an instant, no-questions-asked refund.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '64px 0', backgroundColor: 'var(--background)' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--foreground-heading)',
            }}
          >
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'border-color 0.15s ease',
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    color: 'var(--foreground-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                  }}
                >
                  <span>{item.q}</span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--primary-light)' : 'var(--muted)',
                      color: isOpen ? 'var(--primary)' : 'var(--muted-foreground)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginLeft: '12px',
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 22px 20px',
                      color: 'var(--muted-foreground)',
                      fontSize: '0.94rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '14px',
                    }}
                    className="animate-fade-in"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
