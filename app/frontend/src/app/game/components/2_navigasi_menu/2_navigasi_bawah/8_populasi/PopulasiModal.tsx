"use client"

import { useState, useEffect } from "react";
import { X, Users, TrendingUp, TrendingDown, Minus, ShoppingCart, CalendarDays, Users2, Clock, Heart, Brain, ShieldAlert, BadgeDollarSign, Activity, GraduationCap, Gavel, Landmark, Briefcase, ChevronRight, Baby } from "lucide-react";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { calculateDetailedPopulationMetrics } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaLogic";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { mineralKritisRate, produkIndustriRate, komoditasPanganRate, produksiMiliter, infrastrukturRate, sosialRate } from "@/app/database/data/semua_fitur_negara";
import { KAPASITAS_LISTRIK_METADATA } from "@/app/database/data/semua_fitur_negara"



export default function PopulasiModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [population, setPopulation] = useState(() => populationStorage.getPopulation());

  useEffect(() => {
    const handleUpdate = () => {
      setPopulation(populationStorage.getPopulation());
    };
    window.addEventListener("population_updated", handleUpdate);
    window.addEventListener("price_updated", handleUpdate);
    window.addEventListener("tax_updated", handleUpdate);
    return () => {
      window.removeEventListener("population_updated", handleUpdate);
      window.removeEventListener("price_updated", handleUpdate);
      window.removeEventListener("tax_updated", handleUpdate);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.history.pushState(null, '', '/game/kependudukan');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Logic calculation (mirrored from PopulationDeltaLogic.ts but more detailed for the grid)
  const session = gameStorage.getSession() as any;
  const countryName = session?.country || "Indonesia";
  const country = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];

  const currentDateMs = getStoredGameDate().getTime();
  const diffTime = Math.abs(currentDateMs - INITIAL_GAME_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Unified calculation using shared logic
  const buildingDeltas = buildingStorage.getBuildingDeltas();
  const {
    totalDailyDelta,
    naturalDailyDelta,
    dailyTaxDelta,
    dailyPriceDelta,
    lifeExpectancy,
    taxGrowthRate,
    priceGrowthRate,
    dailyBirths,
    dailyDeaths,
    securityLevel,
    demographics
  } = calculateDetailedPopulationMetrics(country, population, buildingDeltas, diffDays);

  const monthlyTaxGrowthPercent = taxGrowthRate * 30 * 100;
  const monthlyPriceGrowthPercent = priceGrowthRate * 30 * 100;

  // --- ADVANCED STATISTICS CALCULATION ---
  const prices = priceStorage.getData(country);

  // 1. WELL-BEING: Living Cost Index
  const monthlyIncomeProxy = parseInt(country.pendapatan_nasional || "0") / 12;
  const basicPriceAvg = (
    (prices.harga_beras + prices.harga_listrik + prices.harga_air + prices.harga_bbm) / 4
  );
  const { ideologyStorage } = require("../6_sosial_budaya/2_ideologi/ideologyStorage");
  const { SOSIALISME_WELFARE_BONUS } = require("../6_sosial_budaya/2_ideologi/logic/4_sosialisme/1_plus/plus");
  const currentIdeology = ideologyStorage.getCurrentIdeology(country.ideology);

  let livingCostIndex = Math.min(100, Math.max(5, (monthlyIncomeProxy / (basicPriceAvg * 2)) * 10));
  if (currentIdeology === "Sosialisme") {
    livingCostIndex = Math.min(100, livingCostIndex * SOSIALISME_WELFARE_BONUS);
  }


  const sixMonthIndex = Math.floor(diffDays / 180);

  const nextUpdateMs = INITIAL_GAME_DATE.getTime() + (sixMonthIndex + 1) * 180 * 24 * 60 * 60 * 1000;
  const nextUpdateDate = new Date(nextUpdateMs);
  const nextDateStr = `${nextUpdateDate.getDate().toString().padStart(2, '0')}-${(nextUpdateDate.getMonth() + 1).toString().padStart(2, '0')}-${nextUpdateDate.getFullYear()}`;

  const totalMonthlyGrowthPercent = ((totalDailyDelta * 30) / population) * 100;


  // 4. SECURITY: Crime Rate & Level
  const crimeRate = Math.max(0, Math.min(100, 100 - securityLevel));

  // 5. SOCIAL CASTE / CLASS CALCULATION
  const calculateSocialStructure = () => {
    const gini = (country.hukum as any)?.kesenjangan_sosial || 38.0;
    const isKapitalisme = currentIdeology === "Kapitalisme";
    const isKomunisme = currentIdeology === "Komunisme";
    const effectiveGini = isKapitalisme ? gini * 1.15 : isKomunisme ? gini * 0.75 : gini;

    // Baseline (Approx Gini 38)
    let elite = 2.0;
    let upMid = 12.0;
    let mid = 45.0;
    let work = 30.0;
    let poor = 11.0;

    // Gini Impact: Higher Gini = More extreme ends
    const giniFactor = (effectiveGini - 38) / 100;
    elite += giniFactor * 15;
    poor += giniFactor * 40;
    mid -= giniFactor * 45;
    upMid -= giniFactor * 10;

    // Welfare (Living Cost) Impact: Lower welfare = More poor
    const welfareFactor = (60 - livingCostIndex) / 100;
    poor += welfareFactor * 25;
    work += welfareFactor * 5;
    mid -= welfareFactor * 30;

    // Normalize
    const classes = [
      { label: "Kaum Elit", percent: Math.max(0.2, elite), color: "bg-amber-500", text: "text-amber-400", bg: "bg-amber-500/10", icon: BadgeDollarSign },
      { label: "Menengah Atas", percent: Math.max(1, upMid), color: "bg-sky-500", text: "text-sky-400", bg: "bg-sky-500/10", icon: Landmark },
      { label: "Kelas Menengah", percent: Math.max(5, mid), color: "bg-emerald-500", text: "text-emerald-400", bg: "bg-emerald-500/10", icon: Briefcase },
      { label: "Kelas Pekerja", percent: Math.max(10, work), color: "bg-zinc-500", text: "text-zinc-400", bg: "bg-zinc-500/10", icon: Gavel },
      { label: "Masyarakat Miskin", percent: Math.max(1, poor), color: "bg-rose-500", text: "text-rose-400", bg: "bg-rose-500/10", icon: ShieldAlert }
    ];

    const total = classes.reduce((sum, c) => sum + c.percent, 0);
    return classes.map(c => ({
      ...c,
      percent: parseFloat(((c.percent / total) * 100).toFixed(1))
    }));
  };

  const socialClasses = calculateSocialStructure();

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8 pointer-events-none">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500 pointer-events-auto">

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>

        {/* Header (Synchronized with ProduksiBarangModal) */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl">
              <Users2 className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Status Kependudukan Nasional</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Monitoring Demografi & Kesejahteraan Rakyat</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white flex items-center gap-3 shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all">
              <Activity className={`h-6 w-6 ${totalDailyDelta >= 0 ? 'text-emerald-500' : 'text-rose-500'}`} />
              <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">
                Stabilitas: <span className={totalDailyDelta >= 0 ? 'text-emerald-500' : 'text-rose-500'}>{totalDailyDelta >= 0 ? 'Optimal' : 'Kritis'}</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
            >
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dashboard Summary Bar */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Users2 className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Total Populasi</p>
                <p className="text-xl font-black text-white leading-tight">{population.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">JIWA</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className={`p-3 rounded-xl ${totalDailyDelta >= 0 ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
                {totalDailyDelta >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-500" />}
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Pertumbuhan Harian</p>
                <p className={`text-xl font-black leading-tight ${totalDailyDelta >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {totalDailyDelta >= 0 ? '+' : ''}{totalDailyDelta.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">JIWA / HARI</span>
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className={`p-3 rounded-xl ${livingCostIndex >= 60 ? 'bg-emerald-500/10' : 'bg-amber-500/10'}`}>
                <BadgeDollarSign className={`h-6 w-6 ${livingCostIndex >= 60 ? 'text-emerald-500' : 'text-amber-500'}`} />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Indeks Kesejahteraan</p>
                <p className={`text-xl font-black leading-tight ${livingCostIndex >= 60 ? 'text-emerald-500' : 'text-amber-400'}`}>
                  {livingCostIndex.toFixed(1)} <span className="text-[10px] text-zinc-500">/ 100</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03),transparent_40%)] space-y-12">

          {/* Unified Demographic Hero Card */}
          <div className="relative p-10 rounded-[48px] bg-zinc-900 border border-white/5 overflow-hidden group shadow-2xl">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
              <Users2 className="h-64 w-64 text-blue-500 -mr-16 -mt-16" />
            </div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]"></div>

            <div className="relative flex flex-col lg:flex-row gap-12 lg:items-center">
              {/* Left Side: National Totals */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                <div>
                  <div className="text-xs font-black text-blue-400 uppercase tracking-[0.5em] mb-3 flex items-center justify-center lg:justify-start gap-3 italic">
                    <div className="h-px w-6 bg-blue-500/40" />
                    Populasi Nasional Terpadu
                  </div>
                  <div className="text-5xl font-black text-white tracking-tighter tabular-nums drop-shadow-2xl">
                    {population.toLocaleString('id-ID')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 w-full max-w-sm pt-6 border-t border-zinc-800/50">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest mb-1 italic">Laju Harian</span>
                    <div className={`flex items-center gap-2 text-2xl font-black italic ${totalDailyDelta >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                      {totalDailyDelta >= 0 ? "+" : ""}{totalDailyDelta.toLocaleString('id-ID')}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest mb-1 italic">Estimasi Ekonomi</span>
                    <div className={`flex items-center gap-1 text-2xl font-black italic ${totalMonthlyGrowthPercent >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                      {totalMonthlyGrowthPercent >= 0 ? "+" : ""}{totalMonthlyGrowthPercent.toFixed(2)}%
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Median Usia</span>
                    <span className="text-base font-black text-indigo-400 transition-all duration-300">~30.2 THN</span>
                  </div>
                  <div className="w-[1px] h-6 bg-zinc-800" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Dependency</span>
                    <span className="text-base font-black text-white transition-all duration-300">47.4%</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Detailed Demographics Structure */}
              <div className="lg:w-[55%] flex flex-col gap-8">
                {/* Age Structure */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-1">
                    <h4 className="text-xs font-black text-zinc-400 uppercase tracking-[0.4em] italic">Struktur Demografi Berdasarkan Usia</h4>
                    <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent mx-4 opacity-50" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                    {demographics.map((bracket, i) => {
                      const iconMap: Record<string, any> = {
                        "Anak-Anak": { icon: Baby, color: "bg-sky-500", text: "text-sky-400", bg: "bg-sky-500/10" },
                        "Pemuda": { icon: GraduationCap, color: "bg-emerald-500", text: "text-emerald-400", bg: "bg-emerald-500/10" },
                        "Produktif": { icon: Briefcase, color: "bg-indigo-500", text: "text-indigo-400", bg: "bg-indigo-500/10" },
                        "Pra-Lansia": { icon: Brain, color: "bg-amber-500", text: "text-amber-400", bg: "bg-amber-500/10" },
                        "Lansia": { icon: Landmark, color: "bg-purple-500", text: "text-purple-400", bg: "bg-purple-500/10" }
                      };
                      const style = iconMap[bracket.label];
                      const Icon = style.icon;

                      return (
                        <div key={i} className={`p-4 rounded-[24px] bg-zinc-950/30 border border-zinc-800 hover:border-zinc-700 transition-all group/b flex flex-col gap-2`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`p-1.5 rounded-lg ${style.bg} ${style.text} border border-white/5`}>
                                <Icon size={14} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[13px] font-black text-zinc-300 uppercase tracking-widest leading-none">{bracket.label}</span>
                                <span className="text-[11px] font-bold text-zinc-400 tracking-tighter tabular-nums mt-1 whitespace-nowrap leading-none">
                                  {Math.round((bracket.percent / 100) * population).toLocaleString('id-ID')} Jiwa
                                </span>
                              </div>
                            </div>
                            <span className={`text-base font-black ${style.text} italic tabular-nums`}>{bracket.percent}%</span>
                          </div>
                          <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <div className={`h-full ${style.color} opacity-80`} style={{ width: `${bracket.percent}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Social Caste Structure */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-1">
                    <h4 className="text-xs font-black text-blue-400 uppercase tracking-[0.4em] italic drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">Struktur Sosial & Kesejahteraan</h4>
                    <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent mx-4 opacity-50" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {socialClasses.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className={`p-4 rounded-[24px] bg-zinc-950/30 border border-zinc-800 hover:border-blue-500/20 transition-all group/b flex flex-col gap-2`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`p-1.5 rounded-lg ${item.bg} ${item.text} border border-white/5`}>
                                <Icon size={14} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[13px] font-black text-zinc-300 uppercase tracking-widest leading-none">{item.label}</span>
                                <span className="text-[11px] font-bold text-zinc-400 tracking-tighter tabular-nums mt-1 whitespace-nowrap leading-none">
                                  {Math.round((item.percent / 100) * population).toLocaleString('id-ID')} Jiwa
                                </span>
                              </div>
                            </div>
                            <span className={`text-base font-black ${item.text} italic tabular-nums`}>{item.percent}%</span>
                          </div>
                          <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} opacity-80`} style={{ width: `${item.percent}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Advanced Simulation Metrics - Refactored into a Neater Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-5 px-4">
              <h3 className="text-xs font-black text-blue-400 uppercase tracking-[0.5em] whitespace-nowrap italic drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">Metrik Simulasi Kependudukan</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


              {/* LIFE EXPECTANCY Card */}
              <div className="p-10 rounded-[3rem] bg-zinc-900 border border-zinc-800/50 shadow-xl group hover:border-rose-500/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-[2rem] bg-rose-500/10 border border-rose-500/20 text-rose-400">
                    <Heart className="h-8 w-8" />
                  </div>
                  <div className="text-right">
                    <span className="text-5xl font-black text-white italic tabular-nums tracking-tighter transition-all duration-700">{lifeExpectancy.toFixed(1)}</span>
                    <p className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em] mt-2 italic">Harapan Hidup (THN)</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-5 rounded-3xl bg-zinc-950/50 border border-zinc-800">
                  <div className="flex flex-col">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1 italic">Status Nasional</p>
                    <p className="text-xl font-black text-white italic tracking-wide">
                      {lifeExpectancy >= 80 ? 'PRIMA' : lifeExpectancy >= 75 ? 'STABIL' : lifeExpectancy >= 70 ? 'WASPADA' : 'KRITIS'}
                    </p>
                  </div>
                  <div className={`px-4 py-2 rounded-2xl border transition-all duration-500 ${lifeExpectancy >= 75 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-rose-500/10 border-rose-500/20 text-rose-400 shadow-[0_0_15px_rgba(225,29,72,0.1)]'}`}>
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {lifeExpectancy >= 83 ? 'ELITE' : lifeExpectancy >= 75 ? 'HEALTHY' : 'CONCERN'}
                    </span>
                  </div>
                </div>
              </div>

              {/* SECURITY Card (NEW LARGE) */}
              <div className="p-10 rounded-[3rem] bg-zinc-900 border border-zinc-800/50 shadow-xl group hover:border-blue-500/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-[2rem] bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <ShieldAlert className="h-8 w-8" />
                  </div>
                  <div className="text-right">
                    <span className="text-5xl font-black text-white italic tabular-nums tracking-tighter transition-all duration-700">{securityLevel.toFixed(1)}</span>
                    <p className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em] mt-2 italic">Tingkat Keamanan (/100)</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-5 rounded-3xl bg-zinc-950/50 border border-zinc-800">
                  <div className="flex flex-col">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1 italic">Status Keamanan</p>
                    <p className="text-xl font-black text-white italic tracking-wide">
                      {securityLevel >= 80 ? 'AMAN' : securityLevel >= 70 ? 'STABIL' : securityLevel >= 60 ? 'WASPADA' : 'RAWAN'}
                    </p>
                  </div>
                  <div className={`px-4 py-2 rounded-2xl border transition-all duration-500 ${securityLevel >= 75 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-amber-500/10 border-amber-500/20 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)]'}`}>
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {securityLevel >= 85 ? 'SECURE' : securityLevel >= 70 ? 'STABLE' : 'RISKY'}
                    </span>
                  </div>
                </div>
              </div>


              {/* SOCIAL INEQUALITY Card */}
              <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800/50 shadow-xl group hover:border-orange-500/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-500/50" />
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                    <Gavel className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <span className={`text-2xl font-black text-white italic tabular-nums`}>
                      {(() => {
                        const { ideologyStorage } = require("../6_sosial_budaya/2_ideologi/ideologyStorage");
                        const { KAPITALISME_INEQUALITY_PENALTY } = require("../6_sosial_budaya/2_ideologi/logic/3_kapitalisme/2_minus/minus");
                        const currentIdeology = ideologyStorage.getCurrentIdeology(country.ideology);
                        const baseGini = (country.hukum as any)?.kesenjangan_sosial || 38.0;
                        const isKapitalisme = currentIdeology === "Kapitalisme";
                        return (isKapitalisme ? baseGini * KAPITALISME_INEQUALITY_PENALTY : baseGini).toFixed(1);
                      })()}
                    </span>
                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mt-1">Indeks Gini</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-1">Kesenjangan Sosial</h4>
                  <p className="text-sm text-zinc-300 font-bold italic transition-colors group-hover:text-white">Distribusi Pendapatan Nasional</p>
                </div>
              </div>
            </div>
          </div>



        </div>


      </div>
    </div>
  );
}
