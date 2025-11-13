import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Gem, Zap, GitBranch, KeyRound, RefreshCw, Plug } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Features() {
    const cardClassName = "relative col-span-full flex overflow-hidden bg-black/50 backdrop-blur-md border border-white/10"

    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        <Card className={cn(cardClassName, "lg:col-span-2 glass-card")}>
                            <CardContent className="relative flex flex-col items-center justify-center p-6 text-white">
                                <div className="relative flex h-24 w-56 items-center justify-center">
                                     <Plug className="size-16 text-primary" strokeWidth={1.5} />
                                </div>
                                <h2 className="mt-6 text-center text-3xl font-semibold">Solução Plug & Play</h2>
                                <p className="text-center text-white/70 mt-2">Nossa solução “Plug & Play” permite que você aceite pagamentos digitais de forma rápida, segura e sem complicações.</p>
                            </CardContent>
                        </Card>
                        <Card className={cn(cardClassName, "sm:col-span-3 lg:col-span-2 glass-card")}>
                            <CardContent className="pt-6 text-white">
                                <div className="relative mx-auto flex aspect-square size-32 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                    <Shield className="m-auto size-12 text-primary" strokeWidth={1.5} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition">Antifraude com IA</h2>
                                    <p className="text-white/70">Nossa IA analisa cada transação em tempo real, maximizando sua aprovação e protegendo seu negócio.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className={cn(cardClassName, "lg:col-span-2 glass-card")}>
                             <CardContent className="grid h-full pt-6 text-white">
                                <div className="relative z-10 flex flex-col justify-between space-y-6">
                                    <div className="relative flex aspect-square size-12 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <Zap className="m-auto size-6 text-primary" strokeWidth={1.5} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium text-white transition">Saque Instantâneo D+0</h2>
                                        <p className="text-white/70">Receba o valor das suas vendas via PIX no mesmo dia. Mais agilidade para seu fluxo de caixa.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                         <Card className={cn(cardClassName, "lg:col-span-3 glass-card")}>
                             <CardContent className="grid h-full pt-6 sm:grid-cols-2 text-white">
                                 <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                     <div className="relative flex aspect-square size-12 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                         <GitBranch className="m-auto size-6 text-primary" strokeWidth={1.5} />
                                     </div>
                                     <div className="space-y-2">
                                         <h2 className="text-lg font-medium transition">Integração fácil e rápida</h2>
                                         <p className="text-white/70">Integra facilmente com os melhores gateways e plataformas de e-commerce.</p>
                                     </div>
                                 </div>
                                 <div className="flex items-center justify-center">
                                     <Image src="https://i.imgur.com/odMHCZ9.png" alt="Ecossistema de Integrações" width={300} height={300} className="object-contain [mask-image:radial-gradient(ellipse_at_center,white_50%,transparent_100%)]" />
                                 </div>
                             </CardContent>
                         </Card>
                         <Card className={cn(cardClassName, "lg:col-span-3 glass-card")}>
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2 text-white">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <KeyRound className="m-auto size-6 text-primary" strokeWidth={1.5} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium text-white transition">API de PIX</h2>
                                        <p className="text-white/70">Integre o PIX de forma simples e segura em seu sistema e aproveite a liquidação instantânea.</p>
                                    </div>
                                </div>
                                <div className="rounded-tl-lg relative -mb-6 -mr-6 mt-6 h-fit border-l border-t border-white/10 p-6 py-6 sm:ml-6">
                                    <div className="absolute left-3 top-2 flex gap-1">
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                    </div>
                                    <svg className="w-full text-white/20" viewBox="0 0 386 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="386" height="123" rx="10" fill="transparent" />
                                         <path
                                             d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605"
                                             stroke="currentColor"
                                             strokeWidth="3"
                                         />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
