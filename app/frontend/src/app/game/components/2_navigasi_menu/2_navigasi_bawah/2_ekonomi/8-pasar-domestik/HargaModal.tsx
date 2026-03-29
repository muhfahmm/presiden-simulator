"use client"

import { useState, useEffect } from "react";
import { X, Tag, ShoppingCart, Zap, Fuel, Pill, GraduationCap, AlertCircle, TrendingDown, TrendingUp, Droplets, Wheat, Beef, Droplet, Package, Egg, Users } from "lucide-react";
import { priceStorage, PriceData } from "./priceStorage";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import NavigasiWaktu from "../1-perdagangan/NavigasiWaktu"

interface HargaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HargaModal({ isOpen, onClose }: HargaModalProps) {
  const [harga, setPrices] = useState<PriceData>(priceStorage.getData());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isOpen) {
      setPrices(priceStorage.getData());
    }
  }, [isOpen]);

  if (!isOpen || !isMounted) return null;

  const handlePriceChange = (key: keyof Omit<PriceData, 'lastUpdated'>, value: number) => {
    const newPrices = { ...harga, [key]: value };
    setPrices(newPrices);
    priceStorage.updatePrice(key, value);
  };

  const categories = [
    { 
      key: "harga_beras" as const, 
      label: "Beras Pokok", 
      icon: Wheat, 
      desc: "Kebutuhan karbohidrat utama masyarakat.",
      color: "emerald",
      basePrice: 16000,
      unit: "kg"
    },
    { 
      key: "harga_daging_sapi" as const, 
      label: "Daging Sapi", 
      icon: Beef, 
      desc: "Kebutuhan protein hewani premium masyarakat.",
      color: "rose",
      basePrice: 104100,
      unit: "kg"
    },
    { 
      key: "harga_ayam" as const, 
      label: "Daging Ayam", 
      icon: Beef, 
      desc: "Protein hewani alternatif yang lebih terjangkau.",
      color: "orange",
      basePrice: 41000,
      unit: "kg"
    },
    { 
      key: "harga_minyak_goreng" as const, 
      label: "Minyak Goreng", 
      icon: Droplet, 
      desc: "Kebutuhan dasar memasak rumah tangga.",
      color: "amber",
      basePrice: 15400,
      unit: "liter"
    },
    { 
      key: "harga_gula" as const, 
      label: "Gula", 
      icon: Package, 
      desc: "Kebutuhan pemanis untuk konsumsi harian.",
      color: "zinc",
      basePrice: 14400,
      unit: "kg"
    },
    { 
      key: "harga_telur" as const, 
      label: "Telur Ayam", 
      icon: Egg, 
      desc: "Alternatif protein harian warga.",
      color: "orange",
      basePrice: 31100,
      unit: "kg"
    },
    { 
      key: "harga_bbm" as const, 
      label: "Harga Bahan Bakar", 
      icon: Fuel, 
      desc: "Bensin (Pertalite/Pertamax), Solar, dan Avtur.",
      color: "blue",
      basePrice: 10700,
      unit: "liter"
    },
    { 
      key: "harga_listrik" as const, 
      label: "Tarif Listrik", 
      icon: Zap, 
      desc: "Tarif per kWh untuk rumah tangga dan industri.",
      color: "amber",
      basePrice: 1600,
      unit: "kWh"
    },
    { 
      key: "harga_air" as const, 
      label: "Tarif Air Bersih", 
      icon: Droplets, 
      desc: "Tarif PDAM untuk kebutuhan air bersih warga.",
      color: "cyan",
      basePrice: 5200,
      unit: "m³"
    },
    { 
      key: "harga_obat" as const, 
      label: "Obat & Layanan Medis", 
      icon: Pill, 
      desc: "Akses BPJS, obat esensial, dan biaya RS.",
      color: "rose",
      basePrice: 157900,
      unit: "kunjungan"
    },
    { 
      key: "harga_pendidikan" as const, 
      label: "Biaya Pendidikan", 
      icon: GraduationCap, 
      desc: "Uang sekolah (SPP/UKT) dan buku pelajaran.",
      color: "violet",
      basePrice: 483900,
      unit: "bulan"
    }
  ];

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(val);
  };

  const presets = [
    { label: "Subsidi", multiplier: 0.5, color: "emerald", desc: "Paling Murah" },
    { label: "Murah", multiplier: 0.8, color: "teal", desc: "Terjangkau" },
    { label: "Normal", multiplier: 1.0, color: "zinc", desc: "Harga Pasar" },
    { label: "Mahal", multiplier: 1.4, color: "orange", desc: "Komersial" },
    { label: "Sangat Mahal", multiplier: 2.0, color: "rose", desc: "Margin Tinggi" }
  ];

  // Calculate Average Impact
  const avgPriceMultiplier = categories.reduce((sum, cat) => sum + (harga[cat.key] / cat.basePrice), 0) / 11;
  const happinessImpact = (1.0 - avgPriceMultiplier) * 15; // Max bonus +7.5%, Max penalty -15%

  // Population Growth Rate (berdasarkan avgPriceMultiplier)
  const getPopulationGrowthRateFromPrice = (multiplier: number): number => {
    if (multiplier <= 0.8) return 0.0001;
    if (multiplier <= 1.2) return 0.00005;
    if (multiplier <= 1.5) return 0.00002;
    if (multiplier <= 2.0) return -0.00003;
    return -0.00008;
  };
  const dailyGrowthRate = getPopulationGrowthRateFromPrice(avgPriceMultiplier);
  const monthlyGrowthPercent = dailyGrowthRate * 30 * 100;

  // Daily Happiness Delta (dari kebijakan harga)
  const getDailyHappinessDeltaFromPrice = (multiplier: number): number => {
    if (multiplier <= 0.8) return 0.1;
    if (multiplier <= 1.2) return 0;
    if (multiplier <= 1.5) return -0.2;
    return -0.5;
  };
  const dailyHappinessDelta = getDailyHappinessDeltaFromPrice(avgPriceMultiplier);

  // Populasi / Hari (jiwa absolut)
  const currentPopulation = populationStorage.getPopulation();
  const dailyPopulationDelta = Math.round(currentPopulation * dailyGrowthRate);

  const totalCartPrice = categories.reduce((sum, cat) => sum + (cat.basePrice * (harga[cat.key] / cat.basePrice)), 0);
  const totalItems = categories.length;

  const getPriceLabel = (val: number) => {
    if (val <= 0.6) return "Subsidi Penuh (Murah)";
    if (val <= 0.9) return "Subsidi Parsial";
    if (val <= 1.1) return "Harga Normal (Pasar)";
    if (val <= 1.5) return "Komersial (Mahal)";
    return "Mewah (Sangat Mahal)";
  };
  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

        {/* Header (Synchronized with ProduksiBarangModal) */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-xl">
              <Tag className="h-6 w-6 text-cyan-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Kebijakan Harga Rakyat</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Sovereignty &amp; Inflation Control</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
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
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Tag className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Price Index Nasional</p>
                <p className="text-xl font-black text-white leading-tight">{(avgPriceMultiplier * 100).toFixed(0)}% <span className="text-[10px] text-zinc-500">AVG</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className={`p-3 rounded-xl ${happinessImpact >= 0 ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
                {happinessImpact >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-500" />}
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Dampak Kepuasan</p>
                <p className={`text-xl font-black leading-tight ${happinessImpact >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {happinessImpact >= 0 ? '+' : ''}{happinessImpact.toFixed(1)}% <span className="text-[10px] text-zinc-500">/ Bln</span>
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className={`p-3 rounded-xl ${monthlyGrowthPercent >= 0 ? 'bg-blue-500/10' : 'bg-rose-500/10'}`}>
                <Users className={`h-6 w-6 ${monthlyGrowthPercent >= 0 ? 'text-blue-500' : 'text-rose-500'}`} />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Pertumbuhan Populasi</p>
                <p className={`text-xl font-black leading-tight ${monthlyGrowthPercent >= 0 ? 'text-blue-400' : 'text-rose-500'}`}>
                  {monthlyGrowthPercent >= 0 ? '+' : ''}{monthlyGrowthPercent.toFixed(3)}% <span className="text-[10px] text-zinc-500">/ Bln</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.03),transparent_40%)] space-y-8">
          
          {/* Alert Info */}
          <div className="p-5 bg-amber-500/5 border border-amber-500/10 rounded-2xl flex gap-4 items-center">
            <div className="h-10 w-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0 border border-amber-500/20">
              <AlertCircle className="text-amber-500" size={20} />
            </div>
            <p className="text-[10px] text-zinc-400 leading-relaxed font-bold uppercase tracking-tight">
              <span className="text-amber-500">Otoritas Fiskal: </span>
              Kebijakan harga rendah (Subsidi) akan memotong anggaran harian secara otomatis. Pastikan kas negara tetap stabil sebelum melakukan intervensi pasar besar-besaran.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="flex flex-col gap-3">
            {categories.map((cat, index) => (
              <div key={cat.key} className="flex items-center justify-between p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl group/item hover:bg-zinc-900/50 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden">
                
                {/* 1. Identity */}
                <div className="flex items-center gap-4 w-1/4 relative z-10">
                  <div className="flex items-center justify-center min-w-[28px] opacity-30 group-hover/item:opacity-80 transition-opacity">
                    <span className="text-sm font-black uppercase tracking-widest text-zinc-400 border-b-2 border-zinc-700 pb-0.5">{(index + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <div className={`p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover/item:border-${cat.color}-500/50 transition-colors shadow-lg`}>
                    <cat.icon size={20} className={`text-${cat.color}-400`} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-black text-white uppercase tracking-tighter italic leading-none mb-0.5">{cat.label}</h4>
                    <span className="text-zinc-500 text-[9px] font-bold tracking-tight opacity-70 truncate max-w-[200px]" title={cat.desc}>{cat.desc}</span>
                  </div>
                </div>

                {/* 2. Status Saat Ini */}
                <div className="w-1/5 flex flex-col justify-center px-4 relative z-10 border-l border-zinc-800/50">
                  <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block mb-1">Status Pasar</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-sm font-black tracking-tighter ${harga[cat.key] <= cat.basePrice * 0.8 ? "text-emerald-400" : harga[cat.key] >= cat.basePrice * 1.4 ? "text-rose-400" : "text-zinc-300"}`}>
                      {formatPrice(harga[cat.key])}
                    </span>
                    <span className="text-[9px] font-bold opacity-40 italic">/{cat.unit}</span>
                  </div>
                  <span className={`text-[8px] font-black uppercase tracking-widest mt-0.5 ${harga[cat.key] <= cat.basePrice * 0.8 ? "text-emerald-500/70" : harga[cat.key] >= cat.basePrice * 1.4 ? "text-rose-500/70" : "text-zinc-500"}`}>
                    {getPriceLabel(harga[cat.key] / cat.basePrice)}
                  </span>
                </div>

                {/* 3. Controls */}
                <div className="flex-1 relative z-10">
                  <div className="grid grid-cols-5 gap-1.5 p-1 bg-zinc-950/80 border border-zinc-800/50 rounded-xl shadow-inner">
                    {presets.map((preset) => {
                      const targetPrice = Math.round(cat.basePrice * preset.multiplier);
                      return (
                        <button
                          key={preset.multiplier}
                          onClick={() => handlePriceChange(cat.key, targetPrice)}
                          className={`relative flex flex-col items-center justify-center py-2.5 rounded-lg transition-all cursor-pointer group/btn ${
                            harga[cat.key] === targetPrice
                              ? 'bg-zinc-800 text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-zinc-700'
                              : 'text-zinc-600 hover:bg-zinc-900 hover:text-zinc-300'
                          }`}
                        >
                          {harga[cat.key] === targetPrice && (
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500" />
                          )}
                          <span className="text-[9px] font-black uppercase tracking-tighter opacity-80">{preset.label}</span>
                          <div className="flex items-baseline gap-0.5 mt-0.5">
                            <span className="text-[11px] font-black tracking-tight">{formatPrice(targetPrice)}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Aesthetic Background Icon */}
                <div className="absolute top-1/2 -translate-y-1/2 right-10 p-0 opacity-[0.02] pointer-events-none group-hover/item:opacity-[0.05] transition-opacity">
                  <cat.icon size={80} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

