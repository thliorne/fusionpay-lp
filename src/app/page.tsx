import { Footer } from '@/components/layout/footer';
import { IntegrationsSection } from '@/components/sections/integrations';
import { DifferentialsSection } from '@/components/sections/differentials';
import { DisplayCardsSection } from '@/components/sections/display-cards-section';
import { ContactSection } from '@/components/sections/contact';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CostComparison } from '@/components/sections/cost-comparison';
import { DashboardSection } from '@/components/sections/dashboard-section';
import { FaqSection } from '@/components/sections/faq';
import HeroFusionPay from '@/components/HeroFusionPay';
import { Header } from '@/components/layout/header';
import AutoSurfaceFix from "@/components/AutoSurfaceFix";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AutoSurfaceFix />
      <Header />
      <main className="flex-1">
        <HeroFusionPay />
        <DifferentialsSection />
        <DisplayCardsSection />
        <IntegrationsSection />
        <DashboardSection />
        <CostComparison />
        <TestimonialsSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
