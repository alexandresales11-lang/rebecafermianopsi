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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D42]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#F8EFE7] space-y-1">
                <h3 className="font-serif-display text-2xl font-bold">
                  Rebeca Fermiano
                </h3>
                <p className="text-xs text-[#F8EFE7]/85 font-medium">
                  Psicanálise Clínica • Hipnoterapia • Mentoria de Alta Performance
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
                Ciência, Empatia e Precisão no Cuidado com a Sua Mente
              </h2>
              <p className="text-base sm:text-lg text-[#0A3D42]/85 font-medium leading-snug">
                "Não acredito em processos terapêuticos sem fim que mantêm a pessoa presa à própria dor. Meu compromisso é fornecer ferramentas reais para você reprogramar a mente e renascer com autonomia."
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#0A3D42]/80 leading-relaxed">
              <p>
                Com formação sólida em <strong>Psicanálise Clínica</strong> e especialização avançada em <strong>Hipnoterapia Neurocientífica</strong>, Rebeca Fermiano atua na vanguarda do desenvolvimento humano e da saúde mental integrativa.
              </p>
              <p>
                Sua abordagem une o acolhimento profundo da escuta psicanalítica à velocidade transformadora da hipnose clínica. O foco não é apenas aliviar os sintomas superficiais, mas identificar a matriz inconsciente do sofrimento — ressignificando traumas passados e libertando o potencial bloqueado.
              </p>
            </div>

            {/* Credential highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#FCF8F4] border border-[#0A3D42]/15 rounded-xl p-3.5 flex items-center gap-3 text-xs sm:text-sm text-[#0A3D42]">
                <BookOpen className="w-4 h-4 text-[#0A3D42] shrink-0" />
                <span className="font-medium">Psicanálise Clínica &amp; Terapia Integrativa</span>
              </div>
              <div className="bg-[#FCF8F4] border border-[#0A3D42]/15 rounded-xl p-3.5 flex items-center gap-3 text-xs sm:text-sm text-[#0A3D42]">
                <Sparkles className="w-4 h-4 text-[#0A3D42] shrink-0" />
                <span className="font-medium">Hipnoterapia Clínica &amp; Reprogramação</span>
              </div>
              <div className="bg-[#FCF8F4] border border-[#0A3D42]/15 rounded-xl p-3.5 flex items-center gap-3 text-xs sm:text-sm text-[#0A3D42]">
                <HeartHandshake className="w-4 h-4 text-[#0A3D42] shrink-0" />
                <span className="font-medium">Mentoria Pessoal &amp; Executiva</span>
              </div>
              <div className="bg-[#FCF8F4] border border-[#0A3D42]/15 rounded-xl p-3.5 flex items-center gap-3 text-xs sm:text-sm text-[#0A3D42]">
                <Award className="w-4 h-4 text-[#0A3D42] shrink-0" />
                <span className="font-medium">Palestrante em Saúde Mental &amp; Liderança</span>
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
