import { X, ShoppingBag, Globe, TrendingUp, CheckCircle2, Package, ArrowRight, Truck, Users } from "lucide-react";
import { getInitialAgreements } from "@/app/database/data/database_mitra_perdagangan/agreementsRegistry";

interface StatusPerjanjianDagangProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
  targetCountry: string;
}

export default function StatusPerjanjianDagang({ isOpen, onClose, setActiveMenu, targetCountry }: StatusPerjanjianDagangProps) {
  const partners = getInitialAgreements(targetCountry, targetCountry)
    .filter(a => a.type === 'Perdagangan' && a.status === 'Aktif')
    .slice(0, 5); // Show top 5 partners

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] relative animate-in zoom-in-95 duration-200">
        
        {/* Header Section */}
        <div className="relative h-32 bg-gradient-to-br from-amber-900/40 via-zinc-900 to-zinc-900 flex items-center justify-center border-b border-zinc-800">
          <div className="absolute top-4 right-4">
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition-colors cursor-pointer text-zinc-500">
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 mb-3">
              <ShoppingBag className="h-10 w-10 text-amber-500" />
            </div>
            <h2 className="text-xl font-bold text-zinc-100 tracking-tight flex items-center gap-2 uppercase italic">
              Perjanjian Dagang <Globe className="h-5 w-5 text-amber-500" />
            </h2>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {/* Status Badge */}
          <div className="bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)] flex items-center justify-between">
            <div>
              <h4 className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                Status Perjanjian
              </h4>
              <p className="text-2xl font-black text-white italic tracking-tighter">AKTIF & BERJALAN</p>
            </div>
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] border-2 border-zinc-900">
              <CheckCircle2 size={24} className="text-white" />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={14} className="text-amber-500" />
                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Ekonomi</span>
              </div>
              <p className="text-xs text-zinc-300 font-bold leading-relaxed">
                Pertumbuhan PDB <span className="text-emerald-400">+0.5% / Hari</span>
              </p>
            </div>
            <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-2">
                <Package size={14} className="text-amber-500" />
                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Logistik</span>
              </div>
              <p className="text-xs text-zinc-300 font-bold leading-relaxed">
                Biaya Ekspor/Impor <span className="text-amber-400">-15% Lebih Murah</span>
              </p>
            </div>
          </div>

          {/* Trade Partners Card */}
          <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/80">
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Users size={14} /> Mitra Dagang Utama ({targetCountry})
            </h4>
            <div className="flex flex-wrap gap-2">
              {partners.length > 0 ? partners.map((p, i) => (
                <div key={i} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] font-bold text-zinc-300 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  {p.mitra}
                </div>
              )) : (
                <p className="text-[10px] text-zinc-600 italic">Tidak ada data mitra dagang publik.</p>
              )}
            </div>
          </div>

          {/* Details Card */}
          <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/80">
            <h4 className="text-xs font-black text-zinc-100 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Truck size={14} className="text-amber-400" /> Manfaat Strategis
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200">Akses Pasar Terbuka:</strong> Perdagangan komoditas {targetCountry} dapat diakses tanpa tarif bea cukai tambahan.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200">Keamanan Jalur Dagang:</strong> Perlindungan rute pelayaran dan penerbangan kargo antar kedua negara.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex gap-3 pt-2">
            <button 
              onClick={onClose}
              className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-xs font-black rounded-xl transition-all uppercase tracking-widest"
            >
              Tutup Modal
            </button>
            <button 
              className="flex-1 py-4 bg-amber-600 hover:bg-amber-500 text-white text-xs font-black rounded-xl transition-all shadow-lg shadow-amber-500/20 uppercase tracking-[0.2em] flex items-center justify-center gap-2 group"
              onClick={() => {
                setActiveMenu("Menu:Perdagangan");
              }}
            >
              Lihat Pasar Dagang
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
