"use client"

import React, { useState, useEffect } from 'react';
import { ShieldAlert, X, TrendingDown, Zap } from 'lucide-react';
import { countries } from "@/app/database/data/negara/benua/index";
import { unSecurityCouncilStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";

interface AlertDetail {
  countryId: string;
  newScore: number;
  status: string;
  color: string;
}

export default function RelationAlertToast() {
  const [activeAlert, setActiveAlert] = useState<AlertDetail | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isUNSC, setIsUNSC] = useState(false);

  useEffect(() => {
    const handleAlert = (event: any) => {
      const detail = event.detail;
      setActiveAlert(detail);
      setIsExiting(false);

      // Check if the target is a UNSC member for extra visual weight
      const unscData = unSecurityCouncilStorage.getData();
      const isMember = unscData?.members?.some((m: any) => 
        m.name.toLowerCase() === detail.countryId.toLowerCase()
      );
      setIsUNSC(!!isMember);
      
      // Auto dismiss after 7 seconds for diplomatic alerts (they are important)
      const timer = setTimeout(() => {
        handleDismiss();
      }, 7000);
      
      return () => clearTimeout(timer);
    };

    window.addEventListener('relation_alert', handleAlert);
    return () => window.removeEventListener('relation_alert', handleAlert);
  }, []);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setActiveAlert(null);
      setIsExiting(false);
    }, 500);
  };

  if (!activeAlert) return null;

  const country = countries.find(c => c.name_id.toLowerCase() === activeAlert.countryId.toLowerCase());
  const displayName = country ? country.name_en : activeAlert.countryId;

  return (
    <>
      <style>{`
        @keyframes alertSlideIn {
          from { transform: translateX(120%) scale(0.9); opacity: 0; }
          to { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes alertSlideOut {
          from { transform: translateX(0) scale(1); opacity: 1; }
          to { transform: translateX(120%) scale(0.9); opacity: 0; }
        }
        .animate-alert-in {
          animation: alertSlideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-alert-out {
          animation: alertSlideOut 0.5s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }
        .red-glow {
          box-shadow: 0 0 30px rgba(220, 38, 38, 0.2), inset 0 0 15px rgba(220, 38, 38, 0.1);
        }
      `}</style>
      
      <div className={`fixed top-24 right-8 z-[2000] max-w-sm w-full ${isExiting ? 'animate-alert-out' : 'animate-alert-in'}`}>
        <div className="bg-zinc-950/90 backdrop-blur-2xl border border-red-500/40 rounded-3xl p-5 red-glow flex gap-5 items-start relative overflow-hidden group">
          {/* Danger Accent Line */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-600 via-red-500 to-transparent"></div>
          
          {/* Pulsing Alert Icon */}
          <div className="relative shrink-0">
             <div className="absolute inset-0 bg-red-600 rounded-2xl blur-lg opacity-40 animate-pulse"></div>
             <div className="relative p-3.5 bg-red-600/20 text-red-500 rounded-2xl border border-red-500/30">
               <ShieldAlert className="h-6 w-6" />
             </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] leading-none">Peringatan Diplomatik</span>
                {isUNSC && (
                  <div className="flex items-center gap-1 px-1.5 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded text-[8px] font-black text-blue-400 uppercase">
                    <Zap size={8} /> UNSC
                  </div>
                )}
              </div>
              <button 
                onClick={handleDismiss}
                className="p-1 rounded-lg hover:bg-white/10 text-zinc-600 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl shrink-0">{country?.flag || '🏳️'}</span>
              <h4 className="text-lg font-black text-white tracking-tight uppercase truncate">
                {displayName}
              </h4>
            </div>

            <div className="flex items-center gap-2 mt-3 p-3 bg-red-950/20 rounded-2xl border border-red-500/10">
              <TrendingDown className="h-4 w-4 text-red-500" />
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none mb-1">Status Baru</span>
                <span className="text-xs font-black text-red-400 uppercase tracking-wider leading-none">
                  {activeAlert.status} ({activeAlert.newScore})
                </span>
              </div>
            </div>

            <p className="text-[9px] text-zinc-500 mt-4 font-black uppercase tracking-[0.15em] opacity-60">
              Lihat "Direktori Bilateral" untuk detail
            </p>
          </div>

          {/* Decorative Corner */}
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-red-600/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
        </div>
      </div>
    </>
  );
}
