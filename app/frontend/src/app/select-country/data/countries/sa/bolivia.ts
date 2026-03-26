import { CountryData } from "../../types/_index";

export const bolivia: CountryData = {
  "name_en": "Bolivia",
  "capital": "Sucre",
  "name_id": "Bolivia",
  "lon": -65,
  "lat": -17,
  "flag": "🇧🇴",
  "jumlah_penduduk": 11353142,
  "anggaran": 428,
  "pendapatan_nasional": "1222",
  "religion": "Katolik",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 9,
    "pembangkit_air": 23,
    "pembangkit_surya": 29,
    "pembangkit_termal": 11,
    "pembangkit_gas": 29,
    "pembangkit_angin": 27,
    "jaringan_listrik": 66
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 7,
    "kereta_bawah_tanah": 33,
    "jalur_kereta": 17,
    "jalan_tol": 34,
    "kualitas_jalan": 59,
    "pelabuhan_laut": 31,
    "bandara": 10,
    "terminal_bus": 21,
    "helipad": 19,
    "cakupan_internet": 89
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 33,
    "uranium": 27,
    "batu_bara": 13,
    "minyak_bumi": 23,
    "gas_alam": 21,
    "garam": 1,
    "nikel": 39,
    "litium": 21,
    "aluminium": 37,
    "tembaga": 30,
    "logam_tanah_jarang": 28,
    "bijih_besi": 29
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 15,
    "mobil": 14,
    "sepeda_motor": 1,
    "smelter": 32,
    "semen_beton": 33,
    "kayu": 23,
    "air_mineral": 35,
    "gula": 15,
    "roti": 22,
    "farmasi": 8,
    "pupuk": 8,
    "pengolahan_daging": 2,
    "mie_instan": 9
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 19.5,
    "sapi_perah": 20,
    "sapi_potong": 21,
    "domba_kambing": 13
  },
  "sektor_agrikultur": {
    "padi": 17,
    "gandum_jagung": 19.0,
    "sayur_umbi": 24.0,
    "kedelai": 13,
    "kelapa_sawit": 31,
    "kopi_teh_kakao": 23.7
  },
  "sektor_perikanan": {
    "udang_kerang": 19.0,
    "ikan": 17
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 26,
    "gudang_senjata": 25,
    "hangar_tank": 7,
    "akademi_militer": 36,
    "pusat_komando": 24,
    "pangkalan_udara": 21,
    "pangkalan_laut": 26,
    "program_luar_angkasa": 4,
    "pertahanan_siber": 26,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 15,
    "darat": {
        "tank_tempur_utama": 8,
        "apc_ifv": 4,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 20,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 26,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 12,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 150000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 18,
    "intelijen": 35,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 33,
      "misi_sabotase": 6,
      "manajemen_wilayah": 33,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 11,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 11,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 33,
          "kamera_pengawas": 28,
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
      "prasekolah": 17,
      "dasar": 7,
      "menengah": 38,
      "lanjutan": 26,
      "universitas": 27,
      "lembaga_pendidikan": 21,
      "laboratorium": 15,
      "observatorium": 7,
      "pusat_penelitian": 26,
      "pusat_pengembangan": 9,
      "literasi": 92
    },
    "kesehatan": {
      "rumah_sakit_besar": 8,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 38,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 27,
      "pengadilan": 10,
      "kejaksaan": 5,
      "pos_polisi": 25,
      "armada_mobil_polisi": 9720,
      "akademi_polisi": 5,
      "indeks_korupsi": 52,
      "indeks_keamanan": 58
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 15,
      "sirkuit_balap": 19,
      "stadion": 30,
      "stadion_internasional": 24
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 25
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 16,
      "kekuatan_keras": 9,
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
    "kesehatan": 31,
    "pendidikan": 8,
    "keamanan": 14,
    "keuangan": 33,
    "lingkungan": 60
  }
};



