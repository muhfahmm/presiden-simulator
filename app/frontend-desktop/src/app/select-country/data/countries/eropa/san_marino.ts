import { CountryData } from "../../types/_index";

export const san_marino: CountryData = {
  "name_en": "San Marino",
  "capital": "City of San Marino",
  "name_id": "San marino",
  "lon": 12.41666666,
  "lat": 43.76666666,
  "flag": "🇸🇲",
  "jumlah_penduduk": 33785,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 1,
    "pembangkit_air": 35,
    "pembangkit_surya": 5,
    "pembangkit_termal": 24,
    "pembangkit_gas": 36,
    "pembangkit_angin": 2,
    "jaringan_listrik": 61
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 22,
    "kereta_bawah_tanah": 36,
    "jalur_kereta": 7,
    "jalan_tol": 2,
    "kualitas_jalan": 65,
    "pelabuhan_laut": 31,
    "bandara": 36,
    "terminal_bus": 26,
    "helipad": 20,
    "cakupan_internet": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 36,
    "uranium": 22,
    "batu_bara": 39,
    "minyak_bumi": 39,
    "gas_alam": 24,
    "garam": 20,
    "nikel": 2,
    "litium": 20,
    "aluminium": 39,
    "tembaga": 40,
    "logam_tanah_jarang": 5,
    "bijih_besi": 9
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 37,
    "mobil": 24,
    "sepeda_motor": 16,
    "smelter": 31,
    "semen_beton": 40,
    "kayu": 6,
    "air_mineral": 13,
    "gula": 33,
    "roti": 10,
    "farmasi": 29,
    "pupuk": 25,
    "pengolahan_daging": 35,
    "mie_instan": 36
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": {
    "ayam_unggas": 15.5,
    "sapi_perah": 29,
    "sapi_potong": 19,
    "domba_kambing": 24,
    "udang_kerang": 10.0,
    "ikan": 25
  },
  "sektor_agrikultur": {
    "padi": 1,
    "gandum_jagung": 24.0,
    "sayur_umbi": 21.0,
    "kedelai": 15,
    "kelapa_sawit": 21,
    "kopi_teh_kakao": 17.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 34,
    "gudang_senjata": 27,
    "hangar_tank": 19,
    "akademi_militer": 3,
    "pusat_komando": 7,
    "pangkalan_udara": 7,
    "pangkalan_laut": 35,
    "program_luar_angkasa": 22,
    "pertahanan_siber": 39,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 22,
    "darat": {
        "tank_tempur_utama": 87,
        "apc_ifv": 114,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 25,
        "kapal_destroyer": 119,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 70,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 185,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 220000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 28,
    "intelijen": 8,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 2,
      "misi_mata_mata": 2,
      "misi_sabotase": 4,
      "manajemen_wilayah": 19,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 3,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 40,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 35,
          "kamera_pengawas": 7,
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
      "prasekolah": 15,
      "dasar": 39,
      "menengah": 25,
      "lanjutan": 10,
      "universitas": 18,
      "lembaga_pendidikan": 19,
      "laboratorium": 6,
      "observatorium": 18,
      "pusat_penelitian": 30,
      "pusat_pengembangan": 11,
      "literasi": 50
    },
    "kesehatan": {
      "rumah_sakit_besar": 7,
      "rumah_sakit_kecil": 28,
      "pusat_diagnostik": 32,
      "harapan_hidup": 9,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 4,
      "pengadilan": 36,
      "kejaksaan": 21,
      "pos_polisi": 33,
      "armada_mobil_polisi": 9208,
      "akademi_polisi": 22,
      "indeks_korupsi": 86,
      "indeks_keamanan": 73
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 27,
      "sirkuit_balap": 20,
      "stadion": 19,
      "stadion_internasional": 32
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 30800,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 5200,
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
      "kekuatan_lunak": 6,
      "kekuatan_keras": 30,
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
    "kesehatan": 8,
    "pendidikan": 5,
    "keamanan": 34,
    "keuangan": 11,
    "lingkungan": 60
  }
};



