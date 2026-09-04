import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, RotateCcw } from 'lucide-react';

interface TestimonialAudioPlayerProps {
  testimonialId: string;
  authorName: string;
  audioDuration: string; // Ex: "1:12", "0:48"
  audioUrl?: string; // URL do áudio real (.mp3, WhatsApp, Cloudinary, etc.)
}

// Converte string "1:12" em segundos (72)
function parseDurationToSeconds(durationStr: string): number {
  try {
    const parts = durationStr.split(':');
    if (parts.length === 2) {
      const min = parseInt(parts[0], 10) || 0;
      const sec = parseInt(parts[1], 10) || 0;
      return min * 60 + sec;
    }
  } catch (e) {
    // fallback
  }
  return 60;
}

function formatSeconds(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

export const TestimonialAudioPlayer: React.FC<TestimonialAudioPlayerProps> = ({
  testimonialId,
  authorName,
  audioDuration,
  audioUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState<number>(parseDurationToSeconds(audioDuration));
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Reseta estado quando o depoimento mudar
  useEffect(() => {
    stopPlayback();
    setCurrentTime(0);
    setDuration(parseDurationToSeconds(audioDuration));
  }, [testimonialId, audioDuration]);

  // Limpeza ao desmontar
  useEffect(() => {
    return () => {
      stopPlayback();
    };
  }, []);

  const stopPlayback = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch (e) {}
      audioCtxRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const startPlayback = () => {
    setIsPlaying(true);

    // Se tiver URL de áudio real, reproduz via tag <audio>
    if (audioUrl && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn('Erro ao reproduzir áudio real, ativando demonstração:', err);
        startSynthesizedFallback();
      });
    } else {
      // Fallback elegante com tom suave de conforto até que o usuário coloque a URL real do MP3
      startSynthesizedFallback();
    }
  };

  const startSynthesizedFallback = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.02, ctx.currentTime + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        setTimeout(() => {
          try {
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);
            setTimeout(() => {
              try {
                osc.stop();
                ctx.close();
              } catch (e) {}
            }, 2600);
          } catch (e) {}
        }, 4000);
      }
    } catch (e) {}

    const total = duration || parseDurationToSeconds(audioDuration);
    let cur = currentTime >= total ? 0 : currentTime;
    setCurrentTime(cur);

    synthTimerRef.current = window.setInterval(() => {
      cur += 0.5;
      if (cur >= total) {
        stopPlayback();
        setCurrentTime(0);
      } else {
        setCurrentTime(cur);
      }
    }, 500);
  };

  // Eventos do áudio HTML5 nativo
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration && !isNaN(audioRef.current.duration)) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = ratio * duration;

    setCurrentTime(newTime);
    if (audioRef.current && audioUrl) {
      audioRef.current.currentTime = newTime;
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      id={`audio-player-${testimonialId}`}
      className="inline-flex items-center gap-2.5 sm:gap-3 bg-[#ECDCCE]/80 hover:bg-[#ECDCCE] border border-[#0A3D42]/20 rounded-2xl py-1.5 px-3 sm:px-4 text-[#0A3D42] shadow-xs transition-all max-w-full"
    >
      {/* Elemento de áudio real (HTML5) */}
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          preload="metadata"
        />
      )}

      {/* Botão de Play / Pause */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? `Pausar áudio de ${authorName}` : `Ouvir áudio de ${authorName}`}
        className="w-8 h-8 rounded-full bg-[#0A3D42] hover:bg-[#072B2F] text-[#F8EFE7] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shrink-0 shadow-xs cursor-pointer"
      >
        {isPlaying ? (
          <Pause className="w-3.5 h-3.5 fill-current text-[#F8EFE7]" />
        ) : (
          <Play className="w-3.5 h-3.5 fill-current text-[#F8EFE7] ml-0.5" />
        )}
      </button>

      {/* Detalhes do Áudio & Barra de Progresso */}
      <div className="flex flex-col min-w-[150px] sm:min-w-[190px]">
        <div className="flex items-center justify-between text-[11px] sm:text-xs font-medium leading-tight">
          <span className="flex items-center gap-1 font-semibold text-[#0A3D42] truncate max-w-[130px] sm:max-w-[170px]">
            <Volume2 className="w-3 h-3 shrink-0 text-[#0A3D42]" />
            {isPlaying ? `Ouvindo ${authorName}...` : 'Ouvir depoimento em áudio'}
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] text-[#0A3D42]/75 shrink-0 ml-2">
            {formatSeconds(currentTime)} / {audioDuration}
          </span>
        </div>

        {/* Barra de Progresso Interativa com Ondas Sonoras */}
        <div
          onClick={handleSeek}
          className="relative w-full h-2.5 mt-1.5 bg-[#0A3D42]/15 hover:bg-[#0A3D42]/20 rounded-full cursor-pointer flex items-center px-0.5 overflow-hidden transition-colors"
          title="Clique para avançar ou retroceder"
        >
          {/* Preenchimento de Progresso */}
          <div
            className="absolute left-0 top-0 bottom-0 bg-[#0A3D42] rounded-full transition-all duration-150"
            style={{ width: `${progressPercent}%` }}
          />

          {/* Efeito sutil de ondas de áudio */}
          <div className="relative z-10 w-full flex items-center justify-between px-1 pointer-events-none opacity-40">
            {[...Array(16)].map((_, idx) => (
              <span
                key={idx}
                className={`w-[2px] rounded-full bg-white transition-all duration-300 ${
                  isPlaying
                    ? idx % 2 === 0
                      ? 'h-2 animate-pulse'
                      : 'h-1'
                    : 'h-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
