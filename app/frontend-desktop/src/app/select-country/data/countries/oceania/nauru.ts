import { CountryData } from "../../types/_index";

export const nauru: CountryData = {
  "name_en": "Nauru",
  "capital": "Yaren",
  "name_id": "Nauru",
  "lon": 166.91666666,
  "lat": -0.53333333,
  "flag": "🇳🇷",
  "jumlah_penduduk": 12704,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 36,
    "pembangkit_air": 4,
    "pembangkit_surya": 25,
    "pembangkit_termal": 16,
    "pembangkit_gas": 31,
    "pembangkit_angin": 6,
    "jaringan_listrik": 73
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 4,
    "kereta_bawah_tanah": 21,
    "jalur_kereta": 35,
    "jalan_tol": 18,
    "kualitas_jalan": 63,
    "pelabuhan_laut": 22,
    "bandara": 30,
    "terminal_bus": 40,
    "helipad": 33,
    "cakupan_internet": 79,
    "indeks_teknologi": 67,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 15,
    "uranium": 38,
    "batu_bara": 21,
    "minyak_bumi": 19,
    "gas_alam": 37,
    "garam": 7,
    "nikel": 18,
    "litium": 39,
    "aluminium": 8,
    "tembaga": 1,
    "logam_tanah_jarang": 33,
    "bijih_besi": 32,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 30,
    "mobil": 19,
    "sepeda_motor": 23,
    "smelter": 16,
    "semen_beton": 21,
    "kayu": 30,
    "air_mineral": 21,
    "gula": 23,
    "roti": 29,
    "farmasi": 20,
    "pupuk": 20,
    "pengolahan_daging": 34,
    "mie_instan": 5,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 33.5,
    "sapi_perah": 31,
    "sapi_potong": 22,
    "domba_kambing": 34,
    "udang_kerang": 33.0,
    "ikan": 18,
    "padi": 1,
    "gandum_jagung": 27.0,
    "sayur_umbi": 23.0,
    "kedelai": 7,
    "kelapa_sawit": 8,
    "kopi_teh_kakao": 17.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 34,
    "gudang_senjata": 37,
    "hangar_tank": 13,
    "akademi_militer": 25,
    "pusat_komando": 18,
    "pangkalan_udara": 1,
    "pangkalan_laut": 5,
    "program_luar_angkasa": 23,
    "pertahanan_siber": 1,
    "anggaran_pertahanan": 1,
    "personel": 21961,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 40,
    "infanteri": 37,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 146,
        "apc": 99,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 1,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 169,
        "helikopter_serang": 62,
        "pesawat_pengintai": 2
      },
      "total_unit": 31,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 1,
      "jaringan_radar": 5,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 12,
          "sepeda_motor": 33,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 33,
          "kamera_pengawas": 7,
          "pusat_forensik": 1
        },
        "waktu_respon": 3,
        "kepercayaan_publik": 50 },
    "intelijen": 24,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 34,
      "misi_sabotase": 9,
      "manajemen_wilayah": 6,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 28,
      "sd": 7,
      "smp": 7,
      "sma": 21,
      "universitas": 4,
      "lembaga_pendidikan": 3,
      "laboratorium": 1,
      "observatorium": 30,
      "pusat_penelitian": 14,
      "pusat_pengembangan": 15,
      "literasi": 61,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 25,
      "tempat_tidur_rs": 6572,
      "harapan_hidup": 25,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 27,
      "sirkuit_balap": 11,
      "stadion": 23,
      "stadion_internasional": 30,
      "skor_olimpiade": 11,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 24,
      "kejaksaan": 2,
      "pos_polisi": 7,
      "armada_mobil_polisi": 1388,
      "akademi_polisi": 29,
      "indeks_korupsi": 73,
      "indeks_keamanan": 65
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 32,
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
    "subsidi_energi": 25,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 221060,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 23,
      "kekuatan_keras": 36,
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
    "pendidikan": 29,
    "keamanan": 5,
    "keuangan": 9,
    "lingkungan": 60
  }
};
