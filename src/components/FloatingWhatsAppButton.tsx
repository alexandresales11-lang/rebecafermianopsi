import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppLink } from '../constants';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {showNotification && (
        <div className="bg-[#072B2F] text-[#F8EFE7] border border-[#F8EFE7]/20 rounded-2xl p-3 shadow-xl max-w-xs text-xs relative">
          <button
            type="button"
            onClick={() => setShowNotification(false)}
            aria-label="Fechar aviso"
            className="absolute top-2 right-2 text-[#F8EFE7]/60 hover:text-[#F8EFE7]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-semibold text-[#F8EFE7] mb-0.5">Dúvidas sobre o atendimento?</div>
          <p className="text-[#F8EFE7]/80 text-[11px] leading-snug">
            Fale diretamente com nossa equipe no WhatsApp para tirar dúvidas sobre Psicoterapia ou Mentoria.
          </p>
        </div>
      )}

      <a
        id="btn-floating-whatsapp"
        href={buildWhatsAppLink('Olá Dra. Rebeca! Gostaria de conversar com sua equipe sobre agendamento de consulta ou mentoria.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="flex items-center gap-2.5 bg-[#0A3D42] hover:bg-[#072B2F] text-[#F8EFE7] border-2 border-[#F8EFE7]/40 py-3 px-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current text-[#F8EFE7]" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
          Falar com a Dra. Rebeca
        </span>
      </a>
    </div>
  );
};
