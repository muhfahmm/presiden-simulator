import { CountryData } from "../../../types";

export const hungaria: CountryData = {
  "name_en": "Hungary",
  "capital": "Budapest",
  "name_id": "Hungaria",
  "lon": 20,
  "lat": 47,
  "flag": "🇭🇺",
  "jumlah_penduduk": 9775564,
  "anggaran": 2042,
  "pendapatan_nasional": "5834",
  "religion": "Katolik",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 4,
    "pembangkit_listrik_tenaga_air": 1,
    "pembangkit_listrik_tenaga_surya": 10,
    "pembangkit_listrik_tenaga_uap": 15,
    "pembangkit_listrik_tenaga_gas": 25,
    "pembangkit_listrik_tenaga_angin": 4
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 5,
    "kereta_bawah_tanah": 12,
    "jalur_kereta": 7,
    "jalan_tol": 32,
    "pelabuhan_laut": 31,
    "bandara": 37,
    "terminal_bus": 4,
    "helipad": 26
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
    "semikonduktor": 5,
    "mobil": 32,
    "sepeda_motor": 25,
    "smelter": 31,
    "semen_beton": 15,
    "kayu": 26
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 28,
    "sapi_perah": 40,
    "sapi_potong": 24,
    "domba_kambing": 18
  },
  "sektor_agrikultur": {
    "padi": 20,
    "gandum_jagung": 16,
    "sayur_umbi": 23,
    "kedelai": 33,
    "kelapa_sawit": 30,
    "kopi_teh_kakao": 10
  },
  "sektor_perikanan": {
    "udang_kerang": 21,
    "ikan": 18
  },
  "sektor_olahan_pangan": {
    "air_mineral": 12,
    "gula": 12,
    "roti": 23,
    "pengolahan_daging": 19,
    "mie_instan": 3
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
    "penjara": 14,
    "gudang_senjata": 12,
    "hangar_tank": 12,
    "akademi_militer": 37,
    "pusat_komando": 13,
    "pangkalan_udara": 37,
    "pangkalan_laut": 38,
    "program_luar_angkasa": 34,
    "pertahanan_siber": 9
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 21,
    "darat": {
        "tank_tempur_utama": 2,
        "apc_ifv": 1,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 21,
        "kapal_destroyer": 19,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 5,
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
        "infanteri_reguler": 210000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 27,
    "intelijen": 20,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 27,
      "misi_mata_mata": 22,
      "misi_sabotase": 2,
      "manajemen_wilayah": 33,
      "program_nuklir": 80 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 14,
        "sepeda_motor": 13,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 31,
          "helikopter_polisi": 32,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 24,
          "kamera_pengawas": 10,
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
      "prasekolah": 2,
      "dasar": 17,
      "menengah": 34,
      "lanjutan": 37,
      "universitas": 27,
      "lembaga_pendidikan": 9,
      "laboratorium": 27,
      "observatorium": 36,
      "pusat_penelitian": 15,
      "pusat_pengembangan": 1,
      "literasi": 74
    },
    "kesehatan": {
      "rumah_sakit_besar": 38,
      "rumah_sakit_kecil": 27,
      "pusat_diagnostik": 6,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 24,
      "kejaksaan": 8,
      "pos_polisi": 40,
      "armada_mobil_polisi": 5808,
      "akademi_polisi": 19,
      "indeks_korupsi": 72,
      "indeks_keamanan": 69
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 27,
      "sirkuit_balap": 6,
      "stadion": 25,
      "stadion_internasional": 30
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 62
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 62
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 188
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 66
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 11 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 31 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 1,
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
    "kesehatan": 18,
    "pendidikan": 24,
    "keamanan": 9,
    "keuangan": 26,
    "lingkungan": 60
  }
};

