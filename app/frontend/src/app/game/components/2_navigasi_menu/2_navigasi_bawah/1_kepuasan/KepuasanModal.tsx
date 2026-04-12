"use client"

import { useState, useEffect } from "react";
import { 
  X, Users, Info, Smile, ShoppingCart, Receipt, CalendarDays, Flame, Activity, 
  Zap, Target, Eye, Building2, Briefcase, GraduationCap, Home, HeartPulse, 
  Shield, Globe, Coins, Droplets, Navigation, Truck, Ship, Plane, TrainFront
} from "lucide-react";
import { happinessStorage, HappinessStats } from "./happinessStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
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
    window.addEventListener("building_storage_updated", handleUpdate);
    return () => {
      window.removeEventListener("happiness_updated", handleUpdate);
      window.removeEventListener("price_updated", handleUpdate);
      window.removeEventListener("tax_updated", handleUpdate);
      window.removeEventListener("building_storage_updated", handleUpdate);
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
  
  // Hitung Bonus Infrastruktur & Logistik
  const infraBreakdown = happinessStorage.getInfraDetailedBreakdown();

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
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-xl">
              <Smile className="h-6 w-6 text-cyan-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-none">Pusat Analisis Kepuasan Rakyat</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">🇮🇩 Indonesia — National Happiness Analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 flex-1 overflow-y-auto no-scrollbar">
          
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
              <div className="flex justify-between text-[11px] font-black text-zinc-400 uppercase tracking-tighter">
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
              <div className="text-[11px] font-black text-zinc-300 uppercase tracking-widest">DAMPAK PAJAK / BULAN</div>
              <div className={`text-lg font-black ${liveImpacts.taxImpact > 0 ? 'text-emerald-400' : liveImpacts.taxImpact < 0 ? 'text-rose-400' : 'text-white'}`}>
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
              <div className="text-[11px] font-black text-zinc-300 uppercase tracking-widest">DAMPAK PAJAK / HARI</div>
              <div className={`text-lg font-black ${effectiveTaxDailyDelta > 0 ? 'text-emerald-400' : effectiveTaxDailyDelta < 0 ? 'text-rose-400' : 'text-zinc-300'}`}>
                {effectiveTaxDailyDelta > 0 ? '+' : ''}{effectiveTaxDailyDelta.toFixed(1)}
              </div>
              {isRedZone && <div className="text-[8px] font-black text-rose-500 uppercase tracking-wider">Zona Merah ×2</div>}
            </div>

            {/* Bottom Row: Harga Pokok */}
            <div className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 flex flex-col items-center text-center space-y-2">
              <ShoppingCart className={`h-5 w-5 ${liveImpacts.priceImpact > 0 ? "text-emerald-400" : "text-rose-400"}`} />
              <div className="text-[11px] font-black text-zinc-300 uppercase tracking-widest">DAMPAK HARGA / BULAN</div>
              <div className={`text-lg font-black ${liveImpacts.priceImpact > 0 ? 'text-emerald-400' : liveImpacts.priceImpact < 0 ? 'text-rose-400' : 'text-white'}`}>
                {liveImpacts.priceImpact > 0 ? '+' : ''}{(liveImpacts.priceImpact || 0).toFixed(1)}%
              </div>
            </div>

            <div className={`p-4 rounded-2xl flex flex-col items-center text-center space-y-2 border ${
              effectivePriceDailyDelta > 0 ? 'bg-emerald-950/20 border-emerald-500/20' :
              effectivePriceDailyDelta < 0 ? 'bg-rose-950/20 border-rose-500/20' :
              'bg-zinc-950/50 border-zinc-800/50'
            }`}>
              <ShoppingCart className={`h-5 w-5 ${effectivePriceDailyDelta > 0 ? 'text-emerald-400' : effectivePriceDailyDelta < 0 ? 'text-rose-400' : 'text-zinc-500'}`} />
              <div className="text-[11px] font-black text-zinc-300 uppercase tracking-widest">DAMPAK HARGA / HARI</div>
              <div className={`text-lg font-black ${effectivePriceDailyDelta > 0 ? 'text-emerald-400' : effectivePriceDailyDelta < 0 ? 'text-rose-400' : 'text-zinc-300'}`}>
                {effectivePriceDailyDelta > 0 ? '+' : ''}{effectivePriceDailyDelta.toFixed(2)}
              </div>
              {isRedZone && <div className="text-[8px] font-black text-rose-500 uppercase tracking-wider">Zona Merah ×1.5</div>}
            </div>
          </div>

          {/* Sektor Infrastruktur & Mobilitas */}
          <div className="p-8 rounded-[2rem] bg-zinc-900/30 border border-zinc-800/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
               <Navigation className="h-24 w-24 text-cyan-500" />
            </div>
            
            <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] italic mb-8 flex items-center gap-3">
              <div className="p-1.5 bg-cyan-500/10 rounded-lg text-cyan-500"><TrainFront size={16} /></div>
              Sektor Infrastruktur & Mobilitas Nasional
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Darat */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  <Truck size={12} /> {infraBreakdown.darat.label}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-emerald-400 italic">+{infraBreakdown.darat.value.toFixed(3)}</span>
                  <span className="text-[9px] font-bold text-emerald-500/50 uppercase">Rating / Hari</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-1000" 
                     style={{ width: `${Math.min(100, (infraBreakdown.darat.value / 1.0) * 100)}%` }}
                   />
                </div>
              </div>

              {/* Kereta */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  <TrainFront size={12} /> {infraBreakdown.kereta.label}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-emerald-400 italic">+{infraBreakdown.kereta.value.toFixed(3)}</span>
                  <span className="text-[9px] font-bold text-emerald-500/50 uppercase">Rating / Hari</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-1000" 
                     style={{ width: `${Math.min(100, (infraBreakdown.kereta.value / 1.0) * 100)}%` }}
                   />
                </div>
              </div>

              {/* Maritim & Udara */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  <Plane size={12} /> {infraBreakdown.maritim_udara.label}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-emerald-400 italic">+{infraBreakdown.maritim_udara.value.toFixed(3)}</span>
                  <span className="text-[9px] font-bold text-emerald-500/50 uppercase">Rating / Hari</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-1000" 
                     style={{ width: `${Math.min(100, (infraBreakdown.maritim_udara.value / 1.5) * 100)}%` }}
                   />
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-[9px] text-zinc-600 font-bold uppercase tracking-widest leading-snug border-t border-zinc-800/50 pt-4">
              Analisis: Bonus kepuasan dihitung berdasarkan ketersediaan Jalur Sepeda, Tol, Bus, Kereta Api, Pelabuhan, dan Bandara secara nasional.
            </p>
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
