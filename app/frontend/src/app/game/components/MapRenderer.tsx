"use client"

import GameMapCanvas from "../mainGameMap";
import TradeMapCanvas from "../tab-menu/trades/TradeMapCanvas";
import MapSDA from "../tab-menu/SDA/mapSDA";
import MapHubungan from "../tab-menu/Hubungan/mapHubungan";

interface MapRendererProps {
  mapMode: "default" | "sda" | "hubungan" | "trade";
  userCountry: string;
  targetCountry: string | null;
  geoData: any;
  onSelect: (name: string) => void;
  onSelectSDA: (data: any) => void;
}

export default function MapRenderer({
  mapMode,
  userCountry,
  targetCountry,
  geoData,
  onSelect,
  onSelectSDA
}: MapRendererProps) {
  return (
    <>
      <div style={{ display: mapMode === "trade" ? "none" : "contents" }} className="h-full">
        {mapMode === "default" && (
          <GameMapCanvas 
            userCountry={userCountry} 
            targetCountry={targetCountry} 
            mapMode={mapMode}
            geoData={geoData}
            onSelect={onSelect} 
          />
        )}
        {mapMode === "sda" && (
          <MapSDA 
            userCountry={userCountry} 
            targetCountry={targetCountry} 
            geoData={geoData}
            onSelect={onSelect} 
            onSelectSDA={onSelectSDA}
          />
        )}
        {mapMode === "hubungan" && (
          <MapHubungan 
            userCountry={userCountry} 
            targetCountry={targetCountry} 
            geoData={geoData}
            onSelect={onSelect} 
          />
        )}
      </div>
      <div style={{ display: mapMode === "trade" ? "contents" : "none" }} className="h-full">
        <TradeMapCanvas 
          userCountry={userCountry} 
          targetCountry={targetCountry} 
          geoData={geoData}
          onSelect={onSelect} 
        />
      </div>
    </>
  );
}
