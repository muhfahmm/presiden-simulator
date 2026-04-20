"use client"

import React, { useState } from "react"
import { X, Sword, Anchor, Plane, Swords, TrendingUp, TrendingDown, Target, ShieldAlert, Info, Zap } from "lucide-react"
import { calculateTotalMilitaryPower } from "../../../../2_navigasi_menu/2_navigasi_bawah/4_pertahanan/3_armada_militer/kekuatanmiliter"

interface PerbandinganBantuanProps {
  isOpen: boolean
  onClose: () => void
  playerCountry: string
  targetCountry: string
  playerArmada: any
  targetArmada: any
  selection: Record<string, number>
}

export function PerbandinganBantuan({ 
  isOpen, onClose, playerCountry, targetCountry, playerArmada, targetArmada, selection 
}: PerbandinganBantuanProps) {
  if (!isOpen || !playerArmada || !targetArmada) return null

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  // Calculate Player Power
  const playerPower = calculateTotalMilitaryPower(playerArmada)

  // Calculate Current Target Power
  const targetCurrentPower = calculateTotalMilitaryPower(targetArmada)

  // Calculate Projected Target Power (After Aid)
  const projectedTargetArmada = JSON.parse(JSON.stringify(targetArmada))
  Object.entries(selection).forEach(([unit, count]) => {
    if (count <= 0) return
    // Find category for the unit
    if (projectedTargetArmada.darat?.[unit] !== undefined) projectedTargetArmada.darat[unit] += count
    else if (projectedTargetArmada.laut?.[unit] !== undefined) projectedTargetArmada.laut[unit] += count
    else if (projectedTargetArmada.udara?.[unit] !== undefined) projectedTargetArmada.udara[unit] += count
  })
  
  const targetProjectedPower = calculateTotalMilitaryPower(projectedTargetArmada)

  const comparisonItems = [
    { id: 'total', label: "Total Kekuatan", user: playerPower.total, target: targetCurrentPower.total, projected: targetProjectedPower.total, icon: Swords, color: "rose" },
    { id: 'darat', label: "Armada Darat", user: playerPower.darat, target: targetCurrentPower.darat, projected: targetProjectedPower.darat, icon: Sword, color: "amber" },
    { id: 'laut', label: "Armada Laut", user: playerPower.laut, target: targetCurrentPower.laut, projected: targetProjectedPower.laut, icon: Anchor, color: "cyan" },
    { id: 'udara', label: "Armada Udara", user: playerPower.udara, target: targetProjectedPower.udara, projected: targetProjectedPower.udara, icon: Plane, color: "violet" },
  ]

  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl z-[3000] flex items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-300">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[3rem] w-full max-w-4xl max-h-full overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.9)] flex flex-col relative text-sans">
        
        {/* Header */}
        <div className="px-10 py-8 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rose-500/10 rounded-2xl border border-rose-500/20 text-rose-500">
              <Swords size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight italic uppercase leading-none">Analisis Kekuatan Perang</h2>
              <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em] mt-2">Dampak Strategis Bantuan Militer</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer active:scale-95">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar space-y-12">
          
          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Player Country */}
            <div className="flex flex-col items-center gap-4 p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[32px] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={120} className="text-emerald-500" />
               </div>
               <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-2 border border-emerald-500/30 px-4 py-1 rounded-full">Kapasitas Nasional</span>
               <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter text-center leading-none">{playerCountry}</h3>
               <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-5xl font-black text-white tracking-tighter tabular-nums">{playerPower.total.toLocaleString()}</span>
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest leading-none">Power Score</span>
               </div>
            </div>

            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center">
              <div className="w-16 h-16 bg-zinc-950 border-4 border-zinc-900 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-2xl font-black text-rose-500 italic">VS</span>
              </div>
            </div>

            {/* Target Country */}
            <div className="flex flex-col items-center gap-4 p-8 bg-rose-500/5 border border-rose-500/20 rounded-[32px] relative overflow-hidden group">
               <div className="absolute top-0 left-0 p-4 opacity-10 group-hover:scale-110 transition-transform -scale-x-100 text-rose-500">
                  <Target size={120} />
               </div>
               <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em] mb-2 border border-rose-500/30 px-4 py-1 rounded-full leading-none">{targetCountry}</span>
               <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter text-center leading-none">Analisis Target</h3>
               <div className="flex items-baseline gap-2 mt-4">
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-black text-white tracking-tighter tabular-nums leading-none">{targetCurrentPower.total.toLocaleString()}</span>
                    {targetProjectedPower.total > targetCurrentPower.total && (
                      <span className="text-emerald-400 text-[10px] font-black animate-pulse mt-1 tracking-tighter uppercase">+{(targetProjectedPower.total - targetCurrentPower.total).toLocaleString()} Projection</span>
                    )}
                  </div>
                  <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest leading-none">Power Score</span>
               </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="space-y-6">
            {comparisonItems.map((item) => {
              const total = item.user + item.projected || 1
              const userWidth = (item.user / total) * 100
              const targetWidth = (item.target / total) * 100
              const projectedExtraWidth = ((item.projected - item.target) / total) * 100
              
              return (
                <div key={item.id} className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-[2.5rem] hover:bg-zinc-800/40 transition-all">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl bg-zinc-950 border border-zinc-800`}>
                        <item.icon size={20} className={item.color === 'rose' ? 'text-rose-500' : item.color === 'amber' ? 'text-amber-500' : item.color === 'cyan' ? 'text-cyan-500' : 'text-violet-500'} />
                      </div>
                      <span className="text-xl font-black text-white uppercase italic tracking-tighter leading-none">{item.label}</span>
                    </div>

                    <div className="flex items-center gap-4">
                       {item.projected > item.target && (
                         <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
                            <Zap size={14} className="text-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Impact +{((item.projected - item.target) / (item.target || 1) * 100).toFixed(1)}%</span>
                         </div>
                       )}
                       {item.user >= item.projected ? (
                          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2 border border-emerald-500/20 px-4 py-2 rounded-full bg-emerald-500/5">
                            <TrendingUp size={14} /> Unggul
                          </span>
                       ) : (
                          <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest flex items-center gap-2 border border-rose-500/20 px-4 py-2 rounded-full bg-rose-500/5">
                            <TrendingDown size={14} /> Inferior
                          </span>
                       )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-4 w-full bg-zinc-950 rounded-full border border-zinc-800 overflow-hidden flex relative">
                      {/* Player Portion */}
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-1000" style={{ width: `${userWidth}%` }} />
                      
                      {/* Target Original Portion */}
                      <div className="h-full bg-rose-600 transition-all duration-1000" style={{ width: `${targetWidth}%` }} />

                      {/* Aid Impact (Projected) */}
                      <div className="h-full bg-emerald-400 animate-pulse transition-all duration-1000" style={{ width: `${projectedExtraWidth}%` }} />
                    </div>

                    <div className="flex items-center justify-between px-2">
                       <div className="flex flex-col">
                          <span className="text-[10px] font-semibold text-emerald-500 uppercase tracking-widest leading-none mb-1">{playerCountry}</span>
                          <span className="text-lg font-black text-white tabular-nums leading-none">{item.user.toLocaleString()}</span>
                       </div>
                       <div className="flex flex-col items-end">
                          <span className="text-[10px] font-semibold text-rose-500 uppercase tracking-widest leading-none mb-1">{targetCountry}</span>
                          <div className="flex items-baseline gap-2">
                             <span className="text-lg font-black text-white tabular-nums leading-none">{item.projected.toLocaleString()}</span>
                             {item.projected > item.target && (
                               <span className="text-[10px] font-bold text-emerald-400 tabular-nums">+{ (item.projected - item.target).toLocaleString() }</span>
                             )}
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Strategic Insight */}
          <div className="p-8 rounded-[3rem] bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-6">
            <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl">
              <Info size={32} />
            </div>
            <div>
              <h4 className="text-xl font-black uppercase italic text-emerald-400 leading-none mb-1">Strategic Insight</h4>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
                Bantuan militer ini akan meningkatkan kapasitas pertahanan {targetCountry} sebesar <span className="text-white">+{( (targetProjectedPower.total - targetCurrentPower.total) / (targetCurrentPower.total || 1) * 100).toFixed(1)}%</span>. Ini secara signifikan merubah keseimbangan kekuatan reguler di kawasan.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-8 border-t border-zinc-800/50 bg-zinc-900/30 shrink-0">
          <button 
            onClick={onClose}
            className="w-full py-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-800 font-black uppercase tracking-[0.3em] transition-all cursor-pointer group flex items-center justify-center gap-3 active:scale-95 shadow-xl"
          >
            Kembali ke Pengiriman
          </button>
        </div>
      </div>
    </div>
  )
}
