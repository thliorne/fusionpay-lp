import { Feature73 } from "@/components/ui/feature-73";

const features = [
  {
    id: "feature-1",
    title: "Saque instantâneo (D+0 Pix)",
    description:
      "Receba seus pagamentos diretamente na sua conta via Pix, sem espera.",
    image: "https://images.unsplash.com/photo-1580173954522-2b6d13264104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "feature-2",
    title: "Taxas Baixas e Negociáveis",
    description:
      "Nossas taxas são flexíveis e se adaptam ao seu volume de vendas. Quanto mais você vende, menos você paga.",
    image: "https://i.imgur.com/ZmwtWfz.png",
  },
  {
    id: "feature-3",
    title: "Segurança de Ponta",
    description:
      "Utilizamos as tecnologias mais avançadas de segurança para garantir que suas transações estejam sempre protegidas.",
    image: "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function BenefitsSection() {
  return (
    <Feature73
      heading="Recursos Poderosos"
      description="Descubra os recursos poderosos que destacam nossa plataforma. Construída com a mais recente tecnologia e projetada para máxima produtividade."
      linkText="Abrir conta agora"
      linkUrl="#"
      features={features}
    />
  );
}
