"use client"

import { X, Info } from "lucide-react"

interface IdeologyEffectDetailProps {
  effectName: string;
  onClose: () => void;
}

export function IdeologyEffectDetail({ effectName, onClose }: IdeologyEffectDetailProps) {
  return (
    <div className="absolute inset-0 z-30 bg-zinc-950/95 flex flex-col p-4 animate-in zoom-in-95 duration-200">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-[9px] font-black text-cyan-400 uppercase tracking-widest italic leading-none">{effectName}</h4>
        <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
          <X className="h-3.5 w-3.5 text-zinc-500 hover:text-white" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/15 blur-xl rounded-full"></div>
          <div className="relative p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 shadow-xl">
            <Info className="h-7 w-7 text-cyan-400" />
          </div>
        </div>
        <div className="space-y-1.5 max-w-[180px]">
          <h5 className="text-[16px] font-black text-white italic uppercase tracking-tighter leading-tight drop-shadow-sm">{effectName}</h5>
          <div className="h-px w-8 bg-zinc-800 mx-auto"></div>
          <p className="text-[10px] text-zinc-500 font-medium leading-relaxed italic font-sans uppercase tracking-[0.1em]">Analisis mendalam mengenai implikasi politik dan fundamental ideologi dari efek ini sedang dalam tahap pengembangan.</p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="mt-2 w-full py-2.5 bg-zinc-900/50 hover:bg-zinc-800 border border-white/5 rounded-xl text-[9px] font-black text-white uppercase tracking-[0.2em] transition-all cursor-pointer active:scale-95 shadow-lg"
      >
        Kembali
      </button>
    </div>
  );
}
