import { CountryData } from "../../types";

export const republik_rumania: CountryData = {
  "name_en": "Romania",
  "capital": "Bucharest",
  "name_id": "Republik rumania",
  "lon": 25,
  "lat": 46,
  "flag": "🇷🇴",
  "jumlah_penduduk": 19466145,
  "anggaran": 3403,
  "pendapatan_nasional": "9723",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 34,
    "pembangkit_air": 4,
    "pembangkit_surya": 19,
    "pembangkit_termal": 23,
    "pembangkit_gas": 2,
    "pembangkit_angin": 31,
    "jaringan_listrik": 91
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 31,
    "kereta_bawah_tanah": 7,
    "jalur_kereta": 22,
    "jalan_tol": 30,
    "kualitas_jalan": 81,
    "pelabuhan_laut": 19,
    "bandara": 3,
    "terminal_bus": 1,
    "helipad": 29,
    "cakupan_internet": 56,
    "indeks_teknologi": 77,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 18,
    "uranium": 38,
    "batu_bara": 14,
    "minyak_bumi": 32,
    "gas_alam": 13,
    "garam": 1,
    "nikel": 10,
    "litium": 16,
    "aluminium": 4,
    "tembaga": 10,
    "logam_tanah_jarang": 30,
    "bijih_besi": 24,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 15,
    "mobil": 3,
    "sepeda_motor": 9,
    "smelter": 20,
    "semen_beton": 5,
    "kayu": 40,
    "air_mineral": 29,
    "gula": 1,
    "roti": 19,
    "farmasi": 36,
    "pupuk": 3,
    "pengolahan_daging": 40,
    "mie_instan": 20,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 17,
    "unggas": 24,
    "sapi_perah": 35,
    "sapi_potong": 13,
    "domba_kambing": 10,
    "udang": 27,
    "ikan": 12,
    "kerang": 1,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 4,
    "gandum": 10,
    "jagung": 34,
    "umbi_umbian": 27,
    "kedelai": 29,
    "kelapa_sawit": 5,
    "teh": 39,
    "kopi": 16,
    "cokelat": 37,
    "tebu": 30,
    "sayur_sayuran": 40,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 3,
    "gudang_senjata": 4,
    "hangar_tank": 31,
    "akademi_militer": 26,
    "pusat_komando": 7,
    "pangkalan_udara": 28,
    "pangkalan_laut": 30,
    "program_luar_angkasa": 33,
    "pertahanan_siber": 23,
    "anggaran_pertahanan": 972,
    "personel": 12938,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 1,
    "infanteri": 19,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 49,
        "apc": 53,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 10,
        "kapal_destroyer": 159,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 74,
        "helikopter_serang": 192,
        "pesawat_pengintai": 2
      },
      "total_unit": 29,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 2,
      "jaringan_radar": 3,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 30,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 27,
          "helikopter_polisi": 28,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 13,
          "kamera_pengawas": 10,
          "pusat_forensik": 1
        },
        "waktu_respon": 30,
        "kepercayaan_publik": 50 },
    "intelijen": 22,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 17,
      "misi_sabotase": 11,
      "manajemen_wilayah": 10,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 1,
      "sd": 7,
      "smp": 29,
      "sma": 10,
      "universitas": 1,
      "lembaga_pendidikan": 32,
      "laboratorium": 6,
      "observatorium": 39,
      "pusat_penelitian": 6,
      "pusat_pengembangan": 29,
      "literasi": 52,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 33,
      "tempat_tidur_rs": 4839,
      "harapan_hidup": 21,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 15,
      "sirkuit_balap": 39,
      "stadion": 24,
      "stadion_internasional": 28,
      "skor_olimpiade": 16,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 35,
      "kejaksaan": 4,
      "pos_polisi": 1,
      "armada_mobil_polisi": 7557,
      "akademi_polisi": 32,
      "indeks_korupsi": 62,
      "indeks_keamanan": 83
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
      "pendapatan": 132
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 177
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 137
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 137
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 85
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 18 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 52 },
    "lainnya": {
      "tarif": 31,
      "kepuasan": 93,
      "pendapatan": 305
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
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
    "perumahan": 5,
    "komersial": 40,
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
      "kekuatan_lunak": 33,
      "kekuatan_keras": 6,
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
    "kesehatan": 16,
    "pendidikan": 17,
    "keamanan": 19,
    "keuangan": 26,
    "lingkungan": 60
  }
};
