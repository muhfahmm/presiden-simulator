"use client"

import { useState, useMemo } from "react";
import { X, Swords, Target, Shield, Zap, Clock, AlertTriangle, Globe, Info } from "lucide-react";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { countries } from "@/app/database/data/negara/benua/index";
import { ModalPilihNegara } from "./modals_pilih_negara/ModalPilihNegara";
import { luncurkanInvasi } from "./modals_pilih_negara/logic/InvasiLogic";

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

  const targetName = activeMenu.startsWith("Komando Pertahanan:Misi Serangan:") 
    ? activeMenu.split(":")[2] 
    : null;

  const targetCountry = useMemo(() => {
    if (!targetName) return null;
    return countries.find(c => 
      c.name_id.toLowerCase() === targetName.toLowerCase() || 
      c.name_en.toLowerCase() === targetName.toLowerCase()
    );
  }, [targetName]);

  const tabGroups = {
    darat: [
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

  const handleSliderChange = (key: string, val: number) => {
    setDeployments(prev => ({ ...prev, [key]: val }));
  };

  if (!isOpen || !data) return null;

  const getCountryCode = (emoji: string) => {
    const chars = [...emoji];
    if (chars.length < 2) return "";
    return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
  };

  return (
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
        <div className="flex-1 overflow-hidden p-8 relative z-10 flex flex-col items-center justify-center text-center">
          {targetCountry ? (
            <div className="max-w-5xl w-full space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="flex flex-col items-center gap-3">
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
                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">{targetCountry.name_id}</h3>
                    <p className="text-red-500 font-black text-[9px] uppercase tracking-[0.4em] mt-1">Target Teridentifikasi</p>
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Jarak Operasi', value: '1,240 KM', icon: Globe, color: 'text-blue-400' },
                    { label: 'Kesiapan', value: 'OPTIMAL', icon: Zap, color: 'text-yellow-400' },
                    { label: 'Resiko', value: 'MEDIUM', icon: AlertTriangle, color: 'text-orange-500' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-2xl flex flex-col items-center gap-2">
                       <stat.icon className={`h-4 w-4 ${stat.color}`} />
                       <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                       <span className="text-xs font-black text-white italic">{stat.value}</span>
                    </div>
                  ))}
               </div>

               {/* TABS */}
               <div className="flex bg-zinc-900/50 p-1 rounded-2xl w-full border border-zinc-800/50">
                 {['darat', 'laut', 'udara'].map((tab) => (
                   <button 
                     key={tab}
                     onClick={() => setActiveTab(tab as any)}
                     className={`flex-1 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                       activeTab === tab 
                         ? 'bg-red-600 text-white shadow-lg shadow-red-500/20' 
                         : 'text-zinc-500 hover:text-white hover:bg-zinc-800/50'
                     }`}
                   >
                     Armada {tab}
                   </button>
                 ))}
               </div>

               {/* UNIT SLIDERS */}
               <div className="grid grid-cols-4 gap-3 h-[170px] content-start w-full text-left">
                 {tabGroups[activeTab].map((unit) => {
                   const maxAvailable = (data.armada_militer as any)[activeTab]?.[unit.key] || 0;
                   if (maxAvailable <= 0) return null;
                   
                   const currentVal = deployments[unit.key] || 0;
                   
                   return (
                     <div key={unit.key} className="bg-zinc-950/50 border border-zinc-800/50 p-3 rounded-xl flex flex-col justify-between gap-2 group hover:border-red-500/30 transition-all h-[76px]">
                        <div className="flex justify-between items-start">
                           <span className="text-sm font-black text-zinc-300 group-hover:text-white uppercase tracking-wider transition-colors line-clamp-1">{unit.label}</span>
                           <span className="text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-md tabular-nums shrink-0 ml-2">
                             {currentVal} / {maxAvailable}
                           </span>
                        </div>
                        <input 
                           type="range" 
                           min="0" 
                           max={maxAvailable} 
                           value={currentVal} 
                           onChange={(e) => handleSliderChange(unit.key, parseInt(e.target.value))}
                           className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500 hover:accent-red-400 transition-all"
                        />
                     </div>
                   );
                 })}
                 
                 {tabGroups[activeTab].every(unit => ((data.armada_militer as any)[activeTab]?.[unit.key] || 0) <= 0) && (
                    <div className="col-span-2 text-center py-10 border border-dashed border-zinc-800 rounded-2xl bg-zinc-950/30 h-[92px] flex items-center justify-center">
                        <span className="text-xs font-black text-zinc-600 uppercase tracking-widest italic">Tidak Ada Unit Tersedia</span>
                    </div>
                 )}
               </div>

               <div className="space-y-4">
                  <button 
                onClick={() => {
                    if (targetCountry && data) {
                        const units = luncurkanInvasi(data, targetCountry, deployments);
                        console.log("Invasion units spawned:", units);
                        onClose();
                    }
                }}
                    className="w-full py-5 rounded-[24px] bg-red-600 text-white font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:bg-red-500 transition-all active:scale-95 cursor-pointer"
                  >
                    Luncurkan Invasi Skala Penuh
                  </button>
                  <button 
                    onClick={() => setIsSelecting(true)}
                    className="text-zinc-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Ganti Target Operasi
                  </button>
               </div>
            </div>
          ) : (
            <div className="max-w-md space-y-6">
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
  );
}
