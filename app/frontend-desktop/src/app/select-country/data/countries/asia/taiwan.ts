import { CountryData } from "../../types/_index";

export const taiwan: CountryData = {
  "name_en": "Taiwan",
  "capital": "Taipei",
  "name_id": "Taiwan",
  "lon": 121,
  "lat": 23.5,
  "flag": "🇹🇼",
  "jumlah_penduduk": "10M",
  "anggaran": 7681,
  "pendapatan_nasional": "21946",
  "religion": "Buddha",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 1,
    "pembangkit_air": 12,
    "pembangkit_surya": 38,
    "pembangkit_termal": 29,
    "pembangkit_gas": 28,
    "pembangkit_angin": 37,
    "jaringan_listrik": 57
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 8,
    "kereta_bawah_tanah": 2,
    "jalur_kereta": 27,
    "jalan_tol": 25,
    "kualitas_jalan": 65,
    "pelabuhan_laut": 39,
    "bandara": 9,
    "terminal_bus": 18,
    "helipad": 23,
    "cakupan_internet": 95
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 4,
    "uranium": 26,
    "batu_bara": 17,
    "minyak_bumi": 37,
    "gas_alam": 25,
    "garam": 18,
    "nikel": 24,
    "litium": 18,
    "aluminium": 38,
    "tembaga": 24,
    "logam_tanah_jarang": 2,
    "bijih_besi": 26
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 32,
    "mobil": 5,
    "sepeda_motor": 22,
    "smelter": 5,
    "semen_beton": 31,
    "kayu": 21,
    "air_mineral": 24,
    "gula": 31,
    "roti": 7,
    "farmasi": 7,
    "pupuk": 16,
    "pengolahan_daging": 10,
    "mie_instan": 31
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 26.0,
    "sapi_perah": 24,
    "sapi_potong": 35,
    "domba_kambing": 40,
    "udang_kerang": 33.0,
    "ikan": 2,
    "padi": 5,
    "gandum_jagung": 25.0,
    "sayur_umbi": 28.0,
    "kedelai": 39,
    "kelapa_sawit": 13,
    "kopi_teh_kakao": 16.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 22,
    "gudang_senjata": 4,
    "hangar_tank": 5,
    "akademi_militer": 36,
    "pusat_komando": 2,
    "pangkalan_udara": 26,
    "pangkalan_laut": 30,
    "program_luar_angkasa": 19,
    "pertahanan_siber": 12,
    "anggaran_pertahanan": 2194
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 8,
    "darat": {
        "tank_tempur_utama": 114,
        "apc": 68,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 170,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 38,
        "helikopter_serang": 17,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 31,
          "sepeda_motor": 29,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 14,
          "kamera_pengawas": 19,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 11,
    "intelijen": 24,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 20,
      "misi_mata_mata": 10,
      "misi_sabotase": 22,
      "manajemen_wilayah": 26,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 38,
      "dasar": 25,
      "menengah": 21,
      "lanjutan": 40,
      "universitas": 37,
      "lembaga_pendidikan": 9,
      "laboratorium": 26,
      "observatorium": 14,
      "pusat_penelitian": 26,
      "pusat_pengembangan": 30,
      "literasi": 93
    },
    "kesehatan": {
      "rumah_sakit_besar": 8,
      "rumah_sakit_kecil": 24,
      "pusat_diagnostik": 34,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 30,
      "pengadilan": 17,
      "kejaksaan": 6,
      "pos_polisi": 10,
      "armada_mobil_polisi": 6896,
      "akademi_polisi": 15,
      "indeks_korupsi": 72,
      "indeks_keamanan": 57
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 10,
      "sirkuit_balap": 18,
      "stadion": 9,
      "stadion_internasional": 16
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 207
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 98
    },
    "penghasilan": {
      "tarif": 8,
      "kepuasan": 61,
      "pendapatan": 155
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 667
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 594
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 39 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 116 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 523
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 14,
      "kekuatan_keras": 27,
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
    "kesehatan": 40,
    "pendidikan": 25,
    "keamanan": 26,
    "keuangan": 1,
    "lingkungan": 60
  }
};



