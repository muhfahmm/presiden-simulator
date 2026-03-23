"use client"

import { X, BarChart3, TrendingUp, TrendingDown, Landmark, PieChart, ArrowUpCircle, ArrowDownCircle } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BudgetTreasuryModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const budgetStats = [
    { label: "Penerimaan Negara", value: "1,450", trend: "up", icon: ArrowUpCircle, color: "text-green-500" },
    { label: "Belanja Negara", value: "1,680", trend: "up", icon: ArrowDownCircle, color: "text-red-500" },
    { label: "Kurs / USD", value: "15,200", trend: "down", icon: Landmark, color: "text-blue-500" }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-xl">
              <BarChart3 className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Anggaran Nasional</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Treasury & Fiscal Policy</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {budgetStats.map((stat, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-4 group">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                    <stat.icon className={`h-4 w-4 ${stat.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <span className="text-xl font-black text-white">{stat.value}</span>
                </div>
                <div className="flex items-center gap-2">
                  {stat.trend === "up" ? <TrendingUp className={`h-3 w-3 ${stat.color}`} /> : <TrendingDown className={`h-3 w-3 ${stat.color}`} />}
                  <span className={`text-[10px] font-bold ${stat.color}`}>{stat.trend === "up" ? "+3.5%" : "-1.2%"} per Bulan</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900/20 border border-zinc-800/50 p-8 rounded-3xl flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white uppercase tracking-tight flex items-center gap-2">
                <PieChart className="h-5 w-5 text-purple-400" /> Alokasi Belanja Utama
              </h3>
              <span className="text-[10px] font-bold text-zinc-500">FISCAL YEAR 2026/2027</span>
            </div>
            
            <div className="space-y-6">
              {[
                { label: "Infrastruktur", percentage: 35, color: "bg-blue-500" },
                { label: "Pendidikan & Kesehatan", percentage: 25, color: "bg-green-500" },
                { label: "Pertahanan & Keamanan", percentage: 20, color: "bg-red-500" },
                { label: "Subsidi Energi", percentage: 20, color: "bg-amber-500" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 group">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[11px] font-bold text-zinc-400 group-hover:text-zinc-200 transition-colors">{item.label}</span>
                    <span className="text-xs font-black text-white">{item.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden p-[1px]">
                    <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
