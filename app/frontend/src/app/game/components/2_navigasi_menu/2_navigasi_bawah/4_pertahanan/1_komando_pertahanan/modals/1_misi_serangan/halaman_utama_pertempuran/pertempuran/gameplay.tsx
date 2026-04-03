"use client"

import React, { useRef, useEffect, useState } from "react";
import { polyglotService, UnitState, Vector2 } from "./logic/ts/polyglot-router";

interface GameplayProps {
  units: UnitState[];
  onUnitSelect: (id: string | null) => void;
  width?: number;
  height?: number;
}

export default function Gameplay({ units, onUnitSelect, width = 1700, height = 950 }: GameplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const influenceRef = useRef<HTMLCanvasElement>(null);
  const [hoverPos, setHoverPos] = useState<Vector2 | null>(null);

  // Initial base map generation (Simulated Hybrid Geospatial)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw topographic base
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(0, 0, width, height);

    // Simulated elevation contour lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 20; i++) {
       ctx.beginPath();
       ctx.arc(width/2, height/2, i * 40, 0, Math.PI * 2);
       ctx.stroke();
    }

    // Grid System
    ctx.strokeStyle = "rgba(0, 255, 255, 0.02)";
    for (let x = 0; x < width; x += 50) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y < height; y += 50) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }
  }, [width, height]);

  // Influence Layer Rendering (Zone of Control / Frontline)
  useEffect(() => {
    const canvas = influenceRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderInfluence = () => {
       ctx.clearRect(0, 0, width, height);
       
       // Calculate influence on a downsampled grid for performance
       const gridSize = 15;
       for (let x = 0; x < width; x += gridSize) {
         for (let y = 0; y < height; y += gridSize) {
            const inf = polyglotService.calculateInfluenceAt({x, y}, units);
            
            if (Math.abs(inf) > 0.05) {
               // Red for user dominance, Blue/Grey for enemy/neutral
               const alpha = Math.min(0.2, Math.abs(inf) * 0.1);
               ctx.fillStyle = inf > 0 
                  ? `rgba(239, 68, 68, ${alpha})` // Red: User Zone
                  : `rgba(59, 130, 246, ${alpha})`; // Blue: Enemy/Neutral
               ctx.fillRect(x, y, gridSize, gridSize);
            }
         }
       }

       // Draw Units
       units.forEach(u => {
          ctx.save();
          ctx.translate(u.pos.x, u.pos.y);
          ctx.rotate(u.rotation);
          
          // Outer Glow
          ctx.shadowBlur = 15;
          ctx.shadowColor = u.side === 'user' ? "rgba(239, 68, 68, 0.5)" : "rgba(100, 100, 100, 0.5)";

          // Unit Body
          ctx.fillStyle = u.side === 'user' ? "#ef4444" : "#a1a1aa";
          ctx.beginPath();
          ctx.moveTo(-10, -10);
          ctx.lineTo(15, 0);
          ctx.lineTo(-10, 10);
          ctx.closePath();
          ctx.fill();

          // Health Bar
          ctx.fillStyle = "#22c55e";
          ctx.fillRect(-15, 20, 30 * (u.health / 100), 4);
          
          ctx.restore();
       });

       requestAnimationFrame(renderInfluence);
    };

    const animId = requestAnimationFrame(renderInfluence);
    return () => cancelAnimationFrame(animId);
  }, [units, width, height]);

  return (
    <div className="relative border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl bg-black">
      {/* Base Topographic Layer */}
      <canvas 
        ref={canvasRef} 
        width={width} 
        height={height} 
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Influence & Units Dynamic Layer */}
      <canvas 
        ref={influenceRef} 
        width={width} 
        height={height} 
        className="relative cursor-crosshair"
        onMouseMove={(e) => {
           const rect = e.currentTarget.getBoundingClientRect();
           setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseLeave={() => setHoverPos(null)}
        onClick={() => {
           // Basic selection logic
           onUnitSelect(null);
        }}
      />

      {/* Floating HUD info */}
      {hoverPos && (
         <div className="absolute top-4 right-4 bg-zinc-950/90 border border-zinc-800 p-4 rounded-2xl backdrop-blur-md pointer-events-none z-20">
            <div className="flex flex-col gap-1">
               <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Geo-Coordinates</span>
               <span className="text-sm font-black text-white tabular-nums tracking-tighter">
                  X: {Math.round(hoverPos.x)} | Y: {Math.round(hoverPos.y)}
               </span>
               <div className="h-[1px] bg-zinc-800 my-2" />
               <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Frontline Influence</span>
               <span className={`text-sm font-black tracking-tighter ${
                  polyglotService.calculateInfluenceAt(hoverPos, units) > 0 ? 'text-red-500' : 'text-zinc-500'
               }`}>
                  {Math.abs(polyglotService.calculateInfluenceAt(hoverPos, units)).toFixed(2)} % 
                  {polyglotService.calculateInfluenceAt(hoverPos, units) > 0 ? ' (DOMINATED)' : ' (NEUTRAL)'}
               </span>
            </div>
         </div>
      )}

      {/* Architecture Status HUD */}
      <div className="absolute bottom-4 left-4 flex gap-2 z-20 pointer-events-none">
         {[
            { label: "Engine (WASM)", status: "COMPUTING", color: "text-emerald-400" },
            { label: "AI (Python/REST)", status: "STRATEGIZING", color: "text-amber-400" },
            { label: "Backend (Go)", status: "SYNCED", color: "text-cyan-400" }
         ].map(h => (
           <div key={h.label} className="bg-zinc-950/80 border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${h.color.replace('text', 'bg')} animate-pulse`} />
              <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">{h.label}</span>
              <span className={`text-[9px] font-black ${h.color} uppercase`}>{h.status}</span>
           </div>
         ))}
      </div>
    </div>
  );
}
