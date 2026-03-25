import { CountryData } from "../../types/_index";

export const guiana_prancis: CountryData = {
  "name_en": "French Guiana",
  "capital": "Cayenne",
  "name_id": "Guiana prancis",
  "lon": -53,
  "lat": 4,
  "flag": "🇬🇫",
  "jumlah_penduduk": 290691,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 38,
    "pembangkit_air": 2,
    "pembangkit_surya": 10,
    "pembangkit_termal": 36,
    "pembangkit_gas": 37,
    "pembangkit_angin": 6,
    "jaringan_listrik": 78
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 29,
    "kereta_bawah_tanah": 4,
    "jalur_kereta": 17,
    "jalan_tol": 20,
    "kualitas_jalan": 68,
    "pelabuhan_laut": 24,
    "bandara": 22,
    "terminal_bus": 39,
    "helipad": 19,
    "cakupan_internet": 92,
    "indeks_teknologi": 84,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 29,
    "uranium": 24,
    "batu_bara": 8,
    "minyak_bumi": 32,
    "gas_alam": 20,
    "garam": 9,
    "nikel": 34,
    "litium": 18,
    "aluminium": 19,
    "tembaga": 12,
    "logam_tanah_jarang": 30,
    "bijih_besi": 8,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 12,
    "mobil": 15,
    "sepeda_motor": 12,
    "smelter": 40,
    "semen_beton": 13,
    "kayu": 30,
    "air_mineral": 20,
    "gula": 30,
    "roti": 27,
    "farmasi": 13,
    "pupuk": 40,
    "pengolahan_daging": 9,
    "mie_instan": 26,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 10.0,
    "sapi_perah": 12,
    "sapi_potong": 20,
    "domba_kambing": 23,
    "udang_kerang": 17.0,
    "ikan": 8,
    "padi": 31,
    "gandum_jagung": 20.5,
    "sayur_umbi": 10.5,
    "kedelai": 38,
    "kelapa_sawit": 37,
    "kopi_teh_kakao": 11.3,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 27,
    "gudang_senjata": 27,
    "hangar_tank": 20,
    "akademi_militer": 30,
    "pusat_komando": 4,
    "pangkalan_udara": 27,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 29,
    "pertahanan_siber": 16,
    "anggaran_pertahanan": 27,
    "personel": 25948,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 17,
    "infanteri": 24,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 15,
        "apc": 136,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 31,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 48,
        "helikopter_serang": 11,
        "pesawat_pengintai": 2
      },
      "total_unit": 13,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 0,
      "jaringan_radar": 2,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 23,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 14,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 17,
          "kamera_pengawas": 18,
          "pusat_forensik": 1
        },
        "waktu_respon": 4,
        "kepercayaan_publik": 50 },
    "intelijen": 16,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 5,
      "misi_mata_mata": 15,
      "misi_sabotase": 10,
      "manajemen_wilayah": 17,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 35,
      "sd": 18,
      "smp": 20,
      "sma": 31,
      "universitas": 31,
      "lembaga_pendidikan": 29,
      "laboratorium": 10,
      "observatorium": 31,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 23,
      "literasi": 86,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 21,
      "rumah_sakit_kecil": 18,
      "pusat_diagnostik": 21,
      "tempat_tidur_rs": 4806,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 28,
      "sirkuit_balap": 30,
      "stadion": 31,
      "stadion_internasional": 28,
      "skor_olimpiade": 30,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 7,
      "pengadilan": 4,
      "kejaksaan": 22,
      "pos_polisi": 27,
      "armada_mobil_polisi": 7285,
      "akademi_polisi": 11,
      "indeks_korupsi": 94,
      "indeks_keamanan": 69
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 4160,
    "harga_obat": 315800,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
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
    "kesehatan": 25,
    "pendidikan": 14,
    "keamanan": 13,
    "keuangan": 27,
    "lingkungan": 60
  }
};
