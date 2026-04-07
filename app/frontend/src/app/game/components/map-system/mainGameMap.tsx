"use client"

import { useEffect, useRef, useState, useMemo } from "react";
import { countries as centersData } from "@/app/database/data/negara/benua/index";
import { allRelations } from "@/app/database/data/negara/hubungan/index";
import { relationStorage } from "./modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { unSecurityCouncilStorage } from "../2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { timeStorage } from "../2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { getRiskAssessment, getRiskGlowColor, projectMiller } from "./polyglot/ts/map_logic";

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

const checkCountryHasSea = (name: string): boolean => {
  const target = centersData.find(c => 
    c.name_id.toLowerCase() === name.toLowerCase() || 
    c.name_en.toLowerCase() === name.toLowerCase()
  );
  if (!target || !target.armada_militer?.laut) return false;
  // Check if any naval asset has a count > 0
  return Object.values(target.armada_militer.laut).some(count => (count as number) > 0);
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
  const requestRef = useRef<number>(null);
  const lastTimeRef = useRef<number>(Date.now());

  const mapWidth = 6000;
  const mapHeight = 2800; // Increased to accommodate Miller projection headroom
  
  // High-performance projection delegate to Polyglot modules
  const project = (lon: number, lat: number) => {
    return projectMiller(lat, lon, mapWidth, mapHeight);
  };

  useEffect(() => {
    const handleUpdate = () => {
      if (debounceTimerRef.current) return;
      debounceTimerRef.current = setTimeout(() => {
        setTick(t => t + 1);
        debounceTimerRef.current = null;
      }, 150);
    };
    window.addEventListener("relation_storage_updated", handleUpdate);
    window.addEventListener("relation_status_updated", handleUpdate);

    // Continuous tick for animations
    const interval = setInterval(() => setTick(t => t + 1), 50);

    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      clearInterval(interval);
      window.removeEventListener("relation_storage_updated", handleUpdate);
      window.removeEventListener("relation_status_updated", handleUpdate);
    };
  }, []);

  // Animation loop for units
  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const dt = now - lastTimeRef.current;
      lastTimeRef.current = now;

      const { isPaused, speed } = timeStorage.getState();
      
      if (!isPaused) {
        // Mission progress logic removed
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
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
    
    // 1. ADVANCED OCEAN GRADIENT (DEEP ABYSS TO SHALLOW)
    const bgGradient = ctx.createRadialGradient(mapWidth / 2, mapHeight / 2, 200, mapWidth / 2, mapHeight / 2, mapWidth / 1.4);
    bgGradient.addColorStop(0, "#0e182b"); // Center depth
    bgGradient.addColorStop(0.5, "#070b13"); // Deep ocean
    bgGradient.addColorStop(1, "#020408"); // Edge abyss
    ctx.fillStyle = bgGradient; 
    ctx.fillRect(0, 0, mapWidth, mapHeight);

    // 2. SPHERICAL ATMOSPHERE GLOW (The "Lengkungan" Simulation)
    const glowGradient = ctx.createRadialGradient(mapWidth / 2, mapHeight / 2, mapWidth / 3, mapWidth / 2, mapHeight / 2, mapWidth / 2);
    glowGradient.addColorStop(0, "rgba(34, 211, 238, 0)");
    glowGradient.addColorStop(0.8, "rgba(34, 211, 238, 0.03)");
    glowGradient.addColorStop(1, "rgba(34, 211, 238, 0.08)");
    ctx.fillStyle = glowGradient;
    ctx.fillRect(0, 0, mapWidth, mapHeight);

    paths.forEach((item: any) => {
      const isPlayer = item.name === userCountry || geoJsonToIndo[item.name] === userCountry;
      const isTarget = item.name === targetCountry || geoJsonToIndo[item.name] === targetCountry;
      let fillColor = getContinentColor(item.name, item.id);
      let strokeColor = "rgba(245, 245, 220, 0.25)";
      let isHigh = isPlayer || isTarget;
      
      ctx.lineWidth = 1; ctx.shadowBlur = 0;
      
      if (isHigh) {
        if (isPlayer) { 
          fillColor = "rgba(34, 197, 94, 0.35)"; 
          strokeColor = "#4ade80"; 
          ctx.lineWidth = 4; 
          ctx.shadowColor = "#4ade80"; 
          ctx.shadowBlur = 30 * pulseFactor; 
        }
        else { 
          const rel = getRelation(item.name, userCountry);
          const meta = relationStorage.getRelationMetadata(rel);
          const risk = getRiskAssessment(item.name);
          const riskColor = getRiskGlowColor(risk);
          
          fillColor = `${meta.hex}44`; 
          strokeColor = meta.hex; 
          ctx.lineWidth = 4; 
          ctx.shadowColor = riskColor; 
          ctx.shadowBlur = 25 * pulseFactor;

          // Special "High Risk" indicator overlay pattern if risk is high
          if (risk > 70) {
            ctx.save();
            ctx.clip(item.path);
            ctx.strokeStyle = "rgba(239, 68, 68, 0.2)";
            ctx.lineWidth = 2;
            for(let i=0; i<mapWidth; i+=20) {
              ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i-1000, mapHeight); ctx.stroke();
            }
            ctx.restore();
          }
        }
      } else {
        // Base country style: Subtle tech outline
        strokeColor = "rgba(34, 211, 238, 0.15)";
      }

      ctx.fillStyle = fillColor; 
      ctx.strokeStyle = strokeColor; 
      ctx.fill(item.path); 
      ctx.stroke(item.path);
      if (isHigh) ctx.shadowBlur = 0;
    });

    maritimeLabels.forEach(label => {
      const { x, y } = project(label.lon, label.lat);
      ctx.font = `italic ${label.size}px 'Inter', sans-serif`; ctx.fillStyle = label.color;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      if (x > 0 && x < mapWidth && y > 0 && y < mapHeight) ctx.fillText(label.name, x, y);
    });

    const labelGrid: { x: number, y: number }[] = [];
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
        const rel = getRelation(center.name_en, userCountry);
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        const meta = relationStorage.getRelationMetadata(rel);
        ctx.fillStyle = meta.hex; ctx.shadowColor = meta.hex; ctx.shadowBlur = 15;
      } else { 
        ctx.arc(x, y, 2.5, 0, Math.PI * 2); ctx.fillStyle = "rgba(148, 163, 184, 0.3)"; ctx.shadowBlur = 0;
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

  }, [geoData, paths, userCountry, targetCountry, tick]);

  const defaultCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='4' fill='none' stroke='%2322d3ee' stroke-width='1.5'/><circle cx='8' cy='8' r='1' fill='%2322d3ee'/></svg>") 8 8, auto`;
  
  const pulseFactor = useMemo(() => 1 + Math.sin(tick * 0.2) * 0.05, [tick]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0a0f1d] group">
      {/* 1. DIGITAL GRID LAYER */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)'
        }}
      />

      {/* 2. SCANLINE EFFECT */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]"
        style={{
          background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          backgroundSize: '100% 4px, 3px 100%',
          pointerEvents: 'none'
        }}
      />

      {/* 3. VIGNETTE & GLOW */}
      <div className="absolute inset-0 pointer-events-none z-30 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

      <canvas
        ref={canvasRef} 
        width={mapWidth} 
        height={mapHeight}
        className="h-full w-auto max-w-none z-10 transition-transform duration-700 ease-out"
        style={{ 
          cursor: isHovering ? "pointer" : defaultCursor, 
          pointerEvents: active ? "auto" : "none",
          filter: `drop-shadow(0 0 10px rgba(34, 211, 238, 0.2))`
        }}
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
    </div>
  );
}
