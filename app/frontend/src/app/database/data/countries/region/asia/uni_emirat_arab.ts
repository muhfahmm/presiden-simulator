import { CountryData } from "../../../types";

export const uni_emirat_arab: CountryData = {
  "name_en": "United Arab Emirates",
  "capital": "Abu Dhabi",
  "name_id": "Uni emirat arab",
  "lon": 54,
  "lat": 24,
  "flag": "🇦🇪",
  "jumlah_penduduk": 9630959,
  "anggaran": 4959,
  "pendapatan_nasional": "14168",
  "religion": "Islam",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 4,
    "pembangkit_listrik_tenaga_air": 0,
    "pembangkit_listrik_tenaga_surya": 5,
    "pembangkit_listrik_tenaga_uap": 1,
    "pembangkit_listrik_tenaga_gas": 89,
    "pembangkit_listrik_tenaga_angin": 0
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 23,
    "kereta_bawah_tanah": 25,
    "jalur_kereta": 35,
    "jalan_tol": 36,
    "pelabuhan_laut": 13,
    "bandara": 17,
    "terminal_bus": 14,
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
    "semikonduktor": 13,
    "mobil": 13,
    "sepeda_motor": 28,
    "smelter": 35,
    "semen_beton": 31,
    "kayu": 13
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 24,
    "sapi_perah": 27,
    "sapi_potong": 35,
    "domba_kambing": 13
  },
  "sektor_agrikultur": {
    "padi": 20,
    "gandum_jagung": 22,
    "sayur_umbi": 14,
    "kedelai": 6,
    "kelapa_sawit": 7,
    "kopi_teh_kakao": 27
  },
  "sektor_perikanan": {
    "udang_kerang": 33,
    "ikan": 26
  },
  "sektor_olahan_pangan": {
    "air_mineral": 20,
    "gula": 32,
    "roti": 30,
    "pengolahan_daging": 22,
    "mie_instan": 11
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 4
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 34,
    "gudang_senjata": 16,
    "hangar_tank": 31,
    "akademi_militer": 15,
    "pusat_komando": 6,
    "pangkalan_udara": 15,
    "pangkalan_laut": 28,
    "program_luar_angkasa": 21,
    "pertahanan_siber": 24
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 1,
    "darat": {
        "tank_tempur_utama": 41,
        "apc_ifv": 105,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 142,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 194,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 81,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 10000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 33,
    "intelijen": 5,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 32,
      "misi_mata_mata": 23,
      "misi_sabotase": 37,
      "manajemen_wilayah": 17,
      "program_nuklir": 80 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 27,
        "unit_interceptor_r2": 3,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 22,
          "kamera_pengawas": 35,
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
      "dasar": 23,
      "menengah": 30,
      "lanjutan": 34,
      "universitas": 35,
      "lembaga_pendidikan": 36,
      "laboratorium": 35,
      "observatorium": 9,
      "pusat_penelitian": 37,
      "pusat_pengembangan": 22,
      "literasi": 91
    },
    "kesehatan": {
      "rumah_sakit_besar": 25,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 1,
      "harapan_hidup": 26,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 36,
      "kejaksaan": 12,
      "pos_polisi": 18,
      "armada_mobil_polisi": 5790,
      "akademi_polisi": 22,
      "indeks_korupsi": 87,
      "indeks_keamanan": 76
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 23,
      "stadion": 1,
      "stadion_internasional": 23
  },

  "un_vote": 193,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 211
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 81
    },
    "penghasilan": {
      "tarif": 32,
      "kepuasan": 61,
      "pendapatan": 204
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 200
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 419
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 227
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 7280,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 32,
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
    "kesehatan": 37,
    "pendidikan": 16,
    "keamanan": 32,
    "keuangan": 17,
    "lingkungan": 60
  }
};

