"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  TrendingUp,
  ShoppingCart,
  Boxes,
  Store,
  Truck,
  BookCopy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    text: "D+0 no PIX",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    text: "Antifraude ativo e configurável",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    text: "Taxas competitivas e negociáveis",
  },
];

const businessTypes = [
  { name: 'E-commerce', icon: <ShoppingCart className="w-5 h-5" /> },
  { name: 'SaaS', icon: <Boxes className="w-5 h-5" /> },
  { name: 'Marketplaces', icon: <Store className="w-5 h-5" /> },
  { name: 'Dropshipping', icon: <Truck className="w-5 h-5" /> },
  { name: 'Infoprodutos', icon: <BookCopy className="w-5 h-5" /> },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12.04 2.75c-5.14 0-9.29 4.15-9.29 9.29s4.15 9.29 9.29 9.29c1.55 0 3.03-.38 4.34-1.09l3.14.82c.23.06.46-.17.4-.4l-.82-3.14c.7-1.3.1-2.79 1.09-4.34 0-5.14-4.15-9.29-9.29-9.29zm-2.07 12.03c-.22.42-.87.8-1.18.85-.31.05-.65.05-1-.06-.35-.1-.83-.34-1.58-1.08-.94-.94-1.55-2.1-1.6-2.2-.05-.1-.44-.6.06-1.1.49-.5.81-.6 1.1-.6.28 0 .49.05.65.34.16.29.56.9.61 1 .05.1.08.16 0 .27-.08.1-.18.2-.31.32-.13.12-.24.2-.35.34-.1.13-.2.24-.1.38.12.18.56.76 1.2 1.41.87.87 1.6 1.12 1.8.18.2-.95.04-1.78.04-1.78.25-.04.5-.06.75-.06.25 0 .5.02.75.06s.2.75.2 1.78c0 .26.1.48.26.65.17.17.38.26.6.26h.02c.26 0 .5-.1.68-.28.2-.2.3-.44.34-.7.04-.25.04-.5.04-.75s-.02-.5-.06-.75c-.04-.25-.04-.5-.04-.75l.02 1.77z" clipRule="evenodd" /></svg>
);

export function ContactSection() {
  return (
    <section id="contact" className="bg-background text-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FF6A00%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%200v20H0v-2h18V0h2zm20%2020v20h-2V22h18v-2H20zM0%200h2v2H0V0zm40%2040h-2v-2h2v2z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-repeat"></div>
        </div>
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur-lg border border-border/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-black/20"
        >
          <div className="text-center">
            <div className="inline-block bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1 mb-4">
              Gateway premium • Suporte humano
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Negocie suas taxas e receba no <span className="text-primary">D+0</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Fale com um especialista e tenha a melhor condição para PIX, cartão e boleto — com antifraude inteligente.
            </p>
            <ul className="flex justify-center items-center gap-6 text-left mb-10 max-w-3xl mx-auto">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-background/50 p-4 rounded-lg">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="text-foreground whitespace-nowrap">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="h-12 text-base px-6 rounded-full group bg-green-500 hover:bg-green-600 text-white">
                    <a 
                      href="https://wa.me/5511999999999?text=Quero%20negociar%20minhas%20taxas%20na%20Fusion%20Pay" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      data-analytics="cta_whatsapp_cta"
                    >
                        <WhatsAppIcon className="w-5 h-5 mr-2"/>
                        Falar no WhatsApp
                    </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-12 text-lg px-8 rounded-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Negocie suas taxas
                </Button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">Confiança de mais de 10.000+ empresas</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-muted-foreground/70">
              {businessTypes.map(type => (
                <div key={type.name} className="flex items-center gap-2">
                  {type.icon}
                  <span className="text-sm">{type.name}</span>
                </div>
              ))}
            </div>
          </div>
          
           <p className="text-xs text-center text-muted-foreground mt-12">
             *Liquidação D+0 sujeita à análise e política de risco.
           </p>
        </motion.div>
      </div>
    </section>
  );
}
