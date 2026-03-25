import { CountryData } from "../../types/_index";

export const mongolia: CountryData = {
  "name_en": "Mongolia",
  "capital": "Ulan Bator",
  "name_id": "Mongolia",
  "lon": 105,
  "lat": 46,
  "flag": "🇲🇳",
  "jumlah_penduduk": 3170208,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Buddha",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 33,
    "pembangkit_air": 3,
    "pembangkit_surya": 1,
    "pembangkit_termal": 24,
    "pembangkit_gas": 40,
    "pembangkit_angin": 38,
    "jaringan_listrik": 52
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 12,
    "kereta_bawah_tanah": 17,
    "jalur_kereta": 37,
    "jalan_tol": 33,
    "kualitas_jalan": 80,
    "pelabuhan_laut": 40,
    "bandara": 32,
    "terminal_bus": 12,
    "helipad": 23,
    "cakupan_internet": 86
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 30,
    "uranium": 39,
    "batu_bara": 33,
    "minyak_bumi": 4,
    "gas_alam": 31,
    "garam": 7,
    "nikel": 15,
    "litium": 20,
    "aluminium": 35,
    "tembaga": 17,
    "logam_tanah_jarang": 9,
    "bijih_besi": 15
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 26,
    "mobil": 16,
    "sepeda_motor": 32,
    "smelter": 16,
    "semen_beton": 28,
    "kayu": 22,
    "air_mineral": 22,
    "gula": 4,
    "roti": 34,
    "farmasi": 21,
    "pupuk": 20,
    "pengolahan_daging": 28,
    "mie_instan": 14
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 19.5,
    "sapi_perah": 4,
    "sapi_potong": 20,
    "domba_kambing": 30,
    "udang_kerang": 28.0,
    "ikan": 33,
    "padi": 20,
    "gandum_jagung": 16.5,
    "sayur_umbi": 37.5,
    "kedelai": 23,
    "kelapa_sawit": 18,
    "kopi_teh_kakao": 30.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 30,
    "gudang_senjata": 16,
    "hangar_tank": 38,
    "akademi_militer": 34,
    "pusat_komando": 29,
    "pangkalan_udara": 21,
    "pangkalan_laut": 13,
    "program_luar_angkasa": 31,
    "pertahanan_siber": 16,
    "anggaran_pertahanan": 50
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 39,
    "darat": {
        "tank_tempur_utama": 50,
        "apc_ifv": 148,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 4,
        "kapal_destroyer": 80,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 139,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 94,
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
    "waktu_respon": 31,
    "intelijen": 33,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 4,
      "misi_mata_mata": 35,
      "misi_sabotase": 33,
      "manajemen_wilayah": 4,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 14,
          "sepeda_motor": 30,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 12,
          "kamera_pengawas": 40,
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
      "prasekolah": 11,
      "dasar": 22,
      "menengah": 1,
      "lanjutan": 3,
      "universitas": 40,
      "lembaga_pendidikan": 31,
      "laboratorium": 25,
      "observatorium": 28,
      "pusat_penelitian": 3,
      "pusat_pengembangan": 28,
      "literasi": 57
    },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 28,
      "harapan_hidup": 37,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 26,
      "pengadilan": 39,
      "kejaksaan": 3,
      "pos_polisi": 1,
      "armada_mobil_polisi": 5711,
      "akademi_polisi": 14,
      "indeks_korupsi": 87,
      "indeks_keamanan": 78
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 5,
      "sirkuit_balap": 11,
      "stadion": 40,
      "stadion_internasional": 37
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 13
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 26,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 16
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
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
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 2600,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 34,
      "kekuatan_keras": 15,
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
    "kesehatan": 31,
    "pendidikan": 6,
    "keamanan": 23,
    "keuangan": 32,
    "lingkungan": 60
  }
};



