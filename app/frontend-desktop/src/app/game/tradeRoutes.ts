// Opsi rute kapal spesifik (Konfigurasi User-Controlled Multi-stop Waypoints)
// Format -> "Negara Asal": { "Negara Tujuan Akhir": ["Perhentian1", "Perhentian2", "TujuanAkhir"] }
export const customTradeRoutes: Record<string, Record<string, string[]>> = {
  "Bangladesh": {
    "Japan": ["Palk Strait", "Sri Lanka", "Selat Malaka", "Singapore", "Thailand", "Kamboja", "Vietnam", "SCS Hub", "Brunei", "SCS Hub", "Filipina", "Taiwan", "China", "South Korea", "Japan"],
    "Indonesia": ["Palk Strait", "Sri Lanka", "Selat Malaka", "Singapore", "SCS Hub", "Jakarta"],
    "Sri Lanka": ["Palk Strait", "Sri Lanka"]
  },
  "Sri Lanka": {
    "Indonesia": ["Selat Malaka", "Singapore", "SCS Hub", "Jakarta"],
    "Bangladesh": ["Palk Strait", "Bangladesh"]
  },
  "Indonesia": {
    "Japan": ["Jakarta", "Singapore", "Thailand", "Kamboja", "Vietnam", "SCS Hub", "Filipina", "Taiwan", "China", "South Korea", "Japan"],
    "South Korea": ["Jakarta", "Singapore", "Thailand", "Kamboja", "Vietnam", "SCS Hub", "Filipina", "Taiwan", "China", "South Korea"],
    "China": ["Jakarta", "Singapore", "Thailand", "Kamboja", "Vietnam", "SCS Hub", "Filipina", "Taiwan", "China"],
    "Taiwan": ["Jakarta", "Singapore", "Thailand", "Kamboja", "Vietnam", "SCS Hub", "Filipina", "Taiwan"],
    "Filipina": ["Jakarta", "Singapore", "SCS Hub", "Filipina"],
    "Singapore": ["Jakarta", "Singapore"],
    "Bangladesh": ["Jakarta", "Singapore", "Selat Malaka", "Sri Lanka", "Palk Strait", "Bangladesh"],
    "Sri Lanka": ["Jakarta", "Singapore", "Selat Malaka", "Sri Lanka"]
  }
};

// Fallback koordinat statis untuk negara kecil/pulau yang mungkin tidak dirender polygonnya di GeoJSON
export const waypointCoords: Record<string, { lon: number, lat: number }> = {
  "Singapore": { lon: 103.8, lat: 1.3 },
  "Singapura": { lon: 103.8, lat: 1.3 },
  "Taiwan": { lon: 121.0, lat: 23.5 },
  "China": { lon: 114.2, lat: 22.3 },
  "South Korea": { lon: 127.5, lat: 36.0 },
  "Japan": { lon: 138.0, lat: 36.0 },
  "Jakarta": { lon: 106.8, lat: -6.2 },
  "Filipina": { lon: 121.0, lat: 14.6 },
  "Sri Lanka": { lon: 79.8, lat: 6.9 },
  "Aceh": { lon: 95.0, lat: 7.5 },
  "Selat Malaka": { lon: 100.0, lat: 4.0 },
  "Bangladesh": { lon: 91.8, lat: 22.3 },
  "Brunei": { lon: 114.9, lat: 4.9 },
  "Vietnam": { lon: 106.7, lat: 10.8 },
  "Kamboja": { lon: 103.5, lat: 10.6 },
  "Thailand": { lon: 100.5, lat: 13.7 },
  "Palk Strait": { lon: 79.5, lat: 9.3 },
  "SCS Hub": { lon: 112.0, lat: 7.0 }
};

// Waypoints yang tidak boleh digambar titik/dot-nya (Hanya untuk navigasi/lewat saja)
export const hiddenWaypoints = ["Selat Malaka", "Aceh", "Palk Strait", "SCS Hub"];
