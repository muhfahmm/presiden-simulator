import { CountryData } from "../../types/_index";

export const ceko: CountryData = {
  "name_en": "Czechia",
  "capital": "Prague",
  "name_id": "Ceko",
  "lon": 15.5,
  "lat": 49.75,
  "flag": "🇨🇿",
  "jumlah_penduduk": "10M",
  "anggaran": 3209,
  "pendapatan_nasional": "9167",
  "religion": "Ateisme",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 32,
    "pembangkit_air": 39,
    "pembangkit_surya": 30,
    "pembangkit_termal": 34,
    "pembangkit_gas": 35,
    "pembangkit_angin": 13,
    "jaringan_listrik": 84
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 12,
    "kereta_bawah_tanah": 5,
    "jalur_kereta": 36,
    "jalan_tol": 40,
    "kualitas_jalan": 87,
    "pelabuhan_laut": 38,
    "bandara": 38,
    "terminal_bus": 25,
    "helipad": 28,
    "cakupan_internet": 59
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 18,
    "uranium": 5,
    "batu_bara": 29,
    "minyak_bumi": 36,
    "gas_alam": 37,
    "garam": 6,
    "nikel": 15,
    "litium": 11,
    "aluminium": 24,
    "tembaga": 30,
    "logam_tanah_jarang": 33,
    "bijih_besi": 33
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 31,
    "mobil": 32,
    "sepeda_motor": 20,
    "smelter": 23,
    "semen_beton": 16,
    "kayu": 26,
    "air_mineral": 1,
    "gula": 24,
    "roti": 3,
    "farmasi": 11,
    "pupuk": 16,
    "pengolahan_daging": 5,
    "mie_instan": 1
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 35.0,
    "sapi_perah": 4,
    "sapi_potong": 15,
    "domba_kambing": 12
  },
  "sektor_agrikultur": {
    "padi": 5,
    "gandum_jagung": 20.5,
    "sayur_umbi": 22.0,
    "kedelai": 25,
    "kelapa_sawit": 36,
    "kopi_teh_kakao": 27.7
  },
  "sektor_perikanan": {
    "udang_kerang": 4.5,
    "ikan": 30
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 6,
    "gudang_senjata": 2,
    "hangar_tank": 6,
    "akademi_militer": 6,
    "pusat_komando": 23,
    "pangkalan_udara": 1,
    "pangkalan_laut": 34,
    "program_luar_angkasa": 15,
    "pertahanan_siber": 29,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 9,
    "darat": {
        "tank_tempur_utama": 33,
        "apc_ifv": 15,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 4,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 10,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 5,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 90000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 21,
    "intelijen": 28,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 24,
      "misi_sabotase": 29,
      "manajemen_wilayah": 5,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 9,
          "sepeda_motor": 27,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 21,
          "kamera_pengawas": 18,
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
      "prasekolah": 36,
      "dasar": 30,
      "menengah": 6,
      "lanjutan": 26,
      "universitas": 12,
      "lembaga_pendidikan": 24,
      "laboratorium": 9,
      "observatorium": 13,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 37,
      "literasi": 87
    },
    "kesehatan": {
      "rumah_sakit_besar": 21,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 31,
      "harapan_hidup": 19,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 29,
      "kejaksaan": 29,
      "pos_polisi": 28,
      "armada_mobil_polisi": 1808,
      "akademi_polisi": 7,
      "indeks_korupsi": 66,
      "indeks_keamanan": 92
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 14,
      "stadion": 29,
      "stadion_internasional": 10
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 66
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 171
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 98
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 43
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 72
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 49 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 131
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 100,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
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
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 26,
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
    "kesehatan": 15,
    "pendidikan": 8,
    "keamanan": 39,
    "keuangan": 23,
    "lingkungan": 60
  }
};



