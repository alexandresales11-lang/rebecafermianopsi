import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Target, 
  Presentation, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap
} from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../constants';

interface Pillar {
  id: string;
  tabTitle: string;
  badge: string;
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  differentials: string[];
  ctaText: string;
  whatsappMessage: string;
  image?: string;
  imageCaption?: string;
}

const PILLARS: Pillar[] = [
  {
    id: 'psicoterapia',
    tabTitle: 'Psicoterapia & Hipnoterapia',
    badge: 'Cura & Raiz Subconsciente',
    icon: Brain,
    title: 'Psicoterapia Integrativa & Hipnoterapia Clínica',
    subtitle: 'Acesse e ressignifique a dor onde ela realmente se originou.',
    description: 'Um método que harmoniza a profundidade reflexiva da Psicanálise com a precisão neurocientífica da Hipnoterapia Clínica. Diferente de abordagens que levam anos apenas no nível racional, acessamos o subconsciente de forma 100% consciente e segura para dissolver traumas, crises de ansiedade, fobias e feridas emocionais na exata raiz neural.',
    differentials: [
      'Alívio acelerado de dores emocionais crônicas e traumas do passado',
      'Desativação de gatilhos inconscientes de ansiedade, culpa e angústia',
      'Ressignificação de memórias dolorosas sem perda de controle ou sono',
      'Ambiente estritamente ético, acolhedor e confidencial (presencial em Guarulhos ou online)',
    ],
    ctaText: 'Agendar Consulta de Psicoterapia & Hipnose',
    whatsappMessage: 'Olá, Dra. Rebeca! Gostaria de agendar uma consulta de Psicoterapia Integrativa & Hipnoterapia Clínica (presencial/online). Como podemos prosseguir?',
    image: CONTACT_INFO.therapyPhoto || 'https://i.imgur.com/Tu9MzYP.jpeg',
    imageCaption: 'Dra. Rebeca Fermiano',
  },
  {
    id: 'mentoria',
    tabTitle: 'Mentoria Hipnótica',
    badge: 'Reprogramação Mental & Alta Performance',
    icon: Target,
    title: 'Mentoria Hipnótica: Desbloqueio e Aceleração de Resultados',
    subtitle: 'Elimine as travas invisíveis que sabotam seu crescimento pessoal e financeiro.',
    description: 'Projetada para profissionais, líderes e indivíduos decididos a dar um salto quântico. A mentoria atua diretamente na quebra de crenças limitantes sobre prosperidade, medo do julgamento e procrastinação, instalando padrões mentais de alta clareza, disciplina inabalável e posicionamento de autoridade.',
    differentials: [
      'Eliminação imediata de autossabotagem e medo de se posicionar',
      'Instalação de hábitos de alta performance e foco executivo',
      'Destrave da relação com dinheiro, merecimento e expansão de carreira',
      'Sessões estratégicas estruturadas com metas objetivas de curto prazo',
    ],
    ctaText: 'Quero Minha Vaga na Mentoria Hipnótica',
    whatsappMessage: 'Olá, Dra. Rebeca! Gostaria de saber mais sobre a Mentoria Hipnótica para acelerar meus resultados e destravar bloqueios. Como funciona o processo seletivo?',
    image: CONTACT_INFO.mainPhoto,
    imageCaption: 'Dra. Rebeca Fermiano',
  },
  {
    id: 'palestras',
    tabTitle: 'Palestras Corporativas',
    badge: 'Impacto & Neurociência Comportamental',
    icon: Presentation,
    title: 'Palestras e Treinamentos de Alto Impacto',
    subtitle: 'Compreensão neurocientífica para transformar a mentalidade de equipes e eventos.',
    description: 'Apresentações vibrantes e fundamentadas sobre saúde mental, inteligência emocional, reprogramação da mente sob pressão e superação de limites corporativos. Uma experiência transformadora que conecta neurociência aplicada, histórias reais e dinâmicas de impacto.',
    differentials: [
      'Temas: Gestão Emocional, Prevenção do Burnout e Alta Performance Humana',
      'Linguagem acessível, engajadora e orientada a resultados organizacionais',
      'Aplicações práticas para lideranças e times em convenções e semanas de saúde mental (SIPAT)',
      'Formatos presenciais em todo o Brasil e transmissões ao vivo de alta definição',
    ],
    ctaText: 'Solicitar Proposta para Palestras',
    whatsappMessage: 'Olá, equipe da Dra. Rebeca Fermiano! Gostaria de solicitar uma proposta para realização de palestra/treinamento corporativo. Poderiam me orientar?',
    image: CONTACT_INFO.speakerPhoto,
    imageCaption: 'Dra. Rebeca Fermiano',
  },
];

export const PillarsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('psicoterapia');
  const activePillar = PILLARS.find(p => p.id === activeTab) || PILLARS[0];

  return (
    <section id="pilares-atuacao" className="py-20 bg-[#F8EFE7] border-y border-[#0A3D42]/10 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0A3D42] bg-[#0A3D42]/10 px-3.5 py-1 rounded-full">
            Pilares de Atuação
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#0A3D42] font-semibold leading-tight">
            Caminhos Personalizados para a Sua Transformação
          </h2>
          <p className="text-sm sm:text-base text-[#0A3D42]/75 leading-relaxed">
            Cada indivíduo e organização possui uma demanda única. Alterne entre as vertentes para compreender o método exato de atendimento.
          </p>
        </div>

        {/* Minimalist Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                id={`tab-pillar-${pillar.id}`}
                type="button"
                onClick={() => setActiveTab(pillar.id)}
                className={`inline-flex items-center gap-2.5 py-3 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#0A3D42] text-[#F8EFE7] border-[#0A3D42] shadow-md'
                    : 'bg-[#FCF8F4] text-[#0A3D42] border-[#0A3D42]/20 hover:bg-[#ECDCCE]/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#F8EFE7]' : 'text-[#0A3D42]'}`} />
                <span>{pillar.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Container */}
        <div className="bg-[#FCF8F4] border border-[#0A3D42]/20 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Details & Benefits */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0A3D42] bg-[#0A3D42]/10 px-3 py-1 rounded-full mb-3">
                    {activePillar.badge}
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-[#0A3D42] font-semibold leading-tight">
                    {activePillar.title}
                  </h3>
                  <p className="text-base text-[#0A3D42]/85 font-medium mt-2">
                    {activePillar.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#0A3D42]/75 leading-relaxed">
                  {activePillar.description}
                </p>

                {/* Differential points */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#0A3D42]/70">
                    O que esperar do atendimento:
                  </h4>
                  <div className="space-y-2.5">
                    {activePillar.differentials.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#0A3D42]">
                        <CheckCircle2 className="w-4 h-4 text-[#0A3D42] shrink-0 mt-0.5" />
                        <span className="leading-snug text-[#0A3D42]/85">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pillar CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    id={`btn-pillar-cta-${activePillar.id}`}
                    href={buildWhatsAppLink(activePillar.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#0A3D42] hover:bg-[#072B2F] text-[#F8EFE7] font-semibold text-sm py-3.5 px-7 rounded-full shadow-md transition-all hover:scale-[1.02]"
                  >
                    <span>{activePillar.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <span className="text-xs text-[#0A3D42]/70 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0A3D42]" /> Atendimento personalizado
                  </span>
                </div>
              </div>

              {/* Right Column: Contextual Curated Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#0A3D42]/20 group aspect-[2/3] w-full max-w-[420px]">
                  <img
                    src={activePillar.image}
                    alt={activePillar.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (activePillar.id === 'psicoterapia') {
                        (e.target as HTMLImageElement).src = 'https://i.imgur.com/Tu9MzYP.jpeg';
                      }
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Clean natural bottom shadow for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  {activePillar.imageCaption && (
                    <div className="absolute bottom-4 left-4 right-4 text-[#F8EFE7] text-xs font-medium backdrop-blur-sm bg-[#0A3D42]/60 py-2 px-3 rounded-lg border border-[#F8EFE7]/20 text-center shadow-sm">
                      {activePillar.imageCaption}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
