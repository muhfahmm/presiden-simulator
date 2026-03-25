import { CountryData } from "../../types/_index";

export const bosnia_dan_hercegovina: CountryData = {
  "name_en": "Bosnia and Herzegovina",
  "capital": "Sarajevo",
  "name_id": "Bosnia dan hercegovina",
  "lon": 18,
  "lat": 44,
  "flag": "🇧🇦",
  "jumlah_penduduk": 3323929,
  "anggaran": 233,
  "pendapatan_nasional": "667",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 26,
    "pembangkit_air": 38,
    "pembangkit_surya": 5,
    "pembangkit_termal": 13,
    "pembangkit_gas": 29,
    "pembangkit_angin": 23,
    "jaringan_listrik": 50
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 39,
    "kereta_bawah_tanah": 9,
    "jalur_kereta": 12,
    "jalan_tol": 12,
    "kualitas_jalan": 71,
    "pelabuhan_laut": 33,
    "bandara": 14,
    "terminal_bus": 35,
    "helipad": 29,
    "cakupan_internet": 65
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 19,
    "uranium": 1,
    "batu_bara": 15,
    "minyak_bumi": 12,
    "gas_alam": 29,
    "garam": 38,
    "nikel": 7,
    "litium": 6,
    "aluminium": 2,
    "tembaga": 19,
    "logam_tanah_jarang": 16,
    "bijih_besi": 30
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 2,
    "mobil": 13,
    "sepeda_motor": 28,
    "smelter": 37,
    "semen_beton": 26,
    "kayu": 28,
    "air_mineral": 2,
    "gula": 23,
    "roti": 12,
    "farmasi": 5,
    "pupuk": 33,
    "pengolahan_daging": 30,
    "mie_instan": 22
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": {
    "ayam_unggas": 12.5,
    "sapi_perah": 10,
    "sapi_potong": 19,
    "domba_kambing": 34,
    "udang_kerang": 19.0,
    "ikan": 35
  },
  "sektor_agrikultur": {
    "padi": 39,
    "gandum_jagung": 34.5,
    "sayur_umbi": 6.0,
    "kedelai": 5,
    "kelapa_sawit": 25,
    "kopi_teh_kakao": 23.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 30,
    "gudang_senjata": 9,
    "hangar_tank": 37,
    "akademi_militer": 30,
    "pusat_komando": 35,
    "pangkalan_udara": 16,
    "pangkalan_laut": 22,
    "program_luar_angkasa": 24,
    "pertahanan_siber": 40,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 6,
    "darat": {
        "tank_tempur_utama": 37,
        "apc_ifv": 33,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 11,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 28,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 20,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 60000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 29,
    "intelijen": 9,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 22,
      "misi_sabotase": 11,
      "manajemen_wilayah": 15,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 9,
          "sepeda_motor": 18,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 13,
          "kamera_pengawas": 7,
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
      "prasekolah": 40,
      "dasar": 35,
      "menengah": 34,
      "lanjutan": 5,
      "universitas": 25,
      "lembaga_pendidikan": 37,
      "laboratorium": 5,
      "observatorium": 6,
      "pusat_penelitian": 1,
      "pusat_pengembangan": 40,
      "literasi": 81
    },
    "kesehatan": {
      "rumah_sakit_besar": 7,
      "rumah_sakit_kecil": 33,
      "pusat_diagnostik": 18,
      "harapan_hidup": 34,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 4,
      "kejaksaan": 28,
      "pos_polisi": 19,
      "armada_mobil_polisi": 6801,
      "akademi_polisi": 2,
      "indeks_korupsi": 94,
      "indeks_keamanan": 70
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 16,
      "stadion": 27,
      "stadion_internasional": 34
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 18
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 39,
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
    "kesehatan": 15,
    "pendidikan": 19,
    "keamanan": 36,
    "keuangan": 24,
    "lingkungan": 60
  }
};



