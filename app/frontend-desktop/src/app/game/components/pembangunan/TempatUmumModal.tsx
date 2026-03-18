"use client"

import { X, Wrench, Truck, MapPin, GraduationCap, HeartPulse, Trophy, Gavel, UserCheck, Building2, Store, Palmtree } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TempatUmumModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const content = [
    { label: "Jalan Tol", icon: Truck, desc: "Transportasi" },
    { label: "Stasiun Kereta", icon: MapPin, desc: "Transportasi" },
    { label: "Bandara", icon: MapPin, desc: "Transportasi" },
    { label: "Universitas", icon: GraduationCap, desc: "Pendidikan" },
    { label: "Rumah Sakit", icon: HeartPulse, desc: "Kesehatan" },
    { label: "Stadion", icon: Trophy, desc: "Olahraga" },
    { label: "Gedung Pengadilan", icon: Gavel, desc: "Hukum" },
    { label: "Markas POLRI", icon: UserCheck, desc: "Keamanan" },
    { label: "Residensial", icon: Building2, desc: "Hunian" },
    { label: "Komersial", icon: Store, desc: "Ekonomi Lokal" },
    { label: "Pariwisata", icon: Palmtree, desc: "Hiburan" },
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-6xl h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-xl">
              <Wrench className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Tempat Umum</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Public Services</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-in fade-in duration-500">
            {content.map((item, idx) => (
              <BuildingCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function BuildingCard({ item }: { item: any }) {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800/60 p-4 rounded-2xl hover:border-cyan-500/50 hover:bg-zinc-800/40 transition-all group cursor-pointer flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform">
          <item.icon className="h-5 w-5 text-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
        </div>
        <div className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[9px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
          {item.desc || "Infrastruktur"}
        </div>
      </div>
      <div>
        <h4 className="text-sm font-bold text-zinc-100 tracking-tight group-hover:text-white transition-colors">{item.label}</h4>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[10px] text-zinc-500 font-medium">Biaya: Rp 25 T</span>
          <button className="px-3 py-1 rounded-lg bg-cyan-600/10 text-cyan-500 text-[10px] font-bold border border-cyan-500/20 hover:bg-cyan-600 hover:text-white transition-all">
            Bangun
          </button>
        </div>
      </div>
    </div>
  )
}
