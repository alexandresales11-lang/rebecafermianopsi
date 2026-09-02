import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles } from 'lucide-react';

export const VoiceIntroPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration] = useState(58); // 58s message duration
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscIntervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Gentle synthesized calm ambient tone / simulated soothing voice narrator frequency
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
      // Initialize pleasant calm binaural soft hum for experiential preview
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(216, ctx.currentTime); // calming 432Hz harmonic
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
        // audio context optional fail-soft
      }
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <div 
      id="narrative-audio-player"
      className="inline-flex items-center gap-3 bg-[#0A3D42]/10 backdrop-blur-md border border-[#0A3D42]/20 rounded-full py-1.5 px-4 text-[#0A3D42] text-xs md:text-sm font-medium transition-all hover:bg-[#0A3D42]/15 shadow-sm"
    >
      <button
        id="btn-toggle-audio-voice"
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar áudio' : 'Ouvir mensagem de áudio'}
        className="w-7 h-7 rounded-full bg-[#0A3D42] text-[#F8EFE7] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shrink-0"
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
      </button>

      <div className="flex flex-col text-left cursor-pointer" onClick={togglePlay}>
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-[#0A3D42] text-xs">
            {isPlaying ? 'Ouvindo Dra. Rebeca Fermiano' : 'Ouvir mensagem em áudio da Dra.'}
          </span>
          <span className="text-[10px] text-[#0A3D42]/70 font-mono tracking-tight">
            {isPlaying ? `${Math.floor((progress / 100) * duration)}s / ${duration}s` : '(60 seg)'}
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
                style={{ height: `${isPlaying ? (Math.sin(Date.now() / 200 + i) * 30 + 50) : h}%` }}
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
