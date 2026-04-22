import React, { useState, useEffect, useMemo } from "react"
import {
  X, ArrowRightLeft, TrendingUp, TrendingDown, Globe, Ship, Landmark, BarChart3,
  Cpu, Car, Bike, Construction, TreePine, Droplet, Cookie, Croissant, Pill, FlaskConical, Beef, Soup,
  Bird, Milk, Leaf, Shell, Fish, Sprout, Utensils, Apple, Bean, Layers, Mountain, Gem, Waves, Flame,
  Battery, Droplets, Box, Pickaxe, Radio, Coffee, Carrot, Eye, ChevronRight, Plus,
  Target, Shield, Sword, Navigation, Ban, History as HistoryIcon, Newspaper, ChevronLeft, Sparkles
} from "lucide-react"
import { AddTradePartnerModal } from "./mitra_dagang_internasional/AddTradePartnerModal"
import { CountryData } from "@/app/database/data/semua_fitur_negara/index"

import { tradeStorage } from "./TradeStorage"
import { buyPriceMap, sellPriceMap, labelsMap, baseKeyMapping, getDynamicPrice, getNationalLogisticsMultiplier } from "./tradeData"
import { TradePriceChart } from "./TradePriceChart"
import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime"
import { getInitialAgreements } from "@/app/database/data/database_mitra_perdagangan/agreementsRegistry"
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage"
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage"
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara"
import { countries } from "@/app/database/data/negara/benua/index"
import { gameStorage } from "@/app/game/gamestorage"


import {
  produkIndustriRate,
  mineralKritisRate
} from "@/app/database/data/semua_fitur_negara";
import { militerRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer";
import { INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { EksporHalaman } from "./ekspor_impor/ekspor/EksporHalaman";
import { ImporHalaman } from "./ekspor_impor/impor/ImporHalaman";
import { EksporEksekusi } from "./ekspor_impor/ekspor/EksporEksekusi";
import { ImporEksekusi } from "./ekspor_impor/impor/ImporEksekusi";
import { HistoriEkspor } from "./ekspor_impor/ekspor/HistoriEkspor";
import { HistoriImport } from "./ekspor_impor/impor/HistoriImport";
import BeritaHalaman from "./berita/BeritaHalaman";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function PerdaganganModal({ isOpen, onClose, activeMenu, setActiveMenu }: ModalProps) {
  const session = tradeStorage.getSession();
  const currentCountry = tradeStorage.getCurrentCountry(session);

  // Local state for managed trade data
  const [managedTrades, setManagedTrades] = React.useState<any>(null);
  const [isAddPartnerOpen, setIsAddPartnerOpen] = React.useState(false);
  const [userBudget, setUserBudget] = React.useState(budgetStorage.getBudget());

  React.useEffect(() => {
    if (currentCountry) {
      const savedTrades = tradeStorage.getTrade(currentCountry.name_en);
      if (savedTrades) {
        setManagedTrades(savedTrades);
      } else {
        // Use predefined perjanjian from database
        const defaults = getInitialAgreements(currentCountry.name_en, currentCountry.name_id);
        if (defaults.length > 0) {
          setManagedTrades(defaults);
        } else {
          // Fallback to initial perjanjian from countries data
          setManagedTrades(currentCountry.geopolitik?.perjanjian || []);
        }
      }
    }
  }, [currentCountry, isOpen]);

  React.useEffect(() => {
    const handleUpdate = () => setUserBudget(budgetStorage.getBudget());
    window.addEventListener('budget_storage_updated', handleUpdate);
    
    return () => {
      window.removeEventListener('budget_storage_updated', handleUpdate);
    };
  }, []);

  const handleAddProposal = (target: CountryData, waitDays: number, chance: number) => {
    const newAgreement = {
      mitra: target.name_id,
      type: 'Perdagangan',
      status: 'Tertunda',
      startDate: getStoredGameDate().toISOString(),
      targetDate: new Date(getStoredGameDate().getTime() + waitDays * 24 * 60 * 60 * 1000).toISOString(),
      chance: chance,
      details: 'Evaluasi Hubungan Bilateral'
    };
    const currentTrades = managedTrades || [];
    const updatedTrades = [...currentTrades, newAgreement];
    setManagedTrades(updatedTrades);
    tradeStorage.saveTrade(currentCountry.name_en, updatedTrades);

    // Send Inbox Notification
    inboxStorage.addMessage({
      source: 'Kementerian Perdagangan',
      subject: `Pengajuan Kerja Sama Perdagangan ke ${target.name_id} Telah Dikirim`,
      time: 'Baru saja',
      priority: 'low'
    });
  };

  // Evaluate pending trades when the component renders or opens
  React.useEffect(() => {
    if (!managedTrades || !currentCountry) return;

    let changed = false;
    const today = getStoredGameDate();

    const newTrades = managedTrades.map((t: any) => {
      if (t.status === 'Tertunda' && t.targetDate) {
        const targetDate = new Date(t.targetDate);
        if (today >= targetDate) {
          changed = true;
          // Determine success based on chance
          const isAccepted = Math.random() * 100 <= (t.chance || 40);

          // Send Inbox Notification for result
          inboxStorage.addMessage({
            source: 'Diplomasi Internasional',
            subject: isAccepted
              ? `Kabar Baik! Pengajuan Perdagangan dengan ${t.mitra} DISETUJUI`
              : `Sayang Sekali, Pengajuan Perdagangan dengan ${t.mitra} DITOLAK`,
            time: 'Baru saja',
            priority: isAccepted ? 'medium' : 'high'
          });

          return {
            ...t,
            status: isAccepted ? 'Aktif' : 'Rejected',
            details: isAccepted ? 'Strategic Trade Partnership' : 'Pengajuan Ditolak'
          };
        }
      }
      return t;
    });

    if (changed) {
      setManagedTrades(newTrades);
      tradeStorage.saveTrade(currentCountry.name_en, newTrades);
    }
  }, [isOpen]); // Only run when modal opens/closes to prevent infinite loops

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas || {};
  const [budgetData, setBudgetData] = useState(budgetStorage.getData());

  // Listen for budget/production updates
  useEffect(() => {
    const handleUpdate = () => {
      setBudgetData(budgetStorage.getData());
    };
    window.addEventListener('budget_storage_updated', handleUpdate);
    return () => window.removeEventListener('budget_storage_updated', handleUpdate);
  }, []);

  // SINGLE SOURCE OF TRUTH: Derive internal state directly from the activeMenu prop (URL)
  const { tradeType, selectedTradePartner } = useMemo(() => {
    if (!activeMenu.startsWith("Menu:Perdagangan")) return { tradeType: "impor" as const, selectedTradePartner: null as string | null };
    const parts = activeMenu.split(":");
    let type = (parts[2] as any) || "impor";
    let partner = parts[3] || null;

    // Deep-link support: Handle legacy or alternate format like Menu:Perdagangan:partner=USA
    if (type.includes("=")) {
      const [action, item] = type.split("=");
      if (action === "partner") {
        partner = item;
        type = "impor"; // Default to impor tab when jumping to a partner
      } else if (action === "impor" || action === "ekspor") {
        type = action;
      }
    }

    return { tradeType: type, selectedTradePartner: partner };
  }, [activeMenu]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const [historiType, setHistoriType] = useState<"impor" | "ekspor">("impor");
  const [logisticsSpeedup, setLogisticsSpeedup] = useState(0);

  // Logic to calculate Logistics Speedup
  const calculateLogisticsSpeedup = () => {
    const multipliers = getNationalLogisticsMultiplier();
    setLogisticsSpeedup(multipliers.shippingSpeedup);
  };

  useEffect(() => {
    calculateLogisticsSpeedup();
    window.addEventListener("building_storage_updated", calculateLogisticsSpeedup);
    return () => window.removeEventListener("building_storage_updated", calculateLogisticsSpeedup);
  }, []);

  // Update AI Trade Badge Count
  const [aiTradeUpdateTick, setAiTradeUpdateTick] = useState(0);
  useEffect(() => {
    const handleUpdate = () => setAiTradeUpdateTick(prev => prev + 1);
    window.addEventListener("ai_trade_updated", handleUpdate);
    return () => window.removeEventListener("ai_trade_updated", handleUpdate);
  }, []);


  // Helper to get formatted name/ID for database lookups
  const getCountryKey = (name: string) => name.toLowerCase().replace(/ /g, "_");

  // Determine which country data to display in the sidebar/stats
  // Synchronize with database: Always prioritize lookup in the official countries list
  const activeCountryData = useMemo(() => {
    if (!selectedTradePartner) return null;

    // 1. Determine the name we are looking for
    const targetName = selectedTradePartner;

    // 2. Search in the regional countries database (main source for all stats)
    const found = countries.find(c =>
      c.name_id?.toLowerCase() === targetName.toLowerCase() ||
      c.name_en?.toLowerCase() === targetName.toLowerCase() ||
      getCountryKey(c.name_id || "") === getCountryKey(targetName)
    );

    // 3. Fallback to currentCountry only if lookup fails (should rarely happen if selection exists)
    return found || null;
  }, [selectedTradePartner]);

  // Logic for Minerals - depends on tradeType
  const getContextualData = () => {
    if (tradeType === "ekspor") return currentCountry;
    return activeCountryData || currentCountry;
  };

  const isPlayerContext = tradeType === "ekspor";

  // Helper for Manufacturing count (matches ProduksiHub)
  const getManufacturingCount = (key: string, baseVal: number, usePlayerDelta: boolean) => {
    if (!usePlayerDelta) return baseVal;
    const delta = (buildingDeltas[key] || 0) as number;
    return baseVal + delta;
  };

  // Standard Database Orders
  const mineralOrder = ["emas", "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi"];
  const manufakturOrder = ["semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "pupuk"];
  const peternakanOrder = ["ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing"];
  const perikananOrder = ["udang", "ikan", "mutiara"];
  const agrikulturOrder = ["padi", "gandum", "jagung", "umbi", "kedelai", "kelapa_sawit", "teh", "kopi", "kakao", "tebu", "sayur", "karet", "kapas", "tembakau"];
  const olahanPanganOrder = ["air_mineral", "gula", "roti", "pengolahan_daging", "mie_instan", "minyak_goreng", "susu", "pakan_ternak", "ikan_kaleng", "kopi_teh"];
  const farmasiOrder = ["farmasi"];
  const militerOrder = ["pabrik_amunisi"];

  // Logic for Minerals
  const mineralDataToBuildingKey: Record<string, string> = {
    emas: "gold_mine", uranium: "uranium_mine", batu_bara: "coal_mine",
    minyak_bumi: "oil_well", gas_alam: "gas_well", garam: "salt_mine",
    nikel: "nickel_mine", litium: "lithium_mine", tembaga: "copper_mine",
    aluminium: "aluminum_mine", logam_tanah_jarang: "rare_earth_mine",
    bijih_besi: "iron_ore_mine"
  };

  const manufakturKeys = ["electronics_factory", "car_factory", "motorcycle_factory", "smelter", "cement_factory", "sawmill", "fertilizer_factory"];
  const olahanPanganKeys = ["bottled_water_factory", "sugar_factory", "bakery_factory", "meat_processing_factory", "noodle_factory", "oil_factory", "milk_factory", "feed_factory", "canned_fish_factory", "coffee_tea_factory"];
  const agrikulturKeys = ["1_sawah_padi", "2_ladang_gandum", "3_ladang_jagung", "4_ladang_umbi", "5_ladang_kedelai", "6_perkebunan_sawit", "7_perkebunan_teh", "8_perkebunan_kopi", "9_perkebunan_kakao", "10_perkebunan_tebu", "11_kebun_sayur", "12_perkebunan_karet", "13_perkebunan_kapas", "14_perkebunan_tembakau"];
  const peternakanKeys = ["1_peternakan_unggas", "2_peternakan_sapi_perah", "3_peternakan_sapi_potong", "4_peternakan_domba_kambing"];
  const perikananKeys = ["1_tambak_udang", "2_budidaya_ikan_tawar", "3_budidaya_mutiara"];

  const minerals = useMemo(() => {
    const data = getContextualData();
    const lookupId = data?.name_id || data?.name_en || "indonesia";
    const extractionStats = data?.sektor_ekstraksi || {};

    return mineralOrder.map(key => {
      const baseVal = (extractionStats as any)[key] ??
        (data?.sektor_ekstraksi as any)?.[key] ?? 0;

      const buildingKey = mineralDataToBuildingKey[key] || key;
      const delta = isPlayerContext ? ((buildingDeltas[buildingKey] || 0) as number) : 0;
      return [key, baseVal + delta];
    }) as [string, number][];
  }, [activeCountryData, tradeType, currentCountry, buildingDeltas]);

  const manufakturItems = useMemo(() => {
    const data = getContextualData();
    return manufakturOrder.map(key => {
      const baseVal = (data?.sektor_manufaktur as any)?.[key] ?? 0;
      const factoryKey = manufakturKeys.find(mk => mk === key || mk.replace('_factory', '') === key) || key;
      return [key, getManufacturingCount(factoryKey, baseVal, isPlayerContext)];
    }) as [string, number][];
  }, [activeCountryData, tradeType, currentCountry, buildingDeltas]);

  const olahanPanganItems = useMemo(() => {
    const data = getContextualData();
    return olahanPanganOrder.map(key => {
      const baseVal = (data?.sektor_olahan_pangan as any)?.[key] ?? 0;
      const factoryKey = olahanPanganKeys.find(mk => mk === key || mk.replace('_factory', '') === key) || key;
      return [key, getManufacturingCount(factoryKey, baseVal, isPlayerContext)];
    }) as [string, number][];
  }, [activeCountryData, tradeType, currentCountry, buildingDeltas]);

  const farmasiItems = useMemo(() => {
    const data = getContextualData();
    return farmasiOrder.map(key => {
      const baseVal = (data?.sektor_farmasi as any)?.[key] ?? 0;
      return [key, getManufacturingCount("pharma_factory", baseVal, isPlayerContext)];
    }) as [string, number][];
  }, [activeCountryData, tradeType, currentCountry, buildingDeltas]);

  const peternakanItems = useMemo(() => {
    const data = getContextualData();
    return peternakanOrder.map(key => {
      const baseVal = (data?.sektor_peternakan as any)?.[key] ?? 0;
      const factoryKey = peternakanKeys.find(pk => pk.includes(key)) || key;
      const delta = isPlayerContext ? ((buildingDeltas[factoryKey] || buildingDeltas[key] || 0) as number) : 0;
      return [key, baseVal + delta];
    }) as [string, number][];
  }, [activeCountryData, tradeType, currentCountry, buildingDeltas]);

  const perikananItems = useMemo(() => {
    const data = getContextualData();
    return perikananOrder.map(key => {
      const baseVal = (data?.sektor_perikanan as any)?.[key] ?? 0;
      const factoryKey = perikananKeys.find(pk => pk.includes(key)) || key;
      const delta = isPlayerContext ? ((buildingDeltas[factoryKey] || buildingDeltas[key] || 0) as number) : 0;
      return [key, baseVal + delta];
    }) as [string, number][];
  }, [activeCountryData, tradeType, currentCountry, buildingDeltas]);

  const agrikulturItems = useMemo(() => {
    const data = getContextualData();
    return agrikulturOrder.map(key => {
      const baseVal = (data?.sektor_agrikultur as any)?.[key] ?? 0;
      const factoryKey = agrikulturKeys.find(ak => ak.includes(key)) || key;
      const delta = isPlayerContext ? ((buildingDeltas[factoryKey] || buildingDeltas[key] || 0) as number) : 0;
      return [key, baseVal + delta];
    }) as [string, number][];
  }, [activeCountryData, tradeType, currentCountry, buildingDeltas]);

  const militerItems = useMemo(() => {
    const data = getContextualData();
    return militerOrder.map(key => {
      const baseVal = (data?.pabrik_militer as any)?.[key] || 0;
      const delta = isPlayerContext ? ((buildingDeltas[key] || buildingDeltas["pabrik_amunisi"] || 0) as number) : 0;
      return [key, baseVal + delta];
    }) as [string, number][];
  }, [activeCountryData, tradeType, currentCountry, buildingDeltas]);

  const [selectedKey, setSelectedKey] = useState<string>(minerals[0]?.[0] || 'emas');
  const [showMinerals, setShowMinerals] = useState(true);
  const [showManufaktur, setShowManufaktur] = useState(false);
  const [showPeternakan, setShowPeternakan] = useState(false);
  const [showAgrikultur, setShowAgrikultur] = useState(false);
  const [showPerikanan, setShowPerikanan] = useState(false);
  const [showIndustriPengolahan, setShowIndustriPengolahan] = useState(false);
  const [showFarmasi, setShowFarmasi] = useState(false);
  const [showMiliter, setShowMiliter] = useState(false);

  const mineralCount = useMemo(() => minerals.filter(m => m[1] > 0).length, [minerals]);
  const manufakturCount = useMemo(() => manufakturItems.filter(m => m[1] > 0).length, [manufakturItems]);
  const peternakanCount = useMemo(() => peternakanItems.filter(m => m[1] > 0).length, [peternakanItems]);
  const agrikulturCount = useMemo(() => agrikulturItems.filter(m => m[1] > 0).length, [agrikulturItems]);
  const perikananCount = useMemo(() => perikananItems.filter(m => m[1] > 0).length, [perikananItems]);
  const pengolahanCount = useMemo(() => olahanPanganItems.filter(m => m[1] > 0).length, [olahanPanganItems]);
  const farmasiCount = useMemo(() => farmasiItems.filter(m => m[1] > 0).length, [farmasiItems]);
  const militerCount = useMemo(() => militerItems.filter(m => m[1] > 0).length, [militerItems]);

  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("1w");
  const [activeChartTab, setActiveChartTab] = useState<"buy" | "sell">("buy");
  const [executionModalItem, setExecutionModalItem] = useState<{ type: "buy" | "sell" } | null>(null);

  const getProductionRate = (key: string) => {
    // 1. Check Mineral
    const minRate = (mineralKritisRate as any)[Object.keys(mineralKritisRate).find(k => (mineralKritisRate as any)[k].dataKey === key) || ""];
    if (minRate) return minRate.produksi ?? 1;

    // 2. Check Manufacturing / Industry (Categories 2, 4, 5)
    const mfgKey = Object.keys(baseKeyMapping).find(k => baseKeyMapping[k] === key) || key;
    const mfgRate = (produkIndustriRate as any)[mfgKey] || (produkIndustriRate as any)[key] || (produkIndustriRate as any)[key + "_factory"];
    if (mfgRate) return mfgRate.produksi ?? 1;

    // 3. Check Military (Category 6)
    const milRate = (militerRate as any)[key];
    if (milRate) return milRate.produksi ?? 1;

    return 1; // Default
  };

  const getUnit = (key: string) => {
    // 1. Check Mineral
    const minRate = (mineralKritisRate as any)[Object.keys(mineralKritisRate).find(k => (mineralKritisRate as any)[k].dataKey === key) || ""];
    if (minRate) return minRate.satuan ?? "Unit";

    // 2. Check Manufacturing
    const mfgKey = Object.keys(baseKeyMapping).find(k => baseKeyMapping[k] === key) || key;
    const mfgRate = (produkIndustriRate as any)[mfgKey] || (produkIndustriRate as any)[key] || (produkIndustriRate as any)[key + "_factory"];
    if (mfgRate) return mfgRate.satuan ?? "Unit";

    // 3. Check Military
    const milRate = (militerRate as any)[key];
    if (milRate) return milRate.satuan ?? "Unit";

    return "Unit";
  };

  useEffect(() => {
    if (isOpen && activeMenu.startsWith("Menu:Perdagangan:")) {
      const detail = activeMenu.split(":")[2];
      if (detail.includes("=")) {
        const [action, item] = detail.split("=");
        if (action === "partner") {
          // Handled by useMemo derivation
        } else {
          const type = action === "impor" ? "buy" : "sell";
          setSelectedKey(item);
          setExecutionModalItem({ type });
          // TradeType handled by useMemo derivation
          setActiveChartTab(type === "buy" ? "buy" : "sell");
        }
      }
    } else if (isOpen && activeMenu === "Menu:Perdagangan") {
      setExecutionModalItem(null);
    }
  }, [activeMenu, isOpen]);

  const currentDate = getStoredGameDate();
  const baseBuyPrice = getDynamicPrice(selectedKey, "buy", currentDate);
  const baseSellPrice = getDynamicPrice(selectedKey, "sell", currentDate);

  const iconMap: Record<string, any> = {
    emas: Gem, uranium: Radio, batu_bara: Layers, minyak_bumi: Droplets, gas_alam: Flame, garam: Waves,
    nikel: Box, litium: Battery, tembaga: Pickaxe, aluminium: Layers, logam_tanah_jarang: Cpu, bijih_besi: Mountain,
    semikonduktor: Cpu, mobil: Car, sepeda_motor: Bike, smelter: FlaskConical, semen_beton: Construction,
    kayu: TreePine, air_mineral: Droplet, gula: Cookie, roti: Croissant, farmasi: Pill,
    pupuk: FlaskConical, pengolahan_daging: Beef, mie_instan: Soup,
    ayam_unggas: Bird, sapi_perah: Milk, sapi_potong: Beef, domba_kambing: Leaf,
    udang_kerang: Shell, ikan: Fish,
    padi: Sprout, gandum_jagung: Utensils, sayur_umbi: Apple, kedelai: Bean,
    kelapa_sawit: Droplets, kopi_teh_kakao: Coffee, tebu: Leaf,
    pabrik_amunisi: Box
  };

  const getIcon = (key: string, size: string = "h-4 w-4") => {
    const Icon = iconMap[key] || BarChart3;
    return <Icon className={size} />;
  };

  const selectedItem = [
    ...minerals, ...manufakturItems, ...olahanPanganItems, ...farmasiItems,
    ...peternakanItems, ...perikananItems, ...agrikulturItems, ...militerItems
  ].find(m => m[0] === selectedKey);

  const selectedName = labelsMap[selectedKey] || selectedKey.charAt(0).toUpperCase() + selectedKey.slice(1).replace(/_/g, ' ');
  const selectedUnits = selectedItem ? (selectedItem[1] as number) : 0;

  const exportPriceVal = baseSellPrice;
  const importPriceVal = baseBuyPrice;

  const activePartnersList = useMemo(() => {
    const list = (managedTrades?.filter((a: any) =>
      (a.type === 'Perdagangan' || a.jenis === 'Perdagangan') &&
      a.mitra?.toLowerCase() !== currentCountry?.name_id?.toLowerCase() &&
      a.mitra?.toLowerCase() !== currentCountry?.name_en?.toLowerCase()
    ) || []);

    if (list.length > 0) {
      return [...list].sort((a: any, b: any) => a.mitra.localeCompare(b.mitra));
    }

    const defaults = getInitialAgreements(currentCountry.name_en, currentCountry.name_id);
    if (defaults.length > 0) return defaults;

    return [
      { mitra: "Afrika Selatan", status: "Aktif" },
      { mitra: "Tiongkok", status: "Aktif" },
      { mitra: "Uni Emirat Arab", status: "Aktif" },
      { mitra: "Vietnam", status: "Aktif" }
    ];
  }, [managedTrades, currentCountry]);

  useEffect(() => {
    if (isOpen && !selectedTradePartner && (tradeType === "impor" || tradeType === "ekspor") && activePartnersList.length > 0) {
      // Cari negara yang berawalan huruf 'A' terlebih dahulu, jika tidak ada baru ambil urutan pertama
      const partnerWithA = activePartnersList.find((a: any) => a.mitra?.toUpperCase().startsWith('A'));
      const firstPartner = partnerWithA || activePartnersList[0];
      
      setActiveMenu(`Menu:Perdagangan:${tradeType}:${firstPartner.mitra}`);
    }
  }, [isOpen, selectedTradePartner, tradeType, activePartnersList]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl">
              <ArrowRightLeft className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-none">Hub Perdagangan Strategis</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">{currentCountry.flag} {currentCountry.name_id} â€” Strategic Trade Terminal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-inner group/budget overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/budget:opacity-100 transition-opacity duration-500"></div>
              <div className="p-1.5 bg-emerald-500/10 rounded-lg group-hover/budget:bg-emerald-500 group-hover/budget:text-white transition-all duration-500">
                <Landmark className="h-4 w-4 text-emerald-500 group-hover/budget:text-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-0.5 opacity-60 group-hover/budget:opacity-100 transition-opacity">Kas Negara</span>
                <span className="text-sm font-black text-white tracking-tight italic tabular-nums leading-none">
                  ${userBudget.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <button className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group shadow-[0_0_15px_rgba(59,130,246,0.1)] active:scale-95">
              <Ship className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform" />
            </button>
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden relative z-10">
          {/* Mitra Dagang Sidebar */}
          <div className="w-[320px] border-r border-zinc-900 bg-zinc-950/50 flex flex-col backdrop-blur-sm">
            <div className="p-6 border-b border-zinc-900/80 shrink-0">
              <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] leading-none italic whitespace-nowrap">Mitra Dagang ({activePartnersList.filter((a: any) => a.status === 'Aktif' || !a.status || a.status !== 'Rejected').length})</h3>
              <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic mt-1">Negara Tujuan / Sumber</p>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent p-4 space-y-1.5">
              <div className="h-px bg-zinc-900 my-3"></div>
              {activePartnersList.filter((a: any) => a.status === 'Aktif' || !a.status || a.status !== 'Rejected').map((agreement: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => {
                    const nextPartner = agreement.mitra;
                    setActiveMenu(`Menu:Perdagangan:${tradeType === 'histori' || tradeType === 'berita' || tradeType === 'tawaran_ai' ? 'impor' : tradeType}:${nextPartner}`);
                  }}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-2xl transition-all cursor-pointer border ${selectedTradePartner === agreement.mitra ? 'bg-emerald-600/10 border-emerald-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'
                    }`}
                >
                  <div className={`p-2 rounded-xl ${selectedTradePartner === agreement.mitra ? 'bg-emerald-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>
                    <Globe className="h-4 w-4" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <span className="text-[14px] font-black uppercase tracking-tight block leading-tight truncate">{agreement.mitra}</span>
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic">{agreement.status === 'Aktif' ? 'Hubungan Aktif' : 'Diproses Sistem'}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Commodities Sidebar */}
          <div className="w-[320px] border-r border-zinc-900 bg-zinc-950/50 flex flex-col backdrop-blur-sm">
            <div className="p-6 border-b border-zinc-900/80 shrink-0">
              <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] leading-none italic text-center">
                {selectedTradePartner ? `Daftar Komoditas ${selectedTradePartner}` : 
                 (tradeType === "berita" || tradeType === "tawaran_ai") ? "Monitoring Global" : "Pilih Negara Terlebih Dahulu"}
              </h3>
              <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic mt-1 text-center">
                {selectedTradePartner ? "Kategori Produksi 1 - 8" : 
                 (tradeType === "berita" || tradeType === "tawaran_ai") ? "Statistik & Informasi Umum" : "Silakan pilih mitra dagang di sidebar kiri"}
              </p>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              {!selectedTradePartner ? (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 opacity-40">
                  <Globe className="h-12 w-12 text-zinc-700" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    {(tradeType === "berita" || tradeType === "tawaran_ai") ? "Data Global Aktif" : "Data Komoditas Tidak Tersedia"}
                  </p>
                </div>
              ) : (
                <>
                  {/* Minerals */}
                  <div className="border-b border-zinc-900/80">
                    <div onClick={() => setShowMinerals(!showMinerals)} className="p-8 flex items-center justify-between cursor-pointer group">
                      <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic group-hover:text-blue-400 transition-colors">1. Mineral Kritis ({mineralCount})</h3>
                      <button className={`p-1 rounded-lg hover:bg-zinc-900 transition-all ${showMinerals ? 'text-blue-500 bg-blue-500/10' : 'text-zinc-500'}`}><Eye className="h-4 w-4" /></button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${showMinerals ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-8 space-y-2">
                        {minerals.map(([key, val]) => (
                          <button key={key} disabled={val === 0} onClick={() => setSelectedKey(key)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${val === 0 ? 'cursor-not-allowed border-transparent opacity-50' : selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-xl ${val === 0 ? 'bg-zinc-900 text-red-500' : selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>
                                {val === 0 ? <Ban className="h-4 w-4" /> : getIcon(key)}
                              </div>
                              <span className="text-[12px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')} <span className={val === 0 ? "text-red-500" : "text-green-500"}> ({val})</span></span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Manufaktur */}
                  <div className="border-b border-zinc-900/80">
                    <div onClick={() => setShowManufaktur(!showManufaktur)} className="p-8 flex items-center justify-between cursor-pointer group">
                      <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic group-hover:text-blue-400 transition-colors">2. Manufaktur ({manufakturCount})</h3>
                      <button className={`p-1 rounded-lg hover:bg-zinc-900 transition-all ${showManufaktur ? 'text-blue-500 bg-blue-500/10' : 'text-zinc-500'}`}><Eye className="h-4 w-4" /></button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${showManufaktur ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-8 space-y-2">
                        {manufakturItems.map(([key, val]) => (
                          <button key={key} disabled={val === 0} onClick={() => setSelectedKey(key)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${val === 0 ? 'cursor-not-allowed border-transparent opacity-50' : selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-xl ${val === 0 ? 'bg-zinc-900 text-red-500' : selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>
                                {val === 0 ? <Ban className="h-4 w-4" /> : getIcon(key)}
                              </div>
                              <span className="text-[12px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')} <span className={val === 0 ? "text-red-500" : "text-green-500"}> ({val})</span></span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Peternakan */}
                  <div className="border-b border-zinc-900/80">
                    <div onClick={() => setShowPeternakan(!showPeternakan)} className="p-8 flex items-center justify-between cursor-pointer group">
                      <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic group-hover:text-blue-400 transition-colors">3. Sektor Peternakan ({peternakanCount})</h3>
                      <button className={`p-1 rounded-lg hover:bg-zinc-900 transition-all ${showPeternakan ? 'text-blue-500 bg-blue-500/10' : 'text-zinc-500'}`}><Eye className="h-4 w-4" /></button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${showPeternakan ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-8 space-y-2">
                        {peternakanItems.map(([key, val]) => (
                          <button key={key} disabled={val === 0} onClick={() => setSelectedKey(key)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${val === 0 ? 'cursor-not-allowed border-transparent opacity-50' : selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-xl ${val === 0 ? 'bg-zinc-900 text-red-500' : selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>
                                {val === 0 ? <Ban className="h-4 w-4" /> : getIcon(key)}
                              </div>
                              <span className="text-[12px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')} <span className={val === 0 ? "text-red-500" : "text-green-500"}> ({val})</span></span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Agrikultur */}
                  <div className="border-b border-zinc-900/80">
                    <div onClick={() => setShowAgrikultur(!showAgrikultur)} className="p-8 flex items-center justify-between cursor-pointer group">
                      <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic group-hover:text-blue-400 transition-colors">4. Sektor Agrikultur ({agrikulturCount})</h3>
                      <button className={`p-1 rounded-lg hover:bg-zinc-900 transition-all ${showAgrikultur ? 'text-blue-500 bg-blue-500/10' : 'text-zinc-500'}`}><Eye className="h-4 w-4" /></button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${showAgrikultur ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-8 space-y-2">
                        {agrikulturItems.map(([key, val]) => (
                          <button key={key} disabled={val === 0} onClick={() => setSelectedKey(key)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${val === 0 ? 'cursor-not-allowed border-transparent opacity-50' : selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-xl ${val === 0 ? 'bg-zinc-900 text-red-500' : selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>
                                {val === 0 ? <Ban className="h-4 w-4" /> : getIcon(key)}
                              </div>
                              <span className="text-[12px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')} <span className={val === 0 ? "text-red-500" : "text-green-500"}> ({val})</span></span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Perikanan */}
                  <div className="border-b border-zinc-900/80">
                    <div onClick={() => setShowPerikanan(!showPerikanan)} className="p-8 flex items-center justify-between cursor-pointer group">
                      <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic group-hover:text-blue-400 transition-colors">5. Sektor Perikanan ({perikananCount})</h3>
                      <button className={`p-1 rounded-lg hover:bg-zinc-900 transition-all ${showPerikanan ? 'text-blue-500 bg-blue-500/10' : 'text-zinc-500'}`}><Eye className="h-4 w-4" /></button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${showPerikanan ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-8 space-y-2">
                        {perikananItems.map(([key, val]) => (
                          <button key={key} disabled={val === 0} onClick={() => setSelectedKey(key)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${val === 0 ? 'cursor-not-allowed border-transparent opacity-50' : selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-xl ${val === 0 ? 'bg-zinc-900 text-red-500' : selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>
                                {val === 0 ? <Ban className="h-4 w-4" /> : getIcon(key)}
                              </div>
                              <span className="text-[12px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')} <span className={val === 0 ? "text-red-500" : "text-green-500"}> ({val})</span></span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Olahan Pangan */}
                  <div className="border-b border-zinc-900/80">
                    <div onClick={() => setShowIndustriPengolahan(!showIndustriPengolahan)} className="p-8 flex items-center justify-between cursor-pointer group">
                      <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic group-hover:text-blue-400 transition-colors">6. Sektor Olahan Pangan ({pengolahanCount})</h3>
                      <button className={`p-1 rounded-lg hover:bg-zinc-900 transition-all ${showIndustriPengolahan ? 'text-blue-500 bg-blue-500/10' : 'text-zinc-500'}`}><Eye className="h-4 w-4" /></button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${showIndustriPengolahan ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-8 space-y-2">
                        {olahanPanganItems.map(([key, val]) => (
                          <button key={key} disabled={val === 0} onClick={() => setSelectedKey(key)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${val === 0 ? 'cursor-not-allowed border-transparent opacity-50' : selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-xl ${val === 0 ? 'bg-zinc-900 text-red-500' : selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>
                                {val === 0 ? <Ban className="h-4 w-4" /> : getIcon(key)}
                              </div>
                              <span className="text-[12px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')} <span className={val === 0 ? "text-red-500" : "text-green-500"}> ({val})</span></span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Farmasi */}
                  <div className="border-b border-zinc-900/80">
                    <div onClick={() => setShowFarmasi(!showFarmasi)} className="p-8 flex items-center justify-between cursor-pointer group">
                      <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic group-hover:text-blue-400 transition-colors">7. Sektor Farmasi ({farmasiCount})</h3>
                      <button className={`p-1 rounded-lg hover:bg-zinc-900 transition-all ${showFarmasi ? 'text-blue-500 bg-blue-500/10' : 'text-zinc-500'}`}><Eye className="h-4 w-4" /></button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${showFarmasi ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-8 space-y-2">
                        {farmasiItems.map(([key, val]) => (
                          <button key={key} disabled={val === 0} onClick={() => setSelectedKey(key)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${val === 0 ? 'cursor-not-allowed border-transparent opacity-50' : selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-xl ${val === 0 ? 'bg-zinc-900 text-red-500' : selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>
                                {val === 0 ? <Ban className="h-4 w-4" /> : getIcon(key)}
                              </div>
                              <span className="text-[12px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')} <span className={val === 0 ? "text-red-500" : "text-green-500"}> ({val})</span></span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Militer */}
                  <div className="border-b border-zinc-900/80">
                    <div onClick={() => setShowMiliter(!showMiliter)} className="p-8 flex items-center justify-between cursor-pointer group">
                      <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic group-hover:text-blue-400 transition-colors">8. Militer ({militerCount})</h3>
                      <button className={`p-1 rounded-lg hover:bg-zinc-900 transition-all ${showMiliter ? 'text-blue-500 bg-blue-500/10' : 'text-zinc-500'}`}><Eye className="h-4 w-4" /></button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${showMiliter ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-8 space-y-2">
                        {militerItems.map(([key, val]) => (
                          <button key={key} disabled={val === 0} onClick={() => setSelectedKey(key)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${val === 0 ? 'cursor-not-allowed border-transparent opacity-50' : selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-xl ${val === 0 ? 'bg-zinc-900 text-red-500' : selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>
                                {val === 0 ? <Ban className="h-4 w-4" /> : getIcon(key)}
                              </div>
                              <span className="text-[12px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')} <span className={val === 0 ? "text-red-500" : "text-green-500"}> ({val})</span></span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-zinc-950 p-8 lg:p-16 overflow-y-auto relative scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="flex items-center gap-2 bg-zinc-900/50 p-1.5 rounded-3xl border border-zinc-800/50 backdrop-blur-xl w-fit">
                <button
                  onClick={() => {
                    const countryPart = selectedTradePartner ? `:${selectedTradePartner}` : "";
                    setActiveMenu(`Menu:Perdagangan:impor${countryPart}`);
                    setActiveChartTab("buy");
                  }}
                  className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:scale-[1.05] hover:brightness-110 active:scale-95 cursor-pointer ${tradeType === "impor"
                      ? "bg-red-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.5)]"
                      : "text-zinc-500 hover:text-zinc-300"
                    }`}
                >
                  Impor
                </button>
                <button
                  onClick={() => {
                    const countryPart = selectedTradePartner ? `:${selectedTradePartner}` : "";
                    setActiveMenu(`Menu:Perdagangan:ekspor${countryPart}`);
                    setActiveChartTab("sell");
                  }}
                  className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:scale-[1.05] hover:brightness-110 active:scale-95 cursor-pointer ${tradeType === "ekspor"
                      ? "bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]"
                      : "text-zinc-500 hover:text-zinc-300"
                    }`}
                >
                  Ekspor
                </button>

                <div className="w-[1px] h-4 bg-zinc-800 mx-2"></div>

                <button
                  onClick={() => {
                    const countryPart = selectedTradePartner ? `:${selectedTradePartner}` : "";
                    setActiveMenu(`Menu:Perdagangan:histori${countryPart}`);
                  }}
                  className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:scale-[1.05] hover:brightness-110 active:scale-95 flex items-center gap-2 cursor-pointer ${tradeType === "histori"
                      ? "bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
                      : "text-zinc-500 hover:text-zinc-300"
                    }`}
                >
                  <HistoryIcon size={14} />
                  Histori
                </button>

                <button
                  onClick={() => {
                    const countryPart = selectedTradePartner ? `:${selectedTradePartner}` : "";
                    setActiveMenu(`Menu:Perdagangan:berita${countryPart}`);
                  }}
                  className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:scale-[1.05] hover:brightness-110 active:scale-95 flex items-center gap-2 cursor-pointer ${tradeType === "berita"
                      ? "bg-amber-600 text-white shadow-[0_0_30px_rgba(217,119,6,0.3)] hover:shadow-[0_0_40px_rgba(217,119,6,0.5)]"
                      : "text-zinc-500 hover:text-zinc-300"
                    }`}
                >
                  <Newspaper size={14} />
                  Berita
                </button>
              </div>

              {/* Logistics Efficiency Summary Card */}
              <div className="p-6 rounded-[2rem] bg-zinc-950/40 border border-zinc-800/50 backdrop-blur-md relative overflow-hidden group hover:border-blue-500/30 transition-all duration-700 shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Navigation className="h-24 w-24 text-blue-500" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                   <div className="space-y-1">
                      <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] italic mb-1">Infrastruktur Global</h3>
                      <h2 className="text-lg font-black text-white uppercase tracking-tight italic flex items-center gap-2">
                         Efisiensi Logistik Internasional
                      </h2>
                      <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider max-w-sm leading-relaxed">
                         Bonus kecepatan pengiriman berdasarkan jumlah Pelabuhan, Bandara, dan Fasilitas Logistik lainnya.
                      </p>
                   </div>
                   
                   <div className="flex flex-col items-end gap-2 shrink-0">
                      <div className="flex items-baseline gap-2">
                         <span className="text-3xl font-black text-blue-400 italic tabular-nums">+{logisticsSpeedup.toFixed(1)}%</span>
                         <span className="text-[10px] font-bold text-blue-500/50 uppercase">Speedup</span>
                      </div>
                      <div className="w-48 h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-[1500ms] ease-out"
                          style={{ width: `${(logisticsSpeedup / 90) * 100}%` }}
                        />
                      </div>
                   </div>
                </div>
              </div>


              {!selectedTradePartner && tradeType !== "histori" && tradeType !== "berita" && tradeType !== "tawaran_ai" ? (
                <div className="flex-1 flex flex-col items-center justify-center space-y-6 animate-in fade-in duration-700">
                  <div className="w-24 h-24 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-700">
                    <Globe className="h-12 w-12 animate-pulse" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-black text-white uppercase tracking-widest italic">Pilih negara terlebih dulu</h3>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-tighter">Gunakan menu di sebelah kiri untuk melihat detail perdagangan</p>
                  </div>
                </div>
              ) : (
                tradeType === "ekspor_eksekusi" ? (
                  <EksporEksekusi
                    selectedKey={selectedKey}
                    selectedName={selectedName}
                    selectedUnits={selectedUnits}
                    getProductionRate={getProductionRate}
                    getUnit={getUnit}
                    basePrice={baseSellPrice}
                    setActiveMenu={setActiveMenu}
                    budgetData={budgetData}
                    activeCountryData={activeCountryData}
                    currentCountry={currentCountry}
                    getStoredGameDate={getStoredGameDate}
                    INITIAL_GAME_DATE={INITIAL_GAME_DATE}
                    selectedTradePartner={selectedTradePartner}
                  />
                ) : tradeType === "impor_eksekusi" ? (
                  <ImporEksekusi
                    selectedKey={selectedKey}
                    selectedName={selectedName}
                    selectedUnits={selectedUnits}
                    getProductionRate={getProductionRate}
                    getUnit={getUnit}
                    basePrice={baseBuyPrice}
                    setActiveMenu={setActiveMenu}
                    budgetData={budgetData}
                    activeCountryData={activeCountryData}
                    currentCountry={currentCountry}
                    selectedTradePartner={selectedTradePartner}
                    getStoredGameDate={getStoredGameDate}
                  />
                ) : tradeType === "berita" ? (
                  <BeritaHalaman />
                ) : tradeType === "histori" ? (
                  <div className="flex flex-col h-full space-y-6">
                    <div className="flex items-center gap-4 border-b border-zinc-900 pb-4">
                      <button
                        onClick={() => setHistoriType("impor")}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${historiType === "impor"
                            ? "bg-red-500/10 text-red-500 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                            : "text-zinc-600 hover:text-zinc-400 border border-transparent"
                          }`}
                      >
                        Histori Impor
                      </button>
                      <button
                        onClick={() => setHistoriType("ekspor")}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${historiType === "ekspor"
                            ? "bg-green-500/10 text-green-500 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                            : "text-zinc-600 hover:text-zinc-400 border border-transparent"
                          }`}
                      >
                        Histori Ekspor
                      </button>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      {historiType === "impor" ? <HistoriImport /> : <HistoriEkspor />}
                    </div>
                  </div>
                ) : tradeType === "ekspor" ? (
                  <EksporHalaman
                    selectedKey={selectedKey}
                    selectedName={selectedName}
                    selectedUnits={selectedUnits}
                    getProductionRate={getProductionRate}
                    getUnit={getUnit}
                    baseSellPrice={baseSellPrice}
                    setActiveMenu={setActiveMenu}
                    selectedTimeframe={selectedTimeframe}
                    setSelectedTimeframe={setSelectedTimeframe}
                    activeChartTab={activeChartTab}
                    setActiveChartTab={setActiveChartTab}
                    budgetData={budgetData}
                    baseKeyMapping={baseKeyMapping}
                    currentCountryName={currentCountry.name_en}
                    selectedTradePartner={selectedTradePartner}
                  />
                ) : (
                  <ImporHalaman
                    selectedKey={selectedKey}
                    selectedName={selectedName}
                    selectedUnits={selectedUnits}
                    getProductionRate={getProductionRate}
                    getUnit={getUnit}
                    baseBuyPrice={baseBuyPrice}
                    setActiveMenu={setActiveMenu}
                    selectedTimeframe={selectedTimeframe}
                    setSelectedTimeframe={setSelectedTimeframe}
                    activeChartTab={activeChartTab}
                    setActiveChartTab={setActiveChartTab}
                    getStoredGameDate={getStoredGameDate}
                    INITIAL_GAME_DATE={INITIAL_GAME_DATE}
                    selectedTradePartner={selectedTradePartner}
                  />
                )
              )}

              {!(tradeType === "ekspor_eksekusi" || tradeType === "impor_eksekusi") && (
                <div className="space-y-6 pt-8 border-t border-zinc-900/80">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em] italic">DAFTAR MITRA DAGANG INTERNASIONAL</h3>
                    <div className="h-[1px] flex-1 bg-zinc-900 mx-8"></div>
                  </div>
                  <div className="h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button onClick={() => setIsAddPartnerOpen(true)} className="bg-blue-500/5 border border-dashed border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 p-5 rounded-2xl flex items-center gap-4 cursor-pointer group transition-all">
                        <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all"><Plus className="h-5 w-5" /></div>
                        <div className="text-left"><div className="text-xs font-black text-blue-400 uppercase tracking-widest">Tambah Mitra Dagang</div><div className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter italic">Ekspansi Jaringan</div></div>
                      </button>
                      {activePartnersList.map((agreement: any, idx: number) => (
                        <div key={idx} className="bg-zinc-900/20 border border-zinc-900 p-5 rounded-2xl flex items-center justify-between transition-all">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-zinc-900 rounded-xl"><Globe className="h-5 w-5 text-zinc-500" /></div>
                            <div className="text-xs font-black text-white uppercase tracking-wider">{agreement.mitra}</div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className={`${agreement.status === 'Aktif' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'} px-2 py-1 text-[8px] font-black uppercase tracking-widest rounded-md border text-center whitespace-nowrap`}>
                              {agreement.status === 'Aktif' ? 'Terverifikasi' : 'Diproses'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <AddTradePartnerModal
        isOpen={isAddPartnerOpen}
        onClose={() => setIsAddPartnerOpen(false)}
        onAddProposal={handleAddProposal}
        playerCountry={currentCountry}
        existingPartners={[
          currentCountry.name_id,
          currentCountry.name_en,
          ...((managedTrades || []).map((t: any) => t.mitra))
        ]}
      />
    </div>
  );
}
