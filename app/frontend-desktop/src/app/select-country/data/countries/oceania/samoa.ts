import { CountryData } from "../../types/_index";

export const samoa: CountryData = {
  "name_en": "Samoa",
  "capital": "Apia",
  "name_id": "Samoa",
  "lon": -172.33333333,
  "lat": -13.58333333,
  "flag": "🇼🇸",
  "jumlah_penduduk": 196130,
  "anggaran": 10,
  "pendapatan_nasional": "25",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 14,
    "pembangkit_air": 28,
    "pembangkit_surya": 37,
    "pembangkit_termal": 18,
    "pembangkit_gas": 40,
    "pembangkit_angin": 7,
    "jaringan_listrik": 72
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 7,
    "kereta_bawah_tanah": 24,
    "jalur_kereta": 11,
    "jalan_tol": 22,
    "kualitas_jalan": 82,
    "pelabuhan_laut": 37,
    "bandara": 34,
    "terminal_bus": 12,
    "helipad": 1,
    "cakupan_internet": 80
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 26,
    "uranium": 3,
    "batu_bara": 13,
    "minyak_bumi": 11,
    "gas_alam": 34,
    "garam": 26,
    "nikel": 15,
    "litium": 16,
    "aluminium": 22,
    "tembaga": 2,
    "logam_tanah_jarang": 3,
    "bijih_besi": 4
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 10,
    "mobil": 16,
    "sepeda_motor": 17,
    "smelter": 28,
    "semen_beton": 28,
    "kayu": 29,
    "air_mineral": 31,
    "gula": 6,
    "roti": 22,
    "farmasi": 21,
    "pupuk": 30,
    "pengolahan_daging": 39,
    "mie_instan": 13
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 20.0,
    "sapi_perah": 14,
    "sapi_potong": 1,
    "domba_kambing": 33,
    "udang_kerang": 29.5,
    "ikan": 12,
    "padi": 32,
    "gandum_jagung": 16.0,
    "sayur_umbi": 18.5,
    "kedelai": 24,
    "kelapa_sawit": 12,
    "kopi_teh_kakao": 18.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 37,
    "gudang_senjata": 2,
    "hangar_tank": 31,
    "akademi_militer": 13,
    "pusat_komando": 17,
    "pangkalan_udara": 38,
    "pangkalan_laut": 40,
    "program_luar_angkasa": 37,
    "pertahanan_siber": 14,
    "anggaran_pertahanan": 2
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 1,
    "darat": {
        "tank_tempur_utama": 170,
        "apc": 162,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 57,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 39,
        "helikopter_serang": 30,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 37,
          "sepeda_motor": 8,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 33,
          "helikopter_polisi": 32,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 31,
          "kamera_pengawas": 40,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 27,
    "intelijen": 39,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 10,
      "misi_mata_mata": 38,
      "misi_sabotase": 2,
      "manajemen_wilayah": 30,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 22,
      "dasar": 12,
      "menengah": 2,
      "lanjutan": 34,
      "universitas": 31,
      "lembaga_pendidikan": 7,
      "laboratorium": 6,
      "observatorium": 18,
      "pusat_penelitian": 5,
      "pusat_pengembangan": 40,
      "literasi": 75
    },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 25,
      "pusat_diagnostik": 36,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 2,
      "kejaksaan": 9,
      "pos_polisi": 36,
      "armada_mobil_polisi": 5070,
      "akademi_polisi": 20,
      "indeks_korupsi": 83,
      "indeks_keamanan": 71
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 39,
      "sirkuit_balap": 14,
      "stadion": 29,
      "stadion_internasional": 14
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 3,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 29,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
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
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 35,
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
    "kesehatan": 14,
    "pendidikan": 27,
    "keamanan": 33,
    "keuangan": 8,
    "lingkungan": 60
  }
};



