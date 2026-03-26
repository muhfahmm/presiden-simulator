"use client"

import { X, Shield, Swords, Truck, Anchor, Plane, Crosshair, Target, Package, Zap } from "lucide-react"
import { CountryData } from "@/app/database/data/types/_index";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData;
}

export default function ArmadaMiliterModal({ isOpen, onClose, data }: ModalProps) {
  if (!isOpen) return null;

  const mil = data.armada_militer;

  const totalUnit = mil.barak + mil.darat.tank_tempur_utama + mil.darat.apc_ifv + mil.darat.artileri_berat
    + mil.laut.kapal_induk + mil.laut.kapal_destroyer + mil.laut.kapal_selam_nuklir
    + mil.udara.jet_tempur_siluman + mil.udara.helikopter_serang + mil.udara.pesawat_pengintai;
  const kesiapan = 75; // default readiness

  const fleetCategories = [
    {
      title: "Armada Darat",
      icon: Truck,
      color: "text-amber-500",
      items: [
        { name: "Main Battle Tank", count: mil.darat.tank_tempur_utama, status: "Siaga", kesehatan: Math.min(100, kesiapan + 2) },
        { name: "Armored Personnel Carrier", count: mil.darat.apc_ifv, status: "Patroli", kesehatan: Math.min(100, kesiapan - 5) },
        { name: "Artileri Berat", count: mil.darat.artileri_berat, status: "Siaga", kesehatan: kesiapan },
      ]
    },
    {
      title: "Armada Laut",
      icon: Anchor,
      color: "text-blue-500",
      items: [
        { name: "Kapal Induk", count: mil.laut.kapal_induk, status: "Dermaga", kesehatan: Math.min(100, kesiapan + 5) },
        { name: "Kapal Destroyer", count: mil.laut.kapal_destroyer, status: "Laut Lepas", kesehatan: Math.min(100, kesiapan - 3) },
        { name: "Kapal Selam Nuklir", count: mil.laut.kapal_selam_nuklir, status: "Rahasia", kesehatan: kesiapan },
      ]
    },
    {
      title: "Armada Udara",
      icon: Plane,
      color: "text-cyan-500",
      items: [
        { name: "Jet Tempur Stealth", count: mil.udara.jet_tempur_siluman, status: "Hanggar", kesehatan: Math.min(100, kesiapan + 4) },
        { name: "Helikopter Serang", count: mil.udara.helikopter_serang, status: "Siaga", kesehatan: Math.min(100, kesiapan - 8) },
        { name: "Pesawat Pengintai", count: mil.udara.pesawat_pengintai, status: "Misi", kesehatan: kesiapan },
      ]
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl">
              <Swords className="h-7 w-7 text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight uppercase">Armada Militer</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em] mt-1">National Military Fleet Command</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-[radial-gradient(circle_at_50%_50%,_rgba(30,58,138,0.05)_0%,_transparent_100%)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fleetCategories.map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="flex items-center gap-2 px-2">
                  <cat.icon className={`h-4 w-4 ${cat.color}`} />
                  <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest">{cat.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <div key={i} className="bg-zinc-900/40 border border-zinc-800/60 p-4 rounded-2xl hover:border-blue-500/30 transition-all group">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-colors">{item.name}</h4>
                          <span className="text-[10px] font-black text-blue-400/80 uppercase tracking-tighter">{item.status}</span>
                        </div>
                        <span className="text-xl font-black text-white">{item.count}</span>
                      </div>
                      
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[9px] font-bold text-zinc-500 uppercase">
                          <span>Combat Readiness</span>
                          <span>{item.kesehatan}%</span>
                        </div>
                        <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
                            style={{ width: `${item.kesehatan}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-8 py-4 bg-zinc-900/50 border-t border-zinc-800/50 flex justify-between items-center text-[10px]">
          <div className="flex gap-6">
            <span className="text-zinc-500 font-bold uppercase tracking-widest">Total Unit: <span className="text-white">{totalUnit.toLocaleString()}</span></span>
            <span className="text-zinc-500 font-bold uppercase tracking-widest">Kesiapan Global: <span className="text-emerald-400">{kesiapan}%</span></span>
          </div>
          <p className="text-zinc-600 italic">Data diperbarui secara real-time dari Pusat Komando Strategis</p>
        </div>
      </div>
    </div>
  );
}
