import { Zap, Percent, ShieldCheck, CodeXml } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';

const benefits = [
  {
    icon: Zap,
    title: 'Saque instantâneo (D+0 Pix)',
    description: 'Receba seus pagamentos diretamente na sua conta via Pix, sem espera.',
  },
  {
    icon: Percent,
    title: 'Taxas baixas e negociáveis',
    description: 'Oferecemos as melhores taxas do mercado, adaptadas ao volume do seu negócio.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança tecnológica premium',
    description: 'Nossa infraestrutura robusta garante a máxima segurança para suas transações.',
  },
  {
    icon: CodeXml,
    title: 'Integração fácil com checkouts',
    description: 'Conecte-se facilmente com as principais plataformas de checkout do mercado.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <GlowCard key={benefit.title} className="items-center text-center" customSize>
              <div className="flex flex-col items-center text-center gap-4 text-white">
                <div className="bg-primary/10 p-4 rounded-full border-2 border-primary/20">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
