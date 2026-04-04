import React, { useRef, useEffect, useState, useMemo } from "react";
import { polyglotService, UnitState, Vector2, FogCell, HeatmapCell, StrategicZone, TerrainMeshData } from "./logic/polyglot/ts/polyglot-router";
import { getUnitStats } from "./logic/polyglot/ts/unit_stats";
import { HP_Logic } from "./logic/polyglot/ts/HP_Logic";
import { MapTextureEngine } from "./logic/mapTexture/MapTextureGenerator";
import {
   drawInfanteri, drawTank,
   drawStealth, drawInterceptor, drawBomber, drawHeli, drawUAV, drawKamikaze, drawTransport,
   drawKapalInduk, drawDestroyer, drawKorvet, drawKapalSelamReguler, drawKapalSelamNuklir, drawKapalRanjau, drawKapalLogistik,
   drawAPC, drawArtileri, drawRoket, drawSAM, drawTactical
} from "./logic/icon_armada_pertempuran";
import { VFXRenderer } from "./logic/mapTexture/VFXRenderer";

interface GameplayProps {
   units: UnitState[];
   combatVfx?: any[];
   onUnitSelect: (id: string | null) => void;
   onMapClick?: (x: number, y: number, isRightClick: boolean) => void;
   onAreaSelected?: (rect: { x1: number, y1: number, x2: number, y2: number }) => void;
   drawMapBackground: (
      ctx: CanvasRenderingContext2D,
      camera: { x: number; y: number; zoom: number },
      width: number,
      height: number,
      fogCells?: FogCell[],
      heatmapCells?: HeatmapCell[],
      meshData?: TerrainMeshData,
      mousePos?: { x: number, y: number },
      barakCount?: number,
      phase?: string,
      barracksState?: any[],
      units?: UnitState[],
      targetArmada?: any,
      tankHangarsState?: any[],
      airfieldHangarsState?: any[],
      helipadsState?: any[],
      portShipsState?: any[],
      armoryState?: any[],
      userBarracksState?: any[],
      userTankHangarsState?: any[],
      userAirfieldHangarsState?: any[],
      userHelipadsState?: any[],
      userPortShipsState?: any[],
      userArmoryState?: any[]
   ) => void;
   hasSea?: boolean;
   targetArmada?: any;
   tankHangarsState?: any[];
   airfieldHangarsState?: any[];
   helipadsState?: any[];
   portShipsState?: any[];
   armoryState?: any[];
   userBarracksState?: any[];
   userTankHangarsState?: any[];
   userAirfieldHangarsState?: any[];
   userHelipadsState?: any[];
   userPortShipsState?: any[];
   userArmoryState?: any[];
   barakCount?: number;
   phase?: string;
   barracksState?: any[];
   width?: number;
   height?: number;
}

export default function Gameplay({
   units,
   combatVfx = [],
   onUnitSelect,
   onMapClick,
   onAreaSelected,
   drawMapBackground,
   hasSea = false,
   targetArmada = null,
   tankHangarsState = [],
   airfieldHangarsState = [],
   helipadsState = [],
   portShipsState = [],
   armoryState = [],
   userBarracksState = [],
   userTankHangarsState = [],
   userAirfieldHangarsState = [],
   userHelipadsState = [],
   userPortShipsState = [],
   userArmoryState = [],
   barakCount = 0,
   phase = "deployment",
   barracksState = [],
   width = 1200,
   height = 800
}: GameplayProps) {
   const containerRef = useRef<HTMLDivElement>(null);
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const minimapRef = useRef<HTMLCanvasElement>(null);

   const [viewport, setViewport] = useState({ w: width, h: height });
   const viewportRef = useRef({ w: width, h: height });
   const hoveredUnitRef = useRef<UnitState | null>(null);

   const fogCellsRef = useRef<FogCell[]>([]);
   const heatmapCellsRef = useRef<HeatmapCell[]>([]);
   const strategicZonesRef = useRef<StrategicZone[]>([]);
   const meshDataRef = useRef<TerrainMeshData | undefined>(undefined);
   const mouseWorldPosRef = useRef<{ x: number, y: number } | undefined>(undefined);

   const cameraRef = useRef({
      x: 0, y: 0, zoom: 0.1,
      tx: 0, ty: 0, tz: 0.1,
   });
   const isDraggingRef = useRef(false);
   const dragStartRef = useRef<{ x: number, y: number } | null>(null);
   const dragDistanceRef = useRef<number>(0);

   const selectionBoxRef = useRef<{ x1: number, y1: number, x2: number, y2: number } | null>(null);
   const isSelectingRef = useRef(false);
   const selectionStartWorldRef = useRef<{ x: number, y: number } | null>(null);

   useEffect(() => {
      viewportRef.current = viewport;
   }, [viewport]);

   const hasCenteredRef = useRef(false);

   useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const ro = new ResizeObserver(entries => {
         if (entries.length > 0) {
            const { width: w, height: h } = entries[0].contentRect;
            setViewport({ w, h });

            if (!hasCenteredRef.current && w > 0) {
               cameraRef.current.x = w / 2;
               cameraRef.current.y = h / 2;
               cameraRef.current.tx = w / 2;
               cameraRef.current.ty = h / 2;
               hasCenteredRef.current = true;
            }
         }
      });
      ro.observe(el);

      const THEATER_LIMIT = 15000;
      const applyConstraints = (cam: { tx: number, ty: number, tz: number }, w: number, h: number) => {
         const minZoomMap = Math.min(w, h) / 30000;
         cam.tz = Math.max(minZoomMap * 0.9, Math.min(5, cam.tz));
         const worldSize = (THEATER_LIMIT * 2) * cam.tz;

         if (worldSize <= w) { cam.tx = w / 2; } 
         else {
            const minX = w - (THEATER_LIMIT * cam.tz);
            const maxX = (THEATER_LIMIT * cam.tz);
            cam.tx = Math.max(minX, Math.min(maxX, cam.tx));
         }

         if (worldSize <= h) { cam.ty = h / 2; } 
         else {
            const minY = h - (THEATER_LIMIT * cam.tz);
            const maxY = (THEATER_LIMIT * cam.tz);
            cam.ty = Math.max(minY, Math.min(maxY, cam.ty));
         }
      };

      const onWheel = (e: WheelEvent) => {
         e.preventDefault();
         const rect = el.getBoundingClientRect();
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;
         const cam = cameraRef.current;
         const oldTargetZoom = cam.tz;
         let nextTargetZoom = cam.tz - e.deltaY * 0.0005;
         const minZoomLimit = Math.min(viewportRef.current.w, viewportRef.current.h) / 32000;
         nextTargetZoom = Math.max(minZoomLimit, Math.min(5, nextTargetZoom));
         const ratio = nextTargetZoom / oldTargetZoom;
         cam.tx = mouseX - (mouseX - cam.tx) * ratio;
         cam.ty = mouseY - (mouseY - cam.ty) * ratio;
         cam.tz = nextTargetZoom;
         applyConstraints(cam, viewportRef.current.w, viewportRef.current.h);
      };

      el.addEventListener('wheel', onWheel, { passive: false });
      return () => {
         ro.disconnect();
         el.removeEventListener('wheel', onWheel);
      };
   }, []);

   const frameCountRef = useRef(0);

   useEffect(() => {
      let isMounted = true;
      let lastUnitsHash = "";
      const updateLoop = async () => {
         if (!isMounted) return;
         const currentUnits = latestUnitsRef.current;
         const currentHash = JSON.stringify(currentUnits.length);
         if (currentHash !== lastUnitsHash || frameCountRef.current % 10 === 0) {
            const [fog, heatmap, zones, mesh] = await Promise.all([
               polyglotService.getFogOverlay(currentUnits),
               polyglotService.getTerritorialHeatmap(currentUnits),
               polyglotService.getStrategicZones(currentUnits, hasSea),
               polyglotService.getOptimizedMapGeometry(currentUnits, cameraRef.current)
            ]);
            if (isMounted) {
               fogCellsRef.current = fog;
               heatmapCellsRef.current = heatmap;
               strategicZonesRef.current = zones;
               meshDataRef.current = mesh as any;
               lastUnitsHash = currentHash;
            }
         }
         setTimeout(updateLoop, 150);
      };
      updateLoop();
      return () => { isMounted = false; };
   }, [hasSea]);

   const handleMouseDown = (e: React.MouseEvent) => {
      if (e.button === 2) {
         e.preventDefault();
         isSelectingRef.current = true;
         const cam = cameraRef.current;
         const rect = containerRef.current!.getBoundingClientRect();
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;
         const worldX = (mouseX - cam.x) / cam.zoom;
         const worldY = (mouseY - cam.y) / cam.zoom;
         selectionStartWorldRef.current = { x: worldX, y: worldY };
         selectionBoxRef.current = { x1: worldX, y1: worldY, x2: worldX, y2: worldY };
         dragDistanceRef.current = 0;
         return;
      }
      if (e.button !== 0) return;
      isDraggingRef.current = true;
      dragDistanceRef.current = 0;
      dragStartRef.current = { x: e.clientX, y: e.clientY };
   };

   const handleMouseMove = async (e: React.MouseEvent) => {
      const cam = cameraRef.current;
      if (isSelectingRef.current && selectionStartWorldRef.current && containerRef.current) {
         const rect = containerRef.current.getBoundingClientRect();
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;
         const worldX = (mouseX - cam.x) / cam.zoom;
         const worldY = (mouseY - cam.y) / cam.zoom;
         const dx = worldX - selectionStartWorldRef.current.x;
         const dy = worldY - selectionStartWorldRef.current.y;
         dragDistanceRef.current = Math.sqrt(dx * dx + dy * dy);
         selectionBoxRef.current = {
            x1: selectionStartWorldRef.current.x,
            y1: selectionStartWorldRef.current.y,
            x2: worldX,
            y2: worldY
         };
         return;
      }
      if (isDraggingRef.current && dragStartRef.current) {
         const dx = e.clientX - dragStartRef.current.x;
         const dy = e.clientY - dragStartRef.current.y;
         cam.tx += dx;
         cam.ty += dy;
         dragStartRef.current = { x: e.clientX, y: e.clientY };
         dragDistanceRef.current += Math.sqrt(dx * dx + dy * dy);
      }
      if (containerRef.current) {
         const rect = containerRef.current.getBoundingClientRect();
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;
         const worldX = (mouseX - cam.x) / cam.zoom;
         const worldY = (mouseY - cam.y) / cam.zoom;
         const closest = await polyglotService.getSpatialNearestUnit({ x: worldX, y: worldY }, latestUnitsRef.current, 30 / cam.zoom);
         if (closest !== hoveredUnitRef.current) {
            hoveredUnitRef.current = closest;
         }
         mouseWorldPosRef.current = { x: worldX, y: worldY };
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
      if (t.includes("uav")) return "Drone UAV";
      if (t.includes("intai") || t.includes("pengintai")) return "Pesawat Intai";
      if (t.includes("kamikaze")) return "Drone Kamikaze";
      if (t.includes("transport") || t.includes("angkut")) return "Pesawat Angkut";
      return type.toUpperCase();
   };

   const handleMouseUp = (e: React.MouseEvent) => {
      if (isSelectingRef.current && e.button === 2) {
         isSelectingRef.current = false;
         const box = selectionBoxRef.current;
         if (box && onAreaSelected && dragDistanceRef.current > 50) {
            onAreaSelected(box);
         } else if (onMapClick && dragDistanceRef.current <= 50) {
            const rect = containerRef.current!.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const cam = cameraRef.current;
            const worldX = (mouseX - cam.x) / cam.zoom;
            const worldY = (mouseY - cam.y) / cam.zoom;
            onMapClick(worldX, worldY, true);
         }
         selectionBoxRef.current = null;
         selectionStartWorldRef.current = null;
         return;
      }
      if (e.button === 0) {
         isDraggingRef.current = false;
         dragStartRef.current = null;
      }
   };

   const handleContextMenu = (e: React.MouseEvent) => { e.preventDefault(); };
   const handleClick = (e: React.MouseEvent) => {
      if (e.button !== 0) return;
      if (dragDistanceRef.current > 5) return;
      if (!containerRef.current || !onMapClick) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const cam = cameraRef.current;
      const worldX = (mouseX - cam.x) / cam.zoom;
      const worldY = (mouseY - cam.y) / cam.zoom;
      onMapClick(worldX, worldY, false);
   };

   const setZoomLevel = (lvl: number) => {
      const cam = cameraRef.current;
      const ratio = lvl / cam.tz;
      cam.tx = viewport.w / 2 - (viewport.w / 2 - cam.tx) * ratio;
      cam.ty = viewport.h / 2 - (viewport.h / 2 - cam.ty) * ratio;
      cam.tz = lvl;
   };

   const latestUnitsRef = useRef(units);
   latestUnitsRef.current = units;
   const latestAirfieldHangarsRef = useRef(airfieldHangarsState);
   latestAirfieldHangarsRef.current = airfieldHangarsState;
   const latestHelipadsRef = useRef(helipadsState);
   latestHelipadsRef.current = helipadsState;
   const latestTankHangarsRef = useRef(tankHangarsState);
   latestTankHangarsRef.current = tankHangarsState;
   const latestBarracksRef = useRef(barracksState);
   latestBarracksRef.current = barracksState;
   const latestArmoryRef = useRef(armoryState);
   latestArmoryRef.current = armoryState;

   const latestUserBarracksRef = useRef(userBarracksState);
   latestUserBarracksRef.current = userBarracksState;
   const latestUserTankHangarsRef = useRef(userTankHangarsState);
   latestUserTankHangarsRef.current = userTankHangarsState;
   const latestUserAirfieldHangarsRef = useRef(userAirfieldHangarsState);
   latestUserAirfieldHangarsRef.current = userAirfieldHangarsState;
   const latestUserHelipadsRef = useRef(userHelipadsState);
   latestUserHelipadsRef.current = userHelipadsState;
   const latestUserPortShipsRef = useRef(userPortShipsState);
   latestUserPortShipsRef.current = userPortShipsState;
   const latestUserArmoryRef = useRef(userArmoryState);
   latestUserArmoryRef.current = userArmoryState;

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const renderLoop = () => {
         const canvas = canvasRef.current;
         const ctx = canvas?.getContext("2d");
         if (!canvas || !ctx) return;
         if (canvas.width !== viewport.w || canvas.height !== viewport.h) {
            canvas.width = viewport.w;
            canvas.height = viewport.h;
         }
         const cam = cameraRef.current;
         const smoothingFactor = 0.15;
         cam.x += (cam.tx - cam.x) * smoothingFactor;
         cam.y += (cam.ty - cam.y) * smoothingFactor;
         cam.zoom += (cam.tz - cam.zoom) * smoothingFactor;

         ctx.clearRect(0, 0, canvas.width, canvas.height);
         frameCountRef.current++;

         drawMapBackground(
            ctx, cameraRef.current, canvas.width, canvas.height,
            fogCellsRef.current, heatmapCellsRef.current, meshDataRef.current,
            mouseWorldPosRef.current, barakCount, phase,
            latestBarracksRef.current, latestUnitsRef.current, targetArmada,
            latestTankHangarsRef.current, latestAirfieldHangarsRef.current,
            latestHelipadsRef.current, portShipsState, latestArmoryRef.current,
            latestUserBarracksRef.current,
            latestUserTankHangarsRef.current,
            latestUserAirfieldHangarsRef.current,
            latestUserHelipadsRef.current,
            latestUserPortShipsRef.current,
            latestUserArmoryRef.current
         );

         const camera = cameraRef.current;
         ctx.save();
         ctx.translate(camera.x, camera.y);
         ctx.scale(camera.zoom, camera.zoom);

         const currentUnits = latestUnitsRef.current;
         const visibleUnits = polyglotService.getVisibleUnits(currentUnits, camera, canvas.width, canvas.height);

         visibleUnits.forEach(u => {
            ctx.save();
            ctx.translate(u.pos.x, u.pos.y);
            ctx.rotate(u.rotation);
            const baseColor = u.side === 'user' ? "239, 68, 68" : "161, 161, 170";
            const hexColor = u.side === 'user' ? "#ef4444" : "#a1a1aa";
            const dynamicScale = 1.5 / Math.sqrt(camera.zoom);
            ctx.scale(dynamicScale, dynamicScale);
            ctx.lineWidth = Math.max(0.5, 1.2 / dynamicScale);

            const typeLower = u.type.toLowerCase();
            if (u.type === "air" || typeLower.includes("pesawat") || typeLower.includes("jet") || typeLower.includes("heli") || typeLower.includes("drone")) {
               if (typeLower.includes("stealth")) drawStealth(ctx, hexColor, baseColor);
               else if (typeLower.includes("interceptor") || typeLower.includes("cegat")) drawInterceptor(ctx, hexColor, baseColor);
               else if (typeLower.includes("bomber") || typeLower.includes("pembom")) drawBomber(ctx, hexColor, baseColor);
               else if (typeLower.includes("uav")) drawUAV(ctx, hexColor, baseColor);
               else if (typeLower.includes("recon") || typeLower.includes("intai")) drawInterceptor(ctx, hexColor, baseColor);
               else if (typeLower.includes("kamikaze")) drawKamikaze(ctx, hexColor, baseColor);
               else if (typeLower.includes("transport") || typeLower.includes("angkut")) drawTransport(ctx, hexColor, baseColor);
               else if (typeLower.includes("heli")) drawHeli(ctx, hexColor, baseColor);
               else drawInterceptor(ctx, hexColor, baseColor);
            } else if (u.type === "sea" || typeLower.includes("kapal") || typeLower.includes("destroyer") || typeLower.includes("selam") || typeLower.includes("corvette")) {
               if (typeLower.includes("induk")) drawKapalInduk(ctx, hexColor, baseColor);
               else if (typeLower.includes("destroyer")) drawDestroyer(ctx, hexColor, baseColor);
               else if (typeLower.includes("korvet") || typeLower.includes("corvette")) drawKorvet(ctx, hexColor, baseColor);
               else if (typeLower.includes("selam")) typeLower.includes("nuklir") ? drawKapalSelamNuklir(ctx, hexColor, baseColor) : drawKapalSelamReguler(ctx, hexColor, baseColor);
               else if (typeLower.includes("ranjau")) drawKapalRanjau(ctx, hexColor, baseColor);
               else if (typeLower.includes("logistik")) drawKapalLogistik(ctx, hexColor, baseColor);
               else drawDestroyer(ctx, hexColor, baseColor);
            } else if (typeLower.includes("infanteri") || typeLower.includes("pasukan") || typeLower.includes("barak")) drawInfanteri(ctx, hexColor, baseColor);
            else if (typeLower.includes("apc") || typeLower.includes("personel")) drawAPC(ctx, hexColor, baseColor);
            else if (typeLower.includes("artileri") || typeLower.includes("artillery")) drawArtileri(ctx, hexColor, baseColor);
            else if (typeLower.includes("roket") || typeLower.includes("rocket") || typeLower.includes("mlrs")) drawRoket(ctx, hexColor, baseColor);
            else if (typeLower.includes("sam") || typeLower.includes("pertahanan_udara")) drawSAM(ctx, hexColor, baseColor);
            else if (typeLower.includes("taktis") || typeLower.includes("tactical")) drawTactical(ctx, hexColor, baseColor);
            else drawTank(ctx, hexColor, baseColor);

            const stats = getUnitStats(u.type);
            const healthRatio = HP_Logic.getHealthRatio(u.health, stats.maxHealth);
            const barW = 32; const barH = 3;
            ctx.fillStyle = "rgba(24, 24, 27, 0.8)";
            ctx.fillRect(-barW / 2, 22, barW, barH);
            ctx.fillStyle = healthRatio > 0.3 ? "#22c55e" : "#ef4444";
            ctx.fillRect(-barW / 2, 22, barW * healthRatio, barH);
            ctx.restore();
         });

         VFXRenderer.drawVFXList(ctx, combatVfx as any, Date.now());

         strategicZonesRef.current.forEach(zone => {
            ctx.save();
            ctx.beginPath();
            ctx.arc(zone.center.x, zone.center.y, zone.radius, 0, Math.PI * 2);
            ctx.strokeStyle = zone.priority === "CRITICAL" ? "rgba(239, 68, 68, 0.5)" : "rgba(251, 191, 36, 0.3)";
            ctx.lineWidth = 2 / camera.zoom;
            ctx.setLineDash([100 / camera.zoom, 60 / camera.zoom]);
            ctx.stroke();
            ctx.restore();
         });

         const hoveredUnit = hoveredUnitRef.current;
         if (hoveredUnit) {
            const stats = getUnitStats(hoveredUnit.type);
            const fullLabel = `${getHumanLabel(hoveredUnit.type).toUpperCase()} | ${Math.ceil(hoveredUnit.health).toLocaleString('id-ID')} / ${stats.maxHealth.toLocaleString('id-ID')}`;
            const sideColor = hoveredUnit.side === 'user' ? "rgba(239, 68, 68, 1)" : "rgba(161, 161, 170, 1)";
            ctx.save();
            ctx.translate(hoveredUnit.pos.x, hoveredUnit.pos.y);
            const tooltipScale = 1.2 / Math.sqrt(camera.zoom); ctx.scale(tooltipScale, tooltipScale);
            ctx.font = "bold 13px Inter, sans-serif";
            const textWidth = ctx.measureText(fullLabel).width; const boxW = textWidth + 24; const boxH = 32; const ry = -50;
            ctx.fillStyle = "rgba(9, 9, 11, 0.95)"; ctx.shadowBlur = 15; ctx.shadowColor = sideColor;
            ctx.beginPath(); ctx.roundRect(-boxW / 2, ry, boxW, boxH, 8); ctx.fill();
            ctx.strokeStyle = sideColor; ctx.lineWidth = 1.5; ctx.stroke();
            ctx.shadowBlur = 0; ctx.fillStyle = "#ffffff"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillText(fullLabel, 0, ry + boxH / 2 + 1);
            ctx.restore();
         }

         const sBox = selectionBoxRef.current;
         if (sBox) {
            ctx.save();
            const sx = Math.min(sBox.x1, sBox.x2);
            const sy = Math.min(sBox.y1, sBox.y2);
            const sw = Math.abs(sBox.x2 - sBox.x1);
            const sh = Math.abs(sBox.y2 - sBox.y1);
            ctx.strokeStyle = "#0078d7";
            ctx.lineWidth = 1 / camera.zoom;
            ctx.strokeRect(sx, sy, sw, sh);
            ctx.fillStyle = "rgba(0, 120, 215, 0.25)";
            ctx.fillRect(sx, sy, sw, sh);
            ctx.restore();
         }
         ctx.restore();
         requestAnimationFrame(renderLoop);
      };
      const animId = requestAnimationFrame(renderLoop);
      return () => cancelAnimationFrame(animId);
   }, [viewport, combatVfx]);

   return (
      <div
         ref={containerRef}
         className="relative border border-zinc-900/50 rounded-[40px] overflow-hidden shadow-2xl bg-[#020617] w-full h-full cursor-crosshair select-none"
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onClick={handleClick}
         onContextMenu={handleContextMenu}
         onMouseLeave={(e) => { handleMouseUp(e); }}
      >
         <canvas ref={canvasRef} className="block pointer-events-none" />
         <div className="absolute top-4 left-4 flex gap-1 z-20 shadow-xl bg-zinc-950/50 backdrop-blur-sm p-1 rounded-xl pointer-events-auto">
            <button
               onClick={(e) => {
                  e.stopPropagation();
                  const targetZ = Math.min(viewport.w, viewport.h) / 30000;
                  cameraRef.current.tz = targetZ;
                  cameraRef.current.tx = viewport.w / 2;
                  cameraRef.current.ty = viewport.h / 2;
               }}
               className="bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 border border-emerald-500/50 px-3 py-1.5 rounded-lg text-[10px] font-black transition-all uppercase tracking-tight"
            >
               Full View
            </button>
            {[25, 50, 100].map(zm => (
               <button key={zm} onClick={(e) => { e.stopPropagation(); setZoomLevel(zm / 100); }}
                  className="bg-zinc-950/80 hover:bg-zinc-800 text-zinc-400 border border-zinc-800 px-3 py-1.5 rounded-lg text-[10px] font-black transition-all"
               >
                  {zm}%
               </button>
            ))}
         </div>
      </div>
   );
}
