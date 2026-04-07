"use client"

import { X, CheckCircle2, ChevronRight } from "lucide-react"

interface IdeologyInfoOverlayProps {
  ideology: string;
  effects: {
    plus: string[];
    minus: string[];
  };
  onClose: () => void;
  onEffectClick: (effect: string) => void;
}

export function IdeologyInfoOverlay({ ideology, effects, onClose, onEffectClick }: IdeologyInfoOverlayProps) {
  return (
    <div className="absolute inset-0 z-20 bg-zinc-950/98 backdrop-blur-xl p-4 flex flex-col animate-in fade-in zoom-in-95 duration-300">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-[9px] font-black text-cyan-400 uppercase tracking-widest italic leading-none">{ideology} Effects</h4>
        <button onClick={onClose} className="p-1 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
          <X className="h-3.5 w-3.5 text-zinc-500 hover:text-white" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto flex gap-3 pr-1 custom-scrollbar mt-1">
        <div className="flex-1 space-y-1.5">
          {effects.plus.map((eff, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 group/eff cursor-pointer hover:bg-emerald-500/5 p-1.5 -mx-1.5 rounded-lg transition-all"
              onClick={() => onEffectClick(eff)}
            >
              <div className="p-1 bg-emerald-500/10 rounded-md shrink-0 border border-emerald-500/20">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
              </div>
              <span className="text-[12px] font-bold text-zinc-300 leading-tight tracking-tight flex-1 group-hover/eff:text-white transition-colors">{eff}</span>
              <ChevronRight className="h-3 w-3 text-zinc-800 group-hover/eff:text-emerald-500 transition-colors" />
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-1.5 border-l border-white/5 pl-3">
          {effects.minus.map((eff, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 group/eff cursor-pointer hover:bg-rose-500/5 p-1.5 -mx-1.5 rounded-lg transition-all"
              onClick={() => onEffectClick(eff)}
            >
              <div className="p-1 bg-rose-500/10 rounded-md shrink-0 border border-rose-500/20">
                <X className="h-3 w-3 text-rose-500" />
              </div>
              <span className="text-[12px] font-bold text-zinc-300 leading-tight tracking-tight flex-1 group-hover/eff:text-white transition-colors">{eff}</span>
              <ChevronRight className="h-3 w-3 text-zinc-800 group-hover/eff:text-rose-500 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onClose}
        className="mt-3 w-full py-2 bg-cyan-500 text-black rounded-lg text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer shadow-lg active:scale-95"
      >
        Kembali
      </button>
    </div>
  );
}
