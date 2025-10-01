"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { useWindowSize } from "@/hooks/use-window-size";

const AnimatedParticles = () => {
  const [particles, setParticles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((style, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#FF6A00] rounded-full animate-pulse"
          style={style}
        />
      ))}
    </div>
  );
};

const GridPattern = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

const CircuitPattern = () => {
  return (
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="#FF6A00"/>
            <circle cx="90" cy="90" r="2" fill="#FF6A00"/>
            <line x1="10" y1="10" x2="50" y2="50" stroke="#FF6A00" strokeWidth="1"/>
            <line x1="50" y1="50" x2="90" y2="90" stroke="#FF6A00" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

const AnimatedCTAButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className={cn(
        "group relative px-8 py-4 bg-[#FF6A00] text-white font-semibold rounded-full",
        "transition-all duration-300 ease-out",
        "hover:scale-105 hover:shadow-[0_0_30px_rgba(255,106,0,0.6)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        "flex items-center gap-2 text-lg"
      )}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      <div className="absolute inset-0 rounded-full bg-[#FF6A00] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
    </button>
  );
};

const DashboardMockup = () => {
    const [barHeights, setBarHeights] = useState<string[]>([]);

    useEffect(() => {
        const newBarHeights = Array.from({ length: 12 }).map(() => `${Math.random() * 40 + 20}px`);
        setBarHeights(newBarHeights);
    }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      <div className="relative transform-gpu transition-transform duration-500 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00] via-transparent to-[#FF6A00] opacity-20 blur-3xl animate-pulse" />
                 <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 shadow-2xl max-w-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF6A00] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Bem-vindo, Magnata!</h3>
                <p className="text-zinc-400 text-sm">Dashboard Fusion Pay</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
           <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#FF6A00]" />
                <span className="text-zinc-400 text-xs">Vendas Hoje</span>
              </div>
              <p className="text-white font-bold text-2xl">R$ 47.890</p>
              <p className="text-green-500 text-xs mt-1">+23% vs ontem</p>
            </div>
                         <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-[#FF6A00]" />
                <span className="text-zinc-400 text-xs">Transações</span>
              </div>
              <p className="text-white font-bold text-2xl">1.247</p>
              <p className="text-green-500 text-xs mt-1">+18% vs ontem</p>
            </div>
                         <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-[#FF6A00]" />
                <span className="text-zinc-400 text-xs">Taxa Sucesso</span>
              </div>
              <p className="text-white font-bold text-2xl">99.8%</p>
              <p className="text-green-500 text-xs mt-1">Excelente!</p>
            </div>
          </div>
           <div className="bg-gradient-to-r from-[#FF6A00]/20 to-transparent border border-[#FF6A00]/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-zinc-400 text-sm mb-1">Pix Recebido Agora</p>
                <p className="text-white font-bold text-3xl">R$ 12.450,00</p>
              </div>
              <div className="w-16 h-16 bg-[#FF6A00] rounded-full flex items-center justify-center animate-pulse">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
           <div className="mt-4 flex gap-2">
            {barHeights.map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-[#FF6A00]/30 rounded-sm"
                style={{ height }}
              />
            ))}
          </div>
        </div>
         <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
          <div className="p-4 h-full flex flex-col">
            <div className="flex-1 bg-zinc-800 rounded-lg mb-2" />
            <div className="flex gap-2">
              <div className="flex-1 bg-zinc-800 rounded h-12" />
              <div className="flex-1 bg-[#FF6A00] rounded h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FusionPayHero = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <GridPattern />
      <CircuitPattern />
      <AnimatedParticles />
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent" />
       <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className={cn(
          "grid gap-12 items-center w-full",
          isMobile ? "grid-cols-1 text-center" : "grid-cols-2"
        )}>
          <div className={cn("space-y-8", isMobile ? "order-1" : "")}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm">
              <Zap className="w-4 h-4 text-[#FF6A00]" />
              <span className="text-zinc-300">Gateway Premium</span>
            </div>
             <h1 className={cn(
              "font-bold leading-tight",
              isMobile ? "text-4xl" : "text-6xl lg:text-7xl"
            )}>
              <span className="block text-white">Seu dinheiro</span>
              <span className="block text-white">direto na conta,</span>
              <span className="block bg-gradient-to-r from-[#FF6A00] to-orange-500 bg-clip-text text-transparent">
                sem retenções.
              </span>
            </h1>
             <p className={cn(
              "text-zinc-400 leading-relaxed",
              isMobile ? "text-base" : "text-lg lg:text-xl max-w-xl"
            )}>
              A Fusion Pay é o gateway que conecta sua loja aos principais meios de pagamento com{" "}
              <span className="text-[#FF6A00] font-semibold">segurança</span>,{" "}
              <span className="text-[#FF6A00] font-semibold">velocidade</span> e{" "}
              <span className="text-[#FF6A00] font-semibold">transparência</span>.
            </p>
             <div className={cn(
              "flex gap-4",
              isMobile ? "flex-col items-center" : "flex-row items-center"
            )}>
              <AnimatedCTAButton>
                Quero começar agora
              </AnimatedCTAButton>
                             <div className="flex items-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#FF6A00]" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FF6A00]" />
                  <span>Setup em 5min</span>
                </div>
              </div>
            </div>
             <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-white">99.8%</p>
                <p className="text-sm text-zinc-400">Taxa de sucesso</p>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <p className="text-3xl font-bold text-white">R$ 2.4Bi</p>
                <p className="text-sm text-zinc-400">Processados/ano</p>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm text-zinc-400">Suporte premium</p>
              </div>
            </div>
          </div>
           <div className={cn(
            "relative",
            isMobile ? "order-2 h-[500px]" : "h-[600px]"
          )}>
            <DashboardMockup />
          </div>
        </div>
      </div>
       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent" />
             <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF6A00] rounded-full blur-[150px] opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FF6A00] rounded-full blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

    