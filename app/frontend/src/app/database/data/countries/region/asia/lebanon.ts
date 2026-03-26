import { CountryData } from "../../types/_index";

export const lebanon: CountryData = {
  "name_en": "Lebanon",
  "capital": "Beirut",
  "name_id": "Lebanon",
  "lon": 35.83333333,
  "lat": 33.83333333,
  "flag": "🇱🇧",
  "jumlah_penduduk": 6848925,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Islam",
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
    "jalur_sepeda": 10,
    "kereta_bawah_tanah": 29,
    "jalur_kereta": 19,
    "jalan_tol": 22,
    "pelabuhan_laut": 17,
    "bandara": 37,
    "terminal_bus": 14,
    "helipad": 7
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
    "semikonduktor": 6,
    "mobil": 12,
    "sepeda_motor": 34,
    "smelter": 7,
    "semen_beton": 27,
    "kayu": 18
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 13.5,
    "sapi_perah": 4,
    "sapi_potong": 34,
    "domba_kambing": 32
  },
  "sektor_agrikultur": {
    "padi": 8,
    "gandum_jagung": 28.5,
    "sayur_umbi": 27.0,
    "kedelai": 3,
    "kelapa_sawit": 19,
    "kopi_teh_kakao": 24.3
  },
  "sektor_perikanan": {
    "udang_kerang": 6.5,
    "ikan": 33
  },
  "sektor_olahan_pangan": {
    "air_mineral": 4,
    "gula": 2,
    "roti": 14,
    "pengolahan_daging": 3,
    "mie_instan": 40
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 5
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 21,
    "gudang_senjata": 8,
    "hangar_tank": 2,
    "akademi_militer": 26,
    "pusat_komando": 18,
    "pangkalan_udara": 8,
    "pangkalan_laut": 31,
    "program_luar_angkasa": 17,
    "pertahanan_siber": 16
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 12,
    "darat": {
        "tank_tempur_utama": 33,
        "apc_ifv": 11,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 28,
        "kapal_destroyer": 3,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 34,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 23,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 120000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 16,
    "intelijen": 1,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 27,
      "misi_mata_mata": 16,
      "misi_sabotase": 36,
      "manajemen_wilayah": 15,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 39,
        "sepeda_motor": 9,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 9,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 25,
          "kamera_pengawas": 8,
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
      "prasekolah": 8,
      "dasar": 2,
      "menengah": 1,
      "lanjutan": 40,
      "universitas": 22,
      "lembaga_pendidikan": 9,
      "laboratorium": 12,
      "observatorium": 3,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 2,
      "literasi": 81
    },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 14,
      "pusat_diagnostik": 34,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 5,
      "kejaksaan": 39,
      "pos_polisi": 24,
      "armada_mobil_polisi": 1509,
      "akademi_polisi": 30,
      "indeks_korupsi": 54,
      "indeks_keamanan": 57
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 6,
      "sirkuit_balap": 8,
      "stadion": 27,
      "stadion_internasional": 22
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 15,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 21400,
    "harga_listrik": 800,
    "harga_air": 7280,
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
      "kekuatan_lunak": 38,
      "kekuatan_keras": 37,
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
    "kesehatan": 20,
    "pendidikan": 8,
    "keamanan": 6,
    "keuangan": 13,
    "lingkungan": 60
  }
};

