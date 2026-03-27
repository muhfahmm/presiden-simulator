import { CountryData } from "../../../types";

export const republik_dominika: CountryData = {
  "name_en": "Dominican Republic",
  "capital": "Santo Domingo",
  "name_id": "Republik dominika",
  "lon": -70.66666666,
  "lat": 19,
  "flag": "🇩🇴",
  "jumlah_penduduk": 10627165,
  "anggaran": 1070,
  "pendapatan_nasional": "3056",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 10,
    "pembangkit_listrik_tenaga_surya": 10,
    "pembangkit_listrik_tenaga_uap": 15,
    "pembangkit_listrik_tenaga_gas": 40,
    "pembangkit_listrik_tenaga_angin": 5
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 9,
    "kereta_bawah_tanah": 21,
    "jalur_kereta": 33,
    "jalan_tol": 23,
    "pelabuhan_laut": 6,
    "bandara": 34,
    "terminal_bus": 11,
    "helipad": 36
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
    "semikonduktor": 6,
    "mobil": 36,
    "sepeda_motor": 1,
    "smelter": 32,
    "semen_beton": 3,
    "kayu": 9
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 35,
    "sapi_perah": 22,
    "sapi_potong": 15,
    "domba_kambing": 27
  },
  "sektor_agrikultur": {
    "padi": 20,
    "gandum_jagung": 34,
    "sayur_umbi": 14,
    "kedelai": 26,
    "kelapa_sawit": 37,
    "kopi_teh_kakao": 29
  },
  "sektor_perikanan": {
    "udang_kerang": 28,
    "ikan": 14
  },
  "sektor_olahan_pangan": {
    "air_mineral": 1,
    "gula": 15,
    "roti": 24,
    "pengolahan_daging": 4,
    "mie_instan": 9
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 13
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 21,
    "gudang_senjata": 32,
    "hangar_tank": 5,
    "akademi_militer": 10,
    "pusat_komando": 7,
    "pangkalan_udara": 18,
    "pangkalan_laut": 8,
    "program_luar_angkasa": 14,
    "pertahanan_siber": 7
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 9,
    "darat": {
        "tank_tempur_utama": 57,
        "apc_ifv": 159,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 169,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 150,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 184,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 90000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 31,
    "intelijen": 35,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 24,
      "misi_mata_mata": 17,
      "misi_sabotase": 30,
      "manajemen_wilayah": 5,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 2,
        "sepeda_motor": 26,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 15,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 11,
          "kamera_pengawas": 6,
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
      "prasekolah": 10,
      "dasar": 13,
      "menengah": 20,
      "lanjutan": 3,
      "universitas": 28,
      "lembaga_pendidikan": 20,
      "laboratorium": 7,
      "observatorium": 19,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 14,
      "literasi": 62
    },
    "kesehatan": {
      "rumah_sakit_besar": 40,
      "rumah_sakit_kecil": 3,
      "pusat_diagnostik": 4,
      "harapan_hidup": 26,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 28,
      "pengadilan": 4,
      "kejaksaan": 6,
      "pos_polisi": 12,
      "armada_mobil_polisi": 3984,
      "akademi_polisi": 4,
      "indeks_korupsi": 85,
      "indeks_keamanan": 84
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 28,
      "sirkuit_balap": 35,
      "stadion": 7,
      "stadion_internasional": 31
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 64
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 34
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 28
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 44
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 7280,
    "harga_obat": 157900,
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
    "kesehatan": 20,
    "pendidikan": 20,
    "keamanan": 9,
    "keuangan": 25,
    "lingkungan": 60
  }
};

