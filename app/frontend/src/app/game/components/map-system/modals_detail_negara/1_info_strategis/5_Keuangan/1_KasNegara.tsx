"use client"

import React from "react";
import { Coins } from "lucide-react";

interface KasNegaraProps {
  anggaran: number;
}

export default function KasNegara({ anggaran }: KasNegaraProps) {
  return (
    <div className="flex items-center gap-1.5 text-amber-400 font-black italic">
      <Coins size={12} />
      <span>{anggaran.toLocaleString('id-ID')}</span>
    </div>
  );
}
