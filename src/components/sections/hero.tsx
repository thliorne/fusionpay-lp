"use client";
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import Link from 'next/link';

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x > width || p.x < 0) p.speedX *= -1;
        if (p.y > height || p.y < 0) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 122, 0, 0.5)';
        ctx.fill();
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />;
};


export function HeroSection() {

  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <section className="relative bg-gradient-to-b from-black to-[#111111] text-white overflow-hidden min-h-screen flex flex-col justify-center items-center py-24 sm:py-32">
      <Header />
      <Particles />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-tight"
            style={{ 
              textShadow: '0 0 20px rgba(255,122,0,0.5), 0 0 30px rgba(255,122,0,0.3)',
              color: '#FF7A00'
            }}
        >
          Fusion Pay
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 mt-6 mb-10">
          O gateway rápido, seguro e feito para o seu negócio escalar.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button 
            asChild
            size="lg"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/60 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black animate-pulse-orange"
          >
            <Link href="https://www.instagram.com/fusionpaybr/" target="_blank">
              Negocie suas taxas agora
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

       <style jsx>{`
        @keyframes pulse-orange {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 122, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 35px rgba(255, 122, 0, 0.7);
          }
        }
        .animate-pulse-orange {
          animation: pulse-orange 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
      `}</style>
    </section>
  );
}
