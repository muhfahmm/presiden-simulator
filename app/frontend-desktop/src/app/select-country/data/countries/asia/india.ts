import { CountryData } from "../../types/_index";

export const india: CountryData = {
  "name_en": "India",
  "capital": "New Delhi",
  "name_id": "India",
  "lon": 77,
  "lat": 20,
  "flag": "🇮🇳",
  "jumlah_penduduk": 1352617328,
  "anggaran": 38309,
  "pendapatan_nasional": "109453",
  "religion": "Hindu",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 23,
    "pembangkit_listrik_tenaga_air": 12,
    "pembangkit_listrik_tenaga_surya": 10,
    "pembangkit_listrik_tenaga_uap": 70,
    "pembangkit_listrik_tenaga_gas": 3,
    "pembangkit_listrik_tenaga_angin": 2
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 22,
    "kereta_bawah_tanah": 25,
    "jalur_kereta": 29,
    "jalan_tol": 15,
    "pelabuhan_laut": 6,
    "bandara": 20,
    "terminal_bus": 14,
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
    "semikonduktor": 31,
    "mobil": 23,
    "sepeda_motor": 5,
    "smelter": 3,
    "semen_beton": 38,
    "kayu": 8
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 29.5,
    "sapi_perah": 31,
    "sapi_potong": 29,
    "domba_kambing": 4
  },
  "sektor_agrikultur": {
    "padi": 6,
    "gandum_jagung": 22.0,
    "sayur_umbi": 14.5,
    "kedelai": 32,
    "kelapa_sawit": 9,
    "kopi_teh_kakao": 19.7
  },
  "sektor_perikanan": {
    "udang_kerang": 31.5,
    "ikan": 9
  },
  "sektor_olahan_pangan": {
    "air_mineral": 35,
    "gula": 4,
    "roti": 17,
    "pengolahan_daging": 37,
    "mie_instan": 37
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 26
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 31,
    "gudang_senjata": 32,
    "hangar_tank": 16,
    "akademi_militer": 26,
    "pusat_komando": 29,
    "pangkalan_udara": 39,
    "pangkalan_laut": 14,
    "program_luar_angkasa": 15,
    "pertahanan_siber": 40
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 37,
    "darat": {
        "tank_tempur_utama": 7,
        "apc_ifv": 17,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 20,
        "kapal_destroyer": 16,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 7,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 15,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 370000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 11,
    "intelijen": 40,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 17,
      "misi_mata_mata": 19,
      "misi_sabotase": 4,
      "manajemen_wilayah": 3,
      "program_nuklir": 100 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 8,
        "sepeda_motor": 10,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 8,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 29,
          "kamera_pengawas": 35,
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
      "dasar": 3,
      "menengah": 31,
      "lanjutan": 23,
      "universitas": 26,
      "lembaga_pendidikan": 19,
      "laboratorium": 25,
      "observatorium": 16,
      "pusat_penelitian": 23,
      "pusat_pengembangan": 5,
      "literasi": 63
    },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 18,
      "pusat_diagnostik": 40,
      "harapan_hidup": 3,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 16,
      "kejaksaan": 40,
      "pos_polisi": 12,
      "armada_mobil_polisi": 7944,
      "akademi_polisi": 18,
      "indeks_korupsi": 68,
      "indeks_keamanan": 54
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 19,
      "stadion": 13,
      "stadion_internasional": 40
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 1262
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 1658
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 2793
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 1109
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 332
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 192 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 575 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 2111
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_beras": 8000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 33,
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
    "kesehatan": 22,
    "pendidikan": 29,
    "keamanan": 19,
    "keuangan": 39,
    "lingkungan": 60
  }
};

