"use client";

import { useEffect, useState } from "react";
import { Header } from '@/components/layout/header';
import { Button } from "../ui/button";
import Link from "next/link";
import { GradientButton } from "../ui/gradient-button";

// Hero section inspirado na referência enviada, adaptado para o branding Fusion Pay.
// - Cores: preto (#0b0b0f), branco, laranja neon (#FF5722)
// - Totalmente responsivo
// - Cards flutuantes simulando dashboard/atividade
// - Acessível (aria-labels e foco visível)
// - Botões/CTAs claros

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden bg-background text-foreground pt-32 pb-24 md:pt-40 md:pb-32">
      <Header />
      {/* Glow/accents de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 -top-32 h-96 w-96 rounded-full blur-3xl opacity-20" style={{
          background:
            "radial-gradient(closest-side, hsl(var(--primary)), transparent)",
        }} />
        <div className="absolute -right-48 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl opacity-15" style={{
          background:
            "radial-gradient(closest-side, hsl(var(--primary)), transparent)",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
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
