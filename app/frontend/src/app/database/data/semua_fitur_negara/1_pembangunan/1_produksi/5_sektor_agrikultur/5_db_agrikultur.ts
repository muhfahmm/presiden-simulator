// ===================
// DETAIL TOTAL BANGUNAN: Agrikultur (Total: 14 Bangunan)
// ===================
export const agrikulturRate = {
  "1_sawah_padi": {
    key: "1_sawah_padi",
    dataKey: "padi",
    deskripsi: "Pertanian Padi",
    produksi: 95000,
    satuan: "KG",
    biaya_pemeliharaan: 1500,
    waktu_pembangunan: 45,
    biaya_pembangunan: 32000,
    lowongan_kerja: 8500,
    konsumsi_listrik: 12
  },
  "2_ladang_gandum": {
    key: "2_ladang_gandum",
    dataKey: "gandum",
    deskripsi: "Pertanian Gandum",
    produksi: 75000,
    satuan: "KG",
    biaya_pemeliharaan: 1200,
    waktu_pembangunan: 45,
    biaya_pembangunan: 35000,
    lowongan_kerja: 6000,
    item: "Gandum",
    konsumsi_listrik: 10
  },
  "3_ladang_jagung": {
    key: "3_ladang_jagung",
    dataKey: "jagung",
    deskripsi: "Pertanian Jagung",
    produksi: 82000,
    satuan: "KG",
    biaya_pemeliharaan: 1100,
    waktu_pembangunan: 35,
    biaya_pembangunan: 28000,
    lowongan_kerja: 5000,
    konsumsi_listrik: 8
  },
  "4_ladang_umbi": {
    key: "4_ladang_umbi",
    dataKey: "umbi",
    deskripsi: "Pertanian Umbi-umbian",
    produksi: 120000,
    satuan: "KG",
    biaya_pemeliharaan: 800,
    waktu_pembangunan: 30,
    biaya_pembangunan: 22000,
    lowongan_kerja: 4500,
    konsumsi_listrik: 5
  },
  "5_ladang_kedelai": {
    key: "5_ladang_kedelai",
    dataKey: "kedelai",
    deskripsi: "Pertanian Kedelai",
    produksi: 55000,
    satuan: "KG",
    biaya_pemeliharaan: 950,
    waktu_pembangunan: 30,
    biaya_pembangunan: 26000,
    lowongan_kerja: 4000,
    konsumsi_listrik: 10
  },
  "6_perkebunan_sawit": {
    key: "6_perkebunan_sawit",
    dataKey: "kelapa_sawit",
    deskripsi: "Perkebunan Kelapa Sawit",
    produksi: 150000,
    satuan: "LITER",
    biaya_pemeliharaan: 4500,
    waktu_pembangunan: 180,
    biaya_pembangunan: 120000,
    lowongan_kerja: 18000,
    konsumsi_listrik: 45
  },
  "7_perkebunan_teh": {
    key: "7_perkebunan_teh",
    dataKey: "teh",
    deskripsi: "Perkebunan Teh",
    produksi: 15000,
    satuan: "KG",
    biaya_pemeliharaan: 1800,
    waktu_pembangunan: 90,
    biaya_pembangunan: 38000,
    lowongan_kerja: 12000,
    konsumsi_listrik: 15
  },
  "8_perkebunan_kopi": {
    key: "8_perkebunan_kopi",
    dataKey: "kopi",
    deskripsi: "Perkebunan Kopi",
    produksi: 12000,
    satuan: "KG",
    biaya_pemeliharaan: 2100,
    waktu_pembangunan: 120,
    biaya_pembangunan: 45000,
    lowongan_kerja: 10000,
    konsumsi_listrik: 18
  },
  "9_perkebunan_kakao": {
    key: "9_perkebunan_kakao",
    dataKey: "kakao",
    deskripsi: "Perkebunan Kakao",
    produksi: 10000,
    satuan: "KG",
    biaya_pemeliharaan: 2400,
    waktu_pembangunan: 150,
    biaya_pembangunan: 48000,
    lowongan_kerja: 9000,
    konsumsi_listrik: 20
  },
  "10_perkebunan_tebu": {
    key: "10_perkebunan_tebu",
    dataKey: "tebu",
    deskripsi: "Perkebunan Tebu",
    produksi: 85000,
    satuan: "KG",
    biaya_pemeliharaan: 1600,
    waktu_pembangunan: 90,
    biaya_pembangunan: 35000,
    lowongan_kerja: 11000,
    konsumsi_listrik: 22
  },
  "11_kebun_sayur": {
    key: "11_kebun_sayur",
    dataKey: "sayur",
    deskripsi: "Pertanian Sayur Mayur",
    produksi: 65000,
    satuan: "KG",
    biaya_pemeliharaan: 900,
    waktu_pembangunan: 15,
    biaya_pembangunan: 20000,
    lowongan_kerja: 5500,
    konsumsi_listrik: 10
  },
  "12_perkebunan_karet": {
    key: "12_perkebunan_karet",
    dataKey: "karet",
    deskripsi: "Perkebunan Karet",
    produksi: 35000,
    satuan: "KG",
    biaya_pemeliharaan: 2800,
    waktu_pembangunan: 120,
    biaya_pembangunan: 55000,
    lowongan_kerja: 12000,
    konsumsi_listrik: 25
  },
  "13_perkebunan_kapas": {
    key: "13_perkebunan_kapas",
    dataKey: "kapas",
    deskripsi: "Perkebunan Kapas",
    produksi: 60000,
    satuan: "KG",
    biaya_pemeliharaan: 1400,
    waktu_pembangunan: 60,
    biaya_pembangunan: 30000,
    lowongan_kerja: 8000,
    konsumsi_listrik: 15
  },
  "14_perkebunan_tembakau": {
    key: "14_perkebunan_tembakau",
    dataKey: "tembakau",
    deskripsi: "Perkebunan Tembakau",
    produksi: 25000,
    satuan: "KG",
    biaya_pemeliharaan: 2200,
    waktu_pembangunan: 90,
    biaya_pembangunan: 42000,
    lowongan_kerja: 10000,
    konsumsi_listrik: 18
  }
};

export interface SektorAgrikultur {
  padi?: number;
  gandum?: number;
  jagung?: number;
  sayur?: number;
  umbi?: number;
  kedelai?: number;
  kelapa_sawit?: number;
  teh?: number;
  kopi?: number;
  kakao?: number;
  tebu?: number;
  karet?: number;
  kapas?: number;
  tembakau?: number;
}

export interface AgricultureData {
  padi: number;
  gandum: number;
  jagung: number;
  sayur: number;
  umbi: number;
  kedelai: number;
  kelapa_sawit: number;
  teh: number;
  kopi: number;
  kakao: number;
  tebu: number;
  karet: number;
  kapas: number;
  tembakau: number;
}
