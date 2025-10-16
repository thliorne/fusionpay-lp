"use client";

import { Calendar, Code, FileText, User, Clock, Zap, Percent, Puzzle, Headset, ShieldCheck, LayoutGrid } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Nossa Missão",
    date: "2021",
    content:
      "Nascemos para impulsionar o sucesso de negócios digitais, oferecendo uma infraestrutura de pagamentos robusta, rápida e transparente.",
    category: "Fundação",
    icon: Zap,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Visão de Futuro",
    date: "2022",
    content:
      "Ser a espinha dorsal do ecossistema de pagamentos, permitindo que empreendedores foquem no que fazem de melhor: inovar e crescer.",
    category: "Estratégia",
    icon: Percent,
    relatedIds: [1, 3, 4],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Tecnologia de Ponta",
    date: "2023",
    content:
      "Investimos pesado em tecnologia para garantir estabilidade, segurança e as maiores taxas de aprovação do mercado.",
    category: "Tecnologia",
    icon: Puzzle,
    relatedIds: [1, 2, 5],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 4,
    title: "Parceria Real",
    date: "Q3 2024",
    content:
      "Acreditamos em relações próximas. Nosso sucesso está diretamente ligado ao sucesso dos nossos clientes.",
    category: "Cultura",
    icon: Headset,
    relatedIds: [2, 6],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 5,
    title: "Segurança Inabalável",
    date: "Q4 2024",
    content:
      "Protegemos cada transação com o que há de mais moderno em segurança cibernética e análise de risco.",
    category: "Segurança",
    icon: ShieldCheck,
    relatedIds: [3, 6],
    status: "pending" as const,
    energy: 20,
  },
  {
    id: 6,
    title: "Simplicidade e Poder",
    date: "2025",
    content:
      "Criamos ferramentas poderosas que são, ao mesmo tempo, intuitivas e fáceis de usar, simplificando a gestão do seu negócio.",
    category: "Produto",
    icon: LayoutGrid,
    relatedIds: [4, 5],
    status: "pending" as const,
    energy: 10,
  },
];


export function DifferentialsSection() {
  return <RadialOrbitalTimeline timelineData={timelineData} />;
}
