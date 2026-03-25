import { CountryData } from "../../types/_index";

export const amerika_serikat: CountryData = {
  "name_en": "United States",
  "capital": "Washington, D.C.",
  "name_id": "Amerika Serikat",
  "lon": -97,
  "lat": 38,
  "flag": "🇺🇸",
  "jumlah_penduduk": 326687501,
  "anggaran": 280022,
  "pendapatan_nasional": "800064",
  "religion": "Protestan",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 2,
    "pembangkit_air": 1,
    "pembangkit_surya": 31,
    "pembangkit_termal": 10,
    "pembangkit_gas": 29,
    "pembangkit_angin": 3,
    "jaringan_listrik": 78
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 19,
    "kereta_bawah_tanah": 39,
    "jalur_kereta": 39,
    "jalan_tol": 28,
    "kualitas_jalan": 52,
    "pelabuhan_laut": 40,
    "bandara": 6,
    "terminal_bus": 23,
    "helipad": 24,
    "cakupan_internet": 83
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 17,
    "uranium": 25,
    "batu_bara": 32,
    "minyak_bumi": 19,
    "gas_alam": 24,
    "garam": 23,
    "nikel": 25,
    "litium": 19,
    "aluminium": 37,
    "tembaga": 5,
    "logam_tanah_jarang": 24,
    "bijih_besi": 37
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 34,
    "mobil": 5,
    "sepeda_motor": 31,
    "smelter": 2,
    "semen_beton": 18,
    "kayu": 40,
    "air_mineral": 29,
    "gula": 16,
    "roti": 39,
    "farmasi": 19,
    "pupuk": 13,
    "pengolahan_daging": 3,
    "mie_instan": 16
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 15.0,
    "sapi_perah": 9,
    "sapi_potong": 13,
    "domba_kambing": 38,
    "udang_kerang": 11.0,
    "ikan": 19,
    "padi": 35,
    "gandum_jagung": 23.5,
    "sayur_umbi": 12.0,
    "kedelai": 4,
    "kelapa_sawit": 13,
    "kopi_teh_kakao": 22.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 20,
    "gudang_senjata": 29,
    "hangar_tank": 37,
    "akademi_militer": 33,
    "pusat_komando": 39,
    "pangkalan_udara": 28,
    "pangkalan_laut": 12,
    "program_luar_angkasa": 25,
    "pertahanan_siber": 9,
    "anggaran_pertahanan": 80006
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 4,
    "darat": {
        "tank_tempur_utama": 10,
        "apc_ifv": 21,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 6,
        "kapal_destroyer": 33,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 14,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 6,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 40000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 16,
    "intelijen": 6,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 39,
      "misi_mata_mata": 39,
      "misi_sabotase": 21,
      "manajemen_wilayah": 26,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 2,
          "sepeda_motor": 19,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 18,
          "helikopter_polisi": 17,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 17,
          "kamera_pengawas": 3,
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
      "prasekolah": 31,
      "dasar": 14,
      "menengah": 34,
      "lanjutan": 12,
      "universitas": 27,
      "lembaga_pendidikan": 24,
      "laboratorium": 16,
      "observatorium": 8,
      "pusat_penelitian": 17,
      "pusat_pengembangan": 31,
      "literasi": 75
    },
    "kesehatan": {
      "rumah_sakit_besar": 1,
      "rumah_sakit_kecil": 5,
      "pusat_diagnostik": 39,
      "harapan_hidup": 26,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 22,
      "pengadilan": 10,
      "kejaksaan": 19,
      "pos_polisi": 29,
      "armada_mobil_polisi": 3884,
      "akademi_polisi": 30,
      "indeks_korupsi": 70,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 12,
      "sirkuit_balap": 10,
      "stadion": 37,
      "stadion_internasional": 35
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 28175
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 19391
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 5914
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 2690
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 7054
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1401 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4201 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 4046
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
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
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 25,
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
    "kesehatan": 6,
    "pendidikan": 13,
    "keamanan": 35,
    "keuangan": 32,
    "lingkungan": 60
  }
};



