"use client"

import { useEffect, useRef, useState, useMemo } from "react";
import { countries as centersData } from "@/app/database/data/countries/region/index";
import { internationalHubs } from "../3_hub/hubs";
import { getInitialAgreements } from "../../database_mitra/agreementsRegistry";
import { tradeStorage } from "../../TradeStorage";
import { allRelations } from "@/app/database/data/countries/relations/index";
import { calculateTradeRoute, getHubForCountry, Point } from "../2_rute/TradeRoutes";
import { timeStorage } from "../../timeStorage";

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

const getRelation = (name: string, userCountry: string) => {
  if (name === userCountry) return 100;
  const userEntry = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
  const userId = userEntry ? userEntry.name_id.toLowerCase().trim() : userCountry.toLowerCase().trim();
  const countryEntry = centersData.find(c => c.name_en === name || c.name_id === name);
  let targetId = countryEntry ? countryEntry.name_id.toLowerCase().trim() : name.toLowerCase().trim();
  if (geoJsonToIndo[name]) targetId = geoJsonToIndo[name].toLowerCase().trim();
  const userRelations = allRelations[userId];
  if (!userRelations) return 50;
  const item = userRelations.find(i => i.name.toLowerCase().trim() === targetId);
  return item ? item.relation : 50;
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
  { name: "Laut Hitam", lon: 35, lat: 43, size: 18, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Merah", lon: 38, lat: 20, size: 18, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Laut Arab", lon: 65, lat: 15, size: 24, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Meksiko", lon: -90, lat: 25, size: 20, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Benggala", lon: 90, lat: 15, size: 24, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Teluk Persia", lon: 51, lat: 26, size: 16, color: "rgba(125, 211, 252, 0.4)" },
  { name: "Selat Malaka", lon: 99, lat: 4, size: 12, color: "rgba(2, 132, 199, 0.6)" },
  { name: "Selat Gibraltar", lon: -5.6, lat: 35.5, size: 12, color: "rgba(2, 132, 199, 0.6)" },
  { name: "Terusan Suez", lon: 33.5, lat: 31, size: 12, color: "rgba(2, 132, 199, 0.6)" },
  { name: "Terusan Panama", lon: -78.5, lat: 8, size: 12, color: "rgba(2, 132, 199, 0.6)" }
];

const getContinentColor = (name: string, id: string): string => {
  const n = name.trim().toLowerCase();
  const i = id?.toUpperCase() || "";

  // Africa - Jungle Green
  if ([
    "AGO", "BDI", "BEN", "BFA", "BWA", "CAF", "CIV", "CMR", "COD", "COG", "COM", "CPV", "DJI", "DZA", "EGY", "ERI", "ETH",
    "GAB", "GHA", "GIN", "GMB", "GNB", "GNQ", "KEN", "LBR", "LBY", "LSO", "MAR", "MDG", "MLI", "MOZ", "MRT", "MUS", "MWI",
    "NAM", "NER", "NGA", "REU", "RWA", "SDN", "SSD", "SEN", "SLE", "SOM", "STP", "SWZ", "SYC", "TCD", "TGO", "TUN", "TZA",
    "UGA", "ZAF", "ZMB", "ZWE", "ESH", "-99"
  ].includes(i) || /senegal|gambia|guinea|ivory|tanzania|somaliland|sahara|congo|ethiopia|somalia|eritrea|djibouti/.test(n)) return "rgba(16, 185, 129, 0.4)";

  // Asia - Gold/Amber
  if ([
    "AFG", "ARE", "ARM", "AZE", "BGD", "BHR", "BRN", "BTN", "CHN", "-99", "CYP", "GEO", "IDN", "IND", "IRN", "IRQ", "ISR",
    "JOR", "JPN", "KAZ", "KGZ", "KHM", "KOR", "KWT", "LAO", "LBN", "LKA", "MDV", "MMR", "MNG", "MYS", "NPL", "OMN", "PAK",
    "PHL", "PRK", "PSE", "QAT", "SAU", "SGP", "SYR", "THA", "TJK", "TKM", "TLS", "TUR", "TKM", "UZB", "VNM", "YEM", "TWN"
  ].includes(i) || /india|china|japan|indonesia|pakistan|korea|vietnam|thailand|bangladesh|kyrgyz|tajikistan/.test(n)) return "rgba(245, 158, 11, 0.4)";

  // Europe - Command Blue
  if ([
    "ALB", "AND", "AUT", "BEL", "BGR", "BIH", "BLR", "CHE", "CZE", "DEU", "DNK", "ESP", "EST", "FIN", "FRA", "GBR", "GRC",
    "HRV", "HUN", "IRL", "ISL", "ITA", "KOS", "CS-KM", "LTU", "LUX", "LVA", "MDA", "MCO", "MNE", "NLD", "NOR", "POL", "PRT",
    "ROU", "RUS", "SMR", "SRB", "SVK", "SVN", "SWE", "UKR", "VAT", "LIE", "MKD"
  ].includes(i) || /russia|france|germany|italy|united kingdom|spain|romania/.test(n)) return "rgba(59, 130, 246, 0.4)";

  // North America - Intelligence Purple
  if ([
    "BHS", "BLZ", "BMU", "CAN", "CRI", "CUB", "DOM", "GRL", "GTM", "HND", "HTI", "JAM", "MEX", "NIC", "PAN", "PRI", "SLV",
    "TTO", "USA", "ATG", "BRB", "DMA", "GRD", "KNA", "LCA", "VCT"
  ].includes(i) || /united states|canada|mexico|cuba/.test(n)) return "rgba(139, 92, 246, 0.4)";

  // South America - Pink/Magenta
  if ([
    "ARG", "BOL", "BRA", "CHL", "COL", "ECU", "FLK", "GUF", "GUY", "PER", "PRY", "SUR", "URY", "VEN"
  ].includes(i) || /brazil|argentina|colombia|chile|peru/.test(n)) return "rgba(236, 72, 153, 0.4)";

  // Oceania - Nano Cyan
  if ([
    "AUS", "FJI", "NCL", "NZL", "SLB", "VUT", "PNG", "KIR", "MHL", "FSM", "NRU", "PLW", "WSM", "TON", "TUV"
  ].includes(i) || /australia|zealand|papua/.test(n)) return "rgba(6, 182, 212, 0.4)";

  // Antarctica - Polar Slate
  if (i === "ATA" || i === "ATF" || n.includes("antarctica")) return "rgba(148, 163, 184, 0.4)";

  return "rgba(71, 85, 105, 0.3)";
};

export default function TradeMapCanvas({ userCountry, targetCountry, onSelect, active = true, geoData }: TradeMapCanvasProps) {
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedWp, setSelectedWp] = useState<string | null>(null);
  const [sessionTrades, setSessionTrades] = useState<any[]>([]);
  const [activeTransactions, setActiveTransactions] = useState<any[]>([]);

  const mapWidth = 6000;
  const mapHeight = 2400;

  const activeTxRef = useRef<any[]>([]);
  const gameStateRef = useRef(timeStorage.getState());
  const requestRef = useRef<number>(null);
  const lastTimestampRef = useRef<number>(Date.now());
  const txAccumulatedTimeRef = useRef<Record<number, number>>({});
  
  // Cache for pre-calculated and PROJECTED routes
  const activeRoutesCacheRef = useRef<Record<number, { pts: Point[], pixels: { x: number, y: number }[] }>>({});
  const drawnPathsRef = useRef<{ pts: { rtX: number, rtY: number }[], origin: string, mitra: string }[]>([]);

  // 1. DATA LISTENERS
  useEffect(() => {
    const update = () => {
      const userEntry = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
      if (userEntry) {
        setSessionTrades(tradeStorage.getTrade(userEntry.name_en) || tradeStorage.getTrade(userEntry.name_id) || []);
        setActiveTransactions(tradeStorage.getActiveTransactions());
      }
    };
    update();
    const handler = () => update();
    window.addEventListener('trade_storage_updated', handler);
    return () => window.removeEventListener('trade_storage_updated', handler);
  }, [userCountry]);

  useEffect(() => { activeTxRef.current = activeTransactions; }, [activeTransactions]);

  useEffect(() => {
    const unsubscribe = timeStorage.subscribe((date, paused, speed) => {
      gameStateRef.current = { gameDate: date, isPaused: paused, speed: speed };
    });
    return () => unsubscribe();
  }, []);

  const tradePartners = useMemo(() => {
    if (!userCountry) return new Set<string>();
    const entry = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
    if (!entry) return new Set<string>();
    const activeAgreements = sessionTrades.filter((t: any) => (t.type === 'Perdagangan' || t.jenis === 'Perdagangan') && t.status === 'Aktif');
    const partners = activeAgreements.length > 0 ? activeAgreements : getInitialAgreements(entry.name_en, entry.name_id);
    return new Set(partners.map((p: any) => (p.mitra || p.name || "").toLowerCase().trim()));
  }, [userCountry, sessionTrades]);

  const fullGeoToIndoMap = useMemo(() => {
    const map: Record<string, string> = { ...geoJsonToIndo };
    centersData.forEach(c => { if (c.name_en) map[c.name_en] = c.name_id; });
    return map;
  }, []);

  // --- 2. STATIC BACKGROUND (Peta Dunia + Rute Diam + Rute Aktif Statis) ---
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas || !geoData) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, mapWidth * 3, mapHeight);
    const offsets = [0, mapWidth, mapWidth * 2];
    
    // a. Pre-calculate active route pixels to ensure they are available for drawing
    activeTransactions.forEach(tx => {
      if (!activeRoutesCacheRef.current[tx.id]) {
        const sHub = getHubForCountry(tx.source), dHub = getHubForCountry(tx.dest);
        if (sHub && dHub) {
          const pts = calculateTradeRoute({ lon: sHub.lon, lat: sHub.lat }, { lon: dHub.lon, lat: dHub.lat });
          activeRoutesCacheRef.current[tx.id] = { pts, pixels: pts.map(p => ({ x: ((p.lon + 180) / 360) * mapWidth, y: ((90 - p.lat) / 180) * mapHeight })) };
        }
      }
    });

    // b. Pre-calculate dormant paths
    drawnPathsRef.current = [];
    const userCenter = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
    if (userCenter) {
      tradePartners.forEach(partnerName => {
        const pCenter = centersData.find(c => c.name_id.toLowerCase().trim() === partnerName || c.name_en.toLowerCase().trim() === partnerName);
        if (pCenter) {
          const pts = [];
          for (let i = 0; i <= 20; i++) {
            const t = i / 20;
            const lon = userCenter.lon + (pCenter.lon - userCenter.lon) * t;
            const lat = userCenter.lat + (pCenter.lat - userCenter.lat) * t + Math.sin(t * Math.PI) * 10;
            pts.push({ rtX: (lon + 180) / 360, rtY: (90 - lat) / 180 });
          }
          drawnPathsRef.current.push({ pts, origin: userCenter.name_en, mitra: pCenter.name_id });
        }
      });
    }

    offsets.forEach(offset => {
      ctx.save(); ctx.translate(offset, 0);
      const project = (lon: number, lat: number) => ({ x: ((lon + 180) / 360) * mapWidth, y: ((90 - lat) / 180) * mapHeight });
      
      // Gradient Ocean
      const grad = ctx.createRadialGradient(mapWidth / 2, mapHeight / 2, 100, mapWidth / 2, mapHeight / 2, mapWidth / 1.5);
      grad.addColorStop(0, "#121d31"); grad.addColorStop(1, "#070b13");
      ctx.fillStyle = grad; ctx.fillRect(0, 0, mapWidth, mapHeight);

      // Countries
      geoData.features.forEach((feature: any) => {
        const name = feature.properties.name;
        const targetUser = { "United States": "United States of America" }[userCountry] || userCountry;
        const targetHover = targetCountry ? ({ "United States": "United States of America" }[targetCountry] || targetCountry) : null;
        const isPlayer = name === targetUser, isTarget = name === targetHover;
        
        ctx.beginPath();
        const draw = (coords: any) => coords.forEach((poly: any) => poly.forEach((c: any, i: number) => {
          const { x, y } = project(c[0], c[1]);
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }));
        if (feature.geometry.type === "Polygon") draw(feature.geometry.coordinates);
        else feature.geometry.coordinates.forEach((p: any) => draw(p));
        ctx.closePath();

        const isPartner = tradePartners.has(name.toLowerCase().trim()) || tradePartners.has((fullGeoToIndoMap[name] || name).toLowerCase().trim());
        let fill = getContinentColor(name, feature.id), stroke = "rgba(245, 245, 220, 0.25)";
        if (isPartner && !isPlayer && !isTarget) { fill = "rgba(6, 182, 212, 0.45)"; stroke = "rgba(6, 182, 212, 0.9)"; }
        if (isPlayer || isTarget) {
          fill = isPlayer ? "rgba(34, 197, 94, 0.3)" : "rgba(251, 191, 36, 0.4)";
          stroke = isPlayer ? "#4ade80" : "#fbbf24";
          ctx.shadowBlur = 15; ctx.shadowColor = stroke;
        }
        ctx.fillStyle = fill; ctx.strokeStyle = stroke; ctx.fill(); ctx.stroke(); ctx.shadowBlur = 0;
      });

      // Active Static Routes (Lines drawn ONCE here, not in loop)
      activeTransactions.forEach(tx => {
        const data = activeRoutesCacheRef.current[tx.id];
        if (data) {
          ctx.beginPath();
          ctx.moveTo(data.pixels[0].x, data.pixels[0].y);
          for (let i = 1; i < data.pixels.length; i++) ctx.lineTo(data.pixels[i].x, data.pixels[i].y);
          ctx.lineWidth = 3.5;
          ctx.strokeStyle = tx.type === 'buy' ? "#ff3333" : "#22c55e";
          ctx.globalAlpha = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1.0;
        }
      });

      // Dormant Routes
      drawnPathsRef.current.forEach(p => {
        ctx.beginPath(); ctx.moveTo(p.pts[0].rtX*mapWidth, p.pts[0].rtY*mapHeight);
        p.pts.forEach(pt => ctx.lineTo(pt.rtX*mapWidth, pt.rtY*mapHeight));
        ctx.strokeStyle = "rgba(14,165,233,0.3)"; ctx.stroke();
      });

      // Centers & Labels
      const sorted = [...centersData].sort((a,b) => (a.name_en === targetCountry ? 1 : b.name_en === targetCountry ? -1 : 0));
      const grid: any[] = [];
      sorted.forEach(c => {
        const { x, y } = project(c.lon, c.lat);
        const isSel = c.name_en === userCountry || c.name_en === targetCountry;
        ctx.beginPath(); ctx.arc(x, y, isSel ? 4 : 2.5, 0, 7); ctx.fillStyle = isSel ? "#ffffff" : "rgba(148,163,184,0.5)"; ctx.fill();
        if (isSel) { ctx.font = "48px sans-serif"; ctx.fillText(c.flag, x, y - 90); }
        else if (!grid.some(p => Math.abs(p.x-x)<120 && Math.abs(p.y-y)<60)) {
          ctx.font = "14px sans-serif"; ctx.fillStyle = "rgba(148,163,184,0.35)"; ctx.fillText(c.flag, x, y-18); grid.push({x,y});
        }
      });

      internationalHubs.forEach(h => {
        const { x, y } = project(h.lon, h.lat);
        ctx.beginPath(); ctx.arc(x, y, 4.5, 0, 7); ctx.fillStyle = h.fill || "#ffffff"; ctx.fill();
      });
      ctx.restore();
    });
  }, [geoData, userCountry, targetCountry, centersData, tradePartners, activeTransactions]);

  // --- 3. ANIMATION LOOP (FOREGROUND - PELAYARAN SAJA) ---
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
           const offsets = [0, mapWidth, mapWidth * 2];
           offsets.forEach(offset => {
             ctx.save(); ctx.translate(offset, 0);
             activeTxRef.current.forEach(tx => {
               const data = activeRoutesCacheRef.current[tx.id];
               if (data) {
                 const { pixels } = data;
                 const duration = 10000;
                 const elapsed = txAccumulatedTimeRef.current[tx.id] || 0;
                 const progress = Math.min(1, Math.max(0, elapsed / duration));
                 
                 if (elapsed >= duration) {
                    delete activeRoutesCacheRef.current[tx.id];
                    setTimeout(() => tradeStorage.removeTransaction(tx.id), 0);
                    return;
                 }
                 const totalSegs = pixels.length - 1;
                 const curSeg = Math.min(totalSegs - 1, Math.floor(progress * totalSegs));
                 const segProg = (progress * totalSegs) - curSeg;
                 const p1 = pixels[curSeg], p2 = pixels[curSeg + 1];
                 const curX = p1.x + (p2.x - p1.x) * segProg, curY = p1.y + (p2.y - p1.y) * segProg;
                 const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

                 ctx.save(); ctx.translate(curX, curY); ctx.rotate(angle); ctx.fillStyle = "#ffffff";
                 ctx.shadowBlur = 8; ctx.shadowColor = "#ffffff";
                 ctx.beginPath(); ctx.moveTo(10, 0); ctx.lineTo(-6, -5); ctx.lineTo(-4, 0); ctx.lineTo(-6, 5);
                 ctx.closePath(); ctx.fill(); ctx.restore();
               }
             });
             ctx.restore();
           });
        }
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, []);

  const defaultCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='4' fill='none' stroke='%2322d3ee' stroke-width='1.5'/><circle cx='8' cy='8' r='1' fill='%2322d3ee'/></svg>") 8 8, auto`;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <canvas ref={bgCanvasRef} width={mapWidth * 3} height={mapHeight} className="h-full w-auto max-w-none z-0" style={{ pointerEvents: "none" }} />
      <canvas ref={fgCanvasRef} width={mapWidth * 3} height={mapHeight} className="absolute inset-0 h-full w-auto max-w-none z-10" style={{ cursor: isHovering ? "pointer" : defaultCursor, pointerEvents: active ? "auto" : "none" }}
        onMouseMove={(e) => {
          if (!active) return;
          const rect = fgCanvasRef.current!.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * (mapWidth * 3) % mapWidth;
          const y = ((e.clientY - rect.top) / rect.height) * mapHeight;
          setIsHovering(centersData.some(c => Math.sqrt((((c.lon+180)/360)*mapWidth - x)**2 + (((90-c.lat)/180)*mapHeight - y)**2) < 60));
        }}
        onClick={(e) => {
          if (!active) return;
          const rect = fgCanvasRef.current!.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * (mapWidth * 3) % mapWidth;
          const y = ((e.clientY - rect.top) / rect.height) * mapHeight;
          let closest: any = null, minDist = 100;
          centersData.forEach(c => {
            const d = Math.sqrt((((c.lon+180)/360)*mapWidth - x)**2 + (((90-c.lat)/180)*mapHeight - y)**2);
            if (d < minDist) { minDist = d; closest = c; }
          });
          internationalHubs.forEach(h => {
             const d = Math.sqrt((((h.lon+180)/360)*mapWidth - x)**2 + (((90-h.lat)/180)*mapHeight - y)**2);
             if (d < minDist) { minDist = d; closest = h; }
          });
          if (closest) {
            let name = closest.name_en || closest.name;
            if (name.includes('(')) name = name.split('(')[0].trim();
            setSelectedWp(prev => prev === name ? null : name);
            if (onSelect) onSelect(name);
          }
        }}
      />
    </div>
  );
}
