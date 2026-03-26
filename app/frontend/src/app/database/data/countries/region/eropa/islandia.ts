import { CountryData } from "../../../types";

export const islandia: CountryData = {
  "name_en": "Iceland",
  "capital": "Reykjavik",
  "name_id": "Islandia",
  "lon": -18,
  "lat": 65,
  "flag": "🇮🇸",
  "jumlah_penduduk": 352721,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 30,
    "pembangkit_listrik_tenaga_surya": 0,
    "pembangkit_listrik_tenaga_uap": 70,
    "pembangkit_listrik_tenaga_gas": 0,
    "pembangkit_listrik_tenaga_angin": 0
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 12,
    "kereta_bawah_tanah": 8,
    "jalur_kereta": 21,
    "jalan_tol": 18,
    "pelabuhan_laut": 22,
    "bandara": 16,
    "terminal_bus": 34,
    "helipad": 23
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
    "semikonduktor": 18,
    "mobil": 39,
    "sepeda_motor": 38,
    "smelter": 18,
    "semen_beton": 32,
    "kayu": 5
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 23.5,
    "sapi_perah": 22,
    "sapi_potong": 9,
    "domba_kambing": 16
  },
  "sektor_agrikultur": {
    "padi": 27,
    "gandum_jagung": 28.5,
    "sayur_umbi": 30.5,
    "kedelai": 23,
    "kelapa_sawit": 14,
    "kopi_teh_kakao": 25.0
  },
  "sektor_perikanan": {
    "udang_kerang": 23.5,
    "ikan": 14
  },
  "sektor_olahan_pangan": {
    "air_mineral": 2,
    "gula": 37,
    "roti": 25,
    "pengolahan_daging": 12,
    "mie_instan": 25
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 24
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 35,
    "gudang_senjata": 12,
    "hangar_tank": 15,
    "akademi_militer": 19,
    "pusat_komando": 19,
    "pangkalan_udara": 19,
    "pangkalan_laut": 22,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 6
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 7,
    "darat": {
        "tank_tempur_utama": 19,
        "apc_ifv": 22,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 11,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 10,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 6,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 70000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 37,
    "intelijen": 28,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 5,
      "misi_mata_mata": 34,
      "misi_sabotase": 31,
      "manajemen_wilayah": 13,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 36,
        "sepeda_motor": 4,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 36,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 37,
          "kamera_pengawas": 2,
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
      "menengah": 3,
      "lanjutan": 29,
      "universitas": 37,
      "lembaga_pendidikan": 34,
      "laboratorium": 11,
      "observatorium": 16,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 18,
      "literasi": 57
    },
    "kesehatan": {
      "rumah_sakit_besar": 29,
      "rumah_sakit_kecil": 12,
      "pusat_diagnostik": 5,
      "harapan_hidup": 33,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 1,
      "pengadilan": 9,
      "kejaksaan": 8,
      "pos_polisi": 22,
      "armada_mobil_polisi": 1677,
      "akademi_polisi": 14,
      "indeks_korupsi": 59,
      "indeks_keamanan": 83
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 40,
      "sirkuit_balap": 7,
      "stadion": 3,
      "stadion_internasional": 27
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 22
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 6
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
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
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
      "kekuatan_lunak": 29,
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
    "kesehatan": 32,
    "pendidikan": 28,
    "keamanan": 9,
    "keuangan": 22,
    "lingkungan": 60
  }
};

