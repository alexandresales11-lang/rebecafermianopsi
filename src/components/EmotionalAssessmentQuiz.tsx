import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  MessageCircle,
  HelpCircle,
  BrainCircuit,
  Lock
} from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../constants';
import { AssessmentAnswers } from '../types';

interface QuestionDef {
  id: keyof AssessmentAnswers;
  stepNumber: number;
  badge: string;
  question: string;
  subtitle?: string;
  options: { label: string; detail?: string; isHypno?: boolean }[];
}

const QUESTIONS: QuestionDef[] = [
  {
    id: 'moment',
    stepNumber: 1,
    badge: 'Identificação do Momento Presente',
    question: 'O que hoje mais consome a sua energia ou impede o seu avanço?',
    subtitle: 'Selecione o sentimento ou obstáculo predominante na sua rotina atual.',
    options: [
      { label: 'Traumas, dores do passado ou feridas emocionais que não fecham.', detail: 'Ciclos emocionais não resolvidos que ainda pesam no presente.' },
      { label: 'Ansiedade, excesso de pensamentos e sensação de estar travado(a).', detail: 'Sobrecarga mental constante e aceleração interna.' },
      { label: 'Dificuldade de posicionamento, autoestima baixa ou falta de clareza de futuro.', detail: 'Sentimento de insegurança ou perda de rumo pessoal.' },
      { label: 'Sensação de que cheguei ao meu limite e preciso renascer em uma nova versão.', detail: 'Esgotamento e urgência por uma transformação genuína.' },
    ],
  },
  {
    id: 'cycle',
    stepNumber: 2,
    badge: 'Padrão Repetitivo',
    question: 'Em qual área da sua vida você sente que está repetindo ciclos sem sair do lugar?',
    subtitle: 'Identificar a área central ajuda a direcionar a raiz terapêutica correta.',
    options: [
      { label: 'Relacionamentos amorosos e familiares.', detail: 'Padrões de dependência, conflitos ou repetições de vínculos dolorosos.' },
      { label: 'Carreira, vida financeira e realização profissional.', detail: 'Autossabotagem, bloqueio de prosperidade ou medo do sucesso.' },
      { label: 'Saúde emocional, paz mental e autocuidado.', detail: 'Desgaste psíquico, sintomas físicos e falta de equilíbrio interior.' },
      { label: 'Em todas as áreas acima.', detail: 'Sensação de bloqueio sistêmico profundo necessitando reprogramação integral.' },
    ],
  },
  {
    id: 'objective',
    stepNumber: 3,
    badge: 'Objetivo do Atendimento',
    question: 'O que você busca alcançar com mais urgência neste momento?',
    subtitle: 'Direciona entre psicoterapia integrativa profunda ou mentoria estratégica.',
    options: [
      { label: 'Curar feridas e ressignificar minha história (Atendimento Terapêutico).', detail: 'Foco no alívio emocional e elaboração de traumas passados.' },
      { label: 'Um plano estratégico para destravar minha vida e carreira (Mentoria).', detail: 'Foco em posicionamento, foco executivo e superação de limites.' },
      { label: 'Uma transformação completa: curar, reprogramar e crescer em alto nível.', detail: 'União da profundidade psicanalítica com o poder acelerador da hipnose.' },
    ],
  },
  {
    id: 'methodPreference',
    stepNumber: 4,
    badge: 'Acelerador Subconsciente',
    question: 'Qual abordagem melhor atende ao seu momento de vida?',
    subtitle: 'A hipnoterapia clínica permite acessar a raiz emocional sem anos de espera.',
    options: [
      { 
        label: 'Prefiro acelerar meus resultados acessando a raiz emocional através da Hipnoterapia Clínica.', 
        detail: 'Acesso subconsciente seguro, focado em dissolver bloqueios rápidos e definitivos.',
        isHypno: true 
      },
      { 
        label: 'Busco o processo de escuta e elaboração pela Psicanálise Integrativa tradicional.', 
        detail: 'Conversa reflexiva, investigação do inconsciente e autoconhecimento contínuo.' 
      },
      { 
        label: 'Gostaria de uma combinação integrada e personalizada sob avaliação da Dra. Rebeca.', 
        detail: 'Diagnóstico clínico customizado conforme minha necessidade individual.' 
      },
    ],
  },
  {
    id: 'commitment',
    stepNumber: 5,
    badge: 'Disposição para Mudança & Qualificação',
    question: 'Você está verdadeiramente comprometido(a) em investir no seu processo de transformação emocional hoje?',
    subtitle: 'A eficácia do método depende do seu compromisso genuíno consigo mesmo(a).',
    options: [
      { label: 'Sim, estou pronto(a) para começar imediatamente.', detail: 'Disponibilidade para agendamento prioritário no consultório ou online.' },
      { label: 'Sim, mas preciso entender melhor como funciona a metodologia.', detail: 'Desejo tirar dúvidas clínicas preliminares com a equipe da Dra.' },
      { label: 'Estou apenas pesquisando opções por enquanto.', detail: 'Buscando orientações gerais sobre as modalidades terapêuticas.' },
    ],
  },
];

export const EmotionalAssessmentQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>({
    moment: '',
    cycle: '',
    objective: '',
    commitment: '',
    methodPreference: '',
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSteps = QUESTIONS.length;
  const currentQ = QUESTIONS[currentStep];

  const handleSelectOption = (value: string) => {
    const updated = { ...answers, [currentQ.id]: value };
    setAnswers(updated);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({
      moment: '',
      cycle: '',
      objective: '',
      commitment: '',
      methodPreference: '',
    });
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Generate customized WhatsApp Message
  const getWhatsAppMsg = () => {
    return `Olá! Fiz o Diagnóstico Emocional no site da Dra. Rebeca Fermiano:
- Momento atual: ${answers.moment || 'Não informado'}
- Padrão repetitivo / Área afetada: ${answers.cycle || 'Não informado'}
- Objetivo principal: ${answers.objective || 'Não informado'}
- Preferência de método: ${answers.methodPreference || 'Avaliação da Dra.'}
- Nível de compromisso: ${answers.commitment || 'Pronto(a)'}

Gostaria de agendar meu atendimento e receber a orientação preliminar.`;
  };

  return (
    <div 
      id="trilha-diagnostico"
      className="w-full max-w-3xl mx-auto my-12 scroll-mt-24"
    >
      <div className="bg-[#FCF8F4] border border-[#0A3D42]/20 rounded-2xl md:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300">
        
        {/* Subtle top indicator bar */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#0A3D42]/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0A3D42]" />
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0A3D42]">
              Trilha de Diagnóstico Emocional
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#0A3D42]/80">
            {isCompleted ? (
              <span className="inline-flex items-center gap-1 font-semibold text-[#0A3D42]">
                <CheckCircle2 className="w-3.5 h-3.5" /> Concluído
              </span>
            ) : (
              <span>Passo {currentStep + 1} de {totalSteps}</span>
            )}
          </div>
        </div>

        {/* Visual progress bar */}
        <div className="w-full bg-[#ECDCCE] h-1.5 rounded-full overflow-hidden mb-8">
          <div 
            className="bg-[#0A3D42] h-full transition-all duration-500 ease-out"
            style={{ width: `${isCompleted ? 100 : ((currentStep) / totalSteps) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28 }}
              className="space-y-6"
            >
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-[#0A3D42]/10 text-[#0A3D42] px-3 py-1 rounded-full mb-3">
                  {currentQ.badge}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#0A3D42] font-semibold leading-tight">
                  {currentQ.question}
                </h3>
                {currentQ.subtitle && (
                  <p className="text-sm text-[#0A3D42]/75 mt-2 leading-relaxed">
                    {currentQ.subtitle}
                  </p>
                )}
              </div>

              {/* Options list */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((option, idx) => {
                  const isSelected = (answers as any)[currentQ.id] === option.label;
                  return (
                    <button
                      key={idx}
                      id={`quiz-opt-${currentStep}-${idx}`}
                      type="button"
                      onClick={() => handleSelectOption(option.label)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start justify-between gap-4 group ${
                        isSelected 
                          ? 'bg-[#0A3D42] text-[#F8EFE7] border-[#0A3D42] shadow-md' 
                          : 'bg-[#F8EFE7] hover:bg-[#ECDCCE]/70 border-[#0A3D42]/20 text-[#0A3D42]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-medium text-sm sm:text-base leading-snug">
                          {option.isHypno && (
                            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#0A3D42] text-[#F8EFE7] group-hover:bg-[#072B2F]">
                              <BrainCircuit className="w-3 h-3" /> Alta Performance
                            </span>
                          )}
                          <span>{option.label}</span>
                        </div>
                        {option.detail && (
                          <p className={`text-xs leading-relaxed ${isSelected ? 'text-[#F8EFE7]/85' : 'text-[#0A3D42]/70'}`}>
                            {option.detail}
                          </p>
                        )}
                      </div>

                      <div className="shrink-0 mt-1">
                        <span className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected 
                            ? 'border-[#F8EFE7] bg-[#F8EFE7] text-[#0A3D42]' 
                            : 'border-[#0A3D42]/40 group-hover:border-[#0A3D42]'
                        }`}>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[#0A3D42]" />}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#0A3D42]/10">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                    currentStep === 0 
                      ? 'text-[#0A3D42]/30 cursor-not-allowed' 
                      : 'text-[#0A3D42] hover:text-[#072B2F]'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Anterior
                </button>

                <div className="flex items-center gap-2 text-xs text-[#0A3D42]/60">
                  <Lock className="w-3 h-3" /> Respostas 100% confidenciais
                </div>
              </div>
            </motion.div>
          ) : (
            /* Result Screen */
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="text-center py-4 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#0A3D42]/10 text-[#0A3D42] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-3 max-w-lg mx-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A3D42] bg-[#0A3D42]/10 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" /> Análise Concluída
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#0A3D42] font-semibold">
                  Diagnóstico Concluído com Sucesso!
                </h3>
                <p className="text-sm sm:text-base text-[#0A3D42]/80 leading-relaxed">
                  Suas respostas foram processadas com sigilo profissional. Para receber a análise preliminar do seu momento e verificar a disponibilidade de agenda, clique no botão abaixo para conversar diretamente com a nossa equipe no WhatsApp.
                </p>
              </div>

              {/* Summary snapshot card */}
              <div className="bg-[#F8EFE7] border border-[#0A3D42]/20 rounded-2xl p-5 text-left text-xs sm:text-sm text-[#0A3D42] space-y-2.5 max-w-lg mx-auto">
                <div className="font-semibold text-xs tracking-wider uppercase text-[#0A3D42]/70 pb-1 border-b border-[#0A3D42]/10">
                  Resumo Estratégico para o Atendimento:
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium shrink-0">• Padrão principal:</span>
                  <span className="text-[#0A3D42]/85">{answers.moment}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium shrink-0">• Área afetada:</span>
                  <span className="text-[#0A3D42]/85">{answers.cycle}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium shrink-0">• Busca prioritária:</span>
                  <span className="text-[#0A3D42]/85">{answers.objective}</span>
                </div>
                {answers.methodPreference && (
                  <div className="flex items-start gap-2">
                    <span className="font-medium shrink-0">• Modalidade:</span>
                    <span className="text-[#0A3D42]/85">{answers.methodPreference}</span>
                  </div>
                )}
                <div className="flex items-start gap-2">
                  <span className="font-medium shrink-0">• Disposição:</span>
                  <span className="text-[#0A3D42]/85">{answers.commitment}</span>
                </div>
              </div>

              {/* Action Button for WhatsApp */}
              <div className="pt-2 flex flex-col items-center gap-3">
                <a
                  id="btn-quiz-whatsapp-submit"
                  href={buildWhatsAppLink(getWhatsAppMsg())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0A3D42] hover:bg-[#072B2F] text-[#F8EFE7] font-semibold text-base py-4 px-8 rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enviar Respostas &amp; Falar no WhatsApp</span>
                </a>

                <div className="flex items-center gap-4 text-[11px] sm:text-xs text-[#0A3D42]/70">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 100% Confidencial
                  </span>
                  <span>•</span>
                  <span>Atendimento Presencial e Online</span>
                  <span>•</span>
                  <button 
                    type="button" 
                    onClick={handleReset}
                    className="underline hover:text-[#0A3D42]"
                  >
                    Refazer teste
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
