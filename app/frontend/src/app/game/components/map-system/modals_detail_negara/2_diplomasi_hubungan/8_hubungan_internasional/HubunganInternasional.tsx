import React, { useEffect, useState, useMemo } from "react";
import { Globe2, X, Search, ArrowUpDown, Users } from "lucide-react";
import { allRelations } from "@/app/database/data/database_hubungan_antar_negara";
import { countries as centersData, asiaCountries, afrikaCountries, eropaCountries, naCountries, saCountries, oceaniaCountries } from "@/app/database/data/negara/benua/index";
import { relationStorage } from "../1_kedutaan/logic/relationStorage";
import { relationDeltaStorage } from "./logic/relationDeltaStorage";

interface HubunganInternasionalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
}

type SortMode = 'name-asc' | 'name-desc' | 'score-asc' | 'score-desc';

function getContinent(countryNameId: string): string {
  const lower = countryNameId.toLowerCase();
  if (asiaCountries.some((c: any) => c.name_id.toLowerCase() === lower)) return "Asia";
  if (afrikaCountries.some((c: any) => c.name_id.toLowerCase() === lower)) return "Afrika";
  if (eropaCountries.some((c: any) => c.name_id.toLowerCase() === lower)) return "Eropa";
  if (naCountries.some((c: any) => c.name_id.toLowerCase() === lower)) return "Amerika Utara";
  if (saCountries.some((c: any) => c.name_id.toLowerCase() === lower)) return "Amerika Selatan";
  if (oceaniaCountries.some((c: any) => c.name_id.toLowerCase() === lower)) return "Oceania";
  return "Global";
}

const continentColors: Record<string, { bg: string; text: string; border: string }> = {
  "Asia": { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
  "Afrika": { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  "Eropa": { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  "Amerika Utara": { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
  "Amerika Selatan": { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20" },
  "Oceania": { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
  "Global": { bg: "bg-zinc-500/10", text: "text-zinc-400", border: "border-zinc-500/20" },
};

export default function HubunganInternasional({ isOpen, onClose, targetCountry }: HubunganInternasionalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>('score-desc');
  const [continentFilter, setContinentFilter] = useState<string>("Semua");
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const handleUpdate = () => setRefreshKey(prev => prev + 1);
    window.addEventListener('relation_storage_updated', handleUpdate);
    window.addEventListener('relation_deltas_updated', handleUpdate);
    return () => {
      window.removeEventListener('relation_storage_updated', handleUpdate);
      window.removeEventListener('relation_deltas_updated', handleUpdate);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.dispatchEvent(new CustomEvent('hide_strategy_modal'));
    }
    return () => {
      if (isOpen) {
        window.dispatchEvent(new CustomEvent('show_strategy_modal'));
      }
    };
  }, [isOpen]);

  // Find the target country's name_id key in allRelations
  const targetKey = useMemo(() => {
    const entry = centersData.find(
      (c) => c.name_id.toLowerCase() === targetCountry.toLowerCase() || 
             c.name_en.toLowerCase() === targetCountry.toLowerCase()
    );
    return entry ? entry.name_id.toLowerCase() : targetCountry.toLowerCase();
  }, [targetCountry]);

  // Build the full relations list with continent info
  const relationsData = useMemo(() => {
    const rawRelations = (allRelations as any)[targetKey];
    if (!Array.isArray(rawRelations)) return [];

    return rawRelations.map((r: { id: number; name: string; relation: number }) => {
      const countryId = r.name.toLowerCase().trim();
      const countryEntry = centersData.find(c => c.name_id.toLowerCase() === countryId);
      const continent = countryEntry ? getContinent(countryEntry.name_id) : "Global";
      
      // Get dynamic score and delta
      const dynamicScore = relationStorage.getRelationScore(countryId, r.relation, targetKey);
      const delta = relationDeltaStorage.getDelta(countryId);
      const meta = relationStorage.getRelationMetadata(dynamicScore);
      
      return {
        ...r,
        relation: dynamicScore, // Use dynamic score
        delta,
        continent,
        displayName: countryEntry ? countryEntry.name_id : r.name,
        meta,
      };
    });
  }, [targetKey, refreshKey]);

  // Available continents for filter
  const continents = useMemo(() => {
    const set = new Set(relationsData.map((r: any) => r.continent));
    return ["Semua", ...Array.from(set).sort()];
  }, [relationsData]);

  // Apply filters and sorting
  const filteredRelations = useMemo(() => {
    let result = [...relationsData];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((r: any) => r.name.toLowerCase().includes(q) || r.displayName.toLowerCase().includes(q));
    }

    // Continent filter
    if (continentFilter !== "Semua") {
      result = result.filter((r: any) => r.continent === continentFilter);
    }

    // Sort
    result.sort((a: any, b: any) => {
      switch (sortMode) {
        case 'name-asc': return a.displayName.localeCompare(b.displayName);
        case 'name-desc': return b.displayName.localeCompare(a.displayName);
        case 'score-asc': return a.relation - b.relation;
        case 'score-desc': return b.relation - a.relation;
        default: return 0;
      }
    });

    return result;
  }, [relationsData, searchQuery, continentFilter, sortMode]);

  // Stats summary
  const stats = useMemo(() => {
    if (relationsData.length === 0) return { allies: 0, neutral: 0, hostile: 0, avg: 0 };
    const allies = relationsData.filter((r: any) => r.relation >= 70).length;
    const neutral = relationsData.filter((r: any) => r.relation >= 50 && r.relation < 70).length;
    const hostile = relationsData.filter((r: any) => r.relation < 50).length;
    const avg = relationsData.reduce((s: number, r: any) => s + r.relation, 0) / relationsData.length;
    return { allies, neutral, hostile, avg };
  }, [relationsData]);

  const cycleSortMode = () => {
    const modes: SortMode[] = ['score-desc', 'score-asc', 'name-asc', 'name-desc'];
    const idx = modes.indexOf(sortMode);
    setSortMode(modes[(idx + 1) % modes.length]);
  };

  const sortLabels: Record<SortMode, string> = {
    'score-desc': 'Skor ↓',
    'score-asc': 'Skor ↑',
    'name-asc': 'Nama A-Z',
    'name-desc': 'Nama Z-A',
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300 pointer-events-none">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] relative animate-in fade-in slide-in-from-bottom-4 duration-300 transition-all pointer-events-auto">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"></div>
        
        {/* Fixed Header */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Globe2 className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white italic uppercase tracking-tight">Hubungan Internasional</h3>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">{targetCountry} — {relationsData.length} Negara</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-200 transition-colors p-2 hover:bg-zinc-800/60 rounded-xl border border-transparent hover:border-zinc-700/50 cursor-pointer pointer-events-auto"
          >
            <X size={18} />
          </button>
        </div>

        {/* Stats Bar */}
        <div className="px-6 py-3 border-b border-zinc-800/30 bg-zinc-950/40 grid grid-cols-4 gap-3">
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Rata-rata</span>
            <span className="text-lg font-black text-white italic">{stats.avg.toFixed(2)}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Sekutu</span>
            <span className="text-lg font-black text-emerald-400 italic">{stats.allies}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-black text-yellow-600 uppercase tracking-widest">Netral</span>
            <span className="text-lg font-black text-yellow-400 italic">{stats.neutral}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-black text-red-600 uppercase tracking-widest">Hostile</span>
            <span className="text-lg font-black text-red-400 italic">{stats.hostile}</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="px-6 py-3 border-b border-zinc-800/30 bg-zinc-900/50 space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari negara..."
              className="w-full bg-zinc-800/60 border border-zinc-700/30 rounded-xl py-2.5 pl-10 pr-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all"
            />
          </div>
          
          {/* Continent chips + Sort */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {continents.map(c => (
              <button
                key={c}
                onClick={() => setContinentFilter(c as string)}
                className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                  continentFilter === c
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    : 'bg-zinc-800/40 text-zinc-500 border-zinc-700/30 hover:text-zinc-300 hover:border-zinc-600/50'
                }`}
              >
                {c}
              </button>
            ))}
            <div className="flex-1" />
            <button
              onClick={cycleSortMode}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/40 text-zinc-500 border border-zinc-700/30 text-[10px] font-black uppercase tracking-wider hover:text-zinc-300 hover:border-zinc-600/50 transition-all cursor-pointer whitespace-nowrap"
            >
              <ArrowUpDown size={11} />
              {sortLabels[sortMode]}
            </button>
          </div>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1.5 custom-scrollbar">
          {filteredRelations.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
              <div className="w-14 h-14 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                <Users className="h-7 w-7 text-zinc-600" />
              </div>
              <p className="text-sm font-black text-zinc-400 uppercase tracking-widest">Tidak Ditemukan</p>
              <p className="text-xs text-zinc-600">Tidak ada negara yang cocok dengan pencarian.</p>
            </div>
          ) : (
            filteredRelations.map((r: any, idx: number) => {
              const cc = continentColors[r.continent] || continentColors["Global"];
              const scoreBarWidth = Math.max(5, r.relation);
              const scoreColor = r.relation >= 70 ? 'from-emerald-600 to-emerald-500' :
                                 r.relation >= 50 ? 'from-yellow-600 to-yellow-500' :
                                 r.relation >= 25 ? 'from-red-500 to-red-400' : 'from-red-700 to-red-600';

              return (
                <div 
                  key={r.id || idx} 
                  className="bg-zinc-800/30 hover:bg-zinc-800/50 border border-zinc-700/20 hover:border-zinc-700/40 rounded-xl px-4 py-3 flex items-center gap-4 transition-all group"
                >
                  {/* Rank Number */}
                  <div className="text-[10px] font-black text-zinc-600 w-6 text-center shrink-0">
                    {idx + 1}
                  </div>

                  {/* Country Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[13px] font-black text-zinc-200 uppercase tracking-tight truncate group-hover:text-white transition-colors">
                        {r.displayName}
                      </p>
                      <span className={`px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest ${cc.bg} ${cc.text} border ${cc.border} shrink-0`}>
                        {r.continent}
                      </span>
                    </div>
                    {/* Score Bar */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${scoreColor} rounded-full transition-all duration-500`}
                          style={{ width: `${scoreBarWidth}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Score Badge */}
                  <div className="flex flex-col items-end shrink-0 min-w-[70px]">
                    <div className="flex items-center gap-1.5">
                      {r.delta !== 0 && (
                        <span className={`text-[10px] font-black italic flex items-center ${r.delta > 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
                          {r.delta > 0 ? '+' : ''}{(r.delta / 100).toFixed(2)}%
                        </span>
                      )}
                      <span className={`text-sm font-black italic ${r.meta.color}`}>
                        {r.relation.toFixed(2)}
                      </span>
                    </div>
                    <span className={`text-[8px] font-black uppercase tracking-widest ${r.meta.color} opacity-70`}>
                      {r.meta.label}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Fixed Footer */}
        <div className="p-4 pt-3 border-t border-zinc-800/60 bg-zinc-900/80 backdrop-blur-md z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
              Menampilkan {filteredRelations.length} dari {relationsData.length} negara
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-full py-3.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-black rounded-xl transition-all border border-zinc-700/50 active:scale-[0.98] cursor-pointer shadow-lg text-xs uppercase tracking-[0.2em]"
          >
            Kembali ke Diplomasi
          </button>
        </div>
      </div>
    </div>
  );
}
