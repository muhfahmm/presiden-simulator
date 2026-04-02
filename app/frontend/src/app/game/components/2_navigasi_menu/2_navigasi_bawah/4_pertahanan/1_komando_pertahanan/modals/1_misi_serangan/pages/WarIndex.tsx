import React from "react";
import { Hammer, X } from "lucide-react";

interface WarIndexProps {
  onClose?: () => void;
}

export default function WarIndex({ onClose }: WarIndexProps) {
  return (
    <div className="absolute inset-0 bg-zinc-950/95 z-[70] flex flex-col items-center justify-center p-8 animate-in fade-in duration-500">
      <div className="max-w-2xl w-full bg-zinc-950 border border-zinc-800 rounded-[40px] p-12 text-center shadow-[0_0_50px_rgba(239,68,68,0.1)] relative overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl text-zinc-500 hover:text-white transition-all active:scale-95 z-[80] group hover:bg-red-500/20 hover:border-red-500/30"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform" />
        </button>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[80px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/5 blur-[80px] translate-y-1/2 -translate-x-1/2 rounded-full" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="p-6 bg-red-600/10 rounded-[30px] border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
            <Hammer className="h-16 w-16 text-red-500 animate-bounce" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">
              Dukungan <span className="text-red-500">Operasi</span>
            </h1>
            <div className="h-1 w-24 bg-red-600 mx-auto rounded-full" />
            <p className="text-xl font-bold text-zinc-400 uppercase tracking-widest">
              Sedang Dalam Pengembangan
            </p>
          </div>

          <p className="text-zinc-500 max-w-md mx-auto text-sm font-medium leading-relaxed">
            Sistem simulasi pertempuran dan manajemen misi sedang dalam tahap sinkronisasi data strategis. Silakan kembali lagi nanti untuk fitur penuh.
          </p>

          <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mt-4">
            <div className="h-full bg-red-600 w-2/3 animate-pulse rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
          </div>
          
          <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em] mt-2">
            Status: Synchronizing Tactical Data...
          </p>
        </div>
      </div>
    </div>
  );
}
