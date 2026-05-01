import { useState, useEffect, Fragment } from "react";
import { X, Wrench, Zap, Pickaxe, Factory, Construction, Store, Beef, Wheat, Radiation, Coins, Flame, Droplets, FlaskConical, Shovel, Container, Car, Bike, Hammer, Trees, Coffee, Cookie, Milk, Fish, Waves, Shell, Sprout, Activity, TrendingUp, TrendingDown, Clock, Loader2, RefreshCw, Eye, EyeOff, Pill, Utensils, Apple, Bird, Bean, Ship, Map, Wifi, Plane, Bus, ShieldCheck, Home, Archive, Warehouse, GraduationCap, Landmark, Crosshair, HeartPulse, Library, TrainFront, HardHat, ShieldAlert, Scale, Siren, Cpu, TreePine, Croissant, Soup, Leaf, Info, Gem, Radio, Layers, Box, Battery, Mountain, Briefcase, Users2, Cloud, Target, Truck } from "lucide-react"
import {
  mineralKritisRate,
  manufakturRate,
  peternakanRate,
  agrikulturRate,
  perikananRate,
  olahanPanganRate,
  farmasiRate
} from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi";
import {
  KONSUMSI_PERTAHANAN,
  KONSUMSI_STRATEGIC,
  KONSUMSI_SOSIAL,
  KONSUMSI_TRANSPORTASI,
  infrastrukturRate,
  sosialRate,
  pabrikMiliterRate,
  hunianRate,
  KAPASITAS_LISTRIK_METADATA,
  DASHBOARD_LABELS,
  hitungTotalKapasitas,
  hitungTotalKonsumsiNasional
} from "@/app/database/data/semua_fitur_negara";
import { pertahananRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import JikaUangKurang from "../jika_uang_kurang";
import JikaMaterialKurang from "../jika_material_kurang";
import { getBuildingRequirement } from "./MaterialRequirement";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/negara/index";

import MaterialRequirement from "./MaterialRequirement";
import { calculateUraniumMetrics } from "../../9_produksi_konsumsi/3_konsumsi_uranium/logic/uraniumLogic";
import { religionStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";
import { PROTESTAN_PRODUCTION_SPEED_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/2_protestan/1_plus/plus";
import { TAOISME_HEAVY_INDUSTRY_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/10_taoisme/2_minus/minus";
import { ideologyStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/ideologyStorage";
import { DEMOKRASI_DECISION_SPEED_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/1_demokrasi/2_minus/minus";
import { KOMUNISME_FACTORY_COST_MULTIPLIER } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/2_komunisme/1_plus/plus";
import { KAPITALISME_CONSTRUCTION_SPEED_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/3_kapitalisme/1_plus/plus";
import { KOMUNISME_INNOVATION_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/2_komunisme/2_minus/minus";
import { pbbImpactLogic } from "@/app/game/utils/pbbImpactLogic";
import { AlertTriangle } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProduksiHubV3({ isOpen, onClose }: ModalProps) {
  const [confirmBuild, setConfirmBuild] = useState<any | null>(null);
  const [tick, setTick] = useState(0);
  const [activeConstructions, setActiveConstructions] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isInsufficientFundsModalOpen, setIsInsufficientFundsModalOpen] = useState(false);
  const [isInsufficientMaterialsModalOpen, setIsInsufficientMaterialsModalOpen] = useState(false);
  const [missingMaterialsData, setMissingMaterialsData] = useState<any[]>([]);
  const [requiredAmount, setRequiredAmount] = useState(0);
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

  // Sync queue data whenever tick or confirmBuild changes or modal opens
  useEffect(() => {
    if (!isOpen) return;
    const queue = buildingStorage.getQueue();
    setActiveConstructions(queue);
  }, [tick, confirmBuild, isOpen]);

  // Debug log for checking key matching
  useEffect(() => {
    if (isOpen && activeConstructions.length > 0) {
      console.log("DEBUG: Active constructions in modal:", activeConstructions);
    }
  }, [activeConstructions, isOpen]);

  // Polling for progress updates and completion
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      try {
        const queueToProcess = buildingStorage.getQueue();
        if (!queueToProcess || !Array.isArray(queueToProcess)) {
          return;
        }

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
  const currentCountryName = session?.country || "Indonesia";
  const searchName = currentCountryName.toLowerCase().trim();
  const selectedData = countries.find((c: any) =>
    c.name_id.toLowerCase() === searchName ||
    c.name_en.toLowerCase() === searchName
  );
  const currentData = selectedData || countries[0];

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas || {};

  // PBB Impacts
  const pbbMultipliers = pbbImpactLogic.getCountryMultipliers(currentCountryName);
  const pbbStatusColor = pbbImpactLogic.getStatusColor(pbbMultipliers.impactLevel);

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
      const dataKey = infrastrukturRate[key].dataKey;
      if (dataKey) (currentDataWithDeltas.infrastruktur as any)[dataKey] = ((currentDataWithDeltas.infrastruktur as any)[dataKey] || 0) + deltaValue;
    }
    // 10. Sosial & Public
    else if (sosialRate[key]) {
      const dataKey = sosialRate[key].dataKey;
      const groupId = sosialRate[key].groupId;
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
    else if ((pabrikMiliterRate as any)[key]) {
      const dataKey = (pabrikMiliterRate as any)[key].dataKey;
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

  // Uranium Requirement Check
  const uraniumStats = calculateUraniumMetrics(currentDataWithDeltas, buildingDeltas);

  const handleBuildRequest = (item: any) => {
    setConfirmBuild(item);
    setQuantity(1);
  };

  const handleConfirmBuild = () => {
    if (!confirmBuild) return;
    try {
      // 1. Calculate total cost with Ideology Modifiers
      const currentData = countries.find(c => c.name_id === (gameStorage.getSession() as any)?.country || c.name_en === (gameStorage.getSession() as any)?.country) || countries[0];
      const currentIdeology = ideologyStorage.getCurrentIdeology(currentData?.ideology || "Demokrasi");
      const isKomunisme = currentIdeology === "Komunisme";
      const isFactory = confirmBuild.groupId === "manufaktur" || confirmBuild.groupId === "ekstraksi" || confirmBuild.groupId === "olahan_pangan";

      let effectiveUnitCost = confirmBuild.cost;
      if (isKomunisme && isFactory) effectiveUnitCost = Math.ceil(effectiveUnitCost * KOMUNISME_FACTORY_COST_MULTIPLIER);

      // Apply PBB Sanction Cost Penalty (+15%)
      effectiveUnitCost = Math.ceil(effectiveUnitCost * pbbMultipliers.buildCost);

      const totalCost = effectiveUnitCost * quantity;

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

      // 4. Deduct construction cost from budget
      budgetStorage.updateBudget(-totalCost);

      let currentStart = getStoredGameDate().getTime();
      const itemsToAdd: any[] = [];

      for (let i = 0; i < quantity; i++) {
        const currentReligion = religionStorage.getCurrentReligion(currentData?.religion || "Islam");
        const currentIdeology = ideologyStorage.getCurrentIdeology(currentData?.ideology || "Demokrasi");
        const isProtestan = currentReligion === "Protestan";
        const isTaoisme = currentReligion === "Taoisme";
        const isDemokrasi = currentIdeology === "Demokrasi";
        const isHeavyIndustry = confirmBuild.groupId === "manufaktur" || confirmBuild.groupId === "ekstraksi";

        let effectiveBuildTime = confirmBuild.buildTime;

        // PBB Production Penalties
        const isHighTech = confirmBuild.key.includes("electronics") || confirmBuild.key.includes("semikonduktor") || confirmBuild.groupId === "cyber" || confirmBuild.groupId === "space";
        const isArms = confirmBuild.groupId === "militer" || confirmBuild.key.includes("pabrik_amunisi");

        if (isHighTech) effectiveBuildTime = Math.ceil(effectiveBuildTime / pbbMultipliers.techSpeed);
        if (isArms) effectiveBuildTime = Math.ceil(effectiveBuildTime / pbbMultipliers.armsSpeed);

        if (isProtestan) effectiveBuildTime = Math.ceil(effectiveBuildTime / PROTESTAN_PRODUCTION_SPEED_BONUS);
        if (isTaoisme && isHeavyIndustry) {
          // -20% speed means 0.8x speed, which is 1.25x time
          effectiveBuildTime = Math.ceil(effectiveBuildTime * 1.25);
        }
        if (isDemokrasi) {
          // -30% speed means 0.7x speed, which is ~1.43x time
          effectiveBuildTime = Math.ceil(effectiveBuildTime / DEMOKRASI_DECISION_SPEED_PENALTY);
        }
        const isKapitalisme = currentIdeology === "Kapitalisme";
        if (isKapitalisme) {
          // +20% speed means 1.2x speed, which is time / 1.2
          effectiveBuildTime = Math.ceil(effectiveBuildTime / KAPITALISME_CONSTRUCTION_SPEED_BONUS);
        }

        const currentEnd = addDays(new Date(currentStart), effectiveBuildTime).getTime();

        const newItem = buildingStorage.addToQueue({
          buildingKey: confirmBuild.key,
          label: confirmBuild.label,
          sector: confirmBuild.groupId,
          startDate: currentStart,
          endDate: currentEnd,
          waktu_pembangunan: effectiveBuildTime
        });

        if (newItem) {
          itemsToAdd.push(newItem);
        }

        // Next building starts when this one ends
        currentStart = currentEnd;
      }

      if (itemsToAdd.length > 0) {
        setActiveConstructions(prev => [...prev, ...itemsToAdd]);
      }

      setConfirmBuild(null);
      setQuantity(1);
    } catch (err) {
      console.error("DEBUG: Add to queue error", err);
    }
  };

  // Helper for icons based on key
  const getIcon = (key: string) => {
    if (key.includes("uranium")) return Radio;
    if (key.includes("minyak_bumi") || key.includes("oil_well")) return Droplets;
    if (key.includes("gas_alam") || key.includes("gas_well")) return Flame;
    if (key.includes("emas") || key.includes("gold_mine")) return Gem;
    if (key.includes("coal_mine")) return Layers;
    if (key.includes("aluminum_mine")) return Layers;
    if (key.includes("iron_ore_mine")) return Mountain;
    if (key.includes("salt_mine")) return Waves;
    if (key.includes("lithium_mine")) return Battery;
    if (key.includes("nickel_mine")) return Box;
    if (key.includes("rare_earth_mine")) return Cpu;
    if (key.includes("electronics")) return Cpu;
    if (key.includes("mobil") || key.includes("car")) return Car;
    if (key.includes("sepeda_motor") || key.includes("motorcycle")) return Bike;
    if (key.includes("smelter")) return Flame;
    if (key.includes("cement")) return Construction;
    if (key.includes("sawmill") || key.includes("kayu")) return TreePine;
    if (key.includes("water")) return Droplets;
    if (key.includes("gula") || key.includes("sugar")) return Cookie;
    if (key.includes("bakery") || key.includes("roti")) return Croissant;
    if (key.includes("pharma") || key.includes("farmasi")) return Pill;
    if (key.includes("pupuk") || key.includes("fertilizer")) return FlaskConical;
    if (key.includes("meat") || key.includes("pengolahan_daging")) return Beef;
    if (key.includes("mie_instan") || key.includes("noodle")) return Soup;
    if (key.includes("poultry") || key.includes("egg") || key.includes("ayam")) return Bird;
    if (key.includes("fish") || key.includes("ikan")) return Fish;
    if (key.includes("sheep") || key.includes("domba") || key.includes("kambing")) return Leaf;
    if (key.includes("shrimp") || key.includes("udang") || key.includes("pearl") || key.includes("kerang")) return Shell;
    if (key.includes("dairy") || key.includes("sapi_perah")) return Milk;
    if (key.includes("cattle") || key.includes("sapi_potong")) return Beef;
    if (key.includes("rice") || key.includes("padi") || key.includes("sprout")) return Sprout;
    if (key.includes("wheat") || key.includes("gandum") || key.includes("corn") || key.includes("jagung")) return Utensils;
    if (key.includes("veg") || key.includes("sayur") || key.includes("apple")) return Apple;
    if (key.includes("soy") || key.includes("kedelai")) return Bean;
    if (key.includes("palm") || key.includes("sawit")) return Droplets;
    if (key.includes("minyak_goreng")) return Droplets;
    if (key.includes("susu")) return Milk;
    if (key.includes("pakan_ternak")) return Leaf;
    if (key.includes("kopi") || key.includes("teh") || key.includes("kakao")) return Coffee;
    if (key.includes("karet")) return Droplets;
    if (key.includes("kapas")) return Cloud;
    if (key.includes("tembakau")) return Flame;
    if (key.includes("pabrik_drone_kamikaze")) return Target;
    if (key.includes("pabrik_amunisi")) return Archive;
    return Pickaxe;
  };

  const productionGroups = [
    {
      id: "kelistrikan",
      title: "1. Sektor Listrik Nasional",
      icon: Zap,
      color: "text-amber-400",
      items: Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, val]: [string, any]) => ({
        key,
        groupId: "kelistrikan",
        label: val.deskripsi,
        icon: getIcon(key),
        desc: "Energi Listrik",
        tarif: val.produksi,
        unit: val.satuan,
        count: (currentData.sektor_listrik?.[val.dataKey as keyof typeof currentData.sektor_listrik] || 0) + ((buildingDeltas[key] as number) || 0),
        pendapatan_nasional: 0,
        cost: val.biaya_pembangunan || 1500,
        buildTime: val.waktu_pembangunan || 90,
        lowongan_kerja: val.lowongan_kerja || 0,
        konsumsi_uranium: val.konsumsi_uranium || 0
      }))
    },
    {
      id: "ekstraksi",
      title: "2. Sektor Mineral Kritis",
      icon: Pickaxe,
      color: "text-orange-500",
      items: Object.entries(mineralKritisRate)
        .sort((a, b) => {
          const order = ["emas", "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi"];
          const idxA = order.indexOf(a[1].dataKey);
          const idxB = order.indexOf(b[1].dataKey);
          return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
        })
        .map(([key, val]: [string, any]) => ({
          key,
          groupId: "ekstraksi",
          label: val.deskripsi,
          icon: getIcon(key),
          desc: "Sumber Daya Alam",
          tarif: val.produksi,
          unit: val.satuan,
          count: (currentData.sektor_ekstraksi?.[val.dataKey as keyof typeof currentData.sektor_ekstraksi] || 0) + ((buildingDeltas[key] as number) || 0),
          powerUsage: val.konsumsi_listrik || 0,
          pendapatan_nasional: 0,
          cost: val.biaya_pembangunan || 1000,
          buildTime: val.waktu_pembangunan || 30,
          lowongan_kerja: val.lowongan_kerja || 0
        }))
    },
    {
      id: "manufaktur",
      title: "3. Sektor Manufaktur",
      icon: Factory,
      color: "text-emerald-500",
      items: Object.entries(manufakturRate)
        .map(([key, val]: [string, any]) => ({
          key,
          groupId: "manufaktur",
          label: val.deskripsi,
          icon: getIcon(key),
          desc: "Manufaktur",
          tarif: val.produksi,
          unit: val.satuan,
          count: (currentData.sektor_manufaktur?.[val.dataKey as keyof typeof currentData.sektor_manufaktur] || 0) + ((buildingDeltas[key] as number) || 0),
          powerUsage: val.konsumsi_listrik || 0,
          pendapatan_nasional: val.pendapatan_nasional,
          cost: val.biaya_pembangunan || 2000,
          buildTime: val.waktu_pembangunan || 45,
          lowongan_kerja: val.lowongan_kerja || 0
        }))
    },
    {
      id: "peternakan",
      title: "4. Sektor Peternakan",
      icon: Beef,
      color: "text-orange-400",
      items: Object.entries(peternakanRate)
        .map(([key, val]: [string, any]) => ({
          key,
          groupId: "peternakan",
          label: val.deskripsi,
          icon: getIcon(key),
          desc: "Peternakan",
          tarif: val.produksi,
          unit: val.satuan,
          count: (currentData.sektor_peternakan?.[val.dataKey as keyof typeof currentData.sektor_peternakan] || 0) + ((buildingDeltas[key] as number) || 0),
          powerUsage: val.konsumsi_listrik || 0,
          pendapatan_nasional: val.pendapatan_nasional,
          cost: val.biaya_pembangunan || 1200,
          buildTime: val.waktu_pembangunan || 25,
          lowongan_kerja: val.lowongan_kerja || 0
        }))
    },
    {
      id: "agrikultur",
      title: "5. Sektor Agrikultur",
      icon: Sprout,
      color: "text-lime-500",
      items: Object.entries(agrikulturRate)
        .map(([key, val]: [string, any]) => ({
          key,
          groupId: "agrikultur",
          label: val.deskripsi,
          icon: getIcon(key),
          desc: "Agrikultur",
          tarif: val.produksi,
          unit: val.satuan,
          count: (currentData.sektor_agrikultur?.[val.dataKey as keyof typeof currentData.sektor_agrikultur] || 0) + ((buildingDeltas[key] as number) || 0),
          powerUsage: val.konsumsi_listrik || 0,
          pendapatan_nasional: val.pendapatan_nasional,
          cost: val.biaya_pembangunan || 1000,
          buildTime: val.waktu_pembangunan || 30,
          lowongan_kerja: val.lowongan_kerja || 0
        }))
    },
    {
      id: "perikanan",
      title: "6 Sektor Perikanan",
      icon: Fish,
      color: "text-blue-400",
      items: Object.entries(perikananRate)
        .map(([key, val]: [string, any]) => ({
          key,
          groupId: "perikanan",
          label: val.deskripsi,
          icon: getIcon(key),
          desc: "Perikanan",
          tarif: val.produksi,
          unit: val.satuan,
          count: (currentData.sektor_perikanan?.[val.dataKey as keyof typeof currentData.sektor_perikanan] || 0) + ((buildingDeltas[key] as number) || 0),
          powerUsage: val.konsumsi_listrik || 0,
          pendapatan_nasional: val.pendapatan_nasional,
          cost: val.biaya_pembangunan || 1100,
          buildTime: val.waktu_pembangunan || 20,
          lowongan_kerja: val.lowongan_kerja || 0
        }))
    },
    {
      id: "olahan_pangan",
      title: "7 Sektor Olahan Pangan",
      icon: Utensils,
      color: "text-amber-500",
      items: Object.entries(olahanPanganRate)
        .map(([key, val]: [string, any]) => ({
          key,
          groupId: "olahan_pangan",
          label: val.deskripsi,
          icon: getIcon(key),
          desc: "Olahan Pangan",
          tarif: val.produksi,
          unit: val.satuan,
          count: (currentData.sektor_olahan_pangan?.[val.dataKey as keyof typeof currentData.sektor_olahan_pangan] || 0) + ((buildingDeltas[key] as number) || 0),
          powerUsage: val.konsumsi_listrik || 0,
          pendapatan_nasional: val.pendapatan_nasional,
          cost: val.biaya_pembangunan || 1500,
          buildTime: val.waktu_pembangunan || 35,
          lowongan_kerja: val.lowongan_kerja || 0
        }))
    },
    {
      id: "farmasi",
      title: "8. Sektor Farmasi",
      icon: Pill,
      color: "text-rose-400",
      items: Object.entries(farmasiRate)
        .map(([key, val]: [string, any]) => ({
          key,
          groupId: "farmasi",
          label: val.deskripsi,
          icon: getIcon(key),
          desc: "Farmasi",
          tarif: val.produksi,
          unit: val.satuan,
          count: (currentData.sektor_farmasi?.[val.dataKey as keyof typeof currentData.sektor_farmasi] || 0) + ((buildingDeltas[key] as number) || 0),
          powerUsage: val.konsumsi_listrik || 0,
          pendapatan_nasional: val.pendapatan_nasional,
          cost: val.biaya_pembangunan || 4500,
          buildTime: val.waktu_pembangunan || 60,
          lowongan_kerja: val.lowongan_kerja || 0
        }))
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950/90 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        {/* Header (Synchronized with National Center) */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <Wrench className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-none uppercase">Produksi Hub</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">National Production Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowQueue(true)}
              className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group flex items-center gap-2 relative shadow-[0_0_15px_rgba(8,145,178,0.1)] active:scale-95"
              title="Antrean Pembangunan"
            >
              <Clock className="h-6 w-6 text-cyan-500 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              {activeConstructions.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-zinc-950 shadow-lg animate-in zoom-in">
                  {activeConstructions.length}
                </span>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
            >
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Energy Dashboard Summary (Standardized) */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80 shadow-lg">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Zap className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.supply.title}</p>
                <p className="text-xl font-black text-white leading-tight">{adjustedTotalPasokan.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80 shadow-lg">
              <div className="p-3 bg-rose-500/10 rounded-xl">
                <Activity className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.usage.title}</p>
                <p className="text-xl font-black text-white leading-tight">{adjustedTotalBeban.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80 shadow-lg relative overflow-hidden group">
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

        {/* Insufficient Funds / Both Modal */}
        <JikaUangKurang
          isOpen={isInsufficientFundsModalOpen}
          onClose={() => setIsInsufficientFundsModalOpen(false)}
          requiredAmount={requiredAmount}
          currentBalance={budgetStorage.getBudget()}
          missingMaterials={missingMaterialsData}
        />



        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="space-y-12">
            {productionGroups.map((group) => {
              return (
                <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="flex items-center gap-3 mb-5 px-1">
                    <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}>
                      <group.icon className={`h-4 w-4 ${group.color}`} />
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title} <span className="text-cyan-400 ml-3 font-black lowercase italic text-xs tracking-normal bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">({group.items.length} Jenis)</span></h3>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>

                    {/* Hide/Show Toggle */}
                    <button
                      onClick={() => toggleSector(group.id)}
                      className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all duration-700 cursor-pointer group/eye ml-4 shadow-lg active:scale-95"
                      title={collapsedSectors.has(group.id) ? "Tampilkan Sektor" : "Sembunyikan Sektor"}
                    >
                      {collapsedSectors.has(group.id) ? (
                        <EyeOff size={16} className="group-hover/eye:scale-110 transition-transform duration-700 rotate-12" />
                      ) : (
                        <Eye size={16} className="group-hover/eye:scale-110 transition-transform duration-700 text-cyan-400" />
                      )}
                    </button>
                  </div>

                  {/* Collapsible Content Grid with Smooth Transition */}
                  <div className={`grid transition-all duration-700 ease-in-out ${!collapsedSectors.has(group.id) ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 pb-4">
                        {group.items.map((item, idx) => {
                          const currentConstruction = activeConstructions?.find(c => c && c.buildingKey === item.key);

                          return (
                            <Fragment key={item.key || idx}>
                              <BuildingCard
                                item={item}
                                onBuild={handleBuildRequest}
                                construction={currentConstruction}
                                cumulative={
                                  group.id === "kelistrikan"
                                    ? (currentDataWithDeltas.sektor_listrik as any)[(KAPASITAS_LISTRIK_METADATA as any)[item.key]?.dataKey] || 0
                                    : budgetStorage.getCumulativeProduction()[item.key]
                                }
                                hasUraniumMines={uraniumStats.hasMines}
                                countryName={currentCountryName}
                              />
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
                  <p className="text-zinc-400 text-sm font-medium mt-2">Membangun <span className="text-white font-black underline">{confirmBuild.label}</span> untuk meningkatkan kapasitas produksi nasional.</p>
                </div>
              </div>

              {/* Main Content: 2-Column Grid Area */}
              <div className="flex-1 overflow-y-auto no-scrollbar py-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* Column 1: Stats & Info */}
                  <div className="space-y-6">
                    <div className="flex flex-col gap-3">
                      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic leading-none ml-1">Spesifikasi Proyek</span>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group relative">
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Biaya Total</span>
                          <span className="text-xl font-black text-amber-500 tracking-tight">
                            {(() => {
                              const session = gameStorage.getSession() as any;
                              const currentData = countries.find(c => c.name_id === session?.country || c.name_en === session?.country) || countries[0];
                              const currentIdeology = ideologyStorage.getCurrentIdeology(currentData?.ideology || "Demokrasi");
                              const isKomunisme = currentIdeology === "Komunisme";
                              const isFactory = confirmBuild.groupId === "manufaktur" || confirmBuild.groupId === "ekstraksi" || confirmBuild.groupId === "olahan_pangan";

                              let effectiveUnitCost = confirmBuild.cost;
                              if (isKomunisme && isFactory) effectiveUnitCost = Math.ceil(effectiveUnitCost * KOMUNISME_FACTORY_COST_MULTIPLIER);
                              const totalCost = Number(effectiveUnitCost || 0) * quantity;

                              return totalCost.toLocaleString('id-ID');
                            })()}
                          </span>
                          {(() => {
                            const session = gameStorage.getSession() as any;
                            const currentData = countries.find(c => c.name_id === session?.country || c.name_en === session?.country) || countries[0];
                            const currentIdeology = ideologyStorage.getCurrentIdeology(currentData?.ideology || "Demokrasi");
                            const isKomunisme = currentIdeology === "Komunisme";
                            const isFactory = confirmBuild.groupId === "manufaktur" || confirmBuild.groupId === "ekstraksi" || confirmBuild.groupId === "olahan_pangan";

                            let effectiveUnitCost = confirmBuild.cost;
                            if (isKomunisme && isFactory) effectiveUnitCost = Math.ceil(effectiveUnitCost * KOMUNISME_FACTORY_COST_MULTIPLIER);
                            const totalCost = Number(effectiveUnitCost || 0) * quantity;
                            const deficit = totalCost - budgetStorage.getBudget();

                            return deficit > 0 ? (
                              <span className="text-[10px] font-black text-rose-500 uppercase absolute -bottom-2 whitespace-nowrap">
                                Kurang: {deficit.toLocaleString('id-ID')}
                              </span>
                            ) : null;
                          })()}
                        </div>
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Waktu Satuan</span>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-cyan-500" />
                            <span className="text-xl font-black text-white tracking-tight">
                              {(() => {
                                const currentReligion = religionStorage.getCurrentReligion(currentData?.religion || "Islam");
                                const currentIdeology = ideologyStorage.getCurrentIdeology(currentData?.ideology || "Demokrasi");
                                const isProtestan = currentReligion === "Protestan"
                                const isTaoisme = currentReligion === "Taoisme";
                                const isDemokrasi = currentIdeology === "Demokrasi";
                                const isKapitalisme = currentIdeology === "Kapitalisme";
                                const isHeavyIndustry = confirmBuild.groupId === "manufaktur" || confirmBuild.groupId === "ekstraksi";

                                let effectiveBuildTime = confirmBuild.buildTime;
                                if (isProtestan) effectiveBuildTime = Math.ceil(effectiveBuildTime / PROTESTAN_PRODUCTION_SPEED_BONUS);
                                if (isTaoisme && isHeavyIndustry) effectiveBuildTime = Math.ceil(effectiveBuildTime * 1.25);
                                if (isDemokrasi) effectiveBuildTime = Math.ceil(effectiveBuildTime / DEMOKRASI_DECISION_SPEED_PENALTY);
                                if (isKapitalisme) effectiveBuildTime = Math.ceil(effectiveBuildTime / KAPITALISME_CONSTRUCTION_SPEED_BONUS);

                                return effectiveBuildTime.toLocaleString('id-ID');
                              })()} Hari
                            </span>
                          </div>
                        </div>
                        {(confirmBuild.groupId === "kelistrikan" || (confirmBuild.powerUsage && confirmBuild.powerUsage > 0)) && (
                          <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group col-span-2">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">
                              {confirmBuild.groupId === "kelistrikan" ? "Estimasi Output Energi" : "Estimasi Beban Energi"}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <Zap size={14} className={confirmBuild.groupId === "kelistrikan" ? "text-cyan-400" : "text-rose-500"} />
                              <span className={`text-xl font-black ${confirmBuild.groupId === "kelistrikan" ? "text-cyan-400" : "text-rose-500"} tracking-tight`}>
                                {confirmBuild.groupId === "kelistrikan" ? (confirmBuild.tarif).toLocaleString('id-ID') : (confirmBuild.powerUsage).toLocaleString('id-ID')} MW
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-zinc-950/40 border border-zinc-800 rounded-2xl p-5 text-center shadow-inner">
                      <span className="text-[10px] font-bold text-cyan-500/60 uppercase tracking-widest italic">Estimasi Penyelesaian Seluruh Unit</span>
                      <p className="text-lg font-black text-white mt-1 uppercase italic tracking-wider">
                        {(() => {
                          const currentReligion = religionStorage.getCurrentReligion(currentData?.religion || "Islam");
                          const currentIdeology = ideologyStorage.getCurrentIdeology(currentData?.ideology || "Demokrasi");
                          const isProtestan = currentReligion === "Protestan";
                          const isTaoisme = currentReligion === "Taoisme";
                          const isDemokrasi = currentIdeology === "Demokrasi";
                          const isKapitalisme = currentIdeology === "Kapitalisme";
                          const isHeavyIndustry = confirmBuild.groupId === "manufaktur" || confirmBuild.groupId === "ekstraksi";

                          let effectiveBuildTime = confirmBuild.buildTime;
                          if (isProtestan) effectiveBuildTime = Math.ceil(effectiveBuildTime / PROTESTAN_PRODUCTION_SPEED_BONUS);
                          if (isTaoisme && isHeavyIndustry) effectiveBuildTime = Math.ceil(effectiveBuildTime * 1.25);
                          if (isDemokrasi) effectiveBuildTime = Math.ceil(effectiveBuildTime / DEMOKRASI_DECISION_SPEED_PENALTY);
                          if (isKapitalisme) effectiveBuildTime = Math.ceil(effectiveBuildTime / KAPITALISME_CONSTRUCTION_SPEED_BONUS);

                          return formatGameDate(addDays(getStoredGameDate(), effectiveBuildTime * quantity));
                        })()}
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
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter italic leading-none">Unit Produksi</span>
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

              {/* Footer: Action Buttons */}
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

        {/* Queue Sidebar */}
        <div
          className={`absolute inset-0 z-[90] flex items-center justify-end transition-colors duration-300 ${showQueue ? 'bg-black/20 pointer-events-auto' : 'bg-transparent pointer-events-none'}`}
          onClick={() => setShowQueue(false)}
        >
          <div
            className={`bg-zinc-950/95 border-l border-zinc-800 w-full max-w-sm h-full shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col relative transition-transform duration-500 ease-in-out ${showQueue ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-xl">
                  <Clock className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Antrean Pembangunan</h3>
                  <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">{activeConstructions.length} Proyek Aktif</p>
                </div>
              </div>
              <button onClick={() => setShowQueue(false)} className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-400 hover:text-white transition-colors cursor-pointer">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar backdrop-blur-md">
              {activeConstructions.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 text-center gap-3 opacity-50">
                  <Wrench className="h-10 w-10 text-zinc-600" />
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Pabrik & Infrastruktur Sedang Kosong</p>
                </div>
              ) : (
                activeConstructions.map((item, idx) => {
                  const progress = calculateConstructionProgress(item.startDate, item.endDate, getStoredGameDate().getTime());
                  if (!progress) return null;
                  return (
                    <div key={item.id || idx} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000" style={{ width: `${progress.percentage}%` }} />
                      <div className="flex justify-between items-center relative z-10">
                        <h4 className="text-sm font-black text-white">{item.label}</h4>
                        <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">{progress.percentage}%</span>
                      </div>
                      <div className="flex flex-col gap-1 relative z-10 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                        <div className="flex justify-between">
                          <span>Mulai:</span>
                          <span className="text-zinc-400">{formatGameDate(new Date(item.startDate))}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Selesai:</span>
                          <span className="text-cyan-400">{formatGameDate(new Date(item.endDate))}</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-950 rounded-full mt-2 overflow-hidden border border-zinc-800/50">
                          <div className={`h-full transition-all duration-1000 ${progress.colorClass} shadow-[0_0_10px_rgba(6,182,212,0.2)]`} style={{ width: `${progress.percentage}%` }} />
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BuildingCard({ item, onBuild, construction, cumulative, hasUraniumMines, countryName }: { item: any, onBuild: (item: any) => void, construction?: any, cumulative: number, hasUraniumMines: boolean, countryName: string }) {
  const pbbMultipliers = pbbImpactLogic.getCountryMultipliers(countryName);
  const [showDetail, setShowDetail] = useState(false);
  const currentDate = getStoredGameDate().getTime();
  const progress = construction
    ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate)
    : null;



  return (
    <div className={`bg-zinc-900/40 border ${progress ? 'border-cyan-500/30 bg-cyan-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full min-h-[380px]`}>
      {/* Background Progress Highlight */}
      {progress && (
        <div
          className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000"
          style={{ width: `${progress.percentage}%` }}
        />
      )}

      {/* Info Modal Overlay (Absolute) */}
      {showDetail && (
        <div className="absolute inset-0 z-50 bg-zinc-950/98 backdrop-blur-md p-6 flex flex-col animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Info size={18} />
              </div>
              <div>
                <h5 className="text-[14px] font-black text-white uppercase tracking-wider italic">Detail Fasilitas</h5>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none mt-0.5">Spesifikasi & Biaya</p>
              </div>
            </div>
            <button
              onClick={() => setShowDetail(false)}
              className="p-2.5 hover:bg-zinc-800/80 rounded-xl text-zinc-500 hover:text-white transition-all cursor-pointer border border-transparent hover:border-zinc-700"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto no-scrollbar pr-1">
            <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/30">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] opacity-60">Nama Bangunan</span>
              <h4 className="text-xl font-black text-amber-400 uppercase italic leading-tight tracking-tight">{item.label}</h4>
            </div>

            <div className="grid gap-2">

              {item.powerUsage > 0 && (
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-500">
                      <Zap size={12} />
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Beban Energi</span>
                  </div>
                  <span className="text-[14px] font-black text-amber-500">{item.powerUsage?.toLocaleString('id-ID')} MW</span>
                </div>
              )}

              {item.konsumsi_uranium > 0 && (
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-500">
                      <Radiation size={12} />
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Konsumsi Uranium</span>
                  </div>
                  <span className="text-[14px] font-black text-emerald-500">-{item.konsumsi_uranium?.toLocaleString('id-ID')} <span className="text-[9px] text-emerald-500/50 italic opacity-80">KG / HARI</span></span>
                </div>
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
            {item.desc || "Infrastruktur"}
          </div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            Terbangun: {item.count?.toLocaleString('id-ID')} Unit {item.groupId !== "kelistrikan" && (item.powerUsage ?? 0) > 0 && `(${(item.count * item.powerUsage).toLocaleString('id-ID')} MW)`}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col relative z-10 mt-1">
        <h4 className="text-[17px] font-black text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors uppercase italic leading-tight mb-3">
          {item.label}
        </h4>

        <div className="flex flex-col gap-2.5 flex-1">

          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-amber-500/10 rounded-lg">
              <TrendingUp size={12} className={item.groupId === 'ekstraksi' && pbbMultipliers.resource < 1 ? 'text-rose-500 animate-pulse' : 'text-amber-500'} />
            </div>
            <span className={`text-[12px] font-bold ${item.groupId === 'ekstraksi' && pbbMultipliers.resource < 1 ? 'text-rose-500' : 'text-amber-500/90'}`}>
              Produksi: +{Math.floor(item.tarif * (item.groupId === 'ekstraksi' ? pbbMultipliers.resource : 1)).toLocaleString('id-ID')} {item.unit}/unit
            </span>
          </div>

          {item.key === '1_tambang_emas' && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-emerald-500/10 rounded-lg">
                <Coins size={12} className="text-emerald-500" />
              </div>
              <span className="text-[12px] font-bold text-emerald-500/90">
                Pendapatan Kas: +150/hari
              </span>
            </div>
          )}

          {item.konsumsi_uranium > 0 && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-emerald-500/10 rounded-lg">
                <Radiation size={12} className="text-emerald-500" />
              </div>
              <span className="text-[12px] font-bold text-emerald-500/90">
                Konsumsi Uranium: -{item.konsumsi_uranium?.toLocaleString('id-ID')} KG/hari
              </span>
            </div>
          )}

          {(item.groupId !== "kelistrikan" && (item.powerUsage ?? 0) >= 0) && (
            <>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-rose-500/10 rounded-lg">
                  <Zap size={12} className="text-rose-500/90" />
                </div>
                <span className="text-[12px] font-bold text-rose-500/80">
                  Konsumsi: {Math.max(item.powerUsage, 1).toLocaleString('id-ID')} MW/bangunan
                </span>
              </div>
              <div className="flex items-center gap-2.5 ml-1 border-l-2 border-rose-500/10 pl-3">
                <div className="p-1.5 bg-rose-500/5 rounded-lg">
                  <Activity size={12} className="text-rose-400/70" />
                </div>
                <span className="text-[11px] font-bold text-rose-400/70 uppercase">
                  Total Konsumsi Listrik: {(item.count * Math.max(item.powerUsage, 1)).toLocaleString('id-ID')} MW
                </span>
              </div>
            </>
          )}



          {!progress && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-zinc-800/50 rounded-lg">
                <Clock size={12} className="text-zinc-500" />
              </div>
              <span className="text-[11px] font-bold text-zinc-500 italic">Waktu: {item.buildTime?.toLocaleString('id-ID')} Hari</span>
            </div>
          )}
        </div>

        {/* New Total Output Section */}
        <div className="mt-4 pt-4 border-t border-zinc-800/30 flex flex-col gap-1.5 bg-zinc-950/30 rounded-2xl p-4 border border-zinc-800/20 shadow-inner">
          <div className="flex justify-between items-baseline gap-2">
            <span className="text-[11px] font-black text-cyan-500/80 uppercase tracking-[0.15em] italic">
              {item.groupId === "kelistrikan" ? "TOTAL PRODUKSI:" : "STOK GUDANG:"}
            </span>
            <span className="text-[16px] font-black text-cyan-400 tracking-tight">
              {(Math.floor(item.groupId === "kelistrikan" ? (item.tarif * item.count) : cumulative) || 0).toLocaleString('id-ID')} <span className="text-[10px] text-cyan-500/50 font-normal uppercase italic ml-1">{item.unit}</span>
            </span>
          </div>
        </div>
      </div>

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
              <span className="text-sm font-black text-zinc-400 tracking-tight mt-1">{item.cost?.toLocaleString('id-ID')}</span>
            </div>
            {item.key === "1_pembangkit_listrik_tenaga_nuklir" && !hasUraniumMines ? (
              <button disabled className="flex-1 py-3.5 rounded-2xl bg-zinc-800 text-rose-500/40 text-[9px] font-black uppercase tracking-tight border border-rose-500/20 cursor-not-allowed flex flex-col items-center justify-center leading-none">
                <span className="text-[7px] text-zinc-500 mb-0.5">SYARAT GAGAL</span>
                BUTUH TAMBANG URANIUM
              </button>
            ) : (
              <button
                onClick={(e) => { e.stopPropagation(); onBuild(item); }}
                className="flex-1 py-3.5 rounded-2xl bg-cyan-600 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(8,145,178,0.4)] transition-all cursor-pointer active:scale-95 border border-cyan-400/20"
              >
                Bangun
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

