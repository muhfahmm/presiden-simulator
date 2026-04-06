export interface SektorArmadaKepolisian {
  armada_polisi: {
    markas_besar_polri: number;
    akademi_kepolisian: number;
    pusat_forensik: number;
    kantor_polisi: number;
    pos_polisi: number;
    network_cctv: number;
    armada_mobil_polisi: number;
    mobil_patroli_interceptor: number;
    unit_roda_dua: number;
    helikopter_polisi: number;
    unit_k9: number;
    pasukan_swat: number;
    samapta: number;
  };
}

// ===================
// DETAIL TOTAL BANGUNAN: Kepolisian Negara (Total: 13 Jenis)
// ===================
export const armadaPolisiRate: Record<string, any> = {
  // --- PUSAT KOMANDO & PENDIDIKAN ---
  "1_pusat_komando": {
    key: "1_pusat_komando",
    dataKey: "markas_besar_polri",
    label: "Markas Besar Polisi Nasional",
    desc: "Pusat Komando & Pengendali Keamanan Nasional",
    deskripsi: "Pusat Komando & Pengendali Keamanan Nasional",
    biaya_pembangunan: 450000,
    cost: 450000,
    waktu_pembangunan: 90,
    buildTime: 90,
    biaya_pemeliharaan: 25000,
    maintenanceCost: 25000,
    lowongan_kerja: 45000,
    konsumsi_listrik: 850,
    consumption: 850,
    satuan: "Unit"
  },
  "2_akademi_polisi": {
    key: "2_akademi_polisi",
    dataKey: "akademi_kepolisian",
    label: "Akademi Kepolisian Nasional",
    desc: "Pusat Pendidikan & Pelatihan Perwira",
    deskripsi: "Pusat Pendidikan & Pelatihan Perwira",
    biaya_pembangunan: 120000,
    cost: 120000,
    waktu_pembangunan: 60,
    buildTime: 60,
    biaya_pemeliharaan: 12000,
    maintenanceCost: 12000,
    lowongan_kerja: 8500,
    konsumsi_listrik: 350,
    consumption: 350,
    satuan: "Unit"
  },
  "3_pusat_forensik": {
    key: "3_pusat_forensik",
    dataKey: "pusat_forensik",
    label: "Pusat Lab Forensik Nasional",
    desc: "Identifikasi Digital & Fisik Terpadu",
    deskripsi: "Identifikasi Digital & Fisik Terpadu",
    biaya_pembangunan: 85000,
    cost: 85000,
    waktu_pembangunan: 45,
    buildTime: 45,
    biaya_pemeliharaan: 8500,
    maintenanceCost: 8500,
    lowongan_kerja: 2500,
    konsumsi_listrik: 150,
    consumption: 150,
    satuan: "Unit"
  },

  // --- UNIT PELAYANAN & KEWILAYAHAN ---
  "4_kantor_polisi": {
    key: "4_kantor_polisi",
    dataKey: "kantor_polisi",
    label: "Kantor Polisi Resor (Polres)",
    desc: "Pusat Komando Keamanan Wilayah",
    deskripsi: "Pusat Komando Keamanan Wilayah",
    biaya_pembangunan: 65000,
    cost: 65000,
    waktu_pembangunan: 45,
    buildTime: 45,
    biaya_pemeliharaan: 4500,
    maintenanceCost: 4500,
    lowongan_kerja: 5500,
    konsumsi_listrik: 120,
    consumption: 120,
    satuan: "Unit"
  },
  "5_pos_polisi": {
    key: "5_pos_polisi",
    dataKey: "pos_polisi",
    label: "Unit Pelayanan Polsek",
    desc: "Pelayanan Keamanan Masyarakat Terpadu",
    deskripsi: "Pelayanan Keamanan Masyarakat Terpadu",
    biaya_pembangunan: 25000,
    cost: 25000,
    waktu_pembangunan: 22,
    buildTime: 22,
    biaya_pemeliharaan: 1500,
    maintenanceCost: 1500,
    lowongan_kerja: 1200,
    konsumsi_listrik: 45,
    consumption: 45,
    satuan: "Unit"
  },
  "6_network_cctv": {
    key: "6_network_cctv",
    dataKey: "network_cctv",
    label: "Jaringan Surveillance Kota",
    desc: "Sistem Pengawasan CCTV Terintegrasi",
    deskripsi: "Sistem Pengawasan CCTV Terintegrasi",
    biaya_pembangunan: 45000,
    cost: 45000,
    waktu_pembangunan: 30,
    buildTime: 30,
    biaya_pemeliharaan: 8500,
    maintenanceCost: 8500,
    lowongan_kerja: 800,
    konsumsi_listrik: 85,
    consumption: 85,
    satuan: "Unit"
  },

  // --- ARMADA & RESPON CEPAT ---
  "7_armada_mobil": {
    key: "7_armada_mobil",
    dataKey: "armada_mobil_polisi",
    label: "Armada Mobil Patroli",
    desc: "Unit Reaksi Cepat & Logistik Polisi",
    deskripsi: "Unit Reaksi Cepat & Logistik Polisi",
    biaya_pembangunan: 15000,
    cost: 15000,
    waktu_pembangunan: 15,
    buildTime: 15,
    biaya_pemeliharaan: 800,
    maintenanceCost: 800,
    lowongan_kerja: 500,
    konsumsi_listrik: 10,
    consumption: 10,
    satuan: "Unit"
  },
  "8_mobil_interceptor": {
    key: "8_mobil_interceptor",
    dataKey: "mobil_patroli_interceptor",
    label: "Mobil Patroli Interceptor",
    desc: "Unit Pengejaran & Patroli Jalan Raya",
    deskripsi: "Unit Pengejaran & Patroli Jalan Raya",
    biaya_pembangunan: 8500,
    cost: 8500,
    waktu_pembangunan: 7,
    buildTime: 7,
    biaya_pemeliharaan: 500,
    maintenanceCost: 500,
    lowongan_kerja: 200,
    konsumsi_listrik: 10,
    consumption: 10,
    satuan: "Unit"
  },
  "9_unit_r2": {
    key: "9_unit_r2",
    dataKey: "unit_roda_dua",
    label: "Unit Patroli Roda Dua",
    desc: "Patroli Gesit & Respon Cepat Kota",
    deskripsi: "Patroli Gesit & Respon Cepat Kota",
    biaya_pembangunan: 4500,
    cost: 4500,
    waktu_pembangunan: 5,
    buildTime: 5,
    biaya_pemeliharaan: 200,
    maintenanceCost: 200,
    lowongan_kerja: 100,
    konsumsi_listrik: 5,
    consumption: 5,
    satuan: "Unit"
  },
  "10_heli_polisi": {
    key: "10_heli_polisi",
    dataKey: "helikopter_polisi",
    label: "Helikopter Patroli Polisi",
    desc: "Pengawasan & Respon Taktis Udara",
    deskripsi: "Pengawasan & Respon Taktis Udara",
    biaya_pembangunan: 120000,
    cost: 120000,
    waktu_pembangunan: 45,
    buildTime: 45,
    biaya_pemeliharaan: 12000,
    maintenanceCost: 12000,
    lowongan_kerja: 1500,
    konsumsi_listrik: 120,
    consumption: 120,
    satuan: "Unit"
  },

  // --- PASUKAN KHUSUS ---
  "11_unit_k9": {
    key: "11_unit_k9",
    dataKey: "unit_k9",
    label: "Unit K-9 Nasional",
    desc: "Pasukan Pelacak & K-9 Taktis",
    biaya_pembangunan: 8500,
    waktu_pembangunan: 5,
    biaya_pemeliharaan: 800,
    lowongan_kerja: 800,
    konsumsi_listrik: 25,
    satuan: "Unit"
  },
  "12_swat": {
    key: "12_swat",
    dataKey: "pasukan_swat",
    label: "Pasukan Taktis Khusus (Brimob)",
    desc: "Unit Anti-Teror & Respon Taktis Tinggi",
    biaya_pembangunan: 85000,
    waktu_pembangunan: 45,
    biaya_pemeliharaan: 12000,
    lowongan_kerja: 8500,
    konsumsi_listrik: 150,
    satuan: "Unit"
  },
  "13_anti_huru_hara": {
    key: "13_anti_huru_hara",
    dataKey: "samapta",
    label: "Pasukan Samapta & Pengamanan",
    desc: "Pemeliharaan Ketertiban & Anti Huru-Hara",
    biaya_pembangunan: 45000,
    waktu_pembangunan: 30,
    biaya_pemeliharaan: 4500,
    lowongan_kerja: 12000,
    konsumsi_listrik: 85,
    satuan: "Unit"
  },
};
