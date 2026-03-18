"use client"

import { useEffect, useRef, useState } from "react";
import { countries as centersData } from "../select-country/data/countries";

interface GameMapCanvasProps {
  userCountry: string;
  targetCountry: string | null;
  onSelect: (name: string) => void;
}

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

export default function GameMapCanvas({ userCountry, targetCountry, onSelect }: GameMapCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [geoData, setGeoData] = useState<any>(null);
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
      .then(data => setGeoData(data))
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

        // Styling parameters - Differentiated from WorldMapCanvas
        if (isPlayer) {
          ctx.fillStyle = "rgba(34, 197, 94, 0.3)"; // Realistic Emerald/Green (Player)
          ctx.strokeStyle = "#4ade80";
          ctx.lineWidth = 2;
          ctx.shadowColor = "#4ade80";
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else if (isTarget) {
          ctx.fillStyle = "rgba(239, 68, 68, 0.3)"; // Realistic Red (Target)
          ctx.strokeStyle = "#f87171";
          ctx.lineWidth = 2;
          ctx.shadowColor = "#f87171";
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else {
          // Continent-based coloring
          ctx.fillStyle = getContinentColor(name, feature.id);
          ctx.strokeStyle = "rgba(245, 245, 220, 0.25)"; // Softer border
          ctx.lineWidth = 1;
          ctx.fill();
          ctx.stroke();
        }
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
        // 2. Text Labels with Decluttering
        if (isPlayer || isTarget) {
          // Name text removed per request
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
      });

      ctx.restore();
    });

  }, [geoData, userCountry, targetCountry, centersData]);

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
