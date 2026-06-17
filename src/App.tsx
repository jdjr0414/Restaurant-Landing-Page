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
            <Route path="/same-day-restaurant-funding" element={<SameDayRestaurantFundingPage />} />
            <Route path="/bad-credit-restaurant-funding" element={<BadCreditRestaurantFundingPage />} />
            <Route path="/restaurant-inventory-financing-fast" element={<RestaurantInventoryFinancingFastPage />} />
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
