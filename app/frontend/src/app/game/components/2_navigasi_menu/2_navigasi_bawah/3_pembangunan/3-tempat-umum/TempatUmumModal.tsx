"use client"

import { useState, useEffect, Fragment } from "react";
import { X, Wrench, Zap, Pickaxe, Factory, Construction, Store, Beef, Wheat, Radiation, Coins, Flame, Droplets, FlaskConical, Shovel, Container, Car, Bike, Gem, Battery, Box, Cpu, Mountain, Waves, TreePine, Croissant, Soup, Shell, Milk, Sprout, Apple, Bean, Coffee, Activity, TrendingUp, TrendingDown, Clock, Loader2, RefreshCw, Eye, EyeOff, Pill, Utensils, Bird, Fish, Info, Building, Archive, Layers, Hammer, Microscope, Search, Building2, Library, Trophy, Gavel, Scale, Radar, Settings, Target, ShieldAlert, HeartPulse, Stethoscope, Briefcase, Users, Users2, Warehouse, Ship, Map, Wifi, Plane, Bus, ShieldCheck, Home, GraduationCap, Landmark, Crosshair, TrainFront, HardHat, Siren, Leaf, Truck, School, Lightbulb, Dumbbell, Flag, Gamepad2, Clapperboard, Theater, AlertTriangle } from "lucide-react"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, KAPASITAS_LISTRIK_METADATA, KONSUMSI_EKSTRAKSI, KONSUMSI_PRODUKSI, KONSUMSI_PERTAHANAN, KONSUMSI_STRATEGIC, KONSUMSI_SOSIAL, KONSUMSI_TRANSPORTASI, DASHBOARD_LABELS, KONSUMSI_PANGAN } from "@/app/database/data/semua_fitur_negara"
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/negara/benua/index";
import NavigasiWaktu from "../../2_ekonomi/1-perdagangan/NavigasiWaktu";
import { infrastrukturRate, sosialRate, hunianRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum";
import { mineralKritisRate, manufakturRate, peternakanRate, agrikulturRate, perikananRate, olahanPanganRate, farmasiRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi";
import { pabrikMiliterRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import JikaUangKurang from "../jika_uang_kurang";
import JikaMaterialKurang from "../jika_material_kurang";
import JikaMaterialDanUangKurang from "../jika_material_dan_uang_kurang";
import { getBuildingRequirement, MaterialRequirement } from "../1-produksi/MaterialRequirement";
// import HunianPemukiman from "./HunianPemukiman";

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
  const [isInsufficientFundsModalOpen, setIsInsufficientFundsModalOpen] = useState(false);
  const [isInsufficientMaterialsModalOpen, setIsInsufficientMaterialsModalOpen] = useState(false);
  const [isInsufficientBothModalOpen, setIsInsufficientBothModalOpen] = useState(false);
  const [missingMaterialsData, setMissingMaterialsData] = useState<any[]>([]);
  const [requiredAmount, setRequiredAmount] = useState(0);
  const [activeTab, setActiveTab] = useState<'layanan' | 'hunian'>('layanan');

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

  // --- ENERGY DASHBOARD SYNCHRONIZATION ---
  // Apply construction deltas to a temporary country object to get accurate supply/usage
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
  };

  Object.entries(buildingDeltas).forEach(([key, deltaValue]) => {
    if (typeof deltaValue !== 'number' || deltaValue === 0) return;

    // 1. Electricity Sector
    if (KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA]) {
      const dataKey = KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_listrik as any)[dataKey] = ((currentDataWithDeltas.sektor_listrik as any)[dataKey] || 0) + deltaValue;
    }
    // 2. Critical Minerals
    else if ((mineralKritisRate as any)[key]) {
      const dataKey = (mineralKritisRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] = ((currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] || 0) + deltaValue;
    }
    // 3. Manufaktur
    else if ((manufakturRate as any)[key]) {
      const dataKey = (manufakturRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_manufaktur as any)[dataKey] = ((currentDataWithDeltas.sektor_manufaktur as any)[dataKey] || 0) + deltaValue;
    }
    // 4. Peternakan
    else if ((peternakanRate as any)[key]) {
      const dataKey = (peternakanRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_peternakan as any)[dataKey] = ((currentDataWithDeltas.sektor_peternakan as any)[dataKey] || 0) + deltaValue;
    }
    // 5. Agrikultur
    else if ((agrikulturRate as any)[key]) {
      const dataKey = (agrikulturRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_agrikultur as any)[dataKey] = ((currentDataWithDeltas.sektor_agrikultur as any)[dataKey] || 0) + deltaValue;
    }
    // 6. Perikanan
    else if ((perikananRate as any)[key]) {
      const dataKey = (perikananRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_perikanan as any)[dataKey] = ((currentDataWithDeltas.sektor_perikanan as any)[dataKey] || 0) + deltaValue;
    }
    // 7. Olahan Pangan
    else if ((olahanPanganRate as any)[key]) {
      const dataKey = (olahanPanganRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_olahan_pangan as any)[dataKey] = ((currentDataWithDeltas.sektor_olahan_pangan as any)[dataKey] || 0) + deltaValue;
    }
    // 8. Farmasi
    else if ((farmasiRate as any)[key]) {
      const dataKey = (farmasiRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_farmasi as any)[dataKey] = ((currentDataWithDeltas.sektor_farmasi as any)[dataKey] || 0) + deltaValue;
    }
    // 9. Infrastruktur
    else if (infrastrukturRate[key]) {
      const dataKey = (infrastrukturRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.infrastruktur as any)[dataKey] = ((currentDataWithDeltas.infrastruktur as any)[dataKey] || 0) + deltaValue;
    }
    // 10. Sosial & Public
    else if (sosialRate[key]) {
      const dataKey = (sosialRate as any)[key].dataKey;
      const groupId = (sosialRate as any)[key].groupId;
      if (dataKey && groupId) {
        if (groupId === "pendidikan") (currentDataWithDeltas.pendidikan as any)[dataKey] = ((currentDataWithDeltas.pendidikan as any)[dataKey] || 0) + deltaValue;
        else if (groupId === "kesehatan") (currentDataWithDeltas.kesehatan as any)[dataKey] = ((currentDataWithDeltas.kesehatan as any)[dataKey] || 0) + deltaValue;
        else if (groupId === "hukum") (currentDataWithDeltas.hukum as any)[dataKey] = ((currentDataWithDeltas.hukum as any)[dataKey] || 0) + deltaValue;
        else if (groupId === "olahraga") (currentDataWithDeltas.sektor_olahraga as any)[dataKey] = ((currentDataWithDeltas.sektor_olahraga as any)[dataKey] || 0) + deltaValue;
        else if (groupId === "komersial") (currentDataWithDeltas.sektor_komersial as any)[dataKey] = ((currentDataWithDeltas.sektor_komersial as any)[dataKey] || 0) + deltaValue;
        else if (groupId === "hiburan") (currentDataWithDeltas.sektor_hiburan as any)[dataKey] = ((currentDataWithDeltas.sektor_hiburan as any)[dataKey] || 0) + deltaValue;
      }
    }
    // 11. Pabrik Militer
    else if (pabrikMiliterRate[key as keyof typeof pabrikMiliterRate]) {
       const dataKey = pabrikMiliterRate[key as keyof typeof pabrikMiliterRate].dataKey;
       if (dataKey) (currentDataWithDeltas.pabrik_militer as any)[dataKey] = ((currentDataWithDeltas.pabrik_militer as any)[dataKey] || 0) + deltaValue;
    }
    // 12. Hunian
    else if ((hunianRate as any)[key]) {
      const dataKey = key; // for hunian, the key IS the dataKey
      (currentDataWithDeltas.hunian as any)[dataKey] = ((currentDataWithDeltas.hunian as any)[dataKey] || 0) + deltaValue;
    }
  });

  const adjustedTotalPasokan = hitungTotalKapasitas(currentDataWithDeltas.sektor_listrik);
  const adjustedTotalBeban = hitungTotalKonsumsiNasional(currentDataWithDeltas);
  const surplus = adjustedTotalPasokan - adjustedTotalBeban;

  // --- HOUSING CAPACITY CALCULATION ---
  const totalHousingCapacity = (currentDataWithDeltas.hunian?.rumah_subsidi || 0) * (hunianRate.rumah_subsidi.kapasitas || 4) +
                               (currentDataWithDeltas.hunian?.apartemen || 0) * (hunianRate.apartemen.kapasitas || 50) +
                               (currentDataWithDeltas.hunian?.mansion || 0) * (hunianRate.mansion.kapasitas || 10);
  const population = Number(currentData.jumlah_penduduk || 0);
  const isHousingShortage = totalHousingCapacity < population;
  
  // Tiered Demand Calculation (70% Subsidi, 25% Apartemen, 5% Mansion)
  const demandSubsidi = population > 0 ? Math.min(100, Math.max(0, (1 - ((currentDataWithDeltas.hunian?.rumah_subsidi || 0) * (hunianRate.rumah_subsidi.kapasitas || 4)) / (population * 0.7))) * 100) : 0;
  const demandApartemen = population > 0 ? Math.min(100, Math.max(0, (1 - ((currentDataWithDeltas.hunian?.apartemen || 0) * (hunianRate.apartemen.kapasitas || 50)) / (population * 0.25))) * 100) : 0;
  const demandMansion = population > 0 ? Math.min(100, Math.max(0, (1 - ((currentDataWithDeltas.hunian?.mansion || 0) * (hunianRate.mansion.kapasitas || 10)) / (population * 0.05))) * 100) : 0;

  const publicGroups = [
    {
      id: "infrastruktur",
      title: "1. Sektor Infrastruktur & Logistik (8 jenis)",
      icon: Ship,
      color: "text-cyan-400",
      items: [
        { ...infrastrukturRate["1_jalur_sepeda"], key: "jalur_sepeda", groupId: "infra_darat", label: "Jalur Sepeda", icon: Bike, desc: "Logistik", tarif: 1, unit: "Unit", cost: infrastrukturRate["1_jalur_sepeda"].biaya_pembangunan, buildTime: infrastrukturRate["1_jalur_sepeda"].waktu_pembangunan, count: (currentData.infrastruktur?.jalur_sepeda || 0) + ((buildingDeltas["jalur_sepeda"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.jalur_sepeda },
        { ...infrastrukturRate["2_jalan_tol"], key: "2_jalan_tol", groupId: "infra_darat", label: "Jalan Raya", icon: Map, desc: "Infrastruktur", tarif: 1, unit: "Unit", cost: infrastrukturRate["2_jalan_tol"].biaya_pembangunan, buildTime: infrastrukturRate["2_jalan_tol"].waktu_pembangunan, count: (currentData.infrastruktur?.jalan_raya || 0) + ((buildingDeltas["2_jalan_tol"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.jalan_raya },
        { ...infrastrukturRate["3_terminal_bus"], key: "terminal_bus", groupId: "infra_darat", label: "Terminal Bus", icon: Bus, desc: "Transportasi", tarif: 1, unit: "Unit", cost: infrastrukturRate["3_terminal_bus"].biaya_pembangunan, buildTime: infrastrukturRate["3_terminal_bus"].waktu_pembangunan, count: (currentData.infrastruktur?.terminal_bus || 0) + ((buildingDeltas["terminal_bus"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.terminal_bus },
        
        { ...infrastrukturRate["4_jalur_kereta"], key: "4_jalur_kereta", groupId: "perkeretaapian", label: "Stasiun Kereta Api", icon: TrainFront, desc: "Logistik", tarif: 1, unit: "Unit", cost: infrastrukturRate["4_jalur_kereta"].biaya_pembangunan, buildTime: infrastrukturRate["4_jalur_kereta"].waktu_pembangunan, count: (currentData.infrastruktur?.stasiun_kereta_api || 0) + ((buildingDeltas["4_jalur_kereta"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.stasiun_kereta_api },
        { ...infrastrukturRate["5_kereta_bawah_tanah"], key: "kereta_bawah_tanah", groupId: "perkeretaapian", label: "Kereta Bawah Tanman", icon: TrainFront, desc: "Transportasi", tarif: 1, unit: "Unit", cost: infrastrukturRate["5_kereta_bawah_tanah"].biaya_pembangunan, buildTime: infrastrukturRate["5_kereta_bawah_tanah"].waktu_pembangunan, count: (currentData.infrastruktur?.kereta_bawah_tanah || 0) + ((buildingDeltas["kereta_bawah_tanah"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.kereta_bawah_tanah },
        
        { ...infrastrukturRate["6_pelabuhan_laut"], key: "6_pelabuhan_laut", groupId: "maritim_udara", label: "Pelabuhan", icon: Ship, desc: "Maritim", tarif: 1, unit: "Unit", cost: infrastrukturRate["6_pelabuhan_laut"].biaya_pembangunan, buildTime: infrastrukturRate["6_pelabuhan_laut"].waktu_pembangunan, count: (currentData.infrastruktur?.pelabuhan || 0) + ((buildingDeltas["6_pelabuhan_laut"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.pelabuhan },
        { ...infrastrukturRate["7_bandara"], key: "bandara", groupId: "maritim_udara", label: "Bandara", icon: Plane, desc: "Udara", tarif: 1, unit: "Unit", cost: infrastrukturRate["7_bandara"].biaya_pembangunan, buildTime: infrastrukturRate["7_bandara"].waktu_pembangunan, count: (currentData.infrastruktur?.bandara || 0) + ((buildingDeltas["bandara"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.bandara },
        { ...infrastrukturRate["8_helipad"], key: "helipad", groupId: "maritim_udara", label: "Helipad", icon: Plane, desc: "Udara", tarif: 1, unit: "Unit", cost: infrastrukturRate["8_helipad"].biaya_pembangunan, buildTime: infrastrukturRate["8_helipad"].waktu_pembangunan, count: (currentData.infrastruktur?.helipad || 0) + ((buildingDeltas["helipad"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.helipad },
      ]
    },
    {
      id: "pendidikan_riset",
      title: "2. Sektor Pendidikan & Riset (10 jenis)",
      icon: GraduationCap,
      color: "text-indigo-400",
      items: [
        { ...sosialRate["1_prasekolah"], key: "prasekolah", groupId: "pendidikan", label: "Prasekolah (PAUD)", icon: Building2, desc: "Pendidikan", tarif: 1, cost: sosialRate["1_prasekolah"].biaya_pembangunan, buildTime: sosialRate["1_prasekolah"].waktu_pembangunan, count: (currentData.pendidikan?.prasekolah || 0) + ((buildingDeltas["prasekolah"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.prasekolah },
        { ...sosialRate["2_dasar"], key: "dasar", groupId: "pendidikan", label: "Pendidikan Dasar", icon: School, desc: "Pendidikan", tarif: 1, cost: sosialRate["2_dasar"].biaya_pembangunan, buildTime: sosialRate["2_dasar"].waktu_pembangunan, count: (currentData.pendidikan?.dasar || 0) + ((buildingDeltas["dasar"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.dasar },
        { ...sosialRate["3_menengah"], key: "menengah", groupId: "pendidikan", label: "Sekolah Menengah", icon: Library, desc: "Pendidikan", tarif: 1, cost: sosialRate["3_menengah"].biaya_pembangunan, buildTime: sosialRate["3_menengah"].waktu_pembangunan, count: (currentData.pendidikan?.menengah || 0) + ((buildingDeltas["menengah"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.menengah },
        { ...sosialRate["4_lanjutan"], key: "lanjutan", groupId: "pendidikan", label: "Sekolah Lanjutan", icon: GraduationCap, desc: "Pendidikan", tarif: 1, cost: sosialRate["4_lanjutan"].biaya_pembangunan, buildTime: sosialRate["4_lanjutan"].waktu_pembangunan, count: (currentData.pendidikan?.lanjutan || 0) + ((buildingDeltas["lanjutan"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.lanjutan },
        { ...sosialRate["5_universitas"], key: "universitas", groupId: "pendidikan", label: "Universitas", icon: Landmark, desc: "Pendidikan Tinggi", tarif: 1, cost: sosialRate["5_universitas"].biaya_pembangunan, buildTime: sosialRate["5_universitas"].waktu_pembangunan, count: (currentData.pendidikan?.universitas || 0) + ((buildingDeltas["universitas"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.universitas },
        { ...sosialRate["6_lembaga_pendidikan"], key: "lembaga_pendidikan", groupId: "pendidikan", label: "Lembaga Pendidikan", icon: Briefcase, desc: "Vokasional", tarif: 1, cost: sosialRate["6_lembaga_pendidikan"].biaya_pembangunan, buildTime: sosialRate["6_lembaga_pendidikan"].waktu_pembangunan, count: (currentData.pendidikan?.lembaga_pendidikan || 0) + ((buildingDeltas["lembaga_pendidikan"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.lembaga_pendidikan },
        { ...sosialRate["7_laboratorium"], key: "laboratorium", groupId: "pendidikan", label: "Laboratorium", icon: Microscope, desc: "Riset", tarif: 1, cost: sosialRate["7_laboratorium"].biaya_pembangunan, buildTime: sosialRate["7_laboratorium"].waktu_pembangunan, count: (currentData.pendidikan?.laboratorium || 0) + ((buildingDeltas["laboratorium"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.laboratorium },
        { ...sosialRate["8_observatorium"], key: "observatorium", groupId: "pendidikan", label: "Observatorium", icon: Eye, desc: "Astronomi", tarif: 1, cost: sosialRate["8_observatorium"].biaya_pembangunan, buildTime: sosialRate["8_observatorium"].waktu_pembangunan, count: (currentData.pendidikan?.observatorium || 0) + ((buildingDeltas["observatorium"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.observatorium },
        { ...sosialRate["9_pusat_penelitian"], key: "pusat_penelitian", groupId: "pendidikan", label: "Pusat Penelitian", icon: Search, desc: "Riset Strategis", tarif: 1, cost: sosialRate["9_pusat_penelitian"].biaya_pembangunan, buildTime: sosialRate["9_pusat_penelitian"].waktu_pembangunan, count: (currentData.pendidikan?.pusat_penelitian || 0) + ((buildingDeltas["pusat_penelitian"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.pusat_penelitian },
        { ...sosialRate["10_pusat_pengembangan"], key: "pusat_pengembangan", groupId: "pendidikan", label: "Pusat Pengembangan", icon: Lightbulb, desc: "Inovasi", tarif: 1, cost: sosialRate["10_pusat_pengembangan"].biaya_pembangunan, buildTime: sosialRate["10_pusat_pengembangan"].waktu_pembangunan, count: (currentData.pendidikan?.pusat_pengembangan || 0) + ((buildingDeltas["pusat_pengembangan"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.pusat_pengembangan },
      ]
    },
    {
      id: "kesehatan",
      title: "3. Sektor Layanan Kesehatan (3 jenis)",
      icon: HeartPulse,
      color: "text-rose-400",
      items: [
        { ...sosialRate["11_rumah_sakit_besar"], key: "rumah_sakit_besar", groupId: "kesehatan", label: "RS Besar", icon: Building2, desc: "Kesehatan", tarif: 1, cost: sosialRate["11_rumah_sakit_besar"].biaya_pembangunan, buildTime: sosialRate["11_rumah_sakit_besar"].waktu_pembangunan, count: (currentData.kesehatan?.rumah_sakit_besar || 0) + ((buildingDeltas["rumah_sakit_besar"] as number) || 0), consumption: KONSUMSI_SOSIAL.kesehatan.rumah_sakit_besar },
        { ...sosialRate["12_rumah_sakit_kecil"], key: "rumah_sakit_kecil", groupId: "kesehatan", label: "RS Kecil", icon: Building2, desc: "Kesehatan", tarif: 1, cost: sosialRate["12_rumah_sakit_kecil"].biaya_pembangunan, buildTime: sosialRate["12_rumah_sakit_kecil"].waktu_pembangunan, count: (currentData.kesehatan?.rumah_sakit_kecil || 0) + ((buildingDeltas["rumah_sakit_kecil"] as number) || 0), consumption: KONSUMSI_SOSIAL.kesehatan.rumah_sakit_kecil },
        { ...sosialRate["13_pusat_diagnostik"], key: "pusat_diagnostik", groupId: "kesehatan", label: "Diagnostik", icon: Search, desc: "Kesehatan", tarif: 1, cost: sosialRate["13_pusat_diagnostik"].biaya_pembangunan, buildTime: sosialRate["13_pusat_diagnostik"].waktu_pembangunan, count: (currentData.kesehatan?.pusat_diagnostik || 0) + ((buildingDeltas["pusat_diagnostik"] as number) || 0), consumption: KONSUMSI_SOSIAL.kesehatan.pusat_diagnostik },
      ]
    },
    {
      id: "hukum_keamanan",
      title: "4. Sektor Hukum & Keamanan (2 jenis)",
      icon: Gavel,
      color: "text-slate-400",
      items: [
        { ...sosialRate["14_kejaksaan_court"], key: "kejaksaan_court", groupId: "hukum", label: "Kejaksaan / Court", icon: Gavel, desc: "Hukum", tarif: 1, cost: sosialRate["14_kejaksaan_court"].biaya_pembangunan, buildTime: sosialRate["14_kejaksaan_court"].waktu_pembangunan, count: ((currentData.hukum?.kejaksaan || 0) + (currentData.hukum?.pengadilan || 0)) + ((buildingDeltas["kejaksaan_court"] as number) || 0), consumption: (KONSUMSI_SOSIAL.hukum.kejaksaan + KONSUMSI_SOSIAL.hukum.pengadilan) / 2 },
        { ...sosialRate["15_legal_aid"], key: "legal_aid", groupId: "hukum", label: "Bantuan Hukum", icon: Scale, desc: "Hukum", tarif: 1, cost: sosialRate["15_legal_aid"].biaya_pembangunan, buildTime: sosialRate["15_legal_aid"].waktu_pembangunan, count: (currentData.hukum?.pusat_bantuan_hukum || 0) + ((buildingDeltas["legal_aid"] as number) || 0), consumption: KONSUMSI_SOSIAL.hukum.pusat_bantuan_hukum },
      ]
    },
    {
      id: "olahraga",
      title: "5. Sektor Olahraga & Rekreasi (7 jenis)",
      icon: Trophy,
      color: "text-orange-400",
      items: [
        { ...sosialRate["16_kolam_renang"], key: "kolam_renang", groupId: "olahraga", label: "Kolam Renang", icon: Waves, desc: "Olahraga", tarif: 1, cost: sosialRate["16_kolam_renang"].biaya_pembangunan, buildTime: sosialRate["16_kolam_renang"].waktu_pembangunan, count: (currentData.sektor_olahraga?.kolam_renang || 0) + ((buildingDeltas["kolam_renang"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.kolam_renang },
        { ...sosialRate["17_sirkuit_balap"], key: "sirkuit_balap", groupId: "olahraga", label: "Sirkuit Balap", icon: Flame, desc: "Olahraga", tarif: 1, cost: sosialRate["17_sirkuit_balap"].biaya_pembangunan, buildTime: sosialRate["17_sirkuit_balap"].waktu_pembangunan, count: (currentData.sektor_olahraga?.sirkuit_balap || 0) + ((buildingDeltas["sirkuit_balap"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.sirkuit_balap },
        { ...sosialRate["18_stadium_int"], key: "stadium_int", groupId: "olahraga", label: "Stadion (Nas/Int)", icon: Trophy, desc: "Olahraga", tarif: 1, cost: sosialRate["18_stadium_int"].biaya_pembangunan, buildTime: sosialRate["18_stadium_int"].waktu_pembangunan, count: ((currentData.sektor_olahraga?.stadion || 0) + (currentData.sektor_olahraga?.stadion_internasional || 0)) + ((buildingDeltas["stadium_int"] as number) || 0), consumption: (KONSUMSI_SOSIAL.olahraga.stadion + KONSUMSI_SOSIAL.olahraga.stadion_internasional) / 2 },
        { ...sosialRate["19_gym_center"], key: "gym_center", groupId: "olahraga", label: "Pusat Kebugaran", icon: Dumbbell, desc: "Olahraga", tarif: 1, cost: sosialRate["19_gym_center"].biaya_pembangunan, buildTime: sosialRate["19_gym_center"].waktu_pembangunan, count: (currentData.sektor_olahraga?.gym || 0) + ((buildingDeltas["gym_center"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.gym },
        { ...sosialRate["20_lapangan_golf"], key: "lapangan_golf", groupId: "olahraga", label: "Lapangan Golf", icon: Flag, desc: "Olahraga", tarif: 1, cost: sosialRate["20_lapangan_golf"].biaya_pembangunan, buildTime: sosialRate["20_lapangan_golf"].waktu_pembangunan, count: (currentData.sektor_olahraga?.golf || 0) + ((buildingDeltas["lapangan_golf"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.golf },
        { ...sosialRate["21_esports_arena"], key: "esports_arena", groupId: "olahraga", label: "Arena E-Sports", icon: Gamepad2, desc: "Olahraga", tarif: 1, cost: sosialRate["21_esports_arena"].biaya_pembangunan, buildTime: sosialRate["21_esports_arena"].waktu_pembangunan, count: (currentData.sektor_olahraga?.esports || 0) + ((buildingDeltas["esports_arena"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.esports },
        { ...sosialRate["22_gokart_circuit"], key: "gokart_circuit", groupId: "olahraga", label: "Sirkuit Gokart", icon: Flame, desc: "Olahraga", tarif: 1, cost: sosialRate["22_gokart_circuit"].biaya_pembangunan, buildTime: sosialRate["22_gokart_circuit"].waktu_pembangunan, count: (currentData.sektor_olahraga?.gokart || 0) + ((buildingDeltas["gokart_circuit"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.gokart },
      ]
    },
    {
      id: "komersial",
      title: "6. Sektor Komersial & Retail (3 jenis)",
      icon: Store,
      color: "text-amber-500",
      items: [
        { ...sosialRate["23_pusat_belanja"], key: "23_pusat_belanja", groupId: "komersial", label: "Pusat Perbelanjaan", icon: Store, desc: "Komersial", tarif: 1, cost: sosialRate["23_pusat_belanja"].biaya_pembangunan, buildTime: sosialRate["23_pusat_belanja"].waktu_pembangunan, count: (currentData.sektor_komersial?.pusat_belanja || 0) + ((buildingDeltas["23_pusat_belanja"] as number) || 0), consumption: KONSUMSI_SOSIAL.komersial.pusat_belanja },
        { ...sosialRate["24_hotel"], key: "24_hotel", groupId: "komersial", label: "Hotel & Resort", icon: Building, desc: "Komersial", tarif: 1, cost: sosialRate["24_hotel"].biaya_pembangunan, buildTime: sosialRate["24_hotel"].waktu_pembangunan, count: (currentData.sektor_komersial?.hotel || 0) + ((buildingDeltas["24_hotel"] as number) || 0), consumption: KONSUMSI_SOSIAL.komersial.hotel },
        { ...sosialRate["25_pusat_grosir_tekstil"], key: "25_pusat_grosir_tekstil", groupId: "komersial", label: "Pusat Grosir", icon: Warehouse, desc: "Komersial", tarif: 1, cost: sosialRate["25_pusat_grosir_tekstil"].biaya_pembangunan, buildTime: sosialRate["25_pusat_grosir_tekstil"].waktu_pembangunan, count: (currentData.sektor_komersial?.pusat_grosir_tekstil || 0) + ((buildingDeltas["25_pusat_grosir_tekstil"] as number) || 0), consumption: KONSUMSI_SOSIAL.komersial.pusat_grosir_tekstil },
      ]
    },
    {
      id: "hiburan",
      title: "7. Sektor Hiburan & Seni (2 jenis)",
      icon: Clapperboard,
      color: "text-purple-400",
      items: [
        { ...sosialRate["26_bioskop"], key: "bioskop", groupId: "hiburan", label: "Bioskop", icon: Clapperboard, desc: "Hiburan", tarif: 1, cost: sosialRate["26_bioskop"].biaya_pembangunan, buildTime: sosialRate["26_bioskop"].waktu_pembangunan, count: (currentData.sektor_hiburan?.bioskop || 0) + ((buildingDeltas["bioskop"] as number) || 0), consumption: KONSUMSI_SOSIAL.hiburan.bioskop },
        { ...sosialRate["27_gedung_teater"], key: "gedung_teater", groupId: "hiburan", label: "Gedung Teater", icon: Theater, desc: "Hiburan", tarif: 1, cost: sosialRate["27_gedung_teater"].biaya_pembangunan, buildTime: sosialRate["27_gedung_teater"].waktu_pembangunan, count: (currentData.sektor_hiburan?.teater || 0) + ((buildingDeltas["gedung_teater"] as number) || 0), consumption: KONSUMSI_SOSIAL.hiburan.teater },
      ]
    }
  ];

  const hunianGroups = [
    {
      id: "hunian_nasional",
      title: "1. Sektor Hunian & Pemukiman Nasional (3 jenis)",
      icon: Home,
      color: "text-amber-400",
      items: [
        { ...hunianRate.rumah_subsidi, key: "rumah_subsidi", groupId: "hunian", label: hunianRate.rumah_subsidi.label, icon: Home, deskripsi: "Residensial", tarif: 1, unit: "Unit", cost: hunianRate.rumah_subsidi.biaya_pembangunan, biaya_pembangunan: hunianRate.rumah_subsidi.biaya_pembangunan, waktu_pembangunan: hunianRate.rumah_subsidi.waktu_pembangunan, count: (currentDataWithDeltas.hunian?.rumah_subsidi || 0), consumption: hunianRate.rumah_subsidi.konsumsi_listrik, konsumsi_listrik: hunianRate.rumah_subsidi.konsumsi_listrik, kapasitas: hunianRate.rumah_subsidi.kapasitas },
        { ...hunianRate.apartemen, key: "apartemen", groupId: "hunian", label: hunianRate.apartemen.label, icon: Building2, deskripsi: "Residensial", tarif: 1, unit: "Unit", cost: hunianRate.apartemen.biaya_pembangunan, biaya_pembangunan: hunianRate.apartemen.biaya_pembangunan, waktu_pembangunan: hunianRate.apartemen.waktu_pembangunan, count: (currentDataWithDeltas.hunian?.apartemen || 0), consumption: hunianRate.apartemen.konsumsi_listrik, konsumsi_listrik: hunianRate.apartemen.konsumsi_listrik, kapasitas: hunianRate.apartemen.kapasitas },
        { ...hunianRate.mansion, key: "mansion", groupId: "hunian", label: hunianRate.mansion.label, icon: Landmark, deskripsi: "Residensial", tarif: 1, unit: "Unit", cost: hunianRate.mansion.biaya_pembangunan, biaya_pembangunan: hunianRate.mansion.biaya_pembangunan, waktu_pembangunan: hunianRate.mansion.waktu_pembangunan, count: (currentDataWithDeltas.hunian?.mansion || 0), consumption: hunianRate.mansion.konsumsi_listrik, konsumsi_listrik: hunianRate.mansion.konsumsi_listrik, kapasitas: hunianRate.mansion.kapasitas },
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
      // 1. Calculate total cost with robust number casting
      const unitCost = Number(confirmBuild.biaya_pembangunan || 0);
      const buildQuantity = Number(quantity || 1);
      const totalCost = unitCost * buildQuantity;
      
      // 2. Check if budget is sufficient
      const currentBalance = Number(budgetStorage.getBudget() || 0);
      
      if (currentBalance < totalCost) {
        setRequiredAmount(totalCost);
        setConfirmBuild(null);
        setIsInsufficientFundsModalOpen(true);
        return;
      }

      // 3. Check for Material Sufficiency
      const requirements = getBuildingRequirement(confirmBuild.key);
      const cumulativeStock = budgetStorage.getCumulativeProduction();
      const missing: any[] = [];

      const checkMaterial = (label: string, req: number, stock: number, icon: any) => {
        const totalReq = req * quantity;
        if (stock < totalReq) {
          missing.push({ label, required: totalReq, current: stock, icon });
        }
      };

      checkMaterial("Beton", requirements.beton, cumulativeStock["5_pabrik_semen"] || 0, Layers);
      checkMaterial("Baja", requirements.baja, cumulativeStock["12_tambang_bijih_besi"] || 0, Hammer);
      checkMaterial("Kayu", requirements.kayu, cumulativeStock["6_penggergajian_kayu"] || 0, TreePine);

      const isMoneyShort = currentBalance < totalCost;
      const areMaterialsShort = missing.length > 0;

      if (isMoneyShort && areMaterialsShort) {
        setRequiredAmount(totalCost);
        setMissingMaterialsData(missing);
        setConfirmBuild(null);
        setIsInsufficientBothModalOpen(true);
        return;
      }

      if (isMoneyShort) {
        setRequiredAmount(totalCost);
        setConfirmBuild(null); // Close the initial confirm modal
        setIsInsufficientFundsModalOpen(true);
        return;
      }

      if (areMaterialsShort) {
        setMissingMaterialsData(missing);
        setConfirmBuild(null);
        setIsInsufficientMaterialsModalOpen(true);
        return;
      }

      // 4. Deduct construction cost from budget
      budgetStorage.updateBudget(-totalCost);

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
      console.error("DEBUG: Add to queue error", err);
    }
  };

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Insufficient Funds Modal */}
        <JikaUangKurang 
          isOpen={isInsufficientFundsModalOpen}
          onClose={() => setIsInsufficientFundsModalOpen(false)}
          requiredAmount={requiredAmount}
          currentBalance={budgetStorage.getBudget()}
        />

        {/* Insufficient Material Modal */}
        <JikaMaterialKurang 
          isOpen={isInsufficientMaterialsModalOpen}
          onClose={() => setIsInsufficientMaterialsModalOpen(false)}
          missingMaterials={missingMaterialsData}
        />

        {/* Insufficient Both Modal */}
        <JikaMaterialDanUangKurang 
          isOpen={isInsufficientBothModalOpen}
          onClose={() => setIsInsufficientBothModalOpen(false)}
          requiredAmount={requiredAmount}
          currentBalance={budgetStorage.getBudget()}
          missingMaterials={missingMaterialsData}
        />
        
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
            <NavigasiWaktu />
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
                <p className="text-xl font-black text-white leading-tight">{adjustedTotalPasokan.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-rose-500/10 rounded-xl"><Activity className="h-6 w-6 text-rose-500" /></div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.usage.title}</p>
                <p className="text-xl font-black text-white leading-tight">{adjustedTotalBeban.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>
            <div className={`bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group`}>
              <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>{surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-500" />}</div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.balance.title}</p>
                <p className={`text-xl font-black leading-tight ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>{surplus.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Selection */}
        <div className="px-8 py-2 bg-zinc-900/10 border-b border-zinc-800/30 flex gap-4">
          <button 
            onClick={() => setActiveTab('layanan')}
            className={`px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center gap-2 cursor-pointer ${activeTab === 'layanan' ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.3)]' : 'bg-zinc-900/50 text-zinc-500 hover:bg-zinc-800'}`}
          >
            <Building2 size={16} />
            Layanan Publik
          </button>
          <button 
            onClick={() => setActiveTab('hunian')}
            className={`px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center gap-2 cursor-pointer ${activeTab === 'hunian' ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.3)]' : 'bg-zinc-900/50 text-zinc-500 hover:bg-zinc-800'}`}
          >
            <Home size={16} />
            Hunian & Pemukiman
          </button>

          {/* Multi-Tier Housing Demand Indicators - Horizontal Layout */}
          <div className={`flex items-center gap-8 transition-all duration-500 ${activeTab === 'hunian' ? 'opacity-100 translate-x-0 ml-6 pl-6 border-l border-white/10' : 'opacity-0 scale-95 pointer-events-none w-0 overflow-hidden'}`}>
            <div className="flex flex-row items-end gap-10">
              {/* Subsidi Bar */}
              <div className="flex flex-col gap-1.5 w-[110px]">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider italic outline-none">
                  <span className="text-zinc-500">Subsidi</span>
                  <span className={`${demandSubsidi > 80 ? 'text-rose-500 animate-pulse' : 'text-zinc-400'}`}>{demandSubsidi.toFixed(0)}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-950 rounded-full border border-white/5 overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${demandSubsidi > 80 ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]' : 'bg-emerald-500'}`} style={{ width: `${demandSubsidi}%` }} />
                </div>
              </div>
              
              {/* Apartemen Bar */}
              <div className="flex flex-col gap-1.5 w-[110px]">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider italic outline-none">
                  <span className="text-zinc-500">Apartemen</span>
                  <span className={`${demandApartemen > 80 ? 'text-amber-500 animate-pulse' : 'text-zinc-400'}`}>{demandApartemen.toFixed(0)}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-950 rounded-full border border-white/5 overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${demandApartemen > 80 ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]' : 'bg-emerald-500'}`} style={{ width: `${demandApartemen}%` }} />
                </div>
              </div>
              
              {/* Mansion Bar */}
              <div className="flex flex-col gap-1.5 w-[110px]">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider italic outline-none">
                  <span className="text-zinc-500">Mansion</span>
                  <span className={`${demandMansion > 80 ? 'text-purple-500 animate-pulse' : 'text-zinc-400'}`}>{demandMansion.toFixed(0)}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-950 rounded-full border border-white/5 overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${demandMansion > 80 ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]' : 'bg-emerald-500'}`} style={{ width: `${demandMansion}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          {activeTab === 'layanan' ? (
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
                          kesehatan: "Layanan Kesehatan",
                          olahraga: "Sektor Olahraga",
                          komersial: "Fasilitas Komersial",
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
          ) : (
            <div className="space-y-12">
              {hunianGroups.map((group) => (
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
                          return (
                            <Fragment key={item.key || idx}>
                              <BuildingCard
                                item={item}
                                onBuild={handleBuildRequest}
                                construction={currentConstruction}
                                cumulative={0}
                                isShortage={isHousingShortage}
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
          )}
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
               <div className={`w-full grid ${confirmBuild.consumption ? 'grid-cols-3' : 'grid-cols-2'} gap-3`}>
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Biaya Total</span>
                  <span className="text-[16px] font-black text-white tracking-tight group-hover:scale-110 transition-transform duration-300">
                    {(Number(confirmBuild.cost || confirmBuild.biaya_pembangunan || 0) * quantity).toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Waktu Total</span>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-cyan-500" />
                    <span className="text-[16px] font-black text-white tracking-tight group-hover:scale-110 transition-transform duration-300">{confirmBuild.waktu_pembangunan * quantity} Hari</span>
                  </div>
                </div>
                {confirmBuild.consumption > 0 && (
                  <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Energi Dikonsumsi</span>
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-rose-500" />
                      <span className="text-[16px] font-black text-rose-500 tracking-tight group-hover:scale-110 transition-transform duration-300">{(confirmBuild.consumption * quantity).toLocaleString('id-ID')} MW</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Material Requirements Section */}
              <MaterialRequirement 
                buildingKey={confirmBuild.key} 
                quantity={quantity} 
              />

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

function BuildingCard({ item, onBuild, construction, cumulative, isShortage }: any) {
  const [showDetail, setShowDetail] = useState(false);
  const currentDate = getStoredGameDate().getTime();
  const progress = construction ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate) : null;

  // 6-month workforce occupancy (deterministic)
  const diffTime = Math.abs(currentDate - INITIAL_GAME_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const sixMonthIndex = Math.floor(diffDays / 180);
  const nextUpdateMs = INITIAL_GAME_DATE.getTime() + (sixMonthIndex + 1) * 180 * 24 * 60 * 60 * 1000;
  const nextUpdateDate = new Date(nextUpdateMs);
  const nextDateStr = `${nextUpdateDate.getDate().toString().padStart(2, '0')}-${(nextUpdateDate.getMonth() + 1).toString().padStart(2, '0')}-${nextUpdateDate.getFullYear()}`;
  const seed = (sixMonthIndex + (item.label?.length || 0)) % 100;
  const occupancyPercentage = 0.65 + (seed % 30) / 100;
  const lowongan = item.lowongan_kerja || 0;
  const totalVacancies = lowongan * (item.count || 0);
  const filledVacancies = Math.floor(totalVacancies * occupancyPercentage);

  return (
    <div className={`bg-zinc-900/40 border ${progress ? 'border-cyan-500/30 bg-cyan-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full min-h-[380px]`}>
      {progress && (
        <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000" style={{ width: `${progress.percentage}%` }} />
      )}

      {/* Info overlay */}
      {showDetail && (
        <div className="absolute inset-0 z-50 bg-zinc-950/98 backdrop-blur-md p-6 flex flex-col animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Info size={18} />
              </div>
              <div>
                <h5 className="text-[14px] font-black text-white uppercase tracking-wider italic">Detail Fasilitas</h5>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none mt-0.5">Spesifikasi &amp; Biaya</p>
              </div>
            </div>
            <button onClick={() => setShowDetail(false)} className="p-2.5 hover:bg-zinc-800/80 rounded-xl text-zinc-500 hover:text-white transition-all cursor-pointer border border-transparent hover:border-zinc-700">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto no-scrollbar pr-1">
            <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/30">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] opacity-60">Nama Bangunan</span>
              <h4 className="text-xl font-black text-amber-400 uppercase italic leading-tight tracking-tight">{item.label}</h4>
            </div>

            <div className="grid gap-2">

              {item.konsumsi_listrik > 0 && (
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-rose-500/10 rounded-lg text-rose-500"><Zap size={12} /></div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Beban Energi</span>
                  </div>
                  <span className="text-[14px] font-black text-rose-500">{item.konsumsi_listrik?.toLocaleString('id-ID')} MW</span>
                </div>
              )}

              {lowongan > 0 && (
                <>
                  <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400">
                        <Users2 size={12} />
                      </div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Lowongan</span>
                    </div>
                    <span className="text-[14px] font-black text-blue-400">+{lowongan.toLocaleString('id-ID')} <span className="text-[9px] text-blue-500/50 italic opacity-80">/ UNIT</span></span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-cyan-500/10 rounded-lg text-cyan-500">
                        <Briefcase size={12} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Okupansi Tenaga Kerja</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[14px] font-black text-cyan-400">{filledVacancies.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-400">/ {totalVacancies.toLocaleString('id-ID')}</span></span>
                      <span className="text-[8px] font-black text-cyan-500 uppercase tracking-widest leading-none italic opacity-90">UPDATE: {nextDateStr}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="mt-6 w-full py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-zinc-800 hover:text-white transition-all cursor-pointer active:scale-[0.98] shadow-lg"
          >
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
          <button
            onClick={() => setShowDetail(!showDetail)}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${showDetail ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30'}`}
          >
            <Info size={16} />
          </button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
            {item.deskripsi}
          </div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            Terbangun: {item.count.toLocaleString('id-ID')} Unit {(item.konsumsi_listrik || 0) > 0 && `(${(item.count * (item.konsumsi_listrik || 0)).toLocaleString('id-ID')} MW)`}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex-1 flex flex-col relative z-10 mt-1">
        <h4 className="text-[17px] font-black text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors uppercase italic leading-tight mb-3">
          {item.label}
        </h4>

        <div className="flex flex-col gap-2.5 flex-1">

          {((item.konsumsi_listrik ?? 0) >= 0) && (
            <>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-rose-500/10 rounded-lg">
                  <Zap size={12} className="text-rose-500/90" />
                </div>
                <span className="text-[12px] font-bold text-rose-500/80">
                  Konsumsi: {Math.max((item.konsumsi_listrik || 0), 1).toLocaleString('id-ID')} MW/unit
                </span>
              </div>
              <div className="flex items-center gap-2.5 ml-1 border-l-2 border-rose-500/10 pl-3">
                <div className="p-1.5 bg-rose-500/5 rounded-lg">
                  <Activity size={12} className="text-rose-400/70" />
                </div>
                <span className="text-[11px] font-bold text-rose-400/70 uppercase">
                  Total Konsumsi Listrik: {(item.count * Math.max((item.konsumsi_listrik || 0), 1)).toLocaleString('id-ID')} MW
                </span>
              </div>
            </>
          )}

          {lowongan > 0 && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-blue-500/10 rounded-lg">
                <Users2 size={12} className="text-blue-400" />
              </div>
              <span className="text-[12px] font-bold text-blue-400/80">
                Lowongan: {lowongan.toLocaleString('id-ID')} Jiwa/unit
              </span>
            </div>
          )}

          {item.capacity > 0 && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-indigo-500/10 rounded-lg">
                <Users2 size={12} className="text-indigo-400" />
              </div>
              <span className="text-[12px] font-bold text-indigo-400/80">
                Kapasitas: {item.capacity.toLocaleString('id-ID')} Jiwa/unit
              </span>
            </div>
          )}

          {!progress && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-zinc-800/50 rounded-lg">
                <Clock size={12} className="text-zinc-500" />
              </div>
              <span className="text-[11px] font-bold text-zinc-500 italic">Waktu: {item.buildTime} Hari</span>
            </div>
          )}
        </div>

        {/* Total Fasilitas section */}
        <div className="mt-4 pt-4 border-t border-zinc-800/30 flex flex-col gap-1.5 bg-zinc-950/30 rounded-2xl p-4 border border-zinc-800/20 shadow-inner">
          <div className="flex justify-between items-baseline gap-2">
            <span className={`text-[11px] font-black ${item.groupId === 'hunian' && isShortage ? 'text-rose-500' : 'text-cyan-500/80'} uppercase tracking-[0.15em] italic`}>
              TOTAL FASILITAS:
            </span>
            <span className={`text-[16px] font-black ${item.groupId === 'hunian' && isShortage ? 'text-rose-400 animate-pulse' : 'text-cyan-400'} tracking-tight`}>
              {(item.count || 0).toLocaleString('id-ID')} <span className={`text-[10px] ${item.groupId === 'hunian' && isShortage ? 'text-rose-500/50' : 'text-cyan-500/50'} font-normal uppercase italic ml-1`}>Unit</span>
            </span>
          </div>
          {item.groupId === 'hunian' && isShortage && (
             <div className="flex items-center gap-1.5 mt-1 animate-in slide-in-from-top-1">
                <AlertTriangle size={10} className="text-rose-500" />
                <span className="text-[10px] font-black text-rose-500/80 uppercase italic tracking-tighter">Kapasitas Nasional Kurang</span>
             </div>
          )}
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
              <div
                className={`h-full transition-all duration-1000 ${progress.colorClass} rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)]`}
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[9px] font-bold text-zinc-500 uppercase tracking-tighter italic opacity-70">
              <span className="flex items-center gap-1"><Clock size={10} /> ESTIMASI:</span>
              <span className="text-zinc-400">{formatGameDate(new Date(construction.endDate))}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">Biaya Bangun</span>
              <span className="text-sm font-black text-zinc-400 tracking-tight mt-1">{item.biaya_pembangunan?.toLocaleString('id-ID')}</span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); onBuild(item); }}
              className="flex-1 py-3.5 rounded-2xl bg-cyan-600 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(8,145,178,0.4)] transition-all cursor-pointer active:scale-95 border border-cyan-400/20"
            >
              Bangun
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
