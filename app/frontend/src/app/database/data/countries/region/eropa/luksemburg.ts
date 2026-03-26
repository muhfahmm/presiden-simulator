import { CountryData } from "../../../types";

export const luksemburg: CountryData = {
  "name_en": "Luxembourg",
  "capital": "Luxembourg",
  "name_id": "Luksemburg",
  "lon": 6.07,
  "lat": 49.36,
  "flag": "🇱🇺",
  "jumlah_penduduk": 607950,
  "anggaran": 846,
  "pendapatan_nasional": "2417",
  "religion": "Katolik",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
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
    "jalur_sepeda": 17,
    "kereta_bawah_tanah": 10,
    "jalur_kereta": 4,
    "jalan_tol": 19,
    "pelabuhan_laut": 29,
    "bandara": 34,
    "terminal_bus": 34,
    "helipad": 37
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
    "semikonduktor": 38,
    "mobil": 34,
    "sepeda_motor": 12,
    "smelter": 26,
    "semen_beton": 39,
    "kayu": 2
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 7.0,
    "sapi_perah": 34,
    "sapi_potong": 39,
    "domba_kambing": 18
  },
  "sektor_agrikultur": {
    "padi": 3,
    "gandum_jagung": 21.5,
    "sayur_umbi": 3.5,
    "kedelai": 23,
    "kelapa_sawit": 22,
    "kopi_teh_kakao": 24.0
  },
  "sektor_perikanan": {
    "udang_kerang": 15.5,
    "ikan": 1
  },
  "sektor_olahan_pangan": {
    "air_mineral": 19,
    "gula": 10,
    "roti": 21,
    "pengolahan_daging": 22,
    "mie_instan": 9
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 38
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 22,
    "gudang_senjata": 20,
    "hangar_tank": 13,
    "akademi_militer": 34,
    "pusat_komando": 22,
    "pangkalan_udara": 9,
    "pangkalan_laut": 30,
    "program_luar_angkasa": 40,
    "pertahanan_siber": 5
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 31,
    "darat": {
        "tank_tempur_utama": 17,
        "apc_ifv": 6,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 13,
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
        "helikopter_serang": 24,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 310000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 17,
    "intelijen": 20,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 11,
      "misi_mata_mata": 30,
      "misi_sabotase": 5,
      "manajemen_wilayah": 20,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 15,
        "sepeda_motor": 40,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 23,
          "kamera_pengawas": 28,
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
      "prasekolah": 39,
      "dasar": 32,
      "menengah": 30,
      "lanjutan": 6,
      "universitas": 20,
      "lembaga_pendidikan": 39,
      "laboratorium": 17,
      "observatorium": 8,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 38,
      "literasi": 91
    },
    "kesehatan": {
      "rumah_sakit_besar": 18,
      "rumah_sakit_kecil": 27,
      "pusat_diagnostik": 14,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 19,
      "pengadilan": 40,
      "kejaksaan": 34,
      "pos_polisi": 18,
      "armada_mobil_polisi": 3747,
      "akademi_polisi": 40,
      "indeks_korupsi": 67,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 23,
      "stadion": 39,
      "stadion_internasional": 34
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 31
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 38
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 34
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 31
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 13 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 25
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
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 5350,
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
      "kekuatan_lunak": 20,
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
    "kesehatan": 16,
    "pendidikan": 39,
    "keamanan": 39,
    "keuangan": 6,
    "lingkungan": 60
  }
};

