"use client"

import { useState, useEffect } from "react";
import { 
  X, Users, Info, Smile, ShoppingCart, Receipt, CalendarDays, Flame, Activity, 
  Zap, Target, Eye, Building2, Briefcase, GraduationCap, Home, HeartPulse, 
  Shield, Globe, Coins, Droplets
} from "lucide-react";
import { happinessStorage, HappinessStats } from "./happinessStorage";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/index";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";

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

  // Hitung daily happiness delta dari pajak (restored)
  const computeDailyTaxDelta = (): number => {
    const ti = liveImpacts.taxImpact;
    if (ti > 2.5) return 0.1;
    if (ti >= 0) return 0;
    if (ti >= -5) return -0.2;
    return -0.5;
  };
  const dailyTaxDelta = computeDailyTaxDelta();

  // Hitung daily happiness delta dari harga
  const computeDailyPriceDelta = (): number => {
    if (typeof window === 'undefined') return 0;
    const session = gameStorage.getSession() as any;
    const countryName = session?.country || "Indonesia";
    const country = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
    const priceData = priceStorage.getData(country);
    const priceKeys = Object.keys(BASE_PRICES) as Array<keyof typeof BASE_PRICES>;
    const avgPriceMult = priceKeys.reduce((acc: number, k) => acc + ((priceData as any)[k] / (BASE_PRICES as any)[k]), 0) / priceKeys.length;

    if (avgPriceMult <= 0.8) return 0.1;
    if (avgPriceMult <= 1.2) return 0;
    if (avgPriceMult <= 1.5) return -0.2;
    return -0.5;
  };
  const dailyPriceDelta = computeDailyPriceDelta();

  const isRedZone = happiness < 40;
  
  // Total Daily Delta (Rating harian asli)
  const totalDailyDeltaRaw = dailyTaxDelta + dailyPriceDelta;

  // Khusus untuk tampilan (Dampak Terpisah)
  const effectiveTaxDailyDelta = isRedZone 
    ? (dailyTaxDelta < 0 ? dailyTaxDelta * 2 : dailyTaxDelta * 1.5) 
    : dailyTaxDelta;
    
  const effectivePriceDailyDelta = isRedZone 
    ? (dailyPriceDelta < 0 ? dailyPriceDelta * 2 : dailyPriceDelta * 1.5) 
    : dailyPriceDelta;


  const getStatus = (val: number) => {
    if (val >= 80) return { label: "Sangat Puas", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" };
    if (val >= 60) return { label: "Puas", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" };
    if (val >= 40) return { label: "Cukup", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" };
    return { label: "Tidak Puas", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" };
  };

  const status = getStatus(happiness);

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
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


          {/* Quick Info Grid - Reorganized for Tax (Top) vs Prices (Bottom) */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Row: Pajak Nasional */}
            <div className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 flex flex-col items-center text-center space-y-2">
              <CalendarDays className={`h-5 w-5 ${liveImpacts.taxImpact > 0 ? "text-emerald-400" : "text-rose-400"}`} />
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">DAMPAK PAJAK / BULAN</div>
              <div className={`text-sm font-black ${liveImpacts.taxImpact > 0 ? 'text-emerald-400' : liveImpacts.taxImpact < 0 ? 'text-rose-400' : 'text-white'}`}>
                {liveImpacts.taxImpact > 0 ? '+' : ''}{(liveImpacts.taxImpact || 0).toFixed(1)}%
              </div>
            </div>

            <div className={`p-4 rounded-2xl flex flex-col items-center text-center space-y-2 relative overflow-hidden border ${
              effectiveTaxDailyDelta > 0 ? 'bg-emerald-950/40 border-emerald-500/20' :
              effectiveTaxDailyDelta < 0 ? 'bg-rose-950/40 border-rose-500/20' :
              'bg-zinc-950/50 border-zinc-800/50'
            }`}>
              {isRedZone && effectiveTaxDailyDelta < 0 && (
                <Flame className="h-5 w-5 text-rose-500 animate-pulse" />
              )}
              {!isRedZone || effectiveTaxDailyDelta >= 0 ? (
                <CalendarDays className={`h-5 w-5 ${effectiveTaxDailyDelta > 0 ? 'text-emerald-400' : effectiveTaxDailyDelta < 0 ? 'text-rose-400' : 'text-zinc-500'}`} />
              ) : null}
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">DAMPAK PAJAK / HARI</div>
              <div className={`text-sm font-black ${effectiveTaxDailyDelta > 0 ? 'text-emerald-400' : effectiveTaxDailyDelta < 0 ? 'text-rose-400' : 'text-zinc-300'}`}>
                {effectiveTaxDailyDelta > 0 ? '+' : ''}{effectiveTaxDailyDelta.toFixed(1)}
              </div>
              {isRedZone && <div className="text-[8px] font-black text-rose-500 uppercase tracking-wider">Zona Merah ×2</div>}
            </div>

            {/* Bottom Row: Harga Pokok */}
            <div className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 flex flex-col items-center text-center space-y-2">
              <ShoppingCart className={`h-5 w-5 ${liveImpacts.priceImpact > 0 ? "text-emerald-400" : "text-rose-400"}`} />
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">DAMPAK HARGA / BULAN</div>
              <div className={`text-sm font-black ${liveImpacts.priceImpact > 0 ? 'text-emerald-400' : liveImpacts.priceImpact < 0 ? 'text-rose-400' : 'text-white'}`}>
                {liveImpacts.priceImpact > 0 ? '+' : ''}{(liveImpacts.priceImpact || 0).toFixed(1)}%
              </div>
            </div>

            <div className={`p-4 rounded-2xl flex flex-col items-center text-center space-y-2 border ${
              effectivePriceDailyDelta > 0 ? 'bg-emerald-950/20 border-emerald-500/20' :
              effectivePriceDailyDelta < 0 ? 'bg-rose-950/20 border-rose-500/20' :
              'bg-zinc-950/50 border-zinc-800/50'
            }`}>
              <ShoppingCart className={`h-5 w-5 ${effectivePriceDailyDelta > 0 ? 'text-emerald-400' : effectivePriceDailyDelta < 0 ? 'text-rose-400' : 'text-zinc-500'}`} />
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">DAMPAK HARGA / HARI</div>
              <div className={`text-sm font-black ${effectivePriceDailyDelta > 0 ? 'text-emerald-400' : effectivePriceDailyDelta < 0 ? 'text-rose-400' : 'text-zinc-300'}`}>
                {effectivePriceDailyDelta > 0 ? '+' : ''}{effectivePriceDailyDelta.toFixed(2)}
              </div>
              {isRedZone && <div className="text-[8px] font-black text-rose-500 uppercase tracking-wider">Zona Merah ×1.5</div>}
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

