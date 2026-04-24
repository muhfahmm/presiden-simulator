"use client"

import { useState, useEffect, useMemo } from "react";
import { X, HeartHandshake, Search, MapPin, Globe2, SearchSlash, Info, TrendingUp, TrendingDown, Activity, Users, ShieldCheck, Zap, ChevronRight, Map as LucideMap, XCircle, Command, ArrowUpDown, ArrowUp, ArrowDown, Sparkles } from "lucide-react"
import { gameStorage } from "@/app/game/gamestorage";
import ModalsTingkatkanHubunganGlobal from "./ModalsTingkatkanHubunganGlobal";
import { allRelations } from "@/app/database/data/database_hubungan_antar_negara/index";

import { unSecurityCouncilStorage } from "../1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { countries as centersData } from "@/app/database/data/negara/benua/index";
import { relationStorage } from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { timeStorage } from "../../2_ekonomi/1-perdagangan/timeStorage";

type Continent = "Asia" | "Afrika" | "Eropa" | "Amerika Utara" | "Amerika Selatan" | "Oseania";

const CONTINENT_MAP: Record<string, Continent> = {
  // ASIA
  "afganistan": "Asia", "arab saudi": "Asia", "armenia": "Asia", "azerbaijan": "Asia", "bahrain": "Asia",
  "bangladesh": "Asia", "bhutan": "Asia", "brunei": "Asia", "china": "Asia", "filipina": "Asia",
  "georgia": "Asia", "india": "Asia", "indonesia": "Asia", "irak": "Asia", "iran": "Asia",
  "israel": "Asia", "jepang": "Asia", "yordania": "Asia", "kamboja": "Asia", "kazakhstan": "Asia",
  "kirgizstan": "Asia", "korea selatan": "Asia", "korea utara": "Asia", "kuwait": "Asia", "laos": "Asia",
  "lebanon": "Asia", "malaysia": "Asia", "maldives": "Asia", "mongolia": "Asia", "myanmar": "Asia",
  "nepal": "Asia", "oman": "Asia", "pakistan": "Asia", "palestina": "Asia", "qatar": "Asia",
  "republik timor leste": "Asia", "singapura": "Asia", "sri lanka": "Asia", "suriah": "Asia",
  "taiwan": "Asia", "tajikistan": "Asia", "thailand": "Asia", "turkmenistan": "Asia",
  "uni emirat arab": "Asia", "uzbekistan": "Asia", "vietnam": "Asia", "yaman": "Asia",
  "hong kong": "Asia", "makau": "Asia", "timor-leste": "Asia", "republik timor-leste": "Asia",

  // AFRIKA
  "afrika selatan": "Afrika", "aljazair": "Afrika", "angola": "Afrika", "benin": "Afrika",
  "botswana": "Afrika", "burkina faso": "Afrika", "burundi": "Afrika", "chad": "Afrika",
  "eritrea": "Afrika", "ethiopia": "Afrika", "gabon": "Afrika", "gambia": "Afrika",
  "ghana": "Afrika", "guinea": "Afrika", "guinea bissau": "Afrika", "guinea-bissau": "Afrika",
  "kamerun": "Afrika", "kenya": "Afrika", "komoro": "Afrika", "kongo": "Afrika",
  "lesotho": "Afrika", "liberia": "Afrika", "libya": "Afrika", "madagaskar": "Afrika",
  "malawi": "Afrika", "mali": "Afrika", "maroko": "Afrika", "mauritania": "Afrika",
  "mauritius": "Afrika", "mozambik": "Afrika", "namibia": "Afrika", "niger": "Afrika",
  "nigeria": "Afrika", "republik afrika tengah": "Afrika", "republik demokratik kongo": "Afrika",
  "republik sudan": "Afrika", "republik tanzania": "Afrika", "republik uganda": "Afrika",
  "republik zambia": "Afrika", "republik zimbabwe": "Afrika", "rwanda": "Afrika",
  "sao tome dan principe": "Afrika", "senegal": "Afrika", "seychelles": "Afrika",
  "sierra leone": "Afrika", "somalia": "Afrika", "sudan selatan": "Afrika", "togo": "Afrika",
  "tunisia": "Afrika", "tanjung verde": "Afrika", "djibouti": "Afrika", "mesir": "Afrika",
  "eswatini": "Afrika", "pantai gading": "Afrika", "zambia": "Afrika", "zimbabwe": "Afrika",
  "republik madagaskar": "Afrika", "republik mozambik": "Afrika", "tanzania": "Afrika",

  // EROPA
  "albania": "Eropa", "andorra": "Eropa", "austria": "Eropa", "belanda": "Eropa",
  "belarus": "Eropa", "belgia": "Eropa", "bosnia dan hercegovina": "Eropa", "bulgaria": "Eropa",
  "ceko": "Eropa", "denmark": "Eropa", "estonia": "Eropa", "finlandia": "Eropa",
  "hungaria": "Eropa", "islandia": "Eropa", "irlandia": "Eropa", "italia": "Eropa",
  "jerman": "Eropa", "kroasia": "Eropa", "latvia": "Eropa", "liechtenstein": "Eropa",
  "lithuania": "Eropa", "luksemburg": "Eropa", "malta": "Eropa", "moldova": "Eropa",
  "monako": "Eropa", "montenegro": "Eropa", "norwegia": "Eropa", "polandia": "Eropa",
  "portugal": "Eropa", "republik rumania": "Eropa", "republik serbia": "Eropa",
  "rusia": "Eropa", "san marino": "Eropa", "slowakia": "Eropa", "slovenia": "Eropa",
  "spanyol": "Eropa", "swedia": "Eropa", "swiss": "Eropa", "turki": "Eropa",
  "ukraina": "Eropa", "vatikan": "Eropa", "siprus": "Eropa", "prancis": "Eropa",
  "yunani": "Eropa", "makedonia utara": "Eropa", "inggris": "Eropa",
  "kepulauan faroe": "Eropa", "gibraltar": "Eropa", "kosovo": "Eropa", "republik moldova": "Eropa",

  // AMERIKA UTARA
  "amerika serikat": "Amerika Utara", "antigua dan barbuda": "Amerika Utara", "bahama": "Amerika Utara",
  "barbados": "Amerika Utara", "belize": "Amerika Utara", "costa rica": "Amerika Utara", "kosta rika": "Amerika Utara",
  "dominika": "Amerika Utara", "el salvador": "Amerika Utara", "grenada": "Amerika Utara",
  "guatemala": "Amerika Utara", "haiti": "Amerika Utara", "honduras": "Amerika Utara",
  "jamaika": "Amerika Utara", "kanada": "Amerika Utara", "kuba": "Amerika Utara",
  "meksiko": "Amerika Utara", "nikaragua": "Amerika Utara", "panama": "Amerika Utara",
  "republik dominika": "Amerika Utara", "saint kitts dan nevis": "Amerika Utara",
  "saint lucia": "Amerika Utara", "saint vincent dan grenadine": "Amerika Utara",
  "trinidad dan tobago": "Amerika Utara", "bermuda": "Amerika Utara", "curacao": "Amerika Utara",
  "greenland": "Amerika Utara", "puerto rico": "Amerika Utara",

  // AMERIKA SELATAN
  "argentina": "Amerika Selatan", "bolivia": "Amerika Selatan", "brazil": "Amerika Selatan",
  "chile": "Amerika Selatan", "ekuador": "Amerika Selatan", "guyana": "Amerika Selatan",
  "kolombia": "Amerika Selatan", "paraguay": "Amerika Selatan", "peru": "Amerika Selatan",
  "suriname": "Amerika Selatan", "uruguay": "Amerika Selatan", "venezuela": "Amerika Selatan",
  "guiana prancis": "Amerika Selatan",

  // OSEANIA
  "australia": "Oseania", "fiji": "Oseania", "kiribati": "Oseania", "marshall": "Oseania",
  "mikronesia": "Oseania", "nauru": "Oseania", "palau": "Oseania", "papua nugini": "Oseania",
  "samoa": "Oseania", "tahiti": "Oseania", "tonga": "Oseania", "tuvalu": "Oseania",
  "vanuatu": "Oseania", "selandia baru": "Oseania", "samoa amerika": "Oseania", "guam": "Oseania"
};

export default function TingkatHubunganModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentCountry, setCurrentCountry] = useState<string>("");
  const [activeContinent, setActiveContinent] = useState<Continent | "Semua">("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [isUNSCMember, setIsUNSCMember] = useState(false);
  const [tick, setTick] = useState(0); // Force re-render on time/relation updates
  const [sortOrder, setSortOrder] = useState<'none' | 'desc' | 'asc'>('none');
  const [isGlobalImproveOpen, setIsGlobalImproveOpen] = useState(false);

  useEffect(() => {
    const data = unSecurityCouncilStorage.getData();
    setIsUNSCMember(data.members.some(m => m.name.toLowerCase() === (localStorage.getItem("selectedCountry") || "").toLowerCase()));
  }, []);

  useEffect(() => {
    const session = gameStorage.getSession();
    if (session) {
      const countryName = session.country || localStorage.getItem("selectedCountry") || "";
      setCurrentCountry(countryName);
    }
  }, [isOpen]);

  // Subscribe to time ticks and relation updates for real-time score refresh
  useEffect(() => {
    const forceUpdate = () => setTick(t => t + 1);
    const unsubscribeTime = timeStorage.subscribe(() => forceUpdate());
    window.addEventListener('relation_storage_updated', forceUpdate);
    window.addEventListener('relation_status_updated', forceUpdate);
    return () => {
      unsubscribeTime();
      window.removeEventListener('relation_storage_updated', forceUpdate);
      window.removeEventListener('relation_status_updated', forceUpdate);
    };
  }, []);

  const userRelations = useMemo(() => {
    const key = currentCountry.toLowerCase();
    const accessibleKey = key.replace(/_/g, ' ');
    return allRelations[accessibleKey] || allRelations[key] || [];
  }, [currentCountry]);

  // Handle keyboard shortcut (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('country-search-input')?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getRelationStatus = (score: number) => {
    const finalScore = relationStorage.calculateFinalScore(score, isUNSCMember);
    const metadata = relationStorage.getRelationMetadata(finalScore);
    const icon = finalScore >= 70 ? ShieldCheck : (finalScore >= 50 ? Globe2 : Zap);
    
    return { 
      label: metadata.labelFull, 
      color: metadata.color, 
      bg: metadata.bg, 
      border: metadata.border, 
      icon, 
      finalScore 
    };
  };

  // Optimized pre-calculation of country data lookup map
  const centersMap = useMemo(() => {
    const map = new Map<string, any>();
    centersData.forEach(c => {
      if (c.name_id) map.set(c.name_id.toLowerCase().trim(), c);
      if (c.name_en) map.set(c.name_en.toLowerCase().trim(), c);
    });
    return map;
  }, []);

  const augmentedRelationItems = useMemo(() => {
    const relationData = relationStorage.getRelationData();
    
    // First, filter and augment the data
    const augmented = userRelations
      .filter(rel => {
        const normalizedName = rel.name.toLowerCase().replace(/_/g, ' ');
        const matchesSearch = normalizedName.includes(searchQuery.toLowerCase());
        const continent = CONTINENT_MAP[normalizedName] || "Lainnya";
        return matchesSearch && (activeContinent === "Semua" || continent === activeContinent);
      })
      .map((rel, idx) => {
        // Fast lookup using map instead of .find()
        const targetCountryObj = centersMap.get(rel.name.toLowerCase().trim());
        const targetK = targetCountryObj?.name_id.toLowerCase().trim() || rel.name.toLowerCase().trim();
        
        // Pass pre-fetched relationData to avoid repeated localStorage parsing
        const liveScore = relationStorage.getRelationScore(targetK, rel.relation, currentCountry);
        const status = getRelationStatus(liveScore);
        
        return {
          ...rel,
          targetK,
          liveScore,
          status,
          targetCountryObj,
          displayId: rel.id || idx + 1
        };
      });

    // Sort the already augmented data
    if (sortOrder !== 'none') {
      augmented.sort((a, b) => {
        return sortOrder === 'desc' ? b.liveScore - a.liveScore : a.liveScore - b.liveScore;
      });
    }

    return augmented;
  }, [userRelations, activeContinent, searchQuery, sortOrder, currentCountry, isUNSCMember, centersMap, tick]);
  
  const userCountryObj = useMemo(() => {
    return centersMap.get(currentCountry.toLowerCase().trim());
  }, [currentCountry, centersMap]);

  if (!isOpen) return null;

  const continents: (Continent | "Semua")[] = ["Semua", "Asia", "Afrika", "Eropa", "Amerika Utara", "Amerika Selatan", "Oseania"];

  return (
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950/90 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative text-zinc-100 animate-in zoom-in-95 duration-500">

        {/* Header Section */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/15 rounded-2xl border border-emerald-500/20 group hover:scale-105 transition-transform duration-500">
              <Globe2 className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight italic uppercase leading-none">Direktori Bilateral</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1.5 opacity-60">Registry: {currentCountry} • Global Status Monitoring</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Filters and Navigation */}
        <div className="px-8 py-5 border-b border-zinc-800/30 bg-zinc-950/40 backdrop-blur-3xl flex flex-col gap-6 lg:flex-row items-center justify-between sticky top-[81px] z-10 shadow-xl">
          <div className="flex items-center gap-2 bg-black/40 p-2 rounded-[24px] border border-zinc-800/40 overflow-x-auto no-scrollbar w-full lg:w-max shadow-inner">
            {continents.map((cont) => (
              <button
                key={cont}
                onClick={() => setActiveContinent(cont)}
                className={`px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer flex items-center gap-3 ${activeContinent === cont
                    ? 'bg-emerald-600 text-white shadow-[0_0_25px_rgba(16,185,129,0.3)] scale-105 z-10'
                    : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
              >
                <LucideMap size={14} className={activeContinent === cont ? 'text-white' : 'text-zinc-600'} />
                {cont}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 w-full lg:w-[520px]">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none z-10">
                <div className="p-2.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 group-focus-within:bg-emerald-500/20 group-focus-within:border-emerald-500/40 transition-all duration-500">
                  <Search className="h-5 w-5 text-emerald-400 group-focus-within:text-emerald-300 transition-all duration-500" />
                </div>
              </div>
              <input
                type="text"
                id="country-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari identitas kedaulatan..."
                style={{ paddingLeft: '100px' }}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full h-16 pr-28 text-sm font-semibold text-white placeholder:text-zinc-500 outline-none focus:border-emerald-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(16,185,129,0.08)] transition-all duration-300 tracking-wide hover:border-white/15 hover:bg-white/[0.04]"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="p-1.5 hover:bg-zinc-800 rounded-full text-zinc-600 hover:text-rose-500 transition-colors cursor-pointer"
                  >
                    <XCircle size={18} />
                  </button>
                )}
                <div className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 bg-zinc-900/80 border border-zinc-800 rounded-xl text-[9px] font-black text-zinc-600 uppercase tracking-tighter shadow-inner">
                  <Command size={10} />
                  <span>K</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-4">
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                {augmentedRelationItems.length > 0 ? (
                  <>Menampilkan <span className="text-emerald-500">{augmentedRelationItems.length}</span> dari <span className="text-zinc-400">{userRelations.length}</span> entitas</>
                ) : (
                  <span className="text-rose-500/60">Tidak ada hasil ditemukan</span>
                )}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSortOrder(prev => prev === 'desc' ? 'none' : 'desc')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer border ${
                    sortOrder === 'desc'
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                      : 'bg-zinc-800/60 text-zinc-300 border-zinc-700/60 hover:text-white hover:border-zinc-600 hover:bg-zinc-800'
                  }`}
                >
                  <ArrowDown size={14} />
                  Tertinggi
                </button>
                <button
                  onClick={() => setSortOrder(prev => prev === 'asc' ? 'none' : 'asc')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer border ${
                    sortOrder === 'asc'
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                      : 'bg-zinc-800/60 text-zinc-300 border-zinc-700/60 hover:text-white hover:border-zinc-600 hover:bg-zinc-800'
                  }`}
                >
                  <ArrowUp size={14} />
                  Terendah
                </button>
                <button
                  onClick={() => setIsGlobalImproveOpen(true)}
                  className="flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-[0.1em] transition-all cursor-pointer bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:from-emerald-500 hover:to-emerald-600 hover:scale-105 active:scale-95 border border-white/10 ml-2 group"
                >
                  <Sparkles size={14} className="animate-pulse group-hover:rotate-12 transition-transform" />
                  <span>Global Improve</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Relationship Status Legend */}
        <div className="px-8 py-3 bg-zinc-900/20 border-b border-zinc-800/30 flex items-center justify-center gap-3 overflow-x-auto no-scrollbar whitespace-nowrap">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/20">
            <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.5)]"></div>
            <span className="text-[9px] font-black uppercase tracking-widest text-red-500">0-25: Sangat Buruk</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-400/10 border border-rose-400/20">
            <div className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.5)]"></div>
            <span className="text-[9px] font-black uppercase tracking-widest text-rose-400">26-49: Buruk</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
            <span className="text-[9px] font-black uppercase tracking-widest text-yellow-500">50-69: Netral</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-400/10 border border-green-400/20">
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
            <span className="text-[9px] font-black uppercase tracking-widest text-green-400">70-79: Baik</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">80-100: Aliansi</span>
          </div>
          {isUNSCMember && (
            <div className="ml-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 animate-pulse">
              <Zap size={10} className="text-blue-400" />
              <span className="text-[9px] font-black uppercase tracking-widest text-blue-300">UNSC Bonus Active (+20%)</span>
            </div>
          )}
        </div>

        {/* Content Section - SIMPLE VERTICAL LIST */}
        <div className="flex-1 overflow-y-auto px-8 py-10 no-scrollbar bg-[radial-gradient(circle_at_center,_#0a0a0f_0%,_#050508_100%)]">
          {augmentedRelationItems.length > 0 ? (
            <div className="flex flex-col gap-3.5 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
              {augmentedRelationItems.map((rel, idx) => {
                const { liveScore, status, targetCountryObj, displayId } = rel;
                
                return (
                  <div
                    key={`${rel.name}-${rel.id}-${idx}`}
                    className="group bg-zinc-900/10 border border-zinc-800/40 hover:border-emerald-500/30 hover:bg-zinc-900/30 p-4 pl-6 rounded-2xl transition-all duration-300 flex items-center justify-between relative backdrop-blur-sm shadow-sm hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                  >
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-0 group-hover:h-8 bg-emerald-500 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100" />
                    
                    <div className="flex items-center gap-6">
                      <div className="text-[10px] font-black text-zinc-800 group-hover:text-emerald-500/40 transition-colors w-6 tabular-nums">
                        {String(displayId).padStart(3, '0')}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {/* Flag Structure - Single Target Flag */}
                        <div className="w-12 h-12 bg-zinc-800 rounded-full border-2 border-zinc-900 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform mr-2">
                          {targetCountryObj?.flag || "🏳️"}
                        </div>

                        {/* Descriptive Text: [PLAYER] dengan [TARGET] */}
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-black text-emerald-500/80 uppercase tracking-widest leading-none">
                              {currentCountry}
                            </span>
                            <span className="text-[10px] font-black text-zinc-600 uppercase italic">dengan</span>
                          </div>
                          <h4 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                            {rel.name}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* SCORE: ALWAYS VISIBLE AND PROMINENT */}
                    <div className="flex items-center gap-8">
                       <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-1.5 min-w-[70px] justify-end">
                            {isUNSCMember && (
                              <span className="text-[7px] font-black bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-1 rounded-sm uppercase tracking-tighter shadow-sm animate-pulse-slow">
                                +20% DK PBB
                              </span>
                            )}
                            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Sentimen Bilateral</span>
                          </div>
                          <span className={`text-2xl font-black font-mono tracking-tighter ${status.color}`}>
                             {status.finalScore}
                          </span>
                       </div>
                       
                       <div className={`px-4 py-2 rounded-xl border ${status.bg} ${status.border} ${status.color} text-[9px] font-black uppercase tracking-widest hidden sm:flex items-center gap-2 min-w-[140px] justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                          {status.label}
                       </div>

                       <div className="p-3 bg-zinc-950/50 border border-zinc-800/50 rounded-xl text-zinc-700 group-hover:text-emerald-500 group-hover:border-emerald-500/30 transition-all">
                          <TrendingUp size={18} />
                       </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-8 text-center animate-in fade-in duration-1000">
              <div className="relative scale-110">
                <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full"></div>
                <div className="p-10 bg-zinc-900/40 rounded-full border border-zinc-800/40 text-zinc-800 relative z-10 shadow-2xl">
                  <SearchSlash size={100} strokeWidth={1} />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-black text-zinc-500 uppercase tracking-[0.1em] italic leading-none">Record Tidak Ditemukan</h3>
                <p className="text-sm text-zinc-700 font-bold max-w-md mx-auto italic leading-relaxed uppercase tracking-widest opacity-60">Tidak ada jalur diplomatik aktif yang terdaftar untuk benua {activeContinent} berdasarkan parameter pencarian.</p>
              </div>
              <button onClick={() => { setSearchQuery(""); setActiveContinent("Asia"); }} className="mt-6 px-12 py-4.5 bg-zinc-900 border border-zinc-800 rounded-3xl text-[12px] font-black text-emerald-500 uppercase tracking-[0.2em] hover:bg-emerald-600 hover:text-white transition-all cursor-pointer shadow-2xl active:scale-95">
                Universal Reset Registry
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation Summary */}
        <div className="px-10 py-6 border-t border-zinc-800/30 bg-black/60 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 sticky bottom-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 group">
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse"></div>
              <span className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.3em] group-hover:text-emerald-400 transition-colors">Global Synergy Node 4.8.2</span>
            </div>
            <div className="h-6 w-px bg-zinc-800 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900 rounded-lg"><Users size={16} className="text-zinc-500" /></div>
              <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest uppercase"> {augmentedRelationItems.length} dari {userRelations.length} Entitas Diplomatik Terintegrasi</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
              <Info size={14} className="text-emerald-500" />
              <span className="text-[10px] font-black text-emerald-500/80 uppercase tracking-widest">Strategic Asset Mapping Active</span>
            </div>
          </div>
        </div>

        {/* Global Improvement Modal */}
        <ModalsTingkatkanHubunganGlobal 
          isOpen={isGlobalImproveOpen}
          onClose={() => setIsGlobalImproveOpen(false)}
          playerCountry={currentCountry}
        />
      </div>
    </div>
  );
}

