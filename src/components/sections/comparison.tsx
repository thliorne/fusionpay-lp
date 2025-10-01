"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { CheckCircle2, XCircle } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            Chega de perder dinheiro.
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl mt-4">
            Veja a diferença que um gateway de pagamentos moderno pode fazer pelo seu negócio.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 mx-auto">
          <Card 
            title="Gateways Tradicionais" 
            icon={<XCircle className="h-10 w-10 text-destructive" />}
            description="Retêm seu dinheiro, cobram taxas altas e oferecem suporte lento."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-destructive/10"
              colors={[[220, 38, 38]]}
              dotSize={2}
            />
          </Card>
          <Card 
            title="Fusion Pay" 
            icon={<CheckCircle2 className="h-10 w-10 text-primary" />}
            description="Saque instantâneo, taxas negociáveis e suporte premium dedicado."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-primary/10"
              colors={[[255, 102, 0]]}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-border group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 h-[30rem] relative rounded-xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-muted-foreground" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-muted-foreground" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-muted-foreground" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-muted-foreground" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <p className="text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-muted-foreground mt-2 group-hover/canvas-card:text-white/80 group-hover/canvas-card:-translate-y-2 transition duration-200">
            {description}
        </p>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
