"use client"

import React from "react";
import { X, Handshake, Shield, CheckCircle2, Swords, Zap, Star } from "lucide-react";

interface AliansiBerhasilProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
  duration: number;
}

export default function AliansiBerhasil({ isOpen, onClose, targetCountry, duration }: AliansiBerhasilProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-500">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="bg-zinc-900 border border-teal-500/30 rounded-[40px] w-full max-w-lg overflow-hidden shadow-[0_0_100px_rgba(20,184,166,0.2)] relative animate-in zoom-in-95 duration-300">
        
        {/* Particle/Star Decoration */}
        <div className="absolute top-10 left-10 text-teal-500/20 animate-bounce delay-700">
          <Star size={24} fill="currentColor" />
        </div>
        <div className="absolute bottom-10 right-10 text-teal-500/20 animate-bounce">
          <Star size={16} fill="currentColor" />
        </div>

        {/* Content Section */}
        <div className="p-10 flex flex-col items-center text-center">
          
          {/* Animated Icon Container */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-teal-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-[32px] flex items-center justify-center shadow-2xl shadow-teal-500/40 border border-teal-400/50 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <Swords className="h-12 w-12 text-white drop-shadow-lg" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-zinc-900 p-2 rounded-2xl border border-zinc-800 shadow-xl">
              <CheckCircle2 size={24} className="text-teal-400" />
            </div>
          </div>

          <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-2">
            ALIANSI TERJALIN!
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-[320px]">
             Penandatanganan pakta pertahanan dengan <span className="text-teal-400 font-black italic">{targetCountry}</span> telah disahkan secara internasional.
          </p>

          {/* Details Card */}
          <div className="w-full bg-zinc-950/60 rounded-3xl border border-zinc-800/80 p-6 space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-zinc-400">
                <span className="p-1.5 bg-zinc-900 rounded-lg border border-zinc-800">
                  <Handshake size={14} className="text-teal-500" />
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest">Status</span>
              </div>
              <span className="text-xs font-black text-teal-400 uppercase tracking-widest italic">AKTIF</span>
            </div>
            
            <div className="flex items-center justify-between border-t border-zinc-900 pt-4">
              <div className="flex items-center gap-3 text-zinc-400">
                <span className="p-1.5 bg-zinc-900 rounded-lg border border-zinc-800">
                  <Shield size={14} className="text-teal-500" />
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest">Durasi</span>
              </div>
              <span className="text-xs font-black text-zinc-100 uppercase tracking-widest italic">{duration} TAHUN</span>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={14} className="text-teal-400" />
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Manfaat Aktif:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Bantuan Pertahanan", "Berbagi Intelijen", "Latihan Bersama"].map((perk, i) => (
                  <span key={i} className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-[9px] font-black text-teal-400 uppercase tracking-tight">
                    {perk}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-black text-[10px] rounded-2xl transition-all shadow-[0_15px_30px_rgba(20,184,166,0.3)] hover:shadow-[0_20px_40px_rgba(20,184,166,0.4)] active:scale-95 uppercase tracking-[0.3em]"
          >
            Maju Menuju Kemenangan
          </button>
        </div>
      </div>
    </div>
  );
}
