import { useState } from "react";
import { Heart, Users, Coins, Shield, LogOut, RotateCcw, TrendingUp, TrendingDown, Clock, Activity, Zap, PieChart, BarChart3, Landmark, Percent, Receipt } from "lucide-react";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { HappinessBreakdown } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan";
import { gameStorage } from "@/app/game/gamestorage";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { stabilityStorage } from "@/app/game/components/1_navbar/4_stabilitas";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import GameTimeControls from "@/app/game/components/1_navbar/5_navigasi_waktu/GameTimeControls";
import BudgetDetailModal from "@/app/game/components/1_navbar/3_kas_negara/BudgetDetailModal";

// --- Sub-component: StatusBadge ---
interface StatusBadgeProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  delta?: number;
  deltaColor?: string;
  onClick?: () => void;
}

function StatusBadge({ icon, label, value, delta, deltaColor, onClick }: StatusBadgeProps) {
  const displayValue = typeof value === 'number' ? value.toLocaleString('id-ID') : value;

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800 relative group overflow-hidden transition-all ${onClick ? 'cursor-pointer hover:border-zinc-600 hover:bg-zinc-800' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {icon}
      <div className="text-left leading-tight relative z-10">
        <p className="text-[10px] text-zinc-500 font-semibold uppercase">{label}</p>
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-black text-zinc-100 italic tracking-wide">
            {displayValue}
          </p>
          {delta !== undefined && delta !== 0 && (
            <span className={`text-[9px] font-black px-1 rounded-sm ${deltaColor ? deltaColor : (delta > 0 ? 'text-emerald-400 bg-emerald-500/10' : 'text-red-400 bg-red-500/10')}`}>
              {delta > 0 ? '+' : ''}{Math.round(delta).toLocaleString('id-ID')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Main Component: GameNavbar ---
interface GameNavbarProps {
  countryData: CountryData;
  happiness: HappinessBreakdown;
  budget: number;
  budgetDelta: number;
  stability: number;
  population: number;
  populationDelta: number;
  setActiveMenu: (menu: string) => void;
  onLogout: () => void;
}

export default function GameNavbar({
  countryData,
  happiness,
  budget,
  budgetDelta,
  stability,
  population,
  populationDelta,
  setActiveMenu,
  onLogout
}: GameNavbarProps) {

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100000] bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80 px-8 py-4 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4">
          {countryData && (() => {
            const getCountryCode = (emoji: string) => {
              const chars = [...emoji];
              if (chars.length < 2) return "";
              return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
            };
            const code = getCountryCode(countryData.flag);
            
            return (
              <div className="flex items-center gap-3 bg-zinc-900/60 pl-2 pr-4 py-1.5 rounded-2xl border border-zinc-800/80 shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-md group hover:border-amber-500/50 transition-all duration-500">
                <div className="relative w-9 h-6 rounded-md overflow-hidden shadow-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={`https://flagcdn.com/w160/${code}.png`} 
                    alt={countryData.name_id}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-zinc-100 italic tracking-wider uppercase group-hover:text-amber-400 transition-colors">
                    {countryData.name_id}
                  </span>
                  <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                    Kedaulatan Nasional
                  </span>
                </div>
              </div>
            );
          })()}
        </div>
        <div className="flex items-center gap-6">
          <StatusBadge
            icon={<Heart className="h-4 w-4 text-rose-500" />}
            label="Kepuasan"
            value={`${happiness.global.toFixed(1)}%`}
          />
          <StatusBadge
            icon={<Users className="h-4 w-4 text-blue-500" />}
            label="Populasi"
            value={population}
            delta={populationDelta}
          />
          <StatusBadge
            icon={<Coins className="h-4 w-4 text-yellow-500" />}
            label="Kas Negara"
            value={`${Math.round(budget).toLocaleString('id-ID')}`}
            delta={budgetDelta}
          />
          <StatusBadge
            icon={<Shield className="h-4 w-4 text-green-500" />}
            label="Stabilitas"
            value={`${stability}%`}
          />
          <GameTimeControls />

          <button
            onClick={async () => {
              if (confirm("Apakah Anda yakin ingin RESET PROGRES? Seluruh data (Uang, Stok, Bangunan, Kepuasan) akan dihapus tetapi Anda tetap bermain sebagai negara ini.")) {
                (async () => {
                  try {
                    console.log("═══════════════════════════════════════");
                    console.log("[RESET] STARTING COMPLETE RESET SEQUENCE");
                    console.log("═══════════════════════════════════════");
                    
                    // STEP 1: Reset Go Server
                    console.log("[RESET] STEP 1: Resetting Go Server state");
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
                    
                    try {
                      const resetResponse = await fetch("http://localhost:8081/api/game/reset", { 
                        method: "POST",
                        signal: controller.signal 
                      });
                      
                      clearTimeout(timeoutId);
                      
                      if (resetResponse.ok) {
                        console.log("[RESET] ✓ STEP 1 COMPLETE: Go Server reset successful");
                      } else {
                        console.warn(`[RESET] ⚠ Go Server returned status: ${resetResponse.status}`);
                      }
                    } catch (fetchErr: any) {
                      clearTimeout(timeoutId);
                      if (fetchErr.name === 'AbortError') {
                        console.warn("[RESET] ⚠ Go Server reset timeout (>10s)");
                      } else {
                        console.warn("[RESET] ⚠ Go Server reset failed:", fetchErr.message);
                      }
                    }

                    // STEP 2: Wait for server to process
                    console.log("[RESET] STEP 2: Waiting 1 second for server to process reset");
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    console.log("[RESET] ✓ STEP 2 COMPLETE");
                    
                    // STEP 3: Reset localStorage with aggressive wipe
                    console.log("[RESET] STEP 3: Performing nuclear localStorage wipe");
                    gameStorage.resetCurrentSessionToDefaults();
                    console.log("[RESET] ✓ STEP 3 COMPLETE");

                    // STEP 4: Wait for localStorage writes to fully persist
                    console.log("[RESET] STEP 4: Waiting 500ms for localStorage writes to persist");
                    await new Promise(resolve => setTimeout(resolve, 500));
                    console.log("[RESET] ✓ STEP 4 COMPLETE");
                    
                    // STEP 5: Final verification
                    console.log("[RESET] STEP 5: Final verification before reload");
                    const finalPopulation = localStorage.getItem("em4_population_data");
                    const finalBudget = localStorage.getItem("em4_budget_data");
                    
                    if (finalPopulation && finalBudget) {
                      try {
                        const popData = JSON.parse(finalPopulation);
                        const budgetData = JSON.parse(finalBudget);
                        console.log(`[RESET] ✓ Final state: Pop=${popData.population}, Budget=${budgetData.anggaran}`);
                      } catch (e) {
                        console.error("[RESET] ✗ Could not parse final state:", e);
                      }
                    } else {
                      console.error("[RESET] ✗ CRITICAL: Final storage not found!");
                    }
                    
                    console.log("═══════════════════════════════════════");
                    console.log("[RESET] RESET SEQUENCE COMPLETE");
                    console.log("[RESET] Performing hard page refresh with cache bust...");
                    console.log("═══════════════════════════════════════");
                    
                    // Hard reload with cache bust parameter to prevent browser caching issues
                    const cacheUuid = Date.now() + "_" + Math.random().toString(36).substring(2, 9);
                    window.location.href = window.location.origin + "/game?cb=" + cacheUuid;
                  } catch (e) {
                    console.error("[RESET] CRITICAL ERROR:", e);
                    alert(`Reset failed with error: ${(e as Error).message}. Please try again.`);
                  }
                })();
              }
            }}
            className="ml-4 p-2 rounded-lg bg-zinc-800/50 hover:bg-cyan-500/20 text-zinc-400 hover:text-cyan-400 transition-all border border-zinc-700/50 group"
            title="Reset Total Game"
          >
            <RotateCcw className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500" />
          </button>

          <button
            onClick={onLogout}
            className="ml-2 p-2 rounded-lg bg-zinc-800/50 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition-all border border-zinc-700/50 group"
            title="Akhiri Sesi"
          >
            <LogOut className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          </button>
        </div>
      </header>
    </>
  );
}
