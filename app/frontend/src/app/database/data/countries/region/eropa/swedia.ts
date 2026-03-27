import { CountryData } from "../../../types";

export const swedia: CountryData = {
  "name_en": "Sweden",
  "capital": "Stockholm",
  "name_id": "Swedia",
  "lon": 15,
  "lat": 62,
  "flag": "🇸🇪",
  "jumlah_penduduk": 10175214,
  "anggaran": 5834,
  "pendapatan_nasional": "16668",
  "religion": "Protestan",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 6,
    "pembangkit_listrik_tenaga_air": 15,
    "pembangkit_listrik_tenaga_surya": 15,
    "pembangkit_listrik_tenaga_uap": 15,
    "pembangkit_listrik_tenaga_gas": 20,
    "pembangkit_listrik_tenaga_angin": 20
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 18,
    "kereta_bawah_tanah": 15,
    "jalur_kereta": 21,
    "jalan_tol": 13,
    "pelabuhan_laut": 2,
    "bandara": 19,
    "terminal_bus": 10,
    "helipad": 11
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
    "semikonduktor": 20,
    "mobil": 36,
    "sepeda_motor": 31,
    "smelter": 2,
    "semen_beton": 28,
    "kayu": 4
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 23,
    "sapi_perah": 19,
    "sapi_potong": 4,
    "domba_kambing": 30
  },
  "sektor_agrikultur": {
    "padi": 37,
    "gandum_jagung": 23,
    "sayur_umbi": 18,
    "kedelai": 33,
    "kelapa_sawit": 23,
    "kopi_teh_kakao": 26
  },
  "sektor_perikanan": {
    "udang_kerang": 29,
    "ikan": 33
  },
  "sektor_olahan_pangan": {
    "air_mineral": 27,
    "gula": 38,
    "roti": 30,
    "pengolahan_daging": 10,
    "mie_instan": 16
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 35
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 25,
    "hangar_tank": 37,
    "akademi_militer": 1,
    "pusat_komando": 22,
    "pangkalan_udara": 15,
    "pangkalan_laut": 26,
    "program_luar_angkasa": 14,
    "pertahanan_siber": 30
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 35,
    "darat": {
        "tank_tempur_utama": 22,
        "apc_ifv": 53,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 30,
        "kapal_destroyer": 84,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 64,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 59,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 350000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 40,
    "intelijen": 9,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 2,
      "misi_sabotase": 33,
      "manajemen_wilayah": 13,
      "program_nuklir": 80 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 6,
        "unit_interceptor_r2": 35,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 14,
          "kamera_pengawas": 6,
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
      "prasekolah": 5,
      "dasar": 30,
      "menengah": 4,
      "lanjutan": 32,
      "universitas": 38,
      "lembaga_pendidikan": 6,
      "laboratorium": 20,
      "observatorium": 30,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 35,
      "literasi": 84
    },
    "kesehatan": {
      "rumah_sakit_besar": 10,
      "rumah_sakit_kecil": 4,
      "pusat_diagnostik": 6,
      "harapan_hidup": 3,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 2,
      "pengadilan": 19,
      "kejaksaan": 22,
      "pos_polisi": 22,
      "armada_mobil_polisi": 5014,
      "akademi_polisi": 1,
      "indeks_korupsi": 79,
      "indeks_keamanan": 76
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 29,
      "sirkuit_balap": 6,
      "stadion": 31,
      "stadion_internasional": 4
  },

  "un_vote": 90,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 76
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 631
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 301
    },
    "lingkungan": {
      "tarif": 39,
      "kepuasan": 88,
      "pendapatan": 543
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 30 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 88 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 414
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 5350,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
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
      "kekuatan_lunak": 3,
      "kekuatan_keras": 2,
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
    "kesehatan": 13,
    "pendidikan": 8,
    "keamanan": 34,
    "keuangan": 8,
    "lingkungan": 60
  }
};

