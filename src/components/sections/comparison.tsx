import { CheckCircle2, XCircle } from 'lucide-react';

const badGatewaysFeatures = [
  'Retêm seu dinheiro',
  'Taxas altas e fixas',
  'Demora para liberar saques',
  'Suporte lento e ineficaz',
];

const fusionPayFeatures = [
  'Saque instantâneo (Pix D+0)',
  'Taxas baixas e negociáveis',
  'Receba mais, cresça mais rápido',
  'Suporte premium e dedicado',
];

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
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border border-destructive/50 rounded-xl p-8 bg-destructive/5">
            <h3 className="text-2xl font-bold text-center mb-6">Gateways tradicionais</h3>
            <ul className="space-y-4">
              {badGatewaysFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-primary rounded-xl p-8 bg-primary/5 shadow-2xl shadow-primary/20">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Fusion Pay</h3>
            <ul className="space-y-4">
              {fusionPayFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
