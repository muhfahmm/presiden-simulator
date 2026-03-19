"use client"

import { useEffect, useRef, useState } from "react";
import { countries as centersData } from "../select-country/data/countries";
import { customTradeRoutes, waypointCoords } from "./tradeRoutes";
import { AITradePathfinder } from "./components/ai/AITradePathfinder";

interface GameMapCanvasProps {
  userCountry: string;
  targetCountry: string | null;
  onSelect: (name: string) => void;
  mapMode?: "default" | "sda" | "hubungan" | "trade";
}

// Pseudo-random relation hash
const getRelation = (name: string, userCountry: string) => {
  let str = name + userCountry;
  let hash = 0;
  for (let i=0; i<str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
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

export default function GameMapCanvas({ userCountry, targetCountry, onSelect, mapMode = "default" }: GameMapCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [geoData, setGeoData] = useState<any>(null);
  const [aiPathfinder, setAiPathfinder] = useState<AITradePathfinder | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouseDownPosRef = useRef<{ x: number; y: number } | null>(null);

  // Higher resolution for more detail and less "narrow" feel
  // 3:1 or 2.5:1 aspect ratio can feel more panoramic
  const mapWidth = 6000;
  const mapHeight = 2400;

  useEffect(() => {
    // Load GeoJSON securely
    fetch("/world.geojson")
      .then(res => res.json())
      .then(data => {
         setGeoData(data);
         
         const meshW = 720;
         const meshH = 360;
         const canvas = document.createElement("canvas");
         canvas.width = meshW;
         canvas.height = meshH;
         const oCtx = canvas.getContext("2d", { willReadFrequently: true });
         
         if (oCtx && data.features) {
             oCtx.fillStyle = "#000000";
             oCtx.fillRect(0, 0, meshW, meshH);
             oCtx.fillStyle = "#ffffff";
             
             data.features.forEach((feat: any) => {
                 if (!feat.geometry) return;
                 const type = feat.geometry.type;
                 const coordinates = feat.geometry.coordinates;

                 const drawPoly = (ring: any[]) => {
                     oCtx.beginPath();
                     ring.forEach((coord: number[], index: number) => {
                         const x = ((coord[0] + 180) / 360) * meshW;
                         const y = ((90 - coord[1]) / 180) * meshH;
                         if (index === 0) oCtx.moveTo(x, y);
                         else oCtx.lineTo(x, y);
                     });
                     oCtx.closePath();
                     oCtx.fill();
                 };

                 if (type === "Polygon") {
                     coordinates.forEach(drawPoly);
                 } else if (type === "MultiPolygon") {
                     coordinates.forEach((poly: any[]) => poly.forEach(drawPoly));
                 }
             });

             const pf = new AITradePathfinder(meshW, meshH);
             pf.buildNavMeshFromCanvas(oCtx);
             setAiPathfinder(pf);
         }
      })
      .catch(err => console.error("Failed to load map data", err));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !geoData) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear and Fill background style - Richer "Command Center" theme
    ctx.clearRect(0, 0, mapWidth * 3, mapHeight);

    const offsets = [0, mapWidth, mapWidth * 2];
    offsets.forEach(offset => {
      ctx.save();
      ctx.translate(offset, 0);

      // Gradient Background
      const bgGradient = ctx.createRadialGradient(mapWidth/2, mapHeight/2, 100, mapWidth/2, mapHeight/2, mapWidth/1.5);
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

        if (mapMode === "hubungan") {
          const relation = getRelation(name, userCountry);
          if (relation <= 30) fillColor = "rgba(239, 68, 68, 0.5)"; // Red
          else if (relation <= 70) fillColor = "rgba(234, 179, 8, 0.5)"; // Yellow
          else fillColor = "rgba(34, 197, 94, 0.5)"; // Green
          strokeColor = "rgba(255, 255, 255, 0.2)";
          if (!isPlayer && !isTarget) isHighlighted = false;
        } else if (mapMode === "sda") {
          // SDA: Just display dark continents to make the numbers pop
          fillColor = "rgba(71, 85, 105, 0.4)"; 
          strokeColor = "rgba(255, 255, 255, 0.1)";
          if (!isPlayer && !isTarget) isHighlighted = false;
        }

        if (isHighlighted && mapMode !== "hubungan" && mapMode !== "sda") {
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
      const labelGrid: {x: number, y: number}[] = [];
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
        if (isPlayer) {
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fillStyle = "#22d3ee"; // Cyan
          ctx.shadowColor = "#22d3ee";
          ctx.shadowBlur = 15;
        } else if (isTarget) {
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fillStyle = "#f59e0b"; // Amber
          ctx.shadowColor = "#f59e0b";
          ctx.shadowBlur = 15;
        } else {
          ctx.arc(x, y, 2.5, 0, Math.PI * 2); // Smaller dots for non-selected
          ctx.fillStyle = "rgba(148, 163, 184, 0.5)"; // Slate 400
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
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
        if (mapMode === "hubungan") {
           const relation = getRelation(center.name_en || center.id || "", userCountry);
           const isTooCrowded = labelGrid.some(pos => 
             Math.abs(pos.x - x) < minLabelDist/1.5 && Math.abs(pos.y - y) < minLabelDist/1.5
           );
           if (!isTooCrowded || isPlayer || isTarget) {
             ctx.font = "900 16px 'Inter', sans-serif";
             if (relation <= 30) ctx.fillStyle = "#fca5a5"; 
             else if (relation <= 70) ctx.fillStyle = "#fde047"; 
             else ctx.fillStyle = "#86efac"; 
             
             ctx.shadowColor = "rgba(0,0,0,0.9)"; 
             ctx.shadowBlur = 6;
             ctx.fillText(relation.toString(), x, y - 20);
             ctx.shadowBlur = 0;
             labelGrid.push({x, y});
           }
        } else if (mapMode === "sda") {
           const sda = center.sector_extraction?.strength || 0;
           const isTooCrowded = labelGrid.some(pos => 
             Math.abs(pos.x - x) < minLabelDist/1.5 && Math.abs(pos.y - y) < minLabelDist/1.5
           );
           if (!isTooCrowded || isPlayer || isTarget) {
             ctx.font = "900 16px 'Inter', sans-serif";
             ctx.fillStyle = "#38bdf8"; // Light Blue for SDA 
             
             ctx.shadowColor = "rgba(0,0,0,0.9)"; 
             ctx.shadowBlur = 6;
             ctx.fillText(Math.round(sda).toString(), x, y - 20);
             ctx.shadowBlur = 0;
             labelGrid.push({x, y});
           }
        } else {
          if (isPlayer || isTarget) {
            ctx.font = "48px sans-serif";
            ctx.shadowColor = "rgba(0,0,0,0.8)"; ctx.shadowBlur = 10;
            ctx.fillText(center.flag, x, y - 90);
            ctx.shadowBlur = 0;
          } else {
            // Only draw background labels if they don't crowd others
            const isTooCrowded = labelGrid.some(pos => 
              Math.abs(pos.x - x) < minLabelDist && Math.abs(pos.y - y) < minLabelDist/2
            );

            if (!isTooCrowded) {
              ctx.font = "14px 'Inter', sans-serif";
              ctx.fillStyle = "rgba(148, 163, 184, 0.35)";
              ctx.fillText(center.flag, x, y - 18);
              labelGrid.push({x, y});
            }
          }
        }
      });

      // 3. AI Trade Routes Render Pass
      if (mapMode === "trade" && userCountry && aiPathfinder) {
        const uCenter = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
        if (uCenter) {
          const ux = ((uCenter.lon + 180) / 360) * mapWidth;
          const uy = ((90 - uCenter.lat) / 180) * mapHeight;
          
          ctx.lineWidth = 3;
          ctx.shadowBlur = 0; // Solid classic lines, no glow

          // Draw origin node (Red circle, white center)
          const drawNode = (nx: number, ny: number) => {
            ctx.beginPath();
            ctx.arc(nx, ny, 6, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff"; // White center
            ctx.fill();
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = "#cc0000"; // Red border
            ctx.stroke();
          };

          const activeAgreements = [...(uCenter.geopolitics?.agreements || [])];
          
          // Forcefully inject custom routes into the rendering pipeline so the user can immediately see their manually created paths!
          const activeCustoms = customTradeRoutes[uCenter.name_en] || customTradeRoutes[uCenter.name_id] || {};
          Object.keys(activeCustoms).forEach(dest => {
              if (!activeAgreements.some(a => a.partner === dest || a.partner === centersData.find(c => c.name_en === dest)?.name_id)) {
                  activeAgreements.push({ partner: dest, type: "Trade", status: "Active" });
              }
          });

          activeAgreements.forEach((agr: any) => {
             if (agr.type === "Trade" && agr.status === "Active") {
               const pMatch = centersData.find(c => c.name_en === agr.partner || c.name_id === agr.partner);
               const partnerEn = pMatch ? pMatch.name_en : agr.partner;
               const partnerId = pMatch ? pMatch.name_id : agr.partner;

               let waypoints = customTradeRoutes[uCenter.name_en]?.[partnerEn] || 
                               customTradeRoutes[uCenter.name_id]?.[partnerEn] ||
                               customTradeRoutes[uCenter.name_en]?.[partnerId] ||
                               customTradeRoutes[uCenter.name_id]?.[partnerId];
               
               if (!waypoints) {
                  if (pMatch) waypoints = [pMatch.name_en];
               }

               if (waypoints && waypoints.length > 0) {
                  let currentStart: { lon: number, lat: number } = uCenter;
                  
                  waypoints.forEach((wpName, wpIdx) => {
                      const nextWpObj = centersData.find(c => c.name_en === wpName || c.name_id === wpName);
                      const staticWp = waypointCoords[wpName];
                      
                      const nextWpLon = nextWpObj?.lon ?? staticWp?.lon;
                      const nextWpLat = nextWpObj?.lat ?? staticWp?.lat;
                      
                      if (nextWpLon === undefined || nextWpLat === undefined) return;
                      
                      // Run AI Pathfinding over maritime mesh
                      const path = aiPathfinder.findPath(currentStart.lon, currentStart.lat, nextWpLon, nextWpLat);
                      
                      if (path && path.length > 0) {
                         const normalized = aiPathfinder.normalizeGridPath(path);
                         
                         if (wpIdx === 0) {
                             // Draw land-bridge indicator ONLY for the absolute beginning of the custom sequence
                             const sux = ((currentStart.lon + 180) / 360) * mapWidth;
                             const suy = ((90 - currentStart.lat) / 180) * mapHeight;
                             ctx.lineWidth = 1.5;
                             ctx.strokeStyle = "rgba(100, 116, 139, 0.6)";
                             ctx.setLineDash([4, 4]);
                             ctx.beginPath();
                             ctx.moveTo(sux, suy);
                             ctx.lineTo(normalized[0].rtX * mapWidth, normalized[0].rtY * mapHeight);
                             ctx.stroke();
                             ctx.setLineDash([]);
                         }

                         // Draw classic Dark Blue maritime solid line avoiding landmasses
                         ctx.lineWidth = 3.5;
                         ctx.strokeStyle = "#000099";
                         
                         ctx.beginPath();
                         normalized.forEach((p, idx) => {
                            let nextX = p.rtX * mapWidth;
                            let nextY = p.rtY * mapHeight;
                            
                            if (idx === 0) ctx.moveTo(nextX, nextY);
                            else {
                               const prev = normalized[idx - 1];
                               const dist = Math.abs(p.rtX - prev.rtX);
                               if (dist > 0.5) ctx.moveTo(nextX, nextY); // Lift pen across timezone jump
                               else ctx.lineTo(nextX, nextY);
                            }
                         });
                         ctx.stroke();
                         
                         // Draw intermediate/destination port node
                         const destP = normalized[normalized.length - 1];
                         drawNode(destP.rtX * mapWidth, destP.rtY * mapHeight);
                         
                         if (wpIdx === waypoints.length - 1) {
                             // Draw land-bridge indicator to inland capital target for FINAL destination
                             const pUX = ((nextWpLon + 180) / 360) * mapWidth;
                             const pUY = ((90 - nextWpLat) / 180) * mapHeight;
                             ctx.lineWidth = 1.5;
                             ctx.strokeStyle = "rgba(100, 116, 139, 0.6)";
                             ctx.setLineDash([4, 4]);
                             ctx.beginPath();
                             ctx.moveTo(destP.rtX * mapWidth, destP.rtY * mapHeight);
                             ctx.lineTo(pUX, pUY);
                             ctx.stroke();
                             ctx.setLineDash([]);
                         }

                      } else {
                         // Fallback to simple bezier if AI resolution gets trapped
                         const cx = ((currentStart.lon + 180) / 360) * mapWidth;
                         const cy = ((90 - currentStart.lat) / 180) * mapHeight;
                         const px = ((nextWpLon + 180) / 360) * mapWidth;
                         const py = ((90 - nextWpLat) / 180) * mapHeight;
                         if (Math.abs(cx - px) <= mapWidth / 2) { 
                             ctx.lineWidth = 3.5;
                             ctx.strokeStyle = "#000099"; 
                             ctx.beginPath();
                             ctx.moveTo(cx, cy);
                             const midX = (cx + px) / 2;
                             const dist = Math.sqrt((cx-px)**2 + (cy-py)**2);
                             const midY = (cy + py) / 2 - Math.min(dist * 0.15, 250); 
                             ctx.quadraticCurveTo(midX, midY, px, py);
                             ctx.stroke();
                             drawNode(px, py);
                         }
                      }
                      
                      currentStart = { lon: nextWpLon, lat: nextWpLat }; // Thread forward to the next waypoint
                  });
               }
             }
          });
          
          // Draw user country node on top
          drawNode(ux, uy);
        }
      }

      ctx.restore();
    });

  }, [geoData, userCountry, targetCountry, centersData, mapMode, aiPathfinder]);

    // Define Custom Cursors
    const defaultCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='4' fill='none' stroke='%2322d3ee' stroke-width='1.5'/><circle cx='8' cy='8' r='1' fill='%2322d3ee'/></svg>") 8 8, auto`;
    const hoverCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><circle cx='12' cy='12' r='8' fill='rgba(34, 211, 238, 0.2)' stroke='%2322d3ee' stroke-width='2'/><circle cx='12' cy='12' r='2' fill='%2322d3ee'/></svg>") 12 12, pointer`;

  return (
    <canvas 
      ref={canvasRef} 
      width={mapWidth * 3} 
      height={mapHeight} 
      className="h-full w-auto max-w-none z-10"
      style={{ cursor: isHovering ? hoverCursor : defaultCursor }}
      onMouseMove={(e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const clickX = ((e.clientX - rect.left) / rect.width) * (mapWidth * 3);
        const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;
        const mappedClickX = clickX % mapWidth; // Map to a single map segment

        let foundHover = false;
        centersData.forEach((center: any) => {
          const x = ((center.lon + 180) / 360) * mapWidth;
          const y = ((90 - center.lat) / 180) * mapHeight;
          const dist = Math.sqrt((mappedClickX - x)**2 + (clickY - y)**2);
          if (dist < 40) { // Slightly larger threshold for high-res map
            foundHover = true;
          }
        });
        setIsHovering(foundHover);
      }}
      onMouseDown={(e) => {
        mouseDownPosRef.current = { x: e.clientX, y: e.clientY };
      }}
      onClick={(e) => {
        const startPos = mouseDownPosRef.current;
        if (startPos) {
          const dist = Math.hypot(e.clientX - startPos.x, e.clientY - startPos.y);
          if (dist > 5) return; // Ignore clicks that are actually drags/pans
        }

        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const clickX = ((e.clientX - rect.left) / rect.width) * (mapWidth * 3);
        const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;
        const mappedClickX = clickX % mapWidth;

        let closest: any = null;
        let minDist = 100; // Larger radius for high-res map

        centersData.forEach((center: any) => {
          const x = ((center.lon + 180) / 360) * mapWidth;
          const y = ((90 - center.lat) / 180) * mapHeight;
          const dist = Math.sqrt((mappedClickX - x)**2 + (clickY - y)**2);
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
  );
}
