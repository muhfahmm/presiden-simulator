import { CountryData } from "../../types/_index";

export const turkmenistan: CountryData = {
  "name_en": "Turkmenistan",
  "capital": "Ashgabat",
  "name_id": "Turkmenistan",
  "lon": 60,
  "lat": 40,
  "flag": "🇹🇲",
  "jumlah_penduduk": 5850908,
  "anggaran": 438,
  "pendapatan_nasional": "1250",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 11,
    "pembangkit_air": 1,
    "pembangkit_surya": 2,
    "pembangkit_termal": 29,
    "pembangkit_gas": 17,
    "pembangkit_angin": 21,
    "jaringan_listrik": 68
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 27,
    "kereta_bawah_tanah": 20,
    "jalur_kereta": 31,
    "jalan_tol": 12,
    "kualitas_jalan": 52,
    "pelabuhan_laut": 7,
    "bandara": 16,
    "terminal_bus": 11,
    "helipad": 33,
    "cakupan_internet": 78
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 33,
    "uranium": 1,
    "batu_bara": 35,
    "minyak_bumi": 2,
    "gas_alam": 3,
    "garam": 4,
    "nikel": 24,
    "litium": 22,
    "aluminium": 6,
    "tembaga": 20,
    "logam_tanah_jarang": 7,
    "bijih_besi": 14
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 35,
    "mobil": 6,
    "sepeda_motor": 15,
    "smelter": 39,
    "semen_beton": 2,
    "kayu": 36,
    "air_mineral": 32,
    "gula": 6,
    "roti": 17,
    "farmasi": 25,
    "pupuk": 4,
    "pengolahan_daging": 17,
    "mie_instan": 36
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 16.5,
    "sapi_perah": 34,
    "sapi_potong": 2,
    "domba_kambing": 35
  },
  "sektor_agrikultur": {
    "padi": 29,
    "gandum_jagung": 28.0,
    "sayur_umbi": 22.0,
    "kedelai": 5,
    "kelapa_sawit": 2,
    "kopi_teh_kakao": 15.7
  },
  "sektor_perikanan": {
    "udang_kerang": 18.0,
    "ikan": 21
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 17,
    "gudang_senjata": 32,
    "hangar_tank": 12,
    "akademi_militer": 1,
    "pusat_komando": 37,
    "pangkalan_udara": 23,
    "pangkalan_laut": 35,
    "program_luar_angkasa": 19,
    "pertahanan_siber": 40,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 17,
    "darat": {
        "tank_tempur_utama": 104,
        "apc_ifv": 137,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 17,
        "kapal_destroyer": 14,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 87,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 140,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 170000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 15,
    "intelijen": 18,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 11,
      "misi_mata_mata": 34,
      "misi_sabotase": 2,
      "manajemen_wilayah": 3,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 9,
          "sepeda_motor": 40,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 37,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 14,
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
      "prasekolah": 20,
      "dasar": 34,
      "menengah": 20,
      "lanjutan": 24,
      "universitas": 17,
      "lembaga_pendidikan": 6,
      "laboratorium": 9,
      "observatorium": 23,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 4,
      "literasi": 80
    },
    "kesehatan": {
      "rumah_sakit_besar": 27,
      "rumah_sakit_kecil": 21,
      "pusat_diagnostik": 37,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 38,
      "pengadilan": 28,
      "kejaksaan": 5,
      "pos_polisi": 2,
      "armada_mobil_polisi": 6765,
      "akademi_polisi": 17,
      "indeks_korupsi": 56,
      "indeks_keamanan": 79
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 30,
      "sirkuit_balap": 5,
      "stadion": 4,
      "stadion_internasional": 19
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 14
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 25
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 38
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 14
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 35
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 30
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
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
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 25,
      "kekuatan_keras": 22,
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
    "kesehatan": 26,
    "pendidikan": 17,
    "keamanan": 12,
    "keuangan": 24,
    "lingkungan": 60
  }
};



