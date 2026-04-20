"use client"

import React from "react";
import { Scale } from "lucide-react";

interface IdeologyRowProps {
  ideology: string | undefined;
}

export default function IdeologyRow({ ideology }: IdeologyRowProps) {
  return (
    <div className="flex items-center gap-1 text-orange-400">
      <Scale size={12} /> 
      <span className="uppercase tracking-tighter font-black text-[10px]">
        {ideology || "Nasionalisme"}
      </span>
    </div>
  );
}
