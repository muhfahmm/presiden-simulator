import { CountryData } from "../../types/_index";

export const tahiti: CountryData = {
  "name_en": "French Polynesia",
  "capital": "Papeetē",
  "name_id": "Tahiti",
  "lon": -140,
  "lat": -15,
  "flag": "🇵🇫",
  "jumlah_penduduk": 277679,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 25,
    "pembangkit_air": 18,
    "pembangkit_surya": 5,
    "pembangkit_termal": 35,
    "pembangkit_gas": 8,
    "pembangkit_angin": 24,
    "jaringan_listrik": 68
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 17,
    "kereta_bawah_tanah": 30,
    "jalur_kereta": 25,
    "jalan_tol": 36,
    "kualitas_jalan": 53,
    "pelabuhan_laut": 13,
    "bandara": 31,
    "terminal_bus": 24,
    "helipad": 16,
    "cakupan_internet": 57
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 13,
    "uranium": 29,
    "batu_bara": 39,
    "minyak_bumi": 23,
    "gas_alam": 12,
    "garam": 9,
    "nikel": 12,
    "litium": 13,
    "aluminium": 2,
    "tembaga": 16,
    "logam_tanah_jarang": 7,
    "bijih_besi": 11
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 2,
    "mobil": 37,
    "sepeda_motor": 17,
    "smelter": 37,
    "semen_beton": 28,
    "kayu": 33,
    "air_mineral": 33,
    "gula": 3,
    "roti": 2,
    "farmasi": 24,
    "pupuk": 12,
    "pengolahan_daging": 2,
    "mie_instan": 34
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 15.5,
    "sapi_perah": 37,
    "sapi_potong": 19,
    "domba_kambing": 18,
    "udang_kerang": 10.0,
    "ikan": 14,
    "padi": 35,
    "gandum_jagung": 4.5,
    "sayur_umbi": 13.0,
    "kedelai": 34,
    "kelapa_sawit": 24,
    "kopi_teh_kakao": 14.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 37,
    "gudang_senjata": 33,
    "hangar_tank": 18,
    "akademi_militer": 21,
    "pusat_komando": 5,
    "pangkalan_udara": 31,
    "pangkalan_laut": 11,
    "program_luar_angkasa": 39,
    "pertahanan_siber": 2,
    "anggaran_pertahanan": 27
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 17,
    "darat": {
        "tank_tempur_utama": 137,
        "apc_ifv": 49,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 166,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 52,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 191,
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
    "waktu_respon": 14,
    "intelijen": 34,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 36,
      "misi_mata_mata": 2,
      "misi_sabotase": 1,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 2,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 36,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 20,
          "kamera_pengawas": 5,
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
      "prasekolah": 40,
      "dasar": 12,
      "menengah": 17,
      "lanjutan": 40,
      "universitas": 33,
      "lembaga_pendidikan": 20,
      "laboratorium": 29,
      "observatorium": 37,
      "pusat_penelitian": 9,
      "pusat_pengembangan": 37,
      "literasi": 56
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 12,
      "harapan_hidup": 40,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 11,
      "kejaksaan": 18,
      "pos_polisi": 39,
      "armada_mobil_polisi": 8885,
      "akademi_polisi": 27,
      "indeks_korupsi": 82,
      "indeks_keamanan": 94
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 1,
      "stadion": 22,
      "stadion_internasional": 1
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 80,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 7280,
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
      "kekuatan_lunak": 14,
      "kekuatan_keras": 37,
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
    "kesehatan": 38,
    "pendidikan": 10,
    "keamanan": 18,
    "keuangan": 37,
    "lingkungan": 60
  }
};



