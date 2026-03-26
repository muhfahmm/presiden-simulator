"use client"

import { useEffect, useRef, useState } from "react";
import { countries as centersData } from "@/app/select-country/data/countries/_index";
import { allRelations } from "@/app/select-country/data/relations";

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
  "United States of America": "samoa amerika",
  "West Bank": "palestina",
  "Falkland Islands": "argentina",
  "Western Sahara": "maroko",
  "Somaliland": "somalia",
  "New Caledonia": "fiji",
  "Solomon Islands": "marshall"
};

// Load Relations from Central Database Index
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

export default function MapHubungan({ userCountry, targetCountry, onSelect, active = true, geoData }: MapHubunganProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isHovering, setIsHovering] = useState(false);
  const mouseDownPosRef = useRef<{ x: number; y: number } | null>(null);

  const mapWidth = 6000;
  const mapHeight = 2400;

  

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !geoData) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, mapWidth * 3, mapHeight);

    const offsets = [0, mapWidth, mapWidth * 2];
    offsets.forEach(offset => {
      ctx.save();
      ctx.translate(offset, 0);

      const bgGradient = ctx.createRadialGradient(mapWidth / 2, mapHeight / 2, 100, mapWidth / 2, mapHeight / 2, mapWidth / 1.5);
      bgGradient.addColorStop(0, "#121d31"); 
      bgGradient.addColorStop(1, "#070b13"); 
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, mapWidth, mapHeight);

      const project = (lon: number, lat: number) => {
        const x = ((lon + 180) / 360) * mapWidth;
        const y = ((90 - lat) / 180) * mapHeight;
        return { x, y };
      };

      // Draw Countries
      geoData.features.forEach((feature: any) => {
        const name = feature.properties.name;
        const isPlayer = name === userCountry;
        const isTarget = name === targetCountry;

        ctx.beginPath();

        const drawCoords = (coordinates: any) => {
          coordinates.forEach((polyline: any) => {
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
          feature.geometry.coordinates.forEach((polygon: any) => drawCoords(polygon));
        }

        ctx.closePath();

        // Hubungan Mode Style:
        const relation = getRelation(name, userCountry);
        let fillColor = "rgba(71, 85, 105, 0.3)";
        let strokeColor = "rgba(255, 255, 255, 0.2)";

        if (relation <= 30) fillColor = "rgba(239, 68, 68, 0.5)"; 
        else if (relation <= 70) fillColor = "rgba(234, 179, 8, 0.5)"; 
        else fillColor = "rgba(34, 197, 94, 0.5)"; 

        ctx.lineWidth = 1;
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Draw Country Markers 
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const labelGrid: { x: number, y: number }[] = [];
      const minLabelDist = 40; 

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

        // Glowing dot marker
        ctx.beginPath();
        if (isPlayer) {
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fillStyle = "#22d3ee"; 
          ctx.shadowColor = "#22d3ee";
          ctx.shadowBlur = 15;
        } else if (isTarget) {
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fillStyle = "#f59e0b"; 
          ctx.shadowColor = "#f59e0b";
          ctx.shadowBlur = 15;
        } else {
          const relation = getRelation(center.name_en, userCountry);
          ctx.arc(x, y, 4, 0, Math.PI * 2); 
          
          if (relation <= 30) {
            ctx.fillStyle = "#ef4444"; 
            ctx.shadowColor = "#ef4444";
          } else if (relation <= 70) {
            ctx.fillStyle = "#eab308"; 
            ctx.shadowColor = "#eab308";
          } else {
            ctx.fillStyle = "#22c55e"; 
            ctx.shadowColor = "#22c55e";
          }
          ctx.shadowBlur = 10;
        }
        ctx.fill();
        ctx.shadowBlur = 0; 


      });

      // Draw Maritime Labels ONCE at the end
      maritimeLabels.forEach(label => {
        const { x, y } = project(label.lon, label.lat);
        ctx.font = `italic ${label.size}px 'Inter', sans-serif`;
        ctx.fillStyle = label.color;
        if (x > 0 && x < mapWidth && y > 0 && y < mapHeight) {
          ctx.fillText(label.name, x, y);
        }
      });

      ctx.restore();
    });

  }, [geoData, userCountry, targetCountry, centersData]);

  const defaultCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='4' fill='none' stroke='%2322d3ee' stroke-width='1.5'/><circle cx='8' cy='8' r='1' fill='%2322d3ee'/></svg>") 8 8, auto`;
  const hoverCursor = "pointer";

  return (
    <canvas
      ref={canvasRef}
      width={mapWidth * 3}
      height={mapHeight}
      className="h-full w-auto max-w-none z-10"
      style={{ cursor: isHovering ? hoverCursor : defaultCursor, pointerEvents: active ? "auto" : "none" }}
      onMouseMove={(e) => {
        if (!active) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const clickX = ((e.clientX - rect.left) / rect.width) * (mapWidth * 3);
        const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;
        const mappedClickX = clickX % mapWidth;

        let foundHover = false;
        centersData.forEach((center: any) => {
          const x = ((center.lon + 180) / 360) * mapWidth;
          const y = ((90 - center.lat) / 180) * mapHeight;
          const dist = Math.sqrt((mappedClickX - x) ** 2 + (clickY - y) ** 2);
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
        const clickX = ((e.clientX - rect.left) / rect.width) * (mapWidth * 3);
        const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;
        const mappedClickX = clickX % mapWidth;

        let closest: any = null;
        let minDist = 100; 

        centersData.forEach((center: any) => {
          const x = ((center.lon + 180) / 360) * mapWidth;
          const y = ((90 - center.lat) / 180) * mapHeight;
          const dist = Math.sqrt((mappedClickX - x) ** 2 + (clickY - y) ** 2);
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
