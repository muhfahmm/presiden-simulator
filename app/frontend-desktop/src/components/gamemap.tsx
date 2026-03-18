"use client"

import { useEffect, useRef, useState } from "react";

interface GameMapCanvasProps {
  selectedCountry: string;
  onSelect: (name: string) => void;
}

export default function GameMapCanvas({ selectedCountry, onSelect }: GameMapCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [geoData, setGeoData] = useState<any>(null);
  const [centersData, setCentersData] = useState<any[]>([]);
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

    // Load Centers data
    fetch("/country_centers.json")
      .then(res => res.json())
      .then(data => setCentersData(data))
      .catch(err => console.error("Failed to load center data", err));
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
      bgGradient.addColorStop(0, "#09090b"); // Zinc 950
      bgGradient.addColorStop(1, "#020617"); // Slate 950 dark
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, mapWidth, mapHeight);

      // Drawing bounds: Equirectangular Projection Math
      const project = (lon: number, lat: number) => {
        // Slightly adjust coordinates to center things better for panoramic view
        const x = ((lon + 180) / 360) * mapWidth;
        const y = ((90 - lat) / 180) * mapHeight;
        return { x, y };
      };

      // Draw high-tech grid (more frequent and subtle)
      ctx.strokeStyle = "rgba(56, 189, 248, 0.03)"; // Sky 400 very faint
      ctx.lineWidth = 1;
      for (let i = 0; i < mapWidth; i += 80) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, mapHeight); ctx.stroke();
      }
      for (let j = 0; j < mapHeight; j += 80) {
        ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(mapWidth, j); ctx.stroke();
      }

      // Draw Countries
      geoData.features.forEach((feature: any) => {
        const name = feature.properties.name;
        const isActive = name === selectedCountry;

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
        if (isActive) {
          ctx.fillStyle = "rgba(34, 211, 238, 0.15)"; // Cyan 400 accent
          ctx.strokeStyle = "#22d3ee";
          ctx.lineWidth = 2;
          ctx.shadowColor = "#22d3ee";
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0; // reset
        } else {
          // Deep blue-ish zinc for unselected
          ctx.fillStyle = "rgba(15, 23, 42, 0.4)"; 
          ctx.strokeStyle = "rgba(71, 85, 105, 0.3)";
          ctx.lineWidth = 1;
          ctx.fill();
          ctx.stroke();
        }
      });

      // Draw decorative "Radar Pulse" or "Data Streams"
      const time = Date.now() * 0.001;
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 0.5;
      centersData.filter((_, i) => i % 10 === 0).forEach((center, i) => {
          const x = ((center.lon + 180) / 360) * mapWidth;
          const y = ((90 - center.lat) / 180) * mapHeight;
          const pulse = (Math.sin(time + i) + 1) * 30;
          ctx.beginPath();
          ctx.arc(x, y, pulse, 0, Math.PI * 2);
          ctx.stroke();
      });
      ctx.restore();

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
        if (a.name_en === selectedCountry) return 1;
        if (b.name_en === selectedCountry) return -1;
        return 0;
      });

      sortedCenters.forEach((center: any) => {
        const x = ((center.lon + 180) / 360) * mapWidth;
        const y = ((90 - center.lat) / 180) * mapHeight;
        const isSelected = center.name_en === selectedCountry;

        // 1. Draw glowing dot marker
        ctx.beginPath();
        if (isSelected) {
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fillStyle = "#22d3ee"; // Cyan
          ctx.shadowColor = "#22d3ee";
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
        if (isSelected) {
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

  }, [geoData, selectedCountry, centersData]);

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
