import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

export default function TermosDeUsoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 container mx-auto py-24 px-4">
        <div className="prose prose-invert max-w-none space-y-6 text-neutral-300">
          <h1 className="text-4xl font-bold text-primary mb-2">Termos de Uso</h1>
          <p className="lead text-lg text-neutral-400">Última atualização: 09 de Outubro de 2025 • Versão 1.0</p>
          <p className="border-l-4 border-primary pl-4 italic">
            <strong>Importante:</strong> Ao acessar e utilizar a plataforma FusionPay, você concorda com todos os termos e condições descritos neste documento. Caso não concorde, por favor, não utilize nossos serviços.
          </p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">1. Definições</h2>
          <p>Para os fins deste Termo de Uso, as seguintes definições são aplicáveis:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>FusionPay:</strong> Refere-se à plataforma de pagamentos digitais operada pela FUSION PAY PAGAMENTOS DIGITAIS, CNPJ: 56.936.053/0001-73</li>
            <li><strong>Usuário:</strong> Pessoa física ou jurídica que utiliza os serviços da FusionPay</li>
            <li><strong>Plataforma:</strong> Sistema online de processamento de pagamentos fornecido pela FusionPay</li>
            <li><strong>API:</strong> Interface de Programação de Aplicações que permite integração com nossos serviços</li>
            <li><strong>Transação:</strong> Qualquer operação de pagamento processada através da Plataforma</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">2. Aceitação dos Termos</h2>
          <p>Ao criar uma conta na FusionPay, você declara que:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Tem capacidade legal para celebrar contratos vinculativos</li>
            <li>Todas as informações fornecidas são verdadeiras e atualizadas</li>
            <li>Possui autoridade para representar a empresa, se aplicável</li>
            <li>Leu, entendeu e concorda com todos os termos aqui estabelecidos</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">3. Serviços Oferecidos</h2>
          <h3 className="text-xl font-medium text-white">3.1. Processamento de Pagamentos</h3>
          <p>A FusionPay oferece serviços de processamento de pagamentos incluindo, mas não se limitando a:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Pagamentos via PIX</li>
            <li>Cartões de crédito e débito (Visa, Mastercard, Elo, American Express)</li>
            <li>Boleto bancário</li>
            <li>Pagamentos internacionais</li>
            <li>Cobrança recorrente</li>
            <li>Split de pagamento</li>
          </ul>
          <h3 className="text-xl font-medium text-white">3.2. Ferramentas Adicionais</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>API RESTful para integração</li>
            <li>SDKs para diversas linguagens de programação</li>
            <li>Dashboard de gestão de transações</li>
            <li>Sistema antifraude com inteligência artificial</li>
            <li>Webhooks para notificações em tempo real</li>
            <li>Relatórios e análises detalhadas</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">4. Conta do Usuário</h2>
          <h3 className="text-xl font-medium text-white">4.1. Cadastro</h3>
          <p>Para utilizar nossos serviços, você deve:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Possuir CNPJ ativo (MEI, ME, LTDA ou outros tipos empresariais)</li>
            <li>Fornecer documentação completa e válida</li>
            <li>Informar dados bancários corretos para recebimento</li>
            <li>Manter suas informações sempre atualizadas</li>
          </ul>
          <h3 className="text-xl font-medium text-white">4.2. Segurança da Conta</h3>
          <p>Você é responsável por:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Manter a confidencialidade de suas credenciais de acesso</li>
            <li>Notificar imediatamente sobre qualquer uso não autorizado</li>
            <li>Garantir que apenas pessoas autorizadas acessem sua conta</li>
            <li>Utilizar senhas fortes e alterá-las periodicamente</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">5. Taxas e Tarifas</h2>
          <h3 className="text-xl font-medium text-white">5.1. Estrutura de Cobrança</h3>
          <p>A FusionPay cobra taxas sobre transações aprovadas conforme plano contratado:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PIX:</strong> A partir de 0,99% por transação</li>
            <li><strong>Cartão de Crédito:</strong> A partir de 2,99% + R$ 0,39 por transação</li>
            <li><strong>Boleto Bancário:</strong> R$ 2,49 por boleto</li>
            <li><strong>Pagamentos Internacionais:</strong> Taxas específicas conforme moeda</li>
          </ul>
          <h3 className="text-xl font-medium text-white">5.2. Ausência de Taxas Ocultas</h3>
          <p>A FusionPay NÃO cobra:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Taxa de setup ou implementação</li>
            <li>Mensalidade ou anuidade</li>
            <li>Taxa de cancelamento ou rescisão</li>
            <li>Custos de integração técnica</li>
          </ul>
          <h3 className="text-xl font-medium text-white">5.3. Alterações de Taxas</h3>
          <p>Reservamo-nos o direito de alterar nossa estrutura de taxas mediante notificação prévia de 30 dias.</p>
          
          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">6. Prazo de Recebimento</h2>
          <p>Os valores das transações aprovadas ficarão disponíveis conforme cronograma:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>D+1:</strong> Disponível em até 24 horas para PIX e boleto</li>
            <li><strong>D+14:</strong> Padrão para cartão de crédito à vista</li>
            <li><strong>D+30:</strong> Padrão para cartão de crédito parcelado</li>
            <li><strong>D+0:</strong> Disponível em planos premium</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">7. Política Antifraude</h2>
          <h3 className="text-xl font-medium text-white">7.1. Proteção</h3>
          <p>A FusionPay utiliza sistema antifraude avançado com IA para proteger todas as transações. Reservamo-nos o direito de:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Rejeitar ou suspender transações suspeitas</li>
            <li>Solicitar documentação adicional</li>
            <li>Reter valores em caso de investigação</li>
            <li>Encerrar contas envolvidas em atividades fraudulentas</li>
          </ul>
          <h3 className="text-xl font-medium text-white">7.2. Chargebacks</h3>
          <p>Em caso de contestação de pagamento (chargeback):</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Você será notificado imediatamente</li>
            <li>Terá prazo para apresentar defesa</li>
            <li>O valor será debitado de seu saldo se procedente</li>
            <li>Taxas administrativas poderão ser aplicadas</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">8. Uso Proibido</h2>
          <p>É estritamente proibido utilizar a FusionPay para:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Atividades ilegais ou fraudulentas</li>
            <li>Venda de produtos proibidos ou restritos</li>
            <li>Lavagem de dinheiro ou financiamento ao terrorismo</li>
            <li>Violação de direitos de propriedade intelectual</li>
            <li>Jogos de azar não regulamentados</li>
            <li>Conteúdo adulto sem autorização</li>
            <li>Medicamentos sem prescrição</li>
            <li>Armas e munições</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">9. Limitação de Responsabilidade</h2>
          <p>A FusionPay não se responsabiliza por:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Problemas técnicos de terceiros (bancos, adquirentes, operadoras)</li>
            <li>Disputas entre vendedor e comprador sobre produtos/serviços</li>
            <li>Perdas financeiras decorrentes de decisões comerciais do usuário</li>
            <li>Interrupções temporárias do serviço para manutenção</li>
            <li>Ações de autoridades reguladoras ou judiciais</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">10. Proteção de Dados</h2>
          <p>A FusionPay está comprometida com a proteção de dados conforme LGPD (Lei 13.709/2018). Consulte nossa Política de Privacidade para informações detalhadas.</p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">11. Propriedade Intelectual</h2>
          <p>Todos os direitos sobre a plataforma FusionPay, incluindo código-fonte, design, logos e marca são de propriedade exclusiva da FusionPay. É proibido:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Copiar, modificar ou distribuir nosso código</li>
            <li>Fazer engenharia reversa da plataforma</li>
            <li>Usar nossa marca sem autorização expressa</li>
            <li>Criar produtos derivados sem licença</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">12. Rescisão</h2>
          <h3 className="text-xl font-medium text-white">12.1. Pelo Usuário</h3>
          <p>Você pode cancelar sua conta a qualquer momento através do dashboard, sem custos ou multas.</p>
          <h3 className="text-xl font-medium text-white">12.2. Pela FusionPay</h3>
          <p>Podemos suspender ou encerrar sua conta imediatamente se:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Houver violação destes Termos de Uso</li>
            <li>Detectarmos atividade fraudulenta</li>
            <li>Você fornecer informações falsas</li>
            <li>Houver risco à segurança da plataforma</li>
            <li>Por determinação legal ou regulatória</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">13. Alterações nos Termos</h2>
          <p>A FusionPay pode modificar estes Termos a qualquer momento. Alterações significativas serão comunicadas com 30 dias de antecedência. O uso continuado após as alterações constitui aceitação dos novos termos.</p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">14. Lei Aplicável e Foro</h2>
          <p>Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de Florianópolis/SC para dirimir quaisquer controvérsias.</p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">15. Contato</h2>
          <p>Para dúvidas sobre estes Termos de Uso, entre em contato:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Email:</strong> contato@fusionpay.com</li>
            <li><strong>WhatsApp:</strong> +55 (79) 64435-0321</li>
            <li><strong>Endereço:</strong> Rod. José Carlos Daux, 5500 - Sala 211, Bloco Campeche A - Saco Grande, Florianópolis/SC - CEP: 88.032-005</li>
          </ul>

          <p className="text-center font-bold pt-6 border-t border-white/10">
            Aceite: Ao utilizar a FusionPay, você declara ter lido, compreendido e concordado integralmente com estes Termos de Uso.
          </p>

          <Link href="/" className="text-primary hover:underline">
            ← Voltar para a página inicial
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
