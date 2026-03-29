import { CountryData } from "../../../types";

export const korea_selatan: CountryData = {
  "name_en": "South Korea",
  "capital": "Seoul",
  "name_id": "Korea Selatan",
  "lon": 127.5,
  "lat": 37,
  "flag": "🇰🇷",
  "jumlah_penduduk": "10M",
  "anggaran": 17112,
  "pendapatan_nasional": "48893",
  "religion": "Ateisme",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 26,
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
    "jalur_sepeda": 6,
    "kereta_bawah_tanah": 10,
    "jalur_kereta": 18,
    "jalan_tol": 34,
    "pelabuhan_laut": 14,
    "bandara": 16,
    "terminal_bus": 25,
    "helipad": 34
    },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 0,
    "uranium": 0,
    "batu_bara": 73,
    "minyak_bumi": 62,
    "gas_alam": 27,
    "garam": 49,
    "nikel": 0,
    "litium": 81,
    "tembaga": 0,
    "aluminium": 0,
    "logam_tanah_jarang": 0,
    "bijih_besi": 0
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 36,
    "mobil": 39,
    "sepeda_motor": 18,
    "smelter": 26,
    "semen_beton": 37,
    "kayu": 32
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 18,
    "sapi_perah": 23,
    "sapi_potong": 1,
    "domba_kambing": 27
  },
  "sektor_agrikultur": {
    "padi": 39,
    "gandum_jagung": 25,
    "sayur_umbi": 30,
    "kedelai": 33,
    "kelapa_sawit": 13,
    "kopi_teh_kakao": 8
  },
  "sektor_perikanan": {
    "udang_kerang": 6,
    "ikan": 19
  },
  "sektor_olahan_pangan": {
    "air_mineral": 30,
    "gula": 33,
    "roti": 19,
    "pengolahan_daging": 11,
    "mie_instan": 18
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
    "penjara": 27,
    "gudang_senjata": 7,
    "hangar_tank": 14,
    "akademi_militer": 38,
    "pusat_komando": 11,
    "pangkalan_udara": 2,
    "pangkalan_laut": 33,
    "program_luar_angkasa": 13,
    "pertahanan_siber": 26
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 22,
    "darat": {
        "tank_tempur_utama": 5,
        "apc_ifv": 5,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 12,
        "kapal_destroyer": 27,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 7,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 34,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 220000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 6,
    "intelijen": 35,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 10,
      "misi_mata_mata": 29,
      "misi_sabotase": 37,
      "manajemen_wilayah": 35,
      "program_nuklir": 100 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 17,
        "unit_interceptor_r2": 28,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 26,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 38,
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
      "prasekolah": 31,
      "dasar": 28,
      "menengah": 3,
      "lanjutan": 18,
      "universitas": 26,
      "lembaga_pendidikan": 9,
      "laboratorium": 12,
      "observatorium": 1,
      "pusat_penelitian": 1,
      "pusat_pengembangan": 39,
      "literasi": 94
    },
    "kesehatan": {
      "rumah_sakit_besar": 14,
      "rumah_sakit_kecil": 2,
      "pusat_diagnostik": 17,
      "harapan_hidup": 39,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 23,
      "kejaksaan": 27,
      "pos_polisi": 35,
      "armada_mobil_polisi": 8927,
      "akademi_polisi": 35,
      "indeks_korupsi": 74,
      "indeks_keamanan": 83
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 30,
      "sirkuit_balap": 18,
      "stadion": 14,
      "stadion_internasional": 3
  },

  "un_vote": 185,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 1153
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 50
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 1632
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 1078
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 86 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 257 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 375
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
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
    "harga_beras": 8000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },

    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 33,
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
    "kesehatan": 7,
    "pendidikan": 34,
    "keamanan": 9,
    "keuangan": 12,
    "lingkungan": 60
  }
};





