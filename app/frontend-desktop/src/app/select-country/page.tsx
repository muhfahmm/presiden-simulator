"use client"

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle, Play, ArrowLeft, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import WorldMapCanvas from "./selectcountrymap";
import { countries } from "./data/countries";
import { gameStorage } from "../game/gamestorage";
import { CountryData } from "./data/types";
import { Sword, Anchor, Plane, ShieldCheck, Globe2, TrendingUp, Gem, Droplets, Beef, TreePine, Mountain } from "lucide-react";

export default function SelectCountry() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("Indonesia");
  const [isCentered, setIsCentered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    // Check for active session
    if (gameStorage.hasActiveSession()) {
      router.push("/game");
      return;
    }
    if (countries.length > 0 && !selectedCountry) setSelectedCountry(countries[0].name_en);
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

  const currentData = (countries.find(c => c.name_en === selectedCountry) || countries[0]) as CountryData;

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
            <StatItem label="Total Negara" value={`${countries.length}`} icon="🌍" />
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
          centerOnInit={!isCentered}
          onInit={() => setIsCentered(true)}
          limitToBounds={true}
          doubleClick={{ disabled: true }}
          
        >
          <TransformComponent wrapperClass="!w-full !h-full" contentClass="!h-full flex items-center justify-center">
            {/* Background Map Container (Single wider canvas) */}
            <div ref={containerRef} className="relative h-full flex items-center justify-center w-max">
              <WorldMapCanvas selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
            </div>
          </TransformComponent>
        </TransformWrapper>
        
        {/* Ambient Darkened Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

        {/* Floating Resource inventory panel (Detailed Stats) */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 z-20 pointer-events-none">
          {/* Main Stats Card */}
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 w-64 pointer-events-auto">
            <h3 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] mb-1">Kekuatan Militer</h3>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                  style={{ width: `${currentData.military.strength}%` }}
                />
              </div>
              <span className="text-xs font-bold text-cyan-400">{currentData.military.strength}%</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <DetailStat icon={<Sword size={12}/>} label="Infanteri" value={formatNumber(currentData.military.infantry)} />
              <DetailStat icon={<ShieldCheck size={12}/>} label="Tank" value={currentData.military.tanks.toLocaleString()} />
              <DetailStat icon={<Plane size={12}/>} label="Udara" value={currentData.military.aircraft.toLocaleString()} />
              <DetailStat icon={<Anchor size={12}/>} label="Laut" value={currentData.military.naval.toLocaleString()} />
            </div>

            {currentData.military.nuclear && (
              <div className="mt-1 flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-2 py-1 rounded-md">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[9px] font-bold text-red-400 uppercase tracking-wider text-center">Kemampuan Nuklir Terdeteksi</span>
              </div>
            )}
          </div>

          {/* Resources Card */}
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-3 w-64 pointer-events-auto">
            <h3 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1">Sumber Daya Alam</h3>
            <div className="grid grid-cols-2 gap-y-3">
              <ResourceItem icon={<TreePine size={12} className="text-orange-400"/>} value={currentData.resources.wood} />
              <ResourceItem icon={<Mountain size={12} className="text-zinc-400"/>} value={currentData.resources.stone} />
              <ResourceItem icon={<Gem size={12} className="text-yellow-400"/>} value={currentData.resources.gold} />
              <ResourceItem icon={<Droplets size={12} className="text-blue-400"/>} value={currentData.resources.oil} />
              <ResourceItem icon={<Beef size={12} className="text-red-400"/>} value={currentData.resources.meat} />
            </div>
          </div>

          {/* UN Card */}
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-3 rounded-2xl shadow-2xl flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2">
              <Globe2 size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold text-zinc-400 uppercase">Suara di PBB</span>
            </div>
            <span className={`text-[10px] font-black px-2 py-0.5 rounded ${
              currentData.un_vote === 'Pro' ? 'bg-emerald-500/20 text-emerald-400' :
              currentData.un_vote === 'Contra' ? 'bg-red-500/20 text-red-400' :
              'bg-zinc-700/50 text-zinc-300'
            }`}>
              {currentData.un_vote}
            </span>
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
            onClick={() => {
              setIsLoading(true);
              gameStorage.saveSession(selectedCountry);
              setTimeout(() => {
                router.push("/game");
              }, 1500);
            }}
            disabled={isLoading}
            className={`flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all cursor-pointer group scale-100 hover:scale-[1.02] active:scale-[0.98] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <Play className="h-4 w-4" />
            {isLoading ? "Memproses..." : "Mulai"}
          </button>
        </div>
      </footer>

      {/* 4. LOADING OVERLAY */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-zinc-950/80 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-500">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-2 border-r-2 border-cyan-500 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="h-16 w-16 rounded-full border-b-2 border-l-2 border-blue-600 animate-spin" 
                style={{ animationDirection: 'reverse' }}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2">
            <h2 className="text-xl font-bold tracking-widest text-white uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Menyiapkan Simulasi
            </h2>
            <p className="text-zinc-500 text-[10px] animate-pulse uppercase tracking-tight">Sedang memproses data negara {currentData.name_id}...</p>
          </div>
        </div>
      )}
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

function DetailStat({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center gap-1.5 text-zinc-500">
        {icon}
        <span className="text-[9px] font-bold uppercase tracking-tighter">{label}</span>
      </div>
      <span className="text-[11px] font-black text-zinc-200">{value}</span>
    </div>
  );
}

function ResourceItem({ icon, value }: { icon: React.ReactNode, value: number }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-xs font-bold text-zinc-300">{value}</span>
    </div>
  );
}

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}


