"use client"

import React, { useEffect, useState } from "react";
import { Briefcase, X, Handshake, ShieldAlert } from "lucide-react";
import { getInitialAgreements } from "@/app/database/data/database_mitra_perdagangan/agreementsRegistry";
import { embassyStorage } from "../1_kedutaan/logic/embassyStorage";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { getStoredGameDate, parseFormattedDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

interface MitraPerdaganganModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
}

export default function MitraPerdaganganModal({ isOpen, onClose, targetCountry }: MitraPerdaganganModalProps) {
  const [agreements, setAgreements] = useState<any[]>([]);
  const [newPartnerMap, setNewPartnerMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isOpen && targetCountry) {
      // Fetch agreements
      const data = getInitialAgreements(targetCountry, targetCountry);
      const playerCountry = localStorage.getItem("selectedCountry")?.toLowerCase().trim() || "";
      const isEmbassyActive = embassyStorage.getEmbassyStatus(targetCountry) === 'completed';

      let finalAgreements = data;
      if (!isEmbassyActive) {
         // Filter out player's nation if embassy/relations are severed
         finalAgreements = data.filter((item: any) => item.mitra.toLowerCase().trim() !== playerCountry);
      }
      
      setAgreements(finalAgreements);

      // Determine which ones are "BARU" based on news within the last 30 days
      const newsItems = newsStorage.getNews();
      const gameDate = getStoredGameDate();
      const newMap: Record<string, boolean> = {};

      finalAgreements.forEach((emb) => {
        const mitra = emb.mitra.toLowerCase();
        const target = targetCountry.toLowerCase();

        // Find if there's any recent news about this trade partner
        const hasRecentNews = newsItems.some((item: any) => {
          if (item.subject.toLowerCase().includes("perdagangan") || item.category === "trade") {
            const subjLower = item.subject.toLowerCase();
            // Checking if both countries are mentioned in the news subject
            if (subjLower.includes(target) && subjLower.includes(mitra)) {
              // Check date diff (within 30 days)
              try {
                const newsDate = parseFormattedDate(item.time);
                const diffTime = gameDate.getTime() - newsDate.getTime();
                const diffDays = diffTime / (1000 * 60 * 60 * 24);
                return diffDays >= 0 && diffDays <= 30;
              } catch (e) {
                return false;
              }
            }
          }
          return false;
        });

        if (hasRecentNews) {
          newMap[emb.mitra] = true;
        }
      });
      setNewPartnerMap(newMap);
      
      window.dispatchEvent(new CustomEvent('hide_strategy_modal'));
    }
    
    return () => {
      if (isOpen) {
        window.dispatchEvent(new CustomEvent('show_strategy_modal'));
      }
    };
  }, [isOpen, targetCountry, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] relative animate-in fade-in slide-in-from-bottom-4 duration-300 transition-all pointer-events-auto">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600"></div>
        
        {/* Fixed Header */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
              <Briefcase className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white italic uppercase tracking-tight">Mitra Perdagangan</h3>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">{targetCountry} — {agreements.length} Mitra Aktif</p>
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
          {agreements.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                <ShieldAlert className="h-8 w-8 text-zinc-600" />
              </div>
              <div>
                 <p className="text-sm font-black text-zinc-300 uppercase tracking-widest">Tidak Ada Mitra</p>
                 <p className="text-xs text-zinc-500 mt-1">Negara ini belum memiliki perjanjian dagang aktif.</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-3">
              {agreements.map((agreement, idx) => (
                <div key={idx} className={`rounded-xl p-4 border flex items-center justify-between transition-colors ${newPartnerMap[agreement.mitra] ? 'bg-orange-900/20 border-orange-500/40 hover:bg-orange-900/30' : 'bg-zinc-800/40 border-zinc-700/30 hover:bg-zinc-800/60 hover:border-zinc-700/50'}`}>
                  <div className="flex items-center gap-4">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${newPartnerMap[agreement.mitra] ? 'bg-emerald-500/20 border-emerald-500/30' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
                        <Handshake className="h-4 w-4 text-emerald-500" />
                     </div>
                     <div>
                        <p className="text-sm font-black text-zinc-200 uppercase tracking-tight">
                          {agreement.mitra}
                        </p>
                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{agreement.type}</p>
                     </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                     {newPartnerMap[agreement.mitra] && (
                        <span className="px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                           Baru
                        </span>
                     )}
                     <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                        agreement.status === "Aktif" 
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-zinc-800 text-zinc-500 border-zinc-700"
                     }`}>
                        {agreement.status}
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
