"use client"

import React from "react";
import { Landmark, Handshake, Shield, FileText, FlaskConical, Truck } from "lucide-react";
import ActionCard from "../shared/ActionCard";

export default function DiplomacyTab() {
  return (
    <div className="grid grid-cols-2 gap-3 max-h-[300px]">
      <ActionCard icon={<Landmark className="h-4 w-4" />} label="Kedutaan" bg="from-blue-900/30 to-zinc-900" />
      <ActionCard icon={<Handshake className="h-4 w-4" />} label="Pakta Non-Agresi" bg="from-indigo-900/30 to-zinc-900" />
      <ActionCard icon={<Shield className="h-4 w-4" />} label="Aliansi Pertahanan" bg="from-teal-900/30 to-zinc-900" />
      <ActionCard icon={<FileText className="h-4 w-4" />} label="Perjanjian Dagang" bg="from-amber-900/30 to-zinc-900" />
      <ActionCard icon={<FlaskConical className="h-4 w-4" />} label="Kontrak Penelitian" bg="from-cyan-900/30 to-zinc-900" />
      <ActionCard icon={<Truck className="h-4 w-4" />} label="Kirim Pasukan" bg="from-sky-900/30 to-zinc-900" />
    </div>
  );
}
