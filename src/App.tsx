import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EmotionalAssessmentQuiz } from './components/EmotionalAssessmentQuiz';
import { PillarsSection } from './components/PillarsSection';
import { MethodologySection } from './components/MethodologySection';
import { AboutSection } from './components/AboutSection';
import { SocialProofSection } from './components/SocialProofSection';
import { SmartBookingForm } from './components/SmartBookingForm';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8EFE7] text-[#0A3D42] selection:bg-[#0A3D42] selection:text-[#F8EFE7] flex flex-col font-sans">
      {/* Header & Sticky Nav with 60s Voice Player */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero: High-impact headline, main authorial photo, triage CTAs & Trust Badges */}
        <HeroSection />

        {/* 2. Trilha de Diagnóstico: Interactive 4-step Assessment Quiz to qualify leads into WhatsApp */}
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <EmotionalAssessmentQuiz />
        </section>

        {/* 3. Pilares de Atuação: Dynamic minimalist tabs (Psicoterapia & Hipnoterapia, Mentoria, Palestras) */}
        <PillarsSection />

        {/* 4. A Metodologia: 3-step rebirth infographic + Hipnoterapia Clinical demystification & objection busting */}
        <MethodologySection />

        {/* 5. Quem é Rebeca Fermiano: Bio, photos, credentials, approach */}
        <AboutSection />

        {/* 6. Prova Social: Testimonials carousel with audio indicators and strategic trust seals */}
        <SocialProofSection />

        {/* 7. Agendamento Inteligente com Triagem: Direct consultation booking form */}
        <SmartBookingForm />
      </main>

      {/* Footer with map link, address, Instagram, copyright */}
      <Footer />

      {/* Discreet floating WhatsApp helper */}
      <FloatingWhatsAppButton />
    </div>
  );
}
