import { CountryData } from "../../../types";

export const dominika: CountryData = {
  "name_en": "Dominica",
  "capital": "Roseau",
  "name_id": "Dominika",
  "lon": -61.33333333,
  "lat": 15.41666666,
  "flag": "🇩🇲",
  "jumlah_penduduk": 71625,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 10,
    "pembangkit_listrik_tenaga_surya": 10,
    "pembangkit_listrik_tenaga_uap": 15,
    "pembangkit_listrik_tenaga_gas": 40,
    "pembangkit_listrik_tenaga_angin": 5
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 36,
    "kereta_bawah_tanah": 40,
    "jalur_kereta": 22,
    "jalan_tol": 8,
    "pelabuhan_laut": 3,
    "bandara": 30,
    "terminal_bus": 17,
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
    "semikonduktor": 15,
    "mobil": 34,
    "sepeda_motor": 10,
    "smelter": 19,
    "semen_beton": 36,
    "kayu": 25
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 19,
    "sapi_perah": 34,
    "sapi_potong": 19,
    "domba_kambing": 6
  },
  "sektor_agrikultur": {
    "padi": 1,
    "gandum_jagung": 2,
    "sayur_umbi": 18,
    "kedelai": 33,
    "kelapa_sawit": 7,
    "kopi_teh_kakao": 27
  },
  "sektor_perikanan": {
    "udang_kerang": 36,
    "ikan": 2
  },
  "sektor_olahan_pangan": {
    "air_mineral": 17,
    "gula": 25,
    "roti": 18,
    "pengolahan_daging": 24,
    "mie_instan": 26
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 12
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 26,
    "gudang_senjata": 36,
    "hangar_tank": 27,
    "akademi_militer": 4,
    "pusat_komando": 22,
    "pangkalan_udara": 40,
    "pangkalan_laut": 16,
    "program_luar_angkasa": 37,
    "pertahanan_siber": 21
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 15,
    "darat": {
        "tank_tempur_utama": 8,
        "apc_ifv": 35,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 27,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 14,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 9,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 150000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 2,
    "intelijen": 16,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 34,
      "misi_mata_mata": 1,
      "misi_sabotase": 1,
      "manajemen_wilayah": 24,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 19,
        "unit_interceptor_r2": 9,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 7,
          "kamera_pengawas": 8,
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
      "prasekolah": 32,
      "dasar": 10,
      "menengah": 18,
      "lanjutan": 30,
      "universitas": 28,
      "lembaga_pendidikan": 19,
      "laboratorium": 40,
      "observatorium": 4,
      "pusat_penelitian": 5,
      "pusat_pengembangan": 36,
      "literasi": 84
    },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 24,
      "pusat_diagnostik": 33,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 9,
      "pengadilan": 2,
      "kejaksaan": 16,
      "pos_polisi": 3,
      "armada_mobil_polisi": 7579,
      "akademi_polisi": 28,
      "indeks_korupsi": 88,
      "indeks_keamanan": 86
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 34,
      "sirkuit_balap": 2,
      "stadion": 31,
      "stadion_internasional": 4
  },

  "un_vote": 54,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 7
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
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 21,
      "kekuatan_keras": 18,
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
    "kesehatan": 11,
    "pendidikan": 39,
    "keamanan": 8,
    "keuangan": 39,
    "lingkungan": 60
  }
};

