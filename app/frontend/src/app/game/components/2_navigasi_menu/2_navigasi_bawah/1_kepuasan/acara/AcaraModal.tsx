"use client"

import { useState, useEffect } from "react";
import { 
  X, Sparkles, Music, Trophy, Users, ShieldCheck, 
  Coins, TrendingUp, Clock, CheckCircle2, AlertCircle, Globe, 
  Calendar, BarChart3, History, Eye, Landmark, Ship
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
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-xl">
              <Sparkles className="h-6 w-6 text-cyan-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-none">Pusat Manajemen Acara Nasional</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">🇮🇩 Indonesia — National Event Management Center</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-inner group/budget overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/budget:opacity-100 transition-opacity duration-500"></div>
              <div className="p-1.5 bg-emerald-500/10 rounded-lg group-hover/budget:bg-emerald-500 group-hover/budget:text-white transition-all duration-500">
                <Landmark className="h-4 w-4 text-emerald-500 group-hover/budget:text-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-0.5 opacity-60 group-hover/budget:opacity-100 transition-opacity">Kas Negara</span>
                <span className="text-sm font-black text-white tracking-tight italic tabular-nums leading-none">
                  {currentBudget.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <button className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group shadow-[0_0_15px_rgba(59,130,246,0.1)] active:scale-95">
              <Ship className="h-6 w-6 text-cyan-500 group-hover:scale-110 transition-transform" />
            </button>
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden relative z-10">
          {/* Sidebar Kiri - Kategori Acara */}
          <div className="w-[320px] border-r border-zinc-900 bg-zinc-950/50 flex flex-col backdrop-blur-sm">
            <div className="p-6 border-b border-zinc-900/80 shrink-0">
              <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] leading-none italic whitespace-nowrap">Kategori Acara</h3>
              <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic mt-1">Filter Berdasarkan Jenis</p>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent p-4 space-y-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-2xl transition-all cursor-pointer border ${
                    (selectedCategory === cat || (!selectedCategory && cat === "Semua"))
                      ? 'bg-cyan-600/10 border-cyan-500/40 text-white'
                      : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${
                    (selectedCategory === cat || (!selectedCategory && cat === "Semua"))
                      ? 'bg-cyan-500 text-white'
                      : 'bg-zinc-900 text-zinc-600'
                  }`}>
                    {cat === "Semua" ? <BarChart3 className="h-4 w-4" /> : getIcon(cat)}
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <span className="text-[14px] font-black uppercase tracking-tight block leading-tight truncate">{cat}</span>
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic">
                      {cat === "Semua" ? `${DATA_ACARA.length} Acara` : `${DATA_ACARA.filter(a => a.category === cat).length} Acara`}
                    </span>
                  </div>
                </button>
              ))}
              
              <div className="h-px bg-zinc-900 my-3"></div>
              
              <button className="w-full flex items-center gap-3 p-3.5 rounded-2xl transition-all cursor-pointer border text-zinc-500 hover:bg-zinc-900/50 border-transparent">
                <div className="p-2 rounded-xl bg-zinc-900 text-zinc-600">
                  <History className="h-4 w-4" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <span className="text-[14px] font-black uppercase tracking-tight block leading-tight truncate">Riwayat</span>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic">{history.length} Event</span>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-3.5 rounded-2xl transition-all cursor-pointer border text-zinc-500 hover:bg-zinc-900/50 border-transparent">
                <div className="p-2 rounded-xl bg-zinc-900 text-zinc-600">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <span className="text-[14px] font-black uppercase tracking-tight block leading-tight truncate">Kalender</span>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic">Planning</span>
                </div>
              </button>
            </div>
          </div>

          {/* Sidebar Tengah - Daftar Acara */}
          <div className="w-[320px] border-r border-zinc-900 bg-zinc-950/50 flex flex-col backdrop-blur-sm">
            <div className="p-6 border-b border-zinc-900/80 shrink-0">
              <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] leading-none italic text-center">
                {selectedCategory && selectedCategory !== "Semua" ? `Acara ${selectedCategory}` : "Semua Acara"}
              </h3>
              <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic mt-1 text-center">
                {filteredAcara.length} Program Tersedia
              </p>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent p-4 space-y-2">
              {filteredAcara.map((acara) => {
                const cooldown = acaraStorage.getCooldownStatus(acara.id, gameDate);
                const active = acaraStorage.getActiveStatus(acara.id, gameDate);
                const canAfford = currentBudget >= acara.cost;
                const isLocked = cooldown.onCooldown;

                return (
                  <button
                    key={acara.id}
                    onClick={() => !isLocked && setSelectedAcara(acara)}
                    disabled={isLocked}
                    className={`w-full p-4 rounded-2xl transition-all border ${
                      selectedAcara?.id === acara.id
                        ? 'bg-cyan-600/10 border-cyan-500/40 text-white'
                        : isLocked
                          ? 'bg-zinc-900/50 border-zinc-800/50 opacity-60 cursor-not-allowed'
                          : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent cursor-pointer'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-xl text-xl shrink-0 ${
                        selectedAcara?.id === acara.id
                          ? 'bg-cyan-500 text-white'
                          : isLocked
                            ? 'bg-zinc-900 text-zinc-700'
                            : 'bg-zinc-900 text-zinc-600'
                      }`}>
                        {acara.icon}
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                            {acara.category}
                          </span>
                          {active.isActive && (
                            <span className="text-[8px] font-black text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded uppercase">
                              Aktif
                            </span>
                          )}
                          {isLocked && !active.isActive && (
                            <span className="text-[8px] font-black text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded uppercase">
                              {cooldown.daysRemaining}d
                            </span>
                          )}
                        </div>
                        <h4 className="text-[13px] font-black text-white leading-tight mb-2 truncate">
                          {acara.name}
                        </h4>
                        <div className="flex gap-3 text-[10px]">
                          <span className={`font-bold ${canAfford ? 'text-yellow-500' : 'text-rose-500'}`}>
                            {acara.cost.toLocaleString()}
                          </span>
                          <span className="font-bold text-emerald-500">
                            +{acara.happinessBoost}%
                          </span>
                          <span className="font-bold text-blue-500">
                            {acara.durationDays}d
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    {active.isActive && (
                      <div className="mt-3 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-cyan-500 transition-all duration-1000"
                          style={{ width: `${active.progress}%` }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Area Utama - Detail Acara */}
          <div className="flex-1 bg-zinc-950 p-8 lg:p-16 overflow-y-auto relative scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="max-w-4xl mx-auto space-y-12">
              
              {selectedAcara ? (() => {
                const activeStatus = acaraStorage.getActiveStatus(selectedAcara.id, gameDate);
                const canAfford = currentBudget >= selectedAcara.cost;
                
                return (
                  <>
                    {/* Header Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 italic">
                          {activeStatus.isActive ? "Acara Sedang Berlangsung" : "Detail Acara"}
                        </span>
                      </div>
                      <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
                        {selectedAcara.name}
                      </h2>
                      <p className="text-zinc-400 text-base leading-relaxed italic">
                        "{selectedAcara.description}"
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800/50">
                        <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Biaya</div>
                        <div className={`text-3xl font-black ${canAfford && !activeStatus.isActive ? 'text-white' : 'text-rose-500'}`}>
                          {selectedAcara.cost.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800/50">
                        <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Efek Kepuasan</div>
                        <div className="text-3xl font-black text-emerald-400">
                          +{selectedAcara.happinessBoost}%
                        </div>
                      </div>
                      
                      <div className="p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800/50">
                        <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Durasi</div>
                        <div className="text-3xl font-black text-blue-400">
                          {selectedAcara.durationDays} Hari
                        </div>
                      </div>
                      
                      <div className="p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800/50">
                        <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Berakhir</div>
                        <div className="text-3xl font-black text-purple-400 tracking-tighter">
                          {acaraStorage.getEndDate(formatGameDate(gameDate), selectedAcara.durationDays)}
                        </div>
                      </div>
                    </div>

                    {/* Progress Section */}
                    {activeStatus.isActive && (
                      <div className="p-8 rounded-[2.5rem] bg-zinc-950 border border-zinc-800/50">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[12px] font-black text-emerald-400 uppercase tracking-widest">Progress Pelaksanaan</span>
                          <span className="text-[12px] font-bold text-zinc-500">{Math.round(activeStatus.progress)}%</span>
                        </div>
                        <div className="h-4 w-full bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-emerald-600 to-cyan-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-1000"
                            style={{ width: `${activeStatus.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button 
                        disabled={currentBudget < selectedAcara.cost || activeStatus.isActive}
                        onClick={() => handleExecute(selectedAcara)}
                        className={`flex-1 font-black py-6 rounded-2xl shadow-lg transition-all active:scale-95 uppercase text-[12px] tracking-widest ${
                          activeStatus.isActive
                            ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 cursor-default'
                            : currentBudget < selectedAcara.cost
                              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-800'
                              : 'bg-cyan-600 hover:bg-cyan-500 text-white cursor-pointer border border-cyan-500'
                        }`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {activeStatus.isActive ? "Sedang Berlangsung" : currentBudget < selectedAcara.cost ? "Dana Tidak Cukup" : "Laksanakan Acara"}
                          {!activeStatus.isActive && canAfford && <CheckCircle2 size={20} className="animate-pulse" />}
                        </span>
                      </button>
                      
                      <button 
                        onClick={() => setSelectedAcara(null)}
                        className="px-8 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-400 font-bold py-6 rounded-2xl transition-all cursor-pointer text-[12px] uppercase tracking-widest"
                      >
                        Batalkan
                      </button>
                    </div>

                    {/* Info Box */}
                    <div className="flex items-start gap-4 p-6 bg-cyan-500/5 rounded-2xl border border-cyan-500/20">
                      <AlertCircle className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">Informasi Penting</div>
                        <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                          {activeStatus.isActive 
                            ? `Acara ini sedang berlangsung dan akan selesai pada ${acaraStorage.getEndDate(formatGameDate(gameDate), selectedAcara.durationDays)}. Efek kepuasan akan diterapkan secara bertahap.`
                            : `Setelah dilaksanakan, acara ini akan meningkatkan kepuasan rakyat sebesar ${selectedAcara.happinessBoost}% selama ${selectedAcara.durationDays} hari. Pastikan anggaran mencukupi sebelum melaksanakan.`
                          }
                        </p>
                      </div>
                    </div>
                  </>
                );
              })() : (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <div className="w-24 h-24 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-700">
                    <Sparkles className="h-12 w-12 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-white uppercase tracking-widest italic">Pilih Acara</h3>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-tighter max-w-md">
                      Pilih salah satu acara dari daftar di sebelah kiri untuk melihat detail dan melaksanakan program perayaan nasional
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
