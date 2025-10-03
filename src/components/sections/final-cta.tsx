import Link from 'next/link';
import { GradientButton } from '@/components/ui/gradient-button';

export function FinalCTASection() {
  return (
    <section id="open-account" className="py-20 md:py-32 bg-black text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
          Pare de perder dinheiro com gateways ruins. Receba com a Fusion Pay.
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <GradientButton asChild>
            <Link href="#">Abrir conta agora</Link>
          </GradientButton>
          <GradientButton variant="variant" asChild>
            <Link href="#">Entre em contato</Link>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
