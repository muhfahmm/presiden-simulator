"use client"

import { useState, useEffect } from "react";
import { X, Users, Info, TrendingUp, TrendingDown, Minus, ShoppingCart, CalendarDays, Users2 } from "lucide-react";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/countries/region/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";

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

  const totalDailyDelta = dailyTaxDelta + dailyPriceDelta;
  const totalMonthlyGrowthPercent = (taxGrowthRate + priceGrowthRate) * 30 * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        
        {/* Header Decor */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-zinc-800/50">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              <Users2 className="h-6 w-6 text-blue-400 fill-blue-400/20" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Kependudukan</h2>
              <p className="text-sm text-zinc-500 font-medium">Statistik & Pertumbuhan Nasional</p>
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
              <Users2 className="h-32 w-32 text-blue-400" />
            </div>
            
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="text-6xl font-black text-white tracking-tighter">
                {population.toLocaleString('id-ID')}
              </div>
              <div className="px-6 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest italic">
                Total Populasi Nasional
              </div>
            </div>

            {/* Growth Indicator */}
            <div className="mt-8 flex items-center justify-center gap-10">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">Pertumbuhan / Hari</span>
                <div className={`flex items-center gap-1.5 text-2xl font-black italic ${totalDailyDelta >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                  {totalDailyDelta >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  {totalDailyDelta >= 0 ? "+" : ""}{totalDailyDelta.toLocaleString('id-ID')}
                </div>
              </div>
              <div className="w-[1px] h-8 bg-zinc-800" />
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">Laju / Bulan</span>
                <div className={`flex items-center gap-1 text-2xl font-black italic ${totalMonthlyGrowthPercent >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                  {totalMonthlyGrowthPercent >= 0 ? "+" : ""}{totalMonthlyGrowthPercent.toFixed(3)}%
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Grid (Tax vs Price) */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Row: Pajak Nasional */}
            <div className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 flex flex-col items-center text-center space-y-2">
              <CalendarDays className={`h-5 w-5 ${monthlyTaxGrowthPercent >= 0 ? "text-emerald-400" : "text-rose-500"}`} />
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest text-center">PERTUMBUHAN POPULASI / BULAN</div>
              <div className={`text-sm font-black ${monthlyTaxGrowthPercent >= 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
                {monthlyTaxGrowthPercent >= 0 ? '+' : ''}{monthlyTaxGrowthPercent.toFixed(3)}%
              </div>
            </div>

            <div className={`p-4 rounded-2xl flex flex-col items-center text-center space-y-2 relative overflow-hidden border ${
              dailyTaxDelta >= 0 ? 'bg-zinc-950/50 border-zinc-800/50' : 'bg-rose-950/40 border-rose-500/20'
            }`}>
              <CalendarDays className={`h-5 w-5 ${dailyTaxDelta >= 0 ? 'text-zinc-500' : 'text-rose-500'}`} />
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest text-center">PERTUMBUHAN POPULASI / HARI</div>
              <div className={`text-sm font-black ${dailyTaxDelta > 0 ? 'text-emerald-400' : dailyTaxDelta < 0 ? 'text-rose-500' : 'text-zinc-300'}`}>
                {dailyTaxDelta >= 0 ? '+' : ''}{dailyTaxDelta.toLocaleString('id-ID')}
              </div>
            </div>

            {/* Bottom Row: Harga Pokok */}
            <div className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 flex flex-col items-center text-center space-y-2">
              <ShoppingCart className={`h-5 w-5 ${monthlyPriceGrowthPercent >= 0 ? "text-emerald-400" : "text-rose-500"}`} />
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest text-center">PERTUMBUHAN POPULASI / BULAN</div>
              <div className={`text-sm font-black ${monthlyPriceGrowthPercent >= 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
                {monthlyPriceGrowthPercent >= 0 ? '+' : ''}{monthlyPriceGrowthPercent.toFixed(3)}%
              </div>
            </div>

            <div className={`p-4 rounded-2xl flex flex-col items-center text-center space-y-2 border ${
              dailyPriceDelta >= 0 ? 'bg-zinc-950/50 border-zinc-800/50' : 'bg-rose-950/20 border-rose-500/20'
            }`}>
              <ShoppingCart className={`h-5 w-5 ${dailyPriceDelta >= 0 ? 'text-zinc-500' : 'text-rose-500'}`} />
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest text-center">PERTUMBUHAN POPULASI / HARI</div>
              <div className={`text-sm font-black ${dailyPriceDelta > 0 ? 'text-emerald-400' : dailyPriceDelta < 0 ? 'text-rose-500' : 'text-zinc-300'}`}>
                {dailyPriceDelta >= 0 ? '+' : ''}{dailyPriceDelta.toLocaleString('id-ID')}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-blue-500/5 rounded-2xl border border-blue-500/20 shadow-inner">
            <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Analisis Pertumbuhan</div>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                {totalDailyDelta > 0 ? (
                  <span className="text-emerald-400">Kebijakan saat ini mendukung pertumbuhan populasi yang sehat. Proyeksi harian: +{totalDailyDelta.toLocaleString('id-ID')} jiwa.</span>
                ) : totalDailyDelta < 0 ? (
                  <span className="text-rose-400">Tekanan ekonomi menyebabkan penurunan populasi atau eksodus. Diperlukan intervensi harga dan pajak.</span>
                ) : (
                  <span>Laju pertumbuhan populasi terpantau stagnan.</span>
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
