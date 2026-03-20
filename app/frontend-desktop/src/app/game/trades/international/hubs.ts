export interface Hub {
  name: string;
  lon: number;
  lat: number;
  radius: number;
  fill: string;
  shadowColor?: string;
  shadowBlur?: number;
}

// Titik Pelabuhan Strategis Internasional (Global Choke Points)
export const internationalHubs: Hub[] = [
  { name: "Jakarta", lon: 106.82, lat: -6.17, radius: 6.0, fill: "#ffffff", shadowColor: "#ffffff", shadowBlur: 12 },
  { name: "Singapura", lon: 103.85, lat: 1.25, radius: 5.0, fill: "#ffffff", shadowColor: "#ffffff", shadowBlur: 10 },
  { name: "Malaysia Barat (Kiri)", lon: 101.35, lat: 3.00, radius: 4.5, fill: "#ffffff" },
  { name: "Malaysia Barat (Kanan)", lon: 103.40, lat: 3.90, radius: 4.5, fill: "#ffffff" },
  { name: "Malaysia Timur (Kiri)", lon: 110.35, lat: 1.55, radius: 4.5, fill: "#ffffff" },
  { name: "Malaysia Timur (Kanan)", lon: 116.05, lat: 6.00, radius: 4.5, fill: "#ffffff" },
  { name: "Thailand (Kiri)", lon: 98.39, lat: 7.88, radius: 4.5, fill: "#ffffff" },
  { name: "Thailand (Kanan)", lon: 100.60, lat: 7.20, radius: 4.5, fill: "#ffffff" },
  { name: "Kamboja", lon: 103.50, lat: 10.60, radius: 4.5, fill: "#ffffff" },
  { name: "Vietnam (Selatan)", lon: 107.15, lat: 10.40, radius: 4.5, fill: "#ffffff" },
  { name: "Vietnam (Utara)", lon: 106.68, lat: 20.85, radius: 4.5, fill: "#ffffff" },
  { name: "Hainan", lon: 110.70, lat: 19.40, radius: 4.5, fill: "#ffffff" }, // Geser ke kanan (Timur)
  { name: "Myanmar (Utara)", lon: 92.90, lat: 20.15, radius: 4.5, fill: "#ffffff" },
  { name: "Myanmar (Selatan)", lon: 96.20, lat: 16.75, radius: 4.5, fill: "#ffffff" },
  { name: "Bangladesh", lon: 91.80, lat: 22.33, radius: 4.5, fill: "#ffffff" },
  { name: "India (Chennai)", lon: 80.27, lat: 13.08, radius: 4.5, fill: "#ffffff" },
  { name: "India (Kolkata)", lon: 88.10, lat: 21.70, radius: 4.5, fill: "#ffffff" },
  { name: "India (Kandla)", lon: 69.80, lat: 22.20, radius: 4.5, fill: "#ffffff" },
  { name: "Pakistan (Karachi)", lon: 67.00, lat: 24.83, radius: 4.5, fill: "#ffffff" },
  { name: "Pakistan (Gwadar)", lon: 62.33, lat: 25.12, radius: 4.5, fill: "#ffffff" },
  { name: "Iran (Kiri)", lon: 56.28, lat: 27.18, radius: 4.5, fill: "#ffffff" },
  { name: "Iran (Kanan)", lon: 60.62, lat: 25.29, radius: 4.5, fill: "#ffffff" },
  { name: "Iran (Bushehr)", lon: 50.84, lat: 28.97, radius: 4.5, fill: "#ffffff" },
  { name: "Kuwait", lon: 47.98, lat: 29.37, radius: 4.5, fill: "#ffffff" },
  { name: "Bahrain", lon: 50.58, lat: 26.22, radius: 4.5, fill: "#ffffff" },
  { name: "Qatar", lon: 51.53, lat: 25.28, radius: 4.5, fill: "#ffffff" },
  { name: "United Arab Emirates", lon: 54.30, lat: 24.40, radius: 4.5, fill: "#ffffff" },
  { name: "Oman (Muscat)", lon: 58.59, lat: 23.58, radius: 4.5, fill: "#ffffff" },
  { name: "Oman (Salalah)", lon: 54.10, lat: 17.00, radius: 4.5, fill: "#ffffff" },
  { name: "Yemen (Aden)", lon: 45.03, lat: 12.78, radius: 4.5, fill: "#ffffff" },
  { name: "Yemen (Hodeidah)", lon: 42.95, lat: 14.80, radius: 4.5, fill: "#ffffff" },
  { name: "Jepang (Utara)", lon: 140.75, lat: 41.77, radius: 4.5, fill: "#ffffff" },
  { name: "Jepang (Selatan)", lon: 130.40, lat: 33.60, radius: 4.5, fill: "#ffffff" },
  { name: "Brunei", lon: 115.00, lat: 5.00, radius: 4.5, fill: "#ffffff" },
  { name: "Filipina (Utara)", lon: 121.00, lat: 18.30, radius: 4.5, fill: "#ffffff" },
  { name: "Filipina", lon: 120.20, lat: 14.80, radius: 4.5, fill: "#ffffff" },
  { name: "Filipina (Visayas)", lon: 125.50, lat: 12.00, radius: 4.5, fill: "#ffffff" },
  { name: "Filipina (Mindanao)", lon: 124.40, lat: 6.20, radius: 4.5, fill: "#ffffff" },
  { name: "Taiwan", lon: 120.30, lat: 22.62, radius: 4.5, fill: "#ffffff" },
  { name: "Korea Selatan", lon: 129.04, lat: 35.10, radius: 4.5, fill: "#ffffff" },
  { name: "Korea Utara", lon: 125.40, lat: 38.74, radius: 4.5, fill: "#ffffff" },
  { name: "India (Mumbai)", lon: 72.85, lat: 19.00, radius: 4.5, fill: "#ffffff" },
  { name: "China (Shanghai)", lon: 121.50, lat: 31.20, radius: 4.5, fill: "#ffffff" },
  { name: "China (Hong Kong)", lon: 114.15, lat: 22.25, radius: 4.5, fill: "#ffffff" },
  { name: "China (Tianjin)", lon: 117.70, lat: 38.98, radius: 4.5, fill: "#ffffff" },
  { name: "Australia (Sydney)", lon: 151.20, lat: -33.85, radius: 4.5, fill: "#ffffff" },
  { name: "Afrika Selatan (Cape Town)", lon: 18.42, lat: -33.91, radius: 4.5, fill: "#ffffff" },
  { name: "Terusan Suez", lon: 32.53, lat: 29.93, radius: 4.5, fill: "#ffffff" },

  { name: "Ujung Amerika Selatan", lon: -67.80, lat: -55.85, radius: 4.5, fill: "#ffffff" },
  { name: "Terusan Panama", lon: -79.52, lat: 8.95, radius: 4.5, fill: "#ffffff" },
  { name: "Amerika Serikat (New York)", lon: -74.00, lat: 40.71, radius: 4.5, fill: "#ffffff" },
  { name: "Amerika Serikat (Los Angeles)", lon: -118.24, lat: 34.05, radius: 4.5, fill: "#ffffff" },
  { name: "Jepang (Tokyo)", lon: 140.00, lat: 35.00, radius: 4.5, fill: "#ffffff" },
  { name: "Sri Lanka (Colombo)", lon: 79.86, lat: 6.92, radius: 4.0, fill: "#ffffff" },
  { name: "Kanada (Halifax)", lon: -63.57, lat: 44.65, radius: 4.5, fill: "#ffffff" },
  { name: "Inggris (London)", lon: -1.30, lat: 50.80, radius: 4.5, fill: "#ffffff" }
];
LinePlaceholder: true
