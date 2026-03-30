"use client"

import { useState, useEffect } from "react";

interface MapCategorySelectorProps {
  mapMode: "default" | "sda" | "hubungan" | "trade";
  setMapMode: (mode: "default" | "sda" | "hubungan" | "trade") => void;
}

export default function MapCategorySelector({ mapMode, setMapMode }: MapCategorySelectorProps) {
  const [isTemporarilyHidden, setIsTemporarilyHidden] = useState(false);

  useEffect(() => {
    const handleHide = () => setIsTemporarilyHidden(true);
    const handleShow = () => setIsTemporarilyHidden(false);
    
    window.addEventListener('hide_strategy_modal', handleHide);
    window.addEventListener('show_strategy_modal', handleShow);
    
    return () => {
      window.removeEventListener('hide_strategy_modal', handleHide);
      window.removeEventListener('show_strategy_modal', handleShow);
    };
  }, []);

  if (isTemporarilyHidden) return null;

  return (
    <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex bg-zinc-900/80 backdrop-blur-md p-1 rounded-xl border border-zinc-800 shadow-xl gap-1">
      <button
        onClick={() => setMapMode("default")}
        className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${mapMode === "default" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
      >
        Peta Utama
      </button>
      <button
        onClick={() => setMapMode("sda")}
        className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${mapMode === "sda" ? "bg-zinc-800 text-emerald-400 shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
      >
        SDA
      </button>
      <button
        onClick={() => setMapMode("hubungan")}
        className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${mapMode === "hubungan" ? "bg-zinc-800 text-amber-400 shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
      >
        Hubungan
      </button>
      <button
        onClick={() => setMapMode("trade")}
        className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${mapMode === "trade" ? "bg-zinc-800 text-sky-400 shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
      >
        Perdagangan
      </button>
    </div>
  );
}
