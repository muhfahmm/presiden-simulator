import { CountryData } from "../../../types";

export const hong_kong: CountryData = {
  "name_en": "Hong Kong",
  "capital": "City of Victoria",
  "name_id": "Hong kong",
  "lon": 114.188,
  "lat": 22.267,
  "flag": "🇭🇰",
  "jumlah_penduduk": 7451000,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Buddha",
  "ideology": "Kapitalisme",
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
    "jalur_sepeda": 17,
    "kereta_bawah_tanah": 34,
    "jalur_kereta": 22,
    "jalan_tol": 37,
    "pelabuhan_laut": 39,
    "bandara": 19,
    "terminal_bus": 31,
    "helipad": 7
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
    "semikonduktor": 10,
    "mobil": 19,
    "sepeda_motor": 21,
    "smelter": 9,
    "semen_beton": 32,
    "kayu": 24
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 28,
    "sapi_perah": 14,
    "sapi_potong": 36,
    "domba_kambing": 15
  },
  "sektor_agrikultur": {
    "padi": 4,
    "gandum_jagung": 22,
    "sayur_umbi": 14,
    "kedelai": 30,
    "kelapa_sawit": 11,
    "kopi_teh_kakao": 18
  },
  "sektor_perikanan": {
    "udang_kerang": 32,
    "ikan": 11
  },
  "sektor_olahan_pangan": {
    "air_mineral": 2,
    "gula": 5,
    "roti": 23,
    "pengolahan_daging": 19,
    "mie_instan": 17
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 18
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 26,
    "gudang_senjata": 6,
    "hangar_tank": 2,
    "akademi_militer": 15,
    "pusat_komando": 31,
    "pangkalan_udara": 2,
    "pangkalan_laut": 37,
    "program_luar_angkasa": 26,
    "pertahanan_siber": 1
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 34,
    "darat": {
        "tank_tempur_utama": 171,
        "apc_ifv": 109,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 11,
        "kapal_destroyer": 197,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 125,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 153,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 340000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 1,
    "intelijen": 28,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 39,
      "misi_mata_mata": 10,
      "misi_sabotase": 32,
      "manajemen_wilayah": 3,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 13,
        "unit_interceptor_r2": 13,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 1,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 1,
          "kamera_pengawas": 11,
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
      "dasar": 8,
      "menengah": 22,
      "lanjutan": 27,
      "universitas": 38,
      "lembaga_pendidikan": 5,
      "laboratorium": 25,
      "observatorium": 39,
      "pusat_penelitian": 19,
      "pusat_pengembangan": 36,
      "literasi": 59
    },
    "kesehatan": {
      "rumah_sakit_besar": 18,
      "rumah_sakit_kecil": 17,
      "pusat_diagnostik": 21,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 17,
      "kejaksaan": 15,
      "pos_polisi": 33,
      "armada_mobil_polisi": 7778,
      "akademi_polisi": 40,
      "indeks_korupsi": 86,
      "indeks_keamanan": 66
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 7,
      "sirkuit_balap": 1,
      "stadion": 31,
      "stadion_internasional": 33
  },

  "un_vote": 27,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
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
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 14980,
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 20,
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
    "kesehatan": 14,
    "pendidikan": 4,
    "keamanan": 15,
    "keuangan": 35,
    "lingkungan": 60
  }
};

