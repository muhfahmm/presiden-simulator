import { CountryData } from "../../../types";

export const chile: CountryData = {
  "name_en": "Chile",
  "capital": "Santiago",
  "name_id": "Chile",
  "lon": -71,
  "lat": -30,
  "flag": "🇨🇱",
  "jumlah_penduduk": 18729160,
  "anggaran": 3257,
  "pendapatan_nasional": "9306",
  "religion": "Katolik",
  "ideology": "Liberalisme",
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
    "jalur_sepeda": 16,
    "kereta_bawah_tanah": 24,
    "jalur_kereta": 40,
    "jalan_tol": 40,
    "pelabuhan_laut": 17,
    "bandara": 34,
    "terminal_bus": 9,
    "helipad": 15
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
    "semikonduktor": 15,
    "mobil": 4,
    "sepeda_motor": 4,
    "smelter": 26,
    "semen_beton": 4,
    "kayu": 20
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 32,
    "sapi_perah": 37,
    "sapi_potong": 30,
    "domba_kambing": 28
  },
  "sektor_agrikultur": {
    "padi": 26,
    "gandum_jagung": 10,
    "sayur_umbi": 18,
    "kedelai": 21,
    "kelapa_sawit": 14,
    "kopi_teh_kakao": 20
  },
  "sektor_perikanan": {
    "udang_kerang": 20,
    "ikan": 25
  },
  "sektor_olahan_pangan": {
    "air_mineral": 35,
    "gula": 24,
    "roti": 17,
    "pengolahan_daging": 16,
    "mie_instan": 4
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 11
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 20,
    "gudang_senjata": 5,
    "hangar_tank": 31,
    "akademi_militer": 13,
    "pusat_komando": 14,
    "pangkalan_udara": 37,
    "pangkalan_laut": 25,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 27
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 34,
    "darat": {
        "tank_tempur_utama": 18,
        "apc_ifv": 18,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 8,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 33,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 39,
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
    "waktu_respon": 10,
    "intelijen": 31,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 37,
      "misi_mata_mata": 39,
      "misi_sabotase": 38,
      "manajemen_wilayah": 9,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 2,
        "sepeda_motor": 21,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 15,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 29,
          "kamera_pengawas": 22,
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
      "prasekolah": 32,
      "dasar": 16,
      "menengah": 22,
      "lanjutan": 5,
      "universitas": 16,
      "lembaga_pendidikan": 35,
      "laboratorium": 10,
      "observatorium": 38,
      "pusat_penelitian": 7,
      "pusat_pengembangan": 20,
      "literasi": 88
    },
    "kesehatan": {
      "rumah_sakit_besar": 14,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 32,
      "harapan_hidup": 12,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 20,
      "kejaksaan": 25,
      "pos_polisi": 2,
      "armada_mobil_polisi": 2723,
      "akademi_polisi": 34,
      "indeks_korupsi": 58,
      "indeks_keamanan": 56
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 7,
      "sirkuit_balap": 28,
      "stadion": 28,
      "stadion_internasional": 40
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 181
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 128
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 144
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 133
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 49 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 68
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 26,
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
    "kesehatan": 20,
    "pendidikan": 37,
    "keamanan": 18,
    "keuangan": 40,
    "lingkungan": 60
  }
};

