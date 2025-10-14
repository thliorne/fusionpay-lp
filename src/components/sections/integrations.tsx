import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";

const integrations = [
  { name: 'Luna', logoUrl: 'https://i.imgur.com/81nB2iR.png' },
  { name: 'Zedy', logoUrl: 'https://i.imgur.com/SYwiJ0Y.jpeg' },
  { name: 'Vega', logoUrl: 'https://i.imgur.com/mFVZZqs.png' },
  { name: 'Utmify', logoUrl: 'https://i.imgur.com/9GQpNRt.jpeg' },
  { name: 'Shopify', logoUrl: 'https://i.imgur.com/r0omMHj.png' },
  { name: 'Wordpress', logoUrl: 'https://i.imgur.com/zKHXUQ7.png' },
  { name: 'WooCommerce', logoUrl: 'https://i.imgur.com/TSi6QTG.png' },
];

export function IntegrationsSection() {
  return (
    <section className="py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 font-headline">
          Integrado com as melhores plataformas do mercado digital
        </h2>
        <p className="max-w-[600px] mx-auto text-primary-foreground/80 md:text-xl mb-12">
          Integre a Fusion Pay com um clique e comece a vender mais com as ferramentas que você já usa.
        </p>
        <div className="relative">
          <InfiniteSlider
            gap={40}
            duration={40}
            durationOnHover={70}
            className="[--duration:40s] [--gap:2.5rem]"
          >
            {integrations.map((integration) => (
              <div key={integration.name} className="flex items-center justify-center gap-4 h-20 w-auto bg-primary-foreground/10 rounded-lg px-6 py-4 transition-all duration-300">
                <Image src={integration.logoUrl} alt={integration.name} width={32} height={32} className="object-contain h-8 w-8" />
                <span className="text-lg font-semibold text-primary-foreground">{integration.name}</span>
              </div>
            ))}
          </InfiniteSlider>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
