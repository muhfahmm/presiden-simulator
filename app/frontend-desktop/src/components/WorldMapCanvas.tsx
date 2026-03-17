"use client"

import { useEffect, useRef, useState } from "react";

interface WorldMapCanvasProps {
  selectedCountry: string;
  onSelect: (name: string) => void;
}

export default function WorldMapCanvas({ selectedCountry, onSelect }: WorldMapCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [geoData, setGeoData] = useState<any>(null);
  const [centersData, setCentersData] = useState<any[]>([]);

  // Width and Height of map coordinate grid (Aspect 2:1)
  const mapWidth = 4000;
  const mapHeight = 2000;

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

    // Clear and Fill background style
    ctx.clearRect(0, 0, mapWidth, mapHeight);
    ctx.fillStyle = "#0c0a09"; // Stone 950 ambient
    ctx.fillRect(0, 0, mapWidth, mapHeight);

    // Drawing bounds: Equirectangular Projection Math
    const project = (lon: number, lat: number) => {
      const x = ((lon + 180) / 360) * mapWidth;
      const y = ((90 - lat) / 180) * mapHeight;
      return { x, y };
    };

    // Draw grid lines for strategy aesthetic
    ctx.strokeStyle = "rgba(113, 113, 122, 0.05)";
    ctx.lineWidth = 1;
    for (let i = 0; i < mapWidth; i += 50) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, mapHeight); ctx.stroke();
    }
    for (let j = 0; j < mapHeight; j += 50) {
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

      // Styling parameters
      if (isActive) {
        ctx.fillStyle = "rgba(245, 158, 11, 0.2)"; // Amber accent
        ctx.strokeStyle = "#f59e0b";
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "#f59e0b";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      } else {
        ctx.fillStyle = "rgba(39, 39, 42, 0.6)"; // Zinc 800-ish
        ctx.strokeStyle = "rgba(113, 113, 122, 0.4)";
        ctx.lineWidth = 0.8;
        ctx.fill();
        ctx.stroke();
      }
    });

    // Draw Country Titles (Labels / Flags)
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    centersData.forEach((center: any) => {
      const x = ((center.lon + 180) / 360) * mapWidth;
      const y = ((90 - center.lat) / 180) * mapHeight;
      const isSelected = center.name_en === selectedCountry;

      // 1. Draw glowing dot marker for ALL countries
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      if (isSelected) {
        ctx.fillStyle = "#f59e0b"; // Amber
        ctx.shadowColor = "#f59e0b";
        ctx.shadowBlur = 12;
      } else {
        ctx.fillStyle = "#14b8a6"; // Teal
        ctx.shadowColor = "#14b8a6";
        ctx.shadowBlur = 4;
      }
      ctx.fill();
      ctx.shadowBlur = 0; // reset

      // 2. Draw Flag slightly above the dot
      if (isSelected) {
        ctx.font = "48px sans-serif";
        ctx.shadowColor = "#ffffff"; ctx.shadowBlur = 8;
        ctx.fillText(center.flag, x, y - 24);
        ctx.shadowBlur = 0; // reset
      } else {
        ctx.font = "11px sans-serif"; // much smaller to prevent overlaps
        ctx.globalAlpha = 0.35; // lower opacity to declutter
        ctx.fillText(center.flag, x, y - 10);
        ctx.globalAlpha = 1.0; // reset
      }
    });

  }, [geoData, selectedCountry, centersData]);

  return (
    <canvas 
      ref={canvasRef} 
      width={mapWidth} 
      height={mapHeight} 
      className="max-h-full max-w-full z-10 cursor-pointer"
      onClick={(e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const clickX = ((e.clientX - rect.left) / rect.width) * mapWidth;
        const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;

        let closest: any = null;
        let minDist = 60; // click detection radius in canvas units

        centersData.forEach((center: any) => {
          const x = ((center.lon + 180) / 360) * mapWidth;
          const y = ((90 - center.lat) / 180) * mapHeight;
          const dist = Math.sqrt((clickX - x)**2 + (clickY - y)**2);
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
