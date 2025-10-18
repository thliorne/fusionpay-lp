"use client";

import { useEffect, useState } from "react";
import { Header } from '@/components/layout/header';
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronUp, Lock, TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div
    className={cn(
      "relative rounded-2xl border border-white/10 bg-black/30 p-4 shadow-xl shadow-black/40 backdrop-blur-sm",
      "before:pointer-events-none before:absolute before:-inset-px before:rounded-[17px] before:border before:border-orange-400/30 before:content-[''] before:[mask:linear-gradient(black,black)_content-box,linear-gradient(black,black)] before:[mask-composite:exclude]",
      className
    )}
  >
    {children}
  </div>
);

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  if (!mounted) {
    return (
      <section className="relative overflow-hidden bg-black text-white pt-32 pb-24 md:pt-40 md:pb-32">
        <Header />
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-black text-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-[20%] top-0 h-[80%] w-[80%] rounded-full bg-gradient-radial from-[#FF5722]/15 via-transparent to-transparent" />
        <div className="absolute -left-[20%] bottom-0 h-[60%] w-[60%] rounded-full bg-gradient-radial from-[#FF5722]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Coluna Esquerda: Texto */}
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-col items-start text-left"
          >
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
            >
              <Zap className="h-4 w-4 text-primary" />
              Gateway de Pagamentos Digital
            </motion.div>

            <motion.h1 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-balance text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-white"
            >
              Transforme <span className="text-primary">Complexidade</span> em Crescimento <span className="text-primary">Instantâneo</span>
            </motion.h1>

            <motion.p 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-6 max-w-xl text-lg text-white/70"
            >
              O gateway de pagamentos digital com o motor de processamento mais rápido e o antifraude mais inteligente do mercado.
            </motion.p>

            <motion.div 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg" className="h-auto py-4 px-9 text-base group">
                <Link href="#contact">
                  Criar Conta Grátis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-auto py-4 px-9 text-base border-white/30 bg-transparent hover:bg-white/10" asChild>
                <Link href="#contact">Fale Conosco</Link>
              </Button>
            </motion.div>
            
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-12 w-full">
              <p className="text-sm text-white/50 mb-4">Confiança de mais de 10.000+ empresas</p>
              <div className="flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2"><Lock size={16} className="text-primary" /> Máxima Segurança</div>
                <div className="flex items-center gap-2"><Zap size={16} className="text-primary" /> Ultra Rápido</div>
                <div className="flex items-center gap-2"><TrendingUp size={16} className="text-primary" /> Crescimento Real</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna Direita: Mockups */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full flex items-center justify-center -mt-12 md:mt-0"
          >
            <div className="relative w-full max-w-sm">
                <Card className="animate-float z-10 relative">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 size-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center border border-green-500/30">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Transação Pix Aprovada</p>
                      <p className="text-xs text-white/60">Hoje às 14:32</p>
                    </div>
                  </div>
                  <p className="text-4xl font-bold mt-4 tracking-tighter">R$ 2.547,90</p>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-white/60">Tempo de Processamento</p>
                      <p className="font-semibold text-white">0.3s</p>
                    </div>
                    <div>
                      <p className="text-white/60">Taxa Aplicada</p>
                      <p className="font-semibold text-white">1.98%</p>
                    </div>
                  </div>
                   <div className="mt-4">
                      <p className="text-xs text-white/60 mb-1">Score Antifraude</p>
                      <div className="w-full h-2 bg-white/10 rounded-full">
                        <div className="w-[95%] h-full bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                </Card>

                <Card className="absolute -bottom-16 -right-16 md:-right-24 z-20 animate-float" style={{ animationDelay: '0.5s' }}>
                   <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 size-8 rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/30">
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Taxa de Aprovação</p>
                      <p className="text-2xl font-bold text-white tracking-tighter">98.7%</p>
                      <p className="text-xs text-green-400 flex items-center"><ChevronUp size={14} className="-ml-1" />2.3% vs mês anterior</p>
                    </div>
                   </div>
                </Card>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
