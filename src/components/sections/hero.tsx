"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const microPillsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={ref} className="relative bg-[#0B0B0B] text-white overflow-hidden min-h-screen flex flex-col justify-center py-24 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-[0.04]" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, hsl(var(--primary)) 1px, transparent 1px),
          radial-gradient(circle at 80% 80%, hsl(250, 100%, 70%) 1px, transparent 1px),
          linear-gradient(to right, hsla(var(--primary), 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, hsla(var(--primary), 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px, 80px 80px, 40px 40px, 40px 40px',
        maskImage: 'radial-gradient(ellipse 90% 60% at 50% 50%, white, transparent 100%)'
      }} />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[100%] h-[80%] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-gradient" />

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex-grow flex flex-col justify-center"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 bg-black/30 border border-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs self-center">
          <Zap className="w-3 h-3 text-primary" />
          <span>Gateway de Pagamentos Premium</span>
        </motion.div>
        
        <motion.h1 
            id="hero-title"
            variants={itemVariants} 
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-tight max-w-4xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Receba mais com um gateway <span className="relative">inteligente<span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/70 rounded-full blur-lg"></span></span>.
        </motion.h1>

        <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg sm:text-xl text-white/70 mt-6 mb-10">
          Saque instantâneo, taxas negociáveis e segurança de nível bancário.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={handleScrollTo('contact')}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-orange-500 text-white font-semibold rounded-lg shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
          >
            Entrar em contato e negociar minhas taxas
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <a href="#integrations" onClick={handleScrollTo('integrations')} className="text-sm font-medium text-white/80 hover:text-white transition-colors group flex items-center gap-1">
            Ver integrações
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
            <motion.div custom={0} variants={microPillsVariants} className="flex items-center justify-center gap-2 text-sm bg-black/30 border border-white/10 rounded-full px-4 py-2">
                <span className="font-bold text-primary">D+0</span>
                <span className="text-white/80">Saque instantâneo</span>
            </motion.div>
            <motion.div custom={1} variants={microPillsVariants} className="flex items-center justify-center gap-2 text-sm bg-black/30 border border-white/10 rounded-full px-4 py-2">
                <span className="font-bold text-primary">24/7</span>
                <span className="text-white/80">Suporte humano</span>
            </motion.div>
            <motion.div custom={2} variants={microPillsVariants} className="flex items-center justify-center gap-2 text-sm bg-black/30 border border-white/10 rounded-full px-4 py-2">
                <span className="font-bold text-primary">100%</span>
                <span className="text-white/80">Seguro</span>
            </motion.div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 w-full h-[30vh] sm:h-[40vh] z-0 opacity-80 bg-gradient-to-t from-black via-black/80 to-transparent">
      </div>
    </section>
  );
}
