export interface SektorArmadaKepolisian {
  armada_polisi: {
    patroli_lantas: {
      mobil_patroli_interceptor: number;
      unit_interceptor_r2: number;
      unit_k9: number;
    };
    taktis_khusus: {
      swat: number;
      helikopter_polisi: number;
      anti_huru_hara: number;
    };
    pusat_komando: {
      kantor_polisi: number;
      kamera_pengawas: number;
      pusat_forensik: number;
    };
  };
}

// ===================
// DETAIL TOTAL BANGUNAN: Kepolisian Negara (Total: 13 Jenis)
// ===================
export const armadaPolisiRate: Record<string, any> = {
  // --- PUSAT KOMANDO & PENDIDIKAN ---
  "1_pusat_komando": {
    key: "1_pusat_komando",
    dataKey: "stasiun_komando",
    label: "Markas Besar Polri",
    desc: "Pusat Komando Nasional",
    biaya_pembangunan: 80,
    waktu_pembangunan: 45,
    biaya_pemeliharaan: 12,
    lowongan_kerja: 200,
    power: 150,
    satuan: "Unit"
  },
  "2_akademi_polisi": {
    key: "2_akademi_polisi",
    dataKey: "akademi_polisi",
    label: "Akademi Kepolisian",
    desc: "Pendidikan & Pelatihan",
    biaya_pembangunan: 40,
    waktu_pembangunan: 60,
    biaya_pemeliharaan: 10,
    lowongan_kerja: 100,
    power: 0,
    satuan: "Unit"
  },
  "3_pusat_forensik": {
    key: "3_pusat_forensik",
    dataKey: "forensik",
    label: "Pusat Forensik",
    desc: "Identifikasi & Lab",
    biaya_pembangunan: 30,
    waktu_pembangunan: 90,
    biaya_pemeliharaan: 12,
    lowongan_kerja: 30,
    power: 20,
    satuan: "Unit"
  },

  // --- UNIT PELAYANAN & KEWILAYAHAN ---
  "4_kantor_polisi": {
    key: "4_kantor_polisi",
    dataKey: "pos_polisi",
    label: "Kantor Polisi (Polres)",
    desc: "Komando Wilayah",
    biaya_pembangunan: 25,
    waktu_pembangunan: 60,
    biaya_pemeliharaan: 5,
    lowongan_kerja: 80,
    power: 50,
    satuan: "Unit"
  },
  "5_pos_polisi": {
    key: "5_pos_polisi",
    dataKey: "pos_polisi_kecil",
    label: "Pos Polisi (Polsek)",
    desc: "Pelayanan Publik",
    biaya_pembangunan: 10,
    waktu_pembangunan: 30,
    biaya_pemeliharaan: 2,
    lowongan_kerja: 20,
    power: 15,
    satuan: "Unit"
  },
  "6_network_cctv": {
    key: "6_network_cctv",
    dataKey: "cctv_network",
    label: "Network CCTV",
    desc: "Surveillance Kota",
    biaya_pembangunan: 10,
    waktu_pembangunan: 30,
    biaya_pemeliharaan: 8,
    lowongan_kerja: 5,
    power: 5,
    satuan: "Unit"
  },

  // --- ARMADA & RESPON CEPAT ---
  "7_armada_mobil": {
    key: "7_armada_mobil",
    dataKey: "armada_polisi",
    label: "Armada Mobil Polisi",
    desc: "Logistik & Transportasi",
    biaya_pembangunan: 5,
    waktu_pembangunan: 15,
    biaya_pemeliharaan: 1,
    lowongan_kerja: 5,
    power: 10,
    satuan: "Unit"
  },
  "8_mobil_interceptor": {
    key: "8_mobil_interceptor",
    dataKey: "mobil_patroli_interceptor",
    label: "Mobil Patroli Interceptor",
    desc: "Patroli Lantas",
    biaya_pembangunan: 2,
    waktu_pembangunan: 7,
    biaya_pemeliharaan: 2,
    lowongan_kerja: 2,
    power: 10,
    satuan: "Unit"
  },
  "9_unit_r2": {
    key: "9_unit_r2",
    dataKey: "unit_interceptor_r2",
    label: "Unit Roda Dua",
    desc: "Patroli Cepat",
    biaya_pembangunan: 1,
    waktu_pembangunan: 5,
    biaya_pemeliharaan: 1,
    lowongan_kerja: 1,
    power: 3,
    satuan: "Unit"
  },
  "10_heli_polisi": {
    key: "10_heli_polisi",
    dataKey: "police_heli",
    label: "Helikopter Polisi",
    desc: "Patroli Udara",
    biaya_pembangunan: 15,
    waktu_pembangunan: 60,
    biaya_pemeliharaan: 10,
    lowongan_kerja: 3,
    power: 120,
    satuan: "Unit"
  },

  // --- PASUKAN KHUSUS ---
  "11_unit_k9": {
    key: "11_unit_k9",
    dataKey: "unit_k9",
    label: "Unit K-9",
    desc: "Pelacakan & K-9",
    biaya_pembangunan: 1,
    waktu_pembangunan: 5,
    biaya_pemeliharaan: 1,
    lowongan_kerja: 2,
    power: 5,
    satuan: "Unit"
  },
  "12_swat": {
    key: "12_swat",
    dataKey: "swat",
    label: "Pasukan SWAT (Brimob)",
    desc: "Taktis Khusus",
    biaya_pembangunan: 5,
    waktu_pembangunan: 30,
    biaya_pemeliharaan: 5,
    lowongan_kerja: 10,
    power: 80,
    satuan: "Unit"
  },
  "13_anti_huru_hara": {
    key: "13_anti_huru_hara",
    dataKey: "riot_control",
    label: "Samapta (Huru-Hara)",
    desc: "Ketertiban Umum",
    biaya_pembangunan: 4,
    waktu_pembangunan: 20,
    biaya_pemeliharaan: 2,
    lowongan_kerja: 15,
    power: 30,
    satuan: "Unit"
  },
};
