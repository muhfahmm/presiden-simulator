import { CountryData } from "../../../types";

export const belarus: CountryData = {
  "name_en": "Belarus",
  "capital": "Minsk",
  "name_id": "Belarus",
  "lon": 28,
  "lat": 53,
  "flag": "🇧🇾",
  "jumlah_penduduk": 9483499,
  "anggaran": 681,
  "pendapatan_nasional": "1945",
  "religion": "Kristen Ortodoks",
  "ideology": "Nasionalisme",
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
    "jalur_sepeda": 1,
    "kereta_bawah_tanah": 21,
    "jalur_kereta": 1,
    "jalan_tol": 22,
    "pelabuhan_laut": 13,
    "bandara": 22,
    "terminal_bus": 10,
    "helipad": 31
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
    "semikonduktor": 26,
    "mobil": 31,
    "sepeda_motor": 18,
    "smelter": 35,
    "semen_beton": 18,
    "kayu": 3
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 22,
    "sapi_perah": 38,
    "sapi_potong": 35,
    "domba_kambing": 37
  },
  "sektor_agrikultur": {
    "padi": 5,
    "gandum_jagung": 22,
    "sayur_umbi": 8,
    "kedelai": 2,
    "kelapa_sawit": 33,
    "kopi_teh_kakao": 17
  },
  "sektor_perikanan": {
    "udang_kerang": 8,
    "ikan": 14
  },
  "sektor_olahan_pangan": {
    "air_mineral": 29,
    "gula": 21,
    "roti": 37,
    "pengolahan_daging": 20,
    "mie_instan": 20
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
    "gudang_senjata": 36,
    "hangar_tank": 1,
    "akademi_militer": 38,
    "pusat_komando": 17,
    "pangkalan_udara": 6,
    "pangkalan_laut": 36,
    "program_luar_angkasa": 13,
    "pertahanan_siber": 10
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 17,
    "darat": {
        "tank_tempur_utama": 8,
        "apc_ifv": 35,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 32,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 23,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 12,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 170000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 1,
    "intelijen": 24,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 31,
      "misi_sabotase": 15,
      "manajemen_wilayah": 26,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 34,
        "unit_interceptor_r2": 6,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 26,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 38,
          "kamera_pengawas": 10,
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
      "prasekolah": 36,
      "dasar": 16,
      "menengah": 11,
      "lanjutan": 6,
      "universitas": 16,
      "lembaga_pendidikan": 13,
      "laboratorium": 23,
      "observatorium": 33,
      "pusat_penelitian": 12,
      "pusat_pengembangan": 13,
      "literasi": 90
    },
    "kesehatan": {
      "rumah_sakit_besar": 29,
      "rumah_sakit_kecil": 10,
      "pusat_diagnostik": 33,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 1,
      "kejaksaan": 17,
      "pos_polisi": 22,
      "armada_mobil_polisi": 1365,
      "akademi_polisi": 37,
      "indeks_korupsi": 62,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 37,
      "stadion": 30,
      "stadion_internasional": 11
  },

  "un_vote": 102,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 18
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 48
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 64
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 53
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 100,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 39,
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
    "kesehatan": 21,
    "pendidikan": 1,
    "keamanan": 15,
    "keuangan": 39,
    "lingkungan": 60
  }
};

