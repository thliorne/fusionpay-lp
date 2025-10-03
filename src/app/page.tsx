import { Footer } from '@/components/layout/footer';
import { BenefitsSection } from '@/components/sections/benefits';
import { IntegrationsSection } from '@/components/sections/integrations';
import { Pricing } from '@/components/sections/pricing';
import { FinalCTASection } from '@/components/sections/final-cta';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { FusionPayHero } from '@/components/sections/fusion-pay-hero';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function Home() {
  const dashboardImage = PlaceHolderImages.find(p => p.id === "hero-dashboard");
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-1">
        <FusionPayHero />
        <div className="relative bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl" />
          <ContainerScroll
            titleComponent={
              <>
                <h2 className="text-4xl font-semibold text-foreground">
                  Um dashboard completo <br />
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
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
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
