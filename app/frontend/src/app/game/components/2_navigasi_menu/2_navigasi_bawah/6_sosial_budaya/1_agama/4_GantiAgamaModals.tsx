"use client"

import { X, AlertTriangle, CheckCircle, Coins } from "lucide-react"
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { useState, useEffect } from "react";

interface GantiAgamaModalsProps {
  religion: string;
  cost: number;
  onClose: () => void;
  onConfirm: () => void;
}

export function GantiAgamaModals({ religion, cost, onClose, onConfirm }: GantiAgamaModalsProps) {
  const [userBudget, setUserBudget] = useState(budgetStorage.getBudget());
  const isInsufficient = userBudget < cost;

  useEffect(() => {
    const handleUpdate = () => setUserBudget(budgetStorage.getBudget());
    window.addEventListener('budget_storage_updated', handleUpdate);
    return () => window.removeEventListener('budget_storage_updated', handleUpdate);
  }, []);

  const handleConfirmAction = () => {
    if (isInsufficient) return;
    budgetStorage.updateBudget(-cost);
    onConfirm();
  };

  return (
    <div className="absolute inset-0 z-30 bg-zinc-950/98 backdrop-blur-3xl flex flex-col p-6 animate-in fade-in zoom-in-95 duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-amber-500/20 rounded-lg">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </div>
          <h4 className="text-[10px] font-black text-white uppercase tracking-widest italic font-sans">Konfirmasi Perubahan</h4>
        </div>
        <button onClick={onClose} className="p-1.5 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
          <X className="h-4 w-4 text-zinc-500 group-hover:text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center text-center px-2">
        <p className="text-[13px] font-bold text-zinc-300 leading-relaxed tracking-tight font-sans">
          Apakah Anda yakin ingin menetapkan <span className="text-amber-500 italic uppercase">"{religion}"</span> sebagai religi resmi negara?
        </p>
        <div className="mt-4 p-3 bg-white/5 rounded-2xl border border-white/5 space-y-3">
          <p className="text-[10px] text-zinc-500 font-medium leading-normal italic font-sans">
            "Perubahan religi konstitusional akan berdampak pada stabilitas sosial dan memerlukan penyesuaian kebijakan nasional."
          </p>
          <div className={`flex items-center justify-between p-2.5 rounded-xl border ${isInsufficient ? 'bg-rose-500/10 border-rose-500/30' : 'bg-emerald-500/10 border-emerald-500/30'}`}>
            <div className="flex items-center gap-2">
              <Coins className={`h-3.5 w-3.5 ${isInsufficient ? 'text-rose-500' : 'text-emerald-500'}`} />
              <span className={`text-[9px] font-black uppercase tracking-widest ${isInsufficient ? 'text-rose-500' : 'text-emerald-500'}`}>Biaya Transisi</span>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-xs font-black tabular-nums ${isInsufficient ? 'text-rose-400' : 'text-white'}`}>
                {cost.toLocaleString('id-ID')}
              </span>
              <button
                onClick={handleConfirmAction}
                disabled={isInsufficient}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 font-sans ${
                  isInsufficient ? 'bg-zinc-800 text-zinc-600 grayscale cursor-not-allowed border border-zinc-700 shadow-none' : 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:bg-amber-400 active:scale-95'
                }`}
              >
                <CheckCircle className="h-3.5 w-3.5" />
                {isInsufficient ? 'Dana Kurang' : 'Tetapkan'}
              </button>
            </div>
          </div>
          {isInsufficient && (
            <p className="text-[9px] text-rose-500 font-bold uppercase tracking-tight animate-pulse">
              Dana Negara Tidak Mencukupi untuk Perubahan Ini
            </p>
          )}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-auto pt-4">
        <button
          onClick={onClose}
          className="w-full py-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer active:scale-95 font-sans"
        >
          Batalkan
        </button>
      </div>
    </div>
  );
}
