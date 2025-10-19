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
import Image from "next/image";
import Link from "next/link";

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

export function ContactSection() {
  return (
    <section id="contact" className="bg-background text-white py-20 md:py-32 relative overflow-hidden">
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
              <span className="text-primary">Negocie</span> suas taxas e escale com <span className="text-primary">confiança</span>
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Fale com um especialista e tenha a melhor condição para PIX, cartão e boleto.
            </p>
            <ul className="flex justify-center items-center gap-6 text-left mb-10 max-w-3xl mx-auto">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-background/50 p-4 rounded-lg">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="text-white whitespace-nowrap">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="h-12 text-base px-6 rounded-full group bg-green-500 hover:bg-green-600 text-white">
                    <a 
                      href="https://api.whatsapp.com/send/?phone=79644350321&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20FusionPay&type=phone_number&app_absent=0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      data-analytics="cta_whatsapp_cta"
                      className="flex items-center gap-2"
                    >
                        <Image src="https://i.imgur.com/ZOF9KMD.png" alt="WhatsApp Icon" width={20} height={20} />
                        Falar no WhatsApp
                    </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-12 text-lg px-8 rounded-full"
                  asChild
                >
                  <Link href="https://app.fusionpaybr.com.br/auth/register">Criar conta</Link>
                </Button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-white mb-6">Confiança de mais de 10.000+ empresas</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-white/70">
              {businessTypes.map(type => (
                <div key={type.name} className="flex items-center gap-2">
                  {type.icon}
                  <span className="text-sm">{type.name}</span>
                </div>
              ))}
            </div>
          </div>
          
           <p className="text-xs text-center text-white mt-12">
             *Liquidação D+0 sujeita à análise e política de risco.
           </p>
        </motion.div>
      </div>
    </section>
  );
}
