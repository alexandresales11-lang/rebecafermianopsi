import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Sparkles,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../constants';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A3D42] text-[#F8EFE7] border-b border-[#F8EFE7]/10 shadow-md">
      {/* Main navigation bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src={CONTACT_INFO.logoUrl} 
            alt="Logo Rebeca Fermiano" 
            referrerPolicy="no-referrer"
            className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col text-left">
            <span className="font-serif-display text-lg sm:text-xl font-bold tracking-wide text-[#F8EFE7] leading-none">
              Rebeca Fermiano
            </span>
            <span className="text-[10px] sm:text-xs text-[#F8EFE7]/75 uppercase tracking-wider font-light mt-1">
              Psicanálise &amp; Hipnoterapia Clínica
            </span>
          </div>
        </a>

        {/* Desktop Menu - Simplified & spaced */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium tracking-wide">
          <a href="#" className="text-[#F8EFE7]/85 hover:text-[#F8EFE7] transition-colors py-1">
            Início
          </a>

          <a href="#metodologia" className="text-[#F8EFE7]/85 hover:text-[#F8EFE7] transition-colors py-1">
            Método
          </a>

          <a href="#trilha-diagnostico" className="text-[#F8EFE7]/85 hover:text-[#F8EFE7] transition-colors py-1">
            Diagnóstico
          </a>

          <a href="#sobre" className="text-[#F8EFE7]/85 hover:text-[#F8EFE7] transition-colors py-1">
            Sobre
          </a>

          <a href="#depoimentos" className="text-[#F8EFE7]/85 hover:text-[#F8EFE7] transition-colors py-1">
            Depoimentos
          </a>
        </nav>

        {/* Action Button - White pill button with dark text */}
        <div className="hidden md:flex items-center">
          <a
            id="nav-btn-agendar-consulta"
            href={buildWhatsAppLink('Olá Dra. Rebeca! Gostaria de agendar uma consulta através do site.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#FFFFFF] hover:bg-[#F8EFE7] text-[#0A3D42] font-semibold text-xs sm:text-sm py-2.5 px-6 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 border border-[#FFFFFF]/20"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <button
          id="btn-mobile-menu"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
          className="md:hidden text-[#F8EFE7] p-2 hover:bg-[#F8EFE7]/10 rounded-lg"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#072B2F] border-b border-[#F8EFE7]/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8EFE7] py-2 border-b border-[#F8EFE7]/10"
            >
              Início
            </a>
            <a 
              href="#trilha-diagnostico" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8EFE7]/90 py-2 border-b border-[#F8EFE7]/10"
            >
              Diagnóstico Emocional (Quiz)
            </a>
            <a 
              href="#pilares-atuacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8EFE7]/90 py-2 border-b border-[#F8EFE7]/10"
            >
              Pilares de Atuação &amp; Mentoria
            </a>
            <a 
              href="#metodologia" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8EFE7]/90 py-2 border-b border-[#F8EFE7]/10"
            >
              Metodologia de Renascimento
            </a>
            <a 
              href="#como-funciona-hipnoterapia" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8EFE7]/90 py-2 border-b border-[#F8EFE7]/10"
            >
              Como Funciona a Hipnoterapia
            </a>
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8EFE7]/90 py-2 border-b border-[#F8EFE7]/10"
            >
              Quem é Rebeca Fermiano
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8EFE7]/90 py-2 border-b border-[#F8EFE7]/10"
            >
              Depoimentos &amp; Resultados
            </a>
            <a 
              href="#agendamento" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8EFE7]/90 py-2"
            >
              Triagem de Agendamento
            </a>
          </div>

          <div className="pt-2">
            <a
              href={buildWhatsAppLink('Olá Dra. Rebeca! Gostaria de agendar meu atendimento através do site.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#F8EFE7] text-[#0A3D42] font-semibold text-sm py-3 px-4 rounded-full shadow"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
