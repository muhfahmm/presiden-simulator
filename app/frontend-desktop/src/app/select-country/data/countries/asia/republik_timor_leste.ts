import { CountryData } from "../../types/_index";

export const republik_timor_leste: CountryData = {
  "name_en": "Timor-Leste",
  "capital": "Dili",
  "name_id": "Republik timor-leste",
  "lon": 125.91666666,
  "lat": -8.83333333,
  "flag": "🇹🇱",
  "jumlah_penduduk": "10M",
  "anggaran": 19,
  "pendapatan_nasional": "56",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 17,
    "pembangkit_air": 32,
    "pembangkit_surya": 22,
    "pembangkit_termal": 5,
    "pembangkit_gas": 37,
    "pembangkit_angin": 37,
    "jaringan_listrik": 64
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 27,
    "kereta_bawah_tanah": 10,
    "jalur_kereta": 40,
    "jalan_tol": 14,
    "kualitas_jalan": 93,
    "pelabuhan_laut": 20,
    "bandara": 39,
    "terminal_bus": 13,
    "helipad": 28,
    "cakupan_internet": 73
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 21,
    "uranium": 9,
    "batu_bara": 10,
    "minyak_bumi": 2,
    "gas_alam": 4,
    "garam": 22,
    "nikel": 25,
    "litium": 27,
    "aluminium": 22,
    "tembaga": 26,
    "logam_tanah_jarang": 6,
    "bijih_besi": 23
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 28,
    "mobil": 32,
    "sepeda_motor": 34,
    "smelter": 8,
    "semen_beton": 32,
    "kayu": 36,
    "air_mineral": 1,
    "gula": 35,
    "roti": 16,
    "farmasi": 39,
    "pupuk": 24,
    "pengolahan_daging": 29,
    "mie_instan": 10
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 19.0,
    "sapi_perah": 17,
    "sapi_potong": 6,
    "domba_kambing": 2,
    "udang_kerang": 29.5,
    "ikan": 35,
    "padi": 9,
    "gandum_jagung": 24.0,
    "sayur_umbi": 29.5,
    "kedelai": 9,
    "kelapa_sawit": 40,
    "kopi_teh_kakao": 17.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 8,
    "gudang_senjata": 40,
    "hangar_tank": 27,
    "akademi_militer": 36,
    "pusat_komando": 35,
    "pangkalan_udara": 2,
    "pangkalan_laut": 31,
    "program_luar_angkasa": 28,
    "pertahanan_siber": 32,
    "anggaran_pertahanan": 5
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 28,
    "darat": {
        "tank_tempur_utama": 38,
        "apc_ifv": 173,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 15,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 97,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 47,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 18,
    "intelijen": 25,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 19,
      "misi_mata_mata": 6,
      "misi_sabotase": 23,
      "manajemen_wilayah": 30,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 29,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 2,
          "helikopter_polisi": 12,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 6,
          "kamera_pengawas": 32,
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
      "prasekolah": 8,
      "dasar": 7,
      "menengah": 32,
      "lanjutan": 8,
      "universitas": 16,
      "lembaga_pendidikan": 26,
      "laboratorium": 36,
      "observatorium": 8,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 19,
      "literasi": 79
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 35,
      "harapan_hidup": 32,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 13,
      "kejaksaan": 20,
      "pos_polisi": 11,
      "armada_mobil_polisi": 4976,
      "akademi_polisi": 4,
      "indeks_korupsi": 93,
      "indeks_keamanan": 90
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 2,
      "sirkuit_balap": 36,
      "stadion": 23,
      "stadion_internasional": 6
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 1
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
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 7700,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
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
      "kekuatan_lunak": 29,
      "kekuatan_keras": 27,
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
    "kesehatan": 35,
    "pendidikan": 29,
    "keamanan": 8,
    "keuangan": 29,
    "lingkungan": 60
  }
};



