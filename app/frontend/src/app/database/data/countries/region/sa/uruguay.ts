import { CountryData } from "../../../types";

export const uruguay: CountryData = {
  "name_en": "Uruguay",
  "capital": "Montevideo",
  "name_id": "Uruguay",
  "lon": -56,
  "lat": -33,
  "flag": "🇺🇾",
  "jumlah_penduduk": 3449299,
  "anggaran": 700,
  "pendapatan_nasional": "2000",
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
    "jalur_sepeda": 32,
    "kereta_bawah_tanah": 26,
    "jalur_kereta": 23,
    "jalan_tol": 39,
    "pelabuhan_laut": 33,
    "bandara": 2,
    "terminal_bus": 8,
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
    "semikonduktor": 4,
    "mobil": 6,
    "sepeda_motor": 33,
    "smelter": 20,
    "semen_beton": 8,
    "kayu": 30
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 6.0,
    "sapi_perah": 3,
    "sapi_potong": 22,
    "domba_kambing": 12
  },
  "sektor_agrikultur": {
    "padi": 7,
    "gandum_jagung": 13.5,
    "sayur_umbi": 17.5,
    "kedelai": 28,
    "kelapa_sawit": 33,
    "kopi_teh_kakao": 25.0
  },
  "sektor_perikanan": {
    "udang_kerang": 31.5,
    "ikan": 2
  },
  "sektor_olahan_pangan": {
    "air_mineral": 38,
    "gula": 12,
    "roti": 35,
    "pengolahan_daging": 1,
    "mie_instan": 15
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 26
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 39,
    "gudang_senjata": 28,
    "hangar_tank": 9,
    "akademi_militer": 26,
    "pusat_komando": 25,
    "pangkalan_udara": 24,
    "pangkalan_laut": 39,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 32
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 30,
    "darat": {
        "tank_tempur_utama": 100,
        "apc_ifv": 97,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 21,
        "kapal_destroyer": 115,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 120,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 167,
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
    "waktu_respon": 1,
    "intelijen": 4,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 16,
      "misi_sabotase": 15,
      "manajemen_wilayah": 12,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 25,
        "sepeda_motor": 28,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 23,
          "kamera_pengawas": 11,
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
      "prasekolah": 9,
      "dasar": 27,
      "menengah": 15,
      "lanjutan": 14,
      "universitas": 34,
      "lembaga_pendidikan": 20,
      "laboratorium": 15,
      "observatorium": 22,
      "pusat_penelitian": 8,
      "pusat_pengembangan": 32,
      "literasi": 95
    },
    "kesehatan": {
      "rumah_sakit_besar": 5,
      "rumah_sakit_kecil": 21,
      "pusat_diagnostik": 6,
      "harapan_hidup": 6,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 6,
      "pengadilan": 17,
      "kejaksaan": 26,
      "pos_polisi": 24,
      "armada_mobil_polisi": 1835,
      "akademi_polisi": 18,
      "indeks_korupsi": 61,
      "indeks_keamanan": 87
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 16,
      "stadion": 34,
      "stadion_internasional": 9
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 37
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 22
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 66
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 20
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 21400,
    "harga_listrik": 3200,
    "harga_air": 4160,
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
      "kekuatan_lunak": 8,
      "kekuatan_keras": 29,
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
    "kesehatan": 6,
    "pendidikan": 37,
    "keamanan": 1,
    "keuangan": 2,
    "lingkungan": 60
  }
};

