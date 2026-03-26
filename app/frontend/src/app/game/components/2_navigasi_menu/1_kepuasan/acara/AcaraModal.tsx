"use client"

import { useState, useEffect } from "react";
import { 
  X, Sparkles, Music, Trophy, Users, ShieldCheck, 
  Coins, TrendingUp, Clock, CheckCircle2, AlertCircle
} from "lucide-react";
import { DATA_ACARA, acaraStorage, Acara } from "./acaraStorage";
import { happinessStorage } from "../happinessStorage";
import { getStoredGameDate, formatGameDate } from "@/app/game/data/time/gameTime";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";

interface AcaraModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AcaraModal({ isOpen, onClose }: AcaraModalProps) {
  const [selectedAcara, setSelectedAcara] = useState<Acara | null>(null);
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

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh]">
        
        {/* Header Section */}
        <div className="p-8 border-b border-white/5 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-cyan-500/20 rounded-xl">
                <Sparkles className="text-cyan-400" size={24} />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">Acara Nasional</h2>
            </div>
            <p className="text-zinc-400 text-sm font-medium">Tingkatkan moral dan kepuasan rakyat melalui perayaan kenegaraan.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-3 hover:bg-white/5 rounded-full transition-colors text-zinc-500 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
          
          {/* Budget Info */}
          <div className="flex items-center gap-4 p-4 bg-zinc-950/50 border border-white/5 rounded-2xl">
            <div className="p-3 bg-yellow-500/10 rounded-xl">
              <Coins className="text-yellow-500" size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-0.5">Anggaran Negara Tersedia</p>
              <p className="text-xl font-black text-white">{currentBudget.toLocaleString('id-ID')} Triliun</p>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA_ACARA.map((acara) => {
              const cooldown = acaraStorage.getCooldownStatus(acara.id, gameDate);
              const active = acaraStorage.getActiveStatus(acara.id, gameDate);
              const canAfford = currentBudget >= acara.cost;
              const isLocked = cooldown.onCooldown;

              return (
                <div 
                  key={acara.id}
                  onClick={() => !isLocked && setSelectedAcara(acara)}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    selectedAcara?.id === acara.id
                      ? 'bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                      : isLocked
                        ? 'bg-zinc-900/50 border-white/5 opacity-60 cursor-not-allowed'
                        : 'bg-zinc-800/40 border-white/5 hover:border-white/20 hover:bg-zinc-800/60'
                  }`}
                >
                  {active.isActive && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded-md animate-pulse">
                      <span className="text-[8px] font-black text-emerald-400 uppercase tracking-tighter">Berlangsung</span>
                    </div>
                  )}
                  {!active.isActive && !canAfford && !isLocked && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-rose-500/20 border border-rose-500/30 rounded-md">
                      <span className="text-[8px] font-black text-rose-400 uppercase tracking-tighter">Dana Kurang</span>
                    </div>
                  )}
                  <div className="flex gap-4">
                    <div className={`p-4 rounded-xl text-2xl bg-zinc-950/50 border border-white/5 group-hover:scale-110 transition-transform ${selectedAcara?.id === acara.id ? 'border-cyan-500/30' : ''}`}>
                      {acara.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
                          {getIcon(acara.category)}
                          {acara.category}
                        </span>
                        {isLocked && !active.isActive && (
                          <span className="text-[10px] font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Clock size={10} />
                            Cooldown: {cooldown.daysRemaining}d
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-black text-white leading-tight mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
                        {acara.name}
                      </h3>
                      
                      <div className="flex gap-4">
                        <div className={`flex items-center gap-1.5 transition-colors ${canAfford ? 'text-zinc-400 group-hover:text-white' : 'text-rose-400'}`}>
                          <Coins size={14} className={canAfford ? 'text-yellow-500' : 'text-rose-500'} />
                          <span className="text-xs font-bold">{acara.cost.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-white transition-colors">
                          <TrendingUp size={14} className="text-emerald-500" />
                          <span className="text-xs font-bold">+{acara.happinessBoost}%</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-white transition-colors">
                          <Clock size={14} className="text-blue-500" />
                          <span className="text-xs font-bold">{acara.durationDays} Hari</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Persistent Progress Bar at the Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/60 overflow-hidden">
                    {active.isActive ? (
                      <div 
                        className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-1000"
                        style={{ width: `${active.progress}%` }}
                      />
                    ) : (
                      <div className="h-full w-full bg-zinc-950/40" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Preview Section */}
          {selectedAcara && (() => {
            const activeStatus = acaraStorage.getActiveStatus(selectedAcara.id, gameDate);
            return (
              <div className="p-8 bg-zinc-950/80 border border-cyan-500/30 rounded-[24px] animate-in slide-in-from-bottom-4 duration-500 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 italic">
                      {activeStatus.isActive ? "Informasi Acara Aktif" : "Konfirmasi Penyelenggaraan"}
                    </h4>
                    <h3 className="text-2xl font-black text-white tracking-tighter uppercase leading-none">{selectedAcara.name}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed italic">
                    "{selectedAcara.description}"
                  </p>
                  <div className="flex gap-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-zinc-500 uppercase">Biaya</span>
                      <span className={currentBudget < selectedAcara.cost && !activeStatus.isActive ? "text-xl font-black text-rose-500" : "text-xl font-black text-white"}>
                        {selectedAcara.cost.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-zinc-500 uppercase">Efek</span>
                      <span className="text-xl font-black text-emerald-400">+{selectedAcara.happinessBoost}%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-zinc-500 uppercase">Durasi</span>
                      <span className="text-xl font-black text-blue-400 tracking-tighter">{selectedAcara.durationDays} Hari</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-zinc-500 uppercase">Berakhir</span>
                      <span className="text-xl font-black text-purple-400 tracking-tighter">
                        {acaraStorage.getEndDate(formatGameDate(gameDate), selectedAcara.durationDays)}
                      </span>
                    </div>
                  </div>
                  {activeStatus.isActive && (
                    <div className="pt-2">
                       <div className="flex justify-between items-center mb-1">
                         <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Progress Pelaksanaan</span>
                         <span className="text-[10px] font-bold text-zinc-500">{Math.round(activeStatus.progress)}%</span>
                       </div>
                       <div className="h-2 w-full bg-zinc-900 rounded-full border border-white/5 overflow-hidden">
                         <div 
                           className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                           style={{ width: `${activeStatus.progress}%` }}
                         />
                       </div>
                    </div>
                  )}
                </div>
                <div className="w-full md:w-auto flex flex-col gap-3">
                  <button 
                    disabled={currentBudget < selectedAcara.cost || activeStatus.isActive}
                    onClick={() => handleExecute(selectedAcara)}
                    className={`w-full md:w-48 font-black py-4 rounded-xl shadow-lg transition-all active:scale-95 uppercase text-[10px] tracking-widest group ${
                      activeStatus.isActive
                        ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 cursor-default'
                        : currentBudget < selectedAcara.cost
                          ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-white/5'
                          : 'bg-cyan-600 hover:bg-cyan-500 text-white cursor-pointer'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {activeStatus.isActive ? "Sedang Berlangsung" : currentBudget < selectedAcara.cost ? "Dana Tidak Cukup" : "Laksanakan Acara"}
                      <CheckCircle2 size={16} className={currentBudget < selectedAcara.cost || activeStatus.isActive ? "hidden" : "animate-pulse"} />
                    </span>
                  </button>
                  <button 
                    onClick={() => setSelectedAcara(null)}
                    className="w-full md:w-48 bg-zinc-900 border border-white/10 hover:border-white/20 text-zinc-400 font-bold py-4 rounded-xl transition-all cursor-pointer text-[10px] uppercase tracking-widest"
                  >
                    Batalkan
                  </button>
                </div>
              </div>
            );
          })()}

          {!selectedAcara && (
            <div className="flex flex-col items-center justify-center py-12 text-center bg-zinc-950/30 border border-dashed border-white/5 rounded-[24px]">
              <div className="p-4 bg-white/5 rounded-full mb-4">
                <AlertCircle className="text-zinc-500" size={32} />
              </div>
              <h4 className="text-white font-black uppercase tracking-widest mb-2 italic">Belum Ada Acara Terpilih</h4>
              <p className="text-zinc-500 text-xs max-w-xs leading-relaxed">Pilih salah satu program perayaan dari daftar di atas untuk memperkuat hubungan dengan rakyat.</p>
            </div>
          )}
        </div>

        {/* Footer Area */}
        <div className="px-8 py-4 bg-zinc-950/80 border-t border-white/5 flex justify-between items-center text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
          <span>Sistem Manajemen Diplomasi Publik v1.0</span>
          <span>Presiden Simulator {gameDate.getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}
