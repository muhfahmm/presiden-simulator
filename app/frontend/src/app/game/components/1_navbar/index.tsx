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

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString('id-ID'));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span className="tabular-nums">{display}</motion.span>;
}

// --- Sub-component: StatusBadge ---
interface StatusBadgeProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  delta?: number;
  deltaColor?: string;
  suffix?: string;
  onClick?: () => void;
}

function StatusBadge({ icon, label, value, delta, deltaColor, suffix, onClick }: StatusBadgeProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 bg-[#d4c19c]/40 px-3 py-1.5 rounded-lg border border-amber-800/10 relative group overflow-hidden transition-all min-w-[140px] shrink-0 ${onClick ? 'cursor-pointer hover:border-amber-800/30 hover:bg-[#d4c19c]/60' : ''} shadow-sm`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {icon}
      <div className="text-left leading-tight relative z-10">
        <p className="text-[10px] text-amber-900/60 font-bold uppercase">{label}</p>
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-black text-amber-950 italic tracking-wide">
            {typeof value === 'number' ? <AnimatedNumber value={value} /> : value}
            {suffix && <span className="ml-1 text-[10px] opacity-70 not-italic uppercase font-bold">{suffix}</span>}
          </p>
          {delta !== undefined && delta !== 0 && (
            <span className={`text-[9px] font-black px-1 rounded-sm ${deltaColor ? deltaColor : (delta > 0 ? 'text-emerald-800 bg-emerald-500/10' : 'text-rose-800 bg-rose-500/10')}`}>
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
      <header className="fixed top-0 left-0 w-full z-[100000] bg-[#dcc7a1]/95 backdrop-blur-xl border-b border-amber-800/10 px-8 py-4 flex items-center justify-between shadow-[0_4px_20px_rgba(115,86,45,0.15)]">
        <div className="flex items-center gap-4">
          {countryData && (() => {
            const getCountryCode = (emoji: string) => {
              const chars = [...emoji];
              if (chars.length < 2) return "";
              return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
            };
            const code = getCountryCode(countryData.flag);
            
            return (
              <div className="flex items-center gap-3 bg-amber-50/20 pl-2 pr-4 py-1.5 rounded-2xl border border-amber-800/10 shadow-sm backdrop-blur-md group hover:border-amber-600/50 transition-all duration-500">
                <div className="relative w-9 h-6 rounded-md overflow-hidden shadow-md border border-amber-900/10 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={`https://flagcdn.com/w160/${code}.png`} 
                    alt={countryData.name_id}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-amber-950 italic tracking-wider uppercase group-hover:text-amber-800 transition-colors">
                    {countryData.name_id}
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
            value={budget}
            delta={budgetDelta}
            suffix="EM"
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
                    const finalPopulation = localStorage.getItem("em_population_data");
                    const finalBudget = localStorage.getItem("em_budget_data");
                    
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
            className="ml-4 p-2 rounded-lg bg-amber-800/10 hover:bg-amber-600/20 text-amber-900/60 hover:text-amber-900 transition-all border border-amber-800/10 group shadow-sm"
            title="Reset Total Game"
          >
            <RotateCcw className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500" />
          </button>

          <button
            onClick={onLogout}
            className="ml-2 p-2 rounded-lg bg-amber-800/10 hover:bg-rose-500/20 text-amber-900/60 hover:text-rose-700 transition-all border border-amber-800/10 group shadow-sm"
            title="Akhiri Sesi"
          >
            <LogOut className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </button>
        </div>
      </header>
    </>
  );
}
