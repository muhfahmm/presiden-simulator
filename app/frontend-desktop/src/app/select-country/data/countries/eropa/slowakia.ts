import { CountryData } from "../../types/_index";

export const slowakia: CountryData = {
  "name_en": "Slovakia",
  "capital": "Bratislava",
  "name_id": "Slowakia",
  "lon": 19.5,
  "lat": 48.66666666,
  "flag": "🇸🇰",
  "jumlah_penduduk": 5446771,
  "anggaran": 1264,
  "pendapatan_nasional": "3611",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 14,
    "pembangkit_air": 22,
    "pembangkit_surya": 8,
    "pembangkit_termal": 30,
    "pembangkit_gas": 8,
    "pembangkit_angin": 39,
    "jaringan_listrik": 93
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 24,
    "kereta_bawah_tanah": 3,
    "jalur_kereta": 1,
    "jalan_tol": 40,
    "kualitas_jalan": 74,
    "pelabuhan_laut": 4,
    "bandara": 39,
    "terminal_bus": 8,
    "helipad": 33,
    "cakupan_internet": 56
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 7,
    "uranium": 38,
    "batu_bara": 27,
    "minyak_bumi": 30,
    "gas_alam": 4,
    "garam": 23,
    "nikel": 5,
    "litium": 38,
    "aluminium": 22,
    "tembaga": 1,
    "logam_tanah_jarang": 21,
    "bijih_besi": 7
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 7,
    "mobil": 33,
    "sepeda_motor": 18,
    "smelter": 1,
    "semen_beton": 11,
    "kayu": 20,
    "air_mineral": 33,
    "gula": 26,
    "roti": 15,
    "farmasi": 34,
    "pupuk": 6,
    "pengolahan_daging": 12,
    "mie_instan": 38
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": {
    "ayam_unggas": 16.5,
    "sapi_perah": 14,
    "sapi_potong": 33,
    "domba_kambing": 14,
    "udang_kerang": 24.0,
    "ikan": 5
  },
  "sektor_agrikultur": {
    "padi": 7,
    "gandum_jagung": 27.0,
    "sayur_umbi": 24.0,
    "kedelai": 16,
    "kelapa_sawit": 39,
    "kopi_teh_kakao": 26.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 12,
    "gudang_senjata": 19,
    "hangar_tank": 36,
    "akademi_militer": 19,
    "pusat_komando": 15,
    "pangkalan_udara": 5,
    "pangkalan_laut": 27,
    "program_luar_angkasa": 24,
    "pertahanan_siber": 34,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 10,
    "darat": {
        "tank_tempur_utama": 11,
        "apc_ifv": 35,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 23,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 72,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 59,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 100000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 4,
    "intelijen": 39,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 38,
      "misi_sabotase": 26,
      "manajemen_wilayah": 23,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 2,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 1,
          "helikopter_polisi": 7,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 30,
          "kamera_pengawas": 36,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
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
      "prasekolah": 24,
      "dasar": 26,
      "menengah": 4,
      "lanjutan": 23,
      "universitas": 30,
      "lembaga_pendidikan": 18,
      "laboratorium": 1,
      "observatorium": 20,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 4,
      "literasi": 56
    },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 18,
      "pusat_diagnostik": 21,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 22,
      "pengadilan": 25,
      "kejaksaan": 14,
      "pos_polisi": 3,
      "armada_mobil_polisi": 1466,
      "akademi_polisi": 18,
      "indeks_korupsi": 65,
      "indeks_keamanan": 68
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 22,
      "stadion": 20,
      "stadion_internasional": 20
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 25
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 39
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 89
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 56
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 7 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 19 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 94
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
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 38,
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
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 14,
    "keuangan": 28,
    "lingkungan": 60
  }
};



