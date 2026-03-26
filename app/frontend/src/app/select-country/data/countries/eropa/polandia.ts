import { CountryData } from "../../types/_index";

export const polandia: CountryData = {
  "name_en": "Poland",
  "capital": "Warsaw",
  "name_id": "Polandia",
  "lon": 20,
  "lat": 52,
  "flag": "🇵🇱",
  "jumlah_penduduk": 37974750,
  "anggaran": 8167,
  "pendapatan_nasional": "23335",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 32,
    "pembangkit_air": 29,
    "pembangkit_surya": 28,
    "pembangkit_termal": 33,
    "pembangkit_gas": 7,
    "pembangkit_angin": 4,
    "jaringan_listrik": 84
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 14,
    "kereta_bawah_tanah": 35,
    "jalur_kereta": 21,
    "jalan_tol": 11,
    "kualitas_jalan": 81,
    "pelabuhan_laut": 32,
    "bandara": 23,
    "terminal_bus": 28,
    "helipad": 20,
    "cakupan_internet": 76
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 9,
    "uranium": 6,
    "batu_bara": 25,
    "minyak_bumi": 9,
    "gas_alam": 25,
    "garam": 34,
    "nikel": 12,
    "litium": 27,
    "aluminium": 32,
    "tembaga": 31,
    "logam_tanah_jarang": 36,
    "bijih_besi": 1
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 36,
    "mobil": 39,
    "sepeda_motor": 35,
    "smelter": 11,
    "semen_beton": 13,
    "kayu": 22,
    "air_mineral": 7,
    "gula": 32,
    "roti": 40,
    "farmasi": 37,
    "pupuk": 5,
    "pengolahan_daging": 15,
    "mie_instan": 3
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 22.5,
    "sapi_perah": 6,
    "sapi_potong": 14,
    "domba_kambing": 10
  },
  "sektor_agrikultur": {
    "padi": 5,
    "gandum_jagung": 15.5,
    "sayur_umbi": 22.0,
    "kedelai": 6,
    "kelapa_sawit": 7,
    "kopi_teh_kakao": 11.0
  },
  "sektor_perikanan": {
    "udang_kerang": 24.5,
    "ikan": 29
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 16,
    "gudang_senjata": 9,
    "hangar_tank": 29,
    "akademi_militer": 28,
    "pusat_komando": 13,
    "pangkalan_udara": 26,
    "pangkalan_laut": 36,
    "program_luar_angkasa": 25,
    "pertahanan_siber": 16,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 30,
    "darat": {
        "tank_tempur_utama": 184,
        "apc_ifv": 163,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 4,
        "kapal_destroyer": 197,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 121,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 34,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 300000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 3,
    "intelijen": 15,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 24,
      "misi_sabotase": 36,
      "manajemen_wilayah": 13,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 15,
          "sepeda_motor": 39,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 30,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 23,
          "kamera_pengawas": 30,
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
      "prasekolah": 22,
      "dasar": 29,
      "menengah": 10,
      "lanjutan": 11,
      "universitas": 10,
      "lembaga_pendidikan": 5,
      "laboratorium": 33,
      "observatorium": 31,
      "pusat_penelitian": 6,
      "pusat_pengembangan": 34,
      "literasi": 60
    },
    "kesehatan": {
      "rumah_sakit_besar": 31,
      "rumah_sakit_kecil": 30,
      "pusat_diagnostik": 34,
      "harapan_hidup": 32,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 4,
      "pengadilan": 36,
      "kejaksaan": 3,
      "pos_polisi": 18,
      "armada_mobil_polisi": 3804,
      "akademi_polisi": 20,
      "indeks_korupsi": 72,
      "indeks_keamanan": 78
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 33,
      "sirkuit_balap": 34,
      "stadion": 4,
      "stadion_internasional": 33
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 112
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 392
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 80
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 763
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 382
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 41 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 123 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 591
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
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 39,
      "kekuatan_keras": 23,
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
    "kesehatan": 11,
    "pendidikan": 32,
    "keamanan": 17,
    "keuangan": 39,
    "lingkungan": 60
  }
};



