"use client"

import { useEffect, useRef, useState } from "react";
import { countries as centersData } from "../../../select-country/data/countries";
import { customTradeRoutes, waypointCoords, hiddenWaypoints } from "../../../select-country/data/trades/tradeRoutes";

import { regionalRoutes } from "../../../select-country/data/trades/regional/AsianRoutes";
import { internationalHubs } from "../../../select-country/data/trades/international/hubs";
import { internationalRoutes } from "../../../select-country/data/trades/international/routes";

interface TradeMapCanvasProps {
  userCountry: string;
  targetCountry: string | null;
  onSelect: (name: string) => void;
  active?: boolean;
  geoData?: any;
}

// Pseudo-random relation hash
const getRelation = (name: string, userCountry: string) => {
  let str = name + userCountry;
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  if (name === userCountry) return 100;
  return Math.abs(hash % 100) + 1;
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
  // Line hitting cache ref
  const drawnPathsRef = useRef<{ pts: { rtX: number, rtY: number }[], origin: string, mitra: string, originId: string, partnerId: string }[]>([]);

  // Higher resolution for more detail and less "narrow" feel
  // 3:1 or 2.5:1 aspect ratio can feel more panoramic
  const mapWidth = 6000;
  const mapHeight = 2400;

  

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
        let isHighlighted = isPlayer || isTarget;

        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;

        // Non-trade modes removed

        if (isHighlighted) {
          if (isPlayer) {
            fillColor = "rgba(34, 197, 94, 0.3)";
            strokeColor = "#4ade80";
            ctx.lineWidth = 2;
            ctx.shadowColor = "#4ade80";
            ctx.shadowBlur = 15;
          } else if (isTarget) {
            fillColor = "rgba(239, 68, 68, 0.3)";
            strokeColor = "#f87171";
            ctx.lineWidth = 2;
            ctx.shadowColor = "#f87171";
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

      // 2.5 Static Nodes for Custom Ports (Loaded from waypointCoords/Country Files)
      Object.keys(waypointCoords).forEach(name => {
        if (hiddenWaypoints.includes(name)) return; // Skip steering nodes

        const coord = waypointCoords[name];
        const { x, y } = project(coord.lon, coord.lat);

        if (x > 0 && x < mapWidth && y > 0 && y < mapHeight) {
          ctx.beginPath();
          ctx.arc(x, y, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#ffffff";
          ctx.shadowBlur = 4;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      // 3. AI Trade Routes Render Pass (Purged)
      const uCenter = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
      if (uCenter) {
        const ux = ((uCenter!.lon + 180) / 360) * mapWidth;
        const uy = ((90 - uCenter!.lat) / 180) * mapHeight;

        ctx.lineWidth = 3;
        ctx.shadowBlur = 0; // Solid classic lines, no glow

        // Draw origin node (Red circle, white center)
        const drawNode = (nx: number, ny: number) => {
          ctx.beginPath();
          ctx.arc(nx, ny, 6, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff"; // White center
          ctx.fill();
          ctx.shadowColor = "#ffffff";
          ctx.shadowBlur = 8;
          ctx.strokeStyle = "transparent";
          ctx.stroke();
          ctx.shadowBlur = 0;
        };

        const activeAgreements = [...(uCenter.geopolitik?.perjanjian || [])];

        // Forcefully inject custom routes into the rendering pipeline so the user can immediately see their manually created paths!
        const uNameEn = uCenter.name_en?.trim();
        const uNameId = uCenter.name_id?.trim();
        const activeCustoms = customTradeRoutes[uNameEn] || customTradeRoutes[uNameId] || {};

        Object.keys(activeCustoms).forEach(dest => {
          const existingIdx = activeAgreements.findIndex(a => a.mitra?.trim() === dest.trim() || a.mitra?.trim() === centersData.find(c => c.name_en === dest)?.name_id?.trim());
          if (existingIdx !== -1) {
            activeAgreements[existingIdx] = { mitra: dest, jenis: "Perdagangan", status: "Aktif" };
          } else {
            activeAgreements.push({ mitra: dest, jenis: "Perdagangan", status: "Aktif" });
          }
        });

        // Deduplicate to prevent "double lines" if an agreement exists in both custom and original data
        const uniqueAgreements: any[] = [];
        const seenPartners = new Set<string>();

        activeAgreements.forEach(agr => {
          const pName = agr.mitra?.trim();
          if (pName && !seenPartners.has(pName) && (agr.jenis === "Perdagangan" || (agr as any).type === "Maritime") && agr.status === "Aktif") {
            seenPartners.add(pName);
            uniqueAgreements.push(agr);
          }
        });

        // 1. Collect all intended geographic segments from all active (unique) perjanjian
        const uniqueSegments = new Map<string, { start: any, end: any, isFinal: boolean, mitra: string, origin?: string, originId?: string, partnerId?: string }>();

        uniqueAgreements.forEach((agr: any) => {
          if (!uCenter) return;
          const pMatch = centersData.find(c => c.name_en?.trim() === agr.mitra?.trim() || c.name_id?.trim() === agr.mitra?.trim());
          const partnerEn = pMatch ? pMatch.name_en : agr.mitra;
          const partnerId = pMatch ? pMatch.name_id : agr.mitra;

          const uNameEn = uCenter.name_en?.trim();
          const uNameId = uCenter.name_id?.trim();
          const pNameEn = partnerEn?.trim();
          const pNameId = partnerId?.trim();

          let waypoints = customTradeRoutes[uNameEn]?.[pNameEn] ||
            customTradeRoutes[uNameId]?.[pNameEn] ||
            customTradeRoutes[uNameEn]?.[pNameId] ||
            customTradeRoutes[uNameId]?.[pNameId];

          if (false && waypoints && waypoints.length > 0) {
            const startStaticWp = waypointCoords[uNameEn] || waypointCoords[uNameId];
            let currentPos = {
              lon: startStaticWp?.lon ?? uCenter!.lon,
              lat: startStaticWp?.lat ?? uCenter!.lat
            };

            waypoints.forEach((wpName: string, wpIdx: number) => {
              const nextWpObj = centersData.find(c => c.name_en === wpName || c.name_id === wpName);
              const staticWp = waypointCoords[wpName];
              const nextWpLon = staticWp?.lon ?? nextWpObj?.lon;
              const nextWpLat = staticWp?.lat ?? nextWpObj?.lat;

              if (nextWpLon !== undefined && nextWpLat !== undefined) {
                const isFinal = wpIdx === waypoints.length - 1;

                const isAtlanticCrossing = (currentPos.lon < -55 && nextWpLon > -20) || (currentPos.lon > -20 && nextWpLon < -55);
                if (isAtlanticCrossing) {
                  const midAtlantic = { lon: -40.0, lat: 45.0 };
                  const key1 = `${currentPos.lon.toFixed(1)},${currentPos.lat.toFixed(1)}->-40.0,45.0`;
                  uniqueSegments.set(key1, { start: { lon: currentPos.lon, lat: currentPos.lat }, end: midAtlantic, isFinal: false, mitra: "Mid-Atlantic Trunk", origin: uNameEn });
                  const key2 = `-40.0,45.0->${nextWpLon.toFixed(1)},${nextWpLat.toFixed(1)}`;
                  uniqueSegments.set(key2, { start: midAtlantic, end: { lon: nextWpLon, lat: nextWpLat }, isFinal: isFinal, mitra: wpName, origin: uNameEn });
                  currentPos = { lon: nextWpLon, lat: nextWpLat };
                  return;
                }

                const isPanamaCrossing = ((currentPos.lon < -78.5 && nextWpLon > -76.5) || (currentPos.lon > -76.5 && nextWpLon < -78.5)) && currentPos.lat > 1.0 && nextWpLat > 1.0 && currentPos.lat < 15.0 && nextWpLat < 15.0 && wpName !== "Panama" && Math.abs(currentPos.lon - (-79.53)) > 0.5 && Math.abs(nextWpLon - (-79.53)) > 0.5;
                if (isPanamaCrossing) {
                  const panamaNode = { lon: -79.53, lat: 8.96 };
                  const key1 = `${currentPos.lon.toFixed(1)},${currentPos.lat.toFixed(1)}->-79.5,9.0`;
                  uniqueSegments.set(key1, { start: { lon: currentPos.lon, lat: currentPos.lat }, end: panamaNode, isFinal: false, mitra: "Panama Trunk", origin: uNameEn });
                  const key2 = `-79.5,9.0->${nextWpLon.toFixed(1)},${nextWpLat.toFixed(1)}`;
                  uniqueSegments.set(key2, { start: panamaNode, end: { lon: nextWpLon, lat: nextWpLat }, isFinal: isFinal, mitra: wpName, origin: uNameEn });
                  currentPos = { lon: nextWpLon, lat: nextWpLat };
                  return;
                }

                const key = `${currentPos.lon.toFixed(1)},${currentPos.lat.toFixed(1)}->${nextWpLon.toFixed(1)},${nextWpLat.toFixed(1)}`;
                if (!uniqueSegments.has(key) || isFinal) {
                  uniqueSegments.set(key, { start: { lon: currentPos.lon, lat: currentPos.lat }, end: { lon: nextWpLon, lat: nextWpLat }, isFinal, mitra: wpName, origin: uNameEn });
                }
                currentPos = { lon: nextWpLon, lat: nextWpLat };
              }
            });
          }
        });

        // 1.5 Global Custom Routes Segment Injector
        Object.keys(customTradeRoutes).forEach(originName => {
          const routesObj = customTradeRoutes[originName];
          if (!routesObj) return;

          Object.keys(routesObj).forEach(destName => {
            const waypoints = routesObj[destName];
            if (!waypoints || waypoints.length === 0) return;

            const startWpObj = centersData.find(c => c.name_en === originName || c.name_id === originName);
            const startStaticWp = waypointCoords[originName];
            const startLon = startStaticWp?.lon ?? startWpObj?.lon;
            const startLat = startStaticWp?.lat ?? startWpObj?.lat;

            if (startLon === undefined || startLat === undefined) return;

            let currentPos = { lon: startLon, lat: startLat };

            waypoints.forEach((wpName: string, wpIdx: number) => {
              const nextWpObj = centersData.find(c => c.name_en === wpName || c.name_id === wpName);
              const staticWp = waypointCoords[wpName];
              const nextWpLon = staticWp?.lon ?? nextWpObj?.lon;
              const nextWpLat = staticWp?.lat ?? nextWpObj?.lat;

              if (nextWpLon !== undefined && nextWpLat !== undefined) {
                const isFinal = wpIdx === waypoints.length - 1;

                const isAtlanticCrossing = (currentPos.lon < -55 && nextWpLon > -20) || (currentPos.lon > -20 && nextWpLon < -55);
                if (isAtlanticCrossing) {
                  const midAtlantic = { lon: -40.0, lat: 45.0 };
                  const key1 = `${currentPos.lon.toFixed(1)},${currentPos.lat.toFixed(1)}->-40.0,45.0`;
                  uniqueSegments.set(key1, { start: { lon: currentPos.lon, lat: currentPos.lat }, end: midAtlantic, isFinal: false, mitra: "Mid-Atlantic Trunk", origin: originName });
                  const key2 = `-40.0,45.0->${nextWpLon.toFixed(1)},${nextWpLat.toFixed(1)}`;
                  uniqueSegments.set(key2, { start: midAtlantic, end: { lon: nextWpLon, lat: nextWpLat }, isFinal: isFinal, mitra: wpName, origin: originName });
                  currentPos = { lon: nextWpLon, lat: nextWpLat };
                  return;
                }

                const isPanamaCrossing = ((currentPos.lon < -78.5 && nextWpLon > -76.5) || (currentPos.lon > -76.5 && nextWpLon < -78.5)) && currentPos.lat > 1.0 && nextWpLat > 1.0 && currentPos.lat < 15.0 && nextWpLat < 15.0 && wpName !== "Panama" && Math.abs(currentPos.lon - (-79.53)) > 0.5 && Math.abs(nextWpLon - (-79.53)) > 0.5;
                if (isPanamaCrossing) {
                  const panamaNode = { lon: -79.53, lat: 8.96 };
                  const key1 = `${currentPos.lon.toFixed(1)},${currentPos.lat.toFixed(1)}->-79.5,9.0`;
                  uniqueSegments.set(key1, { start: { lon: currentPos.lon, lat: currentPos.lat }, end: panamaNode, isFinal: false, mitra: "Panama Trunk", origin: originName });
                  const key2 = `-79.5,9.0->${nextWpLon.toFixed(1)},${nextWpLat.toFixed(1)}`;
                  uniqueSegments.set(key2, { start: panamaNode, end: { lon: nextWpLon, lat: nextWpLat }, isFinal: isFinal, mitra: wpName, origin: originName });
                  currentPos = { lon: nextWpLon, lat: nextWpLat };
                  return;
                }

                const key = `${currentPos.lon.toFixed(1)},${currentPos.lat.toFixed(1)}->${nextWpLon.toFixed(1)},${nextWpLat.toFixed(1)}`;
                if (!uniqueSegments.has(key) || isFinal) {
                  uniqueSegments.set(key, { start: { lon: currentPos.lon, lat: currentPos.lat }, end: { lon: nextWpLon, lat: nextWpLat }, isFinal, mitra: wpName, origin: originName });
                }
                currentPos = { lon: nextWpLon, lat: nextWpLat };
              }
            });
          });
        });

        // 2. Render each unique segment exactly once
        uniqueSegments.forEach((seg) => {
          let path: any[] | null = null;
          try {
            // path = aiPathfinder.findPath(seg.start.lon, seg.start.lat, seg.end.lon, seg.end.lat);
          } catch (err) {
            console.warn(`Pathfinding error for ${seg.mitra}:`, err);
          }
          let rawNormalized: { rtX: number, rtY: number }[] = [];

          // Standalone Static Coordinate Falling back index-matched setup flawless.
          rawNormalized = [
            { rtX: (seg.start.lon + 180) / 360, rtY: (90 - seg.start.lat) / 180 },
            { rtX: (seg.end.lon + 180) / 360, rtY: (90 - seg.end.lat) / 180 }
          ];

          if (rawNormalized.length > 0) {

            // Smooth algorithm to combine staircase serrations into continuous curves
            const smoothPath = (pts: any[]) => {
              let smoothed = [...pts];
              const iterations = 5;
              for (let k = 0; k < iterations; k++) {
                let nextSmoothed = [];
                for (let i = 0; i < smoothed.length; i++) {
                  if (i === 0 || i === smoothed.length - 1) {
                    nextSmoothed.push(smoothed[i]);
                  } else {
                    const prev = smoothed[i - 1];
                    const curr = smoothed[i];
                    const next = smoothed[i + 1];
                    nextSmoothed.push({
                      rtX: prev.rtX * 0.25 + curr.rtX * 0.5 + next.rtX * 0.25,
                      rtY: prev.rtY * 0.25 + curr.rtY * 0.5 + next.rtY * 0.25
                    });
                  }
                }
                smoothed = nextSmoothed;
              }
              return smoothed;
            };

            const normalized = (seg.mitra === "Panama Trunk" || seg.mitra === "Mid-Atlantic Trunk") ? rawNormalized : smoothPath(rawNormalized);

            // Style
            const isSelected = selectedWp && (
              seg.origin?.trim().toLowerCase() === selectedWp.trim().toLowerCase() ||
              seg.mitra?.trim().toLowerCase() === selectedWp.trim().toLowerCase() ||
              (seg.originId && seg.originId.trim().toLowerCase() === selectedWp.trim().toLowerCase()) ||
              (seg.partnerId && seg.partnerId.trim().toLowerCase() === selectedWp.trim().toLowerCase())
            );

            if (selectedWp && Math.random() < 0.05) {
              console.log("[Draw Debug] selectedWp:", selectedWp, "seg.origin:", seg.origin, "seg.mitra:", seg.mitra, "originId:", seg.originId, "partnerId:", seg.partnerId, "isSelected:", isSelected);
            }
            ctx.lineWidth = isSelected ? 4.5 : 3.5;
            ctx.strokeStyle = selectedWp ? (isSelected ? "#00e5ff" : "rgba(239, 68, 68, 0.25)") : "#ef4444";

            // RED!
            ctx.beginPath();
            const sx = ((seg.start.lon + 180) / 360) * mapWidth;
            const sy = ((90 - seg.start.lat) / 180) * mapHeight;
            ctx.moveTo(sx, sy);

            drawnPathsRef.current.push({ pts: normalized, origin: seg.origin || "", mitra: seg.mitra || "", originId: seg.originId || "", partnerId: seg.partnerId || "" });
            normalized.forEach((p, idx) => {
              let nextX = p.rtX * mapWidth;
              let nextY = p.rtY * mapHeight;
              const prevMatch = idx === 0 ? { rtX: sx / mapWidth, rtY: sy / mapHeight } : normalized[idx - 1];
              if (Math.abs(p.rtX - prevMatch.rtX) > 0.5) ctx.moveTo(nextX, nextY);
              else ctx.lineTo(nextX, nextY);
            });
            ctx.stroke();
            // Reset shadow to avoid bleed to next segments
            ctx.shadowColor = "transparent";
            ctx.shadowBlur = 0;

            // Nodes
            const destP = normalized[normalized.length - 1];
            const nodeX = destP.rtX * mapWidth;
            const nodeY = destP.rtY * mapHeight;

            // Override logic for specific country sizes
            const isSmallForced = ["Bangladesh", "Filipina", "Sri Lanka", "Myanmar", "India", "Pakistan", "Iran", "Oman", "United Arab Emirates", "Bahrain", "Qatar", "Kuwait", "Yemen", "Saudi Arabia"].includes(seg.mitra);
            const isLargeForced = ["Malaysia"].includes(seg.mitra);

            if ((seg.isFinal || isLargeForced) && !isSmallForced) {
              drawNode(nodeX, nodeY);

              if (seg.isFinal) {
                // Final land-bridge
                const pUX = ((seg.end.lon + 180) / 360) * mapWidth;
                const pUY = ((90 - seg.end.lat) / 180) * mapHeight;
                ctx.lineWidth = 1.5;
                ctx.strokeStyle = "rgba(220, 38, 38, 0.4)"; // Red shadow for end node connection
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.moveTo(nodeX, nodeY);
                ctx.lineTo(pUX, pUY);
                ctx.stroke();
                ctx.setLineDash([]);
              }
            } else if (!hiddenWaypoints.includes(seg.mitra)) {
              ctx.beginPath();
              ctx.arc(nodeX, nodeY, 3.2, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
              ctx.fill();
              ctx.strokeStyle = "#ef4444"; // RED border
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });

        // Draw user country node on top
        drawNode(ux, uy);
      } // 👈 Close uCenter

      // === DRAW REGIONAL ROUTES (Loaded from regionalRoutes.ts) ===
      if (typeof regionalRoutes !== 'undefined') {
        Object.keys(regionalRoutes).forEach(origin => {
          const destObj = regionalRoutes[origin];
          Object.keys(destObj).forEach(dest => {
            const route = destObj[dest];

            const isSelected = selectedWp && (
              selectedWp === `${origin}-${dest}` ||
              selectedWp === `${dest}-${origin}` ||
              origin.trim().toLowerCase().includes(selectedWp.trim().toLowerCase()) ||
              selectedWp.trim().toLowerCase().includes(origin.trim().toLowerCase()) ||
              dest.trim().toLowerCase().includes(selectedWp.trim().toLowerCase()) ||
              selectedWp.trim().toLowerCase().includes(dest.trim().toLowerCase()) ||
              (selectedHubObj && route.coords.some((pt: any) => Math.abs(pt.lon - selectedHubObj.lon) < 0.05 && Math.abs(pt.lat - selectedHubObj.lat) < 0.05))
            );

            ctx.lineWidth = isSelected ? 3.5 : 1.8;
            // Ketika diklik rutenya maka akan berubah warna (Biru)
            ctx.strokeStyle = isSelected ? "#0066ff" : "rgba(148, 163, 184, 0.4)";
            ctx.shadowColor = isSelected ? "#0066ff" : "transparent";
            ctx.shadowBlur = isSelected ? 10 : 0;

            // Cache path for click hit-testing
            const normalizedPts = route.coords.map((pt: any) => ({
              rtX: (pt.lon + 180) / 360,
              rtY: (90 - pt.lat) / 180
            }));
            if (typeof drawnPathsRef !== 'undefined' && drawnPathsRef.current) {
              drawnPathsRef.current.push({
                pts: normalizedPts,
                origin: origin,
                mitra: dest,
                originId: "",
                partnerId: ""
              });
            }

            ctx.beginPath();
            route.coords.forEach((pt: any, idx: number) => {
              const x = ((pt.lon + 180) / 360) * mapWidth;
              const y = ((90 - pt.lat) / 180) * mapHeight;
              const prevPt = idx > 0 ? route.coords[idx - 1] : null;
              const isSeamCrossing = prevPt && Math.abs(pt.lon - prevPt.lon) > 180;

              if (idx === 0 || isSeamCrossing) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            });
            ctx.stroke();

            // Menandakan rutenya dari mana berjalan ke arah mana (Arrow)
            if (isSelected) {
              for (let i = 0; i < route.coords.length - 1; i += 4) {
                const curr = route.coords[i];
                const next = route.coords[i + 1];
                const cX = ((curr.lon + 180) / 360) * mapWidth;
                const cY = ((90 - curr.lat) / 180) * mapHeight;
                const nX = ((next.lon + 180) / 360) * mapWidth;
                const nY = ((90 - next.lat) / 180) * mapHeight;

                const midX = (cX + nX) / 2;
                const midY = (cY + nY) / 2;
                const angle = Math.atan2(nY - cY, nX - cX);

                ctx.save();
                ctx.translate(midX, midY);
                ctx.rotate(angle);
                ctx.beginPath();
                ctx.moveTo(-6, -4);
                ctx.lineTo(4, 0);
                ctx.lineTo(-6, 4);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
                ctx.restore();
              }
            }
            ctx.shadowBlur = 0; // reset
          });
        });
      }

      const drawnSegmentsActive = new Set<string>();
      const drawnSegmentsDormant = new Set<string>();
      const drawnArrows = new Set<string>();

      // === DRAW INTERNATIONAL ROUTES (Loaded from international/routes.ts) ===
      if (typeof internationalRoutes !== 'undefined') {
        Object.keys(internationalRoutes).forEach(origin => {
          const destObj = internationalRoutes[origin];
          Object.keys(destObj).forEach(dest => {
            const route = destObj[dest];
            const isSelected = selectedWp && (
              selectedWp === `${origin}-${dest}` ||
              selectedWp === `${dest}-${origin}` ||
              origin.trim().toLowerCase().includes(selectedWp.trim().toLowerCase()) ||
              selectedWp.trim().toLowerCase().includes(origin.trim().toLowerCase()) ||
              dest.trim().toLowerCase().includes(selectedWp.trim().toLowerCase()) ||
              selectedWp.trim().toLowerCase().includes(dest.trim().toLowerCase()) ||
              (selectedHubObj && route.coords.some((pt: any) => Math.abs(pt.lon - selectedHubObj.lon) < 0.05 && Math.abs(pt.lat - selectedHubObj.lat) < 0.05))
            );

            ctx.lineWidth = isSelected ? 4.0 : 2.0;
            ctx.strokeStyle = isSelected ? "#0066ff" : "rgba(245, 158, 11, 0.4)"; // Amber dormant
            ctx.shadowColor = isSelected ? "#0066ff" : "transparent";
            ctx.shadowBlur = isSelected ? 12 : 0;

            const targetSet = isSelected ? drawnSegmentsActive : drawnSegmentsDormant;

            const normalizedPts = route.coords.map((pt: any) => ({
              rtX: (pt.lon + 180) / 360,
              rtY: (90 - pt.lat) / 180
            }));
            if (typeof drawnPathsRef !== 'undefined' && drawnPathsRef.current) {
              drawnPathsRef.current.push({
                pts: normalizedPts,
                origin: origin,
                mitra: dest,
                originId: "",
                partnerId: ""
              });
            }

            ctx.beginPath();
            route.coords.forEach((pt: any, idx: number) => {
              const x = ((pt.lon + 180) / 360) * mapWidth;
              const y = ((90 - pt.lat) / 180) * mapHeight;
              const prevPt = idx > 0 ? route.coords[idx - 1] : null;
              const isSeamCrossing = prevPt && Math.abs(pt.lon - prevPt.lon) > 180;

              if (idx > 0 && !isSeamCrossing && prevPt) {
                const prevX = ((prevPt.lon + 180) / 360) * mapWidth;
                const prevY = ((90 - prevPt.lat) / 180) * mapHeight;
                const key1 = `${prevPt.lon.toFixed(2)},${prevPt.lat.toFixed(2)}-${pt.lon.toFixed(2)},${pt.lat.toFixed(2)}`;
                const key2 = `${pt.lon.toFixed(2)},${pt.lat.toFixed(2)}-${prevPt.lon.toFixed(2)},${prevPt.lat.toFixed(2)}`;

                if (!targetSet.has(key1) && !targetSet.has(key2)) {
                  targetSet.add(key1);
                  ctx.moveTo(prevX, prevY);
                  ctx.lineTo(x, y);
                }
              }
            });
            ctx.stroke();

            if (isSelected) {
              for (let i = 0; i < route.coords.length - 1; i += 4) {
                const curr = route.coords[i];
                const key = `${curr.lon.toFixed(2)},${curr.lat.toFixed(2)}`;
                if (drawnArrows.has(key)) continue;
                drawnArrows.add(key);

                const next = route.coords[i + 1];
                const cX = ((curr.lon + 180) / 360) * mapWidth;
                const cY = ((90 - curr.lat) / 180) * mapHeight;
                const nX = ((next.lon + 180) / 360) * mapWidth;
                const nY = ((90 - next.lat) / 180) * mapHeight;
                const midX = (cX + nX) / 2;
                const midY = (cY + nY) / 2;
                const angle = Math.atan2(nY - cY, nX - cX);

                ctx.save();
                ctx.translate(midX, midY);
                ctx.rotate(angle);
                ctx.beginPath();
                ctx.moveTo(-6, -4);
                ctx.lineTo(4, 0);
                ctx.lineTo(-6, 4);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
                ctx.restore();
              }
            }
            ctx.shadowBlur = 0;
          });
        });
      }

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



      ctx.restore();
      ctx.restore();
    });

  }, [geoData, userCountry, targetCountry, centersData, selectedWp]);

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

          if (typeof waypointCoords !== 'undefined') {
            Object.keys(waypointCoords).forEach((name) => {
              const coord = waypointCoords[name];
              const x = ((coord.lon + 180) / 360) * mapWidth;
              const y = ((90 - coord.lat) / 180) * mapHeight;
              const dist = Math.sqrt((mappedClickX - x) ** 2 + (clickY - y) ** 2);
              if (dist < 60) foundHover = true;
            });
          }

          setIsHovering(foundHover);
          if (Math.random() < 0.05) console.log("Hover debugging:", foundHover, "Min dist to", closestName, "is", debugMinDist);
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

          if (typeof waypointCoords !== 'undefined') {
            Object.keys(waypointCoords).forEach((name) => {
              if (typeof hiddenWaypoints !== 'undefined' && hiddenWaypoints.includes(name)) return;
              const coord = waypointCoords[name];
              const x = ((coord.lon + 180) / 360) * mapWidth;
              const y = ((90 - coord.lat) / 180) * mapHeight;
              const dist = Math.sqrt((mappedClickX - x) ** 2 + (clickY - y) ** 2);
              if (dist < minDist) { minDist = dist; closest = { name: name }; }
            });
          }

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
