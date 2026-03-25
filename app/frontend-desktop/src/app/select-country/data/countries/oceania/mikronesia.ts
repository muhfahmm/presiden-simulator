import { CountryData } from "../../types/_index";

export const mikronesia: CountryData = {
  "name_en": "Micronesia",
  "capital": "Palikir",
  "name_id": "Mikronesia",
  "lon": 158.25,
  "lat": 6.91666666,
  "flag": "🇫🇲",
  "jumlah_penduduk": 112640,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 35,
    "pembangkit_air": 17,
    "pembangkit_surya": 8,
    "pembangkit_termal": 15,
    "pembangkit_gas": 36,
    "pembangkit_angin": 5,
    "jaringan_listrik": 62
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 12,
    "kereta_bawah_tanah": 27,
    "jalur_kereta": 29,
    "jalan_tol": 18,
    "kualitas_jalan": 72,
    "pelabuhan_laut": 40,
    "bandara": 4,
    "terminal_bus": 2,
    "helipad": 12,
    "cakupan_internet": 81
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 16,
    "uranium": 36,
    "batu_bara": 20,
    "minyak_bumi": 26,
    "gas_alam": 39,
    "garam": 30,
    "nikel": 3,
    "litium": 37,
    "aluminium": 9,
    "tembaga": 39,
    "logam_tanah_jarang": 7,
    "bijih_besi": 4
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 27,
    "mobil": 34,
    "sepeda_motor": 4,
    "smelter": 3,
    "semen_beton": 33,
    "kayu": 36,
    "air_mineral": 3,
    "gula": 37,
    "roti": 32,
    "farmasi": 22,
    "pupuk": 28,
    "pengolahan_daging": 29,
    "mie_instan": 9
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 7.0,
    "sapi_perah": 32,
    "sapi_potong": 31,
    "domba_kambing": 14,
    "udang_kerang": 40.0,
    "ikan": 34,
    "padi": 3,
    "gandum_jagung": 28.0,
    "sayur_umbi": 27.5,
    "kedelai": 21,
    "kelapa_sawit": 7,
    "kopi_teh_kakao": 25.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 21,
    "gudang_senjata": 17,
    "hangar_tank": 3,
    "akademi_militer": 2,
    "pusat_komando": 13,
    "pangkalan_udara": 25,
    "pangkalan_laut": 27,
    "program_luar_angkasa": 6,
    "pertahanan_siber": 22,
    "anggaran_pertahanan": 1
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 30,
    "darat": {
        "tank_tempur_utama": 82,
        "apc": 60,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 19,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 27,
        "helikopter_serang": 163,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 4,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 17,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 7,
          "kamera_pengawas": 37,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 25,
    "intelijen": 27,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 36,
      "misi_sabotase": 9,
      "manajemen_wilayah": 8,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 36,
      "dasar": 16,
      "menengah": 1,
      "lanjutan": 2,
      "universitas": 1,
      "lembaga_pendidikan": 8,
      "laboratorium": 33,
      "observatorium": 40,
      "pusat_penelitian": 15,
      "pusat_pengembangan": 28,
      "literasi": 86
    },
    "kesehatan": {
      "rumah_sakit_besar": 26,
      "rumah_sakit_kecil": 21,
      "pusat_diagnostik": 28,
      "harapan_hidup": 29,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 20,
      "pengadilan": 11,
      "kejaksaan": 38,
      "pos_polisi": 40,
      "armada_mobil_polisi": 8682,
      "akademi_polisi": 35,
      "indeks_korupsi": 65,
      "indeks_keamanan": 93
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 2,
      "sirkuit_balap": 28,
      "stadion": 26,
      "stadion_internasional": 34
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 7,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 15,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
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
      "kekuatan_lunak": 9,
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
    "kesehatan": 5,
    "pendidikan": 4,
    "keamanan": 24,
    "keuangan": 19,
    "lingkungan": 60
  }
};



