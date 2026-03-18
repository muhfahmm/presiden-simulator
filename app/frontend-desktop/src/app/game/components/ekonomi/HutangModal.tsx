"use client"

import { X, CreditCard, TrendingDown, Landmark, ShieldAlert, BadgeInfo, ArrowDownToLine, Wallet } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HutangModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const debtStats = [
    { label: "Hutang Luar Negeri", value: "Rp 8,500 T", status: "Critical", color: "text-red-400" },
    { label: "Bunga Tahunan", value: "Rp 540 T", status: "Steady", color: "text-amber-400" },
    { label: "Rasio Hutang/PDB", value: "38.2%", status: "Safe Limit", color: "text-green-400" }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-xl">
              <CreditCard className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Pinjaman & Hutang</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Debt & Financing</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {debtStats.map((stat, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group">
                <div className="flex flex-col gap-1 relative z-10">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-wider">{stat.label}</span>
                  <span className="text-xl font-black text-white">{stat.value}</span>
                  <span className={`text-[9px] font-bold mt-2 ${stat.color} uppercase`}>{stat.status}</span>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                  <BadgeInfo className="h-12 w-12 text-zinc-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-zinc-200 mb-4 flex items-center gap-2">
                <Landmark className="h-4 w-4 text-red-400" /> Pemberi Pinjaman
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Bank Dunia", amount: "Rp 1,200 T" },
                  { name: "IMF", amount: "Rp 850 T" },
                  { name: "Bilateral (Tiongkok/Jepang)", amount: "Rp 4,500 T" }
                ].map((lender, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-zinc-800/50 last:border-0">
                    <span className="text-xs text-zinc-400 font-medium">{lender.name}</span>
                    <span className="text-xs font-black text-zinc-200">{lender.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-2xl flex flex-col justify-center gap-4">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-red-500/10 rounded-xl">
                  <ArrowDownToLine className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-tight leading-tight">Pengajuan Pinjaman Baru</h3>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed">Ajukan pendanaan darurat atau obligasi nasional untuk membiayai proyek strategis.</p>
              <button className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-red-400 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all border border-red-500/20">
                Penerbitan Surat Utang →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
