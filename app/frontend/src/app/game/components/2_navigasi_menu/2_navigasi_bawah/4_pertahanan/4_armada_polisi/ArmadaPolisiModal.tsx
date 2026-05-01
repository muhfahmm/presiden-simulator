"use client"

import { useState, useEffect, Fragment } from "react";
import { X, ShieldAlert, Car, Bike, Dog, Crosshair, Radio, Shield, Cctv, Search, Siren, Clock, Loader2, Info, Users, GraduationCap, Flame, Zap, Eye, EyeOff, TrendingUp, TrendingDown, Activity, Building, Briefcase, Layers, Hammer, TreePine } from "lucide-react"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, DASHBOARD_LABELS, KAPASITAS_LISTRIK_METADATA } from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/negara/index";
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

import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import JikaUangKurang from "../../3_pembangunan/jika_uang_kurang";
import MaterialRequirement, { getBuildingRequirement } from "../../3_pembangunan/1-produksi/MaterialRequirement";

export default function ArmadaPolisiModal({ isOpen, onClose, data }: { isOpen: boolean; onClose: () => void; data: any }) {
  const [activeConstructions, setActiveConstructions] = useState<any[]>([]);
  const [showQueue, setShowQueue] = useState(false);
  const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());
  const [confirmBuild, setConfirmBuild] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [missingMaterialsData, setMissingMaterialsData] = useState<any[]>([]);
  const [requiredAmount, setRequiredAmount] = useState(0);
  const [isInsufficientFundsModalOpen, setIsInsufficientFundsModalOpen] = useState(false);
  const [tick, setTick] = useState(0);
  const currentData = data;

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
        console.error("DEBUG: Police Hub poll error", err);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen || !currentData) return null;

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas;

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

  const policeGroups = [
    {
      id: "pusat_komando",
      title: "1. Pusat Komando & Pendidikan",
      icon: Shield,
      color: "text-blue-500",
      items: [
        { ...armadaPolisiRate["1_pusat_komando"], key: "1_pusat_komando_polisi", groupId: "komando", icon: Shield, biaya_pembangunan: armadaPolisiRate["1_pusat_komando"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["1_pusat_komando"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["1_pusat_komando"].get_konsumsi_listrik?.() || armadaPolisiRate["1_pusat_komando"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["1_pusat_komando"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.markas_besar_polri || 0) + ((buildingDeltas["markas_besar_polri"] as number) || 0) },
        { ...armadaPolisiRate["2_akademi_polisi"], key: "2_akademi_polisi", groupId: "komando", icon: GraduationCap, biaya_pembangunan: armadaPolisiRate["2_akademi_polisi"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["2_akademi_polisi"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["2_akademi_polisi"].get_konsumsi_listrik?.() || armadaPolisiRate["2_akademi_polisi"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["2_akademi_polisi"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.akademi_kepolisian || 0) + ((buildingDeltas["akademi_kepolisian"] as number) || 0) },
        { ...armadaPolisiRate["3_pusat_forensik"], key: "3_pusat_forensik", groupId: "komando", icon: Search, biaya_pembangunan: armadaPolisiRate["3_pusat_forensik"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["3_pusat_forensik"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["3_pusat_forensik"].get_konsumsi_listrik?.() || armadaPolisiRate["3_pusat_forensik"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["3_pusat_forensik"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.pusat_forensik || 0) + ((buildingDeltas["pusat_forensik"] as number) || 0) },
      ]
    },
    {
      id: "unit_pelayanan",
      title: "2. Unit Pelayanan & Kewilayahan",
      icon: Building,
      color: "text-emerald-500",
      items: [
        { ...armadaPolisiRate["4_kantor_polisi"], key: "4_kantor_polisi", groupId: "wilayah", icon: Siren, biaya_pembangunan: armadaPolisiRate["4_kantor_polisi"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["4_kantor_polisi"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["4_kantor_polisi"].get_konsumsi_listrik?.() || armadaPolisiRate["4_kantor_polisi"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["4_kantor_polisi"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.kantor_polisi || 0) + ((buildingDeltas["kantor_polisi"] as number) || 0) },
        { ...armadaPolisiRate["5_pos_polisi"], key: "5_pos_polisi", groupId: "wilayah", icon: ShieldAlert, biaya_pembangunan: armadaPolisiRate["5_pos_polisi"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["5_pos_polisi"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["5_pos_polisi"].get_konsumsi_listrik?.() || armadaPolisiRate["5_pos_polisi"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["5_pos_polisi"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.pos_polisi || 0) + ((buildingDeltas["pos_polisi"] as number) || 0) },
        { ...armadaPolisiRate["6_network_cctv"], key: "6_network_cctv", groupId: "wilayah", icon: Cctv, biaya_pembangunan: armadaPolisiRate["6_network_cctv"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["6_network_cctv"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["6_network_cctv"].get_konsumsi_listrik?.() || armadaPolisiRate["6_network_cctv"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["6_network_cctv"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.network_cctv || 0) + ((buildingDeltas["network_cctv"] as number) || 0) },
      ]
    },
    {
      id: "armada_operasional",
      title: "3. Armada & Respon Cepat",
      icon: Car,
      color: "text-amber-500",
      items: [
        { ...armadaPolisiRate["7_armada_mobil"], key: "7_armada_mobil_polisi", groupId: "armada", icon: Car, biaya_pembangunan: armadaPolisiRate["7_armada_mobil"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["7_armada_mobil"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["7_armada_mobil"].get_konsumsi_listrik?.() || armadaPolisiRate["7_armada_mobil"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["7_armada_mobil"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.armada_mobil_polisi || 0) + ((buildingDeltas["armada_mobil_polisi"] as number) || 0) },
        { ...armadaPolisiRate["8_mobil_interceptor"], key: "8_mobil_interceptor", groupId: "armada", icon: Car, biaya_pembangunan: armadaPolisiRate["8_mobil_interceptor"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["8_mobil_interceptor"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["8_mobil_interceptor"].get_konsumsi_listrik?.() || armadaPolisiRate["8_mobil_interceptor"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["8_mobil_interceptor"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.mobil_patroli_interceptor || 0) + ((buildingDeltas["mobil_patroli_interceptor"] as number) || 0) },
        { ...armadaPolisiRate["9_unit_r2"], key: "9_unit_r2", groupId: "armada", icon: Bike, biaya_pembangunan: armadaPolisiRate["9_unit_r2"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["9_unit_r2"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["9_unit_r2"].get_konsumsi_listrik?.() || armadaPolisiRate["9_unit_r2"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["9_unit_r2"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.unit_roda_dua || 0) + ((buildingDeltas["unit_roda_dua"] as number) || 0) },
        { ...armadaPolisiRate["10_heli_polisi"], key: "10_heli_polisi", groupId: "armada", icon: Radio, biaya_pembangunan: armadaPolisiRate["10_heli_polisi"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["10_heli_polisi"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["10_heli_polisi"].get_konsumsi_listrik?.() || armadaPolisiRate["10_heli_polisi"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["10_heli_polisi"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.helikopter_polisi || 0) + ((buildingDeltas["helikopter_polisi"] as number) || 0) },
      ]
    },
    {
      id: "pasukan_khusus",
      title: "4. Pasukan Khusus",
      icon: Crosshair,
      color: "text-rose-500",
      items: [
        { ...armadaPolisiRate["11_unit_k9"], key: "11_unit_k9", groupId: "khusus", icon: Dog, biaya_pembangunan: armadaPolisiRate["11_unit_k9"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["11_unit_k9"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["11_unit_k9"].get_konsumsi_listrik?.() || armadaPolisiRate["11_unit_k9"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["11_unit_k9"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.unit_k9 || 0) + ((buildingDeltas["unit_k9"] as number) || 0) },
        { ...armadaPolisiRate["12_swat"], key: "12_swat", groupId: "khusus", icon: Crosshair, biaya_pembangunan: armadaPolisiRate["12_swat"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["12_swat"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["12_swat"].get_konsumsi_listrik?.() || armadaPolisiRate["12_swat"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["12_swat"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.pasukan_swat || 0) + ((buildingDeltas["pasukan_swat"] as number) || 0) },
        { ...armadaPolisiRate["13_anti_huru_hara"], key: "13_anti_huru_hara", groupId: "khusus", icon: ShieldAlert, biaya_pembangunan: armadaPolisiRate["13_anti_huru_hara"].biaya_pembangunan, waktu_pembangunan: armadaPolisiRate["13_anti_huru_hara"].waktu_pembangunan, konsumsi_listrik: armadaPolisiRate["13_anti_huru_hara"].get_konsumsi_listrik?.() || armadaPolisiRate["13_anti_huru_hara"].konsumsi_listrik || 0, deskripsi: armadaPolisiRate["13_anti_huru_hara"].deskripsi, count: (currentData.armada_kepolisian?.armada_polisi?.samapta || 0) + ((buildingDeltas["samapta"] as number) || 0) },
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
      // 1. Calculate total cost
      const unitCost = Number(confirmBuild.biaya_pembangunan || 0);
      const totalCost = unitCost * quantity;

      // 2. Check for Financial Sufficiency
      const currentBalance = budgetStorage.getBudget();
      const isMoneyShort = currentBalance < totalCost;

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

      const areMaterialsShort = missing.length > 0;

      // 4. Handle Shortages (Unified Modal)
      if (isMoneyShort || areMaterialsShort) {
        setRequiredAmount(totalCost);
        setMissingMaterialsData(missing);
        setConfirmBuild(null);
        setIsInsufficientFundsModalOpen(true);
        return;
      }

      // 5. Deduct construction cost from budget
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
      console.error("DEBUG: Police Hub build error", err);
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
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      {/* Insufficient Resources Modal */}
      <JikaUangKurang
        isOpen={isInsufficientFundsModalOpen}
        onClose={() => setIsInsufficientFundsModalOpen(false)}
        requiredAmount={requiredAmount}
        currentBalance={budgetStorage.getBudget()}
        missingMaterials={missingMaterialsData}
      />

      <div className="bg-zinc-950/90 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl">
              <ShieldAlert className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Markas Besar Polri</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Police Command Center</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowQueue(true)} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group flex items-center gap-2 relative shadow-[0_0_15px_rgba(16,185,129,0.1)] active:scale-95">
              <Clock className="h-6 w-6 text-emerald-500 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              {activeConstructions.length > 0 && <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-zinc-950 shadow-lg animate-in zoom-in">{activeConstructions.length}</span>}
            </button>
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

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
          <div className="space-y-12">
            {policeGroups.map((group) => (
              <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1">
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}><group.icon className={`h-4 w-4 ${group.color}`} /></div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title}</h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
                  <button onClick={() => toggleSector(group.id)} className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95">
                    {collapsedSectors.has(group.id) ? <EyeOff size={16} /> : <Eye size={16} className="text-emerald-400" />}
                  </button>
                </div>
                <div className={`grid transition-all duration-700 ease-in-out ${!collapsedSectors.has(group.id) ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 pb-4">
                      {group.items.map((item: any, idx: number) => {
                        const currentConstruction = activeConstructions?.find(c => c && c.buildingKey === item.key);
                        const prevGroupId = idx > 0 ? group.items[idx - 1].groupId : null;

                        const subGroupLabels: Record<string, string> = {
                          komando: "Komando Strategis & Pendidikan",
                          wilayah: "Unit Pelayanan Wilayah",
                          armada: "Respon Cepat & Patroli",
                          khusus: "Penanganan Taktis & Khusus"
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

              {/* Header: Icon & Title (Full Width) */}
              <div className="flex items-center gap-6 shrink-0 border-b border-zinc-800/50 pb-6">
                <div className="p-4 bg-cyan-500/10 rounded-3xl border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                  <confirmBuild.icon className="h-10 w-10 text-cyan-500" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none">Konfirmasi Bangun?</h3>
                  <p className="text-zinc-400 text-sm font-medium mt-2">Membangun <span className="text-white font-black underline">{confirmBuild.label}</span> untuk memperkuat satuan kepolisian nasional.</p>
                </div>
              </div>

              {/* Main Content: 2-Column Grid Area */}
              <div className="flex-1 overflow-y-auto no-scrollbar py-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* Column 1: Stats & Info */}
                  <div className="space-y-6">
                    <div className="flex flex-col gap-3">
                      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic leading-none ml-1">Spesifikasi Unit</span>
                      <div className={`grid ${confirmBuild.konsumsi_listrik > 0 ? 'grid-cols-3' : 'grid-cols-2'} gap-3`}>
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Biaya Satuan</span>
                          <span className="text-xl font-black text-amber-500 tracking-tight">{(Number(confirmBuild.biaya_pembangunan || 0)).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Waktu Satuan</span>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-cyan-500" />
                            <span className="text-xl font-black text-white tracking-tight">{(confirmBuild.waktu_pembangunan).toLocaleString('id-ID')} Hari</span>
                          </div>
                        </div>
                        {confirmBuild.konsumsi_listrik > 0 && (
                          <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Energi Beban</span>
                            <div className="flex items-center gap-1.5">
                              <Zap size={14} className="text-rose-500" />
                              <span className="text-xl font-black text-rose-500 tracking-tight">{((confirmBuild.konsumsi_listrik || 0)).toLocaleString('id-ID')} MW</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-zinc-950/40 border border-zinc-800 rounded-2xl p-5 text-center shadow-inner">
                      <span className="text-[10px] font-bold text-cyan-500/60 uppercase tracking-widest italic">Estimasi Penyelesaian Seluruh Unit</span>
                      <p className="text-lg font-black text-white mt-1 uppercase italic tracking-wider">
                        {formatGameDate(addDays(getStoredGameDate(), confirmBuild.waktu_pembangunan * quantity))}
                      </p>
                    </div>
                  </div>

                  {/* Column 2: Materials & Quantity */}
                  <div className="space-y-6">
                    <MaterialRequirement buildingKey={confirmBuild.key} quantity={quantity} />

                    <div className="space-y-3">
                      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic ml-1">Kuantitas Pembangunan</span>
                      <div className="flex items-center justify-center gap-6 bg-zinc-950/80 border border-zinc-800 p-2 rounded-2xl shadow-inner">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 text-xl font-black text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-lg active:scale-95"
                        >
                          -
                        </button>
                        <div className="flex flex-col items-center min-w-[90px]">
                          <span className="text-3xl font-black text-white tracking-tighter">{quantity.toLocaleString('id-ID')}</span>
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter italic leading-none">Unit Operasional</span>
                        </div>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 text-xl font-black text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-lg active:scale-95"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer: Action Buttons (Full Width stretching both cols) */}
              <div className="flex gap-4 shrink-0 mt-2 border-t border-zinc-800/50 pt-6">
                <button
                  onClick={() => setConfirmBuild(null)}
                  className="flex-1 px-8 py-5 rounded-3xl bg-zinc-800/50 text-zinc-400 font-black text-xs uppercase tracking-widest border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer"
                >
                  Batal
                </button>
                <button
                  onClick={handleConfirmBuild}
                  className="flex-[2] px-8 py-5 rounded-3xl bg-cyan-600 text-white font-black text-sm uppercase tracking-widest shadow-[0_10px_20px_rgba(8,145,178,0.3)] hover:bg-cyan-500 hover:shadow-[0_20px_40px_rgba(8,145,178,0.4)] transition-all cursor-pointer active:scale-95"
                >
                  Konfirmasi & Bangun Sekarang
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Queue Drawer */}
        <div className={`absolute top-0 right-0 bottom-0 w-80 bg-zinc-950 border-l border-zinc-800 z-[110] transform transition-transform duration-500 ease-in-out shadow-2xl ${showQueue ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2"><Clock size={16} className="text-emerald-500" /><h3 className="text-sm font-black text-white uppercase tracking-widest">Antrean Operasional</h3></div>
              <button onClick={() => setShowQueue(false)} className="p-2 hover:bg-zinc-900 rounded-lg text-zinc-500"><X size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
              {activeConstructions.filter(c => ["komando", "wilayah", "armada", "khusus"].includes(c.sector)).length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 opacity-20 text-center"><ShieldAlert size={40} className="mb-4" /><p className="text-[10px] font-black uppercase tracking-widest">Tidak ada antrean</p></div>
              ) : (
                activeConstructions.filter(c => ["komando", "wilayah", "armada", "khusus"].includes(c.sector)).map((item, idx) => {
                  const progress = calculateConstructionProgress(item.startDate, item.endDate, getStoredGameDate().getTime());
                  return (
                    <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 space-y-3">
                      <div className="flex justify-between items-center relative z-10"><h4 className="text-xs font-black text-white">{item.label}</h4><span className="text-[10px] font-bold text-emerald-400">{progress.percentage}%</span></div>
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

function BuildingCard({ item, onBuild, construction }: any) {
  const [showDetail, setShowDetail] = useState(false);
  const currentDate = getStoredGameDate().getTime();
  const progress = construction ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate) : null;



  return (
    <div className={`group relative flex flex-col p-6 rounded-[32px] border transition-all duration-300 overflow-hidden ${progress
        ? "bg-cyan-500/5 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.1)] ring-1 ring-cyan-500/10"
        : "bg-zinc-900/40 border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700/50 shadow-xl"
      } h-full min-h-[440px]`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

      {progress && (
        <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000" style={{ width: `${progress.percentage}%` }} />
      )}

      {showDetail && (
        <div className="absolute inset-0 z-50 bg-zinc-950/98 backdrop-blur-md p-7 flex flex-col animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Info size={18} />
              </div>
              <div>
                <h5 className="text-[14px] font-black text-white uppercase tracking-wider italic">Detail Operasional</h5>
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


            </div>
          </div>

          <button onClick={() => setShowDetail(false)} className="mt-6 w-full py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-zinc-800 hover:text-white transition-all cursor-pointer active:scale-[0.98] shadow-lg">
            Kembali
          </button>
        </div>
      )}

      {/* Main content box */}
      <div className="flex flex-col gap-5 relative z-10 flex-1">
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
            <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
              {item.deskripsi}
            </div>
            <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              Terbangun: {item.count.toLocaleString('id-ID')} Unit {item.konsumsi_listrik > 0 && `(${(item.count * item.konsumsi_listrik).toLocaleString('id-ID')} MW)`}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col relative z-10 mt-1">
          <h4 className="text-[17px] font-black text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors uppercase italic leading-tight mb-4">
            {item.label}
          </h4>

          <div className="flex flex-col gap-2.5 flex-1">



            {item.konsumsi_listrik > 0 && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-rose-500/10 rounded-lg">
                    <Zap size={12} className="text-rose-500/90" />
                  </div>
                  <span className="text-[12px] font-bold text-rose-500/80">
                    Konsumsi: {item.konsumsi_listrik.toLocaleString('id-ID')} MW/bangunan
                  </span>
                </div>
                <div className="flex items-center gap-2.5 ml-1 border-l-2 border-rose-500/10 pl-3">
                  <div className="p-1.5 bg-rose-500/5 rounded-lg">
                    <Activity size={12} className="text-rose-400/70" />
                  </div>
                  <span className="text-[11px] font-bold text-rose-400/70 uppercase">
                    Total Konsumsi Listrik: {(item.count * item.konsumsi_listrik).toLocaleString('id-ID')} MW
                  </span>
                </div>
              </div>
            )}

            {!progress && (
              <div className="flex items-center gap-2.5 mt-1 opacity-60">
                <div className="p-1.5 bg-zinc-800/50 rounded-lg"><Clock size={12} className="text-zinc-500" /></div>
                <span className="text-[11px] font-bold text-zinc-500 italic">Waktu: {item.waktu_pembangunan} Hari</span>
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-800/30 flex flex-col gap-2 bg-zinc-950/30 rounded-2xl p-4 border border-zinc-800/20 shadow-inner">
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-[13px] font-black text-zinc-500 uppercase tracking-[0.15em] italic">Total Unit</span>
              <span className="text-[22px] font-black text-cyan-400 tracking-tight">
                {(item.count || 0).toLocaleString('id-ID')}
                <span className="text-[12px] text-cyan-500/50 font-normal uppercase italic ml-1">Unit</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-2 relative z-10">
          {progress ? (
            <div className="space-y-3 bg-zinc-950/50 p-3 rounded-2xl border border-zinc-800/50 shadow-inner">
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
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">Biaya Akuisisi</span>
                <span className="text-sm font-black text-zinc-400 tracking-tight mt-1">{item.biaya_pembangunan?.toLocaleString('id-ID')}</span>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); onBuild(item); }}
                className="flex-1 py-3.5 rounded-2xl bg-cyan-600 text-white text-[11px] font-black uppercase tracking-[0.15em] shadow-[0_10px_20px_rgba(8,145,178,0.2)] hover:bg-cyan-500 hover:shadow-[0_15px_30px_rgba(8,145,178,0.3)] hover:-translate-y-0.5 transition-all cursor-pointer active:scale-95 border border-cyan-400/20"
              >
                Bangun
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

