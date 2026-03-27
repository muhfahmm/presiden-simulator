import { CountryData } from "../../../types";

export const kolombia: CountryData = {
  "name_en": "Colombia",
  "capital": "Bogotá",
  "name_id": "Kolombia",
  "lon": -72,
  "lat": 4,
  "flag": "🇨🇴",
  "jumlah_penduduk": 49648685,
  "anggaran": 3306,
  "pendapatan_nasional": "9445",
  "religion": "Katolik",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 60,
    "pembangkit_listrik_tenaga_surya": 5,
    "pembangkit_listrik_tenaga_uap": 15,
    "pembangkit_listrik_tenaga_gas": 15,
    "pembangkit_listrik_tenaga_angin": 4
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 30,
    "kereta_bawah_tanah": 15,
    "jalur_kereta": 19,
    "jalan_tol": 40,
    "pelabuhan_laut": 26,
    "bandara": 33,
    "terminal_bus": 39,
    "helipad": 3
    },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 1,
    "mobil": 27,
    "sepeda_motor": 10,
    "smelter": 13,
    "semen_beton": 32,
    "kayu": 12
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 20,
    "sapi_perah": 1,
    "sapi_potong": 4,
    "domba_kambing": 36
  },
  "sektor_agrikultur": {
    "padi": 13,
    "gandum_jagung": 8,
    "sayur_umbi": 23,
    "kedelai": 27,
    "kelapa_sawit": 22,
    "kopi_teh_kakao": 12
  },
  "sektor_perikanan": {
    "udang_kerang": 24,
    "ikan": 15
  },
  "sektor_olahan_pangan": {
    "air_mineral": 40,
    "gula": 34,
    "roti": 18,
    "pengolahan_daging": 40,
    "mie_instan": 19
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 19
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 20,
    "gudang_senjata": 12,
    "hangar_tank": 34,
    "akademi_militer": 2,
    "pusat_komando": 10,
    "pangkalan_udara": 11,
    "pangkalan_laut": 32,
    "program_luar_angkasa": 40,
    "pertahanan_siber": 39
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 26,
    "darat": {
        "tank_tempur_utama": 37,
        "apc_ifv": 8,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 12,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 25,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 30,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 260000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 17,
    "intelijen": 39,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 2,
      "misi_mata_mata": 17,
      "misi_sabotase": 2,
      "manajemen_wilayah": 22,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 13,
        "unit_interceptor_r2": 4,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 4,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 5,
          "kamera_pengawas": 17,
          "pusat_forensik": 1
        }
    }
  },
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 27,
      "dasar": 18,
      "menengah": 2,
      "lanjutan": 2,
      "universitas": 38,
      "lembaga_pendidikan": 2,
      "laboratorium": 18,
      "observatorium": 37,
      "pusat_penelitian": 32,
      "pusat_pengembangan": 11,
      "literasi": 73
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 3,
      "pusat_diagnostik": 28,
      "harapan_hidup": 32,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 19,
      "kejaksaan": 33,
      "pos_polisi": 17,
      "armada_mobil_polisi": 6668,
      "akademi_polisi": 26,
      "indeks_korupsi": 52,
      "indeks_keamanan": 94
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 9,
      "sirkuit_balap": 29,
      "stadion": 25,
      "stadion_internasional": 33
  },

  "un_vote": 173,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 34
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 120
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 93
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 136
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 50 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 60
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 78950,
    "harga_pendidikan": 387120
  },

    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "sekutu": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 27,
      "kekuatan_keras": 15,
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
    "kesehatan": 22,
    "pendidikan": 21,
    "keamanan": 5,
    "keuangan": 26,
    "lingkungan": 60
  }
};

