import { CountryData } from "../../../types";

export const indonesia: CountryData = {
  "name_en": "Indonesia",
  "capital": "Jakarta",
  "name_id": "Indonesia",
  "lon": 120,
  "lat": -5,
  "flag": "🇮🇩",
  "jumlah_penduduk": 267663435,
  "anggaran": 13807,
  "pendapatan_nasional": "39448",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 10,
    "pembangkit_listrik_tenaga_surya": 2,
    "pembangkit_listrik_tenaga_uap": 67,
    "pembangkit_listrik_tenaga_gas": 18,
    "pembangkit_listrik_tenaga_angin": 1
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 22,
    "kereta_bawah_tanah": 34,
    "jalur_kereta": 17,
    "jalan_tol": 6,
    "pelabuhan_laut": 3,
    "bandara": 30,
    "terminal_bus": 16,
    "helipad": 2
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 140,
    "uranium": 0,
    "batu_bara": 616,
    "minyak_bumi": 612,
    "gas_alam": 59,
    "garam": 2,
    "nikel": 1600,
    "litium": 0,
    "tembaga": 920,
    "aluminium": 600,
    "logam_tanah_jarang": 1,
    "bijih_besi": 12
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 33,
    "mobil": 6,
    "sepeda_motor": 30,
    "smelter": 38,
    "semen_beton": 38,
    "kayu": 39
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": {

    "ayam_unggas": 3,
    "sapi_perah": 14,
    "sapi_potong": 17,
    "domba_kambing": 10
  },
  "sektor_agrikultur": {
    "padi": 29,
    "gandum_jagung": 15,
    "sayur_umbi": 20,
    "kedelai": 14,
    "kelapa_sawit": 31,
    "kopi_teh_kakao": 23
  },
  "sektor_perikanan": {
    "udang_kerang": 31,
    "ikan": 13
  },
  "sektor_olahan_pangan": {
    "air_mineral": 14,
    "gula": 5,
    "roti": 17,
    "pengolahan_daging": 7,
    "mie_instan": 16
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 14
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
  "sektor_pertahanan": {
    "penjara": 9,
    "gudang_senjata": 39,
    "hangar_tank": 7,
    "akademi_militer": 23,
    "pusat_komando": 7,
    "pangkalan_udara": 37,
    "pangkalan_laut": 11,
    "program_luar_angkasa": 13,
    "pertahanan_siber": 39
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 34,
    "darat": {
      "tank_tempur_utama": 31,
      "apc_ifv": 9,
      "artileri_berat": 26,
      "sistem_peluncur_roket": 0,
      "pertahanan_udara_mobile": 0,
      "kendaraan_taktis": 0
    },
    "laut": {
      "kapal_induk": 29,
      "kapal_destroyer": 40,
      "kapal_korvet": 0,
      "kapal_selam_nuklir": 0,
      "kapal_selam_regular": 0,
      "kapal_ranjau": 0,
      "kapal_logistik": 0
    },
    "udara": {
      "jet_tempur_siluman": 8,
      "jet_tempur_interceptor": 0,
      "pesawat_pengebom": 0,
      "helikopter_serang": 8,
      "pesawat_pengintai": 2,
      "drone_intai_uav": 0,
      "drone_kamikaze": 0,
      "pesawat_angkut": 0
    }
    ,
    "personel": {
      "infanteri_reguler": 340000,
      "pasukan_khusus": 30000,
      "pasukan_cadangan": 400000
    }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 1,
    "intelijen": 13,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": {
      "misi_serangan": 20,
      "misi_mata_mata": 39,
      "misi_sabotase": 23,
      "manajemen_wilayah": 40,
      "program_nuklir": 0
    }
  },
  "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 23,
        "unit_interceptor_r2": 9,
        "unit_k9": 23
      },
      "taktis_khusus": {
        "swat": 8,
        "helikopter_polisi": 4,
        "anti_huru_hara": 62
      },
      "pusat_komando": {
        "kantor_polisi": 36,
        "kamera_pengawas": 15,
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
      "prasekolah": 27,
      "dasar": 31,
      "menengah": 21,
      "lanjutan": 38,
      "universitas": 37,
      "lembaga_pendidikan": 24,
      "laboratorium": 10,
      "observatorium": 12,
      "pusat_penelitian": 38,
      "pusat_pengembangan": 18,
      "literasi": 65
    },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 27,
      "pusat_diagnostik": 24,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 27,
      "pengadilan": 26,
      "kejaksaan": 12,
      "pos_polisi": 7,
      "armada_mobil_polisi": 7586,
      "akademi_polisi": 29,
      "indeks_korupsi": 73,
      "indeks_keamanan": 78
    }
  },
  "sektor_olahraga": {
    "kolam_renang": 35,
    "sirkuit_balap": 35,
    "stadion": 37,
    "stadion_internasional": 11
  },

  "un_vote": 128,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 532
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 220
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 1159
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 1343
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 1060
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 70 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 208 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 724
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 2600,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },

  // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "reputasi_diplomatik": "Unggul",
    "aliansi_aktif": ["Amerika Serikat", "Jepang", "Australia", "India"],
    "pengaruh_global": 78.2,
    "peringkat_diplomasi": 12,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 7,
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
    "kesehatan": 37,
    "pendidikan": 19,
    "keamanan": 9,
    "keuangan": 2,
    "lingkungan": 60
  }
};