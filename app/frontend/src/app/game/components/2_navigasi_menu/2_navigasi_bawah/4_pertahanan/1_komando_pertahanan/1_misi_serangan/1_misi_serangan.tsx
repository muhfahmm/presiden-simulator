"use client"

import { useState, useMemo, useEffect } from "react";
import { X, Swords, Target, Shield, Zap, Clock, AlertTriangle, Globe, Info } from "lucide-react";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { countries } from "@/app/database/data/negara/benua/index";
import { ModalPilihNegara } from "./modals_pilih_negara/ModalPilihNegara";
import { luncurkanInvasi, landlockedCountries } from "./modals_pilih_negara/logic/InvasiLogic";
import { calculateTotalMilitaryPower } from "../../3_armada_militer/kekuatanmiliter";
import { ModalPerang } from "./halaman_perang/ModalPerang";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData; // Player country data
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function MisiSeranganModal({ isOpen, onClose, data, activeMenu, setActiveMenu }: Props) {
  const [isSelecting, setIsSelecting] = useState(false);
  const [activeTab, setActiveTab] = useState<'darat' | 'udara' | 'laut'>('darat');
  const [deployments, setDeployments] = useState<Record<string, number>>({});
  const [activeWarReport, setActiveWarReport] = useState<any>(null);

  const targetName = activeMenu.startsWith("Komando Pertahanan:Misi Serangan:") 
    ? activeMenu.split(":")[2] 
    : null;

  // Listener untuk membuka laporan perang dari peta
  useEffect(() => {
    const handleOpenWarReport = (e: any) => {
      setActiveWarReport(e.detail);
    };
    window.addEventListener('OPEN_WAR_REPORT', handleOpenWarReport);
    return () => window.removeEventListener('OPEN_WAR_REPORT', handleOpenWarReport);
  }, []);

  const targetCountry = useMemo(() => {
    if (!targetName) return null;
    return countries.find(c => 
      c.name_id.toLowerCase() === targetName.toLowerCase() || 
      c.name_en.toLowerCase() === targetName.toLowerCase()
    );
  }, [targetName]);

  const playerPower = calculateTotalMilitaryPower(data?.armada_militer, {}, data?.religion, data?.ideology);
  const targetPower = targetCountry 
    ? calculateTotalMilitaryPower(targetCountry.armada_militer, {}, targetCountry.religion, targetCountry.ideology) 
    : { darat: 0, laut: 0, udara: 0, total: 0 };

  const playerDarat = playerPower.darat;
  const playerUdara = playerPower.udara;
  const playerLaut = playerPower.laut;
  const playerTotal = playerPower.total;

  const targetDarat = targetPower.darat;
  const targetUdara = targetPower.udara;
  const targetLaut = targetPower.laut;
  const targetTotal = targetPower.total;

  const tabGroups = {
    darat: [
      { key: 'infanteri', label: 'Infanteri' },
      { key: 'tank_tempur_utama', label: 'Main Battle Tank' },
      { key: 'apc_ifv', label: 'APC / IFV' },
      { key: 'artileri_berat', label: 'Artileri Berat' },
      { key: 'sistem_peluncur_roket', label: 'MLRS Rocket' },
      { key: 'pertahanan_udara_mobile', label: 'Mobile SAM' },
      { key: 'kendaraan_taktis', label: 'Kendaraan Taktis' }
    ],
    udara: [
      { key: 'jet_tempur_siluman', label: 'Jet Stealth' },
      { key: 'jet_tempur_interceptor', label: 'Jet Interceptor' },
      { key: 'pesawat_pengebom', label: 'Pesawat Pengebom' },
      { key: 'helikopter_serang', label: 'Heli Serang' },
      { key: 'pesawat_pengintai', label: 'Pesawat Intai' },
      { key: 'drone_intai_uav', label: 'Drone UAV' },
      { key: 'drone_kamikaze', label: 'Drone Kamikaze' },
      { key: 'pesawat_angkut', label: 'Pesawat Angkut' }
    ],
    laut: [
      { key: 'kapal_induk', label: 'Kapal Induk' },
      { key: 'kapal_induk_nuklir', label: 'Kapal Induk Nuklir' },
      { key: 'kapal_destroyer', label: 'Kapal Destroyer' },
      { key: 'kapal_korvet', label: 'Kapal Korvet' },
      { key: 'kapal_selam_nuklir', label: 'Selam Nuklir' },
      { key: 'kapal_selam_regular', label: 'Selam Reguler' },
      { key: 'kapal_ranjau', label: 'Kapal Ranjau' },
      { key: 'kapal_logistik', label: 'Kapal Logistik' }
    ]
  };

  // Initialize deployments to 0
  useEffect(() => {
    if (!data || Object.keys(deployments).length > 0) return;
    const initial: Record<string, number> = {};
    
    // Set all available units to 0 initially
    initial['infanteri'] = 0;
    
    if (data.armada_militer.darat) {
      Object.keys(data.armada_militer.darat).forEach((k) => { initial[k] = 0; });
    }
    if (data.armada_militer.laut) {
      Object.keys(data.armada_militer.laut).forEach((k) => { initial[k] = 0; });
    }
    if (data.armada_militer.udara) {
      Object.keys(data.armada_militer.udara).forEach((k) => { initial[k] = 0; });
    }
    
    setDeployments(initial);
  }, [data]);

  const handleSliderChange = (key: string, val: number) => {
    setDeployments(prev => ({ ...prev, [key]: val }));
  };

  if (!isOpen && !activeWarReport) return null;

  const getCountryCode = (emoji: string) => {
    const chars = [...emoji];
    if (chars.length < 2) return "";
    return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
  };

  return (
    <>
    {isOpen && (
      <div className="absolute inset-0 bg-black/60 z-[80] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
        <div className="bg-zinc-950/90 border border-red-500/20 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.1)] flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-xl">
              <Swords className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Misi Serangan</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Offensive Operational Command</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-amber-500 transition-all cursor-help active:scale-95 flex items-center gap-2">
                <Info className="h-6 w-6" />
              </button>
              
              {/* Tooltip-like Information */}
              <div className="absolute right-0 top-full mt-4 w-72 p-4 bg-zinc-900 border border-amber-500/30 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-amber-500" />
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Informasi Strategis</span>
                </div>
                <p className="text-[9px] font-bold text-zinc-400 leading-relaxed uppercase tracking-wider">
                  Invasi tanpa resolusi resmi PBB dapat memicu sanksi ekonomi berat atau embargo militer internasional terhadap negara Anda.
                </p>
              </div>
            </div>

            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden p-8 relative z-10 flex flex-col text-left">
          {targetCountry ? (
            <div className="w-full h-full grid grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
               {/* KOLOM KIRI (Pengaturan) */}
               <div className="col-span-2 space-y-6 flex flex-col h-full">
                  <div className="flex items-center gap-6">
                     <div className="relative">
                       <div className="w-24 h-16 rounded-2xl overflow-hidden border-4 border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.2)]">
                          <img 
                             src={`https://flagcdn.com/w160/${getCountryCode(targetCountry.flag)}.png`} 
                             alt={targetCountry.name_id}
                             className="w-full h-full object-cover"
                          />
                       </div>
                       <div className="absolute -bottom-3 -right-3 p-2 bg-zinc-950 border border-red-500/40 rounded-xl shadow-xl">
                          <Target className="h-5 w-5 text-red-500 animate-pulse" />
                       </div>
                     </div>
                     <div>
                       <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">{targetCountry.name_id}</h3>
                       <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.4em] mt-1">Target Teridentifikasi</p>
                     </div>
                     
                     <div className="ml-auto text-right bg-zinc-900/50 border border-zinc-800/50 p-3 rounded-2xl">
                       <p className="text-zinc-500 font-black text-[9px] uppercase tracking-widest mb-1.5 flex items-center justify-end gap-1.5">
                         <Swords className="h-3 w-3 text-red-500" />
                         Total Kekuatan Militer
                       </p>
                       <div className="flex items-end justify-end gap-4">
                         <div className="text-right">
                           <span className="text-[9px] font-bold text-emerald-500 block uppercase tracking-wider mb-0.5">Anda</span>
                           <span className="text-lg font-black text-white leading-none">{playerTotal.toLocaleString()}</span>
                         </div>
                         <span className="text-zinc-600 font-black text-xs pb-0.5">VS</span>
                         <div className="text-left">
                           <span className="text-[9px] font-bold text-rose-500 block uppercase tracking-wider mb-0.5">Target</span>
                           <span className="text-lg font-black text-white leading-none">{targetTotal.toLocaleString()}</span>
                         </div>
                       </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                     {[
                       { label: 'Kekuatan Darat', player: playerDarat, target: targetDarat, icon: Swords, color: 'text-amber-500' },
                       { label: 'Kekuatan Laut', player: playerLaut, target: targetLaut, icon: Shield, color: 'text-blue-400' },
                       { label: 'Kekuatan Udara', player: playerUdara, target: targetUdara, icon: Zap, color: 'text-sky-400' }
                     ].map((stat, i) => (
                       <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-2xl flex flex-col justify-center gap-1.5 relative overflow-hidden group">
                          <div className="flex items-center gap-2 mb-1 z-10 relative">
                            <stat.icon className={`h-3 w-3 ${stat.color}`} />
                            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{stat.label}</span>
                          </div>
                          
                          <div className="flex justify-between items-center z-10 relative">
                            <div className="flex flex-col">
                              <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-wider">Anda</span>
                              <span className="text-xs font-black text-emerald-400">{stat.player.toLocaleString()}</span>
                            </div>
                            <div className="text-zinc-600 text-[10px] font-bold px-2">VS</div>
                            <div className="flex flex-col items-end">
                              <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-wider">Target</span>
                              <span className="text-xs font-black text-rose-500">{stat.target.toLocaleString()}</span>
                            </div>
                          </div>
                          
                          {/* Background comparison bar indicator */}
                          <div className="absolute bottom-0 left-0 w-full h-1 flex">
                            <div 
                               className="h-full bg-emerald-500/80 transition-all" 
                               style={{ width: `${stat.player + stat.target === 0 ? 50 : (stat.player / (stat.player + stat.target)) * 100}%` }}
                            />
                            <div 
                               className="h-full bg-rose-500/80 transition-all" 
                               style={{ width: `${stat.player + stat.target === 0 ? 50 : (stat.target / (stat.player + stat.target)) * 100}%` }}
                            />
                          </div>
                       </div>
                     ))}
                  </div>

                  {/* TABS */}
                  <div className="flex bg-zinc-900/50 p-1 rounded-2xl w-full border border-zinc-800/50">
                    {['darat', 'laut', 'udara'].map((tab) => {
                      const isLandlocked = targetCountry 
                        ? landlockedCountries.some(c => c.toLowerCase() === targetCountry.name_id.toLowerCase())
                        : false;
                      const isDisabled = tab === 'laut' && isLandlocked;
                      
                      return (
                      <button 
                        key={tab}
                        disabled={isDisabled}
                        onClick={() => setActiveTab(tab as any)}
                        className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                          activeTab === tab 
                            ? 'bg-red-600 text-white shadow-lg shadow-red-500/20' 
                            : isDisabled
                            ? 'text-zinc-700 cursor-not-allowed bg-zinc-950/50 border border-zinc-800/30'
                            : 'text-zinc-500 hover:text-white hover:bg-zinc-800/50'
                        }`}
                        title={isDisabled ? "Negara target tidak memiliki akses laut (Landlocked)" : ""}
                      >
                        Armada {tab}
                        {isDisabled && <AlertTriangle className="inline-block ml-2 h-3 w-3 text-red-900/50" />}
                      </button>
                    )})}
                  </div>

                  {/* UNIT SLIDERS */}
                  <div className="grid grid-cols-3 gap-3 h-[240px] content-start w-full text-left">
                    {(() => {
                      const isLandlocked = targetCountry 
                        ? landlockedCountries.some(c => c.toLowerCase() === targetCountry.name_id.toLowerCase())
                        : false;
                        
                      if (activeTab === 'laut' && isLandlocked) {
                        return (
                          <div className="col-span-3 text-center py-10 border border-dashed border-rose-900/30 rounded-2xl bg-zinc-950/30 h-[76px] flex flex-col items-center justify-center">
                             <span className="text-xs font-black text-rose-500/50 uppercase tracking-widest italic">Akses Laut Tertutup</span>
                             <span className="text-[9px] font-bold text-zinc-600 mt-1">Negara target berstatus Landlocked</span>
                          </div>
                        );
                      }
                      
                      return (
                        <>
                          {tabGroups[activeTab].map((unit) => {
                            const maxAvailable = unit.key === 'infanteri'
                              ? (data.armada_militer.barak || 0) * 10000
                              : (data.armada_militer as any)[activeTab]?.[unit.key] || 0;
                              
                            if (maxAvailable <= 0) return null;
                            
                            const currentVal = deployments[unit.key] || 0;
                            
                            return (
                              <div key={unit.key} className="bg-zinc-950/50 border border-zinc-800/50 p-3 rounded-xl flex flex-col justify-between gap-2 group hover:border-red-500/30 transition-all h-[76px]">
                                 <div className="flex justify-between items-start">
                                    <span className="text-[11px] font-black text-zinc-300 group-hover:text-white uppercase tracking-wider transition-colors line-clamp-1">{unit.label}</span>
                                    <span className="text-[10px] font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-md tabular-nums shrink-0 ml-2">
                                      {currentVal.toLocaleString()} / {maxAvailable.toLocaleString()}
                                    </span>
                                 </div>
                                 <input 
                                    type="range" 
                                    min="0" 
                                    max={maxAvailable} 
                                    value={currentVal} 
                                    onChange={(e) => handleSliderChange(unit.key, parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500 hover:accent-red-400 transition-all"
                                 />
                              </div>
                            );
                          })}
                          
                          {tabGroups[activeTab].every(unit => {
                              const m = unit.key === 'infanteri' ? (data.armada_militer.barak || 0) * 10000 : (data.armada_militer as any)[activeTab]?.[unit.key] || 0;
                              return m <= 0;
                          }) && (
                             <div className="col-span-3 text-center py-10 border border-dashed border-zinc-800 rounded-2xl bg-zinc-950/30 h-[76px] flex items-center justify-center">
                                 <span className="text-xs font-black text-zinc-600 uppercase tracking-widest italic">Tidak Ada Unit Tersedia</span>
                             </div>
                          )}
                        </>
                      );
                    })()}
                  </div>
               </div>

               {/* KOLOM KANAN (Data Pengerahan) */}
               <div className="col-span-1 bg-zinc-900/30 border border-zinc-800 rounded-[32px] p-6 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
                  <h4 className="text-sm font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                     <Swords className="h-4 w-4 text-red-500" />
                     Data Pengerahan
                  </h4>
                  
                  <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent space-y-3 mb-6 pr-2">
                     {Object.entries(deployments).map(([key, count]) => {
                         if (count <= 0) return null;
                         const label = Object.values(tabGroups).flat().find(u => u.key === key)?.label || key;
                         return (
                            <div key={key} className="flex justify-between items-center bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60">
                               <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{label}</span>
                               <span className="text-sm font-black text-emerald-400">{count.toLocaleString()}</span>
                            </div>
                         );
                     })}
                     {Object.values(deployments).every(v => v === 0) && (
                         <div className="text-center py-10 opacity-50">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest italic">Belum Ada Pasukan<br/>Yang Dikerahkan</span>
                         </div>
                     )}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-zinc-800/50 mt-auto">
                     <button 
                       onClick={() => {
                           if (targetCountry && data) {
                               const units = luncurkanInvasi(data, targetCountry, deployments);
                               console.log("Invasion units spawned:", units);
                               onClose();
                           }
                       }}
                       className="w-full py-4 rounded-[20px] bg-red-600 text-white font-black uppercase tracking-[0.15em] shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:bg-red-500 transition-all active:scale-95 cursor-pointer text-xs"
                     >
                       Luncurkan Invasi
                     </button>
                     <button 
                       onClick={() => setIsSelecting(true)}
                       className="w-full py-2 text-zinc-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors cursor-pointer text-center"
                     >
                       Ganti Target
                     </button>
                  </div>
               </div>
            </div>
          ) : (
            <div className="max-w-md space-y-6 mx-auto my-auto text-center">
              <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                <AlertTriangle className="h-10 w-10 text-red-500 animate-pulse" />
              </div>
              <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Pusat Komando Serangan</h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                Modul operasi serangan strategis sedang dalam fase sinkronisasi dengan armada militer pusat. Silakan tentukan target serangan Anda.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                 <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-3xl">
                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-1">Status Kesiapan</span>
                    <span className="text-xl font-black text-emerald-500">SIAGA SATU</span>
                 </div>
                 <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-3xl">
                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-1">Target Terkunci</span>
                    <span className="text-xl font-black text-white">0 LOKASI</span>
                 </div>
              </div>

              <button 
                onClick={() => setIsSelecting(true)}
                className="w-full py-5 rounded-[24px] bg-red-600 text-white font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:bg-red-500 transition-all active:scale-95 mt-4"
              >
                Pilih Target
              </button>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-8 py-4 bg-red-500/5 border-t border-red-500/10 flex justify-center italic relative z-10">
          <span className="text-[9px] font-black text-red-500 uppercase tracking-[0.3em]">Otoritas Tertinggi Diperlukan Untuk Eksekusi</span>
        </div>
      </div>

      <ModalPilihNegara 
        isOpen={isSelecting} 
        onClose={() => setIsSelecting(false)} 
        onSelect={(c) => {
          setActiveMenu(`Komando Pertahanan:Misi Serangan:${c.name_id}`);
          setIsSelecting(false);
        }}
        playerCountryId={data.name_id}
      />
    </div>
    )}
      {activeWarReport && (
        <ModalPerang 
          invasion={activeWarReport} 
          onClose={() => setActiveWarReport(null)} 
        />
      )}
    </>
  );
}
