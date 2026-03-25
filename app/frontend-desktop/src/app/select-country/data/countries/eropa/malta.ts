import { CountryData } from "../../types/_index";

export const malta: CountryData = {
  "name_en": "Malta",
  "capital": "Valletta",
  "name_id": "Malta",
  "lon": 14.3,
  "lat": 35.53,
  "flag": "🇲🇹",
  "jumlah_penduduk": 484630,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 13,
    "pembangkit_air": 13,
    "pembangkit_surya": 16,
    "pembangkit_termal": 31,
    "pembangkit_gas": 6,
    "pembangkit_angin": 23,
    "jaringan_listrik": 62
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 2,
    "kereta_bawah_tanah": 25,
    "jalur_kereta": 15,
    "jalan_tol": 34,
    "kualitas_jalan": 73,
    "pelabuhan_laut": 30,
    "bandara": 37,
    "terminal_bus": 11,
    "helipad": 27,
    "cakupan_internet": 69
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 29,
    "uranium": 34,
    "batu_bara": 14,
    "minyak_bumi": 39,
    "gas_alam": 31,
    "garam": 28,
    "nikel": 25,
    "litium": 25,
    "aluminium": 1,
    "tembaga": 9,
    "logam_tanah_jarang": 8,
    "bijih_besi": 3
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 21,
    "mobil": 3,
    "sepeda_motor": 37,
    "smelter": 27,
    "semen_beton": 16,
    "kayu": 6,
    "air_mineral": 29,
    "gula": 38,
    "roti": 14,
    "farmasi": 7,
    "pupuk": 7,
    "pengolahan_daging": 28,
    "mie_instan": 39
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": {
    "ayam_unggas": 23.0,
    "sapi_perah": 3,
    "sapi_potong": 20,
    "domba_kambing": 24,
    "udang_kerang": 15.5,
    "ikan": 5
  },
  "sektor_agrikultur": {
    "padi": 6,
    "gandum_jagung": 24.0,
    "sayur_umbi": 19.5,
    "kedelai": 17,
    "kelapa_sawit": 14,
    "kopi_teh_kakao": 28.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 6,
    "gudang_senjata": 11,
    "hangar_tank": 12,
    "akademi_militer": 28,
    "pusat_komando": 1,
    "pangkalan_udara": 2,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 22,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 19,
    "darat": {
        "tank_tempur_utama": 32,
        "apc_ifv": 5,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 30,
        "kapal_destroyer": 33,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 27,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 3,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 190000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 3,
    "intelijen": 36,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 35,
      "misi_sabotase": 13,
      "manajemen_wilayah": 14,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 3,
          "sepeda_motor": 13,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 1,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 13,
          "kamera_pengawas": 5,
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
      "prasekolah": 13,
      "dasar": 6,
      "menengah": 36,
      "lanjutan": 26,
      "universitas": 4,
      "lembaga_pendidikan": 22,
      "laboratorium": 28,
      "observatorium": 13,
      "pusat_penelitian": 9,
      "pusat_pengembangan": 17,
      "literasi": 83
    },
    "kesehatan": {
      "rumah_sakit_besar": 13,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 31,
      "harapan_hidup": 39,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 29,
      "pengadilan": 19,
      "kejaksaan": 25,
      "pos_polisi": 31,
      "armada_mobil_polisi": 9865,
      "akademi_polisi": 5,
      "indeks_korupsi": 89,
      "indeks_keamanan": 82
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 21,
      "sirkuit_balap": 24,
      "stadion": 26,
      "stadion_internasional": 3
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 14
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 21,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 12
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 1
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
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
      "kekuatan_lunak": 17,
      "kekuatan_keras": 39,
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
    "kesehatan": 17,
    "pendidikan": 34,
    "keamanan": 16,
    "keuangan": 11,
    "lingkungan": 60
  }
};



