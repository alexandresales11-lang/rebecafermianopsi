import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Sparkles } from 'lucide-react';
import { REBECA_VOICE_AUDIO_BASE64, REBECA_VOICE_DURATION } from '../data/rebecaVoiceData';

export const VoiceIntroPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState<number>(REBECA_VOICE_DURATION);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
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

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      id="narrative-audio-player"
      className="inline-flex items-center gap-3 bg-[#0A3D42]/10 backdrop-blur-md border border-[#0A3D42]/20 rounded-full py-1.5 px-4 text-[#0A3D42] text-xs md:text-sm font-medium transition-all hover:bg-[#0A3D42]/15 shadow-sm"
    >
      <audio
        ref={audioRef}
        src={REBECA_VOICE_AUDIO_BASE64}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <button
        id="btn-toggle-audio-voice"
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar áudio' : 'Ouvir mensagem de áudio'}
        className="w-7 h-7 rounded-full bg-[#0A3D42] text-[#F8EFE7] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
      </button>

      <div className="flex flex-col text-left cursor-pointer select-none" onClick={togglePlay}>
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-[#0A3D42] text-xs">
            {isPlaying ? 'Ouvindo Dra. Rebeca Fermiano' : 'Ouvir mensagem em áudio da Dra.'}
          </span>
          <span className="text-[10px] text-[#0A3D42]/70 font-mono tracking-tight">
            {isPlaying ? `${Math.floor(currentTime)}s / ${duration}s` : `(${duration} seg)`}
          </span>
        </div>

        {/* Minimal Audio Waveform visualizer */}
        <div className="flex items-center gap-0.5 mt-1 h-2 w-32">
          {[40, 70, 95, 60, 85, 45, 90, 75, 50, 80, 65, 30, 85, 95, 55, 70].map((h, i) => {
            const barProgress = (i / 16) * 100;
            const isPassed = progress >= barProgress;
            return (
              <span
                key={i}
                style={{ height: `${isPlaying ? (Math.sin((currentTime * 8) + i) * 35 + 55) : h}%` }}
                className={`w-1 rounded-full transition-all duration-150 ${
                  isPassed ? 'bg-[#0A3D42]' : 'bg-[#0A3D42]/30'
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="hidden sm:flex items-center pl-1 border-l border-[#0A3D42]/20">
        <Sparkles className="w-3.5 h-3.5 text-[#0A3D42]/70 animate-pulse" />
      </div>
    </div>
  );
};
