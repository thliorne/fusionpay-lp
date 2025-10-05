import { Footer } from '@/components/layout/footer';
import { BenefitsSection } from '@/components/sections/benefits';
import { IntegrationsSection } from '@/components/sections/integrations';
import { Pricing } from '@/components/sections/pricing';
import { FinalCTASection } from '@/components/sections/final-cta';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { HeroSection } from '@/components/ui/hero-section-dark';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-1">
        <HeroSection 
          title="Fusion Pay"
          subtitle={{
            regular: "Seu dinheiro direto na conta, ",
            gradient: "sem retenções.",
          }}
          description="A Fusion Pay é o gateway que conecta sua loja aos principais meios de pagamento com segurança, velocidade e transparência."
          ctaText="Quero começar agora"
          ctaHref="#"
        />
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
