import { CountryData } from "../../types/_index";

export const sri_lanka: CountryData = {
  "name_en": "Sri Lanka",
  "capital": "Colombo",
  "name_id": "Sri lanka",
  "lon": 81,
  "lat": 7,
  "flag": "🇱🇰",
  "jumlah_penduduk": 21670000,
  "anggaran": 729,
  "pendapatan_nasional": "2084",
  "religion": "Buddha",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 15,
    "pembangkit_air": 8,
    "pembangkit_surya": 7,
    "pembangkit_termal": 3,
    "pembangkit_gas": 3,
    "pembangkit_angin": 2,
    "jaringan_listrik": 67
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 1,
    "kereta_bawah_tanah": 29,
    "jalur_kereta": 37,
    "jalan_tol": 1,
    "kualitas_jalan": 55,
    "pelabuhan_laut": 35,
    "bandara": 31,
    "terminal_bus": 15,
    "helipad": 24,
    "cakupan_internet": 57
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 15,
    "uranium": 25,
    "batu_bara": 23,
    "minyak_bumi": 10,
    "gas_alam": 32,
    "garam": 20,
    "nikel": 32,
    "litium": 17,
    "aluminium": 2,
    "tembaga": 37,
    "logam_tanah_jarang": 17,
    "bijih_besi": 2
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 22,
    "mobil": 4,
    "sepeda_motor": 19,
    "smelter": 20,
    "semen_beton": 24,
    "kayu": 13,
    "air_mineral": 34,
    "gula": 17,
    "roti": 17,
    "farmasi": 7,
    "pupuk": 29,
    "pengolahan_daging": 29,
    "mie_instan": 3
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 33.5,
    "sapi_perah": 7,
    "sapi_potong": 6,
    "domba_kambing": 39
  },
  "sektor_agrikultur": {
    "padi": 27,
    "gandum_jagung": 22.5,
    "sayur_umbi": 31.5,
    "kedelai": 2,
    "kelapa_sawit": 30,
    "kopi_teh_kakao": 29.7
  },
  "sektor_perikanan": {
    "udang_kerang": 28.5,
    "ikan": 38
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 18,
    "gudang_senjata": 4,
    "hangar_tank": 37,
    "akademi_militer": 3,
    "pusat_komando": 35,
    "pangkalan_udara": 28,
    "pangkalan_laut": 9,
    "program_luar_angkasa": 35,
    "pertahanan_siber": 13,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 37,
    "darat": {
        "tank_tempur_utama": 21,
        "apc_ifv": 161,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 167,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 58,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 23,
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
    "waktu_respon": 19,
    "intelijen": 20,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 24,
      "misi_sabotase": 15,
      "manajemen_wilayah": 29,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 10,
          "sepeda_motor": 22,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 1,
          "kamera_pengawas": 18,
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
      "prasekolah": 27,
      "dasar": 26,
      "menengah": 34,
      "lanjutan": 27,
      "universitas": 34,
      "lembaga_pendidikan": 38,
      "laboratorium": 34,
      "observatorium": 38,
      "pusat_penelitian": 25,
      "pusat_pengembangan": 8,
      "literasi": 80
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 35,
      "harapan_hidup": 18,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 19,
      "kejaksaan": 36,
      "pos_polisi": 33,
      "armada_mobil_polisi": 7907,
      "akademi_polisi": 38,
      "indeks_korupsi": 89,
      "indeks_keamanan": 67
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 30,
      "stadion": 39,
      "stadion_internasional": 30
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 33,
      "kepuasan": 52,
      "pendapatan": 69
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 32
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 21
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 26
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 36,
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
    "kesehatan": 7,
    "pendidikan": 13,
    "keamanan": 31,
    "keuangan": 33,
    "lingkungan": 60
  }
};



