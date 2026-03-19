import { asiaRoutes, asiaWaypoints, hiddenWaypoints as importedHidden } from "./regions/asia";

// Opsi rute kapal spesifik (Konfigurasi User-Controlled Multi-stop Waypoints)
export const customTradeRoutes: Record<string, Record<string, string[]>> = {
  ...asiaRoutes
};

// Fallback koordinat statis untuk negara kecil/pulau yang mungkin tidak dirender polygonnya di GeoJSON
export const waypointCoords: Record<string, { lon: number, lat: number }> = {
  ...asiaWaypoints
};

// Waypoints yang tidak boleh digambar titik/dot-nya (Hanya untuk navigasi/lewat saja)
export const hiddenWaypoints = [...importedHidden];
