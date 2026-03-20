export interface Coordinate {
  lon: number;
  lat: number;
}

export interface InternationalRoute {
  color: string;
  coords: Coordinate[];
}

// Data rute perdagangan Internasional (Global Main Backbone)
export const internationalRoutes: {
  [origin: string]: {
    [destination: string]: InternationalRoute;
  }
} = {
  "Singapura": {
    "India (Mumbai)": {
      color: "#f59e0b", // Amber (Backbone Global)
      coords: [
        { lon: 103.85, lat: 1.25 },  // Singapura
        { lon: 95.00, lat: 6.00 },   // Pulau Weh Outer (Selat Malaka keluar)
        { lon: 85.00, lat: 10.00 },  // Teluk Benggala
        { lon: 77.00, lat: 7.00 },   // Ujung Selatan India (Kanyakumari)
        { lon: 72.85, lat: 19.00 }   // Mumbai
      ]
    },
    "China (Shanghai)": {
      color: "#f59e0b",
      coords: [
        { lon: 103.85, lat: 1.25 },  // Singapura
        { lon: 108.00, lat: 5.00 },  // Laut Cina Selatan
        { lon: 115.00, lat: 15.00 }, // Dekat Paracel Island
        { lon: 120.00, lat: 21.00 }, // Selat Taiwan Selatan
        { lon: 122.00, lat: 26.00 }, // Laut Cina Timur
        { lon: 121.50, lat: 31.20 }  // Shanghai
      ]
    }
  },
  "India (Mumbai)": {
    "Terusan Suez": {
      color: "#f59e0b",
      coords: [
        { lon: 72.85, lat: 19.00 },  // Mumbai
        { lon: 60.00, lat: 15.00 },  // Laut Arab
        { lon: 50.00, lat: 12.00 },  // Teluk Aden
        { lon: 42.00, lat: 14.00 },  // Bab el-Mandeb
        { lon: 36.00, lat: 24.00 },  // Laut Merah Center
        { lon: 32.53, lat: 29.93 }   // Suez
      ]
    },
    "Afrika Selatan (Cape Town)": {
      color: "#f59e0b",
      coords: [
        { lon: 72.85, lat: 19.00 }, // Mumbai
        { lon: 65.00, lat: 5.00 },  // Indian Ocean NW
        { lon: 50.00, lat: -10.00 }, // Utara Madagaskar
        { lon: 40.00, lat: -18.00 }, // Selat Mozambik Mid
        { lon: 35.00, lat: -28.00 }, // Pantai Tenggara Afrika
        { lon: 18.42, lat: -33.91 }  // Cape Town
      ]
    }
  },
  "Terusan Suez": {
    "Selat Gibraltar": {
      color: "#f59e0b",
      coords: [
        { lon: 32.53, lat: 29.93 },  // Suez
        { lon: 25.00, lat: 34.00 },  // Mediterania Timur
        { lon: 15.00, lat: 36.00 },  // Selatan Sisilia
        { lon: 2.00, lat: 37.00 },   // Laut Alboran
        { lon: -5.60, lat: 35.95 }   // Gibraltar
      ]
    }
  },
  "Selat Gibraltar": {
    "Amerika Serikat": {
      color: "#f59e0b",
      coords: [
        { lon: -5.60, lat: 35.95 },   // Gibraltar
        { lon: -20.00, lat: 38.00 },  // Aliran Atlantik Tengah
        { lon: -40.00, lat: 41.00 },  // Mid Atlantic Trunk
        { lon: -60.00, lat: 40.00 },  // Pantai Timur AS Outer
        { lon: -74.00, lat: 40.71 }   // New York
      ]
    }
  },
  "Jakarta": {
    "Australia (Sydney)": {
      color: "#f59e0b", // Amber (Backbone Global)
      coords: [
        { lon: 106.82, lat: -6.17 }, // Jakarta
        { lon: 105.80, lat: -6.00 }, // Melalui Selat Sunda
        { lon: 105.00, lat: -7.50 }, // Keluar ke Samudra Hindia
        { lon: 105.00, lat: -12.00 }, // Samudra Hindia
        { lon: 110.00, lat: -22.00 }, // Pantai Barat Laut Aust Outer
        { lon: 113.00, lat: -32.00 }, // Perth Outer
        { lon: 115.00, lat: -36.50 }, // Cape Leeuwin
        { lon: 125.00, lat: -37.50 }, // Great Australian Bight 
        { lon: 145.00, lat: -40.00 }, // Selat Bass (Selatan Melbourne)
        { lon: 151.20, lat: -33.85 }  // Sydney (Tujuan)
      ]
    },
    "Afrika Selatan (Cape Town)": {
      color: "#f59e0b",
      coords: [
        { lon: 106.82, lat: -6.17 }, // Jakarta
        { lon: 105.80, lat: -6.00 }, // Selat Sunda
        { lon: 105.00, lat: -7.50 }, // Masuk Samudra Hindia
        { lon: 90.00, lat: -20.00 }, // Mid Indian Ocean
        { lon: 60.00, lat: -28.00 }, // Selatan Madagaskar
        { lon: 35.00, lat: -32.00 }, // Pantai Tenggara Afrika
        { lon: 18.42, lat: -33.91 }  // Cape Town
      ]
    }
  },
  "Amerika Serikat (New York)": {
    "Terusan Panama": {
      color: "#f59e0b",
      coords: [
        { lon: -74.00, lat: 40.71 }, // New York
        { lon: -75.00, lat: 31.00 }, // Open Atlantic South
        { lon: -74.50, lat: 24.00 }, // Timur Bahama
        { lon: -74.00, lat: 20.00 }, // Crooked Island Passage
        { lon: -74.00, lat: 14.00 }, // Laut Karibia Center
        { lon: -79.52, lat: 8.95 }   // Panama Canal
      ]
    },
    "Ujung Amerika Selatan": {
      color: "#f59e0b",
      coords: [
        { lon: -74.00, lat: 40.71 }, 
        { lon: -70.00, lat: 30.00 }, 
        { lon: -40.00, lat: -3.00 }, // Eq Atlantic
        { lon: -40.00, lat: -20.00 }, // South Atlantic
        { lon: -56.00, lat: -45.00 }, // Malvinas Area
        { lon: -67.27, lat: -55.98 }  // Cape Horn
      ]
    }
  },
  "Amerika Serikat (Los Angeles)": {
    "Ujung Amerika Selatan": {
      color: "#f59e0b",
      coords: [
        { lon: -118.24, lat: 34.05 }, // LA
        { lon: -112.00, lat: 22.00 }, // Off Baja California
        { lon: -100.00, lat: 0.00 },  // Pacific Equator
        { lon: -85.00, lat: -20.00 }, // Off Peru
        { lon: -80.00, lat: -40.00 }, // Off Chile
        { lon: -76.00, lat: -52.00 }, // Southern Chile channels
        { lon: -67.27, lat: -55.98 }  // Cape Horn
      ]
    },
    "Jepang (Tokyo)": {
      color: "#f59e0b",
      coords: [
        { lon: -118.24, lat: 34.05 }, // LA
        { lon: -140.00, lat: 25.00 }, // Pasifik Timur
        { lon: -175.00, lat: 30.00 }, // Dekat Date Line
        { lon: -180.00, lat: 30.00 }, // Edge (Kiri)
        { lon: 180.00, lat: 30.00 },  // Edge (Kanan)
        { lon: 165.00, lat: 32.00 },  // Pasifik Barat Mid
        { lon: 150.00, lat: 34.00 },  // Pasifik Barat
        { lon: 139.69, lat: 35.68 }   // Tokyo
      ]
    }
  },
  "Jepang (Tokyo)": {
    "China (Shanghai)": {
      color: "#f59e0b",
      coords: [
        { lon: 139.69, lat: 35.68 }, // Tokyo
        { lon: 134.00, lat: 33.00 }, // Selatan Shikoku
        { lon: 128.00, lat: 31.50 }, // Laut Cina Timur Mid
        { lon: 121.50, lat: 31.20 }  // Shanghai
      ]
    }
  },
  "Afrika Selatan (Cape Town)": {
    "Ujung Amerika Selatan": {
      color: "#f59e0b",
      coords: [
        { lon: 18.42, lat: -33.91 }, // Cape Town
        { lon: 0.00, lat: -34.00 },  // Atlantik Selatan Mid
        { lon: -25.00, lat: -42.00 }, // Atlantik SW
        { lon: -50.00, lat: -50.00 }, // Off Falklands
        { lon: -67.27, lat: -55.98 }  // Cape Horn
      ]
    }
  }
};
LinePlaceholder: true
