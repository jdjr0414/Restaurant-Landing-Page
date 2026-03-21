import { Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { SiteLayout } from './components/SiteLayout';
import { RestaurantCashAdvancePage } from './pages/RestaurantCashAdvancePage';
import { RestaurantWorkingCapitalPage } from './pages/RestaurantWorkingCapitalPage';
import { RestaurantFundingPage } from './pages/RestaurantFundingPage';
import { BusyButBrokeRestaurantPage } from './pages/BusyButBrokeRestaurantPage';
import { FirstYearCashFlowSurprisesPage } from './pages/FirstYearCashFlowSurprisesPage';
import { CantMakeRestaurantPayrollPage } from './pages/CantMakeRestaurantPayrollPage';
import { BehindOnVendorPaymentsPage } from './pages/BehindOnVendorPaymentsPage';
import { RestaurantEquipmentBrokePage } from './pages/RestaurantEquipmentBrokePage';
import { RestaurantLaborScheduleMoneyDrainsPage } from './pages/RestaurantLaborScheduleMoneyDrainsPage';
import { RestaurantSlowSeasonPage } from './pages/RestaurantSlowSeasonPage';
import { RestaurantLeaseTooExpensivePage } from './pages/RestaurantLeaseTooExpensivePage';
import { MaxedOutCreditCardsRestaurantPage } from './pages/MaxedOutCreditCardsRestaurantPage';
import { RestaurantDeliveryAppFeesPage } from './pages/RestaurantDeliveryAppFeesPage';
import { RestaurantRecordSalesNoProfitPage } from './pages/RestaurantRecordSalesNoProfitPage';
import { RestaurantDiscountingHurtingProfitsPage } from './pages/RestaurantDiscountingHurtingProfitsPage';
import { RestaurantBookkeepingBadNewsPage } from './pages/RestaurantBookkeepingBadNewsPage';
import { RestaurantPartnerMoneyProblemsPage } from './pages/RestaurantPartnerMoneyProblemsPage';
import { RestaurantMenuEngineeringPage } from './pages/RestaurantMenuEngineeringPage';
import { RestaurantManagerQuitPage } from './pages/RestaurantManagerQuitPage';
import { RestaurantBarProfitableNotPage } from './pages/RestaurantBarProfitableNotPage';
import { RestaurantProfitableOnPaperNoCashPage } from './pages/RestaurantProfitableOnPaperNoCashPage';
import { RestaurantTaxBillCantPayPage } from './pages/RestaurantTaxBillCantPayPage';
import { OpeningSecondRestaurantPage } from './pages/OpeningSecondRestaurantPage';
import { BusinessCashAdvancePage } from './pages/BusinessCashAdvancePage';
import { SmallBusinessFundingPage } from './pages/SmallBusinessFundingPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { HomePage } from './pages/HomePage';
import { ConsultationPage } from './pages/ConsultationPage';
import { TopicPage } from './pages/TopicPage';
import { PillarPage } from './pages/PillarPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { topicPagesConfig } from './data/topicPages';
import { pillarPagesConfig } from './data/pillarPages';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/restaurant-cash-advance" element={<RestaurantCashAdvancePage />} />
        <Route path="/restaurant-working-capital" element={<RestaurantWorkingCapitalPage />} />
        <Route path="/restaurant-funding" element={<RestaurantFundingPage />} />
        <Route path="/busy-but-broke-restaurant" element={<BusyButBrokeRestaurantPage />} />
        <Route path="/restaurant-first-year-cash-flow-surprises" element={<FirstYearCashFlowSurprisesPage />} />
        <Route path="/cant-make-restaurant-payroll" element={<CantMakeRestaurantPayrollPage />} />
        <Route path="/behind-on-restaurant-vendor-payments" element={<BehindOnVendorPaymentsPage />} />
        <Route path="/restaurant-equipment-broke-no-money" element={<RestaurantEquipmentBrokePage />} />
        <Route path="/restaurant-labor-schedule-money-drains" element={<RestaurantLaborScheduleMoneyDrainsPage />} />
        <Route path="/restaurant-slow-season-cash-flow" element={<RestaurantSlowSeasonPage />} />
        <Route path="/restaurant-lease-too-expensive" element={<RestaurantLeaseTooExpensivePage />} />
        <Route path="/maxed-out-credit-cards-restaurant" element={<MaxedOutCreditCardsRestaurantPage />} />
        <Route path="/restaurant-delivery-app-fees-killing-profits" element={<RestaurantDeliveryAppFeesPage />} />
        <Route path="/restaurant-record-sales-no-profit" element={<RestaurantRecordSalesNoProfitPage />} />
        <Route path="/restaurant-discounting-hurting-profits" element={<RestaurantDiscountingHurtingProfitsPage />} />
        <Route path="/restaurant-bookkeeping-bad-news" element={<RestaurantBookkeepingBadNewsPage />} />
        <Route path="/restaurant-partner-money-problems" element={<RestaurantPartnerMoneyProblemsPage />} />
        <Route path="/restaurant-menu-engineering-cash-flow" element={<RestaurantMenuEngineeringPage />} />
        <Route path="/restaurant-manager-quit-now-what" element={<RestaurantManagerQuitPage />} />
        <Route path="/restaurant-bar-profitable-restaurant-not" element={<RestaurantBarProfitableNotPage />} />
        <Route path="/restaurant-profitable-on-paper-no-cash" element={<RestaurantProfitableOnPaperNoCashPage />} />
        <Route path="/restaurant-tax-bill-cant-pay" element={<RestaurantTaxBillCantPayPage />} />
        <Route path="/opening-second-restaurant-cash-flow" element={<OpeningSecondRestaurantPage />} />
        <Route path="/business-cash-advance" element={<BusinessCashAdvancePage />} />
        <Route path="/small-business-funding" element={<SmallBusinessFundingPage />} />
        {pillarPagesConfig.map((config) => (
          <Route key={config.path} path={config.path} element={<PillarPage />} />
        ))}
        {topicPagesConfig.map((config) => (
          <Route key={config.path} path={config.path} element={<TopicPage />} />
        ))}
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/page/:page" element={<BlogIndexPage />} />
        <Route path="/blog/page" element={<Navigate to="/blog" replace />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
