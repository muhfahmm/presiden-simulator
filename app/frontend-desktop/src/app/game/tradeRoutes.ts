// Opsi rute kapal spesifik (Konfigurasi User-Controlled Multi-stop Waypoints)
export const customTradeRoutes: Record<string, Record<string, string[]>> = {
  "Pakistan": {
    "Japan": ["Pakistan", "India", "Palk West Entry", "Palk Strait", "Palk East Exit", "Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh", "Steer Andaman", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea", "Approach Korea", "Steer Kyushu", "Steer Japan", "Steer Japan 2", "Approach Japan", "Japan"]
  },
  "Iran": {
    "Japan": ["Iran", "Oman", "Pakistan", "India", "Palk West Entry", "Palk Strait", "Palk East Exit", "Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh", "Steer Andaman", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea", "Approach Korea", "Steer Kyushu", "Steer Japan", "Steer Japan 2", "Approach Japan", "Japan"]
  },
  "Bangladesh": {
    "Japan": ["Bangladesh", "Steer Bay 3", "Steer Bay 2", "Steer Bay 1", "Sri Lanka", "Bangladesh", "Steer Andaman", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea", "Approach Korea", "Steer Kyushu", "Steer Japan", "Steer Japan 2", "Approach Japan", "Japan"],
    "Indonesia": ["Bangladesh", "Steer Bay 3", "Steer Bay 2", "Steer Bay 1", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Malaysia", "Singapore", "Jakarta"],
    "Sri Lanka": ["Bangladesh", "Steer Bay 3", "Steer Bay 2", "Steer Bay 1", "Sri Lanka"]
  },
  "Sri Lanka": {
    "Japan": ["Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh", "Steer Andaman", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea", "Approach Korea", "Steer Kyushu", "Steer Japan", "Steer Japan 2", "Approach Japan", "Japan"],
    "Indonesia": ["Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Malaysia", "Singapore", "Jakarta"],
    "Bangladesh": ["Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh"]
  },
  "Indonesia": {
    "Japan": ["Jakarta", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea", "Approach Korea", "Steer Kyushu", "Steer Japan", "Steer Japan 2", "Approach Japan", "Japan"],
    "South Korea": ["Jakarta", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea"],
    "China": ["Jakarta", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China"],
    "Taiwan": ["Jakarta", "Malaysia", "Singapore", "Steer Brunei", "Brunei", "Filipina", "Taiwan"],
    "Filipina": ["Jakarta", "Malaysia", "Singapore", "Steer Brunei", "Brunei", "Filipina"],
    "Singapore": ["Jakarta", "Malaysia", "Singapore"],
    "Bangladesh": ["Jakarta", "Singapore", "Selat Malaka", "Steer Andaman", "Bangladesh"],
    "Sri Lanka": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka"]
  }
};

// Fallback koordinat statis untuk negara kecil/pulau yang mungkin tidak dirender polygonnya di GeoJSON
export const waypointCoords: Record<string, { lon: number, lat: number }> = {
  "Singapore": { lon: 103.8, lat: 1.3 },
  "Singapura": { lon: 103.8, lat: 1.3 },
  "Taiwan": { lon: 121.0, lat: 23.5 },
  "China": { lon: 114.2, lat: 22.3 },
  "South Korea": { lon: 129.3, lat: 35.0 },
  "Japan": { lon: 140.0, lat: 35.2 },
  "Jakarta": { lon: 106.8, lat: -6.2 },
  "Filipina": { lon: 121.0, lat: 12.5 },
  "Sri Lanka": { lon: 79.7, lat: 6.9 },
  "Aceh": { lon: 95.0, lat: 7.5 },
  "Selat Malaka": { lon: 100.0, lat: 4.0 },
  "Bangladesh": { lon: 91.5, lat: 22.0 },
  "Brunei": { lon: 114.9, lat: 4.9 },
  "Vietnam": { lon: 107.0, lat: 10.5 },
  "Kamboja": { lon: 103.5, lat: 10.6 },
  "Thailand": { lon: 100.9, lat: 12.9 },
  "Malaysia": { lon: 101.7, lat: 3.0 },
  "Myanmar": { lon: 96.2, lat: 16.8 },
  "India": { lon: 72.8, lat: 18.9 },
  "Pakistan": { lon: 67.0, lat: 24.8 },
  "Iran": { lon: 56.3, lat: 27.2 },
  "Oman": { lon: 58.6, lat: 23.6 },
  "Palk Strait": { lon: 79.5, lat: 9.3 },
  "Palk West Entry": { lon: 79.3, lat: 8.5 },
  "Palk East Exit": { lon: 80.5, lat: 10.0 },
  "Steer Brunei": { lon: 110.0, lat: 4.0 },
  "Steer Japan": { lon: 135.0, lat: 31.5 },
  "Steer Japan 2": { lon: 138.5, lat: 32.5 },
  "Steer Kyushu": { lon: 131.0, lat: 31.0 },
  "Approach Japan": { lon: 141.0, lat: 34.5 },
  "Approach Korea": { lon: 130.0, lat: 34.5 },
  "Steer Gulf": { lon: 101.5, lat: 9.5 },
  "Steer SCS South": { lon: 106.0, lat: 7.5 },
  "Steer SCS East": { lon: 108.5, lat: 9.0 },
  "Steer Johor": { lon: 104.5, lat: 1.5 },
  "Steer Sri Lanka West": { lon: 77.0, lat: 7.0 },
  "Steer Sri Lanka South": { lon: 81.0, lat: 4.0 },
  "Steer Sri Lanka SW": { lon: 78.0, lat: 5.0 },
  "Steer Bay 1": { lon: 82.0, lat: 10.0 },
  "Steer Bay 2": { lon: 86.0, lat: 14.0 },
  "Steer Bay 3": { lon: 90.0, lat: 18.0 },
  "Steer Andaman": { lon: 95.0, lat: 10.0 }
};

// Waypoints yang tidak boleh digambar titik/dot-nya (Hanya untuk navigasi/lewat saja)
export const hiddenWaypoints = ["Selat Malaka", "Aceh", "Palk Strait", "Palk West Entry", "Palk East Exit", "Steer Brunei", "Steer Japan", "Steer Japan 2", "Steer Kyushu", "Approach Japan", "Approach Korea", "Steer Gulf", "Steer SCS South", "Steer SCS East", "Steer Johor", "Steer Sri Lanka West", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Steer Andaman"];
