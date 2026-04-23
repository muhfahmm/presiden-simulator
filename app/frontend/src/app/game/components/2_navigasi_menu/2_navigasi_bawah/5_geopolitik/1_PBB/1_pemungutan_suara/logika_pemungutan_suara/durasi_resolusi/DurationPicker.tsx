
"use client"

import { Clock } from "lucide-react";

export type ResolutionDuration = '6_bulan' | '9_bulan' | '1_tahun' | '3_tahun';

interface DurationPickerProps {
  selectedDuration: ResolutionDuration;
  onSelect: (duration: ResolutionDuration) => void;
}

export const durations: { id: ResolutionDuration, label: string }[] = [
  { id: '6_bulan', label: '6 BULAN' },
  { id: '9_bulan', label: '9 BULAN' },
  { id: '1_tahun', label: '1 TAHUN' },
  { id: '3_tahun', label: '3 TAHUN' },
];

export function DurationPicker({ selectedDuration, onSelect }: DurationPickerProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 px-1">
        <Clock className="h-3 w-3 text-cyan-500" />
        <span className="text-[9px] font-black text-cyan-500 uppercase tracking-widest">Durasi Penerapan</span>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {durations.map((dur) => {
          const isActive = selectedDuration === dur.id;
          return (
            <button
              key={dur.id}
              onClick={() => onSelect(dur.id)}
              className={`px-4 py-3 rounded-2xl border text-[10px] font-black transition-all cursor-pointer ${
                isActive
                  ? "bg-cyan-500/10 border-cyan-500/50 text-white shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                  : "bg-zinc-900/60 border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
              }`}
            >
              {dur.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
