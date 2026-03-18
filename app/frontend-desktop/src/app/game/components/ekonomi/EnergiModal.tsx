"use client"

import { X, Zap, Droplets, Wind, Sun, Battery, Activity, AlertTriangle, TrendingUp } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnergiModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const energyStats = [
    { label: "Total Kapasitas", value: "45,000 MW", icon: Battery, color: "text-amber-500" },
    { label: "Beban Puncak", value: "38,500 MW", icon: Activity, color: "text-cyan-500" },
    { label: "Cadangan Daya", value: "15%", icon: Zap, color: "text-green-500" }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-xl">
              <Zap className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Statistik Energi</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Power & Utilities</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {energyStats.map((stat, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-2 group hover:border-amber-500/30 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                  <stat.icon className={`h-4 w-4 ${stat.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
                </div>
                <span className="text-xl font-black text-white">{stat.value}</span>
                <div className="h-1 w-full bg-zinc-800 rounded-full mt-2 overflow-hidden">
                  <div className={`h-full ${stat.color.replace('text', 'bg')} w-[85%] shadow-[0_0_8px_rgba(245,158,11,0.2)]`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-3xl">
              <h3 className="text-sm font-bold text-zinc-200 mb-6 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-amber-400" /> Bauran Energi Nasional
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Batu Bara", value: "55%", icon: Droplets, color: "text-zinc-400" },
                  { label: "Solar (PLTS)", value: "15%", icon: Sun, color: "text-amber-400" },
                  { label: "Angin (PLTB)", value: "10%", icon: Wind, color: "text-cyan-400" },
                  { label: "Nuklir (PLTN)", value: "20%", icon: Zap, color: "text-blue-400" }
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50 flex flex-col gap-1 items-center justify-center">
                    <item.icon className={`h-5 w-5 ${item.color} mb-1`} />
                    <span className="text-xs font-black text-white">{item.value}</span>
                    <span className="text-[9px] font-bold text-zinc-500 uppercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-600/10 to-transparent border border-amber-500/10 p-6 rounded-3xl flex flex-col justify-center gap-4 text-center">
              <div className="p-4 bg-amber-500/10 rounded-full w-max mx-auto border border-amber-500/20">
                <AlertTriangle className="h-8 w-8 text-amber-400 animate-pulse" />
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-tight">Strategi Kemandirian Energi</h3>
              <p className="text-xs text-zinc-400 max-w-[250px] mx-auto">Tingkatkan investasi pada EBT untuk mengurangi ketergantungan impor energi fosil.</p>
              <button className="px-8 py-3 bg-zinc-900 border border-amber-500/30 hover:bg-zinc-800 text-amber-400 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all">
                Proyek Strategis EBT →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
