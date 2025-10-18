"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Mudar para a Fusion Pay foi a melhor decisão para o nosso e-commerce. As taxas são justas e o dinheiro cai na hora, o que melhorou muito nosso fluxo de caixa.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "João Silva",
    role: "CEO, Loja Tech",
  },
  {
    text: "A implementação foi incrivelmente rápida e a interface é muito intuitiva. O time de suporte nos ajudou em cada passo. Estamos muito satisfeitos!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Maria Oliveira",
    role: "Gerente de E-commerce",
  },
  {
    text: "O suporte ao cliente é excepcional. Sempre que precisamos, eles estão lá para ajudar, garantindo que nossa operação nunca pare. Recomendo fortemente.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Carlos Pereira",
    role: "Diretor de TI",
  },
  {
    text: "A integração perfeita da Fusion Pay melhorou drasticamente a eficiência de nossas operações. A interface intuitiva é um grande bônus.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Lucas Martins",
    role: "CEO, DigitalGrowth",
  },
  {
    text: "As funcionalidades robustas e o suporte ágil transformaram nosso fluxo de trabalho, nos tornando significativamente mais eficientes.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    name: "Ana Costa",
    role: "Gerente de Projetos",
  },
  {
    text: "O processo de implementação superou nossas expectativas. Simplificou nossos processos e melhorou o desempenho geral dos negócios.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
    name: "Beatriz Lima",
    role: "Analista de Negócios",
  },
  {
    text: "Nossas funções de negócios melhoraram com um design amigável e feedback positivo dos clientes. A Fusion Pay foi essencial para isso.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "Ricardo Souza",
    role: "Diretor de Marketing",
  },
  {
    text: "Eles entregaram uma solução que superou as expectativas, entendendo nossas necessidades e aprimorando nossas operações de pagamento.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    name: "Fernanda Lima",
    role: "Gerente de Vendas",
  },
  {
    text: "Usando a Fusion Pay, nossa conversão de pagamentos melhorou significativamente, impulsionando o desempenho do negócio.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
    name: "André Santos",
    role: "Gerente de E-commerce",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="bg-background my-20 relative section-surface">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center"
        >
          <div className="inline-block border border-primary/50 py-1 px-4 rounded-lg bg-primary/10 text-primary font-semibold">
            Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mt-5 text-white">
            O que nossos usuários dizem
          </h2>
          <p className="text-lg mt-5 text-white/75">
            Veja o que nossos clientes têm a dizer sobre nós e como a Fusion Pay impulsionou seus negócios.
          </p>
        </motion.div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
