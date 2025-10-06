"use client";
import { motion } from 'framer-motion';
import { Zap, Percent, Puzzle, Headset, ShieldCheck, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';

const differentials = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Saque instantâneo D+0",
    description: "Receba seu dinheiro na hora, sem esperar dias. Liquidez imediata para seu negócio crescer."
  },
  {
    icon: <Percent className="w-6 h-6 text-white" />,
    title: "Taxas baixas e negociáveis",
    description: "Negocie diretamente conosco e pague apenas pelo que faz sentido para seu volume."
  },
  {
    icon: <Puzzle className="w-6 h-6 text-white" />,
    title: "Integração completa",
    description: "Compatível com Stelar, Zedy, Luna e Vega Checkout. Implementação em minutos."
  },
  {
    icon: <Headset className="w-6 h-6 text-white" />,
    title: "Suporte humano 24h",
    description: "Time dedicado pronto para resolver qualquer questão, a qualquer momento."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Segurança nível bancário",
    description: "Certificações PCI-DSS, criptografia de ponta e proteção contra fraudes."
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-white" />,
    title: "Dashboard intuitivo",
    description: "Acompanhe todas as métricas em tempo real com interface elegante e clara."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export function DifferentialsSection() {
  const featuredIndex = 2; // "Integração completa" is the 3rd item (index 2)

  return (
    <section className="relative bg-[#0B0B0B] text-white py-20 md:py-32" aria-labelledby="diferenciais-title">
      <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_60%)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FF6A00%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%200v20H0v-2h18V0h2zm20%2020v20h-2V22h18v-2H20zM0%200h2v2H0V0zm40%2040h-2v-2h2v2z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      </div>
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black/50 to-transparent z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-primary">
            <Zap className="w-4 h-4" />
            DIFERENCIAIS
          </div>
          <h2 id="diferenciais-title" className="text-4xl md:text-5xl font-bold tracking-tighter">
            Por que escolher a{" "}
            <span className="relative inline-block">
              Fusion Pay
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/70 rounded-full blur-[6px]"></span>
            </span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Tecnologia de ponta combinada com atendimento humanizado para impulsionar seu crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={cn(
                "group relative bg-[#141414] border border-[#1E1E1E] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10",
                index === featuredIndex
                  ? "ring-2 ring-primary/50 shadow-2xl shadow-primary/20"
                  : "hover:ring-2 hover:ring-primary/50"
              )}
            >
              {index === featuredIndex && (
                <div className="absolute -inset-px rounded-2xl border-primary/30 blur-lg animate-pulse" style={{ animationDuration: '3s' }}></div>
              )}
               {index !== featuredIndex && (
                <div className="absolute -inset-px rounded-2xl border-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDuration: '3s' }}></div>
              )}
              <div className="flex flex-col h-full relative">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground flex-grow">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
