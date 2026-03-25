import { CountryData } from "../../types/_index";

export const lithuania: CountryData = {
  "name_en": "Lithuania",
  "capital": "Vilnius",
  "name_id": "Lithuania",
  "lon": 25.19,
  "lat": 54.41,
  "flag": "🇱🇹",
  "jumlah_penduduk": 2801543,
  "anggaran": 739,
  "pendapatan_nasional": "2111",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 21,
    "pembangkit_air": 13,
    "pembangkit_surya": 7,
    "pembangkit_termal": 16,
    "pembangkit_gas": 27,
    "pembangkit_angin": 32,
    "jaringan_listrik": 87
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 35,
    "kereta_bawah_tanah": 34,
    "jalur_kereta": 6,
    "jalan_tol": 36,
    "kualitas_jalan": 68,
    "pelabuhan_laut": 37,
    "bandara": 23,
    "terminal_bus": 20,
    "helipad": 27,
    "cakupan_internet": 59
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 12,
    "uranium": 37,
    "batu_bara": 22,
    "minyak_bumi": 7,
    "gas_alam": 10,
    "garam": 26,
    "nikel": 1,
    "litium": 11,
    "aluminium": 6,
    "tembaga": 39,
    "logam_tanah_jarang": 8,
    "bijih_besi": 4
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 7,
    "mobil": 34,
    "sepeda_motor": 26,
    "smelter": 32,
    "semen_beton": 23,
    "kayu": 3,
    "air_mineral": 7,
    "gula": 11,
    "roti": 34,
    "farmasi": 36,
    "pupuk": 36,
    "pengolahan_daging": 4,
    "mie_instan": 39
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 32.0,
    "sapi_perah": 3,
    "sapi_potong": 30,
    "domba_kambing": 32,
    "udang_kerang": 17.0,
    "ikan": 31,
    "padi": 9,
    "gandum_jagung": 26.5,
    "sayur_umbi": 22.5,
    "kedelai": 2,
    "kelapa_sawit": 5,
    "kopi_teh_kakao": 9.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 8,
    "gudang_senjata": 25,
    "hangar_tank": 22,
    "akademi_militer": 3,
    "pusat_komando": 3,
    "pangkalan_udara": 13,
    "pangkalan_laut": 5,
    "program_luar_angkasa": 4,
    "pertahanan_siber": 15,
    "anggaran_pertahanan": 211
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 5,
    "darat": {
        "tank_tempur_utama": 40,
        "apc": 19,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 26,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 21,
        "helikopter_serang": 3,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 21,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 26,
          "kamera_pengawas": 13,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 40,
    "intelijen": 22,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 13,
      "misi_mata_mata": 36,
      "misi_sabotase": 28,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 4,
      "dasar": 11,
      "menengah": 31,
      "lanjutan": 7,
      "universitas": 21,
      "lembaga_pendidikan": 6,
      "laboratorium": 2,
      "observatorium": 20,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 10,
      "literasi": 93
    },
    "kesehatan": {
      "rumah_sakit_besar": 14,
      "rumah_sakit_kecil": 6,
      "pusat_diagnostik": 40,
      "harapan_hidup": 23,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 31,
      "pengadilan": 28,
      "kejaksaan": 26,
      "pos_polisi": 23,
      "armada_mobil_polisi": 8178,
      "akademi_polisi": 4,
      "indeks_korupsi": 53,
      "indeks_keamanan": 73
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 36,
      "sirkuit_balap": 40,
      "stadion": 14,
      "stadion_internasional": 15
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 74
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 16
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 10400,
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
      "kekuatan_lunak": 31,
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
    "kesehatan": 18,
    "pendidikan": 9,
    "keamanan": 3,
    "keuangan": 29,
    "lingkungan": 60
  }
};



