"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  User,
  Zap,
  Clock,
  BarChart,
  Headset,
  Send,
  Loader,
  CircleDot,
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
import { toast } from "@/hooks/use-toast";

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
  telefone: z
    .string()
    .min(14, "O telefone é obrigatório.")
    .refine(
      (value) => /^\(\d{2}\) \d{5}-\d{4}$/.test(value),
      "Formato de telefone inválido."
    ),
  faturamento: z
    .string()
    .min(1, "Selecione uma faixa de faturamento."),
  mensagem: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const benefits = [
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Aprovação em 24h",
    description: "Análise rápida e onboarding simplificado.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-primary" />,
    title: "Taxas personalizadas",
    description: "Negociamos de acordo com seu volume.",
  },
  {
    icon: <Headset className="w-6 h-6 text-primary" />,
    title: "Suporte dedicado",
    description: "Time exclusivo para sua conta.",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      faturamento: "",
      mensagem: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement Firestore submission
      // e.g., await addDoc(collection(db, "leads_contato"), { ...data, createdAt: serverTimestamp() });
      // TODO: Call cloud function to send email
      console.log("Form data:", data);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
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
  
  if (isSubmitted) {
    return (
      <section className="bg-[#0B0B0B] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-[#141414] border border-[#1E1E1E] rounded-xl p-8 md:p-12 max-w-2xl mx-auto"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Recebemos seus dados!</h2>
              <p className="text-muted-foreground mb-8">
                Em até 2 horas úteis nossa equipe entra em contato para negociar suas taxas.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Voltar ao site
              </Button>
            </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[#0B0B0B] text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FF6A00%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%200v20H0v-2h18V0h2zm20%2020v20h-2V22h18v-2H20zM0%200h2v2H0V0zm40%2040h-2v-2h2v2z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-repeat"></div>
        </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-primary">
            <CircleDot className="w-4 h-4" />
            ENTRE EM CONTATO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Vamos{" "}
            <span className="relative inline-block">
              negociar
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/70 rounded-full blur-[6px]"></span>
            </span>{" "}
            suas taxas?
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Preencha o formulário e tenha saques instantâneos no mesmo dia.<br/>Nossa equipe entrará em contato em até 2 horas úteis para personalizar sua proposta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#141414] border border-[#1E1E1E] rounded-xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
              <h3 className="text-2xl font-bold mb-6">Por que escolher a Fusion Pay?</h3>
              <ul className="space-y-6">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="bg-[#141414] border border-[#1E1E1E] rounded-xl p-8 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
              <Phone className="w-8 h-8 mx-auto text-primary mb-4" />
              <h4 className="font-semibold text-lg">Prefere ligar?</h4>
              <p className="text-2xl font-bold text-primary my-2">0800 123 4567</p>
              <p className="text-sm text-muted-foreground">Atendimento de segunda a sexta, das 8h às 20h.</p>
            </motion.div>
          </div>

          {/* Right Column (Form) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#141414] border border-[#1E1E1E] rounded-xl p-8 md:p-10 relative">
             <div className="absolute -inset-px rounded-xl border-primary/20 blur-lg opacity-0 animate-pulse" style={{ animationDuration: '4s' }}></div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} className="bg-black/20 focus-visible:ring-primary"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu@email.com" {...field} className="bg-black/20 focus-visible:ring-primary"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(00) 00000-0000"
                          {...field}
                          onChange={(e) => field.onChange(phoneMask(e.target.value))}
                          maxLength={15}
                          className="bg-black/20 focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="faturamento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Faturamento mensal estimado</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/20 focus:ring-primary">
                            <SelectValue placeholder="Selecione uma faixa" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ate_50k">Até R$ 50 mil</SelectItem>
                          <SelectItem value="50k_200k">R$ 50 mil – R$ 200 mil</SelectItem>
                          <SelectItem value="200k_1M">R$ 200 mil – R$ 1 milhão</SelectItem>
                          <SelectItem value="acima_1M">Acima de R$ 1 milhão</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem (opcional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Conte-nos mais sobre seu negócio..." {...field} className="bg-black/20 focus-visible:ring-primary"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Entrar em contato agora <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                 <p className="text-xs text-center text-muted-foreground pt-4">
                  Ao enviar, você concorda com nossa{' '}
                  <a href="#" className="underline hover:text-primary">
                    política de privacidade
                  </a>{' '}
                  e{' '}
                  <a href="#" className="underline hover:text-primary">
                    termos de uso
                  </a>
                  .
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
         <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 text-sm text-green-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>12.500+ empresas já confiam na Fusion Pay</span>
            </div>
        </div>
      </div>
    </section>
  );
}
