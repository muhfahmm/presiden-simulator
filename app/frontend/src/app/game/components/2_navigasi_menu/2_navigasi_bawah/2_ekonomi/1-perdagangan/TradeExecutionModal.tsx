import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Play, Package, TrendingUp, Activity, ArrowRightLeft, Zap, Box, Factory, Pickaxe, Tractor, Ship, Globe, ChevronDown, Coins } from "lucide-react";
import { mineralKritisRate, produkIndustriRate, komoditasPanganRate } from "@/app/database/data/types";
import { gameStorage } from "@/app/game/gamestorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/countries/region/index";
import { tradeStorage } from "./TradeStorage";

interface TradeExecutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedKey: string;
  selectedName: string;
  type: "buy" | "sell";
  basePrice: number;
  icon: any;
  color: string;
  partners?: any[];
  defaultPartner?: string | null;
}

export const TradeExecutionModal: React.FC<TradeExecutionModalProps> = ({
  isOpen, onClose, selectedKey, selectedName, type, basePrice, icon: Icon, color, partners = [], defaultPartner = null
}) => {
  const session = gameStorage.getSession();
  const currentCountryName = session?.country;
  const searchName = (currentCountryName || "").toLowerCase().trim();
  const selectedData = currentCountryName ? countries.find((c: any) =>
    c.name_id.toLowerCase() === searchName ||
    c.name_en.toLowerCase() === searchName
  ) : null;
  const currentData = selectedData;

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas || {};
  const [budgetData, setBudgetData] = useState(budgetStorage.getData());
  
  // Listen for budget/production updates for real-time reactivity
  useEffect(() => {
    const handleUpdate = () => {
      setBudgetData(budgetStorage.getData());
    };
    window.addEventListener('budget_storage_updated', handleUpdate);
    return () => window.removeEventListener('budget_storage_updated', handleUpdate);
  }, []);
  
  // Mapping trade keys to production buildings
  const productionMapping: Record<string, string> = {
    // Minerals
    emas: "gold_mine", uranium: "uranium_mine", batu_bara: "coal_mine", minyak_bumi: "oil_well",
    gas_alam: "gas_well", garam: "salt_mine", nikel: "nickel_mine", litium: "lithium_mine",
    tembaga: "copper_mine", aluminium: "aluminum_mine", logam_tanah_jarang: "rare_earth_mine", bijih_besi: "iron_ore_mine",
    // Industry
    semikonduktor: "electronics_factory", mobil: "car_factory", sepeda_motor: "motorcycle_factory", 
    smelter: "smelter", semen_beton: "cement_factory", kayu: "sawmill",
    air_mineral: "bottled_water_factory", gula: "sugar_factory", farmasi: "pharma_factory",
    pupuk: "fertilizer_factory", pengolahan_daging: "meat_processing_factory", mie_instan: "noodle_factory",
    roti: "bakery_factory",
    // Food
    ayam: "poultry_farm", unggas: "poultry_farm", sapi_perah: "dairy_farm", sapi_potong: "cattle_farm",
    domba_kambing: "sheep_farm", udang: "shrimp_farm", ikan: "freshwater_fish_farm", kerang: "pearl_farm",
    beras: "paddy_field", gandum: "wheat_field", jagung: "corn_field", umbi_umbian: "tuber_field", kedelai: "soybean_field",
    kelapa_sawit: "palm_oil_plantation", teh: "tea_plantation", kopi: "coffee_plantation", cokelat: "cocoa_plantation",
    tebu: "sugarcane_plantation", sayur_sayuran: "vegetable_farm"
  };

  const buildingKey = productionMapping[selectedKey] || selectedKey;
  const allRates: any = { ...mineralKritisRate, ...produkIndustriRate, ...komoditasPanganRate };
  const rateData = allRates[buildingKey];

  // Logic to find base building count from country sectors
  const getBaseCount = (bKey: string) => {
    if (!rateData || !currentData) return 0;
    const dataKey = rateData.dataKey || bKey; // Use dataKey for sector lookup
    
    if (currentData.sektor_listrik && (currentData.sektor_listrik as any)[dataKey] !== undefined) return (currentData.sektor_listrik as any)[dataKey];
    if (currentData.sektor_ekstraksi && (currentData.sektor_ekstraksi as any)[dataKey] !== undefined) return (currentData.sektor_ekstraksi as any)[dataKey];
    if (currentData.sektor_manufaktur && (currentData.sektor_manufaktur as any)[dataKey] !== undefined) return (currentData.sektor_manufaktur as any)[dataKey];
    if (currentData.sektor_peternakan && (currentData.sektor_peternakan as any)[dataKey] !== undefined) return (currentData.sektor_peternakan as any)[dataKey];
    if (currentData.sektor_perikanan && (currentData.sektor_perikanan as any)[dataKey] !== undefined) return (currentData.sektor_perikanan as any)[dataKey];
    if (currentData.sektor_agrikultur && (currentData.sektor_agrikultur as any)[dataKey] !== undefined) return (currentData.sektor_agrikultur as any)[dataKey];
    if (currentData.sektor_olahan_pangan && (currentData.sektor_olahan_pangan as any)[dataKey] !== undefined) return (currentData.sektor_olahan_pangan as any)[dataKey];
    if (currentData.sektor_farmasi && (currentData.sektor_farmasi as any)[dataKey] !== undefined) return (currentData.sektor_farmasi as any)[dataKey];
    return 0;
  };

  const buildingCount = currentCountryName ? getBaseCount(buildingKey) + (buildingDeltas[buildingKey] || 0) : null;
  const dailyProduction = currentCountryName && rateData ? rateData.production * (buildingCount || 0) : null;
  const unit = rateData?.unit || "unit";

  const cumulativeStock = currentCountryName ? budgetData.cumulativeProduction?.[buildingKey] || 0 : null;
  const maxStock = cumulativeStock !== null ? Math.floor(cumulativeStock) : 0;

  const [quantity, setQuantity] = useState(type === "sell" ? Math.min(100, maxStock) : 100);
  const [progress, setProgress] = useState(0);
  const [selectedPartner, setSelectedPartner] = useState<string | null>(defaultPartner);
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [budgetErrorData, setBudgetErrorData] = useState<{
    required: number;
    available: number;
    commodity: string;
  } | null>(null);
  const [successData, setSuccessData] = useState<{
    type: "buy" | "sell";
    quantity: number;
    commodity: string;
    partner: string;
    totalValue: number;
  } | null>(null);

  // Sync selectedPartner with defaultPartner from parent
  useEffect(() => {
    setSelectedPartner(defaultPartner);
  }, [defaultPartner]);

  // Sync quantity if it exceeds maxStock during export
  useEffect(() => {
    if (type === "sell" && quantity > maxStock) {
      setQuantity(maxStock);
    }
  }, [maxStock, type]);
  
  // Real-time animation for production line
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setProgress(p => (p + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-3xl animate-in fade-in duration-500">
        <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
        
        <div className="bg-zinc-950 border border-zinc-800/50 w-full max-w-2xl rounded-[3.5rem] overflow-hidden relative shadow-[0_50px_100px_rgba(0,0,0,0.8)] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
          {/* Dynamic Glow Background */}
          <div 
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none"
            style={{ backgroundColor: color }}
          ></div>

          <div className="p-10 relative z-10 flex flex-col gap-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-3xl flex items-center justify-center border-2 border-white/10 shadow-2xl relative group overflow-hidden"
                  style={{ backgroundColor: `${color}10` }}
                >
                  <div 
                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                     style={{ backgroundColor: color }}
                  ></div>
                  <Icon size={32} style={{ color }} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase">{selectedName}</h2>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all active:scale-95"
              >
                <X size={24} />
              </button>
            </div>

            {/* Real-time Production Dashboard */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-[2rem] flex flex-col gap-1 group hover:border-white/10 transition-colors">
                <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                  <Activity size={10} className="text-blue-500" /> Total Produksi Harian
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white tracking-tighter italic">
                    {(!selectedPartner || selectedPartner === "Pasar Global") ? "-" : (dailyProduction !== null ? Math.floor(dailyProduction).toLocaleString('id-ID') : "---")}
                  </span>
                  {(selectedPartner && selectedPartner !== "Pasar Global") && dailyProduction !== null && (
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold text-zinc-600 uppercase tracking-widest leading-none">{unit}</span>
                      <span className="text-[9px] font-bold text-blue-500/60 uppercase tracking-tighter italic mt-1 leading-none">Laju: {rateData?.production} {unit}/Unit</span>
                    </div>
                  )}
                </div>
                <div className="mt-3 w-full h-1 bg-zinc-800 rounded-full overflow-hidden relative">
                  <div 
                    className={`absolute inset-y-0 left-0 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300 ${(!selectedPartner || selectedPartner === "Pasar Global") ? 'opacity-0' : 'opacity-100'}`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-[2rem] flex flex-col gap-1 group hover:border-white/10 transition-colors">
                <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                  <Package size={10} className="text-green-500" /> Total Fasilitas Aktif
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white tracking-tighter italic">
                    {(!selectedPartner || selectedPartner === "Pasar Global") ? "-" : (buildingCount !== null ? buildingCount : "---")}
                  </span>
                  {(selectedPartner && selectedPartner !== "Pasar Global") && buildingCount !== null && <span className="text-[12px] font-bold text-zinc-600 uppercase tracking-widest">AKTIF</span>}
                </div>
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ${(selectedPartner && selectedPartner !== "Pasar Global") && buildingCount !== null && i < buildingCount ? 'bg-green-500' : 'bg-zinc-800'}`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-[2rem] flex flex-col gap-1 group hover:border-white/10 transition-colors">
                <span className="text-[11px] font-black text-purple-500 uppercase tracking-widest flex items-center gap-2">
                  <TrendingUp size={10} /> Total Stok Nasional
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white tracking-tighter italic">
                    {(!selectedPartner || selectedPartner === "Pasar Global") ? "-" : (cumulativeStock !== null ? Math.floor(cumulativeStock).toLocaleString('id-ID') : "---")}
                  </span>
                  {(selectedPartner && selectedPartner !== "Pasar Global") && cumulativeStock !== null && <span className="text-[12px] font-bold text-zinc-600 uppercase tracking-widest">{unit}</span>}
                </div>
                <div className="mt-3 w-full h-1 bg-zinc-800 rounded-full overflow-hidden relative">
                  <div 
                    className={`absolute inset-y-0 left-0 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-1000 ${(!selectedPartner || selectedPartner === "Pasar Global") ? 'opacity-0' : 'opacity-100'}`}
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Execution Controls */}
            <div className="space-y-6">
              {/* Kas Negara (Balance) Card */}
              <div className="flex items-center justify-between bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-2xl group hover:border-yellow-500/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-yellow-500/10 rounded-xl group-hover:bg-yellow-500/20 transition-colors">
                    <Coins className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Saldo Anggaran Saat Ini</span>
                    <span className="text-xl font-black text-white italic tracking-tight">{budgetData.anggaran.toLocaleString('id-ID')}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter italic">Kas Negara Nasional</span>
                </div>
              </div>

              {/* Partner Selection Dropdown */}
              <div className="relative">
                <span className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.3em] block mb-3 px-2">Tujuan / Sumber Transaksi</span>
                <button 
                  onClick={() => setIsPartnerDropdownOpen(!isPartnerDropdownOpen)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 p-5 rounded-2xl flex items-center justify-between group transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                      <Globe className={`h-5 w-5 ${selectedPartner ? 'text-blue-400' : 'text-zinc-600'}`} />
                    </div>
                    <div className="text-left">
                      <div className={`text-sm font-black uppercase tracking-wider ${selectedPartner ? 'text-white' : 'text-zinc-500'}`}>
                        {selectedPartner || "Pilih Mitra Dagang"}
                      </div>
                      <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter italic">
                        {selectedPartner === "Pasar Global" ? "Bursa Komoditas Internasional" : selectedPartner ? "Kontrak Perdagangan Bilateral" : "Wajib memilih tujuan transaksi"}
                      </div>
                    </div>
                  </div>
                  <div className={`transition-all duration-300 ${isPartnerDropdownOpen ? 'rotate-180 text-blue-400' : showWarning ? 'text-red-500 animate-bounce' : 'text-zinc-500'}`}>
                     <ChevronDown size={20} />
                  </div>
                </button>

                {/* Validation Warning */}
                {showWarning && (
                  <div className="absolute -top-10 left-0 w-full flex justify-center animate-in fade-in slide-in-from-bottom-2 duration-300 pointer-events-none">
                    <div className="bg-red-500 text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                      Silakan Pilih Mitra Dagang Terlebih Dahulu!
                    </div>
                  </div>
                )}

                {isPartnerDropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-[210] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800">
                    <button 
                      onClick={() => {
                        setSelectedPartner("Pasar Global");
                        setIsPartnerDropdownOpen(false);
                      }}
                      className={`w-full p-4 flex items-center gap-4 hover:bg-zinc-900 transition-all text-left ${selectedPartner === "Pasar Global" ? 'bg-blue-500/5' : ''}`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500">
                        <Zap size={14} />
                      </div>
                      <span className="text-xs font-black text-zinc-300 uppercase tracking-widest">Pasar Global</span>
                    </button>
                    {partners.map((p, i) => (
                      <button 
                        key={i}
                        onClick={() => {
                          setSelectedPartner(p.mitra);
                          setIsPartnerDropdownOpen(false);
                        }}
                        className={`w-full p-4 flex items-center gap-4 hover:bg-zinc-900 transition-all text-left ${selectedPartner === p.mitra ? 'bg-blue-500/5' : ''}`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-blue-400">
                          <Globe size={14} />
                        </div>
                        <span className="text-xs font-black text-zinc-300 uppercase tracking-widest">{p.mitra}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em]">Volume Transaksi</span>
                <span className="text-lg font-black text-white tracking-tighter italic">{quantity.toLocaleString('id-ID')} {unit}</span>
              </div>
              
              <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-[2rem] p-6 flex items-center justify-between group hover:border-blue-500/20 transition-all">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">Harga Satuan (Harian)</span>
                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                       <TrendingUp size={10} className="text-blue-400" />
                       <span className="text-[10px] font-black text-blue-400 uppercase tracking-tighter italic">Pasar Aktif</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white tracking-tighter italic">
                    {Math.floor(basePrice).toLocaleString('id-ID')}
                  </span>
                  </div>
                </div>

                <div className="h-10 w-px bg-zinc-800"></div>

                <div className="flex flex-col gap-1 text-right">
                  <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">Total Estimasi Nilai</span>
                  <div className="flex items-baseline justify-end gap-1">
                    <span className={`text-4xl font-black tracking-tighter italic transition-colors duration-300 ${
                      type === "buy" && (quantity * basePrice) > budgetData.anggaran 
                      ? "text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]" 
                      : "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    }`}>
                      {Math.floor(quantity * basePrice).toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </div>

              <input 
                type="range" 
                min={type === "sell" && maxStock <= 0 ? 0 : 1} 
                max={type === "sell" ? Math.max(1, maxStock) : 100000} 
                step={type === "sell" ? (maxStock > 1000 ? 100 : 1) : 100} 
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-zinc-900 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all opacity-80 hover:opacity-100"
                style={{ background: `linear-gradient(to right, ${color} ${type === "sell" ? (quantity/Math.max(1, maxStock))*100 : (quantity/100000)*100}%, #18181b ${type === "sell" ? (quantity/Math.max(1, maxStock))*100 : (quantity/100000)*100}%)` }}
              />
              
              <div className="flex gap-4 pt-4">
                 <button 
                    onClick={onClose}
                    className="flex-1 py-6 bg-zinc-900 text-zinc-400 font-black uppercase text-[11px] tracking-[0.4em] rounded-[2rem] border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all active:scale-[0.98]"
                 >
                    Batalkan
                 </button>
                 <button 
                    onClick={() => {
                      if (!selectedPartner) {
                        setShowWarning(true);
                        setTimeout(() => setShowWarning(false), 3000);
                        return;
                      }
                      // Proceed with confirmation logic
                      const totalValue = quantity * basePrice;
                      
                      // Budget Validation Check - Match Success State Pattern
                      if (type === "buy" && Number(totalValue) > Number(budgetData.anggaran)) {
                        setBudgetErrorData({
                          required: totalValue,
                          available: budgetData.anggaran,
                          commodity: selectedName
                        });
                        return;
                      }

                      const budgetDelta = type === "buy" ? -totalValue : totalValue;
                      
                      budgetStorage.updateBudget(budgetDelta);
                      
                      // Trigger animated transaction line on the map
                      if (selectedPartner) {
                        const source = type === "buy" ? selectedPartner : currentCountryName;
                        const dest = type === "buy" ? currentCountryName : selectedPartner;
                        if (source && dest) {
                          tradeStorage.addTransaction({ source, dest, type });
                        }
                      }
                      
                      setSuccessData({
                        type,
                        quantity,
                        commodity: selectedName,
                        partner: selectedPartner,
                        totalValue
                      });
                    }}
                    className={`flex-[2] py-6 relative group overflow-hidden rounded-[2rem] active:scale-[0.98] transition-all ${!selectedPartner ? 'grayscale opacity-50 cursor-not-allowed' : ''}`}
                    style={{ backgroundColor: selectedPartner ? color : '#3f3f46' }}
                 >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 text-white font-black uppercase text-[11px] tracking-[0.4em] flex items-center justify-center gap-3">
                       KONFIRMASI {type === "buy" ? "IMPOR" : "EKSPOR"} <Play size={14} className="fill-white" />
                    </span>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal Overlay - Rendered via Portal for absolute top-level visibility */}
      {successData && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-500">
          <div className="absolute inset-0 bg-black/40" onClick={() => { setSuccessData(null); onClose(); }}></div>
          <div 
            className="bg-zinc-950 border border-zinc-800/80 w-full max-md rounded-[2.5rem] overflow-hidden relative shadow-[0_40px_80px_rgba(0,0,0,0.9)] animate-in zoom-in-95 duration-500 p-8 flex flex-col items-center text-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon with Glow */}
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse group-hover:scale-125 transition-transform duration-1000"></div>
              <Activity size={40} className="text-green-500 relative z-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">
                {successData.type === "buy" ? "Impor Berhasil!" : "Ekspor Berhasil!"}
              </h3>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                {successData.type === "buy" ? "import" : "ekspor"} <span className="text-white font-bold">{successData.commodity}</span> {successData.type === "buy" ? "dari" : "ke"} <span className="text-white font-bold">{successData.partner}</span> dengan nilai <span className="text-green-500 font-bold">{Math.floor(successData.totalValue).toLocaleString('id-ID')}</span> berhasil!
              </p>
            </div>

            <div className="w-full h-px bg-zinc-900"></div>

            <button 
              onClick={() => {
                setSuccessData(null);
                onClose();
              }}
              className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl border border-zinc-800 transition-all active:scale-[0.98]"
            >
              Tutup
            </button>
          </div>
        </div>,
        document.body
      )}

      {/* Budget Error Modal Overlay - Rendered via Portal for absolute top-level visibility */}
      {budgetErrorData && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/70" onClick={() => setBudgetErrorData(null)}></div>
          <div 
            className="bg-zinc-950 border border-zinc-800/80 w-full max-md rounded-[2.5rem] overflow-hidden relative shadow-[0_40px_80px_rgba(239,68,68,0.3)] animate-in zoom-in-95 duration-500 p-8 flex flex-col items-center text-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Warning Icon with Glow - Perfect Match with Success Style */}
            <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full animate-pulse group-hover:scale-125 transition-transform duration-1000"></div>
              <X size={40} className="text-red-500 relative z-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">
                Uang Tidak Cukup!
              </h3>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                Maaf, Saldo anggaran nasional Anda <span className="text-red-400">tidak memadai</span> untuk melakukan impor <span className="text-white font-bold">{budgetErrorData.commodity}</span>.
              </p>
            </div>

            <div className="w-full h-px bg-zinc-900/50"></div>

            <div className="grid grid-cols-2 w-full gap-4">
              <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 relative group overflow-hidden">
                <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1 relative z-10">Saldo Kas Negara</p>
                <div className="flex items-center gap-2 justify-center relative z-10">
                  <Coins size={14} className="text-yellow-500" />
                  <p className="text-lg font-black text-white italic">{budgetErrorData.available.toLocaleString('id-ID')}</p>
                </div>
              </div>
              <div className="bg-red-500/5 p-4 rounded-2xl border border-red-500/20 relative group overflow-hidden">
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-[10px] font-black text-red-500/60 uppercase tracking-widest mb-1 relative z-10">Total Dibutuhkan</p>
                <div className="flex items-center gap-2 justify-center relative z-10">
                  <Zap size={14} className="text-red-500" />
                  <p className="text-lg font-black text-red-500 italic">{budgetErrorData.required.toLocaleString('id-ID')}</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-zinc-900/50"></div>

            <button 
              onClick={() => setBudgetErrorData(null)}
              className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl border border-zinc-800 transition-all active:scale-[0.98] shadow-lg"
            >
              Kembali & Sesuaikan
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
