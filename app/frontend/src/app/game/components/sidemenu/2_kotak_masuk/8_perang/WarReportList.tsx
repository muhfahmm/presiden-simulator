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
      {invasions.map((inv, index) => (
        <div 
          key={`${inv.id}-${index}`}
          className="bg-zinc-900/40 border border-zinc-800/50 rounded-[32px] p-6 hover:border-indigo-500/30 transition-all overflow-hidden relative"
        >
          {/* Progress Bar Background */}
          <div className="absolute bottom-0 left-0 h-1 bg-indigo-500/10 w-full">
            <div 
              className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000"
              style={{ width: `${inv.progress * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/10 rounded-xl">
                <Target className="text-indigo-400" size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest italic leading-none">
                  Status Invasi
                </p>
                <p className="text-sm font-bold text-white mt-1 uppercase tracking-tight">
                  {inv.source} ⚔️ {inv.target}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-zinc-600 uppercase">Progres</p>
              <p className="text-lg font-black text-white italic tabular-nums leading-none">
                {Math.floor(inv.progress * 100)}%
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-black/20 rounded-2xl p-4 border border-zinc-800/30">
              <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1">Estimasi Tiba</p>
              <p className="text-xs font-bold text-white">{inv.path.estimatedTime}</p>
            </div>
            <div className="bg-black/20 rounded-2xl p-4 border border-zinc-800/30">
              <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1">Kekuatan Armada</p>
              <p className="text-xs font-bold text-white">{inv.units.length} Divisi</p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle size={14} className="text-amber-500" />
              <span className="text-[10px] font-bold text-amber-500/80 uppercase italic">
                {inv.arrived ? 'PASUKAN TELAH TIBA DI TARGET' : 'DALAM PERJALANAN TAKTIS'}
              </span>
            </div>
            <button className="flex items-center gap-1 text-[10px] font-black text-zinc-400 hover:text-white transition-colors uppercase tracking-widest italic group">
              Lihat di Peta <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
