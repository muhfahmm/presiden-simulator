import { CountryData } from "../../../types";

export const guiana_prancis: CountryData = {
  "name_en": "French Guiana",
  "capital": "Cayenne",
  "name_id": "Guiana prancis",
  "lon": -53,
  "lat": 4,
  "flag": "🇬🇫",
  "jumlah_penduduk": 290691,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
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
    "jalur_sepeda": 29,
    "kereta_bawah_tanah": 4,
    "jalur_kereta": 17,
    "jalan_tol": 20,
    "pelabuhan_laut": 24,
    "bandara": 22,
    "terminal_bus": 39,
    "helipad": 19
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
    "semikonduktor": 12,
    "mobil": 15,
    "sepeda_motor": 12,
    "smelter": 40,
    "semen_beton": 13,
    "kayu": 30
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 10,
    "sapi_perah": 12,
    "sapi_potong": 20,
    "domba_kambing": 23
  },
  "sektor_agrikultur": {
    "padi": 31,
    "gandum_jagung": 20,
    "sayur_umbi": 10,
    "kedelai": 38,
    "kelapa_sawit": 37,
    "kopi_teh_kakao": 11
  },
  "sektor_perikanan": {
    "udang_kerang": 17,
    "ikan": 8
  },
  "sektor_olahan_pangan": {
    "air_mineral": 20,
    "gula": 30,
    "roti": 27,
    "pengolahan_daging": 9,
    "mie_instan": 26
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 13
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 27,
    "gudang_senjata": 27,
    "hangar_tank": 20,
    "akademi_militer": 30,
    "pusat_komando": 4,
    "pangkalan_udara": 27,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 29,
    "pertahanan_siber": 16
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 17,
    "darat": {
        "tank_tempur_utama": 15,
        "apc_ifv": 136,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 31,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 48,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 11,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 170000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 4,
    "intelijen": 16,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 5,
      "misi_mata_mata": 15,
      "misi_sabotase": 10,
      "manajemen_wilayah": 17,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 33,
        "sepeda_motor": 23,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 14,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 17,
          "kamera_pengawas": 18,
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
      "prasekolah": 35,
      "dasar": 18,
      "menengah": 20,
      "lanjutan": 31,
      "universitas": 31,
      "lembaga_pendidikan": 29,
      "laboratorium": 10,
      "observatorium": 31,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 23,
      "literasi": 86
    },
    "kesehatan": {
      "rumah_sakit_besar": 21,
      "rumah_sakit_kecil": 18,
      "pusat_diagnostik": 21,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 7,
      "pengadilan": 4,
      "kejaksaan": 22,
      "pos_polisi": 27,
      "armada_mobil_polisi": 7285,
      "akademi_polisi": 11,
      "indeks_korupsi": 94,
      "indeks_keamanan": 69
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 28,
      "sirkuit_balap": 30,
      "stadion": 31,
      "stadion_internasional": 28
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 4160,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 3,
      "kekuatan_keras": 35,
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
    "kesehatan": 25,
    "pendidikan": 14,
    "keamanan": 13,
    "keuangan": 27,
    "lingkungan": 60
  }
};

