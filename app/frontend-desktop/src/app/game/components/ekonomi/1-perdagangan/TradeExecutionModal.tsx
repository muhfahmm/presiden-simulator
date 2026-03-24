import React, { useState, useEffect } from "react";
import { X, Play, Package, TrendingUp, Activity, ArrowRightLeft, Zap, Box, Factory, Pickaxe, Tractor, Ship } from "lucide-react";
import { mineralKritisRate, produkIndustriRate, komoditasPanganRate } from "../../../../select-country/data/pembangunan/laju-produksi";
import { gameStorage } from "../../../../game/gamestorage";

interface TradeExecutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedKey: string;
  selectedName: string;
  type: "buy" | "sell";
  basePrice: number;
  icon: any;
  color: string;
}

export const TradeExecutionModal: React.FC<TradeExecutionModalProps> = ({
  isOpen, onClose, selectedKey, selectedName, type, basePrice, icon: Icon, color
}) => {
  const [quantity, setQuantity] = useState(100);
  const [progress, setProgress] = useState(0);
  
  // Real-time animation for production line
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setProgress(p => (p + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const buildingDeltas = session?.buildingDeltas || {};

  // Mapping trade keys to production buildings
  const productionMapping: Record<string, string> = {
    // Minerals
    gold: "gold_mine", uranium: "uranium_mine", coal: "coal_mine", oil: "oil_well",
    gas: "gas_well", salt: "salt_mine", nickel: "nickel_mine", lithium: "lithium_mine",
    copper: "copper_mine", aluminum: "aluminum_mine", rare_earth: "rare_earth_mine", iron_ore: "iron_ore_mine",
    // Industry
    semiconductor: "electronics_factory", car: "car_factory", motorcycle: "motorcycle_factory", 
    smelter: "smelter", concrete_cement: "cement_factory", wood: "sawmill",
    mineral_water: "bottled_water_factory", sugar: "sugar_factory", pharmacy: "pharma_factory",
    fertilizer: "fertilizer_factory", meat_processing: "meat_processing_factory", instant_noodle: "noodle_factory",
    bread: "bakery_factory",
    // Food
    chicken: "poultry_farm", poultry: "poultry_farm", dairy_cow: "dairy_farm", beef_cow: "cattle_farm",
    sheep_goat: "sheep_farm", shrimp: "shrimp_farm", fish: "freshwater_fish_farm", shellfish: "pearl_farm",
    rice: "paddy_field", wheat: "wheat_field", corn: "corn_field", tubers: "tuber_field", soy: "soybean_field",
    palm_oil: "palm_oil_plantation", tea: "tea_plantation", coffee: "coffee_plantation", cocoa: "cocoa_plantation",
    sugarcane: "sugarcane_plantation", vegetables: "vegetable_farm"
  };

  const buildingKey = productionMapping[selectedKey];
  const allRates: any = { ...mineralKritisRate, ...produkIndustriRate, ...komoditasPanganRate };
  const rateData = buildingKey ? allRates[buildingKey] : null;

  const buildingCount = buildingKey ? (buildingDeltas[buildingKey] || 0) + 1 : 1;
  const cumulativeStock = buildingKey ? (session?.cumulativeProduction?.[buildingKey] || 0) : 0;
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
                <h3 className="text-sm font-black text-zinc-500 uppercase tracking-[0.4em] leading-tight">Eksekusi Perdagangan</h3>
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
            <div className="bg-zinc-900/50 border border-zinc-800/50 p-5 rounded-[2rem] flex flex-col gap-1 group hover:border-white/10 transition-colors">
              <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Activity size={10} className="text-blue-500" /> Produksi/Hari
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white tracking-tighter italic">
                  {Math.floor(dailyProduction).toLocaleString('id-ID')}
                </span>
                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{unit}</span>
              </div>
              <div className="mt-3 w-full h-1 bg-zinc-800 rounded-full overflow-hidden relative">
                <div 
                  className="absolute inset-y-0 left-0 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/50 p-5 rounded-[2rem] flex flex-col gap-1 group hover:border-white/10 transition-colors">
              <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Package size={10} className="text-green-500" /> Fasilitas
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white tracking-tighter italic">{buildingCount}</span>
                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">AKTIF</span>
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

            <div className="bg-zinc-900/50 border border-zinc-800/50 p-5 rounded-[2rem] flex flex-col gap-1 group hover:border-white/10 transition-colors">
              <span className="text-[9px] font-black text-purple-500 uppercase tracking-widest flex items-center gap-2">
                <TrendingUp size={10} /> Hasil di Gudang:
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white tracking-tighter italic">
                  {Math.floor(cumulativeStock).toLocaleString('id-ID')}
                </span>
                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{unit}</span>
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
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em]">Volume Transaksi</span>
              <span className="text-lg font-black text-white tracking-tighter italic">{quantity.toLocaleString('id-ID')} {unit}</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="10000" 
              step="10" 
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full h-2 bg-zinc-900 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all opacity-80 hover:opacity-100"
              style={{ background: `linear-gradient(to right, ${color} ${quantity/100}%, #18181b ${quantity/100}%)` }}
            />
            
            <div className="flex gap-4 pt-4">
               <button 
                  onClick={onClose}
                  className="flex-1 py-6 bg-zinc-900 text-zinc-400 font-black uppercase text-[11px] tracking-[0.4em] rounded-[2rem] border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all active:scale-[0.98]"
               >
                  Batalkan
               </button>
               <button 
                  className="flex-[2] py-6 relative group overflow-hidden rounded-[2rem] active:scale-[0.98] transition-all"
                  style={{ backgroundColor: color }}
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
