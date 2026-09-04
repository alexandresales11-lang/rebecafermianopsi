import React, { useState, useRef } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Video, Sparkles } from 'lucide-react';
import { VideoTestimonialItem } from '../types';

export function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match && match[1] ? match[1] : null;
}

export function getYouTubeEmbedUrl(url: string): string | null {
  const videoId = extractYouTubeId(url);
  if (!videoId) return null;
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&cc_load_policy=0&iv_load_policy=3&controls=1`;
}

export function getYouTubeThumbnail(url: string, fallbackThumbnail: string): string {
  const videoId = extractYouTubeId(url);
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
  return fallbackThumbnail;
}

export const VIDEO_TESTIMONIALS: VideoTestimonialItem[] = [
  {
    id: 'vid-1',
    name: 'Beatriz Martins',
    role: 'Paciente em Psicoterapia',
    city: 'São Paulo - SP',
    theme: 'Superação de Crises de Pânico & Ansiedade',
    duration: '0:49 min',
    thumbnailUrl: '/posters/poster-beatriz.jpg',
    videoUrl: '/videos/depoimento-beatriz.mp4',
  },
  {
    id: 'vid-2',
    name: 'Rodrigo Fontes',
    role: 'Empreendedor & Consultor',
    city: 'Guarulhos - SP',
    theme: 'Desbloqueio de Autossabotagem e Carreira',
    duration: '0:46 min',
    thumbnailUrl: '/posters/poster-rodrigo.jpg',
    videoUrl: '/videos/depoimento-rodrigo.mp4',
  },
  {
    id: 'vid-3',
    name: 'Camila Torres',
    role: 'Médica Veterinária',
    city: 'Atendimento Online',
    theme: 'Reprogramação Mental e Relações Tóxicas',
    duration: '1:03 min',
    thumbnailUrl: '/posters/poster-camila.jpg',
    videoUrl: '/videos/depoimento-camila.mp4',
  },
  {
    id: 'vid-4',
    name: 'Amanda Ferreira',
    role: 'Paciente em Psicoterapia',
    city: 'Campinas - SP',
    theme: 'Eliminação da Insônia e Sobrecarga Emocional',
    duration: '0:35 min',
    thumbnailUrl: '/posters/poster-amanda.jpg',
    videoUrl: '/videos/depoimento-amanda.mp4',
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

            {/* Natural bottom/top shadow gradients purely for text contrast (No color tint, no smoke overlay) */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 via-black/15 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

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
      {activeVideo && (() => {
        const embedUrl = getYouTubeEmbedUrl(activeVideo.videoUrl);
        // All four testimonial stories are vertical 9:16 portrait videos recorded on smartphone
        const isVertical = !activeVideo.videoUrl.includes('horizontal') && !activeVideo.videoUrl.includes('16x9');

        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveVideo(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className={`relative w-full ${
                isVertical ? 'max-w-[340px] sm:max-w-[375px]' : 'max-w-2xl'
              } mx-auto bg-[#072B2F] border border-[#F8EFE7]/20 rounded-3xl overflow-hidden shadow-2xl transition-all my-auto max-h-[92vh] flex flex-col`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-[#F8EFE7]/15 bg-[#0A3D42] shrink-0">
                <div>
                  <h4 className="font-serif-display text-base sm:text-lg font-bold text-[#F8EFE7]">
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
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#F8EFE7] flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video Player Frame - Edge to Edge, Perfectly Centered Without Cropping */}
              <div className={`relative w-full ${isVertical ? 'aspect-[9/16]' : 'aspect-video'} bg-black flex items-center justify-center overflow-hidden`}>
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={`Depoimento de ${activeVideo.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <video
                    key={activeVideo.videoUrl}
                    src={activeVideo.videoUrl}
                    poster={activeVideo.thumbnailUrl}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain bg-black"
                  >
                    Seu navegador não suporta a reprodução deste vídeo.
                  </video>
                )}
              </div>

              {/* Modal Footer Note */}
              <div className="px-5 py-3 bg-[#0A3D42]/70 text-xs text-[#F8EFE7]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <span>{activeVideo.role} • {activeVideo.city}</span>
                <span className="text-[11px] text-[#ECDCCE] italic">
                  Depoimento gravado com autorização.
                </span>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
