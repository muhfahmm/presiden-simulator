"use client"

import { X, Gift, Heart, Users, TrendingUp, DollarSign, Zap } from "lucide-react";

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAction: (title: string, impact: number, cost: number) => void;
}

export default function NaikkanKepuasanModal({ isOpen, onClose, onAction }: ActionModalProps) {
  if (!isOpen) return null;

  const programs = [
    { 
      id: 1, 
      title: "Bantuan Sembako Gratis", 
      desc: "Distribusikan bahan pangan pokok ke wilayah padat penduduk.",
      impact: 5, 
      cost: 50, 
      icon: Gift, 
      color: "text-amber-400",
      bg: "bg-amber-500/10"
    },
    { 
      id: 2, 
      title: "Pesta Rakyat Nasional", 
      desc: "Selenggarakan konser dan festival budaya di seluruh provinsi.",
      impact: 8, 
      cost: 120, 
      icon: Heart, 
      color: "text-rose-400",
      bg: "bg-rose-500/10"
    },
    { 
      id: 3, 
      title: "Subsidi Bahan Pokok", 
      desc: "Menurunkan harga pasar melalui intervensi anggaran negara.",
      impact: 12, 
      cost: 350, 
      icon: DollarSign, 
      color: "text-emerald-400",
      bg: "bg-emerald-500/10"
    },
    { 
      id: 4, 
      title: "Program Indonesia Terang", 
      desc: "Peralihan energi bersih dan murah untuk daerah terpencil.",
      impact: 15, 
      cost: 750, 
      icon: Zap, 
      color: "text-cyan-400",
      bg: "bg-cyan-500/10"
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        
        {/* Header Decor */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-zinc-800/50">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <TrendingUp className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Program Kesejahteraan</h2>
              <p className="text-sm text-zinc-500 font-medium">Investasi Sosial & Kesejahteraan</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-xl transition-colors text-zinc-500 hover:text-white cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Action List */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto no-scrollbar">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <button
                key={prog.id}
                onClick={() => onAction(prog.title, prog.impact, prog.cost)}
                className="w-full flex items-center gap-4 p-5 rounded-2xl bg-zinc-950/50 border border-zinc-800/80 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all group active:scale-[0.98] text-left cursor-pointer"
              >
                <div className={`h-14 w-14 shrink-0 rounded-xl ${prog.bg} flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700 transition-colors`}>
                  <Icon className={`h-7 w-7 ${prog.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-zinc-100 group-hover:text-white transition-colors truncate">{prog.title}</h3>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed">{prog.desc}</p>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <Heart className="h-3 w-3 text-emerald-400" />
                      <span className="text-[11px] font-bold text-emerald-400">+{prog.impact}% Puas</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                      <DollarSign className="h-3 w-3 text-rose-400" />
                      <span className="text-[11px] font-bold text-rose-400">-{prog.cost} T</span>
                    </div>
                  </div>
                </div>
                <div className="h-8 w-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-600 group-hover:text-blue-400 group-hover:border-blue-400/50 transition-all">
                  <X className="h-4 w-4 rotate-45" />
                </div>
              </button>
            )
          })}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-zinc-800/50 bg-zinc-900/50">
          <button 
            onClick={onClose}
            className="w-full py-4 text-zinc-400 hover:text-white font-bold rounded-2xl transition-all cursor-pointer"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
