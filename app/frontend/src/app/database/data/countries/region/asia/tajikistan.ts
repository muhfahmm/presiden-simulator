import { CountryData } from "../../../types";

export const tajikistan: CountryData = {
  "name_en": "Tajikistan",
  "capital": "Dushanbe",
  "name_id": "Tajikistan",
  "lon": 71,
  "lat": 39,
  "flag": "🇹🇯",
  "jumlah_penduduk": 9100837,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 15,
    "pembangkit_listrik_tenaga_surya": 10,
    "pembangkit_listrik_tenaga_uap": 50,
    "pembangkit_listrik_tenaga_gas": 20,
    "pembangkit_listrik_tenaga_angin": 3
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 29,
    "kereta_bawah_tanah": 7,
    "jalur_kereta": 17,
    "jalan_tol": 9,
    "pelabuhan_laut": 6,
    "bandara": 27,
    "terminal_bus": 21,
    "helipad": 15
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
    "semikonduktor": 16,
    "mobil": 33,
    "sepeda_motor": 23,
    "smelter": 15,
    "semen_beton": 5,
    "kayu": 5
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 4,
    "sapi_perah": 34,
    "sapi_potong": 25,
    "domba_kambing": 36
  },
  "sektor_agrikultur": {
    "padi": 19,
    "gandum_jagung": 14,
    "sayur_umbi": 27,
    "kedelai": 23,
    "kelapa_sawit": 37,
    "kopi_teh_kakao": 20
  },
  "sektor_perikanan": {
    "udang_kerang": 21,
    "ikan": 33
  },
  "sektor_olahan_pangan": {
    "air_mineral": 27,
    "gula": 20,
    "roti": 38,
    "pengolahan_daging": 3,
    "mie_instan": 19
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 6
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 13,
    "gudang_senjata": 10,
    "hangar_tank": 32,
    "akademi_militer": 20,
    "pusat_komando": 1,
    "pangkalan_udara": 23,
    "pangkalan_laut": 36,
    "program_luar_angkasa": 25,
    "pertahanan_siber": 23
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 39,
    "darat": {
        "tank_tempur_utama": 47,
        "apc_ifv": 146,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 75,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 198,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 159,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 390000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 6,
    "intelijen": 9,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 14,
      "misi_mata_mata": 21,
      "misi_sabotase": 24,
      "manajemen_wilayah": 1,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 33,
        "unit_interceptor_r2": 7,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 18,
          "kamera_pengawas": 30,
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
      "prasekolah": 1,
      "dasar": 25,
      "menengah": 23,
      "lanjutan": 22,
      "universitas": 28,
      "lembaga_pendidikan": 40,
      "laboratorium": 38,
      "observatorium": 1,
      "pusat_penelitian": 30,
      "pusat_pengembangan": 12,
      "literasi": 79
    },
    "kesehatan": {
      "rumah_sakit_besar": 40,
      "rumah_sakit_kecil": 24,
      "pusat_diagnostik": 27,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 35,
      "pengadilan": 23,
      "kejaksaan": 21,
      "pos_polisi": 26,
      "armada_mobil_polisi": 3913,
      "akademi_polisi": 29,
      "indeks_korupsi": 54,
      "indeks_keamanan": 95
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 2,
      "sirkuit_balap": 14,
      "stadion": 36,
      "stadion_internasional": 6
  },

  "un_vote": 177,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 11
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 33,
      "kekuatan_keras": 36,
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
    "kesehatan": 35,
    "pendidikan": 8,
    "keamanan": 12,
    "keuangan": 29,
    "lingkungan": 60
  }
};

