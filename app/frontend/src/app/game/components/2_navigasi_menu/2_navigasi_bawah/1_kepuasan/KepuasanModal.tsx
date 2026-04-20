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
    <div className="absolute inset-0 bg-stone-900/40 z-50 flex items-center justify-center animate-in fade-in duration-300 p-6">
      <div className="bg-[#f3e9d8] border border-amber-800/20 rounded-[32px] w-full max-w-xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Subtle Accents */}
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-600/5 rounded-full blur-[80px]"></div>

        {/* Header */}
        <div className="px-6 py-5 border-b border-amber-800/10 flex items-center justify-between bg-[#dcc7a1]/80 backdrop-blur-md relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-800/10 rounded-xl">
              <Smile className="h-5 w-5 text-amber-800" />
            </div>
            <div>
              <h2 className="text-xl font-black text-amber-950 tracking-tight leading-none italic uppercase">Rating Kepuasan</h2>
              <p className="text-[9px] text-amber-900/60 font-bold uppercase tracking-widest mt-1">Laporan Sentimen Publik Nasional</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl bg-amber-800/10 hover:bg-rose-500/20 text-amber-900/60 hover:text-rose-700 transition-all cursor-pointer border border-amber-800/10 group">
            <X className="h-5 w-5 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto no-scrollbar">
          
          {/* Main Stat Card */}
          <div className="relative p-8 rounded-[2rem] bg-[#e7d9c1] border border-amber-800/10 overflow-hidden group shadow-inner">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Smile className="h-24 w-24 text-amber-800" />
            </div>
            
            <div className="relative flex flex-col items-center text-center space-y-3">
              <div className="text-6xl font-black text-amber-950 tracking-tighter italic">
                {happiness.toFixed(1)}<span className="text-2xl text-amber-700/60 ml-0.5">%</span>
              </div>
              <div className={`px-4 py-1 rounded-full ${status.bg.replace('bg-emerald-500/10', 'bg-emerald-500/20').replace('bg-cyan-500/10', 'bg-sky-500/20')} ${status.border.replace('border-emerald-500/20', 'border-emerald-500/30')} border ${status.color.replace('text-emerald-400', 'text-emerald-700').replace('text-cyan-400', 'text-sky-700').replace('text-amber-400', 'text-amber-700').replace('text-rose-400', 'text-rose-700')} text-[10px] font-black uppercase tracking-widest`}>
                {status.label}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 space-y-2">
              <div className="h-2 w-full bg-amber-800/10 rounded-full overflow-hidden border border-amber-800/5">
                <div 
                  className={`h-full bg-gradient-to-r ${happiness >= 60 ? 'from-emerald-600 to-emerald-400' : 'from-amber-600 to-amber-400'} transition-all duration-1000 ease-out shadow-sm`}
                  style={{ width: `${happiness}%` }}
                />
              </div>
            </div>
          </div>


          {/* Quick Info Grid - Reorganized for Tax (Top) vs Prices (Bottom) */}
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-amber-800/5 border border-amber-800/10 flex flex-col items-center text-center space-y-1">
              <CalendarDays className="h-4 w-4 text-amber-700" />
              <div className="text-[9px] font-black text-amber-900/50 uppercase tracking-widest">PAJAK / BULAN</div>
              <div className={`text-md font-black italic ${liveImpacts.taxImpact > 0 ? 'text-emerald-700' : liveImpacts.taxImpact < 0 ? 'text-rose-700' : 'text-amber-950'}`}>
                {liveImpacts.taxImpact > 0 ? '+' : ''}{(liveImpacts.taxImpact || 0).toFixed(1)}%
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-800/5 border border-amber-800/10 flex flex-col items-center text-center space-y-1">
              <ShoppingCart className="h-4 w-4 text-amber-700" />
              <div className="text-[9px] font-black text-amber-900/50 uppercase tracking-widest">HARGA / BULAN</div>
              <div className={`text-md font-black italic ${liveImpacts.priceImpact > 0 ? 'text-emerald-700' : liveImpacts.priceImpact < 0 ? 'text-rose-700' : 'text-amber-950'}`}>
                {liveImpacts.priceImpact > 0 ? '+' : ''}{(liveImpacts.priceImpact || 0).toFixed(1)}%
              </div>
            </div>
          </div>

          {/* Sektor Infrastruktur & Mobilitas */}
          {/* Sektor Infrastruktur */}
          <div className="p-6 rounded-2xl bg-amber-800/5 border border-amber-800/10">
            <h3 className="text-[10px] font-black text-amber-950 uppercase tracking-[0.15em] italic mb-6 flex items-center gap-2">
              <Activity size={14} className="text-emerald-600" /> Sektor Infrastruktur & Mobilitas
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {[
                { label: infraBreakdown.darat.label, value: infraBreakdown.darat.value, icon: <Truck size={12} />, max: 1.0 },
                { label: infraBreakdown.kereta.label, value: infraBreakdown.kereta.value, icon: <TrainFront size={12} />, max: 1.0 },
                { label: infraBreakdown.maritim_udara.label, value: infraBreakdown.maritim_udara.value, icon: <Plane size={12} />, max: 1.5 }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-[9px] font-black uppercase">
                    <span className="text-amber-900/60 flex items-center gap-1.5">{item.icon} {item.label}</span>
                    <span className="text-emerald-700 italic">+{item.value.toFixed(3)}/hari</span>
                  </div>
                  <div className="h-1 w-full bg-amber-800/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-600 transition-all duration-1000" 
                      style={{ width: `${Math.min(100, (item.value / item.max) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-amber-800/10 rounded-2xl border border-amber-800/10">
            <Info className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-[9px] font-black text-amber-900/60 uppercase tracking-widest">Ringkasan Rating</div>
              <p className="text-[11px] text-amber-950/80 leading-relaxed font-bold italic">
                {liveImpacts.priceImpact + liveImpacts.taxImpact > 0 ? (
                  <span className="text-emerald-800">Kebijakan saat ini menguntungkan rakyat.</span>
                ) : liveImpacts.priceImpact + liveImpacts.taxImpact < 0 ? (
                  <span className="text-rose-800">Beban kebijakan memberatkan rakyat.</span>
                ) : (
                  <span>Kondisi saat ini stabil dan optimal.</span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="p-4 border-t border-amber-800/10 bg-[#dcc7a1]/40">
          <button 
            onClick={onClose}
            className="w-full py-3 bg-amber-800 hover:bg-amber-700 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl transition-all active:scale-95 shadow-sm space-x-2"
          >
            Selesai Analisis
          </button>
        </div>
      </div>
    </div>
  );
}
