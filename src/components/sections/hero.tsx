"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Zap, Clock, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const FusionPayLogoMark = ({ className }: { className?: string }) => (
  <svg
    className={cn("w-10 h-10", className)}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 0L25 5V15L35 20L25 25V35L20 40L15 35V25L5 20L15 15V5L20 0Z"
      fill="url(#logo-gradient)"
    />
    <defs>
      <linearGradient id="logo-gradient" x1="5" y1="0" x2="35" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF6A00" />
        <stop offset="1" stopColor="#FF7A1A" />
      </linearGradient>
    </defs>
  </svg>
);

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

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={ref} className="relative bg-[#0B0B0B] text-white overflow-hidden py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, #FF6A00 1px, transparent 1px),
          linear-gradient(to bottom, #FF6A00 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 80% 50% at 50% 40%, white, transparent 90%)'
      }} />
      
      {/* Radial Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-primary/10 rounded-full blur-3xl -z-10" />

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 bg-[#141414] border border-[#1F1F1F] rounded-full px-4 py-1.5 text-xs">
          <Zap className="w-3 h-3 text-primary" />
          <span>Gateway de Pagamentos Premium</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-6">
          <FusionPayLogoMark className="w-12 h-12 md:w-16 md:h-16" />
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Fusion Pay
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl text-[#CFCFCF] mb-4">
          O gateway de pagamentos{' '}
          <span className="text-primary font-semibold relative">
            rápido
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 blur-[2px]"></span>
          </span>,{' '}
          <span className="text-primary font-semibold relative">
            seguro
             <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 blur-[2px]"></span>
          </span> e feito para quem quer{' '}
          <span className="text-primary font-semibold relative">
            crescer
             <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 blur-[2px]"></span>
          </span>.
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-[#CFCFCF]/70 mb-10">
          Saque instantâneo, taxas negociáveis e tecnologia de ponta.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button 
            onClick={handleScrollToContact}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6A00] to-[#FF7A1A] text-white font-semibold rounded-lg shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
          >
            Entrar em contato e negocie suas taxas
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div custom={0} variants={featureVariants} className="flex flex-col items-center gap-2">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">D+0</div>
            <div className="text-sm sm:text-base text-white">Saque Instantâneo</div>
          </motion.div>
          <motion.div custom={1} variants={featureVariants} className="flex flex-col items-center gap-2">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">24/7</div>
            <div className="text-sm sm:text-base text-white">Suporte Humano</div>
          </motion.div>
          <motion.div custom={2} variants={featureVariants} className="flex flex-col items-center gap-2">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">100%</div>
            <div className="text-sm sm:text-base text-white">Seguro</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
