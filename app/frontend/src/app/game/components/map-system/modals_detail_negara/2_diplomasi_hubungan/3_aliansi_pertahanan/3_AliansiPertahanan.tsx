"use client"

import React, { useState, useEffect } from "react";
import { Handshake, Shield, Swords, ArrowRight, Clock, AlertTriangle } from "lucide-react";
import { aliansiStorage } from "./logic/aliansiStorage";
import TandaTanganAliansi from "./TandaTanganAliansi";

interface AliansiPertahananProps {
  targetCountry: string;
}

export default function AliansiPertahanan({ targetCountry }: AliansiPertahananProps) {
  const [status, setStatus] = useState<string>("none");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [remainingDays, setRemainingDays] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      setStatus(aliansiStorage.getStatus(targetCountry));
      setRemainingDays(aliansiStorage.getRemainingDays(targetCountry));
    };

    update();
    window.addEventListener("aliansi_updated", update);
    return () => window.removeEventListener("aliansi_updated", update);
  }, [targetCountry]);

  const isActive = status === 'active';

  return (
    <div className="relative group">
      <div className={`p-6 rounded-[2rem] border transition-all duration-500 overflow-hidden ${
        isActive 
          ? 'bg-teal-500/5 border-teal-500/30 shadow-[0_0_40px_rgba(20,184,166,0.1)]' 
          : 'bg-zinc-900 shadow-xl border-zinc-800/80 hover:border-zinc-700'
      }`}>
        
        {/* Background Accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 -translate-y-12 translate-x-12 blur-3xl opacity-20 transition-colors duration-700 ${
          isActive ? 'bg-teal-400' : 'bg-zinc-500'
        }`} />

        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-5">
            <div className={`p-4 rounded-2xl border transition-all duration-500 ${
              isActive 
                ? 'bg-teal-500/20 border-teal-500/40 shadow-[0_0_30px_rgba(20,184,166,0.2)]' 
                : 'bg-zinc-800 border-zinc-700 group-hover:bg-zinc-700/50'
            }`}>
              <Swords className={`h-8 w-8 transition-colors duration-500 ${isActive ? 'text-teal-400' : 'text-zinc-500'}`} />
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-black text-white italic tracking-tighter uppercase whitespace-nowrap">
                  Aliansi Pertahanan
                </h3>
                {isActive && (
                  <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,1)]" />
                )}
              </div>
              
              <div className="flex items-center gap-3">
                <p className={`text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-teal-400' : 'text-zinc-500 opacity-60'}`}>
                  {isActive ? "SEKUTU MILITER" : "BELUM TERJALIN"}
                </p>
                {isActive && remainingDays !== null && (
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-teal-500/10 rounded-full border border-teal-500/20">
                    <Clock size={10} className="text-teal-400" />
                    <span className="text-[9px] font-bold text-teal-400 uppercase tracking-tight">{remainingDays} HARI LAGI</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className={`group/btn relative px-6 py-3 rounded-xl font-black text-[10px] tracking-[0.2em] uppercase transition-all flex items-center gap-3 active:scale-95 overflow-hidden ${
              isActive 
                ? 'bg-zinc-800/80 text-teal-400 border border-teal-500/20 hover:bg-zinc-800' 
                : 'bg-teal-600 text-white shadow-[0_10px_20px_rgba(20,184,166,0.25)] hover:bg-teal-500 hover:shadow-teal-500/30'
            }`}
          >
            <span className="relative z-10">{isActive ? "DETAIL ALIANSI" : "BENTUK ALIANSI"}</span>
            <ArrowRight size={14} className={`relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 ${isActive ? 'text-teal-500' : 'text-white'}`} />
            
            {!isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
            )}
          </button>
        </div>

        <p className="mt-4 text-[10px] text-zinc-500 font-bold uppercase tracking-widest opacity-40 italic">
          *Aliansi Pertahanan memungkinkan bantuan militer timbal balik jika terjadi konflik.
        </p>
      </div>

      <TandaTanganAliansi 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        targetCountry={targetCountry}
      />
    </div>
  );
}
