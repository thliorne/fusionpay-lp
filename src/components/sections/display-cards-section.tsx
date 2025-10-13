"use client";
import { Check } from "lucide-react";

export function DisplayCardsSection() {
  return (
    <section className="relative bg-[#0B0B0B] text-white">
      <div className="container mx-auto px-4 md:px-6 xl:px-8 pt-12 md:pt-20 xl:pt-28 pb-14 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-10 items-center">
          {/* Left: Giant Title */}
          <div className="lg:col-span-6">
            <h1 className="font-extrabold tracking-tight leading-[.9]">
              <span className="block text-5xl md:text-7xl xl:text-8xl">
                DIGA ADEUS AOS
              </span>
              <span className="block text-5xl md:text-7xl xl:text-8xl">
                PROBLEMAS DE
              </span>
              <span className="block text-5xl md:text-7xl xl:text-8xl text-[#FF5722]">
                PAGAMENTO
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-neutral-400 max-w-xl">
              Deixe para trás as dores dos gateways tradicionais e abrace a eficiência real da Fusion Pay.
            </p>
          </div>

          {/* Right: Stacked Cards */}
          <div
            className="lg:col-span-6 relative group h-[320px] md:h-[380px] xl:h-[420px]"
            aria-label="Cards com benefícios da Fusion Pay"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute right-10 top-10 w-72 h-72 rounded-full bg-[#FF5722] opacity-[0.08] blur-3xl"></div>
            </div>

            {/* Back Card */}
            <div className="hidden md:block absolute right-6 top-10 -rotate-2 translate-y-6 scale-[0.98] opacity-70 rounded-2xl bg-white/95 text-neutral-900 shadow-2xl ring-1 ring-black/5 backdrop-blur-sm p-5 w-[85%] max-w-[520px] transition-transform duration-500 group-hover:translate-y-0">
              <div className="text-sm text-neutral-600">Suporte 24/7 • Antifraude ativo • Integrações</div>
            </div>

            {/* Middle Card */}
            <div className="hidden md:block absolute right-3 top-6 translate-y-3 scale-[0.99] opacity-85 rounded-2xl bg-white/95 text-neutral-900 shadow-2xl ring-1 ring-black/5 backdrop-blur-sm p-5 w-[88%] max-w-[540px] transition-transform duration-500 group-hover:-translate-y-0.5">
              <div className="text-sm text-neutral-600">Taxas negociáveis • Pix instantâneo • Estabilidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
