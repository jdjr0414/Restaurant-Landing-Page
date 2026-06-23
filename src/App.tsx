import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { SiteLayout } from './components/SiteLayout';
import { NotFoundPage } from './pages/NotFoundPage';
import { TOPIC_ROUTE_PATHS } from './data/topicRoutePaths';
import { PILLAR_ROUTE_PATHS } from './data/pillarRoutePaths';

const RestaurantCashAdvancePage = lazy(() =>
  import('./pages/RestaurantCashAdvancePage').then((m) => ({ default: m.RestaurantCashAdvancePage }))
);
const RestaurantWorkingCapitalPage = lazy(() =>
  import('./pages/RestaurantWorkingCapitalPage').then((m) => ({ default: m.RestaurantWorkingCapitalPage }))
);
const OccupancyCostCalculatorPage = lazy(() =>
  import('./pages/OccupancyCostCalculatorPage').then((m) => ({ default: m.OccupancyCostCalculatorPage }))
);
const RestaurantFundingPage = lazy(() =>
  import('./pages/RestaurantFundingPage').then((m) => ({ default: m.RestaurantFundingPage }))
);
const BusyButBrokeRestaurantPage = lazy(() =>
  import('./pages/BusyButBrokeRestaurantPage').then((m) => ({ default: m.BusyButBrokeRestaurantPage }))
);
const CantMakeRestaurantPayrollPage = lazy(() =>
  import('./pages/CantMakeRestaurantPayrollPage').then((m) => ({ default: m.CantMakeRestaurantPayrollPage }))
);
const RestaurantEquipmentBrokePage = lazy(() =>
  import('./pages/RestaurantEquipmentBrokePage').then((m) => ({ default: m.RestaurantEquipmentBrokePage }))
);
const RestaurantSlowSeasonPage = lazy(() =>
  import('./pages/RestaurantSlowSeasonPage').then((m) => ({ default: m.RestaurantSlowSeasonPage }))
);
const RestaurantLeaseTooExpensivePage = lazy(() =>
  import('./pages/RestaurantLeaseTooExpensivePage').then((m) => ({ default: m.RestaurantLeaseTooExpensivePage }))
);
const RestaurantDeliveryAppFeesPage = lazy(() =>
  import('./pages/RestaurantDeliveryAppFeesPage').then((m) => ({ default: m.RestaurantDeliveryAppFeesPage }))
);
const RestaurantRecordSalesNoProfitPage = lazy(() =>
  import('./pages/RestaurantRecordSalesNoProfitPage').then((m) => ({ default: m.RestaurantRecordSalesNoProfitPage }))
);
const RestaurantDiscountingHurtingProfitsPage = lazy(() =>
  import('./pages/RestaurantDiscountingHurtingProfitsPage').then((m) => ({
    default: m.RestaurantDiscountingHurtingProfitsPage,
  }))
);
const RestaurantBookkeepingBadNewsPage = lazy(() =>
  import('./pages/RestaurantBookkeepingBadNewsPage').then((m) => ({ default: m.RestaurantBookkeepingBadNewsPage }))
);
const RestaurantBarProfitableNotPage = lazy(() =>
  import('./pages/RestaurantBarProfitableNotPage').then((m) => ({ default: m.RestaurantBarProfitableNotPage }))
);
const RestaurantTaxBillCantPayPage = lazy(() =>
  import('./pages/RestaurantTaxBillCantPayPage').then((m) => ({ default: m.RestaurantTaxBillCantPayPage }))
);
const OpeningSecondRestaurantPage = lazy(() =>
  import('./pages/OpeningSecondRestaurantPage').then((m) => ({ default: m.OpeningSecondRestaurantPage }))
);
const RestaurantMcaVsLineOfCreditPage = lazy(() =>
  import('./pages/RestaurantMcaVsLineOfCreditPage').then((m) => ({
    default: m.RestaurantMcaVsLineOfCreditPage,
  }))
);
const RestaurantMcaDebtHelpPage = lazy(() =>
  import('./pages/RestaurantMcaDebtHelpPage').then((m) => ({ default: m.RestaurantMcaDebtHelpPage }))
);
const CantPayRestaurantMcaPage = lazy(() =>
  import('./pages/CantPayRestaurantMcaPage').then((m) => ({ default: m.CantPayRestaurantMcaPage }))
);
const RestaurantMcaDefaultPage = lazy(() =>
  import('./pages/RestaurantMcaDefaultPage').then((m) => ({ default: m.RestaurantMcaDefaultPage }))
);
const RestaurantMcaPaymentsTooHighPage = lazy(() =>
  import('./pages/RestaurantMcaPaymentsTooHighPage').then((m) => ({ default: m.RestaurantMcaPaymentsTooHighPage }))
);
const RestaurantMcaStackingPage = lazy(() =>
  import('./pages/RestaurantMcaStackingPage').then((m) => ({ default: m.RestaurantMcaStackingPage }))
);
const McaCalculatorPage = lazy(() =>
  import('./pages/McaCalculatorPage').then((m) => ({ default: m.McaCalculatorPage }))
);
const FaqPage = lazy(() =>
  import('./pages/FaqPage').then((m) => ({ default: m.FaqPage }))
);
const RestaurantMcaCoJStatePage = lazy(() =>
  import('./pages/RestaurantMcaCoJStatePage').then((m) => ({ default: m.RestaurantMcaCoJStatePage }))
);
const HowToGetOutOfMcaPage = lazy(() =>
  import('./pages/HowToGetOutOfMcaPage').then((m) => ({ default: m.HowToGetOutOfMcaPage }))
);
const MerchantCashAdvanceSettlementPage = lazy(() =>
  import('./pages/MerchantCashAdvanceSettlementPage').then((m) => ({ default: m.MerchantCashAdvanceSettlementPage }))
);
const RestaurantMcaDebtReliefPage = lazy(() =>
  import('./pages/RestaurantMcaDebtReliefPage').then((m) => ({ default: m.RestaurantMcaDebtReliefPage }))
);
const McaBankAccountFrozenPage = lazy(() =>
  import('./pages/McaBankAccountFrozenPage').then((m) => ({ default: m.McaBankAccountFrozenPage }))
);
const MerchantCashAdvancePersonalGuaranteePage = lazy(() =>
  import('./pages/MerchantCashAdvancePersonalGuaranteePage').then((m) => ({
    default: m.MerchantCashAdvancePersonalGuaranteePage,
  }))
);
const RestaurantMcaDebtAfterClosingPage = lazy(() =>
  import('./pages/RestaurantMcaDebtAfterClosingPage').then((m) => ({ default: m.RestaurantMcaDebtAfterClosingPage }))
);
const MerchantCashAdvanceUccLienPage = lazy(() =>
  import('./pages/MerchantCashAdvanceUccLienPage').then((m) => ({ default: m.MerchantCashAdvanceUccLienPage }))
);
const MerchantCashAdvanceConsolidationPage = lazy(() =>
  import('./pages/MerchantCashAdvanceConsolidationPage').then((m) => ({
    default: m.MerchantCashAdvanceConsolidationPage,
  }))
);
const RestaurantMcaDebtHelpTexasPage = lazy(() =>
  import('./pages/RestaurantMcaDebtHelpTexasPage').then((m) => ({ default: m.RestaurantMcaDebtHelpTexasPage }))
);
const RestaurantMcaDebtHelpCaliforniaPage = lazy(() =>
  import('./pages/RestaurantMcaDebtHelpCaliforniaPage').then((m) => ({
    default: m.RestaurantMcaDebtHelpCaliforniaPage,
  }))
);
const RestaurantMcaDebtHelpFloridaPage = lazy(() =>
  import('./pages/RestaurantMcaDebtHelpFloridaPage').then((m) => ({ default: m.RestaurantMcaDebtHelpFloridaPage }))
);
const MerchantCashAdvanceAttorneyPage = lazy(() =>
  import('./pages/MerchantCashAdvanceAttorneyPage').then((m) => ({ default: m.MerchantCashAdvanceAttorneyPage }))
);
const MerchantCashAdvanceFactorRatePage = lazy(() =>
  import('./pages/MerchantCashAdvanceFactorRatePage').then((m) => ({ default: m.MerchantCashAdvanceFactorRatePage }))
);
const SameDayRestaurantFundingPage = lazy(() =>
  import('./pages/SameDayRestaurantFundingPage').then((m) => ({ default: m.SameDayRestaurantFundingPage }))
);
const BadCreditRestaurantFundingPage = lazy(() =>
  import('./pages/BadCreditRestaurantFundingPage').then((m) => ({ default: m.BadCreditRestaurantFundingPage }))
);
const RestaurantInventoryFinancingFastPage = lazy(() =>
  import('./pages/RestaurantInventoryFinancingFastPage').then((m) => ({
    default: m.RestaurantInventoryFinancingFastPage,
  }))
);
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage').then((m) => ({ default: m.BlogIndexPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then((m) => ({ default: m.BlogPostPage })));
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const ConsultationPage = lazy(() =>
  import('./pages/ConsultationPage').then((m) => ({ default: m.ConsultationPage }))
);
const TopicPage = lazy(() => import('./pages/TopicPage').then((m) => ({ default: m.TopicPage })));
const PillarPage = lazy(() => import('./pages/PillarPage').then((m) => ({ default: m.PillarPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then((m) => ({ default: m.SitemapPage })));
const BehindOnVendorPaymentsPage = lazy(() =>
  import('./pages/BehindOnVendorPaymentsPage').then((m) => ({ default: m.BehindOnVendorPaymentsPage }))
);
const BusinessCashAdvancePage = lazy(() =>
  import('./pages/BusinessCashAdvancePage').then((m) => ({ default: m.BusinessCashAdvancePage }))
);
const SmallBusinessFundingPage = lazy(() =>
  import('./pages/SmallBusinessFundingPage').then((m) => ({ default: m.SmallBusinessFundingPage }))
);
const RestaurantManagerQuitPage = lazy(() =>
  import('./pages/RestaurantManagerQuitPage').then((m) => ({ default: m.RestaurantManagerQuitPage }))
);
const RestaurantProfitableOnPaperNoCashPage = lazy(() =>
  import('./pages/RestaurantProfitableOnPaperNoCashPage').then((m) => ({
    default: m.RestaurantProfitableOnPaperNoCashPage,
  }))
);
const MerchantCashAdvanceForRestaurantsPage = lazy(() =>
  import('./pages/MerchantCashAdvanceForRestaurantsPage').then((m) => ({
    default: m.MerchantCashAdvanceForRestaurantsPage,
  }))
);
const RestaurantPayrollFundingOptionsPage = lazy(() =>
  import('./pages/RestaurantPayrollFundingOptionsPage').then((m) => ({ default: m.RestaurantPayrollFundingOptionsPage }))
);
const WarImpactRestaurantFinancingPage = lazy(() =>
  import('./pages/WarImpactRestaurantFinancingPage').then((m) => ({ default: m.WarImpactRestaurantFinancingPage }))
);
const FirstYearCashFlowSurprisesPage = lazy(() =>
  import('./pages/FirstYearCashFlowSurprisesPage').then((m) => ({ default: m.FirstYearCashFlowSurprisesPage }))
);
const MaxedOutCreditCardsRestaurantPage = lazy(() =>
  import('./pages/MaxedOutCreditCardsRestaurantPage').then((m) => ({ default: m.MaxedOutCreditCardsRestaurantPage }))
);
const RestaurantLaborScheduleMoneyDrainsPage = lazy(() =>
  import('./pages/RestaurantLaborScheduleMoneyDrainsPage').then((m) => ({
    default: m.RestaurantLaborScheduleMoneyDrainsPage,
  }))
);
const RestaurantPartnerMoneyProblemsPage = lazy(() =>
  import('./pages/RestaurantPartnerMoneyProblemsPage').then((m) => ({ default: m.RestaurantPartnerMoneyProblemsPage }))
);
const RestaurantMenuEngineeringPage = lazy(() =>
  import('./pages/RestaurantMenuEngineeringPage').then((m) => ({ default: m.RestaurantMenuEngineeringPage }))
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/restaurant-cash-advance" element={<RestaurantCashAdvancePage />} />
            <Route path="/restaurant-working-capital" element={<RestaurantWorkingCapitalPage />} />
            <Route path="/restaurant-funding" element={<RestaurantFundingPage />} />
            <Route path="/busy-but-broke-restaurant" element={<BusyButBrokeRestaurantPage />} />
            <Route path="/cant-make-restaurant-payroll" element={<CantMakeRestaurantPayrollPage />} />
            <Route path="/restaurant-equipment-broke-no-money" element={<RestaurantEquipmentBrokePage />} />
            <Route path="/restaurant-slow-season-cash-flow" element={<RestaurantSlowSeasonPage />} />
            <Route path="/restaurant-lease-too-expensive" element={<RestaurantLeaseTooExpensivePage />} />
            <Route path="/restaurant-delivery-app-fees-killing-profits" element={<RestaurantDeliveryAppFeesPage />} />
            <Route path="/restaurant-record-sales-no-profit" element={<RestaurantRecordSalesNoProfitPage />} />
            <Route path="/restaurant-discounting-hurting-profits" element={<RestaurantDiscountingHurtingProfitsPage />} />
            <Route path="/restaurant-bookkeeping-bad-news" element={<RestaurantBookkeepingBadNewsPage />} />
            <Route path="/restaurant-bar-profitable-restaurant-not" element={<RestaurantBarProfitableNotPage />} />
            <Route path="/restaurant-tax-bill-cant-pay" element={<RestaurantTaxBillCantPayPage />} />
            <Route path="/opening-second-restaurant-cash-flow" element={<OpeningSecondRestaurantPage />} />
            <Route path="/restaurant-mca-vs-line-of-credit" element={<RestaurantMcaVsLineOfCreditPage />} />
            <Route path="/restaurant-mca-debt-help" element={<RestaurantMcaDebtHelpPage />} />
            <Route path="/cant-pay-restaurant-mca" element={<CantPayRestaurantMcaPage />} />
            <Route path="/restaurant-mca-default" element={<RestaurantMcaDefaultPage />} />
            <Route path="/restaurant-mca-payments-too-high" element={<RestaurantMcaPaymentsTooHighPage />} />
            <Route path="/restaurant-mca-stacking" element={<RestaurantMcaStackingPage />} />
            <Route path="/restaurant-mca-calculator" element={<McaCalculatorPage />} />
            <Route path="/restaurant-occupancy-cost-calculator" element={<OccupancyCostCalculatorPage />} />
            <Route path="/restaurant-mca-confession-of-judgment" element={<RestaurantMcaCoJStatePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/how-to-get-out-of-merchant-cash-advance" element={<HowToGetOutOfMcaPage />} />
            <Route path="/merchant-cash-advance-settlement" element={<MerchantCashAdvanceSettlementPage />} />
            <Route path="/restaurant-mca-debt-relief" element={<RestaurantMcaDebtReliefPage />} />
            <Route path="/mca-bank-account-frozen" element={<McaBankAccountFrozenPage />} />
            <Route path="/merchant-cash-advance-personal-guarantee" element={<MerchantCashAdvancePersonalGuaranteePage />} />
            <Route path="/restaurant-mca-debt-after-closing" element={<RestaurantMcaDebtAfterClosingPage />} />
            <Route path="/merchant-cash-advance-ucc-lien" element={<MerchantCashAdvanceUccLienPage />} />
            <Route path="/merchant-cash-advance-consolidation" element={<MerchantCashAdvanceConsolidationPage />} />
            <Route path="/restaurant-mca-debt-help-texas" element={<RestaurantMcaDebtHelpTexasPage />} />
            <Route path="/restaurant-mca-debt-help-california" element={<RestaurantMcaDebtHelpCaliforniaPage />} />
            <Route path="/restaurant-mca-debt-help-florida" element={<RestaurantMcaDebtHelpFloridaPage />} />
            <Route path="/merchant-cash-advance-attorney" element={<MerchantCashAdvanceAttorneyPage />} />
            <Route path="/merchant-cash-advance-factor-rate" element={<MerchantCashAdvanceFactorRatePage />} />
            <Route path="/same-day-restaurant-funding" element={<SameDayRestaurantFundingPage />} />
            <Route path="/bad-credit-restaurant-funding" element={<BadCreditRestaurantFundingPage />} />
            <Route path="/restaurant-inventory-financing-fast" element={<RestaurantInventoryFinancingFastPage />} />
            <Route path="/behind-on-restaurant-vendor-payments" element={<BehindOnVendorPaymentsPage />} />
            <Route path="/business-cash-advance" element={<BusinessCashAdvancePage />} />
            <Route path="/small-business-funding" element={<SmallBusinessFundingPage />} />
            <Route path="/restaurant-manager-quit-now-what" element={<RestaurantManagerQuitPage />} />
            <Route path="/restaurant-profitable-on-paper-no-cash" element={<RestaurantProfitableOnPaperNoCashPage />} />
            <Route path="/merchant-cash-advance-for-restaurants" element={<MerchantCashAdvanceForRestaurantsPage />} />
            <Route path="/restaurant-payroll-funding-options" element={<RestaurantPayrollFundingOptionsPage />} />
            <Route path="/war-impact-restaurant-financing" element={<WarImpactRestaurantFinancingPage />} />
            <Route path="/restaurant-first-year-cash-flow-surprises" element={<FirstYearCashFlowSurprisesPage />} />
            <Route path="/maxed-out-credit-cards-restaurant" element={<MaxedOutCreditCardsRestaurantPage />} />
            <Route path="/restaurant-labor-schedule-money-drains" element={<RestaurantLaborScheduleMoneyDrainsPage />} />
            <Route path="/restaurant-partner-money-problems" element={<RestaurantPartnerMoneyProblemsPage />} />
            <Route path="/restaurant-menu-engineering-cash-flow" element={<RestaurantMenuEngineeringPage />} />
            {PILLAR_ROUTE_PATHS.map((path) => (
              <Route key={path} path={path} element={<PillarPage />} />
            ))}
            {TOPIC_ROUTE_PATHS.map((path) => (
              <Route key={path} path={path} element={<TopicPage />} />
            ))}
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/page/:page" element={<BlogIndexPage />} />
            <Route path="/blog/page" element={<Navigate to="/blog" replace />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
