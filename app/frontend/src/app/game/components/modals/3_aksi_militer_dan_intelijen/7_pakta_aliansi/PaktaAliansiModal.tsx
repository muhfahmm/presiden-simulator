"use client"

import React, { useEffect, useState } from "react";
import { Shield, X, Handshake, ShieldAlert, ChevronRight } from "lucide-react";
import { getInitialAgreements } from "@/app/database/data/database_mitra_perdagangan/agreementsRegistry";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { nonAggressionStorage } from "../../2_diplomasi_hubungan/2_pakta_non_agresi/logic/nonAggressionStorage";
import { aliansiStorage } from "../../2_diplomasi_hubungan/3_aliansi_pertahanan/logic/aliansiStorage";

interface PaktaAliansiModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
  mode: 'pakta' | 'aliansi';
}


/**
 * Parse news subjects:
 * 1. "{A} dan {B} Menandatangani Pakta Kerja Sama"
 * 2. "{A} dan {B} Perkuat Aliansi Strategis"
 */
function parseAgreementNews(subject: string): { type: "Pakta" | "Aliansi", countries: [string, string] } | null {
  const pactRegex = /(.+?) dan (.+?) Menandatangani Pakta Kerja Sama/i;
  const allianceRegex = /(.+?) dan (.+?) Perkuat Aliansi Strategis/i;

  const pactMatch = subject.match(pactRegex);
  if (pactMatch) return { type: "Pakta", countries: [pactMatch[1].trim(), pactMatch[2].trim()] };

  const allianceMatch = subject.match(allianceRegex);
  if (allianceMatch) return { type: "Aliansi", countries: [allianceMatch[1].trim(), allianceMatch[2].trim()] };

  return null;
}

function parseNewsDate(dateStr: string): Date | null {
  const ddmmyyyy = dateStr.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (ddmmyyyy) return new Date(Date.UTC(+ddmmyyyy[3], +ddmmyyyy[2] - 1, +ddmmyyyy[1]));
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? null : parsed;
}

function isWithin30Days(newsTimeStr: string, gameDate: Date): boolean {
  const newsDate = parseNewsDate(newsTimeStr);
  if (!newsDate) return false;
  const diffDays = (gameDate.getTime() - newsDate.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= 30;
}

export default function PaktaAliansiModal({ isOpen, onClose, targetCountry, mode }: PaktaAliansiModalProps) {
  const [partners, setPartners] = useState<any[]>([]);
  const [newMap, setNewMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isOpen && targetCountry) {
      const targetLower = targetCountry.toLowerCase().trim();
      const gameDate = getStoredGameDate();
      const newsItems = newsStorage.getNews();
      
      const foundPartners = new Map<string, { type: string, status: string, isNew: boolean }>();

      // 1. Check Player's agreements with Target Country
      if (mode === 'pakta') {
        const hasPact = nonAggressionStorage.getStatus(targetCountry) === 'active';
        if (hasPact) {
          const playerCountry = localStorage.getItem("selectedCountry") || "Indonesia";
          foundPartners.set(playerCountry.toLowerCase(), { type: "Pakta Non-Agresi", status: "Aktif", isNew: false });
        }
      } else {
        const hasAlliance = aliansiStorage.getStatus(targetCountry) === 'active';
        if (hasAlliance) {
          const playerCountry = localStorage.getItem("selectedCountry") || "Indonesia";
          foundPartners.set(playerCountry.toLowerCase(), { type: "Aliansi Pertahanan", status: "Aktif", isNew: false });
        }
      }

      // 2. Scan News for recent AI-AI Pacts and Alliances
      newsItems.forEach((item: any) => {
        if (item.category !== "diplomacy") return;
        
        const agreement = parseAgreementNews(item.subject);
        if (!agreement) return;

        // Strict mode filtering
        if (mode === 'pakta' && agreement.type !== 'Pakta') return;
        if (mode === 'aliansi' && agreement.type !== 'Aliansi') return;

        const [cA, cB] = agreement.countries;
        const aL = cA.toLowerCase().trim();
        const bL = cB.toLowerCase().trim();

        let other: string | null = null;
        if (aL === targetLower) other = cB;
        else if (bL === targetLower) other = cA;

        if (other && isWithin30Days(item.time, gameDate)) {
          foundPartners.set(other.toLowerCase().trim(), {
            type: agreement.type === "Pakta" ? "Pakta Non-Agresi" : "Aliansi Pertahanan",
            status: "Aktif",
            isNew: true
          });
        }
      });

      // Convert Map to Array
      const finalPartners = Array.from(foundPartners.entries()).map(([lowName, data]) => ({
        name: lowName,
        ...data
      })).sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));

      // Resolve proper casing (from news or just capitalize)
      const merged = finalPartners.map(p => {
        // Try to find the original casing from news items
        const newsMatch = newsItems.find(n => n.subject.toLowerCase().includes(p.name));
        let displayName = p.name;
        if (newsMatch) {
          const regex = new RegExp(p.name, 'i');
          const match = newsMatch.subject.match(regex);
          if (match) displayName = match[0];
        } else {
          displayName = p.name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
        return { ...p, name: displayName };
      });

      setPartners(merged);
      const nMap: Record<string, boolean> = {};
      merged.forEach(p => { if (p.isNew) nMap[p.name] = true; });
      setNewMap(nMap);

      window.dispatchEvent(new CustomEvent('hide_strategy_modal'));
    }

    return () => {
      if (isOpen) {
        window.dispatchEvent(new CustomEvent('show_strategy_modal'));
      }
    };
  }, [isOpen, targetCountry, mode]);

  if (!isOpen) return null;

  const config = {
    title: mode === 'pakta' ? "Daftar Pakta Non-Agresi" : "Daftar Aliansi Pertahanan",
    icon: mode === 'pakta' ? <Handshake className="h-5 w-5 text-red-500" /> : <Shield className="h-5 w-5 text-rose-500" />,
    accent: mode === 'pakta' ? "from-red-500 via-rose-500 to-red-600" : "from-rose-500 via-pink-500 to-rose-600",
    bgIcon: mode === 'pakta' ? "bg-red-500/10" : "bg-rose-500/10",
    borderIcon: mode === 'pakta' ? "border-red-500/20" : "border-rose-500/20",
    shadowIcon: mode === 'pakta' ? "shadow-[0_0_15px_rgba(239,68,68,0.1)]" : "shadow-[0_0_15px_rgba(244,63,94,0.1)]"
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] relative animate-in fade-in slide-in-from-bottom-4 duration-300 transition-all pointer-events-auto">
        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${config.accent}`}></div>
        
        {/* Fixed Header */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${config.bgIcon} rounded-xl flex items-center justify-center border ${config.borderIcon} ${config.shadowIcon}`}>
              {config.icon}
            </div>
            <div>
              <h3 className="text-sm font-black text-white italic uppercase tracking-tight">{config.title}</h3>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">{targetCountry} — {partners.length} Mitra Aktif</p>
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
          {partners.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                <ShieldAlert className="h-8 w-8 text-zinc-600" />
              </div>
              <div>
                 <p className="text-sm font-black text-zinc-300 uppercase tracking-widest">Tidak Ada Mitra</p>
                 <p className="text-xs text-zinc-500 mt-1">Negara ini belum memiliki {mode === 'pakta' ? 'pakta non-agresi' : 'aliansi pertahanan'} aktif.</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-3">
              {partners.map((partner, idx) => (
                <div key={idx} className={`rounded-xl p-4 border flex items-center justify-between transition-colors ${partner.isNew ? 'bg-red-900/20 border-red-500/40 hover:bg-red-900/30' : 'bg-zinc-800/40 border-zinc-700/30 hover:bg-zinc-800/60 hover:border-zinc-700/50'}`}>
                  <div className="flex items-center gap-4">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${partner.isNew ? 'bg-red-500/20 border-red-500/30' : 'bg-red-500/10 border-red-500/20'}`}>
                        {mode === 'pakta' ? <Handshake className="h-4 w-4 text-red-400" /> : <Shield className="h-4 w-4 text-rose-400" />}
                     </div>
                     <div>
                        <p className="text-sm font-black text-zinc-200 uppercase tracking-tight flex items-center gap-2">
                          {partner.name}
                          {partner.isNew && (
                            <span className="px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse">
                              Baru
                            </span>
                          )}
                        </p>
                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{partner.type}</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${mode === 'aliansi' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                        Aktif
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
              Kembali ke Menu Militer
           </button>
        </div>
      </div>
    </div>
  );
}

