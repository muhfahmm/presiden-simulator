"use client"

import { X, Shield, Star } from "lucide-react"
import { ideologies } from "@/app/database/data/ideologies"

import { IdeologyCard } from "./1_IdeologyCard";
import { useState, useEffect } from "react";
import { ideologyStorage } from "./ideologyStorage";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryData: any;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function IdeologiModal({ isOpen, onClose, countryData, activeMenu, setActiveMenu }: ModalProps) {
  const [currentIdeology, setCurrentIdeology] = useState(
    ideologyStorage.getCurrentIdeology(countryData?.ideology || "Demokrasi")
  );

  useEffect(() => {
    const handleUpdate = (event: any) => {
      setCurrentIdeology(event.detail.ideology);
    };

    window.addEventListener("ideology_updated", handleUpdate as any);
    return () => window.removeEventListener("ideology_updated", handleUpdate as any);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950/90 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-xl text-cyan-400">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Ideologi Negara</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5 font-sans">Fondasi Politik dan Haluan Bangsa</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
            >
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-10 bg-zinc-950/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-24">
            {ideologies.map((ideology) => (
              <IdeologyCard
                key={ideology}
                ideology={ideology}
                isActive={ideology === currentIdeology}
                countryData={countryData}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-6 bg-zinc-900/30 border-t border-zinc-900 flex items-center justify-between backdrop-blur-3xl relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">
              <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <span className="text-[10px] font-black uppercase tracking-widest">Status Politik</span>
            </div>
            <p className="text-xs text-zinc-500 font-medium italic tracking-tight font-sans">Kalkulasi stabilitas nasional berdasarkan keselarasan ideologi dan arah pembangunan.</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Haluan Negara</span>
              <span className="text-base font-black tracking-tighter italic text-cyan-400 uppercase">
                {currentIdeology}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
