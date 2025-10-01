import { RateNegotiatorForm } from '@/components/rate-negotiator-form';

export function RateNegotiatorSection() {
  return (
    <section id="negotiate" className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            Descubra o quanto você pode economizar.
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl mt-4">
            Use nossa ferramenta de IA para analisar seus custos atuais e receber uma proposta de taxa personalizada da Fusion Pay.
          </p>
        </div>
        <RateNegotiatorForm />
      </div>
    </section>
  );
}
