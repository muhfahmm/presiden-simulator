"use client"

import { useState, useMemo, useEffect } from "react";
import { X, Search, Globe, Target, Shield, Users, ChevronRight, SearchSlash, Landmark, Truck, Anchor, Plane, Handshake, FileText, FlaskConical } from "lucide-react";
import { countries } from "@/app/database/data/negara/benua/index";
import { CountryData } from "@/app/database/data/types/index";
import { calculateTotalMilitaryPower } from "../../../3_armada_militer/kekuatanmiliter";
import { embassyStorage, EmbassyStatus } from "../../../../../../map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage";
import { nonAggressionStorage, NonAggressionStatus } from "../../../../../../map-system/modals_detail_negara/2_diplomasi_hubungan/2_pakta_non_agresi/logic/nonAggressionStorage";
import { aliansiStorage, AliansiStatus } from "../../../../../../map-system/modals_detail_negara/2_diplomasi_hubungan/3_aliansi_pertahanan/logic/aliansiStorage";
import { tradeStorage, TradeStatus } from "../../../../../../map-system/modals_detail_negara/2_diplomasi_hubungan/4_perjanjian_dagang/logic/tradeStorage";

interface PilihTargetMisiProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (countryName: string) => void;
  userCountry: string;
}

export default function PilihTargetMisi({ isOpen, onClose, onSelect, userCountry }: PilihTargetMisiProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTarget, setSelectedTarget] = useState<CountryData | null>(null);
  
  const [embassyStatus, setEmbassyStatus] = useState<EmbassyStatus>('none');
  const [nonAggressionStatus, setNonAggressionStatus] = useState<NonAggressionStatus>('none');
  const [aliansiStatus, setAliansiStatus] = useState<AliansiStatus>('none');
  const [tradeStatus, setTradeStatus] = useState<TradeStatus>('none');

  useEffect(() => {
    if (!selectedTarget) return;

    const updateStatus = () => {
      setEmbassyStatus(embassyStorage.getEmbassyStatus(selectedTarget.name_en));
      setNonAggressionStatus(nonAggressionStorage.getStatus(selectedTarget.name_en));
      setAliansiStatus(aliansiStorage.getStatus(selectedTarget.name_en));
      setTradeStatus(tradeStorage.getTradeStatus(userCountry, selectedTarget.name_en));
    };

    updateStatus();
    
    window.addEventListener("embassy_status_updated", updateStatus);
    window.addEventListener("non_aggression_updated", updateStatus);
    window.addEventListener("aliansi_updated", updateStatus);
    return () => {
      window.removeEventListener("embassy_status_updated", updateStatus);
      window.removeEventListener("non_aggression_updated", updateStatus);
      window.removeEventListener("aliansi_updated", updateStatus);
    };
  }, [selectedTarget, userCountry]);

  const militaryPower = useMemo(() => {
    if (!selectedTarget) return null;
    return calculateTotalMilitaryPower(selectedTarget.armada_militer);
  }, [selectedTarget]);

  const filteredCountries = useMemo(() => {
    return countries
      .filter(c => c.name_id !== userCountry && c.name_en !== userCountry)
      .filter(c => 
        c.name_id.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.name_en.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => a.name_id.localeCompare(b.name_id));
  }, [searchQuery, userCountry]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/95 z-[70] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
      <div className="bg-zinc-950 border border-red-500/20 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.1)] flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Header */}
        <div className="px-10 py-8 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 backdrop-blur-md relative z-10">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-red-600/10 rounded-2xl border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
              <Target className="h-8 w-8 text-red-500 animate-pulse" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter italic uppercase flex items-center gap-3">
                Targeting Hub
                <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full not-italic font-bold tracking-normal align-middle tracking-widest">A-STRIKE</span>
              </h2>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.3em] mt-1">Select theater of operations for offensive deployment</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all active:scale-95 group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden relative z-10">
          {/* Left Sidebar: Country List */}
          <div className="w-[350px] border-r border-zinc-900 bg-zinc-950/50 flex flex-col backdrop-blur-md shrink-0">
            <div className="p-6 border-b border-zinc-900/80 shrink-0 space-y-4">
               <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-focus-within:text-red-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Cari Target Negara..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-3 pl-10 pr-4 text-[12px] font-bold text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500/50 transition-all uppercase tracking-wider"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent p-4 space-y-1.5">
              {filteredCountries.map((country, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTarget(country)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all border group cursor-pointer ${
                    selectedTarget?.name_id === country.name_id 
                      ? 'bg-red-600/10 border-red-500/40 text-white shadow-[0_0_20px_rgba(220,38,38,0.1)]' 
                      : 'text-zinc-500 hover:bg-zinc-900/50 border-transparent hover:text-white'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl text-lg ${selectedTarget?.name_id === country.name_id ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]' : 'bg-zinc-900 text-zinc-600 group-hover:bg-zinc-800 transition-colors'}`}>
                    <Globe className="h-4 w-4" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <span className="text-[14px] font-black uppercase tracking-tight block leading-tight truncate">{country.name_id}</span>
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic">{country.capital}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area: Target Summary */}
          <div className="flex-1 flex flex-col bg-zinc-950 relative overflow-hidden">
             {selectedTarget ? (
               <div className="p-12 space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700 h-full flex flex-col">
                  {/* Target Profile Header */}
                  <div className="flex items-start justify-between">
                     <div className="space-y-4">
                        <div className="flex items-center gap-4">
                           <div className="h-14 w-20 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden shadow-2xl">
                              <Globe className="h-8 w-8 text-zinc-400" />
                           </div>
                           <div>
                              <h3 className="text-5xl font-black text-white italic uppercase tracking-tighter leading-none">{selectedTarget.name_id}</h3>
                              <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.3em] mt-3 flex items-center gap-3">
                                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                                Threat Level: <span className="text-red-500">IDENTIFIED</span>
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="p-6 bg-red-600/5 border border-red-500/10 rounded-3xl backdrop-blur-xl">
                        <div className="flex flex-col items-center gap-1">
                           <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Aggression Risk</span>
                           <span className="text-3xl font-black text-white tabular-nums italic">MODERATE</span>
                        </div>
                     </div>
                  </div>

                  {/* Tactical Strength Analysis */}
                  <div className="grid grid-cols-2 gap-6">
                     <div className="p-8 rounded-[38px] bg-red-600/5 border border-red-500/20 flex flex-col gap-2 relative overflow-hidden group">
                        <Target className="absolute top-4 right-4 h-12 w-12 text-red-500/20 group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Total Strike Power</span>
                        <span className="text-4xl font-black text-white italic tabular-nums">{militaryPower?.total.toLocaleString('id-ID')}</span>
                        <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest mt-2 block italic">Integrated Strategic Defense Index (ISDI)</span>
                     </div>
                     <div className="p-8 rounded-[38px] bg-zinc-900/40 border border-zinc-800/60 flex flex-col justify-between relative overflow-hidden group">
                        <div className="grid grid-cols-3 gap-2">
                           <div className="flex flex-col gap-1">
                              <Truck className="h-4 w-4 text-orange-500 mb-1" />
                              <span className="text-[8px] font-black text-zinc-500 uppercase">Darat</span>
                              <span className="text-sm font-black text-white tabular-nums">{militaryPower?.darat.toLocaleString('id-ID')}</span>
                           </div>
                           <div className="flex flex-col gap-1 border-l border-zinc-800 pl-3">
                              <Anchor className="h-4 w-4 text-blue-500 mb-1" />
                              <span className="text-[8px] font-black text-zinc-500 uppercase">Laut</span>
                              <span className="text-sm font-black text-white tabular-nums">{militaryPower?.laut.toLocaleString('id-ID')}</span>
                           </div>
                           <div className="flex flex-col gap-1 border-l border-zinc-800 pl-3">
                              <Plane className="h-4 w-4 text-violet-500 mb-1" />
                              <span className="text-[8px] font-black text-zinc-500 uppercase">Udara</span>
                              <span className="text-sm font-black text-white tabular-nums">{militaryPower?.udara.toLocaleString('id-ID')}</span>
                           </div>
                        </div>
                        <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest mt-4 block">Fleet deployment readiness verified</span>
                     </div>
                  </div>

                  {/* Diplomatic Status / Treaty Context */}
                  <div className="mt-6 flex flex-col gap-3">
                     <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                        <Handshake className="h-3 w-3 text-zinc-500" /> Diplomatic Posture
                     </span>
                     <div className="grid grid-cols-5 gap-3">
                        {/* Kedutaan */}
                        <div className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center border group transition-all ${
                          embassyStatus === 'completed' ? 'bg-amber-900/10 border-amber-500/20' : 'bg-zinc-900/30 border-zinc-800/50'
                        }`}>
                           <Landmark className={`h-5 w-5 ${embassyStatus === 'completed' ? 'text-amber-500' : 'text-zinc-600'}`} />
                           <span className={`text-[9px] font-black uppercase tracking-widest ${embassyStatus === 'completed' ? 'text-amber-500' : 'text-zinc-500'}`}>
                             {embassyStatus === 'completed' ? 'LIHAT KEDUTAAN' : embassyStatus === 'building' ? 'DALAM PEMBANGUNAN' : 'Kedutaan Besar'}
                           </span>
                        </div>
                        {/* Pakta */}
                        <div className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center border group transition-all ${
                          nonAggressionStatus === 'active' ? 'bg-indigo-900/10 border-indigo-500/20' : 'bg-zinc-900/30 border-zinc-800/50'
                        }`}>
                           <Handshake className={`h-5 w-5 ${nonAggressionStatus === 'active' ? 'text-indigo-400' : 'text-zinc-600'}`} />
                           <span className={`text-[9px] font-black uppercase tracking-widest ${nonAggressionStatus === 'active' ? 'text-indigo-400' : 'text-zinc-500'}`}>
                             {nonAggressionStatus === 'active' ? 'PAKTA AKTIF' : 'Pakta Non-Agresi'}
                           </span>
                        </div>
                        {/* Aliansi */}
                        <div className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center border group transition-all ${
                          aliansiStatus === 'active' ? 'bg-teal-900/10 border-teal-500/20' : 'bg-zinc-900/30 border-zinc-800/50'
                        }`}>
                           <Shield className={`h-5 w-5 ${aliansiStatus === 'active' ? 'text-teal-400' : 'text-zinc-600'}`} />
                           <span className={`text-[9px] font-black uppercase tracking-widest ${aliansiStatus === 'active' ? 'text-teal-400' : 'text-zinc-500'}`}>
                             {aliansiStatus === 'active' ? 'ALIANSI AKTIF' : 'Aliansi Pertahanan'}
                           </span>
                        </div>
                        {/* Perjanjian Dagang */}
                        <div className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center border group transition-all ${
                          tradeStatus === 'active' ? 'bg-amber-700/10 border-amber-500/20' : 'bg-zinc-900/30 border-zinc-800/50'
                        }`}>
                           <FileText className={`h-5 w-5 ${tradeStatus === 'active' ? 'text-amber-400' : 'text-zinc-600'}`} />
                           <span className={`text-[9px] font-black uppercase tracking-widest ${tradeStatus === 'active' ? 'text-amber-400' : 'text-zinc-500'}`}>
                             {tradeStatus === 'active' ? 'DAGANG AKTIF' : 'Perjanjian Dagang'}
                           </span>
                        </div>
                        {/* Kontrak Penelitian */}
                        <div className="p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center border bg-zinc-900/30 border-zinc-800/50 group transition-all">
                           <FlaskConical className="h-5 w-5 text-zinc-600" />
                           <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">
                             Kontrak Penelitian
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className="flex-1" />


                  {/* Action Bar */}
                  <div className="pt-10 border-t border-zinc-900 flex justify-end gap-5">
                     <button 
                       onClick={() => setSelectedTarget(null)}
                       className="px-10 py-5 rounded-3xl border border-zinc-800 text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-zinc-900 transition-all active:scale-95 cursor-pointer"
                     >
                       Reset Target
                     </button>
                     <button 
                       onClick={() => onSelect(selectedTarget.name_id)}
                       className="px-12 py-5 rounded-3xl bg-red-600 hover:bg-red-500 text-white font-black uppercase text-xs tracking-[0.4em] shadow-[0_15px_35px_rgba(220,38,38,0.3)] transition-all active:scale-[0.98] flex items-center gap-4 group cursor-pointer"
                     >
                       CONFIRM ATTACK
                       <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
               </div>
             ) : (
                <div className="flex flex-col items-center justify-center h-full text-center gap-10 animate-in fade-in duration-1000">
                   <div className="relative">
                      <div className="absolute inset-0 bg-red-500/20 blur-[80px] rounded-full animate-pulse"></div>
                      <div className="p-16 bg-zinc-900/50 border border-zinc-800/80 rounded-[60px] text-zinc-800 relative shadow-2xl">
                         <SearchSlash size={120} strokeWidth={1} className="text-zinc-800" />
                      </div>
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-4xl font-black text-zinc-500 uppercase italic tracking-[0.3em]">No Target Locked</h4>
                      <p className="text-xs text-zinc-700 font-bold uppercase tracking-[0.3em] max-w-md mx-auto leading-relaxed italic opacity-60">Consult global satellite imagery and intelligence archives to identify the primary theater of operations.</p>
                   </div>
                </div>
             )}
          </div>
        </div>

        {/* Tactical Footer */}
        <div className="px-10 py-5 bg-zinc-900/40 border-t border-zinc-800/30 flex justify-center sticky bottom-0 backdrop-blur-md z-[100]">
           <p className="text-[9px] text-zinc-700 font-black uppercase tracking-[0.5em] opacity-40 italic">A-STRIKE (ALPHA UNIT) • STRATEGIC COUNTER-TERRORISM & EXPEDITIONARY COMMAND</p>
        </div>
      </div>
    </div>
  );
}
