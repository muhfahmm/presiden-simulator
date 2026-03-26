import { CountryData } from "../../types/_index";

export const china: CountryData = {
  "name_en": "China",
  "capital": "Beijing",
  "name_id": "China",
  "lon": 105,
  "lat": 35,
  "flag": "🇨🇳",
  "jumlah_penduduk": 1392730000,
  "anggaran": 180167,
  "pendapatan_nasional": "514763",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 58,
    "pembangkit_listrik_tenaga_air": 13,
    "pembangkit_listrik_tenaga_surya": 15,
    "pembangkit_listrik_tenaga_uap": 55,
    "pembangkit_listrik_tenaga_gas": 5,
    "pembangkit_listrik_tenaga_angin": 10
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 15,
    "kereta_bawah_tanah": 33,
    "jalur_kereta": 4,
    "jalan_tol": 5,
    "pelabuhan_laut": 12,
    "bandara": 24,
    "terminal_bus": 38,
    "helipad": 4
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
    "mobil": 8,
    "sepeda_motor": 39,
    "smelter": 34,
    "semen_beton": 14,
    "kayu": 30
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 10.5,
    "sapi_perah": 13,
    "sapi_potong": 37,
    "domba_kambing": 36
  },
  "sektor_agrikultur": {
    "padi": 30,
    "gandum_jagung": 4.0,
    "sayur_umbi": 25.0,
    "kedelai": 24,
    "kelapa_sawit": 38,
    "kopi_teh_kakao": 17.7
  },
  "sektor_perikanan": {
    "udang_kerang": 23.5,
    "ikan": 2
  },
  "sektor_olahan_pangan": {
    "air_mineral": 17,
    "gula": 29,
    "roti": 7,
    "pengolahan_daging": 24,
    "mie_instan": 11
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 27
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 32,
    "gudang_senjata": 37,
    "hangar_tank": 28,
    "akademi_militer": 15,
    "pusat_komando": 19,
    "pangkalan_udara": 1,
    "pangkalan_laut": 9,
    "program_luar_angkasa": 27,
    "pertahanan_siber": 28
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 33,
    "darat": {
        "tank_tempur_utama": 27,
        "apc_ifv": 38,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 28,
        "kapal_destroyer": 9,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 33,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 32,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 330000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 32,
    "intelijen": 5,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 11,
      "misi_mata_mata": 8,
      "misi_sabotase": 3,
      "manajemen_wilayah": 9,
      "program_nuklir": 100 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 18,
        "sepeda_motor": 15,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 35,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 19,
          "kamera_pengawas": 40,
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
      "prasekolah": 37,
      "dasar": 33,
      "menengah": 12,
      "lanjutan": 34,
      "universitas": 9,
      "lembaga_pendidikan": 20,
      "laboratorium": 3,
      "observatorium": 28,
      "pusat_penelitian": 20,
      "pusat_pengembangan": 27,
      "literasi": 95
    },
    "kesehatan": {
      "rumah_sakit_besar": 26,
      "rumah_sakit_kecil": 35,
      "pusat_diagnostik": 11,
      "harapan_hidup": 3,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 30,
      "pengadilan": 23,
      "kejaksaan": 32,
      "pos_polisi": 39,
      "armada_mobil_polisi": 2965,
      "akademi_polisi": 12,
      "indeks_korupsi": 64,
      "indeks_keamanan": 80
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 6,
      "sirkuit_balap": 17,
      "stadion": 31,
      "stadion_internasional": 5
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 7003
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 367
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 2324
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 14341
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 5242
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 901 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2703 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 5219
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 2600,
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
      "kekuatan_lunak": 3,
      "kekuatan_keras": 30,
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
    "pendidikan": 24,
    "keamanan": 36,
    "keuangan": 10,
    "lingkungan": 60
  }
};

