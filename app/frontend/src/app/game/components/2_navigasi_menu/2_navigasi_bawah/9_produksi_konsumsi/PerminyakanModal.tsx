"use client"

import { useState } from "react";
import { X, Activity, TrendingUp, TrendingDown, Info, Factory, Pickaxe, Eye, EyeOff, Truck, Ship, Plane, Zap, Package, Droplet } from "lucide-react";
import { 
  mineralKritisRate,
  infrastrukturRate
} from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import NavigasiWaktu from "../2_ekonomi/1-perdagangan/NavigasiWaktu";

interface PerminyakanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PerminyakanModal({ isOpen, onClose }: PerminyakanModalProps) {
  const [showProduksi, setShowProduksi] = useState(true);
  const [showKonsumsi, setShowKonsumsi] = useState(true);

  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const currentCountryName = session?.country || "Indonesia";
  const searchName = currentCountryName.toLowerCase().trim();
  const selectedData = countries.find((c: any) =>
    c.name_id.toLowerCase() === searchName ||
    c.name_en.toLowerCase() === searchName
  );
  const currentData = selectedData || countries[0];

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas;

  // Sync Logic with Deltas
  const currentDataWithDeltas = {
    ...currentData,
    sektor_ekstraksi: { ...currentData.sektor_ekstraksi || {} },
    infrastruktur: { ...currentData.infrastruktur || {} },
  };

  Object.entries(buildingDeltas).forEach(([key, deltaValue]) => {
    if (typeof deltaValue !== 'number' || deltaValue === 0) return;
    if ((mineralKritisRate as any)[key]) {
      const dataKey = (mineralKritisRate as any)[key].dataKey;
      (currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] = ((currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] || 0) + deltaValue;
    }
  });

  // Calculate Production (Oil Wells)
  const oilWellMeta = mineralKritisRate["4_sumur_minyak"];
  const countOilWells = currentDataWithDeltas.sektor_ekstraksi.minyak_bumi || 0;
  const totalProduction = countOilWells * oilWellMeta.produksi;

  // Simplified Consumption Logic
  const transportConsumption = 0; 
  const industryConsumption = 0; 
  
  const totalConsumption = transportConsumption + industryConsumption;
  const surplus = totalProduction - totalConsumption;

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Header Section */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-xl">
              <Droplet className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Pusat Perminyakan Nasional</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Petroleum Control Center</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <NavigasiWaktu />
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Live Dashboard Grid */}
        <div className="px-8 py-8 bg-zinc-900/20 border-b border-zinc-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all hover:border-amber-500/30 shadow-amber-500/10 shadow-lg">
              <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                <Package className="h-8 w-8 text-amber-500" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Total Produksi</p>
                <p className="text-3xl font-black text-white leading-tight mt-1">
                  {totalProduction.toLocaleString('id-ID')} <span className="text-xs text-zinc-600 font-normal ml-1">Barel</span>
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all hover:border-rose-500/30 shadow-rose-500/10 shadow-lg">
              <div className="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20">
                <Activity className="h-8 w-8 text-rose-500" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Total Konsumsi</p>
                <p className="text-3xl font-black text-white leading-tight mt-1">
                  {totalConsumption.toLocaleString('id-ID')} <span className="text-xs text-zinc-600 font-normal ml-1">Barel</span>
                </p>
              </div>
            </div>

            <div className={`bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all ${surplus >= 0 ? "hover:border-emerald-500/30 shadow-emerald-500/10" : "hover:border-rose-600/30 shadow-rose-600/10"} shadow-lg relative overflow-hidden`}>
              <div className={`p-4 rounded-2xl border ${surplus >= 0 ? "bg-emerald-500/10 border-emerald-500/20" : "bg-rose-500/10 border-rose-500/20"}`}>
                {surplus >= 0 ? <TrendingUp className="h-8 w-8 text-emerald-500" /> : <TrendingDown className="h-8 w-8 text-rose-500" />}
              </div>
              <div className="relative z-10">
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Neraca Perminyakan</p>
                <p className={`text-3xl font-black leading-tight mt-1 ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                  {surplus.toLocaleString('id-ID')} <span className="text-xs font-normal ml-1 opacity-50">Barel</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Produksi Breakdown */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-2">
                <div className="p-1.5 bg-amber-500/10 rounded-lg"><Pickaxe size={16} className="text-amber-500" /></div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Sektor Produksi Minyak</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-3xl group hover:bg-zinc-900 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-tight">Sumur Minyak Bumi</h4>
                      <p className="text-xs text-zinc-500 font-medium uppercase">Ekstraksi SDA Minyak</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white">{totalProduction.toLocaleString('id-ID')} <span className="text-xs text-zinc-500 font-normal">Barel</span></p>
                    <p className="text-[10px] text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded-md mt-1 italic uppercase tracking-widest inline-block">{countOilWells} Units Active</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                  <div className="h-full bg-amber-500/80 rounded-full" style={{ width: countOilWells > 0 ? '100%' : '0%' }}></div>
                </div>
              </div>
            </div>

            {/* Konsumsi Breakdown */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-2">
                <div className="p-1.5 bg-rose-500/10 rounded-lg"><Activity size={16} className="text-rose-500" /></div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Sektor Konsumsi</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="space-y-4">
                <div className="bg-zinc-900/20 border border-zinc-800/50 p-5 rounded-2xl flex items-center justify-between opacity-50 italic">
                  <div className="flex items-center gap-3">
                    <Truck size={18} className="text-zinc-500" />
                    <span className="text-sm font-bold text-zinc-400 uppercase tracking-tight">Transportasi & Logistik</span>
                  </div>
                  <span className="text-xs text-zinc-500">In Development</span>
                </div>
                <div className="bg-zinc-900/20 border border-zinc-800/50 p-5 rounded-2xl flex items-center justify-between opacity-50 italic">
                  <Factory size={18} className="text-zinc-500" />
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-tight">Industri Manufaktur</span>
                </div>
                <div className="bg-zinc-900/20 border border-zinc-800/50 p-5 rounded-2xl flex items-center justify-between opacity-50 italic">
                  <Plane size={18} className="text-zinc-500" />
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-tight">Aviasi & Penerbangan</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
