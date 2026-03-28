import { CountryData } from "../../../types";

export const montenegro: CountryData = {
  "name_en": "Montenegro",
  "capital": "Podgorica",
  "name_id": "Montenegro",
  "lon": 19.3,
  "lat": 42.5,
  "flag": "🇲🇪",
  "jumlah_penduduk": 631219,
  "anggaran": 68,
  "pendapatan_nasional": "194",
  "religion": "Kristen Ortodoks",
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
    "jalur_sepeda": 15,
    "kereta_bawah_tanah": 6,
    "jalur_kereta": 26,
    "jalan_tol": 1,
    "pelabuhan_laut": 3,
    "bandara": 8,
    "terminal_bus": 40,
    "helipad": 7
    },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 23,
    "uranium": 0,
    "batu_bara": 0,
    "minyak_bumi": 75,
    "gas_alam": 55,
    "garam": 27,
    "nikel": 41,
    "litium": 0,
    "tembaga": 59,
    "aluminium": 0,
    "logam_tanah_jarang": 0,
    "bijih_besi": 38
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 17,
    "mobil": 9,
    "sepeda_motor": 9,
    "smelter": 19,
    "semen_beton": 27,
    "kayu": 19
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 32,
    "sapi_perah": 1,
    "sapi_potong": 25,
    "domba_kambing": 1
  },
  "sektor_agrikultur": {
    "padi": 23,
    "gandum_jagung": 22,
    "sayur_umbi": 15,
    "kedelai": 29,
    "kelapa_sawit": 20,
    "kopi_teh_kakao": 20
  },
  "sektor_perikanan": {
    "udang_kerang": 27,
    "ikan": 12
  },
  "sektor_olahan_pangan": {
    "air_mineral": 29,
    "gula": 3,
    "roti": 32,
    "pengolahan_daging": 17,
    "mie_instan": 11
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 12
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 4,
    "gudang_senjata": 19,
    "hangar_tank": 30,
    "akademi_militer": 4,
    "pusat_komando": 3,
    "pangkalan_udara": 37,
    "pangkalan_laut": 21,
    "program_luar_angkasa": 38,
    "pertahanan_siber": 12
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 22,
    "darat": {
        "tank_tempur_utama": 16,
        "apc_ifv": 22,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 99,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 35,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 177,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 220000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 20,
    "intelijen": 13,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 1,
      "misi_sabotase": 7,
      "manajemen_wilayah": 15,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 35,
        "unit_interceptor_r2": 27,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 39,
          "helikopter_polisi": 37,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 9,
          "kamera_pengawas": 20,
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
      "prasekolah": 3,
      "dasar": 11,
      "menengah": 7,
      "lanjutan": 34,
      "universitas": 20,
      "lembaga_pendidikan": 9,
      "laboratorium": 19,
      "observatorium": 38,
      "pusat_penelitian": 29,
      "pusat_pengembangan": 20,
      "literasi": 83
    },
    "kesehatan": {
      "rumah_sakit_besar": 2,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 4,
      "harapan_hidup": 4,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 3,
      "pengadilan": 12,
      "kejaksaan": 37,
      "pos_polisi": 3,
      "armada_mobil_polisi": 5087,
      "akademi_polisi": 14,
      "indeks_korupsi": 95,
      "indeks_keamanan": 72
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 23,
      "sirkuit_balap": 1,
      "stadion": 7,
      "stadion_internasional": 7
  },

  "un_vote": 104,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 100,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 21,
      "kekuatan_keras": 34,
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
    "kesehatan": 4,
    "pendidikan": 39,
    "keamanan": 9,
    "keuangan": 21,
    "lingkungan": 60
  }
};

