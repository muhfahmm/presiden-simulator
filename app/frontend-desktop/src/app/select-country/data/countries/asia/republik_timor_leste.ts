import { CountryData } from "../../types/_index";

export const republik_timor_leste: CountryData = {
  "name_en": "Timor-Leste",
  "capital": "Dili",
  "name_id": "Republik timor-leste",
  "lon": 125.91666666,
  "lat": -8.83333333,
  "flag": "🇹🇱",
  "jumlah_penduduk": "10M",
  "anggaran": 19,
  "pendapatan_nasional": "56",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 17,
    "pembangkit_air": 32,
    "pembangkit_surya": 22,
    "pembangkit_termal": 5,
    "pembangkit_gas": 37,
    "pembangkit_angin": 37,
    "jaringan_listrik": 64
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 27,
    "kereta_bawah_tanah": 10,
    "jalur_kereta": 40,
    "jalan_tol": 14,
    "kualitas_jalan": 93,
    "pelabuhan_laut": 20,
    "bandara": 39,
    "terminal_bus": 13,
    "helipad": 28,
    "cakupan_internet": 73,
    "indeks_teknologi": 92,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 21,
    "uranium": 9,
    "batu_bara": 10,
    "minyak_bumi": 2,
    "gas_alam": 4,
    "garam": 22,
    "nikel": 25,
    "litium": 27,
    "aluminium": 22,
    "tembaga": 26,
    "logam_tanah_jarang": 6,
    "bijih_besi": 23,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 28,
    "mobil": 32,
    "sepeda_motor": 34,
    "smelter": 8,
    "semen_beton": 32,
    "kayu": 36,
    "air_mineral": 1,
    "gula": 35,
    "roti": 16,
    "farmasi": 39,
    "pupuk": 24,
    "pengolahan_daging": 29,
    "mie_instan": 10,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 19.0,
    "sapi_perah": 17,
    "sapi_potong": 6,
    "domba_kambing": 2,
    "udang_kerang": 29.5,
    "ikan": 35,
    "padi": 9,
    "gandum_jagung": 24.0,
    "sayur_umbi": 29.5,
    "kedelai": 9,
    "kelapa_sawit": 40,
    "kopi_teh_kakao": 17.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 8,
    "gudang_senjata": 40,
    "hangar_tank": 27,
    "akademi_militer": 36,
    "pusat_komando": 35,
    "pangkalan_udara": 2,
    "pangkalan_laut": 31,
    "program_luar_angkasa": 28,
    "pertahanan_siber": 32,
    "anggaran_pertahanan": 5,
    "personel": 25828,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 28,
    "infanteri": 15,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 38,
        "apc": 173,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 15,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 97,
        "helikopter_serang": 47,
        "pesawat_pengintai": 2
      },
      "total_unit": 9,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 3,
      "jaringan_radar": 5,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 2,
          "helikopter_polisi": 12,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 6,
          "kamera_pengawas": 32,
          "pusat_forensik": 1
        },
        "waktu_respon": 18,
        "kepercayaan_publik": 50 },
    "intelijen": 25,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 19,
      "misi_mata_mata": 6,
      "misi_sabotase": 23,
      "manajemen_wilayah": 30,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 8,
      "sd": 7,
      "smp": 32,
      "sma": 8,
      "universitas": 16,
      "lembaga_pendidikan": 26,
      "laboratorium": 36,
      "observatorium": 8,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 19,
      "literasi": 79,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 35,
      "tempat_tidur_rs": 2027,
      "harapan_hidup": 32,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 2,
      "sirkuit_balap": 36,
      "stadion": 23,
      "stadion_internasional": 6,
      "skor_olimpiade": 9,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 13,
      "kejaksaan": 20,
      "pos_polisi": 11,
      "armada_mobil_polisi": 4976,
      "akademi_polisi": 4,
      "indeks_korupsi": 93,
      "indeks_keamanan": 90
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
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
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 7700,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 29,
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
    "kesehatan": 35,
    "pendidikan": 29,
    "keamanan": 8,
    "keuangan": 29,
    "lingkungan": 60
  }
};
