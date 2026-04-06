"use client"

import { useState, useEffect, Fragment, useMemo } from "react";
import { X, Wrench, Zap, Shield, Truck, MapPin, Radiation, Eye, Gavel, UserCheck, Landmark, Swords as MilitaryIcon, HardHat, Building2, TowerControl, Ship, Plane, Rocket, Crosshair, Activity, Wifi, Radio, Cctv, Search, Siren, Car, Bike, Dog, ShieldAlert, Anchor, Waves, Waypoints, Satellite, RadioTower, Cpu, Target, Radar, TrendingUp, TrendingDown, Clock, Loader2, RefreshCw, EyeOff, Building, Archive, Info, Briefcase, Users, Flame, Coins, MessageSquare, Handshake, ThumbsUp, BookOpen, Scale } from "lucide-react"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, DASHBOARD_LABELS, KAPASITAS_LISTRIK_METADATA, KONSUMSI_PERTAHANAN, KONSUMSI_STRATEGIC, KONSUMSI_SOSIAL } from "@/app/database/data/semua_fitur_negara";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/negara/benua/index";
import Perbandingan from "./1_menu_modal/1_umumkan_perang/perbandingan";
import MaterialRequirement from "../../3_pembangunan/1-produksi/MaterialRequirement";
import NavigasiWaktu from "../../2_ekonomi/1-perdagangan/NavigasiWaktu";
import { 
  armadaPolisiRate, 
  armadaMiliterRate, 
  intelijenRate, 
  pertahananRate, 
  pabrikMiliterRate,
  mineralKritisRate,
  manufakturRate,
  peternakanRate,
  agrikulturRate,
  perikananRate,
  olahanPanganRate,
  farmasiRate,
  infrastrukturRate,
  sosialRate,
  hunianRate
} from "@/app/database/data/semua_fitur_negara";
import { 
  TANK_POWER_PER_UNIT, APC_POWER_PER_UNIT, ARTILLERY_POWER_PER_UNIT, ROCKET_POWER_PER_UNIT, SAM_POWER_PER_UNIT, TACTICAL_POWER_PER_UNIT,
  CARRIER_POWER_PER_UNIT, NUCLEAR_CARRIER_POWER_PER_UNIT, DESTROYER_POWER_PER_UNIT, CORVETTE_POWER_PER_UNIT, SUBMARINE_POWER_PER_UNIT, REGULAR_SUB_POWER_PER_UNIT, MINE_SHIP_POWER_PER_UNIT, LOGISTICS_POWER_PER_UNIT,
  STEALTH_POWER_PER_UNIT, INTERCEPTOR_POWER_PER_UNIT, BOMBER_POWER_PER_UNIT, ATTACK_HELI_POWER_PER_UNIT, RECON_POWER_PER_UNIT, UAV_POWER_PER_UNIT, KAMIKAZE_POWER_PER_UNIT, TRANSPORT_POWER_PER_UNIT,
  INFANTRY_POWER_PER_UNIT, calculateTotalMilitaryPower 
} from "./kekuatanmiliter";
import { militaryAidStorage, MILITARY_KEY_MAP } from "../../../../map-system/modals_detail_negara/4_bantuan_dan_kerjasama/1_beri_tentara/logic/militaryAidStorage";
import { playerMilitaryStorage } from "../../../../map-system/modals_detail_negara/4_bantuan_dan_kerjasama/1_beri_tentara/logic/playerMilitaryStorage";

export default function ArmadaMiliterModal({ isOpen, onClose, data, activeMenu, setActiveMenu }: { isOpen: boolean; onClose: () => void; data: any; activeMenu?: string; setActiveMenu?: (menu: string) => void }) {
  const [activeConstructions, setActiveConstructions] = useState<any[]>([]);
  const [showQueue, setShowQueue] = useState(false);
  const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());
  const [confirmBuild, setConfirmBuild] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [tick, setTick] = useState(0);
  const [activeTab, setActiveTab] = useState<"nasional" | "global">("nasional");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedActionCountry, setSelectedActionCountry] = useState<any | null>(null);
  const [showWarComparison, setShowWarComparison] = useState(false);
  const currentData = data;

  useEffect(() => {
    if (activeMenu === "Menu:ArmadaMiliter:AnalisisKekuatan") {
      setShowWarComparison(true);
    } else {
      setShowWarComparison(false);
    }
  }, [activeMenu]);


  const globalRankings = useMemo(() => {
    const aidData = militaryAidStorage.getAid();
    const playerDeductions = playerMilitaryStorage.getDeductions();

    return countries
      .map(c => {
        // Untuk negara user, kita gunakan buildingDeltas juga agar real-time saat dipesan
        const isUserCountry = c.name_id === currentData?.name_id || c.name_en === currentData?.name_en;
        
        // Gabungkan armada statis dengan bantuan (aid deltas) dan building deltas (hanya untuk user)
        const countryAid = aidData[c.name_en.toLowerCase()] || aidData[c.name_id.toLowerCase()] || {};
        const playerDeltas = isUserCountry ? buildingStorage.getData().buildingDeltas : {};
        
        // Convert countryAid keys to database paths if needed?
        // calculateTotalMilitaryPower handles deltas as a record of unitKey -> count
        // buildingStorage uses short keys (tank), but militaryAidStorage uses base unit names (tank_tempur_utama)
        // Let's create a combined delta object
        const finalDeltas: Record<string, number> = { ...playerDeltas };
        
        // Apply received aid
        Object.entries(countryAid).forEach(([unit, count]) => {
           finalDeltas[unit] = (finalDeltas[unit] || 0) + count;
        });

        // Apply sent aid deductions (only for player)
        if (isUserCountry) {
          Object.entries(playerDeductions).forEach(([unitKey, count]) => {
            const shortKey = MILITARY_KEY_MAP[unitKey];
            if (shortKey) {
              finalDeltas[shortKey] = (finalDeltas[shortKey] || 0) - count;
            }
          });
        }

        const power = calculateTotalMilitaryPower(c.armada_militer, finalDeltas);
        return {
          id: c.name_id || c.name_en,
          name: c.name_id || c.name_en,
          flag: c.flag,
          power: power.total,
          darat: power.darat,
          laut: power.laut,
          udara: power.udara,
          religion: c.religion,
          ideology: c.ideology,
          un_vote: c.geopolitik?.un_vote || 0,
          isUser: isUserCountry,
          armada_militer: c.armada_militer
        };
      })
      .sort((a, b) => b.power - a.power);
  }, [currentData, tick]);

  const filteredRankings = useMemo(() => {
    if (!searchTerm) return globalRankings;
    const s = searchTerm.toLowerCase();
    return globalRankings.filter(r => r.name.toLowerCase().includes(s));
  }, [globalRankings, searchTerm]);

  useEffect(() => {
    if (!isOpen) return;
    const queue = buildingStorage.getQueue();
    setActiveConstructions(queue);
  }, [tick, isOpen]);

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
          window.dispatchEvent(new Event('building_storage_updated'));
        }
        setTick(t => t + 1);
      } catch (err) {
        console.error("DEBUG: Armada Hub poll error", err);
      }
    }, 1000);

    const handleUpdate = () => setTick(t => t + 1);
    window.addEventListener('player_military_updated', handleUpdate);
    window.addEventListener('building_storage_updated', handleUpdate);

    return () => {
      clearInterval(interval);
      window.removeEventListener('player_military_updated', handleUpdate);
      window.removeEventListener('building_storage_updated', handleUpdate);
    };
  }, [isOpen]);

  const buildingData = buildingStorage.getData();
  // LOGIKA STORAGE CONFIG
  const STORAGE_CONFIG: Record<string, { storageKey: string, ratio: number, label: string, icon: any, isCumulative?: boolean }> = {
    tank: { storageKey: "hangar_tank", ratio: 50, label: "Hangar Tank", icon: Truck },
    apc: { storageKey: "hangar_tank", ratio: 100, label: "Hangar Tank", icon: Truck },
    tactical: { storageKey: "hangar_tank", ratio: 200, label: "Hangar Tank", icon: Truck },
    artileri: { storageKey: "gudang_senjata", ratio: 50, label: "Gudang Senjata", icon: Archive },
    rocket: { storageKey: "gudang_senjata", ratio: 30, label: "Gudang Senjata", icon: Archive },
    sam: { storageKey: "gudang_senjata", ratio: 20, label: "Gudang Senjata", icon: Archive },
    hangar_tank: { storageKey: "hangar_tank", ratio: 1, label: "Kapasitas Hangar", icon: Archive, isCumulative: true },
    gudang_senjata: { storageKey: "gudang_senjata", ratio: 1, label: "Kapasitas Gudang Senjata", icon: Archive, isCumulative: true },
    pangkalan_udara: { storageKey: "pangkalan_udara", ratio: 1, label: "Kapasitas Pangkalan Udara", icon: Archive, isCumulative: true },
    pangkalan_laut: { storageKey: "pangkalan_laut", ratio: 1, label: "Kapasitas Pangkalan Laut", icon: Archive, isCumulative: true },
    
    // AIR STORAGE (Cumulative)
    stealth_jet: { storageKey: "pangkalan_udara", ratio: 50, label: "Pangkalan Udara", icon: Plane, isCumulative: true },
    interceptor: { storageKey: "pangkalan_udara", ratio: 50, label: "Pangkalan Udara", icon: Plane, isCumulative: true },
    bomber: { storageKey: "pangkalan_udara", ratio: 50, label: "Pangkalan Udara", icon: Plane, isCumulative: true },
    heli_attack: { storageKey: "pangkalan_udara", ratio: 50, label: "Pangkalan Udara", icon: Plane, isCumulative: true },
    recon_plane: { storageKey: "pangkalan_udara", ratio: 50, label: "Pangkalan Udara", icon: Plane, isCumulative: true },
    uav: { storageKey: "pangkalan_udara", ratio: 50, label: "Pangkalan Udara", icon: Plane, isCumulative: true },
    kamikaze: { storageKey: "pangkalan_udara", ratio: 50, label: "Pangkalan Udara", icon: Plane, isCumulative: true },
    transport: { storageKey: "pangkalan_udara", ratio: 50, label: "Pangkalan Udara", icon: Plane, isCumulative: true },

    // SEA STORAGE (Cumulative)
    carrier: { storageKey: "pangkalan_laut", ratio: 20, label: "Pangkalan Laut", icon: Ship, isCumulative: true },
    destroyer: { storageKey: "pangkalan_laut", ratio: 20, label: "Pangkalan Laut", icon: Ship, isCumulative: true },
    corvette: { storageKey: "pangkalan_laut", ratio: 20, label: "Pangkalan Laut", icon: Ship, isCumulative: true },
    submarine: { storageKey: "pangkalan_laut", ratio: 20, label: "Pangkalan Laut", icon: Ship, isCumulative: true },
    reg_sub: { storageKey: "pangkalan_laut", ratio: 20, label: "Pangkalan Laut", icon: Ship, isCumulative: true },
    mine_ship: { storageKey: "pangkalan_laut", ratio: 20, label: "Pangkalan Laut", icon: Ship, isCumulative: true },
    logistics: { storageKey: "pangkalan_laut", ratio: 20, label: "Pangkalan Laut", icon: Ship, isCumulative: true },
  };

  const buildingDeltas = buildingStorage.getData()?.buildingDeltas || {};
  const playerDeductions = playerMilitaryStorage.getDeductions();
  
  // LOGIKA SINKRONISASI HANGAR TANK
  const TANKS_PER_HANGAR = 50;
  const baseHangars = currentData.sektor_pertahanan?.hangar_tank || 0;
  const deltaHangars = (buildingDeltas["hangar_tank"] as number) || 0;
  const totalHangars = baseHangars + deltaHangars;
  const tankCapacity = totalHangars * TANKS_PER_HANGAR;

  // Create effective deltas for national badges/view
  const effectiveDeltas = useMemo(() => {
    const deltas = { ...buildingDeltas };
    Object.entries(playerDeductions).forEach(([unitKey, count]) => {
      const shortKey = MILITARY_KEY_MAP[unitKey];
      if (shortKey) deltas[shortKey] = (deltas[shortKey] || 0) - count;
    });
    return deltas;
  }, [buildingDeltas, playerDeductions]);

  const militaryGroups = useMemo(() => {
    if (!currentData) return [];
    return [
      {
        id: "armada_tempur",
        title: "Sektor Armada Tempur Nasional",
        icon: MilitaryIcon,
        color: "text-orange-500",
        items: [
          // ARMADA DARAT
          { ...armadaMiliterRate["1_barak"], groupId: "darat", icon: MilitaryIcon, count: ((currentData.armada_militer.barak || 0) + ((effectiveDeltas["barak"] as number) || 0)) * 10000, unitCount: ((currentData.armada_militer.barak || 0) + ((effectiveDeltas["barak"] as number) || 0)), power: 1 },
          { ...armadaMiliterRate["2_tank"], groupId: "darat", icon: Truck, count: (currentData.armada_militer.darat.tank_tempur_utama || 0) + ((effectiveDeltas["tank"] as number) || 0), power: TANK_POWER_PER_UNIT },
          { ...armadaMiliterRate["3_apc"], groupId: "darat", icon: Truck, count: (currentData.armada_militer.darat.apc_ifv || 0) + ((effectiveDeltas["apc"] as number) || 0), power: APC_POWER_PER_UNIT },
          { ...armadaMiliterRate["4_artileri"], groupId: "darat", icon: Target, count: (currentData.armada_militer.darat.artileri_berat || 0) + ((effectiveDeltas["artileri"] as number) || 0), power: ARTILLERY_POWER_PER_UNIT },
          { ...armadaMiliterRate["5_roket_peluncur"], groupId: "darat", icon: Rocket, count: (currentData.armada_militer.darat.sistem_peluncur_roket || 0) + ((effectiveDeltas["rocket"] as number) || 0), power: ROCKET_POWER_PER_UNIT },
          { ...armadaMiliterRate["6_misil_sam"], groupId: "darat", icon: ShieldAlert, count: (currentData.armada_militer.darat.pertahanan_udara_mobile || 0) + ((effectiveDeltas["sam"] as number) || 0), power: SAM_POWER_PER_UNIT },
          { ...armadaMiliterRate["7_kendaraan_taktis"], groupId: "darat", icon: Car, count: (currentData.armada_militer.darat.kendaraan_taktis || 0) + ((effectiveDeltas["tactical"] as number) || 0), power: TACTICAL_POWER_PER_UNIT },
          
          // ARMADA LAUT
          { ...armadaMiliterRate["8_kapal_induk"], groupId: "laut", icon: Ship, count: (currentData.armada_militer.laut.kapal_induk || 0) + ((effectiveDeltas["carrier"] as number) || 0), power: CARRIER_POWER_PER_UNIT },
          { ...armadaMiliterRate["8b_kapal_induk_nuklir"], groupId: "laut", icon: Waves, count: (currentData.armada_militer.laut.kapal_induk_nuklir || 0) + ((effectiveDeltas["nuclear_carrier"] as number) || 0), power: NUCLEAR_CARRIER_POWER_PER_UNIT },
          { ...armadaMiliterRate["9_kapal_perusak"], groupId: "laut", icon: Waypoints, count: (currentData.armada_militer.laut.kapal_destroyer || 0) + ((effectiveDeltas["destroyer"] as number) || 0), power: DESTROYER_POWER_PER_UNIT },
          { ...armadaMiliterRate["10_kapal_korvet"], groupId: "laut", icon: Anchor, count: (currentData.armada_militer.laut.kapal_korvet || 0) + ((effectiveDeltas["corvette"] as number) || 0), power: CORVETTE_POWER_PER_UNIT },
          { ...armadaMiliterRate["11_kapal_selam_nuklir"], groupId: "laut", icon: RadioTower, count: (currentData.armada_militer.laut.kapal_selam_nuklir || 0) + ((effectiveDeltas["submarine"] as number) || 0), power: SUBMARINE_POWER_PER_UNIT },
          { ...armadaMiliterRate["12_kapal_selam_reguler"], groupId: "laut", icon: RadioTower, count: (currentData.armada_militer.laut.kapal_selam_regular || 0) + ((effectiveDeltas["reg_sub"] as number) || 0), power: REGULAR_SUB_POWER_PER_UNIT },
          { ...armadaMiliterRate["13_penyapu_ranjau"], groupId: "laut", icon: Ship, count: (currentData.armada_militer.laut.kapal_ranjau || 0) + ((effectiveDeltas["mine_ship"] as number) || 0), power: MINE_SHIP_POWER_PER_UNIT },
          { ...armadaMiliterRate["14_kapal_logistik"], groupId: "laut", icon: Truck, count: (currentData.armada_militer.laut.kapal_logistik || 0) + ((effectiveDeltas["logistics"] as number) || 0), power: LOGISTICS_POWER_PER_UNIT },
          
          // ARMADA UDARA
          { ...armadaMiliterRate["15_jet_tempur_siluman"], groupId: "udara", icon: Plane, count: (currentData.armada_militer.udara.jet_tempur_siluman || 0) + ((effectiveDeltas["stealth_jet"] as number) || 0), power: STEALTH_POWER_PER_UNIT },
          { ...armadaMiliterRate["16_jet_pencegat"], groupId: "udara", icon: Plane, count: (currentData.armada_militer.udara.jet_tempur_interceptor || 0) + ((effectiveDeltas["interceptor"] as number) || 0), power: INTERCEPTOR_POWER_PER_UNIT },
          { ...armadaMiliterRate["17_pesawat_pembom"], groupId: "udara", icon: Radio, count: (currentData.armada_militer.udara.pesawat_pengebom || 0) + ((effectiveDeltas["bomber"] as number) || 0), power: BOMBER_POWER_PER_UNIT },
          { ...armadaMiliterRate["18_helikopter_serbu"], groupId: "udara", icon: Radio, count: (currentData.armada_militer.udara.helikopter_serang || 0) + ((effectiveDeltas["heli_attack"] as number) || 0), power: ATTACK_HELI_POWER_PER_UNIT },
          { ...armadaMiliterRate["19_pesawat_intai"], groupId: "udara", icon: Search, count: (currentData.armada_militer.udara.pesawat_pengintai || 0) + ((effectiveDeltas["recon_plane"] as number) || 0), power: RECON_POWER_PER_UNIT },
          { ...armadaMiliterRate["20_drone_intai"], groupId: "udara", icon: Satellite, count: (currentData.armada_militer.udara.drone_intai_uav || 0) + ((effectiveDeltas["uav"] as number) || 0), power: UAV_POWER_PER_UNIT },
          { ...armadaMiliterRate["21_drone_kamikaze"], groupId: "udara", icon: Target, count: (currentData.armada_militer.udara.drone_kamikaze || 0) + ((effectiveDeltas["kamikaze"] as number) || 0), power: KAMIKAZE_POWER_PER_UNIT },
          { ...armadaMiliterRate["22_transport_udara"], groupId: "udara", icon: Truck, count: (currentData.armada_militer.udara.pesawat_angkut || 0) + ((effectiveDeltas["transport"] as number) || 0), power: TRANSPORT_POWER_PER_UNIT }
        ].map(unit => {
          const config = STORAGE_CONFIG[unit.key];
          
          // Map Indonesian to English keys for BuildingCard compatibility
          const translatedUnit = {
            ...unit,
            biaya: (unit as any).biaya_pembangunan,
            maintenanceCost: (unit as any).biaya_pemeliharaan,
            consumption: (unit as any).konsumsi_listrik || 0,
            desc: (unit as any).deskripsi
          };

          if (!config) return translatedUnit;

          const baseStorage = currentData.sektor_pertahanan?.[config.storageKey as keyof typeof currentData.sektor_pertahanan] || 0;
          const deltaStorage = (buildingDeltas[config.storageKey] as number) || 0;
          const totalStorageUnits = baseStorage + deltaStorage;
          const storageMax = totalStorageUnits * config.ratio;

          let storageUsed = unit.count;
          if (config.isCumulative) {
            const dbKey = Object.entries(MILITARY_KEY_MAP).find(([_, short]) => short === unit.key)?.[0] || unit.key;
            const baseCount = (currentData.armada_militer as any)[unit.groupId]?.[dbKey] || 
                             (currentData.armada_militer as any)[dbKey] || 0;
            const deltaCount = (effectiveDeltas[unit.key] as number) || 0;
            storageUsed = (typeof baseCount === 'number' ? baseCount : 0) + (typeof deltaCount === 'number' ? deltaCount : 0);
          }

          return {
            ...translatedUnit,
            storageLabel: config.label,
            storageIcon: config.icon,
            storageUsed,
            storageMax,
            storageFull: storageUsed >= storageMax && storageMax > 0
          };
        })
      }
    ];
  }, [currentData, effectiveDeltas, buildingDeltas]);


   if (!isOpen || !currentData) return null;



  // 2. Logic Sinkronisasi Listrik Nasional (dengan Deltas Kompleks)
  const currentDataWithDeltas = {
    ...currentData,
    sektor_listrik: { ...currentData.sektor_listrik || {} },
    sektor_ekstraksi: { ...currentData.sektor_ekstraksi || {} },
    sektor_manufaktur: { ...currentData.sektor_manufaktur || {} },
    sektor_olahan_pangan: { ...currentData.sektor_olahan_pangan || {} },
    sektor_farmasi: { ...currentData.sektor_farmasi || {} },
    sektor_agrikultur: { ...currentData.sektor_agrikultur || {} },
    sektor_peternakan: { ...currentData.sektor_peternakan || {} },
    sektor_perikanan: { ...currentData.sektor_perikanan || {} },
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
    pabrik_militer: { ...currentData.pabrik_militer || {} },
    infrastruktur: { ...currentData.infrastruktur || {} }
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
      const dataKey = key; 
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
        const currentEnd = addDays(new Date(currentStart), confirmBuild.waktu_pembangunan).getTime();
        const newItem = buildingStorage.addToQueue({
          buildingKey: confirmBuild.key,
          label: confirmBuild.label,
          sector: confirmBuild.groupId,
          startDate: currentStart,
          endDate: currentEnd,
          waktu_pembangunan: confirmBuild.waktu_pembangunan
        });
        if (newItem) itemsToAdd.push(newItem);
        currentStart = currentEnd;
      }
      if (itemsToAdd.length > 0) setActiveConstructions(prev => [...prev, ...itemsToAdd]);
      setConfirmBuild(null);
      setQuantity(1);
    } catch (err) {
      console.error("DEBUG: Armada Hub build error", err);
    }
  };

  const toggleSector = (id: string) => {
    setCollapsedSectors(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-xl">
              <MilitaryIcon className="h-6 w-6 text-cyan-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Komando Armada</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Strike Fleet Command</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Tabs */}
            <div className="bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800 flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setActiveTab("nasional")}
                className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === "nasional"
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-900/40"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                Armada Nasional
              </button>
              <button
                onClick={() => setActiveTab("global")}
                className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === "global"
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-900/40"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                Peringkat Global
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => setShowQueue(true)} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group flex items-center gap-2 relative shadow-[0_0_15px_rgba(8,145,178,0.1)] active:scale-95">
                <Clock className="h-6 w-6 text-cyan-500 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                {activeConstructions.length > 0 && <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-zinc-950 shadow-lg animate-in zoom-in">{activeConstructions.length}</span>}
              </button>
              <NavigasiWaktu />
              <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
                <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Strength Badges Strip */}
        {(() => {
          const power = calculateTotalMilitaryPower(currentData.armada_militer, effectiveDeltas);

          const badges = [
            { label: "Armada Darat", value: power.darat, icon: Truck, accent: "text-amber-400", glow: "shadow-[0_0_18px_rgba(251,191,36,0.15)]", border: "border-amber-500/20", bg: "bg-amber-500/5" },
            { label: "Armada Laut", value: power.laut, icon: Ship, accent: "text-cyan-400", glow: "shadow-[0_0_18px_rgba(6,182,212,0.15)]", border: "border-cyan-500/20", bg: "bg-cyan-500/5" },
            { label: "Armada Udara", value: power.udara, icon: Plane, accent: "text-violet-400", glow: "shadow-[0_0_18px_rgba(167,139,250,0.15)]", border: "border-violet-500/20", bg: "bg-violet-500/5" },
            { label: "Total Kekuatan", value: power.total, icon: MilitaryIcon, accent: "text-rose-400", glow: "shadow-[0_0_22px_rgba(251,113,133,0.2)]", border: "border-rose-500/30", bg: "bg-rose-500/8" },
          ];

          return (
            <div className="px-8 py-4 border-b border-zinc-800/40 bg-zinc-900/20 flex items-stretch gap-3">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className={`flex-1 flex items-center gap-3 px-5 py-3.5 rounded-2xl border ${b.border} ${b.bg} ${b.glow} transition-all duration-300 group`}
                >
                  <div className={`p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/50`}>
                    <b.icon className={`h-4 w-4 ${b.accent}`} />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.25em] leading-none truncate">{b.label}</span>
                    <span className={`text-[18px] font-black ${b.accent} tracking-tight leading-tight`}>
                      {b.value.toLocaleString("id-ID")}
                    </span>
                    <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest leading-none">Daya Tempur</span>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}


        {/* Dashboard Summary Listrik (Nasional) */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 group hover:bg-zinc-900 transition-colors">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Zap className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.supply.title}</p>
                <p className="text-xl font-black text-white leading-tight">{totalPasokan.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 group hover:bg-zinc-900 transition-colors">
              <div className="p-3 bg-rose-500/10 rounded-xl">
                <Activity className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.usage.title}</p>
                <p className="text-xl font-black text-white leading-tight">{totalBeban.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group hover:bg-zinc-900 transition-colors">
              <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>
                {surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-500" />}
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          {activeTab === "nasional" ? (
            <div className="space-y-12">
              {militaryGroups.map((group) => (
                <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="flex items-center gap-3 mb-5 px-1">
                    <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}><group.icon className={`h-4 w-4 ${group.color}`} /></div>
                    <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title}</h3>
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
                            udara: "Keunggulan Udara"
                          };

                          const showSubHeader = item.groupId && item.groupId !== prevGroupId;

                          const power = calculateTotalMilitaryPower(currentData.armada_militer, effectiveDeltas);
                          const subGroupPower: Record<string, number> = {
                            darat: power.darat,
                            laut: power.laut,
                            udara: power.udara,
                          };

                          const subGroupStrength = {
                            darat: { accent: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/5", icon: Truck },
                            laut: { accent: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/5", icon: Ship },
                            udara: { accent: "text-violet-400", border: "border-violet-500/30", bg: "bg-violet-500/5", icon: Plane },
                          };

                          return (
                            <Fragment key={item.key || idx}>
                              {showSubHeader && subGroupLabels[item.groupId] && (() => {
                                const sg = (subGroupStrength as any)[item.groupId];
                                return (
                                  <div className="col-span-full mt-6 mb-2 flex flex-col gap-2">
                                    {/* Label separator */}
                                    <div className="flex items-center gap-4">
                                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800"></div>
                                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] whitespace-nowrap bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full shadow-xl">
                                        {subGroupLabels[item.groupId]}
                                      </span>
                                      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800"></div>
                                    </div>
                                    {/* Total strength badge */}
                                    <div className="flex justify-center">
                                      <div className={`flex items-center gap-2.5 px-5 py-2 rounded-2xl border ${sg.border} ${sg.bg} shadow-lg`}>
                                        <sg.icon className={`h-3.5 w-3.5 ${sg.accent}`} />
                                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">Total Kekuatan</span>
                                        <span className={`text-[15px] font-black ${sg.accent} tracking-tight leading-none`}>
                                          {(subGroupPower[item.groupId] || 0).toLocaleString("id-ID")}
                                        </span>
                                        <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Daya Tempur</span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })()}
                              <BuildingCard
                                item={item}
                                onBuild={handleBuildRequest}
                                construction={currentConstruction}
                                tankCapacity={item.key === "tank" ? tankCapacity : undefined}
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
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Ranking Header & Search */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 bg-zinc-900/40 p-6 rounded-[32px] border border-zinc-800/50">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20 text-rose-500">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">Indeks Kekuatan Global</h3>
                    <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">Global Military Strength Index (207 Nations)</p>
                  </div>
                </div>

                <div className="relative w-full md:w-96 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-rose-500 transition-colors" size={18} />
                  <input
                    type="text"
                    placeholder="CARI NEGARA..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-4 pl-12 pr-6 text-sm font-bold text-white placeholder:text-zinc-600 outline-none focus:border-rose-500/50 focus:ring-4 focus:ring-rose-500/5 transition-all uppercase tracking-widest"
                  />
                </div>
              </div>

              {/* Ranking List */}
              <div className="grid gap-3">
                {filteredRankings.map((country) => {
                  const rank = globalRankings.findIndex(r => r.id === country.id) + 1;
                  return (
                    <div
                      key={country.id}
                      className={`flex items-center justify-between p-5 rounded-[24px] border transition-all hover:bg-zinc-900/80 group ${
                        country.isUser 
                          ? "bg-cyan-500/10 border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/20" 
                          : "bg-zinc-900/40 border-zinc-800/50 hover:border-zinc-700/50"
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        {/* Rank Circle */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg shadow-inner border ${
                          country.isUser ? "bg-cyan-950 text-cyan-400 border-cyan-800" : "bg-zinc-950 text-zinc-400 border-zinc-800"
                        }`}>
                          {rank}
                        </div>

                        {/* Country Info */}
                        <div className="flex items-center gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className={`text-lg font-black uppercase italic tracking-tight ${country.isUser ? "text-cyan-400" : "text-white group-hover:text-rose-400"} transition-colors`}>
                                {country.name}
                              </h4>
                              {country.isUser && (
                                <span className="px-2 py-0.5 rounded-full bg-cyan-500 text-[9px] font-black text-black uppercase tracking-tighter animate-pulse">NASIONAL</span>
                              )}
                            </div>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-[10px] font-bold text-amber-500/60 uppercase">Darat: {country.darat.toLocaleString('id-ID')}</span>
                              <span className="text-[10px] font-bold text-cyan-500/60 uppercase">Laut: {country.laut.toLocaleString('id-ID')}</span>
                              <span className="text-[10px] font-bold text-violet-500/60 uppercase">Udara: {country.udara.toLocaleString('id-ID')}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Power Score & Combat Button */}
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-baseline gap-2">
                            <span className={`text-2xl font-black italic tracking-tighter ${country.isUser ? "text-cyan-400" : "text-white group-hover:text-rose-400"} transition-colors`}>
                              {country.power.toLocaleString('id-ID')}
                            </span>
                          </div>
                        </div>

                        {!country.isUser && (
                          <button 
                            onClick={() => setSelectedActionCountry(country)}
                            className="p-3 rounded-xl bg-rose-600/10 border border-rose-500/30 text-rose-500 hover:bg-rose-600 hover:text-white transition-all cursor-pointer shadow-lg active:scale-90 group"
                            title="UMUMKAN PERANG"
                          >
                            <MilitaryIcon className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}

                {filteredRankings.length === 0 && (
                  <div className="py-20 flex flex-col items-center justify-center text-zinc-700 opacity-30 italic">
                    <Search size={64} className="mb-4" />
                    <p className="text-xl font-black uppercase tracking-widest">Negara Tidak Ditemukan</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>


        {/* Confirmation Modal */}
        {confirmBuild && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] w-full max-w-lg p-8 shadow-2xl scale-in-center animate-in zoom-in duration-300 flex flex-col relative overflow-hidden">
              
              {/* Decorative Header Icon */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
              
              <div className="flex flex-col items-center text-center mb-8 relative z-10">
                <div className="p-5 bg-cyan-500/10 rounded-[32px] border border-cyan-500/20 mb-4 shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:scale-110 transition-transform">
                  <confirmBuild.icon className="h-10 w-10 text-cyan-500" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">Konfirmasi Bangun?</h3>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1 italic">
                  Anda akan membangun <span className="text-cyan-400">{confirmBuild.label}</span> untuk armada militer.
                </p>
              </div>

              <div className="space-y-6 relative z-10 flex-1 overflow-y-auto no-scrollbar pr-1">
                {/* Stats Grid */}
                <div className={`grid grid-cols-2 gap-3`}>
                    <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-3xl p-5 flex flex-col items-center gap-1.5 group hover:bg-zinc-900/50 transition-colors">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Biaya Total</span>
                    <span className="text-2xl font-black text-amber-500 tracking-tight leading-none overflow-hidden text-ellipsis w-full text-center">
                      {(confirmBuild.biaya * quantity).toLocaleString('id-ID')}
                    </span>
                  </div>
                  
                  <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-3xl p-5 flex flex-col items-center gap-1.5 group hover:bg-zinc-900/50 transition-colors">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Waktu Total</span>
                    <div className="flex items-center gap-2">
                       <Clock size={16} className="text-cyan-500" />
                       <span className="text-2xl font-black text-white tracking-tight leading-none">
                        {confirmBuild.waktu_pembangunan * quantity}<span className="text-xs text-zinc-500 font-bold uppercase ml-1">Hari</span>
                       </span>
                    </div>
                  </div>

                  {confirmBuild.consumption > 0 && confirmBuild.dataKey === 'barak' && (
                    <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-3xl p-5 flex flex-col items-center gap-1.5 group hover:bg-zinc-900/50 transition-colors">
                      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Energi</span>
                      <div className="flex items-center gap-2">
                        <Zap size={14} className="text-rose-500 fill-rose-500/20" />
                        <span className="text-2xl font-black text-rose-500 tracking-tight leading-none overflow-hidden text-ellipsis w-full text-center">
                          {(confirmBuild.consumption * quantity).toLocaleString('id-ID')} <span className="text-[10px] font-bold">MW</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {confirmBuild.konsumsi_bahan_bakar > 0 && (
                    <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-3xl p-5 flex flex-col items-center gap-1.5 group hover:bg-zinc-900/50 transition-colors">
                      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Bahan Bakar</span>
                      <div className="flex items-center gap-2">
                        <Flame size={14} className="text-amber-500 fill-amber-500/20" />
                        <span className="text-2xl font-black text-amber-500 tracking-tight leading-none overflow-hidden text-ellipsis w-full text-center">
                          {(confirmBuild.konsumsi_bahan_bakar * quantity).toLocaleString('id-ID')} <span className="text-[10px] font-bold">L/Hari</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {confirmBuild.konsumsi_uranium > 0 && (
                    <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-3xl p-5 flex flex-col items-center gap-1.5 group hover:bg-zinc-900/50 transition-colors">
                      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Bahan Bakar Nuklir</span>
                      <div className="flex items-center gap-2">
                        <Radiation size={14} className="text-emerald-500 fill-emerald-500/20" />
                        <span className="text-2xl font-black text-emerald-500 tracking-tight leading-none overflow-hidden text-ellipsis w-full text-center">
                          {(confirmBuild.konsumsi_uranium * quantity).toLocaleString('id-ID')} <span className="text-[10px] font-bold">g/Hari</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quantity Input Section */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between px-1">
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic">Jumlah Unit Pembangunan</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-2.5 bg-zinc-950/80 rounded-[28px] border border-zinc-800/80 shadow-inner">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                            className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 active:scale-90 transition-all flex items-center justify-center font-black text-2xl shadow-xl cursor-pointer"
                        >
                            -
                        </button>
                        
                        <div className="flex flex-col items-center">
                            <input 
                                type="number" 
                                value={quantity} 
                                onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
                                className="w-20 text-center bg-transparent text-white font-black text-3xl outline-none tracking-tighter" 
                            />
                            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest -mt-1">Unit</span>
                        </div>

                        <button 
                            onClick={() => setQuantity(quantity + 1)} 
                            className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10 active:scale-90 transition-all flex items-center justify-center font-black text-2xl shadow-xl cursor-pointer"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Material Requirements Grid Component */}
                <MaterialRequirement buildingKey={confirmBuild.key} quantity={quantity} />

                {/* Estimation Date Badge */}
                <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl py-3 px-6 text-center">
                    <p className="text-[11px] font-black text-cyan-500/70 uppercase tracking-[0.2em] italic">
                        Selesai Bertahap S/D: {formatGameDate(addDays(getStoredGameDate(), confirmBuild.waktu_pembangunan * quantity))}
                    </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8 sticky bottom-0 pt-2 bg-zinc-900">
                <button 
                    onClick={() => setConfirmBuild(null)} 
                    className="py-5 rounded-3xl border border-zinc-800 text-zinc-500 font-black uppercase text-xs tracking-[0.2em] hover:bg-zinc-800 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
                >
                    Batal
                </button>
                <button 
                    onClick={handleConfirmBuild} 
                    className="py-5 rounded-3xl bg-cyan-600 text-white font-black uppercase text-xs tracking-[0.2em] shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:bg-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all cursor-pointer active:scale-95 border border-cyan-400/20"
                >
                    Bangun Sekarang
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Queue Drawer */}
        <div className={`absolute top-0 right-0 bottom-0 w-80 bg-zinc-950 border-l border-zinc-800 z-[110] transform transition-transform duration-500 ease-in-out shadow-2xl ${showQueue ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2"><Clock size={16} className="text-cyan-500" /><h3 className="text-sm font-black text-white uppercase tracking-widest">Antrean Armada</h3></div>
              <button onClick={() => setShowQueue(false)} className="p-2 hover:bg-zinc-900 rounded-lg text-zinc-500"><X size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
              {activeConstructions.filter(c => ["darat", "laut", "udara"].includes(c.sector)).length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 opacity-20 text-center"><MilitaryIcon size={40} className="mb-4" /><p className="text-[10px] font-black uppercase tracking-widest">Tidak ada antrean</p></div>
              ) : (
                activeConstructions.filter(c => ["darat", "laut", "udara"].includes(c.sector)).map((item, idx) => {
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

      {/* Action Menu Modal (GLOBAL) */}
      {selectedActionCountry && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 overflow-hidden">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] w-full max-w-2xl max-h-[90vh] p-8 shadow-2xl scale-in-center animate-in zoom-in duration-300 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <button 
                onClick={() => setSelectedActionCountry(null)}
                className="p-3 bg-zinc-950/50 hover:bg-zinc-900 rounded-2xl border border-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tight">{selectedActionCountry.name}</h3>
                  <span className="px-3 py-1 bg-rose-500/20 border border-rose-500/30 rounded-full text-[10px] font-black text-rose-400 uppercase tracking-widest">Target Strategis</span>
                </div>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1 italic">Operasi Militer &amp; Diplomatik Luar Negeri</p>
              </div>
            </div>

            {/* Profile Detail - Integrated with Database */}
            <div className="grid grid-cols-1 gap-1 mb-10 bg-zinc-950/30 rounded-3xl border border-zinc-800/50 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-zinc-800/20 transition-colors">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Jumlah suara di PBB</span>
                <div className="flex items-center gap-2.5">
                  <ThumbsUp size={14} className="text-emerald-500" />
                  <span className="text-sm font-black text-emerald-400">{(selectedActionCountry.un_vote || 0).toLocaleString('id-ID')}</span>
                </div>
              </div>
              <div className="h-px bg-zinc-800/30 mx-4"></div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-zinc-800/20 transition-colors">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Agama Mayoritas</span>
                <div className="flex items-center gap-2.5">
                  <BookOpen size={14} className="text-blue-500" />
                  <span className="text-sm font-black text-white">{selectedActionCountry.religion || "Netral"}</span>
                </div>
              </div>
              <div className="h-px bg-zinc-800/30 mx-4"></div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-zinc-800/20 transition-colors">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Ideologi Negara</span>
                <div className="flex items-center gap-2.5">
                  <Scale size={14} className="text-amber-500" />
                  <span className="text-sm font-black text-white pr-1 uppercase tracking-tighter">{selectedActionCountry.ideology || "Nasionalisme"}</span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 no-scrollbar space-y-3">
              {[
                { id: "perang", label: "Umumkan Perang", icon: MilitaryIcon, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20", desc: "Konfrontasi bersenjata langsung dengan seluruh kekuatan armada." },
                { id: "intel", label: "Operasi Intelijen", icon: Eye, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", desc: "Penyusupan agen rahasia untuk memetakan aset strategis musuh." },
                { id: "sabotase", label: "Misi Sabotase", icon: Flame, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20", desc: "Menghancurkan fasilitas energi, logistik, dan infrastruktur kritis." },
                { id: "diplomasi", label: "Aksi Diplomasi", icon: Handshake, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", desc: "Negosiasi bantuan internasional atau pakta perdamaian non-agresi." },
                { id: "sanksi", label: "Sanksi Ekonomi", icon: Coins, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", desc: "Pembekuan aset keuangan dan penghentian jalur perdagangan luar negeri." },
              ].map((action) => (
                <button
                  key={action.id}
                  onClick={() => {
                    if (action.id === 'perang') {
                      if (setActiveMenu) {
                        setActiveMenu("Menu:ArmadaMiliter:AnalisisKekuatan");
                      }
                      setShowWarComparison(true);
                    }
                  }}
                  className={`w-full group p-5 bg-zinc-950 border border-zinc-800 rounded-3xl flex items-center gap-5 transition-all hover:bg-zinc-800/50 hover:border-zinc-700 text-left relative overflow-hidden active:scale-[0.98] cursor-pointer`}
                >
                  <div className={`p-4 rounded-2xl ${action.bg} border ${action.border} ${action.color} group-hover:scale-110 transition-transform`}>
                    <action.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-black text-white uppercase italic tracking-tight mb-1">{action.label}</h4>
                    <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">{action.desc}</p>
                  </div>
                  <div className={`mr-4 p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:${action.color} group-hover:border-${action.id === 'perang' ? 'rose' : action.id === 'intel' ? 'cyan' : action.id === 'diplomasi' ? 'emerald' : 'violet'}-500/30 transition-all`}>
                    <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-700" />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/50">
              <button 
                onClick={() => setSelectedActionCountry(null)}
                className="w-full py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-black uppercase tracking-[0.3em] transition-all cursor-pointer shadow-lg active:scale-[0.98]"
              >
                Batalkan Operasi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* War Comparison Modal */}
      <Perbandingan
        isOpen={showWarComparison}
        onClose={() => {
          setShowWarComparison(false);
          if (setActiveMenu) setActiveMenu("Menu:ArmadaMiliter");
        }}
        userCountryData={currentData}
        targetCountryData={selectedActionCountry}
        userDeltas={effectiveDeltas}
        onConfirmWar={(target) => {
          if (setActiveMenu) {
            setActiveMenu(`Komando Pertahanan:Misi Serangan:${target}`);
          }
        }}
      />
    </div>
  )
}

function BuildingCard({ item, onBuild, construction, tankCapacity }: any) {
  const [showDetail, setShowDetail] = useState(false);
  const currentDate = getStoredGameDate().getTime();
  const progress = construction ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate) : null;

  // 6-month workforce occupancy
  const diffTime = Math.abs(currentDate - INITIAL_GAME_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const sixMonthIndex = Math.floor(diffDays / 180);
  const nextUpdateMs = INITIAL_GAME_DATE.getTime() + (sixMonthIndex + 1) * 180 * 24 * 60 * 60 * 1000;
  const nextUpdateDate = new Date(nextUpdateMs);
  const nextDateStr = `${nextUpdateDate.getDate().toString().padStart(2, '0')}-${(nextUpdateDate.getMonth() + 1).toString().padStart(2, '0')}-${nextUpdateDate.getFullYear()}`;
  const seed = (sixMonthIndex + (item.label?.length || 0)) % 100;
  const occupancyPercentage = 0.70 + (seed % 25) / 100;
  const totalPositions = (item.lowongan_kerja || 0) * (item.count || 0);
  const filledPositions = Math.floor(totalPositions * occupancyPercentage);

  return (
    <div className={`bg-zinc-900/40 border ${progress ? 'border-cyan-500/30 bg-cyan-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full min-h-[440px]`}>
      {progress && (
        <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000" style={{ width: `${progress.percentage}%` }} />
      )}

      {showDetail && (
        <div className="absolute inset-0 z-50 bg-zinc-950/98 backdrop-blur-md p-6 flex flex-col animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Info size={18} />
              </div>
              <div>
                <h5 className="text-[14px] font-black text-white uppercase tracking-wider italic">Detail Armada</h5>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none mt-0.5">Spesifikasi &amp; Biaya</p>
              </div>
            </div>
            <button onClick={() => setShowDetail(false)} className="p-2.5 hover:bg-zinc-800/80 rounded-xl text-zinc-500 hover:text-white transition-all cursor-pointer border border-transparent hover:border-zinc-700">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto no-scrollbar pr-1">
            <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/30">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] opacity-60">Nama Unit</span>
              <h4 className="text-xl font-black text-amber-400 uppercase italic leading-tight tracking-tight">{item.label}</h4>
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-cyan-500/10 rounded-lg text-cyan-400"><MilitaryIcon size={12} /></div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Daya Tempur</span>
                </div>
                <span className="text-[14px] font-black text-cyan-400">+{item.power?.toLocaleString('id-ID')} <span className="text-[9px] text-cyan-500/50 italic opacity-80">/ UNIT</span></span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-rose-500/10 rounded-lg text-rose-400"><Flame size={12} /></div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Pemeliharaan</span>
                </div>
                <span className="text-[14px] font-black text-rose-400">-{item.biaya_pemeliharaan?.toLocaleString('id-ID') || 5} <span className="text-[9px] text-rose-500/50 italic opacity-80">/ HARI</span></span>
              </div>

              {item.konsumsi_listrik > 0 && (
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-rose-500/10 rounded-lg text-rose-500"><Zap size={12} /></div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Beban Energi</span>
                  </div>
                  <span className="text-[14px] font-black text-rose-500">{item.konsumsi_listrik?.toLocaleString('id-ID')} MW</span>
                </div>
              )}

              {item.konsumsi_uranium > 0 ? (
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-400"><Radiation size={12} /></div>
                    <span className="text-[10px] font-bold text-emerald-400/70 uppercase tracking-widest">Konsumsi Uranium</span>
                  </div>
                  <span className="text-[14px] font-black text-emerald-400">{item.konsumsi_uranium?.toLocaleString('id-ID')} g/hari</span>
                </div>
              ) : item.konsumsi_bahan_bakar > 0 && (
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-500"><Flame size={12} /></div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Konsumsi BBM</span>
                  </div>
                  <span className="text-[14px] font-black text-amber-500">{item.konsumsi_bahan_bakar?.toLocaleString('id-ID')} L/hari</span>
                </div>
              )}

              {item.konsumsi_uranium > 0 && (
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-500"><Radiation size={12} /></div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Konsumsi Uranium</span>
                  </div>
                  <span className="text-[14px] font-black text-emerald-500">{item.konsumsi_uranium?.toLocaleString('id-ID')} g/Hari</span>
                </div>
              )}

              {item.lowongan_kerja > 0 && (
                <>
                  <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400"><Users size={12} /></div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Lowongan Personel</span>
                    </div>
                    <span className="text-[14px] font-black text-blue-400">+{(item.lowongan_kerja || 0).toLocaleString('id-ID')} <span className="text-[9px] text-blue-500/50 italic opacity-80">/ UNIT</span></span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-cyan-500/10 rounded-lg text-cyan-500"><Briefcase size={12} /></div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Okupansi Tenaga Kerja</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[14px] font-black text-cyan-400">{filledPositions.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-400">/ {totalPositions.toLocaleString('id-ID')}</span></span>
                      <span className="text-[8px] font-black text-cyan-500 uppercase tracking-widest leading-none italic opacity-90">UPDATE: {nextDateStr}</span>
                    </div>
                  </div>
                </>
              )}

              {item.key === "barak" && (
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-500"><Users size={12} /></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Kapasitas Pasukan</span>
                      <span className="text-[8px] text-emerald-500/50 font-bold uppercase tracking-tighter">1 BARAK = 10.000 PASUKAN</span>
                    </div>
                  </div>
                  <span className="text-[14px] font-black text-emerald-400">10.000 <span className="text-[9px] text-emerald-500/50 italic opacity-80">/ UNIT</span></span>
                </div>
              )}

            </div>
          </div>

          <button onClick={() => setShowDetail(false)} className="mt-6 w-full py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-zinc-800 hover:text-white transition-all cursor-pointer active:scale-[0.98] shadow-lg">
            Kembali
          </button>
        </div>
      )}

      {/* Card header */}
      <div className="flex items-start justify-between relative z-10">
        <div className="flex gap-2">
          <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform">
            <item.icon className={`h-5 w-5 ${progress ? 'text-white' : 'text-cyan-500'} shadow-[0_0_10px_rgba(6,182,212,0.3)]`} />
          </div>
          <button onClick={() => setShowDetail(!showDetail)} className={`p-2.5 rounded-xl border transition-all cursor-pointer ${showDetail ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30'}`}>
            <Info size={16} />
          </button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
            {item.deskripsi}
          </div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            Terbangun: {item.count.toLocaleString('id-ID')} {item.dataKey === 'barak' ? 'Pasukan' : 'Unit'} {item.konsumsi_listrik > 0 && `(${(item.count * item.konsumsi_listrik).toLocaleString('id-ID')} MW)`}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex-1 flex flex-col relative z-10 mt-1">
        <h4 className="text-[17px] font-black text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors uppercase italic leading-tight mb-3">
          {item.label}
        </h4>

        <div className="flex flex-col gap-2.5 flex-1">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-cyan-500/10 rounded-lg">
              <MilitaryIcon size={12} className="text-cyan-400" />
            </div>
            <span className="text-[12px] font-bold text-cyan-400/90">
              Daya Tempur: +{item.power?.toLocaleString('id-ID')} / {item.dataKey === 'barak' ? 'person' : 'unit'}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-rose-500/10 rounded-lg">
              <Flame size={12} className="text-rose-400" />
            </div>
            <span className="text-[12px] font-bold text-rose-400/90">Pemeliharaan: -{item.biaya_pemeliharaan?.toLocaleString('id-ID') || 5}/hari</span>
          </div>

          {item.konsumsi_listrik > 0 && (
            <div className="flex flex-col gap-2">
               <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-rose-500/10 rounded-lg">
                     <Zap size={12} className="text-rose-500/90" />
                  </div>
                  <span className="text-[12px] font-bold text-rose-500/80">
                     Konsumsi: {item.konsumsi_listrik?.toLocaleString('id-ID')} MW/bangunan
                  </span>
               </div>
               <div className="flex items-center gap-2.5 ml-1 border-l-2 border-rose-500/10 pl-3">
                  <div className="p-1.5 bg-rose-500/5 rounded-lg">
                     <Activity size={12} className="text-rose-400/70" />
                  </div>
                  <span className="text-[11px] font-bold text-rose-400/70 uppercase">
                     Total Konsumsi Listrik: {(item.count * (item.konsumsi_listrik || 0)).toLocaleString('id-ID')} MW
                  </span>
               </div>
            </div>
          )}

          {item.konsumsi_uranium > 0 ? (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-emerald-500/10 rounded-lg"><Radiation size={12} className="text-emerald-500/90" /></div>
              <span className="text-[12px] font-bold text-emerald-500/80">Konsumsi Uranium: {item.konsumsi_uranium?.toLocaleString('id-ID')} g/hari</span>
            </div>
          ) : item.konsumsi_bahan_bakar > 0 && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-amber-500/10 rounded-lg"><Flame size={12} className="text-amber-500/90" /></div>
              <span className="text-[12px] font-bold text-amber-500/80">Konsumsi BBM: {item.konsumsi_bahan_bakar?.toLocaleString('id-ID')} L/hari</span>
            </div>
          )}

          {item.dataKey === "barak" && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-emerald-500/10 rounded-lg">
                <Users size={12} className="text-emerald-400" />
              </div>
              <span className="text-[12px] font-bold text-emerald-400/90 italic">
                Kapasitas: 10.000 Pasukan/unit
              </span>
            </div>
          )}

          {item.storageLabel && typeof item.storageMax === 'number' && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-amber-500/10 rounded-lg">
                <item.storageIcon size={12} className="text-amber-500" />
              </div>
              <span className={`text-[12px] font-bold italic ${item.isFull ? 'text-rose-500' : 'text-amber-500/90'}`}>
                Kapasitas {item.storageLabel.replace('Pangkalan ', '')}: {item.storageUsed?.toLocaleString('id-ID')} / {item.storageMax?.toLocaleString('id-ID')}
              </span>
            </div>
          )}


          {!progress && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-zinc-800/50 rounded-lg"><Clock size={12} className="text-zinc-500" /></div>
              <span className="text-[11px] font-bold text-zinc-500 italic">Waktu: {item.waktu_pembangunan} Hari</span>
            </div>
          )}
        </div>

        {/* Total Alutsista section */}
        <div className="mt-4 pt-4 border-t border-zinc-800/30 flex flex-col gap-2 bg-zinc-950/30 rounded-2xl p-4 border border-zinc-800/20 shadow-inner">
          {/* Row 1: Total Unit */}
          <div className="flex justify-between items-baseline gap-2">
            <span className="text-[13px] font-black text-zinc-500 uppercase tracking-[0.15em] italic">Total Unit</span>
            <span className="text-[22px] font-black text-cyan-400 tracking-tight">
              {(item.count || 0).toLocaleString('id-ID')}
              <span className="text-[12px] text-cyan-500/50 font-normal uppercase italic ml-1">{item.key === 'barak' ? 'Pasukan' : 'Unit'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Build button / progress */}
      <div className="mt-auto pt-4 relative z-10">
        {progress ? (
          <div className="space-y-3 bg-zinc-950/50 p-3 rounded-2xl border border-zinc-800/50">
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Loader2 size={12} className={`animate-spin ${progress.isWaiting ? 'text-zinc-600' : 'text-cyan-400'}`} />
                {getStatusText(progress.percentage, progress.isWaiting)}
              </span>
              <span className={progress.colorClass.replace('bg-', 'text-')}>{progress.percentage}%</span>
            </div>
            <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/30 p-0.5">
              <div className={`h-full transition-all duration-1000 ${progress.colorClass} rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)]`} style={{ width: `${progress.percentage}%` }} />
            </div>
            <div className="flex justify-between items-center text-[9px] font-bold text-zinc-500 uppercase tracking-tighter italic opacity-70">
              <span className="flex items-center gap-1"><Clock size={10} /> ESTIMASI:</span>
              <span className="text-zinc-400">{formatGameDate(new Date(construction.endDate))}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">Biaya Akuisisi</span>
              <span className="text-sm font-black text-zinc-400 tracking-tight mt-1">{item.biaya_pembangunan?.toLocaleString('id-ID')}</span>
            </div>
            {item.isFull ? (
              <button disabled className="flex-1 py-3.5 rounded-2xl bg-zinc-800 text-rose-500/50 text-[10px] font-black uppercase tracking-[0.1em] border border-rose-500/20 cursor-not-allowed">
                {item.storageLabel.replace('Pangkalan ', '')} Penuh
              </button>
            ) : (
              <button onClick={(e) => { e.stopPropagation(); onBuild(item); }} className="flex-1 py-3.5 rounded-2xl bg-cyan-600 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(8,145,178,0.4)] transition-all cursor-pointer active:scale-95 border border-cyan-400/20">
                Bangun
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

