"use client"

import { useState, useEffect } from "react"
import { X, Bug, Info, Search, TrendingUp, Wallet, Landmark, Globe, Activity, LayoutGrid, List } from "lucide-react"
import { countries } from "@/app/database/data/negara/benua/index"
import { gameStorage } from "@/app/game/gamestorage"
import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function DebugKeuanganAIModal({ isOpen, onClose, activeMenu, setActiveMenu }: ModalProps) {
  const session = gameStorage.getSession();
  const userCountryName = session?.country || "";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [aiData, setAiData] = useState<any[]>([]);

  // Determine current view from activeMenu
  const currentView = activeMenu.includes("DetailDebug") ? "detail" : "ringkasan";

  useEffect(() => {
    const refreshData = () => {
      const allBudgets = aiBudgetStorage.getAll();
      const filteredCountries = countries
        .filter(c => c.name_en !== userCountryName && c.name_id !== userCountryName)
        .map(c => {
          return {
            ...c,
            kasNegara: allBudgets[c.name_en] || 0,
            penghasilanHarian: aiBudgetStorage.calculateDailyIncome(c)
          };
        })
        .sort((a, b) => b.kasNegara - a.kasNegara);
      
      setAiData(filteredCountries);
    };

    if (isOpen) {
      refreshData();
      
      // Listen for budget updates and other relevant events
      window.addEventListener('ai_budget_updated', refreshData);
      window.addEventListener('ai_building_updated', refreshData);
      
      return () => {
        window.removeEventListener('ai_budget_updated', refreshData);
        window.removeEventListener('ai_building_updated', refreshData);
      };
    }
  }, [isOpen, userCountryName]);

  const filteredData = aiData.filter(c => 
    c.name_id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.name_en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/60 z-[1000] flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950/90 border border-zinc-800 rounded-[40px] w-full max-w-5xl h-[85vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500 text-white">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl">
              <Bug className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Debug Keuangan AI</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">AI Global Financial Oversight</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-blue-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Cari negara..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500/50 w-64 transition-all"
              />
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
            >
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2 bg-zinc-900/40 border-b border-zinc-800 flex gap-2 relative z-10">
          <button 
            onClick={() => setActiveMenu("Menu:DebugKeuanganAI")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${currentView === "ringkasan" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <List size={16} /> Ringkasan
          </button>
          <button 
            onClick={() => setActiveMenu("Menu:DebugKeuanganAI:DetailDebug")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${currentView === "detail" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <Activity size={16} /> Detail Debug
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {currentView === "ringkasan" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredData.map((country) => (
                <div key={country.name_en} className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-3xl hover:border-blue-500/30 transition-all group relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/5 blur-3xl rounded-full group-hover:bg-blue-500/10 transition-colors"></div>
                  
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-zinc-600 uppercase tracking-wider">{country.benua}</span>
                      <h3 className="text-sm font-black text-white leading-tight uppercase tracking-tight">{country.name_id}</h3>
                    </div>
                    <div className="p-2 bg-zinc-950/50 rounded-xl border border-zinc-800">
                      <Globe className="h-4 w-4 text-zinc-600 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between bg-zinc-950/50 p-3 rounded-2xl border border-zinc-900">
                      <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4 text-yellow-500" />
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Kas Negara</span>
                      </div>
                      <span className="text-xs font-black text-white">
                        {country.kasNegara.toLocaleString('id-ID')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-zinc-950/50 p-3 rounded-2xl border border-zinc-900">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Penghasilan</span>
                      </div>
                      <span className="text-xs font-black text-green-400">
                        +{country.penghasilanHarian.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="p-6 bg-purple-500/10 rounded-full border border-purple-500/20">
                <Activity className="h-12 w-12 text-purple-500 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Detail Debug Keuangan</h3>
                <p className="text-zinc-500 max-w-md mx-auto mt-2">
                  Halaman ini menyediakan analisis mendalam tentang arus kas AI, termasuk breakdown pajak, pengeluaran infrastruktur, dan subsidi per sektor.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[32px] w-full max-w-2xl">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="text-left">
                       <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Total Global AI Cash</span>
                       <div className="text-2xl font-black text-white mt-1">
                          {aiData.reduce((sum, c) => sum + c.kasNegara, 0).toLocaleString('id-ID')}
                       </div>
                    </div>
                    <div className="text-left">
                       <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Total Global AI Income</span>
                       <div className="text-2xl font-black text-green-400 mt-1">
                          +{aiData.reduce((sum, c) => sum + c.penghasilanHarian, 0).toLocaleString('id-ID')}
                       </div>
                    </div>
                    <div className="text-left">
                       <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Rata-rata Kas</span>
                       <div className="text-2xl font-black text-blue-400 mt-1">
                          {Math.floor(aiData.reduce((sum, c) => sum + c.kasNegara, 0) / (aiData.length || 1)).toLocaleString('id-ID')}
                       </div>
                    </div>
                    <div className="text-left">
                       <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Negara Terkaya</span>
                       <div className="text-2xl font-black text-amber-500 mt-1 truncate">
                          {aiData[0]?.name_id || "-"}
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
