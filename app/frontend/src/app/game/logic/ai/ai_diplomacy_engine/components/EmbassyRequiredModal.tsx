import React from 'react';
import { ShieldAlert, Building2, ArrowRight, X } from 'lucide-react';

interface EmbassyRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryName: string;
  onProposedEmbassy: (country: string) => void;
}

export default function EmbassyRequiredModal({ isOpen, onClose, countryName, onProposedEmbassy }: EmbassyRequiredModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-zinc-950 border border-red-500/30 w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.1)] flex flex-col pt-8">
        
        <div className="flex flex-col items-center text-center px-8 pb-8">
          <div className="p-4 bg-red-500/10 rounded-3xl border border-red-500/20 mb-6">
            <ShieldAlert className="h-10 w-10 text-red-500" />
          </div>
          
          <h2 className="text-xl font-black text-white uppercase italic tracking-tighter leading-tight mb-2">
            Aksi Diplomasi Terhambat
          </h2>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">
            Protokol Internasional Melanggar
          </p>

          <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-2xl w-full mb-8">
            <p className="text-sm font-black text-red-400 leading-tight uppercase">
              TIDAK BISA KARENA BELUM MEMILIKI KEDUTAAN BESAR
            </p>
            <p className="text-[10px] text-zinc-500 font-medium mt-2 leading-relaxed">
              Hubungan diplomatik formal dengan <span className="text-white font-bold">{(countryName || "Negara Terkait").toUpperCase()}</span> harus dibangun terlebih dahulu sebelum meratifikasi perjanjian tingkat tinggi.
            </p>
          </div>

          <div className="space-y-3 w-full">
            <button 
              onClick={() => {
                onProposedEmbassy(countryName);
                onClose();
              }}
              className="w-full bg-white text-black py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 shadow-xl group"
            >
              <Building2 className="h-4 w-4" />
              Ajukan Pembangunan Kedubes
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onClose}
              className="w-full bg-zinc-900 text-zinc-400 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all"
            >
              Batalkan
            </button>
          </div>
        </div>

        <div className="bg-zinc-900/30 p-4 border-t border-zinc-900 flex justify-center">
            <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Sekretariat Jenderal Luar Negeri</p>
        </div>
      </div>
    </div>
  );
}
