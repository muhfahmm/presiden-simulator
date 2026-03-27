import { CountryData } from "../../../types";

export const uzbekistan: CountryData = {
  "name_en": "Uzbekistan",
  "capital": "Tashkent",
  "name_id": "Uzbekistan",
  "lon": 64,
  "lat": 41,
  "flag": "🇺🇿",
  "jumlah_penduduk": 32955400,
  "anggaran": 875,
  "pendapatan_nasional": "2500",
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
    "jalur_sepeda": 14,
    "kereta_bawah_tanah": 8,
    "jalur_kereta": 37,
    "jalan_tol": 13,
    "pelabuhan_laut": 2,
    "bandara": 28,
    "terminal_bus": 34,
    "helipad": 29
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
    "semikonduktor": 25,
    "mobil": 28,
    "sepeda_motor": 34,
    "smelter": 3,
    "semen_beton": 19,
    "kayu": 12
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 16,
    "sapi_perah": 8,
    "sapi_potong": 20,
    "domba_kambing": 38
  },
  "sektor_agrikultur": {
    "padi": 3,
    "gandum_jagung": 9,
    "sayur_umbi": 8,
    "kedelai": 25,
    "kelapa_sawit": 16,
    "kopi_teh_kakao": 19
  },
  "sektor_perikanan": {
    "udang_kerang": 24,
    "ikan": 13
  },
  "sektor_olahan_pangan": {
    "air_mineral": 32,
    "gula": 1,
    "roti": 10,
    "pengolahan_daging": 12,
    "mie_instan": 40
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 10
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 30,
    "hangar_tank": 14,
    "akademi_militer": 33,
    "pusat_komando": 37,
    "pangkalan_udara": 11,
    "pangkalan_laut": 33,
    "program_luar_angkasa": 23,
    "pertahanan_siber": 12
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 34,
    "darat": {
        "tank_tempur_utama": 147,
        "apc_ifv": 106,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 12,
        "kapal_destroyer": 155,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 45,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 48,
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
    "waktu_respon": 18,
    "intelijen": 22,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 11,
      "misi_mata_mata": 15,
      "misi_sabotase": 23,
      "manajemen_wilayah": 24,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 6,
        "sepeda_motor": 25,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 4,
          "kamera_pengawas": 9,
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
      "prasekolah": 31,
      "dasar": 18,
      "menengah": 36,
      "lanjutan": 40,
      "universitas": 25,
      "lembaga_pendidikan": 1,
      "laboratorium": 20,
      "observatorium": 5,
      "pusat_penelitian": 26,
      "pusat_pengembangan": 40,
      "literasi": 60
    },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 34,
      "harapan_hidup": 36,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 3,
      "pengadilan": 1,
      "kejaksaan": 22,
      "pos_polisi": 3,
      "armada_mobil_polisi": 2015,
      "akademi_polisi": 6,
      "indeks_korupsi": 58,
      "indeks_keamanan": 63
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 37,
      "sirkuit_balap": 3,
      "stadion": 6,
      "stadion_internasional": 26
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 39
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 74
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 46
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 20
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 71
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 18,
      "kekuatan_keras": 3,
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
    "kesehatan": 34,
    "pendidikan": 8,
    "keamanan": 24,
    "keuangan": 31,
    "lingkungan": 60
  }
};

