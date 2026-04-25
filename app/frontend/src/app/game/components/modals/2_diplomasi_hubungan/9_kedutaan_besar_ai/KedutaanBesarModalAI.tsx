"use client"

import React, { useEffect, useState } from "react";
import { Landmark, X, Building, ShieldAlert } from "lucide-react";
import { getInitialAgreements } from "@/app/database/data/database_mitra_perdagangan/agreementsRegistry";

interface KedutaanBesarModalAIProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
}

export default function KedutaanBesarModalAI({ isOpen, onClose, targetCountry }: KedutaanBesarModalAIProps) {
  const [embassies, setEmbassies] = useState<any[]>([]);

  useEffect(() => {
    if (isOpen && targetCountry) {
      // Fetch agreements to determine embassy networks
      const data = getInitialAgreements(targetCountry, targetCountry);
      // As per game logic, countries with active trade agreements have embassies
      const activeEmbassies = data.filter((item: any) => item.status === "Aktif");
      setEmbassies(activeEmbassies);
      
      window.dispatchEvent(new CustomEvent('hide_strategy_modal'));
    }
    
    return () => {
      if (isOpen) {
        window.dispatchEvent(new CustomEvent('show_strategy_modal'));
      }
    };
  }, [isOpen, targetCountry]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] relative animate-in fade-in slide-in-from-bottom-4 duration-300 transition-all pointer-events-auto">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600"></div>
        
        {/* Fixed Header */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              <Landmark className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white italic uppercase tracking-tight">Jaringan Kedutaan Besar</h3>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">{targetCountry} — {embassies.length} Kedutaan Aktif</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-200 transition-colors p-2 hover:bg-zinc-800/60 rounded-xl border border-transparent hover:border-zinc-700/50 cursor-pointer pointer-events-auto"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
          {embassies.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                <ShieldAlert className="h-8 w-8 text-zinc-600" />
              </div>
              <div>
                 <p className="text-sm font-black text-zinc-300 uppercase tracking-widest">Tidak Ada Kedutaan</p>
                 <p className="text-xs text-zinc-500 mt-1">Negara ini belum memiliki jaringan kedutaan luar negeri aktif.</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-3">
              {embassies.map((embassy, idx) => (
                <div key={idx} className="bg-zinc-800/40 rounded-xl p-4 border border-zinc-700/30 flex items-center justify-between hover:bg-zinc-800/60 hover:border-zinc-700/50 transition-colors">
                  <div className="flex items-center gap-4">
                     <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                        <Building className="h-4 w-4 text-purple-400" />
                     </div>
                     <div>
                        <p className="text-sm font-black text-zinc-200 uppercase tracking-tight">{embassy.mitra}</p>
                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Hubungan Diplomatik</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border bg-purple-500/10 text-purple-400 border-purple-500/20">
                        Kedutaan Aktif
                     </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Fixed Footer */}
        <div className="p-6 pt-4 border-t border-zinc-800/60 bg-zinc-900/80 backdrop-blur-md z-10">
           <button 
              onClick={onClose}
              className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-black rounded-xl transition-all border border-zinc-700/50 active:scale-[0.98] cursor-pointer shadow-lg text-xs uppercase tracking-[0.2em]"
           >
              Kembali ke Diplomasi
           </button>
        </div>
      </div>
    </div>
  );
}
