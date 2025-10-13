"use client";
import { CheckCircle, XCircle } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <XCircle className="size-4" />,
    title: "Taxas abusivas e sem transparência",
    description: "Gateways Tradicionais",
    date: "Problema",
    iconClassName: "bg-destructive/20 text-destructive",
    titleClassName: "text-destructive-foreground",
    className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <XCircle className="size-4" />,
    title: "Dinheiro preso por dias (D+14, D+30)",
    description: "Gateways Tradicionais",
    date: "Problema",
    iconClassName: "bg-destructive/20 text-destructive",
    titleClassName: "text-destructive-foreground",
    className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <CheckCircle className="size-4" />,
    title: "Taxas justas e recebimento D+0",
    description: "Com a Fusion Pay",
    date: "Solução",
    iconClassName: "bg-primary/20 text-primary",
    titleClassName: "text-primary-foreground",
    className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export function DisplayCardsSection() {
  return (
    <section className="bg-background text-foreground py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-left md:max-w-md"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Diga Adeus aos <span className="text-primary">Problemas de Pagamento</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Deixe para trás as dores de cabeça dos gateways tradicionais e abrace a eficiência da Fusion Pay.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center md:justify-end"
          >
              <DisplayCards cards={cards} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
