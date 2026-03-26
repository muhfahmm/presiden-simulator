import { CountryData } from "../../../types";

export const guyana: CountryData = {
  "name_en": "Guyana",
  "capital": "Georgetown",
  "name_id": "Guyana",
  "lon": -59,
  "lat": 5,
  "flag": "🇬🇾",
  "jumlah_penduduk": 779004,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Protestan",
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
    "jalur_sepeda": 27,
    "kereta_bawah_tanah": 11,
    "jalur_kereta": 10,
    "jalan_tol": 14,
    "pelabuhan_laut": 14,
    "bandara": 23,
    "terminal_bus": 3,
    "helipad": 16
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
    "semikonduktor": 34,
    "mobil": 5,
    "sepeda_motor": 4,
    "smelter": 24,
    "semen_beton": 6,
    "kayu": 25
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 8.5,
    "sapi_perah": 35,
    "sapi_potong": 15,
    "domba_kambing": 17
  },
  "sektor_agrikultur": {
    "padi": 6,
    "gandum_jagung": 28.5,
    "sayur_umbi": 30.5,
    "kedelai": 23,
    "kelapa_sawit": 34,
    "kopi_teh_kakao": 17.3
  },
  "sektor_perikanan": {
    "udang_kerang": 10.5,
    "ikan": 22
  },
  "sektor_olahan_pangan": {
    "air_mineral": 15,
    "gula": 3,
    "roti": 4,
    "pengolahan_daging": 17,
    "mie_instan": 7
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
    "penjara": 1,
    "gudang_senjata": 22,
    "hangar_tank": 7,
    "akademi_militer": 18,
    "pusat_komando": 4,
    "pangkalan_udara": 35,
    "pangkalan_laut": 9,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 19
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 24,
    "darat": {
        "tank_tempur_utama": 1,
        "apc_ifv": 38,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 32,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 38,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 12,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 240000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 6,
    "intelijen": 14,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 3,
      "misi_sabotase": 31,
      "manajemen_wilayah": 9,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 14,
        "sepeda_motor": 15,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 21,
          "kamera_pengawas": 15,
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
      "prasekolah": 14,
      "dasar": 24,
      "menengah": 34,
      "lanjutan": 14,
      "universitas": 29,
      "lembaga_pendidikan": 21,
      "laboratorium": 36,
      "observatorium": 6,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 16,
      "literasi": 91
    },
    "kesehatan": {
      "rumah_sakit_besar": 15,
      "rumah_sakit_kecil": 15,
      "pusat_diagnostik": 19,
      "harapan_hidup": 14,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 31,
      "pengadilan": 38,
      "kejaksaan": 5,
      "pos_polisi": 30,
      "armada_mobil_polisi": 1553,
      "akademi_polisi": 32,
      "indeks_korupsi": 66,
      "indeks_keamanan": 53
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 27,
      "stadion": 2,
      "stadion_internasional": 7
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
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
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 5,
      "kekuatan_keras": 39,
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
    "kesehatan": 15,
    "pendidikan": 26,
    "keamanan": 10,
    "keuangan": 13,
    "lingkungan": 60
  }
};

