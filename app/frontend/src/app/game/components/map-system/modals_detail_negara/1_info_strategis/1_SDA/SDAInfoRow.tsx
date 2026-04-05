"use client"

import React from "react";
import { RESOURCE_ICONS } from "./SDAIcons";
import { SektorEkstraksi } from "@/app/database/data/semua_fitur_negara";

interface SDAInfoRowProps {
  sektor_ekstraksi: SektorEkstraksi | undefined;
}

export default function SDAInfoRow({ sektor_ekstraksi }: SDAInfoRowProps) {
  if (!sektor_ekstraksi) return null;

  return (
    <div className="flex gap-2.5 flex-wrap justify-end max-w-[150px]">
      {Object.entries(sektor_ekstraksi).map(([key, val]) => {
        const config = RESOURCE_ICONS[key];
        if (config && Number(val) > 0) {
          return (
            <div key={key} className="flex items-center gap-1 group relative cursor-help">
              <config.icon size={13} className={`${config.color} transition-all group-hover:scale-125`} />
              {/* Hover Tooltip - Tulisan Kebawah */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-zinc-950 border border-zinc-800 rounded-md text-[9px] font-black text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all z-[200] pointer-events-none shadow-2xl uppercase tracking-widest scale-75 group-hover:scale-100 origin-top">
                {config.label}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
