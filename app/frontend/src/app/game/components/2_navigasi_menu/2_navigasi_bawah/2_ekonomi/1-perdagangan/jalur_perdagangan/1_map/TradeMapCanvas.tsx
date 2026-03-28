"use client"

import { useEffect, useRef, useState, useMemo } from "react";
import { countries as centersData } from "@/app/database/data/countries/region/index";
import { internationalHubs } from "../3_hub/hubs";
import { getInitialAgreements } from "../../database_mitra/agreementsRegistry";
import { tradeStorage } from "../../TradeStorage";
import { allRelations } from "@/app/database/data/countries/relations/index";
import { calculateTradeRoute, getHubForCountry } from "../2_rute/TradeRoutes";
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


// Map Helper for Continent Colors
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouseDownPosRef = useRef<{ x: number; y: number } | null>(null);
  const [selectedWp, setSelectedWp] = useState<string | null>(null);
  const [sessionTrades, setSessionTrades] = useState<any[]>([]);
  const [activeTransactions, setActiveTransactions] = useState<any[]>([]);

  // Listen for real-time trade storage updates
  useEffect(() => {
    const updateTrades = () => {
      if (!userCountry) return;
      const userEntry = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
      if (userEntry) {
        const trades = tradeStorage.getTrade(userEntry.name_en) || tradeStorage.getTrade(userEntry.name_id);
        setSessionTrades(trades || []);
      }
    };

    // Initial load
    updateTrades();
    setActiveTransactions(tradeStorage.getActiveTransactions());

    const tradeUpdateHandler = () => {
      updateTrades();
      setActiveTransactions(tradeStorage.getActiveTransactions());
    };

    window.addEventListener('trade_storage_updated', tradeUpdateHandler);
    return () => window.removeEventListener('trade_storage_updated', tradeUpdateHandler);
  }, [userCountry]);

  // Logic for Trade Partners - takes initial data or session data if available
  const tradePartners = useMemo(() => {
    if (!userCountry) return new Set<string>();

    const userEntry = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
    if (!userEntry) return new Set<string>();

    const userEn = userEntry.name_en;
    const userId = userEntry.name_id;

    // Use the state-driven sessionTrades (updated via events)
    let partnersData: any[] = [];
    if (sessionTrades && Array.isArray(sessionTrades) && sessionTrades.length > 0) {
      // filters for 'Perdagangan' and ensures they are active
      // Supporting both 'type' and 'jenis' for backward and database compatibility
      partnersData = sessionTrades.filter((t: any) =>
        (t.type === 'Perdagangan' || t.jenis === 'Perdagangan') &&
        t.status === 'Aktif'
      );
    } else {
      // 2. Fallback to initial database relations
      partnersData = getInitialAgreements(userEn, userId);
    }

    // Create a Set of normalized names for fast lookup during map rendering
    return new Set(partnersData.map((p: any) => (p.mitra || p.name || "").toLowerCase().trim()));
  }, [userCountry, sessionTrades]);

  // Robust Naming Map: English (from GeoJSON) to Indonesian (used in trade mitra)
  const fullGeoToIndoMap = useMemo(() => {
    const map: Record<string, string> = { ...geoJsonToIndo };
    centersData.forEach(c => {
      if (c.name_en) map[c.name_en] = c.name_id;
    });
    return map;
  }, [centersData]);

  // Line hitting cache ref
  const drawnPathsRef = useRef<{ pts: { rtX: number, rtY: number }[], origin: string, mitra: string, originId: string, partnerId: string }[]>([]);

  // Higher resolution for more detail and less "narrow" feel
  // 3:1 or 2.5:1 aspect ratio can feel more panoramic
  const mapWidth = 6000;
  const mapHeight = 2400;

  // Modern Tactical Theme (Amber/Orange for Dormant, Cyan/Blue for Active)
  const DORMANT_TRADE_COLOR = "rgba(245, 158, 11, 0.4)";
  const ACTIVE_TRADE_COLOR = "#0066ff";
  const CUSTOM_TRADE_COLOR = "#ef4444";
  const CUSTOM_TRADE_DORMANT = "rgba(239, 68, 68, 0.25)";

  // Animation loop state
  const [animationTime, setAnimationTime] = useState(Date.now());
  const [gameState, setGameState] = useState(timeStorage.getState());
  const requestRef = useRef<number>(null);
  const lastTimestampRef = useRef<number>(Date.now());
  const txAccumulatedTimeRef = useRef<Record<number, number>>({});

  useEffect(() => {
    const unsubscribe = timeStorage.subscribe((date, paused, speed) => {
      setGameState({ gameDate: date, isPaused: paused, speed: speed });
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const deltaTime = now - lastTimestampRef.current;
      lastTimestampRef.current = now;

      // Only increment progress if not paused
      if (!gameState.isPaused) {
        activeTransactions.forEach(tx => {
          const current = txAccumulatedTimeRef.current[tx.id] || 0;
          // Apply speed multiplier to movement
          txAccumulatedTimeRef.current[tx.id] = current + (deltaTime * gameState.speed);
        });
      }

      setAnimationTime(now); // Trigger re-render
      requestRef.current = requestAnimationFrame(animate);
    };

    if (activeTransactions.length > 0) {
      lastTimestampRef.current = Date.now();
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [activeTransactions.length, gameState.isPaused, gameState.speed]);



  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !geoData) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear and Fill background style - Richer "Command Center" theme
    ctx.clearRect(0, 0, mapWidth * 3, mapHeight);


    // Line hitting cache

    const offsets = [0, mapWidth, mapWidth * 2];
    drawnPathsRef.current = []; // Clear line tap cache

    const selectedHubObj = selectedWp && typeof internationalHubs !== 'undefined'
      ? internationalHubs.find((h: any) => h.name === selectedWp)
      : null;

    // --- RE-ENABLE TRADE ROUTES CALCULATION ---
    const userCenter = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
    if (userCenter) {
      tradePartners.forEach(partnerName => {
        const pCenter = centersData.find(c =>
          c.name_id.toLowerCase().trim() === partnerName ||
          c.name_en.toLowerCase().trim() === partnerName
        );
        if (pCenter) {
          // Basic straight/curved logic for maritime routes
          const pts = [];
          const segments = 20;
          for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const lon = userCenter.lon + (pCenter.lon - userCenter.lon) * t;
            const lat = userCenter.lat + (pCenter.lat - userCenter.lat) * t;
            // Add a small arc/curve to look less "digital" and more "tactical"
            const curLat = lat + Math.sin(t * Math.PI) * 10;
            pts.push({ rtX: (lon + 180) / 360, rtY: (90 - curLat) / 180 });
          }
          drawnPathsRef.current.push({
            pts,
            origin: userCenter.name_en,
            mitra: pCenter.name_id,
            originId: userCenter.name_id,
            partnerId: pCenter.name_id
          });
        }
      });
    }

    offsets.forEach(offset => {
      ctx.save();
      ctx.translate(offset, 0);

      // Gradient Background
      const bgGradient = ctx.createRadialGradient(mapWidth / 2, mapHeight / 2, 100, mapWidth / 2, mapHeight / 2, mapWidth / 1.5);
      bgGradient.addColorStop(0, "#121d31"); // Realistic Deep Marine
      bgGradient.addColorStop(1, "#070b13"); // Deep dark ocean
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, mapWidth, mapHeight);

      // Drawing bounds: Equirectangular Projection Math
      const project = (lon: number, lat: number) => {
        // Slightly adjust coordinates to center things better for panoramic view
        const x = ((lon + 180) / 360) * mapWidth;
        const y = ((90 - lat) / 180) * mapHeight;
        return { x, y };
      };

      // Grid removed

      // Draw Countries
      geoData.features.forEach((feature: any) => {
        const name = feature.properties.name;
        const isPlayer = name === userCountry;
        const isTarget = name === targetCountry;

        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.beginPath();

        const drawCoords = (coordinates: any) => {
          coordinates.forEach((polyline: any, idx: number) => {
            polyline.forEach((coord: any, cIdx: number) => {
              const { x, y } = project(coord[0], coord[1]);
              if (cIdx === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            });
          });
        };

        if (feature.geometry.type === "Polygon") {
          drawCoords(feature.geometry.coordinates);
        } else if (feature.geometry.type === "MultiPolygon") {
          feature.geometry.coordinates.forEach((polygon: any) => {
            drawCoords(polygon);
          });
        }

        ctx.closePath();

        // Styling parameters
        let fillColor = getContinentColor(name, feature.id);
        let strokeColor = "rgba(245, 245, 220, 0.25)";

        // Check if this country is an economic partner
        const normalizedName = name.toLowerCase().trim();
        const displayIndoName = fullGeoToIndoMap[name] || name;
        const normalizedIndoName = displayIndoName.toLowerCase().trim();
        const isPartner = tradePartners.has(normalizedName) || tradePartners.has(normalizedIndoName);

        let isHighlighted = isPlayer || isTarget;

        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;

        // Apply partner highlighting if not primary highlight (player/target)
        if (isPartner && !isPlayer && !isTarget) {
          fillColor = "rgba(6, 182, 212, 0.45)"; // Rich Cyan-Blue for partners
          strokeColor = "rgba(6, 182, 212, 0.9)";
          ctx.lineWidth = 1.5;
        }

        if (isHighlighted) {
          if (isPlayer) {
            fillColor = "rgba(34, 197, 94, 0.3)";
            strokeColor = "#4ade80";
            ctx.lineWidth = 2;
            ctx.shadowColor = "#4ade80";
            ctx.shadowBlur = 15;
          } else if (isTarget) {
            const rel = getRelation(name, userCountry);
            if (rel >= 70) {
              fillColor = "rgba(34, 197, 94, 0.4)"; // Green
              strokeColor = "#4ade80";
            } else if (rel >= 41) {
              fillColor = "rgba(234, 179, 8, 0.4)"; // Yellow
              strokeColor = "#fbbf24";
            } else {
              fillColor = "rgba(239, 68, 68, 0.4)"; // Red
              strokeColor = "#f87171";
            }
            ctx.lineWidth = 2;
            ctx.shadowColor = strokeColor;
            ctx.shadowBlur = 15;
          }
        }

        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Radar removed

      // Draw Country Markers (Cyberpunk style)
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Draw Country Markers (Cyberpunk style)
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Simple decluttering: track used positions
      const labelGrid: { x: number, y: number }[] = [];
      const minLabelDist = 120; // Minimum distance between background labels

      // Separate selected from non-selected to ensure selected is always on top
      const sortedCenters = [...centersData].sort((a, b) => {
        if (a.name_en === targetCountry) return 1;
        if (b.name_en === targetCountry) return -1;
        if (a.name_en === userCountry) return 1;
        if (b.name_en === userCountry) return -1;
        return 0;
      });

      sortedCenters.forEach((center: any) => {
        const x = ((center.lon + 180) / 360) * mapWidth;
        const y = ((90 - center.lat) / 180) * mapHeight;
        const isPlayer = center.name_en === userCountry;
        const isTarget = center.name_en === targetCountry;

        // 1. Draw glowing dot marker
        ctx.beginPath();
        const isWhiteDot = ["Papua Nugini", "Papua New Guinea"].includes(center.name_en);
        if (isWhiteDot) {
          ctx.arc(x, y, 4, 0, Math.PI * 2); // Slightly larger
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#ffffff";
          ctx.shadowBlur = 4;
        } else {
          ctx.arc(x, y, 2.5, 0, Math.PI * 2); // Smaller dots for non-selected
          ctx.fillStyle = "rgba(148, 163, 184, 0.5)"; // Slate 400
        }
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // 1.5 Draw Tactical Maritime Labels (Oceans, Seas, Gulfs)
        maritimeLabels.forEach(label => {
          const { x, y } = project(label.lon, label.lat);
          ctx.font = `italic ${label.size}px 'Inter', sans-serif`;
          ctx.fillStyle = label.color;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          // Only draw if it's within map bounds to save performance and stop artifacts
          if (x > 0 && x < mapWidth && y > 0 && y < mapHeight) {
            ctx.fillText(label.name, x, y);
          }
        });

        // 2. Text Labels with Decluttering
        // Non-trade label modes removed
        if (true) {
          if (isPlayer || isTarget) {
            ctx.font = "48px sans-serif";
            ctx.shadowColor = "rgba(0,0,0,0.8)"; ctx.shadowBlur = 10;
            ctx.fillText(center.flag, x, y - 90);
            ctx.shadowBlur = 0;
          } else {
            // Only draw background labels if they don't crowd others
            const isTooCrowded = labelGrid.some(pos =>
              Math.abs(pos.x - x) < minLabelDist && Math.abs(pos.y - y) < minLabelDist / 2
            );

            if (!isTooCrowded) {
              ctx.font = "14px 'Inter', sans-serif";
              ctx.fillStyle = "rgba(148, 163, 184, 0.35)";
              ctx.fillText(center.flag, x, y - 18);
              labelGrid.push({ x, y });
            }
          }
        }
      });

      // === DRAW TRADE ROUTES (LINES) ===
      drawnPathsRef.current.forEach(path => {
        ctx.beginPath();
        const p0 = path.pts[0];
        ctx.moveTo(p0.rtX * mapWidth, p0.rtY * mapHeight);

        for (let i = 1; i < path.pts.length; i++) {
          ctx.lineTo(path.pts[i].rtX * mapWidth, path.pts[i].rtY * mapHeight);
        }

        ctx.lineWidth = 1.2;
        ctx.strokeStyle = "rgba(14, 165, 233, 0.3)"; // Subtle Cyan Route
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(14, 165, 233, 0.5)";
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // === DRAW INTERNATIONAL HUBS (Loaded from international/hubs.ts) ===
      if (typeof internationalHubs !== 'undefined') {
        internationalHubs.forEach((hub: any) => {
          const hX = ((hub.lon + 180) / 360) * mapWidth;
          const hY = ((90 - hub.lat) / 180) * mapHeight;

          ctx.beginPath();
          ctx.arc(hX, hY, hub.radius || 4.5, 0, Math.PI * 2);
          ctx.fillStyle = hub.fill || "#ffffff";
          if (hub.shadowColor) {
            ctx.shadowColor = hub.shadowColor;
            ctx.shadowBlur = hub.shadowBlur || 8;
          }
          ctx.fill();
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
          ctx.strokeStyle = "transparent";
          ctx.stroke();
        });
      }

      // === DRAW ACTIVE TRANSACTION LINES & SHIPS ===
      if (activeTransactions.length > 0) {
        activeTransactions.forEach(tx => {
          const sourceHub = getHubForCountry(tx.source);
          const destHub = getHubForCountry(tx.dest);

          if (sourceHub && destHub) {
            const route = calculateTradeRoute(
              { lon: sourceHub.lon, lat: sourceHub.lat },
              { lon: destHub.lon, lat: destHub.lat }
            );

            // 1. Draw Path (BOLD, SOLID, GLOWING)
            ctx.beginPath();
            ctx.setLineDash([]);

            const first = route[0];
            const { x: startX, y: startY } = project(first.lon, first.lat);
            ctx.moveTo(startX, startY);

            for (let i = 1; i < route.length; i++) {
              const { x, y } = project(route[i].lon, route[i].lat);
              ctx.lineTo(x, y);
            }

            ctx.lineWidth = 5.0;
            ctx.strokeStyle = tx.type === 'buy' ? "#ff3333" : "#22c55e";
            ctx.shadowBlur = 15;
            ctx.shadowColor = tx.type === 'buy' ? "rgba(255, 0, 0, 0.7)" : "rgba(34, 197, 94, 0.7)";
            ctx.stroke();
            ctx.shadowBlur = 0;

            // 2. Calculate Ship Position (Animation driven by Game Time)
            const duration = 10000; // Total travel time at 1x speed
            const activeElapsed = txAccumulatedTimeRef.current[tx.id] || 0;
            const progress = Math.min(1, Math.max(0, activeElapsed / duration));

            // Auto-cleanup when finished (respecting game time)
            if (activeElapsed >= duration) {
              tradeStorage.removeTransaction(tx.id);
              return;
            }

            if (progress < 1) {
              // Find current point in route based on progress
              const totalSegments = route.length - 1;
              const currentSegment = Math.min(totalSegments - 1, Math.floor(progress * totalSegments));
              const segmentProgress = (progress * totalSegments) - currentSegment;

              const p1 = route[currentSegment];
              const p2 = route[currentSegment + 1];

              const currentLon = p1.lon + (p2.lon - p1.lon) * segmentProgress;
              const currentLat = p1.lat + (p2.lat - p1.lat) * segmentProgress;

              const { x, y } = project(currentLon, currentLat);

              // Calculate Heading
              const { x: x2, y: y2 } = project(p2.lon, p2.lat);
              const angle = Math.atan2(y2 - y, x2 - x);

              // 3. Draw Cargo Ship Icon
              ctx.save();
              ctx.translate(x, y);
              ctx.rotate(angle);

              // Ship Shape
              ctx.fillStyle = "#ffffff";
              ctx.shadowBlur = 10;
              ctx.shadowColor = "#ffffff";

              // Draw a techy cargo ship triangle/diamond
              ctx.beginPath();
              ctx.moveTo(12, 0);   // Front
              ctx.lineTo(-8, -6);  // Back Left
              ctx.lineTo(-5, 0);   // Middle Back
              ctx.lineTo(-8, 6);   // Back Right
              ctx.closePath();
              ctx.fill();

              // High-tech highlight (Cabin)
              ctx.fillStyle = tx.type === 'buy' ? "#ff3333" : "#22c55e";
              ctx.fillRect(-2, -2, 4, 4);

              ctx.restore();
            }
          }
        });
      }



      ctx.restore();
    });

  }, [geoData, userCountry, targetCountry, centersData, selectedWp, activeTransactions, sessionTrades, animationTime]);

  // Define Custom Cursors
  const defaultCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='4' fill='none' stroke='%2322d3ee' stroke-width='1.5'/><circle cx='8' cy='8' r='1' fill='%2322d3ee'/></svg>") 8 8, auto`;
  const hoverCursor = "pointer";

  return (
    <div className="relative h-full w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        width={mapWidth * 3}
        height={mapHeight}
        className="h-full w-auto max-w-none z-10"
        style={{ cursor: defaultCursor, pointerEvents: active ? "auto" : "none" }}
        onMouseDown={(e) => {
          if (mouseDownPosRef && mouseDownPosRef.current !== undefined) {
            mouseDownPosRef.current = { x: e.clientX, y: e.clientY };
          }
        }}
        onMouseMove={(e) => {
          if (typeof active !== 'undefined' && !active) return;
          const canvas = canvasRef.current;
          if (!canvas) return;
          const rect = canvas.getBoundingClientRect();
          const clickX = ((e.clientX - rect.left) / rect.width) * (mapWidth * 3);
          const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;
          const mappedClickX = clickX % mapWidth;

          let foundHover = false;
          let debugMinDist = 99999;
          let closestName = "";

          centersData.forEach((center: any) => {
            const x = ((center.lon + 180) / 360) * mapWidth;
            const y = ((90 - center.lat) / 180) * mapHeight;
            const dist = Math.sqrt((mappedClickX - x) ** 2 + (clickY - y) ** 2);
            if (dist < 60) foundHover = true;
            if (dist < debugMinDist) { debugMinDist = dist; closestName = center.name_en; }

          });


          setIsHovering(foundHover);

        }}

        onClick={(e) => {
          if (!active) return;

          if (mouseDownPosRef.current) {
            const dx = Math.abs(e.clientX - mouseDownPosRef.current.x);
            const dy = Math.abs(e.clientY - mouseDownPosRef.current.y);
            if (dx > 5 || dy > 5) return; // Drag detected, abort
          }

          const canvas = canvasRef.current;
          if (!canvas) return;
          const rect = canvas.getBoundingClientRect();
          const clickX = ((e.clientX - rect.left) / rect.width) * (mapWidth * 3);
          const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;
          const mappedClickX = clickX % mapWidth;

          let closest: any = null;
          let minDist = 100;

          centersData.forEach((center: any) => {
            const x = ((center.lon + 180) / 360) * mapWidth;
            const y = ((90 - center.lat) / 180) * mapHeight;
            const dist = Math.sqrt((mappedClickX - x) ** 2 + (clickY - y) ** 2);
            if (dist < minDist) { minDist = dist; closest = { name: center.name_en?.trim() }; }
          });


          if (typeof internationalHubs !== 'undefined') {
            internationalHubs.forEach((hub) => {
              const x = ((hub.lon + 180) / 360) * mapWidth;
              const y = ((90 - hub.lat) / 180) * mapHeight;
              const dist = Math.sqrt((mappedClickX - x) ** 2 + (clickY - y) ** 2);
              if (dist <= minDist) { minDist = dist; closest = { name: hub.name }; }
            });
          }

          let clickedPath: any = null;
          if (minDist >= 60 && typeof drawnPathsRef !== 'undefined' && drawnPathsRef.current) {
            let minLineDist = 60;
            drawnPathsRef.current.forEach(line => {
              line.pts.forEach(pt => {
                const lx = pt.rtX * mapWidth;
                const ly = pt.rtY * mapHeight;
                const lDist = Math.sqrt((mappedClickX - lx) ** 2 + (clickY - ly) ** 2);
                if (lDist < minLineDist) {
                  minLineDist = lDist;
                  clickedPath = line;
                }
              });
            });
          }

          if (closest && minDist < 60) {
            const targetName = closest.name;
            setSelectedWp(prev => prev === targetName ? null : targetName);
            // onSelect(targetName); // Modal disabled for trade mode
          }
        }}
      />
    </div>
  );
}

