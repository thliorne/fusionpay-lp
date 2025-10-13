"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MessageSquare,
  User,
  Building,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Zap,
  Loader,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const phoneMask = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value.slice(0, 15);
};

const formSchema = z.object({
  nome: z.string().min(2, "O nome completo é obrigatório."),
  email: z.string().email("Por favor, insira um e-mail válido."),
  empresa: z.string().optional(),
  faturamento: z
    .string()
    .min(1, "Selecione uma faixa de faturamento."),
  mensagem: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const benefits = [
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    text: "D+0 no PIX e cartão*",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    text: "Antifraude ativo e configurável",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    text: "Taxas competitivas e negociáveis",
  },
];

const socialProofLogos = [
  { name: 'Company A', logo: 'https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg' },
  { name: 'Company B', logo: 'https://tailwindui.com/img/logos/158x48/reform-logo-white.svg' },
  { name: 'Company C', logo: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg' },
  { name: 'Company D', logo: 'https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg' },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12.04 2.75c-5.14 0-9.29 4.15-9.29 9.29s4.15 9.29 9.29 9.29c1.55 0 3.03-.38 4.34-1.09l3.14.82c.23.06.46-.17.4-.4l-.82-3.14c.7-1.3.1-2.79 1.09-4.34 0-5.14-4.15-9.29-9.29-9.29zm-2.07 12.03c-.22.42-.87.8-1.18.85-.31.05-.65.05-1-.06-.35-.1-.83-.34-1.58-1.08-.94-.94-1.55-2.1-1.6-2.2-.05-.1-.44-.6.06-1.1.49-.5.81-.6 1.1-.6.28 0 .49.05.65.34.16.29.56.9.61 1 .05.1.08.16 0 .27-.08.1-.18.2-.31.32-.13.12-.24.2-.35.34-.1.13-.2.24-.1.38.12.18.56.76 1.2 1.41.87.87 1.6 1.12 1.8.18.2-.95.04-1.78.04-1.78.25-.04.5-.06.75-.06.25 0 .5.02.75.06s.2.75.2 1.78c0 .26.1.48.26.65.17.17.38.26.6.26h.02c.26 0 .5-.1.68-.28.2-.2.3-.44.34-.7.04-.25.04-.5.04-.75s-.02-.5-.06-.75c-.04-.25-.04-.5-.04-.75l.02 1.77z" clipRule="evenodd" /></svg>
);


// Extending Input and SelectTrigger to accept an icon prop
const InputWithIcon = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input> & { icon?: React.ReactNode }
>(({ icon, className, ...props }, ref) => {
  return (
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{React.cloneElement(icon as React.ReactElement, { className: 'w-4 h-4' })}</div>}
      <Input ref={ref} className={cn(icon ? 'pl-9' : 'pl-3', className)} {...props} />
    </div>
  );
});
InputWithIcon.displayName = "InputWithIcon";

const SelectTriggerWithIcon = React.forwardRef<
  React.ElementRef<typeof SelectTrigger>,
  React.ComponentProps<typeof SelectTrigger> & { icon?: React.ReactNode }
>(({ icon, className, children, ...props }, ref) => {
  return (
    <SelectTrigger ref={ref} className={cn(icon ? 'pl-9' : 'pl-3', className)} {...props}>
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{React.cloneElement(icon as React.ReactElement, { className: 'w-4 h-4' })}</div>}
      {children}
    </SelectTrigger>
  );
});
SelectTriggerWithIcon.displayName = "SelectTriggerWithIcon";


export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      empresa: "",
      faturamento: "",
      mensagem: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    try {
      // TODO: Implementar envio para /api/lead com fetch
      console.log("Form data submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      toast({
        title: "Proposta solicitada!",
        description: "Recebemos seus dados! Um especialista entrará em contato em breve.",
      });
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Algo deu errado.",
        description: "Não foi possível enviar. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FF6A00%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%200v20H0v-2h18V0h2zm20%2020v20h-2V22h18v-2H20zM0%200h2v2H0V0zm40%2040h-2v-2h2v2z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-repeat"></div>
        </div>
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur-lg border border-border/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-black/20"
        >
          <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1 mb-4">
                Gateway premium • Suporte humano
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Negocie suas taxas e receba no <span className="text-primary">D+0</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Fale com um especialista e tenha a melhor condição para PIX, cartão e boleto — com antifraude inteligente.
              </p>
              <ul className="space-y-4 text-left mb-10 max-w-md mx-auto lg:mx-0">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="h-12 text-base px-6 rounded-full group bg-green-500 hover:bg-green-600 text-white">
                      <a 
                        href="https://wa.me/5511999999999?text=Quero%20negociar%20minhas%20taxas%20na%20Fusion%20Pay" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-analytics="cta_whatsapp_cta"
                      >
                          <WhatsAppIcon className="w-5 h-5 mr-2"/>
                          Falar no WhatsApp
                      </a>
                  </Button>
              </div>
            </div>

            {/* Right Column: CTA Button */}
            <div className="mt-12 lg:mt-0 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="h-14 text-lg px-8 rounded-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Negocie suas taxas
                </Button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">Escolhido por negócios digitais em todo o Brasil</p>
            <div className="flex justify-center items-center gap-8 opacity-50">
              {socialProofLogos.map(logo => (
                <img key={logo.name} src={logo.logo} alt={logo.name} className="h-6 object-contain" />
              ))}
            </div>
          </div>
          
           <p className="text-xs text-center text-muted-foreground mt-12">
             *Liquidação D+0 sujeita à análise e política de risco.
           </p>
        </motion.div>
      </div>
    </section>
  );
}
