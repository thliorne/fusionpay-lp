"use client";
import { BGPattern } from "@/components/ui/bg-pattern";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ArrowRight, ShieldCheck, TrendingDown, Zap } from "lucide-react";

const features = [
  {
    id: "feature-1",
    title: "Saque instantâneo (D+0 Pix)",
    description:
      "Receba seus pagamentos diretamente na sua conta via Pix, sem espera.",
    icon: <Zap className="w-16 h-16 text-primary" />,
    glowColor: "orange",
  },
  {
    id: "feature-2",
    title: "Taxas Baixas e Negociáveis",
    description:
      "Nossas taxas são flexíveis e se adaptam ao seu volume de vendas. Quanto mais você vende, menos você paga.",
    icon: <TrendingDown className="w-16 h-16 text-primary" />,
    glowColor: "blue",
  },
  {
    id: "feature-3",
    title: "Segurança de Ponta",
    description:
      "Utilizamos as tecnologias mais avançadas de segurança para garantir que suas transações estejam sempre protegidas.",
    icon: <ShieldCheck className="w-16 h-16 text-primary" />,
    glowColor: "green",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative bg-black py-20 md:py-32">
      <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent rounded-full opacity-10 blur-3xl animate-pulse-gradient" />
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-l from-accent to-primary rounded-full opacity-10 blur-3xl animate-pulse-gradient [animation-delay:-4s]" />
      <BGPattern variant="grid" fill="hsl(var(--border))" size={40} mask="fade-edges" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="lg:max-w-3xl mb-12">
          <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-4xl lg:mb-6">
            Entenda porque os maiores players do mercado estão migrando para a Fusion Pay:
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
            Descubra os recursos poderosos que destacam nossa plataforma. Construída com a mais recente tecnologia e projetada para máxima produtividade.
          </p>
          <a
            href="#"
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg text-primary"
          >
            Abrir conta agora
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <GlowCard key={feature.id} glowColor={feature.glowColor as any} className="p-6 min-h-[420px]">
              <div className="flex flex-col h-full items-center text-center">
                <div className="flex-shrink-0 mb-4 flex items-center justify-center" style={{ height: '10rem' }}>
                  {feature.icon}
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-2 break-words">{feature.title}</h3>
                  <p className="text-muted-foreground break-words">{feature.description}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
