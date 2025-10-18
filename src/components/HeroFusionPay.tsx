"use client";
import React, { useEffect, useState } from "react";

/**
 * Hero section premium/high-luxury para a Fusion Pay.
 * - Fundo preto com glow laranja e partículas
 * - Headline grande com palavras em laranja
 * - CTAs lado a lado
 * - Cards de transação (glassmorphism) à direita
 * - Selos de confiança com ícones minimalistas
 * - Animações: glow-pulse, float, fade-in e slide-up
 */
export default function HeroFusionPay() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-20 section-surface">
      {/* Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div className="text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-white/80 animate-fadeIn">
            <span className="inline-block w-4 h-4 rounded-full bg-fusion-orange/90 shadow-[0_0_12px_rgba(255,87,34,0.8)]" />
            Gateway de Pagamentos Digital
          </div>

          {/* Headline */}
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight animate-slideUp">
            Transforme{" "}
            <span className="text-fusion-orange">Complexidade</span>
            <br className="hidden md:block" />
            em Crescimento{" "}
            <span className="text-fusion-orange">Instantâneo</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70 animate-fadeIn">
            O gateway de pagamentos digital com o motor de processamento mais
            rápido e o antifraude mais inteligente do mercado.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fadeIn">
            <a
              href="#criar-conta"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-fusion-orange text-black font-semibold shadow-[0_0_24px_rgba(255,87,34,0.45)] hover:shadow-[0_0_36px_rgba(255,87,34,0.6)] transition-shadow"
            >
              Criar Conta Grátis
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              Fale Conosco
            </a>
          </div>

          {/* Confiança + ícones */}
          <div className="mt-10 space-y-3 animate-fadeIn">
            <p className="text-sm text-white/60">
              Confiança de mais de <strong>10.000+ empresas</strong>
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
              <div className="badge-soft">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                </svg>
                Máxima Segurança
              </div>
              <div className="badge-soft">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Ultra Rápido
              </div>
              <div className="badge-soft">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="M19 13l-5-5-4 4-3-3" />
                </svg>
                Crescimento Real
              </div>
            </div>
          </div>
        </div>

        {/* Mockups à direita */}
        <div className="relative">
          {/* Card grande */}
          <div className={`glass-card p-6 rounded-2xl border border-white/10 shadow-2xl ${mounted ? "animate-slideUp" : "opacity-0"}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/90">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-fusion-orange/90">
                  <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </span>
                <span className="text-sm">Transação Pix</span>
              </div>
              <span className="text-emerald-400 text-sm font-semibold">Aprovada</span>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between text-white/70"><span>Valor</span><span>R$ 2.547,90</span></div>
              <div className="flex justify-between text-fusion-orange"><span>Tempo de Processamento</span><span>0.3s</span></div>
              <div className="flex justify-between text-white/70"><span>Taxa Aplicada</span><span>1.99%</span></div>
              <div className="flex justify-between items-center text-white/70">
                <span>Score Antifraude</span>
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-emerald-400 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-white/60">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              Protegido por Fusion Shield
            </div>
          </div>

          {/* Mini card sobreposto */}
          <div className={`absolute -bottom-8 left-8 w-[260px] glass-card p-4 rounded-xl border border-white/10 shadow-xl ${mounted ? "animate-fadeIn" : "opacity-0"}`}>
            <div className="text-white/80 text-sm">Taxa de Aprovação</div>
            <div className="mt-2 flex items-end gap-2">
              <div className="text-3xl font-extrabold text-white">98.7%</div>
              <div className="text-emerald-400 text-xs font-semibold">+2.3% vs mês anterior</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
