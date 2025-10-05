import { Footer } from '@/components/layout/footer';
import { BenefitsSection } from '@/components/sections/benefits';
import { IntegrationsSection } from '@/components/sections/integrations';
import { Pricing } from '@/components/sections/pricing';
import { FinalCTASection } from '@/components/sections/final-cta';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { HeroSection } from '@/components/ui/hero-section-dark';

export default function Home() {
  const dashboardImage = PlaceHolderImages.find(p => p.id === "hero-dashboard");
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
          bottomImage={undefined}
        />
        <div className="relative bg-black">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-3xl animate-pulse-gradient" />
          <ContainerScroll
            titleComponent={
              <>
                <h2 className="text-4xl font-semibold text-foreground">
                  Um gateway rápido e seguro <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-primary">
                    para o seu negócio.
                  </span>
                </h2>
              </>
            }
          >
            {dashboardImage && (
              <Image
                src={dashboardImage.imageUrl}
                alt="hero"
                height={485}
                width={956}
                className="mx-auto rounded-2xl object-contain h-full w-full"
                draggable={false}
                data-ai-hint={dashboardImage.imageHint}
              />
            )}
          </ContainerScroll>
        </div>
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
