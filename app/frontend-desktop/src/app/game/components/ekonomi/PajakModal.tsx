import { X, FileText, Scale, Coins, Smile, Meh, Frown, Angry, AlertCircle } from "lucide-react"
import { countries } from "../../../select-country/data/countries"
import { CountryData } from "../../../select-country/data/types"
import { gameStorage } from "../../gamestorage"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PajakModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const currentData = countries.find((c: CountryData) => c.name_en === session?.country) || countries[0];

  const taxItems = [
    { label: "Pajak Pertambahan Nilai (PPN)", key: "vat", color: "text-purple-400", bg: "bg-purple-500/10" },
    { label: "Pajak Korporasi", key: "corporate", color: "text-cyan-400", bg: "bg-cyan-500/10" },
    { label: "Pajak Penghasilan Pribadi", key: "income", color: "text-green-400", bg: "bg-green-500/10" },
    { label: "Bea Cukai", key: "customs", color: "text-amber-400", bg: "bg-amber-500/10" },
    { label: "Pajak Lingkungan", key: "environment", color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Pajak yang Lain", key: "other", color: "text-zinc-400", bg: "bg-zinc-500/10" }
  ];

  const getSatisfactionIcon = (score: number) => {
    if (score >= 80) return <Smile className="h-4 w-4 text-green-400" />;
    if (score >= 60) return <Smile className="h-4 w-4 text-lime-400 opacity-80" />;
    if (score >= 40) return <Meh className="h-4 w-4 text-yellow-400" />;
    if (score >= 20) return <Frown className="h-4 w-4 text-orange-400" />;
    return <Angry className="h-4 w-4 text-red-500 animate-pulse" />;
  };

  const getSatisfactionLabel = (score: number) => {
    if (score >= 80) return "Sangat Puas";
    if (score >= 60) return "Puas";
    if (score >= 40) return "Cukup";
    if (score >= 20) return "Tidak Puas";
    return "Protes Keras";
  };

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-xl">
              <FileText className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Manajemen Pajak</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Taxation & Revenue Center</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {taxItems.map((item, idx) => {
              const data = (currentData.taxes as any)[item.key];
              return (
                <div key={idx} className="bg-zinc-900/40 border border-zinc-800/60 p-5 rounded-2xl group hover:border-green-500/30 transition-all flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-zinc-500 uppercase tracking-wider mb-1">Kategori</span>
                      <h3 className="text-xs font-bold text-white leading-tight pr-4">{item.label}</h3>
                    </div>
                    <div className={`${item.bg} ${item.color} text-[10px] font-black px-2.5 py-1 rounded-lg border border-white/5`}>
                      {data.rate}%
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">Kepuasan Publik</span>
                      <div className="flex items-center gap-2">
                        {getSatisfactionIcon(data.satisfaction)}
                        <span className="text-[10px] font-black text-zinc-300">{data.satisfaction}%</span>
                        <span className="text-[9px] text-zinc-500 italic">({getSatisfactionLabel(data.satisfaction)})</span>
                      </div>
                    </div>
                    <button className="p-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-zinc-400 hover:text-white">
                      <Scale size={14} />
                    </button>
                  </div>
                  
                  <div className="h-1 w-full bg-zinc-800/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${
                        data.satisfaction >= 60 ? 'bg-green-500' : 
                        data.satisfaction >= 40 ? 'bg-yellow-500' : 
                        'bg-red-500'
                      }`}
                      style={{ width: `${data.satisfaction}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-600/10 to-transparent border border-green-500/20 p-6 rounded-2xl flex items-center justify-between gap-6">
              <div className="flex gap-4 items-center">
                <div className="p-4 bg-green-500/10 rounded-2xl border border-green-500/20">
                  <Scale className="h-8 w-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-tight">Keadilan Fiskal</h3>
                  <p className="text-xs text-zinc-400 max-w-[250px]">Sesuaikan rasio pajak untuk menyeimbangkan pendapatan negara dan daya beli masyarakat.</p>
                </div>
              </div>
              <button className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-green-900/20">
                Reformasi Pajak →
              </button>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <AlertCircle className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider">Peringatan Defisit</h4>
                <p className="text-[10px] text-zinc-500 mt-1">Penerimaan dari pajak korporasi menurun 2.4% bulan ini.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

