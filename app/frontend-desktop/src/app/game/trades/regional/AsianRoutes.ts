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
        { lon: 79.95, lat: 6.20 }, // Southbound approach (Cleared)
        { lon: 80.20, lat: 5.70 }, // South of Galle (Pushed South)
        { lon: 80.70, lat: 5.65 }, // South of Matara (Pushed South)
        { lon: 81.30, lat: 5.90 }, // South-East (Pushed South-East)
        { lon: 82.10, lat: 6.40 }, // East coast bottom (Pushed East)
        { lon: 82.40, lat: 7.20 }, // East coast mid (Pushed East)
        { lon: 82.10, lat: 8.50 }, // East coast top (Pushed East)
        { lon: 81.50, lat: 10.00 }, // Offshore Tamil Nadu (Pushed East)
        { lon: 81.00, lat: 11.50 }, // Offshore Tamil Nadu (Pushed East)
        { lon: 80.60, lat: 12.50 }, // Near Chennai (Pushed East)
        { lon: 80.27, lat: 13.08 }  // Chennai
      ]
    }
  },
  "India (Chennai)": {
    "India (Kolkata)": {
      color: "#ff4d4d",
      coords: [
        { lon: 80.27, lat: 13.08 }, // Chennai
        { lon: 82.50, lat: 16.50 }, // East of Kakinada
        { lon: 86.50, lat: 19.50 }, // East of Odisha Coast
        { lon: 88.10, lat: 21.70 }  // Kolkata
      ]
    }
  },
  "India (Kolkata)": {
    "Bangladesh": {
      color: "#ff4d4d",
      coords: [
        { lon: 88.10, lat: 21.70 },
        { lon: 88.50, lat: 21.20 },
        { lon: 90.00, lat: 21.00 },
        { lon: 91.00, lat: 21.50 },
        { lon: 91.80, lat: 22.33 }
      ]
    }
  },
  "Bangladesh": {
    "Myanmar (Utara)": {
      color: "#ff4d4d",
      coords: [
        { lon: 91.80, lat: 22.33 },
        { lon: 91.80, lat: 22.20 },
        { lon: 91.81, lat: 22.07 },
        { lon: 91.82, lat: 21.94 },
        { lon: 91.84, lat: 21.82 },
        { lon: 91.87, lat: 21.69 },
        { lon: 91.90, lat: 21.58 },
        { lon: 91.93, lat: 21.46 },
        { lon: 91.98, lat: 21.34 },
        { lon: 92.02, lat: 21.23 },
        { lon: 92.07, lat: 21.12 },
        { lon: 92.13, lat: 21.01 },
        { lon: 92.20, lat: 20.91 },
        { lon: 92.26, lat: 20.80 },
        { lon: 92.34, lat: 20.70 },
        { lon: 92.42, lat: 20.60 },
        { lon: 92.50, lat: 20.51 },
        { lon: 92.59, lat: 20.42 },
        { lon: 92.69, lat: 20.32 },
        { lon: 92.79, lat: 20.24 },
        { lon: 92.90, lat: 20.15 }
      ]
    }
  },
  "Myanmar (Utara)": {
    "Myanmar (Selatan)": {
      color: "#ff4d4d",
      coords: [
        { lon: 92.90, lat: 20.15 },
        { lon: 92.70, lat: 19.60 },
        { lon: 92.55, lat: 19.10 },
        { lon: 92.50, lat: 18.50 },
        { lon: 92.65, lat: 17.80 },
        { lon: 93.00, lat: 17.20 },
        { lon: 93.40, lat: 16.40 },
        { lon: 93.80, lat: 15.80 },
        { lon: 94.20, lat: 15.50 }, // South of Cape
        { lon: 94.70, lat: 15.55 },
        { lon: 95.20, lat: 15.40 }, // Lower south bound
        { lon: 95.80, lat: 15.40 }, 
        { lon: 96.20, lat: 15.40 }, // Deep South clearance
        { lon: 96.20, lat: 16.75 }  // Straight North to Hub
      ]
    }
  },
  "Myanmar (Selatan)": {
    "Malaysia Barat (Kiri)": {
      color: "#ff4d4d",
      coords: [
        { lon: 96.20, lat: 16.75 },
        { lon: 97.00, lat: 15.00 },
        { lon: 97.50, lat: 12.00 },
        { lon: 98.00, lat: 9.00 },
        { lon: 98.39, lat: 7.88 }, // Thailand Kiri
        { lon: 99.50, lat: 6.20 },
        { lon: 100.50, lat: 4.80 },
        { lon: 100.40, lat: 4.20 }, // Bow West around Perak bulge
        { lon: 100.80, lat: 3.50 }, // Bow West around Selangor bulge
        { lon: 101.35, lat: 3.00 }
      ]
    }
  },
  "Kamboja": {
    "Vietnam (Selatan)": {
      color: "#ff4d4d",
      coords: [
        { lon: 103.50, lat: 10.60 }, // Kamboja
        { lon: 103.40, lat: 9.80 },
        { lon: 103.60, lat: 8.80 },
        { lon: 104.00, lat: 8.30 },
        { lon: 104.80, lat: 8.20 }, // South of tip (Ca Mau)
        { lon: 105.60, lat: 8.50 }, // Back North-East
        { lon: 106.50, lat: 9.20 },
        { lon: 107.15, lat: 10.40 }  // Vietnam (Selatan)
      ]
    }
  },
  "Vietnam (Selatan)": {
    "Hainan": {
      color: "#ff4d4d",
      coords: [
        { lon: 107.15, lat: 10.40 }, // Vietnam (Selatan)
        { lon: 109.50, lat: 12.00 }, // Clear coastal bulge
        { lon: 111.00, lat: 15.00 }, // Heading North-East
        { lon: 111.50, lat: 17.50 }, // Right side approach
        { lon: 110.70, lat: 19.40 }  // Hainan
      ]
    },
    "Vietnam (Utara)": {
      color: "#ff4d4d",
      coords: [
        { lon: 107.15, lat: 10.40 },
        { lon: 107.89, lat: 10.59 },
        { lon: 108.49, lat: 10.90 },
        { lon: 108.96, lat: 11.32 },
        { lon: 109.30, lat: 11.84 },
        { lon: 109.52, lat: 12.45 },
        { lon: 109.62, lat: 13.15 },
        { lon: 109.61, lat: 13.92 },
        { lon: 109.50, lat: 14.75 },
        { lon: 109.28, lat: 15.64 },
        { lon: 108.97, lat: 16.57 },
        { lon: 108.57, lat: 17.54 },
        { lon: 108.09, lat: 18.53 },
        { lon: 107.52, lat: 19.54 },
        { lon: 106.88, lat: 20.56 },
        { lon: 106.68, lat: 20.85 }
      ]
    }
  }
};
LinePlaceholder: true
