import { CountryData } from "../../types/_index";

export const vietnam: CountryData = {
  "name_en": "Vietnam",
  "capital": "Hanoi",
  "name_id": "Vietnam",
  "lon": 107.83333333,
  "lat": 16.16666666,
  "flag": "🇻🇳",
  "jumlah_penduduk": 95540395,
  "anggaran": 4181,
  "pendapatan_nasional": "11945",
  "religion": "Ateisme",
  "ideology": "Komunisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 36,
    "pembangkit_air": 37,
    "pembangkit_surya": 13,
    "pembangkit_termal": 4,
    "pembangkit_gas": 40,
    "pembangkit_angin": 23,
    "jaringan_listrik": 92
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 3,
    "kereta_bawah_tanah": 16,
    "jalur_kereta": 15,
    "jalan_tol": 7,
    "kualitas_jalan": 85,
    "pelabuhan_laut": 22,
    "bandara": 32,
    "terminal_bus": 11,
    "helipad": 9,
    "cakupan_internet": 74,
    "indeks_teknologi": 77,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 38,
    "uranium": 9,
    "batu_bara": 8,
    "minyak_bumi": 10,
    "gas_alam": 3,
    "garam": 26,
    "nikel": 6,
    "litium": 31,
    "aluminium": 2,
    "tembaga": 26,
    "logam_tanah_jarang": 37,
    "bijih_besi": 26,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 6,
    "mobil": 7,
    "sepeda_motor": 21,
    "smelter": 7,
    "semen_beton": 4,
    "kayu": 1,
    "air_mineral": 17,
    "gula": 35,
    "roti": 28,
    "farmasi": 27,
    "pupuk": 39,
    "pengolahan_daging": 23,
    "mie_instan": 5,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 34.5,
    "sapi_perah": 4,
    "sapi_potong": 38,
    "domba_kambing": 5,
    "udang_kerang": 20.5,
    "ikan": 9,
    "padi": 32,
    "gandum_jagung": 7.0,
    "sayur_umbi": 24.0,
    "kedelai": 5,
    "kelapa_sawit": 35,
    "kopi_teh_kakao": 23.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 29,
    "gudang_senjata": 33,
    "hangar_tank": 13,
    "akademi_militer": 24,
    "pusat_komando": 18,
    "pangkalan_udara": 19,
    "pangkalan_laut": 34,
    "program_luar_angkasa": 20,
    "pertahanan_siber": 5,
    "anggaran_pertahanan": 1194,
    "personel": 9297,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 10,
    "infanteri": 8,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 58,
        "apc": 12,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 28,
        "kapal_destroyer": 169,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 159,
        "helikopter_serang": 112,
        "pesawat_pengintai": 2
      },
      "total_unit": 6,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 0,
      "jaringan_radar": 5,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 19,
          "sepeda_motor": 1,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 39,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 7,
          "kamera_pengawas": 16,
          "pusat_forensik": 1
        },
        "waktu_respon": 8,
        "kepercayaan_publik": 50 },
    "intelijen": 40,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 40,
      "misi_mata_mata": 16,
      "misi_sabotase": 9,
      "manajemen_wilayah": 27,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 11,
      "sd": 29,
      "smp": 36,
      "sma": 5,
      "universitas": 18,
      "lembaga_pendidikan": 20,
      "laboratorium": 13,
      "observatorium": 23,
      "pusat_penelitian": 25,
      "pusat_pengembangan": 15,
      "literasi": 74,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 11,
      "rumah_sakit_kecil": 2,
      "pusat_diagnostik": 4,
      "tempat_tidur_rs": 7588,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 32,
      "sirkuit_balap": 13,
      "stadion": 29,
      "stadion_internasional": 28,
      "skor_olimpiade": 40,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 28,
      "kejaksaan": 29,
      "pos_polisi": 8,
      "armada_mobil_polisi": 6043,
      "akademi_polisi": 8,
      "indeks_korupsi": 68,
      "indeks_keamanan": 68
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 95
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 133
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 185
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 233
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 70
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 21 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 63 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 9
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
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 2600,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 10,
      "kekuatan_keras": 3,
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
    "kesehatan": 28,
    "pendidikan": 31,
    "keamanan": 4,
    "keuangan": 5,
    "lingkungan": 60
  }
};
