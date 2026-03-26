import { CountryData } from "../../types/_index";

export const iran: CountryData = {
  "name_en": "Iran",
  "capital": "Tehran",
  "name_id": "Iran",
  "lon": 53,
  "lat": 32,
  "flag": "🇮🇷",
  "jumlah_penduduk": 81800269,
  "anggaran": 3598,
  "pendapatan_nasional": "10279",
  "religion": "Islam",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 1,
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
    "jalur_sepeda": 8,
    "kereta_bawah_tanah": 27,
    "jalur_kereta": 20,
    "jalan_tol": 35,
    "pelabuhan_laut": 22,
    "bandara": 30,
    "terminal_bus": 21,
    "helipad": 33
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
    "semikonduktor": 6,
    "mobil": 20,
    "sepeda_motor": 9,
    "smelter": 17,
    "semen_beton": 11,
    "kayu": 4
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 29.5,
    "sapi_perah": 20,
    "sapi_potong": 9,
    "domba_kambing": 10
  },
  "sektor_agrikultur": {
    "padi": 21,
    "gandum_jagung": 9.5,
    "sayur_umbi": 19.5,
    "kedelai": 7,
    "kelapa_sawit": 16,
    "kopi_teh_kakao": 27.7
  },
  "sektor_perikanan": {
    "udang_kerang": 17.5,
    "ikan": 29
  },
  "sektor_olahan_pangan": {
    "air_mineral": 13,
    "gula": 28,
    "roti": 30,
    "pengolahan_daging": 7,
    "mie_instan": 39
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 27
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 18,
    "gudang_senjata": 17,
    "hangar_tank": 4,
    "akademi_militer": 5,
    "pusat_komando": 15,
    "pangkalan_udara": 16,
    "pangkalan_laut": 5,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 13
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 26,
    "darat": {
        "tank_tempur_utama": 12,
        "apc_ifv": 16,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 8,
        "kapal_destroyer": 1,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 13,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 35,
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
    "waktu_respon": 39,
    "intelijen": 13,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 28,
      "misi_mata_mata": 19,
      "misi_sabotase": 6,
      "manajemen_wilayah": 24,
      "program_nuklir": 80 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 5,
        "sepeda_motor": 8,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 18,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 29,
          "kamera_pengawas": 12,
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
      "prasekolah": 33,
      "dasar": 2,
      "menengah": 13,
      "lanjutan": 25,
      "universitas": 5,
      "lembaga_pendidikan": 16,
      "laboratorium": 17,
      "observatorium": 6,
      "pusat_penelitian": 12,
      "pusat_pengembangan": 35,
      "literasi": 71
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 30,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 16,
      "kejaksaan": 35,
      "pos_polisi": 3,
      "armada_mobil_polisi": 9271,
      "akademi_polisi": 17,
      "indeks_korupsi": 74,
      "indeks_keamanan": 86
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 39,
      "sirkuit_balap": 34,
      "stadion": 33,
      "stadion_internasional": 36
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 267
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 395
    },
    "penghasilan": {
      "tarif": 7,
      "kepuasan": 61,
      "pendapatan": 60
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 74
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 137
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 18 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 54 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 131
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
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
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 14,
      "kekuatan_keras": 38,
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
    "kesehatan": 5,
    "pendidikan": 16,
    "keamanan": 24,
    "keuangan": 4,
    "lingkungan": 60
  }
};

