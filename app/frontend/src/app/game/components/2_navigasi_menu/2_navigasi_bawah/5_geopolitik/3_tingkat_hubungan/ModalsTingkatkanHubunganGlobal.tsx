import React, { useState, useEffect } from "react";
import { Heart, X, TrendingUp, Sparkles, ShieldCheck, ArrowRight, Coins, Zap, Globe2 } from "lucide-react";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { relationStorage } from "@/app/game/components/map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { countries as centersData } from "@/app/database/data/negara/benua/index";

interface ModalsTingkatkanHubunganGlobalProps {
  isOpen: boolean;
  onClose: () => void;
  playerCountry: string;
}

export default function ModalsTingkatkanHubunganGlobal({ 
  isOpen, onClose, playerCountry 
}: ModalsTingkatkanHubunganGlobalProps) {
  const [improvementAmount, setImprovementAmount] = useState(1);
  const [userBudget, setUserBudget] = useState(budgetStorage.getBudget());
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate target countries count
  const targetCount = centersData.filter(c => c.name_id.toLowerCase().trim() !== playerCountry.toLowerCase().trim()).length;

  useEffect(() => {
    setUserBudget(budgetStorage.getBudget());
    const handleUpdate = () => setUserBudget(budgetStorage.getBudget());
    window.addEventListener('budget_storage_updated', handleUpdate);
    return () => window.removeEventListener('budget_storage_updated', handleUpdate);
  }, [isOpen]);

  if (!isOpen) return null;

  const totalCost = improvementAmount * targetCount * 10000;
  const isAffordable = userBudget >= totalCost;

  const handleImproveGlobal = () => {
    if (!isAffordable || improvementAmount <= 0 || isProcessing) return;
    
    setIsProcessing(true);
    
    // Deduct Budget
    budgetStorage.updateBudget(-totalCost);
    
    // Update All Relations
    relationStorage.updateAllRelationScores(improvementAmount, playerCountry);
    
    // Quick delay for feel
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
    }, 1200);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID").format(val);
  };

  return (
    <div className="fixed inset-0 z-[2500] flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-in fade-in duration-500 pointer-events-none text-sans">
      <div className="bg-zinc-950 border border-zinc-800/50 rounded-[3rem] w-full max-w-xl overflow-hidden shadow-[0_0_120px_rgba(16,185,129,0.15)] relative animate-in zoom-in-95 duration-500 pointer-events-auto">
        
        {/* Premium Background Accents */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 shadow-[0_0_25px_rgba(16,185,129,0.4)]"></div>
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        
        {/* Header Section */}
        <div className="p-10 pb-6 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-emerald-500/15 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)] group hover:rotate-3 transition-transform duration-500">
              <Globe2 className="h-7 w-7 text-emerald-500" />
            </div>
            <div>
              <p className="text-[11px] text-zinc-500 font-black uppercase tracking-[0.4em] mb-1 italic">Strategi Global V2.0</p>
              <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Inisatif Hubungan Global</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-600 hover:text-white transition-all p-3 hover:bg-zinc-900 rounded-2xl border border-transparent hover:border-zinc-800 cursor-pointer active:scale-90"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-10 pt-4 space-y-10 relative z-10">
          
          {/* Target Summary Card */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-[2.5rem] p-8 flex flex-col gap-8 backdrop-blur-md relative group">
             <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
             <div className="flex items-center justify-between relative z-10">
                <div className="flex flex-col">
                   <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1.5 italic">Cakupan Entitas</span>
                   <span className="text-3xl font-black text-white tracking-tighter uppercase">{targetCount} Negara</span>
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1.5 italic">Jenis Aksi</span>
                   <span className="text-xl font-black text-emerald-400 italic uppercase underline decoration-emerald-500/20 underline-offset-8 decoration-4">Sinergi Massal</span>
                </div>
             </div>

             <div className="p-5 bg-black/40 rounded-3xl border border-zinc-800 flex items-center gap-6 relative z-10">
                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                   <Sparkles size={24} className="text-emerald-500 animate-[spin_4s_linear_infinite]" />
                </div>
                <div className="space-y-1">
                   <p className="text-xs text-zinc-400 font-bold italic leading-relaxed">
                      Meluncurkan kampanye diplomasi serentak ke seluruh penjuru dunia untuk meningkatkan kepercayaan bilateral demi stabilitas ekonomi & militer.
                   </p>
                </div>
             </div>
          </div>

          {/* Slider & Cost Integration */}
          <div className="space-y-8">
            <div className="flex justify-between items-end px-3">
               <div className="space-y-2">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block">Intensitas Kampanye</span>
                  <div className="flex items-center gap-3">
                     <p className="text-3xl font-black text-emerald-400 italic">+{improvementAmount.toFixed(2)}%</p>
                     <span className="text-[10px] font-black text-zinc-700 uppercase tracking-tighter">Per Negara</span>
                  </div>
               </div>
               <div className="text-right space-y-2">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block">Total Anggaran Dibutuhkan</span>
                  <div className="flex items-center gap-3 justify-end">
                     <Coins className={`h-6 w-6 ${isAffordable ? 'text-amber-400' : 'text-rose-500 animate-bounce'}`} />
                     <p className={`text-4xl font-black italic tracking-tighter ${isAffordable ? 'text-amber-400' : 'text-rose-500 shadow-rose-900/20 shadow-2xl'}`}>${formatCurrency(totalCost)}</p>
                  </div>
               </div>
            </div>

            <div className="relative h-14 flex items-center px-4 bg-black/30 rounded-3xl border border-zinc-800/50 group">
              <input 
                type="range"
                min={0.01}
                max={50}
                step={0.01}
                value={improvementAmount}
                onChange={(e) => setImprovementAmount(Number(e.target.value))}
                className="w-full h-3 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all"
              />
              <div className="absolute -bottom-8 left-4 right-4 flex justify-between text-[10px] font-black text-zinc-700 uppercase tracking-widest italic">
                 <span>Minimum: +0.01%</span>
                 <span>Maksimum: +50%</span>
              </div>
            </div>
          </div>

          {/* Budget Insight */}
          <div className="px-8 py-6 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/10 flex justify-between items-center group transition-colors hover:border-emerald-500/20">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/15 rounded-xl border border-emerald-500/20 group-hover:scale-110 transition-transform">
                   <Zap size={20} className="text-emerald-500" />
                </div>
                <div>
                   <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-1">Status Keuangan Negara</p>
                   <p className="text-lg font-black text-zinc-300 italic tabular-nums">${formatCurrency(userBudget)}</p>
                </div>
             </div>
             <div className="text-right">
                <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-1">Sisa Jaminan</p>
                <p className={`text-lg font-black italic tabular-nums ${isAffordable ? 'text-zinc-500' : 'text-rose-600'}`}>
                   ${formatCurrency(Math.max(0, userBudget - totalCost))}
                </p>
             </div>
          </div>

          <button 
            onClick={handleImproveGlobal}
            disabled={!isAffordable || improvementAmount <= 0 || isProcessing}
            className={`w-full py-6 font-black rounded-3xl transition-all shadow-3xl active:scale-[0.98] cursor-pointer flex items-center justify-center gap-5 text-sm uppercase tracking-[0.4em] border-t border-white/10 group overflow-hidden relative ${
              isAffordable && improvementAmount > 0
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white shadow-emerald-900/30'
                : 'bg-zinc-900 text-zinc-700 cursor-not-allowed border-zinc-800'
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center gap-4">
                 <div className="h-6 w-6 border-3 border-white/10 border-t-white rounded-full animate-spin" />
                 <span className="italic">Memproses Diplomasi Global...</span>
              </div>
            ) : (
              <>
                <span className="relative z-10">{!isAffordable ? "Anggaran Tidak Mencukupi" : "Gencarkan Hubungan Internasional"}</span>
                <ArrowRight size={22} className="relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
              </>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
          </button>
        </div>

        {/* Footer Notice */}
        <div className="p-8 pt-0 text-center opacity-30 select-none">
           <p className="text-[9px] font-black text-white italic uppercase tracking-[0.8em]">EM4 Global Diplomatic Protocol • Multi-Node Synergy Enabled</p>
        </div>
      </div>
    </div>
  );
}
