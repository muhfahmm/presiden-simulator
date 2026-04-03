"use client"

import { useState } from "react";
import { X, Shield, Swords, Eye, Bomb, Map as MapIcon, Radiation, Zap, Truck, Anchor, Plane, Search, Crosshair, Target, Clock, Loader2, EyeOff } from "lucide-react"
import { CountryData } from "@/app/database/data/types/index";
import NavigasiWaktu from "../../2_ekonomi/1-perdagangan/NavigasiWaktu";
import PilihAlutsistaMisi from "./modals/1_misi_serangan/PilihAlutsistaMisi";
import ModalsPerbandingan from "./modals/1_misi_serangan/halaman_utama_pertempuran/modals_perbandingan/modals_perbandingan";
import { warMissionStorage } from "./modals/1_misi_serangan/logic_jalur/warMissionStorage";
import PertempuranIndex from "./modals/1_misi_serangan/halaman_utama_pertempuran/pertempuran/PertempuranIndex";
import PilihTargetMisi from "./modals/1_misi_serangan/PilihTargetMisi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  preselectedTarget?: string;
  data: CountryData;
}

export default function PertahananModal({ isOpen, onClose, activeMenu, setActiveMenu, preselectedTarget, data }: ModalProps) {
  const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());
  const [missionTargetSelection, setMissionTargetSelection] = useState(false);
  const [selectedTarget, setSelectedTarget] = useState<string | undefined>(preselectedTarget);
  
  const showMisiSerangan = activeMenu.startsWith("Komando Pertahanan:Misi Serangan");
  const menuTarget = activeMenu.startsWith("Komando Pertahanan:Misi Serangan:") 
    ? activeMenu.split(":")[2] 
    : undefined;

  const currentTarget = selectedTarget || menuTarget || preselectedTarget;
  const showPerbandingan = activeMenu.startsWith("Komando Pertahanan:PerbandinganMisi:");
  const showPertempuran = activeMenu.startsWith("Komando Pertahanan:Pertempuran:");
  
  // Mission Comparison Data handling
  let comparisonData = null;
  if (showPerbandingan) {
    const parts = activeMenu.split(":");
    const target = parts[2];
    const missionId = parts[3];
    let mission = missionId ? warMissionStorage.getMission(missionId) : null;
    if (!mission && target) mission = warMissionStorage.getMissions().find((m: any) => m.target.toLowerCase() === target.toLowerCase() && m.status === 'arrived');
    if (mission) {
      comparisonData = { target, selection: mission.selection };
    }
  }

  // Active Battle Data handling
  let battleData = null;
  if (showPertempuran) {
    const parts = activeMenu.split(":");
    const target = parts[2];
    const missionId = parts[3];
    let mission = missionId ? warMissionStorage.getMission(missionId) : null;
    if (!mission && target) mission = warMissionStorage.getMissions().find((m: any) => m.target.toLowerCase() === target.toLowerCase() && m.status === 'arrived');
    if (!mission && target) mission = warMissionStorage.getMissions().find((m: any) => m.target.toLowerCase() === target.toLowerCase());

    if (mission) {
      battleData = { target, selection: mission.selection };
    } else if (target) {
      // Fallback/Mock data for direct URL access (e.g., /game/misi-taktis/malaysia/pertempuran)
      battleData = { 
        target, 
        selection: { 
          "pasukan_infanteri": 340000, 
          "tank_tempur_utama": 31,
          "artileri_berat": 26,
          "kapal_destroyer": 40,
          "kapal_induk": 29,
          "jet_tempur_siluman": 8,
          "helikopter_serang": 8
        } 
      };
    }
  }
  
  if (!isOpen || !data) return null;

  const management = data.sektor_pertahanan;
  const fleet = data.armada_militer;
  const security = data.militer_strategis;

  interface SectionItem {
    label: string;
    icon: any;
    desc: string;
    value: string | number;
    color: string;
    btnLabel?: string;
  }

  interface SectionGroup {
    id: string;
    title: string;
    icon: any;
    color: string;
    items: SectionItem[];
  }

  const sections: SectionGroup[] = [
    {
      id: "strat_nas",
      title: "Strategi & Operasi Strategis",
      icon: Target,
      color: "text-rose-500",
      items: [
        { label: "Misi Serangan", icon: Swords, desc: "Operasi Aktif", value: "SIAGA", color: "text-red-500", btnLabel: "Mulai Misi" },
        { label: "Misi Mata-mata", icon: Eye, desc: "Agen Lapangan", value: security.operasi_strategis?.misi_mata_mata ?? 0, color: "text-indigo-400", btnLabel: "Mulai Misi" },
        { label: "Misi Sabotase", icon: Bomb, desc: "Target Sabotase", value: security.operasi_strategis?.misi_sabotase ?? 0, color: "text-orange-500", btnLabel: "Mulai Misi" },
        { label: "Kontrol Wilayah", icon: MapIcon, desc: "Manajemen Administrasi", value: `${security.operasi_strategis?.manajemen_wilayah ?? 0}%`, color: "text-emerald-500", btnLabel: "Lihat Wilayah" },
        { label: "Program Nuklir", icon: Radiation, desc: "Kesiapan Strategis", value: `${security.operasi_strategis?.program_nuklir ?? 0}%`, color: "text-yellow-500", btnLabel: "Lihat Program Nuklir" },
      ]
    },
    {
      id: "alutsista",
      title: "Kesiapan Alutsista Nasional",
      icon: Shield,
      color: "text-cyan-400",
      items: [
        { label: "Tank Tempur Utama", icon: Truck, desc: "Unit MBT", value: fleet.darat.tank_tempur_utama, color: "text-amber-500" },
        { label: "Armada Destroyer", icon: Anchor, desc: "Kapal Perusak", value: fleet.laut.kapal_destroyer, color: "text-blue-500" },
        { label: "Jet Tempur Siluman", icon: Plane, desc: "Pesawat Stealth", value: fleet.udara.jet_tempur_siluman, color: "text-zinc-400" },
      ]
    },
    {
      id: "intel_radar",
      title: "Jaringan Intelijen & Radar",
      icon: Search,
      color: "text-emerald-400",
      items: [
        { label: "Sistem Satelit", icon: Zap, desc: "Orbit Aktif", value: security.intel_radar?.sistem_satelit ?? 0, color: "text-cyan-400" },
        { label: "Jaringan Radar", icon: Crosshair, desc: "Cakupan Deteksi", value: `${security.intel_radar?.jaringan_radar ?? 0}%`, color: "text-rose-400" },
        { label: "Keamanan Siber", icon: Eye, desc: "Defense Level", value: management.pertahanan_siber, color: "text-indigo-500" },
      ]
    }
  ];

  const toggleSector = (id: string) => {
    setCollapsedSectors(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="absolute inset-0 bg-black/95 z-[70] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
      <div className="bg-zinc-950 border border-red-500/20 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.1)] flex flex-col relative animate-in zoom-in-95 duration-500">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-xl">
              <Shield className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Komando Pertahanan</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Defense Command</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <NavigasiWaktu />
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="space-y-12">
            {sections.map((group) => (
              <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1">
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}><group.icon className={`h-4 w-4 ${group.color}`} /></div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title}</h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
                  <button onClick={() => toggleSector(group.id)} className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95">
                    {collapsedSectors.has(group.id) ? <EyeOff size={16} /> : <Eye size={16} className="text-cyan-400" />}
                  </button>
                </div>
                
                <div className={`grid transition-all duration-700 ease-in-out ${!collapsedSectors.has(group.id) ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 pb-4">
                      {group.items.map((item, idx) => (
                        <div key={idx} className="bg-zinc-900/40 border border-zinc-800/60 p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full min-h-[200px] hover:border-red-500/30">
                          {/* Card header */}
                          <div className="flex items-start justify-between relative z-10">
                            <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform">
                              <item.icon className={`h-5 w-5 ${item.color} shadow-[0_0_10px_rgba(239,68,68,0.2)]`} />
                            </div>
                            <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-500 group-hover:text-red-400 transition-colors uppercase tracking-tight">
                              Strategis
                            </div>
                          </div>

                          {/* Card body */}
                          <div className="flex-1 flex flex-col relative z-10 mt-1">
                            <h4 className="text-sm font-black text-zinc-400 tracking-wider group-hover:text-white transition-colors uppercase leading-tight mb-2">
                              {item.label}
                            </h4>
                            <div className="flex flex-col gap-4 flex-1 justify-center items-center bg-zinc-950/20 rounded-3xl border border-zinc-800/30 p-4">
                               <span className={`text-3xl font-black ${item.color} tracking-tighter`}>{item.value}</span>
                               <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em] text-center">{item.desc}</span>
                            </div>
                          </div>
                          
                          <div 
                            className="mt-2 w-full py-2 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-center group-hover:border-red-500/20 transition-all cursor-pointer hover:bg-zinc-800"
                            onClick={() => {
                               if (item.label === "Misi Serangan") {
                                  setMissionTargetSelection(true);
                               } else if (item.btnLabel === "Mulai Misi") {
                                  // For other missions, we can still use local state or add routes later
                                  // For now, let's keep consistency with the user request
                               }
                            }}
                          >
                             <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em] group-hover:text-red-500 transition-colors">
                               {item.btnLabel || "Sangat Siaga"}
                             </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {missionTargetSelection && (
        <PilihTargetMisi 
          isOpen={missionTargetSelection}
          onClose={() => setMissionTargetSelection(false)}
          onSelect={(target) => {
            setSelectedTarget(target);
            setMissionTargetSelection(false);
            setActiveMenu(`Komando Pertahanan:Misi Serangan:${target}`);
          }}
          userCountry={data.name_id}
        />
      )}

      {showMisiSerangan && (
        <PilihAlutsistaMisi 
          isOpen={showMisiSerangan}
          onClose={() => setActiveMenu("Komando Pertahanan")}
          data={data}
          targetCountry={currentTarget}
        />
      )}

      {showPerbandingan && comparisonData && (
        <ModalsPerbandingan 
          isOpen={true}
          onClose={() => setActiveMenu("Pertahanan")}
          onConfirm={() => {
            // Transition to actual battle simulation
            const parts = activeMenu.split(":");
            setActiveMenu(`Komando Pertahanan:Pertempuran:${parts[2]}:${parts[3]}`);
          }}
          onAutoResult={() => {
            // Skip to results (simulated as immediately finishing)
             setActiveMenu("Pertahanan");
          }}
          userSelection={comparisonData.selection}
          targetCountryName={comparisonData.target}
        />
      )}

      {showPertempuran && battleData && (
        <PertempuranIndex 
          onClose={() => setActiveMenu("Pertahanan")}
          missionData={battleData}
        />
      )}
    </div>
  )
}
