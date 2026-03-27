import { CountryData } from "../../../types";

export const bangladesh: CountryData = {
  "name_en": "Bangladesh",
  "capital": "Dhaka",
  "name_id": "Bangladesh",
  "lon": 90,
  "lat": 24,
  "flag": "🇧🇩",
  "jumlah_penduduk": 161356039,
  "anggaran": 4473,
  "pendapatan_nasional": "12779",
  "religion": "Islam",
  "ideology": "Demokrasi",
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
    "jalur_sepeda": 39,
    "kereta_bawah_tanah": 25,
    "jalur_kereta": 30,
    "jalan_tol": 15,
    "pelabuhan_laut": 31,
    "bandara": 34,
    "terminal_bus": 13,
    "helipad": 28
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
    "semikonduktor": 10,
    "mobil": 40,
    "sepeda_motor": 30,
    "smelter": 18,
    "semen_beton": 19,
    "kayu": 3
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 8,
    "sapi_perah": 1,
    "sapi_potong": 4,
    "domba_kambing": 31
  },
  "sektor_agrikultur": {
    "padi": 9,
    "gandum_jagung": 20,
    "sayur_umbi": 24,
    "kedelai": 12,
    "kelapa_sawit": 26,
    "kopi_teh_kakao": 26
  },
  "sektor_perikanan": {
    "udang_kerang": 24,
    "ikan": 32
  },
  "sektor_olahan_pangan": {
    "air_mineral": 29,
    "gula": 26,
    "roti": 22,
    "pengolahan_daging": 4,
    "mie_instan": 5
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 28
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 35,
    "gudang_senjata": 38,
    "hangar_tank": 18,
    "akademi_militer": 22,
    "pusat_komando": 12,
    "pangkalan_udara": 23,
    "pangkalan_laut": 14,
    "program_luar_angkasa": 40,
    "pertahanan_siber": 7
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 30,
    "darat": {
        "tank_tempur_utama": 12,
        "apc_ifv": 20,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 16,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 12,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 14,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 300000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 27,
    "intelijen": 1,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 14,
      "misi_sabotase": 22,
      "manajemen_wilayah": 19,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 25,
        "unit_interceptor_r2": 30,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 6,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 23,
          "kamera_pengawas": 34,
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
      "dasar": 38,
      "menengah": 3,
      "lanjutan": 17,
      "universitas": 27,
      "lembaga_pendidikan": 28,
      "laboratorium": 11,
      "observatorium": 39,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 1,
      "literasi": 55
    },
    "kesehatan": {
      "rumah_sakit_besar": 1,
      "rumah_sakit_kecil": 5,
      "pusat_diagnostik": 20,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 13,
      "pengadilan": 30,
      "kejaksaan": 39,
      "pos_polisi": 26,
      "armada_mobil_polisi": 5208,
      "akademi_polisi": 23,
      "indeks_korupsi": 79,
      "indeks_keamanan": 63
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 36,
      "stadion": 9,
      "stadion_internasional": 39
  },

  "un_vote": 118,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 58
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 156
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 39
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 248
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 23 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 68 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 96
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
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
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 7280,
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
      "kekuatan_lunak": 7,
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
    "kesehatan": 36,
    "pendidikan": 22,
    "keamanan": 36,
    "keuangan": 17,
    "lingkungan": 60
  }
};

