"use client"

import { useEffect, useRef, useState, useMemo } from "react";
import { countries as centersData } from "@/app/database/data/negara/benua/index";
import { allRelations } from "@/app/database/data/negara/hubungan";
import { relationStorage } from "@/app/game/components/map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { unSecurityCouncilStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";

interface MapHubunganProps {
  userCountry: string;
  targetCountry: string | null;
  onSelect: (name: string) => void;
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
  "Turkey": "turki",
  "United Republic of Tanzania": "republik tanzania",
  "United States of America": "amerika serikat",
  "West Bank": "palestina",
  "Falkland Islands": "argentina",
  "Western Sahara": "maroko",
  "Somaliland": "somalia",
  "New Caledonia": "fiji",
  "Solomon Islands": "marshall",
  "United Kingdom": "inggris"
};

const getRelation = (name: string, userCountry: string) => {
  if (name === userCountry) return 100;
  const userEntry = centersData.find(c => c.name_id === userCountry || c.name_en === userCountry);
  const userId = userEntry ? userEntry.name_id.toLowerCase().trim() : userCountry.toLowerCase().trim();
  const targetId = relationStorage.normalizeTargetId(name, centersData);
  const userRelations = (allRelations as any)[userId];
  const relationData = Array.isArray(userRelations) 
    ? userRelations.find((item: any) => item.name.toLowerCase().trim() === targetId)
    : null;
  const baseScore = relationData ? relationData.relation : 50;
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

export default function MapHubungan({ userCountry, targetCountry, onSelect, active = true, geoData }: MapHubunganProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [tick, setTick] = useState(0);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const mouseDownPosRef = useRef<{ x: number; y: number } | null>(null);

  const mapWidth = 6000;
  const mapHeight = 2400;
  const project = (lon: number, lat: number) => ({ x: ((lon + 180) / 360) * mapWidth, y: ((90 - lat) / 180) * mapHeight });

  useEffect(() => {
    const handleUpdate = () => {
      if (debounceTimerRef.current) return;
      debounceTimerRef.current = setTimeout(() => {
        setTick(t => t + 1);
        debounceTimerRef.current = null;
      }, 200); // 5 updates per second is plenty for the relationship map
    };
    window.addEventListener("relation_storage_updated", handleUpdate);
    window.addEventListener("relation_status_updated", handleUpdate);
    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      window.removeEventListener("relation_storage_updated", handleUpdate);
      window.removeEventListener("relation_status_updated", handleUpdate);
    };
  }, []);

  const paths = useMemo(() => {
    if (!geoData) return [];
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !geoData || paths.length === 0) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    ctx.clearRect(0, 0, mapWidth, mapHeight);
    const bgGradient = ctx.createRadialGradient(mapWidth / 2, mapHeight / 2, 100, mapWidth / 2, mapHeight / 2, mapWidth / 1.5);
    bgGradient.addColorStop(0, "#121d31"); bgGradient.addColorStop(1, "#070b13");
    ctx.fillStyle = bgGradient; ctx.fillRect(0, 0, mapWidth, mapHeight);

    paths.forEach((item: any) => {
      const relation = getRelation(item.name, userCountry);
      const meta = relationStorage.getRelationMetadata(relation);
      ctx.lineWidth = 1;
      ctx.fillStyle = `${meta.hex}99`;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.fill(item.path);
      ctx.stroke(item.path);
    });

    maritimeLabels.forEach(label => {
      const { x, y } = project(label.lon, label.lat);
      ctx.font = `italic ${label.size}px 'Inter', sans-serif`; ctx.fillStyle = label.color;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      if (x > 0 && x < mapWidth && y > 0 && y < mapHeight) ctx.fillText(label.name, x, y);
    });

    const sortedCenters = [...centersData].sort((a, b) => {
      if (a.name_en === targetCountry || a.name_id === userCountry) return 1;
      if (b.name_en === targetCountry || b.name_id === userCountry) return -1;
      return 0;
    });

    sortedCenters.forEach((center: any) => {
      const { x, y } = project(center.lon, center.lat);
      const isPlayer = center.name_en === userCountry || center.name_id === userCountry;
      const isTarget = center.name_en === targetCountry || center.name_id === targetCountry;

      ctx.beginPath();
      if (isPlayer) { ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fillStyle = "#22d3ee"; ctx.shadowColor = "#22d3ee"; ctx.shadowBlur = 15; }
      else if (isTarget) {
        ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fillStyle = "#f59e0b"; ctx.shadowColor = "#f59e0b"; ctx.shadowBlur = 15;
      } else { 
        const relation = getRelation(center.name_en, userCountry);
        const meta = relationStorage.getRelationMetadata(relation);
        ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fillStyle = meta.hex; ctx.shadowColor = meta.hex; ctx.shadowBlur = 10;
      }
      ctx.fill(); ctx.shadowBlur = 0;
    });
  }, [geoData, paths, userCountry, targetCountry, tick]);

  const defaultCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='4' fill='none' stroke='%2322d3ee' stroke-width='1.5'/><circle cx='8' cy='8' r='1' fill='%2322d3ee'/></svg>") 8 8, auto`;
  return (
    <canvas
      ref={canvasRef} width={mapWidth} height={mapHeight}
      className="h-full w-auto max-w-none z-10"
      style={{ cursor: isHovering ? "pointer" : defaultCursor, pointerEvents: active ? "auto" : "none" }}
      onMouseMove={(e) => {
        const canvas = canvasRef.current; if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const clickX = ((e.clientX - rect.left) / rect.width) * mapWidth;
        const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;
        setIsHovering(centersData.some((c: any) => {
          const { x, y } = project(c.lon, c.lat);
          return Math.sqrt((clickX - x) ** 2 + (clickY - y) ** 2) < 60;
        }));
      }}
      onMouseDown={(e) => mouseDownPosRef.current = { x: e.clientX, y: e.clientY }}
      onClick={(e) => {
        if (!active) return;
        if (mouseDownPosRef.current) {
          if (Math.hypot(e.clientX - mouseDownPosRef.current.x, e.clientY - mouseDownPosRef.current.y) > 15) return;
        }
        const canvas = canvasRef.current; if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const clickX = ((e.clientX - rect.left) / rect.width) * mapWidth;
        const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;
        let closest: any = null; let minDist = 100;
        centersData.forEach((c: any) => {
          const { x, y } = project(c.lon, c.lat);
          const dist = Math.sqrt((clickX - x) ** 2 + (clickY - y) ** 2);
          if (dist < minDist) { minDist = dist; closest = c; }
        });
        if (closest) onSelect(closest.name_en);
      }}
    />
  );
}
