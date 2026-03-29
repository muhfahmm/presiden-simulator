import { CountryData } from "../../../types";

export const kepulauan_faroe: CountryData = {
  "name_en": "Faroe Islands",
  "capital": "Tórshavn",
  "name_id": "Kepulauan faroe",
  "lon": -7,
  "lat": 62,
  "flag": "🇫🇴",
  "jumlah_penduduk": 48497,
  "anggaran": 97,
  "pendapatan_nasional": "278",
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
    "jalur_sepeda": 20,
    "kereta_bawah_tanah": 26,
    "jalur_kereta": 7,
    "jalan_tol": 33,
    "pelabuhan_laut": 19,
    "bandara": 36,
    "terminal_bus": 35,
    "helipad": 34
    },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 98,
    "uranium": 0,
    "batu_bara": 62,
    "minyak_bumi": 95,
    "gas_alam": 59,
    "garam": 2,
    "nikel": 0,
    "litium": 0,
    "tembaga": 0,
    "aluminium": 72,
    "logam_tanah_jarang": 77,
    "bijih_besi": 43
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 12,
    "mobil": 30,
    "sepeda_motor": 36,
    "smelter": 29,
    "semen_beton": 30,
    "kayu": 16
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 14,
    "sapi_perah": 2,
    "sapi_potong": 13,
    "domba_kambing": 29
  },
  "sektor_agrikultur": {
    "padi": 3,
    "gandum_jagung": 32,
    "sayur_umbi": 17,
    "kedelai": 27,
    "kelapa_sawit": 31,
    "kopi_teh_kakao": 16
  },
  "sektor_perikanan": {
    "udang_kerang": 22,
    "ikan": 2
  },
  "sektor_olahan_pangan": {
    "air_mineral": 11,
    "gula": 6,
    "roti": 3,
    "pengolahan_daging": 15,
    "mie_instan": 27
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 37
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 7,
    "gudang_senjata": 18,
    "hangar_tank": 38,
    "akademi_militer": 23,
    "pusat_komando": 8,
    "pangkalan_udara": 2,
    "pangkalan_laut": 40,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 3
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 23,
    "darat": {
        "tank_tempur_utama": 107,
        "apc_ifv": 45,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 77,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 104,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 142,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 230000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 31,
    "intelijen": 18,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 20,
      "misi_mata_mata": 34,
      "misi_sabotase": 26,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 37,
        "unit_interceptor_r2": 29,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 12,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 20,
          "kamera_pengawas": 21,
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
      "prasekolah": 19,
      "dasar": 1,
      "menengah": 20,
      "lanjutan": 32,
      "universitas": 40,
      "lembaga_pendidikan": 24,
      "laboratorium": 18,
      "observatorium": 39,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 12,
      "literasi": 86
    },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 23,
      "harapan_hidup": 1,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 31,
      "kejaksaan": 17,
      "pos_polisi": 39,
      "armada_mobil_polisi": 5067,
      "akademi_polisi": 6,
      "indeks_korupsi": 94,
      "indeks_keamanan": 68
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 1,
      "sirkuit_balap": 39,
      "stadion": 17,
      "stadion_internasional": 10
  },

  "un_vote": 18,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 34,
      "kepuasan": 88,
      "pendapatan": 4
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
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },

    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 9,
      "kekuatan_keras": 16,
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
    "pendidikan": 32,
    "keamanan": 9,
    "keuangan": 17,
    "lingkungan": 60
  }
};





