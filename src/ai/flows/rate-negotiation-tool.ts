'use server';

/**
 * @fileOverview A rate negotiation tool that analyzes a user's current payment processing costs and suggests a tailored rate plan.
 *
 * - analyzePaymentCosts - A function that handles the payment cost analysis and rate plan suggestion process.
 * - PaymentCostsInput - The input type for the analyzePaymentCosts function.
 * - RatePlanOutput - The return type for the analyzePaymentCosts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PaymentCostsInputSchema = z.object({
  monthlyVolume: z
    .number()
    .describe('The monthly payment processing volume in USD.'),
  averageTransactionSize: z
    .number()
    .describe('The average transaction size in USD.'),
  currentRate: z
    .number()
    .describe('The current payment processing rate as a percentage.'),
  otherFees: z
    .number()
    .describe('Any other monthly fees associated with payment processing.'),
});

export type PaymentCostsInput = z.infer<typeof PaymentCostsInputSchema>;

const RatePlanOutputSchema = z.object({
  suggestedRate: z
    .number()
    .describe('The suggested payment processing rate as a percentage.'),
  estimatedSavings: z
    .number()
    .describe('The estimated monthly savings in USD.'),
  explanation: z
    .string()
    .describe('Explanation of why this rate plan is suitable.'),
});

export type RatePlanOutput = z.infer<typeof RatePlanOutputSchema>;

export async function analyzePaymentCosts(
  input: PaymentCostsInput
): Promise<RatePlanOutput> {
  return analyzePaymentCostsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rateNegotiationPrompt',
  input: {schema: PaymentCostsInputSchema},
  output: {schema: RatePlanOutputSchema},
  prompt: `You are an expert payment processing consultant for Fusion Pay.

You will analyze the user's current payment processing costs and suggest a tailored rate plan that maximizes their savings.

Consider the following factors when determining the suggested rate:
* Monthly payment processing volume
* Average transaction size
* Current payment processing rate
* Other monthly fees

Provide a suggested rate as a percentage, estimate the monthly savings in USD, and provide a clear explanation of why this rate plan is suitable for the user.

Monthly Volume: {{monthlyVolume}}
Average Transaction Size: {{averageTransactionSize}}
Current Rate: {{currentRate}}
Other Fees: {{otherFees}}`,
});

const analyzePaymentCostsFlow = ai.defineFlow(
  {
    name: 'analyzePaymentCostsFlow',
    inputSchema: PaymentCostsInputSchema,
    outputSchema: RatePlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
