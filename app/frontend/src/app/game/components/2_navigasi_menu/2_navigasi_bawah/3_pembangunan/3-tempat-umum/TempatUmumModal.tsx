"use client"

import { useState, useEffect, Fragment } from "react";
import { X, Wrench, Zap, Pickaxe, Factory, Construction, Store, Beef, Wheat, Radiation, Coins, Flame, Droplets, FlaskConical, Shovel, Container, Car, Bike, Gem, Battery, Box, Cpu, Mountain, Waves, TreePine, Croissant, Soup, Shell, Milk, Sprout, Apple, Bean, Coffee, Activity, TrendingUp, TrendingDown, Clock, Loader2, RefreshCw, Eye, EyeOff, Pill, Utensils, Bird, Fish, Info, Building, Archive, Layers, Hammer, Microscope, Search, Building2, Library, Trophy, Gavel, Scale, Radar, Settings, Target, ShieldAlert, HeartPulse, Stethoscope, Briefcase, Users, Users2, Warehouse, Ship, Map, Wifi, Plane, Bus, ShieldCheck, Home, GraduationCap, Landmark, Crosshair, TrainFront, HardHat, Siren, Leaf, Truck, School, Lightbulb, Dumbbell, Flag, Gamepad2, Clapperboard, Theater, AlertTriangle } from "lucide-react"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, KAPASITAS_LISTRIK_METADATA, KONSUMSI_EKSTRAKSI, KONSUMSI_PRODUKSI, KONSUMSI_PERTAHANAN, KONSUMSI_STRATEGIC, KONSUMSI_SOSIAL, KONSUMSI_TRANSPORTASI, DASHBOARD_LABELS, KONSUMSI_PANGAN } from "@/app/database/data/semua_fitur_negara"
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/negara/index";

import { infrastrukturRate, sosialRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum";
import { mineralKritisRate, manufakturRate, peternakanRate, agrikulturRate, perikananRate, olahanPanganRate, farmasiRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi";
import { pabrikMiliterRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import JikaUangKurang from "../jika_uang_kurang";
import { getBuildingRequirement, MaterialRequirement } from "../1-produksi/MaterialRequirement";
import { REVENUE_RATES, MAINTENANCE_RATES, getTempatUmumRevenueBreakdown, getTempatUmumMaintenanceBreakdown } from "./logic/TempatUmumRevenueLogic";
import { getNationalHealthImpact } from "@/app/game/data/layanan_publik/kesehatan/healthLogic";
import { getNationalSecurityImpact } from "@/app/game/data/layanan_publik/keamanan/securityLogic";

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
  const [missingMaterialsData, setMissingMaterialsData] = useState<any[]>([]);
  const [requiredAmount, setRequiredAmount] = useState(0);
  const [population, setPopulation] = useState(() => populationStorage.getPopulation());

  useEffect(() => {
    const handleUpdate = () => {
      setPopulation(populationStorage.getPopulation());
    };
    window.addEventListener("population_updated", handleUpdate);
    return () => window.removeEventListener("population_updated", handleUpdate);
  }, []);

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

    if (KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA]) {
      const dataKey = KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_listrik as any)[dataKey] = ((currentDataWithDeltas.sektor_listrik as any)[dataKey] || 0) + deltaValue;
    }
    else if ((mineralKritisRate as any)[key]) {
      const dataKey = (mineralKritisRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] = ((currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] || 0) + deltaValue;
    }
    else if ((manufakturRate as any)[key]) {
      const dataKey = (manufakturRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_manufaktur as any)[dataKey] = ((currentDataWithDeltas.sektor_manufaktur as any)[dataKey] || 0) + deltaValue;
    }
    else if ((peternakanRate as any)[key]) {
      const dataKey = (peternakanRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_peternakan as any)[dataKey] = ((currentDataWithDeltas.sektor_peternakan as any)[dataKey] || 0) + deltaValue;
    }
    else if ((agrikulturRate as any)[key]) {
      const dataKey = (agrikulturRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_agrikultur as any)[dataKey] = ((currentDataWithDeltas.sektor_agrikultur as any)[dataKey] || 0) + deltaValue;
    }
    else if ((perikananRate as any)[key]) {
      const dataKey = (perikananRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_perikanan as any)[dataKey] = ((currentDataWithDeltas.sektor_perikanan as any)[dataKey] || 0) + deltaValue;
    }
    else if ((olahanPanganRate as any)[key]) {
      const dataKey = (olahanPanganRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_olahan_pangan as any)[dataKey] = ((currentDataWithDeltas.sektor_olahan_pangan as any)[dataKey] || 0) + deltaValue;
    }
    else if ((farmasiRate as any)[key]) {
      const dataKey = (farmasiRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_farmasi as any)[dataKey] = ((currentDataWithDeltas.sektor_farmasi as any)[dataKey] || 0) + deltaValue;
    }
    else if (infrastrukturRate[key]) {
      const dataKey = (infrastrukturRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.infrastruktur as any)[dataKey] = ((currentDataWithDeltas.infrastruktur as any)[dataKey] || 0) + deltaValue;
    }
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
    else if (pabrikMiliterRate[key as keyof typeof pabrikMiliterRate]) {
      const dataKey = pabrikMiliterRate[key as keyof typeof pabrikMiliterRate].dataKey;
      if (dataKey) (currentDataWithDeltas.pabrik_militer as any)[dataKey] = ((currentDataWithDeltas.pabrik_militer as any)[dataKey] || 0) + deltaValue;
    }
  });

  const adjustedTotalPasokan = hitungTotalKapasitas(currentDataWithDeltas.sektor_listrik);
  const adjustedTotalBeban = hitungTotalKonsumsiNasional(currentDataWithDeltas);
  const surplus = adjustedTotalPasokan - adjustedTotalBeban;

  const publicGroups = [
    {
      id: "infrastruktur",
      title: "1. Sektor Infrastruktur & Logistik (8 jenis)",
      icon: Ship,
      color: "text-cyan-400",
      items: [
        { ...infrastrukturRate["1_jalur_sepeda"], key: "1_jalur_sepeda", groupId: "infra_darat", label: "Jalur Sepeda", icon: Bike, desc: "Logistik", efek: "+0.05% Kepuasan Rakyat & +0.01% Kec. Riset", tarif: 1, unit: "Unit", cost: infrastrukturRate["1_jalur_sepeda"].biaya_pembangunan, buildTime: infrastrukturRate["1_jalur_sepeda"].waktu_pembangunan, count: (currentData.infrastruktur?.jalur_sepeda || 0) + ((buildingDeltas["1_jalur_sepeda"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.jalur_sepeda },
        { ...infrastrukturRate["2_jalan_tol"], key: "2_jalan_tol", groupId: "infra_darat", label: "Jalan Raya", icon: Map, desc: "Infrastruktur", efek: "+0.08% Kepuasan Rakyat & +0.02% Kec. Riset", tarif: 1, unit: "Unit", cost: infrastrukturRate["2_jalan_tol"].biaya_pembangunan, buildTime: infrastrukturRate["2_jalan_tol"].waktu_pembangunan, count: (currentData.infrastruktur?.jalan_raya || 0) + ((buildingDeltas["2_jalan_tol"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.jalan_raya },
        { ...infrastrukturRate["3_terminal_bus"], key: "3_terminal_bus", groupId: "infra_darat", label: "Terminal Bus", icon: Bus, desc: "Transportasi", efek: "+0.10% Kepuasan Rakyat & +0.05% Kec. Riset", tarif: 1, unit: "Unit", cost: infrastrukturRate["3_terminal_bus"].biaya_pembangunan, buildTime: infrastrukturRate["3_terminal_bus"].waktu_pembangunan, count: (currentData.infrastruktur?.terminal_bus || 0) + ((buildingDeltas["3_terminal_bus"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.terminal_bus },
        { ...infrastrukturRate["4_jalur_kereta"], key: "4_jalur_kereta", groupId: "perkeretaapian", label: "Stasiun Kereta Api", icon: TrainFront, desc: "Logistik", efek: "+0.12% Kepuasan Rakyat & +0.10% Kec. Riset", tarif: 1, unit: "Unit", cost: infrastrukturRate["4_jalur_kereta"].biaya_pembangunan, buildTime: infrastrukturRate["4_jalur_kereta"].waktu_pembangunan, count: (currentData.infrastruktur?.stasiun_kereta_api || 0) + ((buildingDeltas["4_jalur_kereta"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.stasiun_kereta_api },
        { ...infrastrukturRate["5_kereta_bawah_tanah"], key: "5_kereta_bawah_tanah", groupId: "perkeretaapian", label: "Kereta Bawah Tanah", icon: TrainFront, desc: "Transportasi", efek: "+0.15% Kepuasan Rakyat & +0.15% Kec. Riset", tarif: 1, unit: "Unit", cost: infrastrukturRate["5_kereta_bawah_tanah"].biaya_pembangunan, buildTime: infrastrukturRate["5_kereta_bawah_tanah"].waktu_pembangunan, count: (currentData.infrastruktur?.kereta_bawah_tanah || 0) + ((buildingDeltas["5_kereta_bawah_tanah"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.kereta_bawah_tanah },
        { ...infrastrukturRate["6_pelabuhan_laut"], key: "6_pelabuhan_laut", groupId: "maritim_udara", label: "Pelabuhan", icon: Ship, desc: "Maritim", efek: "+0.18% Kepuasan Rakyat & +0.20% Kec. Riset", tarif: 1, unit: "Unit", cost: infrastrukturRate["6_pelabuhan_laut"].biaya_pembangunan, buildTime: infrastrukturRate["6_pelabuhan_laut"].waktu_pembangunan, count: (currentData.infrastruktur?.pelabuhan || 0) + ((buildingDeltas["6_pelabuhan_laut"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.pelabuhan },
        { ...infrastrukturRate["7_bandara"], key: "7_bandara", groupId: "maritim_udara", label: "Bandara", icon: Plane, desc: "Udara", efek: "+0.20% Kepuasan Rakyat & +0.30% Kec. Riset", tarif: 1, unit: "Unit", cost: infrastrukturRate["7_bandara"].biaya_pembangunan, buildTime: infrastrukturRate["7_bandara"].waktu_pembangunan, count: (currentData.infrastruktur?.bandara || 0) + ((buildingDeltas["7_bandara"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.bandara },
        { ...infrastrukturRate["8_helipad"], key: "8_helipad", groupId: "maritim_udara", label: "Helipad", icon: Plane, desc: "Udara", efek: "+0.05% Kepuasan Rakyat & +0.10% Kec. Riset", tarif: 1, unit: "Unit", cost: infrastrukturRate["8_helipad"].biaya_pembangunan, buildTime: infrastrukturRate["8_helipad"].waktu_pembangunan, count: (currentData.infrastruktur?.helipad || 0) + ((buildingDeltas["8_helipad"] as number) || 0), consumption: KONSUMSI_TRANSPORTASI.helipad },
      ]
    },
    {
      id: "pendidikan_riset",
      title: "2. Sektor Pendidikan & Riset (10 jenis)",
      icon: GraduationCap,
      color: "text-indigo-400",
      items: [
        { ...sosialRate["1_prasekolah"], key: "1_prasekolah", groupId: "pendidikan", label: "Prasekolah (PAUD)", icon: Building2, desc: "Pendidikan", efek: "+0.01% Kecepatan Riset Nasional", tarif: 1, cost: sosialRate["1_prasekolah"].biaya_pembangunan, buildTime: sosialRate["1_prasekolah"].waktu_pembangunan, count: (currentData.pendidikan?.prasekolah || 0) + ((buildingDeltas["1_prasekolah"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.prasekolah },
        { ...sosialRate["2_dasar"], key: "2_dasar", groupId: "pendidikan", label: "Pendidikan Dasar", icon: School, desc: "Pendidikan", efek: "+0.03% Kecepatan Riset Nasional", tarif: 1, cost: sosialRate["2_dasar"].biaya_pembangunan, buildTime: sosialRate["2_dasar"].waktu_pembangunan, count: (currentData.pendidikan?.dasar || 0) + ((buildingDeltas["2_dasar"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.dasar },
        { ...sosialRate["3_menengah"], key: "3_menengah", groupId: "pendidikan", label: "Sekolah Menengah", icon: Library, desc: "Pendidikan", efek: "+0.05% Kecepatan Riset Nasional", tarif: 1, cost: sosialRate["3_menengah"].biaya_pembangunan, buildTime: sosialRate["3_menengah"].waktu_pembangunan, count: (currentData.pendidikan?.menengah || 0) + ((buildingDeltas["3_menengah"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.menengah },
        { ...sosialRate["4_lanjutan"], key: "4_lanjutan", groupId: "pendidikan", label: "Sekolah Lanjutan", icon: GraduationCap, desc: "Pendidikan", efek: "+0.07% Kecepatan Riset Nasional", tarif: 1, cost: sosialRate["4_lanjutan"].biaya_pembangunan, buildTime: sosialRate["4_lanjutan"].waktu_pembangunan, count: (currentData.pendidikan?.lanjutan || 0) + ((buildingDeltas["4_lanjutan"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.lanjutan },
        { ...sosialRate["5_universitas"], key: "5_universitas", groupId: "pendidikan", label: "Universitas", icon: Landmark, desc: "Pendidikan Tinggi", efek: "+0.09% Kecepatan Riset Nasional", tarif: 1, cost: sosialRate["5_universitas"].biaya_pembangunan, buildTime: sosialRate["5_universitas"].waktu_pembangunan, count: (currentData.pendidikan?.universitas || 0) + ((buildingDeltas["5_universitas"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.universitas },
        { ...sosialRate["6_lembaga_pendidikan"], key: "6_lembaga_pendidikan", groupId: "pendidikan", label: "Lembaga Pendidikan", icon: Briefcase, desc: "Vokasional", efek: "+0.12% Kecepatan Riset Nasional", tarif: 1, cost: sosialRate["6_lembaga_pendidikan"].biaya_pembangunan, buildTime: sosialRate["6_lembaga_pendidikan"].waktu_pembangunan, count: (currentData.pendidikan?.lembaga_pendidikan || 0) + ((buildingDeltas["6_lembaga_pendidikan"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.lembaga_pendidikan },
        { ...sosialRate["7_laboratorium"], key: "7_laboratorium", groupId: "pendidikan", label: "Laboratorium", icon: Microscope, desc: "Riset", efek: "+0.15% Kecepatan Riset Nasional", tarif: 1, cost: sosialRate["7_laboratorium"].biaya_pembangunan, buildTime: sosialRate["7_laboratorium"].waktu_pembangunan, count: (currentData.pendidikan?.laboratorium || 0) + ((buildingDeltas["7_laboratorium"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.laboratorium },
        { ...sosialRate["8_observatorium"], key: "8_observatorium", groupId: "pendidikan", label: "Observatorium", icon: Eye, desc: "Astronomi", efek: "+0.17% Kecepatan Riset Nasional", tarif: 1, cost: sosialRate["8_observatorium"].biaya_pembangunan, buildTime: sosialRate["8_observatorium"].waktu_pembangunan, count: (currentData.pendidikan?.observatorium || 0) + ((buildingDeltas["8_observatorium"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.observatorium },
        { ...sosialRate["9_pusat_penelitian"], key: "9_pusat_penelitian", groupId: "pendidikan", label: "Pusat Penelitian", icon: Search, desc: "Riset Strategis", efek: "+0.19% Kecepatan Riset Nasional", tarif: 1, cost: sosialRate["9_pusat_penelitian"].biaya_pembangunan, buildTime: sosialRate["9_pusat_penelitian"].waktu_pembangunan, count: (currentData.pendidikan?.pusat_penelitian || 0) + ((buildingDeltas["9_pusat_penelitian"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.pusat_penelitian },
        { ...sosialRate["10_pusat_pengembangan"], key: "10_pusat_pengembangan", groupId: "pendidikan", label: "Pusat Pengembangan", icon: Lightbulb, desc: "Inovasi", efek: "+0.21% Kecepatan Riset Nasional", tarif: 1, cost: sosialRate["10_pusat_pengembangan"].biaya_pembangunan, buildTime: sosialRate["10_pusat_pengembangan"].waktu_pembangunan, count: (currentData.pendidikan?.pusat_pengembangan || 0) + ((buildingDeltas["10_pusat_pengembangan"] as number) || 0), consumption: KONSUMSI_SOSIAL.pendidikan.pusat_pengembangan },
      ]
    },
    {
      id: "kesehatan",
      title: "3. Sektor Layanan Kesehatan (3 jenis)",
      icon: HeartPulse,
      color: "text-rose-400",
      items: [
        { ...sosialRate["11_rumah_sakit_besar"], key: "11_rumah_sakit_besar", groupId: "kesehatan", label: "RS Besar", icon: Building2, desc: "Kesehatan", tarif: 1, cost: sosialRate["11_rumah_sakit_besar"].biaya_pembangunan, buildTime: sosialRate["11_rumah_sakit_besar"].waktu_pembangunan, count: (currentData.kesehatan?.rumah_sakit_besar || 0) + ((buildingDeltas["11_rumah_sakit_besar"] as number) || 0), consumption: KONSUMSI_SOSIAL.kesehatan.rumah_sakit_besar },
        { ...sosialRate["12_rumah_sakit_kecil"], key: "12_rumah_sakit_kecil", groupId: "kesehatan", label: "RS Kecil", icon: Building2, desc: "Kesehatan", tarif: 1, cost: sosialRate["12_rumah_sakit_kecil"].biaya_pembangunan, buildTime: sosialRate["12_rumah_sakit_kecil"].waktu_pembangunan, count: (currentData.kesehatan?.rumah_sakit_kecil || 0) + ((buildingDeltas["12_rumah_sakit_kecil"] as number) || 0), consumption: KONSUMSI_SOSIAL.kesehatan.rumah_sakit_kecil },
        { ...sosialRate["13_pusat_diagnostik"], key: "13_pusat_diagnostik", groupId: "kesehatan", label: "Diagnostik", icon: Search, desc: "Kesehatan", tarif: 1, cost: sosialRate["13_pusat_diagnostik"].biaya_pembangunan, buildTime: sosialRate["13_pusat_diagnostik"].waktu_pembangunan, count: (currentData.kesehatan?.pusat_diagnostik || 0) + ((buildingDeltas["13_pusat_diagnostik"] as number) || 0), consumption: KONSUMSI_SOSIAL.kesehatan.pusat_diagnostik },
      ]
    },
    {
      id: "hukum_keamanan",
      title: "4. Sektor Hukum & Keamanan (2 jenis)",
      icon: Gavel,
      color: "text-slate-400",
      items: [
        { ...sosialRate["14_kejaksaan_court"], key: "14_kejaksaan_court", groupId: "hukum", label: "Kejaksaan / Court", icon: Gavel, desc: "Hukum", tarif: 1, cost: sosialRate["14_kejaksaan_court"].biaya_pembangunan, buildTime: sosialRate["14_kejaksaan_court"].waktu_pembangunan, count: ((currentData.hukum?.kejaksaan || 0) + (currentData.hukum?.pengadilan || 0)) + ((buildingDeltas["14_kejaksaan_court"] as number) || 0), consumption: (KONSUMSI_SOSIAL.hukum.kejaksaan + KONSUMSI_SOSIAL.hukum.pengadilan) / 2 },
        { ...sosialRate["15_legal_aid"], key: "15_legal_aid", groupId: "hukum", label: "Bantuan Hukum", icon: Scale, desc: "Hukum", tarif: 1, cost: sosialRate["15_legal_aid"].biaya_pembangunan, buildTime: sosialRate["15_legal_aid"].waktu_pembangunan, count: (currentData.hukum?.pusat_bantuan_hukum || 0) + ((buildingDeltas["15_legal_aid"] as number) || 0), consumption: KONSUMSI_SOSIAL.hukum.pusat_bantuan_hukum },
      ]
    },
    {
      id: "olahraga",
      title: "5. Sektor Olahraga & Rekreasi (7 jenis)",
      icon: Trophy,
      color: "text-orange-400",
      items: [
        { ...sosialRate["16_kolam_renang"], key: "16_kolam_renang", groupId: "olahraga", label: "Kolam Renang", icon: Waves, desc: "Olahraga", tarif: 1, cost: sosialRate["16_kolam_renang"].biaya_pembangunan, buildTime: sosialRate["16_kolam_renang"].waktu_pembangunan, count: (currentData.sektor_olahraga?.kolam_renang || 0) + ((buildingDeltas["16_kolam_renang"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.kolam_renang },
        { ...sosialRate["17_sirkuit_balap"], key: "17_sirkuit_balap", groupId: "olahraga", label: "Sirkuit Balap", icon: Flame, desc: "Olahraga", tarif: 1, cost: sosialRate["17_sirkuit_balap"].biaya_pembangunan, buildTime: sosialRate["17_sirkuit_balap"].waktu_pembangunan, count: (currentData.sektor_olahraga?.sirkuit_balap || 0) + ((buildingDeltas["17_sirkuit_balap"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.sirkuit_balap },
        { ...sosialRate["18_stadium_int"], key: "18_stadium_int", groupId: "olahraga", label: "Stadion (Nas/Int)", icon: Trophy, desc: "Olahraga", tarif: 1, cost: sosialRate["18_stadium_int"].biaya_pembangunan, buildTime: sosialRate["18_stadium_int"].waktu_pembangunan, count: ((currentData.sektor_olahraga?.stadion || 0) + (currentData.sektor_olahraga?.stadion_internasional || 0)) + ((buildingDeltas["18_stadium_int"] as number) || 0), consumption: (KONSUMSI_SOSIAL.olahraga.stadion + KONSUMSI_SOSIAL.olahraga.stadion_internasional) / 2 },
        { ...sosialRate["19_gym_center"], key: "19_gym_center", groupId: "olahraga", label: "Pusat Kebugaran", icon: Dumbbell, desc: "Olahraga", tarif: 1, cost: sosialRate["19_gym_center"].biaya_pembangunan, buildTime: sosialRate["19_gym_center"].waktu_pembangunan, count: (currentData.sektor_olahraga?.gym || 0) + ((buildingDeltas["19_gym_center"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.gym },
        { ...sosialRate["20_lapangan_golf"], key: "20_lapangan_golf", groupId: "olahraga", label: "Lapangan Golf", icon: Flag, desc: "Olahraga", tarif: 1, cost: sosialRate["20_lapangan_golf"].biaya_pembangunan, buildTime: sosialRate["20_lapangan_golf"].waktu_pembangunan, count: (currentData.sektor_olahraga?.golf || 0) + ((buildingDeltas["20_lapangan_golf"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.golf },
        { ...sosialRate["21_esports_arena"], key: "21_esports_arena", groupId: "olahraga", label: "Arena E-Sports", icon: Gamepad2, desc: "Olahraga", tarif: 1, cost: sosialRate["21_esports_arena"].biaya_pembangunan, buildTime: sosialRate["21_esports_arena"].waktu_pembangunan, count: (currentData.sektor_olahraga?.esports || 0) + ((buildingDeltas["21_esports_arena"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.esports },
        { ...sosialRate["22_gokart_circuit"], key: "22_gokart_circuit", groupId: "olahraga", label: "Sirkuit Gokart", icon: Flame, desc: "Olahraga", tarif: 1, cost: sosialRate["22_gokart_circuit"].biaya_pembangunan, buildTime: sosialRate["22_gokart_circuit"].waktu_pembangunan, count: (currentData.sektor_olahraga?.gokart || 0) + ((buildingDeltas["22_gokart_circuit"] as number) || 0), consumption: KONSUMSI_SOSIAL.olahraga.gokart },
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
        { ...sosialRate["26_bioskop"], key: "26_bioskop", groupId: "hiburan", label: "Bioskop", icon: Clapperboard, desc: "Hiburan", tarif: 1, cost: sosialRate["26_bioskop"].biaya_pembangunan, buildTime: sosialRate["26_bioskop"].waktu_pembangunan, count: (currentData.sektor_hiburan?.bioskop || 0) + ((buildingDeltas["26_bioskop"] as number) || 0), consumption: KONSUMSI_SOSIAL.hiburan.bioskop },
        { ...sosialRate["27_gedung_teater"], key: "27_gedung_teater", groupId: "hiburan", label: "Gedung Teater", icon: Theater, desc: "Hiburan", tarif: 1, cost: sosialRate["27_gedung_teater"].biaya_pembangunan, buildTime: sosialRate["27_gedung_teater"].waktu_pembangunan, count: (currentData.sektor_hiburan?.teater || 0) + ((buildingDeltas["27_gedung_teater"] as number) || 0), consumption: KONSUMSI_SOSIAL.hiburan.teater },
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
      const unitCost = Number(confirmBuild.biaya_pembangunan || 0);
      const buildQuantity = Number(quantity || 1);
      const totalCost = unitCost * buildQuantity;
      const currentBalance = Number(budgetStorage.getBudget() || 0);
      const isMoneyShort = currentBalance < totalCost;

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

      if (isMoneyShort || missing.length > 0) {
        setRequiredAmount(totalCost);
        setMissingMaterialsData(missing);
        setConfirmBuild(null);
        setIsInsufficientFundsModalOpen(true);
        return;
      }

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
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950/90 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        <JikaUangKurang
          isOpen={isInsufficientFundsModalOpen}
          onClose={() => setIsInsufficientFundsModalOpen(false)}
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
            <button onClick={() => setShowQueue(true)} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group flex items-center gap-2 relative shadow-lg active:scale-95">
              <Clock className="h-6 w-6 text-cyan-500 transition-transform" />
              {activeConstructions.length > 0 && <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-zinc-950 shadow-lg animate-in zoom-in">{activeConstructions.length}</span>}
            </button>
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-lg active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Electricity Summary */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
              <div className="p-3 bg-cyan-500/10 rounded-xl"><Zap className="h-6 w-6 text-cyan-500" /></div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.supply.title}</p>
                <p className="text-xl font-black text-white leading-tight">{adjustedTotalPasokan.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
              <div className="p-3 bg-rose-500/10 rounded-xl"><Activity className="h-6 w-6 text-rose-500" /></div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.usage.title}</p>
                <p className="text-xl font-black text-white leading-tight">{adjustedTotalBeban.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>
            <div className={`bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group shadow-sm`}>
              <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>{surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-500" />}</div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.balance.title}</p>
                <p className={`text-xl font-black leading-tight ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>{surplus.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="space-y-12">
            {publicGroups.map((group) => (
              <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1 font-black">
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}><group.icon className={`h-4 w-4 ${group.color}`} /></div>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-xl font-black text-white uppercase tracking-widest italic flex items-center gap-3">
                      {group.title}
                      <span className="text-cyan-400 font-black lowercase italic text-xs tracking-normal bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">({group.items.length} Jenis)</span>
                    </h3>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50 hidden lg:block"></div>
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
        </div>

        {/* Confirmation Modal Overlay */}
        {confirmBuild && (
          <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[40px] shadow-2xl max-w-4xl w-full mx-4 flex flex-col gap-6 animate-in zoom-in-95 max-h-[90vh]">
              <div className="flex items-center gap-6 shrink-0 border-b border-zinc-800/50 pb-6">
                <div className="p-4 bg-cyan-500/10 rounded-3xl border border-cyan-500/20 shadow-lg font-black italic">
                  <confirmBuild.icon size={40} className="text-cyan-500" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none">Konfirmasi Bangun?</h3>
                  <p className="text-zinc-400 text-sm font-medium mt-2">Membangun <span className="text-white font-black underline">{confirmBuild.label}</span> untuk fasilitas publik.</p>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto no-scrollbar py-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group relative">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Biaya Total</span>
                        <span className="text-xl font-black text-amber-500 tracking-tight">{(Number(confirmBuild.biaya_pembangunan || 0) * quantity).toLocaleString('id-ID')}</span>
                      </div>
                      <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Waktu Satuan</span>
                        <span className="text-xl font-black text-white tracking-tight">{(confirmBuild.waktu_pembangunan).toLocaleString('id-ID')} Hari</span>
                      </div>
                    </div>
                    <div className="bg-zinc-950/40 border border-zinc-800 rounded-2xl p-5 text-center shadow-inner">
                      <span className="text-[10px] font-bold text-cyan-500/60 uppercase tracking-widest italic">Estimasi Penyelesaian</span>
                      <p className="text-lg font-black text-white mt-1 uppercase italic tracking-wider">
                        {formatGameDate(addDays(getStoredGameDate(), confirmBuild.waktu_pembangunan * quantity))}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <MaterialRequirement buildingKey={confirmBuild.key} quantity={quantity} />
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-6 bg-zinc-950/80 border border-zinc-800 p-2 rounded-2xl shadow-inner">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 text-xl font-black text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-lg active:scale-95">-</button>
                        <div className="flex flex-col items-center min-w-[90px]"><span className="text-3xl font-black text-white tracking-tighter">{quantity.toLocaleString('id-ID')}</span><span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter italic leading-none">Unit Strategis</span></div>
                        <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 text-xl font-black text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-lg active:scale-95">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 shrink-0 mt-2 border-t border-zinc-800/50 pt-6">
                <button onClick={() => setConfirmBuild(null)} className="flex-1 px-8 py-5 rounded-3xl bg-zinc-800/50 text-zinc-400 font-black text-xs uppercase tracking-widest border border-zinc-700 hover:bg-zinc-800 transition-all cursor-pointer">Batal</button>
                <button onClick={handleConfirmBuild} className="flex-[2] px-8 py-5 rounded-3xl bg-cyan-600 text-white font-black text-sm uppercase tracking-widest shadow-lg hover:bg-cyan-500 transition-all cursor-pointer active:scale-95">Konfirmasi & Bangun</button>
              </div>
            </div>
          </div>
        )}

        {/* Queue Sidebar */}
        <div className={`absolute inset-0 z-[90] flex items-center justify-end transition-colors duration-300 ${showQueue ? 'bg-black/20 pointer-events-auto' : 'bg-transparent pointer-events-none'}`} onClick={() => setShowQueue(false)}>
          <div className={`bg-zinc-950/95 border-l border-zinc-800 w-full max-w-sm h-full shadow-2xl flex flex-col transition-transform duration-500 ${showQueue ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center"><h3 className="text-lg font-black text-white italic uppercase tracking-widest leading-none">Antrean Pembangunan</h3><button onClick={() => setShowQueue(false)}><X className="h-5 w-5 text-zinc-400" /></button></div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
              {activeConstructions.length === 0 ? <p className="text-zinc-500 text-center font-bold uppercase tracking-widest mt-10 italic">Antrean Kosong</p> :
                activeConstructions.map((item, idx) => {
                  const progress = calculateConstructionProgress(item.startDate, item.endDate, getStoredGameDate().getTime());
                  if (!progress) return null;
                  return (
                    <div key={item.id || idx} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden shadow-md">
                      <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5" style={{ width: `${progress.percentage}%` }} />
                      <div className="flex justify-between items-center relative z-10"><h4 className="text-sm font-black text-white">{item.label}</h4><span className="text-[10px] font-bold text-cyan-400">{progress.percentage}%</span></div>
                      <div className="h-1.5 w-full bg-zinc-950 rounded-full mt-2 overflow-hidden border border-zinc-800/50"><div className={`h-full ${progress.colorClass} rounded-full`} style={{ width: `${progress.percentage}%` }} /></div>
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
  return (
    <div className={`bg-zinc-900/40 border ${progress ? 'border-cyan-500/30 bg-cyan-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full min-h-[380px] shadow-lg`}>
      {progress && (
        <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000" style={{ width: `${progress.percentage}%` }} />
      )}
      {showDetail && (
        <div className="absolute inset-0 z-50 bg-zinc-950/98 backdrop-blur-md p-6 flex flex-col animate-in fade-in zoom-in-95 duration-200 border border-zinc-800 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-500 shadow-lg"><Info size={18} /></div>
              <div>
                <h5 className="text-[14px] font-black text-white uppercase tracking-wider italic">Detail Fasilitas</h5>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">Spesifikasi &amp; Dampak</p>
              </div>
            </div>
            <button onClick={() => setShowDetail(false)} className="p-2.5 hover:bg-zinc-800 rounded-xl text-zinc-500 transition-all cursor-pointer"><X size={20} /></button>
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/30 shadow-inner">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Katalog Nasional</span>
              <h4 className="text-xl font-black text-amber-400 uppercase italic tracking-tighter leading-tight">{item.label}</h4>
            </div>
            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 shadow-lg">
              <p className="text-sm font-black text-white italic leading-relaxed">{item.efek || "Fasilitas Publik Strategis"}</p>
            </div>
            <div className="grid gap-2">
              {item.konsumsi_listrik > 0 && (
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 group/row hover:border-pink-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-500/10 rounded-xl text-pink-500 border border-pink-500/20"><Zap size={14} /></div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Beban Energi</span>
                  </div>
                  <span className="text-[15px] font-black text-pink-500 tabular-nums">{item.konsumsi_listrik?.toLocaleString('id-ID')} MW</span>
                </div>
              )}
            </div>
          </div>
          <button onClick={() => setShowDetail(false)} className="mt-6 w-full py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-zinc-800 transition-all cursor-pointer shadow-lg active:scale-95">Kembali</button>
        </div>
      )}
      <div className="flex items-start justify-between relative z-10">
        <div className="flex gap-2">
          <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform">
            <item.icon className="h-5 w-5 text-cyan-500" />
          </div>
          <button onClick={() => setShowDetail(!showDetail)} className="p-2.5 rounded-xl border bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 cursor-pointer transition-all shadow-sm"><Info size={16} /></button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 uppercase tracking-tight italic">{item.desc || "PUBLIK"}</div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter">Terbangun: {item.count.toLocaleString('id-ID')} Unit</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col relative z-10 mt-1">
        <h4 className="text-[17px] font-black text-zinc-100 group-hover:text-amber-400 transition-colors uppercase italic mb-3 leading-tight">{item.label}</h4>
        <div className="flex flex-col gap-2.5 flex-1 justify-center">
          {item.consumption > 0 && (
            <div className="flex items-center gap-2.5">
              <Zap size={12} className="text-amber-500" /><span className="text-[12px] font-bold text-amber-500/80">Konsumsi: {item.consumption.toLocaleString('id-ID')} MW/unit</span>
            </div>
          )}
          <div className="flex items-center gap-2.5 italic opacity-60">
            <Clock size={12} className="text-zinc-500" /><span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Waktu: {item.buildTime?.toLocaleString('id-ID')} Hari</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-zinc-800/30 flex flex-col gap-1.5 bg-zinc-950/30 rounded-2xl p-4 border border-zinc-800/20 shadow-inner">
          <div className="flex justify-between items-baseline gap-2">
            <span className={`text-[11px] font-black text-cyan-500/80 uppercase tracking-[0.15em] italic`}>TOTAL FASILITAS:</span>
            <span className={`text-[16px] font-black text-cyan-400 tracking-tight`}>{(item.count || 0).toLocaleString('id-ID')} <span className="text-[10px] font-normal uppercase italic ml-1">Unit</span></span>
          </div>
        </div>
      </div>
      <div className="mt-auto pt-4 relative z-10">
        {progress ? (
          <div className="space-y-2 bg-zinc-950/50 p-3 rounded-2xl border border-zinc-800/50 shadow-inner">
            <div className="flex justify-between text-[10px] font-black text-cyan-400 uppercase tracking-tighter italic"><span>PROSES BANGUN:</span><span>{progress.percentage}%</span></div>
            <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50"><div className={`h-full ${progress.colorClass} rounded-full`} style={{ width: `${progress.percentage}%` }} /></div>
            <div className="text-[9px] font-bold text-zinc-600 uppercase italic tracking-tighter text-right">E.T.A: {formatGameDate(new Date(construction.endDate))}</div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col"><span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">Biaya Bangun</span><span className="text-sm font-black text-zinc-400 tracking-tight mt-1">{item.cost?.toLocaleString('id-ID')}</span></div>
            <button onClick={(e) => { e.stopPropagation(); onBuild(item); }} className="flex-1 py-3.5 rounded-2xl bg-cyan-600 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-cyan-500 transition-all cursor-pointer active:scale-95 border border-cyan-400/20">Bangun</button>
          </div>
        )}
      </div>
    </div>
  );
}

