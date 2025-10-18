"use client";
import React, { useEffect, useState } from "react";
import { DollarSign, Shield, Zap, Globe, TrendingUp, CreditCard } from "lucide-react";

/**
 * Hero section premium/high-luxury para a Fusion Pay.
 * - Fundo preto com glow laranja e partículas
 * - Headline grande com palavras em laranja
 * - CTAs lado a lado
 * - Esfera 3D de energia à direita com ícones orbitais
 * - Selos de confiança com ícones minimalistas
 * - Animações: glow-pulse, float, fade-in e slide-up
 */

const orbitalIcons = [
  { Icon: DollarSign, style: { animation: "spin 20s linear infinite", transform: "rotateY(40deg) rotateX(60deg) translateZ(160px)" } },
  { Icon: Shield, style: { animation: "spin 22s linear infinite reverse", transform: "rotateY(100deg) rotateX(80deg) translateZ(180px)" } },
  { Icon: Zap, style: { animation: "spin 18s linear infinite", transform: "rotateY(160deg) rotateX(100deg) translateZ(150px)" } },
  { Icon: Globe, style: { animation: "spin 25s linear infinite", transform: "rotateY(220deg) rotateX(70deg) translateZ(170px)" } },
  { Icon: TrendingUp, style: { animation: "spin 19s linear infinite reverse", transform: "rotateY(280deg) rotateX(90deg) translateZ(160px)" } },
  { Icon: CreditCard, style: { animation: "spin 23s linear infinite", transform: "rotateY(340deg) rotateX(50deg) translateZ(175px)" } },
];


const Orb = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-full h-full animate-float">
        <div className="relative w-full h-full [transform-style:preserve-3d]">
          {/* Esfera principal */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fusion-orange/70 via-amber-400/50 to-white/60 blur-lg" />
          
          {/* Núcleo pulsante */}
          <div className="absolute inset-[15%] rounded-full bg-white/90 shadow-[0_0_80px_20px_#FF5722] animate-pulse" />

          {/* Anéis orbitais */}
          <div className="absolute inset-0 transform-gpu [transform-style:preserve-3d]">
            {/* Anel 1 */}
            <div className="absolute inset-[5%] rounded-full border-2 border-fusion-orange/50 animate-[spin_12s_linear_infinite] [transform:rotateY(75deg)_rotateX(50deg)]" />
            {/* Anel 2 */}
            <div className="absolute inset-[10%] rounded-full border-2 border-white/40 animate-[spin_10s_linear_infinite_reverse] [transform:rotateY(60deg)_rotateX(30deg)]" />
            {/* Anel 3 */}
            <div className="absolute inset-[20%] rounded-full border border-amber-300/50 animate-[spin_8s_linear_infinite] [transform:rotateY(45deg)_rotateX(60deg)]" />
          </div>

          {/* Ícones Orbitais */}
          <div className="absolute inset-0 [transform-style:preserve-3d]">
            {orbitalIcons.map(({ Icon, style }, index) => (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 -mt-4 -ml-4 w-8 h-8 rounded-full flex items-center justify-center bg-fusion-orange/20 border border-fusion-orange/50 backdrop-blur-sm"
                style={style}
              >
                <Icon className="w-5 h-5 text-white/90" />
              </div>
            ))}
          </div>

          {/* Partículas orbitais */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-white rounded-full animate-[spin_15s_linear_infinite]"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: `${Math.cos(i * 36) * 150}px ${Math.sin(i * 36) * 150}px`,
                animationDelay: `${i * 1.5}s`
              }} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}


export default function HeroFusionPay() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-20">
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

        {/* Ícone 3D */}
        <div className="relative h-64 w-64 lg:h-96 lg:w-96 perspective-1000">
          <Orb />
        </div>
      </div>
    </section>
  );
}
