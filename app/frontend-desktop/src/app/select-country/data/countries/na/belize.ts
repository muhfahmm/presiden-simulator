import { CountryData } from "../../types/_index";

export const belize: CountryData = {
  "name_en": "Belize",
  "capital": "Belmopan",
  "name_id": "Belize",
  "lon": -88.75,
  "lat": 17.25,
  "flag": "🇧🇿",
  "jumlah_penduduk": 383071,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 25,
    "pembangkit_air": 16,
    "pembangkit_surya": 26,
    "pembangkit_termal": 6,
    "pembangkit_gas": 18,
    "pembangkit_angin": 19,
    "jaringan_listrik": 68
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 20,
    "kereta_bawah_tanah": 20,
    "jalur_kereta": 13,
    "jalan_tol": 20,
    "kualitas_jalan": 95,
    "pelabuhan_laut": 12,
    "bandara": 10,
    "terminal_bus": 12,
    "helipad": 39,
    "cakupan_internet": 77
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 28,
    "uranium": 27,
    "batu_bara": 25,
    "minyak_bumi": 6,
    "gas_alam": 37,
    "garam": 10,
    "nikel": 13,
    "litium": 6,
    "aluminium": 12,
    "tembaga": 34,
    "logam_tanah_jarang": 36,
    "bijih_besi": 14
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 23,
    "mobil": 3,
    "sepeda_motor": 16,
    "smelter": 32,
    "semen_beton": 28,
    "kayu": 21,
    "air_mineral": 28,
    "gula": 7,
    "roti": 37,
    "farmasi": 28,
    "pupuk": 36,
    "pengolahan_daging": 10,
    "mie_instan": 24
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 23.5,
    "sapi_perah": 37,
    "sapi_potong": 13,
    "domba_kambing": 9,
    "udang_kerang": 37.5,
    "ikan": 6,
    "padi": 18,
    "gandum_jagung": 24.5,
    "sayur_umbi": 15.0,
    "kedelai": 32,
    "kelapa_sawit": 4,
    "kopi_teh_kakao": 22.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 38,
    "gudang_senjata": 14,
    "hangar_tank": 14,
    "akademi_militer": 24,
    "pusat_komando": 39,
    "pangkalan_udara": 36,
    "pangkalan_laut": 32,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 17,
    "anggaran_pertahanan": 6
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 4,
    "darat": {
        "tank_tempur_utama": 40,
        "apc_ifv": 5,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 30,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 8,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 38,
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
    "waktu_respon": 22,
    "intelijen": 14,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 10,
      "misi_sabotase": 36,
      "manajemen_wilayah": 36,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 27,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 29,
          "helikopter_polisi": 33,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 24,
          "kamera_pengawas": 28,
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
      "prasekolah": 9,
      "dasar": 6,
      "menengah": 13,
      "lanjutan": 6,
      "universitas": 5,
      "lembaga_pendidikan": 37,
      "laboratorium": 40,
      "observatorium": 14,
      "pusat_penelitian": 19,
      "pusat_pengembangan": 26,
      "literasi": 64
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 8,
      "pusat_diagnostik": 2,
      "harapan_hidup": 38,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 30,
      "kejaksaan": 31,
      "pos_polisi": 31,
      "armada_mobil_polisi": 5370,
      "akademi_polisi": 8,
      "indeks_korupsi": 80,
      "indeks_keamanan": 63
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 10,
      "sirkuit_balap": 15,
      "stadion": 32,
      "stadion_internasional": 3
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
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
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 5,
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
    "kesehatan": 23,
    "pendidikan": 29,
    "keamanan": 34,
    "keuangan": 27,
    "lingkungan": 60
  }
};



