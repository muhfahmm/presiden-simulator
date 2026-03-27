import { CountryData } from "../../../types";

export const azerbaijan: CountryData = {
  "name_en": "Azerbaijan",
  "capital": "Baku",
  "name_id": "Azerbaijan",
  "lon": 47.5,
  "lat": 40.5,
  "flag": "🇦🇿",
  "jumlah_penduduk": 9939800,
  "anggaran": 535,
  "pendapatan_nasional": "1528",
  "religion": "Islam",
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
    "jalur_sepeda": 20,
    "kereta_bawah_tanah": 33,
    "jalur_kereta": 29,
    "jalan_tol": 34,
    "pelabuhan_laut": 2,
    "bandara": 6,
    "terminal_bus": 5,
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
    "semikonduktor": 6,
    "mobil": 1,
    "sepeda_motor": 8,
    "smelter": 4,
    "semen_beton": 35,
    "kayu": 1
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 12,
    "sapi_perah": 12,
    "sapi_potong": 26,
    "domba_kambing": 17
  },
  "sektor_agrikultur": {
    "padi": 31,
    "gandum_jagung": 23,
    "sayur_umbi": 18,
    "kedelai": 2,
    "kelapa_sawit": 5,
    "kopi_teh_kakao": 31
  },
  "sektor_perikanan": {
    "udang_kerang": 12,
    "ikan": 18
  },
  "sektor_olahan_pangan": {
    "air_mineral": 5,
    "gula": 6,
    "roti": 36,
    "pengolahan_daging": 19,
    "mie_instan": 40
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 24
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 21,
    "gudang_senjata": 33,
    "hangar_tank": 2,
    "akademi_militer": 26,
    "pusat_komando": 4,
    "pangkalan_udara": 28,
    "pangkalan_laut": 24,
    "program_luar_angkasa": 2,
    "pertahanan_siber": 14
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 6,
    "darat": {
        "tank_tempur_utama": 11,
        "apc_ifv": 35,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 5,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 25,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 8,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 60000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 2,
    "intelijen": 10,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 31,
      "misi_sabotase": 39,
      "manajemen_wilayah": 26,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 24,
        "unit_interceptor_r2": 38,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 37,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 40,
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
      "prasekolah": 39,
      "dasar": 11,
      "menengah": 18,
      "lanjutan": 17,
      "universitas": 14,
      "lembaga_pendidikan": 16,
      "laboratorium": 11,
      "observatorium": 30,
      "pusat_penelitian": 29,
      "pusat_pengembangan": 18,
      "literasi": 63
    },
    "kesehatan": {
      "rumah_sakit_besar": 21,
      "rumah_sakit_kecil": 29,
      "pusat_diagnostik": 1,
      "harapan_hidup": 31,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 13,
      "kejaksaan": 22,
      "pos_polisi": 28,
      "armada_mobil_polisi": 6700,
      "akademi_polisi": 35,
      "indeks_korupsi": 56,
      "indeks_keamanan": 82
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 37,
      "sirkuit_balap": 13,
      "stadion": 7,
      "stadion_internasional": 10
  },

  "un_vote": 140,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 44
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 28
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 11,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 9 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 19
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
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 5200,
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 40,
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
    "pendidikan": 9,
    "keamanan": 28,
    "keuangan": 22,
    "lingkungan": 60
  }
};

