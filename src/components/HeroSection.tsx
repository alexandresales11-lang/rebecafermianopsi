import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles,
  ShieldCheck, 
  BrainCircuit, 
  CheckCircle2, 
  Calendar,
  MessageCircle
} from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../constants';
import { VoiceIntroBadge } from './VoiceIntroBadge';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8EFE7] pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle organic background wave/glow purely using brand colors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ECDCCE]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0A3D42]/5 rounded-full blur-2xl pointer-events-none -ml-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Desktop) / Main Column (Mobile) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7 text-center lg:text-left">
            
            {/* 1. Headline Principal */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#0A3D42] font-semibold tracking-tight leading-[1.12]">
              Dissolva traumas e <span className="italic font-normal underline decoration-[#0A3D42]/30 underline-offset-4">reprograme sua mente</span> direto na raiz através da Psicanálise e da Hipnoterapia Clínica.
            </h1>

            {/* 2. Photo + Audio Badge on MOBILE ONLY (Immediately after headline) */}
            <div className="block lg:hidden my-2 sm:my-4 flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#0A3D42]/20 bg-[#ECDCCE]">
                  <img
                    src={CONTACT_INFO.mainPhoto}
                    alt="Dra. Rebeca Fermiano - Psicanalista e Hipnoterapeuta"
                    referrerPolicy="no-referrer"
                    className="w-full h-[400px] sm:h-[460px] object-cover object-top"
                  />
                  {/* Clean natural bottom shadow purely for text readability (No green tint or smoke layer) */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-[#F8EFE7] text-left">
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold">
                      Rebeca Fermiano
                    </h3>
                    <p className="text-xs text-[#F8EFE7]/90 font-medium mt-0.5">
                      Especialista em Reprogramação Mental &amp; Cura de Traumas
                    </p>
                    <p className="text-[11px] text-[#F8EFE7]/75 font-mono mt-1">
                      Centro, Guarulhos - SP • Atendimento Presencial &amp; Online
                    </p>
                  </div>
                </div>
              </div>

              {/* Voice Intro Player positioned gracefully right below the photo, without covering any texts */}
              <div className="w-full max-w-sm mt-3 px-1">
                <VoiceIntroBadge className="w-full z-20 shadow-lg" />
              </div>
            </div>

            {/* 3. Sub-headline focused on client pain and rebirth */}
            <p className="text-base sm:text-lg text-[#0A3D42]/85 max-w-xl mx-auto lg:mx-0 leading-relaxed pt-3 lg:pt-0">
              Livre-se de ciclos repetitivos, ansiedade constante e bloqueios emocionais inconscientes. Um método humanizado e neurocientífico para você alcançar o renascimento e a sua melhor versão.
            </p>

            {/* 4. Action Buttons & Fast Assessment Trigger */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1 sm:pt-2">
              <a
                id="btn-hero-primary-cta"
                href="#trilha-diagnostico"
                className="w-full sm:w-auto inline-flex items-center justify-between gap-4 bg-[#0A3D42] hover:bg-[#072B2F] text-[#F8EFE7] font-semibold text-sm sm:text-base py-4 px-7 sm:px-8 rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <BrainCircuit className="w-5 h-5 text-[#F8EFE7] shrink-0" />
                <span className="mx-auto text-center px-1">Fazer Diagnóstico Emocional</span>
                <ArrowRight className="w-5 h-5 text-[#F8EFE7] shrink-0" />
              </a>

              <a
                id="btn-hero-whatsapp"
                href={buildWhatsAppLink('Olá Dra. Rebeca! Gostaria de verificar disponibilidade para agendar uma consulta individual.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FCF8F4] hover:bg-[#ECDCCE] text-[#0A3D42] border border-[#0A3D42]/25 font-semibold text-sm sm:text-base py-4 px-7 rounded-full transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#0A3D42]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* 5. Strategic Trust Badges directly beneath CTA */}
            <div className="pt-3 border-t border-[#0A3D42]/10 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#0A3D42]/80">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0A3D42]" />
                <span>Sessões 100% Confidenciais</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0A3D42]" />
                <span>Atendimento Presencial e Online</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-4 h-4 text-[#0A3D42]" />
                <span>Atendimento Humanizado &amp; Personalizado</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Quality Authorial Photo (DESKTOP ONLY) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer frame border */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#0A3D42]/20 bg-[#ECDCCE]">
                <img
                  src={CONTACT_INFO.mainPhoto}
                  alt="Dra. Rebeca Fermiano - Psicanalista e Hipnoterapeuta"
                  referrerPolicy="no-referrer"
                  className="w-full h-[500px] sm:h-[570px] object-cover object-top transition-transform duration-700 hover:scale-105"
                />

                {/* Clean natural bottom shadow purely for text readability (No green tint or smoke layer) */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                <div className="absolute bottom-12 left-6 right-6 text-[#F8EFE7]">
                  <h3 className="font-serif-display text-2xl font-bold">
                    Rebeca Fermiano
                  </h3>
                  <p className="text-xs text-[#F8EFE7]/90 font-medium mt-0.5">
                    Especialista em Reprogramação Mental &amp; Cura de Traumas
                  </p>
                  <p className="text-[11px] text-[#F8EFE7]/75 font-mono mt-1">
                    Centro, Guarulhos - SP • Atendimento Presencial &amp; Online
                  </p>
                </div>
              </div>

              {/* Voice Intro Player replacing the old badge over the photo */}
              <VoiceIntroBadge className="absolute -bottom-6 -left-4 sm:-left-6 max-w-[92%] sm:max-w-xs z-20 shadow-2xl" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
