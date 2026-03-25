import { CountryData } from "../../types/_index";

export const finlandia: CountryData = {
  "name_en": "Finland",
  "capital": "Helsinki",
  "name_id": "Finlandia",
  "lon": 26,
  "lat": 64,
  "flag": "🇫🇮",
  "jumlah_penduduk": 5515525,
  "anggaran": 2917,
  "pendapatan_nasional": "8334",
  "religion": "Protestan",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 24,
    "pembangkit_air": 21,
    "pembangkit_surya": 23,
    "pembangkit_termal": 17,
    "pembangkit_gas": 15,
    "pembangkit_angin": 6,
    "jaringan_listrik": 55
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 8,
    "kereta_bawah_tanah": 1,
    "jalur_kereta": 27,
    "jalan_tol": 29,
    "kualitas_jalan": 61,
    "pelabuhan_laut": 31,
    "bandara": 35,
    "terminal_bus": 38,
    "helipad": 4,
    "cakupan_internet": 93
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 6,
    "uranium": 39,
    "batu_bara": 12,
    "minyak_bumi": 11,
    "gas_alam": 28,
    "garam": 27,
    "nikel": 20,
    "litium": 5,
    "aluminium": 29,
    "tembaga": 24,
    "logam_tanah_jarang": 9,
    "bijih_besi": 5
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 38,
    "mobil": 28,
    "sepeda_motor": 18,
    "smelter": 13,
    "semen_beton": 11,
    "kayu": 1,
    "air_mineral": 17,
    "gula": 35,
    "roti": 10,
    "farmasi": 39,
    "pupuk": 17,
    "pengolahan_daging": 37,
    "mie_instan": 31
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": {
    "ayam_unggas": 27.0,
    "sapi_perah": 15,
    "sapi_potong": 5,
    "domba_kambing": 21,
    "udang_kerang": 26.0,
    "ikan": 29
  },
  "sektor_agrikultur": {
    "padi": 32,
    "gandum_jagung": 18.5,
    "sayur_umbi": 36.5,
    "kedelai": 9,
    "kelapa_sawit": 19,
    "kopi_teh_kakao": 13.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 26,
    "gudang_senjata": 21,
    "hangar_tank": 39,
    "akademi_militer": 9,
    "pusat_komando": 18,
    "pangkalan_udara": 15,
    "pangkalan_laut": 35,
    "program_luar_angkasa": 40,
    "pertahanan_siber": 15,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 36,
    "darat": {
        "tank_tempur_utama": 13,
        "apc_ifv": 17,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 30,
        "kapal_destroyer": 39,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 25,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 29,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 360000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 40,
    "intelijen": 4,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 17,
      "misi_sabotase": 12,
      "manajemen_wilayah": 2,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 4,
          "sepeda_motor": 19,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 3,
          "helikopter_polisi": 28,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 38,
          "kamera_pengawas": 9,
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
      "prasekolah": 14,
      "dasar": 2,
      "menengah": 37,
      "lanjutan": 36,
      "universitas": 32,
      "lembaga_pendidikan": 15,
      "laboratorium": 17,
      "observatorium": 3,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 40,
      "literasi": 64
    },
    "kesehatan": {
      "rumah_sakit_besar": 35,
      "rumah_sakit_kecil": 10,
      "pusat_diagnostik": 25,
      "harapan_hidup": 28,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 22,
      "pengadilan": 15,
      "kejaksaan": 36,
      "pos_polisi": 7,
      "armada_mobil_polisi": 6415,
      "akademi_polisi": 10,
      "indeks_korupsi": 50,
      "indeks_keamanan": 88
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 31,
      "sirkuit_balap": 18,
      "stadion": 4,
      "stadion_internasional": 20
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 113
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 99
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 82
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 63
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 15 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 44 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 93
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
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 7280,
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
      "kekuatan_lunak": 22,
      "kekuatan_keras": 6,
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
    "kesehatan": 13,
    "pendidikan": 14,
    "keamanan": 27,
    "keuangan": 36,
    "lingkungan": 60
  }
};



