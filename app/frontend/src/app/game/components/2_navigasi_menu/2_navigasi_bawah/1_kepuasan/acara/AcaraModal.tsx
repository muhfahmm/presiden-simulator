"use client"

import { useState, useEffect } from "react";
import {
  X, Sparkles, Music, Trophy, Users, ShieldCheck,
  Coins, TrendingUp, Clock, CheckCircle2, AlertCircle, Globe,
  Calendar, BarChart3, History, Eye, Landmark, Ship, Info
} from "lucide-react";
import { DATA_ACARA, acaraStorage, Acara } from "./acaraStorage";
import { happinessStorage } from "../happinessStorage";
import { getStoredGameDate, formatGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";

interface AcaraModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AcaraModal({ isOpen, onClose }: AcaraModalProps) {
  const [selectedAcara, setSelectedAcara] = useState<Acara | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [history, setHistory] = useState(acaraStorage.getHistory());
  const [currentBudget, setCurrentBudget] = useState(budgetStorage.getBudget());
  const gameDate = getStoredGameDate();

  useEffect(() => {
    const handleUpdate = () => {
      setHistory(acaraStorage.getHistory());
      setCurrentBudget(budgetStorage.getBudget());
    };
    window.addEventListener('acara_updated', handleUpdate);
    window.addEventListener('budget_storage_updated', handleUpdate);
    return () => {
      window.removeEventListener('acara_updated', handleUpdate);
      window.removeEventListener('budget_storage_updated', handleUpdate);
    };
  }, []);

  if (!isOpen) return null;

  const handleExecute = (acara: Acara) => {
    const success = acaraStorage.executeAcara(acara.id, gameDate);
    if (success) {
      happinessStorage.addDirectHappiness(
        acara.happinessBoost,
        `Berhasil menyelenggarakan ${acara.name}. Rakyat merasa sangat antusias dan bangga!`
      );
      setSelectedAcara(null);
    }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "Budaya": return <Music size={20} />;
      case "Olahraga": return <Trophy size={20} />;
      case "Sosial": return <Users size={20} />;
      case "Militer": return <ShieldCheck size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  // Filter acara berdasarkan kategori
  const categories = ["Semua", "Budaya", "Olahraga", "Sosial", "Militer"];
  const filteredAcara = selectedCategory && selectedCategory !== "Semua"
    ? DATA_ACARA.filter(a => a.category === selectedCategory)
    : DATA_ACARA;

  return (
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-6">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        {/* Subtle Accents */}
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-600/5 rounded-full blur-[80px]"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <Sparkles className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-none uppercase">Manajemen Perayaan</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">Program Hiburan & Kebudayaan Nasional</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-6 py-2.5 bg-zinc-900/50 border border-zinc-800 rounded-2xl shadow-inner group/budget">
              <div className="p-2 bg-amber-500/10 rounded-xl group-hover/budget:bg-amber-500 group-hover/budget:text-white transition-all">
                <Landmark className="h-4 w-4 text-amber-500 group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none mb-1">Kas Negara</span>
                <span className="text-lg font-black text-white italic tabular-nums leading-none">
                  {currentBudget.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden relative z-10">
          {/* Sidebar - Kategorisasi & Daftar */}
          <div className="w-[340px] border-r border-zinc-800/50 bg-zinc-900/20 flex flex-col p-6 space-y-6 overflow-y-auto no-scrollbar shadow-inner">
            
            <div className="shrink-0 space-y-4">
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] leading-none px-1">Filter Kategori</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border ${(selectedCategory === cat || (!selectedCategory && cat === "Semua"))
                      ? 'bg-zinc-100 text-zinc-950 shadow-lg border-zinc-100 scale-105'
                      : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-300'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 space-y-3">
               <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] leading-none px-1 mb-4">Program Tersedia</h3>
              {filteredAcara.map((acara) => {
                const cooldown = acaraStorage.getCooldownStatus(acara.id, gameDate);
                const active = acaraStorage.getActiveStatus(acara.id, gameDate);
                const isLocked = cooldown.onCooldown;
                const isSelected = selectedAcara?.id === acara.id;

                return (
                  <button
                    key={acara.id}
                    onClick={() => !isLocked && setSelectedAcara(acara)}
                    disabled={isLocked}
                    className={`w-full p-4 rounded-3xl transition-all border group relative overflow-hidden ${isSelected
                      ? 'bg-zinc-800 border-amber-500/30 shadow-xl'
                      : isLocked
                        ? 'opacity-40 cursor-not-allowed border-transparent bg-zinc-900/50'
                        : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 cursor-pointer'
                      }`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`p-3 rounded-2xl text-xl shrink-0 transition-transform duration-500 group-hover:scale-110 ${isSelected
                        ? 'bg-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : 'bg-zinc-950 text-zinc-500 border border-zinc-800'
                        }`}>
                        {acara.icon}
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${isSelected ? 'text-amber-400' : 'text-zinc-500'}`}>
                            {acara.category}
                          </span>
                          {isLocked && <div className="flex items-center gap-1 text-[8px] font-black text-rose-500 uppercase italic">
                            <Clock size={8} /> {cooldown.daysRemaining}d
                          </div>}
                        </div>
                        <h4 className={`text-[13px] font-black leading-tight truncate uppercase italic ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                          {acara.name}
                        </h4>
                        <div className="flex gap-3 text-[9px] mt-2 font-black uppercase italic">
                          <span className={isSelected ? 'text-amber-200' : 'text-zinc-500'}>Rp {acara.cost.toLocaleString()}</span>
                          <span className="text-emerald-400">+{acara.happinessBoost}%</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Area Utama - Detail Acara */}
          <div className="flex-1 overflow-y-auto p-12 no-scrollbar bg-zinc-950/20 relative z-10">
            <div className="max-w-4xl mx-auto">

              {selectedAcara ? (() => {
                const activeStatus = acaraStorage.getActiveStatus(selectedAcara.id, gameDate);
                const canAfford = currentBudget >= selectedAcara.cost;

                return (
                  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {/* Header Detail */}
                    <div className="relative p-12 rounded-[3rem] bg-zinc-900/50 border border-zinc-800 overflow-hidden group shadow-2xl">
                       <div className="absolute -right-12 -top-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
                         {selectedAcara.icon}
                       </div>
                       
                       <div className="relative flex flex-col items-center text-center space-y-6">
                          <div className={`px-6 py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.3em] italic ${activeStatus.isActive ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 animate-pulse' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'}`}>
                            {activeStatus.isActive ? "Program Sedang Berlangsung" : "Kebijakan Hiburan Nasional"}
                          </div>
                          
                          <div className="space-y-4">
                            <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
                              {selectedAcara.name}
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed font-medium italic max-w-2xl mx-auto">
                              "{selectedAcara.description}"
                            </p>
                          </div>
                       </div>
                    </div>

                    {/* Stats Grid Premium */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col items-center gap-2 shadow-xl">
                        <div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-800 group-hover:scale-110 transition-transform text-zinc-500">
                          <Coins size={24} />
                        </div>
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mt-2">Kebutuhan Anggaran</span>
                        <div className={`text-4xl font-black italic tracking-tighter ${canAfford ? 'text-white' : 'text-rose-500'}`}>
                          Rp {selectedAcara.cost.toLocaleString()}
                        </div>
                      </div>

                      <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col items-center gap-2 shadow-xl">
                        <div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-800 group-hover:scale-110 transition-transform text-emerald-400">
                          <TrendingUp size={24} />
                        </div>
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mt-2">Dampak Kepuasan (Rating)</span>
                        <div className="text-4xl font-black italic tracking-tighter text-emerald-400">
                          +{selectedAcara.happinessBoost}%
                        </div>
                      </div>
                    </div>

                    {/* Progress Section */}
                    {activeStatus.isActive && (
                      <div className="p-10 rounded-[3rem] bg-emerald-500/5 border border-emerald-500/10 shadow-inner">
                        <div className="flex justify-between items-end mb-6">
                          <div className="space-y-1">
                            <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Realisasi Program Nasional</p>
                            <h4 className="text-xl font-black text-emerald-400 uppercase italic italic tracking-tighter">Dalam Proses Implementasi</h4>
                          </div>
                          <span className="text-4xl font-black text-emerald-400 italic italic tracking-tighter">{Math.round(activeStatus.progress)}%</span>
                        </div>
                        <div className="h-4 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900 p-1">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-1000"
                            style={{ width: `${activeStatus.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Action Block */}
                    <div className="flex flex-col gap-6 pt-6 border-t border-zinc-900/50">
                      <div className="flex gap-4">
                        <button
                          disabled={currentBudget < selectedAcara.cost || activeStatus.isActive}
                          onClick={() => handleExecute(selectedAcara)}
                          className={`flex-1 font-black py-8 rounded-[2rem] shadow-2xl transition-all active:scale-95 uppercase text-sm tracking-[0.3em] italic border-2 flex items-center justify-center gap-3 ${activeStatus.isActive
                            ? 'bg-zinc-900/50 text-emerald-400 border-emerald-500/20 cursor-not-allowed opacity-50'
                            : currentBudget < selectedAcara.cost
                              ? 'bg-zinc-950 text-zinc-700 border-zinc-900 cursor-not-allowed'
                              : 'bg-amber-600 hover:bg-amber-500 text-white border-amber-500 hover:scale-[1.02] shadow-[0_20px_40px_rgba(245,158,11,0.2)]'
                            }`}
                        >
                          <CheckCircle2 size={24} />
                          {activeStatus.isActive ? "Implementasi Berjalan" : currentBudget < selectedAcara.cost ? "Anggaran Tidak Cukup" : "Sahkan Kebijakan Perayaan"}
                        </button>

                        <button
                          onClick={() => setSelectedAcara(null)}
                          className="px-10 rounded-[2rem] bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all font-black uppercase text-[10px] tracking-widest italic"
                        >
                          Batal
                        </button>
                      </div>

                      <div className="p-6 bg-zinc-900/40 rounded-3xl border border-zinc-800 flex items-start gap-4">
                        <div className="p-2 bg-zinc-950 rounded-lg">
                          <Info size={16} className="text-amber-500" />
                        </div>
                        <div className="flex-1">
                           <p className="text-xs text-zinc-400 font-medium leading-relaxed italic">
                            {activeStatus.isActive
                              ? `Informasi: Program ini dijadwalkan selesai pada tanggal ${acaraStorage.getEndDate(formatGameDate(gameDate), selectedAcara.durationDays)} berdasarkan kalender nasional.`
                              : `Informasi Strategis: Program berdurasi ${selectedAcara.durationDays} hari. Setelah selesai, diperlukan periode pendinginan (cooldown) selama ${selectedAcara.cooldownDays} hari sebelum dapat diulang kembali.`
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })() : (
                <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-8 animate-in fade-in zoom-in duration-1000">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-500/20 blur-[60px] rounded-full animate-pulse"></div>
                    <div className="relative w-32 h-32 rounded-[3.5rem] bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500/20 shadow-2xl group-hover:scale-110 transition-transform">
                      <Sparkles className="h-16 w-16 text-amber-500/40" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white uppercase tracking-[0.2em] italic">Seleksi Kebijakan Perayaan</h3>
                    <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest max-w-md mx-auto leading-relaxed">
                      Pilih salah satu program hiburan atau kebudayaan di daftar samping untuk meningkatkan indeks kebahagiaan rakyat secara instan.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
