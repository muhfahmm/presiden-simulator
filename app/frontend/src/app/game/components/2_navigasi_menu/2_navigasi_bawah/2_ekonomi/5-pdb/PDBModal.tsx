"use client"

import { useState, useEffect, useMemo } from "react";
import { X, TrendingUp, Search, Globe, Landmark, Coins, Activity, Info, ArrowRightLeft, FileText, BarChart3, Tag } from "lucide-react";
import { countries } from "@/app/database/data/negara/benua/index";
import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu?: string;
  setActiveMenu?: (menu: string) => void;
}

export default function PDBModal({ isOpen, onClose, activeMenu, setActiveMenu }: ModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [aiBudgets, setAiBudgets] = useState<Record<string, number>>({});
  
  // Real-time listener for AI budget updates
  useEffect(() => {
    const updateBudgets = () => {
      if (isOpen) {
        setAiBudgets({ ...aiBudgetStorage.getAll() });
      }
    };

    if (isOpen) {
      updateBudgets();
      window.addEventListener('ai_budget_updated', updateBudgets);
    }
    
    return () => {
      window.removeEventListener('ai_budget_updated', updateBudgets);
    };
  }, [isOpen]);

  const filteredCountries = useMemo(() => {
    return countries.filter(c => 
      c.name_id.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.name_en.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => {
        const budgetA = aiBudgets[a.name_en] || 0;
        const budgetB = aiBudgets[b.name_en] || 0;
        return budgetB - budgetA; // Sort by treasury descending
    });
  }, [searchQuery, aiBudgets]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/60 z-[110] flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950/90 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[85vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-xl">
              <TrendingUp className="h-6 w-6 text-cyan-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">PDB & Ekonomi Dunia</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Global GDP & Real-Time National Income</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-cyan-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Cari Negara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 w-64 transition-all"
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

        {/* Navigation Tabs (Synchronized with other Economy modals) */}
        <div className="px-6 py-2 bg-zinc-900/40 border-b border-zinc-800 flex gap-2 relative z-10 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveMenu?.("Menu:Perdagangan")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all whitespace-nowrap ${activeMenu?.startsWith("Menu:Perdagangan") ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <ArrowRightLeft size={16} /> Perdagangan
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Pajak")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all whitespace-nowrap ${activeMenu === "Menu:Pajak" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <FileText size={16} /> Pajak
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Hutang")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all whitespace-nowrap ${activeMenu === "Menu:Hutang" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <Landmark size={16} /> Hutang
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Budget")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all whitespace-nowrap ${activeMenu === "Menu:Budget" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <BarChart3 size={16} /> Budget
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:PDB")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all whitespace-nowrap ${activeMenu === "Menu:PDB" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <Globe size={16} /> PDB
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Harga")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all whitespace-nowrap ${activeMenu === "Menu:Harga" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <Tag size={16} /> Harga
          </button>
        </div>

        {/* Content Table */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.03),transparent_40%)]">
          <div className="grid grid-cols-1 gap-4">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl mb-2">
              <div className="col-span-1 text-[10px] font-black text-zinc-500 uppercase tracking-widest">Bendera</div>
              <div className="col-span-4 text-[10px] font-black text-zinc-500 uppercase tracking-widest">Negara</div>
              <div className="col-span-3 text-[10px] font-black text-zinc-500 uppercase tracking-widest text-right">Estimasi PDB (EM)</div>
              <div className="col-span-4 text-[10px] font-black text-zinc-500 uppercase tracking-widest text-right">Kas Negara (Real-Time)</div>
            </div>

            {/* List */}
            {filteredCountries.map((country, idx) => {
              const currentBudget = aiBudgets[country.name_en] || 0;
              const basePDB = parseInt(country.pendapatan_nasional || "0");

              return (
                <div 
                  key={country.name_en} 
                  className="grid grid-cols-12 gap-4 px-6 py-5 bg-zinc-900/20 border border-zinc-800/50 rounded-2xl items-center hover:bg-zinc-900/40 hover:border-cyan-500/30 transition-all group animate-in slide-in-from-bottom-2 duration-300"
                  style={{ animationDelay: `${Math.min(idx * 20, 400)}ms` }}
                >
                  <div className="col-span-1 text-2xl filter drop-shadow-md group-hover:scale-110 transition-transform">{country.flag}</div>
                  <div className="col-span-4">
                    <span className="text-sm font-black text-zinc-100 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{country.name_id}</span>
                    <span className="text-[10px] block text-zinc-500 font-bold uppercase tracking-widest">{country.capital}</span>
                  </div>
                  <div className="col-span-3 text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-black text-white">{basePDB.toLocaleString('id-ID')}</span>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase">Billion EM</span>
                    </div>
                  </div>
                  <div className="col-span-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-black text-emerald-400 tabular-nums">
                          {Math.round(currentBudget).toLocaleString('id-ID')}
                        </span>
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                          <span className="text-[10px] text-zinc-500 font-black uppercase tracking-tighter">Live Updates</span>
                        </div>
                      </div>
                      <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-all">
                        <Coins size={14} className="text-emerald-500" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredCountries.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 bg-zinc-900/20 border border-dashed border-zinc-800 rounded-3xl">
                <Globe className="h-12 w-12 text-zinc-700 mb-4 animate-pulse" />
                <p className="text-zinc-500 font-black uppercase tracking-widest text-sm">Negara tidak ditemukan</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="px-10 py-6 bg-zinc-900/30 border-t border-zinc-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Info size={14} className="text-zinc-500" />
            <p className="text-xs text-zinc-500 font-medium italic">Data Kas Negara (Real-Time) disinkronkan secara otomatis melalui simulasi ekonomi global setiap hari.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"></div>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Global Sync Active</span>
             </div>
             <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest italic">{filteredCountries.length} Countries Tracked</span>
          </div>
        </div>
      </div>
    </div>
  );
}
