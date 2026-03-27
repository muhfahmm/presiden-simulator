import { CountryData } from "../../../types";

export const jamaika: CountryData = {
  "name_en": "Jamaica",
  "capital": "Kingston",
  "name_id": "Jamaika",
  "lon": -77.5,
  "lat": 18.25,
  "flag": "🇯🇲",
  "jumlah_penduduk": 2934855,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Protestan",
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
    "jalur_sepeda": 31,
    "kereta_bawah_tanah": 3,
    "jalur_kereta": 20,
    "jalan_tol": 21,
    "pelabuhan_laut": 24,
    "bandara": 11,
    "terminal_bus": 22,
    "helipad": 30
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
    "semikonduktor": 19,
    "mobil": 31,
    "sepeda_motor": 30,
    "smelter": 36,
    "semen_beton": 5,
    "kayu": 21
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 33,
    "sapi_perah": 39,
    "sapi_potong": 5,
    "domba_kambing": 12
  },
  "sektor_agrikultur": {
    "padi": 35,
    "gandum_jagung": 18,
    "sayur_umbi": 22,
    "kedelai": 14,
    "kelapa_sawit": 12,
    "kopi_teh_kakao": 9
  },
  "sektor_perikanan": {
    "udang_kerang": 17,
    "ikan": 10
  },
  "sektor_olahan_pangan": {
    "air_mineral": 21,
    "gula": 30,
    "roti": 36,
    "pengolahan_daging": 9,
    "mie_instan": 26
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 32
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 37,
    "gudang_senjata": 19,
    "hangar_tank": 30,
    "akademi_militer": 10,
    "pusat_komando": 26,
    "pangkalan_udara": 39,
    "pangkalan_laut": 33,
    "program_luar_angkasa": 2,
    "pertahanan_siber": 10
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 36,
    "darat": {
        "tank_tempur_utama": 10,
        "apc_ifv": 21,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 5,
        "kapal_destroyer": 31,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 20,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 23,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 360000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 32,
    "intelijen": 39,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 14,
      "misi_mata_mata": 31,
      "misi_sabotase": 26,
      "manajemen_wilayah": 20,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 40,
        "sepeda_motor": 18,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 37,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 16,
          "kamera_pengawas": 19,
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
      "prasekolah": 39,
      "dasar": 20,
      "menengah": 17,
      "lanjutan": 7,
      "universitas": 2,
      "lembaga_pendidikan": 21,
      "laboratorium": 1,
      "observatorium": 7,
      "pusat_penelitian": 20,
      "pusat_pengembangan": 35,
      "literasi": 58
    },
    "kesehatan": {
      "rumah_sakit_besar": 28,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 2,
      "harapan_hidup": 38,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 23,
      "kejaksaan": 1,
      "pos_polisi": 20,
      "armada_mobil_polisi": 9778,
      "akademi_polisi": 39,
      "indeks_korupsi": 77,
      "indeks_keamanan": 79
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 18,
      "stadion": 39,
      "stadion_internasional": 34
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 677460
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
      "kekuatan_lunak": 4,
      "kekuatan_keras": 27,
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
    "kesehatan": 16,
    "pendidikan": 34,
    "keamanan": 35,
    "keuangan": 14,
    "lingkungan": 60
  }
};

