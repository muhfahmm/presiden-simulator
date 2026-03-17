"use client"

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle, Play, ArrowLeft, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import WorldMapCanvas from "@/components/WorldMapCanvas";

export default function SelectCountry() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("Indonesia");
  const [countries, setCountries] = useState<any[]>([]);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    fetch("/country_centers.json")
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        if (data.length > 0) setSelectedCountry(data[0].name_en);
      })
      .catch(err => console.error("Failed to load countries", err));
  }, []);

  // Auto-scroll selected item into view
  useEffect(() => {
    if (selectedCountry && buttonRefs.current[selectedCountry]) {
      buttonRefs.current[selectedCountry]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [selectedCountry]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = 81; // 65px button width + 16px gap-4
      const scrollAmount = itemWidth * 10;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const currentData = countries.find(c => c.name_en === selectedCountry) || {
    name_id: "Memuat...", flag: "🏳️", pop: "---", budget: "---", religion: "---", ideology: "---"
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-950 text-white font-sans relative overflow-hidden select-none">
      
      {/* 1. TOP STATS BAR */}
      <header className="bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 px-6 py-2 flex items-center justify-between z-20 text-xs text-zinc-300">
        <div className="flex items-center gap-6">
          <button className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition cursor-pointer">
            <HelpCircle className="h-3.5 w-3.5 text-teal-400" />
          </button>
          
          <div className="flex items-center gap-4">
            <StatItem label="Populasi" value={currentData.pop} icon="👥" />
            <StatItem label="Kas Negara" value={currentData.budget} icon="💰" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <StatItem label="Agama Mayoritas" value={currentData.religion} icon="☪️" />
          <StatItem label="Ideologi" value={currentData.ideology} icon="⚖️" />
        </div>

        {/* Selected Country Flag Overlay */}
        <div className="flex items-center gap-2 bg-zinc-800/80 px-4 py-1.5 rounded-lg border border-zinc-700">
          <span className="text-xl">{currentData.flag}</span>
        </div>
      </header>

      {/* 2. MAIN MAP DISPLAY area with Zoom/Pan */}
      <main className="flex-1 relative w-full h-full z-10 overflow-hidden">
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={8}
          centerOnInit={true}
          limitToBounds={true}
        >
          <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full flex items-center justify-center">
            {/* Background Map Container */}
            <div className="relative aspect-[2/1] min-w-[1200px] h-full flex items-center justify-center">
              <WorldMapCanvas selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
              
              {/* Ambient Darkened Vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

            </div>
          </TransformComponent>
        </TransformWrapper>

        {/* Floating Resource inventory panel */}
        <div className="absolute top-4 right-4 bg-zinc-900/70 backdrop-blur-md border border-zinc-700/60 p-2 px-4 rounded-xl flex items-center gap-3 text-xs z-20">
          <span className="text-zinc-400">Simpanan Sumber Daya:</span>
          <div className="flex items-center gap-2 text-md font-bold">
            🪵 🧱 🪙 🛢️ 🥩
          </div>
        </div>
      </main>

      {/* 3. FOOTER CAROUSEL & CONTROLS */}
      <footer className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex items-end justify-between z-20">
        <div className="flex flex-col gap-3">
          {/* Filter Bar */}
          <button className="flex items-center gap-2 bg-gradient-to-r from-teal-900/40 to-emerald-900/40 border border-teal-800/40 px-3 py-1.5 rounded-xl text-xs font-semibold text-teal-300 hover:from-teal-800/60 transition cursor-pointer w-fit">
            <Filter className="h-3.5 w-3.5" />
            Filter
          </button>
        </div>

        {/* Carousel with Chevrons (Centered absolutely) */}
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex items-center gap-2 w-full max-w-xl z-30">
          <button 
            onClick={() => scrollByAmount('left')}
            className="p-1 px-2 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-zinc-400 hover:bg-zinc-800 hover:text-white transition cursor-pointer active:scale-95"
          >
            <ChevronLeft size={16} />
          </button>

          <div ref={scrollRef} className="flex flex-1 gap-6 overflow-x-auto pt-10 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {countries.map((c, i) => (
              <button 
                key={i} 
                ref={el => { buttonRefs.current[c.name_en] = el; }}
                onClick={() => setSelectedCountry(c.name_en)}
                className={`relative flex flex-col items-center gap-1 p-2 rounded-xl border transition-all cursor-pointer min-w-[95px] h-[80px] justify-center ${
                  selectedCountry === c.name_en 
                    ? 'bg-amber-500/10 border-amber-500 shadow-md shadow-amber-500/20' 
                    : 'bg-zinc-900/60 border-zinc-800 hover:bg-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {selectedCountry === c.name_en && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-bold text-[10px] px-2 py-1 rounded-md shadow-lg font-sans whitespace-nowrap z-30">
                    {c.name_id}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-amber-500" />
                  </div>
                )}
                <span className="text-xl">{c.flag}</span>
                <span className="text-[9px] font-bold text-zinc-300 text-center line-clamp-2 mt-1 px-1">
                  {c.name_id}
                </span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollByAmount('right')}
            className="p-1 px-2 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-zinc-400 hover:bg-zinc-800 hover:text-white transition cursor-pointer active:scale-95"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Action Buttons Right */}
        <div className="flex gap-4">
          <button 
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 font-bold hover:bg-zinc-800 hover:border-zinc-700 transition cursor-pointer active:scale-95 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </button>

          <button 
            onClick={() => router.push("/game")}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 font-bold hover:from-emerald-500 hover:to-teal-500 transition shadow-lg hover:shadow-emerald-500/20 cursor-pointer active:scale-95 text-sm"
          >
            <Play className="h-4 w-4" />
            Mulai
          </button>
        </div>
      </footer>
    </div>
  );
}

function StatItem({ icon, label, value }: { icon: string, label: string, value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">{icon}</span>
      <div className="flex flex-col">
        <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">{label}</span>
        <span className="font-bold text-white text-xs">{value}</span>
      </div>
    </div>
  );
}


