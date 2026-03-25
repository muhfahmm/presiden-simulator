import { CountryData } from "../../types/_index";

export const laos: CountryData = {
  "name_en": "Laos",
  "capital": "Vientiane",
  "name_id": "Laos",
  "lon": 105,
  "lat": 18,
  "flag": "🇱🇦",
  "jumlah_penduduk": 7061507,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Buddha",
  "ideology": "Komunisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 25,
    "pembangkit_air": 24,
    "pembangkit_surya": 11,
    "pembangkit_termal": 33,
    "pembangkit_gas": 14,
    "pembangkit_angin": 19,
    "jaringan_listrik": 63
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 14,
    "kereta_bawah_tanah": 1,
    "jalur_kereta": 20,
    "jalan_tol": 16,
    "kualitas_jalan": 53,
    "pelabuhan_laut": 20,
    "bandara": 39,
    "terminal_bus": 1,
    "helipad": 20,
    "cakupan_internet": 65
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 6,
    "uranium": 25,
    "batu_bara": 15,
    "minyak_bumi": 5,
    "gas_alam": 28,
    "garam": 32,
    "nikel": 8,
    "litium": 21,
    "aluminium": 14,
    "tembaga": 22,
    "logam_tanah_jarang": 17,
    "bijih_besi": 24
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 24,
    "mobil": 39,
    "sepeda_motor": 33,
    "smelter": 22,
    "semen_beton": 39,
    "kayu": 13,
    "air_mineral": 25,
    "gula": 31,
    "roti": 25,
    "farmasi": 23,
    "pupuk": 24,
    "pengolahan_daging": 36,
    "mie_instan": 33
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 17.0,
    "sapi_perah": 17,
    "sapi_potong": 11,
    "domba_kambing": 3
  },
  "sektor_agrikultur": {
    "padi": 34,
    "gandum_jagung": 16.0,
    "sayur_umbi": 4.0,
    "kedelai": 18,
    "kelapa_sawit": 19,
    "kopi_teh_kakao": 9.0
  },
  "sektor_perikanan": {
    "udang_kerang": 11.5,
    "ikan": 13
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 5,
    "gudang_senjata": 10,
    "hangar_tank": 13,
    "akademi_militer": 32,
    "pusat_komando": 30,
    "pangkalan_udara": 20,
    "pangkalan_laut": 22,
    "program_luar_angkasa": 15,
    "pertahanan_siber": 36,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 21,
    "darat": {
        "tank_tempur_utama": 6,
        "apc_ifv": 35,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 2,
        "kapal_destroyer": 27,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 31,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 37,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 210000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 4,
    "intelijen": 18,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 36,
      "misi_mata_mata": 16,
      "misi_sabotase": 30,
      "manajemen_wilayah": 18,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 16,
          "sepeda_motor": 2,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 10,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 12,
          "kamera_pengawas": 35,
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
      "prasekolah": 26,
      "dasar": 20,
      "menengah": 34,
      "lanjutan": 1,
      "universitas": 19,
      "lembaga_pendidikan": 17,
      "laboratorium": 33,
      "observatorium": 27,
      "pusat_penelitian": 9,
      "pusat_pengembangan": 12,
      "literasi": 77
    },
    "kesehatan": {
      "rumah_sakit_besar": 34,
      "rumah_sakit_kecil": 36,
      "pusat_diagnostik": 10,
      "harapan_hidup": 21,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 23,
      "pengadilan": 20,
      "kejaksaan": 38,
      "pos_polisi": 20,
      "armada_mobil_polisi": 598,
      "akademi_polisi": 34,
      "indeks_korupsi": 75,
      "indeks_keamanan": 55
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 40,
      "sirkuit_balap": 15,
      "stadion": 12,
      "stadion_internasional": 10
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 75,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 14,
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
    "kesehatan": 2,
    "pendidikan": 12,
    "keamanan": 39,
    "keuangan": 5,
    "lingkungan": 60
  }
};



