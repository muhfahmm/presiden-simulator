import { CountryData } from "../../../types";

export const italia: CountryData = {
  "name_en": "Italy",
  "capital": "Rome",
  "name_id": "Italia",
  "lon": 12.83333333,
  "lat": 42.83333333,
  "flag": "🇮🇹",
  "jumlah_penduduk": 60421760,
  "anggaran": 22655,
  "pendapatan_nasional": "64727",
  "religion": "Katolik",
  "ideology": "Demokrasi",
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
    "jalur_sepeda": 16,
    "kereta_bawah_tanah": 20,
    "jalur_kereta": 10,
    "jalan_tol": 38,
    "pelabuhan_laut": 20,
    "bandara": 40,
    "terminal_bus": 28,
    "helipad": 2
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
    "semikonduktor": 12,
    "mobil": 11,
    "sepeda_motor": 1,
    "smelter": 13,
    "semen_beton": 37,
    "kayu": 10
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 17.5,
    "sapi_perah": 33,
    "sapi_potong": 29,
    "domba_kambing": 32
  },
  "sektor_agrikultur": {
    "padi": 34,
    "gandum_jagung": 14.5,
    "sayur_umbi": 20.0,
    "kedelai": 29,
    "kelapa_sawit": 11,
    "kopi_teh_kakao": 30.0
  },
  "sektor_perikanan": {
    "udang_kerang": 25.0,
    "ikan": 26
  },
  "sektor_olahan_pangan": {
    "air_mineral": 10,
    "gula": 25,
    "roti": 10,
    "pengolahan_daging": 34,
    "mie_instan": 4
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 35
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 39,
    "hangar_tank": 18,
    "akademi_militer": 17,
    "pusat_komando": 25,
    "pangkalan_udara": 20,
    "pangkalan_laut": 16,
    "program_luar_angkasa": 10,
    "pertahanan_siber": 9
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 5,
    "darat": {
        "tank_tempur_utama": 4,
        "apc_ifv": 30,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 5,
        "kapal_destroyer": 39,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 40,
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
        "infanteri_reguler": 50000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 15,
    "intelijen": 35,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 26,
      "misi_mata_mata": 19,
      "misi_sabotase": 1,
      "manajemen_wilayah": 6,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 38,
        "sepeda_motor": 39,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 24,
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
      "prasekolah": 20,
      "dasar": 25,
      "menengah": 21,
      "lanjutan": 38,
      "universitas": 34,
      "lembaga_pendidikan": 19,
      "laboratorium": 8,
      "observatorium": 2,
      "pusat_penelitian": 33,
      "pusat_pengembangan": 25,
      "literasi": 79
    },
    "kesehatan": {
      "rumah_sakit_besar": 18,
      "rumah_sakit_kecil": 30,
      "pusat_diagnostik": 9,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 25,
      "kejaksaan": 38,
      "pos_polisi": 33,
      "armada_mobil_polisi": 2648,
      "akademi_polisi": 17,
      "indeks_korupsi": 59,
      "indeks_keamanan": 70
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 37,
      "sirkuit_balap": 28,
      "stadion": 3,
      "stadion_internasional": 27
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 1599
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 1766
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 2288
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 1840
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 1486
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 114 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 340 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 469
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
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 21400,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 5,
      "kekuatan_keras": 22,
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
    "pendidikan": 28,
    "keamanan": 40,
    "keuangan": 18,
    "lingkungan": 60
  }
};

