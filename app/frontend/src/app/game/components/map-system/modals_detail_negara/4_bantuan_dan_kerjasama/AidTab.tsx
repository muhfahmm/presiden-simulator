"use client"

import React from "react";
import { Shield, Gift, Heart, AlertTriangle, Lightbulb } from "lucide-react";
import ActionCard from "../shared/ActionCard";

export default function AidTab() {
  return (
    <div className="grid grid-cols-2 gap-3 max-h-[300px]">
      <ActionCard icon={<Shield className="h-4 w-4" />} label="Beri Tentara" bg="from-green-900/30 to-zinc-900" />
      <ActionCard icon={<Gift className="h-4 w-4" />} label="Kirim Hadiah" bg="from-pink-900/30 to-zinc-900" />
      <ActionCard icon={<Heart className="h-4 w-4" />} label="Tingkatkan Hubungan" bg="from-red-900/30 to-zinc-900" />
      <ActionCard icon={<Shield className="h-4 w-4" />} label="Dukung Kedaulatan" bg="from-sky-900/30 to-zinc-900" />
      <ActionCard icon={<AlertTriangle className="h-4 w-4" />} label="Minta Bantuan" bg="from-orange-900/30 to-zinc-900" />
      <ActionCard icon={<Lightbulb className="h-4 w-4" />} label="Tanamkan Ideologi" bg="from-violet-900/30 to-zinc-900" />
    </div>
  );
}
