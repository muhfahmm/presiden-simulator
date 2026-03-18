"use client"

import { X, Shield, Swords, Eye, Bomb, Map as MapIcon, Radiation, Users, Zap, Truck, Anchor, Plane, Search, Crosshair, Target } from "lucide-react"
import { CountryData } from "../../../select-country/data/types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData;
}

export default function PertahananModal({ isOpen, onClose, data }: ModalProps) {
  if (!isOpen) return null;

  const strat = data.sector_military_strategic;
  const def = data.sector_defense;

  const sections = [
    {
      title: "Strategi Nasional",
      icon: Target,
      items: [
        { label: "Serang Negara", icon: Swords, desc: `${strat.strategic_operations.attack_mission} Operasi Aktif`, value: strat.strategic_operations.attack_mission },
        { label: "Operasi Spionase", icon: Eye, desc: `${strat.strategic_operations.spy_mission} Agen Lapangan`, value: strat.strategic_operations.spy_mission },
        { label: "Misi Sabotase", icon: Bomb, desc: `${strat.strategic_operations.sabotage_mission} Target Teridentifikasi`, value: strat.strategic_operations.sabotage_mission },
        { label: "Manajemen Wilayah", icon: MapIcon, desc: `${strat.strategic_operations.territory_management}% Kontrol Wilayah`, value: strat.strategic_operations.territory_management },
        { label: "Program Nuklir", icon: Radiation, desc: `${strat.strategic_operations.nuclear_program}% Kesiapan`, value: strat.strategic_operations.nuclear_program },
      ]
    },
    {
      title: "Alutsista & Unit",
      icon: Shield,
      items: [
        { label: "Divisi Infanteri", icon: Users, desc: `${(data.military.infantry / 1000).toFixed(1)}k Personel`, value: data.military.infantry },
        { label: "Resimen Tank", icon: Truck, desc: `${def.military_fleet.darat.main_battle_tank} MBT Siaga`, value: def.military_fleet.darat.main_battle_tank },
        { label: "Armada Laut", icon: Anchor, desc: `${def.military_fleet.laut.kapal_destroyer} Destroyer Aktif`, value: def.military_fleet.laut.kapal_destroyer },
        { label: "Skuadron Udara", icon: Plane, desc: `${def.military_fleet.udara.jet_tempur_stealth} Jet Stealth Ready`, value: def.military_fleet.udara.jet_tempur_stealth },
      ]
    },
    {
      title: "Intelijen & Radar",
      icon: Search,
      items: [
        { label: "Sistem Satelit", icon: Zap, desc: `${strat.intel_radar.satellite_system} Satelit Orbit`, value: strat.intel_radar.satellite_system },
        { label: "Jaringan Radar", icon: Crosshair, desc: `${strat.intel_radar.radar_network}% Cakupan`, value: strat.intel_radar.radar_network },
        { label: "Cyber Ops", icon: Eye, desc: `Level ${strat.intel_radar.cyber_ops} Defense`, value: strat.intel_radar.cyber_ops },
      ]
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-xl">
              <Shield className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Komando Pertahanan</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Defense Command</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
          {sections.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="h-4 w-4 text-red-500/80" />
                <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em]">{section.title}</h3>
                <div className="h-[1px] flex-1 bg-zinc-800/50"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item, i) => (
                  <button key={i} className="flex flex-col gap-3 p-4 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl hover:bg-zinc-800/50 hover:border-red-500/30 transition-all group text-left cursor-pointer">
                    <div className="flex items-center justify-between w-full">
                      <div className="p-2 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:text-red-500 transition-colors">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-100 mb-1 group-hover:text-white">{item.label}</h4>
                      <p className="text-[10px] text-zinc-500 font-medium leading-tight">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
