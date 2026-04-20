'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { BaseMapEngine, GeoJsonData } from '../engine/ts/BaseMapEngine';
import { MainMapEngine } from '../engine/ts/MainMapEngine';
import { DiplomacyMapEngine } from '../engine/ts/DiplomacyMapEngine';
import { SDAMapEngine } from '../engine/ts/SDAMapEngine';
import { TradeMapEngine } from '../engine/ts/TradeMapEngine';
import { Projector } from '../engine/ts/Projector';
import { Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MapContainerProps {
  mode?: 'MAIN' | 'SDA' | 'DIPLOMACY' | 'TRADE';
  userCountry?: string | null;
  targetName?: string | null;
  targetCode?: string | null;
  selectedName?: string | null;
  selectedCode?: string | null;
  selectedLat?: number | null;
  selectedLon?: number | null;
  isInternal?: boolean;
  relations?: any[];
  transactions?: any[];
  onSelectCountry?: (country: any) => void;
  onSelectSDA?: (data: any) => void;
  onResetMode?: () => void;
}

export default function MapContainer({ 
  mode = 'MAIN', 
  userCountry, 
  targetName, 
  targetCode,
  selectedName, 
  selectedCode, 
  selectedLat,
  selectedLon,
  isInternal = false,
  relations = [],
  transactions = [],
  onSelectCountry,
  onSelectSDA,
  onResetMode 
}: MapContainerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<BaseMapEngine | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<GeoJsonData | null>(null);
  const [countries, setCountries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Interaction State
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringStar, setIsHoveringStar] = useState(false);

  // Load Map Data
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;

    async function loadData() {
      try {
        const [geoRes, countryRes] = await Promise.all([
          fetch('/data/world.json'),
          fetch('/data/countries.json')
        ]);

        if (!geoRes.ok || !countryRes.ok) throw new Error('Failed to load data');

        const geoJson = await geoRes.json();
        const countryList = await countryRes.json();

        setData(geoJson);
        setCountries(countryList);
        setIsLoading(false);
      } catch (error: any) {
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(loadData, 2000);
        } else {
          setIsLoading(false);
        }
      }
    }
    loadData();
  }, []);

  // Initialize/Swap Engine
  useEffect(() => {
    if (!canvasRef.current || !data || !containerRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    // Instantiate Correct Engine based on Mode
    let engine: BaseMapEngine;
    switch (mode) {
      case 'DIPLOMACY':
        engine = new DiplomacyMapEngine(ctx, width, height);
        break;
      case 'SDA':
        engine = new SDAMapEngine(ctx, width, height);
        break;
      case 'TRADE':
        engine = new TradeMapEngine(ctx, width, height);
        break;
      case 'MAIN':
      default:
        engine = new MainMapEngine(ctx, width, height);
        break;
    }

    engine.setData(data);
    engine.setCountries(countries);
    engineRef.current = engine;

    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current || !engineRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      canvasRef.current.width = newWidth;
      canvasRef.current.height = newHeight;
      engineRef.current.resize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
        if (engineRef.current) {
            engineRef.current.stopRenderLoop();
        }
    };
  }, [data, countries, mode]); // Only re-init when fundamental data or mode changes

  // Sync Transform, Selections & Specialized Data
  useEffect(() => {
    if (!engineRef.current) return;
    const engine = engineRef.current;
        
    // 1. Common Selections
    if (engine instanceof MainMapEngine || engine instanceof DiplomacyMapEngine || engine instanceof SDAMapEngine || engine instanceof TradeMapEngine) {
      (engine as any).playerCountryName = userCountry || null;
      (engine as any).targetCountryName = targetName || selectedName || null;
    }
        
    // 2. Diplomacy Specifics
    if (engine instanceof DiplomacyMapEngine) {
      engine.updateRelations();
    }

    // 3. Trade Specifics
    if (engine instanceof TradeMapEngine) {
      engine.setTransactions(transactions);
    }
    
    // 4. SDA Specifics
    if (engine instanceof SDAMapEngine) {
      engine.onSelectSDA = onSelectSDA || null;
    }

    // 5. Global State
    engine.setRelations(relations);
    engine.setTransform(transform.scale, transform.x, transform.y);
  }, [
    transform.scale, 
    transform.x, 
    transform.y, 
    selectedName, 
    userCountry, 
    targetName, 
    relations,
    transactions,
    onSelectSDA,
    mode
  ]);
  
  // Camera Synchronizer (Fly-to)
  useEffect(() => {
    if (!data || !containerRef.current || isDragging) return;
    
    // Only focus if we have coordinates and it's an internal selection (carousel/search)
    // or if selectedName is set and we found it (fallback)
    let lat = selectedLat;
    let lon = selectedLon;

    if (lat === undefined || lat === null || lon === undefined || lon === null) {
      if (!selectedName) return;
      const country = countries.find(c => 
        c.nama_negara.toLowerCase() === selectedName.toLowerCase() ||
        c.kode_negara === selectedName ||
        c.ibukota.toLowerCase() === selectedName.toLowerCase()
      );
      if (country && country.latitude && country.longitude) {
        lat = Number(country.latitude);
        lon = Number(country.longitude);
      }
    }

    if (lat !== undefined && lat !== null && lon !== undefined && lon !== null) {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      const proj = new Projector(width, height);
      const { x: px, y: py } = proj.project(lon, lat);
      
      const targetScale = 4.5;
      let nX = width / 2 - px * targetScale;
      let nY = height / 2 - py * targetScale;
      
      if (targetScale <= 1.0) { nX = 0; nY = 0; }
      else {
        nX = Math.min(Math.max(nX, width * (1 - targetScale)), 0);
        nY = Math.min(Math.max(nY, height * (1 - targetScale)), 0);
      }
      
      setTransform({ scale: targetScale, x: nX, y: nY });
    }
  }, [selectedName, selectedLat, selectedLon, data, countries]);

  // Interaction Handlers (Mouse/Wheel)
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomSpeed = 0.005;
    const newScale = Math.min(Math.max(transform.scale - e.deltaY * zoomSpeed, 1.0), 10);
    const rect = canvasRef.current?.getBoundingClientRect(); if (!rect) return;
    const mouseX = e.clientX - rect.left, mouseY = e.clientY - rect.top;
    const scaleRatio = newScale / transform.scale;
    let newX = mouseX - (mouseX - transform.x) * scaleRatio, newY = mouseY - (mouseY - transform.y) * scaleRatio;
    
    // Clamp bounds
    const width = canvasRef.current?.width || 0, height = canvasRef.current?.height || 0;
    if (newScale <= 1.0) { newX = 0; newY = 0; }
    else {
      newX = Math.min(Math.max(newX, width * (1 - newScale)), 0);
      newY = Math.min(Math.max(newY, height * (1 - newScale)), 0);
    }
    setTransform({ scale: newScale, x: newX, y: newY });
  }, [transform]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true); setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || transform.scale <= 1.0) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect && engineRef.current && !isDragging) {
        const mouseX = e.clientX - rect.left, mouseY = e.clientY - rect.top;
        setIsHoveringStar(!!engineRef.current.getCountryAt(mouseX, mouseY));
      }
      return;
    }
    const dx = e.clientX - lastMousePos.x, dy = e.clientY - lastMousePos.y;
    const width = containerRef.current?.clientWidth || 0, height = containerRef.current?.clientHeight || 0;
    
    setTransform(prev => {
      let nX = Math.min(Math.max(prev.x + dx, width * (1 - prev.scale)), 0);
      let nY = Math.min(Math.max(prev.y + dy, height * (1 - prev.scale)), 0);
      return { ...prev, x: nX, y: nY };
    });
    setLastMousePos({ x: e.clientX, y: e.clientY });
  }, [isDragging, lastMousePos, transform.scale]);

  return (
    <div ref={containerRef} className="w-full h-full relative bg-[#070b14] overflow-hidden"
      onWheel={handleWheel} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)} onMouseLeave={() => setIsDragging(false)}>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#070b14]/90 backdrop-blur-md z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
            <span className="text-emerald-500 font-mono text-xs font-bold tracking-[0.3em] uppercase">Booting Command Core...</span>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} 
        className={`w-full h-full block transition-opacity duration-1000 ${isDragging ? 'cursor-grabbing' : isHoveringStar ? 'cursor-pointer' : 'cursor-grab'}`}
        onClick={(e) => {
          const rect = canvasRef.current?.getBoundingClientRect();
          if (!rect || !engineRef.current) return;
          const country = engineRef.current.getCountryAt(e.clientX - rect.left, e.clientY - rect.top);
          if (country) {
            if (mode === 'SDA' && onSelectSDA) {
              onSelectSDA({ 
                name: country.name_id || country.nama_negara, 
                flag: country.flag, 
                resources: country.sektor_ekstraksi 
              });
            } else if (onSelectCountry) {
              onSelectCountry(country);
            }
          }
        }}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </div>
  );
}
