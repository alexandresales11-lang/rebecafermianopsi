import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Layers, 
  RotateCcw, 
  Sun, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  BrainCircuit,
  Eye,
  Lock
} from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../constants';

const STEPS = [
  {
    step: '01',
    name: 'Desconstrução',
    tagline: 'Identificação & Desarmamento da Raiz',
    icon: Layers,
    summary: 'Mapeamento profundo da origem dos bloqueios inconscientes, traumas do passado e ciclos repetitivos que sobrecarregam a sua mente.',
    details: [
      'Acesso seguro ao subconsciente para localizar a memória-gatilho fundamental',
      'Desativação da carga emocional acumulada (culpa, medo, rejeição ou abandono)',
      'Compreensão lúcida de como os padrões de defesa sabotavam seu presente',
    ],
    clarityNote: 'Você nunca perde a consciência: tudo ocorre em estado de relaxamento focado e colaborativo.',
  },
  {
    step: '02',
    name: 'Reprogramação',
    tagline: 'Ressignificação Neural Subconsciente',
    icon: RotateCcw,
    summary: 'Instalação de novas respostas emocionais e crenças de autoeficácia, substituindo as travas por segurança interna inabalável.',
    details: [
      'Substituição de crenças limitantes sobre merecimento, dinheiro e afeto',
      'Neutralização de ansiedade antecipatória e fobia de exposição ou liderança',
      'Ancoragem de sensações de paz, firmeza e clareza para tomadas de decisão',
    ],
    clarityNote: 'A hipnose clínica funciona como um atalho neurocientífico seguro para reconfigurar conexões neuronais.',
  },
  {
    step: '03',
    name: 'Renascimento',
    tagline: 'Integração & Maestria Pessoal',
    icon: Sun,
    summary: 'A consolidação da sua melhor versão. Você assume o controle da própria história com posicionamento maduro e paz mental.',
    details: [
      'Retomada da autonomia emocional e encerramento definitivo de ciclos tóxicos',
      'Alinhamento de novos hábitos, foco realizador e relacionamentos saudáveis',
      'Sensação de leveza, renascimento e prontidão para viver seu pleno potencial',
    ],
    clarityNote: 'O resultado não é dependência de terapia: é soberania emocional para a vida inteira.',
  },
];

export const MethodologySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <section id="metodologia" className="py-20 bg-[#FCF8F4] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0A3D42] bg-[#0A3D42]/10 px-3.5 py-1 rounded-full">
            A Metodologia
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#0A3D42] font-semibold leading-tight">
            O Processo de Renascimento em 3 Etapas
          </h2>
          <p className="text-sm sm:text-base text-[#0A3D42]/75 leading-relaxed">
            Uma abordagem didática e estruturada que não se apoia em achismos, mas na integração da psicanálise clássica com a neurociência da hipnoterapia.
          </p>
        </div>

        {/* 3 Step Interactive Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            const isCurrent = activeStepIndex === index;
            return (
              <div
                key={s.step}
                onClick={() => setActiveStepIndex(index)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#0A3D42] text-[#F8EFE7] border-[#0A3D42] shadow-xl scale-[1.02]'
                    : 'bg-[#F8EFE7] text-[#0A3D42] border-[#0A3D42]/20 hover:border-[#0A3D42]/50 hover:bg-[#ECDCCE]/50'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-serif-display font-bold ${
                      isCurrent ? 'text-[#F8EFE7]/40' : 'text-[#0A3D42]/30'
                    }`}>
                      {s.step}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isCurrent ? 'bg-[#F8EFE7]/15 text-[#F8EFE7]' : 'bg-[#0A3D42]/10 text-[#0A3D42]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif-display text-2xl font-bold">
                      {s.name}
                    </h3>
                    <p className={`text-xs uppercase font-semibold tracking-wider mt-0.5 ${
                      isCurrent ? 'text-[#F8EFE7]/70' : 'text-[#0A3D42]/70'
                    }`}>
                      {s.tagline}
                    </p>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isCurrent ? 'text-[#F8EFE7]/85' : 'text-[#0A3D42]/80'
                  }`}>
                    {s.summary}
                  </p>
                </div>

                <div className={`pt-6 mt-4 border-t flex items-center justify-between text-xs font-semibold ${
                  isCurrent ? 'border-[#F8EFE7]/20 text-[#F8EFE7]' : 'border-[#0A3D42]/10 text-[#0A3D42]'
                }`}>
                  <span>Ver aprofundamento da etapa</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Panel for the Active Step */}
        <div className="bg-[#F8EFE7] border border-[#0A3D42]/20 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#0A3D42]/15">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#0A3D42]/70">ETAPA {activeStep.step}</span>
                    <span className="text-xs text-[#0A3D42]/40">•</span>
                    <span className="text-xs font-semibold text-[#0A3D42]">{activeStep.tagline}</span>
                  </div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#0A3D42] font-bold mt-1">
                    Como opera a {activeStep.name} no seu processo
                  </h3>
                </div>

                <a
                  href={buildWhatsAppLink(`Olá Dra. Rebeca! Fiquei muito interessado(a) na etapa de ${activeStep.name} da sua metodologia. Gostaria de agendar meu atendimento.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A3D42] text-[#F8EFE7] text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-full hover:bg-[#072B2F] transition-colors shrink-0"
                >
                  <span>Iniciar essa transformação</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeStep.details.map((detail, idx) => (
                  <div key={idx} className="bg-[#FCF8F4] border border-[#0A3D42]/15 rounded-xl p-4 text-xs sm:text-sm text-[#0A3D42] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0A3D42] shrink-0 mt-0.5" />
                    <span className="leading-snug text-[#0A3D42]/85">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#0A3D42]/5 border border-[#0A3D42]/15 rounded-xl p-4 text-xs text-[#0A3D42] flex items-center gap-3">
                <BrainCircuit className="w-4 h-4 text-[#0A3D42] shrink-0" />
                <span className="italic leading-relaxed">
                  <strong>Ponto de Segurança:</strong> {activeStep.clarityNote}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Essential Sub-section: Desmistificação & Quebra de Objeções sobre Hipnoterapia */}
        <div id="como-funciona-hipnoterapia" className="bg-[#0A3D42] text-[#F8EFE7] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg scroll-mt-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#F8EFE7]/80 bg-[#F8EFE7]/10 px-3.5 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" /> Desmistificação &amp; Clareza
              </span>
              <h3 className="font-serif-display text-3xl sm:text-4xl font-semibold leading-tight">
                Como Funciona a Hipnoterapia Clínica?
              </h3>
              <p className="text-sm sm:text-base text-[#F8EFE7]/80 leading-relaxed">
                Muitas pessoas têm receio de hipnose por acreditarem em mitos de palco (como perda de controle ou sono). Na prática clínica moderna, o processo é puramente neurocientífico, 100% consciente e transparente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#F8EFE7]/10 border border-[#F8EFE7]/20 rounded-2xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#F8EFE7]/15 flex items-center justify-center text-[#F8EFE7] mb-2">
                  <Eye className="w-4 h-4" />
                </div>
                <h4 className="font-serif-display text-lg font-bold">100% Consciente</h4>
                <p className="text-xs text-[#F8EFE7]/80 leading-relaxed">
                  Você não dorme nem perde o domínio sobre suas palavras. Trata-se de um foco ampliado de atenção onde você escolhe colaborar ativamente.
                </p>
              </div>

              <div className="bg-[#F8EFE7]/10 border border-[#F8EFE7]/20 rounded-2xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#F8EFE7]/15 flex items-center justify-center text-[#F8EFE7] mb-2">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <h4 className="font-serif-display text-lg font-bold">Acesso à Raiz</h4>
                <p className="text-xs text-[#F8EFE7]/80 leading-relaxed">
                  Enquanto a mente analítica fica justificando a dor, o subconsciente guarda a memória inicial. Acessamos a raiz para ressignificá-la.
                </p>
              </div>

              <div className="bg-[#F8EFE7]/10 border border-[#F8EFE7]/20 rounded-2xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#F8EFE7]/15 flex items-center justify-center text-[#F8EFE7] mb-2">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="font-serif-display text-lg font-bold">Segurança &amp; Ética</h4>
                <p className="text-xs text-[#F8EFE7]/80 leading-relaxed">
                  Nenhum segredo é revelado contra sua vontade. Você preserva seus valores éticos, morais e o livre-arbítrio em todos os momentos.
                </p>
              </div>
            </div>

            <div className="text-center pt-2">
              <a
                href={buildWhatsAppLink('Olá Dra. Rebeca! Gostaria de tirar algumas dúvidas sobre como funciona a sessão de Hipnoterapia Clínica e entender se é indicada para o meu caso.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F8EFE7] hover:bg-[#ECDCCE] text-[#0A3D42] font-semibold text-xs sm:text-sm py-3.5 px-7 rounded-full shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Tirar Dúvidas sobre a Hipnose no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
