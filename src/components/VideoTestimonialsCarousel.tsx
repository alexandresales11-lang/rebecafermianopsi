import React, { useState, useRef } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Video, Sparkles } from 'lucide-react';
import { VideoTestimonialItem } from '../types';

export const VIDEO_TESTIMONIALS: VideoTestimonialItem[] = [
  {
    id: 'vid-1',
    name: 'Beatriz Martins',
    role: 'Arquiteta & Designer',
    city: 'São Paulo - SP',
    theme: 'Superação de Crises de Pânico & Ansiedade',
    duration: '1:15 min',
    thumbnailUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    // Pode ser um arquivo .mp4 direto ou link embed do YouTube/Vimeo
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: 'vid-2',
    name: 'Rodrigo Fontes',
    role: 'Empreendedor & Consultor',
    city: 'Guarulhos - SP',
    theme: 'Desbloqueio de Autossabotagem e Carreira',
    duration: '1:42 min',
    thumbnailUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: 'vid-3',
    name: 'Camila Torres',
    role: 'Médica Veterinária',
    city: 'Atendimento Online',
    theme: 'Reprogramação Mental e Relações Tóxicas',
    duration: '1:28 min',
    thumbnailUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  {
    id: 'vid-4',
    name: 'Gustavo Mendonça',
    role: 'Executivo de Tecnologia',
    city: 'Campinas - SP',
    theme: 'Eliminação da Insônia e Sobrecarga Emocional',
    duration: '1:35 min',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
  },
];

export const VideoTestimonialsCarousel: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonialItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full pt-4 space-y-6">
      {/* Subheader for Video Testimonials */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#0A3D42]/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0A3D42] bg-[#0A3D42]/10 px-3 py-1 rounded-full mb-2">
            <Video className="w-3.5 h-3.5" />
            <span>Depoimentos Gravados</span>
          </div>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#0A3D42]">
            Histórias de Transformação em Vídeo
          </h3>
          <p className="text-xs sm:text-sm text-[#0A3D42]/75 mt-1 max-w-xl">
            Assista aos relatos espontâneos de quem passou pelo processo de reprogramação mental e psicanálise clínica.
          </p>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            aria-label="Vídeo anterior"
            className="w-9 h-9 rounded-full border border-[#0A3D42]/20 bg-[#FCF8F4] flex items-center justify-center text-[#0A3D42] hover:bg-[#ECDCCE] hover:scale-105 active:scale-95 transition-all shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            aria-label="Próximo vídeo"
            className="w-9 h-9 rounded-full border border-[#0A3D42]/20 bg-[#FCF8F4] flex items-center justify-center text-[#0A3D42] hover:bg-[#ECDCCE] hover:scale-105 active:scale-95 transition-all shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Video Carousel Horizontal Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#0A3D42]/20 scrollbar-track-transparent -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: 'thin' }}
      >
        {VIDEO_TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveVideo(item)}
            className="group relative flex-none w-[220px] sm:w-[260px] h-[340px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer snap-start border border-[#0A3D42]/15 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-[#0A3D42]"
          >
            {/* Background Thumbnail */}
            <img
              src={item.thumbnailUrl}
              alt={`Depoimento de ${item.name}`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />

            {/* Gradient Overlays for Elegance and Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D42] via-[#0A3D42]/30 to-black/30" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <span className="text-[10px] font-medium tracking-wide bg-black/40 backdrop-blur-md text-[#F8EFE7] px-2.5 py-1 rounded-full border border-white/15">
                {item.duration}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-[#0A3D42]/80 backdrop-blur-md text-[#F8EFE7] px-2 py-0.5 rounded-full border border-[#F8EFE7]/20">
                <Sparkles className="w-2.5 h-2.5 text-[#ECDCCE]" />
                Vídeo
              </span>
            </div>

            {/* Centered Glowing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#F8EFE7]/90 text-[#0A3D42] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#FFFFFF] transition-all duration-300 backdrop-blur-xs pl-0.5">
                <Play className="w-6 h-6 fill-current text-[#0A3D42]" />
              </div>
            </div>

            {/* Bottom Content Information */}
            <div className="absolute bottom-0 inset-x-0 p-4 text-left z-10 space-y-1">
              <span className="inline-block text-[11px] font-medium text-[#ECDCCE] line-clamp-1">
                {item.theme}
              </span>
              <h4 className="font-serif-display text-base font-bold text-[#F8EFE7] leading-snug">
                {item.name}
              </h4>
              <p className="text-[11px] text-[#F8EFE7]/80 line-clamp-1">
                {item.role} • {item.city}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal / Lightbox */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl bg-[#072B2F] border border-[#F8EFE7]/20 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#F8EFE7]/15 bg-[#0A3D42]">
              <div>
                <h4 className="font-serif-display text-lg font-bold text-[#F8EFE7]">
                  {activeVideo.name}
                </h4>
                <p className="text-xs text-[#ECDCCE]">
                  {activeVideo.theme} ({activeVideo.duration})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Fechar vídeo"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#F8EFE7] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                poster={activeVideo.thumbnailUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>

            {/* Modal Footer Note */}
            <div className="px-5 py-3.5 bg-[#0A3D42]/70 text-xs text-[#F8EFE7]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>{activeVideo.role} • {activeVideo.city}</span>
              <span className="text-[11px] text-[#ECDCCE] italic">
                Depoimento real gravado com consentimento do paciente.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
