import React, { useState, useEffect } from "react";
import { Hammer, ChevronLeft, Coins, Calculator, Box, MapPin, Activity, CheckCircle2, Clock, TrendingUp } from "lucide-react";

import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { historiEksporStorage } from "./HistoriEksporStorage";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { tradeStorage } from "../../TradeStorage";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { asiaCountries, afrikaCountries, eropaCountries, naCountries, saCountries, oceaniaCountries } from "@/app/database/data/negara/benua/index";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { getNationalLogisticsMultiplier } from "../../tradeData";

interface EksporEksekusiProps {
  selectedKey: string;
  selectedName: string;
  selectedUnits: number;
  getProductionRate: (key: string) => number;
  getUnit: (key: string) => string;
  basePrice: number;
  setActiveMenu: (menu: string) => void;
  budgetData: any;
  activeCountryData: any;
  currentCountry: any;
  selectedTradePartner: string | null;
  getStoredGameDate: () => Date;
  INITIAL_GAME_DATE: Date;
}

// Helper to map selected commodity keys to their production storage keys
const getStockKey = (selectedKey: string) => {
  const map: Record<string, string> = {
    // Minerals
    emas: "1_tambang_emas", 
    uranium: "2_tambang_uranium", 
    batu_bara: "3_tambang_batu_bara", 
    minyak_bumi: "4_sumur_minyak", 
    gas_alam: "5_sumur_gas", 
    garam: "6_tambang_garam", 
    nikel: "7_tambang_nikel", 
    litium: "8_tambang_litium", 
    tembaga: "9_tambang_tembaga", 
    aluminium: "10_tambang_aluminium", 
    logam_tanah_jarang: "11_tambang_ltj", 
    bijih_besi: "12_tambang_bijih_besi",
    
    // Industrial / Manufactured
    semikonduktor: "1_pabrik_elektronik",
    mobil: "2_pabrik_mobil",
    sepeda_motor: "3_pabrik_motor",
    smelter: "4_smelter",
    semen_beton: "5_pabrik_semen",
    kayu: "6_penggergajian_kayu",
    
    // Food Processing
    air_mineral: "1_pabrik_air_mineral",
    gula: "2_pabrik_gula",
    roti: "3_pabrik_roti",
    pengolahan_daging: "4_pabrik_pengolahan_daging",
    mie_instan: "5_pabrik_mie_instan",
    minyak_goreng: "6_pabrik_minyak_goreng",
    farmasi: "1_pabrik_farmasi",
    
    // Livestock (Peternakan)
    ayam_unggas: "1_peternakan_unggas", 
    sapi_perah: "2_peternakan_sapi_perah", 
    sapi_potong: "3_peternakan_sapi_potong", 
    domba_kambing: "4_peternakan_domba_kambing",
    
    // Fisheries (Perikanan)
    udang_kerang: "1_tambak_udang", 
    ikan: "2_budidaya_ikan_tawar",
    
    // Agriculture (Agrikultur)
    padi: "1_sawah_padi", 
    gandum_jagung: "2_ladang_gandum", 
    sayur_umbi: "4_ladang_umbi", 
    kedelai: "5_ladang_kedelai", 
    kelapa_sawit: "6_perkebunan_sawit", 
    kopi_teh_kakao: "8_perkebunan_kopi",
    tebu: "10_perkebunan_tebu",
    
    // Military
    pabrik_amunisi: "pabrik_amunisi"
  };
  return map[selectedKey] || selectedKey;
};

export const EksporEksekusi: React.FC<EksporEksekusiProps> = ({ 
  selectedKey, selectedName, selectedUnits, getProductionRate, getUnit, basePrice, 
  setActiveMenu, budgetData: initialBudgetData, activeCountryData, currentCountry, selectedTradePartner,
  getStoredGameDate, INITIAL_GAME_DATE
}) => {
  const [budgetData, setBudgetData] = useState(initialBudgetData);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isManual, setIsManual] = useState(false);
  const [quantity, setQuantity] = useState(0);

  // Sync state with props on mount/update
  useEffect(() => {
    setBudgetData(initialBudgetData);
    if (!isManual) {
      const stockKey = getStockKey(selectedKey);
      const latestStock = Math.floor(initialBudgetData.cumulativeProduction?.[stockKey] || 0);
      setQuantity(latestStock);
    }
  }, [initialBudgetData, selectedKey, isManual]);

  // Listen for real-time production updates
  useEffect(() => {
    const handleUpdate = () => {
      const latestData = budgetStorage.getData();
      setBudgetData(latestData);
      
      // Auto-update quantity to max stock if not manually adjusted
      if (!isManual) {
        const stockKey = getStockKey(selectedKey);
        const latestStock = Math.floor(latestData.cumulativeProduction?.[stockKey] || 0);
        setQuantity(latestStock);
      }
    };
    window.addEventListener('budget_storage_updated', handleUpdate);
    return () => window.removeEventListener('budget_storage_updated', handleUpdate);
  }, [isManual, selectedKey]);

  // Calculate User Stock (Inventory)
  const stockKey = getStockKey(selectedKey);
  const userStock = Math.floor(budgetData.cumulativeProduction?.[stockKey] || 0);

  // Simulate AI Balance (based on country GDP or fixed high value)
  const aiBalance = (activeCountryData?.ekonomi?.pdb_nominal || 50000000) / 1000;

  const totalValue = quantity * basePrice;

  const logisticsMultiplier = getNationalLogisticsMultiplier();

  const calculateShippingTime = (partner: string | null) => {
    const totalSpeedup = logisticsMultiplier.shippingSpeedup;
    const speedupMultiplier = 1 - (totalSpeedup / 100);

    if (!partner) return { base: "3-5 Hari", final: "3-5 Hari" };
    
    const calculateDays = (min: number, max: number, multiplier: number) => {
        const fMin = Math.max(1, Math.floor(min * multiplier));
        const fMax = Math.max(1, Math.floor(max * multiplier));
        return fMin === fMax ? `${fMin} Hari` : `${fMin}-${fMax} Hari`;
    };
    
    // Determine base and final
    let baseRange = [10, 15];
    const asean = ["Singapura", "Malaysia", "Thailand", "Filipina", "Brunei", "Vietnam", "Laos", "Kamboja", "Myanmar", "Timor Leste"];
    
    if (asean.includes(partner)) baseRange = [2, 3];
    else if (asiaCountries.some(c => c.name_id === partner || c.name_en === partner)) baseRange = [5, 7];
    else if (oceaniaCountries.some(c => c.name_id === partner || c.name_en === partner)) baseRange = [7, 10];
    else if (eropaCountries.some(c => c.name_id === partner || c.name_en === partner)) baseRange = [14, 20];
    else if (afrikaCountries.some(c => c.name_id === partner || c.name_en === partner)) baseRange = [18, 25];
    else if (naCountries.some(c => c.name_id === partner || c.name_en === partner)) baseRange = [21, 28];
    else if (saCountries.some(c => c.name_id === partner || c.name_en === partner)) baseRange = [25, 35];
    
    return {
      base: calculateDays(baseRange[0], baseRange[1], 1),
      final: calculateDays(baseRange[0], baseRange[1], speedupMultiplier)
    };
  };

  const shipTimeData = calculateShippingTime(selectedTradePartner);


  const handleConfirm = () => {
    // budgetStorage.updateBudget(totalValue); // MOVED TO ARRIVAL LOGIC
    
    // REDUCE DOMESTIC STOCK IMMEDIATELY (Goods leave the warehouse)
    budgetStorage.updateCumulativeProduction({ [stockKey]: -quantity });
    
    const shipTimeData = calculateShippingTime(selectedTradePartner);

    // Log to history
    historiEksporStorage.saveExport({
      commodityKey: selectedKey,
      commodityName: selectedName,
      amount: quantity,
      unit: getUnit(selectedKey),
      pricePerUnit: basePrice,
      totalPrice: totalValue,
      partner: selectedTradePartner || "Unknown Partner",
      shippingTime: shipTimeData.final
    });

    // Add to Inbox (Update message to reflect shipping status)
    const gameDate = getStoredGameDate();
    inboxStorage.addMessage({
      source: "Kementerian Perdagangan",
      subject: `Pengiriman Ekspor ${selectedName} Dimulai`,
      priority: 'medium',
      time: `${String(gameDate.getDate()).padStart(2, '0')}-${String(gameDate.getMonth() + 1).padStart(2, '0')}-${gameDate.getFullYear()}`,
      content: `Barang ekspor sebanyak ${quantity.toLocaleString('id-ID')} ${getUnit(selectedKey)} ${selectedName} sedang dalam perjalanan ke ${selectedTradePartner || "Mitra"}.\n\nDetail:\n- Nilai Transaksi: +${totalValue.toLocaleString('id-ID')} (Diterima saat tiba)\n- Estimasi Tiba: ${shipTimeData.final}`
    });

    // Add animated transaction line to the map
    if (selectedTradePartner) {
        tradeStorage.addTransaction({
            source: currentCountry.name_id,
            dest: selectedTradePartner,
            type: 'sell',
            commodity: selectedName,
            commodityKey: stockKey, // Use the storage key for production
            amount: quantity,
            totalValue: totalValue, // Store value for arrival
            unit: getUnit(selectedKey),
            totalDays: parseInt(shipTimeData.final.split("-")[1]?.split(" ")[0] || shipTimeData.final.split(" ")[0]) || 10,
            startDate: getStoredGameDate()
        });
    }

    setShowSuccess(true);
    
    // Auto return after delay
    setTimeout(() => {
      setShowSuccess(false);
      setActiveMenu("Menu:Perdagangan");
    }, 2000);
  };

  return (
    <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative pb-10">
      {/* Header & Back */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => setActiveMenu("Menu:Perdagangan")}
          className="p-2.5 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-xl border border-zinc-800 transition-all hover:scale-105 active:scale-[0.95] flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest pr-1">Kembali</span>
        </button>
        <div className="text-right">
          <h2 className="text-xl font-black text-white uppercase tracking-wider italic leading-none">{selectedName}</h2>
          <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Terminal Eksekusi Ekspor Strategis</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Card: Stats & Info */}
        <div className="space-y-6">
          <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-[2rem] space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 text-green-500">
               <Box size={120} />
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Activity size={20} className="text-green-500" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Tujuan Ekspor (AI)</p>
                  <p className="text-lg font-black text-white italic uppercase tracking-tighter">{selectedTradePartner || "Pasar Internasional"}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Box size={14} className="text-zinc-500" />
                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Stok Nasional (Sya)</p>
                  </div>
                  <p className="text-xl font-black text-white tracking-tighter italic">{userStock.toLocaleString('id-ID')} <span className="text-zinc-600 text-[10px] not-italic">{getUnit(selectedKey)}</span></p>
                </div>
                <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Coins size={14} className="text-zinc-500" />
                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Saldo Mitra (Target)</p>
                  </div>
                  <p className="text-xl font-black text-white tracking-tighter italic">{Math.floor(aiBalance).toLocaleString('id-ID')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-800/30 p-6 rounded-[2rem] space-y-4">
             <div className="flex items-center justify-between">
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Status Saldo Saya</p>
                <div className="px-2 py-0.5 rounded-md border text-[8px] font-black uppercase tracking-widest bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                   Kas Aktif
                </div>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-yellow-500/10 text-yellow-500">
                   <Coins size={24} />
                </div>
                <div>
                   <p className="text-xl font-black text-white italic">{budgetData.anggaran.toLocaleString('id-ID')}</p>
                   <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter">Saldo Kas Negara Republik {currentCountry.name_id}</p>
                </div>
             </div>
          </div>
        </div>

        {/* Right Card: Transaction Controls */}
        <div className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calculator size={20} className="text-green-500" />
                <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] italic">Analisis Penjualan</h3>
              </div>
              <span className="text-[10px] font-black text-green-500 italic tracking-[0.2em]">EXPORT_PROTOCOL</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Kapasitas Ekspor</p>
                  <p className="text-2xl font-black text-white italic">{quantity.toLocaleString('id-ID')} <span className="text-xs text-zinc-500 not-italic uppercase">{getUnit(selectedKey)}</span></p>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max={Math.max(1, userStock)}
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(parseInt(e.target.value));
                    setIsManual(true);
                  }}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>

                <div className="p-4 bg-zinc-950/30 rounded-2xl border border-zinc-900 flex flex-col gap-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-green-500" />
                      <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Estimasi Pengiriman</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-xs font-black text-zinc-500 line-through decoration-red-500/50 uppercase">{shipTimeData.base}</p>
                      <p className="text-xs font-black text-green-400 italic uppercase">{shipTimeData.final}</p>
                    </div>
                  </div>

                  {logisticsMultiplier.shippingSpeedup > 0 && (
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
                      <div className="flex items-center gap-2">
                         <div className="p-1 bg-emerald-500/10 rounded-md">
                           <TrendingUp size={10} className="text-emerald-500" />
                         </div>
                         <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Logistik Ekspor Strategis</p>
                      </div>
                      <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 italic">
                        +{logisticsMultiplier.shippingSpeedup.toFixed(1)}% Speedup
                      </span>
                    </div>
                  )}
                </div>


                <div className="p-6 bg-zinc-950/50 rounded-3xl border border-zinc-800/80 space-y-1">
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Total Estimasi Pendapatan</p>
                <div className="flex items-baseline justify-between">
                  <p className="text-4xl font-black text-white italic tracking-tighter">
                    {totalValue.toLocaleString('id-ID')}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">+ DEVISA</span>
                    <Coins size={20} className="text-zinc-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <button 
              onClick={() => setActiveMenu("Menu:Perdagangan")}
              className="py-5 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-500 hover:text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl border border-zinc-800 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Batalkan
            </button>
            <button 
              disabled={quantity <= 0 || userStock <= 0}
              onClick={handleConfirm}
              className={`py-5 font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl border transition-all active:scale-[0.98] ${
                quantity <= 0 || userStock <= 0
                ? 'bg-zinc-900 border-zinc-800 text-zinc-700 cursor-not-allowed' 
                : 'bg-green-600 border-green-500 text-white shadow-lg shadow-green-500/20 hover:bg-green-500 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
              }`}
            >
              Konfirmasi Ekspor
            </button>
          </div>
        </div>
      </div>

      {/* Mini Success Modal - Centered */}
      {showSuccess && (
        <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-300">
           <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center gap-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                 <CheckCircle2 size={32} className="text-green-500 animate-in zoom-in-50 duration-500" />
              </div>
              <div className="text-center">
                 <h4 className="text-lg font-black text-white uppercase tracking-widest italic">Ekspor Berhasil</h4>
                 <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Devisa negara telah diterima</p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};
