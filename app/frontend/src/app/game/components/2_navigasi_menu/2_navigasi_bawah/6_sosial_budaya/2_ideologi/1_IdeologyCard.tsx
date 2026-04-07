"use client"

import { useState, useEffect } from "react"
import { Info, Star } from "lucide-react"
import { allIdeologyLogic } from "./logic/index";
import { ideologyStorage } from "./ideologyStorage";
import { IdeologyInfoOverlay } from "./3_IdeologyInfoOverlay";
import { IdeologyEffectDetail } from "./2_IdeologyEffectDetail";
import { GantiIdeologiModals } from "./4_GantiIdeologiModals";
import { IDEOLOGY_PRICES } from "./ideology_prices";

const ideologyEffects: Record<string, { plus: string[]; minus: string[] }> = allIdeologyLogic.reduce((acc, curr) => ({
  ...acc,
  [curr.name]: curr.effects
}), {});

const icons: Record<string, any> = allIdeologyLogic.reduce((acc, curr) => ({
  ...acc,
  [curr.name]: curr.icon
}), {});

interface IdeologyCardProps {
  ideology: string;
  isActive: boolean;
  countryData: any;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export function IdeologyCard({ ideology, isActive, countryData, activeMenu, setActiveMenu }: IdeologyCardProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [showEffectDetail, setShowEffectDetail] = useState(false);
  const [showGantiModal, setShowGantiModal] = useState(false);
  const [selectedEffect, setSelectedEffect] = useState("");
  const Icon = icons[ideology] || Star;
  const effects = ideologyEffects[ideology];

  // Sync state with URL / Menu
  useEffect(() => {
    if (activeMenu === `Menu:Ideologi:${ideology}`) {
      setShowInfo(true);
      setShowEffectDetail(false);
    } else if (activeMenu && activeMenu.startsWith(`Menu:Ideologi:${ideology}:`)) {
      setShowInfo(true);
      const subPart = activeMenu.split(":")[3]; 
      if (subPart) {
        const isPlus = subPart.endsWith("_plus");
        const effectName = isPlus ? effects.plus[0] : effects.minus[0];
        if (effectName) {
           setSelectedEffect(effectName);
           setShowEffectDetail(true);
        }
      }
    } else if (showInfo && activeMenu && !activeMenu.startsWith(`Menu:Ideologi:${ideology}`)) {
      if (!showEffectDetail) setShowInfo(false);
    }
  }, [activeMenu, ideology, effects]);

  return (
    <div
      className={`relative p-6 rounded-3xl border transition-all duration-500 group overflow-hidden h-[240px] flex flex-col ${isActive
          ? "bg-cyan-500/10 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/20"
          : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60"
        }`}
    >
      <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full transition-opacity duration-700 ${isActive ? "bg-cyan-500/20 opacity-100" : "bg-white/5 opacity-0 group-hover:opacity-100"}`}></div>

      {/* Content */}
      <div className="flex flex-col gap-4 relative z-10 h-full">
        <div className="flex justify-between items-start">
          <div className={`p-4 rounded-2xl transition-all duration-500 ${isActive ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-110" : "bg-zinc-800 text-zinc-400 group-hover:text-white"}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setShowInfo(true);
                setActiveMenu(`Menu:Ideologi:${ideology}`);
              }}
              className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all active:scale-90 cursor-pointer shadow-sm"
              title="Informasi Detail"
            >
              <Info className="h-4 w-4 text-zinc-400 group-hover:text-cyan-400" />
            </button>
          </div>
        </div>

        <div className="space-y-1.5 mt-2">
          <h3 className={`text-xl font-black uppercase tracking-tight italic transition-colors ${isActive ? "text-cyan-400" : "text-white"}`}>{ideology}</h3>
          <p className="text-[11px] text-zinc-500 font-medium leading-tight max-w-[90%] font-sans uppercase tracking-[0.05em]">Haluan filosofi dan sistem pemerintahan negara dalam berbangsa.</p>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
           {!isActive ? (
             <div className="flex flex-col items-start gap-0.5">
               <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest leading-none">Biaya Transisi</span>
               <div className="flex items-center gap-3">
                 <span className="text-xs font-black text-zinc-400 tabular-nums">{(IDEOLOGY_PRICES[ideology] || 0).toLocaleString('id-ID')}</span>
                 <button 
                   onClick={() => setShowGantiModal(true)}
                   className="px-4 py-1.5 bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/20 hover:border-cyan-500 text-cyan-400 hover:text-black text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                 >
                   Ganti
                 </button>
               </div>
             </div>
           ) : (
             <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Ideologi Konstitusional</span>
             </div>
           )}
        </div>
      </div>

      {/* Info Overlay (Inside Card) */}
      {showInfo && (
        <IdeologyInfoOverlay
          ideology={ideology}
          effects={effects}
          onClose={() => {
            setShowInfo(false);
            setActiveMenu("Menu:Ideologi");
          }}
          onEffectClick={(eff: string) => {
            const isPlus = effects.plus.includes(eff);
            const typeSuffix = isPlus ? "plus" : "minus";
            setSelectedEffect(eff);
            setShowEffectDetail(true);
            setActiveMenu(`Menu:Ideologi:${ideology}:${ideology}_${typeSuffix}`);
          }}
        />
      )}

      {/* Effect Detail Placeholder Modal */}
      {showEffectDetail && (
        <IdeologyEffectDetail 
          effectName={selectedEffect} 
          onClose={() => {
            setShowEffectDetail(false);
            // After detail, return to effects overview URL
            setActiveMenu(`Menu:Ideologi:${ideology}`);
          }} 
        />
      )}

      {/* Ganti Ideologi Confirmation Modal */}
      {showGantiModal && (
        <GantiIdeologiModals 
          ideology={ideology}
          cost={IDEOLOGY_PRICES[ideology]}
          onClose={() => setShowGantiModal(false)}
          onConfirm={() => {
            // Persist the ideology change
            ideologyStorage.setIdeology(ideology);
            setShowGantiModal(false);
          }}
        />
      )}
    </div>
  );
}
