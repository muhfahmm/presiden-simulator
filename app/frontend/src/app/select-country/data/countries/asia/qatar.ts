import { CountryData } from "../../types/_index";

export const qatar: CountryData = {
  "name_en": "Qatar",
  "capital": "Doha",
  "name_id": "Qatar",
  "lon": 51.25,
  "lat": 25.5,
  "flag": "🇶🇦",
  "jumlah_penduduk": 2781677,
  "anggaran": 2139,
  "pendapatan_nasional": "6112",
  "religion": "Islam",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 32,
    "pembangkit_air": 29,
    "pembangkit_surya": 17,
    "pembangkit_termal": 6,
    "pembangkit_gas": 8,
    "pembangkit_angin": 13,
    "jaringan_listrik": 91
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 25,
    "kereta_bawah_tanah": 16,
    "jalur_kereta": 15,
    "jalan_tol": 13,
    "kualitas_jalan": 63,
    "pelabuhan_laut": 11,
    "bandara": 2,
    "terminal_bus": 10,
    "helipad": 19,
    "cakupan_internet": 86
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 39,
    "uranium": 16,
    "batu_bara": 28,
    "minyak_bumi": 36,
    "gas_alam": 13,
    "garam": 16,
    "nikel": 25,
    "litium": 22,
    "aluminium": 8,
    "tembaga": 2,
    "logam_tanah_jarang": 4,
    "bijih_besi": 14
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 24,
    "mobil": 35,
    "sepeda_motor": 38,
    "smelter": 30,
    "semen_beton": 5,
    "kayu": 40,
    "air_mineral": 30,
    "gula": 13,
    "roti": 31,
    "farmasi": 15,
    "pupuk": 35,
    "pengolahan_daging": 16,
    "mie_instan": 1
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 16.5,
    "sapi_perah": 1,
    "sapi_potong": 21,
    "domba_kambing": 14
  },
  "sektor_agrikultur": {
    "padi": 19,
    "gandum_jagung": 15.0,
    "sayur_umbi": 13.0,
    "kedelai": 37,
    "kelapa_sawit": 32,
    "kopi_teh_kakao": 18.3
  },
  "sektor_perikanan": {
    "udang_kerang": 20.5,
    "ikan": 38
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 7,
    "gudang_senjata": 6,
    "hangar_tank": 30,
    "akademi_militer": 3,
    "pusat_komando": 21,
    "pangkalan_udara": 30,
    "pangkalan_laut": 11,
    "program_luar_angkasa": 7,
    "pertahanan_siber": 24,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 40,
    "darat": {
        "tank_tempur_utama": 196,
        "apc_ifv": 25,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 11,
        "kapal_destroyer": 78,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 133,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 91,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 400000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 34,
    "intelijen": 19,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 1,
      "misi_mata_mata": 20,
      "misi_sabotase": 20,
      "manajemen_wilayah": 38,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 38,
          "sepeda_motor": 33,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 8,
          "kamera_pengawas": 38,
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
      "prasekolah": 17,
      "dasar": 34,
      "menengah": 6,
      "lanjutan": 29,
      "universitas": 40,
      "lembaga_pendidikan": 40,
      "laboratorium": 8,
      "observatorium": 17,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 39,
      "literasi": 95
    },
    "kesehatan": {
      "rumah_sakit_besar": 30,
      "rumah_sakit_kecil": 37,
      "pusat_diagnostik": 2,
      "harapan_hidup": 39,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 19,
      "pengadilan": 32,
      "kejaksaan": 12,
      "pos_polisi": 9,
      "armada_mobil_polisi": 6106,
      "akademi_polisi": 25,
      "indeks_korupsi": 85,
      "indeks_keamanan": 74
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 8,
      "sirkuit_balap": 12,
      "stadion": 17,
      "stadion_internasional": 39
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 81
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 17
    },
    "penghasilan": {
      "tarif": 14,
      "kepuasan": 61,
      "pendapatan": 68
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 11 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 33 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 49
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 36,
      "kekuatan_keras": 19,
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
    "kesehatan": 36,
    "pendidikan": 29,
    "keamanan": 20,
    "keuangan": 20,
    "lingkungan": 60
  }
};



