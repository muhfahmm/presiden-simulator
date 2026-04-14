"use client"

import { useEffect, useRef, useState, useMemo } from "react";
import { countries as centersData } from "@/app/database/data/negara/benua/index";
import { Layers, Mountain, Gem, Waves, Flame, Battery, Droplets, Box, Cpu, Pickaxe, Radio } from "lucide-react";

import { allRelations } from "@/app/database/data/database_hubungan_antar_negara/index";

export const sdaIcons: { [key: string]: { icon: any, color: string, label: string } } = {
  aluminium: { icon: Layers, color: "text-blue-200", label: "Alumunium" },
  batu_bara: { icon: Layers, color: "text-zinc-400", label: "Batubara" },
  bijih_besi: { icon: Mountain, color: "text-zinc-500", label: "Biji Besi" },
  emas: { icon: Gem, color: "text-yellow-400", label: "Emas" },
  garam: { icon: Waves, color: "text-blue-200", label: "Garam" },
  gas_alam: { icon: Flame, color: "text-orange-400", label: "Gas" },
  litium: { icon: Battery, color: "text-cyan-400", label: "Litium" },
  minyak_bumi: { icon: Droplets, color: "text-blue-400", label: "Minyak" },
  nikel: { icon: Box, color: "text-orange-400", label: "Nikel" },
  logam_tanah_jarang: { icon: Cpu, color: "text-purple-400", label: "Tanah Jarang" },
  tembaga: { icon: Pickaxe, color: "text-orange-300", label: "Tembaga" },
  uranium: { icon: Radio, color: "text-emerald-400", label: "Uranium" }
};

interface MapSDAProps {
  userCountry: string;
  targetCountry: string | null;
  onSelect: (name: string) => void;
  onSelectSDA?: (data: { name: string; flag: string; resources: any } | null) => void;
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
  "United States": "amerika serikat",
  "United States of America": "amerika serikat"
};

const getRelation = (name: string, userCountry: string) => {
  if (name === userCountry) return 100;

  const userEntry = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
  const userId = userEntry ? userEntry.name_id.toLowerCase().trim() : userCountry.toLowerCase().trim();

  const countryEntry = centersData.find(c => c.name_en === name || c.name_id === name);
  let targetId = countryEntry ? countryEntry.name_id.toLowerCase().trim() : name.toLowerCase().trim();

  if (geoJsonToIndo[name]) {
    targetId = geoJsonToIndo[name].toLowerCase().trim();
  }

  const userRelations = allRelations[userId];
  if (!userRelations) return 50;

  const relationItem = userRelations.find(item => item.name.toLowerCase().trim() === targetId);
  return relationItem ? relationItem.relation : 50;
};

// Tactical Maritime Labels (Oceans, Seas, Gulfs, Straits)
const maritimeLabels = [
  { name: "S A M U D R A   P A S I F I K", lon: -140, lat: 0, size: 36, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   P A S I F I K", lon: 160, lat: 10, size: 36, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   A T L A N T I K", lon: -40, lat: 25, size: 36, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   A T L A N T I K", lon: -20, lat: -25, size: 36, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   H I N D I A", lon: 80, lat: -20, size: 36, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   A R K T I K", lon: 0, lat: 80, size: 32, color: "rgba(56, 189, 248, 0.15)" },
  { name: "S A M U D R A   S E L A T A N", lon: 0, lat: -60, size: 32, color: "rgba(56, 189, 248, 0.15)" },

  // Majors Seas
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

  // Gulfs and Bays
  { name: "Teluk Meksiko", lon: -90, lat: 25, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Benggala", lon: 90, lat: 15, size: 24, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Persia", lon: 51, lat: 26, size: 16, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Aden", lon: 48, lat: 12, size: 14, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Guinea", lon: 0, lat: 0, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Alaska", lon: -145, lat: 55, size: 20, color: "rgba(125, 211, 252, 0.4)" },

  // Tactical Straits and Canals
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

export default function MapSDA({ userCountry, targetCountry, onSelect, onSelectSDA, active = true, geoData }: MapSDAProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouseDownPosRef = useRef<{ x: number; y: number } | null>(null);
  const staticCacheRef = useRef<HTMLCanvasElement | null>(null);
  const needsCacheUpdate = useRef(true);

  const mapWidth = 6000;
  const mapHeight = 2400;

  const project = (lon: number, lat: number) => ({
    x: ((lon + 180) / 360) * mapWidth,
    y: ((90 - lat) / 180) * mapHeight
  });

  // Pre-compute Path2D objects (expensive, only on geoData change)
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
  }, [geoData]);

  // Offscreen cache for static world layer
  const drawStaticCache = () => {
    if (!geoData || paths.length === 0) return;
    if (!staticCacheRef.current) {
      staticCacheRef.current = document.createElement("canvas");
      staticCacheRef.current.width = mapWidth;
      staticCacheRef.current.height = mapHeight;
    }
    const cacheCtx = staticCacheRef.current.getContext("2d", { alpha: false });
    if (!cacheCtx) return;

    // Background
    const bgGradient = cacheCtx.createRadialGradient(mapWidth / 2, mapHeight / 2, 100, mapWidth / 2, mapHeight / 2, mapWidth / 1.5);
    bgGradient.addColorStop(0, "#121d31");
    bgGradient.addColorStop(1, "#070b13");
    cacheCtx.fillStyle = bgGradient;
    cacheCtx.fillRect(0, 0, mapWidth, mapHeight);

    // Draw non-highlighted countries
    cacheCtx.lineWidth = 1;
    paths.forEach((item: any) => {
      const isSpecial = item.name === userCountry || geoJsonToIndo[item.name] === userCountry ||
                        item.name === targetCountry || geoJsonToIndo[item.name] === targetCountry;
      if (isSpecial) return;
      cacheCtx.fillStyle = "rgba(71, 85, 105, 0.4)";
      cacheCtx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      cacheCtx.fill(item.path);
      cacheCtx.stroke(item.path);
    });

    // Maritime labels
    maritimeLabels.forEach(label => {
      const { x, y } = project(label.lon, label.lat);
      cacheCtx.font = `italic ${label.size}px 'Inter', sans-serif`;
      cacheCtx.fillStyle = label.color;
      cacheCtx.textAlign = "center";
      cacheCtx.textBaseline = "middle";
      if (x > 0 && x < mapWidth && y > 0 && y < mapHeight) cacheCtx.fillText(label.name, x, y);
    });

    needsCacheUpdate.current = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !geoData || paths.length === 0) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // 1. Ensure cache
    if (needsCacheUpdate.current || !staticCacheRef.current) drawStaticCache();

    // 2. Draw cached base
    ctx.drawImage(staticCacheRef.current!, 0, 0);

    // 3. Dynamic highlights (player + target only)
    paths.forEach((item: any) => {
      const isPlayer = item.name === userCountry || geoJsonToIndo[item.name] === userCountry;
      const isTarget = item.name === targetCountry || geoJsonToIndo[item.name] === targetCountry;
      if (!isPlayer && !isTarget) return;

      if (isPlayer) {
        ctx.fillStyle = "rgba(34, 197, 94, 0.3)";
        ctx.strokeStyle = "#4ade80";
        ctx.lineWidth = 3;
      } else {
        const rel = getRelation(item.name, userCountry);
        if (rel >= 70) { ctx.fillStyle = "rgba(34, 197, 94, 0.4)"; ctx.strokeStyle = "#4ade80"; }
        else if (rel >= 41) { ctx.fillStyle = "rgba(234, 179, 8, 0.4)"; ctx.strokeStyle = "#fbbf24"; }
        else { ctx.fillStyle = "rgba(239, 68, 68, 0.4)"; ctx.strokeStyle = "#f87171"; }
        ctx.lineWidth = 3;
      }
      ctx.fill(item.path);
      ctx.stroke(item.path);
    });

    // 4. Labels & dots
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const labelGrid: { x: number, y: number }[] = [];

    centersData.forEach((center: any) => {
      const { x, y } = project(center.lon, center.lat);
      const isPlayer = center.name_en === userCountry;
      const isTarget = center.name_en === targetCountry;

      ctx.beginPath();
      if (isPlayer) {
        ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fillStyle = "#22d3ee"; 
        ctx.shadowColor = "#22d3ee"; ctx.shadowBlur = 15;
      } else if (isTarget) {
        const rel = getRelation(center.name_en, userCountry);
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = rel >= 70 ? "#22c55e" : rel >= 41 ? "#eab308" : "#ef4444";
        ctx.shadowColor = ctx.fillStyle as string; ctx.shadowBlur = 15;
      } else {
        ctx.arc(x, y, 2.5, 0, Math.PI * 2); ctx.fillStyle = "rgba(148, 163, 184, 0.5)";
        ctx.shadowBlur = 0;
      }
      ctx.fill(); ctx.shadowBlur = 0;

      if (isPlayer || isTarget) {
        ctx.font = "48px sans-serif"; ctx.shadowColor = "rgba(0,0,0,0.8)"; ctx.shadowBlur = 10;
        ctx.fillText(center.flag, x, y - 90); ctx.shadowBlur = 0;
      } else {
        const isTooCrowded = labelGrid.some(pos => Math.abs(pos.x - x) < 120 && Math.abs(pos.y - y) < 60);
        if (!isTooCrowded) {
          ctx.font = "14px 'Inter', sans-serif"; ctx.fillStyle = "rgba(148, 163, 184, 0.35)";
          ctx.fillText(center.flag, x, y - 18); labelGrid.push({ x, y });
        }
      }
    });

  }, [geoData, paths, userCountry, targetCountry]);

  const defaultCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='4' fill='none' stroke='%2322d3ee' stroke-width='1.5'/><circle cx='8' cy='8' r='1' fill='%2322d3ee'/></svg>") 8 8, auto`;
  const hoverCursor = "pointer";

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        width={mapWidth}
        height={mapHeight}
        className="h-full w-auto max-w-none z-10"
        style={{ cursor: isHovering ? hoverCursor : defaultCursor, pointerEvents: active ? "auto" : "none" }}
        onMouseMove={(e) => {
          if (!active) return;
          const canvas = canvasRef.current;
          if (!canvas) return;
          const rect = canvas.getBoundingClientRect();
          const clickX = ((e.clientX - rect.left) / rect.width) * mapWidth;
          const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;

          let foundHover = false;
          centersData.forEach((center: any) => {
            const x = ((center.lon + 180) / 360) * mapWidth;
            const y = ((90 - center.lat) / 180) * mapHeight;
            const dist = Math.sqrt((clickX - x) ** 2 + (clickY - y) ** 2);
            if (dist < 60) foundHover = true;
          });

          setIsHovering(foundHover);
        }}
        onMouseDown={(e) => {
          mouseDownPosRef.current = { x: e.clientX, y: e.clientY };
        }}
        onClick={(e) => {
          if (!active) return;
          const startPos = mouseDownPosRef.current;
          if (startPos) {
            const dist = Math.hypot(e.clientX - startPos.x, e.clientY - startPos.y);
            if (dist > 15) return;
          }

          const canvas = canvasRef.current;
          if (!canvas) return;
          const rect = canvas.getBoundingClientRect();
          const clickX = ((e.clientX - rect.left) / rect.width) * mapWidth;
          const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;

          let closest: any = null;
          let minDist = 100;

          centersData.forEach((center: any) => {
            const x = ((center.lon + 180) / 360) * mapWidth;
            const y = ((90 - center.lat) / 180) * mapHeight;
            const dist = Math.sqrt((clickX - x) ** 2 + (clickY - y) ** 2);
            if (dist < minDist) {
              minDist = dist;
              closest = center;
            }
          });

          if (closest) {
            onSelect(closest.name_en);
          }
        }}
      />

      <div className="absolute inset-0 pointer-events-none z-20">
        {centersData.map((center: any) => {
          const x = ((center.lon + 180) / 360) * mapWidth;
          const y = ((90 - center.lat) / 180) * mapHeight;

          const resources = center.sektor_ekstraksi || {};
          const activeResources = Object.entries(resources).filter(([_, v]) => (v as number) > 0);

          if (activeResources.length === 0) return null;

          return (
            <div
              key={center.name_en}
              style={{ left: `${(x / mapWidth) * 100}%`, top: `${(y / mapHeight) * 100}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectSDA) {
                  onSelectSDA({ name: center.name_en, flag: center.flag, resources });
                }
              }}
            >
              <div className="bg-zinc-900 border border-zinc-700 p-0.5 rounded shadow backdrop-blur-sm hover:border-orange-500 hover:scale-110 flex items-center justify-center transition-all">
                <Pickaxe size={12} className="text-orange-400" />
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
}
