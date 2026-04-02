"use client"

/**
 * TacticalBattleCanvas
 * ====================
 * Canvas interaktif untuk pertempuran taktis.
 * User bisa:
 * - Melihat grid negara target
 * - Drag-and-drop unit ke posisi deployment
 * - Menonton pertempuran real-time
 * - Melihat progress okupasi wilayah
 */

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Shield, Swords, Zap, Crosshair } from "lucide-react";
import { BattlefieldState, DeployedUnit, WarForces, WarDeclaration } from "../warTypes";
import { generateBattlefieldGrid, getDeploymentZones, updateOccupiedTiles, isCountryConquered, TILE_SIZE } from "../territory/territoryGrid";
import { updateBattleTick, forcesToDeployableUnits, spawnEnemyUnits, determineBattleOutcome, UNIT_LABELS } from "../territory/battleEngine";
import { drawTank } from "../sprites/tankSprite";
import { drawShip } from "../sprites/shipSprite";
import { drawJet } from "../sprites/jetSprite";
import { drawInfantry } from "../sprites/infantrySprite";
import { drawArtillery } from "../sprites/artillerySprite";
import { drawSAM } from "../sprites/samSprite";
import { drawDrone } from "../sprites/droneSprite";
import { drawRocket } from "../sprites/rocketSprite";
import { drawHeli } from "../sprites/heliSprite";
import { drawAPC } from "../sprites/apcSprite";
import { warStorage } from "../warStorage";

interface TacticalBattleProps {
  war: WarDeclaration;
  geoData?: any;
  onBattleEnd: (outcome: 'victory' | 'defeat') => void;
}

// Canvas size for the tactical view
const CANVAS_W = 1200;
const CANVAS_H = 800;

// Sprite draw functions map
const SPRITE_DRAWERS: Record<string, (ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, color: string) => void> = {
  tank: drawTank,
  ship: drawShip,
  jet: drawJet,
  infantry: drawInfantry,
  artillery: drawArtillery,
  sam: drawSAM,
  drone: drawDrone,
  rocket: drawRocket,
  heli: drawHeli,
  apc: drawAPC,
};

export default function TacticalBattleCanvas({ war, geoData, onBattleEnd }: TacticalBattleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [battlefield, setBattlefield] = useState<BattlefieldState | null>(null);
  const [deployableUnits, setDeployableUnits] = useState<DeployedUnit[]>([]);
  const [selectedUnitIdx, setSelectedUnitIdx] = useState<number | null>(null);
  const [isEngaging, setIsEngaging] = useState(false);
  const [battleSpeed, setBattleSpeed] = useState(1);
  const animFrameRef = useRef<number | null>(null);
  const battlefieldRef = useRef<BattlefieldState | null>(null);
  const particlesRef = useRef<any[]>([]); // { x, y, life, color, type }
  const lastAiSyncRef = useRef<number>(0);

  // Group deployable units for better UI
  const groupedUnits = useMemo(() => {
    const groups: Record<string, { unit: DeployedUnit, count: number, firstIdx: number }> = {};
    deployableUnits.forEach((u, i) => {
      if (!groups[u.unitType]) {
        groups[u.unitType] = { unit: u, count: 0, firstIdx: i };
      }
      groups[u.unitType].count++;
    });
    return Object.values(groups);
  }, [deployableUnits]);

  // Initialize battlefield
  useEffect(() => {
    const existing = warStorage.getBattlefield(war.id);
    if (existing) {
      setBattlefield(existing);
      battlefieldRef.current = existing;
      if (existing.subPhase === 'engagement') setIsEngaging(true);
      return;
    }

    const bf = generateBattlefieldGrid(war.defender, geoData);
    if (!bf) return;

    bf.warId = war.id;

    // Spawn enemy units
    spawnEnemyUnits(bf, war.defenderForces);

    setBattlefield(bf);
    battlefieldRef.current = bf;
    warStorage.saveBattlefield(war.id, bf);
  }, [war.id]);

  // Prepare deployable units from user forces
  useEffect(() => {
    if (deployableUnits.length > 0) return;
    const units = forcesToDeployableUnits(war.attackerForces, 'user');
    setDeployableUnits(units);
  }, [war.attackerForces]);

  // Get deployment zones
  const deploymentZones = useMemo(() => {
    if (!battlefield) return [];
    return getDeploymentZones(battlefield);
  }, [battlefield?.tiles]);

  // Handle canvas click for unit deployment
  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!battlefield || isEngaging) return;
    if (selectedUnitIdx === null || selectedUnitIdx >= deployableUnits.length) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = CANVAS_W / rect.width;
    const scaleY = CANVAS_H / rect.height;
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;

    // Convert click to grid coords
    const bboxW = battlefield.bounds.maxX - battlefield.bounds.minX;
    const bboxH = battlefield.bounds.maxY - battlefield.bounds.minY;
    const gridScaleX = CANVAS_W / bboxW;
    const gridScaleY = CANVAS_H / bboxH;
    const tileW = CANVAS_W / battlefield.gridCols;
    const tileH = CANVAS_H / battlefield.gridRows;

    const gridX = Math.floor(clickX / tileW);
    const gridY = Math.floor(clickY / tileH);

    if (gridX < 0 || gridX >= battlefield.gridCols || gridY < 0 || gridY >= battlefield.gridRows) return;

    const tile = battlefield.tiles[gridY]?.[gridX];
    if (!tile || !tile.isInsideCountry) return;

    // Check if tile is in deployment zone (border tiles)
    const isDeployZone = deploymentZones.some(z => z.gridX === gridX && z.gridY === gridY);
    // Also allow tiles already occupied by user
    const isUserTile = tile.status === 'user';

    if (!isDeployZone && !isUserTile && battlefield.subPhase === 'planning') {
      // In planning, only deploy at border
      return;
    }

    // Deploy the unit
    const unit = { ...deployableUnits[selectedUnitIdx] };
    unit.gridX = gridX + 0.5;
    unit.gridY = gridY + 0.5;

    const updatedBf = { ...battlefield };
    updatedBf.userUnits = [...updatedBf.userUnits, unit];
    updatedBf.subPhase = 'deployment';

    // Update occupation
    updateOccupiedTiles(updatedBf);

    setBattlefield(updatedBf);
    battlefieldRef.current = updatedBf;
    warStorage.saveBattlefield(war.id, updatedBf);

    // Remove from deployable
    const remaining = [...deployableUnits];
    remaining.splice(selectedUnitIdx, 1);
    setDeployableUnits(remaining);
    setSelectedUnitIdx(remaining.length > 0 ? Math.min(selectedUnitIdx, remaining.length - 1) : null);
  }, [battlefield, selectedUnitIdx, deployableUnits, isEngaging, deploymentZones]);

  // Start engagement
  const startEngagement = useCallback(() => {
    if (!battlefield || battlefield.userUnits.length === 0) return;

    const updatedBf = { ...battlefield, subPhase: 'engagement' as const };
    setBattlefield(updatedBf);
    battlefieldRef.current = updatedBf;
    setIsEngaging(true);

    warStorage.updateWarPhase(war.id, 'tactical');
    warStorage.saveBattlefield(war.id, updatedBf);
  }, [battlefield, war.id]);

  // Battle tick animation loop
  useEffect(() => {
    if (!isEngaging) return;

    let tickAccumulator = 0;
    const TICK_INTERVAL = 100; // ms per game tick

    const syncAI = async (bf: BattlefieldState) => {
      try {
        const res = await fetch("/api/game/war/tactical-ai", {
          method: "POST",
          body: JSON.stringify(bf),
          headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        
        if (data.status === "success" && data.instructions) {
          // Apply AI instructions to enemy units
          data.instructions.forEach((inst: any) => {
            const unit = bf.enemyUnits.find(u => u.id === inst.unitId);
            if (unit && unit.isAlive) {
              if (inst.action === "attack") {
                unit.targetId = inst.targetId;
              } else if (inst.action === "move" && inst.targetTile) {
                // Movement logic is handled in updateBattleTick, 
                // but we can bias it with strategic targets here if needed.
                // For now, Python AI selects the targetId which guides movement.
              }
            }
          });
        }
      } catch (e) {
        console.error("AI Sync Error:", e);
      }
    };

    const animate = () => {
      const bf = battlefieldRef.current;
      if (!bf || bf.subPhase !== 'engagement') return;

      const now = Date.now();
      tickAccumulator += 16 * battleSpeed;

      // Sync with Python AI every 1000ms
      if (now - lastAiSyncRef.current > 1000) {
        lastAiSyncRef.current = now;
        syncAI(bf);
      }

      while (tickAccumulator >= TICK_INTERVAL) {
        tickAccumulator -= TICK_INTERVAL;
        const finished = updateBattleTick(bf);

        // Add particles for damaged units
        [...bf.userUnits, ...bf.enemyUnits].forEach(u => {
          if (u.isAlive && u.stats.hp < u.stats.maxHp * 0.4 && Math.random() < 0.1) {
            particlesRef.current.push({
              x: u.gridX * (CANVAS_W / bf.gridCols),
              y: u.gridY * (CANVAS_H / bf.gridRows),
              vx: (Math.random() - 0.5) * 0.5,
              vy: -Math.random() * 1.5,
              life: 1.0,
              color: "rgba(100, 100, 100, 0.6)",
              type: "smoke"
            });
          }
        });

        if (finished) {
          const outcome = determineBattleOutcome(bf);
          warStorage.saveBattlefield(war.id, bf);
          setBattlefield({ ...bf });
          setIsEngaging(false);

          setTimeout(() => onBattleEnd(outcome), 1500);
          return;
        }
      }

      // Update particles
      particlesRef.current = particlesRef.current.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        return p.life > 0;
      });

      // Save periodically (every 30 ticks)
      if (bf.tick % 30 === 0) {
        warStorage.saveBattlefield(war.id, bf);
      }

      setBattlefield({ ...bf });
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isEngaging, battleSpeed, war.id, onBattleEnd]);

  // Render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !battlefield) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- GEOGRAPHY DRAWING HELPERS ---
    const project = (lon: number, lat: number) => {
      const mapWidth = 6000;
      const mapHeight = 2400;
      const px = ((lon + 180) / 360) * mapWidth;
      const py = ((90 - lat) / 180) * mapHeight;
      
      // Transform to Canvas Space based on Battlefield Bounds
      return {
        x: (px - battlefield.bounds.minX) / (battlefield.bounds.maxX - battlefield.bounds.minX) * CANVAS_W,
        y: (py - battlefield.bounds.minY) / (battlefield.bounds.maxY - battlefield.bounds.minY) * CANVAS_H,
      };
    };

    const drawCountryShape = () => {
      if (!geoData?.features) return;
      const feature = geoData.features.find((f: any) => {
        const fName = f.properties?.name || '';
        return fName.toLowerCase() === battlefield.defenderCountry.toLowerCase() ||
               (f.properties?.name_id || '').toLowerCase() === battlefield.defenderCountry.toLowerCase();
      });

      if (!feature) return;

      ctx.beginPath();
      const drawCoords = (coords: any) => {
        coords.forEach((poly: any) => {
          poly.forEach((c: any, i: number) => {
            const { x, y } = project(c[0], c[1]);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          });
        });
      };

      if (feature.geometry.type === 'Polygon') {
        drawCoords(feature.geometry.coordinates);
      } else if (feature.geometry.type === 'MultiPolygon') {
        feature.geometry.coordinates.forEach((p: any) => drawCoords(p));
      }

      // Fill with a deep high-tech blue-black
      ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
      ctx.fill();
      
      // Outer Glow Effect
      ctx.shadowBlur = 40;
      ctx.shadowColor = "#1e40af";
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Fine Inner Outline
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(100, 200, 255, 0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.closePath();
    };

    const tileW = CANVAS_W / battlefield.gridCols;
    const tileH = CANVAS_H / battlefield.gridRows;

    // Clear
    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // Draw the actual geographic shape first
    ctx.save();
    drawCountryShape();
    ctx.restore();

    // Draw tiles
    for (let row = 0; row < battlefield.gridRows; row++) {
      for (let col = 0; col < battlefield.gridCols; col++) {
        const tile = battlefield.tiles[row][col];
        const tx = col * tileW;
        const ty = row * tileH;

        if (!tile.isInsideCountry) {
          // Ocean/outside
          ctx.fillStyle = "#0c1622";
          ctx.fillRect(tx, ty, tileW, tileH);
          continue;
        }

        // Color based on terrain and status
        switch (tile.terrainType) {
          case 'forest':
            ctx.fillStyle = "#1e3a1a"; // Dark Forest Green
            break;
          case 'mountain':
            ctx.fillStyle = "#3f3f46"; // Mountain Grey
            break;
          case 'water':
            ctx.fillStyle = "#1e3a5f"; // Deep Blue Sea
            break;
          default:
            ctx.fillStyle = "#2d3a2a"; // Plain/Grass
        }
        ctx.fillRect(tx, ty, tileW, tileH);

        // Overlay status color
        if (tile.status === 'user') {
          ctx.fillStyle = "rgba(239, 68, 68, 0.4)";
          ctx.fillRect(tx, ty, tileW, tileH);
        } else if (tile.status === 'enemy') {
          ctx.fillStyle = "rgba(59, 130, 246, 0.1)";
          ctx.fillRect(tx, ty, tileW, tileH);
        }

        // Grid lines
        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
        ctx.lineWidth = 0.5;
        ctx.strokeRect(tx, ty, tileW, tileH);
      }
    }

    // Highlight deployment zones (planning/deployment phase)
    if (!isEngaging) {
      deploymentZones.forEach(zone => {
        const tx = zone.gridX * tileW;
        const ty = zone.gridY * tileH;
        ctx.fillStyle = "rgba(34, 197, 94, 0.15)";
        ctx.fillRect(tx, ty, tileW, tileH);
        ctx.strokeStyle = "rgba(34, 197, 94, 0.3)";
        ctx.lineWidth = 1;
        ctx.strokeRect(tx, ty, tileW, tileH);
      });
    }

    // Draw units
    const drawUnit = (unit: DeployedUnit) => {
      if (!unit.isAlive) return;

      const ux = unit.gridX * tileW;
      const uy = unit.gridY * tileH;
      const color = unit.side === 'user' ? "#22c55e" : "#ef4444";
      const angle = unit.targetId ? Math.atan2(
        (battlefield.enemyUnits.find(e => e.id === unit.targetId)?.gridY || unit.gridY) - unit.gridY,
        (battlefield.enemyUnits.find(e => e.id === unit.targetId)?.gridX || unit.gridX) - unit.gridX
      ) : 0;

      // Draw sprite
      const drawFn = SPRITE_DRAWERS[unit.sprite] || SPRITE_DRAWERS.infantry;
      drawFn(ctx, ux, uy, angle, color);

      // HP Bar (Only show if damaged)
      if (unit.stats.hp < unit.stats.maxHp) {
        const hpPercent = unit.stats.hp / unit.stats.maxHp;
        const barW = tileW * 0.7;
        const barH = 2;
        const barX = ux - barW / 2;
        const barY = uy - 12;

        ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
        ctx.fillRect(barX, barY, barW, barH);
        ctx.fillStyle = hpPercent > 0.5 ? "#22c55e" : hpPercent > 0.25 ? "#f59e0b" : "#ef4444";
        ctx.fillRect(barX, barY, barW * hpPercent, barH);
      }

      // Label
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.font = "bold 7px 'Inter', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(unit.label, ux, uy + 16);
    };

    // Draw attack lines
    if (isEngaging) {
      [...battlefield.userUnits, ...battlefield.enemyUnits].forEach(unit => {
        if (!unit.isAlive || !unit.targetId) return;
        const target = [...battlefield.userUnits, ...battlefield.enemyUnits].find(u => u.id === unit.targetId);
        if (!target || !target.isAlive) return;

        const ux = unit.gridX * tileW;
        const uy = unit.gridY * tileH;
        const tx = target.gridX * tileW;
        const ty = target.gridY * tileH;

        // Projectile line
        ctx.beginPath();
        ctx.moveTo(ux, uy);
        ctx.lineTo(tx, ty);
        ctx.strokeStyle = unit.side === 'user'
          ? "rgba(34, 197, 94, 0.3)"
          : "rgba(239, 68, 68, 0.3)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Impact flash (random)
        if (Math.random() < 0.15) {
          ctx.beginPath();
          ctx.arc(tx, ty, 4 + Math.random() * 4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(251, 146, 60, 0.6)";
          ctx.fill();
        }
      });
    }

    // Draw units
    battlefield.enemyUnits.forEach(drawUnit);
    battlefield.userUnits.forEach(drawUnit);

    // Draw particles
    particlesRef.current.forEach(p => {
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2 + (1 - p.life) * 8, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;

    // --- NEW MODERN HUD (FLOATING PILLS) ---
    const drawPill = (x: number, y: number, w: number, h: number, text: string, color: string, icon?: string) => {
      ctx.save();
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      
      // Pill body
      ctx.fillStyle = "rgba(10, 10, 10, 0.7)";
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, h / 2);
      ctx.fill();
      
      // Border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Text
      ctx.fillStyle = color;
      ctx.font = "bold 10px 'Inter', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, x + w / 2, y + h / 2);
      ctx.restore();
    };

    // 1. Occupation Pill
    const occPercent = battlefield.occupationPercent.toFixed(1);
    drawPill(20, 20, 140, 24, `🏴 OCCUPATION: ${occPercent}%`, "#f43f5e");

    // 2. Force Balance Pill
    const aliveUser = battlefield.userUnits.filter(u => u.isAlive).length;
    const aliveEnemy = battlefield.enemyUnits.filter(u => u.isAlive).length;
    drawPill(170, 20, 180, 24, `⚔ FORCE: ${aliveUser} vs ${aliveEnemy}`, "#06b6d4");

    // 3. Top Glow Progress Bar
    const progWidth = CANVAS_W * (battlefield.occupationPercent / 100);
    const grd = ctx.createLinearGradient(0, 0, CANVAS_W, 0);
    grd.addColorStop(0, "#06b6d4");
    grd.addColorStop(1, "#f43f5e");
    
    ctx.fillStyle = "rgba(255,255,255,0.05)";
    ctx.fillRect(0, 0, CANVAS_W, 2);
    
    ctx.save();
    ctx.shadowBlur = 8;
    ctx.shadowColor = battlefield.occupationPercent >= 75 ? "#10b981" : "#f43f5e";
    ctx.fillStyle = battlefield.occupationPercent >= 75 ? "#10b981" : grd;
    ctx.fillRect(0, 0, progWidth, 3);
    ctx.restore();
  }, [battlefield, isEngaging, deploymentZones]);

  if (!battlefield) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest animate-pulse">
          Memuat Medan Perang...
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-6 h-full font-['Inter',sans-serif]">
      {/* Sidebar — Modern Glass Unit Panel */}
      <div className="w-64 flex flex-col gap-4 shrink-0 h-full">
        <div className="flex-1 flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-5 border-b border-white/5 bg-white/5">
            <h4 className="text-[10px] font-black text-cyan-500/80 uppercase tracking-[0.3em]">
              Available Units
            </h4>
          </div>
          
          <div className="flex-1 p-3 space-y-2 overflow-y-auto no-scrollbar">
            {groupedUnits.map((group) => (
              <button
                key={group.unit.id}
                onClick={() => setSelectedUnitIdx(group.firstIdx)}
                disabled={isEngaging}
                className={`w-full group relative p-3 rounded-2xl border transition-all duration-300 ${
                  selectedUnitIdx === group.firstIdx
                    ? 'bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                    : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10'
                } ${isEngaging ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {/* Active Indicator */}
                {selectedUnitIdx === group.firstIdx && (
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-cyan-500 rounded-r-full" />
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider transition-colors ${
                        selectedUnitIdx === group.firstIdx ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-300'
                      }`}>
                        {group.unit.label}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-black text-cyan-500/60 tabular-nums">
                        x{group.count}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[7px] text-zinc-600 font-black uppercase">Armor</span>
                        <span className="text-[9px] text-zinc-500 font-bold tabular-nums group-hover:text-zinc-400">{group.unit.stats.armor}</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[7px] text-zinc-600 font-black uppercase">Range</span>
                        <span className="text-[9px] text-zinc-500 font-bold tabular-nums group-hover:text-zinc-400">{group.unit.stats.range}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-2 rounded-xl transition-colors ${
                    selectedUnitIdx === group.firstIdx ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-zinc-600 group-hover:text-zinc-400'
                  }`}>
                    <span className="text-[9px] font-black uppercase tracking-tighter">
                      {group.unit.sprite.substring(0, 4)}
                    </span>
                  </div>
                </div>
              </button>
            ))}
            
            {deployableUnits.length === 0 && (
              <div className="text-center py-12 space-y-3">
                <div className="w-10 h-10 bg-zinc-800/30 rounded-full border border-zinc-800/50 flex items-center justify-center mx-auto">
                  <Shield size={16} className="text-zinc-700" />
                </div>
                <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest">
                  Deployment Completed
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons & Battle Info — Modern Command Style */}
        <div className="space-y-3 mt-auto">
          {!isEngaging && battlefield.userUnits.length > 0 && (
            <button
              onClick={startEngagement}
              className="w-full py-4 rounded-3xl bg-rose-600 hover:bg-rose-500 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all cursor-pointer shadow-xl shadow-rose-900/40 active:scale-95 flex items-center justify-center gap-3 border border-rose-400/30 group"
            >
              <Swords size={16} className="group-hover:scale-125 transition-transform" />
              Begin Engagement
            </button>
          )}

          {isEngaging && (
            <div className="space-y-3">
              <div className="flex gap-2 p-1 bg-black/40 rounded-2xl border border-white/5">
                {[1, 2, 4].map(speed => (
                  <button
                    key={speed}
                    onClick={() => setBattleSpeed(speed)}
                    className={`flex-1 py-1.5 rounded-xl text-[9px] font-black uppercase transition-all cursor-pointer ${
                      battleSpeed === speed
                        ? 'bg-cyan-500 text-black'
                        : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 py-3 bg-rose-500/5 border border-rose-500/20 rounded-2xl animate-pulse">
                <Zap size={12} className="text-rose-400" />
                <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest">
                  Live Combat Feed
                </span>
              </div>
            </div>
          )}

          {battlefield.subPhase === 'resolved' && (
            <div className={`p-5 rounded-3xl border text-center shadow-2xl ${
              battlefield.occupationPercent >= 75
                ? 'bg-emerald-500/10 border-emerald-500/30'
                : 'bg-rose-500/10 border-rose-500/30'
            }`}>
              <div className="text-[9px] font-bold text-zinc-500 uppercase mb-1">Status</div>
              <span className={`text-xs font-black uppercase tracking-widest ${
                battlefield.occupationPercent >= 75 ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {battlefield.occupationPercent >= 75 ? 'Mission Success' : 'Critical Failure'}
              </span>
            </div>
          )}

          {/* Battle Info Mini Widget */}
          <div className="p-5 bg-white/5 border border-white/10 rounded-3xl space-y-3">
            <h4 className="text-[8px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <Crosshair size={10} /> Sensor Data
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[9px] text-zinc-600 font-bold uppercase">Phase</span>
                <span className="text-[9px] text-white font-black uppercase tracking-tighter">{battlefield.subPhase}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] text-zinc-600 font-bold uppercase">Uptime</span>
                <span className="text-[9px] text-white font-black tabular-nums">{battlefield.tick}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Battle Canvas Wrapper */}
      <div className="flex-1 relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          onClick={handleCanvasClick}
          className="w-full h-full cursor-default select-none pointer-events-auto"
          style={{ imageRendering: "auto", touchAction: "none" }}
        />

        {/* Tactical Monitor Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-20" />
        
        {/* Glow corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-cyan-500/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-rose-500/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {/* Deployment instruction Floating Badge */}
        {!isEngaging && battlefield.subPhase !== 'resolved' && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-3 bg-zinc-950/80 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">
                {selectedUnitIdx !== null
                  ? "Awaiting Placement in Highlighted Zone"
                  : "Target Unit for Strategic Deployment"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
