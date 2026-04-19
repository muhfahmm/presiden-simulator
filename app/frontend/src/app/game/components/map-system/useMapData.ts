"use client"

import { useState, useRef, useEffect } from "react";

export function useMapData() {
  const [mapMode, setMapMode] = useState<"default" | "sda" | "hubungan" | "trade">("default");
  const containerRef = useRef<HTMLDivElement>(null);
  const [geoData, setGeoData] = useState<any>(null);
  const [isCentered, setIsCentered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/world.geojson")
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("Failed to load map data", err));
  }, []);

  return {
    mapMode, setMapMode,
    containerRef,
    geoData, setGeoData,
    isCentered, setIsCentered,
    isMenuOpen, setIsMenuOpen
  };
}
