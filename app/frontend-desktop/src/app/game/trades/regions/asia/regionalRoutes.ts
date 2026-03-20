export interface Coordinate {
  lon: number;
  lat: number;
}

export interface RegionalRoute {
  color: string;
  coords: Coordinate[];
}

export const regionalRoutes: {
  [origin: string]: {
    [destination: string]: RegionalRoute;
  }
} = {
  "Indonesia": {
    "Singapura": {
      color: "#ff4d4d", 
      coords: [
        { lon: 106.82, lat: -6.17 }, // Jakarta (Pelabuhan)
        { lon: 107.20, lat: -4.00 }, // Digeser ke kanan (Timur) - Masuk Laut Jawa bebas pantai
        { lon: 106.50, lat: -2.00 }, // Digeser ke kanan (Timur) - Di antara Bangka & Palembang
        { lon: 104.80, lat: -0.20 }, // Melewati perairan Batam
        { lon: 103.85, lat: 1.25 }   // Singapura
      ]
    }
  }
};
LinePlaceholder: true
