import { Header } from '@/components/layout/header';
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
      <Header />
      <main className="flex-1">
        <HeroGeometric 
          badge="Fusion Pay"
          title1="Instant. Secure."
          title2="Your Money, Your Way."
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
