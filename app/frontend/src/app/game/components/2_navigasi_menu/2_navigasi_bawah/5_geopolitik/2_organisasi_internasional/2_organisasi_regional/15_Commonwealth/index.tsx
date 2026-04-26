"use client"

import { useState, useEffect } from "react";
import { Activity, Award, Briefcase, Coins, Globe, Info, Landmark, MapPin, Scale, Shield, TrendingUp, Users, Zap } from 'lucide-react';
import { unMembershipStorage } from "../../1_organisasi_PBB/logic/unMembershipStorage";

interface COMMONWEALTHProps {
  currentCash: number;
  currentDate: string;
  onUpdate: () => void;
}

export default function Commonwealth({ currentCash, currentDate, onUpdate }: COMMONWEALTHProps) {
  const userCountryName = (localStorage.getItem("selectedCountry") || "Indonesia").toLowerCase();
  const isEligible = unMembershipStorage.isEligibleForRegional("commonwealth", userCountryName);

  const handleJoin = () => {
    if (!isEligible) {
      alert("Permohonan Ditolak: Commonwealth hanya menerima negara-negara Persemakmuran (bekas wilayah jajahan/kekuasaan Inggris).");
      return;
    }

    unMembershipStorage.joinOrganization("commonwealth");
    onUpdate();
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600/10 to-zinc-900/40 border border-purple-500/10 rounded-[32px] p-8 relative overflow-hidden group">
        <div className="absolute -right-10 -top-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
          <Award size={240} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/20 rounded-2xl border border-purple-500/30">
              <Award className="text-purple-500" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">Commonwealth</h3>
              <p className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.2em]">Commonwealth</p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl font-medium">
            Negara Persemakmuran Inggris - Hubungan sejarah & politik.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 flex items-center gap-6">
          <div className="p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
            <TrendingUp size={24} />
          </div>
          <div>
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1 block">Dampak Strategis</span>
            <p className="text-lg font-black text-white italic">+25% Akses Pendidikan UK</p>
          </div>
        </div>
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 flex items-center gap-6">
          <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400">
            <Zap size={24} />
          </div>
          <div>
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1 block">Benefit Utama</span>
            <p className="text-lg font-black text-white italic">Kerja Sama Multilateral</p>
          </div>
        </div>
      </div>

      {/* Action Card */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8 flex flex-col items-center text-center gap-6">
        <div className="p-5 bg-purple-500/10 rounded-full border border-purple-500/20 text-purple-500 animate-pulse">
          <Award size={32} />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-black text-white uppercase italic tracking-tight">Ajukan Keanggotaan</h4>
          <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
            Bergabung dengan aliansi ini untuk memperkuat posisi geopolitik dan ekonomi nasional di kancah internasional.
          </p>
        </div>
        <button 
          onClick={handleJoin}
          disabled={!isEligible}
          className={`px-12 py-4 text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-full transition-all active:scale-95 cursor-pointer ${
            isEligible 
            ? "bg-purple-600 hover:bg-purple-500 shadow-[0_10px_30px_-5px_rgba(147,51,234,0.4)]"
            : "bg-red-500/20 text-red-500/50 border border-red-500/20 cursor-not-allowed shadow-none"
          }`}
        >
          {isEligible ? "Kirim Permohonan" : "Tidak Memenuhi Syarat"}
        </button>
      </div>
    </div>
  );
}
