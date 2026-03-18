"use client"

import { X, FileText, TrendingUp, Wallet, ShieldCheck, Scale, Gavel, Coins } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PajakModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const taxItems = [
    { label: "Pajak Penghasilan (PPh)", value: "Rp 120 T", rate: "15-35%", color: "text-green-400" },
    { label: "Pajak Korporasi", value: "Rp 85 T", rate: "22%", color: "text-cyan-400" },
    { label: "Cukai & Bea Masuk", value: "Rp 30 T", rate: "Varies", color: "text-amber-400" },
    { label: "PPN & PPnBM", value: "Rp 55 T", rate: "11%", color: "text-purple-400" }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-xl">
              <FileText className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Manajemen Pajak</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Taxation & Revenue Center</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {taxItems.map((tax, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl group hover:border-green-500/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter mb-1">Kategori</span>
                    <h3 className="text-sm font-bold text-zinc-200">{tax.label}</h3>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-800 ${tax.color}`}>{tax.rate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coins className={`h-5 w-5 ${tax.color} opacity-50`} />
                  <span className="text-xl font-black text-white">{tax.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-600/10 to-transparent border border-green-500/20 p-6 rounded-2xl flex items-center justify-between gap-6">
            <div className="flex gap-4 items-center">
              <div className="p-4 bg-green-500/10 rounded-2xl border border-green-500/20">
                <Scale className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">Keadilan Fiskal</h3>
                <p className="text-xs text-zinc-400 max-w-[300px]">Sesuaikan rasio pajak untuk menyeimbangkan pendapatan negara dan daya beli masyarakat.</p>
              </div>
            </div>
            <button className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-green-900/20">
              Reformasi Pajak →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
