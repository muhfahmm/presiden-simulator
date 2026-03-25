import { CountryData } from "../../types/_index";

export const inggris: CountryData = {
  "name_en": "United Kingdom",
  "capital": "London",
  "name_id": "Inggris",
  "lon": -2,
  "lat": 54,
  "flag": "🇬🇧",
  "jumlah_penduduk": 66460344,
  "anggaran": 34030,
  "pendapatan_nasional": "97230",
  "religion": "Protestan",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 1,
    "pembangkit_air": 3,
    "pembangkit_surya": 14,
    "pembangkit_termal": 5,
    "pembangkit_gas": 22,
    "pembangkit_angin": 28,
    "jaringan_listrik": 90
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 6,
    "kereta_bawah_tanah": 29,
    "jalur_kereta": 11,
    "jalan_tol": 6,
    "kualitas_jalan": 78,
    "pelabuhan_laut": 1,
    "bandara": 3,
    "terminal_bus": 17,
    "helipad": 34,
    "cakupan_internet": 70
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 32,
    "uranium": 10,
    "batu_bara": 10,
    "minyak_bumi": 12,
    "gas_alam": 25,
    "garam": 4,
    "nikel": 32,
    "litium": 12,
    "aluminium": 4,
    "tembaga": 16,
    "logam_tanah_jarang": 37,
    "bijih_besi": 31
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 14,
    "mobil": 31,
    "sepeda_motor": 40,
    "smelter": 5,
    "semen_beton": 12,
    "kayu": 20,
    "air_mineral": 11,
    "gula": 4,
    "roti": 9,
    "farmasi": 15,
    "pupuk": 4,
    "pengolahan_daging": 34,
    "mie_instan": 37
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 36.0,
    "sapi_perah": 38,
    "sapi_potong": 25,
    "domba_kambing": 12,
    "udang_kerang": 38.0,
    "ikan": 29,
    "padi": 6,
    "gandum_jagung": 18.0,
    "sayur_umbi": 12.5,
    "kedelai": 31,
    "kelapa_sawit": 29,
    "kopi_teh_kakao": 8.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 16,
    "gudang_senjata": 9,
    "hangar_tank": 1,
    "akademi_militer": 26,
    "pusat_komando": 25,
    "pangkalan_udara": 15,
    "pangkalan_laut": 27,
    "program_luar_angkasa": 28,
    "pertahanan_siber": 30,
    "anggaran_pertahanan": 9723
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 6,
    "darat": {
        "tank_tempur_utama": 12,
        "apc": 115,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 83,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 186,
        "helikopter_serang": 102,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 16,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 23,
          "kamera_pengawas": 22,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 29,
    "intelijen": 37,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 6,
      "misi_sabotase": 25,
      "manajemen_wilayah": 11,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 10,
      "dasar": 17,
      "menengah": 31,
      "lanjutan": 5,
      "universitas": 9,
      "lembaga_pendidikan": 1,
      "laboratorium": 24,
      "observatorium": 28,
      "pusat_penelitian": 3,
      "pusat_pengembangan": 30,
      "literasi": 93
    },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 20,
      "harapan_hidup": 12,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 39,
      "kejaksaan": 25,
      "pos_polisi": 2,
      "armada_mobil_polisi": 9587,
      "akademi_polisi": 26,
      "indeks_korupsi": 89,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 40,
      "stadion": 25,
      "stadion_internasional": 14
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 1495
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 1669
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2342
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 3052
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 1976
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 171 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 511 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 641
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
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 3,
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
    "kesehatan": 32,
    "pendidikan": 31,
    "keamanan": 5,
    "keuangan": 2,
    "lingkungan": 60
  }
};



