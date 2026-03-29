"use client"

import React from "react";
import { Swords, Eye, Bomb, Flame, Zap, Shield } from "lucide-react";
import ActionCard from "../shared/ActionCard";

export default function MilitaryTab() {
  return (
    <div className="grid grid-cols-2 gap-3 max-h-[300px]">
      <ActionCard icon={<Swords className="h-4 w-4" />} label="Serang Negara" bg="from-red-900/30 to-zinc-900" />
      <ActionCard icon={<Eye className="h-4 w-4" />} label="Spionase" bg="from-slate-900/30 to-zinc-900" />
      <ActionCard icon={<Bomb className="h-4 w-4" />} label="Sabotase" bg="from-orange-900/30 to-zinc-900" />
      <ActionCard icon={<Flame className="h-4 w-4" />} label="Perang Nuklir" bg="from-rose-900/30 to-zinc-900" />
      <ActionCard icon={<Zap className="h-4 w-4" />} label="Kudeta" bg="from-purple-900/30 to-zinc-900" />
      <ActionCard icon={<Shield className="h-4 w-4" />} label="Hina" bg="from-stone-900/30 to-zinc-900" />
    </div>
  );
}
