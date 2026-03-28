import React from "react";
import { buyPriceMap, sellPriceMap } from "../../tradeData";
import { TradePriceChart } from "../../TradePriceChart";

interface EksporHalamanProps {
  selectedKey: string;
  selectedName: string;
  selectedUnits: number;
  getProductionRate: (key: string) => number;
  getUnit: (key: string) => string;
  baseSellPrice: number;
  setActiveMenu: (menu: string) => void;
  selectedTimeframe: string;
  setSelectedTimeframe: (tf: string) => void;
  activeChartTab: "buy" | "sell";
  setActiveChartTab: (tab: "buy" | "sell") => void;
  budgetData: any;
  baseKeyMapping: any;
}

export const EksporHalaman: React.FC<EksporHalamanProps> = ({
  selectedKey,
  selectedName,
  selectedUnits,
  getProductionRate,
  getUnit,
  baseSellPrice,
  setActiveMenu,
  selectedTimeframe,
  setSelectedTimeframe,
  activeChartTab,
  setActiveChartTab,
  budgetData,
  baseKeyMapping
}) => {
  return (
    <div className="animate-in fade-in duration-700 space-y-10">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-4 leading-none">{selectedName}</h2>
          <div className="grid grid-cols-3 gap-x-12 gap-y-8 text-[12px] font-black uppercase tracking-[0.2em] text-zinc-500 italic">
            <div className="flex flex-col gap-2">
              <span className="text-zinc-600 not-italic border-b border-zinc-900 pb-2 mb-1 h-10 flex items-end">Total Fasilitas Aktif</span>
              <span className="text-white text-base tracking-normal">{selectedUnits.toLocaleString('id-ID')} Unit</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-zinc-600 not-italic border-b border-zinc-900 pb-2 mb-1 h-10 flex items-end">Produksi /Fasilitas</span>
              <span className="text-zinc-300 text-base tracking-normal">{getProductionRate(selectedKey).toLocaleString('id-ID')} {getUnit(selectedKey)}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-zinc-600 not-italic border-b border-zinc-900 pb-2 mb-1 h-10 flex items-end">Total Produksi Harian</span>
              <span className="text-blue-400 text-base tracking-normal">{(selectedUnits * getProductionRate(selectedKey)).toLocaleString('id-ID')} {getUnit(selectedKey)}</span>
            </div>
            <div className="flex flex-col gap-2 col-span-2 mt-2">
              <span className="text-zinc-600 not-italic border-b border-zinc-900 pb-2 mb-1 h-10 flex items-end">Total Stok Tersedia</span>
              <span className="text-blue-500 text-base tracking-normal">{(() => {
                const stockKeyMap: Record<string, string> = {
                  emas: "gold_mine", uranium: "uranium_mine", batu_bara: "coal_mine", minyak_bumi: "oil_well", gas_alam: "gas_well",
                  garam: "salt_mine", nikel: "nickel_mine", litium: "lithium_mine", tembaga: "copper_mine", aluminium: "aluminum_mine",
                  logam_tanah_jarang: "rare_earth_mine", bijih_besi: "iron_ore_mine", 
                  ayam_unggas: "livestock_poultry", sapi_perah: "livestock_dairy",
                  sapi_potong: "livestock_beef", domba_kambing: "livestock_sheep", udang_kerang: "livestock_shrimp", ikan: "livestock_fish",
                  padi: "agri_rice", gandum_jagung: "agri_grains", sayur_umbi: "agri_veg", kedelai: "agri_soy", kelapa_sawit: "agri_palm", kopi_teh_kakao: "agri_luxury",
                  pabrik_drone_kamikaze: "pabrik_drone_kamikaze", pabrik_amunisi: "pabrik_amunisi", pabrik_kendaraan_tempur: "pabrik_kendaraan_tempur", pabrik_senjata_berat: "pabrik_senjata_berat"
                };
                const mfgKey = Object.keys(baseKeyMapping).find(k => baseKeyMapping[k] === selectedKey);
                const stockKey = stockKeyMap[selectedKey] || mfgKey || selectedKey;
                const stock = Math.floor(budgetData.cumulativeProduction?.[stockKey] || 0);
                return `${stock.toLocaleString('id-ID')} ${getUnit(selectedKey)}`;
              })()}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 flex-shrink-0 animate-in fade-in slide-in-from-left-4 duration-500">
          <div className="flex flex-col gap-1 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <div className="flex justify-between gap-8"><span>Harga Tertinggi</span><span className="text-green-500">{Math.round(sellPriceMap[selectedKey] * 1.15).toLocaleString('id-ID')}</span></div>
            <div className="flex justify-between gap-8"><span>Harga Terendah</span><span className="text-red-500">{Math.round(sellPriceMap[selectedKey] * 0.85).toLocaleString('id-ID')}</span></div>
          </div>
          <button 
            disabled={selectedUnits === 0}
            onClick={() => setActiveMenu(`Menu:Perdagangan:ekspor_eksekusi`)} 
            className={`px-10 py-5 font-black uppercase text-[12px] tracking-[0.2em] rounded-2xl transition-all whitespace-nowrap ${
              selectedUnits === 0 
              ? "bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50 shadow-none" 
              : "bg-green-500 text-white hover:bg-green-600 cursor-pointer shadow-[0_10px_30px_rgba(34,197,94,0.2)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.4)] hover:scale-[1.02] active:scale-95"
            }`}
          >
            Eksekusi Ekspor {baseSellPrice.toLocaleString('id-ID')}
          </button>
        </div>
      </div>

      <div className="space-y-6 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-1 bg-zinc-900/50 p-1.5 rounded-2xl border border-zinc-900/50 backdrop-blur-md">
            {["1d", "1w", "1m", "3m", "6m", "9m", "1y", "3y", "5y"].map(tf => (
              <button key={tf} onClick={() => setSelectedTimeframe(tf)} className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all cursor-pointer ${selectedTimeframe === tf ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-white hover:bg-zinc-800'}`}>{tf}</button>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/40 p-1 rounded-2xl border border-zinc-900/50">
            <button onClick={() => setActiveChartTab("buy")} className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all hover:scale-105 active:scale-95 cursor-pointer ${activeChartTab === "buy" ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-zinc-600 hover:text-zinc-400'}`}>Grafik Beli</button>
            <button onClick={() => setActiveChartTab("sell")} className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all hover:scale-105 active:scale-95 cursor-pointer ${activeChartTab === "sell" ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' : 'text-zinc-600 hover:text-zinc-400'}`}>Grafik Jual</button>
          </div>
        </div>
        <TradePriceChart selectedKey={selectedKey} selectedTimeframe={selectedTimeframe} basePrice={activeChartTab === "buy" ? Math.round(buyPriceMap[selectedKey] || 100) : baseSellPrice} type={activeChartTab} color={activeChartTab === "buy" ? "#ef4444" : "#22c55e"} />
      </div>

      <div className="pt-8 border-t border-zinc-900/80">
        <div className="max-w-md bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-[2rem] relative overflow-hidden">
          <span className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.4em] block mb-3">Metrik Pasokan</span>
          <div className="flex items-baseline gap-3"><span className="text-4xl font-black text-white tracking-tighter italic">{selectedUnits}</span></div>
        </div>
      </div>
    </div>
  );
};
