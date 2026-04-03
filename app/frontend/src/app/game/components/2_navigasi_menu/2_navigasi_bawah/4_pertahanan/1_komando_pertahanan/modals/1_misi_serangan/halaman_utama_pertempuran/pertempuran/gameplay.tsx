"use client"

import React, { useRef, useEffect, useState, useMemo } from "react";
import { polyglotService, UnitState, Vector2 } from "./logic/polyglot/ts/polyglot-router";
import { drawWarMapBackground } from "./CanvasMapWar";
import { getUnitStats } from "./logic/polyglot/ts/unit_stats";
import { HP_Logic } from "./logic/polyglot/ts/HP_Logic";
import { 
   drawInfanteri, drawTank, 
   drawStealth, drawInterceptor, drawBomber, drawHeli, drawUAV, drawKamikaze, drawTransport,
   drawKapalInduk, drawDestroyer, drawKorvet, drawKapalSelamReguler, drawKapalSelamNuklir, drawKapalRanjau, drawKapalLogistik,
   drawAPC, drawArtileri, drawRoket, drawSAM, drawTactical 
} from "./logic/icon_armada_pertempuran";

interface GameplayProps {
   units: UnitState[];
   combatVfx?: { id: string, startX: number, startY: number, endX: number, endY: number, timestamp: number }[];
   onUnitSelect: (id: string | null) => void;
   onMapClick?: (x: number, y: number, isRightClick: boolean) => void;
   width?: number;
   height?: number;
}

export default function Gameplay({ units, combatVfx = [], onUnitSelect, onMapClick, width = 1700, height = 950 }: GameplayProps) {
   const containerRef = useRef<HTMLDivElement>(null);
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const minimapRef = useRef<HTMLCanvasElement>(null); // New Minimap Ref

   const [viewport, setViewport] = useState({ w: width, h: height });
   const viewportRef = useRef({ w: width, h: height }); // Robust dimensions for event handlers
   const hoveredUnitRef = useRef<UnitState | null>(null);

   // Use refs for camera and drag to avoid triggering React react-renders continuously
   const cameraRef = useRef({ x: 0, y: 0, zoom: 1 });
   const isDraggingRef = useRef(false);
   const dragStartRef = useRef<{ x: number, y: number } | null>(null);
   const dragDistanceRef = useRef<number>(0);

   useEffect(() => {
      viewportRef.current = viewport;
   }, [viewport]);

   const hasCenteredRef = useRef(false); // To run centering once

   useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      // Automatically adjust canvas sizes to fill the container wrapper perfectly without black borders
      const ro = new ResizeObserver(entries => {
         if (entries.length > 0) {
            const { width: w, height: h } = entries[0].contentRect;
            setViewport({ w, h });

            // INITIAL CAMERA CENTERING: Run once when dimensions are known
            if (!hasCenteredRef.current && w > 0) {
               cameraRef.current.x = w / 2;
               cameraRef.current.y = h / 2;
               hasCenteredRef.current = true;
            }
         }
      });
      ro.observe(el);

      const THEATER_LIMIT = 15000;
      const applyConstraints = (cam: { x: number, y: number, zoom: number }, w: number, h: number) => {
         // 1. Zoom Constraint: Prevent zooming out too far (Tactical Focus)
         // Previously: Math.max(w, h) / (THEATER_LIMIT * 2) which allowed seeing ALL 30k units.
         const minZoom = Math.max(w, h) / 10000; // Limits view to 10k units maximum
         cam.zoom = Math.max(minZoom, Math.min(5, cam.zoom));

         // 2. Position Constraint: Ensure viewport stays within [-THEATER_LIMIT, THEATER_LIMIT]
         // World range: [-15000, 15000]. Screen view: [-cam.x/zoom, (-cam.x + w)/zoom]
         const minX = w - (THEATER_LIMIT * cam.zoom);
         const maxX = (THEATER_LIMIT * cam.zoom);
         const minY = h - (THEATER_LIMIT * cam.zoom);
         const maxY = (THEATER_LIMIT * cam.zoom);

         cam.x = Math.max(minX, Math.min(maxX, cam.x));
         cam.y = Math.max(minY, Math.min(maxY, cam.y));
      };

      const onWheel = (e: WheelEvent) => {
         e.preventDefault();

         const rect = el.getBoundingClientRect();
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;

         const cam = cameraRef.current;
         const oldZoom = cam.zoom;

         // 1. Calculate and clamp the new zoom FIRST
         let nextZoom = cam.zoom - e.deltaY * 0.001;
         const minZoom = Math.max(viewportRef.current.w, viewportRef.current.h) / 10000;
         nextZoom = Math.max(minZoom, Math.min(5, nextZoom));

         // 2. Calculate pivot based on the ACTUAL zoom change
         const ratio = nextZoom / oldZoom;
         cam.x = mouseX - (mouseX - cam.x) * ratio;
         cam.y = mouseY - (mouseY - cam.y) * ratio;
         cam.zoom = nextZoom;

         // 3. Apply position constraints
         applyConstraints(cam, viewportRef.current.w, viewportRef.current.h);
      };

      el.addEventListener('wheel', onWheel, { passive: false });
      return () => {
         ro.disconnect();
         el.removeEventListener('wheel', onWheel);
      };
   }, []);

   const handleMouseDown = (e: React.MouseEvent) => {
      if (e.button !== 0) return; // Only drag on left click or middle click
      isDraggingRef.current = true;
      dragDistanceRef.current = 0;
      const cam = cameraRef.current;
      dragStartRef.current = { x: e.clientX - cam.x, y: e.clientY - cam.y };
   };

   const handleMouseMove = (e: React.MouseEvent) => {
      const cam = cameraRef.current;
      if (isDraggingRef.current && dragStartRef.current) {
         dragDistanceRef.current += Math.abs(e.movementX) + Math.abs(e.movementY);
         cam.x = e.clientX - dragStartRef.current.x;
         cam.y = e.clientY - dragStartRef.current.y;

         // Apply bounds constraint after pan
         const THEATER_LIMIT = 15000;
         const minX = viewport.w - (THEATER_LIMIT * cam.zoom);
         const maxX = (THEATER_LIMIT * cam.zoom);
         const minY = viewport.h - (THEATER_LIMIT * cam.zoom);
         const maxY = (THEATER_LIMIT * cam.zoom);

         cam.x = Math.max(minX, Math.min(maxX, cam.x));
         cam.y = Math.max(minY, Math.min(maxY, cam.y));
      }
      if (containerRef.current) {
         const rect = containerRef.current.getBoundingClientRect();
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;
         
         const worldX = (mouseX - cam.x) / cam.zoom;
         const worldY = (mouseY - cam.y) / cam.zoom;

         // Detect hovered unit
         let closest: UnitState | null = null;
         let minDist = 30 / cam.zoom; // Adjustable threshold

         latestUnitsRef.current.forEach(u => {
            const dx = u.pos.x - worldX;
            const dy = u.pos.y - worldY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDist) {
               minDist = dist;
               closest = u;
            }
         });
         
         if (closest !== hoveredUnitRef.current) {
            hoveredUnitRef.current = closest;
         }
      }
   };

   const getHumanLabel = (type: string) => {
      const t = type.toLowerCase();
      if (t.includes("infanteri") || t.includes("pasukan") || t.includes("barak")) return "Pasukan Infanteri";
      if (t.includes("tank_tempur") || t === "tank") return "Main Battle Tank";
      if (t.includes("apc") || t.includes("personel")) return "APC / IFV";
      if (t.includes("artileri")) return "Artileri Berat";
      if (t.includes("roket") || t.includes("mlrs")) return "MLRS Rocket";
      if (t.includes("sam") || t.includes("pertahanan_udara")) return "Mobile SAM";
      if (t.includes("taktis")) return "Kendaraan Taktis";
      
      if (t.includes("kapal_induk")) return "Kapal Induk";
      if (t.includes("destroyer")) return "Kapal Destroyer";
      if (t.includes("korvet") || t.includes("corvette")) return "Kapal Korvet";
      if (t.includes("selam_nuklir")) return "Kapal Selam Nuklir";
      if (t.includes("selam")) return "Kapal Selam Reguler";
      if (t.includes("ranjau")) return "Kapal Ranjau";
      if (t.includes("logistik")) return "Kapal Logistik";

      if (t.includes("stealth")) return "Jet Stealth";
      if (t.includes("interceptor") || t.includes("cegat")) return "Jet Interceptor";
      if (t.includes("bomber") || t.includes("pengebom")) return "Pesawat Pengebom";
      if (t.includes("heli") || t.includes("helikopter")) return "Helikopter Serang";
      if (t.includes("uav") || t.includes("intai")) return "Drone UAV";
      if (t.includes("kamikaze")) return "Drone Kamikaze";
      if (t.includes("transport") || t.includes("angkut")) return "Pesawat Angkut";

      return type.toUpperCase();
   };

   const handleMouseUp = (e: React.MouseEvent) => {
      if (isDraggingRef.current && e.button === 0) {
         isDraggingRef.current = false;
         dragStartRef.current = null;
      }
   };

   const handleContextMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      if (!containerRef.current || !onMapClick) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const cam = cameraRef.current;

      const worldX = (mouseX - cam.x) / cam.zoom;
      const worldY = (mouseY - cam.y) / cam.zoom;
      onMapClick(worldX, worldY, true);
   };

   const handleClick = (e: React.MouseEvent) => {
      if (e.button !== 0) return;
      if (dragDistanceRef.current > 5) return; // Ignore click if user was dragging map

      if (!containerRef.current || !onMapClick) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const cam = cameraRef.current;

      const worldX = (mouseX - cam.x) / cam.zoom;
      const worldY = (mouseY - cam.y) / cam.zoom;
      onMapClick(worldX, worldY, false);
   };

   const setZoomLevel = (targetZoom: number) => {
      const cam = cameraRef.current;
      const centerViewportX = viewport.w / 2;
      const centerViewportY = viewport.h / 2;

      // Calculate world coordinates at the center of the screen
      const worldCenterX = (centerViewportX - cam.x) / cam.zoom;
      const worldCenterY = (centerViewportY - cam.y) / cam.zoom;

      cam.zoom = targetZoom;

      // Re-adjust camera so we zoom smoothly towards the center of the screen
      cam.x = centerViewportX - worldCenterX * targetZoom;
      cam.y = centerViewportY - worldCenterY * targetZoom;
   };

   const latestUnitsRef = useRef(units);
   latestUnitsRef.current = units;

   // High-Performance Consolidated Rendering Loop
   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const renderLoop = () => {
         // Safe conditional resize (Huge performance gain without breaking size)
         if (canvas.width !== viewport.w || canvas.height !== viewport.h) {
            canvas.width = viewport.w;
            canvas.height = viewport.h;
         }

         ctx.clearRect(0, 0, canvas.width, canvas.height);

         // Topographic Tactical Map via CanvasMapWar
         drawWarMapBackground(ctx, cameraRef.current, canvas.width, canvas.height);

         const camera = cameraRef.current;

         ctx.save();
         ctx.translate(camera.x, camera.y);
         ctx.scale(camera.zoom, camera.zoom);

         // Viewport Math for Native Culling
         const worldStartX = -camera.x / camera.zoom;
         const worldStartY = -camera.y / camera.zoom;
         const worldEndX = worldStartX + canvas.width / camera.zoom;
         const worldEndY = worldStartY + canvas.height / camera.zoom;

         // 2.5 Draw Tactical Boundary Box (Center, Left, Right)
         const vertLinesX = [-15000, 0, 15000];
         ctx.save();
         ctx.beginPath();
         ctx.setLineDash([30, 20]);
         ctx.strokeStyle = "rgba(239, 68, 68, 0.6)";
         ctx.lineWidth = 4 / camera.zoom;
         ctx.shadowBlur = 10;
         ctx.shadowColor = "#ef4444";

         vertLinesX.forEach(x => {
            ctx.beginPath();
            ctx.moveTo(x, -15000);
            ctx.lineTo(x, 15000);
            ctx.stroke();
         });

         // Horizontal Deployment Boundaries (Left & Right 15000 units)
         const horizLinesY = [-15000, 15000]; // Absolute theater limits
         horizLinesY.forEach(y => {
            ctx.beginPath();
            ctx.moveTo(-15000, y);
            ctx.lineTo(15000, y);
            ctx.stroke();
         });
         ctx.setLineDash([]);

         // Boundary Labels removed by user request
         ctx.restore();

         // 3. Draw Tactical Warfare Units
         units.forEach(u => {
            // FRUSTUM CULLING: Skip drawing units that are off-screen
            const margin = 100 / camera.zoom;
            if (u.pos.x < worldStartX - margin || u.pos.x > worldEndX + margin ||
                u.pos.y < worldStartY - margin || u.pos.y > worldEndY + margin) return;

            ctx.save();
            ctx.translate(u.pos.x, u.pos.y);
            ctx.rotate(u.rotation);

            const baseColor = u.side === 'user' ? "239, 68, 68" : "161, 161, 170";
            const hexColor = u.side === 'user' ? "#ef4444" : "#a1a1aa";

            // Anti-Shrink Dynamic Scaling (Ensures visibility at high zoom-out)
            const dynamicScale = 1.5 / Math.sqrt(camera.zoom);
            ctx.scale(dynamicScale, dynamicScale);

            // Responsive Line Width
            ctx.lineWidth = Math.max(0.5, 1.2 / dynamicScale);

            const typeLower = u.type.toLowerCase();

            if (u.type === "air" || typeLower.includes("pesawat") || typeLower.includes("jet") || typeLower.includes("heli") || typeLower.includes("drone")) {
               if (typeLower.includes("stealth")) {
                  drawStealth(ctx, hexColor, baseColor);
               } else if (typeLower.includes("interceptor") || typeLower.includes("cegat")) {
                  drawInterceptor(ctx, hexColor, baseColor);
               } else if (typeLower.includes("bomber") || typeLower.includes("pembom")) {
                  drawBomber(ctx, hexColor, baseColor);
               } else if (typeLower.includes("heli") || typeLower.includes("helikopter")) {
                  drawHeli(ctx, hexColor, baseColor);
               } else if (typeLower.includes("uav") || typeLower.includes("recon") || typeLower.includes("intai")) {
                  drawUAV(ctx, hexColor, baseColor);
               } else if (typeLower.includes("kamikaze")) {
                  drawKamikaze(ctx, hexColor, baseColor);
               } else if (typeLower.includes("transport") || typeLower.includes("angkut")) {
                  drawTransport(ctx, hexColor, baseColor);
               } else {
                  drawInterceptor(ctx, hexColor, baseColor); // Fallback for generic jets
               }
            } else if (u.type === "sea" || typeLower.includes("kapal") || typeLower.includes("destroyer") || typeLower.includes("selam") || typeLower.includes("corvette")) {
               if (typeLower.includes("induk")) {
                  drawKapalInduk(ctx, hexColor, baseColor);
               } else if (typeLower.includes("destroyer")) {
                  drawDestroyer(ctx, hexColor, baseColor);
               } else if (typeLower.includes("korvet") || typeLower.includes("corvette")) {
                  drawKorvet(ctx, hexColor, baseColor);
               } else if (typeLower.includes("selam")) {
                  if (typeLower.includes("nuklir")) {
                     drawKapalSelamNuklir(ctx, hexColor, baseColor);
                  } else {
                     drawKapalSelamReguler(ctx, hexColor, baseColor);
                  }
               } else if (typeLower.includes("ranjau")) {
                  drawKapalRanjau(ctx, hexColor, baseColor);
               } else if (typeLower.includes("logistik")) {
                  drawKapalLogistik(ctx, hexColor, baseColor);
               } else {
                  drawDestroyer(ctx, hexColor, baseColor); // Fallback for generic ships
               }
            } else if (typeLower.includes("infanteri") || typeLower.includes("pasukan") || typeLower.includes("barak")) {
               drawInfanteri(ctx, hexColor, baseColor);
            } else if (typeLower.includes("apc") || typeLower.includes("personel")) {
               drawAPC(ctx, hexColor, baseColor);
            } else if (typeLower.includes("artileri") || typeLower.includes("artillery")) {
               drawArtileri(ctx, hexColor, baseColor);
            } else if (typeLower.includes("roket") || typeLower.includes("rocket") || typeLower.includes("mlrs")) {
               drawRoket(ctx, hexColor, baseColor);
            } else if (typeLower.includes("sam") || typeLower.includes("pertahanan_udara")) {
               drawSAM(ctx, hexColor, baseColor);
            } else if (typeLower.includes("taktis") || typeLower.includes("tactical")) {
               drawTactical(ctx, hexColor, baseColor);
            } else {
               drawTank(ctx, hexColor, baseColor);
            }

            // 4. Tactical Health Bar (Standardized Length, Dynamic Durability)
            const stats = getUnitStats(u.type);
            const healthRatio = HP_Logic.getHealthRatio(u.health, stats.maxHealth);
            const barW = 32; // Standardized total width
            const barH = 3;  // Sleek tactical height

            // Bar Border/Background
            ctx.fillStyle = "rgba(24, 24, 27, 0.8)"; // zinc-900
            ctx.fillRect(-barW / 2, 22, barW, barH);

            // Progress Bar
            ctx.fillStyle = healthRatio > 0.3 ? "#22c55e" : "#ef4444"; // Green to Red warning
            ctx.fillRect(-barW / 2, 22, barW * healthRatio, barH);

            ctx.restore();
         });

         // 4. Draw VFX Tracers (Laser/Cannons)
         const now = Date.now();
         combatVfx.forEach(vfx => {
            const age = now - vfx.timestamp;
            if (age > 300) return; // fade out over 300ms

            // FRUSTUM CULLING for VFX: Skip if both start and end are off-screen
            const margin = 100 / camera.zoom;
            if ((vfx.startX < worldStartX - margin && vfx.endX < worldStartX - margin) ||
                (vfx.startX > worldEndX + margin && vfx.endX > worldEndX + margin) ||
                (vfx.startY < worldStartY - margin && vfx.endY < worldStartY - margin) ||
                (vfx.startY > worldEndY + margin && vfx.endY > worldEndY + margin)) return;

            const alpha = 1 - (age / 300);
            ctx.beginPath();
            ctx.moveTo(vfx.startX, vfx.startY);
            ctx.lineTo(vfx.endX, vfx.endY);
            ctx.strokeStyle = `rgba(252, 211, 77, ${alpha})`; // amber-300
            ctx.lineWidth = 3;
            // Add a slight blur shadow for glowing laser
            ctx.shadowColor = "rgba(252, 211, 77, 1)";
            ctx.shadowBlur = 10 * alpha;
            ctx.stroke();

            ctx.shadowBlur = 0; // reset
         });

         // 5. Draw High-Performance Native Minimap
         const mCanvas = minimapRef.current;
         if (mCanvas) {
            const mCtx = mCanvas.getContext("2d");
            if (mCtx) {
               mCtx.clearRect(0, 0, mCanvas.width, mCanvas.height);

               // Optimized Scanlines: Single semi-transparent overlay instead of heavy loop
               ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
               ctx.fillRect(0, 0, canvas.width, canvas.height); 

               // Radar Base
               mCtx.fillStyle = "rgba(9, 9, 11, 0.9)"; // zinc-950
               mCtx.fillRect(0, 0, 200, 200);

               // Draw bounds (Simulated 30000x30000 map scale down to 200x200 canvas)
               const mapScale = 200 / 30000;
               const offsetX = 15000;
               const offsetY = 15000;

               // Map Grid for aesthetics
               mCtx.strokeStyle = "rgba(39, 39, 42, 0.5)"; // zinc-800
               mCtx.lineWidth = 1;
               for (let i = 0; i < 200; i += 25) {
                  mCtx.beginPath(); mCtx.moveTo(i, 0); mCtx.lineTo(i, 200); mCtx.stroke();
                  mCtx.beginPath(); mCtx.moveTo(0, i); mCtx.lineTo(200, i); mCtx.stroke();
               }

               // Operational Boundary Box (Center, Left, Right)
               const vertLinesXMinimap = [-15000, 0, 15000];
               mCtx.strokeStyle = "rgba(239, 68, 68, 0.5)";
               mCtx.lineWidth = 1;
               mCtx.setLineDash([5, 5]);
               vertLinesXMinimap.forEach(x => {
                  mCtx.beginPath();
                  mCtx.moveTo((x + offsetX) * mapScale, 0);
                  mCtx.lineTo((x + offsetX) * mapScale, 200);
                  mCtx.stroke();
               });

               // Horizontal boundaries on Minimap
               horizLinesY.forEach(y => {
                  mCtx.beginPath();
                  mCtx.moveTo((-15000 + offsetX) * mapScale, (y + offsetY) * mapScale);
                  mCtx.lineTo((15000 + offsetX) * mapScale, (y + offsetY) * mapScale);
                  mCtx.stroke();
               });

               mCtx.setLineDash([]);

               // Draw Blips
               units.forEach(u => {
                  mCtx.fillStyle = u.side === 'user' ? '#ef4444' : '#a1a1aa';
                  mCtx.fillRect((u.pos.x + offsetX) * mapScale, (u.pos.y + offsetY) * mapScale, 3, 3);
               });

               // Draw Viewport Camera Box
               const camW = canvas.width / camera.zoom;
               const camH = canvas.height / camera.zoom;
               const camX = -camera.x / camera.zoom;
               const camY = -camera.y / camera.zoom;

               mCtx.strokeStyle = "rgba(16, 185, 129, 0.8)"; // emerald-500 box
               mCtx.lineWidth = 1.5;
               mCtx.strokeRect((camX + offsetX) * mapScale, (camY + offsetY) * mapScale, camW * mapScale, camH * mapScale);
            }
         }

         // 6. Tactical Tooltip Rendering (Premium Visuals)
         const hoveredUnit = hoveredUnitRef.current;
         if (hoveredUnit) {
            const label = getHumanLabel(hoveredUnit.type).toUpperCase();
            const sideColor = hoveredUnit.side === 'user' ? "rgba(239, 68, 68, 1)" : "rgba(161, 161, 170, 1)";
            const glowColor = hoveredUnit.side === 'user' ? "rgba(239, 68, 68, 0.4)" : "rgba(161, 161, 170, 0.4)";
            
            ctx.save();
            ctx.translate(hoveredUnit.pos.x, hoveredUnit.pos.y);
            
            // Dynamic Tooltip Scaling for Readability
            const tooltipScale = 1.2 / Math.sqrt(camera.zoom);
            ctx.scale(tooltipScale, tooltipScale);

            ctx.font = "bold 13px Inter, system-ui, sans-serif";
            const textWidth = ctx.measureText(label).width;
            const boxW = textWidth + 24;
            const boxH = 32;
            const ry = -50; 

            // Animated Pulse Logic
            const pulse = (Math.sin(Date.now() / 150) + 1) / 2;

            // Background with Tactical blur-like effect
            ctx.fillStyle = "rgba(9, 9, 11, 0.95)";
            ctx.shadowBlur = 15;
            ctx.shadowColor = glowColor;
            
            // Draw Box
            const rx = -boxW / 2;
            ctx.beginPath();
            ctx.roundRect(rx, ry, boxW, boxH, 8);
            ctx.fill();
            
            // Glowing Border
            ctx.strokeStyle = sideColor;
            ctx.lineWidth = 1.5 + (pulse * 0.5);
            ctx.stroke();

            // Label Text
            ctx.shadowBlur = 0;
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.letterSpacing = "1px";
            
            const isInfantry = label.includes("INFANTERI") || label.includes("PASUKAN");
            if (isInfantry) {
               // Render split-screen like feeling for infantry (Personnel Count)
               ctx.font = "bold 11px Inter, sans-serif";
               ctx.fillText(label, 0, ry + 12);
               ctx.font = "bold 9px Inter, sans-serif";
               ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
               ctx.fillText("10.000 PERSONEL", 0, ry + 22);
            } else {
               ctx.fillText(label, 0, ry + boxH / 2 + 1);
            }

            // Origin Indicator (Mini side tag)
            ctx.font = "bold 7px Inter, sans-serif";
            ctx.fillStyle = hoveredUnit.side === 'user' ? "#ef4444" : "#a1a1aa";
            ctx.fillText(hoveredUnit.side === 'user' ? "NATIONAL UNIT" : "HOSTILE UNIT", 0, ry - 8);

            ctx.restore();
         }

         ctx.restore();
         requestAnimationFrame(renderLoop);
      };

      const animId = requestAnimationFrame(renderLoop);
      return () => cancelAnimationFrame(animId);
   }, [units, viewport]); // viewport bounds change requires canvas size adjustment

   return (
      <div
         ref={containerRef}
         className="relative border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl bg-black w-full h-full cursor-crosshair min-h-[600px]"
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onClick={handleClick}
         onContextMenu={handleContextMenu}
         onMouseLeave={(e) => { handleMouseUp(e); }}
      >
         <canvas
            ref={canvasRef}
            className="block pointer-events-none"
         />

         {/* Minimap Canvas Overlay */}
         <div className="absolute top-4 right-4 z-20 shadow-2xl rounded-2xl overflow-hidden border border-zinc-800 pointer-events-none">
            <canvas
               ref={minimapRef}
               width={200}
               height={200}
               className="block bg-black/50 backdrop-blur-md"
            />
            {/* Minimap overlays */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
               <span className="text-[9px] font-black tracking-widest text-emerald-500 uppercase">Radar Link</span>
            </div>
         </div>

         {/* Optics / Zoom Quick Controls */}
         <div className="absolute top-4 left-4 flex gap-1 z-20 shadow-xl bg-zinc-950/50 backdrop-blur-sm p-1 rounded-xl pointer-events-auto">
            {[25, 50, 75, 100].map(zm => (
               <button
                  key={zm}
                  onClick={(e) => { e.stopPropagation(); setZoomLevel(zm / 100); }}
                  className="bg-zinc-950/80 hover:bg-emerald-500/20 text-zinc-400 hover:text-emerald-400 border border-zinc-800 px-3 py-1.5 rounded-lg text-[10px] font-black transition-all"
               >
                  {zm}%
               </button>
            ))}
         </div>

         {/* Architecture Routing Indicators */}
         <div className="absolute bottom-4 left-4 flex gap-2 z-20 pointer-events-none bg-zinc-950/50 backdrop-blur-sm p-1 rounded-xl">
            {[
               { label: "Engine (WASM/C++)", status: "FRUSTUM CULLING", color: "text-emerald-400" },
               { label: "AI Core (Python)", status: "SPATIAL MAP", color: "text-amber-400" },
               { label: "Procedural (Rust)", status: "TILE GENERATION", color: "text-blue-400" }
            ].map(h => (
               <div key={h.label} className="bg-zinc-950 border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                  <div className={`w-1.5 h-1.5 rounded-full ${h.color.replace('text', 'bg')} animate-pulse`} />
                  <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">{h.label}</span>
                  <span className={`text-[9px] font-black ${h.color} uppercase`}>{h.status}</span>
               </div>
            ))}
         </div>
      </div>
   );
}
