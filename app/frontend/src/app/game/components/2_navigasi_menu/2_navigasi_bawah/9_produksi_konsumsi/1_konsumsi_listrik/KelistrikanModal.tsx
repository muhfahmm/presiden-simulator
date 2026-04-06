"use client"

import { useState } from "react";
import { X, Bolt, Activity, TrendingUp, TrendingDown, Battery, Radio, Gauge, Info, Hammer, Shield, Users, Factory, Pickaxe, Lightbulb, ZapOff, CloudLightning, Sprout, Utensils, Pill, MapPin, Bus, TrainFront, Plane, Ship, School, Hospital, Gavel, Trophy, Store, Theater, Home, Truck, Eye, EyeOff, Bird, Fish, Beef, Wrench } from "lucide-react";
import { 
  hitungTotalKapasitas, 
  hitungTotalKonsumsiNasional, 
  DASHBOARD_LABELS, 
  KAPASITAS_LISTRIK_METADATA,
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
  hunianRate,
  pabrikMiliterRate,
  intelijenRate,
  armadaMiliterRate,
  armadaPolisiRate,
  pertahananRate,
  hitungKonsumsiEkstraksi,
  hitungKonsumsiProduksi,
  hitungKonsumsiPeternakan,
  hitungKonsumsiAgrikultur,
  hitungKonsumsiPerikanan,
  hitungKonsumsiOlahanPangan,
  hitungKonsumsiFarmasi,
  hitungKonsumsiPabrikMiliter
} from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import NavigasiWaktu from "../../2_ekonomi/1-perdagangan/NavigasiWaktu";

interface KelistrikanModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
}

export default function KelistrikanModal({ isOpen, onClose, setActiveMenu }: KelistrikanModalProps) {
  const [showProduksi, setShowProduksi] = useState(true);
  const [showPabrikMiliter, setShowPabrikMiliter] = useState(true);
  const [showMiliter, setShowMiliter] = useState(true);
  const [showPublik, setShowPublik] = useState(true);
  const [showIntelijen, setShowIntelijen] = useState(true);
  const [showPolisi, setShowPolisi] = useState(true);
  const [showArmada, setShowArmada] = useState(true);
  const [showHunian, setShowHunian] = useState(true);

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
    hunian: { ...currentData.hunian || {} },
    armada_militer: { 
      ...currentData.armada_militer || {},
      darat: { ...currentData.armada_militer?.darat || {} },
      laut: { ...currentData.armada_militer?.laut || {} },
      udara: { ...currentData.armada_militer?.udara || {} },
    },
    armada_kepolisian: { 
      ...currentData.armada_kepolisian || {},
      armada_polisi: { ...currentData.armada_kepolisian?.armada_polisi || {} }
    },
    sektor_pertahanan: { ...currentData.sektor_pertahanan || {} },
    militer_strategis: { 
      ...currentData.militer_strategis || {},
      intel_radar: { ...currentData.militer_strategis?.intel_radar || {} }
    },
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
    else if ((hunianRate as any)[key]) {
      const dataKey = key; // for hunian, the key IS the dataKey (rumah_subsidi, etc)
      (currentDataWithDeltas.hunian as any)[dataKey] = ((currentDataWithDeltas.hunian as any)[dataKey] || 0) + deltaValue;
    }
    else if ((armadaMiliterRate as any)[key]) {
      const { dataKey, groupId } = (armadaMiliterRate as any)[key];
      if (groupId === "darat" && dataKey === "barak") {
        currentDataWithDeltas.armada_militer.barak = (currentDataWithDeltas.armada_militer.barak || 0) + deltaValue;
      } else {
        const sector = (currentDataWithDeltas.armada_militer as any)[groupId];
        if (sector) sector[dataKey] = (sector[dataKey] || 0) + deltaValue;
      }
    }
    else if ((armadaPolisiRate as any)[key]) {
      const dataKey = (armadaPolisiRate as any)[key].dataKey;
      if (!currentDataWithDeltas.armada_kepolisian.armada_polisi) currentDataWithDeltas.armada_kepolisian.armada_polisi = {} as any;
      (currentDataWithDeltas.armada_kepolisian.armada_polisi as any)[dataKey] = ((currentDataWithDeltas.armada_kepolisian.armada_polisi as any)[dataKey] || 0) + deltaValue;
    }
    else if ((intelijenRate as any)[key]) {
      const dataKey = (intelijenRate as any)[key].dataKey;
      (currentDataWithDeltas.militer_strategis.intel_radar as any)[dataKey] = ((currentDataWithDeltas.militer_strategis.intel_radar as any)[dataKey] || 0) + deltaValue;
    }
    else if ((pertahananRate as any)[key]) {
      const dataKey = (pertahananRate as any)[key].dataKey;
      (currentDataWithDeltas.sektor_pertahanan as any)[dataKey] = ((currentDataWithDeltas.sektor_pertahanan as any)[dataKey] || 0) + deltaValue;
    }
  });

  const totalPasokan = hitungTotalKapasitas(currentDataWithDeltas.sektor_listrik);
  const totalBeban = hitungTotalKonsumsiNasional(currentDataWithDeltas);
  const surplus = totalPasokan - totalBeban;

  // Breakdown Logic for Consumption Column
  const produksiUsage = [
    { name: "Sektor Mineral Kritis", value: hitungKonsumsiEkstraksi(currentDataWithDeltas.sektor_ekstraksi), icon: Pickaxe, color: "text-orange-500", description: "12 Jenis Komoditas Tambang" },
    { name: "Sektor Manufaktur", value: hitungKonsumsiProduksi(currentDataWithDeltas.sektor_manufaktur), icon: Factory, color: "text-emerald-500", description: "7 Jenis Industri Pengolahan" },
    { name: "Sektor Peternakan", value: hitungKonsumsiPeternakan(currentDataWithDeltas.sektor_peternakan), icon: Beef, color: "text-orange-400", description: "4 Jenis Industri Ternak" },
    { name: "Sektor Agrikultur", value: hitungKonsumsiAgrikultur(currentDataWithDeltas.sektor_agrikultur), icon: Sprout, color: "text-lime-500", description: "14 Jenis Komoditas Pertanian" },
    { name: "Sektor Perikanan", value: hitungKonsumsiPerikanan(currentDataWithDeltas.sektor_perikanan), icon: Fish, color: "text-blue-400", description: "3 Jenis Industri Perikanan" },
    { name: "Sektor Olahan Pangan", value: hitungKonsumsiOlahanPangan(currentDataWithDeltas.sektor_olahan_pangan), icon: Utensils, color: "text-amber-500", description: "10 Jenis Industri Pangan" },
    { name: "Sektor Farmasi", value: hitungKonsumsiFarmasi(currentDataWithDeltas.sektor_farmasi), icon: Pill, color: "text-rose-400", description: "1 Jenis Industri Obat" },
  ];

  const pabrikMiliterUsage = Object.entries(pabrikMiliterRate).map(([key, val]: [string, any]) => ({
    name: val.label,
    description: val.deskripsi,
    value: ((currentDataWithDeltas.pabrik_militer as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0),
    icon: Wrench,
    color: "text-rose-500"
  }));

  const militerUsage: any[] = [];

  const infraUsage = Object.entries(infrastrukturRate).map(([key, val]: [string, any]) => ({
    name: val.deskripsi,
    description: "Infrastruktur & Logistik",
    value: ((currentDataWithDeltas.infrastruktur as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0),
    icon: val.key.includes("bus") ? Bus : val.key.includes("kereta") ? TrainFront : val.key.includes("bandara") ? Plane : Ship,
    color: "text-blue-400"
  }));

  const publicUsage = [
    ...Object.entries(pendidikanRate).map(([key, val]: [string, any]) => ({ name: val.deskripsi, value: ((currentDataWithDeltas.pendidikan as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0), icon: School, color: "text-indigo-400", description: "Pendidikan & Riset" })),
    ...Object.entries(kesehatanRate).map(([key, val]: [string, any]) => ({ name: val.deskripsi, value: ((currentDataWithDeltas.kesehatan as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0), icon: Hospital, color: "text-emerald-400", description: "Layanan Kesehatan" })),
  ];

  const intelUsage = Object.entries(intelijenRate).map(([key, val]: [string, any]) => ({
    name: val.label,
    description: "Intelijen & Strategis",
    value: ((currentDataWithDeltas.militer_strategis?.intel_radar as any)?.[val.key] || 0) * (val.consumption || 0),
    icon: Radio,
    color: "text-amber-400"
  }));

  const armadaPolisiUsage = Object.entries(armadaPolisiRate).map(([key, val]: [string, any]) => ({
    name: val.label,
    description: "Operasional Kepolisian",
    value: ((currentDataWithDeltas.armada_kepolisian?.armada_polisi as any)?.[val.dataKey] || 0) * (val.konsumsi_listrik || 0),
    icon: Shield,
    color: "text-blue-500"
  }));

  const armadaUsage = [
    {
      name: "Barak Militer Nasional",
      value: (currentDataWithDeltas.armada_militer.barak || 0) * (armadaMiliterRate["1_barak"].consumption || 0),
      icon: Truck,
      color: "text-rose-500",
      description: "Fasilitas & Pendukung"
    }
  ];

  const hunianUsage = [
    { 
      name: hunianRate.rumah_subsidi.label, 
      value: (currentDataWithDeltas.hunian?.rumah_subsidi || 0) * hunianRate.rumah_subsidi.konsumsi_listrik, 
      icon: Home, 
      color: "text-blue-400", 
      description: hunianRate.rumah_subsidi.desc 
    },
    { 
      name: hunianRate.apartemen.label, 
      value: (currentDataWithDeltas.hunian?.apartemen || 0) * hunianRate.apartemen.konsumsi_listrik, 
      icon: Home, 
      color: "text-indigo-400", 
      description: hunianRate.apartemen.desc 
    },
    { 
      name: hunianRate.mansion.label, 
      value: (currentDataWithDeltas.hunian?.mansion || 0) * hunianRate.mansion.konsumsi_listrik, 
      icon: Home, 
      color: "text-purple-400", 
      description: hunianRate.mansion.desc 
    },
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
  const generationSources = (Object.entries(KAPASITAS_LISTRIK_METADATA) as [string, any][]).map(([key, meta]) => {
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
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8 no-scrollbar">
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

              <div className="space-y-6">
                {/* Category Grouping: Produksi */}
                <div className="flex items-center justify-between gap-2 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
                    <h4 className="text-[15px] font-black text-rose-500 uppercase tracking-[0.3em]">Produksi</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-rose-500/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowProduksi(!showProduksi)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 cursor-pointer">
                    {showProduksi ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${showProduksi ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
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
                        <p className="text-lg font-black text-white leading-none">{usage.value.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-500 font-normal ml-0.5">MW</span></p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Military Production Section */}
                <div className="flex items-center justify-between gap-2 px-2 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
                    <h4 className="text-[13px] font-black text-rose-500 uppercase tracking-[0.3em]">Produksi Militer</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-rose-500/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowPabrikMiliter(!showPabrikMiliter)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 cursor-pointer">
                    {showPabrikMiliter ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${showPabrikMiliter ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                  {pabrikMiliterUsage.map((usage, idx) => (
                    <div key={idx} className="bg-zinc-950/30 border border-zinc-800/30 p-3 rounded-xl flex items-center justify-between hover:border-zinc-700/50 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-zinc-900 rounded-lg ${usage.color}`}>
                          <Wrench size={14} />
                        </div>
                        <div>
                          <p className="text-[11px] text-zinc-200 font-black uppercase tracking-widest leading-none">{usage.name}</p>
                          <p className="text-[9px] text-zinc-400 mt-0.5 uppercase tracking-tighter">{usage.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black text-white leading-none">{usage.value.toLocaleString('id-ID')} <span className="text-[8px] text-zinc-500 font-normal ml-0.5">MW</span></p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Public Services */}
                <div className="flex items-center justify-between gap-2 px-2 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
                    <h4 className="text-[13px] font-black text-cyan-500 uppercase tracking-[0.3em]">Layanan Publik</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowPublik(!showPublik)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 cursor-pointer">
                    {showPublik ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${showPublik ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                  {publicUsage.concat(infraUsage).map((usage, idx) => (
                    <div key={idx} className="bg-zinc-950/30 border border-zinc-800/30 p-3 rounded-xl flex items-center justify-between hover:border-zinc-700/50 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-zinc-900 rounded-lg ${usage.color}`}>
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

                {/* Sektor Hunian & Pemukiman */}
                <div className="flex items-center justify-between gap-2 px-2 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <h4 className="text-[13px] font-black text-blue-500 uppercase tracking-[0.3em]">Hunian & Pemukiman</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowHunian(!showHunian)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 cursor-pointer">
                    {showHunian ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${showHunian ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                  {hunianUsage.map((usage, idx) => (
                    <div key={idx} className="bg-zinc-950/30 border border-zinc-800/30 p-3 rounded-xl flex items-center justify-between hover:border-zinc-700/50 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-zinc-900 rounded-lg ${usage.color}`}>
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

                {/* Intelijen Section */}
                <div className="flex items-center justify-between gap-2 px-2 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
                    <h4 className="text-[13px] font-black text-amber-400 uppercase tracking-[0.3em]">Hub Intelijen Nasional</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-amber-400/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowIntelijen(!showIntelijen)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 cursor-pointer">
                    {showIntelijen ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${showIntelijen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                  {intelUsage.map((usage, idx) => (
                    <div key={idx} className="bg-zinc-950/30 border border-zinc-800/30 p-3 rounded-xl flex items-center justify-between hover:border-zinc-700/50 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-zinc-900 rounded-lg ${usage.color}`}>
                          <Radio size={14} />
                        </div>
                        <div>
                          <p className="text-[11px] text-zinc-200 font-black uppercase tracking-widest leading-none">{usage.name}</p>
                          <p className="text-[9px] text-zinc-400 mt-0.5 uppercase tracking-tighter">{usage.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black text-white leading-none">{usage.value.toLocaleString('id-ID')} <span className="text-[8px] text-zinc-500 font-normal ml-0.5">MW</span></p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Military Section */}
                <div className="flex items-center justify-between gap-2 px-2 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
                    <h4 className="text-[13px] font-black text-rose-500 uppercase tracking-[0.3em]">Armada Militer</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-rose-500/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowMiliter(!showMiliter)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 cursor-pointer">
                    {showMiliter ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${showMiliter ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                  {militerUsage.concat(armadaUsage).map((usage, idx) => (
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
                        <p className="text-lg font-black text-white leading-none">{usage.value.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-500 font-normal ml-0.5">MW</span></p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Polisi Section */}
                <div className="flex items-center justify-between gap-2 px-2 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <h4 className="text-[13px] font-black text-blue-500 uppercase tracking-[0.3em]">Garda Kepolisian</h4>
                  </div>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent ml-2"></div>
                  <button onClick={() => setShowPolisi(!showPolisi)} className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 cursor-pointer">
                    {showPolisi ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </div>

                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${showPolisi ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                  {armadaPolisiUsage.map((usage, idx) => (
                    <div key={idx} className="bg-zinc-950/30 border border-zinc-800/30 p-3 rounded-xl flex items-center justify-between hover:border-zinc-700/50 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-zinc-900 rounded-lg ${usage.color}`}>
                          <usage.icon size={14} />
                        </div>
                        <div>
                          <p className="text-[11px] text-zinc-200 font-black uppercase tracking-widest leading-none">{usage.name}</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
