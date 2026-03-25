import { CountryData } from "../../types/_index";

export const puerto_rico: CountryData = {
  "name_en": "Puerto Rico",
  "capital": "San Juan",
  "name_id": "Puerto rico",
  "lon": -66.5,
  "lat": 18.25,
  "flag": "🇵🇷",
  "jumlah_penduduk": 3195153,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 39,
    "pembangkit_air": 8,
    "pembangkit_surya": 19,
    "pembangkit_termal": 6,
    "pembangkit_gas": 27,
    "pembangkit_angin": 10,
    "jaringan_listrik": 77
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 34,
    "kereta_bawah_tanah": 36,
    "jalur_kereta": 32,
    "jalan_tol": 37,
    "kualitas_jalan": 77,
    "pelabuhan_laut": 31,
    "bandara": 37,
    "terminal_bus": 31,
    "helipad": 8,
    "cakupan_internet": 85
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 9,
    "uranium": 1,
    "batu_bara": 40,
    "minyak_bumi": 7,
    "gas_alam": 23,
    "garam": 12,
    "nikel": 19,
    "litium": 11,
    "aluminium": 12,
    "tembaga": 5,
    "logam_tanah_jarang": 34,
    "bijih_besi": 39
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 1,
    "mobil": 25,
    "sepeda_motor": 35,
    "smelter": 22,
    "semen_beton": 39,
    "kayu": 31,
    "air_mineral": 13,
    "gula": 25,
    "roti": 30,
    "farmasi": 25,
    "pupuk": 39,
    "pengolahan_daging": 6,
    "mie_instan": 9
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 21.5,
    "sapi_perah": 35,
    "sapi_potong": 5,
    "domba_kambing": 2
  },
  "sektor_agrikultur": {
    "padi": 4,
    "gandum_jagung": 31.0,
    "sayur_umbi": 20.5,
    "kedelai": 17,
    "kelapa_sawit": 20,
    "kopi_teh_kakao": 10.0
  },
  "sektor_perikanan": {
    "udang_kerang": 13.5,
    "ikan": 31
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 31,
    "gudang_senjata": 27,
    "hangar_tank": 4,
    "akademi_militer": 37,
    "pusat_komando": 18,
    "pangkalan_udara": 19,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 38,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 13,
    "darat": {
        "tank_tempur_utama": 27,
        "apc_ifv": 16,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 19,
        "kapal_destroyer": 87,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 65,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 104,
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
    "waktu_respon": 28,
    "intelijen": 25,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 37,
      "misi_sabotase": 37,
      "manajemen_wilayah": 30,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 37,
          "sepeda_motor": 35,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 30,
          "helikopter_polisi": 37,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 8,
          "kamera_pengawas": 19,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
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
      "dasar": 8,
      "menengah": 14,
      "lanjutan": 27,
      "universitas": 19,
      "lembaga_pendidikan": 26,
      "laboratorium": 28,
      "observatorium": 40,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 9,
      "literasi": 55
    },
    "kesehatan": {
      "rumah_sakit_besar": 19,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 11,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 15,
      "pengadilan": 36,
      "kejaksaan": 4,
      "pos_polisi": 40,
      "armada_mobil_polisi": 3667,
      "akademi_polisi": 37,
      "indeks_korupsi": 91,
      "indeks_keamanan": 77
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 39,
      "sirkuit_balap": 35,
      "stadion": 6,
      "stadion_internasional": 13
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 2600,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 36,
      "kekuatan_keras": 15,
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
    "pendidikan": 13,
    "keamanan": 28,
    "keuangan": 20,
    "lingkungan": 60
  }
};



