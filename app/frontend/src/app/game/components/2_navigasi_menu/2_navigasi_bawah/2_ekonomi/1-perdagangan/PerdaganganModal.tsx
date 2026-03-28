import React, { useState, useEffect, useMemo } from "react"
import { 
  X, ArrowRightLeft, TrendingUp, TrendingDown, Globe, Ship, Landmark, BarChart3,
  Cpu, Car, Bike, Construction, TreePine, Droplet, Cookie, Croissant, Pill, FlaskConical, Beef, Soup, 
  Bird, Milk, Leaf, Shell, Fish, Sprout, Utensils, Apple, Bean, Layers, Mountain, Gem, Waves, Flame, 
  Battery, Droplets, Box, Pickaxe, Radio, Coffee, Carrot, Eye, ChevronRight, Plus,
  Target, Shield, Sword, Navigation
} from "lucide-react"
import { AddTradePartnerModal } from "./mitra_dagang_internasional/AddTradePartnerModal"
import { CountryData } from "@/app/database/data/types/index"
import NavigasiWaktu from "./NavigasiWaktu"
import { tradeStorage } from "./TradeStorage"
import { buyPriceMap, sellPriceMap, labelsMap, baseKeyMapping, getDynamicPrice } from "./tradeData"
import { TradePriceChart } from "./TradePriceChart"
import { TradeExecutionModal } from "./TradeExecutionModal"
import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime"
import { getInitialAgreements } from "./database_mitra/agreementsRegistry"
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage"
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage"
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara"

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
  const budgetData = budgetStorage.getData();

  // Helper for Manufacturing count (matches ProduksiHub)
  const getManufacturingCount = (key: string, baseVal: number) => {
    const delta = (buildingDeltas[key] || 0) as number;
    return baseVal + delta;
  };

  // Standard Database Orders
  const mineralOrder = ["emas", "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi"];
  const manufakturOrder = ["semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu"];
  const olahanPanganOrder = ["air_mineral", "gula", "roti", "pengolahan_daging", "mie_instan"];
  const farmasiOrder = ["farmasi"];
  const panganOrder = ["ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing", "udang_kerang", "ikan", "padi", "gandum_jagung", "sayur_umbi", "kedelai", "kelapa_sawit", "kopi_teh_kakao"];
  const militerOrder = ["pabrik_drone_kamikaze", "pabrik_amunisi", "pabrik_kendaraan_tempur", "pabrik_senjata_berat"];

  // Logic for Minerals
  const mineralDataToBuildingKey: Record<string, string> = {
    emas: "gold_mine", uranium: "uranium_mine", batu_bara: "coal_mine", 
    minyak_bumi: "oil_well", gas_alam: "gas_well", garam: "salt_mine", 
    nikel: "nickel_mine", litium: "lithium_mine", tembaga: "copper_mine", 
    aluminium: "aluminum_mine", logam_tanah_jarang: "rare_earth_mine", 
    bijih_besi: "iron_ore_mine"
  };

  const getProductionRate = (key: string) => {
    const rates: Record<string, number> = {
      emas: 2, uranium: 5, nikel: 80, litium: 120, tembaga: 200, aluminium: 300,
      logam_tanah_jarang: 15, bijih_besi: 1500, batu_bara: 2500, minyak_bumi: 1200,
      gas_alam: 3500, garam: 800, semikonduktor: 50, mobil: 150, sepeda_motor: 350,
      smelter: 12, semen_beton: 800, kayu: 1200, air_mineral: 5000, gula: 1200,
      roti: 2500, pengolahan_daging: 800, mie_instan: 4500, farmasi: 120,
      ayam_unggas: 2000, sapi_perah: 1500, sapi_potong: 800, domba_kambing: 1200,
      udang_kerang: 1500, ikan: 2500, padi: 5000, gandum_jagung: 4000,
      sayur_umbi: 3000, kedelai: 1500, kelapa_sawit: 2500, kopi_teh_kakao: 800,
      pabrik_drone_kamikaze: 5, pabrik_amunisi: 500, pabrik_kendaraan_tempur: 2,
      pabrik_senjata_berat: 1
    };
    return rates[key] || 0;
  };

  const getUnit = (key: string) => {
    if (["minyak_bumi", "air_mineral", "kelapa_sawit", "bahan_bakar"].includes(key)) return "Barel";
    if (["gas_alam"].includes(key)) return "m3";
    if (["emas", "uranium", "logam_tanah_jarang", "semikonduktor", "farmasi"].includes(key)) return "Kg";
    if (["mobil", "sepeda_motor", "pabrik_drone_kamikaze", "pabrik_kendaraan_tempur", "pabrik_senjata_berat", "ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing"].includes(key)) return "Unit";
    return "Ton";
  };

  const minerals = (Object.entries(currentCountry.sektor_ekstraksi)
    .filter(([key]) => key !== 'strength' && typeof currentCountry.sektor_ekstraksi[key as keyof typeof currentCountry.sektor_ekstraksi] === 'number')
    .map(([key, val]) => {
      const buildingKey = mineralDataToBuildingKey[key] || key;
      return [key, (val as number) + ((buildingDeltas[buildingKey] || 0) as number)];
    })
    .sort((a, b) => mineralOrder.indexOf(a[0] as string) - mineralOrder.indexOf(b[0] as string))) as [string, number][];

  // Category 2: Manufaktur
  const manufakturKeys = ["electronics_factory", "car_factory", "motorcycle_factory", "smelter", "cement_factory", "sawmill"];
  const manufakturItems = Object.entries(currentCountry.sektor_manufaktur)
    .filter(([key]) => manufakturKeys.includes(key) || manufakturKeys.some(mk => mk.replace('_factory', '') === key))
    .map(([key, val]) => {
      const factoryKey = manufakturKeys.find(mk => mk === key || mk.replace('_factory', '') === key) || key;
      return [key, getManufacturingCount(factoryKey, val as number)];
    })
    .sort((a, b) => manufakturOrder.indexOf(a[0] as string) - manufakturOrder.indexOf(b[0] as string)) as [string, number][];

  const olahanPanganFactoryKeys = ["bottled_water_factory", "sugar_factory", "bakery_factory", "meat_processing_factory", "noodle_factory"];
  const olahanPanganItems = Object.entries(currentCountry.sektor_olahan_pangan || {})
    .map(([key, val]) => {
      const factoryKey = olahanPanganFactoryKeys.find(mk => mk === key || mk.replace('_factory', '') === key) || key;
      return [key, getManufacturingCount(factoryKey, val as number)];
    })
    .sort((a, b) => olahanPanganOrder.indexOf(a[0] as string) - olahanPanganOrder.indexOf(b[0] as string)) as [string, number][];

  const farmasiItems = Object.entries(currentCountry.sektor_farmasi || {})
    .map(([key, val]) => [key, getManufacturingCount("pharma_factory", val as number)]) as [string, number][];

  const peternakanItems = Object.entries(currentCountry.sektor_peternakan)
    .map(([key, val]) => [key, (val as number) + ((buildingDeltas[key] || buildingDeltas[key + '_farm'] || buildingDeltas[key + '_field'] || 0) as number)])
    .sort((a, b) => panganOrder.indexOf(a[0] as string) - panganOrder.indexOf(b[0] as string)) as [string, number][];

  const agrikulturItems = Object.entries(currentCountry.sektor_agrikultur)
    .map(([key, val]) => [key, (val as number) + ((buildingDeltas[key] || buildingDeltas[key + '_farm'] || buildingDeltas[key + '_field'] || 0) as number)])
    .sort((a, b) => panganOrder.indexOf(a[0] as string) - panganOrder.indexOf(b[0] as string)) as [string, number][];

  const perikananItems = Object.entries(currentCountry.sektor_perikanan)
    .map(([key, val]) => [key, (val as number) + ((buildingDeltas[key] || 0) as number)])
    .sort((a, b) => panganOrder.indexOf(a[0] as string) - panganOrder.indexOf(b[0] as string)) as [string, number][];

  const militerItems = Object.entries(currentCountry.pabrik_militer)
    .map(([key, val]) => [key, (val as number) + ((buildingDeltas[key] || 0) as number)])
    .sort((a, b) => militerOrder.indexOf(a[0] as string) - militerOrder.indexOf(b[0] as string)) as [string, number][];

  const agriPanganLen = peternakanItems.length + perikananItems.length + agrikulturItems.length;
  const industriPengolahanLen = olahanPanganItems.length;
  const farmasiLen = farmasiItems.length;

  const [selectedKey, setSelectedKey] = useState<string>(minerals[0]?.[0] || 'emas');
  const [showMinerals, setShowMinerals] = useState(true);
  const [showManufaktur, setShowManufaktur] = useState(false);
  const [showPangan, setShowPangan] = useState(false);
  const [showIndustriPengolahan, setShowIndustriPengolahan] = useState(false);
  const [showFarmasi, setShowFarmasi] = useState(false);
  const [showMiliter, setShowMiliter] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("1w");
  const [activeChartTab, setActiveChartTab] = useState<"buy" | "sell">("buy");
  const [executionModalItem, setExecutionModalItem] = useState<{ type: "buy" | "sell" } | null>(null);
  const [selectedTradePartner, setSelectedTradePartner] = useState<string | null>(null);
  const [tradeType, setTradeType] = useState<"impor" | "ekspor">("impor");

  useEffect(() => {
    if (isOpen && activeMenu.startsWith("Menu:Perdagangan:")) {
      const detail = activeMenu.split(":")[2];
      if (detail.includes("=")) {
        const [action, item] = detail.split("=");
        const type = action === "impor" ? "buy" : "sell";
        setSelectedKey(item);
        setExecutionModalItem({ type });
        setTradeType(action as "impor" | "ekspor");
        setActiveChartTab(type === "buy" ? "buy" : "sell");
      }
    } else if (isOpen && activeMenu === "Menu:Perdagangan") {
       setExecutionModalItem(null);
    }
  }, [activeMenu, isOpen]);

  const currentDate = getStoredGameDate();
  const baseBuyPrice = getDynamicPrice(selectedKey, "buy", currentDate);
  const baseSellPrice = getDynamicPrice(selectedKey, "sell", currentDate);
  
  if (!isOpen) return null;

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
    pabrik_drone_kamikaze: Target, pabrik_amunisi: Box, 
    pabrik_kendaraan_tempur: Navigation, pabrik_senjata_berat: Sword
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

  const activePartnersList = (managedTrades?.filter((a: any) => 
    a.jenis === 'Perdagangan' && 
    a.mitra.toLowerCase() !== currentCountry.name_id.toLowerCase() && 
    a.mitra.toLowerCase() !== currentCountry.name_en.toLowerCase()
  ).length > 0 
    ? managedTrades.filter((a: any) => 
          a.jenis === 'Perdagangan' && 
          a.mitra.toLowerCase() !== currentCountry.name_id.toLowerCase() && 
          a.mitra.toLowerCase() !== currentCountry.name_en.toLowerCase()
        ).sort((a: any, b: any) => a.mitra.localeCompare(b.mitra))
    : getInitialAgreements(currentCountry.name_en, currentCountry.name_id).length > 0
      ? getInitialAgreements(currentCountry.name_en, currentCountry.name_id)
      : [
          { mitra: "Afrika Selatan", status: "Aktif" },
          { mitra: "Tiongkok", status: "Aktif" },
          { mitra: "Uni Emirat Arab", status: "Aktif" },
          { mitra: "Vietnam", status: "Aktif" }
        ]
  );

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
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
                 <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">{currentCountry.flag} {currentCountry.name_id} — Strategic Trade Terminal</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <NavigasiWaktu />
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
              <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] leading-none italic whitespace-nowrap">Mitra Dagang</h3>
              <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic mt-1">Negara Tujuan / Sumber</p>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent p-4 space-y-1.5">
              <div className="h-px bg-zinc-900 my-3"></div>
              {activePartnersList.filter((a: any) => a.status === 'Aktif' || !a.status || a.status !== 'Rejected').map((agreement: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTradePartner(selectedTradePartner === agreement.mitra ? null : agreement.mitra)}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-2xl transition-all cursor-pointer border ${
                    selectedTradePartner === agreement.mitra ? 'bg-emerald-600/10 border-emerald-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'
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
              <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] leading-none italic text-center">Daftar Komoditas</h3>
              <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic mt-1 text-center">Kategori Produksi 1 - 6</p>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              {/* Minerals */}
              <div className="border-b border-zinc-900/80">
                <div className="p-8 flex items-center justify-between">
                  <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic">1. Mineral Kritis</h3>
                  <button onClick={() => setShowMinerals(!showMinerals)} className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-500 transition-all cursor-pointer"><Eye className="h-4 w-4" /></button>
                </div>
                {showMinerals && (
                  <div className="px-4 pb-8 space-y-2">
                    {minerals.map(([key, val]) => (
                      <button key={key} onClick={() => setSelectedKey(key)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-xl ${selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>{getIcon(key)}</div>
                          <span className="text-[12px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')} ({val})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Repeat other categories with similar structure... */}
              {/* Manufaktur */}
              <div className="border-b border-zinc-900/80">
                <div className="p-8 flex items-center justify-between">
                  <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic">2. Manufaktur</h3>
                  <button onClick={() => setShowManufaktur(!showManufaktur)} className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-500 transition-all cursor-pointer"><Eye className="h-4 w-4" /></button>
                </div>
                {showManufaktur && (
                  <div className="px-4 pb-8 space-y-2">
                    {manufakturItems.map(([key, val]) => (
                      <button key={key} onClick={() => setSelectedKey(key as string)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-xl ${selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>{getIcon(key as string)}</div>
                          <span className="text-[12px] font-black uppercase tracking-tight">{labelsMap[key as string] || (key as string).replace(/_/g, ' ')} ({val})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Pangan */}
              <div className="border-b border-zinc-900/80">
                <div className="p-8 flex items-center justify-between">
                  <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic">3. Produksi Pangan</h3>
                  <button onClick={() => setShowPangan(!showPangan)} className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-500 transition-all cursor-pointer"><Eye className="h-4 w-4" /></button>
                </div>
                {showPangan && (
                  <div className="px-4 pb-8 space-y-4">
                    {peternakanItems.map(([key, val]) => (
                      <button key={key} onClick={() => setSelectedKey(key as string)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-xl ${selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>{getIcon(key as string)}</div>
                          <span className="text-[10px] font-black uppercase tracking-tight">{labelsMap[key as string] || (key as string).replace(/_/g, ' ')} ({val})</span>
                        </div>
                      </button>
                    ))}
                    {perikananItems.map(([key, val]) => (
                      <button key={key} onClick={() => setSelectedKey(key as string)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-xl ${selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>{getIcon(key as string)}</div>
                          <span className="text-[10px] font-black uppercase tracking-tight">{labelsMap[key as string] || (key as string).replace(/_/g, ' ')} ({val})</span>
                        </div>
                      </button>
                    ))}
                    {agrikulturItems.map(([key, val]) => (
                      <button key={key} onClick={() => setSelectedKey(key as string)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-xl ${selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>{getIcon(key as string)}</div>
                          <span className="text-[10px] font-black uppercase tracking-tight">{labelsMap[key as string] || (key as string).replace(/_/g, ' ')} ({val})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Industri Pengolahan */}
              <div className="border-b border-zinc-900/80">
                <div className="p-8 flex items-center justify-between">
                  <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic">4. Pengolahan</h3>
                  <button onClick={() => setShowIndustriPengolahan(!showIndustriPengolahan)} className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-500 transition-all cursor-pointer"><Eye className="h-4 w-4" /></button>
                </div>
                {showIndustriPengolahan && (
                  <div className="px-4 pb-8 space-y-2">
                    {olahanPanganItems.map(([key, val]) => (
                      <button key={key} onClick={() => setSelectedKey(key as string)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-xl ${selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>{getIcon(key as string)}</div>
                          <span className="text-[10px] font-black uppercase tracking-tight">{labelsMap[key as string] || (key as string).replace(/_/g, ' ')} ({val})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Farmasi */}
              <div className="border-b border-zinc-900/80">
                <div className="p-8 flex items-center justify-between">
                  <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic">5. Medis</h3>
                  <button onClick={() => setShowFarmasi(!showFarmasi)} className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-500 transition-all cursor-pointer"><Eye className="h-4 w-4" /></button>
                </div>
                {showFarmasi && (
                  <div className="px-4 pb-8 space-y-2">
                    {farmasiItems.map(([key, val]) => (
                      <button key={key} onClick={() => setSelectedKey(key as string)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-xl ${selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>{getIcon(key as string)}</div>
                          <span className="text-[10px] font-black uppercase tracking-tight">{labelsMap[key as string] || (key as string).replace(/_/g, ' ')} ({val})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Militer */}
              <div className="border-b border-zinc-900/80">
                <div className="p-8 flex items-center justify-between">
                  <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] italic">6. Militer</h3>
                  <button onClick={() => setShowMiliter(!showMiliter)} className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-500 transition-all cursor-pointer"><Eye className="h-4 w-4" /></button>
                </div>
                {showMiliter && (
                  <div className="px-4 pb-8 space-y-2">
                    {militerItems.map(([key, val]) => (
                      <button key={key} onClick={() => setSelectedKey(key as string)} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${selectedKey === key ? 'bg-blue-600/10 border-blue-500/40 text-white' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-xl ${selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'}`}>{getIcon(key as string)}</div>
                          <span className="text-[10px] font-black uppercase tracking-tight">{labelsMap[key as string] || (key as string).replace(/_/g, ' ')} ({val})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-zinc-950 p-8 lg:p-16 overflow-y-auto relative scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="flex items-center gap-2 bg-zinc-900/50 p-1.5 rounded-3xl border border-zinc-800/50 backdrop-blur-xl w-fit">
                <button 
                  onClick={() => {
                    setTradeType("impor");
                    setActiveChartTab("buy");
                  }}
                  className={`px-10 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                    tradeType === "impor" 
                    ? "bg-red-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.3)]" 
                    : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Impor Komoditas
                </button>
                <button 
                  onClick={() => {
                    setTradeType("ekspor");
                    setActiveChartTab("sell");
                  }}
                  className={`px-10 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                    tradeType === "ekspor" 
                    ? "bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.3)]" 
                    : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Ekspor Komoditas
                </button>
              </div>

              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10">
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-4 leading-none">{selectedName}</h2>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-[12px] font-black uppercase tracking-[0.2em] text-zinc-500 italic">
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-600 not-italic">Total Bangunan</span>
                      <span className="text-white text-sm">{selectedUnits.toLocaleString('id-ID')} Unit</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-600 not-italic">Produksi /Hari</span>
                      <span className="text-blue-400 text-sm">{(selectedUnits * getProductionRate(selectedKey)).toLocaleString('id-ID')} {getUnit(selectedKey)}</span>
                    </div>
                    <div className="flex flex-col gap-1 col-span-2">
                      <span className="text-zinc-600 not-italic">Total Stok</span>
                      <span className="text-blue-500 text-sm">{(() => {
                        const stockKeyMap: Record<string, string> = {
                          emas: "gold_mine", uranium: "uranium_mine", batu_bara: "coal_mine", minyak_bumi: "oil_well", gas_alam: "gas_well",
                          garam: "salt_mine", nikel: "nickel_mine", litium: "lithium_mine", tembaga: "copper_mine", aluminium: "aluminum_mine",
                          logam_tanah_jarang: "rare_earth_mine", bijih_besi: "iron_ore_mine", ayam_unggas: "livestock_poultry", sapi_perah: "livestock_dairy",
                          sapi_potong: "livestock_beef", domba_kambing: "livestock_sheep", udang_kerang: "livestock_shrimp", ikan: "livestock_fish",
                          padi: "agri_rice", gandum_jagung: "agri_grains", sayur_umbi: "agri_veg", kedelai: "agri_soy", kelapa_sawit: "agri_palm", coffee_tea_cocoa: "agri_luxury"
                        };
                        const mfgKey = Object.keys(baseKeyMapping).find(k => baseKeyMapping[k] === selectedKey);
                        const stockKey = stockKeyMap[selectedKey] || mfgKey || selectedKey;
                        const stock = Math.floor(budgetData.cumulativeProduction?.[stockKey] || 0);
                        return `${stock.toLocaleString('id-ID')} ${getUnit(selectedKey)}`;
                      })()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 xl:gap-6 flex-wrap lg:flex-nowrap">
                  {tradeType === "impor" ? (
                    <div className="flex flex-col gap-3 flex-shrink-0 animate-in fade-in slide-in-from-right-4 duration-500">
                      <div className="flex flex-col gap-1 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                        <div className="flex justify-between gap-8"><span>Harga Tertinggi</span><span className="text-green-500">{Math.round(buyPriceMap[selectedKey] * 1.15).toLocaleString('id-ID')}</span></div>
                        <div className="flex justify-between gap-8"><span>Harga Terendah</span><span className="text-red-500">{Math.round(buyPriceMap[selectedKey] * 0.85).toLocaleString('id-ID')}</span></div>
                      </div>
                      <button 
                        onClick={() => setActiveMenu(`Menu:Perdagangan:impor=${selectedKey}`)} 
                        className="px-10 py-5 bg-red-500 text-white font-black uppercase text-[12px] tracking-[0.2em] rounded-2xl hover:bg-red-600 transition-all cursor-pointer shadow-[0_10px_30px_rgba(239,68,68,0.2)] active:scale-95 whitespace-nowrap"
                      >
                        Eksekusi Impor {baseBuyPrice.toLocaleString('id-ID')}
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3 flex-shrink-0 animate-in fade-in slide-in-from-left-4 duration-500">
                      <div className="flex flex-col gap-1 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                        <div className="flex justify-between gap-8"><span>Harga Tertinggi</span><span className="text-green-500">{Math.round(sellPriceMap[selectedKey] * 1.15).toLocaleString('id-ID')}</span></div>
                        <div className="flex justify-between gap-8"><span>Harga Terendah</span><span className="text-red-500">{Math.round(sellPriceMap[selectedKey] * 0.85).toLocaleString('id-ID')}</span></div>
                      </div>
                      <button 
                        onClick={() => setActiveMenu(`Menu:Perdagangan:ekspor=${selectedKey}`)} 
                        className="px-10 py-5 bg-green-500 text-white font-black uppercase text-[12px] tracking-[0.2em] rounded-2xl hover:bg-green-600 transition-all cursor-pointer shadow-[0_10px_30px_rgba(34,197,94,0.2)] active:scale-95 whitespace-nowrap"
                      >
                        Eksekusi Ekspor {baseSellPrice.toLocaleString('id-ID')}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-1 bg-zinc-900/50 p-1.5 rounded-2xl border border-zinc-900/50 backdrop-blur-md">
                    {["1d", "1w", "1m", "3m", "6m", "9m", "1y", "3y", "5y"].map(tf => (
                      <button key={tf} onClick={() => setSelectedTimeframe(tf)} className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${selectedTimeframe === tf ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-white hover:bg-zinc-800'}`}>{tf}</button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-900/40 p-1 rounded-2xl border border-zinc-900/50">
                    <button onClick={() => setActiveChartTab("buy")} className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${activeChartTab === "buy" ? 'bg-red-500 text-white' : 'text-zinc-600'}`}>Grafik Beli</button>
                    <button onClick={() => setActiveChartTab("sell")} className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${activeChartTab === "sell" ? 'bg-green-500 text-white' : 'text-zinc-600'}`}>Grafik Jual</button>
                  </div>
                </div>
                <TradePriceChart selectedKey={selectedKey} selectedTimeframe={selectedTimeframe} basePrice={activeChartTab === "buy" ? baseBuyPrice : baseSellPrice} type={activeChartTab} color={activeChartTab === "buy" ? "#ef4444" : "#22c55e"} />
              </div>

              <div className="pt-8 border-t border-zinc-900/80">
                <div className="max-w-md bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-[2rem] relative overflow-hidden">
                  <span className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.4em] block mb-3">Metrik Pasokan</span>
                  <div className="flex items-baseline gap-3"><span className="text-4xl font-black text-white tracking-tighter italic">{selectedUnits}</span></div>
                </div>
              </div>

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
            </div>
          </div>
        </div>
      </div>

      <TradeExecutionModal 
        isOpen={!!executionModalItem}
        onClose={() => setActiveMenu("Menu:Perdagangan")}
        selectedKey={selectedKey}
        selectedName={selectedName}
        type={executionModalItem?.type || "buy"}
        basePrice={executionModalItem?.type === "buy" ? baseBuyPrice : baseSellPrice}
        icon={iconMap[selectedKey] || BarChart3}
        color={executionModalItem?.type === "buy" ? "#ef4444" : "#22c55e"}
        partners={activePartnersList}
        defaultPartner={selectedTradePartner}
      />

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
