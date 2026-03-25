import { CountryData } from "../../types/_index";

export const vanuatu: CountryData = {
  "name_en": "Vanuatu",
  "capital": "Port Vila",
  "name_id": "Vanuatu",
  "lon": 167,
  "lat": -16,
  "flag": "🇻🇺",
  "jumlah_penduduk": 292680,
  "anggaran": 10,
  "pendapatan_nasional": "28",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 8,
    "pembangkit_air": 35,
    "pembangkit_surya": 16,
    "pembangkit_termal": 5,
    "pembangkit_gas": 11,
    "pembangkit_angin": 7,
    "jaringan_listrik": 50
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 4,
    "kereta_bawah_tanah": 20,
    "jalur_kereta": 38,
    "jalan_tol": 1,
    "kualitas_jalan": 76,
    "pelabuhan_laut": 38,
    "bandara": 9,
    "terminal_bus": 20,
    "helipad": 14,
    "cakupan_internet": 62
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 28,
    "uranium": 5,
    "batu_bara": 16,
    "minyak_bumi": 15,
    "gas_alam": 31,
    "garam": 38,
    "nikel": 28,
    "litium": 30,
    "aluminium": 9,
    "tembaga": 12,
    "logam_tanah_jarang": 19,
    "bijih_besi": 37
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 40,
    "mobil": 13,
    "sepeda_motor": 2,
    "smelter": 35,
    "semen_beton": 7,
    "kayu": 23,
    "air_mineral": 4,
    "gula": 4,
    "roti": 23,
    "farmasi": 22,
    "pupuk": 3,
    "pengolahan_daging": 27,
    "mie_instan": 35
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 11.0,
    "sapi_perah": 21,
    "sapi_potong": 9,
    "domba_kambing": 4,
    "udang_kerang": 21.0,
    "ikan": 25,
    "padi": 32,
    "gandum_jagung": 32.0,
    "sayur_umbi": 26.0,
    "kedelai": 8,
    "kelapa_sawit": 26,
    "kopi_teh_kakao": 23.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 32,
    "gudang_senjata": 36,
    "hangar_tank": 36,
    "akademi_militer": 12,
    "pusat_komando": 34,
    "pangkalan_udara": 20,
    "pangkalan_laut": 19,
    "program_luar_angkasa": 6,
    "pertahanan_siber": 28,
    "anggaran_pertahanan": 2
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 8,
    "darat": {
        "tank_tempur_utama": 141,
        "apc_ifv": 46,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 37,
        "kapal_destroyer": 116,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 147,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 133,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 80000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 12,
    "intelijen": 22,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 34,
      "misi_mata_mata": 39,
      "misi_sabotase": 6,
      "manajemen_wilayah": 14,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 16,
          "sepeda_motor": 26,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 11,
          "helikopter_polisi": 14,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 4,
          "kamera_pengawas": 25,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 40,
      "dasar": 26,
      "menengah": 25,
      "lanjutan": 31,
      "universitas": 23,
      "lembaga_pendidikan": 31,
      "laboratorium": 30,
      "observatorium": 36,
      "pusat_penelitian": 18,
      "pusat_pengembangan": 39,
      "literasi": 87
    },
    "kesehatan": {
      "rumah_sakit_besar": 24,
      "rumah_sakit_kecil": 6,
      "pusat_diagnostik": 27,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 4,
      "kejaksaan": 33,
      "pos_polisi": 14,
      "armada_mobil_polisi": 7080,
      "akademi_polisi": 35,
      "indeks_korupsi": 50,
      "indeks_keamanan": 69
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 29,
      "stadion": 39,
      "stadion_internasional": 6
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 3200,
    "harga_air": 5200,
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
      "kekuatan_lunak": 4,
      "kekuatan_keras": 10,
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
    "kesehatan": 1,
    "pendidikan": 10,
    "keamanan": 39,
    "keuangan": 34,
    "lingkungan": 60
  }
};



