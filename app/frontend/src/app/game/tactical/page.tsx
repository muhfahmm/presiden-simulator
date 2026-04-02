"use client"

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { X, Swords, ChevronLeft } from "lucide-react";
import { warStorage } from "../components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/modals/war_system/warStorage";
import { WarDeclaration } from "../components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/modals/war_system/warTypes";
import TacticalBattleCanvas from "../components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/modals/war_system/tactical/TacticalBattleCanvas";

function TacticalPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const warId = searchParams.get("warId");
  
  const [war, setWar] = useState<WarDeclaration | null>(null);
  const [geoData, setGeoData] = useState<any>(null);
  const [battleOutcome, setBattleOutcome] = useState<'victory' | 'defeat' | null>(null);

  useEffect(() => {
    // 1. Load GeoData
    fetch("/world.geojson")
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("Failed to load map data", err));

    // 2. Load War Data
    if (warId) {
      const activeWars = warStorage.getActiveWars();
      const found = activeWars.find(w => w.id === warId);
      if (found) {
        setWar(found);
      } else {
        // Check history if not active
        const history = warStorage.getWarHistory();
        const past = history.find(w => w.id === warId);
        if (past) setWar(past);
      }
    }
  }, [warId]);

  const handleBack = () => {
    router.push("/game");
  };

  const handleBattleEnd = (outcome: 'victory' | 'defeat') => {
    setBattleOutcome(outcome);
    if (war) {
      const casualties = { attacker: {}, defender: {} };
      warStorage.resolveWar(war.id, outcome, casualties);
      warStorage.removeBattlefield(war.id);
      
      // Notify main map
      window.dispatchEvent(new CustomEvent("war_result", {
        detail: { war, result: { winner: outcome === 'victory' ? war.attacker : war.defender }, outcome }
      }));
    }
  };

  if (!war || !geoData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-950 gap-6">
        <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
        <div className="text-zinc-500 text-xs font-black uppercase tracking-[0.5em] animate-pulse">
          Initializing Combat Console...
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-950 text-white overflow-hidden font-['Inter',sans-serif]">
      {/* Immersive Tactical Header */}
      <div className="px-10 py-6 border-b border-white/5 bg-zinc-950/80 backdrop-blur-3xl flex items-center justify-between z-50">
        <div className="flex items-center gap-8">
          <button 
            onClick={handleBack}
            className="flex items-center gap-3 px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 text-zinc-400 hover:text-white transition-all group"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Abort & Exit</span>
          </button>
          
          <div className="h-10 w-px bg-zinc-800" />
          
          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <h1 className="text-2xl font-black italic tracking-tighter uppercase text-zinc-300">
                Strategic Theater: <span className="text-cyan-400">{war.attacker}</span>
              </h1>
              <div className="w-6 h-0.5 bg-zinc-800" />
              <h1 className="text-2xl font-black italic tracking-tighter uppercase text-rose-500">
                {war.defender}
              </h1>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.3em]">
                Conflict ID: {war.id.substring(0, 8)}
              </span>
              <div className="w-1 h-1 bg-zinc-800 rounded-full" />
              <span className="text-[9px] font-black text-rose-500 animate-pulse uppercase tracking-[0.2em]">
                ⦿ Combat Engagement Profile Active
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex gap-12">
            <div className="text-right">
              <div className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mb-1">Combat Power</div>
              <div className="text-2xl font-black tabular-nums tracking-tighter">
                {war.attackerPower.toLocaleString()} <span className="text-xs text-zinc-700">PT</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mb-1">Defense Array</div>
              <div className="text-2xl font-black tabular-nums tracking-tighter text-rose-500/80">
                {war.defenderPower.toLocaleString()} <span className="text-xs text-zinc-700">PT</span>
              </div>
            </div>
          </div>
          
          {battleOutcome && (
            <div className={`px-8 py-3 rounded-2xl border font-black uppercase tracking-widest text-xs italic ${
              battleOutcome === 'victory' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
            }`}>
              {battleOutcome === 'victory' ? 'Victory confirmed' : 'Mission Failed'}
            </div>
          )}
        </div>
      </div>

      {/* Main Battle Scene */}
      <main className="flex-1 p-8 overflow-hidden relative">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <TacticalBattleCanvas
          war={war}
          geoData={geoData}
          onBattleEnd={handleBattleEnd}
        />
      </main>
    </div>
  );
}

export default function TacticalPage() {
  return (
    <Suspense fallback={null}>
      <TacticalPageContent />
    </Suspense>
  );
}
