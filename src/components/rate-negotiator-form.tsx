"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Wand2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { analyzePaymentCosts, type RatePlanOutput } from '@/ai/flows/rate-negotiation-tool';

const formSchema = z.object({
  monthlyVolume: z.coerce.number().min(1, 'Volume mensal deve ser maior que zero.'),
  averageTransactionSize: z.coerce.number().min(1, 'Ticket médio deve ser maior que zero.'),
  currentRate: z.coerce.number().min(0, 'Taxa atual não pode ser negativa.'),
  otherFees: z.coerce.number().min(0, 'Outras taxas não podem ser negativas.'),
});

type FormData = z.infer<typeof formSchema>;

export function RateNegotiatorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<RatePlanOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monthlyVolume: 100000,
      averageTransactionSize: 150,
      currentRate: 4.99,
      otherFees: 99,
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await analyzePaymentCosts(values);
      setResult(response);
    } catch (e) {
      setError('Ocorreu um erro ao analisar seus dados. Tente novamente.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Simule sua economia</CardTitle>
              <CardDescription>Preencha os campos abaixo com seus dados atuais.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="monthlyVolume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Volume Mensal (R$)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="100000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="averageTransactionSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ticket Médio (R$)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="150" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Taxa Atual (%)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" placeholder="4.99" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="otherFees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Outras Taxas Mensais (R$)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="99" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Analisar com IA
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <div className="flex items-center justify-center min-h-[400px] rounded-lg border border-dashed">
        {isLoading && (
          <div className="flex flex-col items-center gap-4 text-muted-foreground p-8">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p>Analisando seus dados e buscando a melhor taxa...</p>
          </div>
        )}
        {error && <p className="text-destructive p-8">{error}</p>}
        {result && (
          <Card className="w-full bg-primary/5 border-primary/50 animate-in fade-in-50 duration-500">
            <CardHeader>
              <CardTitle>Sua Proposta Personalizada</CardTitle>
              <CardDescription>Com base em seus dados, esta é a nossa sugestão para você.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Economia Mensal Estimada</p>
                <p className="text-4xl font-bold text-green-400">
                  R$ {result.estimatedSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Taxa Sugerida</p>
                <p className="text-4xl font-bold text-primary">{result.suggestedRate}%</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Por que esta é a melhor taxa?</h4>
                <p className="text-sm text-muted-foreground">{result.explanation}</p>
              </div>
            </CardContent>
          </Card>
        )}
        {!isLoading && !result && !error && (
          <div className="text-center text-muted-foreground p-8">
            <Wand2 className="h-12 w-12 mx-auto mb-4" />
            <p className='font-bold'>Seus resultados aparecerão aqui.</p>
            <p className='text-sm'>Preencha o formulário e deixe nossa IA trabalhar.</p>
          </div>
        )}
      </div>
    </div>
  );
}
