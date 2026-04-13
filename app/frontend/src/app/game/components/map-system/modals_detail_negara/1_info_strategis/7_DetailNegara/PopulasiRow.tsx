"use client"

import React from "react";
import { Users2, TrendingUp, TrendingDown } from "lucide-react";

interface PopulasiRowProps {
  total: number;
  delta: number;
}

export default function PopulasiRow({ total, delta }: PopulasiRowProps) {
  const isPositive = delta >= 0;
  
  return (
    <div className="flex items-center gap-3">
      <span className="text-zinc-200 tabular-nums">
        {total.toLocaleString('id-ID')}
      </span>
      <div className={`flex items-center gap-0.5 text-[10px] font-black italic px-2 py-0.5 rounded-full ${
        isPositive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
      }`}>
        {isPositive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
        <span>
          {isPositive ? '+' : ''}{delta.toLocaleString('id-ID')}
        </span>
      </div>
    </div>
  );
}
