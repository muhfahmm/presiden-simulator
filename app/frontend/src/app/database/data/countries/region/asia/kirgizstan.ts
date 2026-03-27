import { CountryData } from "../../../types";

export const kirgizstan: CountryData = {
  "name_en": "Kyrgyzstan",
  "capital": "Bishkek",
  "name_id": "Kirgizstan",
  "lon": 75,
  "lat": 41,
  "flag": "🇰🇬",
  "jumlah_penduduk": 6322800,
  "anggaran": 117,
  "pendapatan_nasional": "333",
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
    "jalur_sepeda": 33,
    "kereta_bawah_tanah": 23,
    "jalur_kereta": 1,
    "jalan_tol": 30,
    "pelabuhan_laut": 7,
    "bandara": 23,
    "terminal_bus": 23,
    "helipad": 27
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
    "semikonduktor": 18,
    "mobil": 30,
    "sepeda_motor": 14,
    "smelter": 23,
    "semen_beton": 34,
    "kayu": 21
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 25,
    "sapi_perah": 17,
    "sapi_potong": 31,
    "domba_kambing": 39
  },
  "sektor_agrikultur": {
    "padi": 37,
    "gandum_jagung": 8,
    "sayur_umbi": 7,
    "kedelai": 36,
    "kelapa_sawit": 2,
    "kopi_teh_kakao": 28
  },
  "sektor_perikanan": {
    "udang_kerang": 26,
    "ikan": 19
  },
  "sektor_olahan_pangan": {
    "air_mineral": 20,
    "gula": 14,
    "roti": 36,
    "pengolahan_daging": 38,
    "mie_instan": 13
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 34
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 34,
    "gudang_senjata": 18,
    "hangar_tank": 30,
    "akademi_militer": 25,
    "pusat_komando": 8,
    "pangkalan_udara": 15,
    "pangkalan_laut": 9,
    "program_luar_angkasa": 29,
    "pertahanan_siber": 29
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 5,
    "darat": {
        "tank_tempur_utama": 20,
        "apc_ifv": 13,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 21,
        "kapal_destroyer": 6,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 19,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 13,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 50000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 36,
    "intelijen": 24,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 29,
      "misi_mata_mata": 28,
      "misi_sabotase": 40,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 12,
        "unit_interceptor_r2": 29,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 9,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 24,
          "kamera_pengawas": 17,
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
      "prasekolah": 6,
      "dasar": 5,
      "menengah": 21,
      "lanjutan": 18,
      "universitas": 40,
      "lembaga_pendidikan": 28,
      "laboratorium": 17,
      "observatorium": 20,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 14,
      "literasi": 69
    },
    "kesehatan": {
      "rumah_sakit_besar": 22,
      "rumah_sakit_kecil": 22,
      "pusat_diagnostik": 28,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 38,
      "pengadilan": 15,
      "kejaksaan": 37,
      "pos_polisi": 9,
      "armada_mobil_polisi": 5304,
      "akademi_polisi": 33,
      "indeks_korupsi": 90,
      "indeks_keamanan": 77
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 25,
      "stadion": 23,
      "stadion_internasional": 35
  },

  "un_vote": 19,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
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
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 2,
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
    "pendidikan": 1,
    "keamanan": 37,
    "keuangan": 26,
    "lingkungan": 60
  }
};

