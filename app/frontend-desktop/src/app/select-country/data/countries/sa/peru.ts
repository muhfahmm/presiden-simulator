import { CountryData } from "../../types/_index";

export const peru: CountryData = {
  "name_en": "Peru",
  "capital": "Lima",
  "name_id": "Peru",
  "lon": -76,
  "lat": -10,
  "flag": "🇵🇪",
  "jumlah_penduduk": 31989256,
  "anggaran": 2528,
  "pendapatan_nasional": "7223",
  "religion": "Katolik",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 32,
    "pembangkit_air": 22,
    "pembangkit_surya": 26,
    "pembangkit_termal": 38,
    "pembangkit_gas": 5,
    "pembangkit_angin": 30,
    "jaringan_listrik": 75
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 5,
    "kereta_bawah_tanah": 26,
    "jalur_kereta": 15,
    "jalan_tol": 11,
    "kualitas_jalan": 84,
    "pelabuhan_laut": 17,
    "bandara": 13,
    "terminal_bus": 38,
    "helipad": 33,
    "cakupan_internet": 94,
    "indeks_teknologi": 78,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 5,
    "uranium": 13,
    "batu_bara": 28,
    "minyak_bumi": 10,
    "gas_alam": 7,
    "garam": 26,
    "nikel": 16,
    "litium": 37,
    "aluminium": 30,
    "tembaga": 19,
    "logam_tanah_jarang": 39,
    "bijih_besi": 5,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 16,
    "mobil": 30,
    "sepeda_motor": 16,
    "smelter": 16,
    "semen_beton": 17,
    "kayu": 5,
    "air_mineral": 23,
    "gula": 11,
    "roti": 14,
    "farmasi": 21,
    "pupuk": 37,
    "pengolahan_daging": 39,
    "mie_instan": 28,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 27.5,
    "sapi_perah": 15,
    "sapi_potong": 15,
    "domba_kambing": 15,
    "udang_kerang": 14.5,
    "ikan": 14,
    "padi": 36,
    "gandum_jagung": 8.0,
    "sayur_umbi": 16.5,
    "kedelai": 32,
    "kelapa_sawit": 27,
    "kopi_teh_kakao": 15.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 17,
    "hangar_tank": 34,
    "akademi_militer": 7,
    "pusat_komando": 37,
    "pangkalan_udara": 34,
    "pangkalan_laut": 16,
    "program_luar_angkasa": 34,
    "pertahanan_siber": 10,
    "anggaran_pertahanan": 722,
    "personel": 10851,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 2,
    "infanteri": 15,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 178,
        "apc": 14,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 53,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 137,
        "helikopter_serang": 43,
        "pesawat_pengintai": 2
      },
      "total_unit": 28,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 2,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 6,
          "sepeda_motor": 37,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 1,
          "kamera_pengawas": 2,
          "pusat_forensik": 1
        },
        "waktu_respon": 30,
        "kepercayaan_publik": 50 },
    "intelijen": 17,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 2,
      "misi_mata_mata": 32,
      "misi_sabotase": 14,
      "manajemen_wilayah": 28,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 16,
      "sd": 32,
      "smp": 29,
      "sma": 27,
      "universitas": 21,
      "lembaga_pendidikan": 15,
      "laboratorium": 29,
      "observatorium": 16,
      "pusat_penelitian": 28,
      "pusat_pengembangan": 13,
      "literasi": 59,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 17,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 36,
      "tempat_tidur_rs": 883,
      "harapan_hidup": 31,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 27,
      "sirkuit_balap": 30,
      "stadion": 2,
      "stadion_internasional": 3,
      "skor_olimpiade": 24,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 3,
      "pengadilan": 34,
      "kejaksaan": 26,
      "pos_polisi": 20,
      "armada_mobil_polisi": 8042,
      "akademi_polisi": 25,
      "indeks_korupsi": 91,
      "indeks_keamanan": 89
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 196
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 100
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 138
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 218
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 74
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 38 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
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
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 5350,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 11,
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
    "kesehatan": 19,
    "pendidikan": 28,
    "keamanan": 11,
    "keuangan": 11,
    "lingkungan": 60
  }
};
