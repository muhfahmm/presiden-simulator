import { CountryData } from "../../../types";

export const irlandia: CountryData = {
  "name_en": "Ireland",
  "capital": "Dublin",
  "name_id": "Irlandia",
  "lon": -8,
  "lat": 53,
  "flag": "🇮🇪",
  "jumlah_penduduk": 4867309,
  "anggaran": 5153,
  "pendapatan_nasional": "14723",
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
    "jalur_sepeda": 33,
    "kereta_bawah_tanah": 32,
    "jalur_kereta": 20,
    "jalan_tol": 28,
    "pelabuhan_laut": 11,
    "bandara": 23,
    "terminal_bus": 10,
    "helipad": 1
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
    "mobil": 38,
    "sepeda_motor": 24,
    "smelter": 12,
    "semen_beton": 34,
    "kayu": 35
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 24.5,
    "sapi_perah": 2,
    "sapi_potong": 22,
    "domba_kambing": 21
  },
  "sektor_agrikultur": {
    "padi": 37,
    "gandum_jagung": 19.5,
    "sayur_umbi": 22.5,
    "kedelai": 16,
    "kelapa_sawit": 4,
    "kopi_teh_kakao": 10.0
  },
  "sektor_perikanan": {
    "udang_kerang": 16.5,
    "ikan": 31
  },
  "sektor_olahan_pangan": {
    "air_mineral": 27,
    "gula": 39,
    "roti": 15,
    "pengolahan_daging": 23,
    "mie_instan": 29
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
    "penjara": 34,
    "gudang_senjata": 15,
    "hangar_tank": 3,
    "akademi_militer": 28,
    "pusat_komando": 6,
    "pangkalan_udara": 19,
    "pangkalan_laut": 26,
    "program_luar_angkasa": 17,
    "pertahanan_siber": 13
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 16,
    "darat": {
        "tank_tempur_utama": 34,
        "apc_ifv": 17,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 22,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 32,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 20,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 160000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 36,
    "intelijen": 27,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 19,
      "misi_sabotase": 35,
      "manajemen_wilayah": 19,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 28,
        "sepeda_motor": 24,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 4,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 22,
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
      "prasekolah": 23,
      "dasar": 22,
      "menengah": 37,
      "lanjutan": 24,
      "universitas": 35,
      "lembaga_pendidikan": 1,
      "laboratorium": 10,
      "observatorium": 37,
      "pusat_penelitian": 10,
      "pusat_pengembangan": 25,
      "literasi": 92
    },
    "kesehatan": {
      "rumah_sakit_besar": 34,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 12,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 24,
      "kejaksaan": 29,
      "pos_polisi": 13,
      "armada_mobil_polisi": 4069,
      "akademi_polisi": 11,
      "indeks_korupsi": 93,
      "indeks_keamanan": 79
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 17,
      "sirkuit_balap": 3,
      "stadion": 3,
      "stadion_internasional": 17
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 19
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 365
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 45
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 471
    },
    "lingkungan": {
      "tarif": 39,
      "kepuasan": 88,
      "pendapatan": 364
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 26 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 78 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 343
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
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 10400,
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
      "kekuatan_lunak": 29,
      "kekuatan_keras": 5,
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
    "kesehatan": 27,
    "pendidikan": 10,
    "keamanan": 18,
    "keuangan": 4,
    "lingkungan": 60
  }
};

