import { CountryData } from "../../../types";

export const austria: CountryData = {
  "name_en": "Austria",
  "capital": "Vienna",
  "name_id": "Austria",
  "lon": 13.33333333,
  "lat": 47.33333333,
  "flag": "🇦🇹",
  "jumlah_penduduk": 8840521,
  "anggaran": 4959,
  "pendapatan_nasional": "14168",
  "religion": "Katolik",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
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
    "jalur_sepeda": 22,
    "kereta_bawah_tanah": 28,
    "jalur_kereta": 33,
    "jalan_tol": 18,
    "pelabuhan_laut": 31,
    "bandara": 40,
    "terminal_bus": 18,
    "helipad": 20
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
    "mobil": 5,
    "sepeda_motor": 38,
    "smelter": 15,
    "semen_beton": 6,
    "kayu": 31
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 26,
    "sapi_perah": 21,
    "sapi_potong": 13,
    "domba_kambing": 6
  },
  "sektor_agrikultur": {
    "padi": 32,
    "gandum_jagung": 8,
    "sayur_umbi": 10,
    "kedelai": 4,
    "kelapa_sawit": 14,
    "kopi_teh_kakao": 18
  },
  "sektor_perikanan": {
    "udang_kerang": 26,
    "ikan": 13
  },
  "sektor_olahan_pangan": {
    "air_mineral": 32,
    "gula": 23,
    "roti": 26,
    "pengolahan_daging": 26,
    "mie_instan": 6
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 31
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 40,
    "gudang_senjata": 6,
    "hangar_tank": 7,
    "akademi_militer": 11,
    "pusat_komando": 1,
    "pangkalan_udara": 21,
    "pangkalan_laut": 4,
    "program_luar_angkasa": 12,
    "pertahanan_siber": 30
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 38,
    "darat": {
        "tank_tempur_utama": 15,
        "apc_ifv": 13,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 3,
        "kapal_destroyer": 20,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 28,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 6,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 380000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 35,
    "intelijen": 25,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 14,
      "misi_mata_mata": 32,
      "misi_sabotase": 4,
      "manajemen_wilayah": 9,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 8,
        "sepeda_motor": 14,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 33,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 3,
          "kamera_pengawas": 1,
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
      "dasar": 10,
      "menengah": 30,
      "lanjutan": 21,
      "universitas": 7,
      "lembaga_pendidikan": 26,
      "laboratorium": 12,
      "observatorium": 23,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 23,
      "literasi": 88
    },
    "kesehatan": {
      "rumah_sakit_besar": 23,
      "rumah_sakit_kecil": 6,
      "pusat_diagnostik": 14,
      "harapan_hidup": 13,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 19,
      "pengadilan": 15,
      "kejaksaan": 34,
      "pos_polisi": 16,
      "armada_mobil_polisi": 645,
      "akademi_polisi": 14,
      "indeks_korupsi": 61,
      "indeks_keamanan": 78
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 28,
      "sirkuit_balap": 32,
      "stadion": 1,
      "stadion_internasional": 29
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 170
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 532
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 408
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 117
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 64
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 219
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
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
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
    "harga_ayam": 20500,
    "harga_minyak_goreng": 7700,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 28,
      "kekuatan_keras": 34,
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
    "kesehatan": 18,
    "pendidikan": 12,
    "keamanan": 23,
    "keuangan": 37,
    "lingkungan": 60
  }
};

