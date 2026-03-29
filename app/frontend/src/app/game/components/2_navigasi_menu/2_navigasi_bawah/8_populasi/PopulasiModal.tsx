"use client"

import { useState, useEffect } from "react";
import { X, Users, TrendingUp, TrendingDown, Minus, ShoppingCart, CalendarDays, Users2, Clock, Heart, Brain, ShieldAlert, BadgeDollarSign, Activity, GraduationCap, Gavel, Landmark, Briefcase, ChevronRight, Baby } from "lucide-react";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/countries/region/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { mineralKritisRate, produkIndustriRate, komoditasPanganRate, produksiMiliter, tempatUmum } from "@/app/database/data/types";
import { KAPASITAS_LISTRIK_METADATA } from "@/app/database/data/types/1_kelistrikan"
import NavigasiWaktu from "../2_ekonomi/1-perdagangan/NavigasiWaktu";


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

  // Tax impact on population growth
  const domesticKeys = ["ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"];
  const currentTaxes = taxStorage.getTaxes(country.name_en) || country.pajak;
  const avgTaxRate = domesticKeys.length > 0
    ? domesticKeys.reduce((acc, key) => acc + ((currentTaxes as any)[key]?.tarif || 0), 0) / domesticKeys.length
    : 0;

  const getPopGrowthRate = (rate: number): number => {
    if (rate <= 15) return 0.0001;
    if (rate <= 35) return 0.00005;
    if (rate <= 55) return 0.00002;
    if (rate <= 75) return -0.00003;
    return -0.00008;
  };

  const taxGrowthRate = getPopGrowthRate(avgTaxRate);
  const monthlyTaxGrowthPercent = taxGrowthRate * 30 * 100;
  const dailyTaxDelta = Math.round(population * taxGrowthRate);

  // Price impact on population growth
  const prices = priceStorage.getData(country);
  const priceKeys = Object.keys(BASE_PRICES) as Array<keyof typeof BASE_PRICES>;
  const avgPriceMult = priceKeys.reduce((acc: number, key) => {
    const base = (BASE_PRICES as any)[key] || 1;
    const current = (prices as any)[key] || base;
    return acc + (current / base);
  }, 0) / 11;

  const getPopGrowthRateFromPrice = (multiplier: number): number => {
    if (multiplier <= 0.8) return 0.0001;
    if (multiplier <= 1.2) return 0.00005;
    if (multiplier <= 1.5) return 0.00002;
    if (multiplier <= 2.0) return -0.00003;
    return -0.00008;
  };

  const priceGrowthRate = getPopGrowthRateFromPrice(avgPriceMult);
  const monthlyPriceGrowthPercent = priceGrowthRate * 30 * 100;
  const dailyPriceDelta = Math.round(population * priceGrowthRate);



  // --- ADVANCED STATISTICS CALCULATION ---
  const buildingDeltas = buildingStorage.getBuildingDeltas();

  // 1. WELL-BEING: Living Cost Index
  // Ratio of Avg Salary to Avg Basic Prices (Food, Power, Water)
  const avgSalary = (
    (country.gaji.gaji_asn + country.gaji.gaji_guru + country.gaji.gaji_medis + country.gaji.gaji_militer) / 4
  );
  const basicPriceAvg = (
    (prices.harga_beras + prices.harga_listrik + prices.harga_air + prices.harga_bbm) / 4
  );
  // Normalize index (Higher is better)
  const livingCostIndex = Math.min(100, Math.max(0, (avgSalary / (basicPriceAvg / 10)) * 2));

  // 2. QUALITY OF LIFE: Health Score & Life Expectancy
  const rsBesarCount = (country.kesehatan?.rumah_sakit_besar || 0) + (buildingDeltas["rumah_sakit_besar"] || 0);
  const rsKecilCount = (country.kesehatan?.rumah_sakit_kecil || 0) + (buildingDeltas["rumah_sakit_kecil"] || 0);
  const factoryCount = Object.values(country.sektor_manufaktur || {}).reduce((a: number, b: any) => a + (typeof b === 'number' ? b : 0), 0) +
    Object.values(buildingDeltas).filter((_, i) => Object.keys(buildingDeltas)[i].includes("pabrik")).reduce((a, b) => a + b, 0);

  const healthScore = Math.min(100, Math.max(0,
    (country.kesehatan?.indeks_kesehatan || 85) + (rsBesarCount * 2) + (rsKecilCount * 0.5) - (factoryCount * 0.1)
  ));
  const lifeExpectancy = (country.kesehatan?.harapan_hidup || 72) + (healthScore > 90 ? 5 : healthScore > 70 ? 2 : healthScore < 50 ? -5 : 0);

  const currentDateMs = getStoredGameDate().getTime();
  const diffTime = Math.abs(currentDateMs - INITIAL_GAME_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const sixMonthIndex = Math.floor(diffDays / 180);

  const nextUpdateMs = INITIAL_GAME_DATE.getTime() + (sixMonthIndex + 1) * 180 * 24 * 60 * 60 * 1000;
  const nextUpdateDate = new Date(nextUpdateMs);
  const nextDateStr = `${nextUpdateDate.getDate().toString().padStart(2, '0')}-${(nextUpdateDate.getMonth() + 1).toString().padStart(2, '0')}-${nextUpdateDate.getFullYear()}`;

  // Birth & Death Engine (Realistic Dynamics)
  const baseBirthRate = 1.72; // Annual 1.72%
  const baseDeathRate = 0.68; // Annual 0.68%

  // Health Impact: Better health = fewer deaths, slightly higher birth success
  const healthModifier = (healthScore - 72) / 100; // e.g., if health is 85, mod is +0.13%
  const finalBirthRate = (baseBirthRate + (healthModifier * 0.1)) / 100;
  const finalDeathRate = (baseDeathRate - (healthModifier * 0.4)) / 100;

  const dailyBirths = Math.round((population * finalBirthRate) / 365);
  const dailyDeaths = Math.round((population * finalDeathRate) / 365);
  const naturalDailyDelta = dailyBirths - dailyDeaths;

  // External impacts (Tax & Price)
  const totalDailyDelta = naturalDailyDelta + dailyTaxDelta + dailyPriceDelta;
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

    // Calculate all industrial & social sectors
    processSectorData(KAPASITAS_LISTRIK_METADATA, country.sektor_listrik);
    processSectorData(mineralKritisRate, country.sektor_ekstraksi);
    processSectorData(produkIndustriRate, country.sektor_manufaktur);
    processSectorData(produksiMiliter, country.armada_militer);
    processSectorData(tempatUmum, country.armada_kepolisian); // Public spaces / Infrastructure

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

    return {
      totalVacancies: totalVacanciesCount,
      totalEmployed: totalEmployedCount,
      // Base unemployment rate is now more responsive to expanded sector coverage
      unemploymentRate: Math.max(1.8, 100 - (91.5 + (totalEmployedCount / population * 100)))
    };
  };

  const { totalVacancies, totalEmployed, unemploymentRate } = calculateWorkforce();

  // 4. SECURITY: Crime Rate
  const policeStations = (country.armada_kepolisian?.armada_polisi?.pusat_komando?.kantor_polisi || 36) + (buildingDeltas["kantor_polisi"] || 0);
  const securityIndex = (country.hukum?.indeks_keamanan || 78) + (policeStations * 0.8) - (unemploymentRate * 0.5);
  const crimeRate = Math.max(0, Math.min(100, 100 - securityIndex));

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

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
            <NavigasiWaktu />
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
                  {(() => {
                    const baseBrackets = [
                      { label: "Anak-Anak", range: "0-14", icon: Baby, percent: 25.2, color: "bg-sky-500", text: "text-sky-400", bg: "bg-sky-500/10" },
                      { label: "Pemuda", range: "15-24", icon: GraduationCap, percent: 16.8, color: "bg-emerald-500", text: "text-emerald-400", bg: "bg-emerald-500/10" },
                      { label: "Produktif", range: "25-54", icon: Briefcase, percent: 42.4, color: "bg-indigo-500", text: "text-indigo-400", bg: "bg-indigo-500/10" },
                      { label: "Pra-Lansia", range: "55-64", icon: Brain, percent: 8.6, color: "bg-amber-500", text: "text-amber-400", bg: "bg-amber-500/10" },
                      { label: "Lansia", range: "65+", icon: Landmark, percent: 7.0, color: "bg-purple-500", text: "text-purple-400", bg: "bg-purple-500/10" }
                    ];

                    const driftAdjustments = baseBrackets.map((b, i) => {
                      const drift = Math.sin(diffDays * 0.08 + i) * 0.35;
                      return { ...b, percent: Math.max(0.1, b.percent + drift) };
                    });

                    const totalRaw = driftAdjustments.reduce((sum, b) => sum + b.percent, 0);
                    const normalized = driftAdjustments.map(b => ({
                      ...b,
                      percent: parseFloat(((b.percent / totalRaw) * 100).toFixed(1))
                    }));

                    return normalized.map((bracket, i) => (
                      <div key={i} className={`p-4 rounded-[24px] bg-zinc-950/30 border border-zinc-800 hover:border-zinc-700 transition-all group/b flex flex-col gap-2`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-lg ${bracket.bg} ${bracket.text} border border-white/5`}>
                              <bracket.icon size={14} />
                            </div>
                            <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest leading-none">{bracket.label}</span>
                          </div>
                          <span className={`text-sm font-black ${bracket.text} italic tabular-nums`}>{bracket.percent}%</span>
                        </div>
                        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                          <div className={`h-full ${bracket.color} opacity-80`} style={{ width: `${bracket.percent}%` }} />
                        </div>
                      </div>
                    ));
                  })()}
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
              {/* WELL-BEING Card */}
              <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800/50 shadow-xl group hover:border-amber-500/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50" />
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <BadgeDollarSign className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-white italic tabular-nums">{livingCostIndex.toFixed(1)}</span>
                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mt-1">Skala Indeks</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-1">Kesejahteraan</h4>
                  <p className="text-sm text-zinc-300 font-bold italic mb-4">Indeks biaya hidup aktual</p>
                  <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                    <div className="h-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" style={{ width: `${livingCostIndex}%` }} />
                  </div>
                </div>
              </div>

              {/* QUALITY OF LIFE Card */}
              <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800/50 shadow-xl group hover:border-rose-500/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500/50" />
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-white italic tabular-nums">{healthScore.toFixed(1)}</span>
                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mt-1">Health Score</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                    <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1 italic">Harapan Hidup</p>
                    <p className="text-sm font-black text-rose-400 italic tabular-nums">{lifeExpectancy} THN</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                    <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1 italic">Status Medis</p>
                    <p className="text-sm font-black text-white italic">{healthScore > 80 ? 'PRIMA' : 'STABIL'}</p>
                  </div>
                </div>
                <h4 className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.3em] mt-2">Kualitas Hidup</h4>
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
            </div>
          </div>

          {/* Section: Economic Impacts Section & Prognosis */}
          <div className="space-y-8 mt-12 mb-8">
            <div className="flex items-center gap-5 px-4">
              <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.5em] whitespace-nowrap italic">Analisis Strategis</h3>
              <div className="h-px flex-1 bg-zinc-800/40" />
            </div>

            <div className="flex flex-col gap-6">
              {/* Impacts Vertical Stack */}
              <div className="flex flex-col gap-6 w-full">
                <div className="w-full p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity">
                    <CalendarDays className="h-24 w-24 -mr-6 -mt-6" />
                  </div>
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-xl bg-white/[0.02] border border-white/5 ${monthlyTaxGrowthPercent >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                      <CalendarDays className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Estimasi Dampak Pajak</h4>
                      <div className="flex items-center gap-3">
                        <p className={`text-2xl font-black italic tabular-nums ${monthlyTaxGrowthPercent >= 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
                          {monthlyTaxGrowthPercent >= 0 ? '+' : ''}{monthlyTaxGrowthPercent.toFixed(3)}%
                        </p>
                        <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest italic">/ Bulan</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right border-l border-zinc-800 pl-8">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em] italic mb-0.5">Prediksi Laju</p>
                    <p className="text-lg font-black text-white italic tabular-nums">{dailyTaxDelta >= 0 ? "+" : ""}{dailyTaxDelta.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-600 uppercase tracking-widest">Jiwa / Hari</span></p>
                  </div>
                </div>

                <div className="w-full p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity">
                    <ShoppingCart className="h-24 w-24 -mr-6 -mt-6" />
                  </div>
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-xl bg-white/[0.02] border border-white/5 ${monthlyPriceGrowthPercent >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                      <ShoppingCart className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Efek Dinamika Harga</h4>
                      <div className="flex items-center gap-3">
                        <p className={`text-2xl font-black italic tabular-nums ${monthlyPriceGrowthPercent >= 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
                          {monthlyPriceGrowthPercent >= 0 ? '+' : ''}{monthlyPriceGrowthPercent.toFixed(3)}%
                        </p>
                        <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest italic">/ Bulan</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right border-l border-zinc-800 pl-8">
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em] italic mb-0.5">Prediksi Laju</p>
                    <p className="text-lg font-black text-white italic tabular-nums">{dailyPriceDelta >= 0 ? "+" : ""}{dailyPriceDelta.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-600 uppercase tracking-widest">Jiwa / Hari</span></p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer (Synchronized with Economics pattern) */}
        <div className="px-10 py-6 bg-zinc-900/30 border-t border-zinc-900 flex items-center justify-between backdrop-blur-3xl relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Data Real-Time</span>
            </div>
            <p className="text-xs text-zinc-500 font-medium italic tracking-tight">Kalkulasi demografi berbasis proyeksi kebijakan fiskal, harga pasar, dan indeks kesejahteraan aktual.</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Net Daily Growth</span>
              <span className={`text-base font-black tracking-tighter italic ${totalDailyDelta >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {totalDailyDelta >= 0 ? '+' : ''}{totalDailyDelta.toLocaleString('id-ID')} Jiwa / Hari
              </span>
            </div>
            <div className="h-10 w-px bg-zinc-800" />
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Social Index Rank</span>
              <span className="text-base font-black text-blue-400 tracking-tighter italic uppercase">Nasional Terpadu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
