import { CountryData } from "../../types/_index";

export const singapura: CountryData = {
  "name_en": "Singapore",
  "capital": "Singapore",
  "name_id": "Singapura",
  "lon": 103.8,
  "lat": 1.36666666,
  "flag": "🇸🇬",
  "jumlah_penduduk": 5638676,
  "anggaran": 4862,
  "pendapatan_nasional": "13890",
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
    "jalur_sepeda": 12,
    "kereta_bawah_tanah": 5,
    "jalur_kereta": 6,
    "jalan_tol": 15,
    "pelabuhan_laut": 40,
    "bandara": 18,
    "terminal_bus": 30,
    "helipad": 37
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
    "semikonduktor": 28,
    "mobil": 26,
    "sepeda_motor": 10,
    "smelter": 22,
    "semen_beton": 10,
    "kayu": 38
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 6.0,
    "sapi_perah": 35,
    "sapi_potong": 3,
    "domba_kambing": 37
  },
  "sektor_agrikultur": {
    "padi": 8,
    "gandum_jagung": 25.5,
    "sayur_umbi": 23.0,
    "kedelai": 25,
    "kelapa_sawit": 29,
    "kopi_teh_kakao": 24.0
  },
  "sektor_perikanan": {
    "udang_kerang": 22.5,
    "ikan": 29
  },
  "sektor_olahan_pangan": {
    "air_mineral": 4,
    "gula": 18,
    "roti": 23,
    "pengolahan_daging": 34,
    "mie_instan": 9
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 12
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 14,
    "gudang_senjata": 31,
    "hangar_tank": 37,
    "akademi_militer": 26,
    "pusat_komando": 35,
    "pangkalan_udara": 36,
    "pangkalan_laut": 20,
    "program_luar_angkasa": 23,
    "pertahanan_siber": 20
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 13,
    "darat": {
        "tank_tempur_utama": 139,
        "apc_ifv": 31,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 8,
        "kapal_destroyer": 91,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 20,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 130000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 23,
    "intelijen": 22,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 21,
      "misi_mata_mata": 19,
      "misi_sabotase": 38,
      "manajemen_wilayah": 27,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 25,
        "sepeda_motor": 27,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 29,
          "helikopter_polisi": 35,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 6,
          "kamera_pengawas": 13,
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
      "prasekolah": 26,
      "dasar": 40,
      "menengah": 11,
      "lanjutan": 4,
      "universitas": 15,
      "lembaga_pendidikan": 18,
      "laboratorium": 35,
      "observatorium": 8,
      "pusat_penelitian": 12,
      "pusat_pengembangan": 33,
      "literasi": 66
    },
    "kesehatan": {
      "rumah_sakit_besar": 1,
      "rumah_sakit_kecil": 23,
      "pusat_diagnostik": 23,
      "harapan_hidup": 25,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 2,
      "pengadilan": 16,
      "kejaksaan": 37,
      "pos_polisi": 6,
      "armada_mobil_polisi": 2865,
      "akademi_polisi": 33,
      "indeks_korupsi": 64,
      "indeks_keamanan": 92
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 38,
      "stadion": 11,
      "stadion_internasional": 25
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 80
    },
    "korporasi": {
      "tarif": 36,
      "kepuasan": 52,
      "pendapatan": 478
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 132
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 231
    },
    "lingkungan": {
      "tarif": 39,
      "kepuasan": 88,
      "pendapatan": 379
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 73 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 147
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
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
    "harga_ayam": 20500,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 10400,
    "harga_obat": 221060,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 12,
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
    "kesehatan": 6,
    "pendidikan": 18,
    "keamanan": 31,
    "keuangan": 19,
    "lingkungan": 60
  }
};

