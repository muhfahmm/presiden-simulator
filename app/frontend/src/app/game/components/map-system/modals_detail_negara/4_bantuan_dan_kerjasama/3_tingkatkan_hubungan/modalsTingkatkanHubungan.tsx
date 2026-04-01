import React, { useState, useEffect } from "react";
import { Heart, X, TrendingUp, Sparkles, ShieldCheck, ArrowRight, Coins, Zap } from "lucide-react";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { relationStorage } from "../../2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";

interface ModalsTingkatkanHubunganProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
  relationScore: number;
  baseScore: number;
  relationLabel: string;
  relationColor: string;
}

export default function ModalsTingkatkanHubungan({ 
  isOpen, onClose, targetCountry, relationScore, baseScore, relationLabel, relationColor 
}: ModalsTingkatkanHubunganProps) {
  const [targetScore, setTargetScore] = useState(relationScore);
  const [userBudget, setUserBudget] = useState(budgetStorage.getBudget());
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setTargetScore(relationScore);
    setUserBudget(budgetStorage.getBudget());
    
    const handleUpdate = () => setUserBudget(budgetStorage.getBudget());
    window.addEventListener('budget_storage_updated', handleUpdate);
    return () => window.removeEventListener('budget_storage_updated', handleUpdate);
  }, [relationScore, isOpen]);

  if (!isOpen) return null;

  const pointsToGain = Math.max(0, targetScore - relationScore);
  const totalCost = pointsToGain * 10000;
  const isAffordable = userBudget >= totalCost;

  const handleImprove = () => {
    if (!isAffordable || pointsToGain <= 0 || isProcessing) return;
    
    setIsProcessing(true);
    
    // Deduct Budget
    budgetStorage.updateBudget(-totalCost);
    
    // Update Relation
    relationStorage.updateRelationScore(targetCountry, pointsToGain, baseScore);
    
    // Quick delay for feel
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
    }, 800);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID").format(val);
  };

  // Dynamic Metadata for Preview
  const previewMeta = relationStorage.getRelationMetadata(targetScore);

  return (
    <div className="fixed inset-0 z-[2500] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300 pointer-events-none text-sans">
      <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] relative animate-in zoom-in-95 duration-500 pointer-events-auto">
        
        {/* Premium Background Accents */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 shadow-[0_0_20px_rgba(244,63,94,0.3)]"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Header Section */}
        <div className="p-8 pb-4 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.15)] group hover:scale-110 transition-transform duration-500">
              <Heart className="h-6 w-6 text-rose-500 fill-rose-500/20" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em] mb-0.5">Diplomatic Initiative</p>
              <h3 className="text-xl font-black text-white italic uppercase tracking-tight">Tingkatkan Hubungan</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition-all p-2.5 hover:bg-zinc-800/80 rounded-2xl border border-transparent hover:border-zinc-700/50 cursor-pointer active:scale-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-8 pt-2 space-y-8 relative z-10">
          
          {/* Status Monitor Card */}
          <div className="bg-zinc-950/40 border border-zinc-800/60 rounded-[2rem] p-6 flex flex-col gap-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1 italic">Target Negara</span>
                <span className="text-xl font-black text-white tracking-tighter uppercase">{targetCountry}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1 italic">Prediksi Status</span>
                <span className={`text-lg font-black italic transition-colors duration-500 ${previewMeta.color}`}>{previewMeta.label}</span>
              </div>
            </div>

            {/* Progress Visualization */}
            <div className="space-y-3">
              <div className="flex justify-between items-center px-1">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Kekuatan Diplomasi</span>
                <div className="flex items-center gap-2">
                   <span className={`text-[10px] font-black italic ${relationColor}`}>{relationScore.toFixed(2)}</span>
                   <ArrowRight size={10} className="text-zinc-700" />
                   <span className={`text-[10px] font-black italic ${previewMeta.color} animate-pulse`}>{targetScore.toFixed(2)} pts</span>
                </div>
              </div>
              <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 p-0.5 relative">
                {/* Base Progress */}
                <div 
                  className={`absolute left-0.5 top-0.5 h-[calc(100%-4px)] rounded-full bg-zinc-700 transition-all duration-300`}
                  style={{ width: `${Math.max(2, relationScore)}%` }}
                />
                {/* New Progress */}
                <div 
                  className={`absolute left-0.5 top-0.5 h-[calc(100%-4px)] rounded-full bg-gradient-to-r from-rose-600 to-pink-500 shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all duration-300 opacity-60`}
                  style={{ width: `${Math.max(2, targetScore)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="space-y-6">
            <div className="flex justify-between items-end px-2">
               <div className="space-y-1">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block">Inisiatif Terpadu</span>
                  <p className="text-xs text-emerald-400 font-black italic">+{pointsToGain.toFixed(2)}% Improvement</p>
               </div>
               <div className="text-right">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block">Estimasi Biaya</span>
                  <div className="flex items-center gap-2 justify-end">
                     <Coins className={`h-4 w-4 ${isAffordable ? 'text-amber-400' : 'text-rose-500 animate-bounce'}`} />
                     <p className={`text-xl font-black italic tracking-tighter ${isAffordable ? 'text-amber-400' : 'text-rose-500'}`}>${formatCurrency(totalCost)}</p>
                  </div>
               </div>
            </div>

            <div className="relative h-12 flex items-center px-2">
              <input 
                type="range"
                min={relationScore}
                max={100}
                step={0.01}
                value={targetScore}
                onChange={(e) => setTargetScore(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-rose-500 hover:accent-rose-400 transition-all"
              />
            </div>

            <div className="flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] px-2 italic">
               <span>Initial: {relationScore.toFixed(2)}%</span>
               <span>Max Goal: 100%</span>
            </div>
          </div>

          {/* Budget Info */}
          <div className="px-6 py-4 rounded-2xl bg-zinc-950/20 border border-zinc-800/50 flex justify-between items-center group">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                   <Zap size={14} className="text-emerald-500" />
                </div>
                <div>
                   <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Saldo Negara</p>
                   <p className="text-xs font-black text-zinc-300 italic">${formatCurrency(userBudget)}</p>
                </div>
             </div>
             <div className="text-right">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Sisa Saldo</p>
                <p className={`text-xs font-black italic ${isAffordable ? 'text-zinc-400' : 'text-rose-500'}`}>
                   ${formatCurrency(Math.max(0, userBudget - totalCost))}
                </p>
             </div>
          </div>

          <button 
            onClick={handleImprove}
            disabled={!isAffordable || pointsToGain <= 0 || isProcessing}
            className={`w-full py-5 font-black rounded-2xl transition-all shadow-2xl active:scale-[0.98] cursor-pointer flex items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] border-t border-white/10 group overflow-hidden ${
              isAffordable && pointsToGain > 0
                ? 'bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white shadow-rose-900/40'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed border-zinc-700 shadow-none'
            }`}
          >
            {isProcessing ? (
              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span className="relative z-10">{!isAffordable ? "Kas Tidak Cukup" : pointsToGain <= 0 ? "Geser Slider" : "Tingkatkan Hubungan Sekarang"}</span>
                <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
        </div>

        {/* Footer Accent */}
        <div className="p-6 pt-0 text-center opacity-30 select-none">
           <p className="text-[8px] font-black text-white italic uppercase tracking-[0.6em]">Premium Diplomatic Interface v1.0</p>
        </div>
      </div>
    </div>
  );
}
