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
import { getMeta } from '../staticMeta';

const CANONICAL_PATH = '/restaurant-cash-advance';

export function RestaurantCashAdvancePage() {
  const meta = getMeta(CANONICAL_PATH)!;
  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonicalPath={meta.canonicalPath}
        image={meta.image}
      />
      <FaqSchema basePath="/restaurant-cash-advance" />
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
