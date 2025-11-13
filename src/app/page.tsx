import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { IntegrationsSection } from '@/components/sections/integrations';
import { Features } from '@/components/ui/features-8';
import { DisplayCardsSection } from '@/components/sections/display-cards-section';
import { ContactSection } from '@/components/sections/contact';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CostComparison } from '@/components/sections/cost-comparison';
import { DashboardSection } from '@/components/sections/dashboard-section';
import { FaqSection } from '@/components/sections/faq';
import HeroFusionPay from '@/components/HeroFusionPay';
import AutoSurfaceFix from '@/components/AutoSurfaceFix';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AutoSurfaceFix />
        <HeroFusionPay />
        <Features />
        <DisplayCardsSection id="diferenciais" />
        <IntegrationsSection id="integrations" />
        <DashboardSection />
        <CostComparison />
        <TestimonialsSection />
        <ContactSection />
        <FaqSection id="faq" />