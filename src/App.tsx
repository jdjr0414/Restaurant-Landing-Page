import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { RestaurantTypes } from './components/RestaurantTypes';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <TrustBar />
      <main>
        <HowItWorks />
        <UseCases />
        <RestaurantTypes />
        <Comparison />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
