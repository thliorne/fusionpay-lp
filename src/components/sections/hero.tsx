"use client";

import { useEffect, useState } from "react";
import { Header } from '@/components/layout/header';

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
    <section className="relative overflow-hidden bg-background text-foreground pt-32 pb-16 md:pt-40 md:pb-24">
      <Header />
      {/* Glow/accents de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-24 h-72 w-72 rounded-full blur-3xl opacity-30" style={{
          background:
            "radial-gradient(closest-side, hsl(var(--primary) / 0.25), transparent 70%)",
        }} />
        <div className="absolute right-[-120px] top-1/3 h-80 w-80 rounded-full blur-3xl opacity-30" style={{
          background:
            "radial-gradient(closest-side, hsl(var(--primary) / 0.18), transparent 70%)",
        }} />
        <div className="absolute bottom-[-120px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl opacity-25" style={{
          background:
            "radial-gradient(closest-side, hsl(var(--foreground) / 0.08), transparent 70%)",
        }} />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-24 md:grid-cols-2 lg:gap-16">
        {/* Coluna Esquerda: Copy + CTAs */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            Uptime 99,9% • Saque D+0 direto na conta
          </div>

           <h1 className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
             Construa um <span className="text-foreground">gateway</span> que
             <br className="hidden sm:block" />
             <span className="text-primary">acelera</span> seu crescimento
           </h1>

           <p className="mt-5 max-w-xl text-lg text-foreground/70">
             A Fusion Pay reúne velocidade, antifraude inteligente e liquidez instantânea.
             Mova seus recebíveis no ritmo do seu negócio e venda com previsibilidade.
           </p>

           <div className="mt-7 flex flex-wrap items-center gap-3">
             <a
               href="#contact"
               className="group inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
               aria-label="Abrir conta agora"
             >
               Abrir conta agora
               <svg className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5l7 7-7 7v-4H4v-6h9V5z"/></svg>
             </a>
             <a
               href="#contact"
               className="inline-flex items-center justify-center rounded-xl border border-foreground/15 bg-foreground/5 px-5 py-3 font-semibold text-foreground/90 backdrop-blur transition hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
               aria-label="Negociar taxas"
             >
               Negociar taxas
             </a>
           </div>

        </div>

        {/* Coluna Direita: Mockup/Cartões */}
        <div className="relative">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="rounded-2xl border border-foreground/10 bg-gradient-to-b from-foreground/[0.04] to-foreground/[0.02] p-4 shadow-2xl backdrop-blur">
              {/* Top bar */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary"/>
                  <div className="h-3 w-3 rounded-full bg-foreground/25"/>
                  <div className="h-3 w-3 rounded-full bg-foreground/10"/>
                </div>
                <span className="rounded-md bg-foreground/5 px-2 py-1 text-[10px] text-foreground/70">Dashboard • Live</span>
              </div>

              {/* Cards internos */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <StatCard title="Transferência Recebida" value="R$ 15.297,00" positive />
                <StatCard title="Aprovação" value="98,7%" />
                <MiniChart />
                <Tasks />
              </div>
            </div>

            {/* Cards flutuantes */}
            <FloatingCard className="-left-6 -top-6 rotate-[-4deg]" label="Joana Watson" role="UI designer" time="24:15:05" />
            <FloatingBadge className="right-6 -top-8" text="Antifraude Ativo" />
            <FloatingBadge className="-right-4 bottom-10" text="PIX Instantâneo" />
          </div>
        </div>
      </div>

       {/* Separador sutil */}
       <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    </section>
  );
}

function LogoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-foreground/10 bg-foreground/5 px-3 py-2 text-xs text-foreground/70">
      <div className="h-4 w-4 rounded-sm bg-foreground/20" />
      {label} Checkout
    </div>
  );
}

function StatCard({ title, value, positive }: { title: string; value: string; positive?: boolean }) {
  return (
    <div className="rounded-xl border border-foreground/10 bg-foreground/[0.04] p-4">
      <p className="text-xs text-foreground/60">{title}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <p className="text-lg font-semibold text-foreground">{value}</p>
        {positive !== undefined && (
          <span className={`text-[10px] ${positive ? "text-green-400" : "text-red-400"}`}>
            {positive ? "▲" : "▼"} {positive ? "+3.2%" : "-1.1%"}
          </span>
        )}
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
        <div className="h-full w-2/3 bg-primary" />
      </div>
    </div>
  );
}

function MiniChart() {
  return (
    <div className="rounded-xl border border-foreground/10 bg-foreground/[0.04] p-4">
      <p className="text-xs text-foreground/60">Análise</p>
      <div className="mt-3 h-28 w-full">
        <svg viewBox="0 0 200 100" className="h-full w-full">
          <polyline
            fill="none"
            stroke="currentColor"
            className="text-foreground/25"
            strokeWidth="2"
            points="0,80 50,60 90,70 120,40 160,50 200,30"
          />
          <polyline
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            points="0,90 40,70 80,72 120,36 160,44 200,22"
          />
        </svg>
      </div>
    </div>
  );
}

function Tasks() {
  return (
    <div className="rounded-xl border border-foreground/10 bg-foreground/[0.04] p-4">
      <p className="text-xs text-foreground/60">To do</p>
      <div className="mt-3 space-y-3">
        {[
          { label: "Revisar webhooks", done: true },
          { label: "Testar antifraude", done: false },
          { label: "Configurar Pix", done: false },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`grid h-4 w-4 place-items-center rounded border ${
                t.done
                  ? "border-green-400/40 bg-green-400/20"
                  : "border-foreground/20 bg-transparent"
              }`}
              aria-hidden
            >
              {t.done && (
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-green-400" fill="currentColor">
                  <path d="M9 16.17l-3.88-3.88-1.42 1.41L9 19 21.3 6.7l-1.41-1.41z" />
                </svg>
              )}
            </span>
            <span className={t.done ? "text-foreground/50 line-through" : "text-foreground/80"}>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FloatingCard({ className = "", label, role, time }: { className?: string; label: string; role: string; time: string }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <div
      className={`absolute ${className} hidden select-none rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground/80 shadow-xl backdrop-blur sm:flex items-center gap-3 ${
        isMounted ? "animate-[float_6s_ease-in-out_infinite]" : ""
      }`}
      style={{
        transformOrigin: "center",
      }}
    >
      <div className="h-9 w-9 rounded-xl bg-foreground/10" />
      <div className="leading-tight">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">{label}</span>
          <span className="rounded-md bg-green-400/15 px-2 py-0.5 text-[10px] text-green-300">online</span>
        </div>
        <p className="text-[12px] text-foreground/60">{role}</p>
        <p className="text-[11px] text-foreground/40">Tempo: {time}</p>
      </div>
    </div>
  );
}

function FloatingBadge({ className = "", text }: { className?: string; text: string }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`absolute ${className} hidden select-none rounded-xl border border-foreground/10 bg-background/60 px-3 py-2 text-xs text-foreground/80 shadow-xl backdrop-blur sm:block ${
        isMounted ? "animate-[float_7s_ease-in-out_infinite]" : ""
      }`}
    >
      {text}
    </div>
  );
}
      