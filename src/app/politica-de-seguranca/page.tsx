
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ShieldCheck, Clock, GitBranch, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PoliticaDeSegurancaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 container mx-auto py-24 px-4">
        <div className="prose prose-invert max-w-none space-y-6 text-neutral-300">
          <h1 className="text-4xl font-bold text-primary mb-2">Política de Segurança</h1>
          <p className="lead text-lg text-neutral-400">Última atualização: 09 de outubro de 2025</p>

          <p className="border-l-4 border-primary pl-4 italic">
            <strong>Compromisso com Segurança:</strong> A FusionPay adota as mais rigorosas práticas de segurança da informação para proteger seus dados e transações. Esta política detalha nossas medidas de segurança, processos de monitoramento e resposta a incidentes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 text-center">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <p className="text-2xl font-bold text-primary">99.99%</p>
              <p className="text-xs">Uptime Garantido</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-xs">Monitoramento</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <p className="text-2xl font-bold text-primary">&lt;15min</p>
              <p className="text-xs">Tempo de Resposta</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-xs">Vazamentos de Dados</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">1. Certificações e Conformidades</h2>
          <p>A FusionPay mantém as mais rigorosas certificações de segurança da indústria de pagamentos:</p>
          <ul className="list-none space-y-4">
            <li><strong>🛡️ PCI-DSS Level 1:</strong> Certificação máxima de segurança para processamento de cartões de crédito, validada anualmente por auditoria externa.</li>
            <li><strong>🔐 ISO/IEC 27001:2013:</strong> Padrão internacional para gestão de segurança da informação, com auditorias semestrais.</li>
            <li><strong>✓ SOC 2 Type II:</strong> Auditoria independente de controles de segurança, disponibilidade e confidencialidade.</li>
            <li><strong>🇧🇷 LGPD Compliance:</strong> Total conformidade com a Lei Geral de Proteção de Dados brasileira (Lei 13.709/2018).</li>
            <li><strong>🏦 Banco Central:</strong> Regulamentação e supervisão do Banco Central do Brasil para instituições de pagamento.</li>
            <li><strong>🌐 GDPR Compliance:</strong> Conformidade com o Regulamento Geral de Proteção de Dados da União Europeia.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">2. Infraestrutura de Segurança</h2>
          <p>Nossa infraestrutura é projetada com múltiplas camadas de segurança para garantir proteção total dos dados e transações.</p>
          <h3 className="text-xl font-medium text-white">2.1. Segurança de Rede</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Camada</th><th>Tecnologia</th><th>Descrição</th></tr>
              </thead>
              <tbody>
                <tr><td>Perímetro</td><td>WAF (Web Application Firewall)</td><td>Proteção contra ataques DDoS, SQL Injection, XSS e outras vulnerabilidades OWASP Top 10</td></tr>
                <tr><td>CDN</td><td>Cloudflare Enterprise</td><td>Distribuição global de conteúdo com proteção DDoS de até 100 Tbps</td></tr>
                <tr><td>Firewall</td><td>Next-Generation Firewall</td><td>Inspeção profunda de pacotes e prevenção de intrusão (IPS/IDS)</td></tr>
                <tr><td>Segmentação</td><td>VLANs e VPCs</td><td>Isolamento de redes por camadas de aplicação e dados sensíveis</td></tr>
                <tr><td>VPN</td><td>IPSec e SSL VPN</td><td>Acesso seguro para equipe técnica com autenticação multifator</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-medium text-white">2.2. Criptografia</h3>
          <p>Todos os dados são criptografados em trânsito e em repouso usando os mais altos padrões da indústria:</p>
          <h4>Dados em Trânsito</h4>
          <ul>
            <li><strong>TLS 1.3:</strong> Protocolo de criptografia mais recente para todas as comunicações</li>
            <li><strong>Certificate Pinning:</strong> Validação rigorosa de certificados SSL/TLS</li>
            <li><strong>Perfect Forward Secrecy (PFS):</strong> Geração única de chaves para cada sessão</li>
            <li><strong>HSTS (HTTP Strict Transport Security):</strong> Forçamento de conexões HTTPS</li>
          </ul>
          <h4>Dados em Repouso</h4>
          <ul>
            <li><strong>AES-256:</strong> Criptografia de dados em banco de dados e backups</li>
            <li><strong>Envelope Encryption:</strong> Múltiplas camadas de criptografia para dados sensíveis</li>
            <li><strong>HSM (Hardware Security Module):</strong> Armazenamento seguro de chaves criptográficas</li>
            <li><strong>Tokenização:</strong> Substituição de dados de cartão por tokens únicos não reversíveis</li>
          </ul>
          <h3 className="text-xl font-medium text-white">2.3. Proteção de Dados de Cartão</h3>
          <p>Dados de cartão de crédito recebem tratamento especial conforme exigências PCI-DSS:</p>
          <ul>
            <li><strong>Jamais armazenamos:</strong> CVV, PIN ou dados de trilha magnética completa</li>
            <li><strong>Tokenização Imediata:</strong> Dados de cartão são tokenizados antes de qualquer armazenamento</li>
            <li><strong>Vault Seguro:</strong> Números de cartão são armazenados em vault PCI-compliant separado</li>
            <li><strong>Mascaramento:</strong> Exibição apenas dos últimos 4 dígitos em interfaces</li>
            <li><strong>Criptografia Ponta-a-Ponta:</strong> Do formulário de checkout até o processador</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">3. Controle de Acesso</h2>
          <p>Implementamos controles rigorosos de acesso baseados no princípio de menor privilégio:</p>
          <h3 className="text-xl font-medium text-white">3.1. Autenticação</h3>
          <ul>
            <li><strong>MFA Obrigatório:</strong> Autenticação multifator para todos os usuários e equipe técnica</li>
            <li><strong>TOTP/U2F:</strong> Suporte a Google Authenticator, Authy e chaves de segurança YubiKey</li>
            <li><strong>Biometria:</strong> Suporte a autenticação biométrica em dispositivos móveis</li>
            <li><strong>SSO (Single Sign-On):</strong> Integração com provedores de identidade empresariais (SAML 2.0)</li>
            <li><strong>Políticas de Senha:</strong> Mínimo 12 caracteres, complexidade obrigatória, rotação a cada 90 dias</li>
          </ul>
          <h3 className="text-xl font-medium text-white">3.2. Autorização</h3>
          <ul>
            <li><strong>RBAC (Role-Based Access Control):</strong> Permissões baseadas em funções e responsabilidades</li>
            <li><strong>Segregação de Funções:</strong> Separação de responsabilidades críticas entre diferentes usuários</li>
            <li><strong>Just-in-Time Access:</strong> Privilégios elevados concedidos temporariamente quando necessário</li>
            <li><strong>Approval Workflows:</strong> Aprovações obrigatórias para ações sensíveis</li>
          </ul>
          <h3 className="text-xl font-medium text-white">3.3. Controle de Acesso Físico</h3>
          <ul>
            <li><strong>Data Centers Tier III/IV:</strong> Infraestrutura de nível bancário com redundância N+1</li>
            <li><strong>Biometria e Cartões:</strong> Acesso físico controlado por múltiplos fatores</li>
            <li><strong>Vigilância 24/7:</strong> CCTV com gravação contínua e monitoramento remoto</li>
            <li><strong>Controle de Visitantes:</strong> Registro obrigatório e escolta para não autorizados</li>
            <li><strong>Gabinetes Lacrados:</strong> Equipamentos em racks trancados com lacres de segurança</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">4. Monitoramento e Detecção</h2>
          <p>Monitoramos continuamente nossa infraestrutura para detectar e responder rapidamente a ameaças:</p>
          <h3 className="text-xl font-medium text-white">4.1. SIEM (Security Information and Event Management)</h3>
          <ul>
            <li><strong>Correlação de Eventos:</strong> Análise em tempo real de logs de todas as camadas</li>
            <li><strong>Alertas Automatizados:</strong> Notificações instantâneas para eventos suspeitos</li>
            <li><strong>Análise Comportamental:</strong> Machine learning para detectar anomalias</li>
            <li><strong>Threat Intelligence:</strong> Feeds de ameaças globais integrados</li>
          </ul>
          <h3 className="text-xl font-medium text-white">4.2. SOC (Security Operations Center)</h3>
          <p>Nossa equipe de segurança opera 24 horas por dia, 7 dias por semana:</p>
          <ul>
            <li><strong>Analistas Dedicados:</strong> Equipe especializada em segurança de pagamentos</li>
            <li><strong>Monitoramento Ativo:</strong> Análise contínua de eventos de segurança</li>
            <li><strong>Resposta Rápida:</strong> Tempo médio de resposta inferior a 15 minutos</li>
            <li><strong>Playbooks Automatizados:</strong> Resposta orquestrada a incidentes comuns</li>
          </ul>
          <h3 className="text-xl font-medium text-white">4.3. Monitoramento de Transações</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Verificação</th><th>Método</th><th>Ação</th></tr>
              </thead>
              <tbody>
                <tr><td>Velocidade de Transações</td><td>Limite de tentativas por período de tempo</td><td>Bloqueio temporário após threshold</td></tr>
                <tr><td>Geolocalização</td><td>Análise de IP e padrões de localização</td><td>Desafio adicional para locais incomuns</td></tr>
                <tr><td>Fingerprint de Dispositivo</td><td>Identificação única de dispositivos</td><td>Alerta para novos dispositivos</td></tr>
                <tr><td>Análise de Comportamento</td><td>Machine learning de padrões de uso</td><td>Score de risco dinâmico</td></tr>
                <tr><td>BIN Validation</td><td>Verificação de banco emissor</td><td>Rejeição de cartões inválidos</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">5. Prevenção de Fraude</h2>
          <p>Sistema multicamadas de prevenção de fraude com tecnologia de ponta:</p>
          <h3 className="text-xl font-medium text-white">5.1. 3D Secure 2.0</h3>
          <ul>
            <li><strong>Autenticação do Titular:</strong> Verificação adicional com banco emissor</li>
            <li><strong>Frictionless Flow:</strong> Experiência sem atrito para transações de baixo risco</li>
            <li><strong>Shift de Responsabilidade:</strong> Proteção contra chargebacks em transações autenticadas</li>
            <li><strong>Suporte EMV 3DS:</strong> Compatível com os padrões mais recentes</li>
          </ul>
          <h3 className="text-xl font-medium text-white">5.2. Machine Learning Antifraude</h3>
          <ul>
            <li><strong>Modelos Proprietários:</strong> Algoritmos treinados com milhões de transações</li>
            <li><strong>Score de Risco em Tempo Real:</strong> Avaliação instantânea de cada transação</li>
            <li><strong>Aprendizado Contínuo:</strong> Modelos atualizados diariamente</li>
            <li><strong>Análise de Rede:</strong> Detecção de padrões entre múltiplas transações</li>
          </ul>
          <h3 className="text-xl font-medium text-white">5.3. Regras de Negócio</h3>
          <p>Você pode configurar regras personalizadas de prevenção de fraude:</p>
          <ul>
            <li>Bloqueio por país, região ou cidade</li>
            <li>Limites de valor por transação</li>
            <li>Limites de quantidade de transações por período</li>
            <li>Listas brancas e negras de BINs, e-mails, CPFs</li>
            <li>Horários permitidos para transações</li>
            <li>Verificações de consistência de dados (nome, endereço, etc.)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">6. Segurança de Aplicações</h2>
          <p>Desenvolvemos software seguro seguindo as melhores práticas da indústria:</p>
          <h3 className="text-xl font-medium text-white">6.1. Desenvolvimento Seguro (SDLC)</h3>
          <ul>
            <li><strong>Threat Modeling:</strong> Análise de ameaças durante fase de design</li>
            <li><strong>Code Reviews:</strong> Revisão obrigatória de código por pares</li>
            <li><strong>SAST/DAST:</strong> Análise estática e dinâmica de segurança automatizada</li>
            <li><strong>Dependency Scanning:</strong> Verificação de vulnerabilidades em bibliotecas</li>
            <li><strong>Container Security:</strong> Imagens escaneadas e assinadas digitalmente</li>
          </ul>
          <h3 className="text-xl font-medium text-white">6.2. Testes de Segurança</h3>
          <ul>
            <li><strong>Penetration Testing:</strong> Testes de invasão trimestrais por empresa terceirizada</li>
            <li><strong>Bug Bounty Program:</strong> Programa de recompensas para pesquisadores de segurança</li>
            <li><strong>Vulnerability Scanning:</strong> Scans automatizados semanais</li>
            <li><strong>Red Team Exercises:</strong> Simulações de ataque por equipe especializada</li>
          </ul>
          <h3 className="text-xl font-medium text-white">6.3. Proteção OWASP Top 10</h3>
          <p>Proteção implementada contra todas as vulnerabilidades do OWASP Top 10:</p>
          <ul>
            <li><strong>A01 Broken Access Control:</strong> Validação rigorosa de permissões em cada requisição</li>
            <li><strong>A02 Cryptographic Failures:</strong> Criptografia de dados sensíveis em trânsito e repouso</li>
            <li><strong>A03 Injection:</strong> Parametrização de queries e sanitização de inputs</li>
            <li><strong>A04 Insecure Design:</strong> Threat modeling e design reviews</li>
            <li><strong>A05 Security Misconfiguration:</strong> Hardening automatizado e auditorias</li>
            <li><strong>A06 Vulnerable Components:</strong> Gestão de dependências e patches</li>
            <li><strong>A07 Authentication Failures:</strong> MFA obrigatório e rate limiting</li>
            <li><strong>A08 Data Integrity Failures:</strong> Assinatura digital e validação</li>
            <li><strong>A09 Logging Failures:</strong> Logging centralizado e monitoramento</li>
            <li><strong>A10 SSRF:</strong> Validação de URLs e segmentação de rede</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">7. Backup e Recuperação de Desastres</h2>
          <p>Estratégia abrangente de continuidade de negócios:</p>
          <h3 className="text-xl font-medium text-white">7.1. Política de Backup</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Tipo de Dado</th><th>Frequência</th><th>Retenção</th><th>Localização</th></tr>
              </thead>
              <tbody>
                <tr><td>Banco de Dados Transacional</td><td>Replicação em tempo real</td><td>30 dias (diário), 12 meses (mensal)</td><td>3 regiões geográficas distintas</td></tr>
                <tr><td>Arquivos de Configuração</td><td>A cada mudança + diário</td><td>90 dias</td><td>2 regiões geográficas</td></tr>
                <tr><td>Logs e Auditoria</td><td>Stream contínuo</td><td>7 anos (requisito regulatório)</td><td>Storage imutável</td></tr>
                <tr><td>Documentos e Comprovantes</td><td>Imediato após upload</td><td>5 anos mínimo</td><td>3 regiões geográficas</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-medium text-white">7.2. Disaster Recovery</h3>
          <ul>
            <li><strong>RTO (Recovery Time Objective):</strong> 4 horas para sistemas críticos</li>
            <li><strong>RPO (Recovery Point Objective):</strong> Perda máxima de 5 minutos de dados</li>
            <li><strong>Failover Automático:</strong> Mudança automática para região secundária em caso de falha</li>
            <li><strong>Testes Trimestrais:</strong> Simulações completas de recuperação de desastres</li>
            <li><strong>Multi-Region:</strong> Infraestrutura ativa em pelo menos 3 regiões AWS</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">8. Gestão de Incidentes</h2>
          <p>Seguimos um processo estruturado de resposta a incidentes de segurança:</p>
          <ol>
            <li><strong>Detecção e Identificação:</strong> Monitoramento 24/7 identifica eventos suspeitos através de SIEM, alertas automatizados e relatórios de usuários.</li>
            <li><strong>Contenção:</strong> Isolamento imediato de sistemas afetados para prevenir propagação. Ativação de backups e sistemas redundantes.</li>
            <li><strong>Erradicação:</strong> Remoção completa da ameaça, aplicação de patches, atualização de regras de firewall e fortalecimento de controles.</li>
            <li><strong>Recuperação:</strong> Restauração de sistemas afetados, validação de integridade, monitoramento intensivo pós-incidente.</li>
            <li><strong>Lições Aprendidas:</strong> Análise pós-incidente, documentação completa, atualização de processos e treinamento da equipe.</li>
          </ol>
          <h3 className="text-xl font-medium text-white">8.1. SLA de Resposta</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Severidade</th><th>Descrição</th><th>Tempo de Resposta</th><th>Comunicação</th></tr>
              </thead>
              <tbody>
                <tr><td>Crítico</td><td>Vazamento de dados, sistema indisponível</td><td>15 minutos</td><td>Notificação imediata a clientes afetados</td></tr>
                <tr><td>Alto</td><td>Tentativa de invasão detectada, degradação</td><td>1 hora</td><td>Status page atualizado</td></tr>
                <tr><td>Médio</td><td>Vulnerabilidade identificada, comportamento anômalo</td><td>4 horas</td><td>Comunicado após resolução</td></tr>
                <tr><td>Baixo</td><td>Scan de rede, tentativa isolada de ataque</td><td>24 horas</td><td>Log interno apenas</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-medium text-white">8.2. Comunicação de Incidentes</h3>
          <p>Em caso de incidente de segurança que afete seus dados:</p>
          <ul>
            <li><strong>Notificação em até 72 horas:</strong> Conforme exigido pela LGPD</li>
            <li><strong>Canais Múltiplos:</strong> E-mail, SMS, painel de controle e status page</li>
            <li><strong>Transparência Total:</strong> Informações sobre natureza do incidente, dados afetados e medidas tomadas</li>
            <li><strong>Suporte Dedicado:</strong> Canal direto com equipe de segurança durante incidente</li>
            <li><strong>Atualizações Regulares:</strong> Status atualizado a cada 4 horas durante resolução</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">9. Compliance e Auditoria</h2>
          <p>Mantemos programa rigoroso de compliance e auditoria:</p>
          <h3 className="text-xl font-medium text-white">9.1. Auditorias</h3>
          <ul>
            <li><strong>PCI-DSS:</strong> Auditoria anual completa (AOC) + scans trimestrais (ASV)</li>
            <li><strong>ISO 27001:</strong> Auditoria de certificação anual + auditoria de vigilância semestral</li>
            <li><strong>SOC 2:</strong> Auditoria Type II anual por firma independente</li>
            <li><strong>Penetration Testing:</strong> Testes de invasão trimestrais por empresa terceirizada</li>
            <li><strong>Auditorias Internas:</strong> Revisões mensais de controles de segurança</li>
          </ul>
          <h3 className="text-xl font-medium text-white">9.2. Relatórios de Compliance</h3>
          <p>Disponibilizamos os seguintes relatórios mediante NDA:</p>
          <ul>
            <li>Attestation of Compliance (AOC) PCI-DSS</li>
            <li>SOC 2 Type II Report</li>
            <li>ISO 27001 Certificate</li>
            <li>Penetration Testing Executive Summary</li>
            <li>Security Questionnaires (SIG, CAIQ, VSA)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">10. Treinamento e Conscientização</h2>
          <p>Investimos continuamente em educação de segurança:</p>
          <h3 className="text-xl font-medium text-white">10.1. Programa de Treinamento</h3>
          <ul>
            <li><strong>Onboarding de Segurança:</strong> Treinamento obrigatório para novos funcionários</li>
            <li><strong>Treinamento Anual:</strong> Atualização obrigatória sobre políticas e ameaças</li>
            <li><strong>Phishing Simulations:</strong> Testes mensais de conscientização</li>
            <li><strong>Secure Coding:</strong> Treinamento específico para desenvolvedores</li>
            <li><strong>Incident Response Drills:</strong> Simulações trimestrais de resposta a incidentes</li>
          </ul>
          <h3 className="text-xl font-medium text-white">10.2. Cultura de Segurança</h3>
          <ul>
            <li><strong>Segurança como Responsabilidade de Todos:</strong> Cada funcionário é responsável por segurança</li>
            <li><strong>Canal de Denúncia:</strong> Reporte anônimo de violações de segurança</li>
            <li><strong>Security Champions:</strong> Embaixadores de segurança em cada time</li>
            <li><strong>Reconhecimento:</strong> Programa de recompensas para identificação de riscos</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">11. Segurança de Terceiros</h2>
          <p>Avaliamos rigorosamente a segurança de todos os parceiros e fornecedores:</p>
          <h3 className="text-xl font-medium text-white">11.1. Due Diligence</h3>
          <ul>
            <li>Questionários de segurança detalhados (CAIQ, SIG Lite, VSA)</li>
            <li>Revisão de certificações (ISO 27001, SOC 2, etc.)</li>
            <li>Análise de políticas de segurança e privacidade</li>
            <li>Verificação de incidentes de segurança anteriores</li>
            <li>Cláusulas contratuais de segurança obrigatórias</li>
          </ul>
          <h3 className="text-xl font-medium text-white">11.2. Monitoramento Contínuo</h3>
          <ul>
            <li>Reavaliação anual de todos os fornecedores críticos</li>
            <li>Monitoramento de breaches e vulnerabilidades públicas</li>
            <li>Auditorias de acesso e atividades</li>
            <li>Planos de contingência para falha de fornecedores</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">12. Suas Responsabilidades</h2>
          <p>A segurança é uma responsabilidade compartilhada. Você também deve:</p>
          <h4>Boas Práticas para Clientes</h4>
          <ul>
            <li><strong>Senhas Fortes:</strong> Use senhas únicas e complexas (mínimo 12 caracteres)</li>
            <li><strong>Ative MFA:</strong> Habilite autenticação multifator em sua conta</li>
            <li><strong>Atualize Credenciais:</strong> Troque senhas regularmente e imediatamente se suspeitar de comprometimento</li>
            <li><strong>Não Compartilhe:</strong> Nunca compartilhe suas credenciais com terceiros</li>
            <li><strong>Revise Acessos:</strong> Audite regularmente usuários e permissões em sua conta</li>
            <li><strong>Monitore Atividades:</strong> Revise logs de acesso e transações periodicamente</li>
            <li><strong>Mantenha Software Atualizado:</strong> Use versões atualizadas de navegadores e sistemas operacionais</li>
            <li><strong>Cuidado com Phishing:</strong> Desconfie de e-mails solicitando credenciais ou dados sensíveis</li>
            <li><strong>Use HTTPS:</strong> Sempre acesse a plataforma via conexão segura (https://)</li>
            <li><strong>Reporte Suspeitas:</strong> Notifique imediatamente qualquer atividade suspeita</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">13. Divulgação Responsável de Vulnerabilidades</h2>
          <p>Encorajamos pesquisadores de segurança a reportar vulnerabilidades de forma responsável:</p>
          <h3 className="text-xl font-medium text-white">13.1. Bug Bounty Program</h3>
          <ul>
            <li><strong>Escopo:</strong> Todas as propriedades digitais da FusionPay</li>
            <li><strong>Recompensas:</strong> De R$ 500 a R$ 50.000 dependendo da severidade</li>
            <li><strong>Reconhecimento:</strong> Hall of Fame para pesquisadores (com permissão)</li>
            <li><strong>SLA de Resposta:</strong> Primeira resposta em até 5 dias úteis</li>
          </ul>
          <h3 className="text-xl font-medium text-white">13.2. Como Reportar</h3>
          <p>Para reportar vulnerabilidades de segurança:</p>
          <ul>
            <li><strong>E-mail:</strong> security@fusionpaybr.com.br</li>
            <li><strong>PGP Key:</strong> Disponível em nosso website para comunicação criptografada</li>
            <li><strong>HackerOne:</strong> Program page em hackerone.com/fusionpay</li>
            <li><strong>Não divulgue publicamente:</strong> Aguarde nossa correção antes de disclosure público (90 dias)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">14. Transparência e Relatórios</h2>
          <p>Publicamos relatórios regulares de transparência:</p>
          <h3 className="text-xl font-medium text-white">14.1. Security Bulletins</h3>
          <p>Publicamos avisos sobre:</p>
          <ul>
            <li>Vulnerabilidades corrigidas e suas severidades</li>
            <li>Incidentes de segurança (sem dados sensíveis)</li>
            <li>Atualizações de políticas de segurança</li>
            <li>Novas certificações e auditorias</li>
          </ul>
          <h3 className="text-xl font-medium text-white">14.2. Status Page</h3>
          <p>Monitore a saúde de nossos sistemas em tempo real:</p>
          <ul>
            <li><strong>URL:</strong> status.fusionpaybr.com.br</li>
            <li><strong>Métricas:</strong> Uptime, latência, taxa de sucesso de transações</li>
            <li><strong>Histórico:</strong> 90 dias de dados de disponibilidade</li>
            <li><strong>Assinaturas:</strong> Notificações por e-mail, SMS ou Slack</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">15. Contato da Equipe de Segurança</h2>
          <p>Para questões relacionadas à segurança:</p>
          <h4>Canais de Comunicação Equipe de Segurança da Informação</h4>
          <ul>
            <li><strong>E-mail Geral:</strong> security@fusionpaybr.com.br</li>
            <li><strong>Incidentes de Segurança:</strong> incidents@fusionpaybr.com.br (24/7)</li>
            <li><strong>Vulnerabilidades:</strong> bugbounty@fusionpaybr.com.br</li>
            <li><strong>CISO (Chief Information Security Officer):</strong> ciso@fusionpaybr.com.br</li>
            <li><strong>DPO (Data Protection Officer):</strong> dpo@fusionpaybr.com.br</li>
            <li><strong>Telefone de Emergência:</strong> 0800 123 4567 (opção 2 para segurança)</li>
            <li><strong>PGP Key Fingerprint:</strong> 1234 5678 9ABC DEF0 1234 5678 9ABC DEF0 1234 5678</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white pt-4 border-t border-white/10">16. Atualizações desta Política</h2>
          <p>Esta Política de Segurança é revisada e atualizada regularmente:</p>
          <ul>
            <li><strong>Revisão Trimestral:</strong> Equipe de segurança revisa e atualiza conforme necessário</li>
            <li><strong>Após Incidentes:</strong> Atualizações imediatas quando processos mudarem</li>
            <li><strong>Mudanças Regulatórias:</strong> Adequação a novas leis e regulamentos</li>
            <li><strong>Notificação:</strong> Clientes são notificados sobre mudanças significativas</li>
          </ul>

          <p className="border-l-4 border-primary pl-4 italic">
            <strong>Compromisso Contínuo:</strong> A segurança é nossa prioridade máxima. Investimos continuamente em pessoas, processos e tecnologia para proteger seus dados e transações. Estamos disponíveis 24/7 para responder a incidentes e esclarecer dúvidas sobre nossas práticas de segurança.
          </p>

          <Button asChild variant="outline" className="mt-8">
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

    