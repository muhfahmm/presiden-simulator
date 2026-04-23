"use client"

import { useState, useEffect } from "react";
import {
  X, Users, Info, Smile, ShoppingCart, Receipt, CalendarDays, Flame, Activity,
  Zap, Target, Eye, Building2, Briefcase, GraduationCap, Home, HeartPulse,
  Shield, Globe, Coins, Droplets, Navigation, Truck, Ship, Plane, TrainFront,
  AlertCircle, CheckCircle2
} from "lucide-react";
import { happinessStorage, HappinessStats } from "./happinessStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { AiHunianService } from "../../../AI_logic/2_AI_Populasi/2_kebutuhan_hunian/AiHunianService";

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

  // Sektor Hunian & Permukiman
  const housingStats = AiHunianService.getHousingStats();
  const housingPenalty = housingStats?.penalty || 0;


  const getStatus = (val: number) => {
    if (val >= 80) return { label: "Sangat Puas", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" };
    if (val >= 60) return { label: "Puas", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" };
    if (val >= 40) return { label: "Cukup", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" };
    return { label: "Tidak Puas", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" };
  };

  const status = getStatus(happiness);

  return (
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-6 backdrop-blur-sm">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        {/* Subtle Accents */}
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/5 rounded-full blur-[80px]"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <Smile className="h-6 w-6 text-indigo-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-none uppercase">Statistik Kepuasan</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">National Sentiment Analysis</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Split Content Layout */}
        <div className="flex-1 flex overflow-hidden relative z-10">
          
          {/* Left Column: Core Stats */}
          <div className="w-[340px] border-r border-zinc-800/50 bg-zinc-900/20 flex flex-col p-6 space-y-6 overflow-y-auto no-scrollbar shadow-inner">
            
            {/* Main Stat Card */}
            <div className="relative p-8 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Smile className="h-24 w-24 text-indigo-500" />
              </div>

              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="text-6xl font-black text-white tracking-tighter italic">
                  {happiness.toFixed(1)}<span className="text-2xl text-zinc-500 ml-0.5">%</span>
                </div>
                <div className={`px-4 py-1.5 rounded-full ${status.bg} ${status.border} border ${status.color} text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                  {status.label}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-8 space-y-2">
                <div className="h-3 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                  <div
                    className={`h-full bg-gradient-to-r ${happiness >= 60 ? 'from-emerald-600 to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'from-amber-600 to-amber-400 shadow-[0_0_15px_rgba(217,119,6,0.3)]'} transition-all duration-1000 ease-out`}
                    style={{ width: `${happiness}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20 relative z-10">
            <div className="space-y-12">
              
              {/* Section: Infrastruktur & Mobilitas */}
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1">
                  <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    <Activity className="h-4 w-4 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">1. Sektor Infrastruktur & Mobilitas</h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-1 pb-4">
                  {[
                    { label: infraBreakdown.darat.label, value: infraBreakdown.darat.value, icon: <Truck size={22} />, max: 1.0, color: "text-blue-400" },
                    { label: infraBreakdown.kereta.label, value: infraBreakdown.kereta.value, icon: <TrainFront size={22} />, max: 1.0, color: "text-purple-400" },
                    { label: infraBreakdown.maritim_udara.label, value: infraBreakdown.maritim_udara.value, icon: <Plane size={22} />, max: 1.5, color: "text-cyan-400" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-[2.5rem] flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg">
                      <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                        {item.icon}
                      </div>
                      
                      <div className="flex items-start justify-between relative z-10">
                        <div className={`p-3 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:scale-110 transition-transform duration-500 shadow-xl ${item.color}`}>
                          {item.icon}
                        </div>
                        <div className="bg-zinc-950/50 border border-zinc-800 px-3 py-1.5 rounded-xl">
                          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">+{item.value.toFixed(3)}/hr</span>
                        </div>
                      </div>

                      <div className="space-y-1 relative z-10">
                        <h4 className="text-sm font-black text-white uppercase tracking-tighter italic leading-tight group-hover:text-indigo-400 transition-colors">{item.label}</h4>
                        <div className="mt-3 h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                          <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: `${Math.min(100, (item.value / item.max) * 100)}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Hunian & Permukiman */}
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pt-8 border-t border-zinc-900/50">
                <div className="flex items-center gap-3 mb-8 px-1">
                  <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    <Home className={`h-4 w-4 ${housingPenalty >= 0 ? "text-emerald-400" : "text-rose-400"}`} />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">2. Sektor Hunian & Permukiman</h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-1">
                  {/* Visual Status */}
                  <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-[3rem] relative overflow-hidden group">
                    <div className="absolute -right-8 -top-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                      <Home size={180} />
                    </div>
                    
                    <div className="flex flex-col gap-8 relative z-10">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-2">Status Kecukupan Hunian</p>
                          <h4 className={`text-2xl font-black uppercase italic tracking-tighter ${housingPenalty >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                            {housingPenalty >= 0 ? "Surplus Hunian" : "Defisit Hunian"}
                          </h4>
                        </div>
                        <div className="text-right">
                          <p className={`text-xl font-black italic ${housingPenalty >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                            {housingPenalty > 0 ? "+" : ""}{housingPenalty.toFixed(3)} <span className="text-[10px] opacity-60">pt/hr</span>
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="h-3 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                          <div
                            className={`h-full ${housingPenalty >= 0 ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]" : "bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)]"} transition-all duration-1000`}
                            style={{ width: `${Math.min(100, housingStats?.homeless_percent ? 100 - housingStats.homeless_percent : (housingPenalty >= 0 ? 100 : Math.abs(housingPenalty) * 200))}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] font-black text-zinc-600 uppercase tracking-widest italic">
                          <span>Laju Kebutuhan</span>
                          <span>{housingStats?.homeless_percent.toFixed(1)}% Homeless</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tactical Briefing */}
                  <div className="flex flex-col gap-4 justify-center">
                    {housingStats && housingStats.deficit > 0 && (
                      <div className="bg-rose-500/10 border border-rose-500/20 p-5 rounded-2xl flex items-center gap-4 animate-pulse">
                        <AlertCircle className="text-rose-500 h-6 w-6 shrink-0" />
                        <p className="text-sm text-rose-200 font-bold italic uppercase leading-tight">
                          Peringatan: Kekurangan <span className="text-white underline">{housingStats.deficit.toLocaleString('id-ID')}</span> unit tempat tinggal memicu instabilitas sosial.
                        </p>
                      </div>
                    )}
                    
                    {housingPenalty > 0 ? (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl flex items-center gap-4">
                        <CheckCircle2 className="text-emerald-500 h-6 w-6 shrink-0" />
                        <p className="text-sm text-emerald-200 font-bold italic uppercase leading-tight">
                          Kecukupan hunian nasional berada dalam kondisi optimal, memberikan bonus pertumbuhan sentimen publik.
                        </p>
                      </div>
                    ) : (
                      <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
                        <Info className="text-zinc-500 h-6 w-6 shrink-0" />
                        <p className="text-sm text-zinc-400 font-medium italic uppercase leading-tight">
                          Bangun lebih banyak sektor hunian di menu Pembangunan untuk menekan angka tunawisma.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Summary Briefing Card */}
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[2.5rem] flex items-center gap-6 relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                  <Smile size={160} />
                </div>
                <div className="p-4 bg-cyan-500/10 rounded-2xl border border-indigo-500/20 relative z-10">
                  <Info className="h-8 w-8 text-indigo-400" />
                </div>
                <div className="relative z-10 flex-1">
                  <h4 className="text-lg font-black text-white uppercase italic tracking-widest mb-2">Laporan Sentimen Publik</h4>
                  <p className="text-sm text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    Berdasarkan fluktuasi harga pasar dan kebijakan fiskal saat ini, sentimen publik nasional berada pada fase <span className="text-white font-black italic">{getStatus(happiness).label}</span>. {liveImpacts.priceImpact + liveImpacts.taxImpact > 0 ? (
                      <span className="text-emerald-400 italic">Dampak kebijakan fiskal memberikan kontribusi positif terhadap stabilitas nasional.</span>
                    ) : (
                      <span className="text-rose-400 italic">Tekanan ekonomi dari sektor pasar dan pajak mulai membebani daya beli masyarakat.</span>
                    )} Direkomendasikan untuk menjaga keseimbangan antara pajak dan subsidi infrastruktur untuk mempertahankan loyalitas rakyat.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}