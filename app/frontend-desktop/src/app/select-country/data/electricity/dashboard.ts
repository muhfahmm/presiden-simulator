export const DASHBOARD_LABELS = {
  supply: {
    title: "Pemasukan Listrik (Pasokan)",
    label: "Total Kapasitas Terpasang",
    unit: "MW"
  },
  usage: {
    title: "Penggunaan Listrik (Beban)",
    label: "Total Konsumsi Nasional",
    unit: "MW"
  },
  balance: {
    title: "Neraca Daya",
    label: "Surplus/Defisit",
    unit: "MW"
  }
};

// Data labeling untuk rincian per sektor di UI dashboard
export const SECTOR_USAGE_LABELS = {
  extraction: "Sektor Ekstraksi & Energi",
  manufacturing: "Sektor Industri & Manufaktur",
  pangan: "Sektor Pangan (Tani & Ternak)",
  defense: "Sektor Pertahanan & Keamanan",
  social: "Sektor Sosial & Layanan Publik",
  transportation: "Sektor Transportasi & Logistik"
};
