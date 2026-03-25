import { CountryData } from "../../types/_index";

export const meksiko: CountryData = {
  "name_en": "Mexico",
  "capital": "Mexico City",
  "name_id": "Meksiko",
  "lon": -102,
  "lat": 23,
  "flag": "🇲🇽",
  "jumlah_penduduk": 126190788,
  "anggaran": 17404,
  "pendapatan_nasional": "49726",
  "religion": "Katolik",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 3,
    "pembangkit_air": 23,
    "pembangkit_surya": 8,
    "pembangkit_termal": 38,
    "pembangkit_gas": 16,
    "pembangkit_angin": 30,
    "jaringan_listrik": 76
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 29,
    "kereta_bawah_tanah": 21,
    "jalur_kereta": 30,
    "jalan_tol": 5,
    "kualitas_jalan": 56,
    "pelabuhan_laut": 32,
    "bandara": 25,
    "terminal_bus": 34,
    "helipad": 7,
    "cakupan_internet": 88
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 38,
    "uranium": 23,
    "batu_bara": 33,
    "minyak_bumi": 9,
    "gas_alam": 8,
    "garam": 11,
    "nikel": 22,
    "litium": 6,
    "aluminium": 10,
    "tembaga": 20,
    "logam_tanah_jarang": 33,
    "bijih_besi": 33
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 23,
    "mobil": 30,
    "sepeda_motor": 15,
    "smelter": 19,
    "semen_beton": 38,
    "kayu": 6,
    "air_mineral": 17,
    "gula": 13,
    "roti": 8,
    "farmasi": 20,
    "pupuk": 16,
    "pengolahan_daging": 17,
    "mie_instan": 22
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 7.5,
    "sapi_perah": 9,
    "sapi_potong": 18,
    "domba_kambing": 23,
    "udang_kerang": 13.5,
    "ikan": 19,
    "padi": 23,
    "gandum_jagung": 15.5,
    "sayur_umbi": 3.0,
    "kedelai": 34,
    "kelapa_sawit": 24,
    "kopi_teh_kakao": 15.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 5,
    "gudang_senjata": 20,
    "hangar_tank": 4,
    "akademi_militer": 34,
    "pusat_komando": 22,
    "pangkalan_udara": 12,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 17,
    "anggaran_pertahanan": 4972
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 7,
    "darat": {
        "tank_tempur_utama": 122,
        "apc_ifv": 37,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 30,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 58,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 11,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 27,
    "intelijen": 21,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 34,
      "misi_sabotase": 8,
      "manajemen_wilayah": 12,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 3,
          "sepeda_motor": 8,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 37,
          "kamera_pengawas": 36,
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
      "prasekolah": 32,
      "dasar": 12,
      "menengah": 8,
      "lanjutan": 23,
      "universitas": 18,
      "lembaga_pendidikan": 37,
      "laboratorium": 16,
      "observatorium": 5,
      "pusat_penelitian": 8,
      "pusat_pengembangan": 18,
      "literasi": 58
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 34,
      "pusat_diagnostik": 27,
      "harapan_hidup": 33,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 30,
      "pengadilan": 37,
      "kejaksaan": 32,
      "pos_polisi": 7,
      "armada_mobil_polisi": 5622,
      "akademi_polisi": 35,
      "indeks_korupsi": 86,
      "indeks_keamanan": 92
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 28,
      "stadion": 14,
      "stadion_internasional": 3
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 630
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 1548
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 1054
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 309
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 264
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 88 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 262 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 497
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 3200,
    "harga_air": 10400,
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
      "kekuatan_lunak": 17,
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
    "kesehatan": 4,
    "pendidikan": 23,
    "keamanan": 32,
    "keuangan": 9,
    "lingkungan": 60
  }
};



