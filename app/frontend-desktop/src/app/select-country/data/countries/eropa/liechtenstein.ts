import { CountryData } from "../../types";

export const liechtenstein: CountryData = {
  "name_en": "Liechtenstein",
  "capital": "Vaduz",
  "name_id": "Liechtenstein",
  "lon": 9.31,
  "lat": 47.08,
  "flag": "🇱🇮",
  "jumlah_penduduk": 37910,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 14,
    "pembangkit_air": 24,
    "pembangkit_surya": 16,
    "pembangkit_termal": 18,
    "pembangkit_gas": 17,
    "pembangkit_angin": 2,
    "jaringan_listrik": 50
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 14,
    "kereta_bawah_tanah": 26,
    "jalur_kereta": 32,
    "jalan_tol": 16,
    "kualitas_jalan": 89,
    "pelabuhan_laut": 7,
    "bandara": 39,
    "terminal_bus": 28,
    "helipad": 39,
    "cakupan_internet": 82,
    "indeks_teknologi": 56,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 30,
    "uranium": 7,
    "batu_bara": 16,
    "minyak_bumi": 20,
    "gas_alam": 19,
    "garam": 34,
    "nikel": 7,
    "litium": 8,
    "aluminium": 34,
    "tembaga": 28,
    "logam_tanah_jarang": 38,
    "bijih_besi": 14,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 37,
    "mobil": 38,
    "sepeda_motor": 30,
    "smelter": 13,
    "semen_beton": 6,
    "kayu": 15,
    "air_mineral": 23,
    "gula": 10,
    "roti": 25,
    "farmasi": 32,
    "pupuk": 18,
    "pengolahan_daging": 21,
    "mie_instan": 32,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 14,
    "unggas": 23,
    "sapi_perah": 15,
    "sapi_potong": 22,
    "domba_kambing": 3,
    "udang": 1,
    "ikan": 2,
    "kerang": 10,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 7,
    "gandum": 13,
    "jagung": 32,
    "umbi_umbian": 18,
    "kedelai": 16,
    "kelapa_sawit": 22,
    "teh": 16,
    "kopi": 27,
    "cokelat": 4,
    "tebu": 19,
    "sayur_sayuran": 11,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 13,
    "gudang_senjata": 27,
    "hangar_tank": 7,
    "akademi_militer": 10,
    "pusat_komando": 21,
    "pangkalan_udara": 35,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 22,
    "pertahanan_siber": 16,
    "anggaran_pertahanan": 27,
    "personel": 21650,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 25,
    "infanteri": 3,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 27,
        "apc": 34,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 35,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 17,
        "helikopter_serang": 31,
        "pesawat_pengintai": 2
      },
      "total_unit": 37,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 6,
      "jaringan_radar": 11,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 15,
          "sepeda_motor": 24,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 4,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 14,
          "kamera_pengawas": 3,
          "pusat_forensik": 1
        },
        "waktu_respon": 8,
        "kepercayaan_publik": 50 },
    "intelijen": 25,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 21,
      "misi_mata_mata": 24,
      "misi_sabotase": 35,
      "manajemen_wilayah": 19,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 13,
      "sd": 5,
      "smp": 11,
      "sma": 23,
      "universitas": 30,
      "lembaga_pendidikan": 21,
      "laboratorium": 37,
      "observatorium": 1,
      "pusat_penelitian": 7,
      "pusat_pengembangan": 7,
      "literasi": 51,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 34,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 24,
      "tempat_tidur_rs": 4491,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 14,
      "sirkuit_balap": 26,
      "stadion": 37,
      "stadion_internasional": 3,
      "skor_olimpiade": 39,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 27,
      "pengadilan": 8,
      "kejaksaan": 1,
      "pos_polisi": 26,
      "armada_mobil_polisi": 548,
      "akademi_polisi": 17,
      "indeks_korupsi": 79,
      "indeks_keamanan": 89
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
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 56,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 21,
    "komersial": 15,
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 28,
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
    "kesehatan": 24,
    "pendidikan": 31,
    "keamanan": 20,
    "keuangan": 29,
    "lingkungan": 60
  }
};
