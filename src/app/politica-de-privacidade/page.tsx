
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 container mx-auto py-24 px-4">
        <div className="prose prose-invert max-w-none space-y-6 text-neutral-300">
          <h1 className="text-4xl font-bold text-primary mb-2">Política de Privacidade</h1>
          <p className="lead text-lg text-neutral-400">Última atualização: 09 de Outubro de 2025 • Versão 1.0</p>
          <p className="border-l-4 border-primary pl-4 italic">
            <strong>Seu compromisso com a privacidade:</strong> A FusionPay está totalmente comprometida com a proteção dos seus dados pessoais em conformidade com a LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018).
          </p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">1. Informações Gerais</h2>
          <p>Esta Política de Privacidade descreve como a FusionPay Instituição de Pagamento S.A., CNPJ XX.XXX.XXX/0001-XX, coleta, usa, armazena e protege seus dados pessoais quando você utiliza nossa plataforma de pagamentos.</p>
          <h3 className="text-xl font-medium text-white">1.1. Controlador de Dados</h3>
          <p>A FusionPay atua como Controladora dos dados pessoais coletados através de nossa plataforma, sendo responsável pelas decisões referentes ao tratamento dos seus dados.</p>
          <h3 className="text-xl font-medium text-white">1.2. Encarregado de Dados (DPO)</h3>
          <p>Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato com nosso DPO:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Email:</strong> dpo@fusionpaybr.com.br</li>
            <li><strong>Endereço:</strong> [Endereço Completo]</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">2. Dados Coletados</h2>
          <h3 className="text-xl font-medium text-white">2.1. Dados Fornecidos por Você</h3>
          <p>Coletamos as seguintes informações quando você se cadastra ou utiliza nossos serviços:</p>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Categoria</th>
                <th className="text-left">Dados Coletados</th>
                <th className="text-left">Finalidade</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Identificação</td><td>Nome completo, CPF, RG, data de nascimento</td><td>Identificação do usuário e conformidade regulatória</td></tr>
              <tr><td>Contato</td><td>Email, telefone, endereço</td><td>Comunicação e notificações</td></tr>
              <tr><td>Empresarial</td><td>CNPJ, razão social, contrato social</td><td>Cadastro de pessoa jurídica</td></tr>
              <tr><td>Financeira</td><td>Dados bancários, histórico de transações</td><td>Processamento de pagamentos e repasses</td></tr>
              <tr><td>Documentos</td><td>Comprovantes de residência, certidões</td><td>Verificação de identidade e compliance</td></tr>
            </tbody>
          </table>
          <h3 className="text-xl font-medium text-white">2.2. Dados Coletados Automaticamente</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, sistema operacional, páginas visitadas</li>
            <li><strong>Dados de Dispositivo:</strong> Modelo, fabricante, identificador único do dispositivo</li>
            <li><strong>Cookies:</strong> Informações sobre preferências e comportamento de navegação (veja nossa Política de Cookies)</li>
            <li><strong>Logs de Sistema:</strong> Registros de acesso, ações realizadas, timestamps</li>
          </ul>
          <h3 className="text-xl font-medium text-white">2.3. Dados de Terceiros</h3>
          <p>Podemos receber dados de:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Bureaus de Crédito:</strong> Score de crédito, histórico financeiro</li>
            <li><strong>Bancos e Instituições Financeiras:</strong> Validação de contas, transações</li>
            <li><strong>Órgãos Públicos:</strong> Validação de CPF, CNPJ, situação cadastral</li>
            <li><strong>Redes de Cartões:</strong> Bandeiras (Visa, Mastercard, etc.)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">3. Finalidades do Tratamento</h2>
          <p>Utilizamos seus dados pessoais para:</p>
          <h3 className="text-xl font-medium text-white">3.1. Execução do Contrato</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Criar e gerenciar sua conta</li>
            <li>Processar pagamentos e transferências</li>
            <li>Executar operações financeiras solicitadas</li>
            <li>Fornecer suporte técnico e atendimento</li>
          </ul>
          <h3 className="text-xl font-medium text-white">3.2. Cumprimento de Obrigações Legais</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Atender exigências do Banco Central do Brasil</li>
            <li>Cumprir normas de prevenção à lavagem de dinheiro (PLD-FT)</li>
            <li>Responder a ordens judiciais e requisições de autoridades</li>
            <li>Manter registros conforme legislação vigente</li>
          </ul>
          <h3 className="text-xl font-medium text-white">3.3. Interesses Legítimos</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Prevenir fraudes e garantir segurança da plataforma</li>
            <li>Melhorar nossos serviços e experiência do usuário</li>
            <li>Realizar análises estatísticas e estudos de mercado</li>
            <li>Desenvolver novos produtos e funcionalidades</li>
          </ul>
          <h3 className="text-xl font-medium text-white">3.4. Consentimento</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Enviar comunicações de marketing (você pode cancelar a qualquer momento)</li>
            <li>Utilizar cookies não essenciais</li>
            <li>Compartilhar dados para finalidades específicas informadas</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">4. Compartilhamento de Dados</h2>
          <h3 className="text-xl font-medium text-white">4.1. Com Quem Compartilhamos</h3>
          <p>Seus dados podem ser compartilhados com:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Instituições Financeiras:</strong> Bancos, adquirentes, bandeiras de cartão para processamento de pagamentos</li>
            <li><strong>Parceiros Tecnológicos:</strong> Provedores de cloud (AWS, Google Cloud), serviços de email, analytics</li>
            <li><strong>Bureaus de Crédito:</strong> Serasa, Boa Vista, SPC para análise de risco</li>
            <li><strong>Autoridades:</strong> Banco Central, Receita Federal, Polícia Federal quando legalmente exigido</li>
            <li><strong>Prestadores de Serviço:</strong> Empresas que nos auxiliam (auditoria, jurídico, contabilidade)</li>
          </ul>
          <h3 className="text-xl font-medium text-white">4.2. Não Compartilhamos Com</h3>
          <p>A FusionPay NUNCA vende ou aluga seus dados pessoais para terceiros.</p>
          <h3 className="text-xl font-medium text-white">4.3. Transferência Internacional</h3>
          <p>Alguns de nossos fornecedores de serviços estão localizados fora do Brasil (como AWS e Google Cloud). Garantimos que essas transferências ocorrem com salvaguardas adequadas conforme LGPD.</p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">5. Segurança dos Dados</h2>
          <h3 className="text-xl font-medium text-white">5.1. Medidas Técnicas</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Criptografia:</strong> SSL/TLS 256-bit para dados em trânsito</li>
            <li><strong>Tokenização:</strong> Dados sensíveis (cartões) são tokenizados</li>
            <li><strong>Firewall:</strong> Proteção contra acessos não autorizados</li>
            <li><strong>Backup:</strong> Replicação em múltiplos data centers</li>
            <li><strong>Monitoramento 24/7:</strong> Detecção de ameaças em tempo real</li>
          </ul>
          <h3 className="text-xl font-medium text-white">5.2. Medidas Organizacionais</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Acesso restrito aos dados apenas para colaboradores autorizados</li>
            <li>Treinamento regular sobre segurança e privacidade</li>
            <li>Políticas internas rigorosas de proteção de dados</li>
            <li>Auditorias periódicas de segurança</li>
          </ul>
          <h3 className="text-xl font-medium text-white">5.3. Certificações</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PCI-DSS Level 1:</strong> Padrão de segurança para dados de cartão</li>
            <li><strong>ISO 27001:</strong> Gestão de segurança da informação</li>
            <li><strong>SOC 2 Type II:</strong> Controles de segurança auditados</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">6. Retenção de Dados</h2>
          <p>Mantemos seus dados pelo período necessário para:</p>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Tipo de Dado</th>
                <th className="text-left">Período de Retenção</th>
                <th className="text-left">Base Legal</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Dados cadastrais</td><td>Durante relação contratual + 5 anos</td><td>Obrigação legal (Código Civil)</td></tr>
              <tr><td>Histórico de transações</td><td>5 anos</td><td>Regulação do Banco Central</td></tr>
              <tr><td>Logs de acesso</td><td>6 meses</td><td>Marco Civil da Internet</td></tr>
              <tr><td>Documentos fiscais</td><td>5 anos</td><td>Legislação tributária</td></tr>
              <tr><td>Dados de marketing</td><td>Até revogação do consentimento</td><td>Consentimento</td></tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">7. Seus Direitos</h2>
          <p>Conforme LGPD, você tem direito a:</p>
          <h3 className="text-xl font-medium text-white">7.1. Confirmação e Acesso</h3>
          <p>Confirmar se tratamos seus dados e acessá-los integralmente.</p>
          <h3 className="text-xl font-medium text-white">7.2. Correção</h3>
          <p>Corrigir dados incompletos, inexatos ou desatualizados.</p>
          <h3 className="text-xl font-medium text-white">7.3. Anonimização, Bloqueio ou Eliminação</h3>
          <p>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.</p>
          <h3 className="text-xl font-medium text-white">7.4. Portabilidade</h3>
          <p>Receber seus dados em formato estruturado e interoperável para transferência a outro fornecedor.</p>
          <h3 className="text-xl font-medium text-white">7.5. Eliminação</h3>
          <p>Solicitar eliminação de dados tratados com base em consentimento.</p>
          <h3 className="text-xl font-medium text-white">7.6. Informação sobre Compartilhamento</h3>
          <p>Saber com quais entidades públicas e privadas compartilhamos seus dados.</p>
          <h3 className="text-xl font-medium text-white">7.7. Revogação do Consentimento</h3>
          <p>Retirar consentimento a qualquer momento (pode impactar funcionalidades).</p>
          <h3 className="text-xl font-medium text-white">7.8. Como Exercer Seus Direitos</h3>
          <p>Entre em contato através de:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Email:</strong> dpo@fusionpaybr.com.br</li>
            <li><strong>Dashboard:</strong> Área "Privacidade e Dados"</li>
            <li><strong>WhatsApp:</strong> +55 (79) 64435-0321</li>
          </ul>
          <p>Responderemos sua solicitação em até 15 dias.</p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">8. Menores de Idade</h2>
          <p>Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente dados de crianças e adolescentes. Se identificarmos tal coleta, eliminaremos os dados imediatamente.</p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">9. Cookies e Tecnologias Similares</h2>
          <p>Utilizamos cookies para melhorar sua experiência. Para mais informações, consulte nossa <Link href="/politica-de-cookies" className="text-primary hover:underline">Política de Cookies</Link>.</p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">10. Alterações nesta Política</h2>
          <p>Podemos atualizar esta Política periodicamente. Alterações significativas serão comunicadas por email e/ou notificação na plataforma com 30 dias de antecedência.</p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">11. Legislação e Jurisdição</h2>
          <p>Esta Política é regida pela legislação brasileira, especialmente pela LGPD (Lei 13.709/2018). Eventuais disputas serão resolvidas no foro da comarca de [Cidade/Estado].</p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">12. Reclamações à ANPD</h2>
          <p>Você tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) se considerar que seus direitos foram violados:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Website:</strong> www.gov.br/anpd</li>
            <li><strong>Email:</strong> comunicacao@anpd.gov.br</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">13. Contato</h2>
          <p>Para dúvidas sobre esta Política de Privacidade:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Encarregado de Dados (DPO):</strong> dpo@fusionpaybr.com.br</li>
            <li><strong>Suporte Geral:</strong> suporte@fusionpaybr.com.br</li>
            <li><strong>Telefone:</strong> +55 (XX) XXXX-XXXX</li>
            <li><strong>WhatsApp:</strong> +55 (79) 64435-0321</li>
          </ul>
          <p className="border-l-4 border-primary pl-4 italic">
            <strong>Compromisso:</strong> A FusionPay está comprometida com a transparência e proteção dos seus dados. Estamos à disposição para esclarecer qualquer dúvida sobre como tratamos suas informações pessoais.
          </p>

          <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-neutral-200">
            <Link href="/">
              ← Voltar para a página inicial
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
