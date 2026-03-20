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
  "Jakarta": {
    "Singapura": {
      color: "#ff4d4d",
      coords: [
        { lon: 106.82, lat: -6.17 }, // Jakarta (Pelabuhan)
        { lon: 107.50, lat: -4.50 }, // Mulai naik diagonal halus
        { lon: 107.60, lat: -3.00 }, // Timur Pulau Bangka (Berlayar di laut lepas)
        { lon: 106.00, lat: -1.50 }, // Memutar masuk ke perairan Batam
        { lon: 104.80, lat: -0.20 }, // Perairan Batam
        { lon: 103.85, lat: 1.25 }   // Singapura
      ]
    }
  },
  "Singapura": {
    "Malaysia Barat (Kanan)": {
      color: "#ff4d4d",
      coords: [
        { lon: 103.85, lat: 1.25 }, // Singapura
        { lon: 104.20, lat: 2.50 }, // Keluar ke Laut Cina Selatan
        { lon: 103.40, lat: 3.90 }  // Malaysia Barat (Kanan)
      ]
    }
  },
  "Malaysia Barat (Kiri)": {},
  "Malaysia Timur (Kiri)": {},
  "Thailand (Kanan)": {
    "Malaysia Barat (Kanan)": {
      color: "#ff4d4d",
      coords: [
        { lon: 100.60, lat: 7.20 }, // Thailand (Kanan)
        { lon: 101.80, lat: 7.30 }, // Dorong lurus ke timur menjauh dari pantai
        { lon: 102.80, lat: 6.95 }, // Memutar di tengah teluk
        { lon: 103.60, lat: 6.40 }, // Bending tengah teluk dalam
        { lon: 104.10, lat: 5.70 }, // Bending tengah teluk dalam 2
        { lon: 104.30, lat: 4.80 }, // Menuruni teluk
        { lon: 104.42, lat: 4.35 }, // Apex gap maksimal
        { lon: 104.15, lat: 4.10 }, // Memutar melengkung halus
        { lon: 103.75, lat: 3.98 }, // Mendekati pantai
        { lon: 103.40, lat: 3.90 }  // Malaysia Barat (Kanan)
      ]
    },
    "Kamboja": {
      color: "#ff4d4d",
      coords: [
        { lon: 100.60, lat: 7.20 }, // Thailand (Kanan)
        { lon: 102.00, lat: 8.90 }, // Tengah Teluk Thailand atas
        { lon: 103.50, lat: 10.60 } // Kamboja
      ]
    }
  },
  "Taiwan": {
    "Filipina (Utara)": {
      color: "#ff4d4d",
      coords: [
        { lon: 120.30, lat: 22.62 }, // Taiwan
        { lon: 120.80, lat: 20.50 }, // Selat Luzon
        { lon: 121.00, lat: 18.30 }  // Filipina Utara
      ]
    }
  },
  "Sri Lanka (Colombo)": {
    "India (Chennai)": {
      color: "#ff4d4d",
      coords: [
        { lon: 79.86, lat: 6.92 }, // Colombo
        { lon: 80.50, lat: 8.50 }, // Pesisir timur
        { lon: 80.27, lat: 13.08 }  // Chennai
      ]
    }
  },
  "India (Chennai)": {
    "India (Kolkata)": {
      color: "#ff4d4d",
      coords: [
        { lon: 80.27, lat: 13.08 }, // Chennai
        { lon: 82.50, lat: 16.50 }, 
        { lon: 85.00, lat: 19.50 }, 
        { lon: 88.10, lat: 21.70 }  // Kolkata
      ]
    }
  }
};
LinePlaceholder: true
