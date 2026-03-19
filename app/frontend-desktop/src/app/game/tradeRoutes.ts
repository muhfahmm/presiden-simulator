// Opsi rute kapal spesifik (Konfigurasi User-Controlled Multi-stop Waypoints)
export const customTradeRoutes: Record<string, Record<string, string[]>> = {
  "Pakistan": {
    "Japan": ["Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh", "Steer Andaman", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea", "Approach Korea", "Steer Kyushu", "Steer Japan", "Steer Japan 2", "Approach Japan", "Japan"],
    "North Korea": ["Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh", "Steer Andaman", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Steer Yellow Sea", "North Korea"],
    "Indonesia": ["Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"]
  },
  "Iran": {
    "Japan": ["Iran", "Oman", "Steer Makran", "Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh", "Steer Andaman", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea", "Approach Korea", "Steer Kyushu", "Steer Japan", "Steer Japan 2", "Approach Japan", "Japan"],
    "North Korea": ["Iran", "Oman", "Steer Makran", "Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh", "Steer Andaman", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Steer Yellow Sea", "North Korea"],
    "Indonesia": ["Iran", "Steer Hormuz", "Steer Musandam", "Steer Gulf of Oman", "Oman", "Steer Makran", "Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"]
  },
  "Bangladesh": {
    "Japan": ["Bangladesh", "Steer Bay 3", "Myanmar", "Steer Bay 2", "Steer Bay 1", "Palk East Exit", "Palk Strait", "Palk West Entry", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea", "Approach Korea", "Steer Kyushu", "Steer Japan", "Steer Japan 2", "Approach Japan", "Japan"],
    "Indonesia": ["Bangladesh", "Steer Bay 3", "Myanmar", "Steer Bay 2", "Steer Bay 1", "Palk East Exit", "Palk Strait", "Palk West Entry", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Malaysia", "Singapore", "Jakarta"],
    "Sri Lanka": ["Bangladesh", "Steer Bay 3", "Myanmar", "Steer Bay 2", "Steer Bay 1", "Palk East Exit", "Palk Strait", "Palk West Entry", "Sri Lanka"],
    "North Korea": ["Bangladesh", "Steer Bay 3", "Myanmar", "Steer Bay 2", "Steer Bay 1", "Palk East Exit", "Palk Strait", "Palk West Entry", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Steer Yellow Sea", "North Korea"]
  },
  "Sri Lanka": {
    "Japan": ["Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh", "Steer Bay 3", "Myanmar", "Steer Bay 2", "Steer Bay 1", "Steer Andaman", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea", "Approach Korea", "Steer Kyushu", "Steer Japan", "Steer Japan 2", "Approach Japan", "Japan"],
    "Indonesia": ["Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Malaysia", "Singapore", "Jakarta"],
    "Bangladesh": ["Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh"],
    "North Korea": ["Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh", "Steer Bay 3", "Myanmar", "Steer Bay 2", "Steer Bay 1", "Steer Andaman", "Selat Malaka", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Steer Yellow Sea", "North Korea"]
  },
  "Indonesia": {
    "Japan": ["Jakarta", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea", "Approach Korea", "Steer Kyushu", "Steer Japan", "Steer Japan 2", "Approach Japan", "Japan"],
    "South Korea": ["Jakarta", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Approach Korea", "South Korea"],
    "North Korea": ["Jakarta", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China", "Steer Yellow Sea", "North Korea"],
    "Myanmar": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Myanmar"],
    "China": ["Jakarta", "Malaysia", "Singapore", "Steer Johor", "Thailand", "Steer Gulf", "Kamboja", "Steer SCS South", "Steer SCS East", "Vietnam", "Steer Brunei", "Brunei", "Filipina", "Taiwan", "China"],
    "Taiwan": ["Jakarta", "Malaysia", "Singapore", "Steer Brunei", "Brunei", "Filipina", "Taiwan"],
    "Filipina": ["Jakarta", "Malaysia", "Singapore", "Steer Brunei", "Brunei", "Filipina"],
    "Singapore": ["Jakarta", "Malaysia", "Singapore"],
    "Bangladesh": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Bangladesh"],
    "Sri Lanka": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka"],
    "India": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India"],
    "Pakistan": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan"],
    "Oman": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan", "Steer Makran", "Oman"],
    "Iran": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan", "Steer Makran", "Oman", "Steer Gulf of Oman", "Steer Musandam", "Steer Hormuz", "Iran"],
    "United Arab Emirates": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan", "Steer Makran", "Oman", "Steer Gulf of Oman", "Steer Musandam", "Steer Hormuz", "Iran", "United Arab Emirates"],
    "Qatar": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan", "Steer Makran", "Oman", "Steer Gulf of Oman", "Steer Musandam", "Steer Hormuz", "Iran", "United Arab Emirates", "Qatar"],
    "Bahrain": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan", "Steer Makran", "Oman", "Steer Gulf of Oman", "Steer Musandam", "Steer Hormuz", "Iran", "United Arab Emirates", "Qatar", "Steer Qatar North", "Bahrain"],
    "Kuwait": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan", "Steer Makran", "Oman", "Steer Gulf of Oman", "Steer Musandam", "Steer Hormuz", "Iran", "United Arab Emirates", "Qatar", "Steer Qatar North", "Bahrain", "Steer Kuwait", "Kuwait"],
    "Yemen": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan", "Steer Makran", "Oman", "Steer Muscat Coast", "Steer Oman East", "Steer Oman Central", "Steer Oman South", "Steer Socotra", "Yemen"],
    "Saudi Arabia": ["Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan", "Steer Makran", "Oman", "Steer Muscat Coast", "Steer Oman East", "Steer Oman Central", "Steer Oman South", "Steer Socotra", "Yemen", "Steer Bab el Mandeb", "Steer Red Sea Entry", "Steer Red Sea 1", "Steer Red Sea 2", "Saudi Arabia"]
  },
  "China": {
    "North Korea": ["China", "Steer Yellow Sea", "North Korea"],
    "Indonesia": ["China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Jakarta"]
  },
  "North Korea": {
    "China": ["North Korea", "Steer Yellow Sea", "China"],
    "Pakistan": ["North Korea", "Steer Yellow Sea", "China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Selat Malaka", "Steer Andaman", "Bangladesh", "Steer Bay 3", "Steer Bay 2", "Steer Bay 1", "Palk East Exit", "Palk Strait", "Palk West Entry", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan"],
    "Iran": ["North Korea", "Steer Yellow Sea", "China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Selat Malaka", "Steer Andaman", "Bangladesh", "Steer Bay 3", "Steer Bay 2", "Steer Bay 1", "Palk East Exit", "Palk Strait", "Palk West Entry", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan", "Steer Makran", "Oman", "Iran"],
    "Bangladesh": ["North Korea", "Steer Yellow Sea", "China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Myanmar", "Steer Bay 3", "Bangladesh"],
    "Sri Lanka": ["North Korea", "Steer Yellow Sea", "China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Selat Malaka", "Steer Andaman", "Steer Bay 1", "Steer Bay 2", "Myanmar", "Steer Bay 3", "Bangladesh", "Steer Bay 3", "Steer Bay 2", "Steer Bay 1", "Palk East Exit", "Palk Strait", "Palk West Entry", "Sri Lanka"],
    "Indonesia": ["North Korea", "Steer Yellow Sea", "China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Jakarta"]
  },
  "Japan": {
    "Pakistan": ["Japan", "Approach Japan", "Steer Japan 2", "Steer Japan", "Steer Kyushu", "Approach Korea", "South Korea", "Approach Korea", "China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Selat Malaka", "Steer Andaman", "Bangladesh", "Steer Bay 3", "Steer Bay 2", "Steer Bay 1", "Palk East Exit", "Palk Strait", "Palk West Entry", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan"],
    "Iran": ["Japan", "Approach Japan", "Steer Japan 2", "Steer Japan", "Steer Kyushu", "Approach Korea", "South Korea", "Approach Korea", "China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Selat Malaka", "Steer Andaman", "Bangladesh", "Steer Bay 3", "Steer Bay 2", "Steer Bay 1", "Palk East Exit", "Palk Strait", "Palk West Entry", "Sri Lanka", "Steer Sri Lanka West", "Steer Arabian Sea", "India", "Steer Gujarat", "Pakistan", "Steer Makran", "Oman", "Iran"],
    "Bangladesh": ["Japan", "Approach Japan", "Steer Japan 2", "Steer Japan", "Steer Kyushu", "Approach Korea", "South Korea", "Approach Korea", "China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Selat Malaka", "Aceh", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Sri Lanka", "Palk West Entry", "Palk Strait", "Palk East Exit", "Steer Bay 1", "Steer Bay 2", "Myanmar", "Steer Bay 3", "Bangladesh"],
    "Sri Lanka": ["Japan", "Approach Japan", "Steer Japan 2", "Steer Japan", "Steer Kyushu", "Approach Korea", "South Korea", "Approach Korea", "China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Selat Malaka", "Steer Andaman", "Steer Bay 1", "Steer Bay 2", "Myanmar", "Steer Bay 3", "Bangladesh", "Steer Bay 3", "Steer Bay 2", "Steer Bay 1", "Palk East Exit", "Palk Strait", "Palk West Entry", "Sri Lanka"],
    "Indonesia": ["Japan", "Approach Japan", "Steer Japan 2", "Steer Japan", "Steer Kyushu", "Approach Korea", "South Korea", "Approach Korea", "China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Jakarta"]
  },
  "South Korea": {
    "Indonesia": ["South Korea", "Approach Korea", "China", "Taiwan", "Filipina", "Brunei", "Steer Brunei", "Vietnam", "Steer SCS East", "Steer SCS South", "Kamboja", "Steer Gulf", "Thailand", "Steer Johor", "Singapore", "Malaysia", "Jakarta"]
  },
  "Myanmar": {
    "Indonesia": ["Myanmar", "Steer Bay 2", "Steer Bay 1", "Palk East Exit", "Palk Strait", "Palk West Entry", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"]
  },
  "Taiwan": {
    "Indonesia": ["Taiwan", "Filipina", "Brunei", "Steer Brunei", "Singapore", "Malaysia", "Jakarta"]
  },
  "Filipina": {
    "Indonesia": ["Filipina", "Brunei", "Steer Brunei", "Singapore", "Malaysia", "Jakarta"]
  },
  "Singapore": {
    "Indonesia": ["Singapore", "Malaysia", "Jakarta"]
  },
  "India": {
    "Indonesia": ["India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"]
  },
  "Oman": {
    "Indonesia": ["Oman", "Steer Makran", "Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"]
  },
  "United Arab Emirates": {
    "Indonesia": ["United Arab Emirates", "Iran", "Steer Hormuz", "Steer Musandam", "Steer Gulf of Oman", "Oman", "Steer Makran", "Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"]
  },
  "Qatar": {
    "Indonesia": ["Qatar", "United Arab Emirates", "Iran", "Steer Hormuz", "Steer Musandam", "Steer Gulf of Oman", "Oman", "Steer Makran", "Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"]
  },
  "Bahrain": {
    "Indonesia": ["Bahrain", "Steer Qatar North", "Qatar", "United Arab Emirates", "Iran", "Steer Hormuz", "Steer Musandam", "Steer Gulf of Oman", "Oman", "Steer Makran", "Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"]
  },
  "Kuwait": {
    "Indonesia": ["Kuwait", "Steer Kuwait", "Bahrain", "Steer Qatar North", "Qatar", "United Arab Emirates", "Iran", "Steer Hormuz", "Steer Musandam", "Steer Gulf of Oman", "Oman", "Steer Makran", "Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"]
  },
  "Yemen": {
    "Indonesia": ["Yemen", "Steer Socotra", "Steer Oman South", "Steer Oman Central", "Steer Oman East", "Steer Muscat Coast", "Oman", "Steer Makran", "Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"]
  },
  "Saudi Arabia": {
    "Indonesia": ["Saudi Arabia", "Steer Red Sea 2", "Steer Red Sea 1", "Steer Red Sea Entry", "Steer Bab el Mandeb", "Yemen", "Steer Socotra", "Steer Oman South", "Steer Oman Central", "Steer Oman East", "Steer Muscat Coast", "Oman", "Steer Makran", "Pakistan", "Steer Gujarat", "India", "Steer Arabian Sea", "Steer Sri Lanka West", "Sri Lanka", "Steer Sri Lanka SW", "Steer Sri Lanka South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"]
  }
};

// Fallback koordinat statis untuk negara kecil/pulau yang mungkin tidak dirender polygonnya di GeoJSON
export const waypointCoords: Record<string, { lon: number, lat: number }> = {
  "Singapore": { lon: 103.8, lat: 1.3 },
  "Singapura": { lon: 103.8, lat: 1.3 },
  "Taiwan": { lon: 121.0, lat: 23.5 },
  "China": { lon: 114.2, lat: 22.3 },
  "South Korea": { lon: 129.3, lat: 35.0 },
  "North Korea": { lon: 125.0, lat: 38.6 },
  "Japan": { lon: 140.0, lat: 35.2 },
  "Jakarta": { lon: 106.8, lat: -6.2 },
  "Filipina": { lon: 121.0, lat: 12.5 },
  "Sri Lanka": { lon: 79.7, lat: 6.9 },
  "Aceh": { lon: 95.0, lat: 7.5 },
  "Selat Malaka": { lon: 100.0, lat: 4.0 },
  "Bangladesh": { lon: 91.0, lat: 22.6 },
  "Brunei": { lon: 114.9, lat: 4.9 },
  "Vietnam": { lon: 107.0, lat: 10.5 },
  "Kamboja": { lon: 103.5, lat: 10.6 },
  "Thailand": { lon: 100.9, lat: 12.9 },
  "Malaysia": { lon: 101.7, lat: 3.0 },
  "Myanmar": { lon: 95.5, lat: 15.5 },
  "India": { lon: 72.8, lat: 18.9 },
  "Pakistan": { lon: 67.0, lat: 24.8 },
  "Iran": { lon: 56.3, lat: 27.2 },
  "Oman": { lon: 58.6, lat: 23.6 },
  "Yemen": { lon: 45.0, lat: 12.8 },
  "Saudi Arabia": { lon: 39.2, lat: 21.5 },
  "United Arab Emirates": { lon: 55.3, lat: 25.2 },
  "Qatar": { lon: 51.5, lat: 25.3 },
  "Bahrain": { lon: 50.6, lat: 26.2 },
  "Kuwait": { lon: 48.0, lat: 29.4 },
  "Palk Strait": { lon: 79.5, lat: 9.3 },
  "Palk West Entry": { lon: 79.3, lat: 8.5 },
  "Palk East Exit": { lon: 80.5, lat: 10.0 },
  "Steer Brunei": { lon: 110.0, lat: 4.0 },
  "Steer Japan": { lon: 135.0, lat: 31.5 },
  "Steer Japan 2": { lon: 138.5, lat: 32.5 },
  "Steer Kyushu": { lon: 131.0, lat: 31.0 },
  "Approach Japan": { lon: 141.0, lat: 34.5 },
  "Approach Korea": { lon: 130.0, lat: 34.5 },
  "Steer East Korea": { lon: 130.0, lat: 37.0 },
  "Steer Yellow Sea": { lon: 124.0, lat: 35.0 },
  "Steer Gulf": { lon: 101.8, lat: 11.2 },
  "Steer SCS South": { lon: 104.5, lat: 8.0 },
  "Steer SCS East": { lon: 106.5, lat: 9.5 },
  "Steer Johor": { lon: 104.5, lat: 1.5 },
  "Steer Sri Lanka West": { lon: 77.0, lat: 7.0 },
  "Steer Sri Lanka South": { lon: 81.0, lat: 4.0 },
  "Steer Sri Lanka SW": { lon: 78.0, lat: 5.0 },
  "Steer Bay 1": { lon: 82.0, lat: 10.0 },
  "Steer Bay 2": { lon: 86.0, lat: 14.0 },
  "Steer Bay 3": { lon: 90.0, lat: 18.0 },
  "Steer Andaman": { lon: 95.0, lat: 10.0 },
  "Steer Hormuz": { lon: 56.5, lat: 26.5 },
  "Steer Arabian Sea": { lon: 73.5, lat: 12.0 },
  "Steer Gujarat": { lon: 68.5, lat: 21.0 },
  "Steer Makran": { lon: 63.0, lat: 23.0 },
  "Steer Kuwait": { lon: 50.5, lat: 28.0 },
  "Steer Qatar North": { lon: 51.5, lat: 26.5 },
  "Steer Oman East": { lon: 60.0, lat: 22.5 },
  "Steer Oman South": { lon: 56.0, lat: 17.0 },
  "Steer Socotra": { lon: 51.0, lat: 13.5 },
  "Steer Bab el Mandeb": { lon: 43.3, lat: 12.5 },
  "Steer Red Sea Entry": { lon: 42.5, lat: 14.0 },
  "Steer Red Sea 1": { lon: 41.5, lat: 16.0 },
  "Steer Red Sea 2": { lon: 40.0, lat: 19.0 },
  "Steer Gulf of Oman": { lon: 57.5, lat: 25.0 },
  "Steer Muscat Coast": { lon: 59.5, lat: 23.5 },
  "Steer Musandam": { lon: 56.5, lat: 26.8 },
  "Steer Oman Central": { lon: 59.0, lat: 20.0 }
};

// Waypoints yang tidak boleh digambar titik/dot-nya (Hanya untuk navigasi/lewat saja)
export const hiddenWaypoints = ["Selat Malaka", "Aceh", "Palk Strait", "Palk West Entry", "Palk East Exit", "Steer Brunei", "Steer Japan", "Steer Japan 2", "Steer Kyushu", "Approach Japan", "Approach Korea", "Steer East Korea", "Steer Yellow Sea", "Steer Gulf", "Steer SCS South", "Steer SCS East", "Steer Johor", "Steer Sri Lanka West", "Steer Sri Lanka South", "Steer Sri Lanka SW", "Steer Bay 1", "Steer Bay 2", "Steer Bay 3", "Steer Andaman", "Steer Hormuz", "Steer Arabian Sea", "Steer Gujarat", "Steer Makran", "Steer Kuwait", "Steer Qatar North", "Steer Oman East", "Steer Oman South", "Steer Socotra", "Steer Bab el Mandeb", "Steer Red Sea Entry", "Steer Red Sea 1", "Steer Red Sea 2", "Steer Gulf of Oman", "Steer Muscat Coast", "Steer Musandam", "Steer Oman Central"];
