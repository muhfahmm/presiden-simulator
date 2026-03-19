// Opsi rute kapal spesifik (Konfigurasi User-Controlled Multi-stop Waypoints)
// Format -> "Negara Asal": { "Negara Tujuan Akhir": ["Perhentian1", "Perhentian2", "TujuanAkhir"] }
export const customTradeRoutes: Record<string, Record<string, string[]>> = {
  "Indonesia": {
    "Japan": ["Singapore", "Thailand", "Kamboja", "Vietnam", "Brunei", "Filipina", "Taiwan", "China", "South Korea", "Japan"],
    "South Korea": ["Singapore", "Thailand", "Kamboja", "Vietnam", "Brunei", "Filipina", "Taiwan", "China", "South Korea"],
    "China": ["Singapore", "Thailand", "Kamboja", "Vietnam", "Brunei", "Filipina", "Taiwan", "China"],
    "Taiwan": ["Singapore", "Thailand", "Kamboja", "Vietnam", "Brunei", "Filipina", "Taiwan"],
    "Filipina": ["Singapore", "Brunei", "Filipina"],
    "Singapore": ["Singapore"]
  },
  "Bangladesh": {
    "Japan": ["Sri Lanka", "Aceh", "Selat Malaka", "Singapore", "Thailand", "Kamboja", "Vietnam", "Brunei", "Filipina", "Taiwan", "China", "South Korea", "Japan"],
    "Indonesia": ["Sri Lanka", "Aceh", "Selat Malaka", "Jakarta"],
    "Sri Lanka": ["Sri Lanka"]
  },
  "Sri Lanka": {
    "Indonesia": ["Selat Malaka", "Jakarta"],
    "Bangladesh": ["Bangladesh"]
  }
};

// Fallback koordinat statis untuk negara kecil/pulau yang mungkin tidak dirender polygonnya di GeoJSON
export const waypointCoords: Record<string, {lon: number, lat: number}> = {
  "Singapore": { lon: 103.8, lat: 1.3 },
  "Singapura": { lon: 103.8, lat: 1.3 },
  "Taiwan": { lon: 121.0, lat: 23.5 },
  "China": { lon: 104.0, lat: 35.0 },
  "South Korea": { lon: 127.5, lat: 36.0 },
  "Japan": { lon: 138.0, lat: 36.0 },
  "Jakarta": { lon: 106.8, lat: -6.2 },
  "Filipina": { lon: 121.77, lat: 12.87 },
  "Sri Lanka": { lon: 82, lat: 5 },
  "Aceh": { lon: 95, lat: 5 },
  "Selat Malaka": { lon: 99, lat: 3 },
  "Bangladesh": { lon: 90.5, lat: 20 },
  "Brunei": { lon: 114.7, lat: 4.5 },
  "Vietnam": { lon: 106.6, lat: 10.8 },
  "Kamboja": { lon: 104.9, lat: 11.5 },
  "Thailand": { lon: 100.5, lat: 13.7 }
};
