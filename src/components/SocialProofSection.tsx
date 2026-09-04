import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Lock, 
  Award, 
  Sparkles
} from 'lucide-react';
import { TestimonialItem } from '../types';
import { TestimonialAudioPlayer } from './TestimonialAudioPlayer';
import { VideoTestimonialsCarousel } from './VideoTestimonialsCarousel';
import { BRUNNA_VOICE_AUDIO, BRUNNA_VOICE_DURATION } from '../data/brunnaVoiceData';

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Brunna Mattos',
    role: 'Paciente em Psicoterapia',
    city: 'Atendimento Online',
    audioDuration: BRUNNA_VOICE_DURATION,
    audioUrl: BRUNNA_VOICE_AUDIO,
    tag: 'Autoconhecimento & Processo de Cura',
    highlight: '“A terapia vem abrindo um espaço muito importante de autoconhecimento na minha vida.”',
    text: 'A terapia que eu faço com a Dra. Rebeca vem abrindo um espaço muito importante na minha vida, um espaço de autoconhecimento, me desafiando como pessoa, me mostrando os pontos que eu tenho que melhorar e enxergando a vida de outra maneira. Anda me fazendo muito bem emocionalmente, e posso dizer até fisicamente. Estou amando o processo de cura que estou fazendo com ela.',
  },
  {
    id: '2',
    name: 'Carlos E.',
    role: 'Empresário',
    city: 'Guarulhos - SP',
    audioDuration: '1:05',
    audioUrl: '',
    tag: 'Mentoria Hipnótica & Prosperidade',
    highlight: '“Eliminei a autossabotagem e dobrei a capacidade de tomada de decisão.”',
    text: 'Toda vez que minha empresa começava a crescer, eu tomava decisões que me devolviam à estaca zero. A mentoria hipnótica reprogramou minha crença de merecimento. Foi como tirar uma venda dos olhos e um peso de 100kg das costas.',
  },
  {
    id: '3',
    name: 'Renata L.',
    role: 'Arquiteta',
    city: 'Atendimento Online',
    audioDuration: '0:52',
    audioUrl: '',
    tag: 'Psicoterapia Integrativa & Traumas',
    highlight: '“O acolhimento da Dra. Rebeca me fez renascer após um término destrutivo.”',
    text: 'Eu vivia repetindo o mesmo ciclo em relações tóxicas e sentia que o problema era comigo. A abordagem com psicanálise e hipnose me devolveu a dignidade e a autoestima. Sinto que renasci para a minha melhor versão.',
  },
  {
    id: '4',
    name: 'Fabiana M.',
    role: 'Gestora de Pessoas',
    city: 'São Paulo - SP',
    audioDuration: '1:12',
    audioUrl: '',
    tag: 'Crises de Pânico & Ansiedade',
    highlight: '“Voltei a dirigir e viajar sem medo de ter crises de pânico.”',
    text: 'Tentava diversas abordagens tradicionais há anos sem alívio efetivo. A desconstrução dos gatilhos traumáticos com a Dra. Rebeca foi o divisor de águas mais impactante da minha vida.',
  },
];

const TRUST_BADGES = [
  {
    title: '100% Confidencial',
    subtitle: 'Sigilo profissional rigoroso',
    icon: Lock,
  },
  {
    title: 'Presencial & Online',
    subtitle: 'Consultório em Guarulhos ou atendimento global seguro',
    icon: Award,
  },
  {
    title: 'Abordagem Humanizada',
    subtitle: 'Acolhimento empático focado na sua história singular',
    icon: ShieldCheck,
  },
  {
    title: 'Prática Baseada em Evidências',
    subtitle: 'Integração sólida de psicanálise e neurociência',
    icon: Sparkles,
  },
];

export const SocialProofSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="depoimentos" className="py-20 bg-[#F8EFE7] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0A3D42] bg-[#0A3D42]/10 px-3.5 py-1 rounded-full">
            Prova Social &amp; Confiança
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#0A3D42] font-semibold leading-tight">
            Vozes Reais de Quem Escolheu Renascer
          </h2>
          <p className="text-sm sm:text-base text-[#0A3D42]/75 leading-relaxed">
            Depoimentos autorizados de pacientes e mentorados que destravaram ciclos profundos e reassumiram o protagonismo da própria vida.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-3xl mx-auto bg-[#FCF8F4] border border-[#0A3D42]/20 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-[#0A3D42]/10 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Header of review */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider bg-[#0A3D42]/10 text-[#0A3D42] px-3 py-1 rounded-full">
                {current.tag}
              </span>

              {/* Interactive Real Audio Player */}
              <TestimonialAudioPlayer
                key={current.id}
                testimonialId={current.id}
                authorName={current.name}
                audioDuration={current.audioDuration}
                audioUrl={current.audioUrl}
              />
            </div>

            {/* Quote Highlight */}
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0A3D42] leading-snug">
              {current.highlight}
            </h3>

            {/* Full text */}
            <p className="text-sm sm:text-base text-[#0A3D42]/80 leading-relaxed italic">
              "{current.text}"
            </p>

            {/* Author info & Star rating */}
            <div className="pt-4 border-t border-[#0A3D42]/10 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-sm text-[#0A3D42]">
                  {current.name}
                </h4>
                <p className="text-xs text-[#0A3D42]/70">
                  {current.role} • {current.city}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[#0A3D42]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#0A3D42]" />
                ))}
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#0A3D42]/10">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    currentIndex === i ? 'w-6 bg-[#0A3D42]' : 'w-2 bg-[#0A3D42]/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className="w-8 h-8 rounded-full border border-[#0A3D42]/20 flex items-center justify-center text-[#0A3D42] hover:bg-[#ECDCCE] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className="w-8 h-8 rounded-full border border-[#0A3D42]/20 flex items-center justify-center text-[#0A3D42] hover:bg-[#ECDCCE] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Testimonials Carousel */}
        <VideoTestimonialsCarousel />

        {/* Strategic Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {TRUST_BADGES.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx}
                className="bg-[#FCF8F4] border border-[#0A3D42]/15 rounded-2xl p-4 sm:p-5 text-center space-y-2 hover:border-[#0A3D42]/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#0A3D42]/10 text-[#0A3D42] mx-auto flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-[#0A3D42] leading-tight">
                  {b.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#0A3D42]/70 leading-snug">
                  {b.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
