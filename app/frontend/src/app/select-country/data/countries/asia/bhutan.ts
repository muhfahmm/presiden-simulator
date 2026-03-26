import { CountryData } from "../../types/_index";

export const bhutan: CountryData = {
  "name_en": "Bhutan",
  "capital": "Thimphu",
  "name_id": "Bhutan",
  "lon": 90.5,
  "lat": 27.5,
  "flag": "🇧🇹",
  "jumlah_penduduk": 754394,
  "anggaran": 27,
  "pendapatan_nasional": "78",
  "religion": "Buddha",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 21,
    "pembangkit_air": 12,
    "pembangkit_surya": 21,
    "pembangkit_termal": 35,
    "pembangkit_gas": 37,
    "pembangkit_angin": 33,
    "jaringan_listrik": 77
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 22,
    "kereta_bawah_tanah": 15,
    "jalur_kereta": 2,
    "jalan_tol": 34,
    "kualitas_jalan": 55,
    "pelabuhan_laut": 25,
    "bandara": 14,
    "terminal_bus": 29,
    "helipad": 26,
    "cakupan_internet": 58
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 18,
    "uranium": 3,
    "batu_bara": 9,
    "minyak_bumi": 8,
    "gas_alam": 31,
    "garam": 26,
    "nikel": 17,
    "litium": 17,
    "aluminium": 6,
    "tembaga": 19,
    "logam_tanah_jarang": 2,
    "bijih_besi": 29
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 32,
    "mobil": 26,
    "sepeda_motor": 8,
    "smelter": 14,
    "semen_beton": 30,
    "kayu": 40,
    "air_mineral": 26,
    "gula": 4,
    "roti": 37,
    "farmasi": 1,
    "pupuk": 29,
    "pengolahan_daging": 16,
    "mie_instan": 23
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 20.5,
    "sapi_perah": 23,
    "sapi_potong": 25,
    "domba_kambing": 12
  },
  "sektor_agrikultur": {
    "padi": 30,
    "gandum_jagung": 27.5,
    "sayur_umbi": 30.0,
    "kedelai": 7,
    "kelapa_sawit": 18,
    "kopi_teh_kakao": 23.0
  },
  "sektor_perikanan": {
    "udang_kerang": 22.0,
    "ikan": 25
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 30,
    "gudang_senjata": 36,
    "hangar_tank": 38,
    "akademi_militer": 40,
    "pusat_komando": 20,
    "pangkalan_udara": 33,
    "pangkalan_laut": 32,
    "program_luar_angkasa": 8,
    "pertahanan_siber": 1,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 24,
    "darat": {
        "tank_tempur_utama": 8,
        "apc_ifv": 22,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 12,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 9,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 21,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 240000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 6,
    "intelijen": 40,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 12,
      "misi_mata_mata": 32,
      "misi_sabotase": 28,
      "manajemen_wilayah": 9,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 29,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 26,
          "kamera_pengawas": 31,
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
      "prasekolah": 35,
      "dasar": 31,
      "menengah": 30,
      "lanjutan": 39,
      "universitas": 22,
      "lembaga_pendidikan": 16,
      "laboratorium": 21,
      "observatorium": 16,
      "pusat_penelitian": 11,
      "pusat_pengembangan": 11,
      "literasi": 54
    },
    "kesehatan": {
      "rumah_sakit_besar": 35,
      "rumah_sakit_kecil": 17,
      "pusat_diagnostik": 39,
      "harapan_hidup": 31,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 3,
      "kejaksaan": 9,
      "pos_polisi": 5,
      "armada_mobil_polisi": 865,
      "akademi_polisi": 1,
      "indeks_korupsi": 71,
      "indeks_keamanan": 73
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 20,
      "sirkuit_balap": 8,
      "stadion": 16,
      "stadion_internasional": 28
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 0
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
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 10400,
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
      "kekuatan_lunak": 37,
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
    "kesehatan": 35,
    "pendidikan": 29,
    "keamanan": 10,
    "keuangan": 7,
    "lingkungan": 60
  }
};



