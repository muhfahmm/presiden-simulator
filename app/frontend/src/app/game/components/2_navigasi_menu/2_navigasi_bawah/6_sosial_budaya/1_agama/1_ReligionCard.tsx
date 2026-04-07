"use client"

import { useState, useEffect } from "react"
import { Info, Star } from "lucide-react"
import { allReligionLogic } from "./logic/index";
import { religionStorage } from "./religionStorage";
import { ReligionInfoOverlay } from "./3_ReligionInfoOverlay";
import { ReligionEffectDetail } from "./2_ReligionEffectDetail";
import { GantiAgamaModals } from "./4_GantiAgamaModals";
import { RELIGION_PRICES } from "./agama_prices";

const religionEffects: Record<string, { plus: string[]; minus: string[] }> = allReligionLogic.reduce((acc, curr) => ({
  ...acc,
  [curr.name]: curr.effects
}), {});

const icons: Record<string, any> = allReligionLogic.reduce((acc, curr) => ({
  ...acc,
  [curr.name]: curr.icon
}), {});

interface ReligionCardProps {
  religion: string;
  isActive: boolean;
  countryData: any;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export function ReligionCard({ religion, isActive, countryData, activeMenu, setActiveMenu }: ReligionCardProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [showEffectDetail, setShowEffectDetail] = useState(false);
  const [showGantiModal, setShowGantiModal] = useState(false);
  const [selectedEffect, setSelectedEffect] = useState("");
  const Icon = icons[religion] || Star;
  const effects = religionEffects[religion];

  // Sync state with URL
  useEffect(() => {
    if (activeMenu === `Menu:Agama:${religion}`) {
      setShowInfo(true);
      setShowEffectDetail(false);
    } else if (activeMenu.startsWith(`Menu:Agama:${religion}:`)) {
      setShowInfo(true);
      const subPart = activeMenu.split(":")[3]; // e.g. "islam_plus" or "islam_minus"
      if (subPart) {
        const isPlus = subPart.endsWith("_plus");
        const effectName = isPlus ? effects.plus[0] : effects.minus[0];
        if (effectName) {
           setSelectedEffect(effectName);
           setShowEffectDetail(true);
        }
      }
    } else if (showInfo && !activeMenu.startsWith(`Menu:Agama:${religion}`)) {
      if (!showEffectDetail) setShowInfo(false);
    }
  }, [activeMenu, religion, effects]);

  return (
    <div
      className={`relative p-6 rounded-3xl border transition-all duration-500 group overflow-hidden h-[240px] flex flex-col ${isActive
          ? "bg-amber-500/10 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/20"
          : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60"
        }`}
    >
      <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full transition-opacity duration-700 ${isActive ? "bg-amber-500/20 opacity-100" : "bg-white/5 opacity-0 group-hover:opacity-100"}`}></div>

      {/* Content */}
      <div className="flex flex-col gap-4 relative z-10 h-full">
        <div className="flex justify-between items-start">
          <div className={`p-4 rounded-2xl transition-all duration-500 ${isActive ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-110" : "bg-zinc-800 text-zinc-400 group-hover:text-white"}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setShowInfo(true);
                setActiveMenu(`Menu:Agama:${religion}`);
              }}
              className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all active:scale-90 cursor-pointer shadow-sm"
              title="Informasi Detail"
            >
              <Info className="h-4 w-4 text-zinc-400 group-hover:text-amber-500" />
            </button>
          </div>
        </div>

        <div className="space-y-1.5 mt-2">
          <h3 className={`text-xl font-black uppercase tracking-tight italic transition-colors ${isActive ? "text-amber-500" : "text-white"}`}>{religion}</h3>
          <p className="text-[11px] text-zinc-500 font-medium leading-tight max-w-[90%] font-sans">Sistem kepercayaan dan panduan moral masyarakat dalam bernegara.</p>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
           {!isActive ? (
             <div className="flex flex-col items-start gap-1">
               <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Biaya Konstitusi</span>
               <div className="flex items-center gap-3">
                 <span className="text-xs font-black text-zinc-400 tabular-nums">{(RELIGION_PRICES[religion] || 0).toLocaleString('id-ID')}</span>
                 <button 
                   onClick={() => setShowGantiModal(true)}
                   className="px-4 py-1.5 bg-amber-500/10 hover:bg-amber-500 border border-amber-500/20 hover:border-amber-500 text-amber-500 hover:text-black text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0)] hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                 >
                   Ganti
                 </button>
               </div>
             </div>
           ) : (
             <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Religi Konstitusional</span>
             </div>
           )}
        </div>
      </div>

      {/* Info Overlay (Inside Card) */}
      {showInfo && (
        <ReligionInfoOverlay
          religion={religion}
          effects={effects}
          onClose={() => {
            setShowInfo(false);
            setActiveMenu("Menu:Agama");
          }}
          onEffectClick={(eff: string) => {
            const isPlus = effects.plus.includes(eff);
            const typeSuffix = isPlus ? "plus" : "minus";
            setSelectedEffect(eff);
            setShowEffectDetail(true);
            setActiveMenu(`Menu:Agama:${religion}:${religion}_${typeSuffix}`);
          }}
        />
      )}

      {/* Effect Detail Placeholder Modal */}
      {showEffectDetail && (
        <ReligionEffectDetail 
          effectName={selectedEffect} 
          onClose={() => {
            setShowEffectDetail(false);
            // After detail, return to effects overview URL
            setActiveMenu(`Menu:Agama:${religion}`);
          }} 
        />
      )}

      {/* Ganti Agama Confirmation Modal */}
      {showGantiModal && (
        <GantiAgamaModals 
          religion={religion}
          cost={RELIGION_PRICES[religion]}
          onClose={() => setShowGantiModal(false)}
          onConfirm={() => {
            // Persist the religion change
            religionStorage.setReligion(religion);
            setShowGantiModal(false);
          }}
        />
      )}
    </div>
  );
}
