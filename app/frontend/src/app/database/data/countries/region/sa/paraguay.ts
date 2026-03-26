import { CountryData } from "../../../types";

export const paraguay: CountryData = {
  "name_en": "Paraguay",
  "capital": "Asunción",
  "name_id": "Paraguay",
  "lon": -58,
  "lat": -23,
  "flag": "🇵🇾",
  "jumlah_penduduk": 6956071,
  "anggaran": 428,
  "pendapatan_nasional": "1222",
  "religion": "Katolik",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 99,
    "pembangkit_listrik_tenaga_surya": 0,
    "pembangkit_listrik_tenaga_uap": 1,
    "pembangkit_listrik_tenaga_gas": 0,
    "pembangkit_listrik_tenaga_angin": 0
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 4,
    "kereta_bawah_tanah": 9,
    "jalur_kereta": 17,
    "jalan_tol": 29,
    "pelabuhan_laut": 34,
    "bandara": 15,
    "terminal_bus": 15,
    "helipad": 21
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
    "mobil": 18,
    "sepeda_motor": 9,
    "smelter": 34,
    "semen_beton": 11,
    "kayu": 4
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 13.0,
    "sapi_perah": 3,
    "sapi_potong": 31,
    "domba_kambing": 37
  },
  "sektor_agrikultur": {
    "padi": 26,
    "gandum_jagung": 20.5,
    "sayur_umbi": 11.5,
    "kedelai": 14,
    "kelapa_sawit": 5,
    "kopi_teh_kakao": 17.0
  },
  "sektor_perikanan": {
    "udang_kerang": 9.0,
    "ikan": 4
  },
  "sektor_olahan_pangan": {
    "air_mineral": 6,
    "gula": 9,
    "roti": 15,
    "pengolahan_daging": 24,
    "mie_instan": 38
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
    "penjara": 27,
    "gudang_senjata": 7,
    "hangar_tank": 20,
    "akademi_militer": 31,
    "pusat_komando": 26,
    "pangkalan_udara": 9,
    "pangkalan_laut": 14,
    "program_luar_angkasa": 36,
    "pertahanan_siber": 5
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 39,
    "darat": {
        "tank_tempur_utama": 50,
        "apc_ifv": 89,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 24,
        "kapal_destroyer": 160,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 177,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 67,
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
    "waktu_respon": 14,
    "intelijen": 19,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 19,
      "misi_mata_mata": 6,
      "misi_sabotase": 32,
      "manajemen_wilayah": 1,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 24,
        "sepeda_motor": 34,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 23,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 22,
          "kamera_pengawas": 6,
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
      "dasar": 7,
      "menengah": 15,
      "lanjutan": 4,
      "universitas": 26,
      "lembaga_pendidikan": 25,
      "laboratorium": 14,
      "observatorium": 30,
      "pusat_penelitian": 11,
      "pusat_pengembangan": 13,
      "literasi": 81
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 14,
      "pusat_diagnostik": 23,
      "harapan_hidup": 18,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 6,
      "pengadilan": 24,
      "kejaksaan": 27,
      "pos_polisi": 12,
      "armada_mobil_polisi": 8579,
      "akademi_polisi": 39,
      "indeks_korupsi": 82,
      "indeks_keamanan": 72
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 33,
      "sirkuit_balap": 32,
      "stadion": 24,
      "stadion_internasional": 16
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 12
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 30
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 14
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 29
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
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
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
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
      "kekuatan_lunak": 17,
      "kekuatan_keras": 6,
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
    "kesehatan": 40,
    "pendidikan": 7,
    "keamanan": 27,
    "keuangan": 4,
    "lingkungan": 60
  }
};

