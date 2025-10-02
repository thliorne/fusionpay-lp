import { Footer } from '@/components/layout/footer';
import { BenefitsSection } from '@/components/sections/benefits';
import { IntegrationsSection } from '@/components/sections/integrations';
import { Pricing } from '@/components/sections/pricing';
import { FinalCTASection } from '@/components/sections/final-cta';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { FusionPayHero } from '@/components/sections/fusion-pay-hero';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <FusionPayHero />
        <section className="py-20 md:py-32" />
        <BenefitsSection />
        <IntegrationsSection />
        <Pricing />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
