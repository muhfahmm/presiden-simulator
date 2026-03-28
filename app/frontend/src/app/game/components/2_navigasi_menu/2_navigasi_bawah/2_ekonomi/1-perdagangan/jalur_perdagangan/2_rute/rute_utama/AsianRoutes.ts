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
      color: "#f59e0b",
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
      color: "#f59e0b",
      coords: [
        { lon: 103.85, lat: 1.25 }, // Singapura
        { lon: 104.20, lat: 2.50 }, // Keluar ke Laut Cina Selatan
        { lon: 103.40, lat: 3.90 }  // Malaysia Barat (Kanan)
      ]
    },

  },
  "Malaysia Barat (Kiri)": {},
  "Thailand (Kanan)": {
    "Malaysia Barat (Kanan)": {
      color: "#f59e0b",
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
      color: "#f59e0b",
      coords: [
        { lon: 100.60, lat: 7.20 }, // Thailand (Kanan)
        { lon: 102.00, lat: 8.90 }, // Tengah Teluk Thailand atas
        { lon: 103.50, lat: 10.60 } // Kamboja
      ]
    }
  },
  "Taiwan": {
    "Filipina (Utara)": {
      color: "#f59e0b",
      coords: [
        { lon: 120.30, lat: 22.62 }, // Taiwan
        { lon: 120.80, lat: 20.50 }, // Selat Luzon
        { lon: 121.00, lat: 18.30 }  // Filipina Utara
      ]
    }
  },
  "Sri Lanka (Colombo)": {
    "India (Chennai)": {
      color: "#f59e0b",
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
      color: "#f59e0b",
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
      color: "#f59e0b",
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
      color: "#f59e0b",
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
      color: "#f59e0b",
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
      color: "#f59e0b",
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
      color: "#f59e0b",
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
      color: "#f59e0b",
      coords: [
        { lon: 107.15, lat: 10.40 }, // Vietnam (Selatan)
        { lon: 109.50, lat: 12.00 }, // Clear coastal bulge
        { lon: 111.00, lat: 15.00 }, // Heading North-East
        { lon: 111.50, lat: 17.50 }, // Right side approach
        { lon: 110.70, lat: 19.40 }  // Hainan
      ]
    },
    "Vietnam (Utara)": {
      color: "#f59e0b",
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
  },
  "Vietnam (Utara)": {
    "Hainan": {
      color: "#f59e0b",
      coords: [
        { lon: 106.68, lat: 20.85 },
        { lon: 106.90, lat: 20.50 }, 
        { lon: 107.20, lat: 20.00 }, 
        { lon: 107.60, lat: 19.30 }, 
        { lon: 108.10, lat: 18.60 }, // West bypass offshore
        { lon: 108.60, lat: 18.10 }, 
        { lon: 109.20, lat: 17.80 }, // Deep South tip clearance
        { lon: 109.80, lat: 17.90 }, 
        { lon: 110.40, lat: 18.20 }, // South-East corner
        { lon: 111.00, lat: 18.70 }, // East Coast bulge offshore
        { lon: 110.70, lat: 19.40 }  // Hainan Node
      ]
    }
  },
  "Hainan": {
    "China (Hong Kong)": {
      color: "#f59e0b",
      coords: [
        { lon: 110.70, lat: 19.40 },
        { lon: 112.00, lat: 20.50 }, 
        { lon: 113.50, lat: 21.50 }, 
        { lon: 114.15, lat: 22.25 }  // China (Hong Kong)
      ]
    }
  },
  "China (Shanghai)": {
    "China (Tianjin)": {
      color: "#f59e0b",
      coords: [
        { lon: 121.50, lat: 31.20 },
        { lon: 122.50, lat: 31.50 },
        { lon: 123.00, lat: 34.20 }, // Yellow sea up
        { lon: 122.50, lat: 37.50 }, // Round Shandong tip 
        { lon: 121.00, lat: 38.20 }, // Enter Bohai
        { lon: 119.50, lat: 38.50 }, // shared node
        { lon: 117.70, lat: 38.98 }  // Tianjin
      ]
    },
    "Korea Selatan": {
      color: "#f59e0b",
      coords: [
        { lon: 121.50, lat: 31.20 },
        { lon: 124.00, lat: 32.00 },
        { lon: 126.50, lat: 32.80 }, // South of Jeju
        { lon: 128.00, lat: 34.20 },
        { lon: 129.04, lat: 35.10 }  // Busan
      ]
    }
  },
  "China (Tianjin)": {
    "Korea Utara": {
      color: "#f59e0b",
      coords: [
        { lon: 117.70, lat: 38.98 }, // Tianjin
        { lon: 119.50, lat: 38.50 }, // shared node
        { lon: 121.50, lat: 38.40 }, // exit Bohai rightwards 
        { lon: 123.50, lat: 38.50 }, 
        { lon: 125.40, lat: 38.74 }  // Korea Utara
      ]
    }
  },

  "Korea Selatan": {
    "Jepang (Selatan)": {
      color: "#f59e0b",
      coords: [
        { lon: 129.04, lat: 35.10 },
        { lon: 129.60, lat: 34.70 }, // East of Tsushima
        { lon: 130.00, lat: 34.10 },
        { lon: 130.40, lat: 33.60 }
      ]
    },
    "Rusia (Vladivostok)": {
      color: "#f59e0b",
      coords: [
        { lon: 129.04, lat: 35.10 },
        { lon: 129.50, lat: 35.50 },
        { lon: 130.00, lat: 38.00 },
        { lon: 131.00, lat: 41.00 },
        { lon: 131.90, lat: 43.10 }
      ]
    }
  },
  "Rusia (Vladivostok)": {
    "Rusia (Sakhalin)": {
      color: "#f59e0b",
      coords: [
        { lon: 131.90, lat: 43.10 },
        { lon: 134.00, lat: 42.50 },
        { lon: 138.00, lat: 43.50 },
        { lon: 141.00, lat: 45.30 },
        { lon: 142.20, lat: 46.00 },
        { lon: 142.80, lat: 46.60 }
      ]
    }
  },
  "Rusia (Sakhalin)": {
    "Rusia (Magadan)": {
      color: "#f59e0b",
      coords: [
        { lon: 142.80, lat: 46.60 },
        { lon: 142.80, lat: 45.90 }, // Down South out of Bay
        { lon: 143.80, lat: 45.90 }, // Curve Right (East) below tip
        { lon: 144.50, lat: 47.00 }, // Then up (North)
        { lon: 145.80, lat: 48.50 }, // Bypass Terpeniya Peninsula
        { lon: 146.00, lat: 51.00 }, 
        { lon: 148.00, lat: 55.00 },
        { lon: 150.80, lat: 59.50 }
      ]
    }
  },
  "Rusia (Magadan)": {
    "Rusia (Petropavlovsk)": {
      color: "#f59e0b",
      coords: [
        { lon: 150.80, lat: 59.50 },
        { lon: 152.00, lat: 57.50 },
        { lon: 153.80, lat: 55.00 },
        { lon: 155.00, lat: 52.50 },
        { lon: 156.40, lat: 50.50 }, // Southern tip tip bypass
        { lon: 157.50, lat: 51.00 },
        { lon: 158.40, lat: 52.00 },
        { lon: 158.60, lat: 53.00 }
      ]
    }
  },
  "Rusia (Petropavlovsk)": {
    "Jepang (Utara)": {
      color: "#f59e0b",
      coords: [
        { lon: 158.60, lat: 53.00 },
        { lon: 158.40, lat: 52.00 }, 
        { lon: 157.50, lat: 51.00 }, 
        { lon: 156.00, lat: 50.00 }, 
        { lon: 152.00, lat: 47.00 },
        { lon: 148.00, lat: 44.00 },
        { lon: 146.00, lat: 42.50 }, // East of Hokkaido tip
        { lon: 144.00, lat: 41.50 }, // South of Erimo cape
        { lon: 142.00, lat: 41.20 }, // Approach Strait East
        { lon: 141.20, lat: 41.50 }, // Into Strait
        { lon: 140.75, lat: 41.77 }
      ]
    }
  },
  "Malaysia Timur (Kiri)": {
    "Brunei": {
      color: "#f59e0b",
      coords: [
        { lon: 110.35, lat: 1.55 }, // Kiri
        { lon: 111.00, lat: 3.00 }, // Push North
        { lon: 112.50, lat: 4.20 }, // Push North-East
        { lon: 114.00, lat: 5.00 }, // Push North-East 2
        { lon: 115.00, lat: 5.00 }  // Brunei
      ]
    }
  },
  "Brunei": {
    "Malaysia Timur (Kanan)": {
      color: "#f59e0b",
      coords: [
        { lon: 115.00, lat: 5.00 },
        { lon: 115.50, lat: 5.50 },
        { lon: 116.05, lat: 6.00 }
      ]
    }
  },
  "Malaysia Timur (Kanan)": {
    "Filipina (Mindanao)": {
      color: "#f59e0b",
      coords: [
        { lon: 116.05, lat: 6.00 },
        { lon: 116.15, lat: 7.00 }, // Initial Curve
        { lon: 116.50, lat: 7.80 }, // Hump Peak
        { lon: 118.00, lat: 7.50 }, // Slow Slope
        { lon: 119.50, lat: 7.10 }, // Slope continuous
        { lon: 121.00, lat: 6.90 }, // Approach Strait
        { lon: 122.10, lat: 6.75 }, // Basilan Strait
        { lon: 123.50, lat: 6.60 }, // Moro Gulf
        { lon: 124.40, lat: 6.20 }  // Mindanao (Davao)
      ]
    }
  },
  "Filipina (Mindanao)": {
    "Filipina (Visayas)": {
      color: "#f59e0b",
      coords: [
        { lon: 124.40, lat: 6.20 },
        { lon: 124.60, lat: 5.80 }, 
        { lon: 125.50, lat: 5.60 }, 
        { lon: 127.50, lat: 6.00 }, // Outer Corner
        { lon: 128.00, lat: 8.00 }, // Peak Gap
        { lon: 127.50, lat: 10.00 }, // Rounding back
        { lon: 126.50, lat: 11.20 }, 
        { lon: 125.50, lat: 12.00 }
      ]
    }
  }
};
LinePlaceholder: true
