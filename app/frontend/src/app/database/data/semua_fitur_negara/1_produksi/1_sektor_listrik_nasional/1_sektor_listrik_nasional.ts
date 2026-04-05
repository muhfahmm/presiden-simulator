import { KAPASITAS_LISTRIK_METADATA } from "@/app/database/data/harga_bangunan_negara/1_pembangunan";

export { KAPASITAS_LISTRIK_METADATA };

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
