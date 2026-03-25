import { CountryData } from "../../types/_index";

export const swiss: CountryData = {
  "name_en": "Switzerland",
  "capital": "Bern",
  "name_id": "Swiss",
  "lon": 8,
  "lat": 47,
  "flag": "🇨🇭",
  "jumlah_penduduk": 8513227,
  "anggaran": 8848,
  "pendapatan_nasional": "25280",
  "religion": "Katolik",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 34,
    "pembangkit_air": 2,
    "pembangkit_surya": 2,
    "pembangkit_termal": 2,
    "pembangkit_gas": 22,
    "pembangkit_angin": 22,
    "jaringan_listrik": 89
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 4,
    "kereta_bawah_tanah": 1,
    "jalur_kereta": 5,
    "jalan_tol": 40,
    "kualitas_jalan": 68,
    "pelabuhan_laut": 28,
    "bandara": 13,
    "terminal_bus": 14,
    "helipad": 24,
    "cakupan_internet": 71
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 15,
    "uranium": 8,
    "batu_bara": 10,
    "minyak_bumi": 20,
    "gas_alam": 18,
    "garam": 12,
    "nikel": 22,
    "litium": 35,
    "aluminium": 40,
    "tembaga": 19,
    "logam_tanah_jarang": 29,
    "bijih_besi": 35
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 20,
    "mobil": 14,
    "sepeda_motor": 4,
    "smelter": 40,
    "semen_beton": 4,
    "kayu": 4,
    "air_mineral": 22,
    "gula": 20,
    "roti": 27,
    "farmasi": 6,
    "pupuk": 12,
    "pengolahan_daging": 12,
    "mie_instan": 18
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 30.0,
    "sapi_perah": 14,
    "sapi_potong": 11,
    "domba_kambing": 32
  },
  "sektor_agrikultur": {
    "padi": 40,
    "gandum_jagung": 15.5,
    "sayur_umbi": 20.5,
    "kedelai": 6,
    "kelapa_sawit": 26,
    "kopi_teh_kakao": 16.0
  },
  "sektor_perikanan": {
    "udang_kerang": 17.0,
    "ikan": 8
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 19,
    "gudang_senjata": 5,
    "hangar_tank": 26,
    "akademi_militer": 29,
    "pusat_komando": 4,
    "pangkalan_udara": 26,
    "pangkalan_laut": 30,
    "program_luar_angkasa": 4,
    "pertahanan_siber": 29,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 21,
    "darat": {
        "tank_tempur_utama": 120,
        "apc_ifv": 163,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 164,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 50,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 123,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 210000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 2,
    "intelijen": 1,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 11,
      "misi_sabotase": 16,
      "manajemen_wilayah": 38,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 20,
          "sepeda_motor": 20,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 38,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 24,
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
      "prasekolah": 30,
      "dasar": 1,
      "menengah": 26,
      "lanjutan": 36,
      "universitas": 33,
      "lembaga_pendidikan": 12,
      "laboratorium": 16,
      "observatorium": 10,
      "pusat_penelitian": 4,
      "pusat_pengembangan": 13,
      "literasi": 64
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 4,
      "harapan_hidup": 7,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 24,
      "pengadilan": 5,
      "kejaksaan": 16,
      "pos_polisi": 18,
      "armada_mobil_polisi": 2129,
      "akademi_polisi": 5,
      "indeks_korupsi": 84,
      "indeks_keamanan": 57
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 34,
      "stadion": 24,
      "stadion_internasional": 13
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 540
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 672
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 446
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 90
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 786
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 45 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 133 },
    "lainnya": {
      "tarif": 34,
      "kepuasan": 93,
      "pendapatan": 502
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
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 25,
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
    "kesehatan": 34,
    "pendidikan": 3,
    "keamanan": 40,
    "keuangan": 36,
    "lingkungan": 60
  }
};



