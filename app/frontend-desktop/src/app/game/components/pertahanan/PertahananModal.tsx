"use client"

import { X, Shield, Swords, Eye, Bomb, Map as MapIcon, Radiation, Users, Zap, Truck, Anchor, Plane, Search, Crosshair, Target } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PertahananModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const sections = [
    {
      title: "Strategi Nasional",
      icon: Target,
      items: [
        { label: "Serang Negara", icon: Swords, desc: "Operasi militer terbuka" },
        { label: "Operasi Spionase", icon: Eye, desc: "Intelijen luar negeri" },
        { label: "Misi Sabotase", icon: Bomb, desc: "Gangguan infrastruktur musuh" },
        { label: "Manajemen Wilayah", icon: MapIcon, desc: "Rekonsiliasi wilayah direbut" },
        { label: "Program Nuklir", icon: Radiation, desc: "Pengembangan hulu ledak" },
      ]
    },
    {
      title: "Alutsista & Unit",
      icon: Shield,
      items: [
        { label: "Divisi Infanteri", icon: Users, desc: "Pasukan darat standar" },
        { label: "Resimen Tank", icon: Truck, desc: "Kekuatan lapis baja" },
        { label: "Armada Laut", icon: Anchor, desc: "Kapal perang & selam" },
        { label: "Skuadron Udara", icon: Plane, desc: "Jet tempur & helikopter" },
      ]
    },
    {
      title: "Intelijen & Radar",
      icon: Search,
      items: [
        { label: "Sistem Satelit", icon: Zap, desc: "Pemantauan global" },
        { label: "Jaringan Radar", icon: Crosshair, desc: "Pertahanan udara berlapis" },
        { label: "Cyber Ops", icon: Eye, desc: "Perang informasi digital" },
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
