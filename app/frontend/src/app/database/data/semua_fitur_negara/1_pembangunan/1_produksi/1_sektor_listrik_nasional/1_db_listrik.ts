// ===================
// DETAIL TOTAL BANGUNAN: Listrik (Total: 6 Bangunan)
// ===================
export const KAPASITAS_LISTRIK_METADATA = {
  "1_pembangkit_listrik_tenaga_nuklir": {
    key: "1_pembangkit_listrik_tenaga_nuklir",
    dataKey: "pembangkit_listrik_tenaga_nuklir",
    produksi: 1000,
    satuan: "MW",
    deskripsi: "PLTN (Fisi Nuklir)",
    biaya_pemeliharaan: 80,
    waktu_pembangunan: 365,
    biaya_pembangunan: 150000,
    lowongan_kerja: 800,
    konsumsi_listrik: 0
  },
  "2_pembangkit_listrik_tenaga_air": {
    key: "2_pembangkit_listrik_tenaga_air",
    dataKey: "pembangkit_listrik_tenaga_air",
    produksi: 100,
    satuan: "MW",
    deskripsi: "PLTA (Hidroelektrik)",
    biaya_pemeliharaan: 15,
    waktu_pembangunan: 180,
    biaya_pembangunan: 15000,
    lowongan_kerja: 150,
    konsumsi_listrik: 0
  },
  "3_pembangkit_listrik_tenaga_surya": {
    key: "3_pembangkit_listrik_tenaga_surya",
    dataKey: "pembangkit_listrik_tenaga_surya",
    produksi: 20,
    satuan: "MW",
    deskripsi: "PLTS (Panel Surya)",
    biaya_pemeliharaan: 2,
    waktu_pembangunan: 30,
    biaya_pembangunan: 10000,
    lowongan_kerja: 40,
    konsumsi_listrik: 0
  },
  "4_pembangkit_listrik_tenaga_uap": {
    key: "4_pembangkit_listrik_tenaga_uap",
    dataKey: "pembangkit_listrik_tenaga_uap",
    produksi: 500,
    satuan: "MW",
    deskripsi: "PLTU (Tenaga Uap)",
    biaya_pemeliharaan: 40,
    waktu_pembangunan: 120,
    biaya_pembangunan: 25000,
    lowongan_kerja: 450,
    konsumsi_listrik: 0
  },
  "5_pembangkit_listrik_tenaga_gas": {
    key: "5_pembangkit_listrik_tenaga_gas",
    dataKey: "pembangkit_listrik_tenaga_gas",
    produksi: 300,
    satuan: "MW",
    deskripsi: "PLTG (Gas Alam)",
    biaya_pemeliharaan: 25,
    waktu_pembangunan: 90,
    biaya_pembangunan: 25000,
    lowongan_kerja: 250,
    konsumsi_listrik: 0
  },
  "6_pembangkit_listrik_tenaga_angin": {
    key: "6_pembangkit_listrik_tenaga_angin",
    dataKey: "pembangkit_listrik_tenaga_angin",
    produksi: 10,
    satuan: "MW",
    deskripsi: "PLTB (Angin)",
    biaya_pemeliharaan: 3,
    waktu_pembangunan: 45,
    biaya_pembangunan: 15000,
    lowongan_kerja: 20,
    konsumsi_listrik: 0
  }
};

export interface SektorListrik {
  pembangkit_listrik_tenaga_nuklir?: number;
  pembangkit_listrik_tenaga_air?: number;
  pembangkit_listrik_tenaga_surya?: number;
  pembangkit_listrik_tenaga_uap?: number;
  pembangkit_listrik_tenaga_gas?: number;
  pembangkit_listrik_tenaga_angin?: number;
}

export interface ElectricityData {
  pembangkit_listrik_tenaga_nuklir: number;
  pembangkit_listrik_tenaga_air: number;
  pembangkit_listrik_tenaga_surya: number;
  pembangkit_listrik_tenaga_uap: number;
  pembangkit_listrik_tenaga_gas: number;
  pembangkit_listrik_tenaga_angin: number;
}

export const DASHBOARD_LABELS = {
  supply: { title: "Pemasukan Listrik (Pasokan)", label: "Total Kapasitas Terpasang", unit: "MW" },
  usage: { title: "Penggunaan Listrik (Beban)", label: "Total Konsumsi Nasional", unit: "MW" },
  balance: { title: "Neraca Daya", label: "Surplus/Defisit", unit: "MW" }
};

export const SECTOR_USAGE_LABELS = {
  extraction: "Sektor Ekstraksi & Energi",
  manufacturing: "Sektor Industri & Manufaktur",
  pangan: "Sektor Pangan (Tani & Ternak)",
  defense: "Sektor Pertahanan & Keamanan",
  social: "Sektor Sosial & Layanan Publik",
  transportation: "Sektor Transportasi & Logistik"
};
