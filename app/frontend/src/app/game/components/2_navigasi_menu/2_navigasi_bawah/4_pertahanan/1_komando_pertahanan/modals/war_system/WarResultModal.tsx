"use client"

import { useState, useEffect } from "react"
import { X, Swords, Trophy, ShieldAlert, Skull, TrendingDown, TrendingUp } from "lucide-react"
import { WarDeclaration, WarOutcome } from "./warTypes"

interface WarResultProps {
  isOpen: boolean
  onClose: () => void
  war: WarDeclaration | null
  outcome: WarOutcome | null
  result: any | null
}

export default function WarResultModal({ isOpen, onClose, war, outcome, result }: WarResultProps) {
  if (!isOpen || !war) return null

  const isVictory = outcome === 'victory'
  const themeColor = isVictory ? 'emerald' : 'rose'

  const attackerCasualties = result?.casualties?.attacker || war?.casualties?.attacker || {}
  const defenderCasualties = result?.casualties?.defender || war?.casualties?.defender || {}

  const casualtyEntries = (casualties: Record<string, number>) => {
    return Object.entries(casualties)
      .filter(([_, v]) => v > 0)
      .map(([key, value]) => ({
        label: key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        value: value as number
      }))
  }

  return (
    <div className="absolute inset-0 bg-black/85 backdrop-blur-xl z-[300] flex items-center justify-center p-4 animate-in fade-in duration-500">
      <div className={`bg-zinc-950 border ${isVictory ? 'border-emerald-500/30' : 'border-rose-500/30'} rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col relative`}>
        
        {/* Header with Victory/Defeat Banner */}
        <div className={`px-8 py-8 ${isVictory ? 'bg-emerald-500/5' : 'bg-rose-500/5'} border-b ${isVictory ? 'border-emerald-500/20' : 'border-rose-500/20'} text-center relative overflow-hidden`}>
          {/* Animated background glow */}
          <div className={`absolute inset-0 ${isVictory ? 'bg-gradient-to-b from-emerald-500/10 to-transparent' : 'bg-gradient-to-b from-rose-500/10 to-transparent'} animate-pulse`} />
          
          <div className="relative z-10">
            <div className={`inline-flex p-4 rounded-3xl ${isVictory ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-rose-500/10 border border-rose-500/20'} mb-4`}>
              {isVictory ? <Trophy size={40} className="text-emerald-500" /> : <ShieldAlert size={40} className="text-rose-500" />}
            </div>
            
            <h2 className={`text-3xl font-black uppercase italic tracking-tight ${isVictory ? 'text-emerald-400' : 'text-rose-400'}`}>
              {isVictory ? "KEMENANGAN!" : "KEKALAHAN"}
            </h2>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em] mt-2">
              {war.attacker} vs {war.defender}
            </p>
          </div>
        </div>

        {/* Battle Summary */}
        <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Power Comparison */}
          {result && (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-4 text-center">
                <span className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.3em]">Kekuatan Efektif</span>
                <div className="text-2xl font-black text-white mt-1 tabular-nums">
                  {(result.attacker_power_effective || war.attackerPower).toLocaleString()}
                </div>
                <span className="text-[10px] font-bold text-zinc-500">{war.attacker}</span>
              </div>
              <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-4 text-center">
                <span className="text-[9px] font-black text-rose-500 uppercase tracking-[0.3em]">Kekuatan Efektif</span>
                <div className="text-2xl font-black text-white mt-1 tabular-nums">
                  {(result.defender_power_effective || war.defenderPower).toLocaleString()}
                </div>
                <span className="text-[10px] font-bold text-zinc-500">{war.defender}</span>
              </div>
            </div>
          )}

          {/* Casualties */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <Skull size={14} /> Korban Perang
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Attacker Casualties */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4">
                <span className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.2em]">Kerugian Anda</span>
                <div className="mt-3 space-y-2">
                  {casualtyEntries(attackerCasualties).length > 0 ? (
                    casualtyEntries(attackerCasualties).map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-zinc-400">{label}</span>
                        <span className="text-[11px] font-black text-rose-400 tabular-nums">-{value}</span>
                      </div>
                    ))
                  ) : (
                    <span className="text-[10px] text-zinc-600">Tidak ada korban</span>
                  )}
                </div>
              </div>
              
              {/* Defender Casualties */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4">
                <span className="text-[9px] font-black text-rose-500 uppercase tracking-[0.2em]">Kerugian Musuh</span>
                <div className="mt-3 space-y-2">
                  {casualtyEntries(defenderCasualties).length > 0 ? (
                    casualtyEntries(defenderCasualties).map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-zinc-400">{label}</span>
                        <span className="text-[11px] font-black text-emerald-400 tabular-nums">-{value}</span>
                      </div>
                    ))
                  ) : (
                    <span className="text-[10px] text-zinc-600">Tidak ada korban</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Relation Impact */}
          {result?.relation_impact && (
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4 flex items-center gap-4">
              <TrendingDown size={20} className="text-amber-500" />
              <div>
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Dampak Hubungan</span>
                <p className="text-sm font-bold text-white mt-1">
                  Hubungan diplomatik dengan {war.defender} menurun <span className="text-rose-400">{result.relation_impact}%</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-zinc-800/50 bg-zinc-900/30">
          <button
            onClick={onClose}
            className={`w-full py-4 rounded-2xl ${isVictory ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-rose-600 hover:bg-rose-500'} text-white font-black uppercase tracking-[0.3em] transition-all cursor-pointer shadow-xl active:scale-[0.98] flex items-center justify-center gap-3`}
          >
            <Swords size={18} />
            Tutup Laporan
          </button>
        </div>
      </div>
    </div>
  )
}
