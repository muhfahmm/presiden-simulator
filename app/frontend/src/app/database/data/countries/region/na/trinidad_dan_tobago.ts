import { CountryData } from "../../types/_index";

export const trinidad_dan_tobago: CountryData = {
  "name_en": "Trinidad and Tobago",
  "capital": "Port of Spain",
  "name_id": "Trinidad dan tobago",
  "lon": -61,
  "lat": 11,
  "flag": "🇹🇹",
  "jumlah_penduduk": 1389858,
  "anggaran": 243,
  "pendapatan_nasional": "694",
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
    "jalur_sepeda": 16,
    "kereta_bawah_tanah": 18,
    "jalur_kereta": 8,
    "jalan_tol": 35,
    "pelabuhan_laut": 15,
    "bandara": 14,
    "terminal_bus": 33,
    "helipad": 39
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
    "semikonduktor": 40,
    "mobil": 14,
    "sepeda_motor": 24,
    "smelter": 24,
    "semen_beton": 28,
    "kayu": 27
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 14.0,
    "sapi_perah": 20,
    "sapi_potong": 15,
    "domba_kambing": 31
  },
  "sektor_agrikultur": {
    "padi": 35,
    "gandum_jagung": 19.0,
    "sayur_umbi": 25.0,
    "kedelai": 8,
    "kelapa_sawit": 34,
    "kopi_teh_kakao": 27.0
  },
  "sektor_perikanan": {
    "udang_kerang": 12.0,
    "ikan": 28
  },
  "sektor_olahan_pangan": {
    "air_mineral": 36,
    "gula": 8,
    "roti": 18,
    "pengolahan_daging": 29,
    "mie_instan": 28
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 23
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 37,
    "gudang_senjata": 38,
    "hangar_tank": 34,
    "akademi_militer": 24,
    "pusat_komando": 32,
    "pangkalan_udara": 7,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 14
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 29,
    "darat": {
        "tank_tempur_utama": 190,
        "apc_ifv": 112,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 188,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 138,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 96,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 290000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 9,
    "intelijen": 35,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 19,
      "misi_sabotase": 8,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 40,
        "sepeda_motor": 39,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 16,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 38,
          "kamera_pengawas": 33,
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
      "prasekolah": 26,
      "dasar": 5,
      "menengah": 22,
      "lanjutan": 32,
      "universitas": 2,
      "lembaga_pendidikan": 14,
      "laboratorium": 39,
      "observatorium": 40,
      "pusat_penelitian": 32,
      "pusat_pengembangan": 3,
      "literasi": 74
    },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 33,
      "pusat_diagnostik": 22,
      "harapan_hidup": 16,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 40,
      "kejaksaan": 25,
      "pos_polisi": 18,
      "armada_mobil_polisi": 9719,
      "akademi_polisi": 15,
      "indeks_korupsi": 62,
      "indeks_keamanan": 54
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 8,
      "sirkuit_balap": 34,
      "stadion": 8,
      "stadion_internasional": 20
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 23
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
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
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 22,
      "kekuatan_keras": 28,
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
    "kesehatan": 20,
    "pendidikan": 26,
    "keamanan": 14,
    "keuangan": 24,
    "lingkungan": 60
  }
};

