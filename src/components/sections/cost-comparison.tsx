"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Slider } from '@/components/ui/slider';
import { PiggyBank } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const controls = {
      stop: () => {},
    };

    const startAnimation = (from: number, to: number) => {
      const duration = 1000;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= duration) {
          node.textContent = to.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          setDisplayValue(to);
          return;
        }

        const progress = elapsedTime / duration;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const currentValue = from + (to - from) * easedProgress;
        node.textContent = currentValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
        requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    };

    startAnimation(displayValue, value);

    return () => controls.stop();
  }, [value]);

  return <span ref={ref}>{displayValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>;
};

export function CostComparison() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Default values from data attributes
  const [initialRevenue, setInitialRevenue] = useState(110000);
  const [minRevenue, setMinRevenue] = useState(5000);
  const [maxRevenue, setMaxRevenue] = useState(1000000);
  const [step, setStep] = useState(1000);
  const [traditionalRate, setTraditionalRate] = useState(4.5);
  const [fusionRate, setFusionRate] = useState(2.9);
  const [traditionalFixedFee, setTraditionalFixedFee] = useState(0);
  const [fusionFixedFee, setFusionFixedFee] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      const ds = sectionRef.current.dataset;
      setInitialRevenue(parseFloat(ds.faturamentoInicial || '110000'));
      setMinRevenue(parseFloat(ds.faturamentoMin || '5000'));
      setMaxRevenue(parseFloat(ds.faturamentoMax || '1000000'));
      setStep(parseFloat(ds.passoSlider || '1000'));
      setTraditionalRate(parseFloat(ds.taxaTradicional || '4.5'));
      setFusionRate(parseFloat(ds.taxaFusion || '2.9'));
      setTraditionalFixedFee(parseFloat(ds.tarifaFixaTradicional || '0'));
      setFusionFixedFee(parseFloat(ds.tarifaFixaFusion || '0'));
    }
  }, []);

  const [revenue, setRevenue] = useState(initialRevenue);

  useEffect(() => {
    setRevenue(initialRevenue);
  }, [initialRevenue]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };
  
  const custoTrad = revenue * (traditionalRate / 100) + traditionalFixedFee;
  const custoFusion = revenue * (fusionRate / 100) + fusionFixedFee;
  const economiaMensal = Math.max(custoTrad - custoFusion, 0);
  const reducaoPct = custoTrad > 0 ? (economiaMensal / custoTrad) * 100 : 0;
  const economiaAnual = economiaMensal * 12;

  const handleSliderChange = (value: number[]) => {
    setRevenue(value[0]);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#0B0B0B] text-white py-20 md:py-32 relative overflow-hidden"
      data-faturamento-inicial="110000"
      data-faturamento-min="5000"
      data-faturamento-max="1000000"
      data-passo-slider="1000"
      data-taxa-tradicional="4.5"
      data-taxa-fusion="2.9"
      data-tarifa-fixa-tradicional="0"
      data-tarifa-fixa-fusion="0"
    >
      <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FF6A00%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2 text-sm font-bold tracking-widest uppercase text-primary">
            <PiggyBank className="w-4 h-4" />
            ECONOMIA REAL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Quanto você pode{" "}
            <span className="relative inline-block">
              economizar
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/70 rounded-full blur-[6px]"></span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Compare os custos e veja o impacto direto no seu lucro com taxas negociáveis.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#121212]/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 md:p-10 shadow-[0_0_40px_rgba(255,106,0,0.1)]"
        >
          <div className="text-center mb-8">
            <label className="text-sm text-muted-foreground mb-2 block">Seu faturamento mensal estimado</label>
            <div className="text-4xl md:text-5xl font-bold text-white tabular-nums tracking-tighter">
              {formatCurrency(revenue)}
            </div>
            <span className="text-xs text-muted-foreground">por mês</span>
          </div>
          
          <Slider
            value={[revenue]}
            onValueChange={handleSliderChange}
            min={minRevenue}
            max={maxRevenue}
            step={step}
            className="w-full mb-10"
          />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Gateway Tradicional */}
            <div className="bg-black/20 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white">Gateway Tradicional</h3>
              <p className="text-sm text-muted-foreground mb-4">Taxa média: {traditionalRate.toFixed(1)}%</p>
              <div className="text-3xl md:text-4xl font-bold text-white tabular-nums">
                <AnimatedCounter value={custoTrad} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">em taxas mensais</p>
            </div>

            {/* Fusion Pay */}
            <div className="bg-black/20 border border-primary/50 rounded-xl p-6 relative overflow-hidden ring-2 ring-primary/20">
               <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-bl-lg">
                ECONOMIA
              </div>
              <h3 className="font-semibold text-white">Fusion Pay</h3>
              <p className="text-sm text-muted-foreground mb-4">Taxa negociável: {fusionRate.toFixed(1)}%</p>
              <div className="text-3xl md:text-4xl font-bold text-primary tabular-nums">
                 <AnimatedCounter value={custoFusion} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">em taxas mensais</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-green-500/0 border border-green-500/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-green-300">Sua economia mensal</p>
              <div className="text-3xl font-bold text-white tabular-nums">
                <AnimatedCounter value={economiaMensal} />
              </div>
            </div>
             <div className="h-12 w-px bg-green-500/20 hidden md:block"></div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-bold text-green-400 tabular-nums">
                {reducaoPct.toFixed(1)}%
              </div>
              <p className="text-sm text-green-300">de redução</p>
            </div>
          </div>
          
          <p className="text-center text-xs text-muted-foreground mt-6">
            Economia anual projetada: <span className="font-semibold text-white">{formatCurrency(economiaAnual)}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
