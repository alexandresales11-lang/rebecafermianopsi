import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Instagram, 
  MessageCircle, 
  ExternalLink,
  Award,
  Sparkles,
  BookOpen,
  HeartHandshake
} from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../constants';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#F8EFE7] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Professional Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#0A3D42]/20 group">
              <img
                src={CONTACT_INFO.aboutPhoto}
                alt="Dra. Rebeca Fermiano Psicanalista e Hipnoterapeuta"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Clean natural bottom shadow purely for text readability (No green tint or smoke layer) */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#F8EFE7] space-y-1">
                <h3 className="font-serif-display text-2xl font-bold">
                  Rebeca Fermiano
                </h3>
                <p className="text-xs text-[#F8EFE7]/85 font-medium">
                  Psicóloga • Psicanalista • Hipnoterapeuta
                </p>
              </div>
            </div>

            {/* Float badge */}
            <div className="hidden sm:flex absolute -bottom-5 -right-4 bg-[#FCF8F4] border border-[#0A3D42]/20 rounded-2xl p-4 shadow-lg items-center gap-3 text-[#0A3D42]">
              <Award className="w-6 h-6 text-[#0A3D42] shrink-0" />
              <div className="text-xs">
                <div className="font-bold">Atendimento Humanizado</div>
                <div className="text-[#0A3D42]/70">Guarulhos - SP &amp; Online</div>
              </div>
            </div>
          </div>

          {/* Right: Bio & Authority */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0A3D42] bg-[#0A3D42]/10 px-3.5 py-1 rounded-full">
                Quem é Rebeca Fermiano
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#0A3D42] font-semibold leading-tight">
                Ciência, Empatia e Precisão no Cuidado com a Sua Mente.
              </h2>
              <p className="text-lg sm:text-xl text-[#0A3D42] font-serif-display font-medium italic leading-snug">
                Eu também precisei me reconstruir.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#0A3D42]/85 leading-relaxed">
              <p>
                Minha trajetória nasceu da Psicologia e de uma busca profunda por compreender os processos que influenciam nossas emoções, comportamentos e escolhas.
              </p>
              <p>
                Sou <strong>Psicóloga, Psicanalista e Hipnoterapeuta</strong>, e integro diferentes recursos terapêuticos para ajudar você a compreender sua história, identificar padrões e ressignificar experiências que ainda impactam sua vida.
              </p>
              
              <div className="border-l-4 border-[#0A3D42] pl-4 py-2 bg-[#FCF8F4]/80 rounded-r-xl">
                <p className="font-serif-display text-base sm:text-lg text-[#0A3D42] font-medium leading-snug">
                  Não se trata de apagar o passado.<br />
                  <span className="font-semibold text-[#0A3D42]">Trata-se de deixar de ser conduzida por ele.</span>
                </p>
              </div>

              <p>
                Meu propósito é oferecer um processo terapêutico profundo, humanizado e direcionado à construção de consciência, autonomia e novas possibilidades de viver.
              </p>

              <div className="bg-[#FCF8F4] border border-[#0A3D42]/20 rounded-xl p-3.5 text-center sm:text-left shadow-xs">
                <p className="font-serif-display text-sm sm:text-base font-semibold text-[#0A3D42]">
                  Compreenda sua história. Transforme seus padrões. Reconstrua sua relação consigo mesma.
                </p>
              </div>
            </div>

            {/* Credential highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#FCF8F4] border border-[#0A3D42]/15 rounded-xl p-3.5 flex items-center gap-3 text-xs sm:text-sm text-[#0A3D42]">
                <BookOpen className="w-4 h-4 text-[#0A3D42] shrink-0" />
                <span className="font-medium">Psicologia &amp; Psicanálise Clínica</span>
              </div>
              <div className="bg-[#FCF8F4] border border-[#0A3D42]/15 rounded-xl p-3.5 flex items-center gap-3 text-xs sm:text-sm text-[#0A3D42]">
                <Sparkles className="w-4 h-4 text-[#0A3D42] shrink-0" />
                <span className="font-medium">Hipnoterapia Clínica &amp; Reprogramação</span>
              </div>
              <div className="bg-[#FCF8F4] border border-[#0A3D42]/15 rounded-xl p-3.5 flex items-center gap-3 text-xs sm:text-sm text-[#0A3D42]">
                <HeartHandshake className="w-4 h-4 text-[#0A3D42] shrink-0" />
                <span className="font-medium">Processo Humanizado &amp; Autonomia</span>
              </div>
              <div className="bg-[#FCF8F4] border border-[#0A3D42]/15 rounded-xl p-3.5 flex items-center gap-3 text-xs sm:text-sm text-[#0A3D42]">
                <Award className="w-4 h-4 text-[#0A3D42] shrink-0" />
                <span className="font-medium">Atendimento Presencial &amp; Online</span>
              </div>
            </div>

            {/* Social & Location Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A3D42] bg-[#0A3D42]/10 hover:bg-[#0A3D42]/20 py-2.5 px-4 rounded-full transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@{CONTACT_INFO.instagram}</span>
              </a>

              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A3D42] bg-[#0A3D42]/10 hover:bg-[#0A3D42]/20 py-2.5 px-4 rounded-full transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Centro de Guarulhos - SP</span>
                <ExternalLink className="w-3 h-3 text-[#0A3D42]/60" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
