"use client"

import { useEffect, useRef, useState, useMemo } from "react";
import { PlaneDetailCard } from "../2_map/PlaneDetailCard";
import { countries as centersData } from "@/app/database/data/negara/benua/index";
import { internationalHubs } from "../3_hub/hubs";
import { getInitialAgreements } from "@/app/database/data/database_mitra_perdagangan/agreementsRegistry";
import { tradeStorage } from "../../TradeStorage";
import { allRelations } from "@/app/database/data/negara/hubungan/index";
import { calculateTradeRoute, getHubForCountry, Point } from "../2_rute/tradeRoutes";
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

const maritimeLabels = [
  { name: "S A M U D R A   P A S I F I K", lon: -140, lat: 0, size: 36, color: "rgba(56, 189, 248, 0.1)" },
  { name: "S A M U D R A   P A S I F I K", lon: 160, lat: 10, size: 36, color: "rgba(56, 189, 248, 0.1)" },
  { name: "S A M U D R A   A T L A N T I K", lon: -40, lat: 25, size: 36, color: "rgba(56, 189, 248, 0.1)" },
  { name: "S A M U D R A   A T L A N T I K", lon: -20, lat: -25, size: 36, color: "rgba(56, 189, 248, 0.1)" },
  { name: "S A M U D R A   H I N D I A", lon: 80, lat: -20, size: 36, color: "rgba(56, 189, 248, 0.1)" }
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

  // REDUCED TO 6000px (SAMA DENGAN MAIN MAP)
  const mapWidth = 6000;
  const mapHeight = 2400;

  const activeTxRef = useRef<any[]>([]);
  const gameStateRef = useRef(timeStorage.getState());
  const requestRef = useRef<number>(null);
  const lastTimestampRef = useRef<number>(Date.now());
  const txAccumulatedTimeRef = useRef<Record<number, number>>({});
  const activeRoutesCacheRef = useRef<Record<number, { pts: Point[], pixels: { x: number, y: number }[] }>>({});
  const planePositionsRef = useRef<Record<number, { x: number, y: number, tx: any, progress: number }>>({});

  const projectMap = (lon: number, lat: number) => ({ x: ((lon + 180) / 360) * mapWidth, y: ((90 - lat) / 180) * mapHeight });

  const paths = useMemo(() => {
    if (!geoData) return [];
    return geoData.features.map((feature: any) => {
      const path = new Path2D();
      const drawCoords = (coordinates: any) => {
        coordinates.forEach((polyline: any) => {
          polyline.forEach((coord: any, i: number) => {
            const { x, y } = projectMap(coord[0], coord[1]);
            if (i === 0) path.moveTo(x, y); else path.lineTo(x, y);
          });
        });
      };
      if (feature.geometry.type === "Polygon") drawCoords(feature.geometry.coordinates);
      else if (feature.geometry.type === "MultiPolygon") feature.geometry.coordinates.forEach((p: any) => drawCoords(p));
      return { name: feature.properties.name, path, id: feature.id };
    });
  }, [geoData]);

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const update = () => {
      if (debounceTimerRef.current) return;
      debounceTimerRef.current = setTimeout(() => {
        const userEntry = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
        if (userEntry) {
          setSessionTrades(tradeStorage.getTrade(userEntry.name_en) || tradeStorage.getTrade(userEntry.name_id) || []);
          setActiveTransactions(tradeStorage.getActiveTransactions());
        }
        setTick(t => t + 1);
        debounceTimerRef.current = null;
      }, 200); 
    };
    update();
    window.addEventListener('trade_storage_updated', update);
    return () => {
      window.removeEventListener('trade_storage_updated', update);
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
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
    const activeAgreements = sessionTrades.filter((t: any) => (t.type === 'Perdagangan' || t.jenis === 'Perdagangan') && t.status === 'Aktif');
    const partners = activeAgreements.length > 0 ? activeAgreements : getInitialAgreements(entry?.name_en || "", entry?.name_id || "");
    return new Set(partners.map((p: any) => (p.mitra || p.name || "").toLowerCase().trim()));
  }, [userCountry, sessionTrades]);

  const fullGeoToIndoMap = useMemo(() => {
    const map: Record<string, string> = { ...geoJsonToIndo };
    centersData.forEach(c => { if (c.name_en) map[c.name_en] = c.name_id; });
    return map;
  }, []);

  // --- 1. STATIC LAYER (Map + Lines) ---
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas || !geoData || paths.length === 0) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Ocean
    ctx.fillStyle = "#070b13"; ctx.fillRect(0, 0, mapWidth, mapHeight);

    // Countries
    paths.forEach((item: any) => {
      const name = item.name;
      const targetUser = { "United States": "United States of America" }[userCountry] || userCountry;
      const targetHover = targetCountry ? ({ "United States": "United States of America" }[targetCountry] || targetCountry) : null;
      const isPlayer = name === targetUser, isTarget = name === targetHover;
      const isPartner = tradePartners.has(name.toLowerCase().trim()) || tradePartners.has((fullGeoToIndoMap[name] || name).toLowerCase().trim());
      
      let fill = getContinentColor(name, item.id), stroke = "rgba(245, 245, 220, 0.15)";
      if (isPartner && !isPlayer && !isTarget) { fill = "rgba(6, 182, 212, 0.4)"; stroke = "rgba(6, 182, 212, 0.6)"; }
      if (isPlayer || isTarget) {
        fill = isPlayer ? "rgba(34, 197, 94, 0.3)" : "rgba(251, 191, 36, 0.3)";
        stroke = isPlayer ? "#4ade80" : "#fbbf24";
      }
      ctx.fillStyle = fill; ctx.strokeStyle = stroke; ctx.fill(item.path); ctx.stroke(item.path);
    });

    // Maritime
    maritimeLabels.forEach(label => {
      const { x, y } = projectMap(label.lon, label.lat);
      ctx.font = `italic 18px sans-serif`; ctx.fillStyle = label.color;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(label.name, x, y);
    });

    // Hubs
    internationalHubs.forEach(h => {
      const { x, y } = projectMap(h.lon, h.lat);
      ctx.beginPath(); ctx.arc(x, y, 4, 0, 7); ctx.fillStyle = h.fill || "#ffffff"; ctx.fill();
    });

    // Static Routes
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

  }, [tick, geoData, userCountry, targetCountry]);

  // --- 2. DYNAMIC LAYER (Ships Only) ---
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
              if (elapsed >= duration) {
                delete txAccumulatedTimeRef.current[tx.id]; // Cleanup
                return;
              }
              const totalSegs = pixels.length - 1;
              const curSeg = Math.min(totalSegs - 1, Math.floor(progress * totalSegs));
              const segProg = (progress * totalSegs) - curSeg;
              const p1 = pixels[curSeg], p2 = pixels[curSeg + 1];
              const curX = p1.x + (p2.x - p1.x) * segProg, curY = p1.y + (p2.y - p1.y) * segProg;
              const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

              ctx.save(); ctx.translate(curX, curY); ctx.rotate(angle); ctx.fillStyle = "#ffffff";
              // Plane Body & Wings
              ctx.beginPath();
              ctx.moveTo(16, 0);           // Nose
              ctx.lineTo(2, -3);           // Body upper
              ctx.lineTo(0, -12);          // Wing Tip top
              ctx.lineTo(-3, -12);         // Wing back top
              ctx.lineTo(-2, -3);          // Body side mid top
              ctx.lineTo(-10, -3);         // Tail connector top
              ctx.lineTo(-13, -7);         // Tail tip top
              ctx.lineTo(-14, -7);         // Tail back top
              ctx.lineTo(-14, 7);          // Tail back bottom
              ctx.lineTo(-13, 7);          // Tail tip bottom
              ctx.lineTo(-10, 3);          // Tail connector bottom
              ctx.lineTo(-2, 3);           // Body side mid bottom
              ctx.lineTo(-3, 12);          // Wing back bottom
              ctx.lineTo(0, 12);           // Wing tip bottom
              ctx.lineTo(2, 3);            // Body lower
              ctx.closePath();
              ctx.fill();
              
              // Cockpit / Nose detail (slightly different shade or highlight)
              ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
              ctx.beginPath();
              ctx.moveTo(16, 0);
              ctx.lineTo(8, -2);
              ctx.lineTo(8, 2);
              ctx.closePath();
              ctx.fill();

              ctx.restore();

              // Update plane positions for hit detection
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

  const defaultCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='4' fill='none' stroke='%2322d3ee' stroke-width='1.5'/><circle cx='8' cy='8' r='1' fill='%2322d3ee'/></svg>") 8 8, auto`;
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!active || !fgCanvasRef.current) return;
    const rect = fgCanvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * mapWidth;
    const y = ((e.clientY - rect.top) / rect.height) * mapHeight;

    // Check hit on planes (higher priority)
    let planeHit = false;
    Object.values(planePositionsRef.current).forEach(p => {
        const dist = Math.sqrt((p.x - x)**2 + (p.y - y)**2);
        if (dist < 40) planeHit = true; // Use larger radius for airplanes
    });
    
    setIsHoveringPlane(planeHit);
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (!active || !fgCanvasRef.current) return;
    const rect = fgCanvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * mapWidth;
    const y = ((e.clientY - rect.top) / rect.height) * mapHeight;

    // 1. Check hit on planes
    let clickedPlane: any = null;
    let minDist = 50;
    Object.values(planePositionsRef.current).forEach(p => {
        const d = Math.sqrt((p.x - x)**2 + (p.y - y)**2);
        if (d < minDist) {
            minDist = d;
            clickedPlane = p.tx;
        }
    });

    if (clickedPlane) {
        setSelectedPlane(clickedPlane);
        return;
    }

    // 2. Click outside to close (Optional: Country clicks disabled as requested)
    setSelectedPlane(null);
  };

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
