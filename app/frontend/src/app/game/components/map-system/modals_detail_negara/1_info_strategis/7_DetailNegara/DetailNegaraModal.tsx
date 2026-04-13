"use client"

import React, { useState, useEffect } from "react";
import { 
  X, Activity, Zap, Pickaxe, Factory, Beef, Wheat, Pill, Utensils, 
  Shield, Swords, Eye, Search, Home, GraduationCap, HeartPulse, 
  Scale, Siren, Landmark, Info, Briefcase, Users2, Cloud, Target,
  Mountain, Gem, Waves, Battery, Box, Cpu, TreePine, Droplets, Flame, Radio, Hammer
} from "lucide-react";
import { countries } from "@/app/database/data/negara/benua/index";
import { aiBuildingStorage } from "@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";
import { aiProductionStorage } from "@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIProductionStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { GameSession, gameStorage } from "@/app/game/gamestorage";

interface DetailNegaraModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
  isUser: boolean;
}

export default function DetailNegaraModal({ isOpen, onClose, targetCountry, isUser }: DetailNegaraModalProps) {
  const [activeSector, setActiveSector] = useState<string>("produksi");

  if (!isOpen) return null;

  const countryEntry = countries.find(c => 
    c.name_id.toLowerCase() === targetCountry.toLowerCase() || 
    c.name_en.toLowerCase() === targetCountry.toLowerCase()
  );

  if (!countryEntry) return null;

  // Aggregate Building Deltas
  const buildingDeltas = isUser 
    ? buildingStorage.getBuildingDeltas()
    : aiBuildingStorage.getAllBuildingDeltas(countryEntry.name_en);

  // Get Stocks (Production)
  const stocks = isUser
    ? budgetStorage.getCumulativeProduction()
    : aiProductionStorage.getStocks(countryEntry.name_en);

  const sectors = [
    { id: "produksi", label: "Produksi", icon: Factory },
    { id: "militer", label: "Militer", icon: Shield },
    { id: "fasilitas", label: "Layanan Publik", icon: Landmark },
    { id: "hunian", label: "Hunian & Sosial", icon: Home },
  ];

  return (
    <div className="absolute inset-0 bg-black/95 backdrop-blur-sm z-[2000] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] flex flex-col shadow-[0_0_100px_rgba(245,158,11,0.1)] overflow-hidden relative animate-in zoom-in-95 duration-500">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
              <Activity className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">
                Detail Lengkap: {targetCountry}
              </h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">
                Overview Aset & Kapasitas Nasional
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 px-8 py-4 bg-zinc-900/10 border-b border-zinc-800/30">
          {sectors.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSector(s.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold uppercase text-[10px] tracking-widest transition-all cursor-pointer ${
                activeSector === s.id 
                  ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.2)]" 
                  : "bg-zinc-900/50 text-zinc-500 hover:text-zinc-200 border border-zinc-800/50"
              }`}
            >
              <s.icon size={16} />
              {s.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/30">
          {activeSector === "produksi" && (
            <div className="space-y-10">
              <ProductionSection 
                title="Sektor Energi" 
                items={countryEntry.sektor_listrik} 
                buildingDeltas={buildingDeltas}
                stocks={stocks}
                type="listrik"
              />
              <ProductionSection 
                title="Sektor Ekstraksi & Mineral" 
                items={countryEntry.sektor_ekstraksi} 
                buildingDeltas={buildingDeltas}
                stocks={stocks}
                type="ekstraksi"
              />
              <ProductionSection 
                title="Sektor Manufaktur" 
                items={countryEntry.sektor_manufaktur} 
                buildingDeltas={buildingDeltas}
                stocks={stocks}
                type="manufaktur"
              />
              <ProductionSection 
                title="Sektor Pangan" 
                items={{...countryEntry.sektor_agrikultur, ...countryEntry.sektor_peternakan, ...countryEntry.sektor_perikanan, ...countryEntry.sektor_olahan_pangan}} 
                buildingDeltas={buildingDeltas}
                stocks={stocks}
                type="pangan"
              />
            </div>
          )}

          {activeSector === "militer" && (
            <div className="space-y-10">
              <SimpleGridSection 
                title="Armada Militer" 
                data={countryEntry.armada_militer} 
                icon={Swords}
                color="text-red-500"
              />
              <SimpleGridSection 
                title="Sektor Pertahanan & Strategis" 
                data={countryEntry.sektor_pertahanan} 
                icon={Shield}
                color="text-amber-500"
              />
              <SimpleGridSection 
                title="Pabrik Militer" 
                data={countryEntry.pabrik_militer} 
                icon={Factory}
                color="text-blue-500"
              />
            </div>
          )}

          {activeSector === "fasilitas" && (
            <div className="space-y-10">
              <SimpleGridSection 
                title="Pendidikan" 
                data={countryEntry.pendidikan} 
                icon={GraduationCap}
                color="text-cyan-500"
              />
              <SimpleGridSection 
                title="Kesehatan" 
                data={countryEntry.kesehatan} 
                icon={HeartPulse}
                color="text-rose-500"
              />
              <SimpleGridSection 
                title="Hukum & Keamanan" 
                data={countryEntry.hukum} 
                icon={Scale}
                color="text-indigo-500"
              />
              <SimpleGridSection 
                title="Infrastruktur Umum" 
                data={countryEntry.infrastruktur} 
                icon={Activity}
                color="text-emerald-500"
              />
            </div>
          )}

          {activeSector === "hunian" && (
            <div className="space-y-10">
              <SimpleGridSection 
                title="Sektor Hunian" 
                data={countryEntry.hunian} 
                icon={Home}
                color="text-amber-600"
              />
              <SimpleGridSection 
                title="Olahraga & Rekreasi" 
                data={countryEntry.sektor_olahraga} 
                icon={Target}
                color="text-lime-500"
              />
              <SimpleGridSection 
                title="Komersial" 
                data={countryEntry.sektor_komersial} 
                icon={Briefcase}
                color="text-zinc-400"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProductionSection({ title, items, buildingDeltas, stocks, type }: any) {
  if (!items) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h3 className="text-lg font-black text-white uppercase tracking-widest italic mb-4 flex items-center gap-3">
        <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(items).map(([key, baseline]: [string, any]) => {
          const delta = buildingDeltas[key] || 0;
          const total = Number(baseline || 0) + Number(delta);
          if (total <= 0 && baseline === undefined) return null;

          const stock = stocks[key] || 0;

          return (
            <div key={key} className="bg-zinc-900/40 border border-zinc-800/60 p-4 rounded-2xl flex flex-col gap-3 group hover:border-amber-500/30 transition-all">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter truncate max-w-[150px]">
                  {key.replace(/_/g, " ")}
                </span>
                <div className="p-1.5 bg-zinc-950 rounded-lg border border-zinc-800">
                  {getProductionIcon(key)}
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xl font-black text-white tracking-tighter">
                  {total.toLocaleString('id-ID')}
                </span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase">Kapasitas Produksi</span>
              </div>
              {stocks[key] !== undefined && (
                <div className="pt-2 border-t border-zinc-800/50 flex flex-col gap-0.5">
                  <span className="text-sm font-black text-amber-500">
                    {Number(stock).toLocaleString('id-ID')}
                  </span>
                  <span className="text-[9px] font-bold text-zinc-400 uppercase">Stok Gudang</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SimpleGridSection({ title, data, icon: Icon, color }: any) {
  if (!data) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h3 className="text-lg font-black text-white uppercase tracking-widest italic mb-4 flex items-center gap-3">
        <div className={`w-1.5 h-6 ${color.replace('text-', 'bg-')} rounded-full`} />
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(data).map(([key, val]: [string, any]) => {
          if (typeof val !== 'number' && typeof val !== 'string') return null;
          
          return (
            <div key={key} className={`bg-zinc-900/40 border border-zinc-800/60 p-4 rounded-2xl flex flex-col gap-3 group hover:border-zinc-500/30 transition-all`}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter truncate max-w-[150px]">
                  {key.replace(/_/g, " ")}
                </span>
                <div className="p-1.5 bg-zinc-950 rounded-lg border border-zinc-800">
                  <Icon size={14} className={color} />
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className={`text-xl font-black text-white tracking-tighter`}>
                  {typeof val === 'number' ? val.toLocaleString('id-ID') : val}
                </span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase">Level / Jumlah</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getProductionIcon(key: string) {
  const iconSize = 14;
  
  if (key.includes("uranium")) return <Radio size={iconSize} className="text-lime-500" />;
  if (key.includes("listrik") || key.includes("tenaga")) return <Zap size={iconSize} className="text-amber-400" />;
  if (key.includes("minyak") || key.includes("oil")) return <Droplets size={iconSize} className="text-cyan-500" />;
  if (key.includes("emas") || key.includes("gold")) return <Gem size={iconSize} className="text-yellow-500" />;
  if (key.includes("batu_bara")) return <Mountain size={iconSize} className="text-zinc-500" />;
  if (key.includes("kayu")) return <TreePine size={iconSize} className="text-emerald-600" />;
  if (key.includes("semen") || key.includes("beton")) return <Factory size={iconSize} className="text-amber-500" />;
  if (key.includes("besi") || key.includes("baja")) return <Hammer size={iconSize} className="text-zinc-400" />;
  if (key.includes("pangan") || key.includes("roti") || key.includes("mie")) return <Utensils size={iconSize} className="text-orange-400" />;
  if (key.includes("obat") || key.includes("farmasi")) return <Pill size={iconSize} className="text-rose-400" />;
  
  return <Pickaxe size={iconSize} className="text-amber-500" />;
}
