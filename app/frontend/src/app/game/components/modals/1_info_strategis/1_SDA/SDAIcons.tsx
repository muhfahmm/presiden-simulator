"use client"

import { 
  Gem, Radiation, Flame, Droplet, Zap, Waves, Box, 
  BatteryCharging, Cpu, Magnet, Hammer, Square 
} from "lucide-react";

export const RESOURCE_ICONS: Record<string, { icon: any, color: string, label: string }> = {
  emas: { icon: Gem, color: "text-amber-400", label: "Emas" },
  uranium: { icon: Radiation, color: "text-lime-500", label: "Uranium" },
  batu_bara: { icon: Flame, color: "text-zinc-600", label: "Batu Bara" },
  minyak_bumi: { icon: Droplet, color: "text-sky-500", label: "Minyak Bumi" },
  gas_alam: { icon: Zap, color: "text-orange-500", label: "Gas Alam" },
  garam: { icon: Waves, color: "text-blue-300", label: "Garam" },
  nikel: { icon: Box, color: "text-slate-400", label: "Nikel" },
  litium: { icon: BatteryCharging, color: "text-yellow-400", label: "Litium" },
  tembaga: { icon: Cpu, color: "text-orange-700", label: "Tembaga" },
  aluminium: { icon: Square, color: "text-zinc-300", label: "Aluminium" },
  logam_tanah_jarang: { icon: Magnet, color: "text-cyan-400", label: "Logam Tanah Jarang" },
  bijih_besi: { icon: Hammer, color: "text-stone-500", label: "Bijih Besi" }
};
