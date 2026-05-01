"use client"

import { useState, useEffect } from "react";
import { X, Users, Info, TrendingUp, ShieldAlert, BadgeDollarSign, Activity, Users2 } from "lucide-react";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { calculateDetailedPopulationMetrics } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaLogic";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { priceStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { SocialCareService } from "../../../../AI_logic/2_AI_Populasi/3_kesejahteraan_sosial/SocialCareService";

export default function RingkasanPopulasiModal({ 
  isOpen, 
  onClose,
  setActiveMenu
}: { 
  isOpen: boolean, 
  onClose: () => void,
  setActiveMenu?: (menu: string) => void
}) {
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

  if (!isOpen) return null;

  const session = gameStorage.getSession() as any;
  const countryName = session?.country || "Indonesia";
  const country = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];

  const currentDateMs = getStoredGameDate().getTime();
  const diffTime = Math.abs(currentDateMs - INITIAL_GAME_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const buildingDeltas = buildingStorage.getBuildingDeltas();
  const {
    totalDailyDelta,
    lifeExpectancy,
    dailyBirths,
    dailyDeaths,
    securityLevel,
  } = calculateDetailedPopulationMetrics(country, population, buildingDeltas, diffDays);

  const prices = priceStorage.getData(country);
  const monthlyIncomeProxy = parseInt(country.pendapatan_nasional || "0") / 12;
  const basicPriceAvg = (
    (prices.harga_beras + prices.harga_listrik + prices.harga_air + prices.harga_bbm) / 4
  );
  
  const { ideologyStorage } = require("../../6_sosial_budaya/2_ideologi/ideologyStorage");
  const { SOSIALISME_WELFARE_BONUS } = require("../../6_sosial_budaya/2_ideologi/logic/4_sosialisme/1_plus/plus");
  const currentIdeology = ideologyStorage.getCurrentIdeology(country.ideology);

  let livingCostIndex = Math.min(100, Math.max(5, (monthlyIncomeProxy / (basicPriceAvg * 2)) * 10));
  if (currentIdeology === "Sosialisme") {
    livingCostIndex = Math.min(100, livingCostIndex * SOSIALISME_WELFARE_BONUS);
  }

  const totalMonthlyGrowthPercent = ((totalDailyDelta * 30) / population) * 100;

  return (
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-6">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-600/5 rounded-full blur-[80px]"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                <Users2 className="h-6 w-6 text-indigo-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight leading-none uppercase">Kependudukan</h2>
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">Ringkasan Nasional</p>
              </div>
            </div>

            <div className="flex items-center bg-zinc-900/80 p-1 rounded-2xl border border-zinc-800/50 backdrop-blur-md ml-4">
              <button
                className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
              >
                Ringkasan
              </button>
              <button
                onClick={() => setActiveMenu?.("Dashboard:Populasi")}
                className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all text-zinc-500 hover:text-zinc-300"
              >
                Statistik
              </button>
            </div>
          </div>

          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Summary Cards */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80 shadow-lg">
              <div className="p-3 bg-indigo-500/10 rounded-xl">
                <Users className="h-6 w-6 text-indigo-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Total Populasi</p>
                <p className="text-xl font-black text-white leading-tight">{population.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">JIWA</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80 shadow-lg">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <TrendingUp className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Laju Pertumbuhan</p>
                <p className={`text-xl font-black leading-tight ${totalDailyDelta >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                  {totalDailyDelta >= 0 ? '+' : ''}{totalDailyDelta.toLocaleString('id-ID')} <span className="text-[10px] opacity-60">/hr</span>
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80 shadow-lg">
              <div className="p-3 bg-rose-500/10 rounded-xl">
                <ShieldAlert className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Tunawisma</p>
                <p className="text-xl font-black text-white leading-tight">{SocialCareService.getSocialStats().homelessCount.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">JIWA</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80 shadow-lg">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <BadgeDollarSign className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Kesejahteraan</p>
                <p className="text-xl font-black text-white leading-tight">{livingCostIndex.toFixed(1)} <span className="text-[10px] text-zinc-500">INDX</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20 relative z-10">
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] space-y-6">
                <h3 className="text-lg font-black text-white uppercase tracking-widest italic flex items-center gap-3">
                  <Info className="h-5 w-5 text-indigo-400" />
                  Informasi Demografi
                </h3>
                <div className="space-y-4">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Negara {country.name_id} memiliki total populasi sebesar {population.toLocaleString('id-ID')} jiwa. 
                    Saat ini, laju pertumbuhan harian berada pada angka {totalDailyDelta.toLocaleString('id-ID')} jiwa per hari.
                  </p>
                  <div className="pt-4 border-t border-zinc-800 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase">Angka Kelahiran</p>
                      <p className="text-xl font-black text-emerald-400">{dailyBirths.toLocaleString('id-ID')}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase">Angka Kematian</p>
                      <p className="text-xl font-black text-rose-400">{dailyDeaths.toLocaleString('id-ID')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] space-y-6">
                <h3 className="text-lg font-black text-white uppercase tracking-widest italic flex items-center gap-3">
                  <Activity className="h-5 w-5 text-emerald-400" />
                  Kondisi Sosial
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 text-sm">Indeks Keamanan</span>
                    <span className="text-white font-bold">{securityLevel.toFixed(1)}%</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${securityLevel}%` }} />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-zinc-400 text-sm">Harapan Hidup</span>
                    <span className="text-white font-bold">{lifeExpectancy.toFixed(1)} Tahun</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: `${(lifeExpectancy/100)*100}%` }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[2.5rem] flex items-center gap-6 relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                <Info size={160} />
              </div>
              <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 relative z-10">
                <Info className="h-8 w-8 text-indigo-400" />
              </div>
              <div className="relative z-10 flex-1">
                <h4 className="text-lg font-black text-white uppercase italic tracking-widest mb-2">Laporan Analisis Demografi</h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed max-w-2xl">
                  {totalMonthlyGrowthPercent >= 0 ? (
                    <span className="text-emerald-400/80 italic">Status: Pertumbuhan Populasi Positif.</span>
                  ) : (
                    <span className="text-rose-400/80 italic">Status: Penurunan Populasi Terdeteksi.</span>
                  )} Demografi nasional saat ini menunjukkan tren {totalMonthlyGrowthPercent >= 0 ? "ekspansi" : "kontraksi"} sebesar {Math.abs(totalMonthlyGrowthPercent).toFixed(2)}% per bulan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

