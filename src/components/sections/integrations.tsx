import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";

const integrations = [
  { name: 'StelarPay', logoUrl: 'https://i.imgur.com/bYGzQ0V.png' },
  { name: 'Luna', logoUrl: 'https://i.imgur.com/81nB2iR.png' },
  { name: 'Zedy', logoUrl: 'https://i.imgur.com/SYwiJ0Y.jpeg' },
  { name: 'Vega', logoUrl: 'https://i.imgur.com/mFVZZqs.png' },
];

export function IntegrationsSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 font-headline">
          Conectado aos melhores checkouts do mercado digital.
        </h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl mb-12">
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
              <div key={integration.name} className="flex items-center justify-center h-20 w-48 bg-secondary rounded-lg p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={integration.logoUrl} alt={integration.name} width={120} height={40} className="object-contain" />
              </div>
            ))}
          </InfiniteSlider>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
