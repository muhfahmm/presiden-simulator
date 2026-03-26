import { CountryData } from "../../types/_index";

export const kamboja: CountryData = {
  "name_en": "Cambodia",
  "capital": "Phnom Penh",
  "name_id": "Kamboja",
  "lon": 105,
  "lat": 13,
  "flag": "🇰🇭",
  "jumlah_penduduk": 16249798,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Buddha",
  "ideology": "Demokrasi",
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
    "jalur_sepeda": 24,
    "kereta_bawah_tanah": 33,
    "jalur_kereta": 10,
    "jalan_tol": 32,
    "pelabuhan_laut": 23,
    "bandara": 21,
    "terminal_bus": 14,
    "helipad": 11
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
    "semikonduktor": 1,
    "mobil": 24,
    "sepeda_motor": 22,
    "smelter": 24,
    "semen_beton": 20,
    "kayu": 7
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 22.0,
    "sapi_perah": 24,
    "sapi_potong": 29,
    "domba_kambing": 33
  },
  "sektor_agrikultur": {
    "padi": 12,
    "gandum_jagung": 24.5,
    "sayur_umbi": 4.5,
    "kedelai": 5,
    "kelapa_sawit": 17,
    "kopi_teh_kakao": 18.7
  },
  "sektor_perikanan": {
    "udang_kerang": 17.0,
    "ikan": 27
  },
  "sektor_olahan_pangan": {
    "air_mineral": 4,
    "gula": 1,
    "roti": 22,
    "pengolahan_daging": 11,
    "mie_instan": 11
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 30
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 9,
    "gudang_senjata": 25,
    "hangar_tank": 22,
    "akademi_militer": 15,
    "pusat_komando": 23,
    "pangkalan_udara": 34,
    "pangkalan_laut": 1,
    "program_luar_angkasa": 26,
    "pertahanan_siber": 35
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 32,
    "darat": {
        "tank_tempur_utama": 1,
        "apc_ifv": 22,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 1,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 9,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 4,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 320000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 29,
    "intelijen": 4,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 1,
      "misi_mata_mata": 24,
      "misi_sabotase": 2,
      "manajemen_wilayah": 5,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 20,
        "sepeda_motor": 30,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 10,
          "kamera_pengawas": 18,
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
      "prasekolah": 22,
      "dasar": 19,
      "menengah": 40,
      "lanjutan": 25,
      "universitas": 33,
      "lembaga_pendidikan": 20,
      "laboratorium": 26,
      "observatorium": 35,
      "pusat_penelitian": 11,
      "pusat_pengembangan": 9,
      "literasi": 65
    },
    "kesehatan": {
      "rumah_sakit_besar": 23,
      "rumah_sakit_kecil": 34,
      "pusat_diagnostik": 21,
      "harapan_hidup": 40,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 36,
      "pengadilan": 11,
      "kejaksaan": 7,
      "pos_polisi": 22,
      "armada_mobil_polisi": 4080,
      "akademi_polisi": 22,
      "indeks_korupsi": 70,
      "indeks_keamanan": 62
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 36,
      "sirkuit_balap": 5,
      "stadion": 29,
      "stadion_internasional": 6
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 18
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 12
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 18
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 28,
      "kekuatan_keras": 29,
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
    "kesehatan": 35,
    "pendidikan": 16,
    "keamanan": 14,
    "keuangan": 39,
    "lingkungan": 60
  }
};

