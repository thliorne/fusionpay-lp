"use client";
import { motion } from 'framer-motion';
import { ThumbsDown, ThumbsUp, XCircle, CheckCircle } from 'lucide-react';

const problems = [
  { text: "Taxas abusivas e sem transparência", solved: true },
  { text: "Dinheiro preso por dias (D+14, D+30)", solved: true },
  { text: "Suporte lento e robotizado", solved: true },
  { text: "Plataforma complexa e pouco intuitiva", solved: true },
  { text: "Falhas constantes em horários de pico", solved: true },
];

const solutions = [
    { text: "Taxas justas e negociáveis", solved: false },
    { text: "Recebimento instantâneo no PIX (D+0)", solved: false },
    { text: "Suporte humano e ágil via WhatsApp", solved: false },
    { text: "Dashboard amigável e em tempo real", solved: false },
    { text: "Alta disponibilidade e estabilidade", solved: false },
];

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const solutionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

export function ProblemsSection() {
  return (
    <section className="bg-background text-foreground py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Diga Adeus aos <span className="text-primary">Problemas de Pagamento</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Deixe para trás as dores de cabeça dos gateways tradicionais e abrace a eficiência da Fusion Pay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Coluna de Problemas */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-card/50 border border-destructive/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-destructive/10 rounded-full">
                <ThumbsDown className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-destructive/90">Gateways Tradicionais</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((item, index) => (
                <motion.li key={index} custom={index} variants={cardVariants} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna de Soluções */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-card/50 border border-primary/30 rounded-2xl p-8 ring-2 ring-primary/20 shadow-lg shadow-primary/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-full">
                <ThumbsUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Com a Fusion Pay</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <motion.li key={index} custom={index} variants={solutionVariants} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
