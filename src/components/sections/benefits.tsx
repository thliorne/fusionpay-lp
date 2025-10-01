import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Zap, Percent } from 'lucide-react'

export function BenefitsSection() {
    return (
        <section className="bg-background py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="relative col-span-1 flex overflow-hidden">
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="relative flex h-24 w-56 items-center justify-center">
                                    <Zap className="text-primary size-24" />
                                </div>
                                <h2 className="mt-6 text-center text-xl font-semibold">Saque instantâneo (D+0 Pix)</h2>
                                <p className="mt-2 text-center text-muted-foreground">Receba seus pagamentos diretamente na sua conta via Pix, sem espera.</p>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-1 overflow-hidden">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                    <Percent className="m-auto size-16 text-primary" />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-xl font-medium transition">Taxas baixas e negociáveis</h2>
                                    <p className="text-foreground">Oferecemos as melhores taxas do mercado, adaptadas ao volume do seu negócio.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-1 overflow-hidden">
                            <CardContent className="grid h-full pt-6">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <Shield className="m-auto size-5" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium text-zinc-800 transition dark:text-white">Segurança tecnológica premium</h2>
                                        <p className="text-foreground">Nossa infraestrutura robusta garante a máxima segurança para suas transações.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-1 overflow-hidden">
                            <CardContent className="grid h-full pt-6">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <Users className="m-auto size-6" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium transition">Integração fácil com checkouts</h2>
                                        <p className="text-foreground">Conecte-se facilmente com as principais plataformas de checkout do mercado.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}