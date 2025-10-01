import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FinalCTASection() {
  return (
    <section id="open-account" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          Pare de perder dinheiro com gateways ruins. Receba com a Fusion Pay.
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
            <Link href="#">Abrir conta agora</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
            <Link href="#negotiate">Entre em contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
