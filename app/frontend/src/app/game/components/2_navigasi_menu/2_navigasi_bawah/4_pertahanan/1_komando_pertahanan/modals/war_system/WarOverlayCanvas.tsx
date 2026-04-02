"use client"

/**
 * WarOverlayCanvas
 * ================
 * Canvas overlay yang merender di atas peta (Hubungan & Peta Utama).
 * Menampilkan animasi fleet militer + overlay okupasi wilayah.
 * 
 * Fase:
 * - deploying/traveling: animasi fleet bergerak dari A ke B
 * - battle: transisi ke tactical (tidak auto-resolve lagi)
 * - tactical: menampilkan progress okupasi di peta global
 */

import { useEffect, useRef, useState } from "react";
import { warStorage } from "./warStorage";
import { WarDeclaration, TerritoryProgress } from "./warTypes";
import { calculateSeaRoute, calculateAirRoute } from "./warRoutes";
import { drawTank } from "./sprites/tankSprite";
import { drawShip } from "./sprites/shipSprite";
import { drawJet } from "./sprites/jetSprite";
import { Point } from "../../../../2_ekonomi/1-perdagangan/jalur_perdagangan/2_rute/tradeRoutes";
import { timeStorage } from "../../../../2_ekonomi/1-perdagangan/timeStorage";

interface WarOverlayProps {
  mapWidth: number;
  mapHeight: number;
  /** Whether the map is currently visible */
  active: boolean;
  /** Callback when user clicks on a war zone to open tactical battle */
  onWarZoneClick?: (war: WarDeclaration) => void;
}

/** Duration of fleet travel phase in real ms */
const TRAVEL_DURATION_MS = 30000; // 30 seconds real-time
/** Duration of battle phase in real ms */
const BATTLE_DURATION_MS = 8000;  // 8 seconds

interface ActiveWarRoute {
  war: WarDeclaration;
  seaPixels: { x: number; y: number }[];
  airPixels: { x: number; y: number }[];
  /** Simulated elapsed time in ms, follows game clock deltas */
  accumulatedElapsed: number;
}

export default function WarOverlayCanvas({ mapWidth, mapHeight, active, onWarZoneClick }: WarOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeWarsRef = useRef<ActiveWarRoute[]>([]);
  const requestRef = useRef<number | null>(null);
  const explosionParticlesRef = useRef<{ x: number; y: number; r: number; alpha: number; color: string }[]>([]);
  const territoryProgressRef = useRef<TerritoryProgress[]>([]);
  
  // Time sync refs
  const lastFrameTimeRef = useRef<number>(performance.now());
  const isPausedRef = useRef<boolean>(timeStorage.getState().isPaused);
  const speedRef = useRef<number>(timeStorage.getState().speed);

  const project = (lon: number, lat: number) => ({
    x: ((lon + 180) / 360) * mapWidth,
    y: ((90 - lat) / 180) * mapHeight,
  });

  // Listen for new wars
  useEffect(() => {
    const handleWarStarted = (e: Event) => {
      const war = (e as CustomEvent).detail as WarDeclaration;
      const seaRoute = calculateSeaRoute(war.attacker, war.defender);
      const airRoute = calculateAirRoute(war.attacker, war.defender);

      const newRoute: ActiveWarRoute = {
        war,
        seaPixels: seaRoute.map(p => project(p.lon, p.lat)),
        airPixels: airRoute.map(p => project(p.lon, p.lat)),
        accumulatedElapsed: 0,
      };

      activeWarsRef.current.push(newRoute);
    };

    const handleStorageUpdate = () => {
      // Sync with storage — remove finished wars
      const active = warStorage.getActiveWars();
      const activeIds = new Set(active.map(w => w.id));
      activeWarsRef.current = activeWarsRef.current.filter(r => activeIds.has(r.war.id));
    };

    // Load existing wars on mount
    const existingWars = warStorage.getActiveWars();
    existingWars.forEach(war => {
      const seaRoute = calculateSeaRoute(war.attacker, war.defender);
      const airRoute = calculateAirRoute(war.attacker, war.defender);
      activeWarsRef.current.push({
        war,
        seaPixels: seaRoute.map(p => project(p.lon, p.lat)),
        airPixels: airRoute.map(p => project(p.lon, p.lat)),
        accumulatedElapsed: Date.now() - war.startedAt,
      });
    });

    // Subscribe to game time
    const unsubscribeTime = timeStorage.subscribe((date, paused, speed) => {
      isPausedRef.current = paused;
      speedRef.current = speed;
    });

    // Listen for territory updates
    const handleTerritoryUpdate = () => {
      territoryProgressRef.current = warStorage.getTerritoryProgress();
    };

    window.addEventListener("war_started", handleWarStarted);
    window.addEventListener("war_storage_updated", handleStorageUpdate);
    window.addEventListener("war_territory_updated", handleTerritoryUpdate);
    return () => {
      window.removeEventListener("war_started", handleWarStarted);
      window.removeEventListener("war_storage_updated", handleStorageUpdate);
      window.removeEventListener("war_territory_updated", handleTerritoryUpdate);
      unsubscribeTime();
    };
  }, []);

  // Animation Loop
  useEffect(() => {
    if (!active) return;

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, mapWidth, mapHeight);

      const currentTime = performance.now();
      const deltaTime = currentTime - lastFrameTimeRef.current;
      lastFrameTimeRef.current = currentTime;

      const isPaused = isPausedRef.current;
      const speed = speedRef.current;

      activeWarsRef.current.forEach((route) => {
        // Update simulated time only if not paused
        if (!isPaused) {
          route.accumulatedElapsed += deltaTime * speed;
        }

        const elapsed = route.accumulatedElapsed;
        const travelProgress = Math.min(1, elapsed / TRAVEL_DURATION_MS);
        const inBattle = elapsed > TRAVEL_DURATION_MS;
        const battleElapsed = inBattle ? elapsed - TRAVEL_DURATION_MS : 0;
        const battleProgress = inBattle ? Math.min(1, battleElapsed / BATTLE_DURATION_MS) : 0;

        // === Phase transition ===
        if (travelProgress >= 1 && route.war.phase === 'traveling') {
          warStorage.updateWarPhase(route.war.id, 'battle');
          route.war.phase = 'battle';
        }

        if (travelProgress < 0.05 && route.war.phase === 'deploying') {
          warStorage.updateWarPhase(route.war.id, 'traveling');
          route.war.phase = 'traveling';
        }

        // === Draw Sea Route Line ===
        if (route.seaPixels.length > 1) {
          ctx.beginPath();
          ctx.moveTo(route.seaPixels[0].x, route.seaPixels[0].y);
          for (let i = 1; i < route.seaPixels.length; i++) {
            ctx.lineTo(route.seaPixels[i].x, route.seaPixels[i].y);
          }
          ctx.lineWidth = 4;
          ctx.strokeStyle = "rgba(239, 68, 68, 0.4)";
          ctx.setLineDash([12, 6]);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // === Draw Air Route Line ===
        if (route.airPixels.length > 1) {
          ctx.beginPath();
          ctx.moveTo(route.airPixels[0].x, route.airPixels[0].y);
          // Quadratic curve for air route
          if (route.airPixels.length === 3) {
            ctx.quadraticCurveTo(
              route.airPixels[1].x, route.airPixels[1].y,
              route.airPixels[2].x, route.airPixels[2].y
            );
          } else {
            for (let i = 1; i < route.airPixels.length; i++) {
              ctx.lineTo(route.airPixels[i].x, route.airPixels[i].y);
            }
          }
          ctx.lineWidth = 2;
          ctx.strokeStyle = "rgba(251, 146, 60, 0.3)";
          ctx.setLineDash([8, 8]);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        if (!inBattle) {
          // === Animate Ships along sea route ===
          const seaPos = getPositionOnPath(route.seaPixels, travelProgress);
          const seaAngle = getAngleOnPath(route.seaPixels, travelProgress);
          if (seaPos) {
            // Draw 3 ships in formation
            drawShip(ctx, seaPos.x, seaPos.y, seaAngle, "#ef4444");
            drawShip(ctx, seaPos.x - 30 * Math.cos(seaAngle) + 20 * Math.sin(seaAngle),
                         seaPos.y - 30 * Math.sin(seaAngle) - 20 * Math.cos(seaAngle),
                         seaAngle, "#dc2626");
            drawShip(ctx, seaPos.x - 30 * Math.cos(seaAngle) - 20 * Math.sin(seaAngle),
                         seaPos.y - 30 * Math.sin(seaAngle) + 20 * Math.cos(seaAngle),
                         seaAngle, "#dc2626");

            // Draw tank on the lead ship (naval transport)
            drawTank(ctx, seaPos.x - 2, seaPos.y, seaAngle, "#fbbf24");
          }

          // === Animate Jets along air route ===
          // Jets are faster — they arrive at 70% of travel time
          const airProgress = Math.min(1, travelProgress * 1.4);
          const airPos = getPositionOnCurve(route.airPixels, airProgress);
          const airAngle = getAngleOnCurve(route.airPixels, airProgress);
          if (airPos && airProgress < 1) {
            // Draw 2 jets in formation
            drawJet(ctx, airPos.x, airPos.y, airAngle, "#f97316");
            drawJet(ctx, airPos.x - 25 * Math.cos(airAngle) + 15 * Math.sin(airAngle),
                        airPos.y - 25 * Math.sin(airAngle) - 15 * Math.cos(airAngle),
                        airAngle, "#ea580c");
          }

          // Progress indicator label
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.font = "bold 18px 'Inter', sans-serif";
          ctx.textAlign = "center";
          if (seaPos) {
            ctx.fillText(`${Math.round(travelProgress * 100)}%`, seaPos.x, seaPos.y - 30);
          }
        } else {
          // === Battle/Tactical Phase: Territory occupation overlay ===
          const target = route.seaPixels[route.seaPixels.length - 1];
          if (target) {
            // Find territory progress for this war
            const progress = territoryProgressRef.current.find(
              tp => tp.warId === route.war.id
            );
            const occPercent = progress?.occupationPercent || 0;

            // Pulsing war zone indicator
            const pulseSize = 35 + Math.sin(battleElapsed / 200) * 15;
            const pulseAlpha = 0.2 + Math.sin(battleElapsed / 150) * 0.15;

            // Occupation glow — opacity scales with occupation%
            const occAlpha = 0.1 + (occPercent / 100) * 0.4;
            ctx.beginPath();
            ctx.arc(target.x, target.y, pulseSize * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(239, 68, 68, ${occAlpha})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(target.x, target.y, pulseSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(239, 68, 68, ${pulseAlpha})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(target.x, target.y, pulseSize * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(251, 146, 60, ${pulseAlpha + 0.1})`;
            ctx.fill();

            // Occupation label
            ctx.fillStyle = "#ef4444";
            ctx.font = "bold 20px 'Inter', sans-serif";
            ctx.textAlign = "center";
            if (route.war.phase === 'tactical') {
              ctx.fillText(`⚔ OKUPASI: ${occPercent.toFixed(0)}%`, target.x, target.y - pulseSize - 15);
              // Sub-label: click to manage
              ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
              ctx.font = "bold 14px 'Inter', sans-serif";
              ctx.fillText("🖱 Klik untuk membuka medan perang", target.x, target.y - pulseSize + 2);
            } else {
              ctx.fillText("⚔ PERTEMPURAN", target.x, target.y - pulseSize - 10);
            }

            // Random battle particles
            if (Math.random() < 0.25) {
              for (let i = 0; i < 2; i++) {
                const angle = Math.random() * Math.PI * 2;
                const dist = Math.random() * pulseSize;
                ctx.beginPath();
                ctx.arc(
                  target.x + Math.cos(angle) * dist,
                  target.y + Math.sin(angle) * dist,
                  2 + Math.random() * 4,
                  0, Math.PI * 2
                );
                ctx.fillStyle = Math.random() > 0.5 ? "#fbbf24" : "#ef4444";
                ctx.fill();
              }
            }

            // Occupation progress ring
            if (occPercent > 0) {
              ctx.beginPath();
              ctx.arc(target.x, target.y, pulseSize + 8, -Math.PI / 2,
                -Math.PI / 2 + (Math.PI * 2 * occPercent / 100));
              ctx.strokeStyle = "#ef4444";
              ctx.lineWidth = 4;
              ctx.stroke();

              // Background ring
              ctx.beginPath();
              ctx.arc(target.x, target.y, pulseSize + 8, 0, Math.PI * 2);
              ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
              ctx.lineWidth = 2;
              ctx.stroke();
            }
          }

          // Transition to tactical phase (instead of auto-resolve)
          if (battleElapsed > 2000 && route.war.phase === 'battle') {
            warStorage.updateWarPhase(route.war.id, 'tactical');
            route.war.phase = 'tactical';
          }
        }

        // === Origin Marker (Attacker) ===
        const origin = route.seaPixels[0];
        if (origin) {
          ctx.beginPath();
          ctx.arc(origin.x, origin.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(34, 197, 94, 0.6)";
          ctx.fill();
          ctx.strokeStyle = "#22c55e";
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // === Target Marker (Defender) — pulsing red ===
        const dest = route.seaPixels[route.seaPixels.length - 1];
        if (dest && !inBattle) {
          const pulse = 6 + Math.sin(route.accumulatedElapsed / 300) * 3;
          ctx.beginPath();
          ctx.arc(dest.x, dest.y, pulse, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(239, 68, 68, 0.5)";
          ctx.fill();
          ctx.strokeStyle = "#ef4444";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [active, mapWidth, mapHeight]);

  // Handle click on war zones
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!onWarZoneClick) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * mapWidth;
    const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;

    // Check if click is near any tactical war zone
    for (const route of activeWarsRef.current) {
      if (route.war.phase !== 'tactical' && route.war.phase !== 'battle') continue;

      const target = route.seaPixels[route.seaPixels.length - 1];
      if (!target) continue;

      const dist = Math.sqrt((clickX - target.x) ** 2 + (clickY - target.y) ** 2);
      if (dist < 60) {
        onWarZoneClick(route.war);
        return;
      }
    }
  };

  const hasTacticalWars = activeWarsRef.current.some(
    r => r.war.phase === 'tactical' || r.war.phase === 'battle'
  );

  return (
    <canvas
      ref={canvasRef}
      width={mapWidth}
      height={mapHeight}
      onClick={handleCanvasClick}
      className={`absolute inset-0 h-full w-auto max-w-none z-20 ${
        hasTacticalWars && onWarZoneClick ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'
      }`}
    />
  );
}

// === Helper Functions ===

function getPositionOnPath(pixels: { x: number; y: number }[], progress: number) {
  if (pixels.length < 2) return null;
  const totalSegs = pixels.length - 1;
  const curSeg = Math.min(totalSegs - 1, Math.floor(progress * totalSegs));
  const segProg = (progress * totalSegs) - curSeg;
  const p1 = pixels[curSeg], p2 = pixels[curSeg + 1];
  return {
    x: p1.x + (p2.x - p1.x) * segProg,
    y: p1.y + (p2.y - p1.y) * segProg,
  };
}

function getAngleOnPath(pixels: { x: number; y: number }[], progress: number): number {
  if (pixels.length < 2) return 0;
  const totalSegs = pixels.length - 1;
  const curSeg = Math.min(totalSegs - 1, Math.floor(progress * totalSegs));
  const p1 = pixels[curSeg], p2 = pixels[curSeg + 1];
  return Math.atan2(p2.y - p1.y, p2.x - p1.x);
}

function getPositionOnCurve(pixels: { x: number; y: number }[], t: number) {
  if (pixels.length === 3) {
    // Quadratic Bezier
    const p0 = pixels[0], p1 = pixels[1], p2 = pixels[2];
    const mt = 1 - t;
    return {
      x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
      y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y,
    };
  }
  return getPositionOnPath(pixels, t);
}

function getAngleOnCurve(pixels: { x: number; y: number }[], t: number): number {
  if (pixels.length === 3) {
    const p0 = pixels[0], p1 = pixels[1], p2 = pixels[2];
    const mt = 1 - t;
    const dx = 2 * mt * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
    const dy = 2 * mt * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
    return Math.atan2(dy, dx);
  }
  return getAngleOnPath(pixels, t);
}

/** Call API to resolve the war */
async function executeWarResult(war: WarDeclaration) {
  warStorage.updateWarPhase(war.id, 'finished');

  try {
    const res = await fetch("/api/game/war/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        war_id: war.id,
        attacker: war.attacker,
        defender: war.defender,
        attacker_forces: war.attackerForces,
        defender_forces: war.defenderForces,
        attacker_power: war.attackerPower,
        defender_power: war.defenderPower,
      }),
    });

    const data = await res.json();
    if (data.result) {
      const outcome = data.result.winner === war.attacker ? 'victory' : 'defeat';
      warStorage.resolveWar(war.id, outcome, data.result.casualties || { attacker: {}, defender: {} });

      // Dispatch result event for UI
      window.dispatchEvent(new CustomEvent("war_result", {
        detail: { war, result: data.result, outcome }
      }));
    }
  } catch (err) {
    console.error("War execution failed:", err);
    // Fallback: simple power comparison
    const outcome = war.attackerPower > war.defenderPower ? 'victory' : 'defeat';
    warStorage.resolveWar(war.id, outcome, { attacker: {}, defender: {} });
    window.dispatchEvent(new CustomEvent("war_result", {
      detail: { war, result: null, outcome }
    }));
  }
}
