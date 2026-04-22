import { internationalHubs, Hub } from "../3_hub/hubs";

export interface Point {
  name: string;
  lon: number;
  lat: number;
}

// Global Strategic Waypoints (Choke Points & Canals)
export const SHIPPING_WAYPOINTS: Record<string, Point> = {
  MALACCA: { name: "Selat Malaka", lon: 103.85, lat: 1.25 },
  SINGAPORE: { name: "Singapura", lon: 103.85, lat: 1.25 },
  COLOMBO: { name: "Sri Lanka", lon: 79.86, lat: 6.92 },
  ADEN: { name: "Aden", lon: 45.03, lat: 12.78 },
  SUEZ: { name: "Terusan Suez", lon: 32.53, lat: 29.93 },
  PANAMA: { name: "Terusan Panama", lon: -79.52, lat: 8.95 },
  CAPE_TOWN: { name: "Cape of Good Hope", lon: 18.42, lat: -33.91 },
  HORMUZ: { name: "Selat Hormuz", lon: 56.28, lat: 27.18 },
  GIBRALTAR: { name: "Gibraltar", lon: -5.35, lat: 36.14 },
  PACIFIC: { name: "Samudra Pasifik", lon: 180, lat: 30 },
  ATLANTIC: { name: "Samudra Atlantik", lon: -30, lat: 20 },
};

export type Region = 'Asia' | 'Eropa' | 'Afrika' | 'NA' | 'SA' | 'Oceania';

/**
 * Returns the most appropriate strategic hub for a given country name
 */
export const getHubForCountry = (countryName: string): Hub | null => {
  const normalized = countryName.toLowerCase().trim();
  
  // Specific Hub Mappings (Overrides)
  if (normalized.includes("china")) return internationalHubs.find(h => h.name === "China (Shanghai)") || null;
  if (normalized.includes("indonesia")) return internationalHubs.find(h => h.name === "Jakarta") || null;
  if (normalized.includes("amerika serikat") || normalized.includes("united states")) return internationalHubs.find(h => h.name === "Amerika Serikat (New York)") || null;
  if (normalized.includes("india")) return internationalHubs.find(h => h.name === "India (Mumbai)") || null;
  if (normalized.includes("jepang") || normalized.includes("japan")) return internationalHubs.find(h => h.name === "Jepang (Tokyo)") || null;
  
  // User indicated point in Northern Philippines
  if (normalized === "filipina" || normalized === "philippines") {
    return internationalHubs.find(h => h.name === "Filipina (Utara)") || 
           internationalHubs.find(h => h.name === "Filipina") || null;
  }
  
  // Generic lookup (robust)
  return internationalHubs.find(h => h.name.toLowerCase().includes(normalized)) || null;
};

/**
 * Identifies the region of a country based on its coordinates (simplified)
 */
const getRegion = (lon: number, lat: number): Region => {
  if (lon > 60 && lon < 150 && lat > -10 && lat < 70) return 'Asia';
  if (lon > -15 && lon < 45 && lat > 35 && lat < 75) return 'Eropa';
  if (lon > -20 && lon < 55 && lat > -35 && lat < 37) return 'Afrika';
  if (lon > -180 && lon < -50 && lat > 15 && lat < 85) return 'NA';
  if (lon > -90 && lon < -30 && lat > -60 && lat < 15) return 'SA';
  if (lon > 110 && lon < 180 && lat > -50 && lat < 0) return 'Oceania';
  return 'Asia'; // Default
};

/**
 * Calculates a multi-segment trade path between two coordinates to avoid land.
 */
export const calculateTradeRoute = (start: { lon: number, lat: number }, end: { lon: number, lat: number }): Point[] => {
  const startRegion = getRegion(start.lon, start.lat);
  const endRegion = getRegion(end.lon, end.lat);
  
  const path: Point[] = [{ name: "Start", lon: start.lon, lat: start.lat }];
  
  // Logic: Asia to Europe (Via Suez)
  if ((startRegion === 'Asia' && endRegion === 'Eropa') || (startRegion === 'Eropa' && endRegion === 'Asia')) {
    const isExport = startRegion === 'Asia';
    const waypoints = isExport 
      ? [SHIPPING_WAYPOINTS.SINGAPORE, SHIPPING_WAYPOINTS.COLOMBO, SHIPPING_WAYPOINTS.ADEN, SHIPPING_WAYPOINTS.SUEZ]
      : [SHIPPING_WAYPOINTS.SUEZ, SHIPPING_WAYPOINTS.ADEN, SHIPPING_WAYPOINTS.COLOMBO, SHIPPING_WAYPOINTS.SINGAPORE];
    path.push(...waypoints);
  }
  
  // Logic: Asia/Oceania to NA/SA East Coast (Via Panama)
  else if ((startRegion === 'Asia' && end.lon > -80 && end.lon < -30) || (endRegion === 'Asia' && start.lon > -80 && start.lon < -30)) {
    path.push(SHIPPING_WAYPOINTS.PANAMA);
  }
  
  // Logic: Asia to Africa (Via Indian Ocean)
  else if (startRegion === 'Asia' && endRegion === 'Afrika' && end.lat < 0) {
    path.push(SHIPPING_WAYPOINTS.COLOMBO, SHIPPING_WAYPOINTS.CAPE_TOWN);
  }

  // Logic: Global Crossing (Simplified)
  else if (Math.abs(start.lon - end.lon) > 180) {
      path.push(SHIPPING_WAYPOINTS.PACIFIC);
  }

  path.push({ name: "End", lon: end.lon, lat: end.lat });
  
  // NEW: Smooth the path with intermediate points to create "Great Circle" curvature effect
  return smoothPath(path);
};

/**
 * Adds intermediate points between waypoints to create a curved effect for long segments.
 */
const smoothPath = (points: Point[]): Point[] => {
  if (points.length < 2) return points;
  
  const smoothed: Point[] = [];
  
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i+1];
    
    smoothed.push(p1);
    
    // Only smooth long segments (more than 15 degrees)
    const dist = Math.sqrt(Math.pow(p2.lon - p1.lon, 2) + Math.pow(p2.lat - p1.lat, 2));
    if (dist > 15) {
      const steps = Math.floor(dist / 5); // One point every 5 degrees
      for (let s = 1; s < steps; s++) {
        const t = s / steps;
        
        // Simple spherical interpolation (Lerp for now, but with a "bulge" for curvature)
        let lon = p1.lon + (p2.lon - p1.lon) * t;
        let lat = p1.lat + (p2.lat - p1.lat) * t;
        
        // Add a slight "bulge" towards the north/south depending on the hemisphere
        // to simulate the Great Circle look on a Mercator-ish projection
        const bulgeFactor = Math.sin(t * Math.PI) * (dist * 0.15);
        const direction = p1.lat > 0 ? 1 : -1;
        lat += bulgeFactor * direction;
        
        smoothed.push({ name: `Waypoint ${i}-${s}`, lon, lat });
      }
    }
  }
  
  smoothed.push(points[points.length - 1]);
  return smoothed;
};


/**
 * Returns formatted data for export lines (My Country -> Target)
 */
export const getExportPath = (player: Point, target: Point) => {
  return calculateTradeRoute(player, target);
};

/**
 * Returns formatted data for import lines (Target -> Player)
 */
export const getImportPath = (target: Point, player: Point) => {
  return calculateTradeRoute(target, player);
};
