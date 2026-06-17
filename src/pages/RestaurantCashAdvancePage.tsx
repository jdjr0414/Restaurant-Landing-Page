import { Link } from 'react-router-dom';
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
import { LeadCaptureForm } from '../components/LeadCaptureForm';
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
        <section className="landing-section quick-lead-section">
          <h2 className="section-title">Need Help Now? Get a Call Back Before You Scroll Further</h2>
          <p className="section-subtitle">
            If you are actively comparing options, submit this short form and we will call you within 1 business day,
            often same day.
          </p>
          <LeadCaptureForm source="restaurant-cash-advance-inline" submitLabel="Get Free Help Now" />
        </section>
        <WhenToExploreOptions />
        <Qualifications />
        <Comparison />
        <RestaurantTypes />
        <RestaurantCashFlowChallenges />
        <FAQ />
        <section className="landing-section" style={{ background: 'var(--color-cream)', padding: '4rem 0' }}>
          <div className="container" style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem' }}>
            <h2 className="section-title" style={{ marginTop: 0 }}>Already Have an MCA That's Become a Problem?</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              A restaurant cash advance is the right tool when it's used for the right reason — and a serious problem when daily holdbacks start consuming 20–30% of your revenue before you can pay anything else. If you currently have one or more MCAs and the payments are unmanageable, that's a different situation and it requires a different solution.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Professional MCA mediators typically achieve 40–70% reductions on remaining balances and negotiate holdback rates back down to levels restaurants can actually operate with. This is not refinancing into a new advance — it's restructuring or settling what you already owe.
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Relief: The Complete Guide</Link></li>
              <li><Link to="/how-to-get-out-of-merchant-cash-advance">How to Get Out of a Merchant Cash Advance: Every Exit Path</Link></li>
              <li><Link to="/merchant-cash-advance-settlement">What MCA Settlement Looks Like in Numbers</Link></li>
              <li><Link to="/restaurant-mca-calculator">MCA Holdback Calculator: See Your Current Burden</Link></li>
            </ul>
          </div>
        </section>
        <CTA />
      </main>
    </>
  );
}
