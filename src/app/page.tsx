import { Footer } from '@/components/layout/footer';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { BenefitsSection } from '@/components/sections/benefits';
import { IntegrationsSection } from '@/components/sections/integrations';
import { SocialProofSection } from '@/components/sections/social-proof';
import { ComparisonSection } from '@/components/sections/comparison';
import { FinalCTASection } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <HeroGeometric 
          badge="Fusion Pay"
          title1="Instantâneo. Seguro."
          title2="Seu Dinheiro, Seu Jeito."
        />
        <BenefitsSection />
        <IntegrationsSection />
        <SocialProofSection />
        <ComparisonSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
