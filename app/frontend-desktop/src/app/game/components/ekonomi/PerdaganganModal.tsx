"use client"

import { X, ArrowRightLeft, TrendingUp, TrendingDown, Globe, Ship, Landmark } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PerdaganganModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const tradeData = [
    { label: "Ekspor Komoditas", value: "Rp 450 T", trend: "up", percentage: "+12%" },
    { label: "Impor Bahan Baku", value: "Rp 380 T", trend: "down", percentage: "-5%" },
    { label: "Neraca Perdagangan", value: "Rp 70 T", trend: "up", percentage: "Surplus" }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl">
              <ArrowRightLeft className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Perdagangan Internasional</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Global Trade & Commerce</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {tradeData.map((data, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{data.label}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-white">{data.value}</span>
                  <span className={`text-[10px] font-bold ${data.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {data.percentage}
                  </span>
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded-full mt-2 overflow-hidden">
                  <div className={`h-full ${data.trend === 'up' ? 'bg-green-500' : 'bg-red-500'} w-2/3 shadow-[0_0_8px_rgba(34,197,94,0.3)]`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-zinc-200 mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-400" /> Mitra Dagang Utama
              </h3>
              <div className="space-y-4">
                {["Tiongkok", "Amerika Serikat", "Uni Eropa", "ASEAN"].map((mitra, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">{mitra}</span>
                    <div className="flex items-center gap-3 flex-1 px-4">
                      <div className="h-1.5 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500/50 group-hover:bg-blue-500 transition-all" style={{ width: `${85 - i * 15}%` }}></div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-zinc-500">{(25 - i * 4)}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-2xl flex flex-col justify-center items-center text-center gap-4">
              <div className="p-4 bg-blue-500/10 rounded-full">
                <Ship className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">Kelola Kebijakan Ekspor</h3>
                <p className="text-xs text-zinc-500 max-w-[200px]">Atur tarif bea cukai dan kuota perdagangan internasional.</p>
              </div>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-blue-900/20">
                Buka Terminal →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
