"use client"

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { PlaneDetailCard } from "../2_map/PlaneDetailCard";
import { countries as centersData } from "@/app/database/data/negara/benua/index";
import { internationalHubs } from "../3_hub/hubs";
import { getInitialAgreements } from "@/app/database/data/database_mitra_perdagangan/agreementsRegistry";
import { tradeStorage } from "../../TradeStorage";
import { allRelations } from "@/app/database/data/database_hubungan_antar_negara/index";
import { calculateTradeRoute, getHubForCountry, Point } from "../2_rute/tradeRoutes";
import { timeStorage } from "../../timeStorage";
import { mapPathCache } from "@/app/game/components/map-system/utils/MapPathCache";

interface TradeMapCanvasProps {
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
  "Falkland Islands": "argentina",
  "Western Sahara": "maroko",
  "Somaliland": "somalia",
  "New Caledonia": "fiji",
  "Solomon Islands": "marshall",
  "United States": "amerika serikat",
  "United States of America": "amerika serikat"
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
  if (["ALB", "AND", "AUT", "BEL", "BGR", "BIH", "BLR", "CHE", "CZE", "DEU", "DNK", "ESP", "EST", "FIN", "FRA", "GBR", "GRC", "HRV", "HUN", "IRL", "ISL", "ITA", "KOS", "CS-KM", "LTU", "LUX", "LVA", "MDA", "MNE", "NLD", "NOR", "POL", "PRT", "ROU", "RUS", "SMR", "SRB", "SVK", "SVN", "SWE", "UKR", "VAT", "LIE", "MKD"].includes(i) || /russia|france|germany|italy|united kingdom|spain|romania/.test(n)) return "rgba(59, 130, 246, 0.4)";
  if (["BHS", "BLZ", "BMU", "CAN", "CRI", "CUB", "DOM", "GRL", "GTM", "HND", "HTI", "JAM", "MEX", "NIC", "PAN", "PRI", "SLV", "TTO", "USA", "ATG", "BRB", "DMA", "GRD", "KNA", "LCA", "VCT"].includes(i) || /united states|canada|mexico|cuba/.test(n)) return "rgba(139, 92, 246, 0.4)";
  if (["ARG", "BOL", "BRA", "CHL", "COL", "ECU", "FLK", "GUF", "GUY", "PER", "PRY", "SUR", "URY", "VEN"].includes(i) || /brazil|argentina|colombia|chile|peru/.test(n)) return "rgba(236, 72, 153, 0.4)";
  if (["AUS", "FJI", "NCL", "NZL", "SLB", "VUT", "PNG", "KIR", "MHL", "FSM", "NRU", "PLW", "WSM", "TON", "TUV"].includes(i) || /australia|zealand|papua/.test(n)) return "rgba(6, 182, 212, 0.4)";
  return "rgba(71, 85, 105, 0.3)";
};

export default function TradeMapCanvas({ userCountry, targetCountry, onSelect, active = true, geoData }: TradeMapCanvasProps) {
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement>(null);

  const [isHoveringPlane, setIsHoveringPlane] = useState(false);
  const [selectedPlane, setSelectedPlane] = useState<any>(null);
  const [sessionTrades, setSessionTrades] = useState<any[]>([]);
  const [activeTransactions, setActiveTransactions] = useState<any[]>([]);
  const [tick, setTick] = useState(0);

  const activeTxRef = useRef<any[]>([]);
  const gameStateRef = useRef(timeStorage.getState());
  const requestRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number>(Date.now());
  const txAccumulatedTimeRef = useRef<Record<number, number>>({});
  const activeRoutesCacheRef = useRef<Record<number, { pts: Point[], pixels: { x: number, y: number }[] }>>({});
  const planePositionsRef = useRef<Record<number, { x: number, y: number, tx: any, progress: number }>>({});
  const staticCacheRef = useRef<HTMLCanvasElement | null>(null);
  const needsCacheUpdate = useRef(true);

  const fullGeoToIndoMap = useMemo(() => {
    const map: Record<string, string> = { ...geoJsonToIndo };
    centersData.forEach(c => { if (c.name_en) map[c.name_en] = c.name_id; });
    return map;
  }, []);

  // REDUCED TO 6000px (SAMA DENGAN MAIN MAP)
  const mapWidth = 6000;
  const mapHeight = 2400;

  // 1. Memoized projection
  const projectMap = useCallback((lon: number, lat: number) => ({ 
    x: ((lon + 180) / 360) * mapWidth, 
    y: ((90 - lat) / 180) * mapHeight 
  }), []);

  // 2. Pre-index centers and partners (O(1) lookups)
  const centerPixels = useMemo(() => {
    return centersData.map(c => ({
      ...c,
      px: ((c.lon + 180) / 360) * mapWidth,
      py: ((90 - c.lat) / 180) * mapHeight
    }));
  }, []);

  const tradePartners = useMemo(() => {
    if (!userCountry) return new Set<string>();
    const entry = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
    const activeAgreements = sessionTrades.filter((t: any) => (t.type === 'Perdagangan' || t.jenis === 'Perdagangan') && t.status === 'Aktif');
    const partners = activeAgreements.length > 0 ? activeAgreements : getInitialAgreements(entry?.name_en || "", entry?.name_id || "");
    const partnerSet = new Set<string>();
    partners.forEach((p: any) => {
      const pName = (p.mitra || p.name || "").toLowerCase().trim();
      partnerSet.add(pName);
    });
    return partnerSet;
  }, [userCountry, sessionTrades]);

  const paths = useMemo(() => {
    return mapPathCache.getPaths(geoData, projectMap);
  }, [geoData, projectMap]);

  // --- 1. STATIC LAYER CACHE ---
  const drawStaticCache = useCallback(() => {
    if (!geoData || paths.length === 0) return;
    if (!staticCacheRef.current) {
      staticCacheRef.current = document.createElement("canvas");
      staticCacheRef.current.width = mapWidth;
      staticCacheRef.current.height = mapHeight;
    }
    const cacheCtx = staticCacheRef.current.getContext("2d", { alpha: false });
    if (!cacheCtx) return;

    const bgGradient = cacheCtx.createRadialGradient(mapWidth / 2, mapHeight / 2, 100, mapWidth / 2, mapHeight / 2, mapWidth / 1.5);
    bgGradient.addColorStop(0, "#121d31"); 
    bgGradient.addColorStop(1, "#070b13"); 
    cacheCtx.fillStyle = bgGradient; 
    cacheCtx.fillRect(0, 0, mapWidth, mapHeight);

    paths.forEach((item: any) => {
      const name = item.name;
      const targetUser = { "United States": "United States of America" }[userCountry] || userCountry;
      const targetHover = targetCountry ? ({ "United States": "United States of America" }[targetCountry] || targetCountry) : null;
      const isPlayer = name === targetUser, isTarget = name === targetHover;
      if (isPlayer || isTarget) return;

      const normName = name.toLowerCase().trim();
      const isPartner = tradePartners.has(normName) || tradePartners.has((fullGeoToIndoMap[name] || name).toLowerCase().trim());
      
      let stroke = "rgba(255, 255, 255, 0.08)";
      let fill = getContinentColor(name, item.id);
      
      if (isPartner) { 
        fill = "rgba(6, 182, 212, 0.4)"; 
        stroke = "rgba(6, 182, 212, 0.3)"; 
      }
      
      cacheCtx.fillStyle = fill; 
      cacheCtx.strokeStyle = stroke; 
      cacheCtx.fill(item.path); 
      cacheCtx.stroke(item.path);
    });

    maritimeLabels.forEach(label => {
      const { x, y } = projectMap(label.lon, label.lat);
      cacheCtx.font = `italic ${label.size}px 'Inter', sans-serif`; cacheCtx.fillStyle = label.color;
      cacheCtx.textAlign = "center"; cacheCtx.textBaseline = "middle";
      cacheCtx.fillText(label.name, x, y);
    });

    internationalHubs.forEach(h => {
      const { x, y } = projectMap(h.lon, h.lat);
      cacheCtx.beginPath(); cacheCtx.arc(x, y, 4, 0, 7); cacheCtx.fillStyle = h.fill || "#ffffff"; cacheCtx.fill();
    });

    needsCacheUpdate.current = false;
  }, [geoData, paths, userCountry, targetCountry, tradePartners, projectMap, fullGeoToIndoMap]);

  useEffect(() => {
    const update = () => {
      const userEntry = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
      if (userEntry) {
        setSessionTrades(tradeStorage.getTrade(userEntry.name_en) || tradeStorage.getTrade(userEntry.name_id) || []);
        setActiveTransactions(tradeStorage.getActiveTransactions());
      }
      setTick(t => t + 1);
    };
    update();
    window.addEventListener('trade_storage_updated', update);
    return () => window.removeEventListener('trade_storage_updated', update);
  }, [userCountry]);

  useEffect(() => { activeTxRef.current = activeTransactions; }, [activeTransactions]);

  useEffect(() => {
    const unsubscribe = timeStorage.subscribe((date, paused, speed) => {
      gameStateRef.current = { gameDate: date, isPaused: paused, speed: speed };
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas || !geoData || paths.length === 0) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    if (needsCacheUpdate.current || !staticCacheRef.current) drawStaticCache();
    ctx.drawImage(staticCacheRef.current!, 0, 0);

    // Dynamic highlights
    paths.forEach((item: any) => {
      const name = item.name;
      const targetUser = { "United States": "United States of America" }[userCountry] || userCountry;
      const targetHover = targetCountry ? ({ "United States": "United States of America" }[targetCountry] || targetCountry) : null;
      const isPlayer = name === targetUser, isTarget = name === targetHover;
      if (!isPlayer && !isTarget) return;

      if (isPlayer) {
        ctx.fillStyle = "rgba(34, 197, 94, 0.4)"; ctx.strokeStyle = "#4ade80"; ctx.lineWidth = 5;
        ctx.shadowColor = "#4ade80"; ctx.shadowBlur = 20;
      } else {
        ctx.fillStyle = "rgba(251, 191, 36, 0.4)"; ctx.strokeStyle = "#fbbf24"; ctx.lineWidth = 5;
        ctx.shadowColor = "#fbbf24"; ctx.shadowBlur = 20;
      }
      ctx.fill(item.path); ctx.stroke(item.path); ctx.shadowBlur = 0;
    });

    // Trade Routes
    activeTransactions.forEach(tx => {
      if (!activeRoutesCacheRef.current[tx.id]) {
        const sHub = getHubForCountry(tx.source), dHub = getHubForCountry(tx.dest);
        if (sHub && dHub) {
          const pts = calculateTradeRoute({ lon: sHub.lon, lat: sHub.lat }, { lon: dHub.lon, lat: dHub.lat });
          activeRoutesCacheRef.current[tx.id] = { pts, pixels: pts.map(p => projectMap(p.lon, p.lat)) };
        }
      }
      const data = activeRoutesCacheRef.current[tx.id];
      if (data) {
        ctx.beginPath(); ctx.moveTo(data.pixels[0].x, data.pixels[0].y);
        for (let i = 1; i < data.pixels.length; i++) ctx.lineTo(data.pixels[i].x, data.pixels[i].y);
        ctx.lineWidth = 4; ctx.strokeStyle = tx.type === 'buy' ? "#ef4444" : "#10b981";
        ctx.globalAlpha = 0.4; ctx.stroke(); ctx.globalAlpha = 1.0;
      }
    });
  }, [tick, geoData, userCountry, targetCountry, drawStaticCache, activeTransactions, projectMap, paths]);

  // --- 2. DYNAMIC LAYER (Ships/PlanesAnimation) ---
  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const deltaTime = now - lastTimestampRef.current;
      lastTimestampRef.current = now;
      if (!gameStateRef.current.isPaused) {
        activeTxRef.current.forEach(tx => {
          const current = txAccumulatedTimeRef.current[tx.id] || 0;
          txAccumulatedTimeRef.current[tx.id] = current + (deltaTime * gameStateRef.current.speed);
        });
      }
      const canvas = fgCanvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          activeTxRef.current.forEach(tx => {
            const data = activeRoutesCacheRef.current[tx.id];
            if (data) {
              const { pixels } = data;
              const duration = 45000;
              const elapsed = txAccumulatedTimeRef.current[tx.id] || 0;
              const progress = Math.min(1, Math.max(0, elapsed / duration));
              if (elapsed >= duration) { delete txAccumulatedTimeRef.current[tx.id]; return; }
              const totalSegs = pixels.length - 1;
              const curSeg = Math.min(totalSegs - 1, Math.floor(progress * totalSegs));
              const segProg = (progress * totalSegs) - curSeg;
              const p1 = pixels[curSeg], p2 = pixels[curSeg + 1];
              const curX = p1.x + (p2.x - p1.x) * segProg, curY = p1.y + (p2.y - p1.y) * segProg;
              const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

              ctx.save(); ctx.translate(curX, curY); ctx.rotate(angle); ctx.fillStyle = "#ffffff";
              ctx.beginPath(); ctx.moveTo(16, 0); ctx.lineTo(2, -3); ctx.lineTo(0, -12); ctx.lineTo(-3, -12);
              ctx.lineTo(-2, -3); ctx.lineTo(-10, -3); ctx.lineTo(-13, -7); ctx.lineTo(-14, -7);
              ctx.lineTo(-14, 7); ctx.lineTo(-13, 7); ctx.lineTo(-10, 3); ctx.lineTo(-2, 3);
              ctx.lineTo(-3, 12); ctx.lineTo(0, 12); ctx.lineTo(2, 3); ctx.closePath(); ctx.fill();
              ctx.restore();
              planePositionsRef.current[tx.id] = { x: curX, y: curY, tx, progress };
            }
          });
        }
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!active || !fgCanvasRef.current) return;
    const rect = fgCanvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * mapWidth;
    const y = ((e.clientY - rect.top) / rect.height) * mapHeight;

    let planeHit = false;
    Object.values(planePositionsRef.current).forEach((p: any) => {
      const dx = p.x - x;
      const dy = p.y - y;
      if ((dx * dx + dy * dy) < 1600) planeHit = true; // 40px radius squared
    });

    if (planeHit !== isHoveringPlane) setIsHoveringPlane(planeHit);
  }, [active, isHoveringPlane, mapWidth, mapHeight]);

  const handleCanvasClick = useCallback((e: React.MouseEvent) => {
    if (!active || !fgCanvasRef.current) return;
    const rect = fgCanvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * mapWidth;
    const y = ((e.clientY - rect.top) / rect.height) * mapHeight;

    let clickedPlane: any = null;
    let minDistSq = 2500; // 50px radius squared
    Object.values(planePositionsRef.current).forEach((p: any) => {
      const dx = p.x - x;
      const dy = p.y - y;
      const dSq = dx * dx + dy * dy;
      if (dSq < minDistSq) {
        minDistSq = dSq;
        clickedPlane = p.tx;
      }
    });

    if (clickedPlane) {
      setSelectedPlane(clickedPlane);
      return;
    }

    setSelectedPlane(null);
  }, [active, mapWidth, mapHeight]);

  const defaultCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='4' fill='none' stroke='%2322d3ee' stroke-width='1.5'/><circle cx='8' cy='8' r='1' fill='%2322d3ee'/></svg>") 8 8, auto`;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="flex h-full w-fit">
        <div className="relative h-full shrink-0">
          <canvas ref={bgCanvasRef} width={mapWidth} height={mapHeight} className="h-full w-auto max-w-none z-0" style={{ pointerEvents: "none" }} />
          <canvas
            ref={fgCanvasRef}
            width={mapWidth} height={mapHeight}
            className="absolute inset-0 h-full w-auto max-w-none z-10"
            style={{ cursor: isHoveringPlane ? "pointer" : defaultCursor, pointerEvents: active ? "auto" : "none" }}
            onMouseMove={handleMouseMove}
            onClick={handleCanvasClick}
          />
        </div>
      </div>

      {selectedPlane && (
        <PlaneDetailCard
          selectedPlane={selectedPlane}
          onClose={() => setSelectedPlane(null)}
          planePositionsRef={planePositionsRef}
          mapWidth={mapWidth}
          mapHeight={mapHeight}
          fgCanvasRef={fgCanvasRef}
        />
      )}
    </div>

  );
}
