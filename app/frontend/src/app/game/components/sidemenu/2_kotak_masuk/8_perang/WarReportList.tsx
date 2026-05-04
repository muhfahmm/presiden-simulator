"use client";

import React, { useEffect, useState } from 'react';
import { Target, Map, ChevronRight, AlertCircle, Sword } from 'lucide-react';
import { warStorage, ActiveInvasion } from '../../../2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/1_misi_serangan/ai_war_logic/WarStorage';

export function WarReportList() {
  const [invasions, setInvasions] = useState<ActiveInvasion[]>([]);

  useEffect(() => {
    const update = () => {
      setInvasions([...warStorage.getInvasions()]);
    };
    update();
    window.addEventListener('WAR_STORAGE_UPDATED', update);
    return () => window.removeEventListener('WAR_STORAGE_UPDATED', update);
  }, []);

  if (invasions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-zinc-600">
        <Sword size={48} className="opacity-20 mb-4" />
        <p className="text-sm font-bold uppercase tracking-widest text-center px-10">
          Tidak ada operasi militer aktif yang sedang berlangsung
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Tombol Pembersih Data Lama */}
      <div className="flex justify-end px-2">
        <button 
          onClick={() => {
            if(confirm("Hapus semua data perang lama? Ini akan membersihkan bug 'Penyerang'.")) {
              warStorage.clear();
              location.reload();
            }
          }}
          className="text-[9px] font-black text-rose-500/50 hover:text-rose-500 uppercase tracking-widest border border-rose-500/20 px-3 py-1 rounded-full transition-all"
        >
          Bersihkan Data Lama (Fix Bug)
        </button>
      </div>

      {invasions.map((inv, index) => (
        <div 
          key={`${inv.id}-${index}`}
          className="bg-zinc-900/40 border border-zinc-800/50 rounded-[32px] p-6 hover:border-indigo-500/30 transition-all overflow-hidden relative"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/10 rounded-xl">
                <Target className="text-indigo-400" size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest italic leading-none">
                  {inv.arrived ? 'Medan Pertempuran' : 'Status Invasi'}
                </p>
                <p className="text-sm font-bold text-white mt-1 uppercase tracking-tight">
                  {inv.source} ⚔️ {inv.target}
                </p>
              </div>
            </div>
            {!inv.arrived && (
              <div className="text-right">
                <p className="text-[10px] font-bold text-zinc-600 uppercase">Perjalanan</p>
                <p className="text-lg font-black text-white italic tabular-nums leading-none">
                  {Math.floor(inv.progress * 100)}%
                </p>
              </div>
            )}
          </div>

          {/* Conditional Rendering: Travel Progress or Battle Health Bars */}
          {!inv.arrived ? (
            <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-2">
              <div 
                className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000"
                style={{ width: `${inv.progress * 100}%` }}
              />
            </div>
          ) : (
            <div className="space-y-4">
              {/* Attacker Health Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
                  <span className="text-zinc-500">Pasukan {inv.source}</span>
                  <span className="text-white italic">{inv.currentAttackerPower?.toLocaleString()} PWR</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)] transition-all duration-500"
                    style={{ width: `${((inv.currentAttackerPower || 0) / (inv.maxAttackerPower || 1)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Defender Health Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
                  <span className="text-zinc-500">Pertahanan {inv.target}</span>
                  <span className="text-white italic">{inv.currentDefenderPower?.toLocaleString()} PWR</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.3)] transition-all duration-500"
                    style={{ width: `${((inv.currentDefenderPower || 0) / (inv.maxDefenderPower || 1)) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Action Button */}
          <button 
            onClick={() => {
              window.dispatchEvent(new CustomEvent('OPEN_WAR_REPORT', { 
                detail: inv 
              }));
            }}
            className="mt-6 w-full py-3 bg-indigo-500 hover:bg-indigo-400 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Map size={14} />
            Lihat Laporan Medan Tempur
            <ChevronRight size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
