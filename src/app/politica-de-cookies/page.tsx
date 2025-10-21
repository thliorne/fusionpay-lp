import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

export default function PoliticaDeCookiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 container mx-auto py-24 px-4">
        <div className="prose prose-invert max-w-none space-y-6 text-neutral-300">
          <h1 className="text-4xl font-bold text-primary mb-2">Política de Cookies</h1>
          <p className="lead text-lg text-neutral-400">Última atualização: 09 de outubro de 2025</p>

          <p className="border-l-4 border-primary pl-4 italic">
            <strong>Transparência:</strong> Esta Política de Cookies explica como a FusionPay utiliza cookies e tecnologias semelhantes em nossa plataforma. Leia atentamente para entender como coletamos e usamos essas informações.
          </p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">1. O Que São Cookies?</h2>
          <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, smartphone, tablet) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.</p>

          <h3 className="text-xl font-medium text-white">1.1. Tipos de Cookies por Duração</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookies de Sessão:</strong> Temporários, são excluídos quando você fecha o navegador.</li>
            <li><strong>Cookies Persistentes:</strong> Permanecem no seu dispositivo por um período determinado ou até serem excluídos manualmente.</li>
          </ul>

          <h3 className="text-xl font-medium text-white">1.2. Tipos de Cookies por Origem</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookies Próprios (First-party):</strong> Definidos diretamente pela FusionPay.</li>
            <li><strong>Cookies de Terceiros (Third-party):</strong> Definidos por parceiros e serviços integrados.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">2. Como Utilizamos Cookies</h2>
          <p>A FusionPay utiliza cookies para diferentes finalidades, sempre buscando melhorar sua experiência e garantir a segurança da plataforma.</p>

          <h3 className="text-xl font-medium text-white">2.1. Cookies Essenciais</h3>
          <p>Estes cookies são estritamente necessários para o funcionamento da plataforma. Sem eles, alguns serviços não podem ser fornecidos.</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Cookie</th>
                  <th className="text-left">Finalidade</th>
                  <th className="text-left">Duração</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>session_id</td><td>Mantém sua sessão ativa durante o uso da plataforma</td><td>Sessão</td></tr>
                <tr><td>auth_token</td><td>Gerencia sua autenticação e acesso seguro</td><td>30 dias</td></tr>
                <tr><td>csrf_token</td><td>Protege contra ataques CSRF (Cross-Site Request Forgery)</td><td>Sessão</td></tr>
                <tr><td>load_balancer</td><td>Distribui o tráfego entre nossos servidores</td><td>Sessão</td></tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-medium text-white">2.2. Cookies de Funcionalidade</h3>
          <p>Estes cookies permitem que a plataforma lembre suas preferências e escolhas para oferecer recursos aprimorados e mais personalizados.</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Cookie</th>
                  <th className="text-left">Finalidade</th>
                  <th className="text-left">Duração</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>user_preferences</td><td>Armazena suas preferências de idioma e moeda</td><td>1 ano</td></tr>
                <tr><td>dashboard_layout</td><td>Lembra a configuração personalizada do seu dashboard</td><td>6 meses</td></tr>
                <tr><td>notification_settings</td><td>Gerencia suas preferências de notificações</td><td>1 ano</td></tr>
                <tr><td>theme_mode</td><td>Armazena sua preferência de tema (claro/escuro)</td><td>1 ano</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium text-white">2.3. Cookies de Desempenho e Análise</h3>
          <p>Estes cookies nos ajudam a entender como os usuários interagem com a plataforma, permitindo-nos melhorar continuamente nossos serviços.</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Cookie</th>
                  <th className="text-left">Finalidade</th>
                  <th className="text-left">Duração</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>_ga</td><td>Google Analytics - identifica usuários únicos</td><td>2 anos</td></tr>
                <tr><td>_gid</td><td>Google Analytics - identifica usuários únicos</td><td>24 horas</td></tr>
                <tr><td>_gat</td><td>Google Analytics - controla taxa de solicitações</td><td>1 minuto</td></tr>
                <tr><td>hotjar_session</td><td>Hotjar - análise de comportamento e mapas de calor</td><td>30 minutos</td></tr>
                <tr><td>mixpanel_track</td><td>Mixpanel - análise de eventos e conversões</td><td>1 ano</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium text-white">2.4. Cookies de Marketing</h3>
          <p>Estes cookies são usados para tornar as mensagens publicitárias mais relevantes para você e seus interesses.</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Cookie</th>
                  <th className="text-left">Finalidade</th>
                  <th className="text-left">Duração</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>_fbp</td><td>Facebook Pixel - rastreamento de conversões</td><td>3 meses</td></tr>
                <tr><td>_gcl_au</td><td>Google Ads - atribuição de conversões</td><td>3 meses</td></tr>
                <tr><td>linkedin_insight</td><td>LinkedIn - análise e remarketing</td><td>6 meses</td></tr>
                <tr><td>utm_source</td><td>Rastreamento de origem de tráfego</td><td>6 meses</td></tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">3. Tecnologias Semelhantes</h2>
          <p>Além de cookies, utilizamos outras tecnologias para coletar e armazenar informações:</p>
          
          <h3 className="text-xl font-medium text-white">3.1. Web Beacons (Pixels)</h3>
          <p>Pequenas imagens gráficas (também conhecidas como "pixel tags" ou "clear GIFs") que podem ser incluídas em nosso site e e-mails. Usamos para:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Rastrear se você abriu nossos e-mails</li>
            <li>Medir a eficácia de campanhas de marketing</li>
            <li>Compilar estatísticas sobre uso do site</li>
          </ul>

          <h3 className="text-xl font-medium text-white">3.2. Local Storage</h3>
          <p>Armazenamento local do navegador que permite guardar dados localmente no seu dispositivo. Usamos para:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Armazenar preferências de interface temporariamente</li>
            <li>Melhorar a velocidade de carregamento da plataforma</li>
            <li>Sincronizar dados offline</li>
          </ul>
          
          <h3 className="text-xl font-medium text-white">3.3. Session Storage</h3>
          <p>Similar ao Local Storage, mas os dados são excluídos quando a aba do navegador é fechada. Usamos para:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Manter estado temporário durante navegação</li>
            <li>Armazenar dados de formulários preenchidos</li>
            <li>Gerenciar fluxos de múltiplas etapas</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">4. Gerenciamento de Cookies</h2>
          <p>Você tem total controle sobre o uso de cookies em nosso site. Você pode:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Aceitar todos os cookies:</strong> Permite que usemos todos os tipos de cookies.</li>
            <li><strong>Aceitar apenas cookies essenciais:</strong> Permite apenas cookies necessários para funcionamento básico.</li>
            <li><strong>Personalizar suas preferências:</strong> Escolha quais categorias de cookies aceitar.</li>
            <li><strong>Rejeitar cookies não essenciais:</strong> Bloqueia cookies de análise e marketing.</li>
          </ul>

          <h3 className="text-xl font-medium text-white">4.1. Configurações do Navegador</h3>
          <p>Você pode configurar seu navegador para recusar todos os cookies ou indicar quando um cookie está sendo enviado. No entanto, se você não aceitar cookies, pode não conseguir usar alguns recursos da nossa plataforma.</p>
          <p>Como gerenciar cookies nos principais navegadores:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Google Chrome:</strong> Menu &gt; Configurações &gt; Privacidade e segurança &gt; Cookies e outros dados do site</li>
            <li><strong>Mozilla Firefox:</strong> Menu &gt; Opções &gt; Privacidade e Segurança &gt; Cookies e dados de sites</li>
            <li><strong>Safari:</strong> Preferências &gt; Privacidade &gt; Cookies e dados de websites</li>
            <li><strong>Microsoft Edge:</strong> Menu &gt; Configurações &gt; Cookies e permissões de site &gt; Cookies e dados armazenados</li>
          </ul>
          
          <h3 className="text-xl font-medium text-white">4.2. Central de Preferências da FusionPay</h3>
          <p>Você pode gerenciar suas preferências de cookies diretamente em nossa plataforma:</p>
          <ul className="list-disc pl-5 space-y-2">
              <li>Acesse sua conta na FusionPay</li>
              <li>Vá para Configurações &gt; Privacidade</li>
              <li>Clique em "Gerenciar Cookies"</li>
              <li>Selecione suas preferências por categoria</li>
              <li>Salve suas alterações</li>
            </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">5. Cookies de Terceiros</h2>
          <p>Trabalhamos com parceiros confiáveis que podem definir cookies em nosso site. Estes parceiros incluem:</p>
          <h3 className="text-xl font-medium text-white">5.1. Parceiros de Análise</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Google Analytics: Análise de tráfego e comportamento - Política de Privacidade</li>
            <li>Hotjar: Análise de experiência do usuário - Política de Privacidade</li>
            <li>Mixpanel: Análise de produto e eventos - Política de Privacidade</li>
          </ul>
          <h3 className="text-xl font-medium text-white">5.2. Parceiros de Marketing</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Google Ads: Publicidade e remarketing - Política de Privacidade</li>
            <li>Facebook Pixel: Rastreamento de conversões - Política de Privacidade</li>
            <li>LinkedIn Insight Tag: Análise de campanhas B2B - Política de Privacidade</li>
          </ul>
          <h3 className="text-xl font-medium text-white">5.3. Parceiros de Infraestrutura</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cloudflare: CDN e segurança - Política de Privacidade</li>
            <li>Amazon Web Services (AWS): Hospedagem - Política de Privacidade</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">6. Cookies e Dispositivos Móveis</h2>
          <p>Se você acessa nossa plataforma através de um dispositivo móvel, também podemos coletar um identificador único de dispositivo e outras informações similares. Nossos aplicativos móveis podem usar:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Identificadores de Publicidade Móvel: IDFA (iOS) ou AAID (Android)</li>
            <li>SDKs de Terceiros: Para análise e funcionalidades específicas</li>
            <li>Notificações Push: Com seu consentimento explícito</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">7. Segurança dos Cookies</h2>
          <p>A FusionPay implementa medidas de segurança rigorosas para proteger os dados armazenados em cookies:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookies Seguros:</strong> Transmitidos apenas por conexões HTTPS criptografadas</li>
            <li><strong>HttpOnly Flag:</strong> Cookies sensíveis não são acessíveis via JavaScript</li>
            <li><strong>SameSite Attribute:</strong> Proteção contra ataques CSRF</li>
            <li><strong>Criptografia:</strong> Dados sensíveis são criptografados antes de serem armazenados</li>
            <li><strong>Expiração Adequada:</strong> Cookies têm prazos de validade apropriados</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">8. Conformidade com LGPD</h2>
          <p>O uso de cookies pela FusionPay está em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018). Seguimos os seguintes princípios:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Consentimento:</strong> Solicitamos seu consentimento antes de usar cookies não essenciais</li>
            <li><strong>Finalidade:</strong> Usamos cookies apenas para os propósitos declarados</li>
            <li><strong>Necessidade:</strong> Coletamos apenas dados estritamente necessários</li>
            <li><strong>Transparência:</strong> Informamos claramente sobre nosso uso de cookies</li>
            <li><strong>Segurança:</strong> Protegemos os dados coletados via cookies</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">9. Cookies e Privacidade de Menores</h2>
          <p>A FusionPay não coleta intencionalmente informações de menores de 18 anos através de cookies. Se você é menor de 18 anos, não use nossa plataforma sem supervisão de pais ou responsáveis legais.</p>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">10. Atualizações desta Política</h2>
          <p>Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por motivos operacionais, legais ou regulatórios.</p>
          <p>Quando fizermos alterações significativas, notificaremos você através de:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Banner de notificação ao acessar a plataforma</li>
            <li>E-mail para o endereço cadastrado</li>
            <li>Atualização da data de "Última atualização" no topo desta página</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">11. Seus Direitos</h2>
          <p>Em relação ao uso de cookies, você tem os seguintes direitos sob a LGPD:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Direito de Acesso:</strong> Saber quais cookies estão armazenados em seu dispositivo</li>
            <li><strong>Direito de Retificação:</strong> Corrigir preferências de cookies incorretas</li>
            <li><strong>Direito de Exclusão:</strong> Deletar cookies não essenciais a qualquer momento</li>
            <li><strong>Direito de Oposição:</strong> Recusar cookies não essenciais</li>
            <li><strong>Direito de Revogação:</strong> Retirar consentimento previamente dado</li>
            <li><strong>Direito à Portabilidade:</strong> Solicitar dados coletados via cookies em formato estruturado</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">12. Opt-Out de Publicidade Direcionada</h2>
          <p>Você pode desativar publicidade direcionada através das seguintes ferramentas:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Google Ads Settings:</strong> adssettings.google.com</li>
            <li><strong>Facebook Ad Preferences:</strong> facebook.com/ads/preferences</li>
            <li><strong>LinkedIn Ad Settings:</strong> linkedin.com/psettings/advertising</li>
            <li><strong>Your Online Choices (Europa):</strong> youronlinechoices.com</li>
            <li><strong>NAI Opt-Out (EUA):</strong> networkadvertising.org/choices</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">13. Contato e Dúvidas</h2>
          <p>Se você tiver dúvidas sobre nossa Política de Cookies ou quiser exercer seus direitos, entre em contato:</p>
          <p><strong>FusionPay Meios de Pagamento LTDA</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>E-mail:</strong> privacidade@fusionpaybr.com.br</li>
            <li><strong>DPO (Encarregado de Dados):</strong> dpo@fusionpaybr.com.br</li>
            <li><strong>Telefone:</strong> 0800 123 4567</li>
            <li><strong>Endereço:</strong> Avenida Paulista, 1000 - São Paulo, SP - CEP: 01310-100</li>
            <li><strong>Horário de Atendimento:</strong> Segunda a Sexta, das 9h às 18h</li>
          </ul>

          <p className="border-l-4 border-primary pl-4 italic">
            <strong>Compromisso com Transparência:</strong> A FusionPay está comprometida em usar cookies de forma responsável e transparente. Respeitamos sua privacidade e estamos à disposição para esclarecer qualquer dúvida sobre como utilizamos cookies em nossa plataforma.
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
