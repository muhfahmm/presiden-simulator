import { CountryData } from "../../types/_index";

export const australia: CountryData = {
  "name_en": "Australia",
  "capital": "Canberra",
  "name_id": "Australia",
  "lon": 149.13,
  "lat": -35.28,
  "flag": "🇦🇺",
  "jumlah_penduduk": 24982688,
  "anggaran": 16724,
  "pendapatan_nasional": "47782",
  "religion": "Protestan",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 24,
    "pembangkit_air": 23,
    "pembangkit_surya": 14,
    "pembangkit_termal": 35,
    "pembangkit_gas": 23,
    "pembangkit_angin": 16,
    "jaringan_listrik": 93
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 40,
    "kereta_bawah_tanah": 13,
    "jalur_kereta": 4,
    "jalan_tol": 37,
    "kualitas_jalan": 94,
    "pelabuhan_laut": 37,
    "bandara": 34,
    "terminal_bus": 25,
    "helipad": 26,
    "cakupan_internet": 62
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 38,
    "uranium": 28,
    "batu_bara": 29,
    "minyak_bumi": 35,
    "gas_alam": 14,
    "garam": 27,
    "nikel": 33,
    "litium": 39,
    "aluminium": 2,
    "tembaga": 22,
    "logam_tanah_jarang": 10,
    "bijih_besi": 26
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 28,
    "mobil": 21,
    "sepeda_motor": 38,
    "smelter": 35,
    "semen_beton": 7,
    "kayu": 10,
    "air_mineral": 4,
    "gula": 9,
    "roti": 22,
    "farmasi": 3,
    "pupuk": 16,
    "pengolahan_daging": 1,
    "mie_instan": 27
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 23.5,
    "sapi_perah": 13,
    "sapi_potong": 6,
    "domba_kambing": 30
  },
  "sektor_agrikultur": {
    "padi": 27,
    "gandum_jagung": 20.5,
    "sayur_umbi": 3.0,
    "kedelai": 16,
    "kelapa_sawit": 33,
    "kopi_teh_kakao": 33.3
  },
  "sektor_perikanan": {
    "udang_kerang": 11.5,
    "ikan": 17
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 19,
    "gudang_senjata": 4,
    "hangar_tank": 20,
    "akademi_militer": 28,
    "pusat_komando": 15,
    "pangkalan_udara": 10,
    "pangkalan_laut": 26,
    "program_luar_angkasa": 11,
    "pertahanan_siber": 25,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 1,
    "darat": {
        "tank_tempur_utama": 3,
        "apc_ifv": 36,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 39,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 21,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 36,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 10000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 21,
    "intelijen": 20,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 17,
      "misi_sabotase": 36,
      "manajemen_wilayah": 1,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 26,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 3,
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
      "prasekolah": 7,
      "dasar": 15,
      "menengah": 20,
      "lanjutan": 33,
      "universitas": 29,
      "lembaga_pendidikan": 27,
      "laboratorium": 20,
      "observatorium": 17,
      "pusat_penelitian": 8,
      "pusat_pengembangan": 33,
      "literasi": 50
    },
    "kesehatan": {
      "rumah_sakit_besar": 25,
      "rumah_sakit_kecil": 16,
      "pusat_diagnostik": 12,
      "harapan_hidup": 26,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 21,
      "kejaksaan": 16,
      "pos_polisi": 9,
      "armada_mobil_polisi": 1387,
      "akademi_polisi": 35,
      "indeks_korupsi": 50,
      "indeks_keamanan": 80
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 11,
      "sirkuit_balap": 12,
      "stadion": 33,
      "stadion_internasional": 12
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 392
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 213
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 209
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 509
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 635
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 84 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 251 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 764
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 80,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_beras": 8000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
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
      "kekuatan_lunak": 6,
      "kekuatan_keras": 21,
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
    "kesehatan": 37,
    "pendidikan": 7,
    "keamanan": 1,
    "keuangan": 14,
    "lingkungan": 60
  }
};



