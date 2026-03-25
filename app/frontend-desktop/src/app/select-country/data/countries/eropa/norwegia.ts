import { CountryData } from "../../types/_index";

export const norwegia: CountryData = {
  "name_en": "Norway",
  "capital": "Oslo",
  "name_id": "Norwegia",
  "lon": 10,
  "lat": 62,
  "flag": "🇳🇴",
  "jumlah_penduduk": 5311916,
  "anggaran": 5639,
  "pendapatan_nasional": "16112",
  "religion": "Protestan",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 40,
    "pembangkit_air": 7,
    "pembangkit_surya": 10,
    "pembangkit_termal": 24,
    "pembangkit_gas": 8,
    "pembangkit_angin": 5,
    "jaringan_listrik": 78
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 31,
    "kereta_bawah_tanah": 31,
    "jalur_kereta": 7,
    "jalan_tol": 9,
    "kualitas_jalan": 87,
    "pelabuhan_laut": 39,
    "bandara": 17,
    "terminal_bus": 16,
    "helipad": 23,
    "cakupan_internet": 67
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 11,
    "uranium": 11,
    "batu_bara": 12,
    "minyak_bumi": 24,
    "gas_alam": 6,
    "garam": 8,
    "nikel": 24,
    "litium": 10,
    "aluminium": 32,
    "tembaga": 40,
    "logam_tanah_jarang": 12,
    "bijih_besi": 31
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 32,
    "mobil": 5,
    "sepeda_motor": 16,
    "smelter": 21,
    "semen_beton": 5,
    "kayu": 30,
    "air_mineral": 33,
    "gula": 37,
    "roti": 12,
    "farmasi": 17,
    "pupuk": 12,
    "pengolahan_daging": 17,
    "mie_instan": 23
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 31.0,
    "sapi_perah": 18,
    "sapi_potong": 22,
    "domba_kambing": 7
  },
  "sektor_agrikultur": {
    "padi": 31,
    "gandum_jagung": 22.0,
    "sayur_umbi": 27.0,
    "kedelai": 2,
    "kelapa_sawit": 20,
    "kopi_teh_kakao": 23.7
  },
  "sektor_perikanan": {
    "udang_kerang": 28.5,
    "ikan": 11
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 10,
    "hangar_tank": 9,
    "akademi_militer": 20,
    "pusat_komando": 24,
    "pangkalan_udara": 5,
    "pangkalan_laut": 7,
    "program_luar_angkasa": 7,
    "pertahanan_siber": 14,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 40,
    "darat": {
        "tank_tempur_utama": 122,
        "apc_ifv": 72,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 11,
        "kapal_destroyer": 100,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 120,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 198,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 400000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 31,
    "intelijen": 17,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 4,
      "misi_mata_mata": 7,
      "misi_sabotase": 39,
      "manajemen_wilayah": 4,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 25,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 16,
          "helikopter_polisi": 38,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 8,
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
      "prasekolah": 1,
      "dasar": 26,
      "menengah": 9,
      "lanjutan": 13,
      "universitas": 1,
      "lembaga_pendidikan": 20,
      "laboratorium": 19,
      "observatorium": 36,
      "pusat_penelitian": 5,
      "pusat_pengembangan": 13,
      "literasi": 82
    },
    "kesehatan": {
      "rumah_sakit_besar": 14,
      "rumah_sakit_kecil": 37,
      "pusat_diagnostik": 22,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 16,
      "pengadilan": 34,
      "kejaksaan": 29,
      "pos_polisi": 4,
      "armada_mobil_polisi": 1953,
      "akademi_polisi": 32,
      "indeks_korupsi": 76,
      "indeks_keamanan": 82
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 22,
      "stadion": 40,
      "stadion_internasional": 25
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 187
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 146
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 125
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 158
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 45
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 29 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 85 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 13
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 10,
      "kekuatan_keras": 31,
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
    "kesehatan": 32,
    "pendidikan": 14,
    "keamanan": 25,
    "keuangan": 21,
    "lingkungan": 60
  }
};



