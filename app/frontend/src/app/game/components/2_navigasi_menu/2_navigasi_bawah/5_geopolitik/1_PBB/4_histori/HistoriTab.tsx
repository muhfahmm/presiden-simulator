
"use client"

import { useState, useEffect } from "react";
import { History, Search, Filter, ShieldAlert, Ban, FileText, Calendar, Globe, ThumbsUp, ThumbsDown, Loader2, ChevronDown } from "lucide-react";
import { unVotingStorage, VotingHistoryItem } from "../1_pemungutan_suara/logika_pemungutan_suara/unVotingStorage";
import { countries } from "@/app/pilih_negara/data/negara/benua/index";

export default function HistoriTab() {
  const getCountryCode = (emoji: string) => {
    const chars = [...emoji];
    if (chars.length < 2) return "";
    return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
  };
  const [resolutions, setResolutions] = useState<VotingHistoryItem[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [debugCount, setDebugCount] = useState(0);

  useEffect(() => {
    const load = () => {
      const data = unVotingStorage.getData();
      const history = data.votingHistory || [];
      setDebugCount(history.length);
      setResolutions([...history].reverse());
    };
    
    load();
    window.addEventListener("un_voting_updated", load);
    return () => window.removeEventListener("un_voting_updated", load);
  }, []);

  const filteredResolutions = resolutions.filter(res => {
    const matchesSearch = !search || 
                          res.name.toLowerCase().includes(search.toLowerCase()) || 
                          res.targetCountry?.toLowerCase().includes(search.toLowerCase());
    
    let matchesFilter = filter === "all";
    if (filter === "sanksi") matchesFilter = res.category.toLowerCase().includes("sanksi");
    else if (filter === "embargo") matchesFilter = res.category.toLowerCase().includes("embargo");
    else if (filter === "rancangan") {
      matchesFilter = res.category.toLowerCase().includes("resolusi umum") || 
                      res.category.toLowerCase().includes("rancangan") ||
                      res.category.toLowerCase().includes("larangan");
    }
    
    let matchesStatus = statusFilter === "all";
    if (statusFilter !== "all") matchesStatus = res.status === statusFilter;
    
    return matchesSearch && matchesFilter && matchesStatus;
  });

  return (
    <div className="flex-1 overflow-hidden flex flex-col p-8 gap-8 animate-in fade-in duration-300">
      
      {/* Top Header & Search */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
            <History className="h-6 w-6 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white italic uppercase tracking-tight">Arsip Resolusi PBB</h3>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Catatan Resmi Sidang Majelis Umum</p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input 
              type="text"
              placeholder="Cari Resolusi atau Negara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-3 pl-11 pr-4 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-all"
            />
          </div>

          {/* Custom Modern Dropdown */}
          <div className="relative w-48 shrink-0">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-3 px-5 text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center justify-between transition-all hover:bg-zinc-800/50 hover:border-zinc-700 active:scale-95 ${isDropdownOpen ? "border-indigo-500/50 ring-4 ring-indigo-500/5" : ""}`}
            >
              <span>{filter === "all" ? "Semua Kategori" : filter === "rancangan" ? "Resolusi Umum" : filter.toUpperCase()}</span>
              <ChevronDown className={`h-3 w-3 text-zinc-600 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-indigo-400" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full mt-2 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200">
                <div className="p-1">
                  {[
                    { id: "all", label: "Semua Kategori" },
                    { id: "sanksi", label: "Sanksi" },
                    { id: "embargo", label: "Embargo" },
                    { id: "rancangan", label: "Resolusi Umum" }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setFilter(opt.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                        filter === opt.id 
                        ? "bg-indigo-600 text-white" 
                        : "text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Status Filter Menu */}
      <div className="flex items-center justify-between p-2 bg-zinc-900/30 border border-zinc-800/50 rounded-[24px]">
        <div className="flex items-center gap-2">
           <button 
             onClick={() => setStatusFilter("all")}
             className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
               statusFilter === "all" 
               ? "bg-zinc-800 text-white shadow-lg" 
               : "text-zinc-500 hover:text-zinc-300"
             }`}
           >
             Semua Riwayat
           </button>
           <div className="h-4 w-px bg-zinc-800 mx-1" />
           <button 
             onClick={() => setStatusFilter("DITERIMA")}
             className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
               statusFilter === "DITERIMA" 
               ? "bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/20" 
               : "bg-emerald-500/5 border-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10"
             }`}
           >
             Resolusi Diterima
           </button>
           <button 
             onClick={() => setStatusFilter("DITOLAK")}
             className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
               statusFilter === "DITOLAK" 
               ? "bg-rose-500 border-rose-400 text-white shadow-lg shadow-rose-500/20" 
               : "bg-rose-500/5 border-rose-500/10 text-rose-500 hover:bg-rose-500/10"
             }`}
           >
             Resolusi Ditolak
           </button>
        </div>
        
        <div className="pr-4">
           <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">
             Menampilkan {filteredResolutions.length} dari {resolutions.length} Arsip
           </span>
        </div>
      </div>

      {/* Resolutions List */}
      <div className="flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        {filteredResolutions.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center opacity-40 text-center gap-6 max-w-sm mx-auto">
             <div className="p-6 rounded-full bg-zinc-900 border border-zinc-800 animate-pulse">
               <FileText className="h-12 w-12 text-zinc-500" strokeWidth={1.5} />
             </div>
             <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Arsip Masih Kosong</p>
                <p className="text-[10px] text-zinc-600 font-medium leading-relaxed max-w-[280px] mx-auto">
                  Resolusi baru akan muncul secara otomatis setelah masa sidang **30 hari** berakhir. 
                  (Database: {debugCount} item ditemukan)
                </p>
                <button 
                  onClick={() => {
                    const data = unVotingStorage.getData();
                    setResolutions([...data.votingHistory].reverse());
                    setFilter("all"); // Paksa reset filter
                  }}
                  className="mt-4 px-6 py-2.5 bg-indigo-600 border border-indigo-500 hover:bg-indigo-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
                >
                  Segarkan Data & Reset Filter
                </button>
             </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {filteredResolutions.map((res) => (
              <div 
                key={res.id}
                className="p-6 rounded-[32px] bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700/50 transition-all group flex flex-col gap-4 relative overflow-hidden"
              >
                {/* Decorative Icon Background */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                   {res.category.includes("Sanksi") ? <ShieldAlert className="h-32 w-32" /> : res.category.includes("Embargo") ? <Ban className="h-32 w-32" /> : <FileText className="h-32 w-32" />}
                </div>

                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${res.category.includes("Sanksi") ? "bg-amber-500/10 border-amber-500/20 text-amber-500" : res.category.includes("Embargo") ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-cyan-500/10 border-cyan-500/20 text-cyan-500"}`}>
                       {res.category.includes("Sanksi") ? <ShieldAlert className="h-4 w-4" /> : res.category.includes("Embargo") ? <Ban className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                    </div>
                    <div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500 block mb-1">{res.category}</span>
                      <h4 className="text-sm font-black text-white uppercase tracking-tight italic">{res.name}</h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2 mb-1">
                       {res.status === 'DITERIMA' ? <ThumbsUp className="h-3 w-3 text-emerald-400" /> : <ThumbsDown className="h-3 w-3 text-rose-400" />}
                       <span className={`text-[9px] font-black uppercase tracking-widest ${
                         res.status === 'DITERIMA' ? "text-emerald-400" : "text-rose-400"
                       }`}>
                         Status: {res.status}
                       </span>
                    </div>
                    <div className="flex items-center justify-end gap-1.5 text-zinc-600">
                       <Calendar className="h-3 w-3" />
                       <span className="text-[9px] font-bold uppercase">{res.passedDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-black/20 rounded-2xl p-4 border border-white/5">
                   <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
                      {res.description}
                   </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {(() => {
                    let results = res.results;
                    if (!results) {
                      try {
                        const { simulateUNVote } = require("../1_pemungutan_suara/logika_pemungutan_suara/votingLogic");
                        const userCountry = (typeof window !== 'undefined' ? localStorage.getItem('selectedCountry') : "") || "";
                        results = simulateUNVote(res.targetCountry || "Global", userCountry, res.category);
                      } catch (e) {
                        results = { yes: 0, no: 0, abstain: 0 };
                      }
                    }

                    const safeResults = results || { yes: 0, no: 0, abstain: 0, weightedYes: 0, weightedNo: 0, weightedAbstain: 0 };

                    return (
                      <>
                        <div className="p-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                          <p className="text-[7px] font-black text-emerald-400 uppercase tracking-tighter mb-0.5">Setuju</p>
                          <p className="text-sm font-black text-white">{safeResults.yes} <span className="text-zinc-500">({safeResults.weightedYes || 0})</span></p>
                        </div>
                        <div className="p-2 rounded-xl bg-rose-500/5 border border-rose-500/10 text-center">
                          <p className="text-[7px] font-black text-rose-400 uppercase tracking-tighter mb-0.5">Tolak</p>
                          <p className="text-sm font-black text-white">{safeResults.no} <span className="text-zinc-500">({safeResults.weightedNo || 0})</span></p>
                        </div>
                        <div className="p-2 rounded-xl bg-zinc-500/5 border border-zinc-500/10 text-center">
                          <p className="text-[7px] font-black text-zinc-400 uppercase tracking-tighter mb-0.5">Abstain</p>
                          <p className="text-sm font-black text-white">{safeResults.abstain} <span className="text-zinc-500">({safeResults.weightedAbstain || 0})</span></p>
                        </div>
                      </>
                    );
                  })()}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Negara Target</span>
                    <div className="flex items-center gap-2">
                       {(() => {
                         const targetName = res.targetCountry || "Global";
                         const countryData = countries.find(c => c.name_id === targetName || c.name_en === targetName);
                         const code = countryData ? getCountryCode(countryData.flag) : "";
                         
                         return (
                           <>
                             {code ? (
                               <div className="w-5 h-3.5 rounded-sm overflow-hidden border border-white/10 shadow-sm shrink-0">
                                 <img src={`https://flagcdn.com/w80/${code}.png`} className="w-full h-full object-cover" alt="" />
                               </div>
                             ) : (
                               <Globe className="h-3 w-3 text-zinc-500" />
                             )}
                             <span className="text-[11px] font-black text-zinc-200 uppercase tracking-tight">{targetName}</span>
                           </>
                         );
                       })()}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Durasi Efek</span>
                    <div className="flex items-center gap-2 text-indigo-400">
                       <History className="h-3 w-3" />
                       <span className="text-[10px] font-black uppercase">{res.durationLabel || "PERMANEN"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
