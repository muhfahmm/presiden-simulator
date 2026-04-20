import { memo, useState, useEffect } from "react";
import MapContainer from "@/app/map-system/components/MapContainer";
import { tradeStorage } from "../2_navigasi_bawah/2_ekonomi/1-perdagangan/TradeStorage";

interface MapRendererProps {
  mapMode: "default" | "sda" | "hubungan" | "trade";
  userCountry: string;
  targetCountry: string | null;
  geoData: any;
  onSelect: (name: string) => void;
  onSelectSDA: (data: any) => void;
  countries?: any[];
}

const MapRenderer = memo(function MapRenderer({
  mapMode,
  userCountry,
  targetCountry,
  geoData,
  onSelect,
  onSelectSDA,
  countries
}: MapRendererProps) {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const update = () => {
      setTransactions(tradeStorage.getActiveTransactions());
    };
    update();
    window.addEventListener('trade_storage_updated', update);
    return () => window.removeEventListener('trade_storage_updated', update);
  }, []);

  // Translate gamemode to engine mode
  const engineMode = (() => {
    switch (mapMode) {
      case "sda": return "SDA";
      case "hubungan": return "DIPLOMACY";
      case "trade": return "TRADE";
      default: return "MAIN";
    }
  })();

  return (
    <div className="w-full h-full">
      <MapContainer 
        mode={engineMode}
        userCountry={userCountry}
        targetName={targetCountry}
        transactions={transactions}
        onSelectCountry={(c) => onSelect(c.nama_negara)}
        onSelectSDA={onSelectSDA}
        externalCountries={countries}
      />
    </div>
  );
}, (prev, next) => {
  return prev.mapMode === next.mapMode && 
         prev.userCountry === next.userCountry && 
         prev.targetCountry === next.targetCountry &&
         prev.geoData === next.geoData &&
         prev.countries === next.countries;
});

export default MapRenderer;
