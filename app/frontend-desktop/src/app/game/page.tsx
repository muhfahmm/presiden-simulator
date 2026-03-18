"use client"

import { useState, useRef } from "react";
import { Shield, AlertTriangle, Heart, Coins } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import GameMapCanvas from "@/components/gamemap";

export default function GameDashboard() {
  const [approval, setApproval] = useState(65);
  const [budget, setBudget] = useState(1240.5); // in Trillion
  const [stability, setStability] = useState(82);
  const [selectedCountry, setSelectedCountry] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("selectedCountry") || "Indonesia";
    }
    return "Indonesia";
  });
  const [isCentered, setIsCentered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans relative overflow-hidden">
      {/* ParticleCanvas removed for static maps */}

      

      {/* Main Content Area */}
      <main className="flex-1 z-10 flex flex-col h-screen overflow-y-auto">
        {/* Top Header / Status bar */}
        <header className="bg-zinc-900/30 backdrop-blur-sm border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Pusat Komando Strategis
          </h1>
          
          <div className="flex items-center gap-6">
            <StatusBadge icon={<Heart className="h-4 w-4 text-red-500" />} label="Persetujuan" value={`${approval}%`} />
            <StatusBadge icon={<Coins className="h-4 w-4 text-yellow-500" />} label="Kas Negara" value={`Rp ${budget} T`} />
            <StatusBadge icon={<Shield className="h-4 w-4 text-green-500" />} label="Stabilitas" value={`${stability}%`} />
          </div>
        </header>

        {/* Main interactive map background viewport */}
        <div className="flex-1 relative w-full h-full overflow-hidden bg-[#020617] p-8">
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
                <GameMapCanvas selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
              </div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </main>
    </div>
  );
}

 


function StatusBadge({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-2 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800">
      {icon}
      <div className="text-left leading-tight">
        <p className="text-[10px] text-zinc-500 font-semibold uppercase">{label}</p>
        <p className="text-xs font-bold">{value}</p>
      </div>
    </div>
  );
}

function MiniStat({ label, value, opacity = false }: { label: string, value: string, opacity?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800/50 pb-2">
      <span className="text-xs text-zinc-400">{label}</span>
      <span className={`text-sm font-bold ${opacity ? 'text-zinc-500' : 'text-white'}`}>{value}</span>
    </div>
  );
}

function OptionButton({ label }: { label: string }) {
  return (
    <button className="text-left text-xs bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 p-3 rounded-lg transition-all cursor-pointer">
      {label}
    </button>
  );
}
