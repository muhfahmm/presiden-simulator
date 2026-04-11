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
    healthScore,
    lifeExpectancy,
    taxGrowthRate,
    priceGrowthRate,
    dailyBirths,
    dailyDeaths,
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

  // 3. HUMAN CAPITAL: National Workforce Stats
  const calculateWorkforce = () => {
    let totalVacanciesCount = 0;
    let totalEmployedCount = 0;

    const currentDateMs = getStoredGameDate().getTime();
    const diffTime = Math.abs(currentDateMs - INITIAL_GAME_DATE.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const sixMonthIndex = Math.floor(diffDays / 180);

    const processSectorData = (metadata: any, sectorData: any) => {
      if (!sectorData) return;
      Object.entries(metadata).forEach(([key, val]: [string, any]) => {
        const dataKey = val.dataKey || key;
        const count = (sectorData[dataKey] || 0) + (buildingDeltas[key] || 0);
        const perUnitVacancies = val.lowongan_kerja || 0;

        const sectorTotalVacancies = count * perUnitVacancies;
        // Standardized occupancy (Seeded by val.label || key for 100% sync with Produksi Hub)
        const seed = (sixMonthIndex + (val.label || key).length) % 100;
        const occupancyPercentage = 0.65 + (seed % 30) / 100;
        const sectorFilledVacancies = Math.floor(sectorTotalVacancies * occupancyPercentage);

        totalVacanciesCount += sectorTotalVacancies;
        totalEmployedCount += sectorFilledVacancies;
      });
    };

    const processNestedSectorData = (metadata: any, nestedSectorData: any) => {
      if (!nestedSectorData) return;
      
      const flattenData = (obj: any): any => {
        let res: any = {};
        for (const [key, val] of Object.entries(obj)) {
          if (typeof val === 'object' && val !== null) {
            res = { ...res, ...flattenData(val) };
          } else {
            res[key] = val;
          }
        }
        return res;
      };

      const flatData = flattenData(nestedSectorData);
      processSectorData(metadata, flatData);
    };

    // Calculate all industrial & social sectors
    processSectorData(KAPASITAS_LISTRIK_METADATA, country.sektor_listrik);
    processSectorData(mineralKritisRate, country.sektor_ekstraksi);
    processSectorData(produkIndustriRate, country.sektor_manufaktur);
    processSectorData(produksiMiliter, country.armada_militer);
    processSectorData(infrastrukturRate, country.infrastruktur);
    processNestedSectorData(sosialRate, country.armada_kepolisian);

    // Calculate all food/agri sub-sectors
    Object.entries(komoditasPanganRate).forEach(([key, val]: [string, any]) => {
      const dataKey = val.dataKey;
      let sectorData = null;
      if ((country.sektor_peternakan as any)?.[dataKey] !== undefined) sectorData = country.sektor_peternakan;
      else if ((country.sektor_agrikultur as any)?.[dataKey] !== undefined) sectorData = country.sektor_agrikultur;
      else if ((country.sektor_perikanan as any)?.[dataKey] !== undefined) sectorData = country.sektor_perikanan;
      else if ((country.sektor_olahan_pangan as any)?.[dataKey] !== undefined) sectorData = country.sektor_olahan_pangan;

      if (sectorData) {
        const count = ((sectorData as any)[dataKey] || 0) + (buildingDeltas[key] || 0);
        const perUnitVacancies = val.lowongan_kerja || 0;
        const sectorTotalVacancies = count * perUnitVacancies;

        const seed = (sixMonthIndex + (val.label || key).length) % 100;
        const occupancyPercentage = 0.65 + (seed % 30) / 100;
        totalVacanciesCount += sectorTotalVacancies;
        totalEmployedCount += Math.floor(sectorTotalVacancies * occupancyPercentage);
      }
    });

    const { ideologyStorage } = require("../6_sosial_budaya/2_ideologi/ideologyStorage");
    const currentIdeology = ideologyStorage.getCurrentIdeology(country.ideology);
    const isKomunisme = currentIdeology === "Komunisme";

    return {
      totalVacancies: totalVacanciesCount,
      totalEmployed: totalEmployedCount,
      // Base unemployment rate is now more responsive to expanded sector coverage
      // Communism always has 0% unemployment
      unemploymentRate: isKomunisme ? 0 : Math.max(1.8, 100 - (91.5 + (totalEmployedCount / population * 100)))
    };
  };

  const { totalVacancies, totalEmployed, unemploymentRate } = calculateWorkforce();

  // 4. SECURITY: Crime Rate
  const policeStations = (country.armada_kepolisian?.armada_polisi?.kantor_polisi || 36) + (buildingDeltas["kantor_polisi"] || 0);
  const securityIndex = (country.hukum?.indeks_keamanan || 78) + (policeStations * 0.8) - (unemploymentRate * 0.5);
  const crimeRate = Math.max(0, Math.min(100, 100 - securityIndex));

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
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1 italic">Laju Harian</span>
                    <div className={`flex items-center gap-2 text-xl font-black italic ${totalDailyDelta >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                      {totalDailyDelta >= 0 ? "+" : ""}{totalDailyDelta.toLocaleString('id-ID')}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1 italic">Estimasi Ekonomi</span>
                    <div className={`flex items-center gap-1 text-xl font-black italic ${totalMonthlyGrowthPercent >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                      {totalMonthlyGrowthPercent >= 0 ? "+" : ""}{totalMonthlyGrowthPercent.toFixed(2)}%
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Median Usia</span>
                    <span className="text-sm font-black text-indigo-400">~30.2 THN</span>
                  </div>
                  <div className="w-[1px] h-6 bg-zinc-800" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Dependency</span>
                    <span className="text-sm font-black text-white">47.4%</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Detailed Demographics Structure */}
              <div className="lg:w-[55%] flex flex-col gap-5">
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
                            <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest leading-none">{bracket.label}</span>
                          </div>
                          <span className={`text-sm font-black ${style.text} italic tabular-nums`}>{bracket.percent}%</span>
                        </div>
                        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                          <div className={`h-full ${style.color} opacity-80`} style={{ width: `${bracket.percent}%` }} />
                        </div>
                      </div>
                    );
                  })}
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


              {/* QUALITY OF LIFE Card */}
              <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800/50 shadow-xl group hover:border-rose-500/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500/50" />
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-white italic tabular-nums">{healthScore.toFixed(1)}</span>
                    <p className="text-[11px] font-black text-zinc-300 uppercase tracking-widest mt-1">Health Score</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                    <p className="text-[11px] font-black text-zinc-300 uppercase tracking-widest mb-1 italic">Harapan Hidup</p>
                    <p className="text-lg font-black text-rose-400 italic tabular-nums">{lifeExpectancy.toFixed(1)} THN</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                    <p className="text-[11px] font-black text-zinc-300 uppercase tracking-widest mb-1 italic">Status Medis</p>
                    <p className="text-lg font-black text-white italic">
                      {healthScore > 90 ? 'PRIMA' : healthScore > 75 ? 'STABIL' : healthScore > 60 ? 'WASPADA' : 'KRITIS'}
                    </p>
                  </div>
                </div>
                <h4 className="text-[12px] font-black text-zinc-300 uppercase tracking-[0.3em] mt-2">Kualitas Hidup</h4>
              </div>

              {/* HUMAN CAPITAL Card */}
              <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800/50 shadow-xl group hover:border-blue-500/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50" />
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <span className={`text-2xl font-black italic tabular-nums ${unemploymentRate > 15 ? 'text-rose-400' : 'text-emerald-400'}`}>{unemploymentRate.toFixed(1)}%</span>
                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mt-1">Pengangguran</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={10} className="text-zinc-500" />
                      <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest italic">Total Lowongan</p>
                    </div>
                    <p className="text-sm font-black text-white italic tabular-nums">{totalVacancies.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                    <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1 italic">Tenaga Kerja Terisi</p>
                    <p className="text-sm font-black text-blue-400 italic tabular-nums">{totalEmployed.toLocaleString('id-ID')}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800 overflow-hidden relative">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-400">
                      <Clock size={12} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Sinkronisasi Berkala</span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-black text-indigo-400 italic tabular-nums tracking-tighter shadow-[0_0_10px_rgba(129,140,248,0.2)]">Update: {nextDateStr}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none block mb-1 italic">Next Update</span>
                    <span className="text-[8px] font-black text-zinc-600 uppercase tracking-tighter">Deterministic Cycle</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.3em]">Kapasitas Lapangan Kerja</h4>
                    <span className="text-[9px] font-bold text-blue-400 italic">{((totalEmployed / totalVacancies) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800/50 p-0.5">
                    <div className={`h-full rounded-md transition-all bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]`} style={{ width: `${Math.min(100, (totalEmployed / totalVacancies) * 100)}%` }} />
                  </div>
                </div>
              </div>


              {/* SECURITY Card */}
              <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800/50 shadow-xl group hover:border-purple-500/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50" />
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <span className={`text-2xl font-black italic tabular-nums ${crimeRate > 20 ? 'text-amber-400' : 'text-emerald-400'}`}>{crimeRate.toFixed(1)}%</span>
                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mt-1">Crime Rate</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-1">Status Keamanan</h4>
                    <p className="text-sm text-white font-black italic tracking-wide">{crimeRate < 10 ? 'AMAN TERKENDALI' : 'DALAM PANTAUAN'}</p>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${crimeRate < 10 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'}`}>
                    <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${crimeRate < 10 ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    <span className="text-[7px] font-black uppercase tracking-widest">{crimeRate < 10 ? 'SAFE' : 'RISK'}</span>
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
