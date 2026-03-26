import { CountryData } from "../../types/_index";

export const monako: CountryData = {
  "name_en": "Monaco",
  "capital": "Monaco",
  "name_id": "Monako",
  "lon": 7.4,
  "lat": 43.73333333,
  "flag": "🇲🇨",
  "jumlah_penduduk": 38682,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 6,
    "pembangkit_air": 8,
    "pembangkit_surya": 21,
    "pembangkit_termal": 20,
    "pembangkit_gas": 33,
    "pembangkit_angin": 34,
    "jaringan_listrik": 80
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 13,
    "kereta_bawah_tanah": 9,
    "jalur_kereta": 25,
    "jalan_tol": 15,
    "kualitas_jalan": 81,
    "pelabuhan_laut": 36,
    "bandara": 13,
    "terminal_bus": 33,
    "helipad": 31,
    "cakupan_internet": 57
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 34,
    "uranium": 24,
    "batu_bara": 28,
    "minyak_bumi": 33,
    "gas_alam": 17,
    "garam": 13,
    "nikel": 32,
    "litium": 32,
    "aluminium": 9,
    "tembaga": 18,
    "logam_tanah_jarang": 29,
    "bijih_besi": 24
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 10,
    "mobil": 17,
    "sepeda_motor": 16,
    "smelter": 13,
    "semen_beton": 5,
    "kayu": 8,
    "air_mineral": 13,
    "gula": 37,
    "roti": 7,
    "farmasi": 36,
    "pupuk": 37,
    "pengolahan_daging": 32,
    "mie_instan": 32
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 31.5,
    "sapi_perah": 5,
    "sapi_potong": 38,
    "domba_kambing": 17
  },
  "sektor_agrikultur": {
    "padi": 14,
    "gandum_jagung": 32.5,
    "sayur_umbi": 30.5,
    "kedelai": 37,
    "kelapa_sawit": 12,
    "kopi_teh_kakao": 9.0
  },
  "sektor_perikanan": {
    "udang_kerang": 17.5,
    "ikan": 26
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 13,
    "gudang_senjata": 21,
    "hangar_tank": 4,
    "akademi_militer": 6,
    "pusat_komando": 30,
    "pangkalan_udara": 22,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 24,
    "pertahanan_siber": 28,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 13,
    "darat": {
        "tank_tempur_utama": 183,
        "apc_ifv": 61,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 38,
        "kapal_destroyer": 179,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 32,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 183,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 130000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 2,
    "intelijen": 28,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 23,
      "misi_sabotase": 38,
      "manajemen_wilayah": 11,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 32,
          "sepeda_motor": 29,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 37,
          "kamera_pengawas": 24,
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
      "prasekolah": 4,
      "dasar": 22,
      "menengah": 32,
      "lanjutan": 16,
      "universitas": 1,
      "lembaga_pendidikan": 30,
      "laboratorium": 18,
      "observatorium": 9,
      "pusat_penelitian": 23,
      "pusat_pengembangan": 37,
      "literasi": 68
    },
    "kesehatan": {
      "rumah_sakit_besar": 33,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 34,
      "harapan_hidup": 3,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 34,
      "kejaksaan": 13,
      "pos_polisi": 24,
      "armada_mobil_polisi": 4137,
      "akademi_polisi": 22,
      "indeks_korupsi": 67,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 10,
      "sirkuit_balap": 19,
      "stadion": 3,
      "stadion_internasional": 25
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 7,
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
    "gaji_medis": 100,
    "gaji_militer": 80
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
    "harga_beras": 22400,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 29,
      "kekuatan_keras": 24,
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
    "pendidikan": 25,
    "keamanan": 30,
    "keuangan": 5,
    "lingkungan": 60
  }
};



