import { CountryData } from "../../types/_index";

export const brazil: CountryData = {
  "name_en": "Brazil",
  "capital": "Brasília",
  "name_id": "Brazil",
  "lon": -55,
  "lat": -10,
  "flag": "🇧🇷",
  "jumlah_penduduk": 209469333,
  "anggaran": 22655,
  "pendapatan_nasional": "64727",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 4,
    "pembangkit_air": 5,
    "pembangkit_surya": 40,
    "pembangkit_termal": 28,
    "pembangkit_gas": 38,
    "pembangkit_angin": 17,
    "jaringan_listrik": 71
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 3,
    "kereta_bawah_tanah": 8,
    "jalur_kereta": 16,
    "jalan_tol": 1,
    "kualitas_jalan": 62,
    "pelabuhan_laut": 13,
    "bandara": 34,
    "terminal_bus": 11,
    "helipad": 24,
    "cakupan_internet": 86
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 25,
    "uranium": 21,
    "batu_bara": 32,
    "minyak_bumi": 32,
    "gas_alam": 22,
    "garam": 2,
    "nikel": 27,
    "litium": 17,
    "aluminium": 14,
    "tembaga": 38,
    "logam_tanah_jarang": 35,
    "bijih_besi": 7
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 28,
    "mobil": 11,
    "sepeda_motor": 14,
    "smelter": 24,
    "semen_beton": 27,
    "kayu": 29,
    "air_mineral": 15,
    "gula": 16,
    "roti": 7,
    "farmasi": 14,
    "pupuk": 3,
    "pengolahan_daging": 17,
    "mie_instan": 34
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 18.0,
    "sapi_perah": 25,
    "sapi_potong": 38,
    "domba_kambing": 3
  },
  "sektor_agrikultur": {
    "padi": 28,
    "gandum_jagung": 11.0,
    "sayur_umbi": 33.0,
    "kedelai": 40,
    "kelapa_sawit": 10,
    "kopi_teh_kakao": 19.3
  },
  "sektor_perikanan": {
    "udang_kerang": 24.0,
    "ikan": 7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 3,
    "hangar_tank": 34,
    "akademi_militer": 25,
    "pusat_komando": 33,
    "pangkalan_udara": 6,
    "pangkalan_laut": 11,
    "program_luar_angkasa": 24,
    "pertahanan_siber": 39,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 20,
    "darat": {
        "tank_tempur_utama": 28,
        "apc_ifv": 23,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 9,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 12,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 16,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 200000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 39,
    "intelijen": 30,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 26,
      "misi_mata_mata": 5,
      "misi_sabotase": 10,
      "manajemen_wilayah": 36,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 38,
          "sepeda_motor": 34,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 2,
          "kamera_pengawas": 39,
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
      "prasekolah": 22,
      "dasar": 29,
      "menengah": 22,
      "lanjutan": 1,
      "universitas": 5,
      "lembaga_pendidikan": 38,
      "laboratorium": 8,
      "observatorium": 1,
      "pusat_penelitian": 5,
      "pusat_pengembangan": 27,
      "literasi": 50
    },
    "kesehatan": {
      "rumah_sakit_besar": 25,
      "rumah_sakit_kecil": 37,
      "pusat_diagnostik": 22,
      "harapan_hidup": 1,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 38,
      "kejaksaan": 7,
      "pos_polisi": 4,
      "armada_mobil_polisi": 9953,
      "akademi_polisi": 10,
      "indeks_korupsi": 67,
      "indeks_keamanan": 95
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 10,
      "sirkuit_balap": 12,
      "stadion": 30,
      "stadion_internasional": 19
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 594
    },
    "korporasi": {
      "tarif": 4,
      "kepuasan": 52,
      "pendapatan": 159
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 213
    },
    "bea_cukai": {
      "tarif": 20,
      "kepuasan": 86,
      "pendapatan": 1246
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 1341
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 114 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 340 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 95
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 33,
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
    "kesehatan": 10,
    "pendidikan": 31,
    "keamanan": 39,
    "keuangan": 36,
    "lingkungan": 60
  }
};



