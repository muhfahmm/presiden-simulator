"use client"

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { pbbImpactLogic } from "@/app/game/utils/pbbImpactLogic";

interface PenghasilanHarianProps {
  dailyDelta: number;
  countryName?: string;
}

export default function PenghasilanHarian({ dailyDelta, countryName }: PenghasilanHarianProps) {
  const isPositive = dailyDelta >= 0;
  
  // Calculate PBB Impact
  const multipliers = countryName ? pbbImpactLogic.getCountryMultipliers(countryName) : pbbImpactLogic.getDefaults();
  const statusColor = pbbImpactLogic.getStatusColor(multipliers.impactLevel, isPositive ? 'text-emerald-400' : 'text-rose-400');

  return (
    <div className={`flex items-center gap-1.5 font-black italic transition-colors duration-500 ${statusColor}`}>
      {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
      <span className="drop-shadow-sm">
        {isPositive ? '+' : ''}{Math.round(dailyDelta * (multipliers.tax || 1)).toLocaleString('id-ID')}
      </span>
      {multipliers.impactLevel !== 'clear' && (
        <span className="text-[8px] animate-pulse ml-0.5 opacity-80 uppercase tracking-tighter">
          ({multipliers.impactLevel})
        </span>
      )}
    </div>
  );
}
