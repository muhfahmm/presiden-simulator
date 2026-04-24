"use client"

import { useState, useEffect } from "react";
import { X, Users, TrendingUp, ShieldAlert, BadgeDollarSign, Activity, Users2, Clock, Heart, Gavel, Landmark, Briefcase, Baby } from "lucide-react";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { calculateDetailedPopulationMetrics } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaLogic";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { priceStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { SocialCareService } from "../../../../AI_logic/2_AI_Populasi/3_kesejahteraan_sosial/SocialCareService";

export default function StatistikPopulasiModal({ 
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

  const calculateSocialStructure = () => {
    const gini = (country.hukum as any)?.kesenjangan_sosial || 38.0;
    const isKapitalisme = currentIdeology === "Kapitalisme";
    const isKomunisme = currentIdeology === "Komunisme";
    const effectiveGini = isKapitalisme ? gini * 1.15 : isKomunisme ? gini * 0.75 : gini;

    const povertyMultiplier = SocialCareService.getPovertyMultiplier();

    let elite = 2.0;
    let upMid = 12.0;
    let mid = 45.0;
    let work = 30.0;
    let poor = 11.0 * povertyMultiplier;

    const giniFactor = (effectiveGini - 38) / 100;
    elite += giniFactor * 15;
    poor += giniFactor * 40;
    mid -= giniFactor * 45;
    upMid -= giniFactor * 10;

    const welfareFactor = (60 - livingCostIndex) / 100;
    poor += welfareFactor * 25;
    work += welfareFactor * 5;
    mid -= welfareFactor * 30;

    const classes = [
      { label: "Kaum Elit", percent: Math.max(0.2, elite), color: "bg-amber-700", text: "text-amber-950", bg: "bg-amber-800/10", icon: BadgeDollarSign },
      { label: "Menengah Atas", percent: Math.max(1, upMid), color: "bg-blue-700", text: "text-blue-950", bg: "bg-blue-800/10", icon: Landmark },
      { label: "Kelas Menengah", percent: Math.max(5, mid), color: "bg-emerald-700", text: "text-emerald-950", bg: "bg-emerald-800/10", icon: Briefcase },
      { label: "Kelas Pekerja", percent: Math.max(10, work), color: "bg-stone-700", text: "text-stone-950", bg: "bg-stone-800/10", icon: Gavel },
      { label: "Masyarakat Miskin", percent: Math.max(1, poor), color: "bg-rose-700", text: "text-rose-950", bg: "bg-rose-800/10", icon: ShieldAlert }
    ];

    const total = classes.reduce((sum, c) => sum + c.percent, 0);
    return classes.map(c => ({
      ...c,
      percent: parseFloat(((c.percent / total) * 100).toFixed(1))
    }));
  };

  const socialClasses = calculateSocialStructure();

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
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">Analisis Statistik</p>
              </div>
            </div>

            <div className="flex items-center bg-zinc-900/80 p-1 rounded-2xl border border-zinc-800/50 backdrop-blur-md ml-4">
              <button
                onClick={() => setActiveMenu?.("Dashboard:Populasi:Overview")}
                className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all text-zinc-500 hover:text-zinc-300"
              >
                Ringkasan
              </button>
              <button
                className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
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
            {/* Section: Struktur Kelas Sosial */}
            <div>
              <div className="flex items-center gap-3 mb-5 px-1">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Gavel className="h-4 w-4 text-indigo-400" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest italic">1. Struktur Kelas Sosial <span className="text-indigo-400 ml-3 font-black lowercase italic text-xs tracking-normal bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">(Distribusi Gini: {((country.hukum as any)?.kesenjangan_sosial || 38.0).toFixed(1)})</span></h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-1 pb-4">
                {socialClasses.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-[2.5rem] flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg min-h-[180px]">
                      <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                        <Icon className="h-20 w-20" />
                      </div>
                      
                      <div className="flex items-start justify-between relative z-10">
                        <div className={`p-3 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:scale-110 transition-transform duration-500 shadow-xl ${item.color.replace('bg-', 'text-')}`}>
                          <Icon size={22} />
                        </div>
                        <div className="bg-zinc-950/50 border border-zinc-800 px-3 py-1.5 rounded-xl">
                          <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.percent}%</span>
                        </div>
                      </div>

                      <div className="space-y-1 relative z-10">
                        <h4 className="text-sm font-black text-white uppercase tracking-tighter italic leading-tight group-hover:text-indigo-400 transition-colors">{item.label}</h4>
                        <div className="mt-3 h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                          <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.percent}%` }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section: Metrik Demografi & Vitalitas */}
            <div className="pt-8 border-t border-zinc-900/50">
              <div className="flex items-center gap-3 mb-8 px-1">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Activity className="h-4 w-4 text-emerald-400" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest italic">2. Metrik Demografi & Vitalitas</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Harapan Hidup", val: lifeExpectancy.toFixed(1), unit: "THN", icon: Heart, color: "text-rose-500", desc: "Kualitas Kesehatan" },
                  { label: "Keamanan Nasional", val: securityLevel.toFixed(1), unit: "%", icon: ShieldAlert, color: "text-amber-500", desc: "Stabilitas Hukum" },
                  { label: "Median Usia", val: "30.2", unit: "THN", icon: Clock, color: "text-indigo-400", desc: "Struktur Umur" },
                  { label: "Kelahiran Harian", val: dailyBirths.toLocaleString('id-ID'), unit: "JIWA", icon: Baby, color: "text-emerald-500", desc: "Laju Fertilitas" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/30 border border-zinc-800/50 p-5 rounded-2xl flex items-center justify-between hover:bg-zinc-800/50 hover:border-indigo-500/20 transition-all group shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform ${item.color}`}>
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] text-zinc-100 font-black uppercase tracking-widest leading-none">{item.label}</p>
                        <p className="text-[9px] text-zinc-600 mt-1.5 font-bold tracking-tighter uppercase">{item.desc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-white tabular-nums leading-none">{item.val}</p>
                      <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mt-1">{item.unit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
