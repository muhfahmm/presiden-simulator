import React, { useState, useEffect, useMemo } from "react"
import { 
  X, ArrowRightLeft, TrendingUp, TrendingDown, Globe, Ship, Landmark, BarChart3,
  Cpu, Car, Bike, Construction, TreePine, Droplet, Cookie, Croissant, Pill, FlaskConical, Beef, Soup, 
  Bird, Milk, Leaf, Shell, Fish, Sprout, Utensils, Apple, Bean, Layers, Mountain, Gem, Waves, Flame, 
  Battery, Droplets, Box, Pickaxe, Radio, Coffee, Carrot, Eye, ChevronRight
} from "lucide-react"
import { CountryData } from "../../../../select-country/data/types"
import { tradeStorage } from "./TradeStorage"
import { buyPriceMap, sellPriceMap, labelsMap, baseKeyMapping, getDynamicPrice } from "./tradeData"
import { TradePriceChart } from "./TradePriceChart"
import { TradeExecutionModal } from "./TradeExecutionModal"
import { getStoredGameDate } from "../../../data/time/gameTime"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PerdaganganModal({ isOpen, onClose }: ModalProps) {
  const session = tradeStorage.getSession();
  const currentCountry = tradeStorage.getCurrentCountry(session);
  
  // Local state for managed trade data
  const [managedTrades, setManagedTrades] = React.useState<any>(null);

  React.useEffect(() => {
    if (currentCountry) {
      const savedTrades = tradeStorage.getTrade(currentCountry.name_en);
      if (savedTrades) {
        setManagedTrades(savedTrades);
      } else {
        // Fallback to initial agreements from countries data
        setManagedTrades(currentCountry.geopolitics?.agreements || []);
      }
    }
  }, [currentCountry, isOpen]);

  const buildingDeltas = session?.buildingDeltas || {};

  // Helper for Manufacturing count (matches ProduksiHub)
  const getManufacturingCount = (key: string, baseVal: number) => {
    // If the key is a factory key (from produksi), find the corresponding storage key
    const delta = (buildingDeltas[key] || 0) as number;
    return baseVal + delta;
  };

  // Logic for 12 Minerals
  const minerals = (Object.entries(currentCountry.sector_extraction)
    .filter(([key]) => key !== 'strength' && typeof currentCountry.sector_extraction[key as keyof typeof currentCountry.sector_extraction] === 'number')
    .map(([key, val]) => [key, (val as number) + ((buildingDeltas[key] || 0) as number)])
    .sort((a, b) => (b[1] as number) - (a[1] as number))) as [string, number][];

  // Category 2: Sektor Produksi & Ekonomi (Splits into 3 Sub-groups like Produksi Hub)
  const manufakturKeys = ["electronics_factory", "car_factory", "motorcycle_factory", "smelter", "cement_factory", "sawmill", "bottled_water_factory", "sugar_factory", "bakery_factory", "pharma_factory", "fertilizer_factory", "meat_processing_factory", "noodle_factory"];
  
  const manufakturItems = Object.entries(currentCountry.sector_manufacturing)
    .filter(([key]) => manufakturKeys.includes(key) || manufakturKeys.some(mk => mk.replace('_factory', '') === key))
    .map(([key, val]) => {
      // Find the factory key for delta lookup
      const factoryKey = manufakturKeys.find(mk => mk === key || mk.replace('_factory', '') === key) || key;
      return [key, getManufacturingCount(factoryKey, val as number)];
    })
    .sort((a, b) => (b[1] as number) - (a[1] as number)) as [string, number][];

  const peternakanItems = Object.entries(currentCountry.sector_livestock)
    .filter(([key]) => key !== 'strength')
    .map(([key, val]) => [key, (val as number) + ((buildingDeltas[key] || buildingDeltas[key + '_farm'] || 0) as number)])
    .sort((a, b) => (b[1] as number) - (a[1] as number)) as [string, number][];

  const pertanianItems = Object.entries(currentCountry.sector_agriculture)
    .filter(([key]) => key !== 'strength')
    .map(([key, val]) => [key, (val as number) + ((buildingDeltas[key] || buildingDeltas[key + '_field'] || 0) as number)])
    .sort((a, b) => (b[1] as number) - (a[1] as number)) as [string, number][];

  const industryAndEconomyLen = manufakturItems.length + peternakanItems.length + pertanianItems.length;

  const [selectedKey, setSelectedKey] = useState<string>(minerals[0]?.[0] || 'gold');
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
    gold: Gem, uranium: Radio, coal: Layers, oil: Droplets, gas: Flame, salt: Waves,
    nickel: Box, lithium: Battery, copper: Pickaxe, aluminum: Layers, rare_earth: Cpu, iron_ore: Mountain,
    semiconductor: Cpu, car: Car, motorcycle: Bike, smelter: FlaskConical, concrete_cement: Construction, 
    wood: TreePine, mineral_water: Droplet, sugar: Cookie, bread: Croissant, pharmacy: Pill, 
    fertilizer: FlaskConical, meat_processing: Beef, instant_noodle: Soup,
    chicken: Bird, poultry: Bird, dairy_cow: Milk, beef_cow: Beef, sheep_goat: Leaf,
    shrimp: Shell, fish: Fish, shellfish: Shell,
    rice: Sprout, wheat: Utensils, corn: Utensils, tubers: Utensils, soy: Bean, 
    palm_oil: Droplets, tea: Leaf, coffee: Coffee, cocoa: Apple, sugarcane: Leaf, vegetables: Carrot
  };


  const getIcon = (key: string, size: string = "h-4 w-4") => {
    const Icon = iconMap[key] || BarChart3;
    return <Icon className={size} />;
  };

  const selectedItem = [
    ...minerals,
    ...manufakturItems,
    ...peternakanItems,
    ...pertanianItems
  ].find(m => m[0] === selectedKey);

  const selectedName = labelsMap[selectedKey] || selectedKey.charAt(0).toUpperCase() + selectedKey.slice(1).replace(/_/g, ' ');
  const selectedUnits = selectedItem ? (selectedItem[1] as number) : 0;
  
  // Dynamic pricing (per unit) - including market factor for the "live" rate
  const marketFactor = 1.0; 
  const exportPriceVal = baseSellPrice * marketFactor;
  const importPriceVal = baseBuyPrice * marketFactor;

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center animate-in fade-in zoom-in-95 duration-300 p-4 lg:p-12 backdrop-blur-md">
      <div className="bg-zinc-950 border border-zinc-800/50 rounded-[3rem] w-full max-w-6xl h-[85vh] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col relative">
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Top Header */}
        <div className="px-10 py-8 border-b border-zinc-900 flex items-center justify-between bg-zinc-950/80 backdrop-blur-xl relative z-10">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-blue-500/10 rounded-[1.5rem] border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)] group hover:scale-110 transition-transform">
              <ArrowRightLeft className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic flex items-center gap-3">
                HUB PERDAGANGAN STRATEGIS <span className="text-blue-500">— {currentCountry.flag} {currentCountry.name_id}</span>
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-4 rounded-2xl hover:bg-zinc-900 transition-all text-zinc-500 hover:text-white cursor-pointer group border border-transparent hover:border-zinc-800">
            <X className="h-8 w-8 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden relative z-10">
          {/* Sidebar - Left */}
          <div className="w-[320px] border-r border-zinc-900 bg-zinc-950/50 flex flex-col backdrop-blur-sm relative scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent overflow-y-auto">
            
            {/* 1. Category: Minerals */}
            <div className="border-b border-zinc-900/80">
              <div className="p-8 flex items-center justify-between">
                <h3 className="text-[12px] font-black text-white uppercase tracking-[0.2em] leading-none italic whitespace-nowrap">
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
                          <span className="text-[10px] font-black uppercase tracking-tight">
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
                <h3 className="text-[12px] font-black text-white uppercase tracking-[0.2em] leading-none italic whitespace-nowrap">
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
                            <span className="text-[10px] font-black uppercase tracking-tight">
                              {labelsMap[key as string] || (key as string).replace(/_/g, ' ')} ({val})
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Sub-group: Peternakan */}
                    <div className="space-y-2">
                       <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest pl-2 mb-1">Peternakan & Perikanan</p>
                      {peternakanItems.map(([key, val]) => (
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

                    {/* Sub-group: Pertanian */}
                    <div className="space-y-2">
                       <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest pl-2 mb-1">Agrikultur & Pertanian</p>
                      {pertanianItems.map(([key, val]) => (
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
                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-4 leading-none">
                    {selectedName}
                  </h2>
                </div>

                <div className="flex items-center gap-4 xl:gap-6 flex-wrap lg:flex-nowrap">
                  {/* Buy Section */}
                  <div className="flex flex-col gap-1 flex-shrink-0">
                    <div className="text-lg lg:text-xl font-black text-white tracking-tighter italic mb-1 flex flex-col">
                      <span className="text-[8px] text-zinc-500 uppercase tracking-widest not-italic">Harga Beli</span>
                      {importPriceVal.toLocaleString('id-ID')}
                    </div>
                    <button className="px-6 py-3 bg-red-500 text-white font-black uppercase text-[9px] lg:text-[10px] tracking-[0.2em] rounded-xl hover:bg-red-600 transition-all active:scale-[0.95] cursor-pointer whitespace-nowrap">
                      Eksekusi Impor {baseBuyPrice.toLocaleString('id-ID')}
                    </button>
                  </div>

                  {/* Sell Section */}
                  <div className="flex flex-col gap-1 flex-shrink-0">
                    <div className="text-lg lg:text-xl font-black text-white tracking-tighter italic mb-1 flex flex-col">
                      <span className="text-[8px] text-zinc-500 uppercase tracking-widest not-italic">Harga Jual</span>
                      {exportPriceVal.toLocaleString('id-ID')}
                    </div>
                    <button 
                      onClick={() => setExecutionModalItem({ type: "sell" })}
                      className="px-6 py-3 bg-green-500 text-white font-black uppercase text-[9px] lg:text-[10px] tracking-[0.2em] rounded-xl hover:bg-green-600 transition-all active:scale-[0.95] cursor-pointer whitespace-nowrap"
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
                <div className="max-w-md bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-[2rem] relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] block mb-3">Metrik Pasokan</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black text-white tracking-tighter italic">{selectedUnits}</span>
                  </div>
                </div>
              </div>

              {/* Trade Partners Section */}
              <div className="space-y-6 pt-8 border-t border-zinc-900/80">
                <div className="flex items-center justify-between">
                  <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em] italic">DAFTAR MITRA STRATEGIS (KONTRAK AKTIF)</h3>
                  <div className="h-[1px] flex-1 bg-zinc-900 mx-8"></div>
                </div>

                <div className="h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(managedTrades?.filter((a: any) => 
                      a.type === 'Trade' && 
                      a.partner.toLowerCase() !== currentCountry.name_id.toLowerCase() && 
                      a.partner.toLowerCase() !== currentCountry.name_en.toLowerCase()
                    ).length > 0 
                      ? managedTrades
                          .filter((a: any) => 
                            a.type === 'Trade' && 
                            a.partner.toLowerCase() !== currentCountry.name_id.toLowerCase() && 
                            a.partner.toLowerCase() !== currentCountry.name_en.toLowerCase()
                          )
                          .sort((a: any, b: any) => a.partner.localeCompare(b.partner))
                      : [
                          { partner: "Afrika Selatan", status: "Active" },
                          { partner: "Tiongkok", status: "Active" },
                          { partner: "Uni Emirat Arab", status: "Active" },
                          { partner: "Vietnam", status: "Active" }
                        ]
                    ).map((agreement: any, idx: number) => (
                      <div key={idx} className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-700/50 p-5 rounded-2xl flex items-center justify-between group transition-all cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-zinc-900 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                            <Globe className="h-5 w-5 text-zinc-500 group-hover:text-blue-400" />
                          </div>
                          <div>
                            <div className="text-xs font-black text-white uppercase tracking-wider">{agreement.partner}</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[8px] font-black uppercase tracking-widest rounded-md border border-green-500/20">
                            {agreement.status === 'Active' ? 'Terverifikasi' : agreement.status}
                          </span>
                          <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter italic">Rp 1.250 / bln</span>
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
      />
    </div>
  );
}
