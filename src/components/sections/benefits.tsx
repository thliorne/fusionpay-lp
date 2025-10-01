"use client";
import { Feature73 } from "@/components/ui/feature-73";
import { Squares } from "@/components/ui/squares-background";

const features = [
  {
    id: "feature-1",
    title: "Saque instantâneo (D+0 Pix)",
    description:
      "Receba seus pagamentos diretamente na sua conta via Pix, sem espera.",
    image: "https://i.imgur.com/PYdMXs7.png",
  },
  {
    id: "feature-2",
    title: "Taxas Baixas e Negociáveis",
    description:
      "Nossas taxas são flexíveis e se adaptam ao seu volume de vendas. Quanto mais você vende, menos você paga.",
    image: "https://i.imgur.com/du7itQP.png",
  },
  {
    id: "feature-3",
    title: "Segurança de Ponta",
    description:
      "Utilizamos as tecnologias mais avançadas de segurança para garantir que suas transações estejam sempre protegidas.",
    image: "https://i.imgur.com/qWM6tBy.png",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={30}
          borderColor="hsl(var(--border))"
          hoverFillColor="hsl(var(--muted))"
        />
      </div>
      <div className="relative z-10 bg-transparent">
        <Feature73
          heading="Recursos Poderosos"
          description="Descubra os recursos poderosos que destacam nossa plataforma. Construída com a mais recente tecnologia e projetada para máxima produtividade."
          linkText="Abrir conta agora"
          linkUrl="#"
          features={features}
        />
      </div>
    </section>
  );
}