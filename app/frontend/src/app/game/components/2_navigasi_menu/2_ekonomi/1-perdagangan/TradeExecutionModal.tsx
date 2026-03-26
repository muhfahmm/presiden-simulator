import React, { useState, useEffect } from "react";
import { X, Play, Package, TrendingUp, Activity, ArrowRightLeft, Zap, Box, Factory, Pickaxe, Tractor, Ship, Globe, ChevronDown } from "lucide-react";
import { mineralKritisRate, produkIndustriRate, komoditasPanganRate } from "@/app/select-country/data/pembangunan/laju-produksi";
import { gameStorage } from "@/app/game/gamestorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/3_pembangunan/buildingStorage";

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
}

export const TradeExecutionModal: React.FC<TradeExecutionModalProps> = ({
  isOpen, onClose, selectedKey, selectedName, type, basePrice, icon: Icon, color, partners = []
}) => {
  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas || {};
  const budgetData = budgetStorage.getData();
  
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

  const buildingKey = productionMapping[selectedKey];
  const cumulativeStock = buildingKey ? (budgetData.cumulativeProduction?.[buildingKey] || 0) : 0;
  const maxStock = Math.floor(cumulativeStock);

  const [quantity, setQuantity] = useState(type === "sell" ? Math.min(100, maxStock) : 100);
  const [progress, setProgress] = useState(0);
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

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

  const allRates: any = { ...mineralKritisRate, ...produkIndustriRate, ...komoditasPanganRate };
  const rateData = buildingKey ? allRates[buildingKey] : null;

  const buildingCount = buildingKey ? (buildingDeltas[buildingKey] || 0) + 1 : 1;
  const dailyProduction = rateData ? rateData.production * buildingCount : 0;
  const unit = rateData?.unit || "unit";

  return (
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
                <h3 className="text-base font-black text-zinc-500 uppercase tracking-[0.4em] leading-tight">Eksekusi Perdagangan</h3>
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
                <Activity size={10} className="text-blue-500" /> Produksi/Hari
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white tracking-tighter italic">
                  {Math.floor(dailyProduction).toLocaleString('id-ID')}
                </span>
                <span className="text-[12px] font-bold text-zinc-600 uppercase tracking-widest">{unit}</span>
              </div>
              <div className="mt-3 w-full h-1 bg-zinc-800 rounded-full overflow-hidden relative">
                <div 
                  className="absolute inset-y-0 left-0 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-[2rem] flex flex-col gap-1 group hover:border-white/10 transition-colors">
              <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Package size={10} className="text-green-500" /> Fasilitas
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white tracking-tighter italic">{buildingCount}</span>
                <span className="text-[12px] font-bold text-zinc-600 uppercase tracking-widest">AKTIF</span>
              </div>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${i < buildingCount ? 'bg-green-500' : 'bg-zinc-800'}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-[2rem] flex flex-col gap-1 group hover:border-white/10 transition-colors">
              <span className="text-[11px] font-black text-purple-500 uppercase tracking-widest flex items-center gap-2">
                <TrendingUp size={10} /> Hasil di Gudang:
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white tracking-tighter italic">
                  {Math.floor(cumulativeStock).toLocaleString('id-ID')}
                </span>
                <span className="text-[12px] font-bold text-zinc-600 uppercase tracking-widest">{unit}</span>
              </div>
              <div className="mt-3 w-full h-1 bg-zinc-800 rounded-full overflow-hidden relative">
                <div 
                  className="absolute inset-y-0 left-0 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-1000"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Execution Controls */}
          <div className="space-y-6">
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
                    {basePrice.toLocaleString('id-ID')}
                  </span>
                  <span className="text-[12px] font-bold text-zinc-600 uppercase tracking-widest">IDN/UNIT</span>
                </div>
              </div>

              <div className="h-10 w-px bg-zinc-800"></div>

              <div className="flex flex-col gap-1 text-right">
                <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">Total Estimasi Nilai</span>
                <div className="flex items-baseline justify-end gap-1">
                  <span className="text-4xl font-black text-white tracking-tighter italic drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {(quantity * basePrice).toLocaleString('id-ID')}
                  </span>
                  <span className="text-[12px] font-bold text-blue-500 uppercase tracking-widest leading-none">IDN</span>
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
                    const budgetDelta = type === "buy" ? -totalValue : totalValue;
                    
                    budgetStorage.updateBudget(budgetDelta);
                    
                    alert(`${type === "buy" ? "Impor" : "Ekspor"} ${quantity.toLocaleString('id-ID')} ${selectedName} ke ${selectedPartner} berhasil! \n${type === "buy" ? "-" : "+"} ${totalValue.toLocaleString('id-ID')} ditambahkan ke Kas Negara.`);
                    onClose();
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

          {/* Live Data Feed Status */}
          <div className="flex items-center justify-center gap-3 text-[9px] font-black text-zinc-600 uppercase tracking-[0.5em] border-t border-zinc-900 pt-8">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            SISTEM_KONTROL_PRODUKSI — v4.0.1 — STABLE
          </div>
        </div>
      </div>
    </div>
  );
};
