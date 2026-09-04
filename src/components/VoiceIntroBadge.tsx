import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { REBECA_VOICE_AUDIO_BASE64, REBECA_VOICE_DURATION } from '../data/rebecaVoiceData';

interface VoiceIntroBadgeProps {
  className?: string;
}

export const VoiceIntroBadge: React.FC<VoiceIntroBadgeProps> = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState<number>(REBECA_VOICE_DURATION);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync audio duration once loaded
  const handleLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration && !isNaN(audioRef.current.duration)) {
      setDuration(Math.round(audioRef.current.duration));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // When audio finishes playing: reset to initial state with Play icon
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Erro ao reproduzir áudio:', err);
        setIsPlaying(false);
      });
    }
  };

  // Pause audio on component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const formatSeconds = (sec: number) => {
    const s = Math.floor(sec);
    const m = Math.floor(s / 60);
    const remainder = s % 60;
    return `${m}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <div
      id="voice-intro-badge"
      className={`bg-[#FCF8F4] border border-[#0A3D42]/25 rounded-2xl p-2.5 sm:p-3 shadow-xl flex items-center gap-3 text-[#0A3D42] transition-all hover:shadow-2xl ${className}`}
    >
      {/* Elemento de áudio nativo com o arquivo real em Base64 Data URI */}
      <audio
        ref={audioRef}
        src={REBECA_VOICE_AUDIO_BASE64}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onPause={handlePause}
        onPlay={handlePlay}
      />

      <button
        id="btn-play-voice-intro"
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar recado da Rebeca' : 'Ouvir recado da Rebeca para você'}
        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0A3D42] hover:bg-[#072B2F] text-[#F8EFE7] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shrink-0 shadow-md group cursor-pointer"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-[#F8EFE7]" />
        ) : (
          <Play className="w-5 h-5 ml-0.5 text-[#F8EFE7] fill-current group-hover:scale-110 transition-transform" />
        )}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border-2 border-emerald-400 animate-ping opacity-60 pointer-events-none" />
        )}
      </button>

      <div 
        className="text-left cursor-pointer select-none pr-1 flex-1"
        onClick={togglePlay}
      >
        <div className="flex items-center justify-between gap-1.5">
          <span className="font-bold text-xs sm:text-sm text-[#0A3D42] leading-tight">
            {isPlaying ? 'Ouvindo recado de Rebeca...' : 'Recado de Rebeca para você'}
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#0A3D42]/70 font-mono shrink-0">
            {isPlaying ? `${formatSeconds(currentTime)} / ${formatSeconds(duration)}` : `• ${duration}s`}
          </span>
        </div>
        <p className="text-[#0A3D42]/75 text-[11px] sm:text-xs mt-0.5 leading-tight">
          {isPlaying ? 'Toque no botão para pausar o áudio' : 'Clique para ouvir uma mensagem especial'}
        </p>

        {/* Minimal Audio Waveform visualizer */}
        <div className="flex items-center gap-0.5 mt-1.5 h-2 w-28 sm:w-36">
          {[40, 70, 95, 60, 85, 45, 90, 75, 50, 80, 65, 30, 85, 95, 55, 70].map((h, i) => {
            const barProgress = (i / 16) * 100;
            const isPassed = progress >= barProgress;
            return (
              <span
                key={i}
                style={{ 
                  height: isPlaying ? `${Math.sin((currentTime * 8) + i) * 35 + 55}%` : `${h}%` 
                }}
                className={`w-1 rounded-full transition-all duration-150 ${
                  isPlaying && isPassed 
                    ? 'bg-[#0A3D42]' 
                    : isPlaying 
                    ? 'bg-[#0A3D42]/45' 
                    : 'bg-[#0A3D42]/30'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
