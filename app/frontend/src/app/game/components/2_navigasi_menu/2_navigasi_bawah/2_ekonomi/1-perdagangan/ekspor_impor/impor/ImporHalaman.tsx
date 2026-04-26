import React from "react";
import { Landmark, Zap } from "lucide-react";
import { buyPriceMap, sellPriceMap } from "../../tradeData";
import { TradePriceChart } from "../../TradePriceChart";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { importStockStorage } from "../../ImportStockStorage";

interface ImporHalamanProps {
  selectedKey: string;
  selectedName: string;
  selectedUnits: number;
  getProductionRate: (key: string) => number;
  getUnit: (key: string) => string;
  baseBuyPrice: number;
  setActiveMenu: (menu: string) => void;
  selectedTimeframe: string;
  setSelectedTimeframe: (tf: string) => void;
  activeChartTab: "buy" | "sell";
  setActiveChartTab: (tab: "buy" | "sell") => void;
  getStoredGameDate: () => Date;
  INITIAL_GAME_DATE: Date;
  selectedTradePartner: string | null;
}

export const ImporHalaman: React.FC<ImporHalamanProps> = ({
  selectedKey,
  selectedName,
  selectedUnits,
  getProductionRate,
  getUnit,
  baseBuyPrice,
  setActiveMenu,
  selectedTimeframe,
  setSelectedTimeframe,
  activeChartTab,
  setActiveChartTab,
  getStoredGameDate,
  INITIAL_GAME_DATE,
  selectedTradePartner
}) => {
  return (
    <div className="animate-in fade-in duration-700 space-y-10">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-4 leading-none">{selectedName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 text-[12px] font-black uppercase tracking-[0.2em] text-zinc-500 italic">
            <div className="flex flex-col gap-2">
              <span className="text-zinc-600 not-italic border-b border-zinc-900 pb-2 mb-1 h-10 flex items-end">Total Fasilitas Aktif</span>
              <span className="text-white text-base tracking-normal">{selectedUnits.toLocaleString('id-ID')} Unit</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-zinc-600 not-italic border-b border-zinc-900 pb-2 mb-1 h-10 flex items-end">Produksi / Bangunan</span>
              <span className="text-amber-500 text-base font-black">+{getProductionRate(selectedKey).toLocaleString('id-ID')} {getUnit(selectedKey)}/bangunan</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-zinc-600 not-italic border-b border-zinc-900 pb-2 mb-1 h-10 flex items-end">Total Produksi Harian</span>
              <span className="text-blue-400 text-base tracking-normal">{(selectedUnits * getProductionRate(selectedKey)).toLocaleString('id-ID')} {getUnit(selectedKey)}</span>
            </div>
            <div className="flex flex-col gap-2 col-span-1 md:col-span-3 mt-4">
              <span className="text-zinc-600 not-italic border-b border-zinc-900 pb-2 mb-1 h-10 flex items-end">Estimasi Biaya Impor</span>
              <span className="text-rose-400 text-2xl font-black tracking-tight">{Math.floor(selectedUnits * getProductionRate(selectedKey) * baseBuyPrice).toLocaleString('id-ID')}</span>
            </div>
            <div className="flex flex-col gap-2 col-span-2 mt-2">
              <span className="text-zinc-600 not-italic border-b border-zinc-900 pb-2 mb-1 h-10 flex items-end">Total Stok Tersedia</span>
              <span className="text-blue-500 text-base tracking-normal">{(() => {
                // Simulate partner stock based on days passed
                const today = getStoredGameDate();
                const daysPassed = Math.floor((today.getTime() - INITIAL_GAME_DATE.getTime()) / (1000 * 60 * 60 * 24));
                const dailyProd = selectedUnits * (getProductionRate(selectedKey) ?? 1);
                const totalSimulated = Math.floor(dailyProd * Math.max(0, daysPassed));
                const alreadyImported = importStockStorage.getImportedAmount(selectedTradePartner, selectedKey);
                const stock = Math.max(0, totalSimulated - alreadyImported);
                return `${stock.toLocaleString('id-ID')} ${getUnit(selectedKey)}`;
              })()}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 flex-shrink-0 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="flex flex-col gap-1 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <div className="flex justify-between gap-8"><span>Harga Tertinggi</span><span className="text-green-500">{Math.round(buyPriceMap[selectedKey] * 1.15).toLocaleString('id-ID')}</span></div>
            <div className="flex justify-between gap-8"><span>Harga Terendah</span><span className="text-red-500">{Math.round(buyPriceMap[selectedKey] * 0.85).toLocaleString('id-ID')}</span></div>
          </div>
          <button 
            disabled={selectedUnits === 0}
            onClick={() => setActiveMenu(`Menu:Perdagangan:impor_eksekusi:${selectedTradePartner}`)} 
            className={`px-10 py-5 font-black uppercase text-[12px] tracking-[0.2em] rounded-2xl transition-all whitespace-nowrap ${
              selectedUnits === 0 
              ? "bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50 shadow-none" 
              : "bg-red-500 text-white hover:bg-red-600 cursor-pointer shadow-[0_10px_30px_rgba(239,68,68,0.2)] hover:shadow-[0_15px_40px_rgba(239,68,68,0.4)] hover:scale-[1.02] active:scale-95"
            }`}
          >
            Eksekusi Impor {baseBuyPrice.toLocaleString('id-ID')}
          </button>
        </div>
      </div>

      <div className="space-y-6 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-1 bg-zinc-900/50 p-1.5 rounded-2xl border border-zinc-900/50">
            {["1w", "1m", "3m", "6m", "1y", "3y", "5y"].map(tf => (
              <button key={tf} onClick={() => setSelectedTimeframe(tf)} className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all cursor-pointer ${selectedTimeframe === tf ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-white hover:bg-zinc-800'}`}>{tf}</button>
            ))}


          </div>
          <div className="flex items-center gap-2 bg-zinc-900/40 p-1 rounded-2xl border border-zinc-900/50">
            <button onClick={() => setActiveChartTab("buy")} className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all hover:scale-105 active:scale-95 cursor-pointer ${activeChartTab === "buy" ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-zinc-600 hover:text-zinc-400'}`}>Grafik Beli</button>
            <button onClick={() => setActiveChartTab("sell")} className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all hover:scale-105 active:scale-95 cursor-pointer ${activeChartTab === "sell" ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' : 'text-zinc-600 hover:text-zinc-400'}`}>Grafik Jual</button>
          </div>
        </div>
        <TradePriceChart selectedKey={selectedKey} selectedTimeframe={selectedTimeframe} basePrice={activeChartTab === "buy" ? baseBuyPrice : Math.round(sellPriceMap[selectedKey] || 100)} type={activeChartTab} color={activeChartTab === "buy" ? "#ef4444" : "#22c55e"} />
      </div>

      <div className="pt-8 border-t border-zinc-900/80 flex flex-col gap-6">
        {/* Relevant News Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <Landmark size={14} className="text-blue-500" />
              <span className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.3em]">Trade Intelligence Feed</span>
            </div>
            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Real-time Global Updates</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            {(() => {
              const { newsStorage } = require("../../berita/newsStorage");
              const { inboxStorage } = require("@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage");
              
              const allNews = newsStorage.getNews();
              const inboxTrade = inboxStorage.getMessages().filter((m: any) => m.category === 'trade');
              
              // Convert inbox messages to compatible format
              const inboxConverted = inboxTrade.map((m: any) => ({
                 id: m.id,
                 title: m.subject.toUpperCase(),
                 content: m.content || "",
                 date: m.time,
                 timestamp: m.timestamp,
                 category: "Penawaran",
                 impactType: "neutral",
                 isInbox: true
              }));

              const combined = [...allNews, ...inboxConverted]
                .filter((n: any) => 
                  n.title.includes("EKSPOR") || n.title.includes("IMPOR") || 
                  n.title.includes("PENAWARAN") || n.title.includes("PERMINTAAN") ||
                  n.category === "Penawaran"
                )
                .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
                
              const finalDisplay = combined.slice(0, 10);

              if (finalDisplay.length === 0) {
                return (
                  <div className="col-span-2 p-10 bg-zinc-900/20 border border-zinc-900/50 rounded-3xl border-dashed flex flex-col items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                       <Landmark size={16} className="text-zinc-700" />
                    </div>
                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">Belum ada tawaran ekspor atau impor</span>
                  </div>
                );
              }

              return finalDisplay.map((n: any) => {
                const isEkspor = n.title.includes("EKSPOR");
                const isImpor = n.title.includes("IMPOR") || n.title.includes("PENAWARAN");
                const themeColor = isEkspor ? "emerald" : (isImpor ? "red" : "blue");
                const borderColor = isEkspor ? "border-emerald-500/40" : (isImpor ? "border-red-500/40" : "border-zinc-800/50");
                const bgColor = isEkspor ? "bg-emerald-600/5" : (isImpor ? "bg-red-600/5" : "bg-zinc-900/40");
                const tagColor = isEkspor ? "bg-emerald-500" : (isImpor ? "bg-red-500" : "bg-blue-500");

                return (
                  <div key={n.id} className={`p-5 rounded-2xl flex flex-col gap-2 group transition-all border ${bgColor} ${borderColor} shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md text-white ${tagColor}`}>
                          {isEkspor ? "TAWARAN EKSPOR" : (isImpor ? "TAWARAN IMPOR" : n.category)}
                        </span>
                        <Zap size={10} className={`${isEkspor ? "text-emerald-400" : "text-red-400"} animate-pulse`} />
                      </div>
                      <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter">{n.date}</span>
                    </div>
                    <h4 className="text-[12px] font-black text-white uppercase leading-tight group-hover:text-zinc-200 transition-colors">{n.title}</h4>
                    <p className="text-[10px] text-zinc-500 font-medium line-clamp-2 leading-relaxed italic">{n.content}</p>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};
