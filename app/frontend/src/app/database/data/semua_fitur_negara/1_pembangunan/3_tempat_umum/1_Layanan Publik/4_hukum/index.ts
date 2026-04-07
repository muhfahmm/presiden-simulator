export interface HukumData {
  pusat_bantuan_hukum?: number;
  pengadilan?: number;
  kejaksaan?: number;
  pos_polisi?: number;
  armada_mobil_polisi?: number;
  akademi_polisi?: number;
  indeks_korupsi?: number;
  indeks_keamanan?: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Hukum & Keamanan (Total: 2 Bangunan)
// ===================
export const hukumRate: Record<string, any> = {
  "14_kejaksaan_court": {
    key: "14_kejaksaan_court",
    dataKey: "kejaksaan_court",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Peradilan & Kejaksaan Agung",
    waktu_pembangunan: 30,
    biaya_pembangunan: 85000000,
    lowongan_kerja: 5500,
    konsumsi_listrik: 150
  },
  "15_legal_aid": {
    key: "15_legal_aid",
    dataKey: "legal_aid",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Bantuan Hukum Nasional",
    waktu_pembangunan: 15,
    biaya_pembangunan: 25000000,
    lowongan_kerja: 1200,
    konsumsi_listrik: 45
  },
};
