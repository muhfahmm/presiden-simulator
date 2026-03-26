import { CountryData } from "../../../types";

export const spanyol: CountryData = {
  "name_en": "Spain",
  "capital": "Madrid",
  "name_id": "Spanyol",
  "lon": -4,
  "lat": 40,
  "flag": "🇪🇸",
  "jumlah_penduduk": 46796540,
  "anggaran": 15362,
  "pendapatan_nasional": "43892",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 7,
    "pembangkit_listrik_tenaga_air": 15,
    "pembangkit_listrik_tenaga_surya": 15,
    "pembangkit_listrik_tenaga_uap": 15,
    "pembangkit_listrik_tenaga_gas": 20,
    "pembangkit_listrik_tenaga_angin": 20
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 3,
    "kereta_bawah_tanah": 36,
    "jalur_kereta": 18,
    "jalan_tol": 17,
    "pelabuhan_laut": 39,
    "bandara": 23,
    "terminal_bus": 6,
    "helipad": 16
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
    "semikonduktor": 14,
    "mobil": 3,
    "sepeda_motor": 8,
    "smelter": 35,
    "semen_beton": 1,
    "kayu": 13
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 26.5,
    "sapi_perah": 31,
    "sapi_potong": 12,
    "domba_kambing": 12
  },
  "sektor_agrikultur": {
    "padi": 29,
    "gandum_jagung": 9.5,
    "sayur_umbi": 14.5,
    "kedelai": 23,
    "kelapa_sawit": 18,
    "kopi_teh_kakao": 22.0
  },
  "sektor_perikanan": {
    "udang_kerang": 4.5,
    "ikan": 5
  },
  "sektor_olahan_pangan": {
    "air_mineral": 16,
    "gula": 32,
    "roti": 23,
    "pengolahan_daging": 29,
    "mie_instan": 16
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 4
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 4,
    "gudang_senjata": 31,
    "hangar_tank": 30,
    "akademi_militer": 19,
    "pusat_komando": 21,
    "pangkalan_udara": 39,
    "pangkalan_laut": 37,
    "program_luar_angkasa": 4,
    "pertahanan_siber": 35
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 16,
    "darat": {
        "tank_tempur_utama": 146,
        "apc_ifv": 38,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 15,
        "kapal_destroyer": 25,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 128,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 133,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 160000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 40,
    "intelijen": 8,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 18,
      "misi_mata_mata": 30,
      "misi_sabotase": 6,
      "manajemen_wilayah": 15,
      "program_nuklir": 80 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 28,
        "sepeda_motor": 8,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 6,
          "helikopter_polisi": 8,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 33,
          "kamera_pengawas": 7,
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
      "prasekolah": 15,
      "dasar": 7,
      "menengah": 3,
      "lanjutan": 40,
      "universitas": 4,
      "lembaga_pendidikan": 7,
      "laboratorium": 40,
      "observatorium": 39,
      "pusat_penelitian": 32,
      "pusat_pengembangan": 32,
      "literasi": 60
    },
    "kesehatan": {
      "rumah_sakit_besar": 11,
      "rumah_sakit_kecil": 16,
      "pusat_diagnostik": 16,
      "harapan_hidup": 8,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 4,
      "pengadilan": 28,
      "kejaksaan": 10,
      "pos_polisi": 26,
      "armada_mobil_polisi": 9910,
      "akademi_polisi": 28,
      "indeks_korupsi": 92,
      "indeks_keamanan": 86
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 1,
      "sirkuit_balap": 11,
      "stadion": 17,
      "stadion_internasional": 4
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 1365
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 370
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 1029
    },
    "bea_cukai": {
      "tarif": 26,
      "kepuasan": 86,
      "pendapatan": 950
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 445
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 77 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 231 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 742
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
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 10400,
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
      "kekuatan_lunak": 8,
      "kekuatan_keras": 2,
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
    "kesehatan": 19,
    "pendidikan": 24,
    "keamanan": 7,
    "keuangan": 27,
    "lingkungan": 60
  }
};

