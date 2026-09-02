import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface VoiceIntroBadgeProps {
  className?: string;
}

export const VoiceIntroBadge: React.FC<VoiceIntroBadgeProps> = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration] = useState(58);
  const audioContextRef = useRef<AudioContext | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      startTimeRef.current = Date.now() - (progress / 100) * duration * 1000;
      
      timer = setInterval(() => {
        const elapsed = (Date.now() - startTimeRef.current) / 1000;
        if (elapsed >= duration) {
          setIsPlaying(false);
          setProgress(0);
          clearInterval(timer);
        } else {
          setProgress((elapsed / duration) * 100);
        }
      }, 100);
    } else {
      if (timer) clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, duration]);

  const togglePlay = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(216, ctx.currentTime);
          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();

          setTimeout(() => {
            try {
              gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4);
              setTimeout(() => {
                try {
                  osc.stop();
                  ctx.close();
                } catch (e) {}
              }, 4100);
            } catch (e) {}
          }, 6000);
        }
      } catch (e) {
        // audio context fallback
      }
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <div
      id="voice-intro-badge"
      className={`bg-[#FCF8F4] border border-[#0A3D42]/25 rounded-2xl p-2.5 sm:p-3 shadow-xl flex items-center gap-3 text-[#0A3D42] transition-all hover:shadow-2xl ${className}`}
    >
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
        className="text-left cursor-pointer select-none pr-1"
        onClick={togglePlay}
      >
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-xs sm:text-sm text-[#0A3D42] leading-tight">
            {isPlaying ? 'Ouvindo recado de Rebeca...' : 'Recado de Rebeca para você'}
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#0A3D42]/70 font-mono">
            {isPlaying ? `${Math.floor((progress / 100) * duration)}s` : '• 60s'}
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
                  height: isPlaying ? `${Math.sin(Date.now() / 200 + i) * 30 + 50}%` : `${h}%` 
                }}
                className={`w-1 rounded-full transition-all duration-150 ${
                  isPlaying && isPassed 
                    ? 'bg-[#0A3D42]' 
                    : isPlaying 
                    ? 'bg-[#0A3D42]/40' 
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
