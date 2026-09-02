import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  MapPin,
  Instagram
} from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../constants';

export const SmartBookingForm: React.FC = () => {
  const [serviceType, setServiceType] = useState('Psicoterapia & Hipnoterapia');
  const [modality, setModality] = useState('Presencial em Guarulhos');
  const [preferredPeriod, setPreferredPeriod] = useState('Tarde');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mainConcern, setMainConcern] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Dra. Rebeca Fermiano! Gostaria de solicitar agendamento pelo site:
- Nome: ${name || 'Não informado'}
- Telefone/WhatsApp: ${phone || 'Não informado'}
- Serviço de interesse: ${serviceType}
- Modalidade: ${modality}
- Período de preferência: ${preferredPeriod}
- Resumo do momento/dor: ${mainConcern || 'Desejo conversar diretamente'}

Poderia me informar as datas disponíveis na agenda?`;

    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" className="py-20 bg-[#FCF8F4] border-t border-[#0A3D42]/15 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Reassurance & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0A3D42] bg-[#0A3D42]/10 px-3.5 py-1 rounded-full">
                Primeiro Passo para o Renascimento
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#0A3D42] font-semibold leading-tight">
                Agendamento Inteligente com Triagem
              </h2>
              <p className="text-sm sm:text-base text-[#0A3D42]/80 leading-relaxed">
                Preencha os dados preliminares para que nossa equipe acolha seu momento com o devido cuidado e prioridade na agenda.
              </p>
            </div>

            {/* Reassurance list */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#0A3D42]">
                <ShieldCheck className="w-5 h-5 text-[#0A3D42] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Sessões 100% Confidenciais</h4>
                  <p className="text-xs text-[#0A3D42]/70">Sigilo profissional resguardado do primeiro contato ao término das sessões.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#0A3D42]">
                <MapPin className="w-5 h-5 text-[#0A3D42] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Atendimento Presencial e Online</h4>
                  <p className="text-xs text-[#0A3D42]/70">Consultório em Guarulhos - SP ou plataforma criptografada para o mundo todo.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#0A3D42]">
                <Clock className="w-5 h-5 text-[#0A3D42] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Retorno Ágil e Humanizado</h4>
                  <p className="text-xs text-[#0A3D42]/70">Resposta atenciosa diretamente pelo canal oficial de WhatsApp.</p>
                </div>
              </div>
            </div>

            {/* Direct Quick Booking options */}
            <div className="bg-[#F8EFE7] border border-[#0A3D42]/20 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A3D42]/80">
                Prefere falar imediatamente no WhatsApp?
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href={buildWhatsAppLink('Olá Dra. Rebeca! Gostaria de agendar uma consulta individual de Psicoterapia & Hipnoterapia.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#0A3D42] hover:underline flex items-center justify-between py-1 border-b border-[#0A3D42]/10"
                >
                  <span>• Quero Agendar Minha Consulta</span>
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
                <a
                  href={buildWhatsAppLink('Olá Dra. Rebeca! Gostaria de saber mais sobre a Mentoria Hipnótica para alavancar meus resultados.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#0A3D42] hover:underline flex items-center justify-between py-1 border-b border-[#0A3D42]/10"
                >
                  <span>• Quero uma Mentoria Hipnótica</span>
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
                <a
                  href={buildWhatsAppLink('Olá equipe da Dra. Rebeca! Gostaria de solicitar informações para contratação de Palestra corporativa.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#0A3D42] hover:underline flex items-center justify-between py-1"
                >
                  <span>• Contratar Palestra para Minha Empresa</span>
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Intelligent Smart Form */}
          <div className="lg:col-span-7">
            <form 
              id="booking-triage-form"
              onSubmit={handleSubmit}
              className="bg-[#F8EFE7] border border-[#0A3D42]/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-md space-y-6"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#0A3D42]/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A3D42]">
                  Triagem Direta &amp; Agendamento
                </span>
                <span className="text-xs text-[#0A3D42]/60">Sem burocracia</span>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A3D42]">
                  1. Qual serviço melhor atende sua necessidade?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    'Psicoterapia & Hipnoterapia',
                    'Mentoria Hipnótica',
                    'Palestra / Treinamento',
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setServiceType(service)}
                      className={`p-3 rounded-xl text-xs font-medium border text-left transition-all ${
                        serviceType === service
                          ? 'bg-[#0A3D42] text-[#F8EFE7] border-[#0A3D42] shadow-sm'
                          : 'bg-[#FCF8F4] text-[#0A3D42] border-[#0A3D42]/20 hover:bg-[#ECDCCE]'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modality Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A3D42]">
                  2. Formato de preferência:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Presencial em Guarulhos',
                    'Online (Ao Vivo / Criptografado)',
                  ].map((mod) => (
                    <button
                      key={mod}
                      type="button"
                      onClick={() => setModality(mod)}
                      className={`p-3 rounded-xl text-xs font-medium border text-left transition-all ${
                        modality === mod
                          ? 'bg-[#0A3D42] text-[#F8EFE7] border-[#0A3D42] shadow-sm'
                          : 'bg-[#FCF8F4] text-[#0A3D42] border-[#0A3D42]/20 hover:bg-[#ECDCCE]'
                      }`}
                    >
                      {mod}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="input-name" className="block text-xs font-semibold text-[#0A3D42]">
                    Seu Nome Completo
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como prefere ser chamado(a)?"
                    className="w-full bg-[#FCF8F4] border border-[#0A3D42]/25 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0A3D42] focus:outline-none focus:ring-2 focus:ring-[#0A3D42] placeholder:text-[#0A3D42]/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="input-phone" className="block text-xs font-semibold text-[#0A3D42]">
                    WhatsApp com DDD
                  </label>
                  <input
                    id="input-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-[#FCF8F4] border border-[#0A3D42]/25 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0A3D42] focus:outline-none focus:ring-2 focus:ring-[#0A3D42] placeholder:text-[#0A3D42]/40"
                  />
                </div>
              </div>

              {/* Concern text */}
              <div className="space-y-1.5">
                <label htmlFor="input-concern" className="block text-xs font-semibold text-[#0A3D42]">
                  Resuma em poucas palavras o que você gostaria de destravar ou curar:
                </label>
                <textarea
                  id="input-concern"
                  rows={3}
                  value={mainConcern}
                  onChange={(e) => setMainConcern(e.target.value)}
                  placeholder="Ex: Tenho crises de ansiedade antes de reuniões, ou carrego um trauma do passado que quero ressignificar com hipnose..."
                  className="w-full bg-[#FCF8F4] border border-[#0A3D42]/25 rounded-xl p-3 text-xs sm:text-sm text-[#0A3D42] focus:outline-none focus:ring-2 focus:ring-[#0A3D42] placeholder:text-[#0A3D42]/40"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 space-y-3">
                <button
                  id="btn-submit-triage-form"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#0A3D42] hover:bg-[#072B2F] text-[#F8EFE7] font-semibold text-sm sm:text-base py-4 px-8 rounded-full shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enviar Informações &amp; Confirmar no WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#0A3D42]/70 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0A3D42]" />
                  <span>Dados confidenciais protegidos pelo sigilo profissional.</span>
                </div>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
