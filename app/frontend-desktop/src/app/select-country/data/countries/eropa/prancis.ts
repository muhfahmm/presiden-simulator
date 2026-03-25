import { CountryData } from "../../types";

export const prancis: CountryData = {
  "name_en": "France",
  "capital": "Paris",
  "name_id": "Prancis",
  "lon": 2,
  "lat": 46,
  "flag": "🇫🇷",
  "jumlah_penduduk": 66977107,
  "anggaran": 30433,
  "pendapatan_nasional": "86951",
  "religion": "Katolik",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 18,
    "pembangkit_air": 1,
    "pembangkit_surya": 24,
    "pembangkit_termal": 27,
    "pembangkit_gas": 3,
    "pembangkit_angin": 16,
    "jaringan_listrik": 54
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 5,
    "kereta_bawah_tanah": 2,
    "jalur_kereta": 27,
    "jalan_tol": 27,
    "kualitas_jalan": 64,
    "pelabuhan_laut": 8,
    "bandara": 34,
    "terminal_bus": 21,
    "helipad": 12,
    "cakupan_internet": 52,
    "indeks_teknologi": 86,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 27,
    "uranium": 24,
    "batu_bara": 31,
    "minyak_bumi": 37,
    "gas_alam": 8,
    "garam": 19,
    "nikel": 5,
    "litium": 40,
    "aluminium": 20,
    "tembaga": 32,
    "logam_tanah_jarang": 32,
    "bijih_besi": 3,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 7,
    "mobil": 36,
    "sepeda_motor": 1,
    "smelter": 36,
    "semen_beton": 30,
    "kayu": 2,
    "air_mineral": 28,
    "gula": 32,
    "roti": 26,
    "farmasi": 4,
    "pupuk": 2,
    "pengolahan_daging": 11,
    "mie_instan": 38,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 30,
    "unggas": 2,
    "sapi_perah": 29,
    "sapi_potong": 19,
    "domba_kambing": 9,
    "udang": 24,
    "ikan": 36,
    "kerang": 30,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 7,
    "gandum": 15,
    "jagung": 9,
    "umbi_umbian": 3,
    "kedelai": 15,
    "kelapa_sawit": 21,
    "teh": 4,
    "kopi": 9,
    "cokelat": 17,
    "tebu": 21,
    "sayur_sayuran": 6,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 3,
    "gudang_senjata": 33,
    "hangar_tank": 8,
    "akademi_militer": 2,
    "pusat_komando": 7,
    "pangkalan_udara": 5,
    "pangkalan_laut": 35,
    "program_luar_angkasa": 37,
    "pertahanan_siber": 25,
    "anggaran_pertahanan": 8695,
    "personel": 5623,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 31,
    "infanteri": 11,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 41,
        "apc": 14,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 106,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 43,
        "helikopter_serang": 84,
        "pesawat_pengintai": 2
      },
      "total_unit": 15,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 0,
      "jaringan_radar": 1,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 24,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 3,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 13,
          "kamera_pengawas": 32,
          "pusat_forensik": 1
        },
        "waktu_respon": 37,
        "kepercayaan_publik": 50 },
    "intelijen": 22,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 18,
      "misi_sabotase": 22,
      "manajemen_wilayah": 7,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 29,
      "sd": 7,
      "smp": 11,
      "sma": 8,
      "universitas": 10,
      "lembaga_pendidikan": 6,
      "laboratorium": 23,
      "observatorium": 36,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 24,
      "literasi": 50,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 19,
      "rumah_sakit_kecil": 21,
      "pusat_diagnostik": 24,
      "tempat_tidur_rs": 5454,
      "harapan_hidup": 5,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 33,
      "sirkuit_balap": 14,
      "stadion": 9,
      "stadion_internasional": 32,
      "skor_olimpiade": 10,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 28,
      "pengadilan": 13,
      "kejaksaan": 10,
      "pos_polisi": 35,
      "armada_mobil_polisi": 2844,
      "akademi_polisi": 3,
      "indeks_korupsi": 60,
      "indeks_keamanan": 77
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 1497
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 1939
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 142
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 1458
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 157
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 153 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 457 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 520
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 70,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 16,
    "komersial": 4,
    "industri": 53
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
      "kekuatan_lunak": 14,
      "kekuatan_keras": 37,
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
    "kesehatan": 10,
    "pendidikan": 4,
    "keamanan": 18,
    "keuangan": 25,
    "lingkungan": 60
  }
};
