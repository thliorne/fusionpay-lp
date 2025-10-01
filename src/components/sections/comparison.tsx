"use client";
import { CheckCircle, XCircle } from "lucide-react";
import { CardSpotlight } from "../ui/card-spotlight";

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
          <CardSpotlight className="border border-destructive/50 rounded-xl p-8 bg-destructive/5">
            <h3 className="text-2xl font-bold text-center mb-6 text-white relative z-10">Gateways tradicionais</h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Retêm seu dinheiro</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Taxas altas e fixas</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Demora para liberar saques</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Suporte lento e ineficaz</span>
              </li>
            </ul>
          </CardSpotlight>
          <div className="border-2 border-primary rounded-xl p-8 bg-primary/5 shadow-2xl shadow-primary/20">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Fusion Pay</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Saque instantâneo (Pix D+0)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Taxas baixas e negociáveis</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Receba mais, cresça mais rápido</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Suporte premium e dedicado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
