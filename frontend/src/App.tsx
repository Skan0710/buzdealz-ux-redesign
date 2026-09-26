import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { BrandsShowcase } from './components/BrandsShowcase';
import { HowItWorks } from './components/HowItWorks';
import { FeaturedDealHighlight } from './components/FeaturedDealHighlight';
import { ComparisonSection } from './components/ComparisonSection';
import { MembershipSection } from './components/MembershipSection';
import { MemberPerksGrid } from './components/MemberPerksGrid';
import { WhyAdvantageSection } from './components/WhyAdvantageSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import type { Deal, Brand } from './data/mockData';

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [savedDeals] = useState<string[]>(['campus-north-plus']);
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3200);
  };

  const handleUnlockMember = () => {
    setIsLoginModalOpen(true);
  };

  const handleSuccessLogin = () => {
    showToast('🎉 Welcome to BuzDealz Club! Exclusive member prices unlocked.');
  };

  const handleSelectDeal = (deal: Deal) => {
    showToast(`Viewing ${deal.title} — Save ₹${deal.savings.toLocaleString('en-IN')}`);
  };

  const handleSelectBrand = (brand: Brand) => {
    showToast(`Filtered deals by ${brand.name} (${brand.maxDiscount})`);
  };

  const handleOpenLegal = (title: string) => {
    showToast(`Opening ${title}`);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Toast Notification */}
      {notification && (
        <div
          style={{
            position: 'fixed',
            top: '84px',
            right: '24px',
            zIndex: 1100,
            backgroundColor: '#1f1625',
            color: '#ffffff',
            border: '1px solid var(--primary)',
            borderRadius: '14px',
            padding: '12px 20px',
            fontSize: '0.92rem',
            fontWeight: 600,
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
          className="animate-fade-in"
        >
          <span>{notification}</span>
        </div>
      )}

      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedDealsCount={savedDeals.length}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
      />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        <HeroSection
          onUnlockMember={handleUnlockMember}
          onExploreDeals={() => {
            const el = document.getElementById('why-buzdealz');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <StatsBar />

        <BrandsShowcase
          onSelectBrand={handleSelectBrand}
          onViewAllBrands={() => setIsLoginModalOpen(true)}
        />

        <HowItWorks />

        <FeaturedDealHighlight
          onSelectDeal={handleSelectDeal}
          onUnlockMember={handleUnlockMember}
        />

        <ComparisonSection />

        <MembershipSection
          onSelectPlan={(_plan) => {
            setIsLoginModalOpen(true);
          }}
        />

        <MemberPerksGrid />

        <WhyAdvantageSection />

        <FaqSection />

        <CtaBanner onUnlockMember={handleUnlockMember} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Auth Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccessLogin={handleSuccessLogin}
      />
    </div>
  );
}

export default App;
