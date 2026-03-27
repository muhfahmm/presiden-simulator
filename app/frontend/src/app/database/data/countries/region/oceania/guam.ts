import { CountryData } from "../../../types";

export const guam: CountryData = {
  "name_en": "Guam",
  "capital": "Hagåtña",
  "name_id": "Guam",
  "lon": 144.78333333,
  "lat": 13.46666666,
  "flag": "🇬🇺",
  "jumlah_penduduk": 165768,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 15,
    "pembangkit_listrik_tenaga_surya": 10,
    "pembangkit_listrik_tenaga_uap": 50,
    "pembangkit_listrik_tenaga_gas": 20,
    "pembangkit_listrik_tenaga_angin": 3
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 9,
    "kereta_bawah_tanah": 16,
    "jalur_kereta": 24,
    "jalan_tol": 35,
    "pelabuhan_laut": 7,
    "bandara": 5,
    "terminal_bus": 27,
    "helipad": 13
    },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 35,
    "mobil": 4,
    "sepeda_motor": 16,
    "smelter": 32,
    "semen_beton": 8,
    "kayu": 19
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 24,
    "sapi_perah": 13,
    "sapi_potong": 17,
    "domba_kambing": 5
  },
  "sektor_agrikultur": {
    "padi": 20,
    "gandum_jagung": 19,
    "sayur_umbi": 16,
    "kedelai": 27,
    "kelapa_sawit": 4,
    "kopi_teh_kakao": 15
  },
  "sektor_perikanan": {
    "udang_kerang": 36,
    "ikan": 1
  },
  "sektor_olahan_pangan": {
    "air_mineral": 28,
    "gula": 27,
    "roti": 9,
    "pengolahan_daging": 20,
    "mie_instan": 3
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 7
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 14,
    "gudang_senjata": 24,
    "hangar_tank": 2,
    "akademi_militer": 11,
    "pusat_komando": 26,
    "pangkalan_udara": 32,
    "pangkalan_laut": 17,
    "program_luar_angkasa": 31,
    "pertahanan_siber": 12
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 39,
    "darat": {
        "tank_tempur_utama": 117,
        "apc_ifv": 191,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 34,
        "kapal_destroyer": 75,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 170,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 187,
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
    "waktu_respon": 36,
    "intelijen": 26,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 12,
      "misi_mata_mata": 22,
      "misi_sabotase": 5,
      "manajemen_wilayah": 9,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 2,
        "sepeda_motor": 7,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 3,
          "kamera_pengawas": 32,
          "pusat_forensik": 1
        }
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
      "prasekolah": 23,
      "dasar": 20,
      "menengah": 15,
      "lanjutan": 38,
      "universitas": 25,
      "lembaga_pendidikan": 32,
      "laboratorium": 29,
      "observatorium": 5,
      "pusat_penelitian": 37,
      "pusat_pengembangan": 39,
      "literasi": 69
    },
    "kesehatan": {
      "rumah_sakit_besar": 10,
      "rumah_sakit_kecil": 20,
      "pusat_diagnostik": 11,
      "harapan_hidup": 30,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 36,
      "kejaksaan": 15,
      "pos_polisi": 33,
      "armada_mobil_polisi": 5805,
      "akademi_polisi": 37,
      "indeks_korupsi": 60,
      "indeks_keamanan": 86
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 39,
      "sirkuit_balap": 12,
      "stadion": 11,
      "stadion_internasional": 4
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 1,
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
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 32,
      "kekuatan_keras": 33,
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
    "kesehatan": 27,
    "pendidikan": 29,
    "keamanan": 38,
    "keuangan": 32,
    "lingkungan": 60
  }
};

