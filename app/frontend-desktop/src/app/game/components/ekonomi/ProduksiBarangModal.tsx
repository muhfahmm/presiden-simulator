"use client"

import { X, Package, ShoppingCart, ShoppingBag, Truck, Factory, TrendingUp, BarChart, HardHat, Warehouse } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProduksiBarangModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const productionData = [
    { label: "Stok Beras Nasional", value: "2.5 jt Ton", icon: Warehouse, color: "text-orange-400" },
    { label: "Produksi Manufaktur", value: "85% Kapasitas", icon: Factory, color: "text-blue-400" },
    { label: "Indeks Konsumsi", value: "102.5", icon: ShoppingCart, color: "text-green-400" }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/10 rounded-xl">
              <Package className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Produksi & Konsumsi Barang</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Supply Chain & Market Stability</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {productionData.map((data, idx) => (
              <div key={idx} className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-2xl flex flex-col items-center text-center gap-3 group hover:bg-zinc-900/40 transition-all">
                <div className={`p-4 rounded-full bg-zinc-950 border border-zinc-800 ${data.color} shadow-lg shadow-black group-hover:scale-110 transition-transform`}>
                  <data.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{data.label}</span>
                  <span className="text-xl font-black text-white">{data.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/20 border border-zinc-800 p-8 rounded-3xl">
              <h3 className="text-sm font-bold text-zinc-200 mb-6 flex items-center gap-2">
                <Truck className="h-4 w-4 text-orange-400" /> Distribusi Logistik
              </h3>
              <div className="space-y-5">
                {[
                  { label: "Beras & Pangan Utama", status: "Aman", percentage: 92, color: "bg-green-500" },
                  { label: "Bahan Bangunan (Semen/Baja)", status: "Terbatas", percentage: 65, color: "bg-amber-500" },
                  { label: "Barang Konsumsi (Manufaktur)", status: "Lancar", percentage: 88, color: "bg-blue-500" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[10px] font-bold">
                      <span className="text-zinc-400 uppercase tracking-tight">{item.label}</span>
                      <span className={`${item.color.replace('bg', 'text')} uppercase tracking-widest`}>{item.status}</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full p-[1px]">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/10 p-8 rounded-3xl flex flex-col justify-center items-center text-center gap-6">
              <div className="flex -space-x-3">
                {[HardHat, Factory, ShoppingBag].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-zinc-950 border-2 border-zinc-900 flex items-center justify-center shadow-xl">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">Kemitraan Industri</h3>
                <p className="text-xs text-zinc-500 max-w-[280px]">Koordinasikan produksi dengan pelaku industri untuk menjaga stabilitas harga pasar.</p>
              </div>
              <button className="px-10 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-blue-900/20 active:scale-95">
                Atur Regulasi Market →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
