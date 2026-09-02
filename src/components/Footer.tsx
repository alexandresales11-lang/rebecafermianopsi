import React from 'react';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  Heart,
  Clock,
  Phone
} from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A3D42] text-[#F8EFE7] border-t border-[#F8EFE7]/15 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={CONTACT_INFO.logoUrl} 
                alt="Logo Rebeca Fermiano" 
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain brightness-110"
              />
              <div>
                <h3 className="font-serif-display text-2xl font-bold tracking-wide">
                  Rebeca Fermiano
                </h3>
                <p className="text-xs text-[#F8EFE7]/70 uppercase tracking-wider">
                  Psicanálise &amp; Hipnoterapia Clínica
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F8EFE7]/80 leading-relaxed max-w-sm">
              Trabalho terapêutico e estratégico focado na raiz emocional e na reprogramação do subconsciente para que você alcance o seu renascimento com autonomia e clareza.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Dra. Rebeca"
                className="w-9 h-9 rounded-full bg-[#F8EFE7]/10 flex items-center justify-center text-[#F8EFE7] hover:bg-[#F8EFE7]/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppLink('Olá Dra. Rebeca! Gostaria de falar com sua equipe.')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#F8EFE7]/10 flex items-center justify-center text-[#F8EFE7] hover:bg-[#F8EFE7]/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Localização no Google Maps"
                className="w-9 h-9 rounded-full bg-[#F8EFE7]/10 flex items-center justify-center text-[#F8EFE7] hover:bg-[#F8EFE7]/20 transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-[#F8EFE7]/90 border-b border-[#F8EFE7]/20 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F8EFE7]/80">
              <li>
                <a href="#" className="hover:text-[#F8EFE7] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#trilha-diagnostico" className="hover:text-[#F8EFE7] transition-colors">
                  Trilha de Diagnóstico Emocional
                </a>
              </li>
              <li>
                <a href="#pilares-atuacao" className="hover:text-[#F8EFE7] transition-colors">
                  Psicoterapia &amp; Mentoria Hipnótica
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#F8EFE7] transition-colors">
                  A Metodologia em 3 Passos
                </a>
              </li>
              <li>
                <a href="#como-funciona-hipnoterapia" className="hover:text-[#F8EFE7] transition-colors">
                  Como Funciona a Hipnose Clínica
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#F8EFE7] transition-colors">
                  Quem é Rebeca Fermiano
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#F8EFE7] transition-colors">
                  Depoimentos de Pacientes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Location & Consultório */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-[#F8EFE7]/90 border-b border-[#F8EFE7]/20 pb-2">
              Consultório &amp; Atendimento
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#F8EFE7]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F8EFE7] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F8EFE7]">Consultório Presencial:</p>
                  <p className="text-xs text-[#F8EFE7]/70">{CONTACT_INFO.address}</p>
                  <a 
                    href={CONTACT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#F8EFE7] underline hover:text-[#ECDCCE] mt-0.5 inline-block"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F8EFE7] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F8EFE7]">WhatsApp Direto:</p>
                  <a 
                    href={buildWhatsAppLink('Olá Dra. Rebeca!')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#F8EFE7]/90 hover:underline"
                  >
                    {CONTACT_INFO.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F8EFE7] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F8EFE7]">Horários de Atendimento:</p>
                  <p className="text-xs text-[#F8EFE7]/70">Segunda a Sexta com horário previamente reservado</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and reassurance */}
        <div className="pt-8 border-t border-[#F8EFE7]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8EFE7]/70">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-[#F8EFE7]/80" />
            <span>© {new Date().getFullYear()} Rebeca Fermiano. Todos os direitos reservados. Sessões estritamente confidenciais.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#F8EFE7] hover:text-[#ECDCCE] transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
