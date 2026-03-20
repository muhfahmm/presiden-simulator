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
  { name: "India (Mumbai)", lon: 72.85, lat: 19.00, radius: 4.5, fill: "#ffffff" },
  { name: "China (Shanghai)", lon: 121.50, lat: 31.20, radius: 4.5, fill: "#ffffff" },
  { name: "Australia (Sydney)", lon: 151.20, lat: -33.85, radius: 4.5, fill: "#ffffff" },
  { name: "Afrika Selatan (Cape Town)", lon: 18.42, lat: -33.91, radius: 4.5, fill: "#ffffff" },
  { name: "Terusan Suez", lon: 32.53, lat: 29.93, radius: 4.5, fill: "#ffffff" },
  { name: "Selat Gibraltar", lon: -5.60, lat: 35.95, radius: 4.5, fill: "#ffffff" },
  { name: "Ujung Amerika Selatan", lon: -67.27, lat: -55.98, radius: 4.5, fill: "#ffffff" },
  { name: "Terusan Panama", lon: -79.52, lat: 8.95, radius: 4.5, fill: "#ffffff" },
  { name: "Amerika Serikat (New York)", lon: -74.00, lat: 40.71, radius: 4.5, fill: "#ffffff" },
  { name: "Amerika Serikat (Los Angeles)", lon: -118.24, lat: 34.05, radius: 4.5, fill: "#ffffff" },
  { name: "Jepang (Tokyo)", lon: 139.69, lat: 35.68, radius: 4.5, fill: "#ffffff" }
];
LinePlaceholder: true
