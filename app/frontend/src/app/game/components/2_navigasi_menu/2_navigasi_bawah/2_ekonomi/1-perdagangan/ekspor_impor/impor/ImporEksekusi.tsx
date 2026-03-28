import React, { useState, useEffect } from "react";
import { Hammer, ChevronLeft, Coins, Calculator, Box, MapPin, Activity, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { historiImportStorage } from "./HistoriImportStorage";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { tradeStorage } from "../../TradeStorage";
import { asiaCountries, afrikaCountries, eropaCountries, naCountries, saCountries, oceaniaCountries } from "@/app/database/data/countries/region/index";

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
    const aiDailyProd = selectedUnits * getProductionRate(selectedKey);
    return Math.floor(aiDailyProd * Math.max(1, daysPassed));
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

  const totalCost = quantity * basePrice;
  const isBudgetInsufficient = totalCost > budgetData.anggaran;

  const calculateShippingTime = (partner: string | null) => {
    if (!partner) return "3-5 Hari";
    
    // ASEAN / Close neighbors
    const asean = ["Singapura", "Malaysia", "Thailand", "Filipina", "Brunei", "Vietnam", "Laos", "Kamboja", "Myanmar", "Timor Leste"];
    if (asean.includes(partner)) return "2-3 Hari";
    
    if (asiaCountries.some(c => c.name_id === partner || c.name_en === partner)) return "5-7 Hari";
    if (oceaniaCountries.some(c => c.name_id === partner || c.name_en === partner)) return "7-10 Hari";
    if (eropaCountries.some(c => c.name_id === partner || c.name_en === partner)) return "14-20 Hari";
    if (afrikaCountries.some(c => c.name_id === partner || c.name_en === partner)) return "18-25 Hari";
    if (naCountries.some(c => c.name_id === partner || c.name_en === partner)) return "21-28 Hari";
    if (saCountries.some(c => c.name_id === partner || c.name_en === partner)) return "25-35 Hari";
    
    return "10-15 Hari"; // Default
  };

  const handleConfirm = () => {
    if (isBudgetInsufficient) return;
    
    budgetStorage.updateBudget(-totalCost);
    
    const shippingTime = calculateShippingTime(selectedTradePartner);

    // Log to history
    historiImportStorage.saveImport({
      commodityKey: selectedKey,
      commodityName: selectedName,
      amount: quantity,
      unit: getUnit(selectedKey),
      pricePerUnit: basePrice,
      totalPrice: totalCost,
      partner: selectedTradePartner || "Unknown Partner",
      shippingTime: shippingTime
    });

    // Add to Inbox
    const gameDate = getStoredGameDate();
    inboxStorage.addMessage({
      source: "Kementerian Perdagangan",
      subject: `Impor ${selectedName} dari ${selectedTradePartner || "Mitra"} Berhasil`,
      priority: 'medium',
      time: `${String(gameDate.getDate()).padStart(2, '0')}-${String(gameDate.getMonth() + 1).padStart(2, '0')}-${gameDate.getFullYear()}`,
      content: `Transaksi impor ${quantity.toLocaleString('id-ID')} ${getUnit(selectedKey)} ${selectedName} telah berhasil diselesaikan.\n\nDetail:\n- Pengeluaran: -${totalCost.toLocaleString('id-ID')}\n- Mitra Dagang: ${selectedTradePartner || "Mitra Internasional"}\n- Estimasi Pengiriman: ${shippingTime}`
    });

    // Add animated transaction line to the map
    if (selectedTradePartner) {
        tradeStorage.addTransaction({
            source: selectedTradePartner,
            dest: currentCountry.name_id,
            type: 'buy'
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
          className="p-2.5 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-xl border border-zinc-800 transition-all active:scale-[0.95] flex items-center gap-2"
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

                <div className="p-4 bg-zinc-950/30 rounded-2xl border border-zinc-900 flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-blue-500" />
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Estimasi Waktu Pengiriman</p>
                  </div>
                  <p className="text-xs font-black text-blue-400 italic uppercase">{calculateShippingTime(selectedTradePartner)}</p>
                </div>

                <div className="p-6 bg-zinc-950/50 rounded-3xl border border-zinc-800/80 space-y-1">
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Total Estimasi Nilai</p>
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
              className="py-5 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-500 hover:text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl border border-zinc-800 transition-all active:scale-[0.98]"
            >
              Batalkan
            </button>
            <button 
              disabled={isBudgetInsufficient}
              onClick={handleConfirm}
              className={`py-5 font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl border transition-all active:scale-[0.98] ${
                isBudgetInsufficient 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-700 cursor-not-allowed' 
                : 'bg-red-500 border-red-400 text-white shadow-lg shadow-red-500/20 animate-in fade-in slide-in-from-right-2'
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
                 <h4 className="text-lg font-black text-white uppercase tracking-widest italic">Impor Berhasil</h4>
                 <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Saldo negara telah diperbarui</p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};
