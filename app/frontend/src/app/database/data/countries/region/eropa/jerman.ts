import { CountryData } from "../../types/_index";

export const jerman: CountryData = {
  "name_en": "Germany",
  "capital": "Berlin",
  "name_id": "Jerman",
  "lon": 9,
  "lat": 51,
  "flag": "🇩🇪",
  "jumlah_penduduk": 82905782,
  "anggaran": 44629,
  "pendapatan_nasional": "127510",
  "religion": "Protestan",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 3,
    "pembangkit_listrik_tenaga_surya": 15,
    "pembangkit_listrik_tenaga_uap": 35,
    "pembangkit_listrik_tenaga_gas": 15,
    "pembangkit_listrik_tenaga_angin": 32
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 28,
    "kereta_bawah_tanah": 35,
    "jalur_kereta": 4,
    "jalan_tol": 1,
    "pelabuhan_laut": 13,
    "bandara": 4,
    "terminal_bus": 38,
    "helipad": 19
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
    "semikonduktor": 33,
    "mobil": 31,
    "sepeda_motor": 16,
    "smelter": 34,
    "semen_beton": 31,
    "kayu": 20
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 18.5,
    "sapi_perah": 35,
    "sapi_potong": 16,
    "domba_kambing": 17
  },
  "sektor_agrikultur": {
    "padi": 33,
    "gandum_jagung": 17.0,
    "sayur_umbi": 20.0,
    "kedelai": 9,
    "kelapa_sawit": 28,
    "kopi_teh_kakao": 14.0
  },
  "sektor_perikanan": {
    "udang_kerang": 30.0,
    "ikan": 15
  },
  "sektor_olahan_pangan": {
    "air_mineral": 38,
    "gula": 5,
    "roti": 10,
    "pengolahan_daging": 34,
    "mie_instan": 12
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 23
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 32,
    "gudang_senjata": 17,
    "hangar_tank": 40,
    "akademi_militer": 34,
    "pusat_komando": 37,
    "pangkalan_udara": 9,
    "pangkalan_laut": 7,
    "program_luar_angkasa": 26,
    "pertahanan_siber": 29
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 27,
    "darat": {
        "tank_tempur_utama": 10,
        "apc_ifv": 27,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 10,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 14,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 31,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 270000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 25,
    "intelijen": 10,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 26,
      "misi_mata_mata": 1,
      "misi_sabotase": 6,
      "manajemen_wilayah": 33,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 8,
        "sepeda_motor": 20,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 40,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 38,
          "kamera_pengawas": 19,
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
      "prasekolah": 11,
      "dasar": 25,
      "menengah": 18,
      "lanjutan": 15,
      "universitas": 1,
      "lembaga_pendidikan": 10,
      "laboratorium": 6,
      "observatorium": 15,
      "pusat_penelitian": 30,
      "pusat_pengembangan": 28,
      "literasi": 84
    },
    "kesehatan": {
      "rumah_sakit_besar": 31,
      "rumah_sakit_kecil": 25,
      "pusat_diagnostik": 28,
      "harapan_hidup": 4,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 8,
      "kejaksaan": 7,
      "pos_polisi": 33,
      "armada_mobil_polisi": 542,
      "akademi_polisi": 10,
      "indeks_korupsi": 69,
      "indeks_keamanan": 87
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 18,
      "sirkuit_balap": 2,
      "stadion": 40,
      "stadion_internasional": 35
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 1299
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 283
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1963
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 775
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 1581
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 224 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 670 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 931
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
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
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
      "kekuatan_lunak": 30,
      "kekuatan_keras": 18,
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
    "kesehatan": 30,
    "pendidikan": 35,
    "keamanan": 12,
    "keuangan": 17,
    "lingkungan": 60
  }
};

