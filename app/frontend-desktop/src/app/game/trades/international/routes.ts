export interface Coordinate {
  lon: number;
  lat: number;
}

export interface InternationalRoute {
  color: string;
  coords: Coordinate[];
}

export const internationalRoutes: {
  [origin: string]: {
    [destination: string]: InternationalRoute;
  }
} = {
  "Singapura": {
    "India (Mumbai)": {
      color: "#f59e0b",
      coords: [
        { lon: 103.85, lat: 1.25 },
        { lon: 102.70, lat: 1.40 }, // Menjauh dari pesisir darat Malaysia
        { lon: 101.80, lat: 2.20 }, // Tengah Selat Malaka (Unified)
        { lon: 101.35, lat: 3.00 }, // Malaysia Barat (Kiri)
        { lon: 100.50, lat: 4.80 },
        { lon: 99.50, lat: 6.20 },  // Menghindari Langkawi
        { lon: 98.80, lat: 7.50 },  // Pendekatan Phuket halus
        { lon: 98.39, lat: 7.88 },  // 🟢 Thailand (Kiri)
        { lon: 97.50, lat: 7.70 },  // Busur keluar ke laut lepas
        { lon: 95.00, lat: 6.50 },  // Lepas Andaman Islands 
        { lon: 94.80, lat: 6.50 },  // Mengudara tinggi di atas Banda Aceh
        { lon: 92.00, lat: 6.20 },  // Transisi lengkung turun
        { lon: 89.00, lat: 5.80 },
        { lon: 85.00, lat: 5.15 },  // Mulai melengkung halus
        { lon: 81.00, lat: 4.80 },  // Titik terbawah busur
        { lon: 78.50, lat: 4.90 },
        { lon: 76.50, lat: 5.50 },  // Transisi sudut naik
        { lon: 74.50, lat: 7.20 },
        { lon: 73.20, lat: 10.50 },
        { lon: 72.85, lat: 19.00 }  // Mumbai
      ]
    },
    "Sri Lanka (Colombo)": {
      color: "#f59e0b",
      coords: [
        { lon: 103.85, lat: 1.25 },
        { lon: 102.70, lat: 1.40 },
        { lon: 101.80, lat: 2.20 }, // Tengah Selat Malaka (Unified)
        { lon: 101.35, lat: 3.00 }, // Malaysia Barat (Kiri)
        { lon: 100.50, lat: 4.80 },
        { lon: 99.50, lat: 6.20 },  // Menghindari Langkawi
        { lon: 98.80, lat: 7.50 },  // Pendekatan Phuket halus
        { lon: 98.39, lat: 7.88 },  // Thailand (Kiri)
        { lon: 97.50, lat: 7.70 },  // Busur keluar ke laut lepas
        { lon: 95.00, lat: 6.50 },  // Lepas Andaman Islands 
        { lon: 94.80, lat: 6.50 },
        { lon: 92.00, lat: 6.20 },
        { lon: 89.00, lat: 5.80 },  // 🟢 Unified Trunk
        { lon: 85.00, lat: 5.15 },  // 🟢 Unified Trunk
        { lon: 81.00, lat: 4.80 },  // 🟢 Unified Trunk Sub-coast
        { lon: 79.50, lat: 5.40 },  // Cabang naik ke Colombo
        { lon: 79.30, lat: 6.60 },
        { lon: 79.86, lat: 6.92 }
      ]
    },
    "China (Shanghai)": {
      color: "#f59e0b",
      coords: [
        { lon: 103.85, lat: 1.25 },
        { lon: 104.50, lat: 1.80 }, // Keluar dari Singapura
        { lon: 106.00, lat: 4.00 },
        { lon: 108.50, lat: 7.50 },
        { lon: 111.50, lat: 11.50 },
        { lon: 114.30, lat: 15.30 },
        { lon: 116.50, lat: 19.00 },
        { lon: 118.20, lat: 21.80 }, // Memasuki Selat Taiwan (menghindari Taiwan selatan)
        { lon: 119.50, lat: 23.80 }, // Tengah Selat Taiwan
        { lon: 120.80, lat: 25.50 }, // Keluar dari Selat Taiwan
        { lon: 122.00, lat: 27.50 },
        { lon: 122.60, lat: 29.50 }, // Lengkung mendekati Shanghai
        { lon: 121.50, lat: 31.20 }
      ]
    }
  },
  "Kuwait": {
    "Terusan Suez": {
      color: "#f59e0b",
      coords: [
        { lon: 47.98, lat: 29.37 }, 
        { lon: 49.50, lat: 28.30 }, 
        { lon: 51.00, lat: 27.20 }, 
        { lon: 52.50, lat: 26.30 }, 
        { lon: 54.00, lat: 25.50 }, 
        { lon: 55.20, lat: 25.80 }, 
        { lon: 55.80, lat: 26.30 }, 
        { lon: 56.40, lat: 26.65 }, 
        { lon: 56.40, lat: 26.65 }, 
        { lon: 56.90, lat: 26.10 }, 
        { lon: 57.50, lat: 25.50 }, // Smooth intermediate 1
        { lon: 58.20, lat: 24.90 }, // Smooth intermediate 2
        { lon: 59.00, lat: 24.10 }, // Smooth intermediate 3
        { lon: 59.80, lat: 23.00 }, // Smooth intermediate 4
        { lon: 60.40, lat: 22.00 }, // Smooth intermediate 5
        { lon: 60.60, lat: 21.00 }, 
        { lon: 58.50, lat: 16.50 }, 
        { lon: 55.00, lat: 13.00 }  





      ]
    }
  },
  "India (Mumbai)": {
    "Terusan Suez": {
      color: "#f59e0b",
      coords: [
        { lon: 72.85, lat: 19.00 },
        { lon: 65.00, lat: 15.00 },
        { lon: 55.00, lat: 13.00 },
        { lon: 50.00, lat: 12.00 }, // Teluk Aden Outer
        { lon: 45.00, lat: 12.00 }, // Teluk Aden Center
        { lon: 43.30, lat: 12.60 }, // Bab el-Mandeb (Pintu Masuk)
        { lon: 41.00, lat: 15.00 }, // Laut Merah Selatan
        { lon: 38.00, lat: 20.00 }, // Laut Merah Center
        { lon: 34.00, lat: 27.50 }, // Teluk Suez entry
        { lon: 32.53, lat: 29.93 }  // Suez
      ]
    },
    "Afrika Selatan (Cape Town)": {
      color: "#f59e0b",
      coords: [
        { lon: 72.85, lat: 19.00 },
        { lon: 65.00, lat: 5.00 },
        { lon: 56.00, lat: -4.00 },
        { lon: 48.00, lat: -12.00 },
        { lon: 40.00, lat: -21.00 },
        { lon: 31.00, lat: -32.00 }, // Menjauh dari pesisir tenggara AF
        { lon: 26.50, lat: -34.80 }, // Interpolasi melengkung halus
        { lon: 22.00, lat: -35.20 }, // Apex dasar sferis
        { lon: 18.42, lat: -33.91 }  // Cape Town
      ]
    }
  },
  "Terusan Suez": {
    "Amerika Serikat (New York)": {
      color: "#f59e0b",
      coords: [
        { lon: 32.53, lat: 29.93 },
        { lon: 31.00, lat: 32.00 }, // Keluar Suez ke Mediterania
        { lon: 25.00, lat: 34.00 },
        { lon: 18.00, lat: 35.00 },
        { lon: 12.00, lat: 37.20 }, // Jauh di atas tanjung Cape Bon (Tunisia)
        { lon: 7.00, lat: 37.60 },  // Mendalam di atas pesisir Aljazair
        { lon: 2.00, lat: 37.00 },
        { lon: -3.00, lat: 36.30 }, // Memasuki laut Alboran
        { lon: -5.60, lat: 35.95 }, // Keluar Selat Gibraltar ke Atlantik
        { lon: -15.00, lat: 37.00 },
        { lon: -30.00, lat: 39.50 },
        { lon: -45.00, lat: 41.50 },
        { lon: -60.00, lat: 41.00 },
        { lon: -74.00, lat: 40.71 }
      ]
    }
  },
  "Selat Gibraltar": {
    "Amerika Serikat": {
      color: "#f59e0b",
      coords: [
        { lon: -5.60, lat: 35.95 },
        { lon: -15.00, lat: 37.00 },
        { lon: -30.00, lat: 39.50 },
        { lon: -45.00, lat: 41.50 },
        { lon: -60.00, lat: 41.00 },
        { lon: -74.00, lat: 40.71 }
      ]
    }
  },
  "Jakarta": {
    "Australia (Sydney)": {
      color: "#f59e0b",
      coords: [
        { lon: 106.82, lat: -6.17 },
        { lon: 106.00, lat: -5.80 }, // Pintu Masuk Selat Sunda Utara
        { lon: 105.40, lat: -6.15 }, // Tengah Selat Sunda
        { lon: 104.50, lat: -7.00 }, // Keluar Selat Sunda
        { lon: 105.00, lat: -12.00 },
        { lon: 108.00, lat: -21.00 }, // Mulai melibur diagonal halus
        { lon: 111.00, lat: -28.00 }, // Transisi melengkung sferis
        { lon: 114.00, lat: -34.20 }, // Lengkungan tumpul barat daya
        { lon: 118.00, lat: -36.20 }, // Masuk Great Australian Bight 1
        { lon: 123.50, lat: -36.80 },
        { lon: 129.00, lat: -37.20 },
        { lon: 136.00, lat: -38.00 }, // Di bawah Pulau Kangaroo
        { lon: 143.00, lat: -39.80 }, // Memasuki Selat Bass
        { lon: 147.10, lat: -39.20 }, // Keluar dari Selat Bass
        { lon: 149.80, lat: -38.50 }, // Memutari sudut tenggara (Cape Howe) offshore
        { lon: 150.60, lat: -36.80 }, // Lengkungan transisi naik menyusur pantai
        { lon: 151.20, lat: -33.85 }  // Sydney
      ]
    },
    "Afrika Selatan (Cape Town)": {
      color: "#f59e0b",
      coords: [
        { lon: 106.82, lat: -6.17 },
        { lon: 106.00, lat: -5.80 },
        { lon: 105.40, lat: -6.15 },
        { lon: 104.50, lat: -7.00 },
        { lon: 95.00, lat: -14.00 },
        { lon: 82.00, lat: -20.00 },
        { lon: 65.00, lat: -25.00 },
        { lon: 40.00, lat: -32.00 },
        { lon: 32.00, lat: -34.00 }, // Interpolasi melengkung halus
        { lon: 25.00, lat: -35.20 }, // Apex dasar sferis
        { lon: 21.00, lat: -35.00 }, // Keluar sferis
        { lon: 18.42, lat: -33.91 }
      ]
    }
  },

  "Amerika Serikat (Los Angeles)": {

    "Amerika Serikat (New York) (Via Selatan)": {
      color: "#f59e0b",
      coords: [
        { lon: -118.24, lat: 34.05 }, // LA
        { lon: -114.00, lat: 21.00 },
        { lon: -102.00, lat: 4.00 },
        { lon: -92.00, lat: -10.00 },
        { lon: -83.00, lat: -25.00 },
        { lon: -78.00, lat: -41.00 },
        { lon: -75.80, lat: -51.50 }, // Menyusur Pantai Chile
        { lon: -74.50, lat: -53.50 }, // Mulai belok melengkung tumpul
        { lon: -72.00, lat: -55.30 }, // Lengkungan sferis kiri
        { lon: -69.80, lat: -55.70 },
        { lon: -67.80, lat: -55.85 }, // ⚓ CAPE HORN (Apex Simetris Center)
        { lon: -66.50, lat: -55.60 }, // Memasuki Selat Le Maire
        { lon: -65.10, lat: -54.60 }, // Corong tengah Strait
        { lon: -64.70, lat: -53.50 }, // Utara Pulau Staten (Offset Exit)
        { lon: -61.00, lat: -50.00 }, // Masuk Atlantik melengkung naik
        { lon: -54.00, lat: -38.00 }, // Menyusur Pesisir Timur
        { lon: -47.00, lat: -29.00 },
        { lon: -39.00, lat: -21.00 },
        { lon: -34.80, lat: -11.50 },
        { lon: -33.50, lat: -6.50 },  // Memutari Natal (Brazil)
        { lon: -33.80, lat: -4.00 },
        { lon: -39.00, lat: 1.00 },
        { lon: -48.00, lat: 10.00 },
        { lon: -65.00, lat: 26.00 },
        { lon: -74.00, lat: 40.71 }   // New York
      ]
    },
    "Amerika Serikat (New York)": {
      color: "#f59e0b",
      coords: [
        { lon: -118.24, lat: 34.05 }, // LA
        { lon: -115.00, lat: 25.00 }, // Menyusur Pantai Baja California
        { lon: -107.00, lat: 16.00 }, // Jauh dari Pantai Meksiko
        { lon: -98.00, lat: 11.00 },  // Menyeberang Teluk Tehuantepec
        { lon: -89.00, lat: 8.00 },   // Menyeberang ke Costa Rica
        { lon: -83.00, lat: 7.50 },   // Memutari Teluk Panama bawah
        { lon: -79.52, lat: 8.95 },   // Terusan Panama Dot
        { lon: -77.00, lat: 13.00 },
        { lon: -75.00, lat: 18.20 }, // Safe Caribbean sea
        { lon: -74.40, lat: 19.80 }, // Inside Windward Passage
        { lon: -74.00, lat: 21.00 }, // North of Windward passage
        { lon: -74.00, lat: 31.00 },
        { lon: -74.00, lat: 40.71 }  // New York
      ]
    },
    "Jepang (Tokyo)": {
      color: "#f59e0b",
      coords: [
        { lon: -118.24, lat: 34.05 }, // LA
        { lon: -121.00, lat: 38.00 },
        { lon: -127.00, lat: 44.00 }, // Menyusur Pantai Barat AS
        { lon: -135.00, lat: 50.00 },
        { lon: -144.00, lat: 54.00 }, // Teluk Alaska bawah
        { lon: -154.00, lat: 54.20 }, // Menyusur bawah semenanjung Alaska
        { lon: -164.50, lat: 54.10 }, // Melintasi Selat Unimak ke Laut Bering
        { lon: -172.00, lat: 55.80 }, // Naik melengkung ke Laut Bering
        { lon: -180.00, lat: 57.00 }, // 👈 Edge Seam 1 (West)
        { lon: 180.00, lat: 57.00 },  // 👈 Edge Seam 2 (East)
        { lon: 172.00, lat: 55.50 }, // Laut Bering Barat
        { lon: 164.00, lat: 52.00 },
        { lon: 154.00, lat: 46.00 }, // Menyusur Kuril
        { lon: 146.00, lat: 40.00 }, // Pesisir Timur Jepang
        { lon: 142.00, lat: 36.50 },
        { lon: 140.00, lat: 35.00 }  // Tokyo Dot
      ]
    }
  },
  "Jepang (Tokyo)": {
    "China (Shanghai)": {
      color: "#f59e0b",
      coords: [
        { lon: 140.00, lat: 35.00 },
        { lon: 139.75, lat: 35.00 }, // Keluar dari Teluk Tokyo secara bertahap
        { lon: 139.40, lat: 34.50 }, // Mulai belok melengkung di luar teluk
        { lon: 138.40, lat: 33.70 }, // Busur halus masuk laut lepas dalam
        { lon: 137.00, lat: 32.90 }, // Pelayaran pantai Kii
        { lon: 135.00, lat: 32.30 }, // Di bawah Shikoku
        { lon: 133.00, lat: 31.70 },
        { lon: 131.20, lat: 30.90 },
        { lon: 130.40, lat: 30.50 }, // Lengkungan transisi halus
        { lon: 129.30, lat: 30.30 }, // Memutar di bawah Kyushu
        { lon: 128.20, lat: 30.40 }, // Mencegah sudut kaku di kiri
        { lon: 127.20, lat: 30.50 }, // Memasuki Laut China Timur
        { lon: 125.00, lat: 30.80 },
        { lon: 123.00, lat: 31.00 },
        { lon: 121.50, lat: 31.20 }
      ]
    }
  },
  "Afrika Selatan (Cape Town)": {
    "Ujung Amerika Selatan": {
      color: "#f59e0b",
      coords: [
        { lon: 18.42, lat: -33.91 },
        { lon: 4.00, lat: -35.00 },
        { lon: -12.00, lat: -38.00 },
        { lon: -28.00, lat: -42.00 },
        { lon: -45.00, lat: -47.00 }, // Naik melandai di tengah samudra
        { lon: -61.00, lat: -50.00 },
        { lon: -62.50, lat: -51.20 }, // Melengkung melandai diagonal
        { lon: -63.80, lat: -52.50 }, // Meningkat sudut lengkung
        { lon: -64.60, lat: -53.60 }, // Utara Pulau Staten masuk selat
        { lon: -65.10, lat: -54.60 }, // Corong tengah Strait
        { lon: -66.50, lat: -55.60 }, // Keluar Cape Horn
        { lon: -67.80, lat: -55.85 }  // ⚓ CAPE HORN (Anchor Dot)
      ]
    }
  },
  "Sri Lanka (Colombo)": {
    "India (Mumbai)": {
      color: "#f59e0b",
      coords: [
        { lon: 79.86, lat: 6.92 },
        { lon: 79.00, lat: 6.60 }, // Keluar ke laut lepas Barat
        { lon: 77.80, lat: 5.80 }, // Transisi lengkung halus ke bawah
        { lon: 76.50, lat: 5.50 },
        { lon: 74.50, lat: 7.20 },
        { lon: 73.20, lat: 10.50 },
        { lon: 72.85, lat: 19.00 }
      ]
    }
  },
  "Kanada (Halifax)": {
    "Inggris (London)": {
      color: "#f59e0b",
      coords: [
        { lon: -63.57, lat: 44.65 }, // Halifax
        { lon: -53.00, lat: 46.00 }, // Off Newfoundland
        { lon: -40.00, lat: 48.00 }, // Tengah Atlantik Utara
        { lon: -25.00, lat: 50.00 },
        { lon: -10.00, lat: 51.00 }, // Memasuki Selat Inggris (English Channel)
        { lon: -4.00, lat: 50.50 },
        { lon: -1.30, lat: 50.80 }   // Portsmouth/Southampton edge
      ]
    }
  },
  "Ukraina (Odesa)": {
    "Terusan Suez": {
      color: "#f59e0b",
      coords: [
        { lon: 30.72, lat: 46.48 }, // Odesa
        { lon: 31.50, lat: 44.00 }, // Tengah Laut Hitam
        { lon: 29.50, lat: 41.40 }, // Pintu Masuk Bosporus
        { lon: 29.00, lat: 41.05 }, // Selat Bosporus (Istanbul Center)
        { lon: 28.00, lat: 40.70 }, // Laut Marmara
        { lon: 26.60, lat: 40.20 }, // Selat Dardanelles
        { lon: 26.60, lat: 38.50 }, // Turun Lurus ke Selatan 
        { lon: 26.90, lat: 37.00 }, // Lengkung halus ke kanan 
        { lon: 27.30, lat: 35.50 }, // Bypass Kreta Timur
        { lon: 27.50, lat: 34.00 }, // Keluar ke Mediterania

        { lon: 29.50, lat: 33.20 }, // Transisi ke Suez
        { lon: 31.00, lat: 32.00 }, // MERGE NODE dengan Trunk Utama
        { lon: 32.53, lat: 29.93 }  // Terusan Suez Hub


      ]
    }
  }
};
LinePlaceholder: true
