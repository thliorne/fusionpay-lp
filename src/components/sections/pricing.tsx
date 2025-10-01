'use client';
import React from 'react';
import { PlusIcon, ShieldCheckIcon, XCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { AwardBadge } from '@/components/ui/award-badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BorderTrail } from '@/components/ui/border-trail';

export function Pricing() {
	return (
		<section className="relative min-h-screen overflow-hidden py-24 bg-black">
			<div id="pricing" className="mx-auto w-full max-w-6xl space-y-5 px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true }}
					className="mx-auto max-w-xl space-y-5"
				>
					<div className="flex justify-center">
						<div className="rounded-lg border px-4 py-1 font-mono text-primary border-primary">Chega de perder dinheiro.</div>
					</div>
					<h2 className="mt-5 text-center text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
						Compare e veja a diferença
					</h2>
					<p className="text-muted-foreground mt-5 text-center text-sm md:text-base">
						Veja a diferença que um gateway de pagamentos moderno pode fazer pelo seu negócio.
					</p>
				</motion.div>

				<div className="relative">
					<div
						className={cn(
							'z--10 pointer-events-none absolute inset-0 size-full',
							'bg-[linear-gradient(to_right,hsl(var(--foreground))_/_0.2_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_/_0.2_1px,transparent_1px)]',
							'bg-[size:32px_32px]',
							'[mask-image:radial-gradient(ellipse_at_center,var(--background)_10%,transparent)]',
						)}
					/>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="mx-auto w-full max-w-2xl space-y-2"
					>	
 						<div className="grid md:grid-cols-2 bg-background relative border p-4">
							<PlusIcon className="absolute -top-3 -left-3  size-5.5" />
							<PlusIcon className="absolute -top-3 -right-3 size-5.5" />
							<PlusIcon className="absolute -bottom-3 -left-3 size-5.5" />
							<PlusIcon className="absolute -right-3 -bottom-3 size-5.5" />

							<div className="w-full px-4 pt-5 pb-4">
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<h3 className="leading-none font-semibold">Gateways Tradicionais</h3>
									</div>
									<p className="text-muted-foreground text-sm">Taxas altas, burocracia e lentidão.</p>
								</div>
								<div className="mt-10 space-y-4">
									<div className="text-muted-foreground flex items-end gap-0.5 text-xl">
										<span className="text-foreground -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl">
											D+3
										</span>
									</div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive" />
                      <span>Retenção de saldo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive" />
                      <span>Taxas altas e fixas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive" />
                      <span>Suporte lento e ineficaz</span>
                    </li>
                  </ul>
									<Button className="w-full" variant="outline" asChild>
										<a href="#">Sem Vantagens</a>
									</Button>
								</div>
							</div>
							<div className="relative w-full rounded-lg border px-4 pt-5 pb-4">
								<BorderTrail
									style={{
										boxShadow:
											'0px 0px 60px 30px hsl(var(--primary) / 0.5), 0 0 100px 60px hsl(var(--primary) / 0.5), 0 0 140px 90px hsl(var(--primary) / 0.5)',
									}}
									size={100}
								/>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<h3 className="leading-none font-semibold">Fusion Pay</h3>
                    <AwardBadge type="product-of-the-month" />
									</div>
									<p className="text-muted-foreground text-sm">A Melhor Opção</p>
								</div>
								<div className="mt-10 space-y-4">
									<div className="text-muted-foreground flex items-end text-xl">
										<span className="text-foreground -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl">
											D+0
										</span>
									</div>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Saque instantâneo via Pix</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Taxas flexíveis e negociáveis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Suporte premium 24/7</span>
                    </li>
                  </ul>
									<Button className="w-full" asChild>
										<a href="#">Começar Agora</a>
									</Button>
								</div>
							</div>
						</div>

						<div className="text-muted-foreground flex items-center justify-center gap-x-2 text-sm">
							<ShieldCheckIcon className="size-4" />
							<span>Acesso a todos os recursos sem taxas escondidas.</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
