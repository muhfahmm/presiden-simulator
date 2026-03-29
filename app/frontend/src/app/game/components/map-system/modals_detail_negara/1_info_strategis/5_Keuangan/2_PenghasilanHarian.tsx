"use client"

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PenghasilanHarianProps {
  dailyDelta: number;
}

export default function PenghasilanHarian({ dailyDelta }: PenghasilanHarianProps) {
  const isPositive = dailyDelta >= 0;

  return (
    <div className={`flex items-center gap-1.5 font-black italic ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
      {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
      <span>{isPositive ? '+' : ''}{Math.round(dailyDelta).toLocaleString('id-ID')}</span>
    </div>
  );
}
