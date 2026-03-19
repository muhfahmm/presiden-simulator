import { asiaRoutes, asiaWaypoints, hiddenWaypoints as asiaHidden } from "./regions/asia/_index";
import { oceaniaRoutes, oceaniaWaypoints } from "./regions/oceania/_index";
import { eropaRoutes, eropaWaypoints, hiddenWaypoints as eropaHidden } from "./regions/eropa/_index";
import { amerikaUtaraRoutes, amerikaUtaraCoastal, amerikaUtaraHidden } from "./regions/amerika_utara/_index";
import { amerikaTengahRoutes, amerikaTengahCoastal, amerikaTengahHidden } from "./regions/amerika_tengah/_index";
import { amerikaSelatanRoutes, amerikaSelatanCoastal, amerikaSelatanHidden } from "./regions/amerika_selatan/_index";

// Opsi rute kapal spesifik (Konfigurasi User-Controlled Multi-stop Waypoints)
export const customTradeRoutes: Record<string, Record<string, string[]>> = {
  ...asiaRoutes,
  ...oceaniaRoutes,
  ...eropaRoutes,
  ...amerikaUtaraRoutes,
  ...amerikaTengahRoutes,
  ...amerikaSelatanRoutes
};

// Fallback koordinat statis untuk negara kecil/pulau yang mungkin tidak dirender polygonnya di GeoJSON
export const waypointCoords: Record<string, { lon: number, lat: number }> = {
  ...asiaWaypoints,
  ...oceaniaWaypoints,
  ...eropaWaypoints,
  ...amerikaUtaraCoastal,
  ...amerikaTengahCoastal,
  ...amerikaSelatanCoastal
};

// Waypoints yang tidak boleh digambar titik/dot-nya (Hanya untuk navigasi/lewat saja)
export const hiddenWaypoints = [
  ...asiaHidden, 
  ...(eropaHidden || []), 
  ...(amerikaUtaraHidden || []),
  ...(amerikaTengahHidden || []),
  ...(amerikaSelatanHidden || [])
];
