"use client"

import React from "react";
import { Heart, Users, Coins, Shield, LogOut } from "lucide-react";
import { CountryData } from "@/app/select-country/data/types/_index";
import { HappinessBreakdown } from "@/app/game/components/2_navigasi_menu/navigasi_bawah/1_kepuasan";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { stabilityStorage } from "@/app/game/components/1_navbar/4_stabilitas";

// --- Sub-component: StatusBadge ---
interface StatusBadgeProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  delta?: number;
}

function StatusBadge({ icon, label, value, delta }: StatusBadgeProps) {
  const displayValue = typeof value === 'number' ? value.toLocaleString('id-ID') : value;
  
  return (
    <div className="flex items-center gap-2 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800 relative group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {icon}
      <div className="text-left leading-tight relative z-10">
        <p className="text-[10px] text-zinc-500 font-semibold uppercase">{label}</p>
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-black text-zinc-100 italic tracking-wide">
            {displayValue}
          </p>
          {delta !== undefined && delta !== 0 && (
            <span className={`text-[9px] font-black px-1 rounded-sm ${delta > 0 ? 'text-emerald-400 bg-emerald-500/10' : 'text-red-400 bg-red-500/10'}`}>
              {delta > 0 ? '+' : ''}{Math.round(delta).toLocaleString('id-ID')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Main Component: GameNavbar ---
interface GameNavbarProps {
  countryData: CountryData;
  happiness: HappinessBreakdown;
  budget: number;
  budgetDelta: number;
  stability: number;
  population: number;
  onLogout: () => void;
}

export default function GameNavbar({
  countryData,
  happiness,
  budget,
  budgetDelta,
  stability,
  population,
  onLogout
}: GameNavbarProps) {
  return (
    <header className="relative z-[300] bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80 px-8 py-4 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-4">
        {countryData && (
          <div className="flex items-center gap-2 bg-zinc-800/40 px-3 py-1.5 rounded-xl border border-zinc-700/50 shadow-sm backdrop-blur-md">
            <span className="text-base">{countryData.flag}</span>
            <span className="text-xs font-bold text-zinc-200 tracking-wide uppercase">
              {countryData.name_id}
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-6">
        <StatusBadge 
          icon={<Heart className="h-4 w-4 text-rose-500" />} 
          label="Kepuasan" 
          value={`${happiness.global.toFixed(1)}%`} 
        />
        <StatusBadge 
          icon={<Users className="h-4 w-4 text-blue-500" />} 
          label="Populasi" 
          value={population} 
        />
        <StatusBadge 
          icon={<Coins className="h-4 w-4 text-yellow-500" />} 
          label="Kas Negara" 
          value={`${Math.round(budget).toLocaleString('id-ID')}`} 
          delta={budgetDelta}
        />
        <StatusBadge 
          icon={<Shield className="h-4 w-4 text-green-500" />} 
          label="Stabilitas" 
          value={`${stability}%`} 
        />
        
        <button 
          onClick={onLogout}
          className="ml-4 p-2 rounded-lg bg-zinc-800/50 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition-all border border-zinc-700/50 group"
          title="Akhiri Sesi"
        >
          <LogOut className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        </button>
      </div>
    </header>
  );
}
