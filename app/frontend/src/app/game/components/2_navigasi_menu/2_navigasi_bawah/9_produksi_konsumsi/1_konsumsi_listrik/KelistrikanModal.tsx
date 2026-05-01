"use client"

import { useState } from "react";
import { X, Bolt, Activity, TrendingUp, TrendingDown, Battery, Radio, Gauge, Info, Hammer, Shield, Users, Factory, Pickaxe, Lightbulb, ZapOff, CloudLightning, Sprout, Utensils, Pill, MapPin, Bus, TrainFront, Plane, Ship, School, Hospital, Gavel, Trophy, Store, Theater, Home, Truck, Eye, EyeOff, Bird, Fish, Beef, Wrench, Archive, TowerControl, Rocket, ShieldAlert, Droplet, Radiation } from "lucide-react";
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
import { countries } from "@/app/database/data/negara/index";
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
  const [showPertahanan, setShowPertahanan] = useState(true);

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
    value: ((currentDataWithDeltas.militer_strategis?.intel_radar as any)?.[val.key] || 0) * (val.konsumsi_listrik || 0),
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
      value: (currentDataWithDeltas.armada_militer.barak || 0) * (armadaMiliterRate["1_barak"].konsumsi_listrik || 0),
      icon: Truck,
      color: "text-rose-500",
      description: "Fasilitas & Pendukung"
    }
  ];

  const getPertahananIcon = (key: string) => {
    switch (key) {
      case "1_penjara": return Gavel;
      case "2_gudang_senjata": return Archive;
      case "3_hangar_tank": return Truck;
      case "5_pusat_komando": return TowerControl;
      case "6_pangkalan_udara": return MapPin;
      case "7_pangkalan_laut": return Ship;
      case "8_program_luar_angkasa": return Rocket;
      case "9_pertahanan_siber": return ShieldAlert;
      default: return Shield;
    }
  };

  const pertahananUsage = Object.entries(pertahananRate).map(([key, val]: [string, any]) => ({
    name: val.label,
    description: val.deskripsi,
    value: ((currentDataWithDeltas.sektor_pertahanan as any)[val.dataKey] || 0) * (val.konsumsi_listrik || 0),
    icon: getPertahananIcon(val.key),
    color: "text-amber-600"
  }));

  const hunianUsage = [
    { 
      name: hunianRate.rumah_subsidi.label, 
      value: (currentDataWithDeltas.hunian?.rumah_subsidi || 0) * hunianRate.rumah_subsidi.konsumsi_listrik, 
      icon: Home, 
      color: "text-blue-400", 
      description: hunianRate.rumah_subsidi.deskripsi 
    },
    { 
      name: hunianRate.apartemen.label, 
      value: (currentDataWithDeltas.hunian?.apartemen || 0) * hunianRate.apartemen.konsumsi_listrik, 
      icon: Home, 
      color: "text-indigo-400", 
      description: hunianRate.apartemen.deskripsi 
    },
    { 
      name: hunianRate.mansion.label, 
      value: (currentDataWithDeltas.hunian?.mansion || 0) * hunianRate.mansion.konsumsi_listrik, 
      icon: Home, 
      color: "text-purple-400", 
      description: hunianRate.mansion.deskripsi 
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
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-6">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        {/* Subtle Accents */}
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px]"></div>

        {/* Header (Synchronized with ProduksiHub) */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <Bolt className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-none uppercase">Pusat Kelistrikan Nasional</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">National Electricity Control Center</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Unified Navigation Tabs */}
        <div className="px-6 py-2 bg-zinc-900/40 border-b border-zinc-800 flex gap-2 relative z-10">
          <button 
            onClick={() => setActiveMenu("Menu:Kelistrikan")}
            className="px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all bg-zinc-100 text-zinc-950 shadow-lg cursor-default"
          >
            <Bolt size={16} /> Kelistrikan
          </button>
          <button 
            onClick={() => setActiveMenu("Menu:Perminyakan")}
            className="px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"
          >
            <Droplet size={16} /> Perminyakan
          </button>
          <button 
            onClick={() => setActiveMenu("Menu:Uranium")}
            className="px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"
          >
            <Radiation size={16} /> Uranium
          </button>
        </div>

        {/* Dashboard Summary (Synchronized with ProduksiHub) */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Bolt className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.supply.title}</p>
                <p className="text-xl font-black text-white leading-tight">{totalPasokan.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80">
              <div className="p-3 bg-rose-500/10 rounded-xl">
                <Activity className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.usage.title}</p>
                <p className="text-xl font-black text-white leading-tight">{totalBeban.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>

            <div className={`bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group transition-all hover:bg-zinc-900/80 ${surplus >= 0 ? "hover:border-emerald-500/30" : "hover:border-rose-500/30"}`}>
              <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>
                {surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-400" />}
              </div>
              <div className="relative z-10">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.balance.title}</p>
                <p className={`text-xl font-black leading-tight ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                  {surplus.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Content Area */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20 relative z-10">
          <div className="space-y-12">
            
            {/* Section: Sektor Listrik Nasional */}
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex items-center gap-3 mb-5 px-1">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Bolt className="h-4 w-4 text-blue-400" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest italic">1. Sektor Listrik Nasional <span className="text-blue-400 ml-3 font-black lowercase italic text-xs tracking-normal bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">({generationSources.length} Jenis)</span></h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-1 pb-4">
                {generationSources.map((source, idx) => (
                  <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-[2.5rem] flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg min-h-[220px]">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                      <source.icon className="h-24 w-24" />
                    </div>
                    
                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:scale-110 transition-transform duration-500 shadow-xl ${source.color}`}>
                          <source.icon size={22} />
                        </div>
                        <div className="p-2 bg-zinc-950/50 border border-zinc-800 rounded-xl">
                          <Info className="h-4 w-4 text-zinc-600" />
                        </div>
                      </div>
                      <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
                        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest whitespace-nowrap">Aktif: {source.count} Unit</span>
                      </div>
                    </div>

                    <div className="space-y-1 relative z-10">
                      <h4 className="text-sm font-black text-white uppercase tracking-tighter italic leading-tight group-hover:text-blue-400 transition-colors">{source.name}</h4>
                      <div className="flex flex-col gap-2 pt-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={12} className="text-zinc-500" />
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Total Output Nasional</span>
                        </div>
                        <p className="text-2xl font-black text-white tracking-tight tabular-nums">
                          {source.value.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-600 uppercase font-bold ml-1">MW</span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto relative z-10">
                      <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                        <div className={`h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all duration-1000`} style={{ width: source.value > 0 ? '100%' : '0%' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Alokasi Beban Nasional */}
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pt-8 border-t border-zinc-900/50">
              <div className="flex items-center gap-3 mb-8 px-1">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Activity className="h-4 w-4 text-rose-400" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest italic">2. Alokasi Beban Nasional</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...produksiUsage, ...publicUsage, ...infraUsage, ...pertahananUsage, ...intelUsage, ...armadaPolisiUsage].map((usage, idx) => (
                  <div key={idx} className="bg-zinc-900/30 border border-zinc-800/50 p-5 rounded-2xl flex items-center justify-between hover:bg-zinc-800/50 hover:border-rose-500/20 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform ${usage.color}`}>
                        <usage.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] text-zinc-100 font-black uppercase tracking-widest leading-none">{usage.name}</p>
                        <p className="text-[9px] text-zinc-600 mt-1.5 font-bold tracking-tighter uppercase">{usage.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-white tabular-nums leading-none">{usage.value.toLocaleString('id-ID')}</p>
                      <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mt-1">MW</p>
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

