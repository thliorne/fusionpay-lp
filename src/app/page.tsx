import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { IntegrationsSection } from '@/components/sections/integrations';
import { DifferentialsSection } from '@/components/sections/differentials';
import { Pricing } from '@/components/sections/pricing';
import { ContactSection } from '@/components/sections/contact';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CostComparison } from '@/components/sections/cost-comparison';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-1">
        <HeroSection />
        <IntegrationsSection />
        <DifferentialsSection />
        <CostComparison />
        <Pricing />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
