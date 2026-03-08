import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { SiteLayout } from './components/SiteLayout';
import { RestaurantCashAdvancePage } from './pages/RestaurantCashAdvancePage';
import { RestaurantWorkingCapitalPage } from './pages/RestaurantWorkingCapitalPage';
import { RestaurantFundingPage } from './pages/RestaurantFundingPage';
import { BusinessCashAdvancePage } from './pages/BusinessCashAdvancePage';
import { SmallBusinessFundingPage } from './pages/SmallBusinessFundingPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { HomePage } from './pages/HomePage';
import { TopicPage } from './pages/TopicPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { topicPagesConfig } from './data/topicPages';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant-cash-advance" element={<RestaurantCashAdvancePage />} />
        <Route path="/restaurant-working-capital" element={<RestaurantWorkingCapitalPage />} />
        <Route path="/restaurant-funding" element={<RestaurantFundingPage />} />
        <Route path="/business-cash-advance" element={<BusinessCashAdvancePage />} />
        <Route path="/small-business-funding" element={<SmallBusinessFundingPage />} />
        {topicPagesConfig.map((config) => (
          <Route key={config.path} path={config.path} element={<TopicPage />} />
        ))}
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/page/:page" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
