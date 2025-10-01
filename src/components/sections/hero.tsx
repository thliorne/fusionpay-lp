import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-dashboard');

  return (
    <section className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
        <div className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32 z-10 relative">
        <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
            Seu dinheiro direto na conta. Instantâneo. Seguro. Fusion Pay.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
            Gateway de pagamentos premium, taxas negociáveis e saque instantâneo no Pix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
                <Link href="#open-account">Abrir conta agora</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <Link href="#">Entre em contato</Link>
            </Button>
            </div>
        </div>
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            {heroImage && (
            <div className="relative">
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={1200}
                    height={800}
                    className="rounded-xl shadow-2xl"
                    data-ai-hint={heroImage.imageHint}
                    priority
                />
                <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                <div className="absolute top-8 left-8 bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <p className="font-bold font-headline">Bem-vindo, Magnata!</p>
                    <p className="text-green-400 text-lg">+R$ 15,480.50</p>
                    <p className="text-sm text-muted-foreground">Pix recebido</p>
                </div>
            </div>
            )}
        </div>
        </div>
    </section>
  );
}
