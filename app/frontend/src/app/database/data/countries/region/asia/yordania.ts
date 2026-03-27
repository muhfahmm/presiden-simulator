import { CountryData } from "../../../types";

export const yordania: CountryData = {
  "name_en": "Jordan",
  "capital": "Amman",
  "name_id": "Yordania",
  "lon": 36,
  "lat": 31,
  "flag": "🇯🇴",
  "jumlah_penduduk": 9956011,
  "anggaran": 457,
  "pendapatan_nasional": "1306",
  "religion": "Islam",
  "ideology": "Monarki",
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
    "jalur_sepeda": 21,
    "kereta_bawah_tanah": 17,
    "jalur_kereta": 8,
    "jalan_tol": 9,
    "pelabuhan_laut": 33,
    "bandara": 32,
    "terminal_bus": 1,
    "helipad": 3
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
    "semikonduktor": 17,
    "mobil": 13,
    "sepeda_motor": 19,
    "smelter": 16,
    "semen_beton": 14,
    "kayu": 35
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 16,
    "sapi_perah": 8,
    "sapi_potong": 14,
    "domba_kambing": 26
  },
  "sektor_agrikultur": {
    "padi": 20,
    "gandum_jagung": 27,
    "sayur_umbi": 32,
    "kedelai": 20,
    "kelapa_sawit": 19,
    "kopi_teh_kakao": 21
  },
  "sektor_perikanan": {
    "udang_kerang": 28,
    "ikan": 37
  },
  "sektor_olahan_pangan": {
    "air_mineral": 16,
    "gula": 26,
    "roti": 11,
    "pengolahan_daging": 7,
    "mie_instan": 33
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 29
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 23,
    "gudang_senjata": 15,
    "hangar_tank": 21,
    "akademi_militer": 9,
    "pusat_komando": 32,
    "pangkalan_udara": 28,
    "pangkalan_laut": 26,
    "program_luar_angkasa": 3,
    "pertahanan_siber": 24
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 31,
    "darat": {
        "tank_tempur_utama": 38,
        "apc_ifv": 5,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 37,
        "kapal_destroyer": 34,
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
        "helikopter_serang": 10,
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
    "waktu_respon": 35,
    "intelijen": 17,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 39,
      "misi_mata_mata": 28,
      "misi_sabotase": 16,
      "manajemen_wilayah": 24,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 13,
        "unit_interceptor_r2": 32,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 40,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 16,
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
      "prasekolah": 4,
      "dasar": 10,
      "menengah": 27,
      "lanjutan": 36,
      "universitas": 33,
      "lembaga_pendidikan": 23,
      "laboratorium": 29,
      "observatorium": 28,
      "pusat_penelitian": 17,
      "pusat_pengembangan": 34,
      "literasi": 69
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 4,
      "pusat_diagnostik": 1,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 12,
      "kejaksaan": 15,
      "pos_polisi": 8,
      "armada_mobil_polisi": 7967,
      "akademi_polisi": 13,
      "indeks_korupsi": 60,
      "indeks_keamanan": 55
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 40,
      "sirkuit_balap": 15,
      "stadion": 19,
      "stadion_internasional": 11
  },

  "un_vote": 82,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 20
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 22
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 25
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 26
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 7,
      "kekuatan_keras": 26,
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
    "kesehatan": 27,
    "pendidikan": 14,
    "keamanan": 28,
    "keuangan": 35,
    "lingkungan": 60
  }
};

