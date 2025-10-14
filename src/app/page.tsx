import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { IntegrationsSection } from '@/components/sections/integrations';
import { DifferentialsSection } from '@/components/sections/differentials';
import { DisplayCardsSection } from '@/components/sections/display-cards-section';
import { ContactSection } from '@/components/sections/contact';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CostComparison } from '@/components/sections/cost-comparison';
import { DashboardSection } from '@/components/sections/dashboard-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <HeroSection />
        <DifferentialsSection />
        <DisplayCardsSection />
        <IntegrationsSection />
        <DashboardSection />
        <CostComparison />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
