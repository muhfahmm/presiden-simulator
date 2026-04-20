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
    <div className="absolute inset-0 bg-stone-900/40 z-50 flex items-center justify-center animate-in fade-in duration-300 p-6">
      <div className="bg-[#f3e9d8] border border-amber-800/20 rounded-[32px] w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Subtle Accents */}
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-600/5 rounded-full blur-[80px]"></div>

        {/* Header */}
        <div className="px-6 py-4 border-b border-amber-800/10 flex items-center justify-between bg-[#dcc7a1]/80 backdrop-blur-md relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-800/10 rounded-xl">
              <Sparkles className="h-5 w-5 text-amber-800" />
            </div>
            <div>
              <h2 className="text-xl font-black text-amber-950 tracking-tight leading-none italic uppercase">Manajemen Perayaan</h2>
              <p className="text-[9px] text-amber-900/60 font-bold uppercase tracking-widest mt-1">Program Hiburan & Kebudayaan Nasional</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-amber-800/10 border border-amber-800/10 rounded-xl shadow-inner group/budget">
              <div className="p-1.5 bg-amber-800/10 rounded-lg group-hover/budget:bg-amber-800 group-hover/budget:text-white transition-all">
                <Landmark className="h-3.5 w-3.5 text-amber-800 group-hover/budget:text-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-amber-900/40 uppercase tracking-widest leading-none mb-0.5">Kas</span>
                <span className="text-xs font-black text-amber-950 italic tabular-nums leading-none">
                  {currentBudget.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-xl bg-amber-800/10 hover:bg-rose-500/20 text-amber-900/60 hover:text-rose-700 transition-all cursor-pointer border border-amber-800/10 group">
              <X className="h-5 w-5 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden relative z-10">
          {/* Sidebar - Kategorisasi & Daftar */}
          <div className="w-[300px] border-r border-amber-800/10 bg-[#e7d9c1]/30 flex flex-col backdrop-blur-sm shadow-inner">
            <div className="p-5 border-b border-amber-800/10 shrink-0">
              <div className="flex items-center gap-2 mb-4 overflow-x-auto no-scrollbar pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                      (selectedCategory === cat || (!selectedCategory && cat === "Semua"))
                        ? 'bg-amber-800 text-white shadow-sm border-amber-800'
                        : 'bg-amber-800/5 text-amber-900/50 border-amber-800/10 hover:bg-amber-800/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <h3 className="text-[12px] font-black text-amber-950 uppercase tracking-[0.15em] leading-none italic">Program Tersedia</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-2">
              {filteredAcara.map((acara) => {
                const cooldown = acaraStorage.getCooldownStatus(acara.id, gameDate);
                const active = acaraStorage.getActiveStatus(acara.id, gameDate);
                const isLocked = cooldown.onCooldown;

                return (
                  <button
                    key={acara.id}
                    onClick={() => !isLocked && setSelectedAcara(acara)}
                    disabled={isLocked}
                    className={`w-full p-3 rounded-xl transition-all border ${
                      selectedAcara?.id === acara.id
                        ? 'bg-white shadow-sm border-amber-800/20'
                        : isLocked
                          ? 'opacity-40 cursor-not-allowed border-transparent'
                          : 'hover:bg-white/40 border-transparent cursor-pointer'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className={`p-1.5 rounded-lg text-lg shrink-0 ${
                        selectedAcara?.id === acara.id
                          ? 'bg-amber-800 text-white'
                          : 'bg-amber-800/10 text-amber-900/60'
                      }`}>
                        {acara.icon}
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[8px] font-black uppercase tracking-widest text-amber-900/40">
                            {acara.category}
                          </span>
                          {isLocked && <div className="text-[7px] font-black text-rose-700 uppercase">Wait {cooldown.daysRemaining}d</div>}
                        </div>
                        <h4 className={`text-[11px] font-black leading-tight truncate ${selectedAcara?.id === acara.id ? 'text-amber-950' : 'text-amber-900/70'}`}>
                          {acara.name}
                        </h4>
                        <div className="flex gap-2 text-[8px] mt-1 font-black uppercase italic">
                          <span className="text-amber-700">Rp {acara.cost.toLocaleString()}</span>
                          <span className="text-emerald-700">+{acara.happinessBoost}%</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Area Utama - Detail Acara */}
          <div className="flex-1 bg-[#f3e9d8] p-8 lg:p-12 overflow-y-auto relative no-scrollbar">
            <div className="max-w-3xl mx-auto space-y-8">
              
              {selectedAcara ? (() => {
                const activeStatus = acaraStorage.getActiveStatus(selectedAcara.id, gameDate);
                const canAfford = currentBudget >= selectedAcara.cost;
                
                return (
                  <>
                    {/* Header Detail */}
                    <div className="space-y-2 text-center pb-6 border-b border-amber-800/10">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-900/40 italic">
                        {activeStatus.isActive ? "Sedang Berjalan" : "Fokus Program"}
                      </span>
                      <h2 className="text-3xl font-black text-amber-950 tracking-tighter uppercase leading-none italic">
                        {selectedAcara.name}
                      </h2>
                      <p className="text-amber-900/60 text-sm leading-relaxed font-bold italic">
                        "{selectedAcara.description}"
                      </p>
                    </div>

                    {/* Stats Grid Compact */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-5 rounded-[2rem] bg-[#e7d9c1] border border-amber-800/10 flex flex-col items-center shadow-inner">
                        <div className="text-[9px] font-black text-amber-900/40 uppercase tracking-widest mb-1">Anggaran</div>
                        <div className={`text-2xl font-black italic ${canAfford ? 'text-amber-950' : 'text-rose-800'}`}>
                          Rp {selectedAcara.cost.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="p-5 rounded-[2rem] bg-[#e7d9c1] border border-amber-800/10 flex flex-col items-center shadow-inner">
                        <div className="text-[9px] font-black text-amber-900/40 uppercase tracking-widest mb-1">Impact Rating</div>
                        <div className="text-2xl font-black italic text-emerald-700">
                          +{selectedAcara.happinessBoost}%
                        </div>
                      </div>
                    </div>

                    {/* Progress Section (Jika Aktif) */}
                    {activeStatus.isActive && (
                      <div className="p-6 rounded-[2rem] bg-emerald-800/5 border border-emerald-800/10">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">Realisasi Program</span>
                          <span className="text-[10px] font-black text-emerald-900">{Math.round(activeStatus.progress)}%</span>
                        </div>
                        <div className="h-2 w-full bg-emerald-800/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-600 shadow-sm transition-all duration-1000"
                            style={{ width: `${activeStatus.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Action Block */}
                    <div className="space-y-4 pt-4">
                      <button 
                        disabled={currentBudget < selectedAcara.cost || activeStatus.isActive}
                        onClick={() => handleExecute(selectedAcara)}
                        className={`w-full font-black py-5 rounded-2xl shadow-sm transition-all active:scale-95 uppercase text-[11px] tracking-[0.2em] italic border ${
                          activeStatus.isActive
                            ? 'bg-emerald-800/10 text-emerald-700 border-emerald-800/20'
                            : currentBudget < selectedAcara.cost
                              ? 'bg-stone-300 text-stone-500 border-transparent cursor-not-allowed'
                              : 'bg-amber-800 hover:bg-amber-700 text-white border-amber-800 shadow-lg'
                        }`}
                      >
                        {activeStatus.isActive ? "Acara Masih Berjalan" : currentBudget < selectedAcara.cost ? "Kas Tidak Mencukupi" : "Tanda Tangan Kebijakan"}
                      </button>
                      
                      <button 
                        onClick={() => setSelectedAcara(null)}
                        className="w-full text-amber-900/40 hover:text-amber-950 font-black py-2 rounded-xl transition-all cursor-pointer text-[10px] uppercase tracking-widest"
                      >
                        Kembali ke Daftar
                      </button>
                    </div>

                    <div className="p-5 bg-amber-800/5 rounded-2xl border border-amber-800/10 flex items-start gap-3">
                       <Info size={14} className="text-amber-700 shrink-0 mt-0.5" />
                       <p className="text-[10px] text-amber-950/60 font-bold leading-relaxed italic">
                        {activeStatus.isActive 
                          ? `Selesai pada: ${acaraStorage.getEndDate(formatGameDate(gameDate), selectedAcara.durationDays)}`
                          : `Program berdurasi ${selectedAcara.durationDays} hari dengan cooldown perulangan ${selectedAcara.cooldownDays} hari.`
                        }
                       </p>
                    </div>
                  </>
                );
              })() : (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-in fade-in duration-700">
                  <div className="w-20 h-20 rounded-[2.5rem] bg-amber-800/5 border border-amber-800/10 flex items-center justify-center text-amber-800/20">
                    <Sparkles className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-amber-950 uppercase tracking-widest italic">Seleksi Kebijakan</h3>
                    <p className="text-[10px] text-amber-900/40 font-bold uppercase tracking-tight max-w-[280px]">
                      Pilih program acara nasional untuk meningkatkan sentimen kebahagiaan rakyat
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
