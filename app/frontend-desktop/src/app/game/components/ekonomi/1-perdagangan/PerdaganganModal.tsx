import React, { useState, useEffect, useMemo } from "react"
import { 
  X, ArrowRightLeft, TrendingUp, TrendingDown, Globe, Ship, Landmark, BarChart3,
  Cpu, Car, Bike, Construction, TreePine, Droplet, Cookie, Croissant, Pill, FlaskConical, Beef, Soup, 
  Bird, Milk, Leaf, Shell, Fish, Sprout, Utensils, Apple, Bean, Layers, Mountain, Gem, Waves, Flame, 
  Battery, Droplets, Box, Pickaxe, Radio, Coffee, Carrot, Eye, ChevronRight, Plus
} from "lucide-react"
import { AddTradePartnerModal } from "./mitra_dagang_internasional/AddTradePartnerModal"
import { CountryData } from "../../../../select-country/data/types/_index"
import { tradeStorage } from "./TradeStorage"
import { buyPriceMap, sellPriceMap, labelsMap, baseKeyMapping, getDynamicPrice } from "./tradeData"
import { TradePriceChart } from "./TradePriceChart"
import { TradeExecutionModal } from "./TradeExecutionModal"
import { getStoredGameDate } from "../../../data/time/gameTime"
import { getInitialAgreements } from "./database_mitra/agreementsRegistry"
import { inboxStorage } from "../../inbox/inboxStorage"
import { buildingStorage } from "../../pembangunan/buildingStorage"
import { budgetStorage } from "@/app/game/components/navbar/stats/budget"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PerdaganganModal({ isOpen, onClose }: ModalProps) {
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
    // If the key is a factory key (from produksi), find the corresponding storage key
    const delta = (buildingDeltas[key] || 0) as number;
    return baseVal + delta;
  };

  // Standard Database Orders
  const mineralOrder = ["emas", "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi"];
  const manufakturOrder = ["semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "air_mineral", "gula", "roti", "farmasi", "pupuk", "pengolahan_daging", "mie_instan"];
  const panganOrder = ["ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing", "udang_kerang", "ikan", "padi", "gandum_jagung", "sayur_umbi", "kedelai", "kelapa_sawit", "kopi_teh_kakao"];

  // Logic for 12 Minerals
  const mineralDataToBuildingKey: Record<string, string> = {
    emas: "gold_mine", uranium: "uranium_mine", batu_bara: "coal_mine", 
    minyak_bumi: "oil_well", gas_alam: "gas_well", garam: "salt_mine", 
    nikel: "nickel_mine", litium: "lithium_mine", tembaga: "copper_mine", 
    aluminium: "aluminum_mine", logam_tanah_jarang: "rare_earth_mine", 
    bijih_besi: "iron_ore_mine"
  };

  const minerals = (Object.entries(currentCountry.sektor_ekstraksi)
    .filter(([key]) => key !== 'strength' && typeof currentCountry.sektor_ekstraksi[key as keyof typeof currentCountry.sektor_ekstraksi] === 'number')
    .map(([key, val]) => {
      const buildingKey = mineralDataToBuildingKey[key] || key;
      return [key, (val as number) + ((buildingDeltas[buildingKey] || 0) as number)];
    })
    .sort((a, b) => mineralOrder.indexOf(a[0] as string) - mineralOrder.indexOf(b[0] as string))) as [string, number][];

  // Category 2: Sektor Produksi & Ekonomi (Splits into 3 Sub-groups like Produksi Hub)
  const manufakturKeys = ["electronics_factory", "car_factory", "motorcycle_factory", "smelter", "cement_factory", "sawmill", "bottled_water_factory", "sugar_factory", "bakery_factory", "pharma_factory", "fertilizer_factory", "meat_processing_factory", "noodle_factory"];
  
  const manufakturItems = Object.entries(currentCountry.sektor_manufaktur)
    .filter(([key]) => manufakturKeys.includes(key) || manufakturKeys.some(mk => mk.replace('_factory', '') === key))
    .map(([key, val]) => {
      // Find the factory key for delta lookup
      const factoryKey = manufakturKeys.find(mk => mk === key || mk.replace('_factory', '') === key) || key;
      return [key, getManufacturingCount(factoryKey, val as number)];
    })
    .sort((a, b) => manufakturOrder.indexOf(a[0] as string) - manufakturOrder.indexOf(b[0] as string)) as [string, number][];

  const peternakanItems = Object.entries(currentCountry.sektor_peternakan)
    .map(([key, val]) => [key, (val as number) + ((buildingDeltas[key] || buildingDeltas[key + '_farm'] || buildingDeltas[key + '_field'] || 0) as number)])
    .sort((a, b) => panganOrder.indexOf(a[0] as string) - panganOrder.indexOf(b[0] as string)) as [string, number][];

  const agrikulturItems = Object.entries(currentCountry.sektor_agrikultur)
    .map(([key, val]) => [key, (val as number) + ((buildingDeltas[key] || buildingDeltas[key + '_farm'] || buildingDeltas[key + '_field'] || 0) as number)])
    .sort((a, b) => panganOrder.indexOf(a[0] as string) - panganOrder.indexOf(b[0] as string)) as [string, number][];

  const panganItems = [...peternakanItems, ...agrikulturItems];

  const industryAndEconomyLen = manufakturItems.length + panganItems.length;

  const [selectedKey, setSelectedKey] = useState<string>(minerals[0]?.[0] || 'emas');
  const [showMinerals, setShowMinerals] = useState(true);
  const [showIndustry, setShowIndustry] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("1w");
  const [activeChartTab, setActiveChartTab] = useState<"buy" | "sell">("buy");
  const [executionModalItem, setExecutionModalItem] = useState<{ type: "buy" | "sell" } | null>(null);

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
    kelapa_sawit: Droplets, kopi_teh_kakao: Coffee, tebu: Leaf
  };


  const getIcon = (key: string, size: string = "h-4 w-4") => {
    const Icon = iconMap[key] || BarChart3;
    return <Icon className={size} />;
  };

  const selectedItem = [
    ...minerals,
    ...manufakturItems,
    ...panganItems
  ].find(m => m[0] === selectedKey);

  const selectedName = labelsMap[selectedKey] || selectedKey.charAt(0).toUpperCase() + selectedKey.slice(1).replace(/_/g, ' ');
  const selectedUnits = selectedItem ? (selectedItem[1] as number) : 0;
  
  // Dynamic pricing (per unit) - including market factor for the "live" tarif
  const marketFactor = 1.0; 
  const exportPriceVal = baseSellPrice * marketFactor;
  const importPriceVal = baseBuyPrice * marketFactor;

  const activePartnersList = (managedTrades?.filter((a: any) => 
    a.jenis === 'Perdagangan' && 
    a.mitra.toLowerCase() !== currentCountry.name_id.toLowerCase() && 
    a.mitra.toLowerCase() !== currentCountry.name_en.toLowerCase()
  ).length > 0 
    ? managedTrades
        .filter((a: any) => 
          a.jenis === 'Perdagangan' && 
          a.mitra.toLowerCase() !== currentCountry.name_id.toLowerCase() && 
          a.mitra.toLowerCase() !== currentCountry.name_en.toLowerCase()
        )
        .sort((a: any, b: any) => a.mitra.localeCompare(b.mitra))
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

        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Header (Synchronized with EnergiModal) */}
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
              <button
                 className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group relative shadow-[0_0_15px_rgba(59,130,246,0.1)] active:scale-95 flex items-center gap-2"
                 title="Logistik Internasional"
              >
                 <Ship className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform" />
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

        <div className="flex-1 flex overflow-hidden relative z-10">
          {/* Sidebar - Left */}
          <div className="w-[320px] border-r border-zinc-900 bg-zinc-950/50 flex flex-col backdrop-blur-sm relative scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent overflow-y-auto">
            
            {/* 1. Category: Minerals */}
            <div className="border-b border-zinc-900/80">
              <div className="p-8 flex items-center justify-between">
                <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] leading-none italic whitespace-nowrap">
                  1. Mineral Kritis ({minerals.length})
                </h3>
                <button 
                  onClick={() => setShowMinerals(!showMinerals)}
                  className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-500 hover:text-pink-500 transition-all cursor-pointer group"
                >
                  <Eye className={`h-4 w-4 group-hover:scale-110 transition-all duration-500 ${!showMinerals ? 'rotate-180 opacity-50' : ''}`} />
                </button>
              </div>
              <div className={`grid transition-all duration-700 ease-in-out ${showMinerals ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="px-4 pb-8 space-y-2">
                    {minerals.map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedKey(key)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group relative cursor-pointer overflow-hidden ${
                          selectedKey === key 
                          ? 'bg-blue-600/10 border border-blue-500/40 text-white' 
                          : 'text-zinc-500 hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800'
                        }`}
                      >
                        <div className="flex items-center gap-4 relative z-10">
                          <div className={`p-2 rounded-xl transition-all duration-300 ${
                            selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'
                          }`}>
                            {getIcon(key, "h-4 w-4")}
                          </div>
                          <span className="text-[12px] font-black uppercase tracking-tight">
                            {labelsMap[key] || key.replace(/_/g, ' ')} ({val})
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

             {/* 2. Category: Industry & Economy */}
            <div className="border-b border-zinc-900/80">
              <div className="p-8 flex items-center justify-between">
                <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] leading-none italic whitespace-nowrap">
                  2. Produksi & Ekonomi ({industryAndEconomyLen})
                </h3>
                <button 
                   onClick={() => setShowIndustry(!showIndustry)}
                  className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-500 hover:text-blue-500 transition-all cursor-pointer group"
                >
                  <Eye className={`h-4 w-4 group-hover:scale-110 transition-all duration-500 ${!showIndustry ? 'rotate-180 opacity-50' : ''}`} />
                </button>
              </div>
              <div className={`grid transition-all duration-700 ease-in-out ${showIndustry ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden no-scrollbar">
                  <div className="px-4 pb-8 space-y-6">
                    {/* Sub-group: Manufaktur */}
                    <div className="space-y-2">
                       <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest pl-2 mb-1">Manufaktur & Industri</p>
                      {manufakturItems.map(([key, val]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedKey(key as string)}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group relative cursor-pointer overflow-hidden ${
                            selectedKey === key 
                            ? 'bg-blue-600/10 border border-blue-500/40 text-white' 
                            : 'text-zinc-500 hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800'
                          }`}
                        >
                          <div className="flex items-center gap-4 relative z-10">
                            <div className={`p-2 rounded-xl transition-all duration-300 ${
                              selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'
                            }`}>
                              {getIcon(key as string, "h-4 w-4")}
                            </div>
                            <span className="text-[12px] font-black uppercase tracking-tight">
                              {labelsMap[key as string] || (key as string).replace(/_/g, ' ')} ({val})
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Sub-group: Pangan */}
                    <div className="space-y-2">
                       <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest pl-2 mb-1">Agrikultur & Peternakan</p>
                      {panganItems.map(([key, val]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedKey(key as string)}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group relative cursor-pointer overflow-hidden ${
                            selectedKey === key 
                            ? 'bg-blue-600/10 border border-blue-500/40 text-white' 
                            : 'text-zinc-500 hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800'
                          }`}
                        >
                          <div className="flex items-center gap-4 relative z-10">
                            <div className={`p-2 rounded-xl transition-all duration-300 ${
                              selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'
                            }`}>
                              {getIcon(key as string, "h-4 w-4")}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-tight">
                              {labelsMap[key as string] || (key as string).replace(/_/g, ' ')} ({val})
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Right */}
          <div className="flex-1 bg-zinc-950 p-8 lg:p-16 overflow-y-auto relative scrollbar-thin scrollbar-thumb-zinc-800">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Strategic Header & Action Cards */}
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10">
                <div className="space-y-2">
                  <h2 className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-4 leading-none">
                    {selectedName}
                  </h2>
                  <div className="flex flex-col items-start gap-2 text-[12px] font-black uppercase tracking-[0.2em] text-zinc-500 italic">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-600 not-italic">Harga Tertinggi</span>
                      <span className="text-green-500">
                        {Math.round((activeChartTab === 'buy' ? (buyPriceMap[selectedKey] || 0) : (sellPriceMap[selectedKey] || 0)) * 1.15).toLocaleString('id-ID')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-600 not-italic">Harga Terendah</span>
                      <span className="text-red-500">
                        {Math.round((activeChartTab === 'buy' ? (buyPriceMap[selectedKey] || 0) : (sellPriceMap[selectedKey] || 0)) * 0.85).toLocaleString('id-ID')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-600 not-italic">Total Stok</span>
                      <span className="text-blue-500 font-black">
                        {(() => {
                          const stockKeyMap: Record<string, string> = {
                            emas: "gold_mine", uranium: "uranium_mine", batu_bara: "coal_mine", minyak_bumi: "oil_well", gas_alam: "gas_well",
                            garam: "salt_mine", nikel: "nickel_mine", litium: "lithium_mine", tembaga: "copper_mine",
                            aluminium: "aluminum_mine", logam_tanah_jarang: "rare_earth_mine", bijih_besi: "iron_ore_mine",
                            ayam_unggas: "livestock_poultry", sapi_perah: "livestock_dairy",
                            sapi_potong: "livestock_beef", domba_kambing: "livestock_sheep", udang_kerang: "livestock_shrimp",
                            ikan: "livestock_fish", padi: "agri_rice",
                            gandum_jagung: "agri_grains", sayur_umbi: "agri_veg",
                            kedelai: "agri_soy", kelapa_sawit: "agri_palm", kopi_teh_kakao: "agri_luxury"
                          };
                          const mfgKey = Object.keys(baseKeyMapping).find(k => baseKeyMapping[k] === selectedKey);
                          const stockKey = stockKeyMap[selectedKey] || mfgKey || selectedKey;
                          const stockValue = budgetData.cumulativeProduction?.[stockKey] || 0;
                          return Math.floor(stockValue).toLocaleString('id-ID');
                        })()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 xl:gap-6 flex-wrap lg:flex-nowrap">
                  {/* Buy Section */}
                    <div className="flex flex-col gap-1 flex-shrink-0">
                      <div className="text-lg lg:text-xl font-black text-white tracking-tighter italic mb-1 flex flex-col">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest not-italic">Harga Beli</span>
                        {importPriceVal.toLocaleString('id-ID')}
                      </div>
                      <button 
                        onClick={() => setExecutionModalItem({ type: "buy" })}
                        className="px-6 py-4 bg-red-500 text-white font-black uppercase text-[11px] lg:text-[12px] tracking-[0.2em] rounded-xl hover:bg-red-600 transition-all active:scale-[0.95] cursor-pointer whitespace-nowrap"
                      >
                        Eksekusi Impor {baseBuyPrice.toLocaleString('id-ID')}
                      </button>
                  </div>

                  {/* Sell Section */}
                  <div className="flex flex-col gap-1 flex-shrink-0">
                    <div className="text-lg lg:text-xl font-black text-white tracking-tighter italic mb-1 flex flex-col">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest not-italic">Harga Jual</span>
                      {exportPriceVal.toLocaleString('id-ID')}
                    </div>
                    <button 
                      onClick={() => setExecutionModalItem({ type: "sell" })}
                      className="px-6 py-4 bg-green-500 text-white font-black uppercase text-[11px] lg:text-[12px] tracking-[0.2em] rounded-xl hover:bg-green-600 transition-all active:scale-[0.95] cursor-pointer whitespace-nowrap"
                    >
                      Eksekusi Ekspor {baseSellPrice.toLocaleString('id-ID')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Chart Section */}
              <div className="space-y-6 pt-4">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  {/* Timeframe Selector */}
                  <div className="flex items-center gap-1 bg-zinc-900/50 p-1.5 rounded-2xl border border-zinc-900/50 backdrop-blur-md">
                    {["1d", "1w", "1m", "3m", "6m", "9m", "1y", "3y", "5y"].map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setSelectedTimeframe(tf)}
                        className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${
                          selectedTimeframe === tf 
                          ? 'bg-blue-600 text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)] scale-110 z-10' 
                          : 'text-zinc-500 hover:text-white hover:bg-zinc-800'
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>

                  {/* Chart Tab Selector */}
                  <div className="flex items-center gap-2 bg-zinc-900/40 p-1 rounded-2xl border border-zinc-900/50 backdrop-blur-md">
                    <button 
                      onClick={() => setActiveChartTab("buy")}
                      className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${
                        activeChartTab === "buy" 
                        ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.2)]' 
                        : 'text-zinc-600 hover:text-zinc-400'
                      }`}
                    >
                      Grafik Beli
                    </button>
                    <button 
                      onClick={() => setActiveChartTab("sell")}
                      className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${
                        activeChartTab === "sell" 
                        ? 'bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.2)]' 
                        : 'text-zinc-600 hover:text-zinc-400'
                      }`}
                    >
                      Grafik Jual
                    </button>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.3em]">Status Terminal</span>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">LIVE_DATA_FEED_v2.0</span>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-blue-400 animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="relative group/chart">
                  {activeChartTab === "buy" ? (
                    <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                      <TradePriceChart 
                        selectedKey={selectedKey} 
                        selectedTimeframe={selectedTimeframe} 
                        basePrice={baseBuyPrice} 
                        type="buy"
                        color="#ef4444"
                      />
                    </div>
                  ) : (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                      <TradePriceChart 
                        selectedKey={selectedKey} 
                        selectedTimeframe={selectedTimeframe} 
                        basePrice={baseSellPrice} 
                        type="sell"
                        color="#22c55e"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Metrics Section */}
              <div className="pt-8 border-t border-zinc-900/80">
                <div className="max-w-md bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-[2rem] relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.4em] block mb-3">Metrik Pasokan</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-white tracking-tighter italic">{selectedUnits}</span>
                  </div>
                </div>
              </div>

              {/* Trade Partners Section */}
              <div className="space-y-6 pt-8 border-t border-zinc-900/80">
                <div className="flex items-center justify-between">
                  <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em] italic">DAFTAR MITRA DAGANG INTERNASIONAL (KONTRAK AKTIF - {activePartnersList.length})</h3>
                  <div className="h-[1px] flex-1 bg-zinc-900 mx-8"></div>
                </div>

                <div className="h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Add Partner Button */}
                    <button 
                      onClick={() => setIsAddPartnerOpen(true)}
                      className="bg-blue-500/5 border border-dashed border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 p-5 rounded-2xl flex items-center gap-4 group transition-all cursor-pointer"
                    >
                      <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all text-blue-400">
                        <Plus className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-black text-blue-400 uppercase tracking-widest">Tambah Mitra Dagang</div>
                        <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter italic">Ekspansi Jaringan</div>
                      </div>
                    </button>

                    {activePartnersList.map((agreement: any, idx: number) => (
                      <div key={idx} className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-700/50 p-5 rounded-2xl flex items-center justify-between group transition-all cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-zinc-900 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                            <Globe className="h-5 w-5 text-zinc-500 group-hover:text-blue-400" />
                          </div>
                          <div>
                            <div className="text-xs font-black text-white uppercase tracking-wider">{agreement.mitra}</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          {agreement.status === 'Aktif' && (
                            <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[8px] font-black uppercase tracking-widest rounded-md border border-green-500/20">
                              Terverifikasi
                            </span>
                          )}
                          {agreement.status === 'Tertunda' && (
                            <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-[8px] font-black uppercase tracking-widest rounded-md border border-yellow-500/20">
                              Diproses
                            </span>
                          )}
                          {agreement.status === 'Rejected' && (
                            <span className="px-2 py-1 bg-red-500/10 text-red-500 text-[8px] font-black uppercase tracking-widest rounded-md border border-red-500/20">
                              Ditolak
                            </span>
                          )}
                          {agreement.status === 'Aktif' && (
                            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter italic">1.250 / bln</span>
                          )}
                          {agreement.status === 'Tertunda' && agreement.targetDate && (
                            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter italic">
                              {Math.max(0, Math.ceil((new Date(agreement.targetDate).getTime() - getStoredGameDate().getTime()) / (1000 * 60 * 60 * 24)))} Hari Lagi
                            </span>
                          )}
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
        onClose={() => setExecutionModalItem(null)}
        selectedKey={selectedKey}
        selectedName={selectedName}
        type={executionModalItem?.type || "buy"}
        basePrice={executionModalItem?.type === "buy" ? baseBuyPrice : baseSellPrice}
        icon={iconMap[selectedKey] || BarChart3}
        color={executionModalItem?.type === "buy" ? "#ef4444" : "#22c55e"}
        partners={activePartnersList}
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
