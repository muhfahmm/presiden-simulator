import { CountryData } from "../../types/_index";

export const selandia_baru: CountryData = {
  "name_en": "New Zealand",
  "capital": "Wellington",
  "name_id": "Selandia baru",
  "lon": 174,
  "lat": -41,
  "flag": "🇳🇿",
  "jumlah_penduduk": 4841000,
  "anggaran": 2431,
  "pendapatan_nasional": "6945",
  "religion": "Protestan",
  "ideology": "Liberalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 22,
    "pembangkit_air": 8,
    "pembangkit_surya": 22,
    "pembangkit_termal": 6,
    "pembangkit_gas": 2,
    "pembangkit_angin": 28,
    "jaringan_listrik": 64
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 36,
    "kereta_bawah_tanah": 10,
    "jalur_kereta": 2,
    "jalan_tol": 24,
    "kualitas_jalan": 93,
    "pelabuhan_laut": 16,
    "bandara": 14,
    "terminal_bus": 5,
    "helipad": 5,
    "cakupan_internet": 87
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 25,
    "uranium": 13,
    "batu_bara": 36,
    "minyak_bumi": 16,
    "gas_alam": 16,
    "garam": 11,
    "nikel": 7,
    "litium": 17,
    "aluminium": 7,
    "tembaga": 21,
    "logam_tanah_jarang": 18,
    "bijih_besi": 14
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 9,
    "mobil": 24,
    "sepeda_motor": 35,
    "smelter": 21,
    "semen_beton": 9,
    "kayu": 22,
    "air_mineral": 14,
    "gula": 15,
    "roti": 5,
    "farmasi": 24,
    "pupuk": 27,
    "pengolahan_daging": 16,
    "mie_instan": 2
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 23.5,
    "sapi_perah": 20,
    "sapi_potong": 23,
    "domba_kambing": 34,
    "udang_kerang": 22.0,
    "ikan": 27,
    "padi": 11,
    "gandum_jagung": 8.0,
    "sayur_umbi": 14.5,
    "kedelai": 32,
    "kelapa_sawit": 19,
    "kopi_teh_kakao": 12.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 17,
    "gudang_senjata": 32,
    "hangar_tank": 18,
    "akademi_militer": 10,
    "pusat_komando": 1,
    "pangkalan_udara": 2,
    "pangkalan_laut": 12,
    "program_luar_angkasa": 8,
    "pertahanan_siber": 36,
    "anggaran_pertahanan": 694
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 24,
    "darat": {
        "tank_tempur_utama": 73,
        "apc_ifv": 50,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 34,
        "kapal_destroyer": 190,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 192,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 64,
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
    "waktu_respon": 29,
    "intelijen": 40,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 32,
      "misi_sabotase": 23,
      "manajemen_wilayah": 30,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 9,
          "sepeda_motor": 1,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 4,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 18,
          "kamera_pengawas": 6,
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
      "prasekolah": 7,
      "dasar": 34,
      "menengah": 5,
      "lanjutan": 25,
      "universitas": 39,
      "lembaga_pendidikan": 6,
      "laboratorium": 3,
      "observatorium": 9,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 28,
      "literasi": 58
    },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 28,
      "pusat_diagnostik": 22,
      "harapan_hidup": 36,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 26,
      "pengadilan": 9,
      "kejaksaan": 8,
      "pos_polisi": 31,
      "armada_mobil_polisi": 4446,
      "akademi_polisi": 35,
      "indeks_korupsi": 77,
      "indeks_keamanan": 85
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 13,
      "sirkuit_balap": 14,
      "stadion": 26,
      "stadion_internasional": 20
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 85
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 180
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 102
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 18
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 37 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 62
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 10400,
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
      "kekuatan_lunak": 4,
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
    "kesehatan": 1,
    "pendidikan": 19,
    "keamanan": 16,
    "keuangan": 34,
    "lingkungan": 60
  }
};



