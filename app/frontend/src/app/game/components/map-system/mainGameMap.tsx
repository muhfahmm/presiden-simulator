"use client"

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { countries as centersData } from "@/app/database/data/negara/benua/index";
import { allRelations } from "@/app/database/data/database_hubungan_antar_negara/index";
import { relationStorage } from "./modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { unSecurityCouncilStorage } from "../2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";

interface GameMapCanvasProps {

  userCountry: string;
  targetCountry: string | null;
  onSelect: (name: string) => void;
  mapMode?: "default" | "sda" | "hubungan" | "trade";
  active?: boolean;
  geoData?: any;
}

const geoJsonToIndo: { [key: string]: string } = {
  "The Bahamas": "bahama",
  "Democratic Republic of the Congo": "republik demokratik kongo",
  "Northern Cyprus": "siprus",
  "Czech Republic": "ceko",
  "Guinea Bissau": "guinea-bissau",
  "Equatorial Guinea": "guinea",
  "Macedonia": "makedonia utara",
  "Republic of Serbia": "republik serbia",
  "Swaziland": "eswatini",
  "East Timor": "timor-leste",
  "Falkland Islands": "argentina",
  "Western Sahara": "maroko",
  "Somaliland": "somalia",
  "New Caledonia": "fiji",
  "Solomon Islands": "marshall",
  "United Kingdom": "inggris"
};

// Pre-compute relation for highlighted countries only (called max 2x per render, not 207x)
const getRelation = (name: string, userCountry: string) => {
  if (name === userCountry) return 100;
  const userEntry = centersData.find(c => c.name_id === userCountry || c.name_en === userCountry);
  const userId = userEntry ? userEntry.name_id.toLowerCase().trim() : userCountry.toLowerCase().trim();
  const targetId = relationStorage.normalizeTargetId(name, centersData);
  const userRelations = (allRelations as any)[userId];
  const relationData = Array.isArray(userRelations) 
    ? userRelations.find((item: any) => item.name.toLowerCase().trim() === targetId)
    : null;
  const baseScore = relationData ? (relationData as any).relation : 50;
  const rawScore = relationStorage.getRelationScore(targetId, baseScore);
  const isUNSCMember = unSecurityCouncilStorage.getData()?.members?.some((m: any) => 
    m.name.toLowerCase() === userCountry.toLowerCase()
  );
  return relationStorage.calculateFinalScore(rawScore, !!isUNSCMember);
};

const maritimeLabels = [
  { name: "S A M U D R A   P A S I F I K", lon: -140, lat: 0, size: 36, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   P A S I F I K", lon: 160, lat: 10, size: 36, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   A T L A N T I K", lon: -40, lat: 25, size: 36, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   A T L A N T I K", lon: -20, lat: -25, size: 36, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   H I N D I A", lon: 80, lat: -20, size: 36, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   A R K T I K", lon: 0, lat: 80, size: 32, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   S E L A T A N", lon: 0, lat: -60, size: 32, color: "rgba(56, 189, 248, 0.15)" },
  { name: "Laut Mediterania", lon: 18, lat: 34, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Karibia", lon: -75, lat: 15, size: 24, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Cina Selatan", lon: 112, lat: 12, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Filipina", lon: 130, lat: 15, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Jawa", lon: 110, lat: -5, size: 16, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Banda", lon: 130, lat: -6, size: 16, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Hitam", lon: 35, lat: 43, size: 18, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Merah", lon: 38, lat: 20, size: 18, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Baltik", lon: 20, lat: 57, size: 18, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Utara", lon: 3, lat: 56, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Jepang", lon: 135, lat: 40, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Bering", lon: -175, lat: 58, size: 24, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Arab", lon: 65, lat: 15, size: 24, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Tasman", lon: 160, lat: -40, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Koral", lon: 155, lat: -15, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Meksiko", lon: -90, lat: 25, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Benggala", lon: 90, lat: 15, size: 24, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Persia", lon: 51, lat: 26, size: 16, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Aden", lon: 48, lat: 12, size: 14, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Guinea", lon: 0, lat: 0, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Alaska", lon: -145, lat: 55, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Selat Malaka", lon: 99, lat: 4, size: 12, color: "rgba(2, 132, 199, 0.6)" },
  { name: "Selat Gibraltar", lon: -5.6, lat: 35.5, size: 12, color: "rgba(2, 132, 199, 0.6)" },
  { name: "Selat Hormuz", lon: 56.5, lat: 26.5, size: 12, color: "rgba(2, 132, 199, 0.6)" },
  { name: "Selat Sunda", lon: 105, lat: -6.5, size: 12, color: "rgba(2, 132, 199, 0.6)" },
  { name: "Selat Bosporus", lon: 29, lat: 41, size: 12, color: "rgba(2, 132, 199, 0.6)" },
  { name: "Terusan Suez", lon: 33.5, lat: 31, size: 12, color: "rgba(2, 132, 199, 0.6)" },
  { name: "Terusan Panama", lon: -78.5, lat: 8, size: 12, color: "rgba(2, 132, 199, 0.6)" },
  { name: "Selat Inggris", lon: 1, lat: 51, size: 14, color: "rgba(2, 132, 199, 0.6)" },
  { name: "Kanal Taiwan", lon: 119.5, lat: 24, size: 14, color: "rgba(2, 132, 199, 0.6)" }
];

const getContinentColor = (name: string, id: string): string => {
  const n = name.trim().toLowerCase();
  const i = id?.toUpperCase() || "";
  if (["AGO", "BDI", "BEN", "BFA", "BWA", "CAF", "CIV", "CMR", "COD", "COG", "COM", "CPV", "DJI", "DZA", "EGY", "ERI", "ETH", "GAB", "GHA", "GIN", "GMB", "GNB", "GNQ", "KEN", "LBR", "LBY", "LSO", "MAR", "MDG", "MLI", "MOZ", "MRT", "MUS", "MWI", "NAM", "NER", "NGA", "REU", "RWA", "SDN", "SSD", "SEN", "SLE", "SOM", "STP", "SWZ", "SYC", "TCD", "TGO", "TUN", "TZA", "UGA", "ZAF", "ZMB", "ZWE", "ESH", "-99"].includes(i) || /senegal|gambia|guinea|ivory|tanzania|somaliland|sahara|congo|ethiopia|somalia|eritrea|djibouti/.test(n)) return "rgba(16, 185, 129, 0.4)";
  if (["AFG", "ARE", "ARM", "AZE", "BGD", "BHR", "BRN", "BTN", "CHN", "-99", "CYP", "GEO", "IDN", "IND", "IRN", "IRQ", "ISR", "JOR", "JPN", "KAZ", "KGZ", "KHM", "KOR", "KWT", "LAO", "LBN", "LKA", "MDV", "MMR", "MNG", "MYS", "NPL", "OMN", "PAK", "PHL", "PRK", "PSE", "QAT", "SAU", "SGP", "SYR", "THA", "TJK", "TKM", "TLS", "TUR", "TKM", "UZB", "VNM", "YEM", "TWN"].includes(i) || /india|china|japan|indonesia|pakistan|korea|vietnam|thailand|bangladesh|kyrgyz|tajikistan/.test(n)) return "rgba(245, 158, 11, 0.4)";
  if (["ALB", "AND", "AUT", "BEL", "BGR", "BIH", "BLR", "CHE", "CZE", "DEU", "DNK", "ESP", "EST", "FIN", "FRA", "GBR", "GRC", "HRV", "HUN", "IRL", "ISL", "ITA", "KOS", "CS-KM", "LTU", "LUX", "LVA", "MDA", "MCO", "MNE", "NLD", "NOR", "POL", "PRT", "ROU", "RUS", "SMR", "SRB", "SVK", "SVN", "SWE", "UKR", "VAT", "LIE", "MKD"].includes(i) || /russia|france|germany|italy|united kingdom|spain|romania/.test(n)) return "rgba(59, 130, 246, 0.4)";
  if (["BHS", "BLZ", "BMU", "CAN", "CRI", "CUB", "DOM", "GRL", "GTM", "HND", "HTI", "JAM", "MEX", "NIC", "PAN", "PRI", "SLV", "TTO", "USA", "ATG", "BRB", "DMA", "GRD", "KNA", "LCA", "VCT"].includes(i) || /united states|canada|mexico|cuba/.test(n)) return "rgba(139, 92, 246, 0.4)";
  if (["ARG", "BOL", "BRA", "CHL", "COL", "ECU", "FLK", "GUF", "GUY", "PER", "PRY", "SUR", "URY", "VEN"].includes(i) || /brazil|argentina|colombia|chile|peru/.test(n)) return "rgba(236, 72, 153, 0.4)";
  if (["AUS", "FJI", "NCL", "NZL", "SLB", "VUT", "PNG", "KIR", "MHL", "FSM", "NRU", "PLW", "WSM", "TON", "TUV"].includes(i) || /australia|zealand|papua/.test(n)) return "rgba(6, 182, 212, 0.4)";
  if (i === "ATA" || i === "ATF" || n.includes("antarctica")) return "rgba(148, 163, 184, 0.4)";
  return "rgba(71, 85, 105, 0.3)";
};

export default function GameMapCanvas({ userCountry, targetCountry, onSelect, active = true, geoData }: GameMapCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [tick, setTick] = useState(0);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const mouseDownPosRef = useRef<{ x: number; y: number } | null>(null);
  const staticCacheRef = useRef<HTMLCanvasElement | null>(null);
  const needsCacheUpdate = useRef(true);
  const lastHoverRef = useRef(false); // Prevent redundant setIsHovering calls

  const mapWidth = 6000;
  const mapHeight = 2400;
  
  const project = useCallback((lon: number, lat: number) => ({ 
    x: ((lon + 180) / 360) * mapWidth, 
    y: ((90 - lat) / 180) * mapHeight 
  }), []);

  // Pre-compute pixel positions for all countries (ONCE, not per mouse-move)
  const centerPixels = useMemo(() => {
    return centersData.map((c: any) => ({
      ...c,
      px: ((c.lon + 180) / 360) * mapWidth,
      py: ((90 - c.lat) / 180) * mapHeight
    }));
  }, []);

  // Path2D memoization (only recomputed when geoData changes)
  const paths = useMemo(() => {
    if (!geoData) return [];
    needsCacheUpdate.current = true;
    return geoData.features.map((feature: any) => {
      const path = new Path2D();
      const drawCoords = (coords: any) => coords.forEach((poly: any) => poly.forEach((c: any, i: number) => {
        const { x, y } = project(c[0], c[1]);
        if (i === 0) path.moveTo(x, y); else path.lineTo(x, y);
      }));
      if (feature.geometry.type === "Polygon") drawCoords(feature.geometry.coordinates);
      else if (feature.geometry.type === "MultiPolygon") feature.geometry.coordinates.forEach((p: any) => drawCoords(p));
      return { name: feature.properties.name, path, id: feature.id };
    });
  }, [geoData, project]);

  // 1. STATIC LAYER CACHING (The expensive part - drawn ONCE)
  const drawStaticCache = useCallback(() => {
    if (!geoData || paths.length === 0) return;
    
    if (!staticCacheRef.current) {
      staticCacheRef.current = document.createElement("canvas");
      staticCacheRef.current.width = mapWidth;
      staticCacheRef.current.height = mapHeight;
    }
    
    const cacheCtx = staticCacheRef.current.getContext("2d", { alpha: false });
    if (!cacheCtx) return;

    // Draw Background
    const bgGradient = cacheCtx.createRadialGradient(mapWidth / 2, mapHeight / 2, 100, mapWidth / 2, mapHeight / 2, mapWidth / 1.5);
    bgGradient.addColorStop(0, "#121d31"); 
    bgGradient.addColorStop(1, "#070b13"); 
    cacheCtx.fillStyle = bgGradient; 
    cacheCtx.fillRect(0, 0, mapWidth, mapHeight);

    // Draw ALL non-special countries to cache
    cacheCtx.lineWidth = 1;
    paths.forEach((item: any) => {
      const isSpecial = item.name === userCountry || geoJsonToIndo[item.name] === userCountry || 
                        item.name === targetCountry || geoJsonToIndo[item.name] === targetCountry;
      if (isSpecial) return;

      cacheCtx.fillStyle = getContinentColor(item.name, item.id);
      cacheCtx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      cacheCtx.fill(item.path); 
      cacheCtx.stroke(item.path);
    });

    // Draw maritime labels to cache (NEVER changes)
    maritimeLabels.forEach(label => {
      const { x, y } = project(label.lon, label.lat);
      cacheCtx.font = `italic ${label.size}px 'Inter', sans-serif`; 
      cacheCtx.fillStyle = label.color;
      cacheCtx.textAlign = "center"; 
      cacheCtx.textBaseline = "middle";
      if (x > 0 && x < mapWidth && y > 0 && y < mapHeight) cacheCtx.fillText(label.name, x, y);
    });

    // Also bake NON-special dots and labels into the static cache
    const labelGrid: { x: number, y: number }[] = [];
    centerPixels.forEach((center: any) => {
      const isPlayer = center.name_en === userCountry || center.name_id === userCountry;
      const isTarget = center.name_en === targetCountry || center.name_id === targetCountry;
      if (isPlayer || isTarget) return; // Skip — dynamic layer handles these

      // Static dots (no shadow, no glow)
      cacheCtx.beginPath();
      cacheCtx.arc(center.px, center.py, 3, 0, Math.PI * 2); 
      cacheCtx.fillStyle = "rgba(148, 163, 184, 0.4)"; 
      cacheCtx.fill();

      // Static flag labels (collision-tested)
      const isTooCrowded = labelGrid.some(pos => Math.abs(pos.x - center.px) < 140 && Math.abs(pos.y - center.py) < 80);
      if (!isTooCrowded) {
        cacheCtx.font = "16px 'Inter', sans-serif"; 
        cacheCtx.fillStyle = "rgba(148, 163, 184, 0.4)";
        cacheCtx.textAlign = "center";
        cacheCtx.textBaseline = "middle";
        cacheCtx.fillText(center.flag, center.px, center.py - 22); 
        labelGrid.push({ x: center.px, y: center.py });
      }
    });

    needsCacheUpdate.current = false;
  }, [geoData, paths, userCountry, targetCountry, centerPixels, project]);

  // Relation event listener (debounced)
  useEffect(() => {
    const handleUpdate = () => {
      if (debounceTimerRef.current) return;
      debounceTimerRef.current = setTimeout(() => {
        needsCacheUpdate.current = true;
        setTick(t => t + 1);
        debounceTimerRef.current = null;
      }, 250); // Increased from 150 to 250ms — relation changes are rare
    };
    window.addEventListener("relation_storage_updated", handleUpdate);
    window.addEventListener("relation_status_updated", handleUpdate);

    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      window.removeEventListener("relation_storage_updated", handleUpdate);
      window.removeEventListener("relation_status_updated", handleUpdate);
    };
  }, []);
  
  // 1b. Cache Invalidation: Re-draw static layer whenever highlighted countries change
  // This prevents 'invisible' countries when a modal is closed.
  useEffect(() => {
    needsCacheUpdate.current = true;
    setTick(t => t + 1);
  }, [userCountry, targetCountry]);

  // ═══════════════════════════════════════════════════════
  // MAIN RENDER — Only draws cache + 2 dynamic highlights
  // ═══════════════════════════════════════════════════════
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !geoData || paths.length === 0) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // 1. Ensure Cache is Ready
    if (needsCacheUpdate.current || !staticCacheRef.current) {
      drawStaticCache();
    }

    // 2. DRAW BASE (FROM CACHE) — 1 drawImage call instead of 207 fill+stroke calls
    if (staticCacheRef.current) {
      ctx.drawImage(staticCacheRef.current, 0, 0);
    }

    // 3. DRAW DYNAMIC HIGHLIGHTS (Player & Target ONLY — max 2 countries)
    paths.forEach((item: any) => {
      const isPlayer = item.name === userCountry || geoJsonToIndo[item.name] === userCountry;
      const isTarget = item.name === targetCountry || geoJsonToIndo[item.name] === targetCountry;
      if (!isPlayer && !isTarget) return;

      if (isPlayer) { 
        ctx.fillStyle = "rgba(34, 197, 94, 0.4)"; 
        ctx.strokeStyle = "#4ade80"; 
        ctx.lineWidth = 5; 
        ctx.shadowColor = "#4ade80"; 
        ctx.shadowBlur = 20; 
      } else { 
        const rel = getRelation(item.name, userCountry);
        const meta = relationStorage.getRelationMetadata(rel);
        ctx.fillStyle = `${meta.hex}55`; 
        ctx.strokeStyle = meta.hex; 
        ctx.lineWidth = 5; 
        ctx.shadowColor = meta.hex; 
        ctx.shadowBlur = 20;
      }

      ctx.fill(item.path); 
      ctx.stroke(item.path);
      ctx.shadowBlur = 0;
    });

    // 4. DRAW PLAYER & TARGET DOTS + FLAGS (only 2 items, not 207)
    centerPixels.forEach((center: any) => {
      const isPlayer = center.name_en === userCountry || center.name_id === userCountry;
      const isTarget = center.name_en === targetCountry || center.name_id === targetCountry;
      if (!isPlayer && !isTarget) return;

      ctx.beginPath();
      if (isPlayer) { 
        ctx.arc(center.px, center.py, 7, 0, Math.PI * 2); 
        ctx.fillStyle = "#22d3ee"; 
        ctx.shadowColor = "#22d3ee"; 
        ctx.shadowBlur = 15; 
      } else {
        const rel = getRelation(center.name_en, userCountry);
        const meta = relationStorage.getRelationMetadata(rel);
        ctx.arc(center.px, center.py, 7, 0, Math.PI * 2);
        ctx.fillStyle = meta.hex; 
        ctx.shadowColor = meta.hex; 
        ctx.shadowBlur = 15;
      }
      ctx.fill(); 
      ctx.shadowBlur = 0;

      // Flag label
      ctx.font = "bold 52px sans-serif"; 
      ctx.shadowColor = "black"; 
      ctx.shadowBlur = 10;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(center.flag, center.px, center.py - 95); 
      ctx.shadowBlur = 0;
    });

  }, [geoData, paths, userCountry, targetCountry, tick, centerPixels, drawStaticCache]);

  // ═══════════════════════════════════════════════════════
  // MOUSE HANDLERS — Throttled & Optimized
  // ═══════════════════════════════════════════════════════
  const defaultCursor = useMemo(() => 
    `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='4' fill='none' stroke='%2322d3ee' stroke-width='1.5'/><circle cx='8' cy='8' r='1' fill='%2322d3ee'/></svg>") 8 8, auto`
  , []);

  // Throttled mouse move — no longer calls setIsHovering 60x/sec
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * mapWidth;
    const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;
    
    // Use pre-computed pixel positions (no projection math per event)
    const hovering = centerPixels.some((c: any) => {
      const dx = clickX - c.px, dy = clickY - c.py;
      return (dx * dx + dy * dy) < 3600; // 60^2 = 3600 (avoid sqrt)
    });

    // Only update state if changed (prevents 60 re-renders/sec)
    if (hovering !== lastHoverRef.current) {
      lastHoverRef.current = hovering;
      setIsHovering(hovering);
    }
  }, [centerPixels]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!active) return;
    if (mouseDownPosRef.current) {
      if (Math.hypot(e.clientX - mouseDownPosRef.current.x, e.clientY - mouseDownPosRef.current.y) > 15) return;
    }
    const canvas = canvasRef.current; if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * mapWidth;
    const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;
    
    let closest: any = null; let minDist = 10000; // 100^2
    centerPixels.forEach((c: any) => {
      const dx = clickX - c.px, dy = clickY - c.py;
      const distSq = dx * dx + dy * dy;
      if (distSq < minDist) { minDist = distSq; closest = c; }
    });

    if (closest && minDist < 10000) onSelect(closest.name_en);
  }, [active, onSelect, centerPixels]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0a0f1d] group">
      <canvas
        ref={canvasRef} 
        width={mapWidth} 
        height={mapHeight}
        className="h-full w-auto max-w-none z-10"
        style={{ 
          cursor: isHovering ? "pointer" : defaultCursor, 
          pointerEvents: active ? "auto" : "none"
        }}
        onMouseMove={handleMouseMove}
        onMouseDown={(e) => mouseDownPosRef.current = { x: e.clientX, y: e.clientY }}
        onClick={handleClick}
      />
    </div>
  );
}
