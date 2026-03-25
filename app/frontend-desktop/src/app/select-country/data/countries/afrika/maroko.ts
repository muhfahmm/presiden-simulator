import { CountryData } from "../../types";

export const maroko: CountryData = {
  "name_en": "Morocco",
  "capital": "Rabat",
  "name_id": "Maroko",
  "lon": -5,
  "lat": 32,
  "flag": "🇲🇦",
  "jumlah_penduduk": 36029138,
  "anggaran": 1313,
  "pendapatan_nasional": "3750",
  "religion": "Islam",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 27,
    "pembangkit_air": 28,
    "pembangkit_nuklir": 9,
    "jaringan_listrik": 72,
    "pembangkit_surya": 28,
    "pembangkit_termal": 6,
    "pembangkit_angin": 9
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 37,
    "jalur_sepeda": 32,
    "terminal_bus": 19,
    "helipad": 26,
    "jalan_tol": 6,
    "cakupan_internet": 89,
    "jalur_kereta": 16,
    "kualitas_jalan": 63,
    "pelabuhan_laut": 36,
    "kereta_bawah_tanah": 39,
    "indeks_teknologi": 68,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 10,
    "batu_bara": 35,
    "tembaga": 18,
    "gas_alam": 23,
    "emas": 20,
    "bijih_besi": 3,
    "litium": 36,
    "nikel": 18,
    "minyak_bumi": 29,
    "logam_tanah_jarang": 38,
    "garam": 2,
    "kekuatan": 29.660809349923973,
    "uranium": 6
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 34,
    "mobil": 23,
    "semen_beton": 37,
    "pupuk": 31,
    "mie_instan": 31,
    "pengolahan_daging": 1,
    "air_mineral": 37,
    "sepeda_motor": 13,
    "farmasi": 24,
    "semikonduktor": 33,
    "smelter": 11,
    "kekuatan": 3.076011687404966,
    "gula": 18,
    "kayu": 35
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 18,
    "ayam": 16,
    "sapi_perah": 16,
    "ikan": 1,
    "unggas": 39,
    "domba_kambing": 1,
    "kerang": 3,
    "udang": 12,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 10,
    "kopi": 16,
    "jagung": 1,
    "kelapa_sawit": 25,
    "beras": 32,
    "kedelai": 22,
    "kekuatan": 20.660809349923973,
    "tebu": 15,
    "teh": 2,
    "umbi_umbian": 20,
    "sayur_sayuran": 65,
    "gandum": 17
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 11,
    "gudang_senjata": 17,
    "hangar_tank": 22,
    "akademi_militer": 23,
    "pusat_komando": 13,
    "pangkalan_udara": 17,
    "pangkalan_laut": 31,
    "program_luar_angkasa": 13,
    "pertahanan_siber": 15,
    "anggaran_pertahanan": 375,
    "personel": 26033,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 19,
    "infanteri": 39,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 77,
        "apc": 129,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 35,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 121,
        "helikopter_serang": 72,
        "pesawat_pengintai": 2
  },
      "total_unit": 4,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 5,
      "jaringan_radar": 0,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 29,
          "sepeda_motor": 23,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 10,
          "kamera_pengawas": 40,
          "pusat_forensik": 1
  },
        "waktu_respon": 39,
        "kepercayaan_publik": 50
  },
    "intelijen": 38,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 29,
      "misi_mata_mata": 23,
      "misi_sabotase": 3,
      "manajemen_wilayah": 4,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 13,
      "sd": 17,
      "smp": 39,
      "sma": 22,
      "universitas": 18,
      "lembaga_pendidikan": 23,
      "laboratorium": 40,
      "observatorium": 21,
      "pusat_penelitian": 35,
      "pusat_pengembangan": 33,
      "literasi": 66,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 15,
      "rumah_sakit_kecil": 40,
      "pusat_diagnostik": 36,
      "tempat_tidur_rs": 2249,
      "harapan_hidup": 40,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 21,
      "sirkuit_balap": 22,
      "stadion": 3,
      "stadion_internasional": 35,
      "skor_olimpiade": 25,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 25,
      "pengadilan": 9,
      "kejaksaan": 27,
      "pos_polisi": 2,
      "armada_mobil_polisi": 2738,
      "akademi_polisi": 40,
      "indeks_korupsi": 70,
      "indeks_keamanan": 60
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 67
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 102
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 127
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 73
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 51
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 7 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 20 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 2600,
    "harga_obat": 78950,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 67,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 7,
    "komersial": 30,
    "industri": 53
  },
  // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "sekutu": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
  },
    "organisasi_internasional": [
      {
        "name": "PBB (UN)",
        "role": "Anggota"
  },
      {
        "name": "WHO",
        "role": "Anggota"
  },
      {
        "name": "WTO",
        "role": "Anggota"
  }
    ]
  },
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================

  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 29,
    "keamanan": 9,
    "keuangan": 14,
    "lingkungan": 60
  }
};
