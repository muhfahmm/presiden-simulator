import { CountryData } from "../../types/_index";

export const brunei: CountryData = {
  "name_en": "Brunei",
  "capital": "Bandar Seri Begawan",
  "name_id": "Brunei",
  "lon": 114.66666666,
  "lat": 4.5,
  "flag": "🇧🇳",
  "jumlah_penduduk": 428962,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Islam",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 36,
    "pembangkit_air": 35,
    "pembangkit_surya": 2,
    "pembangkit_termal": 40,
    "pembangkit_gas": 23,
    "pembangkit_angin": 10,
    "jaringan_listrik": 92
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 12,
    "kereta_bawah_tanah": 37,
    "jalur_kereta": 28,
    "jalan_tol": 8,
    "kualitas_jalan": 53,
    "pelabuhan_laut": 22,
    "bandara": 9,
    "terminal_bus": 34,
    "helipad": 21,
    "cakupan_internet": 87
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 37,
    "uranium": 28,
    "batu_bara": 23,
    "minyak_bumi": 31,
    "gas_alam": 38,
    "garam": 10,
    "nikel": 37,
    "litium": 12,
    "aluminium": 6,
    "tembaga": 35,
    "logam_tanah_jarang": 36,
    "bijih_besi": 6
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 30,
    "mobil": 20,
    "sepeda_motor": 19,
    "smelter": 1,
    "semen_beton": 40,
    "kayu": 40,
    "air_mineral": 27,
    "gula": 16,
    "roti": 30,
    "farmasi": 13,
    "pupuk": 5,
    "pengolahan_daging": 9,
    "mie_instan": 12
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 23.5,
    "sapi_perah": 2,
    "sapi_potong": 23,
    "domba_kambing": 29,
    "udang_kerang": 15.0,
    "ikan": 29,
    "padi": 39,
    "gandum_jagung": 8.0,
    "sayur_umbi": 17.0,
    "kedelai": 23,
    "kelapa_sawit": 36,
    "kopi_teh_kakao": 20.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 3,
    "gudang_senjata": 34,
    "hangar_tank": 36,
    "akademi_militer": 36,
    "pusat_komando": 2,
    "pangkalan_udara": 24,
    "pangkalan_laut": 27,
    "program_luar_angkasa": 27,
    "pertahanan_siber": 34,
    "anggaran_pertahanan": 41
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 7,
    "darat": {
        "tank_tempur_utama": 30,
        "apc": 8,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 20,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 26,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 34,
          "sepeda_motor": 11,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 26,
          "helikopter_polisi": 14,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 30,
          "kamera_pengawas": 21,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 11,
    "intelijen": 38,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 7,
      "misi_sabotase": 13,
      "manajemen_wilayah": 33,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 3,
      "dasar": 14,
      "menengah": 14,
      "lanjutan": 2,
      "universitas": 12,
      "lembaga_pendidikan": 2,
      "laboratorium": 5,
      "observatorium": 13,
      "pusat_penelitian": 18,
      "pusat_pengembangan": 13,
      "literasi": 61
    },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 30,
      "harapan_hidup": 9,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 29,
      "pengadilan": 15,
      "kejaksaan": 6,
      "pos_polisi": 3,
      "armada_mobil_polisi": 3864,
      "akademi_polisi": 39,
      "indeks_korupsi": 76,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 23,
      "sirkuit_balap": 33,
      "stadion": 23,
      "stadion_internasional": 9
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 33,
      "kekuatan_keras": 22,
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
    "kesehatan": 9,
    "pendidikan": 24,
    "keamanan": 13,
    "keuangan": 14,
    "lingkungan": 60
  }
};



