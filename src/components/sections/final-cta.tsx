import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FinalCTASection() {
  return (
    <section id="open-account" className="py-20 md:py-32 bg-black text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
          Pare de perder dinheiro com gateways ruins. Receba com a Fusion Pay.
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default" asChild>
            <Link href="#">Abrir conta agora</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="#">Entre em contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
