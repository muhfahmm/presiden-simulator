import { memo } from "react";
import { useRouter } from "next/navigation";
import GameMapCanvas from "./mainGameMap";
import TradeMapCanvas from "../2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/jalur_perdagangan/1_map/TradeMapCanvas";
import MapSDA from "../2_navigasi_menu/1_navigasi_atas/SDA/mapSDA";
import MapHubungan from "../2_navigasi_menu/1_navigasi_atas/Hubungan/mapHubungan";

interface MapRendererProps {
  mapMode: "default" | "sda" | "hubungan" | "trade";
  userCountry: string;
  targetCountry: string | null;
  geoData: any;
  onSelect: (name: string) => void;
  onSelectSDA: (data: any) => void;
}

const MapRenderer = memo(function MapRenderer({
  mapMode,
  userCountry,
  targetCountry,
  geoData,
  onSelect,
  onSelectSDA
}: MapRendererProps) {
  const router = useRouter();

  return (
    <>
      <div style={{ display: mapMode === "default" ? "contents" : "none" }} className="h-full">
        <GameMapCanvas
          userCountry={userCountry}
          targetCountry={targetCountry}
          mapMode={mapMode}
          geoData={geoData}
          onSelect={onSelect}
        />
      </div>
      <div style={{ display: mapMode === "sda" ? "contents" : "none" }} className="h-full">
        <MapSDA
          userCountry={userCountry}
          targetCountry={targetCountry}
          geoData={geoData}
          onSelect={onSelect}
          onSelectSDA={onSelectSDA}
        />
      </div>
      <div style={{ display: mapMode === "hubungan" ? "contents" : "none" }} className="h-full">
        <MapHubungan
          userCountry={userCountry}
          targetCountry={targetCountry}
          geoData={geoData}
          onSelect={onSelect}
        />
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
}, (prev, next) => {
  // Hanya re-render jika variabel kunci berubah
  return prev.mapMode === next.mapMode && 
         prev.userCountry === next.userCountry && 
         prev.targetCountry === next.targetCountry &&
         prev.geoData === next.geoData;
});

export default MapRenderer;
