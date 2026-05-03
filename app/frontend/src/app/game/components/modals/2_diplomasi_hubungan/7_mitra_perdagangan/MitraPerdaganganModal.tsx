"use client"

import React, { useEffect, useState } from "react";
import { Briefcase, X, Handshake, ShieldAlert } from "lucide-react";
import { getInitialAgreements } from "@/app/database/data/database_mitra_perdagangan/agreementsRegistry";
import { embassyStorage } from "../1_kedutaan/logic/embassyStorage";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { getStoredGameDate, parseFormattedDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { regionalMembershipRouter } from "../../../2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/2_organisasi_regional/logic/router/RegionalMembershipRouter";

interface MitraPerdaganganModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
}

/**
 * Parse the Go-generated subject:
 *   "Tawaran hubungan dagang negara {A} diterima oleh negara {B}"
 * Returns [countryA, countryB] or null if pattern doesn't match.
 */
function parseTradeNewsSubject(subject: string): [string, string] | null {
  const regex = /tawaran hubungan dagang negara (.+?) diterima oleh negara (.+)/i;
  const match = subject.match(regex);
  if (match) return [match[1].trim(), match[2].trim()];
  return null;
}

/**
 * Parse a date string that could be in "DD-MM-YYYY" or "02 Jan 2006" format.
 */
function parseNewsDate(dateStr: string): Date | null {
  // Try DD-MM-YYYY first
  const ddmmyyyy = dateStr.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (ddmmyyyy) {
    return new Date(Date.UTC(+ddmmyyyy[3], +ddmmyyyy[2] - 1, +ddmmyyyy[1]));
  }
  // Try "02 Jan 2006" or "02 May 2026" (Go's date.Format("02 Jan 2006"))
  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) return parsed;
  return null;
}

/**
 * Check if newsDate is within 30 days of gameDate.
 */
function isWithin30Days(newsTimeStr: string, gameDate: Date): boolean {
  const newsDate = parseNewsDate(newsTimeStr);
  if (!newsDate) return false;
  const diffMs = gameDate.getTime() - newsDate.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= 30;
}

export default function MitraPerdaganganModal({ isOpen, onClose, targetCountry }: MitraPerdaganganModalProps) {
  const [agreements, setAgreements] = useState<any[]>([]);
  const [newPartnerMap, setNewPartnerMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isOpen && targetCountry) {
      // 1. Load static embassy list from trade agreements database
      const data = getInitialAgreements(targetCountry, targetCountry);
      const playerCountry = localStorage.getItem("selectedCountry")?.toLowerCase().trim() || "";
      const isEmbassyActive = embassyStorage.getEmbassyStatus(targetCountry) === 'completed';

      let activeAgreements = data;
      if (!isEmbassyActive) {
         // Filter out player's nation if embassy/relations are severed
         activeAgreements = data.filter((item: any) => item.mitra.toLowerCase().trim() !== playerCountry);
      }

      // 2. Scan ALL news for trade agreement involving this country
      const newsItems = newsStorage.getNews();
      const gameDate = getStoredGameDate();
      const targetLower = targetCountry.toLowerCase().trim();

      // Build a set of existing partner names (lowercase) for dedup
      const existingPartners = new Set(
        activeAgreements.map((e: any) => e.mitra.toLowerCase().trim())
      );

      const newMap: Record<string, boolean> = {};
      const newsAddedEntries: any[] = [];

      newsItems.forEach((item: any) => {
        // Trade agreements can be in 'trade' or 'diplomacy' category depending on implementation
        if (item.category !== "trade" && item.category !== "diplomacy") return;
        
        const parsed = parseTradeNewsSubject(item.subject);
        if (!parsed) return;

        const [countryA, countryB] = parsed;
        const aLower = countryA.toLowerCase().trim();
        const bLower = countryB.toLowerCase().trim();

        // Check if this news involves our target country
        let otherCountryName: string | null = null;
        if (aLower === targetLower) {
          otherCountryName = countryB;
        } else if (bLower === targetLower) {
          otherCountryName = countryA;
        }

        if (!otherCountryName) return;

        // Check if this news is within 30 days
        if (!isWithin30Days(item.time, gameDate)) return;

        const otherLower = otherCountryName.toLowerCase().trim();

        if (existingPartners.has(otherLower)) {
          // Already in static list — just mark as BARU
          const existing = activeAgreements.find(
            (e: any) => e.mitra.toLowerCase().trim() === otherLower
          );
          if (existing) {
            newMap[existing.mitra] = true;
          }
        } else {
          // NEW entry not in static database — inject it
          if (!existingPartners.has(otherLower)) {
            existingPartners.add(otherLower);
            newsAddedEntries.push({
              mitra: otherCountryName,
              type: "Perdagangan",
              status: "Aktif",
            });
            newMap[otherCountryName] = true;
          }
        }
      });

      // 3. Get Regional Trade Partners (from organizations)
      const regionalPartners = regionalMembershipRouter.getRegionalTradePartners(targetCountry);
      
      // Build a set of current mitra names to avoid duplicates if they exist in both bilateral and regional
      const finalPartnerSet = new Set(activeAgreements.map((e: any) => e.mitra.toLowerCase().trim()));
      
      // Filter out regional partners that are already in the bilateral list
      const uniqueRegionalPartners = regionalPartners.filter(p => !finalPartnerSet.has(p.mitra.toLowerCase().trim()));

      // 4. Merge: news-added entries go to the TOP, then bilateral, then regional
      const merged = [
        ...newsAddedEntries.map(e => ({ ...e, source: 'Bilateral' })), 
        ...activeAgreements.map(e => ({ ...e, source: 'Bilateral' })),
        ...uniqueRegionalPartners
      ];
      setAgreements(merged);
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
                        <div className="flex items-center gap-2">
                           <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{agreement.type}</p>
                           {agreement.source && (
                              <>
                                 <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                 <p className="text-[9px] font-black text-orange-500/70 uppercase tracking-widest">{agreement.source}</p>
                              </>
                           )}
                        </div>
                     </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                     {newPartnerMap[agreement.mitra] && (
                        <span className="px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse">
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
