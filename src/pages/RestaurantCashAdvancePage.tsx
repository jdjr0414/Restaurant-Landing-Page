import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { WhyRestaurantsUse } from '../components/WhyRestaurantsUse';
import { UseCases } from '../components/UseCases';
import { HowItWorks } from '../components/HowItWorks';
import { WhenToExploreOptions } from '../components/WhenToExploreOptions';
import { Qualifications } from '../components/Qualifications';
import { Comparison } from '../components/Comparison';
import { RestaurantTypes } from '../components/RestaurantTypes';
import { RestaurantCashFlowChallenges } from '../components/RestaurantCashFlowChallenges';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { SeoHead } from '../components/SeoHead';
import { FaqSchema } from '../components/FaqSchema';

const PAGE_TITLE = 'Restaurant Cash Flow Problems? Get Clear on Your Options';
const META_DESCRIPTION =
  'Struggling with restaurant cash flow, payroll gaps, seasonal slumps, or equipment costs? Understand what’s going on and what options exist. Practical guide for restaurant owners.';
const CANONICAL_PATH = '/restaurant-cash-advance';

export function RestaurantCashAdvancePage() {
  return (
    <>
      <SeoHead
        title={PAGE_TITLE}
        description={META_DESCRIPTION}
        canonicalPath={CANONICAL_PATH}
      />
      <FaqSchema />
      <Hero />
      <TrustBar />
      <main>
        <WhyRestaurantsUse />
        <UseCases />
        <HowItWorks />
        <WhenToExploreOptions />
        <Qualifications />
        <Comparison />
        <RestaurantTypes />
        <RestaurantCashFlowChallenges />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
