import { CountryData } from "../../types/_index";

export const costa_rica: CountryData = {
  "name_en": "Costa Rica",
  "capital": "San José",
  "name_id": "Costa rica",
  "lon": -84,
  "lat": 10,
  "flag": "🇨🇷",
  "jumlah_penduduk": 4999441,
  "anggaran": 681,
  "pendapatan_nasional": "1945",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 1,
    "pembangkit_air": 31,
    "pembangkit_surya": 32,
    "pembangkit_termal": 19,
    "pembangkit_gas": 26,
    "pembangkit_angin": 9,
    "jaringan_listrik": 92
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 39,
    "kereta_bawah_tanah": 15,
    "jalur_kereta": 31,
    "jalan_tol": 14,
    "kualitas_jalan": 72,
    "pelabuhan_laut": 35,
    "bandara": 39,
    "terminal_bus": 2,
    "helipad": 30,
    "cakupan_internet": 81
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 5,
    "uranium": 28,
    "batu_bara": 39,
    "minyak_bumi": 34,
    "gas_alam": 31,
    "garam": 10,
    "nikel": 35,
    "litium": 2,
    "aluminium": 8,
    "tembaga": 4,
    "logam_tanah_jarang": 13,
    "bijih_besi": 11
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 31,
    "mobil": 37,
    "sepeda_motor": 23,
    "smelter": 15,
    "semen_beton": 23,
    "kayu": 23,
    "air_mineral": 17,
    "gula": 5,
    "roti": 9,
    "farmasi": 32,
    "pupuk": 30,
    "pengolahan_daging": 1,
    "mie_instan": 23
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 17.5,
    "sapi_perah": 16,
    "sapi_potong": 22,
    "domba_kambing": 33
  },
  "sektor_agrikultur": {
    "padi": 19,
    "gandum_jagung": 24.5,
    "sayur_umbi": 9.5,
    "kedelai": 34,
    "kelapa_sawit": 6,
    "kopi_teh_kakao": 32.0
  },
  "sektor_perikanan": {
    "udang_kerang": 11.5,
    "ikan": 10
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 22,
    "gudang_senjata": 4,
    "hangar_tank": 29,
    "akademi_militer": 4,
    "pusat_komando": 17,
    "pangkalan_udara": 33,
    "pangkalan_laut": 2,
    "program_luar_angkasa": 23,
    "pertahanan_siber": 2,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 39,
    "darat": {
        "tank_tempur_utama": 39,
        "apc_ifv": 37,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 5,
        "kapal_destroyer": 11,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 23,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 36,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 390000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 10,
    "intelijen": 18,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 29,
      "misi_mata_mata": 35,
      "misi_sabotase": 3,
      "manajemen_wilayah": 19,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 39,
          "sepeda_motor": 11,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 3,
          "kamera_pengawas": 37,
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
      "prasekolah": 11,
      "dasar": 18,
      "menengah": 31,
      "lanjutan": 15,
      "universitas": 40,
      "lembaga_pendidikan": 21,
      "laboratorium": 22,
      "observatorium": 16,
      "pusat_penelitian": 23,
      "pusat_pengembangan": 39,
      "literasi": 52
    },
    "kesehatan": {
      "rumah_sakit_besar": 22,
      "rumah_sakit_kecil": 20,
      "pusat_diagnostik": 40,
      "harapan_hidup": 40,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 26,
      "pengadilan": 19,
      "kejaksaan": 19,
      "pos_polisi": 16,
      "armada_mobil_polisi": 2848,
      "akademi_polisi": 40,
      "indeks_korupsi": 69,
      "indeks_keamanan": 52
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 36,
      "sirkuit_balap": 31,
      "stadion": 19,
      "stadion_internasional": 37
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 69
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 41
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 13
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 44
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 34
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 75
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_keras": 23,
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
    "kesehatan": 11,
    "pendidikan": 8,
    "keamanan": 10,
    "keuangan": 36,
    "lingkungan": 60
  }
};



