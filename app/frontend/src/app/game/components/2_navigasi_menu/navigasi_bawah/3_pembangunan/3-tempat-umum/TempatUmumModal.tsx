"use client"

import { useState, useEffect, Fragment } from "react";
import { X, Wrench, Zap, Pickaxe, Factory, Construction, Store, Beef, Wheat, Radiation, Coins, Flame, Droplets, FlaskConical, Shovel, Container, Car, Bike, Hammer, Trees, Coffee, Cookie, Milk, Fish, Waves, Shell, Sprout, Activity, TrendingUp, TrendingDown, Clock, Loader2, RefreshCw, Eye, EyeOff, Pill, Utensils, Apple, Bird, Bean, Ship, Map, Wifi, Plane, Bus, ShieldCheck, Home, Archive, Warehouse, GraduationCap, Landmark, Crosshair, HeartPulse, Library, TrainFront, HardHat, ShieldAlert, Scale, Siren, Cpu, TreePine, Croissant, Soup, Leaf, Building2, Microscope, Search, Trophy, Gavel, Siren as PoliceIcon, Home as HomeIcon, Truck, School, Lightbulb, Info } from "lucide-react"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, DASHBOARD_LABELS, KAPASITAS_LISTRIK_METADATA, KONSUMSI_SOSIAL, KONSUMSI_TRANSPORTASI } from "@/app/database/data/1_kelistrikan";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate } from "@/app/game/data/time/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/countries/region/_index";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TempatUmumModal({ isOpen, onClose }: ModalProps) {
  const [confirmBuild, setConfirmBuild] = useState<any | null>(null);
  const [tick, setTick] = useState(0);
  const [activeConstructions, setActiveConstructions] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());
  const [showQueue, setShowQueue] = useState(false);

  const toggleSector = (id: string) => {
    setCollapsedSectors(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    if (!isOpen) return;
    const queue = buildingStorage.getQueue();
    setActiveConstructions(queue);
  }, [tick, confirmBuild, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      try {
        const queueToProcess = buildingStorage.getQueue();
        if (!queueToProcess || !Array.isArray(queueToProcess)) return;

        const nowTime = getStoredGameDate().getTime();
        const itemsToFinish = queueToProcess.filter(item => item && typeof item.endDate === 'number' && nowTime >= item.endDate);

        if (itemsToFinish.length > 0) {
          itemsToFinish.forEach(finishItem => {
            if (finishItem.buildingKey) {
              buildingStorage.incrementBuildingCount(finishItem.buildingKey);
              buildingStorage.removeFromQueue(finishItem.id);
            }
          });
          // Dispatch event to sync lainnya components
          window.dispatchEvent(new Event('building_storage_updated'));
        }

        setTick(t => t + 1);
      } catch (err) {
        console.error("DEBUG: Interval error", err);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const currentCountryCode = session?.country || "Indonesia";
  const currentData = countries.find((c: any) =>
    c.name_id === currentCountryCode ||
    c.name_en === currentCountryCode ||
    (c.id && c.id === currentCountryCode)
  ) || countries[79];

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas;

  const totalPasokan = hitungTotalKapasitas(currentData.sektor_listrik);
  const totalBeban = hitungTotalKonsumsiNasional(currentData);

  let adjustedTotalPasokan = totalPasokan;
  let adjustedTotalBeban = totalBeban;

  const deltaEntries = Object.entries(buildingDeltas);
  deltaEntries.forEach(([key, deltaValue]) => {
    const meta = KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA];
    if (meta && typeof deltaValue === 'number') {
      adjustedTotalPasokan += (deltaValue * meta.production);
    }
  });

  const surplus = adjustedTotalPasokan - adjustedTotalBeban;

  const publicGroups = [
    {
      id: "infrastruktur",
      title: "1. Sektor Infrastruktur & Logistik (8 jenis)",
      icon: Ship,
      color: "text-cyan-400",
      items: [
        { key: "jalur_sepeda", groupId: "infra_darat", label: "Jalur Sepeda", icon: Bike, desc: "Logistik", tarif: 1, unit: "Unit", cost: 5, buildTime: 15, maintenanceCost: 1, count: (currentData.infrastruktur.jalur_sepeda || 0) + ((buildingDeltas["jalur_sepeda"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.jalur_sepeda },
        { key: "jalan_tol", groupId: "infra_darat", label: "Jalan Raya", icon: Map, desc: "Infrastruktur", tarif: 1, unit: "Unit", cost: 80, buildTime: 60, maintenanceCost: 5, count: (currentData.infrastruktur.jalan_tol || 0) + ((buildingDeltas["jalan_tol"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.jalan_tol },
        { key: "terminal_bus", groupId: "infra_darat", label: "Terminal Bus", icon: Bus, desc: "Transportasi", tarif: 1, unit: "Unit", cost: 30, buildTime: 45, maintenanceCost: 3, count: (currentData.infrastruktur.terminal_bus || 0) + ((buildingDeltas["terminal_bus"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.terminal_bus },
        
        { key: "jalur_kereta", groupId: "perkeretaapian", label: "Kereta Api", icon: TrainFront, desc: "Logistik", tarif: 1, unit: "Unit", cost: 120, buildTime: 90, maintenanceCost: 10, count: (currentData.infrastruktur.jalur_kereta || 0) + ((buildingDeltas["jalur_kereta"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.jalur_kereta },
        { key: "kereta_bawah_tanah", groupId: "perkeretaapian", label: "Kereta Bawah Tanah", icon: TrainFront, desc: "Transportasi", tarif: 1, unit: "Unit", cost: 150, buildTime: 120, maintenanceCost: 15, count: (currentData.infrastruktur.kereta_bawah_tanah || 0) + ((buildingDeltas["kereta_bawah_tanah"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.kereta_bawah_tanah },
        
        { key: "pelabuhan_laut", groupId: "maritim_udara", label: "Pelabuhan", icon: Ship, desc: "Maritim", tarif: 1, unit: "Unit", cost: 350, buildTime: 180, maintenanceCost: 40, count: (currentData.infrastruktur.pelabuhan_laut || 0) + ((buildingDeltas["seaport"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.pelabuhan_laut },
        { key: "bandara", groupId: "maritim_udara", label: "Bandara", icon: Plane, desc: "Udara", tarif: 1, unit: "Unit", cost: 450, buildTime: 240, maintenanceCost: 60, count: (currentData.infrastruktur.bandara || 0) + ((buildingDeltas["bandara"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.bandara },
        { key: "helipad", groupId: "maritim_udara", label: "Helipad", icon: Plane, desc: "Udara", tarif: 1, unit: "Unit", cost: 15, buildTime: 30, maintenanceCost: 5, count: (currentData.infrastruktur.helipad || 0) + ((buildingDeltas["helipad"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.helipad },
      ]
    },
    {
      id: "layanan_sosial",
      title: "2. Sektor Layanan Sosial & Publik (18 jenis)",
      icon: HeartPulse,
      color: "text-rose-400",
      items: [
        // --- PENDIDIKAN & RISET (6 JENIS) ---
        { key: "tk_sd", groupId: "pendidikan", label: "TK / SD", icon: Building2, desc: "Pendidikan", tarif: 1, unit: "Unit", cost: 13, buildTime: 40, maintenanceCost: 2, count: ((currentData.sektor_sosial.pendidikan.prasekolah || 0) + (currentData.sektor_sosial.pendidikan.dasar || 0)) + ((buildingDeltas["tk_sd"] as number) || 0), consumption: (KONSUMSI_SOSIAL.pendidikan.prasekolah + KONSUMSI_SOSIAL.pendidikan.dasar) / 2 },
        { key: "smp_sma", groupId: "pendidikan", label: "SMP / SMA", icon: Library, desc: "Pendidikan", tarif: 1, unit: "Unit", cost: 32, buildTime: 60, maintenanceCost: 5, count: ((currentData.sektor_sosial.pendidikan.menengah || 0) + (currentData.sektor_sosial.pendidikan.lanjutan || 0)) + ((buildingDeltas["smp_sma"] as number) || 0), consumption: (KONSUMSI_SOSIAL.pendidikan.menengah + KONSUMSI_SOSIAL.pendidikan.lanjutan) / 2 },
        { key: "pt_lembaga", groupId: "pendidikan", label: "PT / Lembaga", icon: Library, desc: "Pendidikan", tarif: 1, unit: "Unit", cost: 230, buildTime: 150, maintenanceCost: 20, count: ((currentData.sektor_sosial.pendidikan.universitas || 0) + (currentData.sektor_sosial.pendidikan.lembaga_pendidikan || 0)) + ((buildingDeltas["pt_lembaga"] as number) || 0), consumption: ((KONSUMSI_SOSIAL.pendidikan.universitas || 0) + (KONSUMSI_SOSIAL.pendidikan.lembaga_pendidikan || 0)) / 2 },
        { key: "lab_riset", groupId: "pendidikan", label: "Lab & Riset", icon: Microscope, desc: "Riset", tarif: 1, unit: "Unit", cost: 290, buildTime: 120, maintenanceCost: 30, count: ((currentData.sektor_sosial.pendidikan.laboratorium || 0) + (currentData.sektor_sosial.pendidikan.pusat_penelitian || 0)) + ((buildingDeltas["lab_riset"] as number) || 0), consumption: ((KONSUMSI_SOSIAL.pendidikan.laboratorium || 0) + (KONSUMSI_SOSIAL.pendidikan.pusat_penelitian || 0)) / 2 },
        { key: "observatorium", groupId: "pendidikan", label: "Observatorium", icon: Eye, desc: "Riset", tarif: 1, unit: "Unit", cost: 120, buildTime: 180, maintenanceCost: 15, count: (currentData.sektor_sosial.pendidikan.observatorium || 0) + ((buildingDeltas["observatorium"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.observatorium },
        { key: "pusat_pengembangan", groupId: "pendidikan", label: "Pengembangan", icon: Lightbulb, desc: "Inovasi", tarif: 1, unit: "Unit", cost: 180, buildTime: 90, maintenanceCost: 20, count: (currentData.sektor_sosial.pendidikan.pusat_pengembangan || 0) + ((buildingDeltas["pusat_pengembangan"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.pusat_pengembangan },

        // --- KESEHATAN & OLAHRAGA (6 JENIS) ---
        { key: "rumah_sakit_besar", groupId: "kesehatan", label: "RS Besar", icon: Building2, desc: "Kesehatan", tarif: 1, unit: "Unit", cost: 350, buildTime: 180, maintenanceCost: 50, count: (currentData.sektor_sosial.kesehatan.rumah_sakit_besar || 0) + ((buildingDeltas["rumah_sakit_besar"] as number) || 0), consumption: KONSUMSI_SOSIAL.kesehatan.rumah_sakit_besar },
        { key: "rumah_sakit_kecil", groupId: "kesehatan", label: "RS Kecil", icon: Building2, desc: "Kesehatan", tarif: 1, unit: "Unit", cost: 80, buildTime: 45, maintenanceCost: 15, count: (currentData.sektor_sosial.kesehatan.rumah_sakit_kecil || 0) + ((buildingDeltas["rumah_sakit_kecil"] as number) || 0), consumption: KONSUMSI_SOSIAL.kesehatan.rumah_sakit_kecil },
        { key: "pusat_diagnostik", groupId: "kesehatan", label: "Diagnostik", icon: Search, desc: "Kesehatan", tarif: 1, unit: "Unit", cost: 30, buildTime: 30, maintenanceCost: 5, count: (currentData.sektor_sosial.kesehatan.pusat_diagnostik || 0) + ((buildingDeltas["pusat_diagnostik"] as number) || 0), consumption: KONSUMSI_SOSIAL.kesehatan.pusat_diagnostik },
        { key: "kolam_renang", groupId: "kesehatan", label: "Kolam Renang", icon: Waves, desc: "Olahraga", tarif: 1, unit: "Unit", cost: 15, buildTime: 30, maintenanceCost: 3, count: (currentData.sektor_olahraga?.kolam_renang || 0) + ((buildingDeltas["kolam_renang"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.kolam_renang },
        { key: "sirkuit_balap", groupId: "kesehatan", label: "Sirkuit Balap", icon: Flame, desc: "Olahraga", tarif: 1, unit: "Unit", cost: 250, buildTime: 180, maintenanceCost: 40, count: (currentData.sektor_olahraga?.sirkuit_balap || 0) + ((buildingDeltas["sirkuit_balap"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.sirkuit_balap },
        { key: "stadium_int", groupId: "kesehatan", label: "Stadion (Nas/Int)", icon: Trophy, desc: "Olahraga", tarif: 1, unit: "Unit", cost: 670, buildTime: 240, maintenanceCost: 60, count: ((currentData.sektor_olahraga?.stadion || 0) + (currentData.sektor_olahraga?.stadion_internasional || 0)) + ((buildingDeltas["stadium_int"] as number) || 0), consumption: (KONSUMSI_SOSIAL.olahraga.stadion + KONSUMSI_SOSIAL.olahraga.stadion_internasional) / 2 },

        // --- HUKUM & KEAMANAN (6 JENIS) ---
        { key: "akademi_polisi", groupId: "hukum", label: "Akademi Polisi", icon: GraduationCap, desc: "Keamanan", tarif: 1, unit: "Unit", cost: 40, buildTime: 60, maintenanceCost: 10, count: (currentData.sektor_sosial.hukum.akademi_polisi || 0) + ((buildingDeltas["akademi_polisi"] as number) || 0), consumption: KONSUMSI_SOSIAL.hukum.akademi_polisi },
        { key: "pos_polisi", groupId: "hukum", label: "Kepolisian", icon: ShieldAlert, desc: "Keamanan", tarif: 1, unit: "Unit", cost: 25, buildTime: 60, maintenanceCost: 5, count: (currentData.sektor_sosial.hukum.pos_polisi || 0) + ((buildingDeltas["pos_polisi"] as number) || 0), consumption: KONSUMSI_SOSIAL.hukum.pos_polisi },
        { key: "armada_polisi", groupId: "hukum", label: "Armada Mobil", icon: Car, desc: "Keamanan", tarif: 1, unit: "Unit", cost: 5, buildTime: 15, maintenanceCost: 1, count: (currentData.sektor_sosial.hukum.armada_mobil_polisi || 0) + ((buildingDeltas["armada_polisi"] as number) || 0), consumption: KONSUMSI_SOSIAL.hukum.armada_mobil_polisi },
        { key: "kejaksaan_court", groupId: "hukum", label: "Kejaksaan/Court", icon: Gavel, desc: "Hukum", tarif: 1, unit: "Unit", cost: 120, buildTime: 90, maintenanceCost: 15, count: (currentData.sektor_sosial.hukum.kejaksaan + currentData.sektor_sosial.hukum.pengadilan) + ((buildingDeltas["kejaksaan_court"] as number) || 0), consumption: (KONSUMSI_SOSIAL.hukum.kejaksaan + KONSUMSI_SOSIAL.hukum.pengadilan) / 2 },
        { key: "legal_aid", groupId: "hukum", label: "Bantuan Hukum", icon: Scale, desc: "Hukum", tarif: 1, unit: "Unit", cost: 30, buildTime: 30, maintenanceCost: 5, count: (currentData.sektor_sosial.hukum.pusat_bantuan_hukum || 0) + ((buildingDeltas["legal_aid"] as number) || 0), consumption: KONSUMSI_SOSIAL.hukum.pusat_bantuan_hukum },
        { key: "stasiun_komando", groupId: "hukum", label: "Pusat Komando", icon: Siren, desc: "Keamanan", tarif: 1, unit: "Unit", cost: 80, buildTime: 45, maintenanceCost: 12, count: (currentData.armada_kepolisian?.armada_polisi?.pusat_komando?.kantor_polisi || 0) + ((buildingDeltas["stasiun_komando"] as number) || 0), consumption: KONSUMSI_SOSIAL.hukum.pos_polisi },
      ]
    }
  ];

  const handleBuildRequest = (item: any) => {
    setConfirmBuild(item);
    setQuantity(1);
  };

  const handleConfirmBuild = () => {
    if (!confirmBuild) return;
    try {
      let currentStart = getStoredGameDate().getTime();
      const itemsToAdd: any[] = [];
      for (let i = 0; i < quantity; i++) {
        const currentEnd = addDays(new Date(currentStart), confirmBuild.buildTime).getTime();
        const newItem = buildingStorage.addToQueue({
          buildingKey: confirmBuild.key,
          label: confirmBuild.label,
          sector: confirmBuild.groupId,
          startDate: currentStart,
          endDate: currentEnd,
          buildTime: confirmBuild.buildTime
        });
        if (newItem) itemsToAdd.push(newItem);
        currentStart = currentEnd;
      }
      if (itemsToAdd.length > 0) setActiveConstructions(prev => [...prev, ...itemsToAdd]);
      setConfirmBuild(null);
      setQuantity(1);
    } catch (err) {
      console.error("DEBUG: Add to queue error", err);
    }
  };

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-xl">
              <Wrench className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Tempat Umum Hub</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Social & Infra Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowQueue(true)} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group flex items-center gap-2 relative shadow-[0_0_15px_rgba(8,145,178,0.1)] active:scale-95">
              <Clock className="h-6 w-6 text-cyan-500 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              {activeConstructions.length > 0 && <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-zinc-950 shadow-lg animate-in zoom-in">{activeConstructions.length}</span>}
            </button>
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Electricity Summary */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl"><Zap className="h-6 w-6 text-cyan-500" /></div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.supply.title}</p>
                <p className="text-xl font-black text-white leading-tight">{(adjustedTotalPasokan * 10).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-rose-500/10 rounded-xl"><Activity className="h-6 w-6 text-rose-500" /></div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.usage.title}</p>
                <p className="text-xl font-black text-white leading-tight">{(adjustedTotalBeban * 10).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>
            <div className={`bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group`}>
              <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>{surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-500" />}</div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.balance.title}</p>
                <p className={`text-xl font-black leading-tight ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>{(surplus * 10).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="space-y-12">
            {publicGroups.map((group) => (
              <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1">
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}><group.icon className={`h-4 w-4 ${group.color}`} /></div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title} <span className="text-cyan-400 ml-3 font-black lowercase italic text-xs tracking-normal bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">({group.items.length} Jenis)</span></h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
                  <button onClick={() => toggleSector(group.id)} className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95">
                    {collapsedSectors.has(group.id) ? <EyeOff size={16} /> : <Eye size={16} className="text-cyan-400" />}
                  </button>
                </div>
                <div className={`grid transition-all duration-700 ease-in-out ${!collapsedSectors.has(group.id) ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 pb-4">
                      {group.items.map((item: any, idx: number) => {
                        const currentConstruction = activeConstructions?.find(c => c && c.buildingKey === item.key);
                        const prevGroupId = idx > 0 ? group.items[idx - 1].groupId : null;
                        
                        const subGroupLabels: Record<string, string> = {
                          manufaktur: "Manufaktur & Industri",
                          peternakan: "Peternakan & Perikanan",
                          pertanian: "Agrikultur & Pertanian",
                          pendidikan: "Pendidikan & Riset",
                          kesehatan: "Kesehatan, Olahraga & Media",
                          hukum: "Hukum, Pertahanan & Keamanan",
                          infra_darat: "Infrastruktur Darat & Logistik",
                          perkeretaapian: "Sistem Perkeretaapian Nasional",
                          maritim_udara: "Hub Maritim & Dirgantara"
                        };

                        const showSubHeader = item.groupId && item.groupId !== prevGroupId;

                        return (
                          <Fragment key={item.key || idx}>
                            {showSubHeader && subGroupLabels[item.groupId] && (
                              <div className="col-span-full mt-6 mb-2 flex items-center gap-4">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800"></div>
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] whitespace-nowrap bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full shadow-xl">
                                  {subGroupLabels[item.groupId]}
                                </span>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800"></div>
                              </div>
                            )}
                            <BuildingCard
                              item={item}
                              onBuild={handleBuildRequest}
                              construction={currentConstruction}
                              cumulative={0}
                            />
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confirmation Overlay */}
        {confirmBuild && (
          <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[32px] shadow-2xl max-w-md w-full mx-4 flex flex-col items-center text-center gap-6 animate-in zoom-in-95">
              <div className="p-5 bg-cyan-500/10 rounded-full border border-cyan-500/20"><confirmBuild.icon className="h-10 w-10 text-cyan-500" /></div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Konfirmasi Bangun?</h3>
                <p className="text-zinc-400 text-sm font-medium">Membangun <span className="text-white font-black underline">{confirmBuild.label}</span> untuk fasilitas publik.</p>
              </div>
              <div className="w-full grid grid-cols-2 gap-3">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1"><span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Biaya</span><span className="text-xl font-black text-amber-500">{confirmBuild.cost * quantity}</span></div>
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1"><span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Waktu</span><span className="text-xl font-black text-white">{confirmBuild.buildTime * quantity} Hari</span></div>
              </div>
              <div className="w-full flex justify-center gap-4 bg-zinc-950/80 border border-zinc-800 p-2 rounded-2xl">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700 font-black">-</button>
                <div className="flex flex-col items-center min-w-[50px]"><span className="text-xl font-black text-white">{quantity}</span><span className="text-[10px] text-zinc-500">Unit</span></div>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700 font-black">+</button>
              </div>
              <div className="flex gap-4 w-full"><button onClick={() => setConfirmBuild(null)} className="flex-1 px-6 py-4 rounded-2xl bg-zinc-800/50 text-zinc-400 font-black text-xs uppercase cursor-pointer">Batal</button>
              <button onClick={handleConfirmBuild} className="flex-2 px-6 py-4 rounded-2xl bg-cyan-600 text-white font-black text-xs uppercase cursor-pointer">Bangun</button></div>
            </div>
          </div>
        )}

        {/* Queue Sidebar */}
        <div className={`absolute inset-0 z-[90] flex items-center justify-end transition-colors duration-300 ${showQueue ? 'bg-black/20 pointer-events-auto' : 'bg-transparent pointer-events-none'}`} onClick={() => setShowQueue(false)}>
          <div className={`bg-zinc-950/95 border-l border-zinc-800 w-full max-w-sm h-full shadow-2xl flex flex-col transition-transform duration-500 ${showQueue ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center"><h3 className="text-lg font-bold text-white tracking-tight">Antrean Pembangunan</h3><button onClick={() => setShowQueue(false)}><X className="h-5 w-5 text-zinc-400" /></button></div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
              {activeConstructions.length === 0 ? <p className="text-zinc-500 text-center font-bold uppercase tracking-widest mt-10">Antrean Kosong</p> : 
                activeConstructions.map((item, idx) => {
                  const progress = calculateConstructionProgress(item.startDate, item.endDate, getStoredGameDate().getTime());
                  if (!progress) return null;
                  return (
                    <div key={item.id || idx} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5" style={{ width: `${progress.percentage}%` }} />
                      <div className="flex justify-between items-center relative z-10"><h4 className="text-sm font-black text-white">{item.label}</h4><span className="text-[10px] font-bold text-cyan-400">{progress.percentage}%</span></div>
                      <div className="h-1.5 w-full bg-zinc-950 rounded-full mt-2 overflow-hidden border border-zinc-800/50"><div className={`h-full ${progress.colorClass}`} style={{ width: `${progress.percentage}%` }} /></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BuildingCard({ item, onBuild, construction, cumulative }: any) {
  const [showDetail, setShowDetail] = useState(false);
  const currentDate = getStoredGameDate().getTime();
  const progress = construction ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate) : null;

  return (
    <div className={`bg-zinc-900/40 border ${progress ? 'border-cyan-500/30 bg-cyan-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full`}>
      {progress && <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000" style={{ width: `${progress.percentage}%` }} />}
      <div className="flex items-start justify-between relative z-10">
        <div className="flex gap-2">
          <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform"><item.icon className={`h-5 w-5 ${progress ? 'text-white' : 'text-cyan-500'}`} /></div>
          <button 
            onClick={() => setShowDetail(!showDetail)}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${showDetail ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30'}`}
          >
            <Info size={16} />
          </button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{item.desc}</div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter">Terbangun: {item.count} Unit</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1 relative z-10 mt-1">
        <h4 className="text-[14px] font-black text-zinc-100 tracking-tight group-hover:text-white transition-colors leading-tight line-clamp-1">{item.label}</h4>
        <div className="flex flex-col gap-1 mt-1">
          {showDetail ? (
            <div className="mt-2 space-y-2 animate-in fade-in slide-in-from-top-1 duration-300">
               <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                  <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Biaya Pemeliharaan</span>
                  <span className="text-[15px] font-black text-rose-400">-{item.maintenanceCost || 5} / hari</span>
               </div>
               <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                  <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Beban Listrik</span>
                  <span className="text-[15px] font-black text-amber-500">{item.consumption || 5} MW</span>
               </div>
               <p className="text-[12px] text-zinc-400 italic mt-2 px-1 leading-relaxed">Fasilitas publik didanai oleh negara untuk mendukung produktivitas dan kesejahteraan rakyat.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 border-t border-zinc-800/10 pt-2 mt-1">
                <Zap size={12} className="text-rose-500/90" />
                <span className="text-[11px] font-bold text-rose-500/80">Konsumsi: {item.consumption || 5} MW/unit</span>
              </div>
              <div className="flex items-center gap-2"><Clock size={12} className="text-zinc-500" /><span className="text-[11px] font-bold text-zinc-500 italic">Waktu: {item.buildTime} Hari</span></div>
            </>
          )}
        </div>
        <div className="mt-auto pt-3 relative z-10">
          {progress ? (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-zinc-400"><span>{getStatusText(progress.percentage, progress.isWaiting)}</span><span className={progress.colorClass.replace('bg-', 'text-')}>{progress.percentage}%</span></div>
              <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50"><div className={`h-full ${progress.colorClass}`} style={{ width: `${progress.percentage}%` }} /></div>
            </div>
          ) : (
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-zinc-400 font-bold tracking-tight">Biaya: {item.cost}</span>
              <button onClick={e => { e.stopPropagation(); onBuild(item); }} className="px-4 py-1.5 rounded-lg bg-cyan-600/10 text-cyan-500 text-[10px] font-black uppercase tracking-widest border border-cyan-500/30 hover:bg-cyan-600 hover:text-white transition-all cursor-pointer">Bangun</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


