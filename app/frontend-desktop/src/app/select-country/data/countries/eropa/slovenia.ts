import { CountryData } from "../../types/_index";

export const slovenia: CountryData = {
  "name_en": "Slovenia",
  "capital": "Ljubljana",
  "name_id": "Slovenia",
  "lon": 14.81666666,
  "lat": 46.11666666,
  "flag": "🇸🇮",
  "jumlah_penduduk": 2073894,
  "anggaran": 632,
  "pendapatan_nasional": "1806",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 5,
    "pembangkit_air": 25,
    "pembangkit_surya": 11,
    "pembangkit_termal": 32,
    "pembangkit_gas": 4,
    "pembangkit_angin": 32,
    "jaringan_listrik": 68
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 18,
    "kereta_bawah_tanah": 5,
    "jalur_kereta": 13,
    "jalan_tol": 14,
    "kualitas_jalan": 90,
    "pelabuhan_laut": 11,
    "bandara": 26,
    "terminal_bus": 23,
    "helipad": 35,
    "cakupan_internet": 58
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 14,
    "uranium": 9,
    "batu_bara": 28,
    "minyak_bumi": 13,
    "gas_alam": 15,
    "garam": 27,
    "nikel": 3,
    "litium": 11,
    "aluminium": 7,
    "tembaga": 15,
    "logam_tanah_jarang": 7,
    "bijih_besi": 17
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 10,
    "mobil": 26,
    "sepeda_motor": 40,
    "smelter": 36,
    "semen_beton": 4,
    "kayu": 12,
    "air_mineral": 6,
    "gula": 14,
    "roti": 23,
    "farmasi": 28,
    "pupuk": 16,
    "pengolahan_daging": 40,
    "mie_instan": 25
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 25.0,
    "sapi_perah": 35,
    "sapi_potong": 14,
    "domba_kambing": 16,
    "udang_kerang": 36.5,
    "ikan": 18,
    "padi": 15,
    "gandum_jagung": 5.0,
    "sayur_umbi": 33.5,
    "kedelai": 21,
    "kelapa_sawit": 1,
    "kopi_teh_kakao": 15.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 19,
    "gudang_senjata": 16,
    "hangar_tank": 11,
    "akademi_militer": 36,
    "pusat_komando": 3,
    "pangkalan_udara": 29,
    "pangkalan_laut": 18,
    "program_luar_angkasa": 17,
    "pertahanan_siber": 33,
    "anggaran_pertahanan": 180
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 2,
    "darat": {
        "tank_tempur_utama": 78,
        "apc_ifv": 64,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 5,
        "kapal_destroyer": 45,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 68,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 62,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 20000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 17,
    "intelijen": 9,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 28,
      "misi_sabotase": 16,
      "manajemen_wilayah": 39,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 8,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 14,
          "helikopter_polisi": 16,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 18,
          "kamera_pengawas": 24,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 29,
      "dasar": 16,
      "menengah": 22,
      "lanjutan": 21,
      "universitas": 2,
      "lembaga_pendidikan": 36,
      "laboratorium": 39,
      "observatorium": 8,
      "pusat_penelitian": 14,
      "pusat_pengembangan": 25,
      "literasi": 69
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 5,
      "pusat_diagnostik": 19,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 1,
      "pengadilan": 16,
      "kejaksaan": 37,
      "pos_polisi": 33,
      "armada_mobil_polisi": 6972,
      "akademi_polisi": 14,
      "indeks_korupsi": 91,
      "indeks_keamanan": 56
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 3,
      "stadion": 27,
      "stadion_internasional": 29
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 61
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 60
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 32
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 52
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 15
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
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
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 800,
    "harga_air": 7280,
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
    "kesehatan": 2,
    "pendidikan": 6,
    "keamanan": 19,
    "keuangan": 10,
    "lingkungan": 60
  }
};



