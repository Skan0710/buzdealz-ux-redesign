import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { BrandsShowcase } from './components/BrandsShowcase';
import { HowItWorks } from './components/HowItWorks';
import { FeaturedDealHighlight } from './components/FeaturedDealHighlight';
import { IntentDiscoverySection } from './components/IntentDiscoverySection';
import { DealListingSection } from './components/DealListingSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { DealDetailsModal } from './components/DealDetailsModal';
import { RedemptionHandoffModal } from './components/RedemptionHandoffModal';
import { ComparisonSection } from './components/ComparisonSection';
import { MembershipSection } from './components/MembershipSection';
import { MemberPerksGrid } from './components/MemberPerksGrid';
import { WhyAdvantageSection } from './components/WhyAdvantageSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { MobilePreLoginHome } from './components/MobilePreLoginHome';
import { BRANDS, DEALS, type Deal, type Brand } from './data/mockData';

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Alex');
  const [isMobile, setIsMobile] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [isDealDetailsOpen, setIsDealDetailsOpen] = useState(false);
  const [isRedemptionOpen, setIsRedemptionOpen] = useState(false);
  const [savedDeals, setSavedDeals] = useState<string[]>(['campus-north-plus', 'rare-rabbit-oxford']);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('All');
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    setIsLoggedIn(true);
    setUserName('Alex Sharma');
    showToast('🎉 Welcome back, Alex! Member discounts unlocked.');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    showToast('Logged out of BuzDealz');
  };

  const handleToggleSave = (dealId: string) => {
    if (savedDeals.includes(dealId)) {
      setSavedDeals(savedDeals.filter((id) => id !== dealId));
      showToast('Removed from saved deals');
    } else {
      setSavedDeals([...savedDeals, dealId]);
      showToast('❤️ Added to your saved deals');
    }
  };

  const handleSelectDeal = (deal: Deal) => {
    setSelectedDeal(deal);
    setIsDealDetailsOpen(true);
  };

  const handleSelectBrand = (brand: Brand) => {
    setSelectedBrandFilter(brand.name);
    const dealsEl = document.getElementById('deals');
    if (dealsEl) {
      dealsEl.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Filtered deals by ${brand.name} (${brand.maxDiscount})`);
  };

  const handleStartRedemption = (deal: Deal) => {
    setSelectedDeal(deal);
    setIsDealDetailsOpen(false);
    setIsRedemptionOpen(true);
  };

  const handleOpenLegal = (title: string) => {
    showToast(`Opening ${title}`);
  };

  const scrollToIntentDiscovery = () => {
    const el = document.getElementById('intent-discovery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
        onOpenIntentDiscovery={scrollToIntentDiscovery}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {isMobile && !isLoggedIn ? (
          <MobilePreLoginHome
            brands={BRANDS}
            deals={DEALS}
            savedDeals={savedDeals}
            onToggleSave={handleToggleSave}
            onSelectDeal={handleSelectDeal}
            onSelectBrand={handleSelectBrand}
            onExploreDeals={() => {
              setIsLoginModalOpen(true);
            }}
            onJoinBuzDealz={() => setIsLoginModalOpen(true)}
            onSelectCategory={(cat) => {
              showToast(`Browsing ${cat} deals`);
            }}
          />
        ) : (
          <>
            <HeroSection
              onUnlockMember={handleUnlockMember}
              onExploreDeals={() => {
                const el = document.getElementById('deals');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <StatsBar />

            <BrandsShowcase
              onSelectBrand={handleSelectBrand}
              onViewAllBrands={() => {
                setSelectedBrandFilter('All');
                const el = document.getElementById('deals');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* UX IMPROVEMENT 3: Intent-Based Discovery */}
            <IntentDiscoverySection
              onSelectDeal={handleSelectDeal}
              savedDeals={savedDeals}
              onToggleSave={handleToggleSave}
            />

            <HowItWorks />

            <FeaturedDealHighlight
              onSelectDeal={handleSelectDeal}
              onUnlockMember={handleUnlockMember}
            />

            {/* High-Fidelity Deal Discovery & Listing Section */}
            <DealListingSection
              onSelectDeal={handleSelectDeal}
              savedDeals={savedDeals}
              onToggleSave={handleToggleSave}
              initialBrand={selectedBrandFilter}
            />

            {/* UX IMPROVEMENT 1: Savings and Value Calculator */}
            <SavingsCalculator onUnlockMember={handleUnlockMember} />

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
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Auth Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccessLogin={handleSuccessLogin}
      />

      {/* UX IMPROVEMENTS 2, 4: Deal Details Modal with Savings-First & Freshness */}
      <DealDetailsModal
        deal={selectedDeal}
        isOpen={isDealDetailsOpen}
        onClose={() => setIsDealDetailsOpen(false)}
        onRedeem={handleStartRedemption}
        isSaved={selectedDeal ? savedDeals.includes(selectedDeal.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* UX IMPROVEMENT 5: Redemption Handoff Screen / Modal */}
      <RedemptionHandoffModal
        deal={selectedDeal}
        isOpen={isRedemptionOpen}
        onClose={() => setIsRedemptionOpen(false)}
        onBackToDeal={() => setIsDealDetailsOpen(true)}
      />
    </div>
  );
}

export default App;
