"use client"

import { useState, useEffect, useMemo } from "react";
import { 
  X, Handshake, Globe, Shield, Landmark, Search, BarChart3, TrendingUp, Users, Zap, Briefcase, 
  HeartHandshake, ArrowRightLeft, Landmark as AllianceIcon, ShieldCheck, Activity, SearchSlash,
  ChevronRight, Info, AlertCircle
} from "lucide-react";
import { gameStorage } from "@/app/game/gamestorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { countries } from "@/app/database/data/negara/benua/index";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { allRelations } from "@/app/database/data/database_hubungan_antar_negara/index"; // Added relations import


// Import modular action components
import Kedutaan from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/1_Kedutaan";
import PaktaNonAgresi from "@/app/game/components/modals/2_diplomasi_hubungan/2_pakta_non_agresi/2_PaktaNonAgresi";
import AliansiPertahanan from "@/app/game/components/modals/2_diplomasi_hubungan/3_aliansi_pertahanan/3_AliansiPertahanan";
import PerjanjianDagang from "@/app/game/components/modals/2_diplomasi_hubungan/4_perjanjian_dagang/4_PerjanjianDagang";
import KontrakPenelitian from "@/app/game/components/modals/2_diplomasi_hubungan/5_kontrak_penelitian/5_KontrakPenelitian";
import KirimPasukan from "@/app/game/components/modals/2_diplomasi_hubungan/6_kirim_pasukan/6_KirimPasukan";

interface DiplomasiModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function DiplomasiModal({ isOpen, onClose, activeMenu, setActiveMenu }: DiplomasiModalProps) {
  const session = gameStorage.getSession();
  const initialCountry = countries.find((c: CountryData) => c.name_id === session?.country || c.name_en === session?.country) || countries[0];
  
  const [currentCountry, setCurrentCountry] = useState<CountryData>(initialCountry);
  const [userBudget, setUserBudget] = useState(budgetStorage.getBudget());
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAction, setActiveAction] = useState<string>("1_kedutaan");

  // Sync selectedTarget with activeMenu (URL) - REPLACING _ WITH SPACES
  const selectedTarget = useMemo(() => {
    if (!activeMenu.startsWith("Menu:Diplomasi:")) return null;
    const rawCountryName = activeMenu.split(":")[2];
    const countryName = rawCountryName.replace(/_/g, " "); // Replace underscores with spaces
    return countries.find(c => c.name_id === countryName || c.name_en === countryName) || null;
  }, [activeMenu]);

  // DERIVE RELATIONSHIP DATA
  const relationData = useMemo(() => {
    if (!selectedTarget || !currentCountry) return null;
    
    const userId = currentCountry.name_id.toLowerCase().trim();
    const targetId = selectedTarget.name_id.toLowerCase().trim();
    
    const userRelations = allRelations[userId];
    const relationItem = userRelations?.find((item: any) => item.name.toLowerCase().trim() === targetId);
    const score = relationItem ? relationItem.relation : 50;

    let label = "Netral";
    let color = "text-yellow-400";

    if (score <= 25) { label = "Sangat Buruk"; color = "text-red-500"; }
    else if (score <= 49) { label = "Buruk"; color = "text-red-400"; }
    else if (score <= 69) { label = "Netral"; color = "text-yellow-400"; }
    else if (score <= 79) { label = "Baik"; color = "text-green-400"; }
    else { label = "Cukup Baik"; color = "text-emerald-500"; }

    return { score, label, color };
  }, [selectedTarget, currentCountry]);

  useEffect(() => {
    if (isOpen) {
      setUserBudget(budgetStorage.getBudget());
      const session = gameStorage.getSession();
      const country = countries.find((c: CountryData) => c.name_id === session?.country || c.name_en === session?.country) || countries[0];
      setCurrentCountry(country);
    }
  }, [isOpen]);

  // Default redirect if no country in URL
  useEffect(() => {
    if (isOpen && activeMenu === "Menu:Diplomasi") {
      setActiveMenu("Menu:Diplomasi:Afganistan");
    }
  }, [isOpen, activeMenu, setActiveMenu]);

  useEffect(() => {
    const handleUpdate = () => setUserBudget(budgetStorage.getBudget());
    window.addEventListener('budget_storage_updated', handleUpdate);
    return () => window.removeEventListener('budget_storage_updated', handleUpdate);
  }, []);

  const filteredCountries = useMemo(() => {
    return countries
      .filter(c => c.name_id !== currentCountry.name_id)
      .filter(c => 
        c.name_id.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.name_en.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => a.name_id.localeCompare(b.name_id));
  }, [searchQuery, currentCountry]);

  // HANDLE SELECTION - REPLACING SPACES WITH _
  const handleSelectCountry = (country: CountryData) => {
    const urlName = country.name_id.replace(/\s+/g, "_"); // Replace spaces with underscores
    if (selectedTarget?.name_id === country.name_id) {
      setActiveMenu("Menu:Diplomasi");
    } else {
      setActiveMenu(`Menu:Diplomasi:${urlName}`);
    }
  };

  const renderActionComponent = () => {
    if (!selectedTarget) return null;
    const targetId = selectedTarget.name_id;

    switch (activeAction) {
      case "1_kedutaan": return <Kedutaan />;
      case "2_pakta_non_agresi": return <PaktaNonAgresi />;
      case "3_aliansi_pertahanan": return <AliansiPertahanan targetCountry={targetId} />;
      case "4_perjanjian_dagang": return <PerjanjianDagang />;
      case "5_kontrak_penelitian": return <KontrakPenelitian />;
      case "6_kirim_pasukan": return <KirimPasukan />;
      default: return <Kedutaan />;
    }
  };

  const actionTabs = [
    { id: "1_kedutaan", label: "Kedutaan", icon: Landmark, color: "text-blue-400" },
    { id: "2_pakta_non_agresi", label: "Pakta Non-Agresi", icon: HeartHandshake, color: "text-indigo-400" },
    { id: "3_aliansi_pertahanan", label: "Aliansi Pertahanan", icon: ShieldCheck, color: "text-teal-400" },
    { id: "4_perjanjian_dagang", label: "Perjanjian Dagang", icon: ArrowRightLeft, color: "text-amber-400" },
    { id: "5_kontrak_penelitian", label: "Kontrak Penelitian", icon: BarChart3, color: "text-cyan-400" },
    { id: "6_kirim_pasukan", label: "Kirim Pasukan", icon: Users, color: "text-sky-400" }
  ];

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8 pointer-events-none">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500 font-sans pointer-events-auto">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* HEADER SECTION */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 sticky top-0 z-[100] backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cyan-500/15 rounded-2xl border border-cyan-500/20 group hover:scale-105 transition-transform duration-500">
               <Handshake className="h-6 w-6 text-cyan-500" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight italic uppercase leading-none">Pusat Diplomasi Global</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1.5 opacity-60">Strategic International Relations â€¢ Registry: {currentCountry.name_id}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-inner group/budget overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/budget:opacity-100 transition-opacity duration-500"></div>
              <div className="p-1.5 bg-emerald-500/10 rounded-lg group-hover/budget:bg-emerald-500 group-hover/budget:text-white transition-all duration-500">
                <AllianceIcon className="h-4 w-4 text-emerald-500 group-hover/budget:text-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-0.5 opacity-60 group-hover/budget:opacity-100 transition-opacity">Kas Negara</span>
                <span className="text-sm font-black text-white tracking-tight italic tabular-nums leading-none">
                  ${userBudget.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden relative z-10">
          
          {/* LEFT SIDEBAR */}
          <div className="w-[320px] border-r border-zinc-900 bg-zinc-950/50 flex flex-col backdrop-blur-md shrink-0">
            <div className="p-6 border-b border-zinc-900/80 shrink-0 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-[14px] font-black text-white uppercase tracking-[0.2em] leading-none italic">Daftar Negara</h3>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-[9px] font-black text-zinc-500 uppercase tracking-widest">{filteredCountries.length} Terdaftar</span>
              </div>
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Cari Negara..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-2 pl-9 pr-4 text-[11px] font-bold text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-all"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent p-4 space-y-1.5">
              {filteredCountries.map((country, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectCountry(country)}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-2xl transition-all border group cursor-pointer ${
                    selectedTarget?.name_id === country.name_id ? 'bg-cyan-600/10 border-cyan-500/40 text-white shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent hover:text-zinc-300'
                  }`}
                >
                  <div className={`p-2 rounded-xl text-lg ${selectedTarget?.name_id === country.name_id ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-zinc-900 text-zinc-600 group-hover:bg-zinc-800 transition-colors'}`}>
                    <Globe className="h-4 w-4" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <span className="text-[13px] font-black uppercase tracking-tight block leading-tight truncate">{country.name_id}</span>
                    <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter italic">{country.capital}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1 flex flex-col bg-zinc-950 relative overflow-hidden">
            
            {/* SUMMARY BAR */}
            <div className="px-10 py-6 bg-zinc-900/10 border-b border-zinc-900 flex items-center justify-between backdrop-blur-sm relative z-20">
               <div className="flex items-center gap-12">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Reputasi Diplomatik</span>
                    <span className="text-3xl font-black text-cyan-400 italic">{currentCountry.geopolitik.reputasi_diplomatik.toUpperCase()}</span>
                  </div>
                  <div className="flex flex-col border-l border-zinc-800 pl-8 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Aliansi Aktif</span>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-black text-white italic">{currentCountry.geopolitik.aliansi_aktif.length.toString().padStart(2, '0')}</span>
                      <span className="pb-1 text-zinc-600 font-bold text-[10px] uppercase tracking-tighter">Perjanjian</span>
                    </div>
                  </div>
                  <div className="flex flex-col border-l border-zinc-800 pl-8 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Pengaruh Global</span>
                    <div className="flex items-end gap-2">
                       <TrendingUp className="h-4 w-4 mb-1 text-purple-400" />
                       <span className="text-3xl font-black text-purple-400 italic">{currentCountry.geopolitik.pengaruh_global.toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="flex flex-col border-l border-zinc-800 pl-8 relative">
                     <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                     <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Peringkat Diplomasi</span>
                     <div className="flex items-end gap-2 text-amber-500">
                        <span className="pb-1 font-black text-xl italic tracking-tighter">KE-</span>
                        <span className="text-3xl font-black italic">{currentCountry.geopolitik.peringkat_diplomasi}</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* DASHBOARD CONTENT */}
            <div className="flex-1 overflow-y-auto p-10 space-y-10 pb-24 scrollbar-thin scrollbar-thumb-zinc-800">
              
              {selectedTarget ? (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                   
                   {/* Relationship Monitor */}
                   <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/80 rounded-[48px] p-8 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/5 blur-[80px] rounded-full group-hover:bg-cyan-600/10 transition-colors"></div>
                      
                      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="flex items-center gap-8">
                           <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-[32px] shadow-2xl relative">
                              <Globe className="h-12 w-12 text-cyan-500 animate-pulse" />
                              <div className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-cyan-600 text-white text-[9px] font-black rounded-lg">HUBUNGAN</div>
                           </div>
                           <div className="space-y-2">
                              <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none shrink-0">{selectedTarget.name_id}</h3>
                              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                                Hubungan Stabil â€¢ Berbagi Ideologi: {selectedTarget.ideology || "Netral"}
                              </p>
                           </div>
                        </div>

                        <div className="flex gap-4">
                           <div className="px-8 py-4 bg-zinc-950/50 border border-zinc-800 rounded-3xl flex flex-col items-center">
                              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Status Kepercayaan</span>
                              <span className={`text-2xl font-black italic uppercase ${relationData?.color || 'text-zinc-500'}`}>
                                {relationData?.label || "Netral"}
                              </span>
                           </div>
                           <div className="px-8 py-4 bg-zinc-950/50 border border-zinc-800 rounded-3xl flex flex-col items-center">
                              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Skor Hubungan</span>
                              <span className={`text-2xl font-black italic ${relationData?.color || 'text-zinc-500'}`}>
                                {relationData?.score || 50}
                              </span>
                           </div>
                        </div>
                      </div>
                   </div>

                   {/* ACTION TABS */}
                   <div className="space-y-6">
                      <div className="flex items-center justify-between bg-zinc-900/40 p-1.5 rounded-[28px] border border-zinc-800/50 backdrop-blur-xl shrink-0 overflow-x-auto no-scrollbar">
                         <div className="flex items-center gap-1.5 min-w-max">
                            {actionTabs.map((tab) => (
                               <button
                                 key={tab.id}
                                 onClick={() => setActiveAction(tab.id)}
                                 className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative group active:scale-95 cursor-pointer ${
                                   activeAction === tab.id 
                                   ? "bg-cyan-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]" 
                                   : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
                                 }`}
                               >
                                 <tab.icon className={`h-4 w-4 ${activeAction === tab.id ? 'text-white' : tab.color} group-hover:scale-110 transition-transform`} />
                                 <span>{tab.label}</span>
                                 {activeAction === tab.id && (
                                   <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                                 )}
                               </button>
                            ))}
                         </div>
                      </div>

                      <div className="bg-zinc-900/20 border border-zinc-800/30 rounded-[40px] p-2 min-h-[400px] animate-in fade-in duration-500">
                         {renderActionComponent()}
                      </div>
                   </div>

                </div>
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[50vh] text-center gap-8 animate-in fade-in duration-1000">
                   <div className="relative">
                      <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full animate-pulse"></div>
                      <div className="p-12 bg-zinc-900/50 border border-zinc-800/80 rounded-[60px] text-zinc-800 relative shadow-2xl">
                         <SearchSlash size={100} strokeWidth={1} />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-3xl font-black text-zinc-500 uppercase italic tracking-[0.2em]">Pilih Target Negara</h4>
                      <p className="text-sm text-zinc-700 font-bold uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed italic opacity-60">Silakan pilih negara dari daftar di samping kiri untuk memulai negosiasi diplomatik atau mengelola hubungan yang ada.</p>
                   </div>
                   <button 
                    onClick={() => handleSelectCountry(filteredCountries[0])}
                    className="px-10 py-4 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-500 hover:text-cyan-400 border border-zinc-800 hover:border-cyan-500/30 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all active:scale-95 cursor-pointer"
                   >
                     Pilih Negara Pertama
                   </button>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-10 py-5 bg-zinc-900/40 border-t border-zinc-800/30 flex justify-center sticky bottom-0 backdrop-blur-md z-[100]">
           <p className="text-[9px] text-zinc-700 font-black uppercase tracking-[0.5em] opacity-40 italic">Global Diplomatic Intelligence Network â€¢ EM4 Geopolitical Sovereignty System</p>
        </div>
      </div>
    </div>
  );
}

