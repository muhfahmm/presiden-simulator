"use client"

import { useState, useEffect } from "react";
import { X, Users, Heart, Star, Info, TrendingUp, BarChart, Smile, TrendingDown, Minus, ShoppingCart, Receipt } from "lucide-react";
import { happinessStorage, HappinessStats } from "./happinessStorage";

interface KepuasanModalProps {
  isOpen: boolean;
  onClose: () => void;
  happiness: number;
}

export default function KepuasanModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [stats, setStats] = useState<HappinessStats>(() => happinessStorage.getStats());
  const [liveImpacts, setLiveImpacts] = useState(() => happinessStorage.getLiveImpacts());

  useEffect(() => {
    const handleUpdate = () => {
      setStats(happinessStorage.getStats());
      setLiveImpacts(happinessStorage.getLiveImpacts());
    };
    window.addEventListener("happiness_updated", handleUpdate);
    window.addEventListener("price_updated", handleUpdate);
    window.addEventListener("tax_updated", handleUpdate);
    return () => {
      window.removeEventListener("happiness_updated", handleUpdate);
      window.removeEventListener("price_updated", handleUpdate);
      window.removeEventListener("tax_updated", handleUpdate);
    };
  }, []);

  if (!isOpen) return null;

  const happiness = stats.value;

  const getStatus = (val: number) => {
    if (val >= 80) return { label: "Sangat Puas", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" };
    if (val >= 60) return { label: "Puas", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" };
    if (val >= 40) return { label: "Cukup", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" };
    return { label: "Tidak Puas", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" };
  };

  const status = getStatus(happiness);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        
        {/* Header Decor */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-zinc-800/50">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
              <Smile className="h-6 w-6 text-cyan-400 fill-cyan-400/20" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Kepuasan Rakyat</h2>
              <p className="text-sm text-zinc-500 font-medium">Indeks Kebahagiaan Nasional</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-xl transition-colors text-zinc-500 hover:text-white cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          
          {/* Main Stat Card */}
          <div className="relative p-10 rounded-[2.5rem] bg-zinc-950 border border-zinc-800/50 overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Smile className="h-32 w-32 text-cyan-400" />
            </div>
            
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="text-7xl font-black text-white tracking-tighter">
                {happiness.toFixed(1)}<span className="text-3xl text-cyan-500 ml-1">%</span>
              </div>
              <div className={`px-6 py-1.5 rounded-full ${status.bg} ${status.border} border ${status.color} text-sm font-bold uppercase tracking-widest`}>
                {status.label}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 space-y-2">
              <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-400 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  style={{ width: `${happiness}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-bold text-zinc-600 uppercase tracking-tighter">
                <span>Kritis</span>
                <span>Optimal</span>
              </div>
            </div>
          </div>

          {/* Main Contributors */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-emerald-500/20 flex flex-col justify-center items-center text-center space-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                <ShoppingCart className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Dampak Harga Pasar</div>
                <div className={`text-2xl font-black ${liveImpacts.priceImpact > 0 ? 'text-emerald-400' : liveImpacts.priceImpact < 0 ? 'text-rose-400' : 'text-white'}`}>
                  {liveImpacts.priceImpact > 0 ? '+' : ''}{(liveImpacts.priceImpact || 0).toFixed(1)}%
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-purple-500/20 flex flex-col justify-center items-center text-center space-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/30">
                <Receipt className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Dampak Tarif Pajak</div>
                <div className={`text-2xl font-black ${liveImpacts.taxImpact > 0 ? 'text-emerald-400' : liveImpacts.taxImpact < 0 ? 'text-rose-400' : 'text-white'}`}>
                  {liveImpacts.taxImpact > 0 ? '+' : ''}{(liveImpacts.taxImpact || 0).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 flex flex-col items-center text-center space-y-2">
              <BarChart className="h-5 w-5 text-zinc-500" />
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Stabilitas Data</div>
              <div className="text-sm font-semibold text-zinc-300">Real-time Sync</div>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 flex flex-col items-center text-center space-y-2">
              {liveImpacts.priceImpact + liveImpacts.taxImpact > 0 ? (
                <TrendingUp className="h-5 w-5 text-emerald-400" />
              ) : liveImpacts.priceImpact + liveImpacts.taxImpact < 0 ? (
                <TrendingDown className="h-5 w-5 text-rose-400" />
              ) : (
                <Minus className="h-5 w-5 text-zinc-500" />
              )}
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Tren Rating/bulan</div>
              <div className={`text-sm font-black ${liveImpacts.priceImpact + liveImpacts.taxImpact > 0 ? "text-emerald-400" : liveImpacts.priceImpact + liveImpacts.taxImpact < 0 ? "text-rose-400" : "text-zinc-300"}`}>
                {liveImpacts.priceImpact + liveImpacts.taxImpact > 0 ? "+" : ""}{(liveImpacts.priceImpact + liveImpacts.taxImpact).toFixed(1)}%
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-cyan-500/5 rounded-2xl border border-cyan-500/20 shadow-inner">
            <Info className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">Analisis Rakyat & Kebijakan</div>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                {liveImpacts.priceImpact + liveImpacts.taxImpact > 0 ? (
                  <span className="text-emerald-400">Total dampak kebijakan (+{(liveImpacts.priceImpact + liveImpacts.taxImpact).toFixed(1)}%) menguntungkan rakyat. Rating cenderung naik.</span>
                ) : liveImpacts.priceImpact + liveImpacts.taxImpact < 0 ? (
                  <span className="text-rose-400">Kebijakan harga & pajak ({(liveImpacts.priceImpact + liveImpacts.taxImpact).toFixed(1)}%) memberatkan rakyat. Rating cenderung turun.</span>
                ) : (
                  <span>Kebijakan saat ini stabil. {stats.reasoning}</span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="p-6 border-t border-zinc-800/50 bg-zinc-900/50">
          <button 
            onClick={onClose}
            className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg border border-zinc-700 hover:border-zinc-600 cursor-pointer"
          >
            Tutup Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
