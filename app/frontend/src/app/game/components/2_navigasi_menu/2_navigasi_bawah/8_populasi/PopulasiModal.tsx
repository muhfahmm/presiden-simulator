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
import { SocialCareService } from "../../../AI_logic/2_AI_Populasi/3_kesejahteraan_sosial/SocialCareService";



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

    // AI Social Impact Adjustment
    const povertyMultiplier = SocialCareService.getPovertyMultiplier();

    // Baseline (Approx Gini 38)
    let elite = 2.0;
    let upMid = 12.0;
    let mid = 45.0;
    let work = 30.0;
    let poor = 11.0 * povertyMultiplier;

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
    <div className="absolute inset-0 bg-stone-900/40 z-50 flex items-center justify-center animate-in fade-in duration-300 p-6">
      <div className="bg-[#f3e9d8] border border-amber-800/20 rounded-[32px] w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        {/* Subtle Accents */}
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-600/5 rounded-full blur-[80px]"></div>

        {/* Header */}
        <div className="px-6 py-5 border-b border-amber-800/10 flex items-center justify-between bg-[#dcc7a1]/80 backdrop-blur-md relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-800/10 rounded-xl">
              <Users2 className="h-5 w-5 text-amber-800" />
            </div>
            <div>
              <h2 className="text-xl font-black text-amber-950 tracking-tight leading-none italic uppercase">Kependudukan Nasional</h2>
              <p className="text-[9px] text-amber-900/60 font-bold uppercase tracking-widest mt-1">Monitoring Demografi & Kesejahteraan Rakyat</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl bg-amber-800/10 hover:bg-rose-500/20 text-amber-900/60 hover:text-rose-700 transition-all cursor-pointer border border-amber-800/10 group">
            <X className="h-5 w-5 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Split Content Layout */}
        <div className="flex-1 flex overflow-hidden relative z-10">
          
          {/* Left Column: Core Stats */}
          <div className="w-[340px] border-r border-amber-800/10 bg-[#e7d9c1]/30 flex flex-col p-6 space-y-6 overflow-y-auto no-scrollbar shadow-inner">
            
            {/* Total Population Card */}
            <div className="relative p-8 rounded-[2rem] bg-[#e7d9c1] border border-amber-800/10 overflow-hidden group shadow-inner">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users2 className="h-24 w-24 text-amber-800" />
              </div>

              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="text-[9px] font-black text-amber-900/50 uppercase tracking-widest leading-none">Total Populasi Nasional</div>
                <div className="text-4xl font-black text-amber-950 tracking-tighter italic">
                  {population.toLocaleString('id-ID')}
                </div>
                <div className="text-[10px] font-black text-amber-800/60 uppercase tracking-widest">Jiwa Terdaftar</div>
              </div>

              {/* Progress-like accent */}
              <div className="mt-6 h-1.5 w-full bg-amber-800/10 rounded-full overflow-hidden">
                <div className="h-full bg-amber-800 opacity-30" style={{ width: '100%' }} />
              </div>
            </div>

            {/* Growth Grid */}
            <div className="grid grid-cols-1 gap-3">
              <div className="p-4 rounded-2xl bg-amber-800/5 border border-amber-800/10 flex flex-col items-center text-center space-y-1">
                {totalDailyDelta >= 0 ? <TrendingUp className="h-4 w-4 text-emerald-700" /> : <TrendingDown className="h-4 w-4 text-rose-700" />}
                <div className="text-[9px] font-black text-amber-900/50 uppercase tracking-widest">LAJU PERTUMBUHAN</div>
                <div className={`text-md font-black italic ${totalDailyDelta >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {totalDailyDelta >= 0 ? '+' : ''}{totalDailyDelta.toLocaleString('id-ID')} / hari
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-800/5 border border-amber-800/10 flex flex-col items-center text-center space-y-1">
                <ShieldAlert className={`h-4 w-4 ${SocialCareService.getSocialStats().homelessCount === 0 ? 'text-emerald-700' : 'text-rose-700'}`} />
                <div className="text-[9px] font-black text-amber-900/50 uppercase tracking-widest">TUNAWISMA</div>
                <div className={`text-md font-black italic ${SocialCareService.getSocialStats().homelessCount === 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {SocialCareService.getSocialStats().homelessCount.toLocaleString('id-ID')} Jiwa
                </div>
              </div>
            </div>

            {/* Demographic Metadata */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-2xl bg-amber-800/5 border border-amber-800/10 flex flex-col items-center text-center">
                <div className="text-[8px] font-black text-amber-900/40 uppercase tracking-widest">Median Usia</div>
                <div className="text-sm font-black text-amber-950 italic">~30.2 THN</div>
              </div>
              <div className="p-3 rounded-2xl bg-amber-800/5 border border-amber-800/10 flex flex-col items-center text-center">
                <div className="text-[8px] font-black text-amber-900/40 uppercase tracking-widest">Dependency</div>
                <div className="text-sm font-black text-amber-950 italic">47.4%</div>
              </div>
            </div>

            {/* Economic Context */}
            <div className="flex items-start gap-4 p-4 bg-amber-800/10 rounded-2xl border border-amber-800/10">
              <Activity className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-[9px] font-black text-amber-900/60 uppercase tracking-widest">Stabilitas Sosial</div>
                <p className="text-[10px] text-amber-950/80 leading-relaxed font-bold italic">
                  {totalMonthlyGrowthPercent >= 0 ? (
                    <span className="text-emerald-800">Demografi berada dalam fase ekspansi stabil ({totalMonthlyGrowthPercent.toFixed(2)}%/bln).</span>
                  ) : (
                    <span className="text-rose-800">Peringatan: Populasi mengalami penurunan negatif.</span>
                  )}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Breakdowns */}
          <div className="flex-1 p-8 overflow-y-auto no-scrollbar space-y-8 bg-[#f3e9d8]">
            
            {/* Social Caste Structure */}
            <div className="p-6 rounded-3xl bg-amber-800/5 border border-amber-800/10 shadow-sm">
              <h3 className="text-[11px] font-black text-amber-950 uppercase tracking-[0.15em] italic mb-6 flex items-center gap-2">
                <Gavel size={14} className="text-amber-800" /> Struktur Sosial & Kesejahteraan
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialClasses.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex flex-col gap-2 p-3 rounded-2xl bg-amber-800/5 border border-amber-800/10">
                      <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-wider">
                        <span className={`flex items-center gap-2 ${item.text.replace('text-', 'text-amber-')}`}><Icon size={14} /> {item.label}</span>
                        <span className="text-amber-950 italic">{item.percent}%</span>
                      </div>
                      <div className="h-1 w-full bg-amber-800/10 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color.replace('bg-', 'bg-amber-')} opacity-60 transition-all duration-1000`} style={{ width: `${item.percent}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Advanced Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-3xl bg-[#e7d9c1] border border-amber-800/10 flex flex-col items-center text-center space-y-2 shadow-inner">
                <Heart size={20} className="text-rose-700" />
                <div className="text-[9px] font-black text-amber-900/50 uppercase tracking-widest">Harapan Hidup</div>
                <div className="text-2xl font-black text-amber-950 italic">{lifeExpectancy.toFixed(1)} <span className="text-xs">THN</span></div>
              </div>
              
              <div className="p-5 rounded-3xl bg-[#e7d9c1] border border-amber-800/10 flex flex-col items-center text-center space-y-2 shadow-inner">
                <ShieldAlert size={20} className="text-amber-700" />
                <div className="text-[9px] font-black text-amber-900/50 uppercase tracking-widest">Tingkat Keamanan</div>
                <div className="text-2xl font-black text-amber-950 italic">{securityLevel.toFixed(1)}%</div>
              </div>

              {/* SOCIAL INEQUALITY Card */}
              <div className="col-span-2 p-5 rounded-3xl bg-amber-800/10 border border-amber-800/10 flex flex-col items-center text-center space-y-2 shadow-sm">
                <Gavel size={20} className="text-amber-900" />
                <div className="text-[9px] font-black text-amber-900/50 uppercase tracking-widest">Kesenjangan Sosial (Gini Index)</div>
                <div className="text-2xl font-black text-amber-950 italic">
                  {(() => {
                    try {
                      // Note: These imports should be at top level, but keeping logic for now
                      const baseGini = (country.hukum as any)?.kesenjangan_sosial || 38.0;
                      return baseGini.toFixed(1);
                    } catch (e) {
                      return "38.0";
                    }
                  })()}
                </div>
                <div className="text-[10px] text-amber-900/60 font-bold italic">Distribusi Pendapatan Nasional</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
