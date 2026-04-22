import React, { useState, useEffect } from "react";
import { Hammer, ChevronLeft, Coins, Calculator, Box, MapPin, Activity, CheckCircle2, AlertTriangle, Clock, TrendingUp } from "lucide-react";

import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { historiImportStorage } from "./HistoriImportStorage";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { tradeStorage } from "../../TradeStorage";
import { importStockStorage } from "../../ImportStockStorage";
import { asiaCountries, afrikaCountries, eropaCountries, naCountries, saCountries, oceaniaCountries } from "@/app/database/data/negara/benua/index";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { getNationalLogisticsMultiplier } from "../../tradeData";

interface ImporEksekusiProps {
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
}

// Helper to map selected commodity keys to their production storage keys
export const getStockKey = (selectedKey: string) => {
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
    tebu: "10_perkebunan_tebu"
  };
  return map[selectedKey] || selectedKey;
};

export const ImporEksekusi: React.FC<ImporEksekusiProps> = ({ 
  selectedKey, selectedName, selectedUnits, getProductionRate, getUnit, basePrice, 
  setActiveMenu, budgetData: initialBudgetData, activeCountryData, currentCountry, selectedTradePartner,
  getStoredGameDate
}) => {
  const [budgetData, setBudgetData] = useState(initialBudgetData);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isManual, setIsManual] = useState(false);

  // Helper to calculate AI stock
  const calculateAiStock = () => {
    const today = getStoredGameDate();
    const daysPassed = Math.floor((today.getTime() - INITIAL_GAME_DATE.getTime()) / (1000 * 60 * 60 * 24));
    const aiDailyProd = selectedUnits * (getProductionRate(selectedKey) ?? 1);
    const totalSimulated = Math.floor(aiDailyProd * Math.max(0, daysPassed));
    const alreadyImported = importStockStorage.getImportedAmount(selectedTradePartner, selectedKey);
    return Math.max(0, totalSimulated - alreadyImported);
  };

  const [liveAiStock, setLiveAiStock] = useState(calculateAiStock());
  const [quantity, setQuantity] = useState(Math.floor(calculateAiStock() * 0.1) || 100);

  // Real-time Simulation & Budget Sync
  useEffect(() => {
    const syncBudget = () => setBudgetData(budgetStorage.getData());
    
    // Initial sync
    const initialStock = calculateAiStock();
    setLiveAiStock(initialStock);
    if (!isManual) setQuantity(Math.floor(initialStock * 0.1) || 100);

    const aiInterval = setInterval(() => {
       const stock = calculateAiStock();
       setLiveAiStock(stock);
       if (!isManual) setQuantity(Math.floor(stock * 0.1) || 100);
    }, 1000);

    window.addEventListener('budget_storage_updated', syncBudget);
    return () => {
      window.removeEventListener('budget_storage_updated', syncBudget);
      clearInterval(aiInterval);
    };
  }, [isManual, selectedKey, selectedUnits, getProductionRate, getStoredGameDate]);

  const logisticsMultiplier = getNationalLogisticsMultiplier();
  const effectiveBasePrice = basePrice * (1 - logisticsMultiplier.importDiscount);
  const totalCost = Math.floor(quantity * effectiveBasePrice);
  const totalSavings = Math.floor(quantity * basePrice * logisticsMultiplier.importDiscount);
  
  const isBudgetInsufficient = totalCost > budgetData.anggaran;

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
    if (isBudgetInsufficient) return;
    
    // budgetStorage.updateBudget(-totalCost); // MOVED TO ARRIVAL LOGIC
    
    // TRACK PARTNER STOCK REDUCTION
    importStockStorage.addImport(selectedTradePartner, selectedKey, quantity);
    
    const shipTimeData = calculateShippingTime(selectedTradePartner);

    // Log to history
    historiImportStorage.saveImport({
      commodityKey: selectedKey,
      commodityName: selectedName,
      amount: quantity,
      unit: getUnit(selectedKey),
      pricePerUnit: basePrice,
      totalPrice: totalCost,
      partner: selectedTradePartner || "Unknown Partner",
      shippingTime: shipTimeData.final
    });

    // Add to Inbox (Update message to reflect shipping status)
    const gameDate = getStoredGameDate();
    inboxStorage.addMessage({
      source: "Kementerian Perdagangan",
      subject: `Pemesanan Impor ${selectedName} Dimulai`,
      priority: 'medium',
      time: `${String(gameDate.getDate()).padStart(2, '0')}-${String(gameDate.getMonth() + 1).padStart(2, '0')}-${gameDate.getFullYear()}`,
      content: `Barang impor sebanyak ${quantity.toLocaleString('id-ID')} ${getUnit(selectedKey)} ${selectedName} telah dipesan dari ${selectedTradePartner || "Mitra"}.\n\nDetail:\n- Nilai Transaksi: -${totalCost.toLocaleString('id-ID')} (Dibayar saat tiba)\n- Estimasi Tiba: ${shipTimeData.final}`
    });

    // Add animated transaction line to the map
    if (selectedTradePartner) {
        tradeStorage.addTransaction({
            source: selectedTradePartner,
            dest: currentCountry.name_id,
            type: 'buy',
            commodity: selectedName,
            commodityKey: getStockKey(selectedKey), // Use the storage key for inventory
            amount: quantity,
            totalValue: totalCost, // Store cost for arrival
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
          <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Terminal Eksekusi Impor Strategis</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Card: Stats & Info */}
        <div className="space-y-6">
          <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-[2rem] space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
               <MapPin size={120} />
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Activity size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Negara Asal (AI)</p>
                  <p className="text-lg font-black text-white italic uppercase tracking-tighter">{selectedTradePartner || "Pasar Internasional"}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Box size={14} className="text-zinc-500" />
                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Stok Tersedia</p>
                  </div>
                  <p className="text-xl font-black text-white tracking-tighter italic">{liveAiStock.toLocaleString('id-ID')} <span className="text-zinc-600 text-[10px] not-italic">{getUnit(selectedKey)}</span></p>
                </div>
                <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Coins size={14} className="text-zinc-500" />
                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Harga Satuan</p>
                  </div>
                  <p className="text-xl font-black text-white tracking-tighter italic">{basePrice.toLocaleString('id-ID')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-800/30 p-6 rounded-[2rem] space-y-4">
             <div className="flex items-center justify-between">
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Status Saldo Nasional</p>
                <div className={`px-2 py-0.5 rounded-md border text-[8px] font-black uppercase tracking-widest ${isBudgetInsufficient ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-green-500/10 text-green-500 border-green-500/20'}`}>
                   {isBudgetInsufficient ? 'Dana Terbatas' : 'Dana Memadai'}
                </div>
             </div>
             <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isBudgetInsufficient ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
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
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calculator size={20} className="text-blue-500" />
                <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] italic">Rincian Transaksi</h3>
              </div>
              <span className="text-[10px] font-black text-blue-500 italic tracking-[0.2em]">CONFIG_VOLUME</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Volume Transaksi</p>
                  <p className="text-2xl font-black text-white italic">{quantity.toLocaleString('id-ID')} <span className="text-xs text-zinc-500 not-italic uppercase">{getUnit(selectedKey)}</span></p>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max={Math.max(1, liveAiStock)}
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(parseInt(e.target.value));
                    setIsManual(true);
                  }}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

                <div className="p-4 bg-zinc-950/30 rounded-2xl border border-zinc-900 flex flex-col gap-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-blue-500" />
                      <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Estimasi Waktu Pengiriman</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-xs font-black text-zinc-500 line-through decoration-red-500/50 uppercase">{shipTimeData.base}</p>
                      <p className="text-xs font-black text-blue-400 italic uppercase">{shipTimeData.final}</p>
                    </div>
                  </div>
                  
                  {logisticsMultiplier.shippingSpeedup > 0 && (
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
                      <div className="flex items-center gap-2">
                         <div className="p-1 bg-emerald-500/10 rounded-md">
                           <TrendingUp size={10} className="text-emerald-500" />
                         </div>
                         <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Logistik Impor Strategis</p>
                      </div>
                      <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 italic">
                        +{logisticsMultiplier.shippingSpeedup.toFixed(1)}% Faster
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 bg-zinc-950/50 rounded-3xl border border-zinc-800/80 space-y-1">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Total Estimasi Nilai</p>
                  {logisticsMultiplier.importDiscount > 0 && (
                     <div className="text-[8px] font-black text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded-md border border-emerald-500/10 uppercase tracking-widest">
                       Hemat {totalSavings.toLocaleString('id-ID')} ({(logisticsMultiplier.importDiscount * 100).toFixed(1)}%)
                     </div>
                  )}
                </div>
                <div className="flex items-baseline justify-between">
                  <p className={`text-4xl font-black italic tracking-tighter ${isBudgetInsufficient ? 'text-red-500' : 'text-white'}`}>
                    {totalCost.toLocaleString('id-ID')}
                  </p>
                  <Coins size={20} className={isBudgetInsufficient ? 'text-red-500' : 'text-zinc-700'} />
                </div>
                {isBudgetInsufficient && (
                  <div className="flex items-center gap-2 mt-2 text-red-500/80 animate-pulse">
                    <AlertTriangle size={12} />
                    <p className="text-[9px] font-black uppercase tracking-widest italic">Saldo tidak mencukupi untuk transaksi ini</p>
                  </div>
                )}
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
              disabled={isBudgetInsufficient}
              onClick={handleConfirm}
              className={`py-5 font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl border transition-all active:scale-[0.98] ${
                isBudgetInsufficient 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-700 cursor-not-allowed' 
                : 'bg-red-500 border-red-400 text-white shadow-lg shadow-red-500/20 hover:bg-red-400 hover:scale-[1.02] active:scale-[0.98] cursor-pointer animate-in fade-in slide-in-from-right-2'
              }`}
            >
              Konfirmasi Impor
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
                 <h4 className="text-lg font-black text-white uppercase tracking-widest italic">Pemesanan Berhasil</h4>
                 <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Kapal sedang dalam perjalanan</p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};
