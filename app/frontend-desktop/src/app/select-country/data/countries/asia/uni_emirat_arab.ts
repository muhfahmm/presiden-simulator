import { CountryData } from "../../types/_index";

export const uni_emirat_arab: CountryData = {
  "name_en": "United Arab Emirates",
  "capital": "Abu Dhabi",
  "name_id": "Uni emirat arab",
  "lon": 54,
  "lat": 24,
  "flag": "🇦🇪",
  "jumlah_penduduk": 9630959,
  "anggaran": 4959,
  "pendapatan_nasional": "14168",
  "religion": "Islam",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 11,
    "pembangkit_air": 40,
    "pembangkit_surya": 15,
    "pembangkit_termal": 19,
    "pembangkit_gas": 11,
    "pembangkit_angin": 21,
    "jaringan_listrik": 64
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 23,
    "kereta_bawah_tanah": 25,
    "jalur_kereta": 35,
    "jalan_tol": 36,
    "kualitas_jalan": 80,
    "pelabuhan_laut": 13,
    "bandara": 17,
    "terminal_bus": 14,
    "helipad": 19,
    "cakupan_internet": 67
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 5,
    "uranium": 25,
    "batu_bara": 2,
    "minyak_bumi": 36,
    "gas_alam": 36,
    "garam": 30,
    "nikel": 11,
    "litium": 11,
    "aluminium": 4,
    "tembaga": 27,
    "logam_tanah_jarang": 36,
    "bijih_besi": 38
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 13,
    "mobil": 13,
    "sepeda_motor": 28,
    "smelter": 35,
    "semen_beton": 31,
    "kayu": 13,
    "air_mineral": 20,
    "gula": 32,
    "roti": 30,
    "farmasi": 4,
    "pupuk": 37,
    "pengolahan_daging": 22,
    "mie_instan": 11
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 24.5,
    "sapi_perah": 27,
    "sapi_potong": 35,
    "domba_kambing": 13,
    "udang_kerang": 33.0,
    "ikan": 26,
    "padi": 20,
    "gandum_jagung": 22.0,
    "sayur_umbi": 14.5,
    "kedelai": 6,
    "kelapa_sawit": 7,
    "kopi_teh_kakao": 26.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 34,
    "gudang_senjata": 16,
    "hangar_tank": 31,
    "akademi_militer": 15,
    "pusat_komando": 6,
    "pangkalan_udara": 15,
    "pangkalan_laut": 28,
    "program_luar_angkasa": 21,
    "pertahanan_siber": 24,
    "anggaran_pertahanan": 1416
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 1,
    "darat": {
        "tank_tempur_utama": 41,
        "apc": 105,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 142,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 194,
        "helikopter_serang": 81,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 27,
          "sepeda_motor": 3,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 22,
          "kamera_pengawas": 35,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 33,
    "intelijen": 5,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 32,
      "misi_mata_mata": 23,
      "misi_sabotase": 37,
      "manajemen_wilayah": 17,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 27,
      "dasar": 23,
      "menengah": 30,
      "lanjutan": 34,
      "universitas": 35,
      "lembaga_pendidikan": 36,
      "laboratorium": 35,
      "observatorium": 9,
      "pusat_penelitian": 37,
      "pusat_pengembangan": 22,
      "literasi": 91
    },
    "kesehatan": {
      "rumah_sakit_besar": 25,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 1,
      "harapan_hidup": 26,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 36,
      "kejaksaan": 12,
      "pos_polisi": 18,
      "armada_mobil_polisi": 5790,
      "akademi_polisi": 22,
      "indeks_korupsi": 87,
      "indeks_keamanan": 76
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 23,
      "stadion": 1,
      "stadion_internasional": 23
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 211
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 81
    },
    "penghasilan": {
      "tarif": 32,
      "kepuasan": 61,
      "pendapatan": 204
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 200
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 419
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 227
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 7280,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 32,
      "kekuatan_keras": 29,
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
    "pendidikan": 16,
    "keamanan": 32,
    "keuangan": 17,
    "lingkungan": 60
  }
};



