"use client"

import { useState, useEffect, Fragment } from "react";
import { X, Wrench, Zap, Shield, Truck, MapPin, Radiation, Eye, Gavel, UserCheck, Landmark, Swords as MilitaryIcon, HardHat, Building2, TowerControl, Ship, Plane, Rocket, Crosshair, Activity, Wifi, Radio, Cctv, Search, Siren, Car, Bike, Dog, ShieldAlert, Anchor, Waves, Satellite, RadioTower, Cpu, Target, Radar, TrendingUp, TrendingDown, Clock, Loader2, RefreshCw, EyeOff, Building, Archive, Info } from "lucide-react"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, DASHBOARD_LABELS, KAPASITAS_LISTRIK_METADATA } from "@/app/database/data/1_kelistrikan";
import { KONSUMSI_PERTAHANAN, KONSUMSI_STRATEGIC, KONSUMSI_FLEET, KONSUMSI_SOSIAL } from "@/app/database/data/1_kelistrikan/2_konsumsi_listrik";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate } from "@/app/game/data/time/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/countries/region/_index";
import { 
  calculateTotalInfantry, 
  calculateInfantryPower,
  calculatePrisonCapacity,
  calculateArmoryCapacity,
  calculateTankHangarCapacity,
  calculateAcademyCapacity,
  calculateAirBaseCapacity,
  calculateNavalBaseCapacity,
  calculateTankPower,
  calculateApcPower,
  calculateArtilleryPower,
  calculateRocketPower,
  calculateSamPower,
  calculateTacticalPower,
  calculateCarrierPower,
  calculateDestroyerPower,
  calculateCorvettePower,
  calculateSubmarinePower,
  calculateRegularSubPower,
  calculateMineShipPower,
  calculateLogisticsPower,
  calculateStealthPower,
  calculateInterceptorPower,
  calculateBomberPower,
  calculateAttackHeliPower,
  calculateReconPower,
  calculateUavPower,
  calculateKamikazePower,
  calculateTransportPower,
  INFANTRY_POWER_PER_UNIT,
  TANK_POWER_PER_UNIT,
  APC_POWER_PER_UNIT,
  ARTILLERY_POWER_PER_UNIT,
  ROCKET_POWER_PER_UNIT,
  SAM_POWER_PER_UNIT,
  TACTICAL_POWER_PER_UNIT,
  CARRIER_POWER_PER_UNIT,
  DESTROYER_POWER_PER_UNIT,
  CORVETTE_POWER_PER_UNIT,
  SUBMARINE_POWER_PER_UNIT,
  REGULAR_SUB_POWER_PER_UNIT,
  MINE_SHIP_POWER_PER_UNIT,
  LOGISTICS_POWER_PER_UNIT,
  STEALTH_POWER_PER_UNIT,
  INTERCEPTOR_POWER_PER_UNIT,
  BOMBER_POWER_PER_UNIT,
  ATTACK_HELI_POWER_PER_UNIT,
  RECON_POWER_PER_UNIT,
  UAV_POWER_PER_UNIT,
  KAMIKAZE_POWER_PER_UNIT,
  TRANSPORT_POWER_PER_UNIT
} from "./militaryLogic";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProduksiMiliterModal({ isOpen, onClose }: ModalProps) {
  const [activeConstructions, setActiveConstructions] = useState<any[]>([]);
  const [showQueue, setShowQueue] = useState(false);
  const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());
  const [confirmBuild, setConfirmBuild] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentData, setCurrentData] = useState<any>(null);

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const session = gameStorage.getSession();
    if (session) {
      const countryName = session.country || localStorage.getItem("selectedCountry") || "Indonesia";
      const data = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
      setCurrentData(data);
    }
  }, [isOpen]);

  // Sync queue data whenever tick or modal opens
  useEffect(() => {
    if (!isOpen) return;
    const queue = buildingStorage.getQueue();
    setActiveConstructions(queue);
  }, [tick, isOpen]);

  // Polling for progress updates and completion
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
        console.error("DEBUG: Military Hub poll error", err);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen || !currentData) return null;

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas;

  const totalPasokan = hitungTotalKapasitas(currentData);
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

  const toggleSector = (id: string) => {
    setCollapsedSectors(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handles = {
    handleBuildRequest: (item: any) => {
      setConfirmBuild(item);
      setQuantity(1);
    },
    handleConfirmBuild: () => {
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
        console.error("DEBUG: Military Hub build error", err);
      }
    }
  };

  const militaryGroups = [
    {
      id: "pertahanan_alutsista",
      title: "1. Manajemen Pertahanan",
      icon: Shield,
      color: "text-red-500",
      items: [
        { key: "penjara", groupId: "pertahanan", label: "Penjara", icon: Gavel, desc: "Lembaga Pemasyarakatan", cost: 25, buildTime: 60, maintenanceCost: 20, count: (currentData.sektor_pertahanan.penjara || 0) + ((buildingDeltas["penjara"] as number) || 0), consumption: KONSUMSI_PERTAHANAN.penjara },
        { key: "gudang_senjata", groupId: "pertahanan", label: "Gudang Senjata", icon: Archive, desc: "Penyimpanan Amunisi", cost: 30, buildTime: 30, maintenanceCost: 10, count: (currentData.sektor_pertahanan.gudang_senjata || 0) + ((buildingDeltas["gudang_senjata"] as number) || 0), consumption: KONSUMSI_PERTAHANAN.gudang_senjata },
        { key: "hangar_tank", groupId: "pertahanan", label: "Hangar Tank", icon: Truck, desc: "Garasi Tempur", cost: 50, buildTime: 60, maintenanceCost: 35, count: (currentData.sektor_pertahanan.hangar_tank || 0) + ((buildingDeltas["hangar_tank"] as number) || 0), consumption: KONSUMSI_PERTAHANAN.hangar_tank },
        { key: "akademi_militer", groupId: "pertahanan", label: "Akademi Militer", icon: Landmark, desc: "Pendidikan Perwira", cost: 150, buildTime: 180, maintenanceCost: 40, count: (currentData.sektor_pertahanan.akademi_militer || 0) + ((buildingDeltas["akademi_militer"] as number) || 0), consumption: KONSUMSI_PERTAHANAN.akademi_militer },
        { key: "pusat_komando", groupId: "pertahanan", label: "Pusat Komando", icon: TowerControl, desc: "Komando Tertinggi", cost: 450, buildTime: 240, maintenanceCost: 150, count: (currentData.sektor_pertahanan.pusat_komando || 0) + ((buildingDeltas["pusat_komando"] as number) || 0), consumption: KONSUMSI_STRATEGIC.pusat_komando },
        { key: "pangkalan_udara", groupId: "pertahanan", label: "Pangkalan Udara", icon: MapPin, desc: "Fasilitas Dirgantara", cost: 280, buildTime: 180, maintenanceCost: 80, count: (currentData.sektor_pertahanan.pangkalan_udara || 0) + ((buildingDeltas["pangkalan_udara"] as number) || 0), consumption: KONSUMSI_STRATEGIC.pangkalan_udara },
        { key: "pangkalan_laut", groupId: "pertahanan", label: "Pangkalan Laut", icon: Ship, desc: "Fasilitas Maritim", cost: 320, buildTime: 210, maintenanceCost: 100, count: (currentData.sektor_pertahanan.pangkalan_laut || 0) + ((buildingDeltas["pangkalan_laut"] as number) || 0), consumption: KONSUMSI_STRATEGIC.pangkalan_laut },
        { key: "program_luar_angkasa", groupId: "pertahanan", label: "Program luar angkasa", icon: Rocket, desc: "Program Satelit", cost: 600, buildTime: 365, maintenanceCost: 250, count: (currentData.sektor_pertahanan.program_luar_angkasa || 0) + ((buildingDeltas["program_luar_angkasa"] as number) || 0), consumption: KONSUMSI_STRATEGIC.program_luar_angkasa },
        { key: "cyber_shield", groupId: "pertahanan", label: "Cyber Defense", icon: ShieldAlert, desc: "Keamanan Digital", cost: 180, buildTime: 120, maintenanceCost: 50, count: Math.floor(currentData.sektor_pertahanan.pertahanan_siber || 0), consumption: 5 }
      ]
    },
    {
      id: "armada_tempur",
      title: "2. Sektor Armada Tempur Nasional",
      icon: MilitaryIcon,
      color: "text-orange-500",
      items: [
        // ARMADA DARAT
        { key: "barak", groupId: "darat", label: "Barak Militer", icon: MilitaryIcon, desc: "Hunian Tentara", cost: 40, buildTime: 45, maintenanceCost: 15, count: (currentData.armada_militer.barak || 0) + ((buildingDeltas["barak"] as number) || 0), consumption: KONSUMSI_PERTAHANAN.barak },
        { key: "tank", groupId: "darat", label: "Main Battle Tank", icon: Truck, desc: "Kavaleri Darat", cost: 20, buildTime: 30, maintenanceCost: 10, count: (currentData.armada_militer.darat.tank_tempur_utama || 0), consumption: KONSUMSI_FLEET.darat.tank_tempur_utama },
        { key: "apc", groupId: "darat", label: "APC / IFV", icon: Truck, desc: "Transportasi Taktis", cost: 8, buildTime: 15, maintenanceCost: 4, count: (currentData.armada_militer.darat.apc_ifv || 0), consumption: KONSUMSI_FLEET.darat.apc_ifv },
        { key: "artileri", groupId: "darat", label: "Artileri Berat", icon: Target, desc: "Pukulan Jarak Jauh", cost: 15, buildTime: 45, maintenanceCost: 8, count: (currentData.armada_militer.darat.artileri_berat || 0), consumption: KONSUMSI_FLEET.darat.artileri_berat },
        { key: "rocket", groupId: "darat", label: "MLRS Rocket", icon: Rocket, desc: "Sistem Roket", cost: 18, buildTime: 50, maintenanceCost: 12, count: (currentData.armada_militer.darat.sistem_peluncur_roket || 0), consumption: KONSUMSI_FLEET.darat.sistem_peluncur_roket },
        { key: "sam", groupId: "darat", label: "Mobile SAM", icon: ShieldAlert, desc: "Hulu Ledak", cost: 25, buildTime: 60, maintenanceCost: 15, count: (currentData.armada_militer.darat.pertahanan_udara_mobile || 0), consumption: KONSUMSI_FLEET.darat.pertahanan_udara_mobile },
        { key: "tactical", groupId: "darat", label: "Kendaraan Taktis", icon: Car, desc: "Patroli Tempur", cost: 5, buildTime: 10, maintenanceCost: 2, count: (currentData.armada_militer.darat.kendaraan_taktis || 0), consumption: KONSUMSI_FLEET.darat.kendaraan_taktis },
        
        // ARMADA LAUT
        { key: "carrier", groupId: "laut", label: "Kapal Induk", icon: Ship, desc: "Pangkalan Apung", cost: 750, buildTime: 480, maintenanceCost: 200, count: (currentData.armada_militer.laut.kapal_induk || 0), consumption: KONSUMSI_FLEET.laut.kapal_induk },
        { key: "destroyer", groupId: "laut", label: "Kapal Destroyer", icon: Waves, desc: "Perusak Maritim", cost: 280, buildTime: 360, maintenanceCost: 100, count: (currentData.armada_militer.laut.kapal_destroyer || 0), consumption: KONSUMSI_FLEET.laut.kapal_destroyer },
        { key: "corvette", groupId: "laut", label: "Kapal Korvet", icon: Anchor, desc: "Kapal Kawal", cost: 120, buildTime: 180, maintenanceCost: 45, count: (currentData.armada_militer.laut.kapal_korvet || 0), consumption: KONSUMSI_FLEET.laut.kapal_korvet },
        { key: "submarine", groupId: "laut", label: "Kapal Selam N", icon: RadioTower, desc: "Siluman Bawah Air", cost: 420, buildTime: 420, maintenanceCost: 150, count: (currentData.armada_militer.laut.kapal_selam_nuklir || 0), consumption: KONSUMSI_FLEET.laut.kapal_selam_nuklir },
        { key: "reg_sub", groupId: "laut", label: "Kapal Selam R", icon: RadioTower, desc: "Selam Reguler", cost: 150, buildTime: 240, maintenanceCost: 60, count: (currentData.armada_militer.laut.kapal_selam_regular || 0), consumption: KONSUMSI_FLEET.laut.kapal_selam_regular },
        { key: "mine_ship", groupId: "laut", label: "Kapal Ranjau", icon: Ship, desc: "Penyapu Ranjau", cost: 45, buildTime: 90, maintenanceCost: 15, count: (currentData.armada_militer.laut.kapal_ranjau || 0), consumption: KONSUMSI_FLEET.laut.kapal_ranjau },
        { key: "logistics", groupId: "laut", label: "Kapal Logistik", icon: Truck, desc: "Suplai Maritim", cost: 60, buildTime: 120, maintenanceCost: 25, count: (currentData.armada_militer.laut.kapal_logistik || 0), consumption: KONSUMSI_FLEET.laut.kapal_logistik },
        
        // ARMADA UDARA
        { key: "stealth_jet", groupId: "udara", label: "Jet Stealth", icon: Plane, desc: "Supremasi Udara", cost: 250, buildTime: 300, maintenanceCost: 120, count: (currentData.armada_militer.udara.jet_tempur_siluman || 0), consumption: KONSUMSI_FLEET.udara.jet_tempur_siluman },
        { key: "interceptor", groupId: "udara", label: "Jet Interceptor", icon: Plane, desc: "Satu Pencegat", cost: 120, buildTime: 180, maintenanceCost: 55, count: (currentData.armada_militer.udara.jet_tempur_interceptor || 0), consumption: KONSUMSI_FLEET.udara.jet_tempur_interceptor },
        { key: "bomber", groupId: "udara", label: "Pesawat Pengebom", icon: Radio, desc: "Serangan Udara", cost: 350, buildTime: 360, maintenanceCost: 180, count: (currentData.armada_militer.udara.pesawat_pengebom || 0), consumption: KONSUMSI_FLEET.udara.pesawat_pengebom },
        { key: "heli_attack", groupId: "udara", label: "Heli Serang", icon: Radio, desc: "Bantuan Udara", cost: 40, buildTime: 90, maintenanceCost: 25, count: (currentData.armada_militer.udara.helikopter_serang || 0), consumption: KONSUMSI_FLEET.udara.helikopter_serang },
        { key: "recon_plane", groupId: "udara", label: "Pesawat Intai", icon: Search, desc: "Intelijen Udara", cost: 80, buildTime: 120, maintenanceCost: 20, count: (currentData.armada_militer.udara.pesawat_pengintai || 0), consumption: KONSUMSI_FLEET.udara.pesawat_pengintai },
        { key: "uav", groupId: "udara", label: "Drone UAV", icon: Satellite, desc: "Intai Tanpa Awak", cost: 15, buildTime: 30, maintenanceCost: 5, count: (currentData.armada_militer.udara.drone_intai_uav || 0), consumption: KONSUMSI_FLEET.udara.drone_intai_uav },
        { key: "kamikaze", groupId: "udara", label: "Drone Kamikaze", icon: Target, desc: "Serangan Bunuh Diri", cost: 5, buildTime: 7, maintenanceCost: 1, count: (currentData.armada_militer.udara.drone_kamikaze || 0), consumption: KONSUMSI_FLEET.udara.drone_kamikaze },
        { key: "transport", groupId: "udara", label: "Pesawat Angkut", icon: Truck, desc: "Logistik Udara", cost: 45, buildTime: 90, maintenanceCost: 15, count: (currentData.armada_militer.udara.pesawat_angkut || 0), consumption: KONSUMSI_FLEET.udara.pesawat_angkut }
      ]
    },
    {
      id: "strategis_keamanan",
      title: "3. Sektor Strategis & Keamanan Publik",
      icon: Crosshair,
      color: "text-indigo-400",
      items: [
        // INTELIJEN
        { key: "satellite", groupId: "intel", label: "Sistem Satelit", icon: Satellite, desc: "Orbit Intelijen", cost: 350, buildTime: 180, maintenanceCost: 100, count: (currentData.militer_strategis.intel_radar?.sistem_satelit || 0) + ((buildingDeltas["satellite"] as number) || 0), consumption: 10 },
        { key: "radar", groupId: "intel", label: "Jaringan Radar", icon: Radar, desc: "Deteksi Dini", cost: 120, buildTime: 90, maintenanceCost: 30, count: (currentData.militer_strategis.intel_radar?.jaringan_radar || 0), consumption: 25 },
        { key: "operasi_siber", groupId: "intel", label: "Operasi Cyber", icon: Cpu, desc: "Perang Digital", cost: 180, buildTime: 120, maintenanceCost: 40, count: (currentData.militer_strategis.intel_radar?.operasi_siber || 0), consumption: 40 },
        
        // KEPOLISIAN
        { key: "pos_polisi", groupId: "polisi", label: "Kantor Polisi", icon: Siren, desc: "Komando Wilayah", cost: 25, buildTime: 60, maintenanceCost: 15, count: (currentData.armada_kepolisian.armada_polisi.pusat_komando.kantor_polisi || 0), consumption: KONSUMSI_SOSIAL.hukum.pos_polisi },
        { key: "police_car", groupId: "polisi", label: "Mobil Patroli", icon: Car, desc: "Patroli Lantas", cost: 2, buildTime: 7, maintenanceCost: 2, count: (currentData.armada_kepolisian.armada_polisi.patroli_lantas.mobil_patroli || 0), consumption: KONSUMSI_SOSIAL.hukum.armada_mobil_polisi },
        { key: "police_bike", groupId: "polisi", label: "Sepeda Motor", icon: Bike, desc: "Patroli Cepat", cost: 1, buildTime: 5, maintenanceCost: 1, count: (currentData.armada_kepolisian.armada_polisi.patroli_lantas.sepeda_motor || 0), consumption: 0.05 },
        { key: "unit_k9", groupId: "polisi", label: "Unit K-9", icon: Dog, desc: "Pelacakan", cost: 1, buildTime: 5, maintenanceCost: 1, count: (currentData.armada_kepolisian.armada_polisi.patroli_lantas.unit_k9 || 0), consumption: 0.01 },
        { key: "swat", groupId: "polisi", label: "Pasukan SWAT", icon: Crosshair, desc: "Taktis Khusus", cost: 5, buildTime: 30, maintenanceCost: 5, count: (currentData.armada_kepolisian.armada_polisi.taktis_khusus.swat || 0), consumption: 0.5 },
        { key: "police_heli", groupId: "polisi", label: "Heli Polisi", icon: Radio, desc: "Udara Polisi", cost: 15, buildTime: 60, maintenanceCost: 10, count: (currentData.armada_kepolisian.armada_polisi.taktis_khusus.helikopter_polisi || 0), consumption: 2 },
        { key: "riot_control", groupId: "polisi", label: "Anti-Huru Hara", icon: ShieldAlert, desc: "Ketertiban", cost: 4, buildTime: 20, maintenanceCost: 2, count: (currentData.armada_kepolisian.armada_polisi.taktis_khusus.anti_huru_hara || 0), consumption: 0.2 },
        { key: "cctv_network", groupId: "polisi", label: "Network CCTV", icon: Cctv, desc: "Surveillance", cost: 10, buildTime: 30, maintenanceCost: 8, count: (currentData.armada_kepolisian.armada_polisi.pusat_komando.kamera_pengawas || 0), consumption: 10 },
        { key: "forensik", groupId: "polisi", label: "Pusat Forensik", icon: Search, desc: "Identifikasi", cost: 30, buildTime: 90, maintenanceCost: 12, count: (currentData.armada_kepolisian.armada_polisi.pusat_komando.pusat_forensik || 0), consumption: 5 }
      ]
    }
  ];

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
              <h2 className="text-2xl font-bold text-white tracking-tight">Militer Hub</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Defense & Strategic Hub</p>
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
            {militaryGroups.map((group) => (
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
                          darat: "Armada Darat Nasional",
                          laut: "Armada Maritim & Laut",
                          udara: "Keunggulan Udara",
                          intel: "Intelijen & Perang Informasi",
                          polisi: "Keamanan Nasional & Polisi"
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
                              onBuild={handles.handleBuildRequest}
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

        {/* Confirmation Modal */}
        {confirmBuild && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-md p-8 shadow-2xl scale-in-center animate-in zoom-in duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20"><confirmBuild.icon className="h-8 w-8 text-cyan-500" /></div>
                <div>
                  <h3 className="text-xl font-black text-white">{confirmBuild.label}</h3>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{confirmBuild.desc}</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50 space-y-3">
                  <div className="flex items-center justify-between"><span className="text-xs text-zinc-500 font-bold">Biaya Pembangunan</span><span className="text-sm font-black text-white">{confirmBuild.cost}</span></div>
                  <div className="flex items-center justify-between"><span className="text-xs text-zinc-500 font-bold">Waktu Pengerjaan</span><span className="text-sm font-black text-cyan-400">{confirmBuild.buildTime} Hari</span></div>
                  <div className="flex items-center justify-between"><span className="text-xs text-zinc-500 font-bold">Beban Listrik</span><span className="text-sm font-black text-rose-500">{confirmBuild.consumption} MW / unit</span></div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-zinc-500 font-bold uppercase">Jumlah Unit</span>
                  <div className="flex items-center bg-zinc-950 rounded-xl border border-zinc-800 p-1">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-zinc-400 hover:text-white">-</button>
                    <input type="number" value={quantity} onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-12 text-center bg-transparent text-white font-black text-sm outline-none" />
                    <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-zinc-400 hover:text-white">+</button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setConfirmBuild(null)} className="py-3 rounded-xl border border-zinc-800 text-zinc-400 font-black uppercase text-xs hover:bg-zinc-800 transition-all">Batal</button>
                <button onClick={handles.handleConfirmBuild} className="py-3 rounded-xl bg-cyan-600 text-white font-black uppercase text-xs shadow-lg shadow-cyan-900/40 hover:bg-cyan-500 transition-all">Konfirmasi</button>
              </div>
            </div>
          </div>
        )}

        {/* Queue Drawer */}
        <div className={`absolute top-0 right-0 bottom-0 w-80 bg-zinc-950 border-l border-zinc-800 z-[110] transform transition-transform duration-500 ease-in-out shadow-2xl ${showQueue ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2"><Clock size={16} className="text-cyan-500" /><h3 className="text-sm font-black text-white uppercase tracking-widest">Antrean Pembangunan</h3></div>
              <button onClick={() => setShowQueue(false)} className="p-2 hover:bg-zinc-900 rounded-lg text-zinc-500"><X size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
              {activeConstructions.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 opacity-20 text-center"><Building size={40} className="mb-4" /><p className="text-[10px] font-black uppercase tracking-widest">Tidak ada antrean</p></div>
              ) : (
                activeConstructions.map((item, idx) => {
                  const progress = calculateConstructionProgress(item.startDate, item.endDate, getStoredGameDate().getTime());
                  return (
                    <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 space-y-3">
                      <div className="flex justify-between items-center relative z-10"><h4 className="text-xs font-black text-white">{item.label}</h4><span className="text-[10px] font-bold text-cyan-400">{progress.percentage}%</span></div>
                      <div className="h-1.5 w-full bg-zinc-950 rounded-full mt-2 overflow-hidden border border-zinc-800/50"><div className={`h-full ${progress.colorClass}`} style={{ width: `${progress.percentage}%` }} /></div>
                    </div>
                  );
                })
              )}
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
            className={`p-2 rounded-xl border transition-all cursor-pointer ${showDetail ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30'}`}
          >
            <Info size={16} />
          </button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{item.desc}</div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter">Aktif: {item.count} Unit</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1 relative z-10 mt-1">
        <h4 className="text-[14px] font-black text-zinc-100 tracking-tight group-hover:text-white transition-colors leading-tight line-clamp-1">{item.label}</h4>
        <div className="flex flex-col gap-1 mt-1">
          {showDetail ? (
            <div className="mt-2 space-y-2 animate-in fade-in slide-in-from-top-1 duration-300">
               <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                  <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Biaya Pemeliharaan</span>
                  <span className="text-[15px] font-black text-rose-400">-{item.maintenanceCost || 20} / hari</span>
               </div>
               <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                  <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Beban Listrik</span>
                  <span className="text-[15px] font-black text-amber-500">{item.consumption} MW</span>
               </div>
               <p className="text-[12px] text-zinc-400 italic mt-2 px-1 leading-relaxed">Alutsista dan fasilitas militer membutuhkan perawatan intensif untuk kesiapan tempur.</p>
               
               {item.key === "barak" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                       <div className="flex items-center gap-2">
                          <UserCheck size={14} className="text-cyan-400" />
                          <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Infanteri</span>
                       </div>
                       <span className="text-[15px] font-black text-cyan-400">{calculateTotalInfantry(item.count).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Jiwa</span></span>
                    </div>
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-700/5 border border-cyan-700/20">
                        <div className="flex items-center gap-2">
                           <MilitaryIcon size={14} className="text-zinc-500" />
                           <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Kekuatan Satuan</span>
                        </div>
                        <span className="text-[15px] font-black text-zinc-400">+{INFANTRY_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                     </div>
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                        <div className="flex items-center gap-2">
                           <Shield size={14} className="text-amber-400" />
                           <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                        </div>
                        <span className="text-[15px] font-black text-amber-400">+{calculateInfantryPower(item.count).toLocaleString('id-ID')}</span>
                     </div>
                 </div>
               )}

               {item.key === "penjara" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-500/5 border border-orange-500/20">
                       <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kapasitas Tahanan</span>
                       <span className="text-[15px] font-black text-orange-400">{calculatePrisonCapacity(item.count).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Jiwa</span></span>
                    </div>
                 </div>
               )}

               {item.key === "gudang_senjata" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                       <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kapasitas Amunisi</span>
                       <span className="text-[15px] font-black text-amber-400">{calculateArmoryCapacity(item.count).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                    </div>
                 </div>
               )}

               {item.key === "hangar_tank" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                       <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kapasitas Unit</span>
                       <span className="text-[15px] font-black text-emerald-400">{calculateTankHangarCapacity(item.count).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Pilar</span></span>
                    </div>
                 </div>
               )}

               {item.key === "akademi_militer" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-500/5 border border-blue-500/20">
                       <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kapasitas Siswa</span>
                       <span className="text-[15px] font-black text-blue-400">{calculateAcademyCapacity(item.count).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Kadet</span></span>
                    </div>
                 </div>
               )}

               {item.key === "pangkalan_udara" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-sky-500/5 border border-sky-500/20">
                       <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kapasitas Pesawat</span>
                       <span className="text-[15px] font-black text-sky-400">{calculateAirBaseCapacity(item.count).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                    </div>
                 </div>
               )}

               {item.key === "pangkalan_laut" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                       <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kapasitas Kapal</span>
                       <span className="text-[15px] font-black text-indigo-400">{calculateNavalBaseCapacity(item.count).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                    </div>
                 </div>
               )}

               {item.key === "tank" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-500/5 border border-orange-500/20">
                        <div className="flex items-center gap-2">
                           <Truck size={14} className="text-orange-400" />
                           <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Tank</span>
                        </div>
                        <span className="text-[15px] font-black text-orange-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                     </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-700/5 border border-orange-700/20">
                        <div className="flex items-center gap-2">
                           <MilitaryIcon size={14} className="text-zinc-500" />
                           <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Kekuatan Satuan</span>
                        </div>
                        <span className="text-[15px] font-black text-zinc-400">+{TANK_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                     </div>
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-500/5 border border-orange-500/20">
                        <div className="flex items-center gap-2">
                           <Shield size={14} className="text-orange-400" />
                           <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                        </div>
                        <span className="text-[15px] font-black text-orange-400">+{calculateTankPower(item.count).toLocaleString('id-ID')}</span>
                     </div>
                 </div>
               )}

               {item.key === "apc" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                        <div className="flex items-center gap-2">
                           <Truck size={14} className="text-cyan-400" />
                           <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit APC</span>
                        </div>
                        <span className="text-[15px] font-black text-cyan-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                     </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-700/5 border border-cyan-700/20">
                        <div className="flex items-center gap-2">
                           <MilitaryIcon size={14} className="text-zinc-500" />
                           <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Kekuatan Satuan</span>
                        </div>
                        <span className="text-[15px] font-black text-zinc-400">+{APC_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                     </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                       <div className="flex items-center gap-2">
                          <Shield size={14} className="text-cyan-400" />
                          <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                       </div>
                       <span className="text-[15px] font-black text-cyan-400">+{calculateApcPower(item.count).toLocaleString('id-ID')}</span>
                    </div>
                 </div>
               )}

               {item.key === "artileri" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                        <div className="flex items-center gap-2">
                           <Target size={14} className="text-amber-400" />
                           <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Artileri</span>
                        </div>
                        <span className="text-[15px] font-black text-amber-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                     </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-700/5 border border-amber-700/20">
                        <div className="flex items-center gap-2">
                           <MilitaryIcon size={14} className="text-zinc-500" />
                           <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Kekuatan Satuan</span>
                        </div>
                        <span className="text-[15px] font-black text-zinc-400">+{ARTILLERY_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                     </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                       <div className="flex items-center gap-2">
                          <Shield size={14} className="text-amber-400" />
                          <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                       </div>
                       <span className="text-[15px] font-black text-amber-400">+{calculateArtilleryPower(item.count).toLocaleString('id-ID')}</span>
                    </div>
                 </div>
               )}

               {item.key === "carrier" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-600/5 border border-blue-600/20">
                        <div className="flex items-center gap-2">
                           <Ship size={14} className="text-blue-400" />
                           <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Carrier</span>
                        </div>
                        <span className="text-[15px] font-black text-blue-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                     </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-700/5 border border-blue-700/20">
                        <div className="flex items-center gap-2">
                           <MilitaryIcon size={14} className="text-zinc-500" />
                           <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Kekuatan Satuan</span>
                        </div>
                        <span className="text-[15px] font-black text-zinc-400">+{CARRIER_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                     </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-600/5 border border-blue-600/20">
                       <div className="flex items-center gap-2">
                          <Shield size={14} className="text-blue-400" />
                          <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                       </div>
                       <span className="text-[15px] font-black text-blue-400">+{calculateCarrierPower(item.count).toLocaleString('id-ID')}</span>
                    </div>
                 </div>
               )}

               {item.key === "destroyer" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-sky-600/5 border border-sky-600/20">
                        <div className="flex items-center gap-2">
                           <Waves size={14} className="text-sky-400" />
                           <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Destroyer</span>
                        </div>
                        <span className="text-[15px] font-black text-sky-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                     </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-sky-700/5 border border-sky-700/20">
                        <div className="flex items-center gap-2">
                           <MilitaryIcon size={14} className="text-zinc-500" />
                           <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Kekuatan Satuan</span>
                        </div>
                        <span className="text-[15px] font-black text-zinc-400">+{DESTROYER_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                     </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-sky-600/5 border border-sky-600/20">
                       <div className="flex items-center gap-2">
                          <Shield size={14} className="text-sky-400" />
                          <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                       </div>
                       <span className="text-[15px] font-black text-sky-400">+{calculateDestroyerPower(item.count).toLocaleString('id-ID')}</span>
                    </div>
                 </div>
               )}

               {item.key === "submarine" && (
                 <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-indigo-600/5 border border-indigo-600/20">
                        <div className="flex items-center gap-2">
                           <RadioTower size={14} className="text-indigo-400" />
                           <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Submarine</span>
                        </div>
                        <span className="text-[15px] font-black text-indigo-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                     </div>
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-indigo-700/5 border border-indigo-700/20">
                        <div className="flex items-center gap-2">
                           <MilitaryIcon size={14} className="text-zinc-500" />
                           <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Kekuatan Satuan</span>
                        </div>
                        <span className="text-[15px] font-black text-zinc-400">+{SUBMARINE_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                     </div>
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-indigo-600/5 border border-indigo-600/20">
                        <div className="flex items-center gap-2">
                           <Shield size={14} className="text-indigo-400" />
                           <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                        </div>
                        <span className="text-[15px] font-black text-indigo-400">+{calculateSubmarinePower(item.count).toLocaleString('id-ID')}</span>
                     </div>
                 </div>
               )}

               {item.key === "rocket" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-rose-600/5 border border-rose-600/20">
                         <div className="flex items-center gap-2">
                            <Rocket size={14} className="text-rose-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Rocket</span>
                         </div>
                         <span className="text-[15px] font-black text-rose-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-rose-700/5 border border-rose-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{ROCKET_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-rose-600/5 border border-rose-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-rose-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-rose-400">+{calculateRocketPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "sam" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-600/5 border border-orange-600/20">
                         <div className="flex items-center gap-2">
                            <ShieldAlert size={14} className="text-orange-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit SAM</span>
                         </div>
                         <span className="text-[15px] font-black text-orange-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-700/5 border border-orange-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{SAM_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-600/5 border border-orange-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-orange-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-orange-400">+{calculateSamPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "tactical" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-600/5 border border-zinc-600/20">
                         <div className="flex items-center gap-2">
                            <Car size={14} className="text-zinc-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Rantis</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-700/5 border border-zinc-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{TACTICAL_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-600/5 border border-zinc-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-zinc-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{calculateTacticalPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "corvette" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-teal-600/5 border border-teal-600/20">
                         <div className="flex items-center gap-2">
                            <Anchor size={14} className="text-teal-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Korvet</span>
                         </div>
                         <span className="text-[15px] font-black text-teal-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-teal-700/5 border border-teal-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{CORVETTE_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-teal-600/5 border border-teal-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-teal-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-teal-400">+{calculateCorvettePower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "reg_sub" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-600/5 border border-slate-600/20">
                         <div className="flex items-center gap-2">
                            <RadioTower size={14} className="text-slate-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Reg Sub</span>
                         </div>
                         <span className="text-[15px] font-black text-slate-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-700/5 border border-slate-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{REGULAR_SUB_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-600/5 border border-slate-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-slate-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-slate-400">+{calculateRegularSubPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "mine_ship" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-600/5 border border-amber-600/20">
                         <div className="flex items-center gap-2">
                            <Ship size={14} className="text-amber-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Ranjau</span>
                         </div>
                         <span className="text-[15px] font-black text-amber-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-700/5 border border-amber-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{MINE_SHIP_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-600/5 border border-amber-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-amber-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-amber-400">+{calculateMineShipPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "logistics" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-600/5 border border-emerald-600/20">
                         <div className="flex items-center gap-2">
                            <Truck size={14} className="text-emerald-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Logistik</span>
                         </div>
                         <span className="text-[15px] font-black text-emerald-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-700/5 border border-emerald-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{LOGISTICS_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-600/5 border border-emerald-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-emerald-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-emerald-400">+{calculateLogisticsPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "stealth_jet" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-600/5 border border-purple-600/20">
                         <div className="flex items-center gap-2">
                            <Plane size={14} className="text-purple-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Siluman</span>
                         </div>
                         <span className="text-[15px] font-black text-purple-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-700/5 border border-purple-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{STEALTH_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-600/5 border border-purple-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-purple-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-purple-400">+{calculateStealthPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "interceptor" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-600/5 border border-blue-600/20">
                         <div className="flex items-center gap-2">
                            <Plane size={14} className="text-blue-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Interceptor</span>
                         </div>
                         <span className="text-[15px] font-black text-blue-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-700/5 border border-blue-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{INTERCEPTOR_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-600/5 border border-blue-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-blue-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-blue-400">+{calculateInterceptorPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "bomber" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-red-600/5 border border-red-600/20">
                         <div className="flex items-center gap-2">
                            <Radio size={14} className="text-red-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Bomber</span>
                         </div>
                         <span className="text-[15px] font-black text-red-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-red-700/5 border border-red-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{BOMBER_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-red-600/5 border border-red-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-red-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-red-400">+{calculateBomberPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "uav" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-600/5 border border-cyan-600/20">
                         <div className="flex items-center gap-2">
                            <Satellite size={14} className="text-cyan-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit UAV</span>
                         </div>
                         <span className="text-[15px] font-black text-cyan-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-700/5 border border-cyan-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{UAV_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-600/5 border border-cyan-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-cyan-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-cyan-400">+{calculateUavPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "kamikaze" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-600/5 border border-orange-600/20">
                         <div className="flex items-center gap-2">
                            <Target size={14} className="text-orange-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Kamikaze</span>
                         </div>
                         <span className="text-[15px] font-black text-orange-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-700/5 border border-orange-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{KAMIKAZE_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-600/5 border border-orange-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-orange-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-orange-400">+{calculateKamikazePower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "transport" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-600/5 border border-zinc-600/20">
                         <div className="flex items-center gap-2">
                            <Truck size={14} className="text-zinc-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Angkut</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-700/5 border border-zinc-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{TRANSPORT_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-600/5 border border-zinc-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-zinc-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{calculateTransportPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "heli_attack" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-600/5 border border-orange-600/20">
                         <div className="flex items-center gap-2">
                            <Radio size={14} className="text-orange-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Heli</span>
                         </div>
                         <span className="text-[15px] font-black text-orange-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-700/5 border border-orange-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{ATTACK_HELI_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-600/5 border border-orange-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-orange-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-orange-400">+{calculateAttackHeliPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}

               {item.key === "recon_plane" && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-600/5 border border-zinc-600/20">
                         <div className="flex items-center gap-2">
                            <Search size={14} className="text-zinc-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Total Unit Intai</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">{item.count.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal">Unit</span></span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-700/5 border border-zinc-700/20">
                         <div className="flex items-center gap-2">
                            <MilitaryIcon size={14} className="text-zinc-500" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Satuan</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{RECON_POWER_PER_UNIT.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-600/5 border border-zinc-600/20">
                         <div className="flex items-center gap-2">
                            <Shield size={14} className="text-zinc-400" />
                            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest">Kekuatan Tempur</span>
                         </div>
                         <span className="text-[15px] font-black text-zinc-400">+{calculateReconPower(item.count).toLocaleString('id-ID')}</span>
                      </div>
                  </div>
               )}
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 border-t border-zinc-800/10 pt-2 mt-1">
                <Zap size={12} className="text-rose-500/90" />
                <span className="text-[11px] font-bold text-rose-500/80">Konsumsi: {item.consumption} MW/unit</span>
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


