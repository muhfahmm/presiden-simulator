"use client"

import { useState, useEffect } from "react";
import { X, Bolt, Activity, TrendingUp, TrendingDown, Battery, Radio, Gauge, Info, Hammer, Shield, Users, Factory, Pickaxe, Lightbulb, ZapOff, CloudLightning, Sprout, Utensils, Pill, TrainFront, Store, Beef, Fish, Bus, School, Hospital, Gavel, Trophy, Theater, Plane, Ship, MapPin, Eye, EyeOff, Truck } from "lucide-react";
import { 
  hitungTotalKapasitas, 
  hitungTotalKonsumsiNasional, 
  DASHBOARD_LABELS, 
  KAPASITAS_LISTRIK_METADATA,
  hitungKonsumsiEkstraksi,
  hitungKonsumsiProduksi,
  hitungKonsumsiOlahanPangan,
  hitungKonsumsiFarmasi,
  hitungKonsumsiAgrikultur,
  hitungKonsumsiPeternakan,
  hitungKonsumsiPerikanan,
  hitungKonsumsiPabrikMiliter,
  hitungKonsumsiPertahanan,
  hitungKonsumsiSosial,
  hitungKonsumsiOlahraga,
  hitungKonsumsiKomersial,
  hitungKonsumsiHiburan,
  hitungKonsumsiTransportasi,
  hitungKonsumsiIntelDatabase,
  hitungKonsumsiArmadaDatabase,
  mineralKritisRate,
  manufakturRate,
  peternakanRate,
  agrikulturRate,
  perikananRate,
  olahanPanganRate,
  farmasiRate,
  infrastrukturRate,
  sosialRate,
  pendidikanRate,
  kesehatanRate,
  hukumRate,
  olahragaRate,
  komersialRate,
  hiburanRate,
  pabrikMiliterRate,
  intelijenRate,
  armadaMiliterRate
} from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import NavigasiWaktu from "../2_ekonomi/1-perdagangan/NavigasiWaktu";

interface KelistrikanModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
}

export default function KelistrikanModal({ isOpen, onClose, setActiveMenu }: KelistrikanModalProps) {
  const [showProduksi, setShowProduksi] = useState(true);
  const [showMiliter, setShowMiliter] = useState(true);
  const [showPublik, setShowPublik] = useState(true);
  const [showIntelijen, setShowIntelijen] = useState(true);
  const [showArmada, setShowArmada] = useState(true);

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

  // Logic Sinkronisasi Listrik Nasional (dengan Deltas) - Full Sector Sync
  const currentDataWithDeltas = {
    ...currentData,
    sektor_listrik: { ...currentData.sektor_listrik || {} },
    sektor_manufaktur: { ...currentData.sektor_manufaktur || {} },
    sektor_peternakan: { ...currentData.sektor_peternakan || {} },
    sektor_perikanan: { ...currentData.sektor_perikanan || {} },
    sektor_agrikultur: { ...currentData.sektor_agrikultur || {} },
    sektor_ekstraksi: { ...currentData.sektor_ekstraksi || {} },
    sektor_olahan_pangan: { ...currentData.sektor_olahan_pangan || {} },
    sektor_farmasi: { ...currentData.sektor_farmasi || {} },
    pabrik_militer: { ...currentData.pabrik_militer || {} },
    infrastruktur: { ...currentData.infrastruktur || {} },
    pendidikan: { ...currentData.pendidikan || {} },
    kesehatan: { ...currentData.kesehatan || {} },
    hukum: { ...currentData.hukum || {} },
    sektor_olahraga: { ...currentData.sektor_olahraga || {} },
    sektor_komersial: { ...currentData.sektor_komersial || {} },
    sektor_hiburan: { ...currentData.sektor_hiburan || {} },
  };

  Object.entries(buildingDeltas).forEach(([key, deltaValue]) => {
    if (typeof deltaValue !== 'number' || deltaValue === 0) return;

    if (KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA]) {
      const dataKey = KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA].dataKey;
      (currentDataWithDeltas.sektor_listrik as any)[dataKey] = ((currentDataWithDeltas.sektor_listrik as any)[dataKey] || 0) + deltaValue;
    }
    else if ((mineralKritisRate as any)[key]) {
      const dataKey = (mineralKritisRate as any)[key].dataKey;
      (currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] = ((currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] || 0) + deltaValue;
    }
    else if ((manufakturRate as any)[key]) {
      const dataKey = (manufakturRate as any)[key].dataKey;
      (currentDataWithDeltas.sektor_manufaktur as any)[dataKey] = ((currentDataWithDeltas.sektor_manufaktur as any)[dataKey] || 0) + deltaValue;
    }
    else if ((peternakanRate as any)[key]) {
      const dataKey = (peternakanRate as any)[key].dataKey;
      (currentDataWithDeltas.sektor_peternakan as any)[dataKey] = ((currentDataWithDeltas.sektor_peternakan as any)[dataKey] || 0) + deltaValue;
    }
    else if ((agrikulturRate as any)[key]) {
      const dataKey = (agrikulturRate as any)[key].dataKey;
      (currentDataWithDeltas.sektor_agrikultur as any)[dataKey] = ((currentDataWithDeltas.sektor_agrikultur as any)[dataKey] || 0) + deltaValue;
    }
    else if ((perikananRate as any)[key]) {
      const dataKey = (perikananRate as any)[key].dataKey;
      (currentDataWithDeltas.sektor_perikanan as any)[dataKey] = ((currentDataWithDeltas.sektor_perikanan as any)[dataKey] || 0) + deltaValue;
    }
    else if ((olahanPanganRate as any)[key]) {
      const dataKey = (olahanPanganRate as any)[key].dataKey;
      (currentDataWithDeltas.sektor_olahan_pangan as any)[dataKey] = ((currentDataWithDeltas.sektor_olahan_pangan as any)[dataKey] || 0) + deltaValue;
    }
    else if ((farmasiRate as any)[key]) {
      const dataKey = (farmasiRate as any)[key].dataKey;
      (currentDataWithDeltas.sektor_farmasi as any)[dataKey] = ((currentDataWithDeltas.sektor_farmasi as any)[dataKey] || 0) + deltaValue;
    }
    else if (infrastrukturRate[key as keyof typeof infrastrukturRate]) {
      const dataKey = (infrastrukturRate as any)[key].dataKey;
      (currentDataWithDeltas.infrastruktur as any)[dataKey] = ((currentDataWithDeltas.infrastruktur as any)[dataKey] || 0) + deltaValue;
    }
    else if (sosialRate[key as keyof typeof sosialRate]) {
      const { dataKey, groupId } = (sosialRate as any)[key];
      if (groupId === "pendidikan") (currentDataWithDeltas.pendidikan as any)[dataKey] = ((currentDataWithDeltas.pendidikan as any)[dataKey] || 0) + deltaValue;
      else if (groupId === "kesehatan") (currentDataWithDeltas.kesehatan as any)[dataKey] = ((currentDataWithDeltas.kesehatan as any)[dataKey] || 0) + deltaValue;
      else if (groupId === "hukum") (currentDataWithDeltas.hukum as any)[dataKey] = ((currentDataWithDeltas.hukum as any)[dataKey] || 0) + deltaValue;
      else if (groupId === "olahraga") (currentDataWithDeltas.sektor_olahraga as any)[dataKey] = ((currentDataWithDeltas.sektor_olahraga as any)[dataKey] || 0) + deltaValue;
      else if (groupId === "komersial") (currentDataWithDeltas.sektor_komersial as any)[dataKey] = ((currentDataWithDeltas.sektor_komersial as any)[dataKey] || 0) + deltaValue;
      else if (groupId === "hiburan") (currentDataWithDeltas.sektor_hiburan as any)[dataKey] = ((currentDataWithDeltas.sektor_hiburan as any)[dataKey] || 0) + deltaValue;
    }
    else if ((pabrikMiliterRate as any)[key]) {
      const dataKey = (pabrikMiliterRate as any)[key].dataKey;
      (currentDataWithDeltas.pabrik_militer as any)[dataKey] = ((currentDataWithDeltas.pabrik_militer as any)[dataKey] || 0) + deltaValue;
    }
  });

  const totalPasokan = hitungTotalKapasitas(currentDataWithDeltas.sektor_listrik);
  const totalBeban = hitungTotalKonsumsiNasional(currentDataWithDeltas);
  const surplus = totalPasokan - totalBeban;

  // Icons Mapping for Breakdown
  const produksiUsage = [
    {
      name: "2. Sektor Mineral Kritis (12 Jenis)",
      value: hitungKonsumsiEkstraksi(currentDataWithDeltas.sektor_ekstraksi),
      icon: Pickaxe,
      color: "text-orange-500",
      description: "Ekstraksi Mineral & SDA"
    },
    {
      name: "3. Sektor Manufaktur (7 Jenis)",
      value: hitungKonsumsiProduksi(currentDataWithDeltas.sektor_manufaktur),
      icon: Factory,
      color: "text-emerald-500",
      description: "Pabrik, Smelter & Semikonduktor"
    },
    {
      name: "4. Sektor Peternakan (4 Jenis)",
      value: hitungKonsumsiPeternakan(currentDataWithDeltas.sektor_peternakan),
      icon: Beef,
      color: "text-orange-400",
      description: "Unggas, Sapi & Kambing"
    },
    {
      name: "5. Sektor Agrikultur (14 Jenis)",
      value: hitungKonsumsiAgrikultur(currentDataWithDeltas.sektor_agrikultur),
      icon: Sprout,
      color: "text-lime-500",
      description: "Sawah, Ladang & Perkebunan"
    },
    {
      name: "6. Sektor Perikanan (3 Jenis)",
      value: hitungKonsumsiPerikanan(currentDataWithDeltas.sektor_perikanan),
      icon: Fish,
      color: "text-blue-400",
      description: "Tambak & Budidaya Mutiara"
    },
    {
      name: "7. Sektor Olahan Pangan (10 Jenis)",
      value: hitungKonsumsiOlahanPangan(currentDataWithDeltas.sektor_olahan_pangan),
      icon: Utensils,
      color: "text-amber-500",
      description: "Industri Makanan & Minuman"
    },
    {
      name: "8. Sektor Farmasi (1 Jenis)",
      value: hitungKonsumsiFarmasi(currentDataWithDeltas.sektor_farmasi),
      icon: Pill,
      color: "text-rose-400",
      description: "Industri Obat & Medis"
    },
  ];

  const militerUsage = [
    {
      name: "Sektor Pabrik Militer (4 Jenis)",
      value: hitungKonsumsiPabrikMiliter(currentDataWithDeltas.pabrik_militer),
      icon: Shield,
      color: "text-rose-500",
      description: "Drone, Amunisi & Kendaraan Tempur"
    },
  ];

  // 1. Sektor Infrastruktur & Logistik (8 jenis)
  const infraUsage = Object.entries(infrastrukturRate).map(([key, val]) => ({
    name: val.deskripsi,
    description: "Infrastruktur & Logistik",
    value: ((currentDataWithDeltas.infrastruktur as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0),
    icon: val.key.includes("bus") ? Bus : val.key.includes("kereta") ? TrainFront : val.key.includes("bandara") ? Plane : val.key.includes("pelabuhan") ? Ship : MapPin,
    color: "text-blue-400"
  }));

  // 2. Sektor Pendidikan & Riset (10 jenis)
  const eduUsage = Object.entries(pendidikanRate).map(([key, val]) => ({
    name: val.deskripsi,
    description: "Pendidikan & Riset",
    value: ((currentDataWithDeltas.pendidikan as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0),
    icon: School,
    color: "text-indigo-400"
  }));

  // 3. Sektor Layanan Kesehatan (3 jenis)
  const healthUsage = Object.entries(kesehatanRate).map(([key, val]) => ({
    name: val.deskripsi,
    description: "Layanan Kesehatan",
    value: ((currentDataWithDeltas.kesehatan as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0),
    icon: Hospital,
    color: "text-emerald-400"
  }));

  // 4. Sektor Hukum & Keamanan (2 jenis)
  const lawUsage = Object.entries(hukumRate).map(([key, val]) => ({
    name: val.deskripsi,
    description: "Hukum & Keamanan",
    value: ((currentDataWithDeltas.hukum as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0),
    icon: Gavel,
    color: "text-zinc-400"
  }));

  // 5. Sektor Olahraga & Rekreasi (7 jenis)
  const sportUsage = Object.entries(olahragaRate).map(([key, val]) => ({
    name: val.deskripsi,
    description: "Olahraga & Rekreasi",
    value: ((currentDataWithDeltas.sektor_olahraga as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0),
    icon: Trophy,
    color: "text-orange-400"
  }));

  // 6. Sektor Fasilitas Komersial (3 jenis)
  const commUsage = Object.entries(komersialRate).map(([key, val]) => ({
    name: val.deskripsi,
    description: "Fasilitas Komersial",
    value: ((currentDataWithDeltas.sektor_komersial as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0),
    icon: Store,
    color: "text-pink-400"
  }));

  // 7. Sektor Hiburan & Seni (2 jenis)
  const entUsage = Object.entries(hiburanRate).map(([key, val]) => ({
    name: val.deskripsi,
    description: "Hiburan & Seni",
    value: ((currentDataWithDeltas.sektor_hiburan as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0),
    icon: Theater,
    color: "text-purple-400"
  }));

  // 8. Sektor Intelijen & Strategis (3 jenis)
  const intelUsage = Object.entries(intelijenRate).map(([key, val]) => ({
    name: val.label,
    description: "Intelijen & Resimen Strategis",
    value: ((currentDataWithDeltas.intelijen as any)[val.key] || 0) * (val.consumption || 0),
    icon: val.key === "sistem_satelit" ? Radio : val.key === "jaringan_radar" ? Gauge : Shield,
    color: "text-amber-400"
  }));

  const armadaUsage = [
    {
      name: "Armada Darat (7 Jenis)",
      value: Object.entries(armadaMiliterRate).filter(([k, v]: [string, any]) => v.groupId === 'darat').reduce((acc, [k, v]: [string, any]) => {
        const count = v.dataKey === 'barak' 
          ? (currentDataWithDeltas.armada_militer.barak || 0) 
          : ((currentDataWithDeltas.armada_militer.darat as any)[v.dataKey] || 0);
        return acc + count * (v.consumption || 0);
      }, 0),
      icon: Truck,
      color: "text-amber-500",
      description: "Alutsista & Hunian Darat"
    },
    {
      name: "Armada Laut (7 Jenis)",
      value: Object.entries(armadaMiliterRate).filter(([k, v]: [string, any]) => v.groupId === 'laut').reduce((acc, [k, v]: [string, any]) => {
        const count = ((currentDataWithDeltas.armada_militer.laut as any)[v.dataKey] || 0);
        return acc + count * (v.consumption || 0);
      }, 0),
      icon: Ship,
      color: "text-cyan-500",
      description: "Armada Maritim & Siluman Laut"
    },
    {
      name: "Armada Udara (8 Jenis)",
      value: Object.entries(armadaMiliterRate).filter(([k, v]: [string, any]) => v.groupId === 'udara').reduce((acc, [k, v]: [string, any]) => {
        const count = ((currentDataWithDeltas.armada_militer.udara as any)[v.dataKey] || 0);
        return acc + count * (v.consumption || 0);
      }, 0),
      icon: Plane,
      color: "text-indigo-500",
      description: "Supremasi Udara & Drone UAV"
    }
  ];

  // Icons Mapping for Metadata
  const iconMap: Record<string, any> = {
    "1_pembangkit_listrik_tenaga_nuklir": { icon: Battery, color: "text-indigo-400" },
    "2_pembangkit_listrik_tenaga_air": { icon: CloudLightning, color: "text-blue-400" },
    "3_pembangkit_listrik_tenaga_surya": { icon: Lightbulb, color: "text-yellow-400" },
    "4_pembangkit_listrik_tenaga_uap": { icon: Factory, color: "text-zinc-400" },
    "5_pembangkit_listrik_tenaga_gas": { icon: Factory, color: "text-orange-400" },
    "6_pembangkit_listrik_tenaga_angin": { icon: Gauge, color: "text-emerald-400" },
  };

  // Breakdown Generation from Database
  const generationSources = Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, meta]) => {
    const count = (currentDataWithDeltas.sektor_listrik as any)[meta.dataKey] || 0;
    const totalOutput = count * meta.produksi;
    const { icon, color } = iconMap[key] || { icon: Bolt, color: "text-yellow-500" };
    
    return {
      name: meta.deskripsi,
      count: count,
      value: totalOutput,
      color: color,
      icon: icon
    };
  });

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Header Section */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/10 rounded-xl">
              <Bolt className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Pusat Kelistrikan Nasional</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Electricity Control Center</p>
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
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all hover:border-cyan-500/30 shadow-indigo-500/10 shadow-lg">
              <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                <Bolt className="h-8 w-8 text-cyan-500" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">{DASHBOARD_LABELS.supply.title}</p>
                <p className="text-3xl font-black text-white leading-tight mt-1">{totalPasokan.toLocaleString('id-ID')} <span className="text-xs text-zinc-600 font-normal ml-1">MW</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all hover:border-rose-500/30 shadow-rose-500/10 shadow-lg">
              <div className="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20">
                <Activity className="h-8 w-8 text-rose-500" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">{DASHBOARD_LABELS.usage.title}</p>
                <p className="text-3xl font-black text-white leading-tight mt-1">{totalBeban.toLocaleString('id-ID')} <span className="text-xs text-zinc-600 font-normal ml-1">MW</span></p>
              </div>
            </div>

            <div className={`bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all ${surplus >= 0 ? "hover:border-emerald-500/30 shadow-emerald-500/10" : "hover:border-rose-600/30 shadow-rose-600/10"} shadow-lg relative overflow-hidden`}>
              <div className={`p-4 rounded-2xl border ${surplus >= 0 ? "bg-emerald-500/10 border-emerald-500/20" : "bg-rose-500/10 border-rose-500/20"}`}>
                {surplus >= 0 ? <TrendingUp className="h-8 w-8 text-emerald-500" /> : <TrendingDown className="h-8 w-8 text-rose-500" />}
              </div>
              <div className="relative z-10">
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">{DASHBOARD_LABELS.balance.title}</p>
                <p className={`text-3xl font-black leading-tight mt-1 ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                  {surplus.toLocaleString('id-ID')} <span className="text-xs font-normal ml-1 opacity-50">MW</span>
                </p>
              </div>
              {surplus < 0 && (
                <div className="absolute top-0 right-0 p-2 bg-rose-500/10 border-l border-b border-rose-500/20 rounded-bl-xl animate-pulse">
                   <ZapOff size={14} className="text-rose-500" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Generation Breakdown */}
            <div className="space-y-6 sticky top-0 self-start">
              <div className="flex items-center gap-3 px-2">
                <div className="p-1.5 bg-yellow-500/10 rounded-lg"><Radio size={16} className="text-yellow-500" /></div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Pemasukan Listrik (Pasokan)</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {generationSources.map((source, idx) => (
                  <div key={idx} className="bg-zinc-900/40 border border-zinc-800/50 p-4 rounded-2xl flex items-center justify-between hover:bg-zinc-900 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-zinc-800 rounded-xl group-hover:scale-110 transition-transform ${source.color}`}>
                        <source.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest leading-none">{source.name}</p>
                        <div className="flex items-baseline gap-2 mt-1.5">
                          <p className="text-xl font-bold text-white leading-none">{source.value.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal ml-0.5">MW</span></p>
                          <p className="text-[10px] text-yellow-500/80 font-bold uppercase tracking-tighter bg-yellow-500/10 px-1.5 py-0.5 rounded-md border border-yellow-500/10">{source.count} Unit</p>
                        </div>
                      </div>
                    </div>
                    {source.value > 0 ? (
                      <div className="h-2 w-24 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800 p-0.5">
                        <div className={`h-full bg-yellow-500/80 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.3)]`} style={{ width: '85%' }} />
                      </div>
                    ) : (
                      <span className="text-[9px] text-zinc-600 font-black uppercase italic tracking-tighter">Tidak Aktif</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Usage Breakdown */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-2">
                <div className="p-1.5 bg-cyan-500/10 rounded-lg"><Info size={16} className="text-cyan-500" /></div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Penggunaan Listrik (Beban)</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              {/* Category Grouping */}
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-2 px-2 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
                    <h4 className="text-[15px] font-black text-rose-500 uppercase tracking-[0.3em]">Konsumsi Produksi</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-rose-500/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowProduksi(!showProduksi)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-white cursor-pointer">
                    {showProduksi ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${showProduksi ? "max-h-[800px] opacity-100 mt-0" : "max-h-0 opacity-0 mt-[-1rem]"}`}>
                  <div className="space-y-3 max-h-[420px] overflow-y-auto no-scrollbar pr-1">
                  {produksiUsage.map((usage, idx) => (
                    <div key={idx} className="bg-zinc-950/50 border border-zinc-800/50 p-4 rounded-2xl flex items-center justify-between hover:border-zinc-700 transition-all group">
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform ${usage.color}`}>
                          <usage.icon size={18} />
                        </div>
                        <div>
                          <p className="text-[11px] text-zinc-300 font-black uppercase tracking-widest leading-none">{usage.name}</p>
                          <p className="text-[9px] text-zinc-500 mt-1 uppercase tracking-tighter">{usage.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black text-white leading-none">{usage.value.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-500 font-normal ml-0.5 tracking-normal">MW</span></p>
                        <div className="h-1 w-20 bg-zinc-900 rounded-full mt-2 overflow-hidden">
                          <div 
                            className={`h-full ${usage.value > 0 ? "bg-rose-500/60" : "bg-zinc-800"}`} 
                            style={{ width: `${Math.min(100, (usage.value / (totalBeban || 1)) * 100)}%` }} 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                {/* Military Grouping */}
                <div className="flex items-center justify-between gap-2 px-2 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
                    <h4 className="text-[13px] font-black text-rose-500 uppercase tracking-[0.3em]">Konsumsi Militer</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-rose-500/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowMiliter(!showMiliter)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-white cursor-pointer">
                    {showMiliter ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${showMiliter ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="space-y-3 pr-1">
                  {militerUsage.map((usage, idx) => (
                    <div key={idx} className="bg-zinc-950/50 border border-zinc-800/50 p-4 rounded-2xl flex items-center justify-between hover:border-zinc-700 transition-all group">
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform ${usage.color}`}>
                          <usage.icon size={18} />
                        </div>
                        <div>
                          <p className="text-[11px] text-zinc-300 font-black uppercase tracking-widest leading-none">{usage.name}</p>
                          <p className="text-[9px] text-zinc-500 mt-1 uppercase tracking-tighter">{usage.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black text-white leading-none">{usage.value.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-500 font-normal ml-0.5 tracking-normal">MW</span></p>
                        <div className="h-1 w-20 bg-zinc-900 rounded-full mt-2 overflow-hidden">
                          <div 
                            className={`h-full ${usage.value > 0 ? "bg-rose-500/60" : "bg-zinc-800"}`} 
                            style={{ width: `${Math.min(100, (usage.value / (totalBeban || 1)) * 100)}%` }} 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                <div className="flex items-center justify-between gap-2 px-2 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
                    <h4 className="text-[13px] font-black text-cyan-500 uppercase tracking-[0.3em]">Konsumsi Layanan Publik & Umum</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowPublik(!showPublik)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-white cursor-pointer">
                    {showPublik ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-6 overflow-hidden transition-all duration-500 ${showPublik ? "max-h-[1500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
                  <div className="space-y-6 max-h-[500px] overflow-y-auto no-scrollbar pr-1">
                  {[
                    { title: "1. Sektor Infrastruktur & Logistik (8 Jenis)", data: infraUsage, color: "text-blue-400", bgColor: "from-blue-500/10" },
                    { title: "2. Sektor Pendidikan & Riset (10 Jenis)", data: eduUsage, color: "text-indigo-400", bgColor: "from-indigo-500/10" },
                    { title: "3. Sektor Layanan Kesehatan (3 Jenis)", data: healthUsage, color: "text-emerald-400", bgColor: "from-emerald-500/10" },
                    { title: "4. Sektor Hukum & Keamanan (2 Jenis)", data: lawUsage, color: "text-zinc-400", bgColor: "from-zinc-500/10" },
                    { title: "5. Sektor Olahraga & Rekreasi (7 Jenis)", data: sportUsage, color: "text-orange-400", bgColor: "from-orange-500/10" },
                    { title: "6. Sektor Fasilitas Komersial (3 Jenis)", data: commUsage, color: "text-pink-400", bgColor: "from-pink-500/10" },
                    { title: "7. Sektor Hiburan & Seni (2 Jenis)", data: entUsage, color: "text-purple-400", bgColor: "from-purple-500/10" },
                  ].map((group, gIdx) => (
                    <div key={gIdx} className="space-y-3">
                      <div className="flex items-center gap-2 px-4 py-1.5 bg-zinc-900/40 border border-zinc-800/40 rounded-xl relative overflow-hidden group">
                        <div className={`absolute inset-0 bg-gradient-to-r ${group.bgColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                        <span className={`text-[11px] font-black ${group.color} uppercase tracking-widest relative z-10`}>{group.title}</span>
                      </div>
                      <div className="space-y-2 pl-2">
                        {group.data.map((usage, idx) => (
                          <div key={idx} className="bg-zinc-950/30 border border-zinc-800/30 p-3 rounded-xl flex items-center justify-between hover:border-zinc-700/50 transition-all group/item">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 bg-zinc-900 rounded-lg group-hover/item:scale-110 transition-transform ${usage.color}`}>
                                <usage.icon size={14} />
                              </div>
                              <div>
                                <p className="text-[12px] text-zinc-200 font-black uppercase tracking-widest leading-none">{usage.name}</p>
                                <p className="text-[9px] text-zinc-400 mt-0.5 uppercase tracking-tighter">{usage.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-black text-white leading-none">{usage.value.toLocaleString('id-ID')} <span className="text-[8px] text-zinc-500 font-normal ml-0.5">MW</span></p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                <div className="flex items-center justify-between gap-2 px-2 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                    <h4 className="text-[13px] font-black text-amber-500 uppercase tracking-[0.3em]">Konsumsi Intelijen & Keamanan Strategis</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-amber-500/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowIntelijen(!showIntelijen)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-white cursor-pointer">
                    {showIntelijen ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${showIntelijen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
                  <div className="space-y-3 pr-1">
                    {intelUsage.map((usage, idx) => (
                      <div key={idx} className="bg-zinc-950/50 border border-zinc-800/50 p-4 rounded-2xl flex items-center justify-between hover:border-zinc-700 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform ${usage.color}`}>
                            <usage.icon size={18} />
                          </div>
                          <div>
                            <p className="text-[11px] text-zinc-300 font-black uppercase tracking-widest leading-none">{usage.name}</p>
                            <p className="text-[9px] text-zinc-500 mt-1 uppercase tracking-tighter">{usage.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-black text-white leading-none">{usage.value.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-500 font-normal ml-0.5 tracking-normal">MW</span></p>
                          <div className="h-1 w-20 bg-zinc-900 rounded-full mt-2 overflow-hidden">
                            <div 
                              className={`h-full ${usage.value > 0 ? "bg-amber-500/60" : "bg-zinc-800"}`} 
                              style={{ width: `${Math.min(100, (usage.value / (totalBeban || 1)) * 100)}%` }} 
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 px-2 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
                    <h4 className="text-[13px] font-black text-indigo-500 uppercase tracking-[0.3em]">Konsumsi Komando Armada</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowArmada(!showArmada)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-white cursor-pointer">
                    {showArmada ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${showArmada ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
                  <div className="space-y-3 pr-1">
                    {armadaUsage.map((usage, idx) => (
                      <div key={idx} className="bg-zinc-950/50 border border-zinc-800/50 p-4 rounded-2xl flex items-center justify-between hover:border-zinc-700 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform ${usage.color}`}>
                            <usage.icon size={18} />
                          </div>
                          <div>
                            <p className="text-[11px] text-zinc-300 font-black uppercase tracking-widest leading-none">{usage.name}</p>
                            <p className="text-[9px] text-zinc-500 mt-1 uppercase tracking-tighter">{usage.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-black text-white leading-none">{usage.value.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-500 font-normal ml-0.5 tracking-normal">MW</span></p>
                          <div className="h-1 w-20 bg-zinc-900 rounded-full mt-2 overflow-hidden">
                            <div 
                              className={`h-full ${usage.value > 0 ? "bg-indigo-500/60" : "bg-zinc-800"}`} 
                              style={{ width: `${Math.min(100, (usage.value / (totalBeban || 1)) * 100)}%` }} 
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
