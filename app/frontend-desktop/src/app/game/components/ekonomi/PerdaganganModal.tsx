import { X, ArrowRightLeft, TrendingUp, TrendingDown, Globe, Ship, Landmark, ShoppingCart, BarChart3 } from "lucide-react"
import { countries } from "../../../select-country/data/countries"
import { CountryData } from "../../../select-country/data/types"
import { gameStorage } from "../../gamestorage"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PerdaganganModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const currentData = countries.find((c: CountryData) => c.name_en === session?.country) || countries[0];

  const tradeData = [
    { label: "Ekspor Komoditas", value: `Rp ${currentData.trade.sell_commodity} T`, trend: "up", percentage: "+12%" },
    { label: "Impor Komoditas", value: `Rp ${currentData.trade.buy_commodity} T`, trend: "down", percentage: "-5%" },
    { 
      label: "Neraca Perdagangan", 
      value: `Rp ${currentData.trade.sell_commodity - currentData.trade.buy_commodity} T`, 
      trend: currentData.trade.sell_commodity >= currentData.trade.buy_commodity ? "up" : "down", 
      percentage: currentData.trade.sell_commodity >= currentData.trade.buy_commodity ? "Surplus" : "Defisit" 
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl">
              <ArrowRightLeft className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Perdagangan Internasional</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Global Trade & Commerce</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {tradeData.map((data, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{data.label}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-white">{data.value}</span>
                  <span className={`text-[10px] font-bold ${data.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {data.percentage}
                  </span>
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded-full mt-2 overflow-hidden">
                  <div className={`h-full ${data.trend === 'up' ? 'bg-green-500' : 'bg-red-500'} w-2/3 shadow-[0_0_8px_rgba(34,197,94,0.3)]`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Beli Komoditas Section */}
            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-zinc-200 mb-6 flex items-center gap-2 uppercase tracking-tighter">
                <ShoppingCart className="h-4 w-4 text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.3)]" /> Beli Komoditas (Impor)
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Alat Elektronik", value: "120T", icon: "💻" },
                  { name: "Bahan Pangan (Gandum)", value: "85T", icon: "🌾" },
                  { name: "Suku Cadang Otomotif", value: "45T", icon: "⚙️" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-zinc-900/40 rounded-xl border border-zinc-800 hover:border-red-500/30 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-zinc-300">Rp {item.value}</span>
                      <button className="px-3 py-1 bg-red-500/20 text-red-500 text-[9px] font-black uppercase rounded-lg hover:bg-red-500 hover:text-white transition-all">Beli</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Jual Komoditas Section */}
            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-zinc-200 mb-6 flex items-center gap-2 uppercase tracking-tighter">
                <BarChart3 className="h-4 w-4 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]" /> Jual Komoditas (Ekspor)
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Minyak Mentah", value: "240T", icon: "🛢️" },
                  { name: "Hasil Tambang (Emas)", value: "110T", icon: "💎" },
                  { name: "Komoditas Pertanian", value: "65T", icon: "☕" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-zinc-900/40 rounded-xl border border-zinc-800 hover:border-green-500/30 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-zinc-300">Rp {item.value}</span>
                      <button className="px-3 py-1 bg-green-500/20 text-green-500 text-[9px] font-black uppercase rounded-lg hover:bg-green-500 hover:text-white transition-all">Jual</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 p-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Ship className="h-6 w-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">Logistik & Pelabuhan</h4>
              <p className="text-[10px] text-zinc-500 mt-0.5">Kapasitas kargo laut meningkat 15% setelah pembangunan pangkalan laut terbaru.</p>
            </div>
            <button className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-[10px] font-black uppercase tracking-widest text-white rounded-xl transition-all">Kelola Rute →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

