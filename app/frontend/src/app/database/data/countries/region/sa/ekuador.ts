import { CountryData } from "../../../types";

export const ekuador: CountryData = {
  "name_en": "Ecuador",
  "capital": "Quito",
  "name_id": "Ekuador",
  "lon": -77.5,
  "lat": -2,
  "flag": "🇪🇨",
  "jumlah_penduduk": 17084357,
  "anggaran": 1118,
  "pendapatan_nasional": "3195",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 60,
    "pembangkit_listrik_tenaga_surya": 5,
    "pembangkit_listrik_tenaga_uap": 15,
    "pembangkit_listrik_tenaga_gas": 15,
    "pembangkit_listrik_tenaga_angin": 4
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 11,
    "kereta_bawah_tanah": 19,
    "jalur_kereta": 23,
    "jalan_tol": 8,
    "pelabuhan_laut": 36,
    "bandara": 1,
    "terminal_bus": 11,
    "helipad": 21
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
    "semikonduktor": 25,
    "mobil": 10,
    "sepeda_motor": 13,
    "smelter": 5,
    "semen_beton": 33,
    "kayu": 35
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 22,
    "sapi_perah": 35,
    "sapi_potong": 14,
    "domba_kambing": 11
  },
  "sektor_agrikultur": {
    "padi": 38,
    "gandum_jagung": 18,
    "sayur_umbi": 26,
    "kedelai": 33,
    "kelapa_sawit": 27,
    "kopi_teh_kakao": 30
  },
  "sektor_perikanan": {
    "udang_kerang": 5,
    "ikan": 35
  },
  "sektor_olahan_pangan": {
    "air_mineral": 25,
    "gula": 34,
    "roti": 19,
    "pengolahan_daging": 12,
    "mie_instan": 3
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 32
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 27,
    "gudang_senjata": 10,
    "hangar_tank": 11,
    "akademi_militer": 10,
    "pusat_komando": 7,
    "pangkalan_udara": 6,
    "pangkalan_laut": 6,
    "program_luar_angkasa": 39,
    "pertahanan_siber": 22
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 20,
    "darat": {
        "tank_tempur_utama": 22,
        "apc_ifv": 31,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 38,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 9,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 25,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 200000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 39,
    "intelijen": 12,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 12,
      "misi_mata_mata": 21,
      "misi_sabotase": 22,
      "manajemen_wilayah": 38,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 4,
        "sepeda_motor": 8,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 6,
          "kamera_pengawas": 35,
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
      "prasekolah": 12,
      "dasar": 5,
      "menengah": 37,
      "lanjutan": 14,
      "universitas": 30,
      "lembaga_pendidikan": 13,
      "laboratorium": 27,
      "observatorium": 9,
      "pusat_penelitian": 12,
      "pusat_pengembangan": 26,
      "literasi": 60
    },
    "kesehatan": {
      "rumah_sakit_besar": 33,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 34,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 2,
      "kejaksaan": 6,
      "pos_polisi": 29,
      "armada_mobil_polisi": 4812,
      "akademi_polisi": 24,
      "indeks_korupsi": 90,
      "indeks_keamanan": 59
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 14,
      "sirkuit_balap": 14,
      "stadion": 9,
      "stadion_internasional": 27
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 28
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 56
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 61
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 91
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 34
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 83
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 7200,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 3,
      "kekuatan_keras": 4,
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
    "kesehatan": 17,
    "pendidikan": 40,
    "keamanan": 3,
    "keuangan": 22,
    "lingkungan": 60
  }
};

