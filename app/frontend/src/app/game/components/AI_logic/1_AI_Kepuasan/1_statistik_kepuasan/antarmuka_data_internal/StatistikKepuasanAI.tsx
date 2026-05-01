"use client"

import { useState, useEffect, useMemo } from "react";
import { 
  Globe, TrendingUp, TrendingDown, Activity, Shield, 
  Coins, ShoppingCart, Home, AlertTriangle, Zap,
  Search, Filter
} from "lucide-react";
import { aiHappinessStorage } from "@/app/game/components/modals/1_info_strategis/6_Kepuasan/AIHappinessStorage";
import { aiRootCauseStorage } from "@/app/game/components/modals/1_info_strategis/6_Kepuasan/socialDiagnosisStorage";
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";

export default function StatistikKepuasanAI() {
  const [happinessData, setHappinessData] = useState(() => aiHappinessStorage.getAll());
  const [diagnostics, setDiagnostics] = useState<Record<string, any>>({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleUpdate = () => {
      setHappinessData(aiHappinessStorage.getAll());
      // Refresh diagnostics when happiness is updated
      const diag: Record<string, any> = {};
      countries.forEach(c => {
        diag[c.name_en] = aiRootCauseStorage.getLatest(c.name_en);
      });
      setDiagnostics(diag);
    };
    
    handleUpdate(); // Initial load
    window.addEventListener("ai_happiness_updated", handleUpdate);
    window.addEventListener("ai_root_cause_updated", handleUpdate);
    return () => {
      window.removeEventListener("ai_happiness_updated", handleUpdate);
      window.removeEventListener("ai_root_cause_updated", handleUpdate);
    };
  }, []);

  const sortedCountries = useMemo(() => {
    return countries
      .filter(c => c.name_en.toLowerCase().includes(searchQuery.toLowerCase()) || 
                   c.name_id.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(c => ({
        ...c,
        satisfaction: happinessData[c.name_en] || 55.0
      }))
      .sort((a, b) => a.satisfaction - b.satisfaction);
  }, [happinessData, searchQuery]);

  const getStatusColor = (val: number) => {
    if (val >= 60) return "text-emerald-400";
    if (val >= 40) return "text-amber-400";
    return "text-rose-400";
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      {/* Search Header */}
      <div className="flex items-center justify-between gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Cari negara AI..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:border-indigo-500/50 transition-all"
          />
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs font-bold text-indigo-400 uppercase tracking-widest">
          <Activity size={14} />
          Total: {sortedCountries.length} Negara
        </div>
      </div>

      {/* Main List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedCountries.map((country) => (
          <div 
            key={country.name_en}
            className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-3xl hover:bg-zinc-900/60 transition-all group relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className={`absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity`}>
               <Globe size={100} />
            </div>

            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{country.flag}</span>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight leading-none">{country.name_id}</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">{country.name_en}</p>
                </div>
              </div>
              <div className={`text-xl font-black tabular-nums ${getStatusColor(country.satisfaction)}`}>
                {country.satisfaction.toFixed(1)}%
              </div>
            </div>

            {/* Simple Progress Bar */}
            <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50 mb-4">
               <div 
                className={`h-full transition-all duration-1000 ${country.satisfaction >= 60 ? 'bg-emerald-500' : country.satisfaction >= 40 ? 'bg-amber-500' : 'bg-rose-500'}`}
                style={{ width: `${country.satisfaction}%` }}
               />
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-3 gap-2 relative z-10">
               <div className={`flex flex-col items-center p-2 rounded-xl border transition-colors ${diagnostics[country.name_en]?.breakdown?.fiscal < 0 ? 'bg-rose-500/5 border-rose-500/20' : 'bg-zinc-950/50 border-zinc-800/50'}`}>
                  <Coins size={12} className={diagnostics[country.name_en]?.breakdown?.fiscal < 0 ? 'text-rose-400' : 'text-zinc-600'} />
                  <span className="text-[9px] font-bold text-zinc-400">Fiscal</span>
                  {diagnostics[country.name_en]?.breakdown?.fiscal !== undefined && (
                    <span className={`text-[8px] font-black ${diagnostics[country.name_en].breakdown.fiscal >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {diagnostics[country.name_en].breakdown.fiscal > 0 ? '+' : ''}{diagnostics[country.name_en].breakdown.fiscal.toFixed(2)}
                    </span>
                  )}
               </div>
               <div className={`flex flex-col items-center p-2 rounded-xl border transition-colors ${diagnostics[country.name_en]?.breakdown?.market < 0 ? 'bg-rose-500/5 border-rose-500/20' : 'bg-zinc-950/50 border-zinc-800/50'}`}>
                  <ShoppingCart size={12} className={diagnostics[country.name_en]?.breakdown?.market < 0 ? 'text-rose-400' : 'text-zinc-600'} />
                  <span className="text-[9px] font-bold text-zinc-400">Market</span>
                  {diagnostics[country.name_en]?.breakdown?.market !== undefined && (
                    <span className={`text-[8px] font-black ${diagnostics[country.name_en].breakdown.market >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {diagnostics[country.name_en].breakdown.market > 0 ? '+' : ''}{diagnostics[country.name_en].breakdown.market.toFixed(2)}
                    </span>
                  )}
               </div>
               <div className={`flex flex-col items-center p-2 rounded-xl border transition-colors ${diagnostics[country.name_en]?.breakdown?.security < 0 ? 'bg-rose-500/5 border-rose-500/20' : 'bg-zinc-950/50 border-zinc-800/50'}`}>
                  <Shield size={12} className={diagnostics[country.name_en]?.breakdown?.security < 0 ? 'text-rose-400' : 'text-zinc-600'} />
                  <span className="text-[9px] font-bold text-zinc-400">Security</span>
                  {diagnostics[country.name_en]?.breakdown?.security !== undefined && (
                    <span className={`text-[8px] font-black ${diagnostics[country.name_en].breakdown.security >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {diagnostics[country.name_en].breakdown.security > 0 ? '+' : ''}{diagnostics[country.name_en].breakdown.security.toFixed(2)}
                    </span>
                  )}
               </div>
            </div>

            {country.satisfaction < 25 && (
              <div className="mt-4 p-2 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-2 animate-pulse">
                <AlertTriangle size={12} className="text-rose-500" />
                <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest">Krisis Terdeteksi</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

