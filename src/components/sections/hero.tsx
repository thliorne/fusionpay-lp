"use client";

import { useEffect, useState } from "react";
import { Header } from '@/components/layout/header';
import { Button } from "../ui/button";
import Link from "next/link";
import { GradientButton } from "../ui/gradient-button";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden bg-background text-foreground pt-32 pb-24 md:pt-40 md:pb-32">
      <Header />
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-black/95"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(29, 31, 35, 0) 0%, #0B0B0D 90%)"
          }}
        />
        <div 
          className="absolute inset-0 bg-grid-pattern"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"
        />
        <div 
          className="animate-move-background absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,hsl(var(--primary)/0.2),transparent)]"
          style={{
            backgroundSize: '200% 200%',
          }}
        />
      </div>


      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Gateway de Pagamentos Inteligente
            </div>

            <h1 className="text-balance text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
                Acelere seus recebimentos com a <span className="text-primary">Fusion Pay</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
                O motor de processamento mais rápido e seguro para o seu negócio digital. Saques instantâneos, antifraude ativo e taxas negociáveis.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <GradientButton asChild>
                    <Link href="#contact">Abrir Conta Agora</Link>
                </GradientButton>
                <Button variant="outline" size="lg" className="h-auto py-4 px-9 text-base" asChild>
                    <Link href="#contact">Negociar Taxas</Link>
                </Button>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
                +10.000 empresas confiam na Fusion Pay
            </p>
        </div>
      </div>
    </section>
  );
}
