import { CountryData } from "../../../types";

export const suriah: CountryData = {
  "name_en": "Syria",
  "capital": "Damascus",
  "name_id": "Suriah",
  "lon": 38,
  "lat": 35,
  "flag": "🇸🇾",
  "jumlah_penduduk": 16906283,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Islam",
  "ideology": "Nasionalisme",
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
    "kereta_bawah_tanah": 9,
    "jalur_kereta": 10,
    "jalan_tol": 33,
    "pelabuhan_laut": 23,
    "bandara": 10,
    "terminal_bus": 23,
    "helipad": 40
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
    "semikonduktor": 40,
    "mobil": 39,
    "sepeda_motor": 32,
    "smelter": 27,
    "semen_beton": 4,
    "kayu": 8
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 35.0,
    "sapi_perah": 17,
    "sapi_potong": 24,
    "domba_kambing": 33
  },
  "sektor_agrikultur": {
    "padi": 31,
    "gandum_jagung": 5.0,
    "sayur_umbi": 19.5,
    "kedelai": 12,
    "kelapa_sawit": 35,
    "kopi_teh_kakao": 21.7
  },
  "sektor_perikanan": {
    "udang_kerang": 13.0,
    "ikan": 30
  },
  "sektor_olahan_pangan": {
    "air_mineral": 21,
    "gula": 4,
    "roti": 22,
    "pengolahan_daging": 21,
    "mie_instan": 6
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 9
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 7,
    "gudang_senjata": 34,
    "hangar_tank": 18,
    "akademi_militer": 40,
    "pusat_komando": 31,
    "pangkalan_udara": 33,
    "pangkalan_laut": 16,
    "program_luar_angkasa": 20,
    "pertahanan_siber": 9
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 14,
    "darat": {
        "tank_tempur_utama": 188,
        "apc_ifv": 187,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 104,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 164,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 19,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 140000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 25,
    "intelijen": 7,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 18,
      "misi_mata_mata": 2,
      "misi_sabotase": 32,
      "manajemen_wilayah": 40,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 17,
        "sepeda_motor": 19,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 16,
          "helikopter_polisi": 9,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 5,
          "kamera_pengawas": 17,
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
      "prasekolah": 8,
      "dasar": 13,
      "menengah": 35,
      "lanjutan": 2,
      "universitas": 12,
      "lembaga_pendidikan": 31,
      "laboratorium": 17,
      "observatorium": 35,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 6,
      "literasi": 60
    },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 29,
      "harapan_hidup": 19,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 3,
      "pengadilan": 36,
      "kejaksaan": 28,
      "pos_polisi": 40,
      "armada_mobil_polisi": 1427,
      "akademi_polisi": 23,
      "indeks_korupsi": 54,
      "indeks_keamanan": 92
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 13,
      "sirkuit_balap": 40,
      "stadion": 34,
      "stadion_internasional": 1
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 7700,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 21,
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
    "kesehatan": 38,
    "pendidikan": 13,
    "keamanan": 27,
    "keuangan": 29,
    "lingkungan": 60
  }
};

