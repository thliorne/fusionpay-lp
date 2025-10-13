"use client";
import { Check, ShieldCheck, Zap, Percent, Puzzle, Headset } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    icon: <Percent className="size-5" />,
    title: "Chega de taxas abusivas",
    description: "Pague menos e receba mais com taxas transparentes e negociáveis."
  },
  {
    icon: <Zap className="size-5" />,
    title: "99,9% de uptime garantido",
    description: "Sua loja sempre no ar e suas vendas acontecendo, sem interrupções."
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Saque D+0 direto na conta",
    description: "Saque em minutos, sem dinheiro travado no gateway."
  },
  {
    icon: <Puzzle className="size-5" />,
    title: "Antifraude com IA",
    description: "Nosso sistema inteligente aprende a cada transação para te proteger."
  },
  {
    icon: <Headset className="size-5" />,
    title: "Transparência nas notificações",
    description: "Cada venda confirmada gera um evento real, sem webhooks falsos."
  },
  {
    icon: <Puzzle className="size-5" />,
    title: "Integrações rápidas",
    description: "Conecte-se a Stelar, Zedy, Luna e Vega em poucos cliques."
  }
];

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 }
};

export function DisplayCardsSection() {
  return (
    <section className="relative bg-background text-foreground py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Coluna Esquerda: Texto */}
          <div className="lg:col-span-7">
            <motion.div {...fadeInAnimation} transition={{ duration: 0.5 }}>
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1 mb-4">
                Por que Fusion Pay?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Diga adeus aos problemas de pagamento
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Velocidade, estabilidade e segurança para você vender sem travar.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex-shrink-0 size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Check className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Coluna Direita: Mockup */}
          <motion.div 
            className="lg:col-span-5 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto">
              {/* <!-- Trocar por imagem real do mockup da Fusion Pay --> */}
              <Image 
                src="https://i.imgur.com/FjoMLwJ.png" 
                alt="Mockup do aplicativo Fusion Pay mostrando notificações de pagamento e selo de saque mais rápido"
                fill
                className="object-cover rounded-2xl shadow-2xl shadow-primary/20 border border-border"
                data-ai-hint="fintech app notification"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
