"use client"

import { X, Wrench, Zap, Pickaxe, Factory, Construction, Store, Beef, Wheat, Radiation, Coins, Flame, Droplets, FlaskConical, Shovel, Container, Car, Bike, Hammer, Trees, Coffee, Cookie, Milk, Fish, Waves, Shell, Sprout } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProduksiModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const productionGroups = [
    {
      id: "kelistrikan",
      title: "Infrastruktur Kelistrikan",
      icon: Zap,
      color: "text-amber-400",
      items: [
        { label: "PLTS (Panel Surya)", icon: Zap, desc: "Energi Surya" },
        { label: "PLTB (Angin)", icon: Zap, desc: "Energi Bayu" },
        { label: "PLTA (Hidroelektrik)", icon: Droplets, desc: "Energi Air" },
        { label: "PLTN (Fisi Nuklir)", icon: Radiation, desc: "Energi Nuklir" },
        { label: "PLT Thermal", icon: Flame, desc: "Energi Panas" },
      ]
    },
    {
      id: "ekstraksi",
      title: "Sektor Ekstraksi & Energi",
      icon: Pickaxe,
      color: "text-orange-500",
      items: [
        { label: "Tambang Emas", icon: Coins, desc: "Logam Mulia" },
        { label: "Tambang Uranium", icon: Radiation, desc: "Bahan Bakar Nuklir" },
        { label: "Tambang Batubara", icon: Shovel, desc: "Bahan Bakar Fosil" },
        { label: "Kilang Minyak", icon: Droplets, desc: "Energi Fosil" },
        { label: "Kilang Gas", icon: Flame, desc: "Energi Fosil" },
        { label: "Tambang Garam", icon: Pickaxe, desc: "Mineral" },
        { label: "Tambang Nikel", icon: Pickaxe, desc: "Mineral Strategis" },
        { label: "Tambang Tembaga", icon: Pickaxe, desc: "Mineral" },
        { label: "Tanah Jarang", icon: Pickaxe, desc: "Mineral Elektronik" },
        { label: "Tambang Biji Besi", icon: Pickaxe, desc: "Logam Dasar" },
      ]
    },
    {
      id: "manufaktur",
      title: "Sektor Pengolahan & Manufaktur",
      icon: Factory,
      color: "text-cyan-400",
      items: [
        { label: "Pabrik Semikonduktor", icon: Zap, desc: "Elektronik" },
        { label: "Pabrik Mobil", icon: Car, desc: "Otomotif" },
        { label: "Pabrik Motor", icon: Bike, desc: "Otomotif" },
        { label: "Pabrik Logam (Smelter)", icon: Hammer, desc: "Industri Berat" },
        { label: "Pabrik Beton & Semen", icon: Construction, desc: "Material" },
        { label: "Penggergajian Kayu", icon: Hammer, desc: "Material" },
        { label: "Pabrik Air Mineral", icon: Droplets, desc: "Konsumsi" },
        { label: "Pabrik Gula", icon: Cookie, desc: "Konsumsi" },
        { label: "Pabrik Roti", icon: Cookie, desc: "Konsumsi" },
        { label: "Pabrik Farmasi", icon: FlaskConical, desc: "Kesehatan" },
        { label: "Pabrik Pupuk", icon: Sprout, desc: "Pertanian" },
        { label: "Pengolahan Daging", icon: Beef, desc: "Pangan" },
        { label: "Pabrik Mie Instan", icon: Container, desc: "Pangan" },
      ]
    },
    {
      id: "peternakan",
      title: "Sektor Peternakan",
      icon: Beef,
      color: "text-emerald-400",
      items: [
        { label: "Peternakan Ayam", icon: Beef, desc: "Pangan" },
        { label: "Peternakan Unggas", icon: Beef, desc: "Pangan" },
        { label: "Sapi Perah", icon: Milk, desc: "Pangan" },
        { label: "Sapi Potong", icon: Beef, desc: "Pangan" },
        { label: "Domba & Kambing", icon: Beef, desc: "Pangan" },
        { label: "Tambak Udang", icon: Fish, desc: "Perikanan" },
        { label: "Budidaya Ikan", icon: Fish, desc: "Perikanan" },
        { label: "Budidaya Kerang", icon: Shell, desc: "Perikanan" },
      ]
    },
    {
      id: "pertanian",
      title: "Sektor Pertanian",
      icon: Wheat,
      color: "text-yellow-400",
      items: [
        { label: "Pertanian Padi", icon: Wheat, desc: "Pangan" },
        { label: "Pertanian Gandum", icon: Wheat, desc: "Pangan" },
        { label: "Pertanian Jagung", icon: Wheat, desc: "Pangan" },
        { label: "Umbi-umbian", icon: Wheat, desc: "Pangan" },
        { label: "Pertanian Kedelai", icon: Wheat, desc: "Pangan" },
        { label: "Kelapa Sawit", icon: Trees, desc: "Komoditi" },
        { label: "Perkebunan Teh", icon: Trees, desc: "Komoditi" },
        { label: "Perkebunan Kopi", icon: Coffee, desc: "Komoditi" },
        { label: "Perkebunan Kakao", icon: Cookie, desc: "Komoditi" },
        { label: "Perkebunan Tebu", icon: Trees, desc: "Pangan" },
        { label: "Sayur Mayur", icon: Sprout, desc: "Pangan" },
      ]
    }
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
              <h2 className="text-2xl font-bold text-white tracking-tight">Produksi</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Production Hub</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="space-y-12">
            {productionGroups.map((group) => (
              <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1">
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}>
                    <group.icon className={`h-4 w-4 ${group.color}`} />
                  </div>
                  <h3 className="text-sm font-black text-zinc-200 uppercase tracking-widest">{group.title}</h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-2"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.items.map((item, idx) => (
                    <BuildingCard key={idx} item={item} />
                  ))}
                </div>
              </div>
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
        <h4 className="text-[11px] font-bold text-zinc-100 tracking-tight group-hover:text-white transition-colors leading-tight line-clamp-1">{item.label}</h4>
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
